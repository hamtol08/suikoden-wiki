import Image from "next/image";
import Link from "next/link";
import { buildCharacterDetailPath } from "@/constants/app/app-config";
import {
  CHARACTER_COPY,
  CHARACTER_DATA_BY_GAME,
  formatCharacterOrder,
  isCharacterDetailAvailable,
} from "@/constants/characters/character-content";
import {
  CHARACTER_STYLES,
  IMAGE_SIZE_HINTS,
} from "@/constants/styles/ui-styles";

type CharacterIndexTableProps = {
  characters: (typeof CHARACTER_DATA_BY_GAME)[keyof typeof CHARACTER_DATA_BY_GAME];
  gameId: keyof typeof CHARACTER_DATA_BY_GAME;
};

const CharacterIndexTable = ({ characters, gameId }: CharacterIndexTableProps) => {
  const hasDetail = isCharacterDetailAvailable(gameId);

  return (
    <section className={CHARACTER_STYLES.panel}>
      <header className={CHARACTER_STYLES.panelHeader}>
        <h2 className={CHARACTER_STYLES.panelTitle}>
          {CHARACTER_COPY.eyebrow}
        </h2>
      </header>

      <div className={CHARACTER_STYLES.mobileList}>
        {characters.map((character) => {
          const characterPath = buildCharacterDetailPath(gameId, character.id);
          const cardContent = (
            <>
              <span className={CHARACTER_STYLES.mobileCardTop}>
                <span className={CHARACTER_STYLES.mobileOrder}>
                  {formatCharacterOrder(character.order)}
                </span>
                <span className={CHARACTER_STYLES.avatar}>
                  <Image
                    alt={CHARACTER_COPY.portraitAlt(character.name)}
                    className={CHARACTER_STYLES.avatarImage}
                    fill
                    sizes={IMAGE_SIZE_HINTS.characterIcon}
                    src={character.image}
                  />
                </span>
                <span className={CHARACTER_STYLES.mobileNameWrap}>
                  <span className={CHARACTER_STYLES.name}>{character.name}</span>
                  <span className={CHARACTER_STYLES.subName}>
                    {character.star}
                  </span>
                </span>
              </span>

              <span className={CHARACTER_STYLES.mobileCardBody}>
                <span className={CHARACTER_STYLES.mobileMetaGrid}>
                  <span className={CHARACTER_STYLES.mobileMetaBox}>
                    <span className={CHARACTER_STYLES.mobileMetaLabel}>
                      {CHARACTER_COPY.tableLabels.type}
                    </span>
                    <span className={CHARACTER_STYLES.mobileMetaValue}>
                      {character.characterType}
                    </span>
                  </span>
                  <span className={CHARACTER_STYLES.mobileMetaBox}>
                    <span className={CHARACTER_STYLES.mobileMetaLabel}>
                      {CHARACTER_COPY.tableLabels.appearanceLocation}
                    </span>
                    <span className={CHARACTER_STYLES.mobileMetaValue}>
                      {character.appearanceLocation}
                    </span>
                  </span>
                </span>
              </span>
            </>
          );

          return hasDetail ? (
            <Link
              className={CHARACTER_STYLES.mobileCard}
              href={characterPath}
              key={character.id}
            >
              {cardContent}
            </Link>
          ) : (
            <article
              className={CHARACTER_STYLES.mobileCardStatic}
              key={character.id}
            >
              {cardContent}
            </article>
          );
        })}
      </div>

      <div className={CHARACTER_STYLES.tableWrap}>
        <table className={CHARACTER_STYLES.table}>
          <colgroup>
            <col className={CHARACTER_STYLES.tableColNo} />
            <col className={CHARACTER_STYLES.tableColPortrait} />
            <col className={CHARACTER_STYLES.tableColCharacter} />
            <col className={CHARACTER_STYLES.tableColStar} />
            <col className={CHARACTER_STYLES.tableColType} />
            <col className={CHARACTER_STYLES.tableColLocation} />
          </colgroup>
          <thead className={CHARACTER_STYLES.tableHead}>
            <tr>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.no}
              </th>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.portrait}
              </th>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.character}
              </th>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.star}
              </th>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.type}
              </th>
              <th className={CHARACTER_STYLES.tableHeadCell} scope="col">
                {CHARACTER_COPY.tableLabels.appearanceLocation}
              </th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => {
              const characterPath = buildCharacterDetailPath(gameId, character.id);
              const portrait = (
                <span className={CHARACTER_STYLES.avatar}>
                  <Image
                    alt={CHARACTER_COPY.portraitAlt(character.name)}
                    className={CHARACTER_STYLES.avatarImage}
                    fill
                    sizes={IMAGE_SIZE_HINTS.characterIcon}
                    src={character.image}
                  />
                </span>
              );
              const characterName = (
                <span className={CHARACTER_STYLES.name}>{character.name}</span>
              );
              const tableCells = [
                {
                  key: "order",
                  content: (
                    <span className={CHARACTER_STYLES.orderText}>
                      {formatCharacterOrder(character.order)}
                    </span>
                  ),
                },
                {
                  key: "portrait",
                  content: portrait,
                },
                {
                  key: "name",
                  content: characterName,
                },
                {
                  key: "star",
                  content: (
                    <span className={CHARACTER_STYLES.starText}>
                      {character.star}
                    </span>
                  ),
                },
                {
                  key: "type",
                  content: (
                    <span className={CHARACTER_STYLES.chip}>
                      {character.characterType}
                    </span>
                  ),
                },
                {
                  key: "location",
                  content: (
                    <span className={CHARACTER_STYLES.locationText}>
                      {character.appearanceLocation}
                    </span>
                  ),
                },
              ];

              return (
                <tr className={CHARACTER_STYLES.tableRow} key={character.id}>
                  {tableCells.map((cell, cellIndex) => (
                    <td className={CHARACTER_STYLES.tableCell} key={cell.key}>
                      {hasDetail ? (
                        <Link
                          aria-label={CHARACTER_COPY.ariaLabels.detailLink(
                            character.name,
                          )}
                          className={CHARACTER_STYLES.tableCellLink}
                          href={characterPath}
                          tabIndex={cellIndex === 0 ? undefined : -1}
                        >
                          {cell.content}
                        </Link>
                      ) : (
                        <span className={CHARACTER_STYLES.tableCellContent}>
                          {cell.content}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CharacterIndexTable;
