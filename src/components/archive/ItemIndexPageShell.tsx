import Link from "next/link";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import {
  formatItemDropRates,
  formatItemDropLocations,
  formatItemOtherLocations,
  formatItemPrice,
  formatItemShopLocations,
  formatItemSources,
  getItemIndexPage,
  getItemIndexRecordsByGame,
  getItemIndexSummary,
  ITEM_ARCHIVE_COPY,
  ITEM_CATEGORY_LABELS,
  ITEM_INDEX_PAGES,
  type ItemIndexGameId,
} from "@/constants/item-content";
import {
  APP_SHELL_STYLES,
  ITEM_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

type ItemIndexPageShellProps = {
  gameId: ItemIndexGameId;
};

const summaryItems = (
  summary: ReturnType<typeof getItemIndexSummary>,
) => [
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

const ItemIndexPageShell = ({ gameId }: ItemIndexPageShellProps) => {
  const activePage = getItemIndexPage(gameId);
  const items = getItemIndexRecordsByGame(gameId);
  const summary = getItemIndexSummary(gameId);

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ITEM_STYLES.shell}>
          <header className={ITEM_STYLES.intro}>
            <p className={ITEM_STYLES.introEyebrow}>{ITEM_ARCHIVE_COPY.eyebrow}</p>
            <h1 className={ITEM_STYLES.introTitle}>{ITEM_ARCHIVE_COPY.title}</h1>
            <p className={ITEM_STYLES.introBody}>{ITEM_ARCHIVE_COPY.body}</p>
          </header>

          <nav
            aria-label={ITEM_ARCHIVE_COPY.tabsAriaLabel}
            className={ITEM_STYLES.tabs}
          >
            {ITEM_INDEX_PAGES.map((page) => (
              <Link
                className={
                  page.id === gameId ? ITEM_STYLES.tabActive : ITEM_STYLES.tab
                }
                href={page.href}
                key={page.id}
              >
                {page.title}
              </Link>
            ))}
          </nav>

          <section className={ITEM_STYLES.summaryGrid}>
            {summaryItems(summary).map((item) => (
              <article className={ITEM_STYLES.summaryCard} key={item.label}>
                <p className={ITEM_STYLES.summaryLabel}>{item.label}</p>
                <p className={ITEM_STYLES.summaryValue}>{item.value}</p>
              </article>
            ))}
          </section>

          <section className={ITEM_STYLES.panel}>
            <header className={ITEM_STYLES.panelHeader}>
              <div>
                <p className={ITEM_STYLES.panelMeta}>{summary.eyebrow}</p>
                <h2 className={ITEM_STYLES.panelTitle}>{activePage.title}</h2>
              </div>
              <p className={ITEM_STYLES.panelMeta}>
                {items.length.toLocaleString("ko-KR")}
                {ITEM_ARCHIVE_COPY.entryCountSuffix}
              </p>
            </header>

            <div className={ITEM_STYLES.list}>
              {items.map((item) => (
                <article className={ITEM_STYLES.card} key={item.id}>
                  <div className={ITEM_STYLES.cardHeader}>
                    <h3 className={ITEM_STYLES.cardName}>{item.name}</h3>
                    <div className={ITEM_STYLES.chipRow}>
                      <span className={ITEM_STYLES.chip}>
                        {ITEM_CATEGORY_LABELS[item.category]}
                      </span>
                      <span className={ITEM_STYLES.chip}>
                        {formatItemSources(item)}
                      </span>
                    </div>
                  </div>

                  <dl className={ITEM_STYLES.ledger}>
                    <div className={ITEM_STYLES.ledgerRow}>
                      <dt className={ITEM_STYLES.ledgerTerm}>
                        {ITEM_ARCHIVE_COPY.labels.price}
                      </dt>
                      <dd className={ITEM_STYLES.ledgerValue}>
                        {formatItemPrice(item)}
                      </dd>
                    </div>
                    <div className={ITEM_STYLES.ledgerRow}>
                      <dt className={ITEM_STYLES.ledgerTerm}>
                        {ITEM_ARCHIVE_COPY.labels.shopLocations}
                      </dt>
                      <dd className={ITEM_STYLES.ledgerValue}>
                        {formatItemShopLocations(item)}
                      </dd>
                    </div>
                    <div className={ITEM_STYLES.ledgerRow}>
                      <dt className={ITEM_STYLES.ledgerTerm}>
                        {ITEM_ARCHIVE_COPY.labels.dropLocations}
                      </dt>
                      <dd className={ITEM_STYLES.ledgerValue}>
                        {formatItemDropLocations(item)}
                      </dd>
                    </div>
                    <div className={ITEM_STYLES.ledgerRow}>
                      <dt className={ITEM_STYLES.ledgerTerm}>
                        {ITEM_ARCHIVE_COPY.labels.otherLocations}
                      </dt>
                      <dd className={ITEM_STYLES.ledgerValue}>
                        {formatItemOtherLocations(item)}
                      </dd>
                    </div>
                    <div className={ITEM_STYLES.ledgerRow}>
                      <dt className={ITEM_STYLES.ledgerTerm}>
                        {ITEM_ARCHIVE_COPY.labels.dropRate}
                      </dt>
                      <dd className={ITEM_STYLES.ledgerValue}>
                        {formatItemDropRates(item)}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default ItemIndexPageShell;
