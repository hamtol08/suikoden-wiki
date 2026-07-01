/**
 * 지역 아틀라스 목록의 작품 탭과 지역 카드 레이아웃을 조합합니다.
 */

import { BookOpen, Compass } from "lucide-react";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import RegionAtlasTabs from "@/components/regions/list/RegionAtlasTabs";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  REGION_ATLAS_COPY,
  REGION_ATLAS_LOGS,
} from "@/constants/archive/archive-content";
import {
  APP_SHELL_STYLES,
  ATLAS_STYLES,
  GRID_STYLES,
  ICON_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type RegionAtlasPageShellProps = {
  initialTabId?: string;
};

const logIconMap = {
  book: BookOpen,
  compass: Compass,
} as const;

const RegionAtlasPageShell = ({ initialTabId }: RegionAtlasPageShellProps) => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.regionAtlas}
        activeLabel={REGION_ATLAS_COPY.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ATLAS_STYLES.shell}>
          <ArchivePageIntro
            body={REGION_ATLAS_COPY.body}
            eyebrow={REGION_ATLAS_COPY.eyebrow}
            styles={ATLAS_STYLES}
            title={REGION_ATLAS_COPY.title}
          />

          <RegionAtlasTabs initialTabId={initialTabId} />

          <MotionSurface as="section" className={ATLAS_STYLES.logSection}>
            <div className={ATLAS_STYLES.logHeader}>
              <span className={ATLAS_STYLES.logIcon}>
                <BookOpen aria-hidden="true" className={ICON_STYLES.category} />
              </span>
              <h2 className={ATLAS_STYLES.logTitle}>{REGION_ATLAS_COPY.logTitle}</h2>
            </div>
            <div className={GRID_STYLES.atlasLogs}>
              {REGION_ATLAS_LOGS.map((log) => {
                const Icon = logIconMap[log.icon] ?? BookOpen;

                return (
                  <MotionSurface className={ATLAS_STYLES.logCard} key={log.title}>
                    <span className={ATLAS_STYLES.logCardIcon}>
                      <Icon aria-hidden="true" className={ICON_STYLES.category} />
                    </span>
                    <div>
                      <h3 className={ATLAS_STYLES.logCardTitle}>{log.title}</h3>
                      <p className={ATLAS_STYLES.logCardBody}>
                        <CharacterNameLinkText text={log.body} />
                      </p>
                    </div>
                  </MotionSurface>
                );
              })}
            </div>
          </MotionSurface>
        </section>
      </div>
    </main>
  );
};

export default RegionAtlasPageShell;
