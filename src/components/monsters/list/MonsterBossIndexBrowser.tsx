"use client";

/**
 * 보스 몬스터 색인의 작품 탭과 검색어 상태를 관리합니다.
 */

import { type ChangeEvent, useMemo, useState } from "react";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import MonsterIndexBrowser, {
  type MonsterBrowserItem,
} from "@/components/monsters/list/MonsterIndexBrowser";
import {
  formatArchiveCount,
  normalizeArchiveSearchText,
} from "@/constants/app/archive-utils";
import { MONSTER_STYLES } from "@/constants/styles/ui-styles";

type MonsterBossGameTab = {
  id: string;
  title: string;
};

type MonsterBossIndexBrowserCopy = {
  clearSearchLabel: string;
  entryCountSuffix: string;
  gameTabsAriaLabel: string;
  labels: {
    bossType: string;
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

type MonsterBossIndexBrowserProps = {
  copy: MonsterBossIndexBrowserCopy;
  monsters: readonly MonsterBrowserItem[];
  panelEyebrow: string;
  panelTitle: string;
  tabs: readonly MonsterBossGameTab[];
};

const MonsterBossIndexBrowser = ({
  copy,
  monsters,
  panelEyebrow,
  panelTitle,
  tabs,
}: MonsterBossIndexBrowserProps) => {
  const [activeGameId, setActiveGameId] = useState(tabs[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeArchiveSearchText(query);
  const activeMonsters = useMemo(
    () => monsters.filter((monster) => monster.groupLabel === activeGameId),
    [activeGameId, monsters],
  );
  const filteredMonsters = useMemo(() => {
    if (!normalizedQuery) {
      return activeMonsters;
    }

    return activeMonsters.filter((monster) =>
      monster.searchText.includes(normalizedQuery)
    );
  }, [activeMonsters, normalizedQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <section className={MONSTER_STYLES.browser}>
      <nav aria-label={copy.gameTabsAriaLabel} className={MONSTER_STYLES.tabs}>
        {tabs.map((tab) => (
          <button
            className={
              tab.id === activeGameId ?
                MONSTER_STYLES.tabActive :
                MONSTER_STYLES.tab
            }
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveGameId(tab.id);
              setQuery("");
            }}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      <ArchiveIndexSearch
        ariaLabel={copy.searchLabel}
        clearLabel={copy.clearSearchLabel}
        meta={formatArchiveCount(filteredMonsters.length, copy.resultCountSuffix)}
        placeholder={copy.searchPlaceholder}
        styles={MONSTER_STYLES}
        value={query}
        onChange={handleSearchChange}
        onClear={clearSearch}
      />

      <MonsterIndexBrowser
        copy={copy}
        hideSearch
        monsters={filteredMonsters}
        panelEyebrow={panelEyebrow}
        panelTitle={panelTitle}
      />
    </section>
  );
};

export default MonsterBossIndexBrowser;
