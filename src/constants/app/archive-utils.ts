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
