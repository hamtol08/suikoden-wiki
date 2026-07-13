/**
 * 문장 상세의 주문, 패시브, 장착 효과 기록을 렌더링합니다.
 */

import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import {
  formatArchiveCount,
  formatArchiveNumber,
} from "@/constants/app/archive-utils";
import {
  RUNE_ARCHIVE_COPY,
  type RuneFunctionRecord,
} from "@/constants/runes/rune-content";
import { RUNE_STYLES } from "@/constants/styles/ui-styles";

type RuneFunctionRecordsProps = {
  records: readonly RuneFunctionRecord[];
};

const buildRuneFunctionSummaryRows = (
  records: readonly RuneFunctionRecord[],
) => {
  const spellCount = records.reduce(
    (total, record) => total + (record.spells?.length ?? 0),
    0,
  );
  const weaponEffectCount = records.filter((record) =>
    Boolean(record.weaponEffect)
  ).length;

  return [
    {
      label: RUNE_ARCHIVE_COPY.runeFunctionGameCountLabel,
      value: formatArchiveCount(
        records.length,
        RUNE_ARCHIVE_COPY.runeFunctionRecordCountSuffix,
      ),
    },
    {
      label: RUNE_ARCHIVE_COPY.runeFunctionSpellCountLabel,
      value: formatArchiveCount(
        spellCount,
        RUNE_ARCHIVE_COPY.runeFunctionSpellCountSuffix,
      ),
    },
    {
      label: RUNE_ARCHIVE_COPY.runeFunctionWeaponCountLabel,
      value: formatArchiveNumber(weaponEffectCount),
    },
  ];
};

const RuneFunctionRecords = ({ records }: RuneFunctionRecordsProps) => {
  if (records.length === 0) {
    return null;
  }
  const summaryRows = buildRuneFunctionSummaryRows(records);

  return (
    <MotionSurface as="section" className={RUNE_STYLES.functionPanel}>
      <h2 className={RUNE_STYLES.functionTitle}>
        {RUNE_ARCHIVE_COPY.runeFunctionTitle}
      </h2>

      <dl
        aria-label={RUNE_ARCHIVE_COPY.runeFunctionSummaryLabel}
        className={RUNE_STYLES.functionSummaryGrid}
      >
        {summaryRows.map((row) => (
          <div className={RUNE_STYLES.functionSummaryCard} key={row.label}>
            <dt className={RUNE_STYLES.functionSummaryLabel}>
              {row.label}
            </dt>
            <dd className={RUNE_STYLES.functionSummaryValue}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className={RUNE_STYLES.functionGrid}>
        {records.map((record, recordIndex) => (
          <article
            className={RUNE_STYLES.functionCard}
            key={`${record.game}-${recordIndex}`}
          >
            <h3 className={RUNE_STYLES.functionGame}>{record.game}</h3>
            {record.note ? (
              <p className={RUNE_STYLES.functionNote}>
                <CharacterNameLinkText text={record.note} />
              </p>
            ) : null}

            {record.spells ? (
              <>
                <h4 className={RUNE_STYLES.functionSubTitle}>
                  {RUNE_ARCHIVE_COPY.runeSpellLabel}
                </h4>
                <div className={RUNE_STYLES.spellList}>
                  {record.spells.map((spell) => (
                    <div
                      className={RUNE_STYLES.spellRow}
                      key={`${record.game}-${spell.level}-${spell.name}`}
                    >
                      <p className={RUNE_STYLES.spellLevel}>
                        Lv. {spell.level}
                      </p>
                      <p className={RUNE_STYLES.spellName}>{spell.name}</p>
                      <p className={RUNE_STYLES.spellEffect}>
                        <CharacterNameLinkText text={spell.effect} />
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : null}

            {record.effects ? (
              <>
                <h4 className={RUNE_STYLES.functionSubTitle}>
                  {RUNE_ARCHIVE_COPY.runeEffectLabel}
                </h4>
                <ul className={RUNE_STYLES.functionEffectList}>
                  {record.effects.map((effect) => (
                    <li
                      className={RUNE_STYLES.functionEffectItem}
                      key={`${record.game}-${effect}`}
                    >
                      <CharacterNameLinkText text={effect} />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {record.weaponEffect ? (
              <>
                <h4 className={RUNE_STYLES.functionSubTitle}>
                  {RUNE_ARCHIVE_COPY.runeWeaponEffectLabel}
                </h4>
                <p className={RUNE_STYLES.functionSingleEffect}>
                  <CharacterNameLinkText text={record.weaponEffect} />
                </p>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </MotionSurface>
  );
};

export default RuneFunctionRecords;
