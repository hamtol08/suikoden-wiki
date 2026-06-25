import Link from "next/link";
import { buildCharacterGamePath } from "@/constants/app/app-config";
import { CHARACTER_COPY, CHARACTER_SERIES } from "@/constants/characters/character-content";
import { CHARACTER_STYLES } from "@/constants/styles/ui-styles";

type CharacterSeriesTabsProps = {
  activeGameId: string;
};

const CharacterSeriesTabs = ({ activeGameId }: CharacterSeriesTabsProps) => {
  return (
    <nav
      aria-label={CHARACTER_COPY.ariaLabels.seriesTabs}
      className={CHARACTER_STYLES.tabs}
    >
      {CHARACTER_SERIES.map((series) => {
        const isActive = series.id === activeGameId;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={isActive ? CHARACTER_STYLES.tabActive : CHARACTER_STYLES.tab}
            href={buildCharacterGamePath(series.id)}
            key={series.id}
          >
            {series.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default CharacterSeriesTabs;
