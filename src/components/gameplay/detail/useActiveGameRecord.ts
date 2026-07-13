/**
 * 게임플레이 상세의 작품별 탭에서 현재 선택된 작품 기록을 관리합니다.
 */

"use client";

import { useMemo, useState } from "react";
import { buildArchiveSlugId } from "@/constants/app/archive-utils";

type GameRecord = {
  game: string;
};

export const buildGamePanelId = (prefix: string, game: string) => {
  return `${prefix}-${buildArchiveSlugId(game)}`;
};

export const useActiveGameRecord = <RecordType extends GameRecord>(
  records: readonly RecordType[],
) => {
  const initialGame = records[0]?.game ?? "";
  const [activeGame, setActiveGame] = useState(initialGame);
  const activeRecord = useMemo(() => {
    return records.find((record) => record.game === activeGame) ?? records[0];
  }, [activeGame, records]);

  return {
    activeGame,
    activeRecord,
    setActiveGame,
  };
};
