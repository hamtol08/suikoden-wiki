/**
 * timeline 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import {
  GameplaySection,
  GameplayTagSection,
  TimelineChronicleList,
} from "@/components/gameplay/detail/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  TIMELINE_CHRONICLE_NOTES,
  TIMELINE_COPY,
  TIMELINE_LORE_SECTIONS,
  TIMELINE_WAR_SECTIONS,
  TIMELINE_WORLD_SECTIONS,
} from "@/constants/gameplay/gameplay-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

const Timeline = () => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.timeline}
        activeLabel={TIMELINE_COPY.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={GAMEPLAY_STYLES.shell}>
          <ArchivePageIntro
            body={TIMELINE_COPY.body}
            eyebrow={TIMELINE_COPY.eyebrow}
            styles={GAMEPLAY_STYLES}
            title={TIMELINE_COPY.title}
          />

          <GameplayTagSection
            eyebrow={TIMELINE_COPY.eyebrow}
            gridVariant="timeline"
            items={TIMELINE_WORLD_SECTIONS}
            title={TIMELINE_COPY.worldTitle}
          />

          <GameplayTagSection
            eyebrow={TIMELINE_COPY.eyebrow}
            gridVariant="timeline"
            items={TIMELINE_WAR_SECTIONS}
            title={TIMELINE_COPY.warTitle}
          />

          <GameplayTagSection
            eyebrow={TIMELINE_COPY.eyebrow}
            gridVariant="timeline"
            items={TIMELINE_LORE_SECTIONS}
            title={TIMELINE_COPY.loreTitle}
          />

          <GameplaySection
            eyebrow={TIMELINE_COPY.eyebrow}
            title={TIMELINE_COPY.chronologyTitle}
          >
            <TimelineChronicleList notes={TIMELINE_CHRONICLE_NOTES} />
          </GameplaySection>
        </section>
      </div>
    </main>
  );
};

export default Timeline;
