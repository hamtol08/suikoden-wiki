/**
 * 몬스터 상세 화면의 출현 위치, 드롭, 스탯, 속성 반응을 렌더링합니다.
 */

import Link from "next/link";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import ItemNameLinkText from "@/components/shared/ItemNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import { formatArchiveCount } from "@/constants/app/archive-utils";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import {
  getMonsterDetailRecord,
  MONSTER_ARCHIVE_COPY,
  type MonsterAffinityRecord,
  type MonsterDetailRecord,
  type MonsterStatRecord,
  type MonsterStatusResistanceRecord,
} from "@/constants/monsters/monster-content";
import {
  APP_SHELL_STYLES,
  MONSTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type MonsterDetailPageShellProps = {
  gameId: string;
  monsterId: string;
};

type MonsterDetailRow = {
  label: string;
  value: string;
};

type MonsterStatField = {
  key: keyof MonsterStatRecord;
  label: string;
};

type BossGuideSummaryRow = {
  label: string;
  value: string;
};

type MonsterInsightRow = {
  label: string;
  value: string;
};

const BASE_STAT_FIELDS = [
  { key: "location", label: MONSTER_ARCHIVE_COPY.labels.location },
  { key: "level", label: MONSTER_ARCHIVE_COPY.labels.level },
  { key: "hp", label: MONSTER_ARCHIVE_COPY.labels.hp },
] as const satisfies readonly MonsterStatField[];

const OPTIONAL_STAT_FIELDS = [
  { key: "range", label: MONSTER_ARCHIVE_COPY.labels.range },
  { key: "str", label: MONSTER_ARCHIVE_COPY.labels.str },
  { key: "mag", label: MONSTER_ARCHIVE_COPY.labels.mag },
  { key: "con", label: MONSTER_ARCHIVE_COPY.labels.con },
  { key: "dex", label: MONSTER_ARCHIVE_COPY.labels.dex },
  { key: "spd", label: MONSTER_ARCHIVE_COPY.labels.spd },
  { key: "lck", label: MONSTER_ARCHIVE_COPY.labels.lck },
] as const satisfies readonly MonsterStatField[];

const BASE_AFFINITY_FIELDS = [
  { key: "fire", label: MONSTER_ARCHIVE_COPY.labels.fire },
  { key: "water", label: MONSTER_ARCHIVE_COPY.labels.water },
  { key: "earth", label: MONSTER_ARCHIVE_COPY.labels.earth },
  { key: "wind", label: MONSTER_ARCHIVE_COPY.labels.wind },
  { key: "lightning", label: MONSTER_ARCHIVE_COPY.labels.lightning },
  { key: "holy", label: MONSTER_ARCHIVE_COPY.labels.holy },
] as const satisfies readonly {
  key: keyof MonsterAffinityRecord;
  label: string;
}[];

const OPTIONAL_AFFINITY_FIELDS = [
  { key: "darkness", label: MONSTER_ARCHIVE_COPY.labels.darkness },
  { key: "shield", label: MONSTER_ARCHIVE_COPY.labels.shield },
  { key: "sword", label: MONSTER_ARCHIVE_COPY.labels.sword },
] as const satisfies readonly {
  key: keyof MonsterAffinityRecord;
  label: string;
}[];

const STATUS_RESISTANCE_FIELDS = [
  { key: "poison", label: MONSTER_ARCHIVE_COPY.labels.poison },
  { key: "silence", label: MONSTER_ARCHIVE_COPY.labels.silence },
  { key: "sleep", label: MONSTER_ARCHIVE_COPY.labels.sleep },
  { key: "stun", label: MONSTER_ARCHIVE_COPY.labels.stun },
  { key: "death", label: MONSTER_ARCHIVE_COPY.labels.death },
] as const satisfies readonly {
  key: keyof MonsterStatusResistanceRecord;
  label: string;
}[];

const AFFINITY_EFFECTIVE_MARKS = new Set(["○", "◯"]);
const AFFINITY_RESISTANT_MARKS = new Set(["△"]);
const AFFINITY_INVALID_MARKS = new Set(["×", "✕"]);

const formatNumberRange = (values: readonly number[]) => {
  const min = Math.min(...values);
  const max = Math.max(...values);

  return min === max ? `${min}` : `${min} - ${max}`;
};

const summarizeMarkedFields = <
  TRecord extends Record<string, string>,
  TField extends readonly { key: keyof TRecord; label: string }[],
>(
  record: TRecord | null,
  fields: TField,
  marks: ReadonlySet<string>,
) => {
  if (!record) {
    return MONSTER_ARCHIVE_COPY.unavailableDetail;
  }

  const labels = fields
    .filter((field) => marks.has(record[field.key]))
    .map((field) => field.label);

  return labels.length > 0
    ? labels.join(", ")
    : MONSTER_ARCHIVE_COPY.labels.normalAffinity;
};

const buildDetailRows = (monster: MonsterDetailRecord): MonsterDetailRow[] => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.games,
    value: monster.gameTitle,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.originalName,
    value: monster.originalName,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.japaneseName,
    value: monster.japaneseName,
  },
];

const buildDetailSummaryRows = (
  monster: MonsterDetailRecord,
): MonsterDetailRow[] => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.recordType,
    value: monster.bossGuide
      ? MONSTER_ARCHIVE_COPY.labels.bossType
      : MONSTER_ARCHIVE_COPY.labels.fieldType,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.encounterCount,
    value: formatArchiveCount(
      monster.encounters.length,
      MONSTER_ARCHIVE_COPY.locationCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.detailDropCount,
    value: formatArchiveCount(
      new Set(
        monster.encounters.flatMap((encounter) =>
          encounter.drops.map((drop) => drop.name)
        ),
      ).size,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.statRecordCount,
    value: formatArchiveCount(
      monster.stats.length,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
];

const buildBossGuideSummaryRows = (
  guide: NonNullable<MonsterDetailRecord["bossGuide"]>,
): BossGuideSummaryRow[] => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.bossPreparationCount,
    value: formatArchiveCount(
      guide.preparation.length,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.bossTacticsCount,
    value: formatArchiveCount(
      guide.tactics.length,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.bossRelatedCount,
    value: formatArchiveCount(
      guide.relatedEvents?.length ?? 0,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.bossRewardCount,
    value: formatArchiveCount(
      guide.rewards?.length ?? 0,
      MONSTER_ARCHIVE_COPY.recordCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.bossWarningState,
    value: guide.warning
      ? MONSTER_ARCHIVE_COPY.labels.bossWarningAvailable
      : MONSTER_ARCHIVE_COPY.labels.bossWarningUnavailable,
  },
];

const buildCombatInsightRows = (
  monster: MonsterDetailRecord,
  affinityFields: ReturnType<typeof buildAffinityFields>,
): MonsterInsightRow[] => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.levelRange,
    value:
      monster.stats.length > 0
        ? formatNumberRange(monster.stats.map((stat) => stat.level))
        : MONSTER_ARCHIVE_COPY.unavailableDetail,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.hpRange,
    value:
      monster.stats.length > 0
        ? formatNumberRange(monster.stats.map((stat) => stat.hp))
        : MONSTER_ARCHIVE_COPY.unavailableDetail,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.effectiveElements,
    value: summarizeMarkedFields(
      monster.affinity,
      affinityFields,
      AFFINITY_EFFECTIVE_MARKS,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.invalidElements,
    value: summarizeMarkedFields(
      monster.affinity,
      affinityFields,
      AFFINITY_INVALID_MARKS,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.resistantElements,
    value: summarizeMarkedFields(
      monster.affinity,
      affinityFields,
      AFFINITY_RESISTANT_MARKS,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.statusInvalid,
    value: summarizeMarkedFields(
      monster.statusResistances,
      STATUS_RESISTANCE_FIELDS,
      AFFINITY_INVALID_MARKS,
    ),
  },
];

const renderLocation = (stat: MonsterStatRecord) =>
  stat.locationHref ? (
    <Link className={MONSTER_STYLES.encounterLocationLink} href={stat.locationHref}>
      {stat.location}
    </Link>
  ) : (
    stat.location
  );

const buildStatFields = (stats: readonly MonsterStatRecord[]) => [
  ...BASE_STAT_FIELDS,
  ...OPTIONAL_STAT_FIELDS.filter((field) =>
    stats.some((stat) => stat[field.key] !== undefined)
  ),
];

const buildAffinityFields = (affinity: MonsterAffinityRecord | null) => [
  ...BASE_AFFINITY_FIELDS,
  ...OPTIONAL_AFFINITY_FIELDS.filter((field) => affinity?.[field.key] !== undefined),
];

const renderStatValue = (
  stat: MonsterStatRecord,
  field: MonsterStatField,
) => {
  if (field.key === "location") {
    return renderLocation(stat);
  }

  return stat[field.key] ?? MONSTER_ARCHIVE_COPY.unavailableDetail;
};

const MonsterDetailPageShell = ({
  gameId,
  monsterId,
}: MonsterDetailPageShellProps) => {
  const monster = loadArchiveJsonSafely({
    fallback: null,
    label: buildArchiveDataLabel("monster-detail", gameId, monsterId),
    load: () => getMonsterDetailRecord(gameId, monsterId),
  });

  if (!monster) {
    return null;
  }

  const detailRows = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel(
      "monster-detail-rows",
      monster.game,
      monster.id,
    ),
    load: () => buildDetailRows(monster),
  });
  const summaryRows = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel(
      "monster-detail-summary",
      monster.game,
      monster.id,
    ),
    load: () => buildDetailSummaryRows(monster),
  });
  const statFields = buildStatFields(monster.stats);
  const affinityFields = buildAffinityFields(monster.affinity);
  const combatInsightRows = buildCombatInsightRows(monster, affinityFields);
  const bossGuideSummaryRows = monster.bossGuide
    ? buildBossGuideSummaryRows(monster.bossGuide)
    : [];

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={monster.indexHref} activeLabel={monster.gameTitle} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={MONSTER_STYLES.shell}>
          <ArchivePageIntro
            body={MONSTER_ARCHIVE_COPY.detailBody}
            eyebrow={MONSTER_ARCHIVE_COPY.detailEyebrow}
            styles={MONSTER_STYLES}
            title={monster.name}
          />

          <MotionSurface as="section" className={MONSTER_STYLES.detailPanel}>
            <header className={MONSTER_STYLES.detailHeader}>
              <div>
                <h2 className={MONSTER_STYLES.detailTitle}>{monster.name}</h2>
                <dl className={MONSTER_STYLES.detailSubNames}>
                  {detailRows.map((row) => (
                    <div className={MONSTER_STYLES.detailNameRow} key={row.label}>
                      <dt className={MONSTER_STYLES.detailNameLabel}>
                        {row.label}
                      </dt>
                      <dd className={MONSTER_STYLES.detailNameValue}>
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <dl className={MONSTER_STYLES.detailMetaGrid}>
                {summaryRows.map((row) => (
                  <div className={MONSTER_STYLES.detailMetaRow} key={row.label}>
                    <dt className={MONSTER_STYLES.ledgerTerm}>
                      {row.label}
                    </dt>
                    <dd className={MONSTER_STYLES.ledgerValue}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </header>

            <section className={MONSTER_STYLES.detailSection}>
              <h3 className={MONSTER_STYLES.detailSectionTitle}>
                {MONSTER_ARCHIVE_COPY.combatSummaryTitle}
              </h3>
              <dl className={MONSTER_STYLES.detailInsightGrid}>
                {combatInsightRows.map((row) => (
                  <div className={MONSTER_STYLES.detailInsightCard} key={row.label}>
                    <dt className={MONSTER_STYLES.detailInsightLabel}>
                      {row.label}
                    </dt>
                    <dd className={MONSTER_STYLES.detailInsightValue}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className={MONSTER_STYLES.detailSection}>
              <h3 className={MONSTER_STYLES.detailSectionTitle}>
                {MONSTER_ARCHIVE_COPY.encounterTitle}
              </h3>
              <div className={MONSTER_STYLES.detailGameGrid}>
                {monster.encounters.map((encounter, encounterIndex) => (
                  <article
                    className={MONSTER_STYLES.encounterCard}
                    key={`${monster.id}-${encounter.originalLocation}-${encounterIndex}`}
                  >
                    <div className={MONSTER_STYLES.encounterField}>
                      <p className={MONSTER_STYLES.encounterTerm}>
                        {MONSTER_ARCHIVE_COPY.labels.location}
                      </p>
                      {encounter.href ? (
                        <Link
                          className={MONSTER_STYLES.encounterLocationLink}
                          href={encounter.href}
                        >
                          {encounter.location}
                        </Link>
                      ) : (
                        <p className={MONSTER_STYLES.encounterLocation}>
                          {encounter.location}
                        </p>
                      )}
                    </div>

                    <div className={MONSTER_STYLES.encounterField}>
                      <p className={MONSTER_STYLES.encounterTerm}>
                        {MONSTER_ARCHIVE_COPY.labels.drops}
                      </p>
                      {encounter.drops.length > 0 ? (
                        <ul className={MONSTER_STYLES.dropList}>
                          {encounter.drops.map((drop, dropIndex) => (
                            <li
                              className={MONSTER_STYLES.dropItem}
                              key={`${encounter.originalLocation}-${drop.originalName}-${dropIndex}`}
                            >
                              {drop.href ? (
                                <Link
                                  className={MONSTER_STYLES.dropNameLink}
                                  href={drop.href}
                                >
                                  {drop.name}
                                </Link>
                              ) : (
                                <span className={MONSTER_STYLES.dropName}>
                                  <ItemNameLinkText
                                    linkClassName={MONSTER_STYLES.dropNameLink}
                                    preferredGame={monster.game}
                                    text={drop.name}
                                  />
                                </span>
                              )}
                              <span className={MONSTER_STYLES.dropRate}>
                                {drop.rateLabel}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className={MONSTER_STYLES.noDrop}>
                          {MONSTER_ARCHIVE_COPY.labels.noDrop}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {monster.bossGuide ? (
              <section className={MONSTER_STYLES.detailSection}>
                <h3 className={MONSTER_STYLES.detailSectionTitle}>
                  {MONSTER_ARCHIVE_COPY.bossGuideTitle}
                </h3>
                <div className={MONSTER_STYLES.bossGuideGrid}>
                  <dl className={MONSTER_STYLES.bossGuideSummaryGrid}>
                    {bossGuideSummaryRows.map((row) => (
                      <div
                        className={MONSTER_STYLES.bossGuideSummaryCard}
                        key={row.label}
                      >
                        <dt className={MONSTER_STYLES.bossGuideSummaryLabel}>
                          {row.label}
                        </dt>
                        <dd className={MONSTER_STYLES.bossGuideSummaryValue}>
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <article className={MONSTER_STYLES.bossGuideCardWide}>
                    <p className={MONSTER_STYLES.bossGuideLabel}>
                      {MONSTER_ARCHIVE_COPY.labels.bossOverview}
                    </p>
                    <p className={MONSTER_STYLES.bossGuideBody}>
                      <CharacterNameLinkText text={monster.bossGuide.overview} />
                    </p>
                  </article>

                  <article className={MONSTER_STYLES.bossGuideCard}>
                    <p className={MONSTER_STYLES.bossGuideLabel}>
                      {MONSTER_ARCHIVE_COPY.labels.bossPreparation}
                    </p>
                    <ul className={MONSTER_STYLES.bossGuideList}>
                      {monster.bossGuide.preparation.map((tip, tipIndex) => (
                        <li
                          className={MONSTER_STYLES.bossGuideListItem}
                          key={`preparation-${tipIndex}-${tip}`}
                        >
                          <CharacterNameLinkText text={tip} />
                        </li>
                      ))}
                    </ul>
                  </article>

                  <article className={MONSTER_STYLES.bossGuideCard}>
                    <p className={MONSTER_STYLES.bossGuideLabel}>
                      {MONSTER_ARCHIVE_COPY.labels.bossTactics}
                    </p>
                    <ul className={MONSTER_STYLES.bossGuideList}>
                      {monster.bossGuide.tactics.map((tip, tipIndex) => (
                        <li
                          className={MONSTER_STYLES.bossGuideListItem}
                          key={`tactics-${tipIndex}-${tip}`}
                        >
                          <CharacterNameLinkText text={tip} />
                        </li>
                      ))}
                    </ul>
                  </article>

                  {monster.bossGuide.rewards ? (
                    <article className={MONSTER_STYLES.bossGuideCard}>
                      <p className={MONSTER_STYLES.bossGuideLabel}>
                        {MONSTER_ARCHIVE_COPY.labels.bossRewards}
                      </p>
                      <ul className={MONSTER_STYLES.bossGuideList}>
                        {monster.bossGuide.rewards.map((reward, rewardIndex) => (
                          <li
                            className={MONSTER_STYLES.bossGuideListItem}
                            key={`reward-${rewardIndex}-${reward}`}
                          >
                            <ItemNameLinkText text={reward} />
                          </li>
                        ))}
                      </ul>
                    </article>
                  ) : null}

                  {monster.bossGuide.relatedEvents ? (
                    <article className={MONSTER_STYLES.bossGuideCard}>
                      <p className={MONSTER_STYLES.bossGuideLabel}>
                        {MONSTER_ARCHIVE_COPY.labels.bossRelatedEvents}
                      </p>
                      <ul className={MONSTER_STYLES.bossGuideList}>
                        {monster.bossGuide.relatedEvents.map((event, eventIndex) => (
                          <li
                            className={MONSTER_STYLES.bossGuideListItem}
                            key={`event-${eventIndex}-${event}`}
                          >
                            <CharacterNameLinkText text={event} />
                          </li>
                        ))}
                      </ul>
                    </article>
                  ) : null}

                  {monster.bossGuide.warning ? (
                    <article className={MONSTER_STYLES.bossGuideCardWide}>
                      <p className={MONSTER_STYLES.bossGuideLabel}>
                        {MONSTER_ARCHIVE_COPY.labels.bossWarning}
                      </p>
                      <p className={MONSTER_STYLES.bossGuideBody}>
                        <CharacterNameLinkText text={monster.bossGuide.warning} />
                      </p>
                    </article>
                  ) : null}
                </div>
              </section>
            ) : null}

            <section className={MONSTER_STYLES.detailSection}>
              <h3 className={MONSTER_STYLES.detailSectionTitle}>
                {MONSTER_ARCHIVE_COPY.statTitle}
              </h3>
              {monster.stats.length > 0 ? (
                <div className={MONSTER_STYLES.statTableWrap}>
                  <table className={MONSTER_STYLES.statTable}>
                    <thead>
                      <tr>
                        {statFields.map((field) => (
                          <th
                            className={MONSTER_STYLES.statHeadCell}
                            key={field.key}
                          >
                            {field.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {monster.stats.map((stat) => (
                        <tr key={`${stat.originalLocation}-${stat.level}`}>
                          {statFields.map((field) => (
                            <td
                              className={
                                field.key === "location" ?
                                  MONSTER_STYLES.statLocationCell :
                                  MONSTER_STYLES.statCell
                              }
                              key={`${stat.originalLocation}-${field.key}`}
                            >
                              {renderStatValue(stat, field)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className={MONSTER_STYLES.noDrop}>
                  {MONSTER_ARCHIVE_COPY.noStatRecords}
                </p>
              )}
            </section>

            <section className={MONSTER_STYLES.detailSection}>
              <h3 className={MONSTER_STYLES.detailSectionTitle}>
                {MONSTER_ARCHIVE_COPY.affinityTitle}
              </h3>
              {monster.affinity ? (
                <div className={MONSTER_STYLES.affinityGrid}>
                  {affinityFields.map((field) => (
                    <div className={MONSTER_STYLES.affinityCard} key={field.key}>
                      <p className={MONSTER_STYLES.affinityLabel}>
                        {field.label}
                      </p>
                      <p className={MONSTER_STYLES.affinityValue}>
                        {monster.affinity?.[field.key] ??
                          MONSTER_ARCHIVE_COPY.unavailableDetail}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className={MONSTER_STYLES.noDrop}>
                  {MONSTER_ARCHIVE_COPY.noAffinityRecords}
                </p>
              )}
            </section>

            {monster.statusResistances ? (
              <section className={MONSTER_STYLES.detailSection}>
                <h3 className={MONSTER_STYLES.detailSectionTitle}>
                  {MONSTER_ARCHIVE_COPY.statusResistanceTitle}
                </h3>
                <div className={MONSTER_STYLES.statusTableWrap}>
                  <table className={MONSTER_STYLES.statusTable}>
                    <thead>
                      <tr>
                        {STATUS_RESISTANCE_FIELDS.map((field) => (
                          <th
                            className={MONSTER_STYLES.statusHeadCell}
                            key={field.key}
                          >
                            {field.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {STATUS_RESISTANCE_FIELDS.map((field) => (
                          <td
                            className={MONSTER_STYLES.statusCell}
                            key={field.key}
                          >
                            {monster.statusResistances?.[field.key] ??
                              MONSTER_ARCHIVE_COPY.unavailableDetail}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={MONSTER_STYLES.statusLegend}>
                  {MONSTER_ARCHIVE_COPY.statusResistanceLegend}
                </p>
              </section>
            ) : null}

            <div className={MONSTER_STYLES.detailBackAction}>
              <Link className={MONSTER_STYLES.detailBackLink} href={monster.indexHref}>
                {MONSTER_ARCHIVE_COPY.backToList}
              </Link>
            </div>
          </MotionSurface>
        </section>
      </div>
    </main>
  );
};

export default MonsterDetailPageShell;
