import Link from "next/link";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_CATEGORY_LABELS,
  REGION_KOREAN_NAMES,
  WORLD_MAP_COPY,
} from "@/constants/archive-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

type RegionLocation = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionLocationCardProps = {
  location: RegionLocation;
};

const RegionLocationCard = ({ location }: RegionLocationCardProps) => {
  const koreanName = REGION_KOREAN_NAMES[location.id];
  const shouldShowOriginalName = !koreanName || koreanName !== location.name;
  const categoryLabel =
    REGION_CATEGORY_LABELS[
      location.category as keyof typeof REGION_CATEGORY_LABELS
    ] ?? location.category;

  return (
    <article className={ATLAS_STYLES.regionCard} id={location.id}>
      <div className={ATLAS_STYLES.regionCardHeader}>
        <p className={ATLAS_STYLES.regionCardMeta}>{categoryLabel}</p>
        <h3 className={ATLAS_STYLES.regionCardTitle}>
          {koreanName ?? location.name}
        </h3>
        {shouldShowOriginalName ? (
          <p className={ATLAS_STYLES.regionCardKoreanName}>{location.name}</p>
        ) : null}
      </div>

      <p className={ATLAS_STYLES.regionCardBody}>{location.description}</p>

      <ul className={ATLAS_STYLES.traitList}>
        {location.traits.map((trait) => (
          <li className={ATLAS_STYLES.traitItem} key={trait}>
            {trait}
          </li>
        ))}
      </ul>

      <Link className={ATLAS_STYLES.regionCardLink} href={location.detailHref}>
        {WORLD_MAP_COPY.detailCta}
      </Link>
    </article>
  );
};

export default RegionLocationCard;
