import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import RuneIndexBrowser, {
  type RuneIndexBrowserItem,
} from "@/components/runes/list/RuneIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  formatRuneGames,
  getRuneDisplayImageSrc,
  getRuneIndexPage,
  getRuneReferencesByPageId,
  getRuneFunctionTypeLabel,
  isRuneFallbackImage,
  RUNE_ARCHIVE_COPY,
  RUNE_CATEGORY_LABELS,
  RUNE_INDEX_PAGES,
  type RuneReference,
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

const buildRuneBrowserItem = (rune: RuneReference): RuneIndexBrowserItem => {
  const categoryLabel = RUNE_CATEGORY_LABELS[rune.category];
  const gameLabel = formatRuneGames(rune.games);
  const functionTypeLabel = getRuneFunctionTypeLabel(rune);
  const japaneseName = rune.japaneseName ?? RUNE_ARCHIVE_COPY.unavailableDetail;
  const displayNames = [
    {
      label: RUNE_ARCHIVE_COPY.englishNameLabel,
      value: rune.aliases.join(" / "),
    },
    {
      label: RUNE_ARCHIVE_COPY.japaneseNameLabel,
      value: japaneseName,
    },
  ];

  return {
    categoryLabel,
    displayNames,
    gameLabel,
    href: rune.href,
    id: rune.id,
    imageSrc: getRuneDisplayImageSrc(rune),
    isFallbackImage: isRuneFallbackImage(rune),
    functionTypeLabel,
    name: rune.name,
    searchText: normalizeArchiveSearchText(
      [
        rune.name,
        ...rune.aliases,
        japaneseName,
        categoryLabel,
        functionTypeLabel,
        gameLabel,
      ].join(" "),
    ),
  };
};

const RuneIndexPageShell = ({ pageId }: RuneIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => RUNE_INDEX_PAGES.find((page) => page.id === pageId) ??
      RUNE_INDEX_PAGES[0],
    label: `rune-index-page:${pageId}`,
    load: () => getRuneIndexPage(pageId),
  });

  const runes = loadArchiveJsonSafely({
    fallback: [],
    label: `rune-index-records:${pageId}`,
    load: () => getRuneReferencesByPageId(pageId),
  });

  const browserRunes = runes.flatMap((rune) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `rune-browser-record:${rune.id}`,
      load: () => [buildRuneBrowserItem(rune)],
    }),
  );

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

          <RuneIndexBrowser
            copy={{
              noResults: RUNE_ARCHIVE_COPY.noResults,
              resultCountSuffix: RUNE_ARCHIVE_COPY.resultCountSuffix,
              searchLabel: RUNE_ARCHIVE_COPY.searchLabel,
              searchPlaceholder: RUNE_ARCHIVE_COPY.searchPlaceholder,
            }}
            runes={browserRunes}
          >
            <ArchiveIndexTabs
              activeId={pageId}
              ariaLabel={RUNE_ARCHIVE_COPY.ariaLabels.categoryTabs}
              pages={RUNE_INDEX_PAGES}
              styles={RUNE_STYLES}
            />
          </RuneIndexBrowser>
        </section>
      </div>
    </main>
  );
};

export default RuneIndexPageShell;
