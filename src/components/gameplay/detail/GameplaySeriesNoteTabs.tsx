"use client";

/**
 * 게임플레이 상세의 작품별 보충 기록을 탭으로 렌더링합니다.
 */


import { useMemo, useState } from "react";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import { type CharacterGameId } from "@/constants/characters/character-content";
import { type GameplaySeriesNoteRecord } from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";

type GameplaySeriesNoteTabsCopy = {
  facilityLabel: string;
  floorFacilityLabel: string;
  locationLabel: string;
  tabsAriaLabel: string;
  unlockLabel: string;
};

type GameplaySeriesNoteTabsProps = {
  copy: GameplaySeriesNoteTabsCopy;
  notes: readonly GameplaySeriesNoteRecord[];
};

const buildSeriesPanelId = (game: string) => {
  return `series-note-panel-${game.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
};

const getPreferredCharacterGame = (game?: string): CharacterGameId | undefined => {
  if (game === "Suikoden I") {
    return "suikoden-i";
  }

  if (game === "Suikoden II") {
    return "suikoden-ii";
  }

  return undefined;
};

const GameplaySeriesNoteTabs = ({ copy, notes }: GameplaySeriesNoteTabsProps) => {
  const initialGame = notes[0]?.game ?? "";
  const [activeGame, setActiveGame] = useState(initialGame);
  const activeNote = useMemo(() => {
    return notes.find((note) => note.game === activeGame) ?? notes[0];
  }, [activeGame, notes]);

  if (!activeNote) {
    return null;
  }

  const preferredGame = getPreferredCharacterGame(activeNote.game);

  return (
    <div className={GAMEPLAY_STYLES.duelRecordStack}>
      <div
        aria-label={copy.tabsAriaLabel}
        className={GAMEPLAY_STYLES.duelTabList}
        role="tablist"
      >
        {notes.map((note) => {
          const isActive = note.game === activeNote.game;

          return (
            <button
              aria-controls={buildSeriesPanelId(note.game)}
              aria-selected={isActive}
              className={
                isActive ? GAMEPLAY_STYLES.duelTabActive : GAMEPLAY_STYLES.duelTab
              }
              key={note.game}
              onClick={() => setActiveGame(note.game)}
              role="tab"
              type="button"
            >
              {note.game}
            </button>
          );
        })}
      </div>

      <article
        className={GAMEPLAY_STYLES.detailCard}
        id={buildSeriesPanelId(activeNote.game)}
        role="tabpanel"
      >
        <h3 className={GAMEPLAY_STYLES.detailCardTitle}>{activeNote.game}</h3>
        <p className={GAMEPLAY_STYLES.detailCardBody}>
          <CharacterNameLinkText
            preferredGame={preferredGame}
            text={activeNote.body}
          />
        </p>

        {activeNote.points ? (
          <ul className={GAMEPLAY_STYLES.detailPointList}>
            {activeNote.points.map((point, pointIndex) => (
              <li
                className={GAMEPLAY_STYLES.detailPointItem}
                key={`${activeNote.game}-${pointIndex}`}
              >
                <CharacterNameLinkText
                  preferredGame={preferredGame}
                  text={point}
                />
              </li>
            ))}
          </ul>
        ) : null}

        {activeNote.floorFacilities ? (
          <section className={GAMEPLAY_STYLES.detailFacilitySection}>
            <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
              {copy.floorFacilityLabel}
            </h4>
            <div className={GAMEPLAY_STYLES.detailFloorList}>
              {activeNote.floorFacilities.map((floor) => (
                <article
                  className={GAMEPLAY_STYLES.detailFloorItem}
                  key={`${activeNote.game}-${floor.floor}`}
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
                        key={`${activeNote.game}-${floor.floor}-${facilityIndex}`}
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

        {activeNote.facilities ? (
          <section className={GAMEPLAY_STYLES.detailFacilitySection}>
            <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
              {copy.facilityLabel}
            </h4>
            <div className={GAMEPLAY_STYLES.detailFacilityList}>
              {activeNote.facilities.map((facility) => (
                <article
                  className={GAMEPLAY_STYLES.detailFacilityItem}
                  key={`${activeNote.game}-${facility.name}`}
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
    </div>
  );
};

export default GameplaySeriesNoteTabs;
