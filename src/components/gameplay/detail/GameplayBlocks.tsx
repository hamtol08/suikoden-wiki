import Link from "next/link";
import { type ReactNode } from "react";
import GameplayDuelTabs from "@/components/gameplay/detail/GameplayDuelTabs";
import GameplaySeriesNoteTabs from "@/components/gameplay/detail/GameplaySeriesNoteTabs";
import GameplayWarBattleTabs from "@/components/gameplay/detail/GameplayWarBattleTabs";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import {
  GAMEPLAY_DETAIL_COPY,
  GAMEPLAY_DUEL_ACTION_LABELS,
  groupGameplayDuelRecordsByGame,
  groupGameplayWarBattleRecordsByGame,
  type GameplayDuelRecord,
  type GameplaySeriesNoteRecord,
  type GameplayWarBattleRecord,
  type GameplayWarCommandGroup,
  type GameplayWarRoleRecord,
} from "@/constants/gameplay/gameplay-content";
import { type CharacterGameId } from "@/constants/characters/character-content";
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
    href?: string;
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

type GameplayDetailSeriesNotesProps = {
  notes: readonly GameplaySeriesNoteRecord[];
  tabbed?: boolean;
};

type GameplayDuelRecordsProps = {
  records: readonly GameplayDuelRecord[];
};

type GameplayWarBattleGuideProps = {
  battles: readonly GameplayWarBattleRecord[];
  commandGroups: readonly GameplayWarCommandGroup[];
  roles: readonly GameplayWarRoleRecord[];
};

const getPreferredCharacterGame = (game?: string): CharacterGameId | undefined => {
  if (game === "Suikoden I") {
    return "suikoden-i";
  }

  if (game === "Suikoden II") {
    return "suikoden-ii";
  }

  return undefined;
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
      {body ? (
        <p className={GAMEPLAY_STYLES.sectionBody}>
          <CharacterNameLinkText text={body} />
        </p>
      ) : null}
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
      <h3 className={GAMEPLAY_STYLES.systemTitle}>
        {href ? title : <CharacterNameLinkText text={title} />}
      </h3>
      <p className={GAMEPLAY_STYLES.systemBody}>
        {href ? body : <CharacterNameLinkText text={body} />}
      </p>
      <div className={GAMEPLAY_STYLES.tagList}>
        {tags.map((tag, tagIndex) => (
          <span className={GAMEPLAY_STYLES.tag} key={`${title}-${tagIndex}`}>
            {href ? tag : <CharacterNameLinkText text={tag} />}
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

        {game.groups.map((group) => {
          const content = (
            <>
              <h4 className={GAMEPLAY_STYLES.guideTitle}>{group.title}</h4>
              <p className={GAMEPLAY_STYLES.guideBody}>
                {group.href ? group.body : <CharacterNameLinkText text={group.body} />}
              </p>
            </>
          );

          return group.href ? (
            <Link
              aria-label={group.title}
              className={GAMEPLAY_STYLES.guideGroup}
              href={group.href}
              key={`${game.game}-${group.title}`}
            >
              {content}
            </Link>
          ) : (
            <section
              className={GAMEPLAY_STYLES.guideGroup}
              key={`${game.game}-${group.title}`}
            >
              {content}
            </section>
          );
        })}
      </article>
    ))}
  </div>
);

export const GameplayDetailSeriesNotes = ({
  notes,
  tabbed,
}: GameplayDetailSeriesNotesProps) => {
  if (tabbed) {
    return (
      <GameplaySeriesNoteTabs
        copy={{
          facilityLabel: GAMEPLAY_DETAIL_COPY.facilityLabel,
          floorFacilityLabel: GAMEPLAY_DETAIL_COPY.floorFacilityLabel,
          locationLabel: GAMEPLAY_DETAIL_COPY.facilityLocationLabel,
          tabsAriaLabel: GAMEPLAY_DETAIL_COPY.seriesTabsAriaLabel,
          unlockLabel: GAMEPLAY_DETAIL_COPY.facilityUnlockLabel,
        }}
        notes={notes}
      />
    );
  }

  return (
    <div className={GAMEPLAY_STYLES.detailSeriesGrid}>
      {notes.map((note) => (
        <article className={GAMEPLAY_STYLES.detailCard} key={note.game}>
          <h3 className={GAMEPLAY_STYLES.detailCardTitle}>{note.game}</h3>
          <p className={GAMEPLAY_STYLES.detailCardBody}>
            <CharacterNameLinkText
              preferredGame={getPreferredCharacterGame(note.game)}
              text={note.body}
            />
          </p>

          {note.points ? (
            <ul className={GAMEPLAY_STYLES.detailPointList}>
              {note.points.map((point, pointIndex) => (
                <li
                  className={GAMEPLAY_STYLES.detailPointItem}
                  key={`${note.game}-${pointIndex}`}
                >
                  <CharacterNameLinkText
                    preferredGame={getPreferredCharacterGame(note.game)}
                    text={point}
                  />
                </li>
              ))}
            </ul>
          ) : null}

          {note.floorFacilities ? (
            <section className={GAMEPLAY_STYLES.detailFacilitySection}>
              <h4 className={GAMEPLAY_STYLES.detailFacilityTitle}>
                {GAMEPLAY_DETAIL_COPY.floorFacilityLabel}
              </h4>
              <div className={GAMEPLAY_STYLES.detailFloorList}>
                {note.floorFacilities.map((floor) => (
                  <article
                    className={GAMEPLAY_STYLES.detailFloorItem}
                    key={`${note.game}-${floor.floor}`}
                  >
                    <h5 className={GAMEPLAY_STYLES.detailFloorTitle}>
                      {floor.floor}
                    </h5>
                    <p className={GAMEPLAY_STYLES.detailFloorBody}>
                      <CharacterNameLinkText
                        preferredGame={getPreferredCharacterGame(note.game)}
                        text={floor.summary}
                      />
                    </p>
                    <div className={GAMEPLAY_STYLES.detailFloorTagList}>
                      {floor.facilities.map((facility, facilityIndex) => (
                        <span
                          className={GAMEPLAY_STYLES.tag}
                          key={`${note.game}-${floor.floor}-${facilityIndex}`}
                        >
                          <CharacterNameLinkText
                            preferredGame={getPreferredCharacterGame(note.game)}
                            text={facility}
                          />
                        </span>
                      ))}
                    </div>
                    {floor.note ? (
                      <p className={GAMEPLAY_STYLES.detailFloorNote}>
                        <CharacterNameLinkText
                          preferredGame={getPreferredCharacterGame(note.game)}
                          text={floor.note}
                        />
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
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
                        <CharacterNameLinkText
                          preferredGame={getPreferredCharacterGame(note.game)}
                          text={facility.location}
                        />
                      </p>
                      <p className={GAMEPLAY_STYLES.detailFacilityMeta}>
                        <span className={GAMEPLAY_STYLES.detailFacilityMetaLabel}>
                          {GAMEPLAY_DETAIL_COPY.facilityUnlockLabel}
                        </span>
                        <CharacterNameLinkText
                          preferredGame={getPreferredCharacterGame(note.game)}
                          text={facility.unlock}
                        />
                      </p>
                    </div>
                    <p className={GAMEPLAY_STYLES.detailFacilityBody}>
                      <CharacterNameLinkText
                        preferredGame={getPreferredCharacterGame(note.game)}
                        text={facility.body}
                      />
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
};

export const GameplayDuelRecords = ({ records }: GameplayDuelRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  const groupedRecords = groupGameplayDuelRecordsByGame(records);

  return (
    <GameplayDuelTabs
      actionLabels={GAMEPLAY_DUEL_ACTION_LABELS}
      copy={{
        cueLabel: GAMEPLAY_DETAIL_COPY.duelCueLabel,
        enemyMoveLabel: GAMEPLAY_DETAIL_COPY.duelEnemyMoveLabel,
        locationLabel: GAMEPLAY_DETAIL_COPY.duelLocationLabel,
        playerLabel: GAMEPLAY_DETAIL_COPY.duelPlayerLabel,
        responseLabel: GAMEPLAY_DETAIL_COPY.duelResponseLabel,
        tabsAriaLabel: GAMEPLAY_DETAIL_COPY.duelSeriesTabsAriaLabel,
      }}
      groups={groupedRecords}
    />
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
            <p className={GAMEPLAY_STYLES.warGroupBody}>
              <CharacterNameLinkText
                preferredGame={getPreferredCharacterGame(group.game)}
                text={group.body}
              />
            </p>
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
                    <CharacterNameLinkText
                      preferredGame={getPreferredCharacterGame(group.game)}
                      text={command.body}
                    />
                  </p>
                  {command.strongAgainst || command.weakAgainst ? (
                    <div className={GAMEPLAY_STYLES.warCommandMetaGrid}>
                      {command.strongAgainst ? (
                        <p className={GAMEPLAY_STYLES.warCommandMeta}>
                          {GAMEPLAY_DETAIL_COPY.warStrongAgainstLabel}{" "}
                          {command.strongAgainst}
                        </p>
                      ) : null}
                      {command.weakAgainst ? (
                        <p className={GAMEPLAY_STYLES.warCommandMeta}>
                          {GAMEPLAY_DETAIL_COPY.warWeakAgainstLabel}{" "}
                          {command.weakAgainst}
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
        {GAMEPLAY_DETAIL_COPY.warRecordListLabel}
      </h3>
      <GameplayWarBattleTabs
        copy={{
          locationLabel: GAMEPLAY_DETAIL_COPY.warLocationLabel,
          objectiveLabel: GAMEPLAY_DETAIL_COPY.warObjectiveLabel,
          tabsAriaLabel: GAMEPLAY_DETAIL_COPY.warSeriesTabsAriaLabel,
        }}
        groups={groupGameplayWarBattleRecordsByGame(battles)}
      />
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
            <p className={GAMEPLAY_STYLES.warRoleBody}>
              <CharacterNameLinkText
                preferredGame={getPreferredCharacterGame(role.game)}
                text={role.body}
              />
            </p>
            <div className={GAMEPLAY_STYLES.warTagList}>
              {role.points.map((point, pointIndex) => (
                <span
                  className={GAMEPLAY_STYLES.tag}
                  key={`${role.title}-${pointIndex}`}
                >
                  <CharacterNameLinkText
                    preferredGame={getPreferredCharacterGame(role.game)}
                    text={point}
                  />
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
          <h3 className={GAMEPLAY_STYLES.chronologyTitle}>
            <CharacterNameLinkText text={note.title} />
          </h3>
          <p className={GAMEPLAY_STYLES.chronologyBody}>
            <CharacterNameLinkText text={note.body} />
          </p>
        </div>
      </article>
    ))}
  </div>
);
