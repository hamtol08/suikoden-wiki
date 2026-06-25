import Link from "next/link";
import { type ReactNode } from "react";
import { GAMEPLAY_DETAIL_COPY } from "@/constants/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/ui-styles";

type GameplaySectionProps = {
  body?: string;
  children: ReactNode;
  eyebrow: string;
  id?: string;
  title: string;
};

type GameplayTagCardProps = {
  body: string;
  href?: string;
  tags: readonly string[];
  title: string;
  variant?: "system" | "timeline";
};

type GameplayTagSectionItem = {
  body: string;
  href?: string;
  points?: readonly string[];
  tags?: readonly string[];
  title: string;
};

type GameplayTagSectionProps = {
  eyebrow: string;
  gridVariant?: "system" | "timeline";
  id?: string;
  items: readonly GameplayTagSectionItem[];
  title: string;
};

type GameplayGuideGame = {
  eyebrow: string;
  game: string;
  groups: readonly {
    body: string;
    title: string;
  }[];
};

type GameplayTab = {
  href: string;
  label: string;
};

type GameplayTabsProps = {
  ariaLabel: string;
  tabs: readonly GameplayTab[];
};

type GameplayGuidePanelsProps = {
  games: readonly GameplayGuideGame[];
};

type TimelineChronicleNote = {
  body: string;
  date: string;
  title: string;
};

type TimelineChronicleListProps = {
  notes: readonly TimelineChronicleNote[];
};

type GameplayDetailFacility = {
  body: string;
  location: string;
  name: string;
  unlock: string;
};

type GameplayDetailSeriesNote = {
  body: string;
  facilities?: readonly GameplayDetailFacility[];
  game: string;
  points?: readonly string[];
};

type GameplayDetailSeriesNotesProps = {
  notes: readonly GameplayDetailSeriesNote[];
};

export const GameplaySection = ({
  body,
  children,
  eyebrow,
  id,
  title,
}: GameplaySectionProps) => (
  <section className={GAMEPLAY_STYLES.section} id={id}>
    <header className={GAMEPLAY_STYLES.sectionHeader}>
      <div>
        <p className={GAMEPLAY_STYLES.sectionEyebrow}>{eyebrow}</p>
        <h2 className={GAMEPLAY_STYLES.sectionTitle}>{title}</h2>
      </div>
      {body ? <p className={GAMEPLAY_STYLES.sectionBody}>{body}</p> : null}
    </header>
    {children}
  </section>
);

export const GameplayTabs = ({ ariaLabel, tabs }: GameplayTabsProps) => (
  <nav aria-label={ariaLabel} className={GAMEPLAY_STYLES.tabList}>
    {tabs.map((tab) => (
      <a className={GAMEPLAY_STYLES.tab} href={tab.href} key={tab.href}>
        {tab.label}
      </a>
    ))}
  </nav>
);

export const GameplayTagCard = ({
  body,
  href,
  tags,
  title,
  variant = "system",
}: GameplayTagCardProps) => {
  const className =
    variant === "timeline" ? GAMEPLAY_STYLES.timelineCard : GAMEPLAY_STYLES.systemCard;
  const content = (
    <>
      <h3 className={GAMEPLAY_STYLES.systemTitle}>{title}</h3>
      <p className={GAMEPLAY_STYLES.systemBody}>{body}</p>
      <div className={GAMEPLAY_STYLES.tagList}>
        {tags.map((tag) => (
          <span className={GAMEPLAY_STYLES.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return href ? (
    <Link aria-label={title} className={className} href={href}>
      {content}
    </Link>
  ) : (
    <article className={className}>{content}</article>
  );
};

export const GameplayTagSection = ({
  eyebrow,
  gridVariant = "system",
  id,
  items,
  title,
}: GameplayTagSectionProps) => (
  <GameplaySection eyebrow={eyebrow} id={id} title={title}>
    <div
      className={
        gridVariant === "timeline" ?
          GAMEPLAY_STYLES.timelineGrid :
          GAMEPLAY_STYLES.systemGrid
      }
    >
      {items.map((item) => (
        <GameplayTagCard
          body={item.body}
          href={item.href}
          key={item.title}
          tags={item.points ?? item.tags ?? []}
          title={item.title}
          variant={gridVariant === "timeline" ? "timeline" : "system"}
        />
      ))}
    </div>
  </GameplaySection>
);

export const GameplayGuidePanels = ({ games }: GameplayGuidePanelsProps) => (
  <div className={GAMEPLAY_STYLES.guideGrid}>
    {games.map((game) => (
      <article className={GAMEPLAY_STYLES.gamePanel} key={game.game}>
        <header className={GAMEPLAY_STYLES.gameHeader}>
          <p className={GAMEPLAY_STYLES.gameEyebrow}>{game.eyebrow}</p>
          <h3 className={GAMEPLAY_STYLES.gameTitle}>{game.game}</h3>
        </header>

        {game.groups.map((group) => (
          <section
            className={GAMEPLAY_STYLES.guideGroup}
            key={`${game.game}-${group.title}`}
          >
            <h4 className={GAMEPLAY_STYLES.guideTitle}>{group.title}</h4>
            <p className={GAMEPLAY_STYLES.guideBody}>{group.body}</p>
          </section>
        ))}
      </article>
    ))}
  </div>
);

export const GameplayDetailSeriesNotes = ({
  notes,
}: GameplayDetailSeriesNotesProps) => (
  <div className={GAMEPLAY_STYLES.detailSeriesGrid}>
    {notes.map((note) => (
      <article className={GAMEPLAY_STYLES.detailCard} key={note.game}>
        <h3 className={GAMEPLAY_STYLES.detailCardTitle}>{note.game}</h3>
        <p className={GAMEPLAY_STYLES.detailCardBody}>{note.body}</p>

        {note.points ? (
          <ul className={GAMEPLAY_STYLES.detailPointList}>
            {note.points.map((point) => (
              <li className={GAMEPLAY_STYLES.detailPointItem} key={point}>
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        {note.facilities ? (
          <section className={GAMEPLAY_STYLES.detailFacilitySection}>
            <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
              {GAMEPLAY_DETAIL_COPY.facilityLabel}
            </h4>
            <div className={GAMEPLAY_STYLES.detailFacilityList}>
              {note.facilities.map((facility) => (
                <article
                  className={GAMEPLAY_STYLES.detailFacilityItem}
                  key={`${note.game}-${facility.name}`}
                >
                  <h5 className={GAMEPLAY_STYLES.detailFacilityName}>
                    {facility.name}
                  </h5>
                  <div className={GAMEPLAY_STYLES.detailFacilityMetaGrid}>
                    <p className={GAMEPLAY_STYLES.detailFacilityMeta}>
                      <span className={GAMEPLAY_STYLES.detailFacilityMetaLabel}>
                        {GAMEPLAY_DETAIL_COPY.facilityLocationLabel}
                      </span>
                      {facility.location}
                    </p>
                    <p className={GAMEPLAY_STYLES.detailFacilityMeta}>
                      <span className={GAMEPLAY_STYLES.detailFacilityMetaLabel}>
                        {GAMEPLAY_DETAIL_COPY.facilityUnlockLabel}
                      </span>
                      {facility.unlock}
                    </p>
                  </div>
                  <p className={GAMEPLAY_STYLES.detailFacilityBody}>
                    {facility.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </article>
    ))}
  </div>
);

export const TimelineChronicleList = ({ notes }: TimelineChronicleListProps) => (
  <div className={GAMEPLAY_STYLES.chronologyList}>
    {notes.map((note) => (
      <article className={GAMEPLAY_STYLES.chronologyItem} key={note.title}>
        <p className={GAMEPLAY_STYLES.chronologyDate}>{note.date}</p>
        <div>
          <h3 className={GAMEPLAY_STYLES.chronologyTitle}>{note.title}</h3>
          <p className={GAMEPLAY_STYLES.chronologyBody}>{note.body}</p>
        </div>
      </article>
    ))}
  </div>
);
