/**
 * 캐릭터 상세 상단 프로필 카드와 핵심 태그를 렌더링합니다.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CharacterCombatDataPanels,
  CharacterDetailNavigation,
  CharacterDetailLedger,
  CharacterDetailSection,
} from "@/components/characters/detail/CharacterDetailBlocks";
import RuneReferenceLink from "@/components/runes/shared/RuneReferenceLink";
import { buildCharacterGamePath } from "@/constants/app/app-config";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import {
  buildCharacterCombatDataPanels,
  buildCharacterDetailNavigationItems,
  buildCharacterGameRoleRows,
  buildCharacterProfileRows,
  CharacterEntry,
  type CharacterGameId,
  CHARACTER_COPY,
  CHARACTER_DETAIL_SECTION_IDS,
  formatCharacterOrder,
  getCharacterDetailRecord,
  resolveCharacterPrimaryRunes,
} from "@/constants/characters/character-content";
import {
  CHARACTER_STYLES,
  ICON_STYLES,
  IMAGE_SIZE_HINTS,
} from "@/constants/styles/ui-styles";

type CharacterDetailProfileProps = {
  character: CharacterEntry;
  seriesEyebrow: string;
  seriesTitle: string;
};

const CharacterDetailProfile = ({
  character,
  seriesEyebrow,
  seriesTitle,
}: CharacterDetailProfileProps) => {
  const paddedOrder = formatCharacterOrder(character.order);
  const characterGame = character.game as CharacterGameId;
  const characterListHref = buildCharacterGamePath(character.game);
  const detailRecord = loadArchiveJsonSafely({
    fallback: null,
    label: buildArchiveDataLabel("character-detail-record", character.id),
    load: () => getCharacterDetailRecord(character),
  });
  const profileRows = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("character-profile-rows", character.id),
    load: () => buildCharacterProfileRows(character, seriesTitle),
  });
  const gameRoleRows = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("character-game-role-rows", character.id),
    load: () => buildCharacterGameRoleRows(character, detailRecord),
  });
  const primaryRunes = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("character-primary-runes", character.id),
    load: () => resolveCharacterPrimaryRunes(character, detailRecord),
  });
  const combatDataPanels = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("character-combat-data", character.id),
    load: () => buildCharacterCombatDataPanels(character, detailRecord),
  });
  const detailNavigationItems = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("character-detail-navigation", character.id),
    load: () =>
      buildCharacterDetailNavigationItems({
        character,
        combatDataPanels,
      }),
  });

  return (
    <>
      <article className={CHARACTER_STYLES.detailHero}>
        <div className={CHARACTER_STYLES.detailPortraitPanel}>
          <div className={CHARACTER_STYLES.portrait}>
            <Image
              alt={CHARACTER_COPY.portraitAlt(character.name)}
              className={CHARACTER_STYLES.portraitImage}
              fill
              priority
              sizes={IMAGE_SIZE_HINTS.characterPortrait}
              src={character.image}
            />
          </div>
          <div className={CHARACTER_STYLES.detailIdentityText}>
            <p className={CHARACTER_STYLES.detailPortraitMeta}>
              {CHARACTER_COPY.detailOrderCaption(paddedOrder)}
            </p>
            <h1 className={CHARACTER_STYLES.detailTitle}>{character.name}</h1>
          </div>
        </div>

        <div className={CHARACTER_STYLES.detailHeroContent}>
          <p className={CHARACTER_STYLES.detailKicker}>{seriesEyebrow}</p>
          <div className={CHARACTER_STYLES.detailChipRow}>
            <span className={CHARACTER_STYLES.detailChipPrimary}>
              {character.characterType}
            </span>
            <span className={CHARACTER_STYLES.detailChipSecondary}>
              {character.star}
            </span>
            {primaryRunes.length > 0 ? (
              primaryRunes.map((rune) => (
                <RuneReferenceLink
                  className={CHARACTER_STYLES.detailChipTertiary}
                  key={rune}
                  name={rune}
                />
              ))
            ) : (
              <RuneReferenceLink
                className={CHARACTER_STYLES.detailChipTertiary}
                name={CHARACTER_COPY.unavailableDetail}
              />
            )}
          </div>
        </div>
      </article>

      <CharacterDetailNavigation
        ariaLabel={CHARACTER_COPY.detailNavigationAriaLabel(character.name)}
        items={detailNavigationItems}
        title={CHARACTER_COPY.detailLabels.characterRecord}
      />

      <div className={CHARACTER_STYLES.detailLayout}>
        <CharacterDetailSection
          id={CHARACTER_DETAIL_SECTION_IDS.profileLedger}
          title={CHARACTER_COPY.detailLabels.profileLedger}
        >
          <CharacterDetailLedger
            preferredGame={characterGame}
            rows={profileRows}
          />
        </CharacterDetailSection>

        <CharacterDetailSection
          id={CHARACTER_DETAIL_SECTION_IDS.gameRole}
          title={CHARACTER_COPY.detailLabels.gameRole}
        >
          <CharacterDetailLedger
            preferredGame={characterGame}
            rows={gameRoleRows}
          />
        </CharacterDetailSection>

        {combatDataPanels.length > 0 && (
          <CharacterDetailSection
            id={CHARACTER_DETAIL_SECTION_IDS.combatData}
            title={CHARACTER_COPY.detailLabels.combatData}
          >
            <CharacterCombatDataPanels
              panels={combatDataPanels}
              preferredGame={characterGame}
            />
          </CharacterDetailSection>
        )}
      </div>

      <div className={CHARACTER_STYLES.detailBackAction}>
        <Link
          className={CHARACTER_STYLES.detailBackLink}
          href={characterListHref}
        >
          <ArrowLeft aria-hidden="true" className={ICON_STYLES.small} />
          {CHARACTER_COPY.detailLabels.backToList}
        </Link>
      </div>
    </>
  );
};

export default CharacterDetailProfile;
