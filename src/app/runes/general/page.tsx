import RuneIndexPageShell from "@/components/runes/RuneIndexPageShell";
import { RUNE_INDEX_PAGE_IDS } from "@/constants/runes/rune-content";

const GeneralRunes = () => {
  return <RuneIndexPageShell pageId={RUNE_INDEX_PAGE_IDS.general} />;
};

export default GeneralRunes;
