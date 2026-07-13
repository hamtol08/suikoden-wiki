/**
 * 게임플레이 상세의 작품별 본거지·보충 기록 카드를 렌더링합니다.
 */

import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import { resolveCharacterGameIdBySeriesTitle } from "@/constants/characters/character-game-ids";
import { type GameplaySeriesNoteRecord } from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";

export type GameplaySeriesNoteCardCopy = {
  facilityLabel: string;
  floorFacilityLabel: string;
  locationLabel: string;
  unlockLabel: string;
};

type GameplaySeriesNoteCardProps = {
  copy: GameplaySeriesNoteCardCopy;
  id?: string;
  note: GameplaySeriesNoteRecord;
  role?: "tabpanel";
};

const GameplaySeriesNoteCard = ({
  copy,
  id,
  note,
  role,
}: GameplaySeriesNoteCardProps) => {
  const preferredGame = resolveCharacterGameIdBySeriesTitle(note.game);

  return (
    <article className={GAMEPLAY_STYLES.detailCard} id={id} role={role}>
      <h3 className={GAMEPLAY_STYLES.detailCardTitle}>{note.game}</h3>
      <p className={GAMEPLAY_STYLES.detailCardBody}>
        <CharacterNameLinkText preferredGame={preferredGame} text={note.body} />
      </p>

      {note.points ? (
        <ul className={GAMEPLAY_STYLES.detailPointList}>
          {note.points.map((point, pointIndex) => (
            <li
              className={GAMEPLAY_STYLES.detailPointItem}
              key={`${note.game}-${pointIndex}`}
            >
              <CharacterNameLinkText
                preferredGame={preferredGame}
                text={point}
              />
            </li>
          ))}
        </ul>
      ) : null}

      {note.floorFacilities ? (
        <section className={GAMEPLAY_STYLES.detailFacilitySection}>
          <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
            {copy.floorFacilityLabel}
          </h4>
          <div className={GAMEPLAY_STYLES.detailFloorList}>
            {note.floorFacilities.map((floor) => (
              <article
                className={GAMEPLAY_STYLES.detailFloorItem}
                key={`${note.game}-${floor.floor}`}
              >
                <h5 className={GAMEPLAY_STYLES.detailFloorTitle}>
                  {floor.floor}
                </h5>
                <p className={GAMEPLAY_STYLES.detailFloorBody}>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={floor.summary}
                  />
                </p>
                <div className={GAMEPLAY_STYLES.detailFloorTagList}>
                  {floor.facilities.map((facility, facilityIndex) => (
                    <span
                      className={GAMEPLAY_STYLES.tag}
                      key={`${note.game}-${floor.floor}-${facilityIndex}`}
                    >
                      <CharacterNameLinkText
                        preferredGame={preferredGame}
                        text={facility}
                      />
                    </span>
                  ))}
                </div>
                {floor.note ? (
                  <p className={GAMEPLAY_STYLES.detailFloorNote}>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={floor.note}
                    />
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {note.facilities ? (
        <section className={GAMEPLAY_STYLES.detailFacilitySection}>
          <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
            {copy.facilityLabel}
          </h4>
          <div className={GAMEPLAY_STYLES.detailFacilityList}>
            {note.facilities.map((facility) => (
              <article
                className={GAMEPLAY_STYLES.detailFacilityItem}
                key={`${note.game}-${facility.name}`}
              >
                <h5 className={GAMEPLAY_STYLES.detailFacilityName}>
                  {facility.name}
                </h5>
                <div className={GAMEPLAY_STYLES.detailFacilityMetaGrid}>
                  <p className={GAMEPLAY_STYLES.detailFacilityMeta}>
                    <span className={GAMEPLAY_STYLES.detailFacilityMetaLabel}>
                      {copy.locationLabel}
                    </span>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={facility.location}
                    />
                  </p>
                  <p className={GAMEPLAY_STYLES.detailFacilityMeta}>
                    <span className={GAMEPLAY_STYLES.detailFacilityMetaLabel}>
                      {copy.unlockLabel}
                    </span>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={facility.unlock}
                    />
                  </p>
                </div>
                <p className={GAMEPLAY_STYLES.detailFacilityBody}>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={facility.body}
                  />
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
};

export default GameplaySeriesNoteCard;
