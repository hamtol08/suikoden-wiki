/**
 * 아이템 상세 화면의 요약, 입수 기록, 초기 소유자 정보를 렌더링합니다.
 */

import type { ReactNode } from "react";
import Link from "next/link";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import MonsterNameLinkText from "@/components/shared/MonsterNameLinkText";
import { formatArchiveCount } from "@/constants/app/archive-utils";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import type { MonsterIndexGameId } from "@/constants/monsters/monster-content";
import {
  buildItemRecordDisplay,
  getItemDetailRecord,
  getItemIndexPage,
  ITEM_ARCHIVE_COPY,
  ITEM_CATEGORY_LABELS,
  ITEM_INDEX_PAGE_IDS,
  type ItemDetailRecord,
  type ItemInitialOwner,
  type ItemRecordDisplay,
} from "@/constants/items/item-content";
import {
  APP_SHELL_STYLES,
  ITEM_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type ItemDetailPageShellProps = {
  itemId: string;
};

type ItemGameRecordCard = ItemRecordDisplay & {
  gameTitle: string;
  initialOwners: readonly ItemInitialOwner[];
  key: MonsterIndexGameId;
};

type ItemGameRecordRow = {
  label: string;
  value: ReactNode;
};

type ItemInsightRow = {
  label: string;
  value: string;
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

const renderInitialOwners = (owners: readonly ItemInitialOwner[]) => {
  if (owners.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return (
    <span className={ITEM_STYLES.initialOwnerList}>
      {owners.map((owner, index) => (
        <span key={`${owner.href}-${index}`}>
          {index > 0 ? " / " : null}
          <Link className={ITEM_STYLES.initialOwnerLink} href={owner.href}>
            {owner.name}
          </Link>
        </span>
      ))}
    </span>
  );
};

const buildGameRecordRows = (
  record: ItemGameRecordCard,
): ItemGameRecordRow[] => [
  {
    label: ITEM_ARCHIVE_COPY.labels.price,
    value: record.price,
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.shopLocations,
    value: <CharacterNameLinkText text={record.shopLocations} />,
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.dropLocations,
    value: (
      <MonsterNameLinkText
        preferredGame={record.key}
        text={record.dropLocations}
      />
    ),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.otherLocations,
    value: <CharacterNameLinkText text={record.otherLocations} />,
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.dropRate,
    value: (
      <MonsterNameLinkText preferredGame={record.key} text={record.dropRates} />
    ),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.initialOwners,
    value: renderInitialOwners(record.initialOwners),
  },
];

const buildItemInsightRows = (
  item: ItemDetailRecord,
  records: readonly ItemGameRecordCard[],
): ItemInsightRow[] => {
  const initialOwnerCount = records.reduce(
    (total, record) => total + record.initialOwners.length,
    0,
  );

  return [
    {
      label: ITEM_ARCHIVE_COPY.labels.effectRecords,
      value:
        item.effectLines.length > 0
          ? formatArchiveCount(
              item.effectLines.length,
              ITEM_ARCHIVE_COPY.effectRecordCountSuffix,
            )
          : ITEM_ARCHIVE_COPY.unavailableDetail,
    },
    {
      label: ITEM_ARCHIVE_COPY.labels.initialOwnerRecords,
      value:
        initialOwnerCount > 0
          ? formatArchiveCount(
              initialOwnerCount,
              ITEM_ARCHIVE_COPY.initialOwnerCountSuffix,
            )
          : ITEM_ARCHIVE_COPY.unavailableDetail,
    },
    {
      label: ITEM_ARCHIVE_COPY.labels.games,
      value: formatArchiveCount(
        item.games.length,
        ITEM_ARCHIVE_COPY.gameCountSuffix,
      ),
    },
    {
      label: ITEM_ARCHIVE_COPY.labels.relatedRecords,
      value:
        item.relatedLinks.length > 0
          ? formatArchiveCount(
              item.relatedLinks.length,
              ITEM_ARCHIVE_COPY.relatedRecordCountSuffix,
            )
          : ITEM_ARCHIVE_COPY.unavailableDetail,
    },
  ];
};

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
      load: () => {
        const display = buildItemRecordDisplay(record);

        return [
          {
            ...display,
            gameTitle: getItemIndexPage(record.game).title,
            initialOwners: record.initialOwners,
            key: record.game,
          } satisfies ItemGameRecordCard,
        ];
      },
    }),
  );
  const primaryRecordDisplay = primaryRecord
    ? buildItemRecordDisplay(primaryRecord)
    : null;
  const insightRows = buildItemInsightRows(item, gameRecordCards);

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

          <MotionSurface as="section" className={ITEM_STYLES.detailPanel}>
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
                    {primaryRecordDisplay?.price ??
                      ITEM_ARCHIVE_COPY.unavailableDetail}
                  </dd>
                </div>
                <div className={ITEM_STYLES.detailMetaRow}>
                  <dt className={ITEM_STYLES.ledgerTerm}>
                    {ITEM_ARCHIVE_COPY.labels.source}
                  </dt>
                  <dd className={ITEM_STYLES.ledgerValue}>
                    {primaryRecordDisplay?.sourceLabel ??
                      ITEM_ARCHIVE_COPY.unavailableDetail}
                  </dd>
                </div>
              </dl>
            </header>

            <dl className={ITEM_STYLES.detailInsightGrid}>
              {insightRows.map((row) => (
                <div className={ITEM_STYLES.detailInsightCard} key={row.label}>
                  <dt className={ITEM_STYLES.detailInsightLabel}>
                    {row.label}
                  </dt>
                  <dd className={ITEM_STYLES.detailInsightValue}>
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <section className={ITEM_STYLES.detailSection}>
              <h3 className={ITEM_STYLES.detailSectionTitle}>
                {ITEM_ARCHIVE_COPY.descriptionTitle}
              </h3>
              <div className={ITEM_STYLES.detailSectionBody}>
                {item.descriptionLines.map((line) => (
                  <p key={line}>
                    <CharacterNameLinkText text={line} />
                  </p>
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
                    <p key={line}>
                      <CharacterNameLinkText text={line} />
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {item.relatedLinks.length > 0 ? (
              <section className={ITEM_STYLES.detailSection}>
                <h3 className={ITEM_STYLES.detailSectionTitle}>
                  {ITEM_ARCHIVE_COPY.relatedRecordsTitle}
                </h3>
                <div className={ITEM_STYLES.relatedLinkGrid}>
                  {item.relatedLinks.map((link) => (
                    <Link
                      className={ITEM_STYLES.relatedLink}
                      href={link.href}
                      key={link.href}
                    >
                      <h4 className={ITEM_STYLES.relatedLinkTitle}>
                        {link.title}
                      </h4>
                      <p className={ITEM_STYLES.relatedLinkBody}>
                        <CharacterNameLinkText text={link.body} />
                      </p>
                    </Link>
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
                          {record.sourceLabel}
                        </span>
                      </div>
                    </div>
                    <dl className={ITEM_STYLES.ledger}>
                      {buildGameRecordRows(record).map((row) => (
                        <div className={ITEM_STYLES.ledgerRow} key={row.label}>
                          <dt className={ITEM_STYLES.ledgerTerm}>
                            {row.label}
                          </dt>
                          <dd className={ITEM_STYLES.ledgerValue}>
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>

          </MotionSurface>
        </section>
      </div>
    </main>
  );
};

export default ItemDetailPageShell;
