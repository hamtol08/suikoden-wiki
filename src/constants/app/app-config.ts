/**
 * 앱 라우트, DOM ID, 로딩 타이밍, 공통 설정 상수를 정의합니다.
 */

export const APP_LANGUAGE = "ko";

export const ROUTE_ANCHORS = {
  current: "#",
  featured: "#featured",
} as const;

export const APP_ROUTES = {
  articles: "/articles",
  home: "/",
  characters: "/characters",
  gameplay: "/gameplay",
  items: "/items",
  monsters: "/monsters",
  news: "/news",
  runes: "/runes",
  regionAtlas: "/region-atlas",
  timeline: "/timeline",
  navigationFallbackNotFound: "/archive-navigation-timeout",
  worldMap: "/world-map",
} as const;

export const buildCharacterGamePath = (gameId: string) =>
  `${APP_ROUTES.characters}/${gameId}`;

export const buildCharacterDetailPath = (gameId: string, characterId: string) =>
  `${buildCharacterGamePath(gameId)}/${characterId}`;

export const buildItemDetailPath = (itemId: string) =>
  `${APP_ROUTES.items}/${itemId}`;

export const buildItemGamePath = (gameId: string) =>
  `${APP_ROUTES.items}/${gameId}`;

export const buildMonsterGamePath = (gameId: string) =>
  `${APP_ROUTES.monsters}/${gameId}`;

export const buildMonsterBossPath = () => `${APP_ROUTES.monsters}/bosses`;

export const buildMonsterDetailPath = (gameId: string, monsterId: string) =>
  `${buildMonsterGamePath(gameId)}/${monsterId}`;

export const buildGameplayDetailPath = (guideId: string) =>
  `${APP_ROUTES.gameplay}/${guideId}`;

export const buildRuneDetailPath = (runeId: string) =>
  `${APP_ROUTES.runes}/${runeId}`;

export const buildRuneCategoryPath = (categoryId: string) =>
  `${APP_ROUTES.runes}/${categoryId}`;

export const buildRegionAtlasGamePath = (gameId: string) =>
  `${APP_ROUTES.regionAtlas}/${gameId}`;

export const buildRegionAtlasDetailPath = (gameId: string, regionId: string) =>
  `${buildRegionAtlasGamePath(gameId)}/${regionId}`;

export const DOM_IDS = {
  featured: "featured",
} as const;

export const IMAGE_LOADING = {
  eager: "eager",
  lazy: "lazy",
} as const;

export const ARCHIVE_NAVIGATION_EVENT_NAME = "genso-archive-navigation";

export const NAVIGATION_LOADING_TIMING = {
  delayedRevealMs: 200,
  initialProgressPercent: 36,
  fastProgressMs: 650,
  fastProgressTargetPercent: 68,
  minimumVisibleMs: 360,
  fallbackToNotFoundMs: 15000,
  maximumProgressPercent: 96,
  settleDelayMs: 80,
} as const;

export const THEME_STORAGE_KEY = "genso-theme-mode";

export const THEME_MODES = {
  light: "light",
  dark: "dark",
} as const;
