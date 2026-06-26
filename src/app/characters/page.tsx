import CharacterPageShell from "@/components/characters/list/CharacterPageShell";
import { CHARACTER_SERIES } from "@/constants/characters/character-content";

const Characters = () => {
  return <CharacterPageShell gameId={CHARACTER_SERIES[0].id} />;
};

export default Characters;
