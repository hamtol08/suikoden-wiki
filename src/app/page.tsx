/**
 * 홈 화면의 히어로, 주요 아티클, 뉴스 섹션을 렌더링하는 엔트리 페이지입니다.
 */

import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  Compass,
  History,
  Sparkles,
  Swords,
  Users,
} from "lucide-react";
import ArticleCardGrid from "@/components/articles/list/ArticleCardGrid";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import NewsArticleList from "@/components/news/list/NewsArticleList";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import ArchiveLinkCardGrid from "@/components/shared/ArchiveLinkCardGrid";
import ArchiveSectionHeader from "@/components/shared/ArchiveSectionHeader";
import MotionSurface from "@/components/shared/MotionSurface";
import {
  APP_ROUTES,
  DOM_IDS,
  IMAGE_LOADING,
} from "@/constants/app/app-config";
import { IMAGE_PATHS } from "@/constants/app/app-assets";
import {
  ARCHIVE_CATEGORIES,
  ARCHIVE_COPY,
  RECENT_UPDATE_CARDS,
  TRENDING_STARS,
} from "@/constants/archive/archive-content";
import { FEATURE_CARDS } from "@/constants/articles/article-content";
import { SUIKODEN_NEWS_ITEMS } from "@/constants/news/news-content";
import {
  APP_SHELL_STYLES,
  CARD_STYLES,
  CONTAINER_STYLES,
  GRID_STYLES,
  HERO_STYLES,
  ICON_STYLES,
  IMAGE_SIZE_HINTS,
  RIGHT_RAIL_STYLES,
  RESPONSIVE_SHELL,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

const categoryIconMap = {
  archive: Archive,
  compass: Compass,
  history: History,
  sparkles: Sparkles,
  swords: Swords,
  users: Users,
} as const;

const Home = () => {
  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader />

      <div className={RESPONSIVE_SHELL.bodyGrid}>
        <section className={RESPONSIVE_SHELL.contentPad}>
          <MotionSurface as="div" className={CONTAINER_STYLES.hero}>
            <div className={CONTAINER_STYLES.heroMedia}>
              <Image
                src={IMAGE_PATHS.hdRemaster}
                alt={ARCHIVE_COPY.hero.imageAlt}
                fill
                loading={IMAGE_LOADING.eager}
                className={HERO_STYLES.image}
                sizes={IMAGE_SIZE_HINTS.hero}
              />
              <div className={HERO_STYLES.overlay} />
              <div className={HERO_STYLES.titleScrim} />
              <div className={HERO_STYLES.content}>
                <h1 className={HERO_STYLES.title}>
                  {ARCHIVE_COPY.hero.title}
                </h1>
              </div>
            </div>
          </MotionSurface>

          <MotionSurface as="section" className={SECTION_STYLES.block} id={DOM_IDS.featured}>
            <ArchiveSectionHeader
              action={{
                href: APP_ROUTES.articles,
                label: ARCHIVE_COPY.featured.viewAll,
              }}
              eyebrow={ARCHIVE_COPY.featured.eyebrow}
              title={ARCHIVE_COPY.featured.title}
            />
            <ArticleCardGrid cards={FEATURE_CARDS} />
          </MotionSurface>

          <MotionSurface as="section" className={SECTION_STYLES.block}>
            <h2 className={TEXT_STYLES.sectionTitle}>{ARCHIVE_COPY.explore.title}</h2>
            <div className={GRID_STYLES.categories}>
              {ARCHIVE_CATEGORIES.map((category) => {
                const Icon = categoryIconMap[category.icon];

                return (
                  <Link
                    className={CARD_STYLES.category}
                    href={category.href}
                    key={category.title}
                  >
                    <span className={SECTION_STYLES.categoryIcon}>
                      <Icon aria-hidden="true" className={ICON_STYLES.category} />
                    </span>
                    <p className={TEXT_STYLES.categoryTitle}>{category.title}</p>
                    <p className={TEXT_STYLES.cardBody}>
                      {category.body}
                    </p>
                  </Link>
                );
              })}
            </div>
          </MotionSurface>

          <MotionSurface as="section" className={SECTION_STYLES.block}>
            <ArchiveSectionHeader
              body={ARCHIVE_COPY.recentUpdates.body}
              eyebrow={ARCHIVE_COPY.recentUpdates.eyebrow}
              title={ARCHIVE_COPY.recentUpdates.title}
            />
            <ArchiveLinkCardGrid
              actionLabel={ARCHIVE_COPY.articles.openArticle}
              cards={RECENT_UPDATE_CARDS}
              gridClassName={GRID_STYLES.recentUpdates}
            />
          </MotionSurface>

          <MotionSurface as="section" className={CONTAINER_STYLES.newsPanel}>
            <div className={SECTION_STYLES.newsHeader}>
              <div className={SECTION_STYLES.headerRow}>
                <h2 className={SECTION_STYLES.newsTitle}>
                  {ARCHIVE_COPY.news.title}
                </h2>
                <Link className={SECTION_STYLES.viewAllLink} href={APP_ROUTES.news}>
                  {ARCHIVE_COPY.news.viewAll}
                </Link>
              </div>
            </div>
            <NewsArticleList items={SUIKODEN_NEWS_ITEMS.slice(0, 3)} />
          </MotionSurface>
        </section>

        <aside className={RESPONSIVE_SHELL.rightRailPad}>
          <MotionSurface as="blockquote" className={RIGHT_RAIL_STYLES.quote}>
            <p className={RIGHT_RAIL_STYLES.quoteOriginal}>
              {ARCHIVE_COPY.quote.original}
            </p>
            <p className={RIGHT_RAIL_STYLES.quoteBody}>
              <CharacterNameLinkText text={ARCHIVE_COPY.quote.body} />
            </p>
            <footer className={RIGHT_RAIL_STYLES.quoteFooter}>
              <CharacterNameLinkText text={ARCHIVE_COPY.quote.author} />
            </footer>
          </MotionSurface>

          <MotionSurface as="section" className={CONTAINER_STYLES.navyPanel}>
            <h2 className={RIGHT_RAIL_STYLES.trendingTitle}>{ARCHIVE_COPY.trending.title}</h2>
            <div className={RIGHT_RAIL_STYLES.trendingList}>
              {TRENDING_STARS.map((star) => (
                <Link
                  className={RIGHT_RAIL_STYLES.trendingLink}
                  href={star.href}
                  key={star.label}
                >
                  {star.label}
                </Link>
              ))}
            </div>
          </MotionSurface>
        </aside>
      </div>

    </main>
  );
};

export default Home;
