import Link from "next/link";
import { buildCharacterDetailPath } from "@/constants/app-config";
import {
  CHARACTER_DATA_BY_GAME,
  formatCharacterOrder,
  isCharacterDetailAvailable,
  isCharacterGameId,
} from "@/constants/character-content";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_KOREAN_NAMES,
} from "@/constants/archive-content";
import {
  getRegionCharacterLocationAliases,
  getRegionDetailRecord,
  REGION_DROP_CHANCE_LABELS,
  REGION_DETAIL_COPY,
  REGION_SHOP_NAME_LABELS,
  translateMonsterName,
  type RegionShopItemAvailability,
} from "@/constants/region-detail-content";
import {
  ITEM_CATEGORY_LABELS,
  resolveItemReference,
  translateItemName,
} from "@/constants/item-content";
import { resolveRuneReference } from "@/constants/rune-content";
import { ATLAS_STYLES } from "@/constants/ui-styles";

type Region = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionDetailRecordsProps = {
  region: Region;
};

const AVAILABILITY_LABELS: Record<RegionShopItemAvailability, string> = {
  always: REGION_DETAIL_COPY.alwaysAvailable,
  early: REGION_DETAIL_COPY.earlyGame,
  late: REGION_DETAIL_COPY.lateGame,
};

const normalizeLocationName = (value: string) =>
  value.toLocaleLowerCase("ko-KR").replace(/\s+/g, "").trim();

const buildLocationCandidates = (value: string) => {
  const trimmedValue = value.trim();
  const withoutVillage = trimmedValue
    .replace(new RegExp(`${REGION_DETAIL_COPY.villageSuffix}$`), "")
    .trim();

  return [
    trimmedValue,
    withoutVillage,
    `${withoutVillage} ${REGION_DETAIL_COPY.villageSuffix}`,
  ]
    .filter(Boolean)
    .map(normalizeLocationName);
};

const buildRegionLocationSet = (region: Region) => {
  const koreanName = REGION_KOREAN_NAMES[region.id];
  const aliases = getRegionCharacterLocationAliases(region.game, region.id);
  const values = [
    region.name,
    koreanName,
    ...region.locations,
    ...aliases,
  ].filter(Boolean);

  return new Set(values.flatMap(buildLocationCandidates));
};

const buildRegionCharacters = (region: Region) => {
  if (!isCharacterGameId(region.game)) {
    return [];
  }

  const locationSet = buildRegionLocationSet(region);

  return CHARACTER_DATA_BY_GAME[region.game].filter((character) =>
    buildLocationCandidates(character.appearanceLocation).some((location) =>
      locationSet.has(location),
    ),
  );
};

const formatPrice = (price: number) =>
  `${price.toLocaleString("ko-KR")} ${REGION_DETAIL_COPY.priceCurrency}`;

const translateDropName = (name: string) => {
  const rune = resolveRuneReference(name);

  if (rune) {
    return rune.name;
  }

  return translateItemName(name);
};

const RegionDetailRecords = ({ region }: RegionDetailRecordsProps) => {
  const detailRecord = getRegionDetailRecord(region.game, region.id);
  const shops = detailRecord?.shops ?? [];
  const enemies = detailRecord?.enemies ?? [];
  const recruitableCharacters = buildRegionCharacters(region);
  const hasRecruitableCharacters = recruitableCharacters.length > 0;
  const hasShops = shops.length > 0;
  const hasEnemies = enemies.length > 0;

  if (!hasRecruitableCharacters && !hasShops && !hasEnemies) {
    return null;
  }

  return (
    <section className={ATLAS_STYLES.regionRecordSection}>
      <div className={ATLAS_STYLES.regionRecordHeader}>
        <span className={ATLAS_STYLES.regionRecordAccent} />
        <h2 className={ATLAS_STYLES.regionRecordTitle}>
          {REGION_DETAIL_COPY.sectionTitle}
        </h2>
      </div>

      {hasRecruitableCharacters ? (
        <article className={ATLAS_STYLES.regionRecordPanel}>
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.recruitableTitle}
          </h3>
          <div className={ATLAS_STYLES.regionCharacterGrid}>
            {recruitableCharacters.map((character) => {
              const hasDetail = isCharacterDetailAvailable(region.game);
              const characterCard = (
                <>
                  <span className={ATLAS_STYLES.regionCharacterOrder}>
                    {formatCharacterOrder(character.order)}
                  </span>
                  <span className={ATLAS_STYLES.regionCharacterName}>
                    {character.name}
                  </span>
                  <span className={ATLAS_STYLES.regionCharacterMeta}>
                    {character.star} · {character.characterType}
                  </span>
                </>
              );

              return hasDetail ? (
                <Link
                  className={ATLAS_STYLES.regionCharacterCard}
                  href={buildCharacterDetailPath(region.game, character.id)}
                  key={character.id}
                >
                  {characterCard}
                </Link>
              ) : (
                <div className={ATLAS_STYLES.regionCharacterCard} key={character.id}>
                  {characterCard}
                </div>
              );
            })}
          </div>
        </article>
      ) : null}

      {hasShops ? (
        <article className={ATLAS_STYLES.regionRecordPanel}>
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.shopTitle}
          </h3>
          <div className={ATLAS_STYLES.regionRecordGrid}>
            {shops.map((shop) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={shop.name}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {REGION_SHOP_NAME_LABELS[
                    shop.name as keyof typeof REGION_SHOP_NAME_LABELS
                  ] ?? shop.name}
                </h4>
                <ul className={ATLAS_STYLES.regionDataList}>
                  {shop.items.map((item) => {
                    const itemReference = resolveItemReference(item.name);

                    return (
                      <li className={ATLAS_STYLES.regionDataRow} key={item.name}>
                        <span>
                          <span className={ATLAS_STYLES.regionDataName}>
                            {translateDropName(item.name)}
                          </span>
                          {item.availability ? (
                            <span className={ATLAS_STYLES.regionDataMeta}>
                              {AVAILABILITY_LABELS[item.availability]}
                            </span>
                          ) : null}
                          {itemReference ? (
                            <span className={ATLAS_STYLES.regionDataMeta}>
                              {ITEM_CATEGORY_LABELS[itemReference.category]}
                            </span>
                          ) : null}
                        </span>
                        <span className={ATLAS_STYLES.regionDataValue}>
                          {formatPrice(item.price)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ) : null}

      {hasEnemies ? (
        <article className={ATLAS_STYLES.regionRecordPanel}>
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.enemyTitle}
          </h3>
          <div className={ATLAS_STYLES.regionRecordGrid}>
            {enemies.map((enemy) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={enemy.name}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {translateMonsterName(enemy.name)}
                </h4>
                {enemy.phase ? (
                  <p className={ATLAS_STYLES.regionRecordCardMeta}>
                    {enemy.phase}
                  </p>
                ) : null}
                <ul className={ATLAS_STYLES.regionDataList}>
                  {enemy.drops.map((drop) => (
                    <li className={ATLAS_STYLES.regionDataRow} key={drop.item}>
                      <span className={ATLAS_STYLES.regionDataName}>
                        {translateDropName(drop.item)}
                      </span>
                      <span className={ATLAS_STYLES.regionDataValue}>
                        {REGION_DROP_CHANCE_LABELS[drop.chance]}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ) : null}
    </section>
  );
};

export default RegionDetailRecords;
