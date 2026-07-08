/**
 * 아이템 색인 페이지의 요약 카드, 검색, 목록 레이아웃을 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import ArchiveSummaryGrid from "@/components/shared/ArchiveSummaryGrid";
import ItemIndexBrowser, {
  type ItemIndexBrowserItem,
} from "@/components/items/list/ItemIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  buildItemSummaryItems,
  buildItemRecordDisplay,
  getItemJapaneseNames,
  getItemIndexPage,
  getItemIndexRecordsByGame,
  getItemIndexSummary,
  ITEM_ARCHIVE_COPY,
  ITEM_BROWSER_COPY,
  ITEM_CATEGORY_LABELS,
  ITEM_INDEX_PAGES,
  type ItemIndexRecord,
  type ItemIndexGameId,
} from "@/constants/items/item-content";
import {
  APP_SHELL_STYLES,
  ITEM_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type ItemIndexPageShellProps = {
  gameId: ItemIndexGameId;
};

const buildItemBrowserItem = (item: ItemIndexRecord): ItemIndexBrowserItem => {
  const categoryLabel = ITEM_CATEGORY_LABELS[item.category];
  const display = buildItemRecordDisplay(item);
  const japaneseNames = getItemJapaneseNames(item);
  const displayNames = [
    {
      label: ITEM_ARCHIVE_COPY.labels.englishName,
      value: item.originalNames.join(" / "),
    },
    ...(japaneseNames.length > 0 ? japaneseNames : [
      ITEM_ARCHIVE_COPY.unavailableDetail,
    ]).map((name) => ({
      label: ITEM_ARCHIVE_COPY.labels.japaneseName,
      value: name,
    })),
  ];

  return {
    categoryLabel,
    displayNames,
    dropLocations: display.dropLocations,
    dropRates: display.dropRates,
    game: item.game,
    href: item.href,
    id: item.id,
    hasInitialOwners: item.initialOwners.length > 0,
    name: item.name,
    otherLocations: display.otherLocations,
    price: display.price,
    searchText: normalizeArchiveSearchText(
      [
        item.name,
        ...item.originalNames,
        ...japaneseNames,
        categoryLabel,
        display.sourceLabel,
        display.price,
        display.shopLocations,
        display.dropLocations,
        display.otherLocations,
        display.dropRates,
        ...item.initialOwners.map((owner) => owner.name),
        item.initialOwners.length > 0 ?
          ITEM_ARCHIVE_COPY.labels.initialEquipment :
          "",
      ].join(" "),
    ),
    shopLocations: display.shopLocations,
    sourceLabel: display.sourceLabel,
  };
};

const ItemIndexPageShell = ({ gameId }: ItemIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => ITEM_INDEX_PAGES.find((page) => page.id === gameId) ??
      ITEM_INDEX_PAGES[0],
    label: `item-index-page:${gameId}`,
    load: () => getItemIndexPage(gameId),
  });

  const items = loadArchiveJsonSafely({
    fallback: [],
    label: `item-index-records:${gameId}`,
    load: () => getItemIndexRecordsByGame(gameId),
  });

  const browserItems = items.flatMap((item) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `item-browser-record:${item.id}`,
      load: () => [buildItemBrowserItem(item)],
    }),
  );

  const summary = loadArchiveJsonSafely({
    fallback: {
      dropCount: 0,
      eyebrow: activePage.eyebrow,
      itemCount: 0,
      shopCount: 0,
      title: activePage.title,
    },
    label: `item-index-summary:${gameId}`,
    load: () => getItemIndexSummary(gameId),
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ITEM_STYLES.shell}>
          <ArchivePageIntro
            body={ITEM_ARCHIVE_COPY.body}
            eyebrow={ITEM_ARCHIVE_COPY.eyebrow}
            styles={ITEM_STYLES}
            title={ITEM_ARCHIVE_COPY.title}
          />

          <ArchiveIndexTabs
            activeId={gameId}
            ariaLabel={ITEM_ARCHIVE_COPY.tabsAriaLabel}
            pages={ITEM_INDEX_PAGES}
            styles={ITEM_STYLES}
          />

          <ArchiveSummaryGrid
            items={buildItemSummaryItems(summary)}
            styles={ITEM_STYLES}
          />

          <ItemIndexBrowser
            copy={ITEM_BROWSER_COPY}
            items={browserItems}
            panelEyebrow={summary.eyebrow}
            panelTitle={activePage.title}
          />
        </section>
      </div>
    </main>
  );
};

export default ItemIndexPageShell;
