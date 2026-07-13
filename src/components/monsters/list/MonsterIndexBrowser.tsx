/**
 * 몬스터 도감 목록의 검색어와 애니메이션 표시 상태를 관리합니다.
 */

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import { useArchiveSearch } from "@/components/shared/useArchiveSearch";
import {
  formatArchiveCount,
  formatArchiveNumber,
} from "@/constants/app/archive-utils";
import { type MonsterIndexGameId } from "@/constants/monsters/monster-content";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { MONSTER_STYLES } from "@/constants/styles/ui-styles";

export type MonsterBrowserDrop = {
  href: string | null;
  name: string;
  originalName: string;
  rateLabel: string;
};

export type MonsterBrowserEncounter = {
  drops: readonly MonsterBrowserDrop[];
  href: string | null;
  location: string;
  originalLocation: string;
};

export type MonsterBrowserItem = {
  bossGuideSummary?: string;
  encounters: readonly MonsterBrowserEncounter[];
  game: MonsterIndexGameId;
  groupId?: string;
  groupLabel?: string;
  hasDrops: boolean;
  href: string | null;
  id: string;
  isBoss: boolean;
  japaneseName: string;
  name: string;
  originalName: string;
  searchText: string;
};

type MonsterIndexBrowserCopy = {
  clearSearchLabel: string;
  entryCountSuffix: string;
  labels: {
    bossType: string;
    drops: string;
    englishName: string;
    japaneseName: string;
    location: string;
    noDrop: string;
  };
  noResults: string;
  resultCountSuffix: string;
  searchLabel: string;
  searchPlaceholder: string;
  unavailableDetail: string;
};

type MonsterIndexBrowserProps = {
  copy: MonsterIndexBrowserCopy;
  hideSearch?: boolean;
  monsters: readonly MonsterBrowserItem[];
  panelEyebrow: string;
  panelTitle: string;
};

type MonsterBrowserGroup = {
  id: string;
  monsters: MonsterBrowserItem[];
  title: string;
};

const buildMonsterBrowserGroups = (
  monsters: readonly MonsterBrowserItem[],
): MonsterBrowserGroup[] =>
  monsters.reduce<MonsterBrowserGroup[]>((groups, monster) => {
    if (!monster.groupId && !monster.groupLabel) {
      return groups;
    }

    const groupId = monster.groupId ?? monster.groupLabel ?? monster.game;
    const groupTitle = monster.groupLabel ?? groupId;
    const existingGroup = groups.find((group) => group.id === groupId);

    if (existingGroup) {
      existingGroup.monsters.push(monster);
      return groups;
    }

    return [
      ...groups,
      {
        id: groupId,
        monsters: [monster],
        title: groupTitle,
      },
    ];
  }, []);

const MonsterIndexBrowser = ({
  copy,
  hideSearch = false,
  monsters,
  panelEyebrow,
  panelTitle,
}: MonsterIndexBrowserProps) => {
  const {
    clearSearch,
    filteredRecords: filteredMonsters,
    handleSearchChange,
    normalizedQuery,
    query,
  } = useArchiveSearch(monsters);
  const groupedMonsters = buildMonsterBrowserGroups(filteredMonsters);
  const hasGroupedMonsters = groupedMonsters.length > 0;

  const renderMonsterCard = (monster: MonsterBrowserItem) => (
    <motion.article
      animate={MOTION_PRESETS.listItem.animate}
      className={MONSTER_STYLES.card}
      exit={MOTION_PRESETS.listItem.exit}
      id={monster.id}
      initial={MOTION_PRESETS.listItem.initial}
      key={monster.id}
      transition={MOTION_PRESETS.listItem.transition}
    >
      <header className={MONSTER_STYLES.cardHeader}>
        <h3 className={MONSTER_STYLES.cardName}>
          {monster.href ? (
            <Link
              className={MONSTER_STYLES.cardTitleLink}
              href={monster.href}
            >
              {monster.name}
            </Link>
          ) : (
            monster.name
          )}
        </h3>
        <p className={MONSTER_STYLES.cardOriginal}>
          {copy.labels.englishName} {monster.originalName}
        </p>
        {monster.japaneseName === copy.unavailableDetail ? null : (
          <p className={MONSTER_STYLES.cardOriginal}>
            {copy.labels.japaneseName} {monster.japaneseName}
          </p>
        )}
        {monster.isBoss ? (
          <div className={MONSTER_STYLES.chipRow}>
            <span className={MONSTER_STYLES.chip}>
              {copy.labels.bossType}
            </span>
            {monster.bossGuideSummary ? (
              <span className={MONSTER_STYLES.chip}>
                {monster.bossGuideSummary}
              </span>
            ) : null}
          </div>
        ) : null}
      </header>

      <div className={MONSTER_STYLES.encounterGrid}>
        {monster.encounters.map((encounter, encounterIndex) => (
          <section
            className={MONSTER_STYLES.encounterCard}
            key={`${monster.id}-${encounter.originalLocation}-${encounterIndex}`}
          >
            <div className={MONSTER_STYLES.encounterField}>
              <p className={MONSTER_STYLES.encounterTerm}>
                {copy.labels.location}
              </p>
              {encounter.href ? (
                <Link
                  className={MONSTER_STYLES.encounterLocationLink}
                  href={encounter.href}
                >
                  {encounter.location}
                </Link>
              ) : (
                <p className={MONSTER_STYLES.encounterLocation}>
                  {encounter.location}
                </p>
              )}
            </div>

            <div className={MONSTER_STYLES.encounterField}>
              <p className={MONSTER_STYLES.encounterTerm}>
                {copy.labels.drops}
              </p>
              {encounter.drops.length > 0 ? (
                <ul className={MONSTER_STYLES.dropList}>
                  {encounter.drops.map((drop, dropIndex) => (
                    <li
                      className={MONSTER_STYLES.dropItem}
                      key={`${monster.id}-${encounter.originalLocation}-${drop.originalName}-${dropIndex}`}
                    >
                      {drop.href ? (
                        <Link
                          className={MONSTER_STYLES.dropNameLink}
                          href={drop.href}
                        >
                          {drop.name}
                        </Link>
                      ) : (
                        <span className={MONSTER_STYLES.dropName}>
                          {drop.name}
                        </span>
                      )}
                      <span className={MONSTER_STYLES.dropRate}>
                        {drop.rateLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={MONSTER_STYLES.noDrop}>
                  {copy.labels.noDrop}
                </p>
              )}
            </div>
          </section>
        ))}
      </div>
    </motion.article>
  );

  return (
    <div className={MONSTER_STYLES.browser}>
      {hideSearch ? null : (
        <ArchiveIndexSearch
          ariaLabel={copy.searchLabel}
          clearLabel={copy.clearSearchLabel}
          meta={formatArchiveCount(
            filteredMonsters.length,
            copy.resultCountSuffix,
          )}
          placeholder={copy.searchPlaceholder}
          styles={MONSTER_STYLES}
          value={query}
          onChange={handleSearchChange}
          onClear={clearSearch}
        />
      )}

      <section className={MONSTER_STYLES.panel}>
        <header className={MONSTER_STYLES.panelHeader}>
          <div>
            <p className={MONSTER_STYLES.panelMeta}>{panelEyebrow}</p>
            <h2 className={MONSTER_STYLES.panelTitle}>{panelTitle}</h2>
          </div>
          <p className={MONSTER_STYLES.panelMeta}>
            {formatArchiveNumber(filteredMonsters.length)}
            {copy.entryCountSuffix}
          </p>
        </header>

        <AnimatePresence mode="wait">
          {filteredMonsters.length > 0 ? (
            <motion.div
              animate={MOTION_PRESETS.list.animate}
              className={MONSTER_STYLES.list}
              exit={MOTION_PRESETS.list.exit}
              initial={MOTION_PRESETS.list.initial}
              key={normalizedQuery || "all-monsters"}
              transition={MOTION_PRESETS.list.transition}
            >
              {hasGroupedMonsters ?
                groupedMonsters.map((group) => (
                  <section className={MONSTER_STYLES.listGroup} key={group.id}>
                    <h3 className={MONSTER_STYLES.listGroupTitle}>
                      {group.title}
                    </h3>
                    <div className={MONSTER_STYLES.listGroupItems}>
                      {group.monsters.map(renderMonsterCard)}
                    </div>
                  </section>
                )) :
                filteredMonsters.map(renderMonsterCard)}
            </motion.div>
          ) : (
            <motion.p
              animate={MOTION_PRESETS.listItem.animate}
              className={MONSTER_STYLES.empty}
              exit={MOTION_PRESETS.listItem.exit}
              initial={MOTION_PRESETS.listItem.initial}
              key="empty-monsters"
              transition={MOTION_PRESETS.listItem.transition}
            >
              {copy.noResults}
            </motion.p>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default MonsterIndexBrowser;
