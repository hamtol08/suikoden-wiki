/**
 * 통합 검색 페이지의 검색어 상태와 결과 목록 애니메이션을 관리합니다.
 */

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import { type ArchiveSearchResult } from "@/components/layout/ArchiveSearch";
import { useArchiveSearch } from "@/components/shared/useArchiveSearch";
import { formatArchiveCount } from "@/constants/app/archive-utils";
import {
  resolveSearchResultFilterId,
  SEARCH_PAGE_COPY,
  SEARCH_PAGE_FILTERS,
  type SearchPageFilterId,
} from "@/constants/search/search-content";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { SEARCH_PAGE_STYLES } from "@/constants/styles/ui-styles";

type SearchPageBrowserProps = {
  records: readonly ArchiveSearchResult[];
};

const SearchPageBrowser = ({ records }: SearchPageBrowserProps) => {
  const [activeFilter, setActiveFilter] =
    useState<SearchPageFilterId>("all");
  const {
    clearSearch,
    filteredRecords,
    handleSearchChange,
    normalizedQuery,
    query,
  } = useArchiveSearch(records);
  const visibleRecords = useMemo(() => {
    if (activeFilter === "all") {
      return filteredRecords;
    }

    return filteredRecords.filter(
      (record) => resolveSearchResultFilterId(record) === activeFilter,
    );
  }, [activeFilter, filteredRecords]);

  return (
    <section className={SEARCH_PAGE_STYLES.browser}>
      <ArchiveIndexSearch
        ariaLabel={SEARCH_PAGE_COPY.searchLabel}
        clearLabel={SEARCH_PAGE_COPY.clearSearchLabel}
        meta={formatArchiveCount(
          visibleRecords.length,
          SEARCH_PAGE_COPY.resultCountSuffix,
        )}
        placeholder={SEARCH_PAGE_COPY.searchPlaceholder}
        styles={SEARCH_PAGE_STYLES}
        value={query}
        onChange={handleSearchChange}
        onClear={clearSearch}
      />

      <div className={SEARCH_PAGE_STYLES.panel}>
        <header className={SEARCH_PAGE_STYLES.panelHeader}>
          <div>
            <p className={SEARCH_PAGE_STYLES.panelMeta}>
              {SEARCH_PAGE_COPY.sectionEyebrow}
            </p>
            <h2 className={SEARCH_PAGE_STYLES.panelTitle}>
              {SEARCH_PAGE_COPY.sectionTitle}
            </h2>
          </div>
        </header>

        <div
          aria-label={SEARCH_PAGE_COPY.filterAriaLabel}
          className={SEARCH_PAGE_STYLES.filterList}
          role="tablist"
        >
          {SEARCH_PAGE_FILTERS.map((filter) => {
            const isActive = filter.id === activeFilter;

            return (
              <button
                aria-selected={isActive}
                className={
                  isActive
                    ? SEARCH_PAGE_STYLES.filterButtonActive
                    : SEARCH_PAGE_STYLES.filterButton
                }
                key={filter.id}
                role="tab"
                type="button"
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {visibleRecords.length > 0 ? (
            <motion.div
              animate={MOTION_PRESETS.list.animate}
              className={SEARCH_PAGE_STYLES.resultGrid}
              exit={MOTION_PRESETS.list.exit}
              initial={MOTION_PRESETS.list.initial}
              key={`${activeFilter}:${normalizedQuery || "all-search-results"}`}
              transition={MOTION_PRESETS.list.transition}
            >
              {visibleRecords.map((record) => (
                <motion.article
                  animate={MOTION_PRESETS.listItem.animate}
                  className={SEARCH_PAGE_STYLES.resultCard}
                  exit={MOTION_PRESETS.listItem.exit}
                  initial={MOTION_PRESETS.listItem.initial}
                  key={`${record.href}:${record.id}`}
                  transition={MOTION_PRESETS.listItem.transition}
                >
                  <p className={SEARCH_PAGE_STYLES.resultOrder}>{record.order}</p>
                  <h3 className={SEARCH_PAGE_STYLES.resultTitle}>
                    <Link className={SEARCH_PAGE_STYLES.resultLink} href={record.href}>
                      {record.name}
                    </Link>
                  </h3>
                  <p className={SEARCH_PAGE_STYLES.resultMeta}>{record.meta}</p>
                  <Link className={SEARCH_PAGE_STYLES.resultCta} href={record.href}>
                    {SEARCH_PAGE_COPY.resultCta}
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.p
              animate={MOTION_PRESETS.listItem.animate}
              className={SEARCH_PAGE_STYLES.empty}
              exit={MOTION_PRESETS.listItem.exit}
              initial={MOTION_PRESETS.listItem.initial}
              key="empty-search-results"
              transition={MOTION_PRESETS.listItem.transition}
            >
              {SEARCH_PAGE_COPY.noResults}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SearchPageBrowser;
