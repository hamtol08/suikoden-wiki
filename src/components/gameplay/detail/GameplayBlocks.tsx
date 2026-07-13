/**
 * 게임플레이 상세 페이지에서 공략 카드, 기록, 링크 블록을 렌더링합니다.
 */

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import GameplayDuelTabs from "@/components/gameplay/detail/GameplayDuelTabs";
import GameplaySeriesNoteCard from "@/components/gameplay/detail/GameplaySeriesNoteCard";
import GameplaySeriesNoteTabs from "@/components/gameplay/detail/GameplaySeriesNoteTabs";
import GameplayWarBattleTabs from "@/components/gameplay/detail/GameplayWarBattleTabs";
import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import ItemNameLinkText from "@/components/shared/ItemNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";
import { resolveCharacterGameIdBySeriesTitle } from "@/constants/characters/character-game-ids";
import {
  GAMEPLAY_DETAIL_COPY,
  GAMEPLAY_DUEL_ACTION_LABELS,
  groupGameplayDuelRecordsByGame,
  groupGameplayWarBattleRecordsByGame,
  type GameplayCookingContestRecord,
  type GameplayDuelRecord,
  type GameplayGuardianDeityPlanRecord,
  type GameplayMinigameRecord,
  type GameplayMissablePhaseRecord,
  type GameplayRecipeRecord,
  type GameplayRestaurantTipRecord,
  type GameplaySeriesNoteRecord,
  type GameplayUniteAttackRecord,
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

type GameplayCookingContestRecordsProps = {
  records: readonly GameplayCookingContestRecord[];
};

type GameplayMinigameRecordsProps = {
  records: readonly GameplayMinigameRecord[];
};

type GameplayUniteAttackRecordsProps = {
  records: readonly GameplayUniteAttackRecord[];
};

type GameplayMissablePhaseRecordsProps = {
  records: readonly GameplayMissablePhaseRecord[];
};

type GameplayGuardianDeityPlanRecordsProps = {
  records: readonly GameplayGuardianDeityPlanRecord[];
};

type GameplayRecipeRecordsProps = {
  records: readonly GameplayRecipeRecord[];
};

type GameplayRestaurantTipsProps = {
  tips: readonly GameplayRestaurantTipRecord[];
};

export const GameplaySection = ({
  body,
  children,
  eyebrow,
  id,
  title,
}: GameplaySectionProps) => (
  <MotionSurface as="section" className={GAMEPLAY_STYLES.section} id={id}>
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
  </MotionSurface>
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
  const copy = {
    facilityLabel: GAMEPLAY_DETAIL_COPY.facilityLabel,
    floorFacilityLabel: GAMEPLAY_DETAIL_COPY.floorFacilityLabel,
    locationLabel: GAMEPLAY_DETAIL_COPY.facilityLocationLabel,
    unlockLabel: GAMEPLAY_DETAIL_COPY.facilityUnlockLabel,
  };

  if (tabbed) {
    return (
      <GameplaySeriesNoteTabs
        copy={{
          ...copy,
          tabsAriaLabel: GAMEPLAY_DETAIL_COPY.seriesTabsAriaLabel,
        }}
        notes={notes}
      />
    );
  }

  return (
    <div className={GAMEPLAY_STYLES.detailSeriesGrid}>
      {notes.map((note) => (
        <GameplaySeriesNoteCard copy={copy} key={note.game} note={note} />
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

export const GameplayCookingContestRecords = ({
  records,
}: GameplayCookingContestRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.cookingRecordGrid}>
      {records.map((record) => (
        <article className={GAMEPLAY_STYLES.cookingRecordCard} key={record.round}>
          <header className={GAMEPLAY_STYLES.cookingRecordHeader}>
            <p className={GAMEPLAY_STYLES.cookingRecordRound}>
              {record.round}
              {GAMEPLAY_DETAIL_COPY.cookingContestRoundLabel}
            </p>
            <h3 className={GAMEPLAY_STYLES.cookingRecordTitle}>
              <CharacterNameLinkText
                preferredGame="suikoden-ii"
                text={record.opponent}
              />
            </h3>
          </header>
          <dl className={GAMEPLAY_STYLES.cookingRecordMetaGrid}>
            <div className={GAMEPLAY_STYLES.cookingRecordMeta}>
              <dt className={GAMEPLAY_STYLES.cookingRecordMetaLabel}>
                {GAMEPLAY_DETAIL_COPY.cookingContestRewardLabel}
              </dt>
              <dd>
                <CharacterNameLinkText text={record.reward} />
              </dd>
            </div>
          </dl>
          <p className={GAMEPLAY_STYLES.cookingRecordNote}>
            <span className={GAMEPLAY_STYLES.cookingRecordMetaLabel}>
              {GAMEPLAY_DETAIL_COPY.cookingContestNoteLabel}
            </span>
            <CharacterNameLinkText text={record.note} />
          </p>
        </article>
      ))}
    </div>
  );
};

export const GameplayUniteAttackRecords = ({
  records,
}: GameplayUniteAttackRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.uniteAttackGrid}>
      {records.map((record) => {
        const preferredGame = resolveCharacterGameIdBySeriesTitle(record.game);

        return (
          <MotionSurface
            as="article"
            className={GAMEPLAY_STYLES.uniteAttackCard}
            key={`${record.game}-${record.name}`}
          >
            <header className={GAMEPLAY_STYLES.uniteAttackHeader}>
              <p className={GAMEPLAY_STYLES.uniteAttackGame}>{record.game}</p>
              <h3 className={GAMEPLAY_STYLES.uniteAttackTitle}>
                {record.name}
              </h3>
            </header>
            <dl className={GAMEPLAY_STYLES.uniteAttackMetaGrid}>
              <div className={GAMEPLAY_STYLES.uniteAttackMeta}>
                <dt className={GAMEPLAY_STYLES.uniteAttackMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.uniteAttackMemberLabel}
                </dt>
                <dd>
                  {record.members.map((member, memberIndex) => (
                    <Fragment key={`${record.game}-${record.name}-${member}`}>
                      {memberIndex > 0 ? " / " : null}
                      <CharacterNameLinkText
                        preferredGame={preferredGame}
                        text={member}
                      />
                    </Fragment>
                  ))}
                </dd>
              </div>
              <div className={GAMEPLAY_STYLES.uniteAttackMeta}>
                <dt className={GAMEPLAY_STYLES.uniteAttackMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.uniteAttackEffectLabel}
                </dt>
                <dd>{record.effect}</dd>
              </div>
              <div className={GAMEPLAY_STYLES.uniteAttackMeta}>
                <dt className={GAMEPLAY_STYLES.uniteAttackMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.uniteAttackConditionLabel}
                </dt>
                <dd>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={record.condition}
                  />
                </dd>
              </div>
            </dl>
            <p className={GAMEPLAY_STYLES.uniteAttackBody}>
              <CharacterNameLinkText preferredGame={preferredGame} text={record.body} />
            </p>
            <div className={GAMEPLAY_STYLES.uniteAttackTagList}>
              {record.tags.map((tag, tagIndex) => (
                <span
                  className={GAMEPLAY_STYLES.tag}
                  key={`${record.game}-${record.name}-${tagIndex}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </MotionSurface>
        );
      })}
    </div>
  );
};

export const GameplayMissablePhaseRecords = ({
  records,
}: GameplayMissablePhaseRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.missablePhaseGrid}>
      {records.map((record) => {
        const preferredGame = resolveCharacterGameIdBySeriesTitle(record.game);

        return (
          <MotionSurface
            as="article"
            className={GAMEPLAY_STYLES.missablePhaseCard}
            key={`${record.game}-${record.phase}`}
          >
            <header className={GAMEPLAY_STYLES.missablePhaseHeader}>
              <p className={GAMEPLAY_STYLES.missablePhaseGame}>{record.game}</p>
              <h3 className={GAMEPLAY_STYLES.missablePhaseTitle}>
                {record.phase}
              </h3>
            </header>
            <p className={GAMEPLAY_STYLES.missablePhaseMeta}>
              <span className={GAMEPLAY_STYLES.missablePhaseMetaLabel}>
                {GAMEPLAY_DETAIL_COPY.missableTimingLabel}
              </span>
              <CharacterNameLinkText
                preferredGame={preferredGame}
                text={record.timing}
              />
            </p>
            <p className={GAMEPLAY_STYLES.missablePhaseBody}>
              <CharacterNameLinkText
                preferredGame={preferredGame}
                text={record.body}
              />
            </p>
            <div className={GAMEPLAY_STYLES.missablePhaseTagList}>
              {record.points.map((point, pointIndex) => (
                <span
                  className={GAMEPLAY_STYLES.tag}
                  key={`${record.game}-${record.phase}-${pointIndex}`}
                >
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={point}
                  />
                </span>
              ))}
            </div>
          </MotionSurface>
        );
      })}
    </div>
  );
};

export const GameplayMinigameRecords = ({
  records,
}: GameplayMinigameRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.minigameGrid}>
      {records.map((record) => {
        const preferredGame = resolveCharacterGameIdBySeriesTitle(record.game);

        return (
          <article
            className={GAMEPLAY_STYLES.minigameCard}
            key={`${record.game}-${record.title}`}
          >
            <header className={GAMEPLAY_STYLES.minigameHeader}>
              <p className={GAMEPLAY_STYLES.minigameGame}>{record.game}</p>
              <h3 className={GAMEPLAY_STYLES.minigameTitle}>
                <CharacterNameLinkText
                  preferredGame={preferredGame}
                  text={record.title}
                />
              </h3>
            </header>
            <dl className={GAMEPLAY_STYLES.minigameMetaGrid}>
              <div className={GAMEPLAY_STYLES.minigameMeta}>
                <dt className={GAMEPLAY_STYLES.minigameMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.minigameLocationLabel}
                </dt>
                <dd>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={record.location}
                  />
                </dd>
              </div>
              <div className={GAMEPLAY_STYLES.minigameMeta}>
                <dt className={GAMEPLAY_STYLES.minigameMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.minigameUnlockLabel}
                </dt>
                <dd>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={record.unlock}
                  />
                </dd>
              </div>
              <div className={GAMEPLAY_STYLES.minigameMeta}>
                <dt className={GAMEPLAY_STYLES.minigameMetaLabel}>
                  {GAMEPLAY_DETAIL_COPY.minigameRewardLabel}
                </dt>
                <dd>
                  <CharacterNameLinkText
                    preferredGame={preferredGame}
                    text={record.reward}
                  />
                </dd>
              </div>
            </dl>
            <p className={GAMEPLAY_STYLES.minigameBody}>
              <CharacterNameLinkText
                preferredGame={preferredGame}
                text={record.body}
              />
            </p>
            {record.relatedItems ? (
              <div className={GAMEPLAY_STYLES.minigameRelatedList}>
                {record.relatedItems.map((item) => (
                  <span
                    className={GAMEPLAY_STYLES.tag}
                    key={`${record.game}-${record.title}-${item}`}
                  >
                    <ItemNameLinkText text={item} />
                  </span>
                ))}
              </div>
            ) : null}
            <div className={GAMEPLAY_STYLES.minigameTipBlock}>
              <p className={GAMEPLAY_STYLES.minigameTipTitle}>
                {GAMEPLAY_DETAIL_COPY.minigameTipsLabel}
              </p>
              <ul className={GAMEPLAY_STYLES.minigameTipList}>
                {record.tips.map((tip, tipIndex) => (
                  <li
                    className={GAMEPLAY_STYLES.minigameTipItem}
                    key={`${record.game}-${record.title}-${tipIndex}`}
                  >
                    <CharacterNameLinkText
                      preferredGame={preferredGame}
                      text={tip}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export const GameplayGuardianDeityPlanRecords = ({
  records,
}: GameplayGuardianDeityPlanRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.guardianPlanTableWrap}>
      <table className={GAMEPLAY_STYLES.guardianPlanTable}>
        <thead>
          <tr>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityPlanLabel}
            </th>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityCodeLabel}
            </th>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityHeadLabel}
            </th>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityBodyLabel}
            </th>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityLegsLabel}
            </th>
            <th className={GAMEPLAY_STYLES.guardianPlanHeadCell}>
              {GAMEPLAY_DETAIL_COPY.guardianDeityTailLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.code}>
              <th className={GAMEPLAY_STYLES.guardianPlanNameCell} scope="row">
                <span className={GAMEPLAY_STYLES.guardianPlanName}>
                  {record.name}
                </span>
                <span className={GAMEPLAY_STYLES.guardianPlanBody}>
                  {record.body}
                </span>
              </th>
              <td className={GAMEPLAY_STYLES.guardianPlanCodeCell}>
                {record.code}
              </td>
              {record.planLocations.map((location, locationIndex) => (
                <td
                  className={GAMEPLAY_STYLES.guardianPlanCell}
                  key={`${record.code}-${locationIndex}`}
                >
                  <span className={GAMEPLAY_STYLES.guardianPlanLocationLabel}>
                    <ItemNameLinkText
                      preferredGame="suikoden-ii"
                      text={`${record.name} ${locationIndex + 1}`}
                    />
                  </span>
                  <span className={GAMEPLAY_STYLES.guardianPlanLocationLabel}>
                    {GAMEPLAY_DETAIL_COPY.guardianDeityLocationLabel}
                  </span>
                  <span>{location}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const GameplayRecipeRecords = ({ records }: GameplayRecipeRecordsProps) => {
  if (records.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.recipeGrid}>
      {records.map((record) => (
        <article
          className={GAMEPLAY_STYLES.recipeCard}
          key={record.number}
        >
          <header className={GAMEPLAY_STYLES.recipeHeader}>
            <span className={GAMEPLAY_STYLES.recipeIcon} aria-hidden="true">
              {record.icon}
            </span>
            <div>
              <p className={GAMEPLAY_STYLES.recipeNumber}>
                {GAMEPLAY_DETAIL_COPY.recipeNumberLabel} {record.number}
              </p>
              <h3 className={GAMEPLAY_STYLES.recipeTitle}>
                <Link href={record.href}>{record.title}</Link>
              </h3>
              <p className={GAMEPLAY_STYLES.recipeDish}>{record.dishName}</p>
            </div>
          </header>
          <dl className={GAMEPLAY_STYLES.recipeSourceList}>
            {record.sources.map((source, sourceIndex) => (
              <div
                className={GAMEPLAY_STYLES.recipeSourceItem}
                key={`${record.number}-${source.label}-${sourceIndex}`}
              >
                <dt className={GAMEPLAY_STYLES.recipeSourceLabel}>
                  {source.label}
                </dt>
                <dd className={GAMEPLAY_STYLES.recipeSourceDetail}>
                  {source.entries.map((entry, entryIndex) => (
                    <Fragment
                      key={`${record.number}-${source.label}-${entry.label}-${entryIndex}`}
                    >
                      {entryIndex > 0 ? " / " : null}
                      {entry.href ? (
                        <Link className={GAMEPLAY_STYLES.inlineLink} href={entry.href}>
                          {entry.label}
                        </Link>
                      ) : (
                        <CharacterNameLinkText
                          preferredGame="suikoden-ii"
                          text={entry.label}
                        />
                      )}
                    </Fragment>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      ))}
    </div>
  );
};

export const GameplayRestaurantTips = ({ tips }: GameplayRestaurantTipsProps) => {
  if (tips.length === 0) {
    return null;
  }

  return (
    <div className={GAMEPLAY_STYLES.restaurantTipGrid}>
      {tips.map((tip) => (
        <article className={GAMEPLAY_STYLES.restaurantTipCard} key={tip.title}>
          <h3 className={GAMEPLAY_STYLES.restaurantTipTitle}>{tip.title}</h3>
          <p className={GAMEPLAY_STYLES.restaurantTipBody}>
            <CharacterNameLinkText preferredGame="suikoden-ii" text={tip.body} />
          </p>
          <div className={GAMEPLAY_STYLES.restaurantTipTagList}>
            {tip.points.map((point, pointIndex) => (
              <span
                className={GAMEPLAY_STYLES.tag}
                key={`${tip.title}-${pointIndex}`}
              >
                <CharacterNameLinkText preferredGame="suikoden-ii" text={point} />
              </span>
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
        {commandGroups.map((group) => {
          const preferredGame = resolveCharacterGameIdBySeriesTitle(group.game);

          return (
            <article className={GAMEPLAY_STYLES.warCommandGroup} key={group.game}>
              <p className={GAMEPLAY_STYLES.warGameLabel}>{group.game}</p>
              <p className={GAMEPLAY_STYLES.warGroupBody}>
                <CharacterNameLinkText
                  preferredGame={preferredGame}
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
                        preferredGame={preferredGame}
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
          );
        })}
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
        {roles.map((role) => {
          const preferredGame = resolveCharacterGameIdBySeriesTitle(role.game);

          return (
            <article
              className={GAMEPLAY_STYLES.warRoleCard}
              key={`${role.game}-${role.title}`}
            >
              <p className={GAMEPLAY_STYLES.warGameLabel}>{role.game}</p>
              <h4 className={GAMEPLAY_STYLES.warRoleTitle}>{role.title}</h4>
              <p className={GAMEPLAY_STYLES.warRoleBody}>
                <CharacterNameLinkText
                  preferredGame={preferredGame}
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
                      preferredGame={preferredGame}
                      text={point}
                    />
                  </span>
                ))}
              </div>
            </article>
          );
        })}
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
