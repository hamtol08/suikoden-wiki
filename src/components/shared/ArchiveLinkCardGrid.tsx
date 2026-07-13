/**
 * 아카이브 허브에서 재사용하는 서버 렌더링 링크 카드 그리드입니다.
 */

import Link from "next/link";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import {
  CARD_STYLES,
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

type ArchiveLinkCard = {
  body: string;
  eyebrow: string;
  href: string;
  title: string;
};

type ArchiveLinkCardGridProps = {
  actionLabel: string;
  cards: readonly ArchiveLinkCard[];
  gridClassName: string;
};

const ArchiveLinkCardGrid = ({
  actionLabel,
  cards,
  gridClassName,
}: ArchiveLinkCardGridProps) => (
  <div className={gridClassName}>
    {cards.map((card) => (
      <MotionSurface className={CARD_STYLES.archiveLinkCard} key={card.title}>
        <Link className={CARD_STYLES.archiveLinkCardLink} href={card.href}>
          <p className={TEXT_STYLES.featureEyebrow}>
            {card.eyebrow}
          </p>
          <h3 className={TEXT_STYLES.cardTitle}>
            {card.title}
          </h3>
          <p className={TEXT_STYLES.cardBody}>
            <CharacterNameLinkText text={card.body} />
          </p>
          <p className={SECTION_STYLES.cardAction}>
            {actionLabel}
          </p>
        </Link>
      </MotionSurface>
    ))}
  </div>
);

export default ArchiveLinkCardGrid;
