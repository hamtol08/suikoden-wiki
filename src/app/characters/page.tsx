import CharacterPageShell from "@/components/archive/CharacterPageShell";
import { CHARACTER_SERIES } from "@/constants/character-content";

const Characters = () => {
  return <CharacterPageShell gameId={CHARACTER_SERIES[0].id} />;
};

export default Characters;
