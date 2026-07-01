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
