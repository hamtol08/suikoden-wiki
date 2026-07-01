/**
 * items 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import ItemIndexPageShell from "@/components/items/list/ItemIndexPageShell";
import { ITEM_INDEX_PAGE_IDS } from "@/constants/items/item-content";

const Items = () => {
  return <ItemIndexPageShell gameId={ITEM_INDEX_PAGE_IDS.suikodenI} />;
};

export default Items;
