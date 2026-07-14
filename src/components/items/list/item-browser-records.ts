/**
 * 아이템 색인 서버 셸에서 브라우저 목록용 검색 레코드를 구성합니다.
 */

import { type ItemIndexBrowserItem } from "@/components/items/list/ItemIndexBrowser";
import { type LinkedTextPart } from "@/components/shared/LinkedTextParts";
import { buildLinkedTextParts } from "@/components/shared/link-text-utils";
import {
  REGION_NAME_LINK_PATTERN,
  resolveRegionLinkReference,
} from "@/components/shared/region-link-records";
import {
  buildArchiveSearchText,
  escapeArchiveRegExp,
} from "@/constants/app/archive-utils";
import { buildMonsterGamePath } from "@/constants/app/app-config";
import {
  CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
  CHARACTER_LINK_TOKEN_PATTERN,
} from "@/constants/characters/character-linking";
import {
  buildInitialOwnerLabel,
  buildItemRecordDisplay,
  getItemJapaneseNames,
  ITEM_ARCHIVE_COPY,
  ITEM_CATEGORY_LABELS,
  type ItemIndexRecord,
} from "@/constants/items/item-content";
import { MONSTER_INDEX_RECORDS } from "@/constants/monsters/monster-content";
import {
  MONSTER_NAME_TRANSLATIONS as REGION_MONSTER_NAME_TRANSLATIONS,
} from "@/constants/regions/region-detail-content";

type MonsterTextLinkReference = {
  game: string;
  href: string;
  name: string;
};

const MONSTER_TEXT_LINK_REFERENCES: readonly MonsterTextLinkReference[] = [
  ...new Map(
    MONSTER_INDEX_RECORDS.flatMap((monster) => {
      const href =
        monster.detailHref ?? `${buildMonsterGamePath(monster.game)}#${monster.id}`;
      const regionLocalizedName =
        REGION_MONSTER_NAME_TRANSLATIONS[
          monster.originalName as keyof typeof REGION_MONSTER_NAME_TRANSLATIONS
        ];

      return [
        monster.name,
        monster.originalName,
        monster.japaneseName,
        regionLocalizedName,
      ]
        .filter((name): name is string => Boolean(name && name.length >= 2))
        .map((name) => [`${monster.game}:${name}`, {
          game: monster.game,
          href,
          name,
        }] as const);
    }),
  ).values(),
].toSorted((left, right) => right.name.length - left.name.length);

const MONSTER_TEXT_LINK_PATTERN = new RegExp(
  `(${MONSTER_TEXT_LINK_REFERENCES.map((reference) => escapeArchiveRegExp(reference.name)).join("|")})`,
  "g",
);

const resolveMonsterTextLinkReference = (
  name: string,
  preferredGame: string,
) => {
  const matches = MONSTER_TEXT_LINK_REFERENCES.filter((reference) =>
    reference.name === name
  );

  return matches.find((reference) => reference.game === preferredGame) ??
    matches[0] ??
    null;
};

const buildMonsterLinkedTextParts = (
  text: string,
  preferredGame: string,
): readonly LinkedTextPart[] =>
  buildLinkedTextParts({
    pattern: MONSTER_TEXT_LINK_PATTERN,
    resolveReference: (match) =>
      resolveMonsterTextLinkReference(match, preferredGame),
    text,
  });

const buildRegionLinkedTextParts = (
  text: string,
  preferredGame: string,
): readonly LinkedTextPart[] =>
  buildLinkedTextParts({
    pattern: REGION_NAME_LINK_PATTERN,
    postpositionPattern: CHARACTER_LINK_KOREAN_POSTPOSITION_PATTERN,
    resolveReference: (match) =>
      resolveRegionLinkReference(match, preferredGame),
    text,
    tokenPattern: CHARACTER_LINK_TOKEN_PATTERN,
  });

export const buildItemBrowserItem = (
  item: ItemIndexRecord,
): ItemIndexBrowserItem => {
  const categoryLabel = ITEM_CATEGORY_LABELS[item.category];
  const display = buildItemRecordDisplay(item);
  const japaneseNames = getItemJapaneseNames(item);
  const initialOwnerLabel = buildInitialOwnerLabel(item.initialOwners);
  const displayNames = [
    {
      label: ITEM_ARCHIVE_COPY.labels.englishName,
      value: item.originalNames.join(" / "),
    },
    ...(japaneseNames.length > 0 ? japaneseNames : [
      ITEM_ARCHIVE_COPY.unavailableDetail,
    ]).map((name) => ({
      label: ITEM_ARCHIVE_COPY.labels.japaneseName,
      value: name,
    })),
  ];

  return {
    categoryLabel,
    displayNames,
    dropLocations: display.dropLocations,
    dropLocationParts: buildMonsterLinkedTextParts(
      display.dropLocations,
      item.game,
    ),
    dropRates: display.dropRates,
    dropRateParts: buildMonsterLinkedTextParts(display.dropRates, item.game),
    game: item.game,
    href: item.href,
    id: item.id,
    initialOwnerLabel,
    name: item.name,
    otherLocations: display.otherLocations,
    price: display.price,
    searchText: buildArchiveSearchText(
      [
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
        initialOwnerLabel ?? "",
      ],
    ),
    shopLocations: display.shopLocations,
    shopLocationParts: buildRegionLinkedTextParts(
      display.shopLocations,
      item.game,
    ),
    sourceLabel: display.sourceLabel,
  };
};
