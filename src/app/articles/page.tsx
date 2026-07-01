/**
 * articles 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import ArticleCardGrid from "@/components/articles/list/ArticleCardGrid";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import { APP_ROUTES } from "@/constants/app/app-config";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { ARTICLE_INDEX_CARDS } from "@/constants/articles/article-content";
import {
  APP_SHELL_STYLES,
  GAMEPLAY_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

const Articles = () => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.articles}
        activeLabel={ARCHIVE_COPY.articles.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={GAMEPLAY_STYLES.shell}>
          <ArchivePageIntro
            body={ARCHIVE_COPY.articles.body}
            eyebrow={ARCHIVE_COPY.articles.eyebrow}
            styles={GAMEPLAY_STYLES}
            title={ARCHIVE_COPY.articles.title}
          />

          <section className={GAMEPLAY_STYLES.section}>
            <ArticleCardGrid cards={ARTICLE_INDEX_CARDS} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default Articles;
