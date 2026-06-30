import ArchiveHeader from "@/components/layout/ArchiveHeader";
import NewsArticleList from "@/components/news/list/NewsArticleList";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import { APP_ROUTES } from "@/constants/app/app-config";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { SUIKODEN_NEWS_ITEMS } from "@/constants/news/news-content";
import {
  APP_SHELL_STYLES,
  CONTAINER_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

const News = () => {
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

          <section className={CONTAINER_STYLES.newsPanel}>
            <NewsArticleList items={SUIKODEN_NEWS_ITEMS} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default News;
