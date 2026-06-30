import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import {
  RUNE_ARCHIVE_COPY,
  type RuneFunctionRecord,
} from "@/constants/runes/rune-content";
import { RUNE_STYLES } from "@/constants/styles/ui-styles";

type RuneFunctionRecordsProps = {
  records: readonly RuneFunctionRecord[];
};

const RuneFunctionRecords = ({ records }: RuneFunctionRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <MotionSurface as="section" className={RUNE_STYLES.functionPanel}>
      <h2 className={RUNE_STYLES.functionTitle}>
        {RUNE_ARCHIVE_COPY.runeFunctionTitle}
      </h2>

      <div className={RUNE_STYLES.functionGrid}>
        {records.map((record) => (
          <article className={RUNE_STYLES.functionCard} key={record.game}>
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
