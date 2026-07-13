/**
 * 게임플레이 상세의 작품별 보충 기록을 탭으로 렌더링합니다.
 */

"use client";

import GameplaySeriesNoteCard, {
  type GameplaySeriesNoteCardCopy,
} from "@/components/gameplay/detail/GameplaySeriesNoteCard";
import { type GameplaySeriesNoteRecord } from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";
import {
  buildGamePanelId,
  useActiveGameRecord,
} from "@/components/gameplay/detail/useActiveGameRecord";

type GameplaySeriesNoteTabsCopy = GameplaySeriesNoteCardCopy & {
  tabsAriaLabel: string;
};

type GameplaySeriesNoteTabsProps = {
  copy: GameplaySeriesNoteTabsCopy;
  notes: readonly GameplaySeriesNoteRecord[];
};

const GameplaySeriesNoteTabs = ({ copy, notes }: GameplaySeriesNoteTabsProps) => {
  const { activeRecord: activeNote, setActiveGame } =
    useActiveGameRecord(notes);

  if (!activeNote) {
    return null;
  }

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
              aria-controls={buildGamePanelId("series-note-panel", note.game)}
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

      <GameplaySeriesNoteCard
        copy={copy}
        id={buildGamePanelId("series-note-panel", activeNote.game)}
        note={activeNote}
        role="tabpanel"
      />
    </div>
  );
};

export default GameplaySeriesNoteTabs;
