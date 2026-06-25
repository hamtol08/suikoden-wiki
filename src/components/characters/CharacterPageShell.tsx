import ArchiveHeader from "@/components/layout/ArchiveHeader";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import CharacterIndexTable from "@/components/characters/CharacterIndexTable";
import CharacterSeriesTabs from "@/components/characters/CharacterSeriesTabs";
import { APP_ROUTES } from "@/constants/app/app-config";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  CHARACTER_COPY,
  CHARACTER_DATA_BY_GAME,
  CHARACTER_SERIES,
} from "@/constants/characters/character-content";
import {
  APP_SHELL_STYLES,
  CHARACTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type CharacterPageShellProps = {
  gameId: keyof typeof CHARACTER_DATA_BY_GAME;
};

const CharacterPageShell = ({ gameId }: CharacterPageShellProps) => {
  const activeSeries = loadArchiveJsonSafely({
    fallback: CHARACTER_SERIES[0],
    label: `character-series:${gameId}`,
    load: () => CHARACTER_SERIES.find((series) => series.id === gameId) ??
      CHARACTER_SERIES[0],
  });
  const characters = loadArchiveJsonSafely({
    fallback: [],
    label: `character-index:${gameId}`,
    load: () => CHARACTER_DATA_BY_GAME[gameId],
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={APP_ROUTES.characters} activeLabel={activeSeries.title} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={CHARACTER_STYLES.shell}>
          <ArchivePageIntro
            body={activeSeries.body}
            eyebrow={CHARACTER_COPY.eyebrow}
            styles={CHARACTER_STYLES}
            title={activeSeries.title}
          />

          <CharacterSeriesTabs activeGameId={gameId} />
          <CharacterIndexTable characters={characters} gameId={gameId} />
        </section>
      </div>
    </main>
  );
};

export default CharacterPageShell;
