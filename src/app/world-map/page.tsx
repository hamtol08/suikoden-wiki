/**
 * world-map 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import Image from "next/image";
import Link from "next/link";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import WorldStageMarker from "@/components/world-map/WorldStageMarker";
import { APP_ROUTES, IMAGE_LOADING } from "@/constants/app/app-config";
import { IMAGE_PATHS } from "@/constants/app/app-assets";
import {
  WORLD_STAGE_MARKERS,
  WORLD_MAP_COPY,
} from "@/constants/archive/archive-content";
import {
  APP_SHELL_STYLES,
  ATLAS_STYLES,
  IMAGE_SIZE_HINTS,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

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
                loading={IMAGE_LOADING.eager}
                className={ATLAS_STYLES.mapImage}
                sizes={IMAGE_SIZE_HINTS.worldMap}
              />
              <div className={ATLAS_STYLES.mapVeil} />

              {WORLD_STAGE_MARKERS.map((marker, index) => (
                <WorldStageMarker
                  index={index}
                  key={marker.label}
                  marker={marker}
                />
              ))}

              <div aria-hidden="true" className={ATLAS_STYLES.mapFrame} />
            </div>

            <div
              aria-label={WORLD_MAP_COPY.stageNotesLabel}
              className={ATLAS_STYLES.mobileStageNotes}
            >
              {WORLD_STAGE_MARKERS.map((marker) => {
                if (!("description" in marker)) {
                  return null;
                }

                const stageNoteContent = (
                  <>
                    <h2 className={ATLAS_STYLES.mobileStageNoteTitle}>
                      {marker.label}
                    </h2>
                    <p className={ATLAS_STYLES.mobileStageNoteSubtitle}>
                      {marker.subLabel}
                    </p>
                    <p className={ATLAS_STYLES.mobileStageNoteBody}>
                      {marker.description}
                    </p>
                  </>
                );

                return marker.href ? (
                  <Link
                    className={ATLAS_STYLES.mobileStageNoteLink}
                    href={marker.href}
                    key={`${marker.label}-stage-note`}
                  >
                    {stageNoteContent}
                  </Link>
                ) : (
                  <article
                    className={ATLAS_STYLES.mobileStageNoteCard}
                    key={`${marker.label}-stage-note`}
                  >
                    {stageNoteContent}
                  </article>
                );
              })}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default WorldMap;
