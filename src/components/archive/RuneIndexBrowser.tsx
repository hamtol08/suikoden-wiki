"use client";

import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  formatRuneGames,
  RUNE_ARCHIVE_COPY,
  RUNE_CATEGORY_LABELS,
  getRuneDisplayImageSrc,
  isRuneFallbackImage,
  type RuneIndexPageId,
  type RuneReference,
} from "@/constants/rune-content";
import { ICON_STYLES, RUNE_STYLES } from "@/constants/ui-styles";

type RuneIndexBrowserProps = {
  pageId: RuneIndexPageId;
  pages: readonly {
    href: string;
    id: RuneIndexPageId;
    title: string;
  }[];
  runes: readonly RuneReference[];
};

const normalizeSearchText = (value: string) =>
  value.toLocaleLowerCase("ko-KR").replace(/\s+/g, " ").trim();

const buildRuneSearchText = (rune: RuneReference) =>
  normalizeSearchText(
    [
      rune.name,
      ...rune.aliases,
      RUNE_CATEGORY_LABELS[rune.category],
      formatRuneGames(rune.games),
    ].join(" "),
  );

const RuneIndexBrowser = ({
  pageId,
  pages,
  runes,
}: RuneIndexBrowserProps) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeSearchText(query);
  const filteredRunes = useMemo(() => {
    if (!normalizedQuery) {
      return runes;
    }

    return runes.filter((rune) =>
      buildRuneSearchText(rune).includes(normalizedQuery),
    );
  }, [normalizedQuery, runes]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className={RUNE_STYLES.browser}>
      <section className={RUNE_STYLES.searchPanel}>
        <label className={RUNE_STYLES.searchForm}>
          <Search aria-hidden="true" className={ICON_STYLES.search} />
          <input
            aria-label={RUNE_ARCHIVE_COPY.searchLabel}
            className={RUNE_STYLES.searchInput}
            placeholder={RUNE_ARCHIVE_COPY.searchPlaceholder}
            type="search"
            value={query}
            onChange={handleSearchChange}
          />
        </label>
        <p className={RUNE_STYLES.searchMeta}>
          {RUNE_ARCHIVE_COPY.resultCount(filteredRunes.length)}
        </p>
      </section>

      <nav
        aria-label={RUNE_ARCHIVE_COPY.ariaLabels.categoryTabs}
        className={RUNE_STYLES.tabs}
      >
        {pages.map((page) => (
          <Link
            className={
              page.id === pageId ? RUNE_STYLES.tabActive : RUNE_STYLES.tab
            }
            href={page.href}
            key={page.id}
          >
            {page.title}
          </Link>
        ))}
      </nav>

      {filteredRunes.length > 0 ? (
        <div className={RUNE_STYLES.grid}>
          {filteredRunes.map((rune) => {
            const imageSrc = getRuneDisplayImageSrc(rune);
            const isFallback = isRuneFallbackImage(rune);

            return (
              <Link className={RUNE_STYLES.card} href={rune.href} key={rune.id}>
                <div className={RUNE_STYLES.cardImageWrap}>
                  <Image
                    alt={rune.name}
                    className={
                      isFallback ?
                        RUNE_STYLES.cardFallbackImage :
                        RUNE_STYLES.cardImage
                    }
                    height={160}
                    src={imageSrc}
                    unoptimized={imageSrc.endsWith(".svg")}
                    width={220}
                  />
                </div>
                <div className={RUNE_STYLES.cardContent}>
                  <p className={RUNE_STYLES.cardMeta}>
                    {RUNE_CATEGORY_LABELS[rune.category]}
                  </p>
                  <h2 className={RUNE_STYLES.cardTitle}>{rune.name}</h2>
                  <p className={RUNE_STYLES.cardBody}>
                    {rune.aliases.join(" / ")}
                  </p>
                  <p className={RUNE_STYLES.cardGames}>
                    {formatRuneGames(rune.games)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className={RUNE_STYLES.empty}>{RUNE_ARCHIVE_COPY.noResults}</p>
      )}
    </div>
  );
};

export default RuneIndexBrowser;
