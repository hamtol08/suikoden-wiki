/**
 * 본문 이름 링크 치환에 필요한 캐릭터 이름과 상세 경로만 가볍게 구성합니다.
 */

import { buildCharacterDetailPath } from "@/constants/app/app-config";
import { CHARACTER_NAME_ALIASES } from "@/constants/characters/character-linking";
import { type CharacterGameId } from "@/constants/characters/character-game-ids";
import { SUIKODEN_I_CHARACTER_LOCALIZATION } from "@/constants/characters/suikoden-i-character-localization";
import { SUIKODEN_II_CHARACTER_LOCALIZATION } from "@/constants/characters/suikoden-ii-character-localization";

export type CharacterNameLinkReference = {
  game: CharacterGameId;
  href: string;
  name: string;
};

const buildCharacterNameReferencesByGame = (
  game: CharacterGameId,
  localizations: Record<string, { name: string }>,
) =>
  Object.entries(localizations).map(([id, character]) => ({
    game,
    href: buildCharacterDetailPath(game, id),
    name: character.name,
  }));

export const CHARACTER_NAME_LINK_REFERENCES: readonly CharacterNameLinkReference[] = [
  ...buildCharacterNameReferencesByGame(
    "suikoden-i",
    SUIKODEN_I_CHARACTER_LOCALIZATION,
  ),
  ...buildCharacterNameReferencesByGame(
    "suikoden-ii",
    SUIKODEN_II_CHARACTER_LOCALIZATION,
  ),
  ...CHARACTER_NAME_ALIASES.flatMap((alias) =>
    alias.names.map((name) => ({
      game: alias.game,
      href: buildCharacterDetailPath(alias.game, alias.id),
      name,
    })),
  ),
].toSorted((left, right) => right.name.length - left.name.length);
