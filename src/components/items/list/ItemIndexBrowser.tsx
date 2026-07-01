"use client";

/**
 * 아이템 목록의 검색어, 작품 필터, 자동완성 상태를 관리합니다.
 */


import Link from "next/link";
import { type ChangeEvent, type ReactNode, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import LocalizedNameList, {
  type LocalizedNameEntry,
} from "@/components/shared/LocalizedNameList";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { ITEM_STYLES } from "@/constants/styles/ui-styles";

export type ItemIndexBrowserItem = {
  categoryLabel: string;
  displayNames: readonly LocalizedNameEntry[];
  dropLocations: string;
  dropRates: string;
  hasInitialOwners: boolean;
  href: string;
  id: string;
  name: string;
  otherLocations: string;
  price: string;
  searchText: string;
  shopLocations: string;
  sourceLabel: string;
};

type ItemIndexBrowserCopy = {
  clearSearchLabel: string;
  entryCountSuffix: string;
  labels: {
    drop: string;
    dropLocations: string;
    dropRate: string;
    initialEquipment: string;
    otherLocations: string;
    price: string;
    shop: string;
    shopLocations: string;
  };
  noResults: string;
  resultCountSuffix: string;
  searchLabel: string;
  searchPlaceholder: string;
};

type ItemIndexBrowserProps = {
  children: ReactNode;
  copy: ItemIndexBrowserCopy;
  items: readonly ItemIndexBrowserItem[];
  panelEyebrow: string;
  panelTitle: string;
};

const ItemIndexBrowser = ({
  children,
  copy,
  items,
  panelEyebrow,
  panelTitle,
}: ItemIndexBrowserProps) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeArchiveSearchText(query);
  const filteredItems = useMemo(() => {
    if (!normalizedQuery) {
      return items;
    }

    return items.filter((item) =>
      item.searchText.includes(normalizedQuery),
    );
  }, [items, normalizedQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className={ITEM_STYLES.browser}>
      <ArchiveIndexSearch
        ariaLabel={copy.searchLabel}
        clearLabel={copy.clearSearchLabel}
        meta={`${filteredItems.length.toLocaleString("ko-KR")}${copy.resultCountSuffix}`}
        placeholder={copy.searchPlaceholder}
        styles={ITEM_STYLES}
        value={query}
        onChange={handleSearchChange}
        onClear={clearSearch}
      />

      {children}

      <section className={ITEM_STYLES.panel}>
        <header className={ITEM_STYLES.panelHeader}>
          <div>
            <p className={ITEM_STYLES.panelMeta}>{panelEyebrow}</p>
            <h2 className={ITEM_STYLES.panelTitle}>{panelTitle}</h2>
          </div>
          <p className={ITEM_STYLES.panelMeta}>
            {filteredItems.length.toLocaleString("ko-KR")}
            {copy.entryCountSuffix}
          </p>
        </header>

        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
          <motion.div
            animate={MOTION_PRESETS.list.animate}
            className={ITEM_STYLES.list}
            exit={MOTION_PRESETS.list.exit}
            initial={MOTION_PRESETS.list.initial}
            key={normalizedQuery || "all-items"}
            transition={MOTION_PRESETS.list.transition}
          >
            {filteredItems.map((item) => (
              <motion.article
                animate={MOTION_PRESETS.listItem.animate}
                className={ITEM_STYLES.card}
                exit={MOTION_PRESETS.listItem.exit}
                initial={MOTION_PRESETS.listItem.initial}
                key={item.id}
                transition={MOTION_PRESETS.listItem.transition}
              >
                <div className={ITEM_STYLES.cardHeader}>
                  <h3 className={ITEM_STYLES.cardName}>
                    <Link className={ITEM_STYLES.cardTitleLink} href={item.href}>
                      {item.name}
                    </Link>
                  </h3>
                  <LocalizedNameList
                    entries={item.displayNames}
                    itemKey={item.id}
                    styles={ITEM_STYLES}
                  />
                  <div className={ITEM_STYLES.chipRow}>
                    <span className={ITEM_STYLES.chip}>
                      {item.categoryLabel}
                    </span>
                    <span className={ITEM_STYLES.chip}>
                      {item.sourceLabel}
                    </span>
                    {item.hasInitialOwners ? (
                      <span className={ITEM_STYLES.chip}>
                        {copy.labels.initialEquipment}
                      </span>
                    ) : null}
                  </div>
                </div>

                <dl className={ITEM_STYLES.ledger}>
                  <div className={ITEM_STYLES.ledgerRow}>
                    <dt className={ITEM_STYLES.ledgerTerm}>
                      {copy.labels.price}
                    </dt>
                    <dd className={ITEM_STYLES.ledgerValue}>
                      {item.price}
                    </dd>
                  </div>
                  <div className={ITEM_STYLES.ledgerRow}>
                    <dt className={ITEM_STYLES.ledgerTerm}>
                      {copy.labels.shopLocations}
                    </dt>
                    <dd className={ITEM_STYLES.ledgerValue}>
                      {item.shopLocations}
                    </dd>
                  </div>
                  <div className={ITEM_STYLES.ledgerRow}>
                    <dt className={ITEM_STYLES.ledgerTerm}>
                      {copy.labels.dropLocations}
                    </dt>
                    <dd className={ITEM_STYLES.ledgerValue}>
                      {item.dropLocations}
                    </dd>
                  </div>
                  <div className={ITEM_STYLES.ledgerRow}>
                    <dt className={ITEM_STYLES.ledgerTerm}>
                      {copy.labels.otherLocations}
                    </dt>
                    <dd className={ITEM_STYLES.ledgerValue}>
                      {item.otherLocations}
                    </dd>
                  </div>
                  <div className={ITEM_STYLES.ledgerRow}>
                    <dt className={ITEM_STYLES.ledgerTerm}>
                      {copy.labels.dropRate}
                    </dt>
                    <dd className={ITEM_STYLES.ledgerValue}>
                      {item.dropRates}
                    </dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </motion.div>
          ) : (
          <motion.p
            animate={MOTION_PRESETS.listItem.animate}
            className={ITEM_STYLES.empty}
            exit={MOTION_PRESETS.listItem.exit}
            initial={MOTION_PRESETS.listItem.initial}
            key="empty-items"
            transition={MOTION_PRESETS.listItem.transition}
          >
            {copy.noResults}
          </motion.p>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ItemIndexBrowser;
