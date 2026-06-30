import Image from "next/image";
import ArchiveHeaderControls from "@/components/layout/ArchiveHeaderControls";
import { type CharacterSearchResult } from "@/components/layout/ArchiveSearch";
import {
  APP_ROUTES,
  IMAGE_LOADING,
  ROUTE_ANCHORS,
  buildCharacterDetailPath,
} from "@/constants/app/app-config";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/constants/app/app-assets";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { ARCHIVE_COPY, NAV_GROUPS } from "@/constants/archive/archive-content";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  CHARACTER_DATA_BY_GAME,
  CHARACTER_SERIES,
  formatCharacterOrder,
} from "@/constants/characters/character-content";
import {
  CONTAINER_STYLES,
  HEADER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type ArchiveHeaderProps = {
  activeHref?: string;
  activeLabel?: string | null;
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

const CHARACTER_SEARCH_INDEX: CharacterSearchResult[] = loadArchiveJsonSafely({
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

const ArchiveHeader = ({
  activeHref = APP_ROUTES.home,
  activeLabel,
}: ArchiveHeaderProps) => {
  const activeGroupLabel = resolveActiveGroupLabel(activeHref, activeLabel);

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
            header: ARCHIVE_COPY.header,
            sidebar: ARCHIVE_COPY.sidebar,
          }}
          navigationGroups={NAV_GROUPS}
          searchIndex={CHARACTER_SEARCH_INDEX}
        />
      </div>
    </header>
  );
};

export default ArchiveHeader;
