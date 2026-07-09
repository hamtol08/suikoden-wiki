/**
 * 몬스터 색인 서버 셸에서 브라우저 목록용 검색 레코드를 구성합니다.
 */

import { type MonsterBrowserItem } from "@/components/monsters/list/MonsterIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import {
  MONSTER_ARCHIVE_COPY,
  type MonsterIndexRecord,
} from "@/constants/monsters/monster-content";
import { resolveMonsterBossGuide } from "@/constants/monsters/monster-boss-guides";

export const buildMonsterBrowserItem = (
  monster: MonsterIndexRecord,
  groupLabel?: string,
): MonsterBrowserItem => {
  const bossGuide = monster.isBoss
    ? resolveMonsterBossGuide(monster.game, monster.originalName)
    : null;
  const bossGuideSummary = bossGuide
    ? `${MONSTER_ARCHIVE_COPY.labels.bossGuideReady} · ${
        bossGuide.preparation.length + bossGuide.tactics.length
      }${MONSTER_ARCHIVE_COPY.labels.bossGuideCount}`
    : undefined;

  return {
    bossGuideSummary,
    encounters: monster.encounters,
    game: monster.game,
    groupLabel,
    href: monster.detailHref,
    hasDrops: monster.hasDrops,
    id: monster.id,
    isBoss: monster.isBoss,
    japaneseName: monster.japaneseName,
    name: monster.name,
    originalName: monster.originalName,
    searchText: normalizeArchiveSearchText(
      [
        monster.name,
        monster.originalName,
        monster.japaneseName,
        groupLabel ?? "",
        monster.isBoss ? MONSTER_ARCHIVE_COPY.labels.bossType : "",
        bossGuideSummary ?? "",
        ...monster.encounters.flatMap((encounter) => [
          encounter.location,
          encounter.originalLocation,
          ...encounter.drops.flatMap((drop) => [
            drop.name,
            drop.originalName,
            drop.rateLabel,
          ]),
        ]),
      ].join(" "),
    ),
  };
};
