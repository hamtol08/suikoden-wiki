import Image from "next/image";
import {
  CharacterCombatDataPanels,
  CharacterDetailNavigation,
  CharacterDetailLedger,
  CharacterDetailSection,
} from "@/components/archive/CharacterDetailBlocks";
import RuneReferenceLink from "@/components/archive/RuneReferenceLink";
import {
  buildCharacterCombatDataPanels,
  buildCharacterDetailNavigationItems,
  buildCharacterGameRoleRows,
  buildCharacterProfileRows,
  CharacterEntry,
  CHARACTER_COPY,
  CHARACTER_DETAIL_SECTION_IDS,
  formatCharacterOrder,
  getCharacterDetailRecord,
  resolveCharacterPrimaryRunes,
} from "@/constants/character-content";
import {
  CHARACTER_STYLES,
  IMAGE_SIZE_HINTS,
} from "@/constants/ui-styles";

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
  const detailRecord = getCharacterDetailRecord(character);
  const profileRows = buildCharacterProfileRows(character, seriesTitle);
  const gameRoleRows = buildCharacterGameRoleRows(character, detailRecord);
  const primaryRunes = resolveCharacterPrimaryRunes(character, detailRecord);
  const combatDataPanels = buildCharacterCombatDataPanels(character, detailRecord);
  const detailNavigationItems = buildCharacterDetailNavigationItems({
    character,
    combatDataPanels,
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
          <CharacterDetailLedger rows={profileRows} />
        </CharacterDetailSection>

        <CharacterDetailSection
          id={CHARACTER_DETAIL_SECTION_IDS.gameRole}
          title={CHARACTER_COPY.detailLabels.gameRole}
        >
          <CharacterDetailLedger rows={gameRoleRows} />
        </CharacterDetailSection>

        {combatDataPanels.length > 0 && (
          <CharacterDetailSection
            id={CHARACTER_DETAIL_SECTION_IDS.combatData}
            title={CHARACTER_COPY.detailLabels.combatData}
          >
            <CharacterCombatDataPanels panels={combatDataPanels} />
          </CharacterDetailSection>
        )}
      </div>
    </>
  );
};

export default CharacterDetailProfile;
