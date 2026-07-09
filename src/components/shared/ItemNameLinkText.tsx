/**
 * 본문 속 아이템 이름을 아이템 상세 링크로 치환해 렌더링합니다.
 */

import { Fragment, type ReactNode } from "react";
import Link from "next/link";
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

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const isTokenCharacter = (value?: string) => {
  return value ? CHARACTER_LINK_TOKEN_PATTERN.test(value) : false;
};

const isDelimitedItemName = (text: string, offset: number, match: string) => {
  const previous = text[offset - 1];
  const next = text[offset + match.length];

  if (isTokenCharacter(previous)) {
    return false;
  }

  if (!isTokenCharacter(next)) {
    return true;
  }

  return CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN.test(
    text.slice(offset + match.length),
  );
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
  `(${ITEM_NAME_REFERENCES.map((reference) => escapeRegExp(reference.name)).join("|")})`,
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
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  text.replace(ITEM_NAME_PATTERN, (match, _name, offset: number) => {
    if (!isDelimitedItemName(text, offset, match)) {
      return match;
    }

    const reference = resolveItemReference(match, preferredGame);

    if (!reference) {
      return match;
    }

    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }

    nodes.push(
      <Link className={linkClassName} href={reference.href}>
        {match}
      </Link>,
    );
    lastIndex = offset + match.length;

    return match;
  });

  if (nodes.length === 0) {
    return text;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.map((node, index) => (
    <Fragment key={typeof node === "string" ? `${node}-${index}` : index}>
      {node}
    </Fragment>
  ));
};

const ItemNameLinkText = ({
  linkClassName,
  preferredGame,
  text,
}: ItemNameLinkTextProps) => {
  return <>{renderLinkedText(text, linkClassName, preferredGame)}</>;
};

export default ItemNameLinkText;
