"use client";

/**
 * 라이트/다크 테마 전환 버튼과 저장 상태를 관리합니다.
 */

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { THEME_MODES, THEME_STORAGE_KEY } from "@/constants/app/app-config";
import { BUTTON_STYLES, ICON_STYLES } from "@/constants/styles/ui-styles";
import { ThemeMode, useArchiveUiStore } from "@/stores/archive-ui-store";

type ThemeModeToggleProps = {
  labels: {
    darkLabel: string;
    lightLabel: string;
  };
};

const THEME_MODE_VALUES = Object.values(THEME_MODES);

const isThemeMode = (value: string | null): value is ThemeMode => {
  return THEME_MODE_VALUES.includes(value as ThemeMode);
};

const getSystemThemeMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME_MODES.dark
    : THEME_MODES.light;
};

const getInitialThemeMode = () => {
  const storedThemeMode = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (isThemeMode(storedThemeMode)) {
    return storedThemeMode;
  }

  return getSystemThemeMode();
};

const applyThemeMode = (themeMode: ThemeMode) => {
  document.documentElement.classList.toggle("dark", themeMode === THEME_MODES.dark);
  document.documentElement.setAttribute("data-theme", themeMode);
};

const ThemeModeToggle = ({ labels }: ThemeModeToggleProps) => {
  const themeMode = useArchiveUiStore((state) => state.themeMode);
  const setThemeMode = useArchiveUiStore((state) => state.setThemeMode);
  const isDarkMode = themeMode === THEME_MODES.dark;
  const nextThemeMode = isDarkMode ? THEME_MODES.light : THEME_MODES.dark;
  const label = isDarkMode
    ? labels.lightLabel
    : labels.darkLabel;
  const Icon = isDarkMode ? Sun : Moon;

  useEffect(() => {
    const initialThemeMode = getInitialThemeMode();

    applyThemeMode(initialThemeMode);
    setThemeMode(initialThemeMode);
  }, [setThemeMode]);

  const handleToggle = () => {
    applyThemeMode(nextThemeMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextThemeMode);
    setThemeMode(nextThemeMode);
  };

  return (
    <button
      aria-label={label}
      className={BUTTON_STYLES.themeToggle}
      title={label}
      type="button"
      onClick={handleToggle}
    >
      <Icon aria-hidden="true" className={ICON_STYLES.themeToggle} />
    </button>
  );
};

export default ThemeModeToggle;
