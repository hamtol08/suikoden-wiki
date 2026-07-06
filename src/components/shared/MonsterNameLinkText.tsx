/**
 * 본문 속 몬스터 이름을 작품별 몬스터 도감 앵커 링크로 치환해 렌더링합니다.
 */

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { buildMonsterGamePath } from "@/constants/app/app-config";
import {
  MONSTER_INDEX_RECORDS,
  type MonsterIndexGameId,
} from "@/constants/monsters/monster-content";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type MonsterNameLinkTextProps = {
  preferredGame?: MonsterIndexGameId;
  text: string;
};

type MonsterNameLinkReference = {
  game: MonsterIndexGameId;
  href: string;
  name: string;
};

const MONSTER_LINK_TOKEN_PATTERN = /[0-9A-Za-z가-힣]/;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const isTokenCharacter = (value?: string) => {
  return value ? MONSTER_LINK_TOKEN_PATTERN.test(value) : false;
};

const isDelimitedMonsterName = (
  text: string,
  offset: number,
  match: string,
) => {
  const previous = text[offset - 1];
  const next = text[offset + match.length];

  return !isTokenCharacter(previous) && !isTokenCharacter(next);
};

const buildMonsterReferences = () => {
  const references = new Map<string, MonsterNameLinkReference>();

  MONSTER_INDEX_RECORDS.forEach((monster) => {
    const href =
      monster.detailHref ?? `${buildMonsterGamePath(monster.game)}#${monster.id}`;

    [monster.name, monster.originalName].forEach((name) => {
      if (!name || name.length < 2) {
        return;
      }

      const key = `${monster.game}:${name}`;

      if (!references.has(key)) {
        references.set(key, {
          game: monster.game,
          href,
          name,
        });
      }
    });
  });

  return [...references.values()].toSorted(
    (left, right) => right.name.length - left.name.length,
  );
};

const MONSTER_NAME_REFERENCES = buildMonsterReferences();

const MONSTER_NAME_PATTERN = new RegExp(
  `(${MONSTER_NAME_REFERENCES.map((reference) => escapeRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveMonsterReference = (
  name: string,
  preferredGame?: MonsterIndexGameId,
) => {
  const matches = MONSTER_NAME_REFERENCES.filter((reference) =>
    reference.name === name
  );

  if (matches.length <= 1) {
    return matches[0] ?? null;
  }

  if (preferredGame) {
    return matches.find((reference) => reference.game === preferredGame) ??
      matches[0] ??
      null;
  }

  return matches[0] ?? null;
};

const renderLinkedText = (
  text: string,
  preferredGame?: MonsterIndexGameId,
) => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  text.replace(MONSTER_NAME_PATTERN, (match, _name, offset: number) => {
    if (!isDelimitedMonsterName(text, offset, match)) {
      return match;
    }

    const reference = resolveMonsterReference(match, preferredGame);

    if (!reference) {
      return match;
    }

    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }

    nodes.push(
      <Link className={TEXT_STYLES.characterNameLink} href={reference.href}>
        {match}
      </Link>,
    );
    lastIndex = offset + match.length;

    return match;
  });

  if (nodes.length === 0) {
    return text;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.map((node, index) => (
    <Fragment key={typeof node === "string" ? `${node}-${index}` : index}>
      {node}
    </Fragment>
  ));
};

const MonsterNameLinkText = ({
  preferredGame,
  text,
}: MonsterNameLinkTextProps) => {
  return <>{renderLinkedText(text, preferredGame)}</>;
};

export default MonsterNameLinkText;
