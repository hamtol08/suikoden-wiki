import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchivePageIntro from "@/components/archive/ArchivePageIntro";
import { loadArchiveJsonSafely } from "@/constants/data-loading";
import {
  formatItemDropLocations,
  formatItemDropRates,
  formatItemOtherLocations,
  formatItemPrice,
  formatItemShopLocations,
  formatItemSources,
  getItemDetailRecord,
  getItemIndexPage,
  ITEM_ARCHIVE_COPY,
  ITEM_CATEGORY_LABELS,
  ITEM_INDEX_PAGE_IDS,
  type ItemDetailRecord,
} from "@/constants/item-content";
import {
  APP_SHELL_STYLES,
  ITEM_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

type ItemDetailPageShellProps = {
  itemId: string;
};

const buildDetailRows = (item: ItemDetailRecord) => [
  {
    label: ITEM_ARCHIVE_COPY.labels.category,
    value: ITEM_CATEGORY_LABELS[item.category],
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.games,
    value: item.games.map((game) => getItemIndexPage(game).title).join(" / "),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.originalName,
    value: item.originalNames.join(" / "),
  },
  ...(item.japaneseNames.length > 0 ?
    [
      {
        label: ITEM_ARCHIVE_COPY.labels.japaneseName,
        value: item.japaneseNames.join(" / "),
      },
    ] :
    []),
];

const ItemDetailPageShell = ({ itemId }: ItemDetailPageShellProps) => {
  const item = loadArchiveJsonSafely({
    fallback: null,
    label: `item-detail:${itemId}`,
    load: () => getItemDetailRecord(itemId),
  });

  if (!item) {
    return null;
  }

  const primaryGame = item.games[0];
  const activeItemPage = primaryGame
    ? loadArchiveJsonSafely({
        fallback: () => getItemIndexPage(primaryGame),
        label: `item-detail-active-page:${item.id}`,
        load: () => getItemIndexPage(primaryGame),
      })
    : getItemIndexPage(ITEM_INDEX_PAGE_IDS.suikodenI);
  const detailRows = loadArchiveJsonSafely({
    fallback: [],
    label: `item-detail-rows:${item.id}`,
    load: () => buildDetailRows(item),
  });
  const primaryRecord = item.gameRecords[0] ?? null;
  const gameRecordCards = item.gameRecords.flatMap((record) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `item-detail-game-record:${item.id}:${record.game}`,
      load: () => [
        {
          dropLocations: formatItemDropLocations(record),
          dropRates: formatItemDropRates(record),
          gameTitle: getItemIndexPage(record.game).title,
          key: record.game,
          otherLocations: formatItemOtherLocations(record),
          price: formatItemPrice(record),
          shopLocations: formatItemShopLocations(record),
          source: formatItemSources(record),
        },
      ],
    }),
  );

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activeItemPage.href} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ITEM_STYLES.shell}>
          <ArchivePageIntro
            body={ITEM_ARCHIVE_COPY.detailBody}
            eyebrow={ITEM_ARCHIVE_COPY.detailTitle}
            styles={ITEM_STYLES}
            title={item.name}
          />

          <section className={ITEM_STYLES.detailPanel}>
            <header className={ITEM_STYLES.detailHeader}>
              <div>
                <h2 className={ITEM_STYLES.detailTitle}>{item.name}</h2>
                <dl className={ITEM_STYLES.detailSubNames}>
                  {detailRows.map((row) => (
                    <div className={ITEM_STYLES.detailNameRow} key={row.label}>
                      <dt className={ITEM_STYLES.detailNameLabel}>
                        {row.label}
                      </dt>
                      <dd className={ITEM_STYLES.detailNameValue}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <dl className={ITEM_STYLES.detailMetaGrid}>
                <div className={ITEM_STYLES.detailMetaRow}>
                  <dt className={ITEM_STYLES.ledgerTerm}>
                    {ITEM_ARCHIVE_COPY.labels.price}
                  </dt>
                  <dd className={ITEM_STYLES.ledgerValue}>
                    {primaryRecord
                      ? formatItemPrice(primaryRecord)
                      : ITEM_ARCHIVE_COPY.unavailableDetail}
                  </dd>
                </div>
                <div className={ITEM_STYLES.detailMetaRow}>
                  <dt className={ITEM_STYLES.ledgerTerm}>
                    {ITEM_ARCHIVE_COPY.labels.source}
                  </dt>
                  <dd className={ITEM_STYLES.ledgerValue}>
                    {primaryRecord
                      ? formatItemSources(primaryRecord)
                      : ITEM_ARCHIVE_COPY.unavailableDetail}
                  </dd>
                </div>
              </dl>
            </header>

            <section className={ITEM_STYLES.detailSection}>
              <h3 className={ITEM_STYLES.detailSectionTitle}>
                {ITEM_ARCHIVE_COPY.descriptionTitle}
              </h3>
              <div className={ITEM_STYLES.detailSectionBody}>
                {item.descriptionLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>

            {item.effectLines.length > 0 ? (
              <section className={ITEM_STYLES.detailSection}>
                <h3 className={ITEM_STYLES.detailSectionTitle}>
                  {ITEM_ARCHIVE_COPY.effectTitle}
                </h3>
                <div className={ITEM_STYLES.detailSectionBody}>
                  {item.effectLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </section>
            ) : null}

            <section className={ITEM_STYLES.detailSection}>
              <h3 className={ITEM_STYLES.detailSectionTitle}>
                {ITEM_ARCHIVE_COPY.gameRecordsTitle}
              </h3>
              <div className={ITEM_STYLES.detailGameGrid}>
                {gameRecordCards.map((record) => (
                  <article className={ITEM_STYLES.card} key={record.key}>
                    <div className={ITEM_STYLES.cardHeader}>
                      <h4 className={ITEM_STYLES.cardName}>
                        {record.gameTitle}
                      </h4>
                      <div className={ITEM_STYLES.chipRow}>
                        <span className={ITEM_STYLES.chip}>
                          {record.source}
                        </span>
                      </div>
                    </div>
                    <dl className={ITEM_STYLES.ledger}>
                      <div className={ITEM_STYLES.ledgerRow}>
                        <dt className={ITEM_STYLES.ledgerTerm}>
                          {ITEM_ARCHIVE_COPY.labels.price}
                        </dt>
                        <dd className={ITEM_STYLES.ledgerValue}>
                          {record.price}
                        </dd>
                      </div>
                      <div className={ITEM_STYLES.ledgerRow}>
                        <dt className={ITEM_STYLES.ledgerTerm}>
                          {ITEM_ARCHIVE_COPY.labels.shopLocations}
                        </dt>
                        <dd className={ITEM_STYLES.ledgerValue}>
                          {record.shopLocations}
                        </dd>
                      </div>
                      <div className={ITEM_STYLES.ledgerRow}>
                        <dt className={ITEM_STYLES.ledgerTerm}>
                          {ITEM_ARCHIVE_COPY.labels.dropLocations}
                        </dt>
                        <dd className={ITEM_STYLES.ledgerValue}>
                          {record.dropLocations}
                        </dd>
                      </div>
                      <div className={ITEM_STYLES.ledgerRow}>
                        <dt className={ITEM_STYLES.ledgerTerm}>
                          {ITEM_ARCHIVE_COPY.labels.otherLocations}
                        </dt>
                        <dd className={ITEM_STYLES.ledgerValue}>
                          {record.otherLocations}
                        </dd>
                      </div>
                      <div className={ITEM_STYLES.ledgerRow}>
                        <dt className={ITEM_STYLES.ledgerTerm}>
                          {ITEM_ARCHIVE_COPY.labels.dropRate}
                        </dt>
                        <dd className={ITEM_STYLES.ledgerValue}>
                          {record.dropRates}
                        </dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </section>

            {item.references.length > 0 ? (
              <section className={ITEM_STYLES.detailSection}>
                <h3 className={ITEM_STYLES.detailSectionTitle}>
                  {ITEM_ARCHIVE_COPY.referenceTitle}
                </h3>
                <div className={ITEM_STYLES.detailReferenceList}>
                  {item.references.map((reference) => (
                    <a
                      className={ITEM_STYLES.detailReferenceLink}
                      href={reference.href}
                      key={reference.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {reference.label}
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </section>
        </section>
      </div>
    </main>
  );
};

export default ItemDetailPageShell;
