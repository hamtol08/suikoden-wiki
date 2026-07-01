/**
 * runes/general 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import RuneIndexPageShell from "@/components/runes/list/RuneIndexPageShell";
import { RUNE_INDEX_PAGE_IDS } from "@/constants/runes/rune-content";

const GeneralRunes = () => {
  return <RuneIndexPageShell pageId={RUNE_INDEX_PAGE_IDS.general} />;
};

export default GeneralRunes;
