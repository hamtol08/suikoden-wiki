/**
 * 아이템 목록의 검색어, 작품 필터, 자동완성 상태를 관리합니다.
 */

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import LinkedTextParts, {
  type LinkedTextPart,
} from "@/components/shared/LinkedTextParts";
import LocalizedNameList, {
  type LocalizedNameEntry,
} from "@/components/shared/LocalizedNameList";
import { useArchiveSearch } from "@/components/shared/useArchiveSearch";
import {
  formatArchiveCount,
  formatArchiveNumber,
} from "@/constants/app/archive-utils";
import { type ItemIndexGameId } from "@/constants/items/item-content";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { ITEM_STYLES } from "@/constants/styles/ui-styles";

export type ItemIndexBrowserItem = {
  categoryLabel: string;
  displayNames: readonly LocalizedNameEntry[];
  dropLocations: string;
  dropLocationParts: readonly LinkedTextPart[];
  dropRates: string;
  dropRateParts: readonly LinkedTextPart[];
  game: ItemIndexGameId;
  href: string;
  id: string;
  initialOwnerLabel: string | null;
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
    initialPossession: string;
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
  copy: ItemIndexBrowserCopy;
  items: readonly ItemIndexBrowserItem[];
  panelEyebrow: string;
  panelTitle: string;
};

const ItemIndexBrowser = ({
  copy,
  items,
  panelEyebrow,
  panelTitle,
}: ItemIndexBrowserProps) => {
  const {
    clearSearch,
    filteredRecords: filteredItems,
    handleSearchChange,
    normalizedQuery,
    query,
  } = useArchiveSearch(items);

  return (
    <div className={ITEM_STYLES.browser}>
      <ArchiveIndexSearch
        ariaLabel={copy.searchLabel}
        clearLabel={copy.clearSearchLabel}
        meta={formatArchiveCount(filteredItems.length, copy.resultCountSuffix)}
        placeholder={copy.searchPlaceholder}
        styles={ITEM_STYLES}
        value={query}
        onChange={handleSearchChange}
        onClear={clearSearch}
      />

      <section className={ITEM_STYLES.panel}>
        <header className={ITEM_STYLES.panelHeader}>
          <div>
            <p className={ITEM_STYLES.panelMeta}>{panelEyebrow}</p>
            <h2 className={ITEM_STYLES.panelTitle}>{panelTitle}</h2>
          </div>
          <p className={ITEM_STYLES.panelMeta}>
            {formatArchiveNumber(filteredItems.length)}
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
                    {item.initialOwnerLabel ? (
                      <span className={ITEM_STYLES.chip}>
                        {item.initialOwnerLabel}
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
                      <LinkedTextParts parts={item.dropLocationParts} />
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
                      <LinkedTextParts parts={item.dropRateParts} />
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
