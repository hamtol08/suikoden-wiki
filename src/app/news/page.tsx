/**
 * news 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import NewsArticleList from "@/components/news/list/NewsArticleList";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import ArchiveSectionHeader from "@/components/shared/ArchiveSectionHeader";
import { APP_ROUTES } from "@/constants/app/app-config";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import {
  NEWS_PAGE_COPY,
  SUIKODEN_NEWS_ITEMS,
  SUIKODEN_NEWS_TOPIC_CARDS,
} from "@/constants/news/news-content";
import {
  APP_SHELL_STYLES,
  CARD_STYLES,
  CONTAINER_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

const News = () => {
  const latestItem = SUIKODEN_NEWS_ITEMS[0];

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.news}
        activeLabel={ARCHIVE_COPY.news.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={GAMEPLAY_STYLES.shell}>
          <ArchivePageIntro
            body={ARCHIVE_COPY.news.body}
            eyebrow={ARCHIVE_COPY.news.eyebrow}
            styles={GAMEPLAY_STYLES}
            title={ARCHIVE_COPY.news.title}
          />

          <section className={GAMEPLAY_STYLES.section}>
            <article className={CARD_STYLES.newsSpotlight}>
              <p className={TEXT_STYLES.labelGold}>
                {NEWS_PAGE_COPY.latestEyebrow}
              </p>
              <div className={SECTION_STYLES.timelineMetaRow}>
                <h2 className={TEXT_STYLES.sectionTitle}>
                  {latestItem.title}
                </h2>
                <span className={SECTION_STYLES.timelineTag}>
                  {latestItem.tag}
                </span>
              </div>
              <p className={SECTION_STYLES.timelineDate}>
                {latestItem.date}
              </p>
              <p className={SECTION_STYLES.newsSpotlightBody}>
                {latestItem.body}
              </p>
              <a
                className={CARD_STYLES.newsSpotlightLink}
                href={latestItem.href}
                rel="noreferrer"
                target="_blank"
              >
                {NEWS_PAGE_COPY.latestCta}
              </a>
            </article>
          </section>

          <section className={GAMEPLAY_STYLES.section}>
            <ArchiveSectionHeader
              body={NEWS_PAGE_COPY.topicsBody}
              eyebrow={NEWS_PAGE_COPY.topicsEyebrow}
              title={NEWS_PAGE_COPY.topicsTitle}
            />
            <div className={SECTION_STYLES.newsTopicGrid}>
              {SUIKODEN_NEWS_TOPIC_CARDS.map((topic) => (
                <article className={CARD_STYLES.newsTopic} key={topic.tag}>
                  <p className={TEXT_STYLES.featureEyebrow}>
                    {topic.tag}
                  </p>
                  <h3 className={TEXT_STYLES.cardTitle}>
                    {topic.count}
                    {NEWS_PAGE_COPY.articleCountSuffix}
                  </h3>
                  <p className={SECTION_STYLES.newsTopicMeta}>
                    {NEWS_PAGE_COPY.latestDateLabel} · {topic.latestDate}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className={CONTAINER_STYLES.newsPanel}>
            <div className={SECTION_STYLES.newsHeader}>
              <p className={TEXT_STYLES.labelGold}>
                {NEWS_PAGE_COPY.archiveEyebrow}
              </p>
              <h2 className={SECTION_STYLES.newsTitle}>
                {NEWS_PAGE_COPY.archiveTitle}
              </h2>
            </div>
            <NewsArticleList items={SUIKODEN_NEWS_ITEMS} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default News;
