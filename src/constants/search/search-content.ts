/**
 * 전역 헤더 검색과 통합 검색 페이지에서 공유하는 검색 인덱스 데이터를 정의합니다.
 */

import { type ArchiveSearchResult } from "@/components/layout/ArchiveSearch";
import {
  APP_ROUTES,
  buildCharacterDetailPath,
} from "@/constants/app/app-config";
import {
  buildArchiveSearchText,
  formatArchiveMeta,
} from "@/constants/app/archive-utils";
import {
  ARCHIVE_DATA_LOAD_LABELS,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import {
  ARCHIVE_HEADER_SEARCH_ORDER_LABELS,
  ARCHIVE_COPY,
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_SEARCH_ALIASES,
  REGION_ATLAS_TABS,
} from "@/constants/archive/archive-content";
import {
  CHARACTER_DATA_BY_GAME,
  CHARACTER_SERIES,
  formatCharacterOrder,
} from "@/constants/characters/character-content";
import {
  buildItemRecordDisplay,
  getItemJapaneseNames,
  ITEM_CATEGORY_LABELS,
  ITEM_INDEX_RECORDS,
} from "@/constants/items/item-content";
import {
  MONSTER_ARCHIVE_COPY,
  MONSTER_INDEX_RECORDS,
  MONSTER_INDEX_PAGES,
} from "@/constants/monsters/monster-content";
import {
  formatRuneGames,
  getRuneFunctionTypeLabel,
  RUNE_CATEGORY_LABELS,
  RUNE_REFERENCES,
} from "@/constants/runes/rune-content";

export type ArchiveSearchContextId =
  keyof typeof ARCHIVE_COPY.header.searchContexts;

export type HeaderSearchCopy = Omit<
  typeof ARCHIVE_COPY.header,
  "searchEmpty" | "searchPlaceholder"
> & {
  searchEmpty: string;
  searchPlaceholder: string;
};

export type ArchiveSearchContext = {
  copy: HeaderSearchCopy;
  index: readonly ArchiveSearchResult[];
};

export const SEARCH_PAGE_COPY = {
  eyebrow: "Search",
  title: "Search Archive",
  body: "인물, 아이템, 문장, 몬스터, 지역 기록을 한 번에 검색합니다.",
  clearSearchLabel: "검색어 지우기",
  filterAriaLabel: "Search archive categories",
  noResults: "검색 조건에 맞는 기록이 없습니다.",
  resultCountSuffix: "건",
  searchLabel: "Archive search",
  searchPlaceholder: "이름, 지역, 문장, 아이템, 몬스터 검색",
  sectionEyebrow: "Archive Index",
  sectionTitle: "Search Results",
  resultCta: "Open Record",
} as const;

export const SEARCH_PAGE_FILTERS = [
  { id: "all", label: "All Records" },
  { id: "characters", label: "Characters" },
  { id: "runes", label: "Runes" },
  { id: "items", label: "Items" },
  { id: "monsters", label: "Monsters" },
  { id: "regions", label: "Regions" },
] as const;

export type SearchPageFilterId = (typeof SEARCH_PAGE_FILTERS)[number]["id"];

export const resolveSearchResultFilterId = (
  record: ArchiveSearchResult,
): Exclude<SearchPageFilterId, "all"> => {
  if (record.href.startsWith(APP_ROUTES.runes)) {
    return "runes";
  }

  if (record.href.startsWith(APP_ROUTES.items)) {
    return "items";
  }

  if (record.href.startsWith(APP_ROUTES.monsters)) {
    return "monsters";
  }

  if (
    record.href.startsWith(APP_ROUTES.regionAtlas) ||
    record.href.startsWith(APP_ROUTES.worldMap)
  ) {
    return "regions";
  }

  return "characters";
};

export const buildScopedHeaderCopy = (contextId: ArchiveSearchContextId) => ({
  ...ARCHIVE_COPY.header,
  searchEmpty: ARCHIVE_COPY.header.searchContexts[contextId].searchEmpty,
  searchPlaceholder:
    ARCHIVE_COPY.header.searchContexts[contextId].searchPlaceholder,
});

export const CHARACTER_SEARCH_INDEX: ArchiveSearchResult[] =
  loadArchiveJsonSafely({
    fallback: [],
    label: ARCHIVE_DATA_LOAD_LABELS.characterSearchIndex,
    load: () =>
      CHARACTER_SERIES.flatMap((series) =>
        CHARACTER_DATA_BY_GAME[series.id].map((character) => {
          const order = formatCharacterOrder(character.order);
          const meta = formatArchiveMeta([
            series.title,
            character.star,
            character.characterType,
            character.appearanceLocation,
          ]);

          return {
            href: buildCharacterDetailPath(series.id, character.id),
            id: character.id,
            meta,
            name: character.name,
            order,
            searchText: buildArchiveSearchText(
              [
                character.id,
                character.name,
                character.star,
                character.characterType,
                character.appearanceLocation,
                order,
                series.title,
                series.eyebrow,
              ],
            ),
          };
        }),
      ),
  });

export const RUNE_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: ARCHIVE_DATA_LOAD_LABELS.runeSearchIndex,
  load: () =>
    RUNE_REFERENCES.map((rune) => {
      const categoryLabel = RUNE_CATEGORY_LABELS[rune.category];
      const gameLabel = formatRuneGames(rune.games);
      const functionTypeLabel = getRuneFunctionTypeLabel(rune);

      return {
        href: rune.href,
        id: rune.id,
        meta: formatArchiveMeta([categoryLabel, gameLabel]),
        name: rune.name,
        order: ARCHIVE_HEADER_SEARCH_ORDER_LABELS.rune,
        searchText: buildArchiveSearchText(
          [
            rune.id,
            rune.name,
            ...rune.aliases,
            rune.japaneseName ?? "",
            categoryLabel,
            functionTypeLabel,
            gameLabel,
          ],
        ),
      };
    }),
});

export const ITEM_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: ARCHIVE_DATA_LOAD_LABELS.itemSearchIndex,
  load: () => {
    const itemRecordsByHref = new Map<string, ArchiveSearchResult>();

    ITEM_INDEX_RECORDS.forEach((item) => {
      const categoryLabel = ITEM_CATEGORY_LABELS[item.category];
      const display = buildItemRecordDisplay(item);
      const japaneseNames = getItemJapaneseNames(item);
      const existing = itemRecordsByHref.get(item.href);
      const meta = formatArchiveMeta([
        categoryLabel,
        display.sourceLabel,
        display.price,
      ]);
      const searchText = buildArchiveSearchText(
        [
          item.id,
          item.name,
          ...item.originalNames,
          ...japaneseNames,
          categoryLabel,
          display.sourceLabel,
          display.price,
          display.shopLocations,
          display.dropLocations,
          display.otherLocations,
          display.dropRates,
          ...item.initialOwners.map((owner) => owner.name),
        ],
      );

      itemRecordsByHref.set(item.href, {
        href: item.href,
        id: item.id,
        meta: existing ? `${existing.meta} / ${meta}` : meta,
        name: item.name,
        order: ARCHIVE_HEADER_SEARCH_ORDER_LABELS.item,
        searchText: existing
          ? buildArchiveSearchText([existing.searchText, searchText])
          : searchText,
      });
    });

    return [...itemRecordsByHref.values()];
  },
});

const resolveMonsterGameTitle = (gameId: string) =>
  MONSTER_INDEX_PAGES.find((page) => page.id === gameId)?.title ?? gameId;

const resolveRegionGameTitle = (gameId: string) =>
  REGION_ATLAS_TABS.find((tab) => tab.id === gameId)?.title ?? gameId;

export const MONSTER_SEARCH_INDEX: ArchiveSearchResult[] =
  loadArchiveJsonSafely({
    fallback: [],
    label: ARCHIVE_DATA_LOAD_LABELS.monsterSearchIndex,
    load: () =>
      MONSTER_INDEX_RECORDS.flatMap((monster) => {
        if (!monster.detailHref) {
          return [];
        }

        const gameTitle = resolveMonsterGameTitle(monster.game);
        const typeLabel = monster.isBoss
          ? MONSTER_ARCHIVE_COPY.labels.bossType
          : MONSTER_ARCHIVE_COPY.labels.fieldType;
        const locations = monster.encounters.map(
          (encounter) => encounter.location,
        );
        const drops = monster.encounters.flatMap((encounter) =>
          encounter.drops.map((drop) => drop.name),
        );

        return [
          {
            href: monster.detailHref,
            id: `${monster.game}-${monster.id}`,
            meta: formatArchiveMeta([gameTitle, typeLabel]),
            name: monster.name,
            order: ARCHIVE_HEADER_SEARCH_ORDER_LABELS.monster,
            searchText: buildArchiveSearchText(
              [
                monster.id,
                monster.name,
                monster.originalName,
                monster.japaneseName,
                gameTitle,
                typeLabel,
                ...locations,
                ...drops,
              ],
            ),
          },
        ];
      }),
  });

export const REGION_SEARCH_INDEX: ArchiveSearchResult[] =
  loadArchiveJsonSafely({
    fallback: [],
    label: ARCHIVE_DATA_LOAD_LABELS.regionSearchIndex,
    load: () =>
      REGION_ATLAS_LOCATIONS.map((region) => {
        const gameTitle = resolveRegionGameTitle(region.game);
        const searchAliases =
          REGION_ATLAS_SEARCH_ALIASES[
            `${region.game}:${region.id}` as keyof typeof REGION_ATLAS_SEARCH_ALIASES
          ] ?? [];

        return {
          href: region.detailHref,
          id: `${region.game}-${region.id}`,
          meta: formatArchiveMeta([gameTitle, region.category, region.ruling]),
          name: region.name,
          order: ARCHIVE_HEADER_SEARCH_ORDER_LABELS.region,
          searchText: buildArchiveSearchText(
            [
              region.id,
              region.name,
              region.category,
              region.status,
              region.ruling,
              region.rune,
              region.description,
              ...region.locations,
              ...region.traits,
              ...searchAliases,
              gameTitle,
            ],
          ),
        };
      }),
  });

export const SEARCH_INDEX_BY_CONTEXT = {
  characters: CHARACTER_SEARCH_INDEX,
  items: ITEM_SEARCH_INDEX,
  monsters: MONSTER_SEARCH_INDEX,
  regions: REGION_SEARCH_INDEX,
  runes: RUNE_SEARCH_INDEX,
} as const satisfies Record<
  ArchiveSearchContextId,
  readonly ArchiveSearchResult[]
>;

export const ALL_ARCHIVE_SEARCH_INDEX = [
  ...CHARACTER_SEARCH_INDEX,
  ...RUNE_SEARCH_INDEX,
  ...ITEM_SEARCH_INDEX,
  ...MONSTER_SEARCH_INDEX,
  ...REGION_SEARCH_INDEX,
] as const;

export const resolveSearchContextId = (
  activeHref: string,
): ArchiveSearchContextId => {
  if (activeHref.startsWith(APP_ROUTES.runes)) {
    return "runes";
  }

  if (activeHref.startsWith(APP_ROUTES.items)) {
    return "items";
  }

  if (activeHref.startsWith(APP_ROUTES.monsters)) {
    return "monsters";
  }

  if (
    activeHref.startsWith(APP_ROUTES.regionAtlas) ||
    activeHref.startsWith(APP_ROUTES.worldMap)
  ) {
    return "regions";
  }

  return "characters";
};

export const resolveSearchContext = (
  activeHref: string,
): ArchiveSearchContext => {
  const contextId = resolveSearchContextId(activeHref);

  return {
    copy: buildScopedHeaderCopy(contextId),
    index: SEARCH_INDEX_BY_CONTEXT[contextId],
  };
};
