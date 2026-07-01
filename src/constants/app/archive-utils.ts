/**
 * 검색과 링크 매칭에 쓰이는 아카이브 문자열 정규화 유틸을 제공합니다.
 */

export const normalizeArchiveSearchText = (value: string) =>
  value.toLocaleLowerCase("ko-KR").replace(/\s+/g, " ").trim();
