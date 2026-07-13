/**
 * 캐릭터 이름을 상세 페이지 경로와 연결하는 링크 매핑을 정의합니다.
 */

import { type CharacterGameId } from "@/constants/characters/character-game-ids";

export const CHARACTER_NAME_ALIASES = [
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

export const CHARACTER_LINK_PROTECTED_PHRASES = [
  "노스 윈도우",
  "노스윈도우",
  "사우스 윈도우",
  "사우스윈도우",
  "윈도우 세트",
  "창 세트",
  "신 동맹군",
  "신동맹군",
] as const;

export const CHARACTER_LINK_NOWRAP_FOLLOWERS = [" 일행"] as const;

export const CHARACTER_LINK_TOKEN_PATTERN = /[\p{L}\p{N}]/u;

export const CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN =
  /^(은|는|이|가|을|를|와|과|의|에게|에서|으로|로|처럼|까지|부터|도|만|보다|랑|하고|께서)/;
