/**
 * monsters/[game] 라우트의 서버 페이지를 렌더링하고 작품별 몬스터 도감을 연결합니다.
 */

import { notFound } from "next/navigation";
import MonsterIndexPageShell from "@/components/monsters/list/MonsterIndexPageShell";
import {
  ARCHIVE_DATA_LOAD_LABELS,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import { MONSTER_INDEX_PAGES } from "@/constants/monsters/monster-content";

type MonsterIndexGameProps = {
  params: Promise<{
    game: string;
  }>;
};

export const generateStaticParams = () => {
  return loadArchiveJsonSafely({
    fallback: [],
    label: ARCHIVE_DATA_LOAD_LABELS.monsterStaticParams,
    load: () =>
      MONSTER_INDEX_PAGES.map((page) => ({
        game: page.id,
      })),
  });
};

const MonsterIndexGame = async ({ params }: MonsterIndexGameProps) => {
  const { game } = await params;
  const monsterPage = loadArchiveJsonSafely({
    fallback: null,
    label: ARCHIVE_DATA_LOAD_LABELS.monsterRoutePage(game),
    load: () => MONSTER_INDEX_PAGES.find((page) => page.id === game) ?? null,
  });

  if (!monsterPage) {
    notFound();
  }

  return <MonsterIndexPageShell gameId={monsterPage.id} />;
};

export default MonsterIndexGame;
