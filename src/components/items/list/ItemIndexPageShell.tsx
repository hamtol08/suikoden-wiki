/**
 * 아이템 색인 페이지의 요약 카드, 검색, 목록 레이아웃을 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import ArchiveSummaryGrid from "@/components/shared/ArchiveSummaryGrid";
import ItemIndexBrowser from "@/components/items/list/ItemIndexBrowser";
import { buildItemBrowserItem } from "@/components/items/list/item-browser-records";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
  mapArchiveRecordsSafely,
} from "@/constants/app/data-loading";
import {
  buildItemSummaryItems,
  getItemIndexPage,
  getItemIndexRecordsByGame,
  getItemIndexSummary,
  ITEM_ARCHIVE_COPY,
  ITEM_BROWSER_COPY,
  ITEM_INDEX_PAGES,
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

const ItemIndexPageShell = ({ gameId }: ItemIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => ITEM_INDEX_PAGES.find((page) => page.id === gameId) ??
      ITEM_INDEX_PAGES[0],
    label: buildArchiveDataLabel("item-index-page", gameId),
    load: () => getItemIndexPage(gameId),
  });

  const items = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("item-index-records", gameId),
    load: () => getItemIndexRecordsByGame(gameId),
  });

  const browserItems = mapArchiveRecordsSafely({
    getLabel: (item) => buildArchiveDataLabel("item-browser-record", item.id),
    map: buildItemBrowserItem,
    records: items,
  });

  const summary = loadArchiveJsonSafely({
    fallback: {
      dropCount: 0,
      eyebrow: activePage.eyebrow,
      itemCount: 0,
      shopCount: 0,
      title: activePage.title,
    },
    label: buildArchiveDataLabel("item-index-summary", gameId),
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
