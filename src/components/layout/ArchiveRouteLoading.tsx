import { ARCHIVE_LOADING_COPY } from "@/constants/archive/archive-content";
import { ROUTE_LOADING_STYLES } from "@/constants/styles/ui-styles";

type ArchiveRouteLoadingProps = {
  progressPercent?: number;
};

const getProgressStyle = (progressPercent?: number) => {
  if (progressPercent === undefined) {
    return undefined;
  }

  const normalizedProgress = Math.min(100, Math.max(0, progressPercent));

  return {
    transform: `scaleX(${normalizedProgress / 100})`,
  };
};

const ArchiveRouteLoading = ({ progressPercent }: ArchiveRouteLoadingProps) => {
  return (
    <main className={ROUTE_LOADING_STYLES.shell} aria-busy="true">
      <div className={ROUTE_LOADING_STYLES.field} />
      <div className={ROUTE_LOADING_STYLES.shade} />

      <section className={ROUTE_LOADING_STYLES.stage}>
        <p className={ROUTE_LOADING_STYLES.eyebrow}>
          {ARCHIVE_LOADING_COPY.eyebrow}
        </p>
        <h1 className={ROUTE_LOADING_STYLES.title}>
          {ARCHIVE_LOADING_COPY.title}
        </h1>
        <p className={ROUTE_LOADING_STYLES.body}>
          {ARCHIVE_LOADING_COPY.body}
        </p>
        <div className={ROUTE_LOADING_STYLES.progressStage}>
          <div
            aria-hidden={progressPercent === undefined ? true : undefined}
            className={ROUTE_LOADING_STYLES.progress}
            role={progressPercent === undefined ? undefined : "progressbar"}
            aria-valuemin={progressPercent === undefined ? undefined : 0}
            aria-valuemax={progressPercent === undefined ? undefined : 100}
            aria-valuenow={
              progressPercent === undefined ?
                undefined :
                Math.round(progressPercent)
            }
          >
            <div
              className={
                progressPercent === undefined ?
                  ROUTE_LOADING_STYLES.progressBarIndeterminate :
                  ROUTE_LOADING_STYLES.progressBar
              }
              style={getProgressStyle(progressPercent)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArchiveRouteLoading;
