import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { buildCharacterDetailPath } from "@/constants/app/app-config";
import {
  CHARACTER_DATA_BY_GAME,
  type CharacterGameId,
} from "@/constants/characters/character-content";
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

const CHARACTER_NAME_ALIASES = [
  {
    game: "suikoden-i",
    id: "hero",
    names: ["티르 맥돌"],
  },
  {
    game: "suikoden-i",
    id: "mathiu",
    names: ["맷슈"],
  },
  {
    game: "suikoden-i",
    id: "leon",
    names: ["레온"],
  },
  {
    game: "suikoden-i",
    id: "humphrey",
    names: ["험프리"],
  },
  {
    game: "suikoden-i",
    id: "milich",
    names: ["미르이히"],
  },
  {
    game: "suikoden-i",
    id: "sancho",
    names: ["산쵸"],
  },
  {
    game: "suikoden-i",
    id: "hugo",
    names: ["유고"],
  },
  {
    game: "suikoden-ii",
    id: "hero",
    names: ["리오우"],
  },
  {
    game: "suikoden-ii",
    id: "humphrey",
    names: ["험프리"],
  },
  {
    game: "suikoden-ii",
    id: "hai-yo",
    names: ["하이요"],
  },
  {
    game: "suikoden-ii",
    id: "richmond",
    names: ["리치몬드"],
  },
  {
    game: "suikoden-ii",
    id: "lebrante",
    names: ["레브란트", "르브란테"],
  },
] as const satisfies readonly {
  game: CharacterGameId;
  id: string;
  names: readonly string[];
}[];

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const CHARACTER_LINK_PROTECTED_PHRASES = [
  "노스 윈도우",
  "노스윈도우",
  "사우스 윈도우",
  "사우스윈도우",
  "윈도우 세트",
  "창 세트",
  "신 동맹군",
  "신동맹군",
] as const;

const TOKEN_CHARACTER_PATTERN = /[\p{L}\p{N}]/u;
const KOREAN_POSTPOSITION_PATTERN =
  /^(은|는|이|가|을|를|와|과|의|에게|에서|으로|로|처럼|까지|부터|도|만|보다|랑|하고|께서)/;

const isTokenCharacter = (value?: string) => {
  return value ? TOKEN_CHARACTER_PATTERN.test(value) : false;
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

  return KOREAN_POSTPOSITION_PATTERN.test(text.slice(offset + match.length));
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

    nodes.push(
      <Link
        className={TEXT_STYLES.characterNameLink}
        href={reference.href}
        key={`${reference.href}-${offset}`}
      >
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

const CharacterNameLinkText = ({
  preferredGame,
  text,
}: CharacterNameLinkTextProps) => {
  return <>{renderLinkedText(text, preferredGame)}</>;
};

export default CharacterNameLinkText;
