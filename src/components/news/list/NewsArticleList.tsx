/**
 * 뉴스 항목 목록을 날짜, 태그, 외부 기사 링크와 함께 렌더링합니다.
 */

import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { type SUIKODEN_NEWS_ITEMS } from "@/constants/news/news-content";
import {
  CARD_STYLES,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

type NewsArticle = (typeof SUIKODEN_NEWS_ITEMS)[number];

type NewsArticleListProps = {
  items: readonly NewsArticle[];
};

const NewsArticleList = ({ items }: NewsArticleListProps) => (
  <div className={SECTION_STYLES.newsList}>
    {items.map((item) => (
      <MotionSurface className={CARD_STYLES.newsArticle} key={item.href}>
        <a
          className={CARD_STYLES.newsArticleLink}
          href={item.href}
          rel="noreferrer"
          target="_blank"
        >
          <div className={SECTION_STYLES.timelineMetaRow}>
            <p className={SECTION_STYLES.timelineDate}>{item.date}</p>
            <span className={SECTION_STYLES.timelineTag}>{item.tag}</span>
          </div>
          <h3 className={SECTION_STYLES.timelineTitle}>{item.title}</h3>
          <p className={TEXT_STYLES.cardBody}>
            <CharacterNameLinkText text={item.body} />
          </p>
          <p className={SECTION_STYLES.newsArticleFooter}>
            <span>{item.outlet}</span>
            <span>{ARCHIVE_COPY.news.readArticle}</span>
          </p>
        </a>
      </MotionSurface>
    ))}
  </div>
);

export default NewsArticleList;
