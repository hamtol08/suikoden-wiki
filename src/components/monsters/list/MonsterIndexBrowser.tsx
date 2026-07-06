"use client";

/**
 * 몬스터 도감 목록의 검색어와 애니메이션 표시 상태를 관리합니다.
 */

import Link from "next/link";
import { type ChangeEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
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
  encounters: readonly MonsterBrowserEncounter[];
  hasDrops: boolean;
  href: string | null;
  id: string;
  name: string;
  originalName: string;
  searchText: string;
};

type MonsterIndexBrowserCopy = {
  clearSearchLabel: string;
  entryCountSuffix: string;
  labels: {
    drops: string;
    englishName: string;
    location: string;
    noDrop: string;
  };
  noResults: string;
  resultCountSuffix: string;
  searchLabel: string;
  searchPlaceholder: string;
};

type MonsterIndexBrowserProps = {
  copy: MonsterIndexBrowserCopy;
  monsters: readonly MonsterBrowserItem[];
  panelEyebrow: string;
  panelTitle: string;
};

const MonsterIndexBrowser = ({
  copy,
  monsters,
  panelEyebrow,
  panelTitle,
}: MonsterIndexBrowserProps) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeArchiveSearchText(query);
  const filteredMonsters = useMemo(() => {
    if (!normalizedQuery) {
      return monsters;
    }

    return monsters.filter((monster) =>
      monster.searchText.includes(normalizedQuery),
    );
  }, [monsters, normalizedQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className={MONSTER_STYLES.browser}>
      <ArchiveIndexSearch
        ariaLabel={copy.searchLabel}
        clearLabel={copy.clearSearchLabel}
        meta={`${filteredMonsters.length.toLocaleString("ko-KR")}${copy.resultCountSuffix}`}
        placeholder={copy.searchPlaceholder}
        styles={MONSTER_STYLES}
        value={query}
        onChange={handleSearchChange}
        onClear={clearSearch}
      />

      <section className={MONSTER_STYLES.panel}>
        <header className={MONSTER_STYLES.panelHeader}>
          <div>
            <p className={MONSTER_STYLES.panelMeta}>{panelEyebrow}</p>
            <h2 className={MONSTER_STYLES.panelTitle}>{panelTitle}</h2>
          </div>
          <p className={MONSTER_STYLES.panelMeta}>
            {filteredMonsters.length.toLocaleString("ko-KR")}
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
              {filteredMonsters.map((monster) => (
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
              ))}
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
