import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import CharacterDetailProfile from "@/components/archive/CharacterDetailProfile";
import { APP_ROUTES } from "@/constants/app-config";
import {
  CHARACTER_COPY,
  CHARACTER_DATA_BY_GAME,
  getCharacterSeries,
  isCharacterDetailAvailable,
} from "@/constants/character-content";
import {
  APP_SHELL_STYLES,
  CHARACTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/ui-styles";

type CharacterDetailProps = {
  params: Promise<{
    game: string;
    slug: string;
  }>;
};

const CharacterDetail = async ({ params }: CharacterDetailProps) => {
  const { game, slug } = await params;

  if (!isCharacterDetailAvailable(game)) {
    notFound();
  }

  const detailSeries = getCharacterSeries(game);
  const character = CHARACTER_DATA_BY_GAME[game].find(
    (entry) => entry.id === slug,
  );

  if (!character) {
    notFound();
  }

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={APP_ROUTES.characters}
        activeLabel={detailSeries.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={CHARACTER_STYLES.shell}>
          <p className={CHARACTER_STYLES.introEyebrow}>
            {CHARACTER_COPY.eyebrow}
          </p>
          <CharacterDetailProfile
            character={character}
            seriesEyebrow={detailSeries.eyebrow}
            seriesTitle={detailSeries.title}
          />
        </section>
      </div>
    </main>
  );
};

export default CharacterDetail;
