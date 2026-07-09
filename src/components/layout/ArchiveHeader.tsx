/**
 * 전역 헤더, 로고, 검색 색인, 내비게이션 컨트롤을 조합합니다.
 */

import Image from "next/image";
import ArchiveHeaderControls from "@/components/layout/ArchiveHeaderControls";
import { type ArchiveSearchResult } from "@/components/layout/ArchiveSearch";
import {
  APP_ROUTES,
  IMAGE_LOADING,
  ROUTE_ANCHORS,
  buildCharacterDetailPath,
} from "@/constants/app/app-config";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/constants/app/app-assets";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import {
  ARCHIVE_COPY,
  NAV_GROUPS,
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_SEARCH_ALIASES,
  REGION_ATLAS_TABS,
} from "@/constants/archive/archive-content";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
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
import {
  CONTAINER_STYLES,
  HEADER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type ArchiveHeaderProps = {
  activeHref?: string;
  activeLabel?: string | null;
};

type ArchiveSearchContextId =
  keyof typeof ARCHIVE_COPY.header.searchContexts;

type HeaderSearchCopy = Omit<
  typeof ARCHIVE_COPY.header,
  "searchEmpty" | "searchPlaceholder"
> & {
  searchEmpty: string;
  searchPlaceholder: string;
};

type ArchiveSearchContext = {
  copy: HeaderSearchCopy;
  index: readonly ArchiveSearchResult[];
};

const resolveActiveGroupLabel = (
  activeHref: string,
  activeLabel?: string | null,
) => {
  const activeGroup = NAV_GROUPS.find((group) => {
    const groupHrefMatches = group.href === activeHref;
    const itemMatches = group.items.some((item) => {
      const hrefMatches =
        item.href !== ROUTE_ANCHORS.current && item.href === activeHref;
      const labelMatches = activeLabel ? item.label === activeLabel : false;

      return hrefMatches || labelMatches;
    });

    return groupHrefMatches || itemMatches;
  });

  return activeGroup?.label ?? null;
};

const buildScopedHeaderCopy = (contextId: ArchiveSearchContextId) => ({
  ...ARCHIVE_COPY.header,
  searchEmpty: ARCHIVE_COPY.header.searchContexts[contextId].searchEmpty,
  searchPlaceholder:
    ARCHIVE_COPY.header.searchContexts[contextId].searchPlaceholder,
});

const CHARACTER_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: "character-search-index",
  load: () =>
    CHARACTER_SERIES.flatMap((series) =>
      CHARACTER_DATA_BY_GAME[series.id].map((character) => {
        const order = formatCharacterOrder(character.order);
        const meta = [
          series.title,
          character.star,
          character.characterType,
          character.appearanceLocation,
        ]
          .filter(Boolean)
          .join(" · ");

        return {
          href: buildCharacterDetailPath(series.id, character.id),
          id: character.id,
          meta,
          name: character.name,
          order,
          searchText: normalizeArchiveSearchText(
            [
              character.id,
              character.name,
              character.star,
              character.characterType,
              character.appearanceLocation,
              order,
              series.title,
              series.eyebrow,
            ].join(" "),
          ),
        };
      }),
    ),
});

const RUNE_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: "rune-search-index",
  load: () =>
    RUNE_REFERENCES.map((rune) => {
      const categoryLabel = RUNE_CATEGORY_LABELS[rune.category];
      const gameLabel = formatRuneGames(rune.games);
      const functionTypeLabel = getRuneFunctionTypeLabel(rune);

      return {
        href: rune.href,
        id: rune.id,
        meta: [categoryLabel, gameLabel].join(" · "),
        name: rune.name,
        order: "RUNE",
        searchText: normalizeArchiveSearchText(
          [
            rune.id,
            rune.name,
            ...rune.aliases,
            rune.japaneseName ?? "",
            categoryLabel,
            functionTypeLabel,
            gameLabel,
          ].join(" "),
        ),
      };
    }),
});

const ITEM_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: "item-search-index",
  load: () => {
    const itemRecordsByHref = new Map<string, ArchiveSearchResult>();

    ITEM_INDEX_RECORDS.forEach((item) => {
      const categoryLabel = ITEM_CATEGORY_LABELS[item.category];
      const display = buildItemRecordDisplay(item);
      const japaneseNames = getItemJapaneseNames(item);
      const existing = itemRecordsByHref.get(item.href);
      const meta = [
        categoryLabel,
        display.sourceLabel,
        display.price,
      ].filter(Boolean).join(" · ");
      const searchText = normalizeArchiveSearchText(
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
        ].join(" "),
      );

      itemRecordsByHref.set(item.href, {
        href: item.href,
        id: item.id,
        meta: existing ? `${existing.meta} / ${meta}` : meta,
        name: item.name,
        order: "ITEM",
        searchText: existing ?
          normalizeArchiveSearchText(`${existing.searchText} ${searchText}`) :
          searchText,
      });
    });

    return [...itemRecordsByHref.values()];
  },
});

const resolveMonsterGameTitle = (gameId: string) =>
  MONSTER_INDEX_PAGES.find((page) => page.id === gameId)?.title ?? gameId;

const resolveRegionGameTitle = (gameId: string) =>
  REGION_ATLAS_TABS.find((tab) => tab.id === gameId)?.title ?? gameId;

const MONSTER_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: "monster-search-index",
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
          meta: [gameTitle, typeLabel].join(" · "),
          name: monster.name,
          order: "MON",
          searchText: normalizeArchiveSearchText(
            [
              monster.id,
              monster.name,
              monster.originalName,
              monster.japaneseName,
              gameTitle,
              typeLabel,
              ...locations,
              ...drops,
            ].join(" "),
          ),
        },
      ];
    }),
});

const REGION_SEARCH_INDEX: ArchiveSearchResult[] = loadArchiveJsonSafely({
  fallback: [],
  label: "region-search-index",
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
        meta: [gameTitle, region.category, region.ruling].join(" · "),
        name: region.name,
        order: "AREA",
        searchText: normalizeArchiveSearchText(
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
          ].join(" "),
        ),
      };
    }),
});

const resolveSearchContextId = (
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

const SEARCH_INDEX_BY_CONTEXT = {
  characters: CHARACTER_SEARCH_INDEX,
  items: ITEM_SEARCH_INDEX,
  monsters: MONSTER_SEARCH_INDEX,
  regions: REGION_SEARCH_INDEX,
  runes: RUNE_SEARCH_INDEX,
} as const satisfies Record<
  ArchiveSearchContextId,
  readonly ArchiveSearchResult[]
>;

const resolveSearchContext = (activeHref: string): ArchiveSearchContext => {
  const contextId = resolveSearchContextId(activeHref);

  return {
    copy: buildScopedHeaderCopy(contextId),
    index: SEARCH_INDEX_BY_CONTEXT[contextId],
  };
};

const ArchiveHeader = ({
  activeHref = APP_ROUTES.home,
  activeLabel,
}: ArchiveHeaderProps) => {
  const activeGroupLabel = resolveActiveGroupLabel(activeHref, activeLabel);
  const searchContext = resolveSearchContext(activeHref);

  return (
    <header className={CONTAINER_STYLES.header}>
      <div className={RESPONSIVE_SHELL.headerInner}>
        <a className={HEADER_STYLES.logoLink} href={APP_ROUTES.home}>
          <Image
            alt={ARCHIVE_COPY.header.logoAlt}
            className={HEADER_STYLES.logoMark}
            height={IMAGE_SIZES.logoMark.height}
            loading={IMAGE_LOADING.eager}
            src={IMAGE_PATHS.logoMark}
            width={IMAGE_SIZES.logoMark.width}
          />
          <span className={HEADER_STYLES.logoTextGroup}>
            <span className={HEADER_STYLES.logoTitle}>
              {ARCHIVE_COPY.header.brandName}
            </span>
            <span className={HEADER_STYLES.logoKicker}>
              {ARCHIVE_COPY.header.brandKicker}
            </span>
          </span>
        </a>

        <ArchiveHeaderControls
          activeGroupLabel={activeGroupLabel}
          activeHref={activeHref}
          activeLabel={activeLabel}
          copy={{
            header: searchContext.copy,
            sidebar: ARCHIVE_COPY.sidebar,
          }}
          navigationGroups={NAV_GROUPS}
          searchIndex={searchContext.index}
        />
      </div>
    </header>
  );
};

export default ArchiveHeader;
