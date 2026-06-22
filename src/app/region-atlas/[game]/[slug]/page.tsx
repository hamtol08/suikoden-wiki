import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import RegionDetailRecords from "@/components/archive/RegionDetailRecords";
import RegionPreview from "@/components/archive/RegionPreview";
import { APP_ROUTES } from "@/constants/app-config";
import {
  REGION_ATLAS_COPY,
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_TABS,
} from "@/constants/archive-content";
import {
  APP_SHELL_STYLES,
  ATLAS_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

type RegionAtlasDetailProps = {
  params: Promise<{
    game: string;
    slug: string;
  }>;
};

const RegionAtlasDetail = async ({ params }: RegionAtlasDetailProps) => {
  const { game, slug } = await params;
  const location = REGION_ATLAS_LOCATIONS.find(
    (entry) => entry.game === game && entry.id === slug,
  );
  const tab = REGION_ATLAS_TABS.find((entry) => entry.id === game);

  if (!location || !tab) {
    notFound();
  }

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.regionAtlas}
        activeLabel={REGION_ATLAS_COPY.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={ATLAS_STYLES.shell}>
          <article className={ATLAS_STYLES.intro}>
            <RegionPreview region={location} />

            <ul className={ATLAS_STYLES.traitList}>
              {location.traits.map((trait) => (
                <li className={ATLAS_STYLES.traitItem} key={trait}>
                  {trait}
                </li>
              ))}
            </ul>
          </article>

          <RegionDetailRecords region={location} />
        </section>
      </div>
    </main>
  );
};

export default RegionAtlasDetail;
