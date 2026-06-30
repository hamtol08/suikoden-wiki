import Link from "next/link";
import MotionSurface from "@/components/shared/MotionSurface";
import { buildCharacterDetailPath } from "@/constants/app/app-config";
import {
  CHARACTER_DATA_BY_GAME,
  formatCharacterOrder,
  isCharacterDetailAvailable,
  isCharacterGameId,
} from "@/constants/characters/character-content";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_KOREAN_NAMES,
} from "@/constants/archive/archive-content";
import { loadArchiveJsonSafely } from "@/constants/app/data-loading";
import {
  getRegionCharacterLocationAliases,
  getRegionDetailRecord,
  REGION_DROP_CHANCE_LABELS,
  REGION_DETAIL_COPY,
  REGION_SHOP_AVAILABILITY_LABELS,
  REGION_SHOP_NAME_LABELS,
  translateMonsterName,
} from "@/constants/regions/region-detail-content";
import {
  ITEM_CATEGORY_LABELS,
  resolveItemReference,
  translateItemName,
} from "@/constants/items/item-content";
import { resolveRuneReference } from "@/constants/runes/rune-content";
import { ATLAS_STYLES } from "@/constants/styles/ui-styles";

type Region = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionDetailRecordsProps = {
  region: Region;
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
  const aliases = loadArchiveJsonSafely<readonly string[]>({
    fallback: [],
    label: `region-location-aliases:${region.game}:${region.id}`,
    load: () => getRegionCharacterLocationAliases(region.game, region.id),
  });
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
  const detailRecord = loadArchiveJsonSafely({
    fallback: null,
    label: `region-detail-record:${region.game}:${region.id}`,
    load: () => getRegionDetailRecord(region.game, region.id),
  });
  const shops = detailRecord?.shops ?? [];
  const enemies = detailRecord?.enemies ?? [];
  const recruitableCharacters = loadArchiveJsonSafely({
    fallback: [],
    label: `region-characters:${region.game}:${region.id}`,
    load: () => buildRegionCharacters(region),
  });
  const hasCharacterDetail = loadArchiveJsonSafely({
    fallback: false,
    label: `region-character-detail-availability:${region.game}`,
    load: () => isCharacterDetailAvailable(region.game),
  });
  const shopCards = shops.flatMap((shop) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `region-shop:${region.game}:${region.id}:${shop.name}`,
      load: () => [
        {
          items: shop.items.flatMap((item) =>
            loadArchiveJsonSafely({
              fallback: [],
              label: `region-shop-item:${region.game}:${region.id}:${shop.name}:${item.name}`,
              load: () => {
                const itemReference = resolveItemReference(item.name);

                return [
                  {
                    availabilityLabel: item.availability
                      ? REGION_SHOP_AVAILABILITY_LABELS[item.availability]
                      : null,
                    categoryLabel: itemReference
                      ? ITEM_CATEGORY_LABELS[itemReference.category]
                      : null,
                    key: item.name,
                    name: translateDropName(item.name),
                    price: formatPrice(item.price),
                  },
                ];
              },
            }),
          ),
          key: shop.name,
          name: REGION_SHOP_NAME_LABELS[
            shop.name as keyof typeof REGION_SHOP_NAME_LABELS
          ] ?? shop.name,
        },
      ],
    }),
  );
  const enemyCards = enemies.flatMap((enemy) =>
    loadArchiveJsonSafely({
      fallback: [],
      label: `region-enemy:${region.game}:${region.id}:${enemy.name}`,
      load: () => [
        {
          drops: enemy.drops.flatMap((drop) =>
            loadArchiveJsonSafely({
              fallback: [],
              label: `region-enemy-drop:${region.game}:${region.id}:${enemy.name}:${drop.item}`,
              load: () => [
                {
                  chance: REGION_DROP_CHANCE_LABELS[drop.chance],
                  key: drop.item,
                  name: translateDropName(drop.item),
                },
              ],
            }),
          ),
          key: enemy.name,
          name: translateMonsterName(enemy.name),
          phase: enemy.phase,
        },
      ],
    }),
  );
  const hasRecruitableCharacters = recruitableCharacters.length > 0;
  const hasShops = shopCards.length > 0;
  const hasEnemies = enemyCards.length > 0;

  if (!hasRecruitableCharacters && !hasShops && !hasEnemies) {
    return null;
  }

  return (
    <MotionSurface as="section" className={ATLAS_STYLES.regionRecordSection}>
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

              return hasCharacterDetail ? (
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
            {shopCards.map((shop) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={shop.key}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {shop.name}
                </h4>
                <ul className={ATLAS_STYLES.regionDataList}>
                  {shop.items.map((item) => (
                    <li className={ATLAS_STYLES.regionDataRow} key={item.key}>
                      <span>
                        <span className={ATLAS_STYLES.regionDataName}>
                          {item.name}
                        </span>
                        {item.availabilityLabel ? (
                          <span className={ATLAS_STYLES.regionDataMeta}>
                            {item.availabilityLabel}
                          </span>
                        ) : null}
                        {item.categoryLabel ? (
                          <span className={ATLAS_STYLES.regionDataMeta}>
                            {item.categoryLabel}
                          </span>
                        ) : null}
                      </span>
                      <span className={ATLAS_STYLES.regionDataValue}>
                        {item.price}
                      </span>
                    </li>
                  ))}
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
            {enemyCards.map((enemy) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={enemy.key}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {enemy.name}
                </h4>
                {enemy.phase ? (
                  <p className={ATLAS_STYLES.regionRecordCardMeta}>
                    {enemy.phase}
                  </p>
                ) : null}
                <ul className={ATLAS_STYLES.regionDataList}>
                  {enemy.drops.map((drop) => (
                    <li className={ATLAS_STYLES.regionDataRow} key={drop.key}>
                      <span className={ATLAS_STYLES.regionDataName}>
                        {drop.name}
                      </span>
                      <span className={ATLAS_STYLES.regionDataValue}>
                        {drop.chance}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      ) : null}
    </MotionSurface>
  );
};

export default RegionDetailRecords;
