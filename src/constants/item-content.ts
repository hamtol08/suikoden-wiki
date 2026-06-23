import {
  CHARACTER_DETAIL_RECORDS,
  type CharacterDetailRecord,
} from "@/constants/character-detail-records";
import {
  buildItemDetailPath,
  buildItemGamePath,
} from "@/constants/app-config";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_TABS,
  REGION_KOREAN_NAMES,
} from "@/constants/archive-content";
import {
  REGION_DETAIL_RECORDS,
  REGION_DROP_CHANCE_LABELS,
  REGION_SHOP_NAME_LABELS,
  type RegionDetailRecord,
  translateMonsterName,
} from "@/constants/region-detail-content";
import { resolveRuneReference } from "@/constants/rune-content";

export const ITEM_ARCHIVE_COPY = {
  eyebrow: "Items",
  title: "Items",
  body: "아이템과 장비명을 작품별로 정리합니다. 입수처는 상점과 드롭 기록이 확인되는 경우에만 표시합니다.",
  unavailableDetail: "-",
  entryCountSuffix: "개",
  tabsAriaLabel: "Item series",
  summaryTitle: "Item Summary",
  tableTitle: "Item Index",
  labels: {
    category: "분류",
    source: "기록",
    lowestPrice: "최저가",
    locations: "입수처",
    dropRate: "획득 확률",
    originalName: "영문 표기",
    shop: "Shop",
    drop: "Drop",
  },
} as const;

export const ITEM_CATEGORY_LABELS = {
  helmet: "투구",
  armor: "방어구",
  shield: "방패",
  accessory: "장신구",
  consumable: "소비 아이템",
  sealedOrb: "봉인구",
  keyItem: "이벤트 아이템",
} as const;

export type ItemCategoryId = keyof typeof ITEM_CATEGORY_LABELS;

export type ItemReference = {
  id: string;
  name: string;
  originalName: string;
  category: ItemCategoryId;
  games: readonly string[];
  href: string;
};

export const ITEM_INDEX_PAGE_IDS = {
  suikodenI: "suikoden-i",
  suikodenII: "suikoden-ii",
} as const;

export type ItemIndexGameId =
  (typeof ITEM_INDEX_PAGE_IDS)[keyof typeof ITEM_INDEX_PAGE_IDS];

export const ITEM_INDEX_PAGES = [
  {
    id: ITEM_INDEX_PAGE_IDS.suikodenI,
    href: buildItemGamePath(ITEM_INDEX_PAGE_IDS.suikodenI),
    title: "Suikoden I",
    eyebrow: "Gate Rune War",
  },
  {
    id: ITEM_INDEX_PAGE_IDS.suikodenII,
    href: buildItemGamePath(ITEM_INDEX_PAGE_IDS.suikodenII),
    title: "Suikoden II",
    eyebrow: "Dunan Unification War",
  },
] as const satisfies readonly {
  id: ItemIndexGameId;
  href: string;
  title: string;
  eyebrow: string;
}[];

export const ITEM_SOURCE_TYPE_LABELS = {
  shop: "상점",
  drop: "드롭",
} as const;

export type ItemSourceType = keyof typeof ITEM_SOURCE_TYPE_LABELS;

export type ItemIndexRecord = {
  id: string;
  name: string;
  originalNames: readonly string[];
  category: ItemCategoryId;
  game: ItemIndexGameId;
  href: string;
  sourceTypes: readonly ItemSourceType[];
  lowestPrice: number | null;
  locations: readonly string[];
  dropRates: readonly string[];
};

type ItemRecordDraft = {
  id: string;
  name: string;
  originalNames: Set<string>;
  category: ItemCategoryId;
  game: ItemIndexGameId;
  sourceTypes: Set<ItemSourceType>;
  lowestPrice: number | null;
  locations: Set<string>;
  dropRates: Set<string>;
};

const buildItemReference = (
  item: Omit<ItemReference, "href">,
): ItemReference => {
  return {
    ...item,
    href: buildItemDetailPath(item.id),
  };
};

const ITEM_VALUE_SUFFIX_PATTERN = /(\s\(x\d+\)|\*)/g;

const ITEM_NORMALIZATION_SUFFIX_PATTERN = /(\s\(x\d+\)|\*|\s\/Imported Data)/g;

const ITEM_REFERENCE_GAMES = ["suikoden-i", "suikoden-ii"] as const;

const ITEM_EMPTY_VALUES = new Set(["", "-", "[none]", "None", "None.", "N/A"]);

const ITEM_SOURCE_TYPE_ORDER = ["shop", "drop"] as const;

const ITEM_RUNE_NAME_PATTERN = /\bRune$/i;

const ITEM_CONSUMABLE_NAMES = new Set([
  "Anchovy Pizza",
  "Angry Blow",
  "Antitoxin",
  "BBQ Meat Bun",
  "Bolt of Wrath",
  "Broiled Eel",
  "Canopy Defense",
  "Cheesecake",
  "Chirashi-Zushi",
  "Clay Guardian",
  "Crab Cakes",
  "Croquettes",
  "Dancing Flames Scroll",
  "Escape Talisman",
  "Fire Wall",
  "Fried Fish Balls",
  "Green Salad",
  "Grilled Beef",
  "Grilled Fish",
  "Healing Wind",
  "Healing Wind Scroll",
  "Ice Cream",
  "Kindness Drops",
  "Mayo Rice Omelet",
  "Meat Pie",
  "Medicine",
  "Mega Medicine",
  "Needle",
  "Obento",
  "Potato Pudding",
  "Pudding",
  "Sacrificial Buddha",
  "Sacrificial Jizo",
  "Spicy Pilaf",
  "Steamed Abalone",
  "Steamed Gyoza",
  "Sunomono",
  "Tempura",
  "The Shredding",
  "Thunder Runner",
  "Tomato Juice",
  "Veggie Sandwich",
  "Wind of Sleep Scroll",
]);

const ITEM_NAME_TRANSLATIONS = {
  "Anchovy Pizza": "멸치 피자",
  "Angry Blow": "분노의 일격",
  Antitoxin: "해독제",
  Bandana: "반다나",
  "BBQ Meat Bun": "바비큐 고기만두",
  "Belt of Strength": "힘의 벨트",
  "Beauties of Nature": "자연의 미",
  "Blue Flower Seeds": "파란 꽃의 씨앗",
  "Blue Paint": "파란 물감",
  "Blue Ribbon": "블루 리본",
  "Bolt of Wrath": "분노의 번개",
  "Bonsai Tree": "분재",
  Boots: "부츠",
  "Brass Armor": "브라스 아머",
  "Broiled Eel": "장어구이",
  "Canopy Defense": "캐노피 디펜스",
  Cape: "망토",
  "Cape of Darkness": "어둠의 망토",
  "Celadon Urn": "청자 항아리",
  "Chain Mail": "체인메일",
  "Chaos Shield": "혼돈의 방패",
  Cheesecake: "치즈케이크",
  "Chest Plate": "체스트 플레이트",
  "Chirashi-Zushi": "지라시스시",
  Circlet: "서클릿",
  "Clay Guardian": "클레이 가디언",
  Collar: "목줄",
  "Crab Cakes": "게살 케이크",
  "Crimson Cape": "진홍 망토",
  Croquettes: "크로켓",
  "Dancing Flames Scroll": "춤추는 불꽃의 두루마리",
  "Defective Urn": "흠집 난 항아리",
  "Dragon Armor": "용 갑옷",
  "Dream Robe": "꿈의 로브",
  "Earth Boots": "대지의 부츠",
  "Earth Rune Piece": "대지의 문장 조각",
  "Earth Shield": "대지의 방패",
  Emblem: "엠블럼",
  "Escape Talisman": "탈출 부적",
  Feather: "깃털",
  "Feathered Hat": "깃털 달린 모자",
  "Fire Emblem": "불의 엠블럼",
  "Fire Wall": "불의 벽",
  "Fish Badge": "물고기 배지",
  "Fried Fish Balls": "생선 완자튀김",
  "Flower Painting": "꽃 그림",
  "Flower Vase": "꽃병",
  "Full Armor": "풀 아머",
  "Full Helmet": "풀헬름",
  "Fur Cape": "모피 망토",
  "Fur Robe": "모피 로브",
  Gauntlet: "건틀릿",
  Gloves: "장갑",
  "Gold Collar": "금 목줄",
  "Gold Emblem": "금 엠블럼",
  "Gold Necklace": "금목걸이",
  "Goddess Statue": "여신상",
  Graffiti: "낙서",
  "Green Salad": "그린 샐러드",
  Greaves: "그리브",
  "Grilled Beef": "소고기구이",
  "Grilled Fish": "생선구이",
  "Guard Ring": "가드 링",
  "Guard Robe": "가드 로브",
  "Half Armor": "하프 아머",
  "Half Helmet": "하프헬름",
  "Half Plate": "하프 플레이트",
  "Head Gear": "두건",
  Headgear: "두건",
  Headband: "이마 보호대",
  "Healing Wind": "치유의 바람",
  "Healing Wind Scroll": "치유의 바람 두루마리",
  "Horned Helmet": "혼헬름",
  "Hex Doll": "저주 인형",
  "Ice Cream": "아이스크림",
  "Iron Boots": "철 부츠",
  "Iron Shield": "철 방패",
  "Japanese Dish": "일본 접시",
  "Karate Uniform": "도복",
  "Kindness Drops": "친절의 물방울",
  "Kite Shield": "카이트 실드",
  "Knight Armor": "기사 갑옷",
  "Leather Armor": "가죽 갑옷",
  "Leather Cape": "가죽 망토",
  "Leather Coat": "가죽 코트",
  "Leather Hat": "가죽 모자",
  Leggings: "레깅스",
  "Lovers' Garden": "연인의 정원",
  "Lucky Ring": "행운의 반지",
  "Magic Ring": "마법의 반지",
  "Magic Robe": "마법의 로브",
  "Main-Gauche": "망고슈",
  Mangosh: "망고슈",
  "Master Garb": "마스터 가브",
  "Master's Garb": "마스터 가브",
  "Master Robe": "마스터 로브",
  "Master's Robe": "마스터 로브",
  "Mayo Rice Omelet": "마요 오므라이스",
  "Martial Arts Robe": "무도가의 도복",
  "Meat Pie": "미트 파이",
  Medicine: "약",
  "Mega Medicine": "특효약",
  "Nameless Urn": "이름 없는 항아리",
  Needle: "바늘",
  "Ninja Suit": "닌자복",
  "Ninja Garb": "닌자복",
  Obento: "도시락",
  "Octopus Pot": "문어 항아리",
  "Peeing Boy": "오줌싸개 동상",
  "Pointy Hat": "뾰족 모자",
  "Pointed Hat": "뾰족 모자",
  "Potato Pudding": "감자 푸딩",
  "Power Gloves": "파워 글러브",
  "Power Ring": "파워 링",
  Pudding: "푸딩",
  "Red Flower Seeds": "빨간 꽃의 씨앗",
  Robe: "로브",
  "Robe of Mist": "안개의 로브",
  "Rose Brooch": "장미 브로치",
  "Sacrificial Buddha": "대역지장보살",
  "Sacrificial Jizo": "대역지장보살",
  "Scale Mail": "스케일 메일",
  "Shoulder Pads": "어깨 보호대",
  "Silver Armor": "은 갑옷",
  "Silver Hat": "은모자",
  Silverlet: "실버릿",
  "Skill Ring": "스킬 링",
  "Speed Ring": "스피드 링",
  "Sound Set 3": "음 세트 3",
  "Spicy Pilaf": "매운 필라프",
  "Star Earrings": "별 귀걸이",
  "Steamed Abalone": "전복찜",
  "Steamed Gyoza": "찐교자",
  "Steel Shield": "강철 방패",
  "Sun Badge": "선 배지",
  Sunomono: "초무침",
  "Taikyoku Wear": "태극복",
  Tempura: "튀김",
  "The Shredding": "더 슈레딩",
  "Thunder Amulet": "번개의 부적",
  "Thunder God's Garb": "뇌신의 옷",
  "Thunder Runner": "썬더 러너",
  "Toe Shoes": "토슈즈",
  "Tomato Juice": "토마토 주스",
  Tunic: "튜닉",
  "Veggie Sandwich": "채소 샌드위치",
  "Water Amulet": "물의 부적",
  "Wind Amulet": "바람의 부적",
  "Wind Hat": "바람 모자",
  "Wind of Sleep Scroll": "잠의 바람 두루마리",
  "Windspun Armor": "바람의 갑옷",
  "Wing Boots": "윙 부츠",
  "Winged Boots": "윙 부츠",
  "Wooden Shield": "나무 방패",
  "Wooden Shoes": "나막신",
  "Yellow Flower Seeds": "노란 꽃의 씨앗",
  "Yellow Paint": "노란 물감",
} as const;

const ITEM_NAME_ALIASES = {
  "가죽 아머": "Leather Armor",
  "바람갑옷": "Windspun Armor",
  "어둠의 망또": "Cape of Darkness",
  "용갑옷": "Dragon Armor",
  "진홍 망또": "Crimson Cape",
  "털가죽 로브": "Fur Robe",
  "털가죽 망또": "Fur Cape",
  "탈출부적": "Escape Talisman",
  "빠져나가기 부적": "Escape Talisman",
  "빠져나가기부적": "Escape Talisman",
  "희생의 지장": "Sacrificial Jizo",
  "희생의 불상": "Sacrificial Buddha",
  "희생의 부처": "Sacrificial Buddha",
} as const;

const buildItemId = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};

const normalizeItemName = (name: string) => {
  return name.replace(ITEM_NORMALIZATION_SUFFIX_PATTERN, "").trim();
};

const buildItemValueSuffix = (name: string) => {
  return [...name.matchAll(ITEM_VALUE_SUFFIX_PATTERN)]
    .map(([suffix]) => suffix.trim())
    .join("");
};

const inferItemCategory = (name: string): ItemCategoryId => {
  if (ITEM_RUNE_NAME_PATTERN.test(name)) {
    return "sealedOrb";
  }

  if (ITEM_CONSUMABLE_NAMES.has(name)) {
    return "consumable";
  }

  if (/shield/i.test(name)) {
    return "shield";
  }

  if (/bandana|circlet|hat|head|helmet/i.test(name)) {
    return "helmet";
  }

  if (/armor|coat|garb|mail|robe|suit|tunic|uniform|wear/i.test(name)) {
    return "armor";
  }

  if (
    /blow|bun|cakes?|cream|croquettes|drops|eel|fish|gyoza|juice|medicine|meat|obento|omelet|pilaf|pizza|pudding|salad|sandwich|scroll|sunomono|tempura|wall|wind/i
      .test(name)
  ) {
    return "consumable";
  }

  return "accessory";
};

const buildSealedOrbItemName = (name: string) => {
  const rune = resolveRuneReference(name);

  if (!rune) {
    return null;
  }

  if (rune.name.endsWith("의 문장")) {
    return rune.name.replace(/의 문장$/, "의 봉인구");
  }

  return rune.name.replace(/문장$/, "봉인구");
};

export const ITEM_REFERENCES = [
  ...Object.entries(ITEM_NAME_TRANSLATIONS).map(([originalName, name]) =>
    buildItemReference({
      id: buildItemId(originalName),
      name,
      originalName,
      category: inferItemCategory(originalName),
      games: ITEM_REFERENCE_GAMES,
    }),
  ),
];

const buildItemReferenceByName = () => {
  const entries: [string, ItemReference][] = ITEM_REFERENCES.flatMap((item) => [
    [item.name.toLowerCase(), item],
    [item.originalName.toLowerCase(), item],
  ]);

  Object.entries(ITEM_NAME_ALIASES).forEach(([alias, originalName]) => {
    const item = ITEM_REFERENCES.find(
      (reference) => reference.originalName === originalName,
    );

    if (item) {
      entries.push([alias.toLowerCase(), item]);
    }
  });

  return new Map<string, ItemReference>(entries);
};

const ITEM_REFERENCE_BY_NAME = buildItemReferenceByName();

export const resolveItemReference = (name: string) => {
  return ITEM_REFERENCE_BY_NAME.get(normalizeItemName(name).toLowerCase());
};

export const translateItemName = (name: string) => {
  const item = resolveItemReference(name);

  if (!item) {
    return name;
  }

  return `${item.name}${buildItemValueSuffix(name)}`;
};

const buildRegionLabel = (gameId: string, regionId: string) => {
  const region = REGION_ATLAS_LOCATIONS.find(
    (entry) => entry.game === gameId && entry.id === regionId,
  );
  const koreanName =
    REGION_KOREAN_NAMES[regionId as keyof typeof REGION_KOREAN_NAMES];

  return koreanName ?? region?.name ?? regionId;
};

const isItemIndexGameId = (value: string): value is ItemIndexGameId => {
  return ITEM_INDEX_PAGES.some((page) => page.id === value);
};

const formatItemPrice = (price: number | null) => {
  if (price === null) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return `${price.toLocaleString("ko-KR")} potch`;
};

const sortItemRecords = (items: readonly ItemIndexRecord[]) => {
  return [...items].sort((left, right) =>
    left.name.localeCompare(right.name, "ko-KR"),
  );
};

const createItemRecordDraft = (
  game: ItemIndexGameId,
  rawName: string,
): {
  category: ItemCategoryId;
  draft: {
    id: string;
    name: string;
    originalNames: Set<string>;
    sourceTypes: Set<ItemSourceType>;
    lowestPrice: number | null;
    locations: Set<string>;
    dropRates: Set<string>;
  };
} | null => {
  const originalName = normalizeItemName(rawName);

  if (ITEM_EMPTY_VALUES.has(originalName)) {
    return null;
  }

  const itemReference = resolveItemReference(originalName);
  const id = itemReference?.id ?? buildItemId(originalName);
  const name =
    itemReference?.name ?? buildSealedOrbItemName(originalName) ?? originalName;
  const category = itemReference?.category ?? inferItemCategory(originalName);

  return {
    category,
    draft: {
      id,
      name,
      originalNames: new Set([itemReference?.originalName ?? originalName]),
      sourceTypes: new Set<ItemSourceType>(),
      lowestPrice: null,
      locations: new Set<string>(),
      dropRates: new Set<string>(),
    },
  };
};

const getOrCreateItemRecordDraft = (
  records: Map<string, ItemRecordDraft>,
  game: ItemIndexGameId,
  rawName: string,
) => {
  const created = createItemRecordDraft(game, rawName);

  if (!created) {
    return null;
  }

  const key = `${game}:${created.draft.id}`;
  const existing = records.get(key);

  if (existing) {
    created.draft.originalNames.forEach((name) => existing.originalNames.add(name));
    return existing;
  }

  const record = {
    ...created.draft,
    category: created.category,
    game,
  };

  records.set(key, record);

  return record;
};

const addCharacterEquipmentItemRecords = (
  records: Map<string, ItemRecordDraft>,
) => {
  const characterRecords = CHARACTER_DETAIL_RECORDS as Record<
    string,
    Record<string, CharacterDetailRecord>
  >;

  Object.entries(characterRecords).forEach(([gameId, recordsByCharacter]) => {
    if (!isItemIndexGameId(gameId)) {
      return;
    }

    Object.values(recordsByCharacter).forEach((record) => {
      const equipmentValues = [
        ...Object.values(record.role.equipment.default),
        ...Object.values(record.role.equipment.recommended),
      ];

      equipmentValues.forEach((equipmentName) => {
        getOrCreateItemRecordDraft(records, gameId, equipmentName);
      });
    });
  });
};

const buildItemIndexRecords = () => {
  const records = new Map<string, ItemRecordDraft>();
  const regionRecords = REGION_DETAIL_RECORDS as Record<
    string,
    RegionDetailRecord
  >;

  Object.entries(regionRecords).forEach(([key, regionRecord]) => {
    const [gameId, regionId] = key.split(":");

    if (!isItemIndexGameId(gameId)) {
      return;
    }

    const regionLabel = buildRegionLabel(gameId, regionId);

    regionRecord.shops?.forEach((shop) => {
      const shopLabel =
        REGION_SHOP_NAME_LABELS[
          shop.name as keyof typeof REGION_SHOP_NAME_LABELS
        ] ?? shop.name;

      shop.items.forEach((shopItem) => {
        const item = getOrCreateItemRecordDraft(records, gameId, shopItem.name);

        if (!item) {
          return;
        }

        item.sourceTypes.add("shop");
        item.locations.add(`${regionLabel} · ${shopLabel}`);
        item.lowestPrice =
          item.lowestPrice === null ?
            shopItem.price :
            Math.min(item.lowestPrice, shopItem.price);
      });
    });

    regionRecord.enemies?.forEach((enemy) => {
      const enemyName = translateMonsterName(enemy.name);
      const enemyLabel = enemy.phase ?
        `${regionLabel} · ${enemyName} (${enemy.phase})` :
        `${regionLabel} · ${enemyName}`;

      enemy.drops.forEach((drop) => {
        const item = getOrCreateItemRecordDraft(records, gameId, drop.item);

        if (!item) {
          return;
        }

        const chanceLabel =
          REGION_DROP_CHANCE_LABELS[
            drop.chance as keyof typeof REGION_DROP_CHANCE_LABELS
          ];

        item.sourceTypes.add("drop");
        item.locations.add(enemyLabel);
        item.dropRates.add(`${enemyLabel} · ${chanceLabel}`);
      });
    });
  });

  addCharacterEquipmentItemRecords(records);

  return sortItemRecords(
    [...records.values()].map((record) => ({
      id: record.id,
      name: record.name,
      originalNames: [...record.originalNames].sort(),
      category: record.category,
      game: record.game,
      href: buildItemDetailPath(record.id),
      sourceTypes: ITEM_SOURCE_TYPE_ORDER.filter((sourceType) =>
        record.sourceTypes.has(sourceType),
      ),
      lowestPrice: record.lowestPrice,
      locations: [...record.locations].sort((left, right) =>
        left.localeCompare(right, "ko-KR"),
      ),
      dropRates: [...record.dropRates].sort((left, right) =>
        left.localeCompare(right, "ko-KR"),
      ),
    })),
  );
};

export const ITEM_INDEX_RECORDS = buildItemIndexRecords();

export const getItemIndexPage = (gameId: ItemIndexGameId) => {
  return ITEM_INDEX_PAGES.find((page) => page.id === gameId) ?? ITEM_INDEX_PAGES[0];
};

export const getItemIndexRecordsByGame = (gameId: ItemIndexGameId) => {
  return ITEM_INDEX_RECORDS.filter((item) => item.game === gameId);
};

export const formatItemSources = (item: ItemIndexRecord) => {
  if (item.sourceTypes.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return item.sourceTypes
    .map((sourceType) => ITEM_SOURCE_TYPE_LABELS[sourceType])
    .join(" / ");
};

export const formatItemLowestPrice = (item: ItemIndexRecord) => {
  return formatItemPrice(item.lowestPrice);
};

export const formatItemLocations = (item: ItemIndexRecord) => {
  if (item.locations.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return item.locations.join(" / ");
};

export const formatItemDropRates = (item: ItemIndexRecord) => {
  if (item.dropRates.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return item.dropRates.join(" / ");
};

export const getItemIndexSummary = (gameId: ItemIndexGameId) => {
  const items = getItemIndexRecordsByGame(gameId);
  const tab = REGION_ATLAS_TABS.find((entry) => entry.id === gameId);

  return {
    eyebrow: tab?.eyebrow ?? ITEM_ARCHIVE_COPY.eyebrow,
    title: getItemIndexPage(gameId).title,
    itemCount: items.length,
    shopCount: items.filter((item) => item.sourceTypes.includes("shop")).length,
    dropCount: items.filter((item) => item.sourceTypes.includes("drop")).length,
  };
};
