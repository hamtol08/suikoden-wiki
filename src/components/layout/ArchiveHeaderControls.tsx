"use client";

/**
 * 헤더 내비게이션, 모바일 드로어, 검색, 테마 버튼의 클라이언트 상호작용을 관리합니다.
 */

import { useEffect, useReducer } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import ArchiveSearch, {
  type CharacterSearchResult,
} from "@/components/layout/ArchiveSearch";
import ThemeModeToggle from "@/components/layout/ThemeModeToggle";
import { ROUTE_ANCHORS } from "@/constants/app/app-config";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import {
  HEADER_STYLES,
  ICON_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

type ArchiveHeaderControlsProps = {
  activeGroupLabel: string | null;
  activeHref: string;
  activeLabel?: string | null;
  copy: ArchiveHeaderControlsCopy;
  navigationGroups: readonly ArchiveNavigationGroup[];
  searchIndex: readonly CharacterSearchResult[];
};

type ArchiveHeaderControlsCopy = {
  header: {
    clearSearchLabel: string;
    closeMenuLabel: string;
    menuLabel: string;
    searchButton: string;
    searchEmpty: string;
    searchLabel: string;
    searchPlaceholder: string;
    themeToggle: {
      darkLabel: string;
      lightLabel: string;
    };
  };
  sidebar: {
    subtitle: string;
    title: string;
  };
};

type ArchiveNavigationItem = {
  href: string;
  label: string;
};

type ArchiveNavigationGroup = {
  href: string;
  items: readonly ArchiveNavigationItem[];
  label: string;
};

type HeaderControlsState = {
  isDrawerOpen: boolean;
  openDesktopGroup: string | null;
  openDrawerGroup: string | null;
};

type HeaderControlsAction =
  | { type: "closeDesktopGroup" }
  | { type: "closeDrawer" }
  | { activeGroupLabel: string | null; type: "openDrawer" }
  | { label: string; type: "toggleDesktopGroup" }
  | { label: string; type: "toggleDrawerGroup" };

const createHeaderControlsInitialState = (
  activeGroupLabel: string | null,
): HeaderControlsState => ({
  isDrawerOpen: false,
  openDesktopGroup: null,
  openDrawerGroup: activeGroupLabel,
});

const headerControlsReducer = (
  state: HeaderControlsState,
  action: HeaderControlsAction,
): HeaderControlsState => {
  switch (action.type) {
    case "closeDesktopGroup":
      return { ...state, openDesktopGroup: null };
    case "closeDrawer":
      return { ...state, isDrawerOpen: false };
    case "openDrawer":
      return {
        ...state,
        isDrawerOpen: true,
        openDrawerGroup: action.activeGroupLabel,
      };
    case "toggleDesktopGroup":
      return {
        ...state,
        openDesktopGroup:
          state.openDesktopGroup === action.label ? null : action.label,
      };
    case "toggleDrawerGroup":
      return {
        ...state,
        openDrawerGroup:
          state.openDrawerGroup === action.label ? null : action.label,
      };
    default:
      return state;
  }
};

const ArchiveHeaderControls = ({
  activeGroupLabel,
  activeHref,
  activeLabel,
  copy,
  navigationGroups,
  searchIndex,
}: ArchiveHeaderControlsProps) => {
  const [state, dispatch] = useReducer(
    headerControlsReducer,
    activeGroupLabel,
    createHeaderControlsInitialState,
  );

  const selectedDesktopGroup = navigationGroups.find(
    (group) => group.label === state.openDesktopGroup,
  );

  const closeDrawer = () => {
    dispatch({ type: "closeDrawer" });
  };

  const openDrawer = () => {
    dispatch({ activeGroupLabel, type: "openDrawer" });
  };

  const toggleDesktopGroup = (label: string) => {
    dispatch({ label, type: "toggleDesktopGroup" });
  };

  const toggleDrawerGroup = (label: string) => {
    dispatch({ label, type: "toggleDrawerGroup" });
  };

  const isItemActive = (item: { href: string; label: string }) => {
    const hrefMatches =
      item.href !== ROUTE_ANCHORS.current && item.href === activeHref;
    const labelMatches = activeLabel ? item.label === activeLabel : false;

    return hrefMatches || labelMatches;
  };

  useEffect(() => {
    if (!state.isDrawerOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [state.isDrawerOpen]);

  const drawer = (
    <AnimatePresence>
      {state.isDrawerOpen ? (
        <motion.div
          animate={MOTION_PRESETS.drawerOverlay.animate}
          className={HEADER_STYLES.drawerOverlay}
          exit={MOTION_PRESETS.drawerOverlay.exit}
          initial={MOTION_PRESETS.drawerOverlay.initial}
          transition={MOTION_PRESETS.drawerOverlay.transition}
          onPointerDown={closeDrawer}
        >
          <motion.aside
            animate={MOTION_PRESETS.drawerPanel.animate}
            aria-label={copy.header.menuLabel}
            className={HEADER_STYLES.drawerPanel}
            exit={MOTION_PRESETS.drawerPanel.exit}
            initial={MOTION_PRESETS.drawerPanel.initial}
            transition={MOTION_PRESETS.drawerPanel.transition}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className={HEADER_STYLES.drawerHeader}>
              <div>
                <p className={HEADER_STYLES.drawerTitle}>
                  {copy.sidebar.title}
                </p>
                <p className={TEXT_STYLES.sidebarMuted}>
                  {copy.sidebar.subtitle}
                </p>
              </div>
              <button
                aria-label={copy.header.closeMenuLabel}
                className={HEADER_STYLES.drawerClose}
                type="button"
                onClick={closeDrawer}
              >
                <X aria-hidden="true" className={ICON_STYLES.themeToggle} />
              </button>
            </div>

            <section className={HEADER_STYLES.drawerSection}>
              <nav className={HEADER_STYLES.drawerNav}>
                {navigationGroups.map((group) => {
                  const isOpen = state.openDrawerGroup === group.label;
                  const isActive = activeGroupLabel === group.label;
                  const isSelected = state.openDrawerGroup ? isOpen : isActive;

                  return (
                    <div className={HEADER_STYLES.drawerGroup} key={group.label}>
                      <button
                        aria-expanded={isOpen}
                        className={
                          isSelected
                            ? HEADER_STYLES.drawerGroupButtonActive
                            : HEADER_STYLES.drawerGroupButton
                        }
                        type="button"
                        onClick={() => toggleDrawerGroup(group.label)}
                      >
                        <span>{group.label}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={
                            isOpen
                              ? HEADER_STYLES.navChevronOpen
                              : HEADER_STYLES.navChevron
                          }
                        />
                      </button>

                      {isOpen ? (
                        <div className={HEADER_STYLES.drawerGroupItems}>
                          {group.items.map((item) => (
                            <a
                              className={
                                isItemActive(item)
                                  ? HEADER_STYLES.drawerLinkActive
                                  : HEADER_STYLES.drawerLink
                              }
                              href={item.href}
                              key={item.label}
                              onClick={closeDrawer}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>
            </section>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <nav className={HEADER_STYLES.nav}>
        {navigationGroups.map((group) => {
          const isOpen = state.openDesktopGroup === group.label;
          const isActive = activeGroupLabel === group.label;
          const isSelected = state.openDesktopGroup ? isOpen : isActive;

          return (
            <button
              aria-expanded={isOpen}
              className={
                isSelected
                  ? HEADER_STYLES.navGroupButtonActive
                  : HEADER_STYLES.navGroupButton
              }
              key={group.label}
              type="button"
              onClick={() => toggleDesktopGroup(group.label)}
            >
              {group.label}
              <ChevronDown
                aria-hidden="true"
                className={
                  isOpen
                    ? HEADER_STYLES.navChevronOpen
                    : HEADER_STYLES.navChevron
                }
              />
            </button>
          );
        })}
      </nav>

      <div className={HEADER_STYLES.actions}>
        <ThemeModeToggle labels={copy.header.themeToggle} />
        <ArchiveSearch copy={copy.header} searchIndex={searchIndex} />
        <button
          aria-expanded={state.isDrawerOpen}
          aria-label={copy.header.menuLabel}
          className={HEADER_STYLES.menuButton}
          type="button"
          onClick={openDrawer}
        >
          <Menu aria-hidden="true" className={ICON_STYLES.themeToggle} />
        </button>
      </div>

      <div className={HEADER_STYLES.mobileSearch}>
        <ArchiveSearch
          copy={copy.header}
          searchIndex={searchIndex}
          variant="header"
        />
      </div>

      {selectedDesktopGroup ? (
        <div className={HEADER_STYLES.dropdown}>
          <div className={HEADER_STYLES.dropdownInner}>
            <p className={HEADER_STYLES.dropdownTitle}>
              {selectedDesktopGroup.label}
            </p>
            {selectedDesktopGroup.items.map((item) => (
              <a
                className={
                  isItemActive(item)
                    ? HEADER_STYLES.dropdownLinkActive
                    : HEADER_STYLES.dropdownLink
                }
                href={item.href}
                key={item.label}
                onClick={() => dispatch({ type: "closeDesktopGroup" })}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {typeof document === "undefined"
        ? null
        : createPortal(drawer, document.body)}
    </>
  );
};

export default ArchiveHeaderControls;
