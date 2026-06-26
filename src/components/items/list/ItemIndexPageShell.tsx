import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import ItemIndexBrowser, {
  type ItemIndexBrowserItem,
} from "@/components/items/list/ItemIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  buildItemRecordDisplay,
  getItemJapaneseNames,
  getItemIndexPage,
  getItemIndexRecordsByGame,
  getItemIndexSummary,
  ITEM_ARCHIVE_COPY,
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

type ItemIndexPageSummary = ReturnType<typeof getItemIndexSummary>;

const summaryItems = (summary: ItemIndexPageSummary) => [
  {
    label: ITEM_ARCHIVE_COPY.summaryTitle,
    value: `${summary.itemCount.toLocaleString("ko-KR")}${ITEM_ARCHIVE_COPY.entryCountSuffix}`,
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.shop,
    value: summary.shopCount.toLocaleString("ko-KR"),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.drop,
    value: summary.dropCount.toLocaleString("ko-KR"),
  },
];

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
    href: item.href,
    id: item.id,
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

          <ItemIndexBrowser
            copy={{
              clearSearchLabel: ITEM_ARCHIVE_COPY.clearSearchLabel,
              entryCountSuffix: ITEM_ARCHIVE_COPY.entryCountSuffix,
              labels: {
                drop: ITEM_ARCHIVE_COPY.labels.drop,
                dropLocations: ITEM_ARCHIVE_COPY.labels.dropLocations,
                dropRate: ITEM_ARCHIVE_COPY.labels.dropRate,
                otherLocations: ITEM_ARCHIVE_COPY.labels.otherLocations,
                price: ITEM_ARCHIVE_COPY.labels.price,
                shop: ITEM_ARCHIVE_COPY.labels.shop,
                shopLocations: ITEM_ARCHIVE_COPY.labels.shopLocations,
              },
              noResults: ITEM_ARCHIVE_COPY.noResults,
              resultCountSuffix: ITEM_ARCHIVE_COPY.resultCountSuffix,
              searchLabel: ITEM_ARCHIVE_COPY.searchLabel,
              searchPlaceholder: ITEM_ARCHIVE_COPY.searchPlaceholder,
            }}
            items={browserItems}
            panelEyebrow={summary.eyebrow}
            panelTitle={activePage.title}
          >
            <ArchiveIndexTabs
              activeId={gameId}
              ariaLabel={ITEM_ARCHIVE_COPY.tabsAriaLabel}
              pages={ITEM_INDEX_PAGES}
              styles={ITEM_STYLES}
            />

            <section className={ITEM_STYLES.summaryGrid}>
              {summaryItems(summary).map((item, index) => {
                const isLeadSummary = index === 0;

                return (
                  <article
                    className={
                      isLeadSummary ?
                        ITEM_STYLES.summaryLeadCard :
                        ITEM_STYLES.summaryCard
                    }
                    key={item.label}
                  >
                    <p className={ITEM_STYLES.summaryLabel}>{item.label}</p>
                    <p className={ITEM_STYLES.summaryValue}>{item.value}</p>
                  </article>
                );
              })}
            </section>
          </ItemIndexBrowser>
        </section>
      </div>
    </main>
  );
};

export default ItemIndexPageShell;
