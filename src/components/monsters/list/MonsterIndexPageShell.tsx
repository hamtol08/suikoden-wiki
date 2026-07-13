/**
 * 몬스터 도감 페이지의 서버 레이아웃과 목록 데이터를 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchiveSummaryGrid from "@/components/shared/ArchiveSummaryGrid";
import MonsterIndexBrowser from "@/components/monsters/list/MonsterIndexBrowser";
import { buildMonsterBrowserItem } from "@/components/monsters/list/monster-browser-records";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
  mapArchiveRecordsSafely,
} from "@/constants/app/data-loading";
import {
  buildMonsterSummaryItems,
  getMonsterIndexPage,
  getMonsterIndexRecordsByGame,
  getMonsterIndexSummary,
  MONSTER_ARCHIVE_COPY,
  MONSTER_BROWSER_COPY,
  MONSTER_INDEX_PAGES,
  MONSTER_INDEX_TABS,
  type MonsterIndexGameId,
} from "@/constants/monsters/monster-content";
import {
  APP_SHELL_STYLES,
  MONSTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type MonsterIndexPageShellProps = {
  gameId: MonsterIndexGameId;
};

const MonsterIndexPageShell = ({ gameId }: MonsterIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => MONSTER_INDEX_PAGES.find((page) => page.id === gameId) ??
      MONSTER_INDEX_PAGES[0],
    label: buildArchiveDataLabel("monster-index-page", gameId),
    load: () => getMonsterIndexPage(gameId),
  });

  const monsters = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("monster-index-records", gameId),
    load: () => getMonsterIndexRecordsByGame(gameId),
  });

  const browserItems = mapArchiveRecordsSafely({
    getLabel: (monster) =>
      buildArchiveDataLabel("monster-browser-record", monster.id),
    map: (monster) => buildMonsterBrowserItem(monster),
    records: monsters,
  });

  const summary = loadArchiveJsonSafely({
    fallback: {
      dropCount: 0,
      locationCount: 0,
      monsterCount: 0,
    },
    label: buildArchiveDataLabel("monster-index-summary", gameId),
    load: () => getMonsterIndexSummary(gameId),
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={MONSTER_STYLES.shell}>
          <ArchivePageIntro
            body={MONSTER_ARCHIVE_COPY.body}
            eyebrow={MONSTER_ARCHIVE_COPY.eyebrow}
            styles={MONSTER_STYLES}
            title={MONSTER_ARCHIVE_COPY.title}
          />

          <ArchiveIndexTabs
            activeId={gameId}
            ariaLabel={MONSTER_ARCHIVE_COPY.tabsAriaLabel}
            pages={MONSTER_INDEX_TABS}
            styles={MONSTER_STYLES}
          />

          <ArchiveSummaryGrid
            items={buildMonsterSummaryItems(summary)}
            styles={MONSTER_STYLES}
          />

          <MonsterIndexBrowser
            copy={MONSTER_BROWSER_COPY}
            monsters={browserItems}
            panelEyebrow={activePage.eyebrow}
            panelTitle={activePage.title}
          />
        </section>
      </div>
    </main>
  );
};

export default MonsterIndexPageShell;
