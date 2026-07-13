/**
 * 본문 속 몬스터 이름을 작품별 몬스터 도감 앵커 링크로 치환해 렌더링합니다.
 */

import {
  escapeLinkTextRegExp,
  renderLinkedReferenceText,
} from "@/components/shared/link-text-utils";
import { buildMonsterGamePath } from "@/constants/app/app-config";
import {
  MONSTER_INDEX_RECORDS,
  type MonsterIndexGameId,
} from "@/constants/monsters/monster-content";
import {
  MONSTER_NAME_TRANSLATIONS as REGION_MONSTER_NAME_TRANSLATIONS,
} from "@/constants/regions/region-detail-content";
import {
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_TOKEN_PATTERN,
} from "@/constants/characters/character-linking";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type MonsterNameLinkTextProps = {
  linkClassName?: string;
  preferredGame?: MonsterIndexGameId;
  text: string;
};

type MonsterNameLinkReference = {
  game: MonsterIndexGameId;
  href: string;
  name: string;
};

const buildMonsterReferences = () => {
  const references = new Map<string, MonsterNameLinkReference>();

  MONSTER_INDEX_RECORDS.forEach((monster) => {
    const href =
      monster.detailHref ?? `${buildMonsterGamePath(monster.game)}#${monster.id}`;
    const regionLocalizedName =
      REGION_MONSTER_NAME_TRANSLATIONS[
        monster.originalName as keyof typeof REGION_MONSTER_NAME_TRANSLATIONS
      ];

    [
      monster.name,
      monster.originalName,
      monster.japaneseName,
      regionLocalizedName,
    ].forEach((name) => {
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
  `(${MONSTER_NAME_REFERENCES.map((reference) => escapeLinkTextRegExp(reference.name)).join("|")})`,
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
  linkClassName: string = TEXT_STYLES.characterNameLink,
  preferredGame?: MonsterIndexGameId,
) => {
  return renderLinkedReferenceText({
    linkClassName,
    pattern: MONSTER_NAME_PATTERN,
    postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
    resolveReference: (match) => resolveMonsterReference(match, preferredGame),
    text,
    tokenPattern: CHARACTER_LINK_TOKEN_PATTERN,
  });
};

const MonsterNameLinkText = ({
  linkClassName,
  preferredGame,
  text,
}: MonsterNameLinkTextProps) => {
  return <>{renderLinkedText(text, linkClassName, preferredGame)}</>;
};

export default MonsterNameLinkText;
