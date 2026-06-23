import { notFound } from "next/navigation";
import Image from "next/image";
import ArchiveHeader from "@/components/archive/ArchiveHeader";
import {
  formatRuneGames,
  getRuneReference,
  getRuneIndexPageByCategory,
  getRuneDescriptionLines,
  getRuneDescriptionTitle,
  getRuneDisplayImageSrc,
  isRuneFallbackImage,
  RUNE_ARCHIVE_COPY,
  RUNE_CATEGORY_LABELS,
} from "@/constants/rune-content";
import {
  APP_SHELL_STYLES,
  RESPONSIVE_SHELL,
  RUNE_STYLES,
} from "@/constants/ui-styles";

type RuneDetailProps = {
  params: Promise<{
    rune: string;
  }>;
};

const RuneDetail = async ({ params }: RuneDetailProps) => {
  const { rune: runeId } = await params;
  const rune = getRuneReference(runeId);

  if (!rune) {
    notFound();
  }

  const rows = [
    {
      label: RUNE_ARCHIVE_COPY.categoryLabel,
      value: RUNE_CATEGORY_LABELS[rune.category],
    },
    {
      label: RUNE_ARCHIVE_COPY.gamesLabel,
      value: formatRuneGames(rune.games),
    },
    {
      label: RUNE_ARCHIVE_COPY.aliasLabel,
      value: rune.aliases.join(" / "),
    },
  ];
  const activeRunePage = getRuneIndexPageByCategory(rune.category);
  const runeImageSrc = getRuneDisplayImageSrc(rune);
  const isFallbackImage = isRuneFallbackImage(rune);
  const runeDescription = getRuneDescriptionLines(rune);

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
            <p className={RUNE_STYLES.introBody}>{RUNE_ARCHIVE_COPY.body}</p>
          </header>

          <section className={RUNE_STYLES.detailPanel}>
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
                  {getRuneDescriptionTitle(rune)}
                </h3>
                <div className={RUNE_STYLES.descriptionLines}>
                  {runeDescription.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </section>
            )}
            <dl className={RUNE_STYLES.ledger}>
              {rows.map((row) => (
                <div className={RUNE_STYLES.ledgerRow} key={row.label}>
                  <dt className={RUNE_STYLES.ledgerTerm}>{row.label}</dt>
                  <dd className={RUNE_STYLES.ledgerValue}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </section>
      </div>
    </main>
  );
};

export default RuneDetail;
