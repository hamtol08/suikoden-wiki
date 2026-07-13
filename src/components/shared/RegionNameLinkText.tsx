/**
 * 본문 속 지역과 마을 이름을 지역 상세 링크로 치환해 렌더링합니다.
 */

import {
  escapeLinkTextRegExp,
  renderLinkedReferenceText,
} from "@/components/shared/link-text-utils";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_SEARCH_ALIASES,
} from "@/constants/archive/archive-content";
import {
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_TOKEN_PATTERN,
} from "@/constants/characters/character-linking";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type RegionNameLinkTextProps = {
  linkClassName?: string;
  preferredGame?: string;
  text: string;
};

type RegionNameLinkReference = {
  game: string;
  href: string;
  name: string;
};

const REGION_NAME_REFERENCES: readonly RegionNameLinkReference[] = [
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

const REGION_NAME_PATTERN = new RegExp(
  `(${REGION_NAME_REFERENCES.map((reference) => escapeLinkTextRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveRegionReference = (
  name: string,
  preferredGame?: string,
) => {
  const matches = REGION_NAME_REFERENCES.filter((reference) =>
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

const renderLinkedText = (
  text: string,
  linkClassName: string = TEXT_STYLES.characterNameLink,
  preferredGame?: string,
) =>
  renderLinkedReferenceText({
    linkClassName,
    pattern: REGION_NAME_PATTERN,
    postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
    resolveReference: (match) => resolveRegionReference(match, preferredGame),
    text,
    tokenPattern: CHARACTER_LINK_TOKEN_PATTERN,
  });

const RegionNameLinkText = ({
  linkClassName,
  preferredGame,
  text,
}: RegionNameLinkTextProps) => {
  return <>{renderLinkedText(text, linkClassName, preferredGame)}</>;
};

export default RegionNameLinkText;
