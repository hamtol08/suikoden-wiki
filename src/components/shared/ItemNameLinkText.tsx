/**
 * 본문 속 아이템 이름을 아이템 상세 링크로 치환해 렌더링합니다.
 */

import {
  escapeLinkTextRegExp,
  renderLinkedReferenceText,
} from "@/components/shared/link-text-utils";
import {
  getItemJapaneseNames,
  ITEM_INDEX_RECORDS,
  resolveItemDetailHref,
  type ItemIndexGameId,
} from "@/constants/items/item-content";
import {
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_TOKEN_PATTERN,
} from "@/constants/characters/character-linking";
import { TEXT_STYLES } from "@/constants/styles/ui-styles";

type ItemNameLinkTextProps = {
  linkClassName?: string;
  preferredGame?: ItemIndexGameId;
  text: string;
};

type ItemNameLinkReference = {
  game: ItemIndexGameId;
  href: string;
  name: string;
};

const ITEM_NAME_REFERENCES: readonly ItemNameLinkReference[] =
  ITEM_INDEX_RECORDS.flatMap((item) => {
    const names = [
      item.name,
      ...item.originalNames,
      ...getItemJapaneseNames(item),
    ]
      .map((name) => name.trim())
      .filter(Boolean);
    const uniqueNames = [...new Set(names)];

    return uniqueNames.map((name) => ({
      game: item.game,
      href: item.href,
      name,
    }));
  }).toSorted((left, right) => right.name.length - left.name.length);

const ITEM_NAME_PATTERN = new RegExp(
  `(${ITEM_NAME_REFERENCES.map((reference) => escapeLinkTextRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveItemReference = (
  name: string,
  preferredGame?: ItemIndexGameId,
) => {
  const matches = ITEM_NAME_REFERENCES.filter((reference) =>
    reference.name === name
  );

  if (matches.length === 0) {
    const href = resolveItemDetailHref(name);

    return href ? { game: preferredGame ?? "suikoden-i", href, name } : null;
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
  preferredGame?: ItemIndexGameId,
) => {
  return renderLinkedReferenceText({
    linkClassName,
    pattern: ITEM_NAME_PATTERN,
    postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
    resolveReference: (match) => resolveItemReference(match, preferredGame),
    text,
    tokenPattern: CHARACTER_LINK_TOKEN_PATTERN,
  });
};

const ItemNameLinkText = ({
  linkClassName,
  preferredGame,
  text,
}: ItemNameLinkTextProps) => {
  return <>{renderLinkedText(text, linkClassName, preferredGame)}</>;
};

export default ItemNameLinkText;
