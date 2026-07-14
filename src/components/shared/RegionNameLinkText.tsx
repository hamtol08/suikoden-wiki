/**
 * 본문 속 지역과 마을 이름을 지역 상세 링크로 치환해 렌더링합니다.
 */

import { renderLinkedReferenceText } from "@/components/shared/link-text-utils";
import {
  REGION_NAME_LINK_PATTERN,
  resolveRegionLinkReference,
} from "@/components/shared/region-link-records";
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

const renderLinkedText = (
  text: string,
  linkClassName: string = TEXT_STYLES.characterNameLink,
  preferredGame?: string,
) =>
  renderLinkedReferenceText({
    linkClassName,
    pattern: REGION_NAME_LINK_PATTERN,
    postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
    resolveReference: (match) =>
      resolveRegionLinkReference(match, preferredGame),
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
