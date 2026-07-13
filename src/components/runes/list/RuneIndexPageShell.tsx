/**
 * 문장 색인 페이지의 검색, 탭, 목록 카드 레이아웃을 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import RuneIndexBrowser from "@/components/runes/list/RuneIndexBrowser";
import { buildRuneBrowserItem } from "@/components/runes/list/rune-browser-records";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
  mapArchiveRecordsSafely,
} from "@/constants/app/data-loading";
import {
  getRuneIndexPage,
  getRuneReferencesByPageId,
  RUNE_ARCHIVE_COPY,
  RUNE_BROWSER_COPY,
  RUNE_INDEX_PAGES,
  type RuneIndexPageId,
} from "@/constants/runes/rune-content";
import {
  APP_SHELL_STYLES,
  RESPONSIVE_SHELL,
  RUNE_STYLES,
} from "@/constants/styles/ui-styles";

type RuneIndexPageShellProps = {
  pageId: RuneIndexPageId;
};

const RuneIndexPageShell = ({ pageId }: RuneIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => RUNE_INDEX_PAGES.find((page) => page.id === pageId) ??
      RUNE_INDEX_PAGES[0],
    label: buildArchiveDataLabel("rune-index-page", pageId),
    load: () => getRuneIndexPage(pageId),
  });

  const runes = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("rune-index-records", pageId),
    load: () => getRuneReferencesByPageId(pageId),
  });

  const browserRunes = mapArchiveRecordsSafely({
    getLabel: (rune) => buildArchiveDataLabel("rune-browser-record", rune.id),
    map: buildRuneBrowserItem,
    records: runes,
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} activeLabel={activePage.title} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={RUNE_STYLES.shell}>
          <ArchivePageIntro
            body={activePage.body}
            eyebrow={activePage.eyebrow}
            styles={RUNE_STYLES}
            title={activePage.title}
          />

          <ArchiveIndexTabs
            activeId={pageId}
            ariaLabel={RUNE_ARCHIVE_COPY.ariaLabels.categoryTabs}
            pages={RUNE_INDEX_PAGES}
            styles={RUNE_STYLES}
          />

          <RuneIndexBrowser copy={RUNE_BROWSER_COPY} runes={browserRunes} />
        </section>
      </div>
    </main>
  );
};

export default RuneIndexPageShell;
