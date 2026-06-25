"use client";

import {
  type ChangeEvent,
  type KeyboardEvent,
  useId,
  useMemo,
  useReducer,
} from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ARCHIVE_NAVIGATION_EVENT_NAME } from "@/constants/app/app-config";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";
import { ICON_STYLES, SEARCH_STYLES } from "@/constants/styles/ui-styles";
import { useArchiveUiStore } from "@/stores/archive-ui-store";

type ArchiveSearchProps = {
  copy: ArchiveSearchCopy;
  searchIndex: readonly CharacterSearchResult[];
  variant?: "desktop" | "header";
};

type ArchiveSearchCopy = {
  clearSearchLabel: string;
  searchButton: string;
  searchEmpty: string;
  searchLabel: string;
  searchPlaceholder: string;
};

export type CharacterSearchResult = {
  href: string;
  id: string;
  meta: string;
  name: string;
  order: string;
  searchText: string;
};

const MAX_VISIBLE_SUGGESTIONS = 8;

type SearchInteractionState = {
  activeIndex: number;
  isFocused: boolean;
};

type SearchInteractionAction =
  | { type: "blur" }
  | { type: "clear" }
  | { type: "focus" }
  | { type: "moveDown"; maxIndex: number }
  | { type: "moveUp" }
  | { activeIndex: number; type: "setActiveIndex" };

const SEARCH_INTERACTION_INITIAL_STATE: SearchInteractionState = {
  activeIndex: 0,
  isFocused: false,
};

const searchInteractionReducer = (
  state: SearchInteractionState,
  action: SearchInteractionAction,
): SearchInteractionState => {
  switch (action.type) {
    case "blur":
      return { ...state, isFocused: false };
    case "clear":
      return { activeIndex: 0, isFocused: state.isFocused };
    case "focus":
      return { ...state, isFocused: true };
    case "moveDown":
      return {
        ...state,
        activeIndex: Math.min(state.activeIndex + 1, action.maxIndex),
      };
    case "moveUp":
      return {
        ...state,
        activeIndex: Math.max(state.activeIndex - 1, 0),
      };
    case "setActiveIndex":
      return { ...state, activeIndex: action.activeIndex };
    default:
      return state;
  }
};

const ArchiveSearch = ({
  copy,
  searchIndex,
  variant = "desktop",
}: ArchiveSearchProps) => {
  const router = useRouter();
  const listboxId = useId();
  const searchQuery = useArchiveUiStore((state) => state.searchQuery);
  const setSearchQuery = useArchiveUiStore((state) => state.setSearchQuery);
  const [interactionState, dispatchInteraction] = useReducer(
    searchInteractionReducer,
    SEARCH_INTERACTION_INITIAL_STATE,
  );
  const isHeader = variant === "header";
  const normalizedQuery = normalizeArchiveSearchText(searchQuery);

  const suggestions = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return searchIndex.filter((character) =>
      character.searchText.includes(normalizedQuery),
    ).slice(0, MAX_VISIBLE_SUGGESTIONS);
  }, [normalizedQuery, searchIndex]);

  const hasSuggestions = suggestions.length > 0;
  const showSuggestions =
    interactionState.isFocused && normalizedQuery.length > 0;

  const navigateToCharacter = (character: CharacterSearchResult) => {
    setSearchQuery(character.name);
    dispatchInteraction({ type: "blur" });
    window.dispatchEvent(
      new CustomEvent(ARCHIVE_NAVIGATION_EVENT_NAME, {
        detail: { href: character.href },
      }),
    );
    router.push(character.href);
  };

  const clearSearch = () => {
    setSearchQuery("");
    dispatchInteraction({ type: "clear" });
  };

  const submitSearch = () => {
    if (hasSuggestions) {
      navigateToCharacter(
        suggestions[interactionState.activeIndex] ?? suggestions[0],
      );
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      dispatchInteraction({
        maxIndex: suggestions.length - 1,
        type: "moveDown",
      });
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      dispatchInteraction({ type: "moveUp" });
    }

    if (event.key === "Escape") {
      dispatchInteraction({ type: "blur" });
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    dispatchInteraction({ type: "clear" });
  };

  const formClassName = isHeader
      ? SEARCH_STYLES.headerForm
      : SEARCH_STYLES.form;

  const inputClassName = isHeader
      ? SEARCH_STYLES.headerInput
      : SEARCH_STYLES.input;

  return (
    <motion.form
      className={formClassName}
      initial={MOTION_PRESETS.search.initial}
      animate={MOTION_PRESETS.search.animate}
      transition={MOTION_PRESETS.search.transition}
      onBlur={() => {
        setTimeout(() => dispatchInteraction({ type: "blur" }), 120);
      }}
      onFocus={() => dispatchInteraction({ type: "focus" })}
      onSubmit={(event) => {
        event.preventDefault();
        submitSearch();
      }}
    >
      <Search aria-hidden="true" className={ICON_STYLES.search} />
      <input
        aria-label={copy.searchLabel}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={showSuggestions}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        className={inputClassName}
        placeholder={copy.searchPlaceholder}
        role="combobox"
        spellCheck={false}
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      {searchQuery ? (
        <button
          aria-label={copy.clearSearchLabel}
          className={SEARCH_STYLES.clearButton}
          type="button"
          onClick={clearSearch}
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      ) : null}
      <button className={SEARCH_STYLES.submitButton} type="submit">
        {copy.searchButton}
      </button>

      {showSuggestions && hasSuggestions ? (
        <div className={SEARCH_STYLES.suggestions} id={listboxId} role="listbox">
          {suggestions.map((character, index) => (
            <button
              aria-selected={interactionState.activeIndex === index}
              className={
                interactionState.activeIndex === index
                  ? SEARCH_STYLES.suggestionButtonActive
                  : SEARCH_STYLES.suggestionButton
              }
              key={`${character.id}-${character.href}`}
              role="option"
              type="button"
              onMouseEnter={() =>
                dispatchInteraction({
                  activeIndex: index,
                  type: "setActiveIndex",
                })
              }
              onMouseDown={(event) => {
                event.preventDefault();
                navigateToCharacter(character);
              }}
            >
              <span className={SEARCH_STYLES.suggestionOrder}>
                {character.order}
              </span>
              <span className={SEARCH_STYLES.suggestionText}>
                <span className={SEARCH_STYLES.suggestionName}>
                  {character.name}
                </span>
                <span className={SEARCH_STYLES.suggestionMeta}>
                  {character.meta}
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : null}

      {showSuggestions && !hasSuggestions ? (
        <p className={SEARCH_STYLES.empty}>
          {copy.searchEmpty}
        </p>
      ) : null}
    </motion.form>
  );
};

export default ArchiveSearch;
