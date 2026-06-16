import Link from "next/link";
import {
  REGION_ATLAS_LOCATIONS,
  WORLD_MAP_COPY,
} from "@/constants/archive-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

type RegionLocation = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionLocationCardProps = {
  location: RegionLocation;
};

const RegionLocationCard = ({ location }: RegionLocationCardProps) => {
  return (
    <article className={ATLAS_STYLES.regionCard} id={location.id}>
      <div className={ATLAS_STYLES.regionCardHeader}>
        <p className={ATLAS_STYLES.regionCardMeta}>{location.category}</p>
        <h3 className={ATLAS_STYLES.regionCardTitle}>{location.name}</h3>
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
