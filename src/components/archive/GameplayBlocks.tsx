import { type ReactNode } from "react";
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
  tags: readonly string[];
  title: string;
  variant?: "system" | "timeline";
};

type GameplaySourceLink = {
  href: string;
  label: string;
};

type GameplayGuideGame = {
  eyebrow: string;
  game: string;
  groups: readonly {
    body: string;
    links: readonly GameplaySourceLink[];
    title: string;
  }[];
};

type GameplaySourceLinksProps = {
  links: readonly GameplaySourceLink[];
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
  tags,
  title,
  variant = "system",
}: GameplayTagCardProps) => (
  <article
    className={
      variant === "timeline" ?
        GAMEPLAY_STYLES.timelineCard :
        GAMEPLAY_STYLES.systemCard
    }
  >
    <h3 className={GAMEPLAY_STYLES.systemTitle}>{title}</h3>
    <p className={GAMEPLAY_STYLES.systemBody}>{body}</p>
    <div className={GAMEPLAY_STYLES.tagList}>
      {tags.map((tag) => (
        <span className={GAMEPLAY_STYLES.tag} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  </article>
);

export const GameplaySourceLinks = ({ links }: GameplaySourceLinksProps) => (
  <div className={GAMEPLAY_STYLES.linkList}>
    {links.map((link, index) => (
      <a
        className={GAMEPLAY_STYLES.sourceLink}
        href={link.href}
        key={`${link.href}-${link.label}-${index}`}
        rel="noreferrer"
        target="_blank"
      >
        {link.label}
      </a>
    ))}
  </div>
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
            <GameplaySourceLinks links={group.links} />
          </section>
        ))}
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
