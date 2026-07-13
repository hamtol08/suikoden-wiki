/**
 * 문장 색인 서버 셸에서 브라우저 목록용 검색 레코드를 구성합니다.
 */

import { type RuneIndexBrowserItem } from "@/components/runes/list/RuneIndexBrowser";
import { buildArchiveSearchText } from "@/constants/app/archive-utils";
import {
  formatRuneGames,
  getRuneDisplayImageSrc,
  getRuneFunctionTypeLabel,
  getRuneLineageNote,
  isRuneFallbackImage,
  RUNE_ARCHIVE_COPY,
  RUNE_CATEGORY_LABELS,
  type RuneReference,
} from "@/constants/runes/rune-content";

export const buildRuneBrowserItem = (
  rune: RuneReference,
): RuneIndexBrowserItem => {
  const categoryLabel = RUNE_CATEGORY_LABELS[rune.category];
  const gameLabel = formatRuneGames(rune.games);
  const functionTypeLabel = getRuneFunctionTypeLabel(rune);
  const lineageNote = getRuneLineageNote(rune);
  const japaneseName = rune.japaneseName ?? RUNE_ARCHIVE_COPY.unavailableDetail;
  const displayNames = [
    {
      label: RUNE_ARCHIVE_COPY.englishNameLabel,
      value: rune.aliases.join(" / "),
    },
    {
      label: RUNE_ARCHIVE_COPY.japaneseNameLabel,
      value: japaneseName,
    },
  ];

  return {
    categoryLabel,
    displayNames,
    gameLabel,
    href: rune.href,
    id: rune.id,
    imageSrc: getRuneDisplayImageSrc(rune),
    isFallbackImage: isRuneFallbackImage(rune),
    functionTypeLabel,
    name: rune.name,
    searchText: buildArchiveSearchText(
      [
        rune.name,
        ...rune.aliases,
        japaneseName,
        categoryLabel,
        functionTypeLabel,
        lineageNote ?? "",
        gameLabel,
      ],
    ),
  };
};
