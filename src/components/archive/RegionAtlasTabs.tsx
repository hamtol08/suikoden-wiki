import Link from "next/link";
import RegionLocationCard from "@/components/archive/RegionLocationCard";
import { buildRegionAtlasGamePath } from "@/constants/app-config";
import {
  REGION_ATLAS_COPY,
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_TABS,
} from "@/constants/archive-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

const defaultTabId = REGION_ATLAS_TABS[0].id;

type RegionAtlasTabsProps = {
  initialTabId?: string;
};

const RegionAtlasTabs = ({ initialTabId = defaultTabId }: RegionAtlasTabsProps) => {
  const locationsByGame = REGION_ATLAS_TABS.map((tab) => ({
    ...tab,
    locations: REGION_ATLAS_LOCATIONS.filter(
      (location) => location.game === tab.id,
    ),
  }));

  const activeTab = locationsByGame.find((tab) => tab.id === initialTabId) ??
    locationsByGame[0];

  return (
    <section className={ATLAS_STYLES.tabsShell}>
      <div
        aria-label={REGION_ATLAS_COPY.title}
        className={ATLAS_STYLES.tabList}
        role="tablist"
      >
        {locationsByGame.map((tab) => {
          const isActive = activeTab.id === tab.id;

          return (
            <Link
              aria-controls={`${tab.id}-panel`}
              aria-current={isActive ? "page" : undefined}
              aria-selected={isActive}
              className={isActive ? ATLAS_STYLES.tabActive : ATLAS_STYLES.tab}
              href={buildRegionAtlasGamePath(tab.id)}
              id={tab.id}
              key={tab.id}
              role="tab"
            >
              <span>{tab.title}</span>
              <span className={ATLAS_STYLES.tabCount}>{tab.locations.length}</span>
            </Link>
          );
        })}
      </div>

      <section
        aria-labelledby={activeTab.id}
        className={ATLAS_STYLES.atlasSection}
        id={`${activeTab.id}-panel`}
        role="tabpanel"
      >
        <div className={ATLAS_STYLES.atlasSectionHeader}>
          <div>
            <p className={ATLAS_STYLES.atlasSectionEyebrow}>
              {activeTab.eyebrow}
            </p>
            <h2 className={ATLAS_STYLES.atlasSectionTitle}>{activeTab.title}</h2>
          </div>
          <p className={ATLAS_STYLES.atlasSectionBody}>{activeTab.body}</p>
        </div>

        <div className={ATLAS_STYLES.regionGrid}>
          {activeTab.locations.map((location) => (
            <RegionLocationCard key={location.id} location={location} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default RegionAtlasTabs;
