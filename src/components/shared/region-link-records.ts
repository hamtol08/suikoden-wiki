/**
 * 지역명 텍스트 링크 치환에 쓰는 지역 참조 목록과 탐색 함수를 제공합니다.
 */

import { escapeArchiveRegExp } from "@/constants/app/archive-utils";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_SEARCH_ALIASES,
} from "@/constants/archive/archive-content";

export type RegionNameLinkReference = {
  game: string;
  href: string;
  name: string;
};

export const REGION_NAME_LINK_REFERENCES: readonly RegionNameLinkReference[] = [
  ...new Map(
    REGION_ATLAS_LOCATIONS.flatMap((region) => {
      const aliases =
        REGION_ATLAS_SEARCH_ALIASES[
          `${region.game}:${region.id}` as keyof typeof REGION_ATLAS_SEARCH_ALIASES
        ] ?? [];
      const names = [
        region.name,
        ...region.locations,
        ...aliases,
      ]
        .map((name) => name.trim())
        .filter((name) => name.length >= 2);

      return [...new Set(names)].map((name) => [
        `${region.game}:${name}`,
        {
          game: region.game,
          href: region.detailHref,
          name,
        },
      ] as const);
    }),
  ).values(),
].toSorted((left, right) => right.name.length - left.name.length);

export const REGION_NAME_LINK_PATTERN = new RegExp(
  `(${REGION_NAME_LINK_REFERENCES.map((reference) =>
    escapeArchiveRegExp(reference.name)
  ).join("|")})`,
  "g",
);

export const resolveRegionLinkReference = (
  name: string,
  preferredGame?: string,
) => {
  const matches = REGION_NAME_LINK_REFERENCES.filter((reference) =>
    reference.name === name
  );

  if (matches.length === 0) {
    return null;
  }

  if (preferredGame) {
    return matches.find((reference) => reference.game === preferredGame) ??
      matches[0];
  }

  return matches[0];
};
