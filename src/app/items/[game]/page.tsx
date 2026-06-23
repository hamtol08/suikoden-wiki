import { notFound } from "next/navigation";
import ItemIndexPageShell from "@/components/archive/ItemIndexPageShell";
import { ITEM_INDEX_PAGES } from "@/constants/item-content";

type ItemIndexGameProps = {
  params: Promise<{
    game: string;
  }>;
};

export const generateStaticParams = () => {
  return ITEM_INDEX_PAGES.map((page) => ({
    game: page.id,
  }));
};

const ItemIndexGame = async ({ params }: ItemIndexGameProps) => {
  const { game } = await params;
  const itemPage = ITEM_INDEX_PAGES.find((page) => page.id === game);

  if (!itemPage) {
    notFound();
  }

  return <ItemIndexPageShell gameId={itemPage.id} />;
};

export default ItemIndexGame;
