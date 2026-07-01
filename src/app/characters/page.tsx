/**
 * characters 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import CharacterPageShell from "@/components/characters/list/CharacterPageShell";
import { CHARACTER_SERIES } from "@/constants/characters/character-content";

const Characters = () => {
  return <CharacterPageShell gameId={CHARACTER_SERIES[0].id} />;
};

export default Characters;
