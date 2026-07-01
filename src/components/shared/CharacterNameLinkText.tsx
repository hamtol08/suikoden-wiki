/**
 * 본문 속 108성 캐릭터 이름을 상세 링크로 치환해 렌더링합니다.
 */

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { buildCharacterDetailPath } from "@/constants/app/app-config";
import {
  CHARACTER_DATA_BY_GAME,
  type CharacterGameId,
} from "@/constants/characters/character-content";
import {
  CHARACTER_LINK_NOWRAP_FOLLOWERS,
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_PROTECTED_PHRASES,
  CHARACTER_LINK_TOKEN_PATTERN,
  CHARACTER_NAME_ALIASES,
} from "@/constants/characters/character-linking";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type CharacterNameLinkTextProps = {
  preferredGame?: CharacterGameId;
  text: string;
};

type CharacterNameLinkReference = {
  game: CharacterGameId;
  href: string;
  name: string;
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const isTokenCharacter = (value?: string) => {
  return value ? CHARACTER_LINK_TOKEN_PATTERN.test(value) : false;
};

const isInsideProtectedPhrase = (text: string, offset: number, match: string) => {
  const matchEnd = offset + match.length;

  return CHARACTER_LINK_PROTECTED_PHRASES.some((phrase) => {
    let phraseOffset = text.indexOf(phrase);

    while (phraseOffset !== -1) {
      const phraseEnd = phraseOffset + phrase.length;

      if (phraseOffset <= offset && matchEnd <= phraseEnd) {
        return true;
      }

      phraseOffset = text.indexOf(phrase, phraseOffset + 1);
    }

    return false;
  });
};

const isDelimitedCharacterName = (
  text: string,
  offset: number,
  match: string,
) => {
  const previous = text[offset - 1];
  const next = text[offset + match.length];

  if (isTokenCharacter(previous)) {
    return false;
  }

  if (!isTokenCharacter(next)) {
    return true;
  }

  return CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN.test(
    text.slice(offset + match.length),
  );
};

const CHARACTER_NAME_REFERENCES: readonly CharacterNameLinkReference[] = [
  ...Object.entries(CHARACTER_DATA_BY_GAME).flatMap(([game, characters]) =>
    characters.map((character) => ({
      game: game as CharacterGameId,
      href: buildCharacterDetailPath(game, character.id),
      name: character.name,
    })),
  ),
  ...CHARACTER_NAME_ALIASES.flatMap((alias) =>
    alias.names.map((name) => ({
      game: alias.game,
      href: buildCharacterDetailPath(alias.game, alias.id),
      name,
    })),
  ),
]
  .toSorted((left, right) => right.name.length - left.name.length);

const CHARACTER_NAME_PATTERN = new RegExp(
  `(${CHARACTER_NAME_REFERENCES.map((reference) => escapeRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveCharacterReference = (
  name: string,
  preferredGame?: CharacterGameId,
) => {
  const matches = CHARACTER_NAME_REFERENCES.filter((reference) =>
    reference.name === name
  );

  if (matches.length <= 1) {
    return matches[0] ?? null;
  }

  if (preferredGame) {
    return matches.find((reference) => reference.game === preferredGame) ?? null;
  }

  return null;
};

const renderLinkedText = (
  text: string,
  preferredGame?: CharacterGameId,
) => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  text.replace(CHARACTER_NAME_PATTERN, (match, _name, offset: number) => {
    if (
      !isDelimitedCharacterName(text, offset, match) ||
      isInsideProtectedPhrase(text, offset, match)
    ) {
      return match;
    }

    const reference = resolveCharacterReference(match, preferredGame);

    if (!reference) {
      return match;
    }

    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }

    const follower =
      CHARACTER_LINK_NOWRAP_FOLLOWERS.find((value) =>
        text.startsWith(value, offset + match.length)
      ) ?? "";

    nodes.push(
      follower ? (
        <span className={TEXT_STYLES.characterNameLinkPhrase}>
          <Link className={TEXT_STYLES.characterNameLink} href={reference.href}>
            {match}
          </Link>
          {follower}
        </span>
      ) : (
        <Link className={TEXT_STYLES.characterNameLink} href={reference.href}>
          {match}
        </Link>
      ),
    );
    lastIndex = offset + match.length + follower.length;

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

const CharacterNameLinkText = ({
  preferredGame,
  text,
}: CharacterNameLinkTextProps) => {
  return <>{renderLinkedText(text, preferredGame)}</>;
};

export default CharacterNameLinkText;
