import {
  REGION_ATLAS_LOCATIONS,
  REGION_KOREAN_NAMES,
  REGION_PROFILE_FIELDS,
} from "@/constants/archive-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

type Region = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionPreviewProps = {
  region: Region;
};

const RegionPreview = ({ region }: RegionPreviewProps) => {
  const koreanName = REGION_KOREAN_NAMES[region.id];

  return (
    <>
      <h1 className={ATLAS_STYLES.detailsTitle}>{koreanName ?? region.name}</h1>
      <p className={ATLAS_STYLES.detailsBody}>{region.description}</p>

      <div className={ATLAS_STYLES.detailGrid}>
        {REGION_PROFILE_FIELDS.map((field) => (
          <div className={ATLAS_STYLES.detailBox} key={field.key}>
            <p className={ATLAS_STYLES.detailLabel}>{field.label}</p>
            <p className={ATLAS_STYLES.detailValue}>{region[field.key]}</p>
          </div>
        ))}
      </div>

      <div className={ATLAS_STYLES.locationList}>
        {region.locations.map((location) => (
          <span className={ATLAS_STYLES.locationTag} key={location}>
            {location}
          </span>
        ))}
      </div>
    </>
  );
};

export default RegionPreview;
