/**
 * 몬스터 도감 페이지의 서버 레이아웃과 목록 데이터를 조합합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchiveIndexTabs from "@/components/shared/ArchiveIndexTabs";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import MonsterIndexBrowser, {
  type MonsterBrowserItem,
} from "@/components/monsters/list/MonsterIndexBrowser";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  getMonsterIndexPage,
  getMonsterIndexRecordsByGame,
  getMonsterIndexSummary,
  MONSTER_ARCHIVE_COPY,
  MONSTER_INDEX_PAGES,
  type MonsterIndexGameId,
  type MonsterIndexRecord,
} from "@/constants/monsters/monster-content";
import {
  APP_SHELL_STYLES,
  MONSTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type MonsterIndexPageShellProps = {
  gameId: MonsterIndexGameId;
};

type MonsterIndexPageSummary = ReturnType<typeof getMonsterIndexSummary>;

const summaryItems = (summary: MonsterIndexPageSummary) => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.monsterCount,
    value: `${summary.monsterCount.toLocaleString("ko-KR")}${MONSTER_ARCHIVE_COPY.entryCountSuffix}`,
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.locationCount,
    value: summary.locationCount.toLocaleString("ko-KR"),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.dropCount,
    value: summary.dropCount.toLocaleString("ko-KR"),
  },
];

const buildMonsterBrowserItem = (
  monster: MonsterIndexRecord,
): MonsterBrowserItem => ({
  encounters: monster.encounters,
  href: monster.detailHref,
  hasDrops: monster.hasDrops,
  id: monster.id,
  name: monster.name,
  originalName: monster.originalName,
  searchText: normalizeArchiveSearchText(
    [
      monster.name,
      monster.originalName,
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

const MonsterIndexPageShell = ({ gameId }: MonsterIndexPageShellProps) => {
  const activePage = loadArchiveJsonSafely({
    fallback: () => MONSTER_INDEX_PAGES.find((page) => page.id === gameId) ??
      MONSTER_INDEX_PAGES[0],
    label: `monster-index-page:${gameId}`,
    load: () => getMonsterIndexPage(gameId),
  });

  const monsters = loadArchiveJsonSafely({
    fallback: [],
    label: `monster-index-records:${gameId}`,
    load: () => getMonsterIndexRecordsByGame(gameId),
  });

  const browserItems = monsters.flatMap((monster) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `monster-browser-record:${monster.id}`,
      load: () => [buildMonsterBrowserItem(monster)],
    }),
  );

  const summary = loadArchiveJsonSafely({
    fallback: {
      dropCount: 0,
      locationCount: 0,
      monsterCount: 0,
    },
    label: `monster-index-summary:${gameId}`,
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
            pages={MONSTER_INDEX_PAGES}
            styles={MONSTER_STYLES}
          />

          <section className={MONSTER_STYLES.summaryGrid}>
            {summaryItems(summary).map((item, index) => {
              const isLeadSummary = index === 0;

              return (
                <article
                  className={
                    isLeadSummary ?
                      MONSTER_STYLES.summaryLeadCard :
                      MONSTER_STYLES.summaryCard
                  }
                  key={item.label}
                >
                  <p className={MONSTER_STYLES.summaryLabel}>{item.label}</p>
                  <p className={MONSTER_STYLES.summaryValue}>{item.value}</p>
                </article>
              );
            })}
          </section>

          <MonsterIndexBrowser
            copy={{
              clearSearchLabel: MONSTER_ARCHIVE_COPY.clearSearchLabel,
              entryCountSuffix: MONSTER_ARCHIVE_COPY.entryCountSuffix,
              labels: {
                drops: MONSTER_ARCHIVE_COPY.labels.drops,
                englishName: MONSTER_ARCHIVE_COPY.labels.englishName,
                location: MONSTER_ARCHIVE_COPY.labels.location,
                noDrop: MONSTER_ARCHIVE_COPY.labels.noDrop,
              },
              noResults: MONSTER_ARCHIVE_COPY.noResults,
              resultCountSuffix: MONSTER_ARCHIVE_COPY.resultCountSuffix,
              searchLabel: MONSTER_ARCHIVE_COPY.searchLabel,
              searchPlaceholder: MONSTER_ARCHIVE_COPY.searchPlaceholder,
            }}
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
