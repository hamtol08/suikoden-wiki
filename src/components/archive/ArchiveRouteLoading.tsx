import Image from "next/image";
import { ARCHIVE_LOADING_COPY } from "@/constants/archive-content";
import { IMAGE_LOADING } from "@/constants/app-config";
import { IMAGE_PATHS, IMAGE_SIZES } from "@/constants/archive-content";
import { ROUTE_LOADING_STYLES } from "@/constants/ui-styles";

const ArchiveRouteLoading = () => {
  return (
    <main className={ROUTE_LOADING_STYLES.shell} aria-busy="true">
      <div className={ROUTE_LOADING_STYLES.field} />
      <div className={ROUTE_LOADING_STYLES.shade} />

      <section className={ROUTE_LOADING_STYLES.stage}>
        <div className={ROUTE_LOADING_STYLES.markStage} aria-hidden="true">
          <span className={ROUTE_LOADING_STYLES.outerRing} />
          <span className={ROUTE_LOADING_STYLES.middleRing} />
          <span className={ROUTE_LOADING_STYLES.innerRing} />
          <div className={ROUTE_LOADING_STYLES.mark}>
            <Image
              alt=""
              className={ROUTE_LOADING_STYLES.markImage}
              height={IMAGE_SIZES.logoMark.height}
              loading={IMAGE_LOADING.eager}
              src={IMAGE_PATHS.logoMark}
              width={IMAGE_SIZES.logoMark.width}
            />
          </div>
        </div>

        <p className={ROUTE_LOADING_STYLES.eyebrow}>
          {ARCHIVE_LOADING_COPY.eyebrow}
        </p>
        <h1 className={ROUTE_LOADING_STYLES.title}>
          {ARCHIVE_LOADING_COPY.title}
        </h1>
        <p className={ROUTE_LOADING_STYLES.body}>
          {ARCHIVE_LOADING_COPY.body}
        </p>
        <div className={ROUTE_LOADING_STYLES.progress} aria-hidden="true">
          <div className={ROUTE_LOADING_STYLES.progressBar} />
        </div>
        <div className={ROUTE_LOADING_STYLES.statusRow}>
          <span className={ROUTE_LOADING_STYLES.spinner} aria-hidden="true" />
          <span>{ARCHIVE_LOADING_COPY.status}</span>
        </div>
        <div className={ROUTE_LOADING_STYLES.signalGrid} aria-hidden="true">
          {ARCHIVE_LOADING_COPY.signalItems.map((item) => (
            <span className={ROUTE_LOADING_STYLES.signal} key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArchiveRouteLoading;
