"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ARCHIVE_COPY } from "@/constants/archive-content";
import { MOTION_PRESETS } from "@/constants/motion-styles";
import { ICON_STYLES, SEARCH_STYLES } from "@/constants/ui-styles";
import { useArchiveUiStore } from "@/stores/archive-ui-store";

type ArchiveSearchProps = {
  variant?: "desktop" | "drawer";
};

const ArchiveSearch = ({ variant = "desktop" }: ArchiveSearchProps) => {
  const searchQuery = useArchiveUiStore((state) => state.searchQuery);
  const setSearchQuery = useArchiveUiStore((state) => state.setSearchQuery);
  const isDrawer = variant === "drawer";

  return (
    <motion.form
      className={isDrawer ? SEARCH_STYLES.drawerForm : SEARCH_STYLES.form}
      initial={MOTION_PRESETS.search.initial}
      animate={MOTION_PRESETS.search.animate}
      transition={MOTION_PRESETS.search.transition}
      onSubmit={(event) => event.preventDefault()}
    >
      <Search aria-hidden="true" className={ICON_STYLES.search} />
      <input
        aria-label={ARCHIVE_COPY.header.searchLabel}
        className={isDrawer ? SEARCH_STYLES.drawerInput : SEARCH_STYLES.input}
        placeholder={ARCHIVE_COPY.header.searchPlaceholder}
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <span className={SEARCH_STYLES.submitLabel}>
        {ARCHIVE_COPY.header.searchButton}
      </span>
    </motion.form>
  );
};

export default ArchiveSearch;
