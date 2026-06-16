import { notFound } from "next/navigation";
import RegionAtlasPageShell from "@/components/archive/RegionAtlasPageShell";
import { REGION_ATLAS_TABS } from "@/constants/archive-content";

type RegionAtlasGameProps = {
  params: Promise<{
    game: string;
  }>;
};

const RegionAtlasGame = async ({ params }: RegionAtlasGameProps) => {
  const { game } = await params;
  const gameTab = REGION_ATLAS_TABS.find((tab) => tab.id === game);

  if (!gameTab) {
    notFound();
  }

  return <RegionAtlasPageShell initialTabId={gameTab.id} />;
};

export default RegionAtlasGame;
