import Image from "next/image";
import {
  Archive,
  Compass,
  History,
  Sparkles,
  Swords,
  Users,
} from "lucide-react";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import MotionSurface from "@/components/archive/MotionSurface";
import {
  DOM_IDS,
  IMAGE_LOADING,
  ROUTE_ANCHORS,
} from "@/constants/app-config";
import {
  ARCHIVE_CATEGORIES,
  ARCHIVE_COPY,
  ARCHIVE_STATS,
  FEATURE_CARDS,
  IMAGE_PATHS,
  IMAGE_SIZES,
  TIMELINE_ITEMS,
  TRENDING_STARS,
} from "@/constants/archive-content";
import { THEME_CLASSES } from "@/constants/theme";
import {
  APP_SHELL_STYLES,
  CARD_STYLES,
  CONTAINER_STYLES,
  GRID_STYLES,
  HERO_STYLES,
  ICON_STYLES,
  IMAGE_SIZE_HINTS,
  IMAGE_STYLES,
  RIGHT_RAIL_STYLES,
  RESPONSIVE_SHELL,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/ui-styles";

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
          <div className={CONTAINER_STYLES.hero}>
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
          </div>

          <section className={SECTION_STYLES.block} id={DOM_IDS.featured}>
            <div className={SECTION_STYLES.headerRow}>
              <div>
                <p className={TEXT_STYLES.labelGold}>{ARCHIVE_COPY.featured.eyebrow}</p>
                <h2 className={TEXT_STYLES.sectionTitle}>{ARCHIVE_COPY.featured.title}</h2>
              </div>
              <a className={SECTION_STYLES.viewAllLink} href={ROUTE_ANCHORS.current}>
                {ARCHIVE_COPY.featured.viewAll}
              </a>
            </div>
            <div className={GRID_STYLES.feature}>
              {FEATURE_CARDS.map((card, index) => (
                <MotionSurface className={CARD_STYLES.feature} key={card.title}>
                  <div className={CARD_STYLES.featureImage}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      loading={
                        index === 0
                          ? IMAGE_LOADING.eager
                          : IMAGE_LOADING.lazy
                      }
                      className={IMAGE_STYLES.objectCover}
                      sizes={IMAGE_SIZE_HINTS.feature}
                    />
                  </div>
                  <div className={SECTION_STYLES.cardBody}>
                    <p className={TEXT_STYLES.featureEyebrow}>
                      {card.eyebrow}
                    </p>
                    <h3 className={TEXT_STYLES.cardTitle}>{card.title}</h3>
                    <p className={TEXT_STYLES.cardBody}>{card.body}</p>
                  </div>
                </MotionSurface>
              ))}
            </div>
          </section>

          <section className={SECTION_STYLES.block}>
            <h2 className={TEXT_STYLES.sectionTitle}>{ARCHIVE_COPY.explore.title}</h2>
            <div className={GRID_STYLES.categories}>
              {ARCHIVE_CATEGORIES.map((category) => {
                const Icon = categoryIconMap[category.icon];

                return (
                  <a className={CARD_STYLES.category} href={category.href} key={category.title}>
                    <span className={SECTION_STYLES.categoryIcon}>
                      <Icon aria-hidden="true" className={ICON_STYLES.category} />
                    </span>
                    <p className={TEXT_STYLES.categoryTitle}>{category.title}</p>
                    <p className={TEXT_STYLES.cardBody}>{category.body}</p>
                  </a>
                );
              })}
            </div>
          </section>

          <section className={CONTAINER_STYLES.newsPanel}>
            <div className={SECTION_STYLES.newsHeader}>
              <h2 className={SECTION_STYLES.newsTitle}>
                {ARCHIVE_COPY.news.title}
              </h2>
            </div>
            <div className={SECTION_STYLES.newsList}>
              {TIMELINE_ITEMS.map((item) => (
                <article className={CARD_STYLES.timelineItem} key={item.title}>
                  <div className={SECTION_STYLES.timelineMetaRow}>
                    <p className={SECTION_STYLES.timelineDate}>
                      {item.date}
                    </p>
                    <span className={SECTION_STYLES.timelineTag}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className={SECTION_STYLES.timelineTitle}>{item.title}</h3>
                  <p className={TEXT_STYLES.cardBody}>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <aside className={RESPONSIVE_SHELL.rightRailPad}>
          <section className={CONTAINER_STYLES.panel}>
            <div className={RIGHT_RAIL_STYLES.statHeader}>
              <Image
                src={IMAGE_PATHS.logoMark}
                alt={ARCHIVE_COPY.stats.markAlt}
                width={IMAGE_SIZES.statMark.width}
                height={IMAGE_SIZES.statMark.height}
                className={RIGHT_RAIL_STYLES.statMark}
              />
              <div>
                <h2 className={RIGHT_RAIL_STYLES.statTitle}>{ARCHIVE_COPY.stats.title}</h2>
                <p className={RIGHT_RAIL_STYLES.statFounded}>
                  {ARCHIVE_COPY.stats.founded}
                </p>
              </div>
            </div>
            <dl className={RIGHT_RAIL_STYLES.statList}>
              {ARCHIVE_STATS.map((stat) => (
                <div className={RIGHT_RAIL_STYLES.statRow} key={stat.label}>
                  <dt className={THEME_CLASSES.mutedText}>{stat.label}</dt>
                  <dd className={RIGHT_RAIL_STYLES.statValue}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <blockquote className={RIGHT_RAIL_STYLES.quote}>
            <p className={RIGHT_RAIL_STYLES.quoteBody}>{ARCHIVE_COPY.quote.body}</p>
            <footer className={RIGHT_RAIL_STYLES.quoteFooter}>
              {ARCHIVE_COPY.quote.author}
            </footer>
          </blockquote>

          <section className={CONTAINER_STYLES.navyPanel}>
            <h2 className={RIGHT_RAIL_STYLES.trendingTitle}>{ARCHIVE_COPY.trending.title}</h2>
            <div className={RIGHT_RAIL_STYLES.trendingList}>
              {TRENDING_STARS.map((star) => (
                <a
                  className={RIGHT_RAIL_STYLES.trendingLink}
                  href={star.href}
                  key={star.label}
                >
                  {star.label}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>

    </main>
  );
};

export default Home;
