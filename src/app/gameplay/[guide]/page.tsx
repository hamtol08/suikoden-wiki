import Link from "next/link";
import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import {
  GameplayDetailSeriesNotes,
  GameplayDuelRecords,
  GameplayWarBattleGuide,
} from "@/components/gameplay/GameplayBlocks";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  GAMEPLAY_COPY,
  GAMEPLAY_DETAIL_COPY,
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
                    <p key={paragraph}>{paragraph}</p>
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
                        {point.title}
                      </h3>
                      <p className={GAMEPLAY_STYLES.detailCardBody}>
                        {point.body}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={GAMEPLAY_STYLES.detailSection}>
                <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                  {GAMEPLAY_DETAIL_COPY.seriesLabel}
                </h2>
                <GameplayDetailSeriesNotes notes={record.seriesNotes} />
              </section>

              {record.duelRecords ? (
                <section className={GAMEPLAY_STYLES.detailSection}>
                  <h2 className={GAMEPLAY_STYLES.detailSectionTitle}>
                    {GAMEPLAY_DETAIL_COPY.duelDialogLabel}
                  </h2>
                  <GameplayDuelRecords records={record.duelRecords} />
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
                  {record.checklist.map((item) => (
                    <li className={GAMEPLAY_STYLES.detailChecklistItem} key={item}>
                      {item}
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
