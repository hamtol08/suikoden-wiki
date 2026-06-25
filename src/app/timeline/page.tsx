import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchivePageIntro from "@/components/archive/ArchivePageIntro";
import {
  GameplaySection,
  GameplayTagSection,
  TimelineChronicleList,
} from "@/components/archive/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app-config";
import {
  TIMELINE_CHRONICLE_NOTES,
  TIMELINE_COPY,
  TIMELINE_WORLD_SECTIONS,
} from "@/constants/gameplay-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

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
