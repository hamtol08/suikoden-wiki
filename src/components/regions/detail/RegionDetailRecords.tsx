/**
 * 지역 상세 페이지의 시설, 몬스터, 상점, 출연 기록을 렌더링합니다.
 */

import Link from "next/link";
import MotionSurface from "@/components/shared/MotionSurface";
import { buildCharacterDetailPath } from "@/constants/app/app-config";
import {
  formatArchiveNumber,
  normalizeArchiveCompactText,
} from "@/constants/app/archive-utils";
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
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
  mapArchiveRecordsSafely,
} from "@/constants/app/data-loading";
import {
  getRegionCharacterLocationAliases,
  getRegionDetailRecord,
  REGION_DETAIL_ANCHORS,
  REGION_DROP_CHANCE_LABELS,
  REGION_DEFAULT_FACILITY_ROLES_BY_CATEGORY,
  REGION_DETAIL_COPY,
  REGION_FACILITY_ROLE_DESCRIPTIONS,
  REGION_SHOP_AVAILABILITY_LABELS,
  getRegionFacilityLabel,
  getRegionFacilityRoleLabel,
  resolveRegionFacilityRole,
  translateMonsterName,
  type RegionEnemyDrop,
  type RegionEnemyRecord,
  type RegionShopItem,
  type RegionShopRecord,
} from "@/constants/regions/region-detail-content";
import {
  getItemIndexRecordsByGame,
  isItemIndexGameId,
  ITEM_CATEGORY_LABELS,
  ITEM_SOURCE_TYPE_LABELS,
  resolveItemDetailHref,
  resolveItemReference,
  translateItemName,
  type ItemSourceType,
} from "@/constants/items/item-content";
import { resolveMonsterDetailHrefByName } from "@/constants/monsters/monster-content";
import { resolveRuneReference } from "@/constants/runes/rune-content";
import { ATLAS_STYLES } from "@/constants/styles/ui-styles";

type Region = (typeof REGION_ATLAS_LOCATIONS)[number];

type RegionDetailRecordsProps = {
  region: Region;
};

type RegionAcquisitionCard = {
  categoryLabel: string;
  href: string;
  key: string;
  locations: readonly string[];
  name: string;
  sourceLabel: string;
};

type RegionFacilityCard = {
  body: string;
  details: readonly string[];
  key: string;
  name: string;
  shopHref: string | null;
};

type RegionFacilityRole = NonNullable<
  ReturnType<typeof resolveRegionFacilityRole>
>;

type RegionShopItemCard = {
  availabilityLabel: string | null;
  categoryLabel: string | null;
  href: string | null;
  key: string;
  name: string;
  price: string;
};

type RegionShopCard = {
  body: string | null;
  items: readonly RegionShopItemCard[];
  key: string;
  name: string;
};

type RegionEnemyDropCard = {
  chance: string;
  href: string | null;
  key: string;
  name: string;
};

type RegionEnemyCard = {
  drops: readonly RegionEnemyDropCard[];
  href: string | null;
  key: string;
  name: string;
  phase?: string;
};

const normalizeLocationName = normalizeArchiveCompactText;

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
    label: buildArchiveDataLabel(
      "region-location-aliases",
      region.game,
      region.id,
    ),
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
  `${formatArchiveNumber(price)} ${REGION_DETAIL_COPY.priceCurrency}`;

const REGION_ACQUISITION_SOURCE_TYPES = [
  "found",
  "treasure",
  "trade",
  "minigame",
  "gds",
  "other",
] as const satisfies readonly ItemSourceType[];

const locationBelongsToRegion = (
  location: string,
  locationSet: ReadonlySet<string>,
) => {
  const normalizedLocation = normalizeLocationName(location);

  return [...locationSet].some((candidate) =>
    normalizedLocation.includes(candidate),
  );
};

const buildRegionAcquisitionCards = (
  region: Region,
): RegionAcquisitionCard[] => {
  if (!isItemIndexGameId(region.game)) {
    return [];
  }

  const locationSet = buildRegionLocationSet(region);

  return getItemIndexRecordsByGame(region.game).flatMap((item) => {
    const sourceEntries = REGION_ACQUISITION_SOURCE_TYPES.flatMap(
      (sourceType) => {
        const locations = item.sourceLocations[sourceType].filter((location) =>
          locationBelongsToRegion(location, locationSet),
        );

        return locations.length > 0 ?
            [
              {
                locations,
                sourceType,
              },
            ] :
            [];
      },
    );

    if (sourceEntries.length === 0) {
      return [];
    }

    return sourceEntries.map(({ locations, sourceType }) => ({
      categoryLabel: ITEM_CATEGORY_LABELS[item.category],
      href: item.href,
      key: `${item.game}:${item.id}:${sourceType}`,
      locations,
      name: item.name,
      sourceLabel: ITEM_SOURCE_TYPE_LABELS[sourceType],
    }));
  });
};

const buildRegionFacilityCards = (
  facilities: readonly { name: string }[],
  shops: readonly { name: string; items: readonly unknown[] }[],
  locations: readonly string[],
  category: string,
): RegionFacilityCard[] => {
  const uniqueFacilityNames = [
    ...facilities,
    ...shops,
    ...locations.map((name) => ({ name })),
  ].reduce<string[]>(
    (names, facility) =>
      names.includes(facility.name) ? names : [...names, facility.name],
    [],
  );
  const buildFacilityDetails = (role: RegionFacilityRole) => {
    const matchingFacilityNames = [
      ...facilities,
      ...shops,
    ]
      .filter((facility) => resolveRegionFacilityRole(facility.name) === role)
      .map((facility) => getRegionFacilityLabel(facility.name));
    const recordNames = [...new Set(matchingFacilityNames)];
    const shopItemCount = shops
      .filter((shop) => resolveRegionFacilityRole(shop.name) === role)
      .reduce((total, shop) => total + shop.items.length, 0);

    return [
      recordNames.length > 0
        ? `${REGION_DETAIL_COPY.facilityRecordLabel}: ${recordNames.join(" / ")}`
        : REGION_DETAIL_COPY.facilityDefaultLabel,
      shopItemCount > 0
        ? `${REGION_DETAIL_COPY.facilityShopItemsLabel}: ${formatArchiveNumber(shopItemCount)}${REGION_DETAIL_COPY.facilityItemCountSuffix}`
        : "",
    ].filter(Boolean);
  };
  const buildFacilityShopHref = (role: RegionFacilityRole) =>
    shops.some((shop) => resolveRegionFacilityRole(shop.name) === role)
      ? `#${REGION_DETAIL_ANCHORS.shops}`
      : null;

  const cardsByRole = uniqueFacilityNames.reduce(
    (cards, name) => {
      const role = resolveRegionFacilityRole(name);

      if (!role || cards.has(role)) {
        return cards;
      }

      cards.set(role, {
        body: REGION_FACILITY_ROLE_DESCRIPTIONS[role],
        details: buildFacilityDetails(role),
        key: role,
        name: getRegionFacilityRoleLabel(role),
        shopHref: buildFacilityShopHref(role),
      });

      return cards;
    },
    new Map<RegionFacilityRole, RegionFacilityCard>(),
  );
  const defaultRoles =
    REGION_DEFAULT_FACILITY_ROLES_BY_CATEGORY[
      category as keyof typeof REGION_DEFAULT_FACILITY_ROLES_BY_CATEGORY
    ] ?? [];

  defaultRoles.forEach((role) => {
    if (cardsByRole.has(role)) {
      return;
    }

    cardsByRole.set(role, {
      body: REGION_FACILITY_ROLE_DESCRIPTIONS[role],
      details: buildFacilityDetails(role),
      key: role,
      name: getRegionFacilityRoleLabel(role),
      shopHref: buildFacilityShopHref(role),
    });
  });

  return [...cardsByRole.values()];
};

const translateDropName = (name: string) => {
  const rune = resolveRuneReference(name);

  if (rune) {
    return rune.name;
  }

  return translateItemName(name);
};

const resolveDropHref = (name: string) => {
  const rune = resolveRuneReference(name);

  if (rune) {
    return rune.href;
  }

  const translatedName = translateDropName(name);

  return resolveItemReference(name)?.href ??
    resolveItemDetailHref(name) ??
    resolveItemDetailHref(translatedName);
};

const findRegionShopItemRecord = (game: string, itemName: string) => {
  if (!isItemIndexGameId(game)) {
    return null;
  }

  const href = resolveDropHref(itemName);
  const normalizedItemName = normalizeArchiveCompactText(itemName);

  return getItemIndexRecordsByGame(game).find((record) =>
    record.href === href ||
    normalizeArchiveCompactText(record.name) === normalizedItemName ||
    record.originalNames.some((name) =>
      normalizeArchiveCompactText(name) === normalizedItemName
    )
  ) ?? null;
};

const buildRegionShopItemCard = (
  game: string,
  item: RegionShopItem,
): RegionShopItemCard => {
  const itemReference = resolveItemReference(item.name);
  const itemRecord = findRegionShopItemRecord(game, item.name);
  const category = itemReference?.category ?? itemRecord?.category ?? null;

  return {
    availabilityLabel: item.availability
      ? REGION_SHOP_AVAILABILITY_LABELS[item.availability]
      : null,
    categoryLabel: category ? ITEM_CATEGORY_LABELS[category] : null,
    href: itemRecord?.href ?? itemReference?.href ?? resolveDropHref(item.name),
    key: item.name,
    name: translateDropName(item.name),
    price: formatPrice(item.price),
  };
};

const buildRegionShopCards = (
  region: Region,
  shops: readonly RegionShopRecord[],
): RegionShopCard[] =>
  mapArchiveRecordsSafely({
    getLabel: (shop) => `region-shop:${region.game}:${region.id}:${shop.name}`,
    map: (shop) => {
      const role = resolveRegionFacilityRole(shop.name);

      return {
        body: role ? REGION_FACILITY_ROLE_DESCRIPTIONS[role] : null,
        items: mapArchiveRecordsSafely({
          getLabel: (item) =>
            `region-shop-item:${region.game}:${region.id}:${shop.name}:${item.name}`,
          map: (item) => buildRegionShopItemCard(region.game, item),
          records: shop.items,
        }),
        key: shop.name,
        name: getRegionFacilityLabel(shop.name),
      };
    },
    records: shops,
  });

const buildRegionEnemyDropCard = (
  drop: RegionEnemyDrop,
): RegionEnemyDropCard => ({
  chance: REGION_DROP_CHANCE_LABELS[drop.chance],
  href: resolveDropHref(drop.item),
  key: drop.item,
  name: translateDropName(drop.item),
});

const buildRegionEnemyCards = (
  region: Region,
  enemies: readonly RegionEnemyRecord[],
): RegionEnemyCard[] =>
  mapArchiveRecordsSafely({
    getLabel: (enemy) =>
      `region-enemy:${region.game}:${region.id}:${enemy.name}`,
    map: (enemy) => ({
      drops: mapArchiveRecordsSafely({
        getLabel: (drop) =>
          `region-enemy-drop:${region.game}:${region.id}:${enemy.name}:${drop.item}`,
        map: buildRegionEnemyDropCard,
        records: enemy.drops,
      }),
      href: resolveMonsterDetailHrefByName(region.game, enemy.name),
      key: enemy.name,
      name: translateMonsterName(enemy.name),
      phase: enemy.phase,
    }),
    records: enemies,
  });

const RegionDetailRecords = ({ region }: RegionDetailRecordsProps) => {
  const detailRecord = loadArchiveJsonSafely({
    fallback: null,
    label: buildArchiveDataLabel(
      "region-detail-record",
      region.game,
      region.id,
    ),
    load: () => getRegionDetailRecord(region.game, region.id),
  });
  const facilities = detailRecord?.facilities ?? [];
  const shops = detailRecord?.shops ?? [];
  const enemies = detailRecord?.enemies ?? [];
  const facilityCards = buildRegionFacilityCards(
    facilities,
    shops,
    region.locations,
    region.category,
  );
  const acquisitionCards = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel(
      "region-acquisition-records",
      region.game,
      region.id,
    ),
    load: () => buildRegionAcquisitionCards(region),
  });
  const recruitableCharacters = loadArchiveJsonSafely({
    fallback: [],
    label: buildArchiveDataLabel("region-characters", region.game, region.id),
    load: () => buildRegionCharacters(region),
  });
  const hasCharacterDetail = loadArchiveJsonSafely({
    fallback: false,
    label: buildArchiveDataLabel(
      "region-character-detail-availability",
      region.game,
    ),
    load: () => isCharacterDetailAvailable(region.game),
  });
  const shopCards = buildRegionShopCards(region, shops);
  const enemyCards = buildRegionEnemyCards(region, enemies);
  const hasRecruitableCharacters = recruitableCharacters.length > 0;
  const hasFacilities = facilityCards.length > 0;
  const hasShops = shopCards.length > 0;
  const hasEnemies = enemyCards.length > 0;
  const hasAcquisitionCards = acquisitionCards.length > 0;
  const shopItemCount = shopCards.reduce(
    (total, shop) => total + shop.items.length,
    0,
  );
  const enemyDropCount = new Set(
    enemyCards.flatMap((enemy) => enemy.drops.map((drop) => drop.name)),
  ).size;
  const summaryItems = [
    {
      label: REGION_DETAIL_COPY.recruitableCountLabel,
      value: formatArchiveNumber(recruitableCharacters.length),
    },
    {
      label: REGION_DETAIL_COPY.facilityCountLabel,
      value: formatArchiveNumber(facilityCards.length),
    },
    {
      label: REGION_DETAIL_COPY.shopCountLabel,
      value: formatArchiveNumber(shopCards.length),
    },
    {
      label: REGION_DETAIL_COPY.shopItemCountLabel,
      value: formatArchiveNumber(shopItemCount),
    },
    {
      label: REGION_DETAIL_COPY.enemyCountLabel,
      value: formatArchiveNumber(enemyCards.length),
    },
    {
      label: REGION_DETAIL_COPY.enemyDropCountLabel,
      value: formatArchiveNumber(enemyDropCount),
    },
    {
      label: REGION_DETAIL_COPY.acquisitionCountLabel,
      value: formatArchiveNumber(acquisitionCards.length),
    },
  ] as const;

  if (
    !hasRecruitableCharacters &&
    !hasFacilities &&
    !hasShops &&
    !hasEnemies &&
    !hasAcquisitionCards
  ) {
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

      <article className={ATLAS_STYLES.regionRecordPanel}>
        <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
          {REGION_DETAIL_COPY.summaryTitle}
        </h3>
        <dl className={ATLAS_STYLES.regionSummaryGrid}>
          {summaryItems.map((item) => (
            <div className={ATLAS_STYLES.regionSummaryCard} key={item.label}>
              <dt className={ATLAS_STYLES.regionSummaryLabel}>
                {item.label}
              </dt>
              <dd className={ATLAS_STYLES.regionSummaryValue}>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>

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

      {hasFacilities ? (
        <article className={ATLAS_STYLES.regionRecordPanel}>
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.facilityTitle}
          </h3>
          <p className={ATLAS_STYLES.regionFacilityIntro}>
            {REGION_DETAIL_COPY.facilityBody}
          </p>
          <div className={ATLAS_STYLES.regionFacilityGrid}>
            {facilityCards.map((facility) => (
              <section
                className={ATLAS_STYLES.regionFacilityCard}
                key={facility.key}
              >
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {facility.name}
                </h4>
                <p className={ATLAS_STYLES.regionFacilityBody}>
                  {facility.body}
                </p>
                <ul className={ATLAS_STYLES.regionFacilityDetailList}>
                  {facility.details.map((detail) => (
                    <li
                      className={ATLAS_STYLES.regionFacilityDetailItem}
                      key={`${facility.key}:${detail}`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
                {facility.shopHref ? (
                  <Link
                    className={ATLAS_STYLES.regionFacilityLink}
                    href={facility.shopHref}
                  >
                    {REGION_DETAIL_COPY.facilityShopLinkLabel}
                  </Link>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      ) : null}

      {hasShops ? (
        <article
          className={ATLAS_STYLES.regionRecordPanel}
          id={REGION_DETAIL_ANCHORS.shops}
        >
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.shopTitle}
          </h3>
          <div className={ATLAS_STYLES.regionRecordGrid}>
            {shopCards.map((shop) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={shop.key}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  {shop.name}
                </h4>
                {shop.body ? (
                  <p className={ATLAS_STYLES.regionRecordCardMeta}>
                    {shop.body}
                  </p>
                ) : null}
                <ul className={ATLAS_STYLES.regionDataList}>
                  {shop.items.map((item) => (
                    <li className={ATLAS_STYLES.regionDataRow} key={item.key}>
                      <span>
                        {item.href ? (
                          <Link
                            className={ATLAS_STYLES.regionDataName}
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span className={ATLAS_STYLES.regionDataName}>
                            {item.name}
                          </span>
                        )}
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
                  {enemy.href ? (
                    <Link
                      className={ATLAS_STYLES.regionRecordCardTitle}
                      href={enemy.href}
                    >
                      {enemy.name}
                    </Link>
                  ) : (
                    enemy.name
                  )}
                </h4>
                {enemy.phase ? (
                  <p className={ATLAS_STYLES.regionRecordCardMeta}>
                    {enemy.phase}
                  </p>
                ) : null}
                {enemy.drops.length > 0 ? (
                  <ul className={ATLAS_STYLES.regionDataList}>
                    {enemy.drops.map((drop, dropIndex) => (
                      <li
                        className={ATLAS_STYLES.regionDataRow}
                        key={`${drop.key}-${dropIndex}`}
                      >
                        {drop.href ? (
                          <Link
                            className={ATLAS_STYLES.regionDataName}
                            href={drop.href}
                          >
                            {drop.name}
                          </Link>
                        ) : (
                          <span className={ATLAS_STYLES.regionDataName}>
                            {drop.name}
                          </span>
                        )}
                        <span className={ATLAS_STYLES.regionDataValue}>
                          {drop.chance}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={ATLAS_STYLES.regionRecordEmpty}>
                    {REGION_DETAIL_COPY.noDrop}
                  </p>
                )}
              </section>
            ))}
          </div>
        </article>
      ) : null}

      {hasAcquisitionCards ? (
        <article className={ATLAS_STYLES.regionRecordPanel}>
          <h3 className={ATLAS_STYLES.regionRecordPanelTitle}>
            {REGION_DETAIL_COPY.acquisitionTitle}
          </h3>
          <div className={ATLAS_STYLES.regionRecordGrid}>
            {acquisitionCards.map((item) => (
              <section className={ATLAS_STYLES.regionRecordCard} key={item.key}>
                <h4 className={ATLAS_STYLES.regionRecordCardTitle}>
                  <Link
                    className={ATLAS_STYLES.regionRecordCardTitle}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </h4>
                <p className={ATLAS_STYLES.regionRecordCardMeta}>
                  {item.sourceLabel} · {item.categoryLabel}
                </p>
                <ul className={ATLAS_STYLES.regionDataList}>
                  {item.locations.map((location) => (
                    <li
                      className={ATLAS_STYLES.regionDataRow}
                      key={`${item.key}:${location}`}
                    >
                      <span className={ATLAS_STYLES.regionDataName}>
                        {location}
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
