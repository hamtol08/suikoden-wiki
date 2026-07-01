/**
 * region-atlas/[game] 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import { notFound } from "next/navigation";
import RegionAtlasPageShell from "@/components/regions/list/RegionAtlasPageShell";
import { REGION_ATLAS_TABS } from "@/constants/archive/archive-content";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";

type RegionAtlasGameProps = {
  params: Promise<{
    game: string;
  }>;
};

const RegionAtlasGame = async ({ params }: RegionAtlasGameProps) => {
  const { game } = await params;
  const gameTab = loadArchiveJsonSafely({
    fallback: null,
    label: `region-atlas-tab:${game}`,
    load: () => REGION_ATLAS_TABS.find((tab) => tab.id === game) ?? null,
  });

  if (!gameTab) {
    notFound();
  }

  return <RegionAtlasPageShell initialTabId={gameTab.id} />;
};

export default RegionAtlasGame;
