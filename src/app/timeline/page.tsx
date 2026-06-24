import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchivePageIntro from "@/components/archive/ArchivePageIntro";
import {
  GameplaySection,
  GameplaySourceLinks,
  GameplayTagCard,
  TimelineChronicleList,
} from "@/components/archive/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app-config";
import {
  TIMELINE_CHRONICLE_NOTES,
  TIMELINE_COPY,
  TIMELINE_SOURCE_LINKS,
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

          <GameplaySection
            eyebrow={TIMELINE_COPY.eyebrow}
            title={TIMELINE_COPY.worldTitle}
          >
            <div className={GAMEPLAY_STYLES.timelineGrid}>
              {TIMELINE_WORLD_SECTIONS.map((section) => (
                <GameplayTagCard
                  body={section.body}
                  key={section.title}
                  tags={section.tags}
                  title={section.title}
                  variant="timeline"
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={TIMELINE_COPY.eyebrow}
            title={TIMELINE_COPY.chronologyTitle}
          >
            <TimelineChronicleList notes={TIMELINE_CHRONICLE_NOTES} />
          </GameplaySection>

          <GameplaySection
            eyebrow={TIMELINE_COPY.eyebrow}
            title={TIMELINE_COPY.sourceTitle}
          >
            <GameplaySourceLinks links={TIMELINE_SOURCE_LINKS} />
          </GameplaySection>
        </section>
      </div>
    </main>
  );
};

export default Timeline;
