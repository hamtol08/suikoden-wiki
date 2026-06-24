type ArchiveDataLoader<T> = () => T;

type ArchiveDataFallback<T> = T | (() => T);

type ArchiveDataLoadOptions<T> = {
  fallback: ArchiveDataFallback<T>;
  label: string;
  load: ArchiveDataLoader<T>;
};

type ArchiveAsyncDataLoadOptions<T> = {
  fallback: ArchiveDataFallback<T>;
  label: string;
  load: () => Promise<T>;
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

export const loadArchiveJsonSafelyAsync = async <T>({
  fallback,
  label,
  load,
}: ArchiveAsyncDataLoadOptions<T>) => {
  try {
    return await load();
  } catch (error) {
    reportArchiveDataError(label, error);

    return resolveFallback(fallback);
  }
};
