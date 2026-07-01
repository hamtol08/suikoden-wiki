/**
 * 이미지 경로, 이미지 크기, 로딩 관련 에셋 상수를 정의합니다.
 */

export const IMAGE_PATHS = {
  articleCharacters: "/articles/cards/characters-centered.webp",
  articleRunes: "/articles/cards/runes-centered.webp",
  hdRemaster: "/hd-remaster.png",
  logoMark: "/genso-mark.svg",
  suikodenI: "/suikoden-i.webp",
  suikodenII: "/suikoden-ii.webp",
  suikodenRemaster: "/suikoden-i-ii-remaster.webp",
  worldMap: "/genso-world-guide-map-korean.jpg",
} as const;

export const IMAGE_SIZES = {
  logoMark: { width: 44, height: 44 },
} as const;
