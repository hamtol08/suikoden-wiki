import { notFound } from "next/navigation";
import CharacterPageShell from "@/components/characters/list/CharacterPageShell";
import {
  CHARACTER_DATA_BY_GAME,
  type CharacterGameId,
} from "@/constants/characters/character-content";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";

type CharacterGameProps = {
  params: Promise<{
    game: string;
  }>;
};

const isCharacterGameId = (
  game: string,
): game is keyof typeof CHARACTER_DATA_BY_GAME => {
  return game in CHARACTER_DATA_BY_GAME;
};

const CharacterGame = async ({ params }: CharacterGameProps) => {
  const { game } = await params;
  const isAvailableGame = loadArchiveJsonSafely({
    fallback: false,
    label: `character-game-route:${game}`,
    load: () => isCharacterGameId(game),
  });

  if (!isAvailableGame) {
    notFound();
  }

  return <CharacterPageShell gameId={game as CharacterGameId} />;
};

export default CharacterGame;
