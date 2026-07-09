/**
 * runes/[rune] 라우트의 서버 페이지를 렌더링하고 필요한 데이터와 공통 레이아웃을 연결합니다.
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ArchiveHeader from "@/components/layout/ArchiveHeader";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import RuneFunctionRecords from "@/components/runes/detail/RuneFunctionRecords";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  getSealedOrbItemReferencesForRune,
  ITEM_CATEGORY_LABELS,
  type ItemReference,
} from "@/constants/items/item-content";
import {
  formatRuneGames,
  getRuneReference,
  getRuneIndexPageByCategory,
  getRuneDescriptionLines,
  getRuneDescriptionTitle,
  getRuneDisplayImageSrc,
  getRuneFunctionRecords,
  getRuneFunctionTypeDescription,
  getRuneFunctionTypeLabel,
  getRelatedRuneReferences,
  isRuneFallbackImage,
  getRuneLineageNote,
  RUNE_ARCHIVE_COPY,
  RUNE_CATEGORY_LABELS,
  RUNE_FALLBACK_IMAGE,
  RUNE_INDEX_PAGES,
  type RuneFunctionRecord,
} from "@/constants/runes/rune-content";
import {
  APP_SHELL_STYLES,
  RESPONSIVE_SHELL,
  RUNE_STYLES,
} from "@/constants/styles/ui-styles";

type RuneDetailProps = {
  params: Promise<{
    rune: string;
  }>;
};

const RuneDetail = async ({ params }: RuneDetailProps) => {
  const { rune: runeId } = await params;
  const rune = loadArchiveJsonSafely({
    fallback: null,
    label: `rune-detail:${runeId}`,
    load: () => getRuneReference(runeId),
  });

  if (!rune) {
    notFound();
  }

  const rows = loadArchiveJsonSafely({
    fallback: [],
    label: `rune-detail-rows:${rune.id}`,
    load: () => {
      const functionTypeLabel = getRuneFunctionTypeLabel(rune);
      const lineageNote = getRuneLineageNote(rune);

      return [
        {
          label: RUNE_ARCHIVE_COPY.categoryLabel,
          value: RUNE_CATEGORY_LABELS[rune.category],
        },
        {
          label: RUNE_ARCHIVE_COPY.functionTypeLabel,
          value: functionTypeLabel,
        },
        ...(lineageNote ?
          [
            {
              label: RUNE_ARCHIVE_COPY.lineageLabel,
              value: lineageNote,
            },
          ] :
          []),
        {
          label: RUNE_ARCHIVE_COPY.gamesLabel,
          value: formatRuneGames(rune.games),
        },
        {
          label: RUNE_ARCHIVE_COPY.aliasLabel,
          value: rune.aliases.join(" / "),
        },
        ...(rune.japaneseName ?
          [
            {
              label: RUNE_ARCHIVE_COPY.japaneseNameLabel,
              value: rune.japaneseName,
            },
          ] :
          []),
      ];
    },
  });
  const activeRunePage = loadArchiveJsonSafely({
    fallback: RUNE_INDEX_PAGES[0],
    label: `rune-detail-active-page:${rune.id}`,
    load: () => getRuneIndexPageByCategory(rune.category),
  });
  const runeImageSrc = loadArchiveJsonSafely({
    fallback: RUNE_FALLBACK_IMAGE.src,
    label: `rune-detail-image:${rune.id}`,
    load: () => getRuneDisplayImageSrc(rune),
  });
  const isFallbackImage = loadArchiveJsonSafely({
    fallback: true,
    label: `rune-detail-image-fallback:${rune.id}`,
    load: () => isRuneFallbackImage(rune),
  });
  const runeDescription = loadArchiveJsonSafely<readonly string[]>({
    fallback: [],
    label: `rune-detail-description:${rune.id}`,
    load: () => getRuneDescriptionLines(rune),
  });
  const runeDescriptionTitle = loadArchiveJsonSafely({
    fallback: RUNE_ARCHIVE_COPY.runeDescriptionTitle,
    label: `rune-detail-description-title:${rune.id}`,
    load: () => getRuneDescriptionTitle(rune),
  });
  const runeFunctionRecords = loadArchiveJsonSafely<readonly RuneFunctionRecord[]>({
    fallback: [],
    label: `rune-detail-functions:${rune.id}`,
    load: () => getRuneFunctionRecords(rune),
  });
  const runeFunctionTypeDescription = loadArchiveJsonSafely({
    fallback: "",
    label: `rune-detail-function-type-description:${rune.id}`,
    load: () => getRuneFunctionTypeDescription(rune),
  });
  const relatedItems = loadArchiveJsonSafely<readonly ItemReference[]>({
    fallback: [],
    label: `rune-detail-related-items:${rune.id}`,
    load: () => getSealedOrbItemReferencesForRune(rune),
  });
  const relatedRunes = loadArchiveJsonSafely({
    fallback: [],
    label: `rune-detail-related-runes:${rune.id}`,
    load: () => getRelatedRuneReferences(rune),
  });

  return (
    <main className={APP_SHELL_STYLES.page}>
      <ArchiveHeader
        activeHref={activeRunePage.href}
        activeLabel={activeRunePage.title}
      />

      <div className={RESPONSIVE_SHELL.atlasGrid}>
        <section className={RUNE_STYLES.shell}>
          <header className={RUNE_STYLES.intro}>
            <p className={RUNE_STYLES.introEyebrow}>
              {RUNE_ARCHIVE_COPY.profileTitle}
            </p>
            <h1 className={RUNE_STYLES.introTitle}>{rune.name}</h1>
            <p className={RUNE_STYLES.introBody}>
              <CharacterNameLinkText text={RUNE_ARCHIVE_COPY.body} />
            </p>
          </header>

          <MotionSurface as="section" className={RUNE_STYLES.detailPanel}>
            <h2 className={RUNE_STYLES.detailTitle}>
              {RUNE_ARCHIVE_COPY.profileTitle}
            </h2>
            <div className={RUNE_STYLES.detailImageWrap}>
              <Image
                alt={rune.name}
                className={
                  isFallbackImage ?
                    RUNE_STYLES.detailFallbackImage :
                    RUNE_STYLES.detailImage
                }
                height={220}
                src={runeImageSrc}
                unoptimized={runeImageSrc.endsWith(".svg")}
                width={320}
              />
            </div>
            {runeDescription.length > 0 && (
              <section className={RUNE_STYLES.descriptionBlock}>
                <h3 className={RUNE_STYLES.descriptionTitle}>
                  {runeDescriptionTitle}
                </h3>
                <div className={RUNE_STYLES.descriptionLines}>
                  {runeDescription.map((line) => (
                    <p key={line}>
                      <CharacterNameLinkText text={line} />
                    </p>
                  ))}
                </div>
              </section>
            )}
            <p className={RUNE_STYLES.functionTypeNote}>
              <CharacterNameLinkText text={runeFunctionTypeDescription} />
            </p>
            <dl className={RUNE_STYLES.ledger}>
              {rows.map((row) => (
                <div className={RUNE_STYLES.ledgerRow} key={row.label}>
                  <dt className={RUNE_STYLES.ledgerTerm}>{row.label}</dt>
                  <dd className={RUNE_STYLES.ledgerValue}>{row.value}</dd>
                </div>
              ))}
            </dl>

            {relatedRunes.length > 0 ? (
              <section className={RUNE_STYLES.descriptionBlock}>
                <h3 className={RUNE_STYLES.descriptionTitle}>
                  {RUNE_ARCHIVE_COPY.relatedRuneTitle}
                </h3>
                <div className={RUNE_STYLES.descriptionLines}>
                  <p>{RUNE_ARCHIVE_COPY.relatedRuneBody}</p>
                </div>
                <div className={RUNE_STYLES.relatedLinkGrid}>
                  {relatedRunes.map((relatedRune) => (
                    <Link
                      className={RUNE_STYLES.relatedLink}
                      href={relatedRune.href}
                      key={relatedRune.id}
                    >
                      <p className={RUNE_STYLES.relatedLinkTitle}>
                        {RUNE_CATEGORY_LABELS[relatedRune.category]}
                      </p>
                      <p className={RUNE_STYLES.relatedLinkBody}>
                        {relatedRune.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedItems.length > 0 ? (
              <section className={RUNE_STYLES.descriptionBlock}>
                <h3 className={RUNE_STYLES.descriptionTitle}>
                  {RUNE_ARCHIVE_COPY.relatedItemTitle}
                </h3>
                <div className={RUNE_STYLES.descriptionLines}>
                  <p>{RUNE_ARCHIVE_COPY.relatedItemBody}</p>
                </div>
                <div className={RUNE_STYLES.relatedLinkGrid}>
                  {relatedItems.map((item) => (
                    <Link
                      className={RUNE_STYLES.relatedLink}
                      href={item.href}
                      key={item.href}
                    >
                      <p className={RUNE_STYLES.relatedLinkTitle}>
                        {ITEM_CATEGORY_LABELS[item.category]}
                      </p>
                      <p className={RUNE_STYLES.relatedLinkBody}>{item.name}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </MotionSurface>

          <RuneFunctionRecords records={runeFunctionRecords} />
        </section>
      </div>
    </main>
  );
};

export default RuneDetail;
