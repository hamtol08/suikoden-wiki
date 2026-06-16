import {
  REGION_ATLAS_COPY,
  REGION_PROFILE_FIELDS,
} from "@/constants/archive-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

type Region = {
  name: string;
  status: string;
  ruling: string;
  rune: string;
  description: string;
  locations: readonly string[];
};

type RegionPreviewProps = {
  region: Region;
};

const RegionPreview = ({ region }: RegionPreviewProps) => {
  return (
    <>
      <p className={ATLAS_STYLES.detailsMeta}>{REGION_ATLAS_COPY.detailsTitle}</p>
      <h1 className={ATLAS_STYLES.detailsTitle}>{region.name}</h1>
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
