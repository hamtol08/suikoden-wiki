/**
 * 캐릭터 상세 링크에서 쓰는 작품 id와 작품명 매핑을 가벼운 상수로 제공합니다.
 */

export type CharacterGameId = "suikoden-i" | "suikoden-ii";

const CHARACTER_GAME_ID_BY_SERIES_TITLE = new Map<string, CharacterGameId>([
  ["Suikoden I", "suikoden-i"],
  ["Suikoden II", "suikoden-ii"],
]);

export const resolveCharacterGameIdBySeriesTitle = (
  seriesTitle?: string,
): CharacterGameId | undefined => {
  return seriesTitle
    ? CHARACTER_GAME_ID_BY_SERIES_TITLE.get(seriesTitle)
    : undefined;
};
