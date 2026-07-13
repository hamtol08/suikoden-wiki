/**
 * 본문 속 108성 캐릭터 이름을 상세 링크로 치환해 렌더링합니다.
 */

import { type ReactNode } from "react";
import Link from "next/link";
import {
  escapeLinkTextRegExp,
  isDelimitedLinkText,
  wrapLinkedTextNodes,
} from "@/components/shared/link-text-utils";
import {
  type CharacterGameId,
} from "@/constants/characters/character-game-ids";
import { CHARACTER_NAME_LINK_REFERENCES } from "@/constants/characters/character-link-references";
import {
  CHARACTER_LINK_NOWRAP_FOLLOWERS,
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_PROTECTED_PHRASES,
  CHARACTER_LINK_TOKEN_PATTERN,
} from "@/constants/characters/character-linking";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type CharacterNameLinkTextProps = {
  preferredGame?: CharacterGameId;
  text: string;
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

const CHARACTER_NAME_PATTERN = new RegExp(
  `(${CHARACTER_NAME_LINK_REFERENCES.map((reference) => escapeLinkTextRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveCharacterReference = (
  name: string,
  preferredGame?: CharacterGameId,
) => {
  const matches = CHARACTER_NAME_LINK_REFERENCES.filter((reference) =>
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
      !isDelimitedLinkText({
        match,
        offset,
        postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
        text,
        tokenPattern: CHARACTER_LINK_TOKEN_PATTERN,
      }) ||
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

  return wrapLinkedTextNodes(nodes);
};

const CharacterNameLinkText = ({
  preferredGame,
  text,
}: CharacterNameLinkTextProps) => {
  return <>{renderLinkedText(text, preferredGame)}</>;
};

export default CharacterNameLinkText;
