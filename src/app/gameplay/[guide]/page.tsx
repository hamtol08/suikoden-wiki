/**
 * gameplay/[guide] 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import {
  GameplayCookingContestRecords,
  GameplayDetailSeriesNotes,
  GameplayDuelRecords,
  GameplayGuardianDeityPlanRecords,
  GameplayMinigameRecords,
  GameplayMissablePhaseRecords,
  GameplayRecipeRecords,
  GameplayRestaurantTips,
  GameplayUniteAttackRecords,
  GameplayWarBattleGuide,
} from "@/components/gameplay/detail/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  GAMEPLAY_COPY,
  GAMEPLAY_DETAIL_COPY,
  GAMEPLAY_DETAIL_IDS,
  getGameplayDetailRecord,
  getGameplayDetailStaticParams,
} from "@/constants/gameplay/gameplay-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type GameplayDetailPageProps = {
  params: Promise<{
    guide: string;
  }>;
};

export const generateStaticParams = () => getGameplayDetailStaticParams();

const GameplayDetailPage = async ({ params }: GameplayDetailPageProps) => {
  const { guide } = await params;
  const record = getGameplayDetailRecord(guide);

  if (!record) {
    notFound();
  }

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.gameplay}
        activeLabel={GAMEPLAY_COPY.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={GAMEPLAY_STYLES.shell}>
          <Link className={GAMEPLAY_STYLES.detailBackLink} href={APP_ROUTES.gameplay}>
            {GAMEPLAY_DETAIL_COPY.backLabel}
          </Link>

          <ArchivePageIntro
            body={record.summary}
            eyebrow={record.eyebrow}
            styles={GAMEPLAY_STYLES}
            title={record.title}
          />

          <div className={GAMEPLAY_STYLES.detailPanelGrid}>
            <div className={GAMEPLAY_STYLES.detailMain}>
              <section className={GAMEPLAY_STYLES.detailSection}>
                <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                  {GAMEPLAY_DETAIL_COPY.overviewLabel}
                </h2>
                <div className={GAMEPLAY_STYLES.detailParagraphList}>
                  {record.overview.map((paragraph) => (
                    <p key={paragraph}>
                      <CharacterNameLinkText text={paragraph} />
                    </p>
                  ))}
                </div>
              </section>

              <section className={GAMEPLAY_STYLES.detailSection}>
                <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                  {GAMEPLAY_DETAIL_COPY.keyPointLabel}
                </h2>
                <div className={GAMEPLAY_STYLES.detailCardGrid}>
                  {record.keyPoints.map((point) => (
                    <article className={GAMEPLAY_STYLES.detailCard} key={point.title}>
                      <h3 className={GAMEPLAY_STYLES.detailCardTitle}>
                        <CharacterNameLinkText text={point.title} />
                      </h3>
                      <p className={GAMEPLAY_STYLES.detailCardBody}>
                        <CharacterNameLinkText text={point.body} />
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={GAMEPLAY_STYLES.detailSection}>
                <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                  {GAMEPLAY_DETAIL_COPY.seriesLabel}
                </h2>
                <GameplayDetailSeriesNotes
                  notes={record.seriesNotes}
                  tabbed={record.id === GAMEPLAY_DETAIL_IDS.headquarters}
                />
              </section>

              {record.duelRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.duelDialogLabel}
                  </h2>
                  <GameplayDuelRecords records={record.duelRecords} />
                </section>
              ) : null}

              {record.cookingContestRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.cookingContestLabel}
                  </h2>
                  <GameplayCookingContestRecords
                    records={record.cookingContestRecords}
                  />
                </section>
              ) : null}

              {record.uniteAttackRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.uniteAttackLabel}
                  </h2>
                  <GameplayUniteAttackRecords records={record.uniteAttackRecords} />
                </section>
              ) : null}

              {record.missablePhaseRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.missablePhaseLabel}
                  </h2>
                  <GameplayMissablePhaseRecords
                    records={record.missablePhaseRecords}
                  />
                </section>
              ) : null}

              {record.minigameRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.minigameListLabel}
                  </h2>
                  <GameplayMinigameRecords records={record.minigameRecords} />
                </section>
              ) : null}

              {record.guardianDeityPlanRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.guardianDeityPlanLabel}
                  </h2>
                  <GameplayGuardianDeityPlanRecords
                    records={record.guardianDeityPlanRecords}
                  />
                </section>
              ) : null}

              {record.restaurantTips ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.restaurantTipsLabel}
                  </h2>
                  <GameplayRestaurantTips tips={record.restaurantTips} />
                </section>
              ) : null}

              {record.recipeRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.recipeListLabel}
                  </h2>
                  <GameplayRecipeRecords records={record.recipeRecords} />
                </section>
              ) : null}

              {record.warBattleRecords &&
              record.warCommandGroups &&
              record.warRoleRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.warRecordLabel}
                  </h2>
                  <GameplayWarBattleGuide
                    battles={record.warBattleRecords}
                    commandGroups={record.warCommandGroups}
                    roles={record.warRoleRecords}
                  />
                </section>
              ) : null}
            </div>

            <aside className={GAMEPLAY_STYLES.detailAside}>
              <section className={GAMEPLAY_STYLES.detailSection}>
                <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                  {GAMEPLAY_DETAIL_COPY.checklistLabel}
                </h2>
                <ul className={GAMEPLAY_STYLES.detailChecklist}>
                  {record.checklist.map((item, itemIndex) => (
                    <li
                      className={GAMEPLAY_STYLES.detailChecklistItem}
                      key={`${record.id}-checklist-${itemIndex}`}
                    >
                      <CharacterNameLinkText text={item} />
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GameplayDetailPage;
