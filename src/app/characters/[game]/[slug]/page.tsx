/**
 * characters/[game]/[slug] 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import { notFound } from "next/navigation";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import CharacterDetailProfile from "@/components/characters/detail/CharacterDetailProfile";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import {
  CHARACTER_COPY,
  CHARACTER_DATA_BY_GAME,
  type CharacterGameId,
  getCharacterSeries,
  isCharacterDetailAvailable,
} from "@/constants/characters/character-content";
import {
  APP_SHELL_STYLES,
  CHARACTER_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

type CharacterDetailProps = {
  params: Promise<{
    game: string;
    slug: string;
  }>;
};

const CharacterDetail = async ({ params }: CharacterDetailProps) => {
  const { game, slug } = await params;
  const isAvailableDetail = loadArchiveJsonSafely({
    fallback: false,
    label: buildArchiveDataLabel("character-detail-route", game, slug),
    load: () => isCharacterDetailAvailable(game),
  });

  if (!isAvailableDetail) {
    notFound();
  }

  const detailGame = game as CharacterGameId;
  const detailSeries = loadArchiveJsonSafely({
    fallback: null,
    label: buildArchiveDataLabel("character-detail-series", game),
    load: () => getCharacterSeries(detailGame),
  });
  const character = loadArchiveJsonSafely({
    fallback: null,
    label: buildArchiveDataLabel("character-detail", game, slug),
    load: () =>
      CHARACTER_DATA_BY_GAME[detailGame].find((entry) => entry.id === slug) ??
      null,
  });

  if (!detailSeries || !character) {
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
