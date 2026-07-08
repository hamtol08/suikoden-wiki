/**
 * 보스 몬스터 전용 색인 페이지의 서버 레이아웃과 목록 데이터를 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import MonsterBossIndexBrowser from "@/components/monsters/list/MonsterBossIndexBrowser";
import { buildMonsterBrowserItem } from "@/components/monsters/list/monster-browser-records";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import ArchiveSummaryGrid from "@/components/shared/ArchiveSummaryGrid";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  buildBossMonsterSummaryItems,
  getBossMonsterIndexRecords,
  getBossMonsterIndexSummary,
  MONSTER_ARCHIVE_COPY,
  MONSTER_BOSS_BROWSER_COPY,
  MONSTER_BOSS_PAGE_ID,
  MONSTER_INDEX_PAGES,
  MONSTER_INDEX_TABS,
} from "@/constants/monsters/monster-content";
import {
  APP_SHELL_STYLES,
  MONSTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

const MonsterBossIndexPageShell = () => {
  const activePage = MONSTER_INDEX_TABS.find((page) =>
    page.id === MONSTER_BOSS_PAGE_ID
  ) ?? MONSTER_INDEX_TABS[0];
  const monsters = loadArchiveJsonSafely({
    fallback: [],
    label: "boss-monster-index-records",
    load: () => getBossMonsterIndexRecords(),
  });
  const browserItems = monsters.flatMap((monster) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `boss-monster-browser-record:${monster.id}`,
      load: () => [buildMonsterBrowserItem(monster, monster.game)],
    }),
  );
  const summary = loadArchiveJsonSafely({
    fallback: {
      monsterCount: 0,
      suikodenICount: 0,
      suikodenIICount: 0,
    },
    label: "boss-monster-index-summary",
    load: () => getBossMonsterIndexSummary(),
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={activePage.href} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={MONSTER_STYLES.shell}>
          <ArchivePageIntro
            body={MONSTER_ARCHIVE_COPY.bossBody}
            eyebrow={MONSTER_ARCHIVE_COPY.eyebrow}
            styles={MONSTER_STYLES}
            title={MONSTER_ARCHIVE_COPY.bossTitle}
          />

          <ArchiveIndexTabs
            activeId={MONSTER_BOSS_PAGE_ID}
            ariaLabel={MONSTER_ARCHIVE_COPY.tabsAriaLabel}
            pages={MONSTER_INDEX_TABS}
            styles={MONSTER_STYLES}
          />

          <ArchiveSummaryGrid
            items={buildBossMonsterSummaryItems(summary)}
            styles={MONSTER_STYLES}
          />

          <MonsterBossIndexBrowser
            copy={MONSTER_BOSS_BROWSER_COPY}
            monsters={browserItems}
            panelEyebrow={activePage.eyebrow}
            panelTitle={activePage.title}
            tabs={MONSTER_INDEX_PAGES.map((page) => ({
              id: page.id,
              title: page.title,
            }))}
          />
        </section>
      </div>
    </main>
  );
};

export default MonsterBossIndexPageShell;
