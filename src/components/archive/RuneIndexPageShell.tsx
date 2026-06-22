import Link from "next/link";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import {
  getRuneIndexPage,
  getRuneReferencesByPageId,
  RUNE_CATEGORY_LABELS,
  RUNE_ARCHIVE_COPY,
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

          <nav
            aria-label={RUNE_ARCHIVE_COPY.ariaLabels.categoryTabs}
            className={RUNE_STYLES.tabs}
          >
            {RUNE_INDEX_PAGES.map((page) => (
              <Link
                className={
                  page.id === pageId ? RUNE_STYLES.tabActive : RUNE_STYLES.tab
                }
                href={page.href}
                key={page.id}
              >
                {page.title}
              </Link>
            ))}
          </nav>

          <div className={RUNE_STYLES.grid}>
            {runes.map((rune) => (
              <Link className={RUNE_STYLES.card} href={rune.href} key={rune.id}>
                <p className={RUNE_STYLES.cardMeta}>
                  {RUNE_CATEGORY_LABELS[rune.category]}
                </p>
                <h2 className={RUNE_STYLES.cardTitle}>{rune.name}</h2>
                <p className={RUNE_STYLES.cardBody}>
                  {rune.aliases.join(" / ")}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default RuneIndexPageShell;
