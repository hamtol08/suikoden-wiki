"use client";

/**
 * 문장 목록의 검색어와 자동완성 상태를 관리합니다.
 */


import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import LocalizedNameList, {
  type LocalizedNameEntry,
} from "@/components/shared/LocalizedNameList";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { RUNE_STYLES } from "@/constants/styles/ui-styles";

export type RuneIndexBrowserItem = {
  categoryLabel: string;
  displayNames: readonly LocalizedNameEntry[];
  gameLabel: string;
  href: string;
  id: string;
  imageSrc: string;
  isFallbackImage: boolean;
  functionTypeLabel: string;
  name: string;
  searchText: string;
};

type RuneIndexBrowserCopy = {
  noResults: string;
  resultCountSuffix: string;
  searchLabel: string;
  searchPlaceholder: string;
};

type RuneIndexBrowserProps = {
  children: ReactNode;
  copy: RuneIndexBrowserCopy;
  runes: readonly RuneIndexBrowserItem[];
};

const RuneIndexBrowser = ({
  children,
  copy,
  runes,
}: RuneIndexBrowserProps) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeArchiveSearchText(query);
  const filteredRunes = useMemo(() => {
    if (!normalizedQuery) {
      return runes;
    }

    return runes.filter((rune) => rune.searchText.includes(normalizedQuery));
  }, [normalizedQuery, runes]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={RUNE_STYLES.browser}>
      <ArchiveIndexSearch
        ariaLabel={copy.searchLabel}
        meta={`${filteredRunes.length.toLocaleString("ko-KR")}${copy.resultCountSuffix}`}
        placeholder={copy.searchPlaceholder}
        styles={RUNE_STYLES}
        value={query}
        onChange={handleSearchChange}
      />

      {children}

      <AnimatePresence mode="wait">
        {filteredRunes.length > 0 ? (
        <motion.div
          animate={MOTION_PRESETS.list.animate}
          className={RUNE_STYLES.grid}
          exit={MOTION_PRESETS.list.exit}
          initial={MOTION_PRESETS.list.initial}
          key={normalizedQuery || "all-runes"}
          transition={MOTION_PRESETS.list.transition}
        >
          {filteredRunes.map((rune) => (
              <motion.div
                animate={MOTION_PRESETS.listItem.animate}
                exit={MOTION_PRESETS.listItem.exit}
                initial={MOTION_PRESETS.listItem.initial}
                key={rune.id}
                transition={MOTION_PRESETS.listItem.transition}
              >
                <Link className={RUNE_STYLES.card} href={rune.href}>
                <div className={RUNE_STYLES.cardImageWrap}>
                  <Image
                    alt={rune.name}
                    className={
                      rune.isFallbackImage ?
                        RUNE_STYLES.cardFallbackImage :
                        RUNE_STYLES.cardImage
                    }
                    height={160}
                    src={rune.imageSrc}
                    unoptimized={rune.imageSrc.endsWith(".svg")}
                    width={220}
                  />
                </div>
                <div className={RUNE_STYLES.cardContent}>
                  <p className={RUNE_STYLES.cardMeta}>
                    {rune.categoryLabel}
                  </p>
                  <h2 className={RUNE_STYLES.cardTitle}>{rune.name}</h2>
                  <LocalizedNameList
                    entries={rune.displayNames}
                    itemKey={rune.id}
                    styles={RUNE_STYLES}
                  />
                  <p className={RUNE_STYLES.cardGames}>
                    {rune.gameLabel}
                  </p>
                  <div className={RUNE_STYLES.cardBadgeRow}>
                    <span className={RUNE_STYLES.cardFunctionBadge}>
                      {rune.functionTypeLabel}
                    </span>
                  </div>
                </div>
                </Link>
              </motion.div>
          ))}
        </motion.div>
        ) : (
        <motion.p
          animate={MOTION_PRESETS.listItem.animate}
          className={RUNE_STYLES.empty}
          exit={MOTION_PRESETS.listItem.exit}
          initial={MOTION_PRESETS.listItem.initial}
          key="empty-runes"
          transition={MOTION_PRESETS.listItem.transition}
        >
          {copy.noResults}
        </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RuneIndexBrowser;
