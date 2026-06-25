export const normalizeArchiveSearchText = (value: string) =>
  value.toLocaleLowerCase("ko-KR").replace(/\s+/g, " ").trim();
