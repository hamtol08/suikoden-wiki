import { notFound } from "next/navigation";
import ItemDetailPageShell from "@/components/items/detail/ItemDetailPageShell";
import ItemIndexPageShell from "@/components/items/list/ItemIndexPageShell";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  getItemDetailRecord,
  getItemDetailStaticParams,
  ITEM_INDEX_PAGES,
} from "@/constants/items/item-content";

type ItemIndexGameProps = {
  params: Promise<{
    game: string;
  }>;
};

export const generateStaticParams = () => {
  return loadArchiveJsonSafely({
    fallback: [],
    label: "item-static-params",
    load: () => [
      ...ITEM_INDEX_PAGES.map((page) => ({
        game: page.id,
      })),
      ...getItemDetailStaticParams(),
    ],
  });
};

const ItemIndexGame = async ({ params }: ItemIndexGameProps) => {
  const { game } = await params;
  const itemPage = loadArchiveJsonSafely({
    fallback: null,
    label: `item-route-page:${game}`,
    load: () => ITEM_INDEX_PAGES.find((page) => page.id === game) ?? null,
  });

  if (itemPage) {
    return <ItemIndexPageShell gameId={itemPage.id} />;
  }

  const itemDetail = loadArchiveJsonSafely({
    fallback: null,
    label: `item-route-detail:${game}`,
    load: () => getItemDetailRecord(game),
  });

  if (!itemDetail) {
    notFound();
  }

  return <ItemDetailPageShell itemId={itemDetail.id} />;
};

export default ItemIndexGame;
