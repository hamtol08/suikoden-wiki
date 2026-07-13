/**
 * 작품별 일기토 기록과 대응 대사를 탭으로 전환해 보여줍니다.
 */

"use client";

import {
  type GameplayDuelActionId,
  type GameplayDuelRecordGroup,
} from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";
import {
  buildGamePanelId,
  useActiveGameRecord,
} from "@/components/gameplay/detail/useActiveGameRecord";

type GameplayDuelTabsCopy = {
  cueLabel: string;
  enemyMoveLabel: string;
  locationLabel: string;
  playerLabel: string;
  responseLabel: string;
  tabsAriaLabel: string;
};

type GameplayDuelTabsProps = {
  actionLabels: Record<GameplayDuelActionId, string>;
  copy: GameplayDuelTabsCopy;
  groups: readonly GameplayDuelRecordGroup[];
};

const GameplayDuelTabs = ({
  actionLabels,
  copy,
  groups,
}: GameplayDuelTabsProps) => {
  const { activeRecord: activeGroup, setActiveGame } =
    useActiveGameRecord(groups);

  if (!activeGroup) {
    return null;
  }

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
                aria-controls={buildGamePanelId("duel-panel", group.game)}
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
        id={buildGamePanelId("duel-panel", activeGroup.game)}
        role="tabpanel"
      >
        <h3 className={GAMEPLAY_STYLES.duelGameTitle}>{activeGroup.game}</h3>
        <div className={GAMEPLAY_STYLES.duelRecordGrid}>
          {activeGroup.records.map((record) => (
            <article
              className={GAMEPLAY_STYLES.duelRecordCard}
              key={`${record.game}-${record.opponent}-${record.player}`}
            >
              <header className={GAMEPLAY_STYLES.duelRecordHeader}>
                <div>
                  <p className={GAMEPLAY_STYLES.duelRecordGame}>
                    {record.game}
                  </p>
                  <h4 className={GAMEPLAY_STYLES.duelRecordTitle}>
                    {record.opponent}
                  </h4>
                </div>
                <div className={GAMEPLAY_STYLES.duelRecordMetaGrid}>
                  <p className={GAMEPLAY_STYLES.duelRecordMeta}>
                    <span className={GAMEPLAY_STYLES.duelRecordMetaLabel}>
                      {copy.playerLabel}
                    </span>
                    {record.player}
                  </p>
                  <p className={GAMEPLAY_STYLES.duelRecordMeta}>
                    <span className={GAMEPLAY_STYLES.duelRecordMetaLabel}>
                      {copy.locationLabel}
                    </span>
                    {record.location}
                  </p>
                </div>
              </header>

              {record.note ? (
                <p className={GAMEPLAY_STYLES.duelRecordNote}>{record.note}</p>
              ) : null}

              <div className={GAMEPLAY_STYLES.duelPatternGrid}>
                {record.patterns.map((pattern) => (
                  <section
                    className={GAMEPLAY_STYLES.duelPatternCard}
                    key={`${record.game}-${record.opponent}-${pattern.enemyMove}`}
                  >
                    <div className={GAMEPLAY_STYLES.duelPatternHeader}>
                      <p className={GAMEPLAY_STYLES.duelPatternMeta}>
                        <span className={GAMEPLAY_STYLES.duelPatternLabel}>
                          {copy.enemyMoveLabel}
                        </span>
                        {actionLabels[pattern.enemyMove]}
                      </p>
                      <p className={GAMEPLAY_STYLES.duelPatternMeta}>
                        <span className={GAMEPLAY_STYLES.duelPatternLabel}>
                          {copy.responseLabel}
                        </span>
                        {actionLabels[pattern.response]}
                      </p>
                    </div>
                    <p className={GAMEPLAY_STYLES.duelCueTitle}>
                      {copy.cueLabel}
                    </p>
                    <ul className={GAMEPLAY_STYLES.duelLineList}>
                      {pattern.lines.map((line, lineIndex) => (
                        <li
                          className={GAMEPLAY_STYLES.duelLineItem}
                          key={`${record.game}-${record.opponent}-${pattern.enemyMove}-${lineIndex}`}
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameplayDuelTabs;
