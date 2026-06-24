import ArchiveHeader from "@/components/archive/ArchiveHeader";
import ArchivePageIntro from "@/components/archive/ArchivePageIntro";
import {
  GameplayGuidePanels,
  GameplaySection,
  GameplayTagCard,
  GameplayTabs,
} from "@/components/archive/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app-config";
import {
  GAMEPLAY_COPY,
  GAMEPLAY_BATTLE_SECTIONS,
  GAMEPLAY_DUEL_SECTIONS,
  GAMEPLAY_GUIDE_GROUPS,
  GAMEPLAY_HEADQUARTERS_SECTIONS,
  GAMEPLAY_SYSTEMS,
  GAMEPLAY_TABS,
  GAMEPLAY_WAR_BATTLE_SECTIONS,
} from "@/constants/gameplay-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

const Gameplay = () => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.gameplay}
        activeLabel={GAMEPLAY_COPY.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={GAMEPLAY_STYLES.shell}>
          <ArchivePageIntro
            body={GAMEPLAY_COPY.body}
            eyebrow={GAMEPLAY_COPY.eyebrow}
            styles={GAMEPLAY_STYLES}
            title={GAMEPLAY_COPY.title}
          />

          <GameplayTabs
            ariaLabel={GAMEPLAY_COPY.tabsAriaLabel}
            tabs={GAMEPLAY_TABS}
          />

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id="system-overview"
            title={GAMEPLAY_COPY.overviewTitle}
          >
            <div className={GAMEPLAY_STYLES.systemGrid}>
              {GAMEPLAY_SYSTEMS.map((system) => (
                <GameplayTagCard
                  body={system.body}
                  key={system.title}
                  tags={system.points}
                  title={system.title}
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id="battle"
            title={GAMEPLAY_COPY.battleTitle}
          >
            <div className={GAMEPLAY_STYLES.systemGrid}>
              {GAMEPLAY_BATTLE_SECTIONS.map((system) => (
                <GameplayTagCard
                  body={system.body}
                  key={system.title}
                  tags={system.points}
                  title={system.title}
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id="duel"
            title={GAMEPLAY_COPY.duelTitle}
          >
            <div className={GAMEPLAY_STYLES.systemGrid}>
              {GAMEPLAY_DUEL_SECTIONS.map((system) => (
                <GameplayTagCard
                  body={system.body}
                  key={system.title}
                  tags={system.points}
                  title={system.title}
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id="war-battle"
            title={GAMEPLAY_COPY.warBattleTitle}
          >
            <div className={GAMEPLAY_STYLES.systemGrid}>
              {GAMEPLAY_WAR_BATTLE_SECTIONS.map((system) => (
                <GameplayTagCard
                  body={system.body}
                  key={system.title}
                  tags={system.points}
                  title={system.title}
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id="headquarters"
            title={GAMEPLAY_COPY.headquartersTitle}
          >
            <div className={GAMEPLAY_STYLES.systemGrid}>
              {GAMEPLAY_HEADQUARTERS_SECTIONS.map((system) => (
                <GameplayTagCard
                  body={system.body}
                  key={system.title}
                  tags={system.points}
                  title={system.title}
                />
              ))}
            </div>
          </GameplaySection>

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.sourceLabel}
            id="guide-index"
            title={GAMEPLAY_COPY.guideTitle}
          >
            <GameplayGuidePanels games={GAMEPLAY_GUIDE_GROUPS} />
          </GameplaySection>
        </section>
      </div>
    </main>
  );
};

export default Gameplay;
