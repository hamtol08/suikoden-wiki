/**
 * monsters/[game]/[monster] 라우트의 서버 페이지를 렌더링하고 몬스터 상세 기록을 연결합니다.
 */

import { notFound } from "next/navigation";
import MonsterDetailPageShell from "@/components/monsters/detail/MonsterDetailPageShell";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  getMonsterDetailRecord,
  getMonsterDetailStaticParams,
} from "@/constants/monsters/monster-content";

type MonsterDetailPageProps = {
  params: Promise<{
    game: string;
    monster: string;
  }>;
};

export const generateStaticParams = () => {
  return loadArchiveJsonSafely({
    fallback: [],
    label: "monster-detail-static-params",
    load: () => getMonsterDetailStaticParams(),
  });
};

const MonsterDetailPage = async ({ params }: MonsterDetailPageProps) => {
  const { game, monster } = await params;
  const detailRecord = loadArchiveJsonSafely({
    fallback: null,
    label: `monster-detail-route:${game}:${monster}`,
    load: () => getMonsterDetailRecord(game, monster),
  });

  if (!detailRecord) {
    notFound();
  }

  return <MonsterDetailPageShell gameId={game} monsterId={monster} />;
};

export default MonsterDetailPage;
