/**
 * 보스 몬스터 목록의 검색어와 애니메이션 표시 상태를 관리합니다.
 */

"use client";

import { useMemo, useState } from "react";
import ArchiveIndexSearch from "@/components/shared/ArchiveIndexSearch";
import MonsterIndexBrowser, {
  type MonsterBrowserItem,
} from "@/components/monsters/list/MonsterIndexBrowser";
import { useArchiveSearch } from "@/components/shared/useArchiveSearch";
import {
  formatArchiveCount,
} from "@/constants/app/archive-utils";
import { MONSTER_STYLES } from "@/constants/styles/ui-styles";

type MonsterBossGameTab = {
  eyebrow: string;
  id: string;
  title: string;
};

type MonsterBossIndexBrowserCopy = {
  clearSearchLabel: string;
  entryCountSuffix: string;
  gameTabsAriaLabel: string;
  labels: {
    bossType: string;
    bossGuideCount: string;
    bossGuideReady: string;
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
  const activeTab = tabs.find((tab) => tab.id === activeGameId) ?? tabs[0];
  const activeMonsters = useMemo(
    () => monsters.filter((monster) => monster.groupId === activeGameId),
    [activeGameId, monsters],
  );
  const {
    clearSearch,
    filteredRecords: filteredMonsters,
    handleSearchChange,
    query,
  } = useArchiveSearch(activeMonsters);

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
              clearSearch();
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
        panelEyebrow={activeTab?.eyebrow ?? panelEyebrow}
        panelTitle={activeTab?.title ?? panelTitle}
      />
    </section>
  );
};

export default MonsterBossIndexBrowser;
