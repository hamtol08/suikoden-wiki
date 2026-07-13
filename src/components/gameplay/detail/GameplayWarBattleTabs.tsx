/**
 * 작품별 전쟁 전투 기록을 탭으로 전환해 보여줍니다.
 */

"use client";

import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import { resolveCharacterGameIdBySeriesTitle } from "@/constants/characters/character-game-ids";
import { type GameplayWarBattleRecordGroup } from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";
import {
  buildGamePanelId,
  useActiveGameRecord,
} from "@/components/gameplay/detail/useActiveGameRecord";

type GameplayWarBattleTabsCopy = {
  locationLabel: string;
  objectiveLabel: string;
  tabsAriaLabel: string;
};

type GameplayWarBattleTabsProps = {
  copy: GameplayWarBattleTabsCopy;
  groups: readonly GameplayWarBattleRecordGroup[];
};

const GameplayWarBattleTabs = ({ copy, groups }: GameplayWarBattleTabsProps) => {
  const { activeRecord: activeGroup, setActiveGame } =
    useActiveGameRecord(groups);

  if (!activeGroup) {
    return null;
  }

  const preferredGame = resolveCharacterGameIdBySeriesTitle(activeGroup.game);

  return (
    <div className={GAMEPLAY_STYLES.duelRecordStack}>
      {groups.length > 1 ? (
        <div
          aria-label={copy.tabsAriaLabel}
          className={GAMEPLAY_STYLES.duelTabList}
          role="tablist"
        >
          {groups.map((group) => {
            const isActive = group.game === activeGroup.game;

            return (
              <button
                aria-controls={buildGamePanelId("war-battle-panel", group.game)}
                aria-selected={isActive}
                className={
                  isActive ?
                    GAMEPLAY_STYLES.duelTabActive :
                    GAMEPLAY_STYLES.duelTab
                }
                key={group.game}
                onClick={() => setActiveGame(group.game)}
                role="tab"
                type="button"
              >
                {group.game}
              </button>
            );
          })}
        </div>
      ) : null}

      <section
        className={GAMEPLAY_STYLES.duelGameGroup}
        id={buildGamePanelId("war-battle-panel", activeGroup.game)}
        role="tabpanel"
      >
        <h3 className={GAMEPLAY_STYLES.duelGameTitle}>{activeGroup.game}</h3>
        <div className={GAMEPLAY_STYLES.warBattleList}>
          {activeGroup.records.map((battle) => (
            <article
              className={GAMEPLAY_STYLES.warBattleCard}
              key={`${battle.game}-${battle.title}-${battle.location}`}
            >
              <header className={GAMEPLAY_STYLES.warBattleHeader}>
                <div>
                  <p className={GAMEPLAY_STYLES.warGameLabel}>{battle.game}</p>
                  <h4 className={GAMEPLAY_STYLES.warBattleTitle}>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={battle.title}
                    />
                  </h4>
                </div>
                <div className={GAMEPLAY_STYLES.warBattleMetaGrid}>
                  <p className={GAMEPLAY_STYLES.warBattleMeta}>
                    <span className={GAMEPLAY_STYLES.warBattleMetaLabel}>
                      {copy.locationLabel}
                    </span>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={battle.location}
                    />
                  </p>
                  <p className={GAMEPLAY_STYLES.warBattleMeta}>
                    <span className={GAMEPLAY_STYLES.warBattleMetaLabel}>
                      {copy.objectiveLabel}
                    </span>
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={battle.objective}
                    />
                  </p>
                </div>
              </header>
              <p className={GAMEPLAY_STYLES.warBattleNote}>
                <CharacterNameLinkText
                  preferredGame={preferredGame}
                  text={battle.note}
                />
              </p>
              <div className={GAMEPLAY_STYLES.warTagList}>
                {battle.tags.map((tag, tagIndex) => (
                  <span
                    className={GAMEPLAY_STYLES.tag}
                    key={`${battle.game}-${battle.title}-${tagIndex}`}
                  >
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={tag}
                    />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameplayWarBattleTabs;
