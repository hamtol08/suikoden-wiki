import ArchiveHeader from "@/components/archive/ArchiveHeader";
import CharacterIndexTable from "@/components/archive/CharacterIndexTable";
import CharacterSeriesTabs from "@/components/archive/CharacterSeriesTabs";
import { APP_ROUTES } from "@/constants/app-config";
import {
  CHARACTER_COPY,
  CHARACTER_DATA_BY_GAME,
  CHARACTER_SERIES,
} from "@/constants/character-content";
import {
  APP_SHELL_STYLES,
  CHARACTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

type CharacterPageShellProps = {
  gameId: keyof typeof CHARACTER_DATA_BY_GAME;
};

const CharacterPageShell = ({ gameId }: CharacterPageShellProps) => {
  const activeSeries = CHARACTER_SERIES.find((series) => series.id === gameId) ??
    CHARACTER_SERIES[0];
  const characters = CHARACTER_DATA_BY_GAME[gameId];

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader activeHref={APP_ROUTES.characters} activeLabel={activeSeries.title} />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={CHARACTER_STYLES.shell}>
          <header className={CHARACTER_STYLES.intro}>
            <p className={CHARACTER_STYLES.introEyebrow}>
              {CHARACTER_COPY.eyebrow}
            </p>
            <h1 className={CHARACTER_STYLES.introTitle}>
              {activeSeries.title}
            </h1>
            <p className={CHARACTER_STYLES.introBody}>{activeSeries.body}</p>
          </header>

          <CharacterSeriesTabs activeGameId={gameId} />
          <CharacterIndexTable characters={characters} gameId={gameId} />
        </section>
      </div>
    </main>
  );
};

export default CharacterPageShell;
