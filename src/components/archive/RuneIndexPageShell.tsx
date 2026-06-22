import ArchiveHeader from "@/components/archive/ArchiveHeader";
import RuneIndexBrowser from "@/components/archive/RuneIndexBrowser";
import {
  getRuneIndexPage,
  getRuneReferencesByPageId,
  RUNE_INDEX_PAGES,
  type RuneIndexPageId,
} from "@/constants/rune-content";
import {
  APP_SHELL_STYLES,
  RESPONSIVE_SHELL,
  RUNE_STYLES,
} from "@/constants/ui-styles";

type RuneIndexPageShellProps = {
  pageId: RuneIndexPageId;
};

const RuneIndexPageShell = ({ pageId }: RuneIndexPageShellProps) => {
  const activePage = getRuneIndexPage(pageId);
  const runes = getRuneReferencesByPageId(pageId);

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} activeLabel={activePage.title} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={RUNE_STYLES.shell}>
          <header className={RUNE_STYLES.intro}>
            <p className={RUNE_STYLES.introEyebrow}>{activePage.eyebrow}</p>
            <h1 className={RUNE_STYLES.introTitle}>{activePage.title}</h1>
            <p className={RUNE_STYLES.introBody}>{activePage.body}</p>
          </header>

          <RuneIndexBrowser
            pageId={pageId}
            pages={RUNE_INDEX_PAGES}
            runes={runes}
          />
        </section>
      </div>
    </main>
  );
};

export default RuneIndexPageShell;
