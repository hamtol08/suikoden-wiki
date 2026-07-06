/**
 * monsters 라우트의 서버 페이지를 렌더링하고 기본 몬스터 도감으로 연결합니다.
 */

import MonsterIndexPageShell from "@/components/monsters/list/MonsterIndexPageShell";
import { MONSTER_INDEX_PAGE_IDS } from "@/constants/monsters/monster-content";

const Monsters = () => {
  return <MonsterIndexPageShell gameId={MONSTER_INDEX_PAGE_IDS.suikodenI} />;
};

export default Monsters;
