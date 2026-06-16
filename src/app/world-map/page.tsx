import Image from "next/image";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import WorldStageMarker from "@/components/archive/WorldStageMarker";
import { APP_ROUTES } from "@/constants/app-config";
import {
  IMAGE_PATHS,
  WORLD_STAGE_MARKERS,
  WORLD_MAP_COPY,
} from "@/constants/archive-content";
import {
  APP_SHELL_STYLES,
  ATLAS_STYLES,
  IMAGE_SIZE_HINTS,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

const WorldMap = () => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={APP_ROUTES.worldMap} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ATLAS_STYLES.shell}>
          <header className={ATLAS_STYLES.intro}>
            <p className={ATLAS_STYLES.introEyebrow}>{WORLD_MAP_COPY.eyebrow}</p>
            <h1 className={ATLAS_STYLES.introTitle}>{WORLD_MAP_COPY.title}</h1>
            <p className={ATLAS_STYLES.introBody}>{WORLD_MAP_COPY.body}</p>
          </header>

          <section className={ATLAS_STYLES.mapPanel}>
            <div className={ATLAS_STYLES.mapCanvas}>
              <Image
                src={IMAGE_PATHS.worldMap}
                alt={WORLD_MAP_COPY.mapAlt}
                fill
                priority
                className={ATLAS_STYLES.mapImage}
                sizes={IMAGE_SIZE_HINTS.worldMap}
              />
              <div className={ATLAS_STYLES.mapVeil} />

              {WORLD_STAGE_MARKERS.map((marker) => (
                <WorldStageMarker key={marker.label} marker={marker} />
              ))}

              <div aria-hidden="true" className={ATLAS_STYLES.mapFrame} />
            </div>
          </section>
        </section>
      </div>

    </main>
  );
};

export default WorldMap;
