/**
 * 라이트/다크 테마에서 재사용하는 Tailwind 클래스 묶음을 정의합니다.
 */

export const THEME_CLASSES = {
  page: "bg-[#f6f1e8] text-[#101827] dark:bg-[#0a1421] dark:text-[#f4f1ea]",
  header:
    "border-[#d8c9a5] bg-[#f8f4ec]/90 dark:border-[#604403] dark:bg-[#111c2c]/90",
  panel: "border-[#d8c9a5] bg-white dark:border-[#604403] dark:bg-[#172337]",
  navyPanel: "border-[#c7d3e9] bg-[#131b2e] text-white dark:border-[#38475f]",
  mutedText: "text-[#4b5565] dark:text-[#c5c6cd]",
} as const;

export const THEME_META_COLORS = {
  safeAreaLight: "#f8f4ec",
  safeAreaDark: "#09111d",
} as const;

export const WORLD_STAGE_MARKER_COLORS = {
  activeFill: "#ef1f2d",
  activeGlint: "#ffffff",
  activeCore: "#fff7f0",
} as const;
