import { type ChangeEventHandler } from "react";
import { Search, X } from "lucide-react";
import { ICON_STYLES } from "@/constants/styles/ui-styles";

type ArchiveIndexSearchStyles = {
  searchClearButton?: string;
  searchForm: string;
  searchInput: string;
  searchMeta: string;
  searchPanel: string;
};

type ArchiveIndexSearchProps = {
  ariaLabel: string;
  clearLabel?: string;
  meta: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClear?: () => void;
  placeholder: string;
  styles: ArchiveIndexSearchStyles;
  value: string;
};

const ArchiveIndexSearch = ({
  ariaLabel,
  clearLabel,
  meta,
  onChange,
  onClear,
  placeholder,
  styles,
  value,
}: ArchiveIndexSearchProps) => {
  const shouldShowClear = Boolean(value && onClear && clearLabel);

  return (
    <section className={styles.searchPanel}>
      <label className={styles.searchForm}>
        <Search aria-hidden="true" className={ICON_STYLES.search} />
        <input
          aria-label={ariaLabel}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className={styles.searchInput}
          placeholder={placeholder}
          spellCheck={false}
          type="text"
          value={value}
          onChange={onChange}
        />
        {shouldShowClear ? (
          <button
            aria-label={clearLabel}
            className={styles.searchClearButton}
            type="button"
            onClick={onClear}
          >
            <X aria-hidden="true" className={ICON_STYLES.small} />
          </button>
        ) : null}
      </label>
      <p className={styles.searchMeta}>{meta}</p>
    </section>
  );
};

export default ArchiveIndexSearch;
