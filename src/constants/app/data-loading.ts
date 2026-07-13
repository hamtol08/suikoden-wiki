/**
 * 정적 데이터 로딩 실패에 대비한 안전한 JSON 로딩 헬퍼를 제공합니다.
 */

type ArchiveDataLoader<T> = () => T;

type ArchiveDataFallback<T> = T | (() => T);

type ArchiveDataLoadOptions<T> = {
  fallback: ArchiveDataFallback<T>;
  label: string;
  load: ArchiveDataLoader<T>;
};

type ArchiveRecordMapOptions<InputRecord, OutputRecord> = {
  getLabel: (record: InputRecord, index: number) => string;
  map: (record: InputRecord, index: number) => OutputRecord;
  records: readonly InputRecord[];
};

export const buildArchiveDataLabel = (
  label: string,
  ...parts: readonly (number | string)[]
) => [label, ...parts].join(":");

export const ARCHIVE_DATA_LOAD_LABELS = {
  bossMonsterIndexRecords: "boss-monster-index-records",
  bossMonsterIndexSummary: "boss-monster-index-summary",
  characterSearchIndex: "character-search-index",
  itemRouteDetail: (itemId: string) =>
    buildArchiveDataLabel("item-route-detail", itemId),
  itemRoutePage: (gameId: string) =>
    buildArchiveDataLabel("item-route-page", gameId),
  itemSearchIndex: "item-search-index",
  itemStaticParams: "item-static-params",
  monsterBrowserRecord: (monsterId: string) =>
    buildArchiveDataLabel("boss-monster-browser-record", monsterId),
  monsterDetailRoute: (gameId: string, monsterId: string) =>
    buildArchiveDataLabel("monster-detail-route", gameId, monsterId),
  monsterDetailStaticParams: "monster-detail-static-params",
  monsterRoutePage: (gameId: string) =>
    buildArchiveDataLabel("monster-route-page", gameId),
  monsterSearchIndex: "monster-search-index",
  monsterStaticParams: "monster-static-params",
  regionSearchIndex: "region-search-index",
  runeSearchIndex: "rune-search-index",
} as const;

const resolveFallback = <T>(fallback: ArchiveDataFallback<T>) => {
  return typeof fallback === "function"
    ? (fallback as () => T)()
    : fallback;
};

const reportArchiveDataError = (label: string, error: unknown) => {
  console.error(`[archive-data] ${label}`, error);
};

export const loadArchiveJsonSafely = <T>({
  fallback,
  label,
  load,
}: ArchiveDataLoadOptions<T>) => {
  try {
    return load();
  } catch (error) {
    reportArchiveDataError(label, error);

    return resolveFallback(fallback);
  }
};

export const mapArchiveRecordsSafely = <InputRecord, OutputRecord>({
  getLabel,
  map,
  records,
}: ArchiveRecordMapOptions<InputRecord, OutputRecord>) =>
  records.flatMap((record, index) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: getLabel(record, index),
      load: () => [map(record, index)],
    }),
  );
