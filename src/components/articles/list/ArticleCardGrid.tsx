/**
 * 아티클 카드 목록을 이미지와 요약 정보가 있는 그리드로 렌더링합니다.
 */

import Image from "next/image";
import Link from "next/link";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import { IMAGE_LOADING } from "@/constants/app/app-config";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { type ARTICLE_INDEX_CARDS } from "@/constants/articles/article-content";
import {
  CARD_STYLES,
  GRID_STYLES,
  IMAGE_SIZE_HINTS,
  IMAGE_STYLES,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

type ArticleCard = (typeof ARTICLE_INDEX_CARDS)[number];

type ArticleCardGridProps = {
  cards: readonly ArticleCard[];
};

const ArticleCardGrid = ({ cards }: ArticleCardGridProps) => (
  <div className={GRID_STYLES.feature}>
    {cards.map((card, index) => (
      <MotionSurface className={CARD_STYLES.feature} key={card.title}>
        <Link className={CARD_STYLES.featureLink} href={card.href}>
          <div className={CARD_STYLES.featureImage}>
            <Image
              alt={card.alt}
              className={IMAGE_STYLES.objectCover}
              fill
              loading={index === 0 ? IMAGE_LOADING.eager : IMAGE_LOADING.lazy}
              sizes={IMAGE_SIZE_HINTS.feature}
              src={card.image}
            />
          </div>
          <div className={SECTION_STYLES.cardBody}>
            <p className={TEXT_STYLES.featureEyebrow}>{card.eyebrow}</p>
            <h3 className={TEXT_STYLES.cardTitle}>{card.title}</h3>
            <p className={TEXT_STYLES.cardBody}>
              <CharacterNameLinkText text={card.body} />
            </p>
            <p className={SECTION_STYLES.cardAction}>
              {ARCHIVE_COPY.articles.openArticle}
            </p>
          </div>
        </Link>
      </MotionSurface>
    ))}
  </div>
);

export default ArticleCardGrid;
