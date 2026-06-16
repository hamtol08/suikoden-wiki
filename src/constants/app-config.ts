export const APP_LANGUAGE = "ko";

export const ROUTE_ANCHORS = {
  current: "#",
  featured: "#featured",
} as const;

export const APP_ROUTES = {
  home: "/",
  regionAtlas: "/region-atlas",
  worldMap: "/world-map",
} as const;

export const buildRegionAtlasGamePath = (gameId: string) =>
  `${APP_ROUTES.regionAtlas}/${gameId}`;

export const DOM_IDS = {
  featured: "featured",
} as const;

export const IMAGE_LOADING = {
  eager: "eager",
  lazy: "lazy",
} as const;

export const THEME_STORAGE_KEY = "genso-theme-mode";

export const THEME_MODES = {
  light: "light",
  dark: "dark",
} as const;
