/**
 * 몬스터 색인 서버 셸에서 브라우저 목록용 검색 레코드를 구성합니다.
 */

import { type MonsterBrowserItem } from "@/components/monsters/list/MonsterIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import {
  MONSTER_ARCHIVE_COPY,
  type MonsterIndexRecord,
} from "@/constants/monsters/monster-content";

export const buildMonsterBrowserItem = (
  monster: MonsterIndexRecord,
  groupLabel?: string,
): MonsterBrowserItem => ({
  encounters: monster.encounters,
  game: monster.game,
  groupLabel,
  href: monster.detailHref,
  hasDrops: monster.hasDrops,
  id: monster.id,
  isBoss: monster.isBoss,
  name: monster.name,
  originalName: monster.originalName,
  searchText: normalizeArchiveSearchText(
    [
      monster.name,
      monster.originalName,
      groupLabel ?? "",
      monster.isBoss ? MONSTER_ARCHIVE_COPY.labels.bossType : "",
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
});
