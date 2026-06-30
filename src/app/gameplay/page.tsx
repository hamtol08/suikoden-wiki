import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import {
  GameplayGuidePanels,
  GameplaySection,
  GameplayTagSection,
  GameplayTabs,
} from "@/components/gameplay/detail/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  GAMEPLAY_COPY,
  GAMEPLAY_BATTLE_SECTIONS,
  GAMEPLAY_DUEL_SECTIONS,
  GAMEPLAY_GUIDE_GROUPS,
  GAMEPLAY_HEADQUARTERS_SECTIONS,
  GAMEPLAY_SECTION_IDS,
  GAMEPLAY_SYSTEMS,
  GAMEPLAY_TABS,
  GAMEPLAY_WAR_BATTLE_SECTIONS,
} from "@/constants/gameplay/gameplay-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

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

          <GameplayTagSection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.systemOverview}
            items={GAMEPLAY_SYSTEMS}
            title={GAMEPLAY_COPY.overviewTitle}
          />

          <GameplayTagSection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.battle}
            items={GAMEPLAY_BATTLE_SECTIONS}
            title={GAMEPLAY_COPY.battleTitle}
          />

          <GameplayTagSection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.duel}
            items={GAMEPLAY_DUEL_SECTIONS}
            title={GAMEPLAY_COPY.duelTitle}
          />

          <GameplayTagSection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.warBattle}
            items={GAMEPLAY_WAR_BATTLE_SECTIONS}
            title={GAMEPLAY_COPY.warBattleTitle}
          />

          <GameplayTagSection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.headquarters}
            items={GAMEPLAY_HEADQUARTERS_SECTIONS}
            title={GAMEPLAY_COPY.headquartersTitle}
          />

          <GameplaySection
            eyebrow={GAMEPLAY_COPY.eyebrow}
            id={GAMEPLAY_SECTION_IDS.guideIndex}
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
