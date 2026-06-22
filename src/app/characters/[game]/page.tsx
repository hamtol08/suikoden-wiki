import { notFound } from "next/navigation";
import CharacterPageShell from "@/components/archive/CharacterPageShell";
import { CHARACTER_DATA_BY_GAME } from "@/constants/character-content";

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

  if (!isCharacterGameId(game)) {
    notFound();
  }

  return <CharacterPageShell gameId={game} />;
};

export default CharacterGame;
