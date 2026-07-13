/**
 * 검색과 링크 매칭에 쓰이는 아카이브 문자열 정규화 유틸을 제공합니다.
 */

export const ARCHIVE_LOCALE = "ko-KR";

export const formatArchiveNumber = (value: number) =>
  value.toLocaleString(ARCHIVE_LOCALE);

export const formatArchiveCount = (value: number, suffix: string) =>
  `${formatArchiveNumber(value)}${suffix}`;

export const normalizeArchiveSearchText = (value: string) =>
  value.toLocaleLowerCase(ARCHIVE_LOCALE).replace(/\s+/g, " ").trim();

export const normalizeArchiveCompactText = (value: string) =>
  value.toLocaleLowerCase(ARCHIVE_LOCALE).replace(/\s+/g, "").trim();

export const formatArchiveMeta = (
  values: readonly (number | string | null | undefined | false)[],
) => values.filter(Boolean).join(" · ");

export const buildArchiveSearchText = (
  values: readonly (number | string | null | undefined | false)[],
) => normalizeArchiveSearchText(values.filter(Boolean).join(" "));

export const buildArchiveSlugId = (value: string) =>
  value
    .toLocaleLowerCase("en-US")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const escapeArchiveRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
