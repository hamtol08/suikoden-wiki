import Link from "next/link";
import { type ReactNode } from "react";
import {
  GAMEPLAY_DETAIL_COPY,
  GAMEPLAY_DUEL_ACTION_LABELS,
  type GameplayDuelRecord,
  type GameplayWarBattleRecord,
  type GameplayWarCommandGroup,
  type GameplayWarRoleRecord,
} from "@/constants/gameplay/gameplay-content";
import { GAMEPLAY_STYLES } from "@/constants/styles/ui-styles";

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

type GameplayDuelRecordsProps = {
  records: readonly GameplayDuelRecord[];
};

type GameplayWarBattleGuideProps = {
  battles: readonly GameplayWarBattleRecord[];
  commandGroups: readonly GameplayWarCommandGroup[];
  roles: readonly GameplayWarRoleRecord[];
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

export const GameplayDuelRecords = ({ records }: GameplayDuelRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.duelRecordGrid}>
      {records.map((record) => (
        <article
          className={GAMEPLAY_STYLES.duelRecordCard}
          key={`${record.game}-${record.opponent}-${record.player}`}
        >
          <header className={GAMEPLAY_STYLES.duelRecordHeader}>
            <div>
              <p className={GAMEPLAY_STYLES.duelRecordGame}>{record.game}</p>
              <h3 className={GAMEPLAY_STYLES.duelRecordTitle}>
                {record.opponent}
              </h3>
            </div>
            <div className={GAMEPLAY_STYLES.duelRecordMetaGrid}>
              <p className={GAMEPLAY_STYLES.duelRecordMeta}>
                <span className={GAMEPLAY_STYLES.duelRecordMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.duelPlayerLabel}
                </span>
                {record.player}
              </p>
              <p className={GAMEPLAY_STYLES.duelRecordMeta}>
                <span className={GAMEPLAY_STYLES.duelRecordMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.duelLocationLabel}
                </span>
                {record.location}
              </p>
            </div>
          </header>

          {record.note ? (
            <p className={GAMEPLAY_STYLES.duelRecordNote}>{record.note}</p>
          ) : null}

          <div className={GAMEPLAY_STYLES.duelPatternGrid}>
            {record.patterns.map((pattern) => (
              <section
                className={GAMEPLAY_STYLES.duelPatternCard}
                key={`${record.game}-${record.opponent}-${pattern.enemyMove}`}
              >
                <div className={GAMEPLAY_STYLES.duelPatternHeader}>
                  <p className={GAMEPLAY_STYLES.duelPatternMeta}>
                    <span className={GAMEPLAY_STYLES.duelPatternLabel}>
                      {GAMEPLAY_DETAIL_COPY.duelEnemyMoveLabel}
                    </span>
                    {GAMEPLAY_DUEL_ACTION_LABELS[pattern.enemyMove]}
                  </p>
                  <p className={GAMEPLAY_STYLES.duelPatternMeta}>
                    <span className={GAMEPLAY_STYLES.duelPatternLabel}>
                      {GAMEPLAY_DETAIL_COPY.duelResponseLabel}
                    </span>
                    {GAMEPLAY_DUEL_ACTION_LABELS[pattern.response]}
                  </p>
                </div>
                <p className={GAMEPLAY_STYLES.duelCueTitle}>
                  {GAMEPLAY_DETAIL_COPY.duelCueLabel}
                </p>
                <ul className={GAMEPLAY_STYLES.duelLineList}>
                  {pattern.lines.map((line) => (
                    <li
                      className={GAMEPLAY_STYLES.duelLineItem}
                      key={`${record.game}-${record.opponent}-${pattern.enemyMove}-${line}`}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export const GameplayWarBattleGuide = ({
  battles,
  commandGroups,
  roles,
}: GameplayWarBattleGuideProps) => (
  <div className={GAMEPLAY_STYLES.warGuideStack}>
    <section>
      <h3 className={GAMEPLAY_STYLES.warSectionTitle}>
        {GAMEPLAY_DETAIL_COPY.warCommandLabel}
      </h3>
      <div className={GAMEPLAY_STYLES.warCommandGrid}>
        {commandGroups.map((group) => (
          <article className={GAMEPLAY_STYLES.warCommandGroup} key={group.game}>
            <p className={GAMEPLAY_STYLES.warGameLabel}>{group.game}</p>
            <p className={GAMEPLAY_STYLES.warGroupBody}>{group.body}</p>
            <div className={GAMEPLAY_STYLES.warCommandList}>
              {group.commands.map((command) => (
                <section
                  className={GAMEPLAY_STYLES.warCommandCard}
                  key={`${group.game}-${command.name}`}
                >
                  <h4 className={GAMEPLAY_STYLES.warCommandName}>
                    {command.name}
                  </h4>
                  <p className={GAMEPLAY_STYLES.warCommandBody}>
                    {command.body}
                  </p>
                  {command.strongAgainst || command.weakAgainst ? (
                    <div className={GAMEPLAY_STYLES.warCommandMetaGrid}>
                      {command.strongAgainst ? (
                        <p className={GAMEPLAY_STYLES.warCommandMeta}>
                          Strong {command.strongAgainst}
                        </p>
                      ) : null}
                      {command.weakAgainst ? (
                        <p className={GAMEPLAY_STYLES.warCommandMeta}>
                          Weak {command.weakAgainst}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section>
      <h3 className={GAMEPLAY_STYLES.warSectionTitle}>
        {GAMEPLAY_DETAIL_COPY.warRecordLabel}
      </h3>
      <div className={GAMEPLAY_STYLES.warBattleList}>
        {battles.map((battle) => (
          <article
            className={GAMEPLAY_STYLES.warBattleCard}
            key={`${battle.game}-${battle.title}`}
          >
            <header className={GAMEPLAY_STYLES.warBattleHeader}>
              <div>
                <p className={GAMEPLAY_STYLES.warGameLabel}>{battle.game}</p>
                <h4 className={GAMEPLAY_STYLES.warBattleTitle}>
                  {battle.title}
                </h4>
              </div>
              <div className={GAMEPLAY_STYLES.warBattleMetaGrid}>
                <p className={GAMEPLAY_STYLES.warBattleMeta}>
                  <span className={GAMEPLAY_STYLES.warBattleMetaLabel}>
                    {GAMEPLAY_DETAIL_COPY.warLocationLabel}
                  </span>
                  {battle.location}
                </p>
                <p className={GAMEPLAY_STYLES.warBattleMeta}>
                  <span className={GAMEPLAY_STYLES.warBattleMetaLabel}>
                    {GAMEPLAY_DETAIL_COPY.warObjectiveLabel}
                  </span>
                  {battle.objective}
                </p>
              </div>
            </header>
            <p className={GAMEPLAY_STYLES.warBattleNote}>{battle.note}</p>
            <div className={GAMEPLAY_STYLES.warTagList}>
              {battle.tags.map((tag) => (
                <span className={GAMEPLAY_STYLES.tag} key={`${battle.title}-${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section>
      <h3 className={GAMEPLAY_STYLES.warSectionTitle}>
        {GAMEPLAY_DETAIL_COPY.warRoleLabel}
      </h3>
      <div className={GAMEPLAY_STYLES.warRoleGrid}>
        {roles.map((role) => (
          <article
            className={GAMEPLAY_STYLES.warRoleCard}
            key={`${role.game}-${role.title}`}
          >
            <p className={GAMEPLAY_STYLES.warGameLabel}>{role.game}</p>
            <h4 className={GAMEPLAY_STYLES.warRoleTitle}>{role.title}</h4>
            <p className={GAMEPLAY_STYLES.warRoleBody}>{role.body}</p>
            <div className={GAMEPLAY_STYLES.warTagList}>
              {role.points.map((point) => (
                <span className={GAMEPLAY_STYLES.tag} key={`${role.title}-${point}`}>
                  {point}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
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
