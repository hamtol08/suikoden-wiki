import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import RegionDetailRecords from "@/components/regions/detail/RegionDetailRecords";
import RegionPreview from "@/components/regions/detail/RegionPreview";
import { APP_ROUTES } from "@/constants/app/app-config";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  REGION_ATLAS_COPY,
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_TABS,
} from "@/constants/archive/archive-content";
import {
  APP_SHELL_STYLES,
  ATLAS_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type RegionAtlasDetailProps = {
  params: Promise<{
    game: string;
    slug: string;
  }>;
};

const RegionAtlasDetail = async ({ params }: RegionAtlasDetailProps) => {
  const { game, slug } = await params;
  const location = loadArchiveJsonSafely({
    fallback: null,
    label: `region-detail-location:${game}:${slug}`,
    load: () =>
      REGION_ATLAS_LOCATIONS.find(
        (entry) => entry.game === game && entry.id === slug,
      ) ?? null,
  });
  const tab = loadArchiveJsonSafely({
    fallback: null,
    label: `region-detail-tab:${game}`,
    load: () => REGION_ATLAS_TABS.find((entry) => entry.id === game) ?? null,
  });

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
