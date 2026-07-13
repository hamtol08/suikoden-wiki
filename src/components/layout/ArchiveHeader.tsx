/**
 * 전역 헤더, 로고, 검색, 내비게이션 컨트롤을 조합합니다.
 */

import Image from "next/image";
import ArchiveHeaderControls from "@/components/layout/ArchiveHeaderControls";
import {
  APP_ROUTES,
  IMAGE_LOADING,
  ROUTE_ANCHORS,
} from "@/constants/app/app-config";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/constants/app/app-assets";
import {
  ARCHIVE_COPY,
  NAV_GROUPS,
} from "@/constants/archive/archive-content";
import { resolveSearchContext } from "@/constants/search/search-content";
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
