import RuneIndexPageShell from "@/components/archive/RuneIndexPageShell";
import { RUNE_INDEX_PAGE_IDS } from "@/constants/rune-content";

const GeneralRunes = () => {
  return <RuneIndexPageShell pageId={RUNE_INDEX_PAGE_IDS.general} />;
};

export default GeneralRunes;
