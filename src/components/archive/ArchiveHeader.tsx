"use client";

import { type PointerEvent, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import ArchiveSearch from "@/components/archive/ArchiveSearch";
import ThemeModeToggle from "@/components/archive/ThemeModeToggle";
import { APP_ROUTES, IMAGE_LOADING, ROUTE_ANCHORS } from "@/constants/app-config";
import {
  ARCHIVE_COPY,
  IMAGE_PATHS,
  IMAGE_SIZES,
  NAV_GROUPS,
} from "@/constants/archive-content";
import { MOTION_PRESETS } from "@/constants/motion-styles";
import {
  CONTAINER_STYLES,
  HEADER_STYLES,
  ICON_STYLES,
  RESPONSIVE_SHELL,
  TEXT_STYLES,
} from "@/constants/ui-styles";

type ArchiveHeaderProps = {
  activeHref?: string;
  activeLabel?: string | null;
};

const ArchiveHeader = ({
  activeHref = APP_ROUTES.home,
  activeLabel,
}: ArchiveHeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);

  const activeGroupLabel = useMemo(() => {
    const activeGroup = NAV_GROUPS.find((group) => {
      const groupHrefMatches = group.href === activeHref;
      const itemMatches = group.items.some((item) => {
        const hrefMatches =
          item.href !== ROUTE_ANCHORS.current && item.href === activeHref;
        const labelMatches = activeLabel ? item.label === activeLabel : false;

        return hrefMatches || labelMatches;
      });

      return groupHrefMatches || itemMatches;
    });

    return activeGroup?.label ?? null;
  }, [activeHref, activeLabel]);

  const [openDrawerGroup, setOpenDrawerGroup] = useState<string | null>(
    activeGroupLabel,
  );

  const selectedDesktopGroup = NAV_GROUPS.find(
    (group) => group.label === openDesktopGroup,
  );

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setOpenDrawerGroup(activeGroupLabel);
    setIsDrawerOpen(true);
  };

  const closeDrawerFromBackdrop = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeDrawer();
    }
  };

  const toggleDesktopGroup = (label: string) => {
    setOpenDesktopGroup((currentLabel) =>
      currentLabel === label ? null : label,
    );
  };

  const toggleDrawerGroup = (label: string) => {
    setOpenDrawerGroup((currentLabel) =>
      currentLabel === label ? null : label,
    );
  };

  const isItemActive = (item: { href: string; label: string }) => {
    const hrefMatches =
      item.href !== ROUTE_ANCHORS.current && item.href === activeHref;
    const labelMatches = activeLabel ? item.label === activeLabel : false;

    return hrefMatches || labelMatches;
  };

  return (
    <>
      <header className={CONTAINER_STYLES.header}>
        <div className={RESPONSIVE_SHELL.headerInner}>
          <a className={HEADER_STYLES.logoLink} href={APP_ROUTES.home}>
            <Image
              src={IMAGE_PATHS.logoMark}
              alt={ARCHIVE_COPY.header.logoAlt}
              width={IMAGE_SIZES.logoMark.width}
              height={IMAGE_SIZES.logoMark.height}
              loading={IMAGE_LOADING.eager}
              className={HEADER_STYLES.logoMark}
            />
            <span className={HEADER_STYLES.logoTextGroup}>
              <span className={HEADER_STYLES.logoTitle}>
                {ARCHIVE_COPY.header.brandName}
              </span>
              <span className={HEADER_STYLES.logoKicker}>
                {ARCHIVE_COPY.header.brandKicker}
              </span>
            </span>
          </a>

          <nav className={HEADER_STYLES.nav}>
            {NAV_GROUPS.map((group) => {
              const isOpen = openDesktopGroup === group.label;
              const isActive = activeGroupLabel === group.label;
              const isSelected = openDesktopGroup ? isOpen : isActive;

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
            <ThemeModeToggle />
            <ArchiveSearch />
            <button
              aria-expanded={isDrawerOpen}
              aria-label={ARCHIVE_COPY.header.menuLabel}
              className={HEADER_STYLES.menuButton}
              type="button"
              onClick={openDrawer}
            >
              <Menu aria-hidden="true" className={ICON_STYLES.themeToggle} />
            </button>
          </div>

          <div className={HEADER_STYLES.mobileSearch}>
            <ArchiveSearch variant="header" />
          </div>
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
                  onClick={() => setOpenDesktopGroup(null)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <AnimatePresence>
        {isDrawerOpen ? (
          <motion.div
            animate={MOTION_PRESETS.drawerOverlay.animate}
            className={HEADER_STYLES.drawerOverlay}
            exit={MOTION_PRESETS.drawerOverlay.exit}
            initial={MOTION_PRESETS.drawerOverlay.initial}
            transition={MOTION_PRESETS.drawerOverlay.transition}
            onPointerDown={closeDrawerFromBackdrop}
          >
            <motion.aside
              animate={MOTION_PRESETS.drawerPanel.animate}
              aria-label={ARCHIVE_COPY.header.menuLabel}
              className={HEADER_STYLES.drawerPanel}
              exit={MOTION_PRESETS.drawerPanel.exit}
              initial={MOTION_PRESETS.drawerPanel.initial}
              transition={MOTION_PRESETS.drawerPanel.transition}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={HEADER_STYLES.drawerHeader}>
                <div>
                  <p className={HEADER_STYLES.drawerTitle}>
                    {ARCHIVE_COPY.sidebar.title}
                  </p>
                  <p className={TEXT_STYLES.sidebarMuted}>
                    {ARCHIVE_COPY.sidebar.subtitle}
                  </p>
                </div>
                <button
                  aria-label={ARCHIVE_COPY.header.closeMenuLabel}
                  className={HEADER_STYLES.drawerClose}
                  type="button"
                  onClick={closeDrawer}
                >
                  <X aria-hidden="true" className={ICON_STYLES.themeToggle} />
                </button>
              </div>

              <section className={HEADER_STYLES.drawerSection}>
                <nav className={HEADER_STYLES.drawerNav}>
                  {NAV_GROUPS.map((group) => {
                    const isOpen = openDrawerGroup === group.label;
                    const isActive = activeGroupLabel === group.label;
                    const isSelected = openDrawerGroup ? isOpen : isActive;

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
    </>
  );
};

export default ArchiveHeader;
