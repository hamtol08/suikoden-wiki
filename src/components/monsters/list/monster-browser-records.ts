/**
 * 몬스터 색인 서버 셸에서 브라우저 목록용 검색 레코드를 구성합니다.
 */

import { type MonsterBrowserItem } from "@/components/monsters/list/MonsterIndexBrowser";
import { buildArchiveSearchText } from "@/constants/app/archive-utils";
import { resolveItemDetailHref } from "@/constants/items/item-content";
import {
  MONSTER_ARCHIVE_COPY,
  type MonsterIndexRecord,
} from "@/constants/monsters/monster-content";
import { resolveMonsterBossGuide } from "@/constants/monsters/monster-boss-guides";

export const buildMonsterBrowserItem = (
  monster: MonsterIndexRecord,
  groupId?: string,
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
    encounters: monster.encounters.map((encounter) => ({
      ...encounter,
      drops: encounter.drops.map((drop) => ({
        ...drop,
        href: drop.href ?? resolveItemDetailHref(drop.name),
      })),
    })),
    game: monster.game,
    groupId,
    groupLabel,
    href: monster.detailHref,
    hasDrops: monster.hasDrops,
    id: monster.id,
    isBoss: monster.isBoss,
    japaneseName: monster.japaneseName,
    name: monster.name,
    originalName: monster.originalName,
    searchText: buildArchiveSearchText(
      [
        monster.name,
        monster.originalName,
        monster.japaneseName,
        groupId ?? "",
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
      ],
    ),
  };
};
