/**
 * 전역 UI 상태를 관리하는 Zustand 스토어를 정의합니다.
 */

import { create } from "zustand";
import { THEME_MODES } from "@/constants/app/app-config";

export type ThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES];

type ArchiveUiState = {
  searchQuery: string;
  themeMode: ThemeMode;
  setSearchQuery: (query: string) => void;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const useArchiveUiStore = create<ArchiveUiState>((set) => ({
  searchQuery: "",
  themeMode: THEME_MODES.light,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setThemeMode: (themeMode) => set({ themeMode }),
}));
