/**
 * 아이템 색인, 상세 표시, 봉인구 효과, 초기 소유자 계산 데이터를 정의합니다.
 */

import {
  CHARACTER_DETAIL_RECORDS,
  type CharacterDetailRecord,
} from "@/constants/characters/character-detail-records";
import { SUIKODEN_I_CHARACTER_LOCALIZATION } from "@/constants/characters/suikoden-i-character-localization";
import { SUIKODEN_II_CHARACTER_LOCALIZATION } from "@/constants/characters/suikoden-ii-character-localization";
import {
  buildCharacterDetailPath,
  buildGameplayDetailPath,
  buildItemDetailPath,
  buildItemGamePath,
} from "@/constants/app/app-config";
import {
  ARCHIVE_LOCALE,
  formatArchiveCount,
  formatArchiveNumber,
} from "@/constants/app/archive-utils";
import { GAMEPLAY_DETAIL_IDS } from "@/constants/gameplay/gameplay-content";
import {
  REGION_ATLAS_LOCATIONS,
  REGION_ATLAS_TABS,
  REGION_KOREAN_NAMES,
} from "@/constants/archive/archive-content";
import {
  REGION_DETAIL_RECORDS,
  REGION_DROP_CHANCE_LABELS,
  REGION_SHOP_NAME_LABELS,
  type RegionDetailRecord,
  translateMonsterName,
} from "@/constants/regions/region-detail-content";
import {
  getRuneFunctionRecords,
  RUNE_REFERENCES,
  resolveRuneReference,
  type RuneSpellRecord,
} from "@/constants/runes/rune-content";
import { GAME8_ITEM_SOURCE_RECORDS } from "@/constants/items/game8-item-source-records";
import {
  GAME8_SUIKODEN_I_MONSTER_SOURCE_RECORDS,
  GAME8_SUIKODEN_II_MONSTER_SOURCE_RECORDS,
  type Game8MonsterSourceRecord,
} from "@/constants/monsters/game8-monster-source-records";

export const ITEM_ARCHIVE_COPY = {
  eyebrow: "Items",
  title: "Items",
  body: "아이템과 장비명을 작품별로 정리합니다. 입수처는 상점과 드롭 기록이 확인되는 경우에만 표시합니다.",
  unavailableDetail: "-",
  entryCountSuffix: "개",
  tabsAriaLabel: "Item series",
  summaryTitle: "Item Summary",
  tableTitle: "Item Index",
  detailTitle: "Item Profile",
  detailBody: "작품별 입수 기록과 기본 효과를 함께 정리합니다.",
  descriptionTitle: "개요",
  effectTitle: "효과",
  gameRecordsTitle: "작품별 기록",
  relatedRecordsTitle: "관련 기록",
  searchLabel: "Item search",
  searchPlaceholder: "아이템 이름, 영문 표기, 분류, 입수처 검색",
  resultCountSuffix: "개 아이템",
  resultCount: (count: number) => `${formatArchiveNumber(count)}개 아이템`,
  noResults: "검색 조건에 맞는 아이템이 없습니다.",
  clearSearchLabel: "검색어 지우기",
  labels: {
    category: "분류",
    source: "기록",
    price: "가격",
    locations: "입수처",
    shopLocations: "상점",
    dropLocations: "드롭",
    otherLocations: "기타 입수처",
    dropRate: "획득 확률",
    initialEquipment: "초기 장비",
    initialOwners: "초기 소유자",
    englishName: "EN",
    japaneseName: "JP",
    originalName: "영문 표기",
    games: "등장 작품",
    shop: "Shop",
    drop: "Drop",
  },
} as const;

export const ITEM_BROWSER_COPY = {
  clearSearchLabel: ITEM_ARCHIVE_COPY.clearSearchLabel,
  entryCountSuffix: ITEM_ARCHIVE_COPY.entryCountSuffix,
  labels: {
    drop: ITEM_ARCHIVE_COPY.labels.drop,
    dropLocations: ITEM_ARCHIVE_COPY.labels.dropLocations,
    dropRate: ITEM_ARCHIVE_COPY.labels.dropRate,
    initialEquipment: ITEM_ARCHIVE_COPY.labels.initialEquipment,
    otherLocations: ITEM_ARCHIVE_COPY.labels.otherLocations,
    price: ITEM_ARCHIVE_COPY.labels.price,
    shop: ITEM_ARCHIVE_COPY.labels.shop,
    shopLocations: ITEM_ARCHIVE_COPY.labels.shopLocations,
  },
  noResults: ITEM_ARCHIVE_COPY.noResults,
  resultCountSuffix: ITEM_ARCHIVE_COPY.resultCountSuffix,
  searchLabel: ITEM_ARCHIVE_COPY.searchLabel,
  searchPlaceholder: ITEM_ARCHIVE_COPY.searchPlaceholder,
} as const;

export const buildItemSummaryItems = (
  summary: ReturnType<typeof getItemIndexSummary>,
) => [
  {
    label: ITEM_ARCHIVE_COPY.summaryTitle,
    value: formatArchiveCount(
      summary.itemCount,
      ITEM_ARCHIVE_COPY.entryCountSuffix,
    ),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.shop,
    value: formatArchiveNumber(summary.shopCount),
  },
  {
    label: ITEM_ARCHIVE_COPY.labels.drop,
    value: formatArchiveNumber(summary.dropCount),
  },
];

export const ITEM_CATEGORY_LABELS = {
  helmet: "투구",
  armor: "방어구",
  shield: "방패",
  accessory: "장신구",
  consumable: "소비 아이템",
  sealedOrb: "봉인구",
  keyItem: "이벤트 아이템",
  antique: "감정품",
  animal: "동물",
  blacksmithHammer: "망치",
  book: "책",
  guardianPlan: "수호신상 설계도",
  ingredient: "식재료",
  paint: "물감",
  recipe: "레시피",
  runePiece: "문장 조각",
  soundSet: "소리세트",
  specialItem: "특수 아이템",
  tradeItem: "교역품",
  windowSet: "창 세트",
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

const ITEM_REFERENCE_GAMES = [
  ITEM_INDEX_PAGE_IDS.suikodenI,
  ITEM_INDEX_PAGE_IDS.suikodenII,
] as const;

const ITEM_GAME_DESCRIPTION_LABELS = {
  [ITEM_INDEX_PAGE_IDS.suikodenI]: "환상수호전 I",
  [ITEM_INDEX_PAGE_IDS.suikodenII]: "환상수호전 II",
} as const satisfies Record<ItemIndexGameId, string>;

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
  found: "발견",
  treasure: "보물상자",
  trade: "교역소",
  other: "기타",
  minigame: "미니게임",
  gds: "수호신상",
} as const;

export type ItemSourceType = keyof typeof ITEM_SOURCE_TYPE_LABELS;

export type ItemInitialOwner = {
  game: ItemIndexGameId;
  href: string;
  id: string;
  name: string;
};

export type ItemIndexRecord = {
  id: string;
  name: string;
  originalNames: readonly string[];
  category: ItemCategoryId;
  game: ItemIndexGameId;
  href: string;
  sourceTypes: readonly ItemSourceType[];
  prices: readonly number[];
  locations: readonly string[];
  sourceLocations: Record<ItemSourceType, readonly string[]>;
  dropRates: readonly string[];
  initialOwners: readonly ItemInitialOwner[];
};

export type ItemDetailRecord = {
  id: string;
  name: string;
  category: ItemCategoryId;
  games: readonly ItemIndexGameId[];
  originalNames: readonly string[];
  japaneseNames: readonly string[];
  relatedLinks: readonly ItemRelatedLink[];
  descriptionLines: readonly string[];
  effectLines: readonly string[];
  gameRecords: readonly ItemIndexRecord[];
};

export type ItemRelatedLink = {
  body: string;
  href: string;
  title: string;
};

export type ItemRecordDisplay = {
  dropLocations: string;
  dropRates: string;
  otherLocations: string;
  price: string;
  shopLocations: string;
  sourceLabel: string;
};

type ItemRecordDraft = {
  id: string;
  name: string;
  originalNames: Set<string>;
  category: ItemCategoryId;
  game: ItemIndexGameId;
  sourceTypes: Set<ItemSourceType>;
  prices: Set<number>;
  locations: Set<string>;
  sourceLocations: Record<ItemSourceType, Set<string>>;
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

const ITEM_NORMALIZATION_SUFFIX_PATTERN = /(\s\(x\d+\)|\s\/\*?Imported Data\*?|\*)/g;

const ITEM_EMPTY_VALUES = new Set(["", "-", "[none]", "None", "None.", "N/A"]);

const ITEM_INITIAL_OWNER_EMPTY_VALUES = new Set([
  ...ITEM_EMPTY_VALUES,
  "equipment",
]);

const ITEM_SOURCE_TYPE_ORDER = [
  "shop",
  "found",
  "treasure",
  "drop",
  "trade",
  "minigame",
  "gds",
  "other",
] as const;

const GAME8_ITEM_CATEGORY_MAP = {
  Accessory: "accessory",
  Animals: "animal",
  Antique: "antique",
  Antiques: "antique",
  Armor: "armor",
  Blacksmith: "blacksmithHammer",
  "Blacksmith Hammers": "blacksmithHammer",
  Body: "armor",
  Book: "book",
  Consumable: "consumable",
  "Event Items": "keyItem",
  Helmet: "helmet",
  Ingredients: "ingredient",
  Key: "keyItem",
  "Key Item": "keyItem",
  "Old Books": "book",
  Others: "accessory",
  Paint: "paint",
  Paints: "paint",
  Recipes: "recipe",
  Restorative: "consumable",
  Rune: "sealedOrb",
  "Rune Piece": "runePiece",
  Scrolls: "consumable",
  Seasonings: "ingredient",
  Seeds: "ingredient",
  Shield: "shield",
  Sound: "soundSet",
  "Sound Sets": "soundSet",
  Special: "specialItem",
  "Special Equipment": "accessory",
  "Special Items": "specialItem",
  Stones: "consumable",
  "Trade Items": "tradeItem",
  "Window Sets": "windowSet",
} as const satisfies Record<string, ItemCategoryId>;

const GAME8_SOURCE_TYPE_MAP = {
  Drop: "drop",
  Found: "found",
  GDS: "gds",
  Minigame: "minigame",
  Other: "other",
  Shop: "shop",
  "Trading Post": "trade",
  "Treasure Chest": "treasure",
} as const satisfies Record<string, ItemSourceType>;

const GAME8_MONSTER_DROP_RATE_LABELS = {
  High: "높음",
  Low: "낮음",
  Medium: "보통",
  "Once Only": "1회 한정",
  Rare: "희귀",
} as const;

type Game8MonsterDropRate = keyof typeof GAME8_MONSTER_DROP_RATE_LABELS;

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
  "Earth Rune Piece": "흙의 문장 조각",
  "Earth Shield": "대지의 방패",
  Emblem: "엠블럼",
  "Escape Talisman": "탈출 부적",
  Feather: "깃털",
  "Feathered Hat": "깃털 달린 모자",
  "Fire Emblem": "불의 엠블럼",
  "Fire Wall": "불의 벽",
  "Fish Badge": "물고기 배지",
  "Flower Painting": "꽃 그림",
  "Flower Vase": "꽃병",
  "French Toast": "프렌치토스트",
  "Fried Fish Balls": "생선 완자튀김",
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
  "Sound Set 3": "소리세트 3",
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
  "Toe Shoes": "토우슈즈",
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
  "Angry Blow Scroll": "Angry Blow",
  "Bolt of Wrath Scroll": "Bolt of Wrath",
  "Canopy Defense Scroll": "Canopy Defense",
  "Clay Guardian Scroll": "Clay Guardian",
  "Dancing Flames Scroll": "Dancing Flames Scroll",
  "Fire Wall Scroll": "Fire Wall",
  "Healing Wind Scroll": "Healing Wind Scroll",
  "Shredding Wind Scroll": "The Shredding",
  "Thunder Runner Scroll": "Thunder Runner",
  "Wind of Sleep": "Wind of Sleep Scroll",
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

const ITEM_JAPANESE_NAME_TRANSLATIONS = {
  "Anchovy Pizza": "アンチョビピザ",
  "Angry Blow": "怒りの一撃",
  Antitoxin: "毒消し",
  Bandana: "バンダナ",
  "BBQ Meat Bun": "バーベキューまん",
  "Belt of Strength": "力のベルト",
  "Beauties of Nature": "自然の美",
  "Blue Flower Seeds": "青い花の種",
  "Blue Paint": "青い絵の具",
  "Blue Dragon Urn": "青竜のつぼ",
  "Blue Ribbon": "ブルーリボン",
  "Bolt of Wrath": "怒りの雷",
  "Bonsai Tree": "盆栽",
  Boots: "ブーツ",
  "Brass Armor": "真鍮の鎧",
  "Broiled Eel": "うなぎの蒲焼き",
  "Canopy Defense": "天蓋の守り",
  Cape: "マント",
  "Cape of Darkness": "闇のマント",
  "Celadon Urn": "青磁のつぼ",
  "Chain Mail": "チェインメイル",
  "Chaos Shield": "混沌の盾",
  Cheesecake: "チーズケーキ",
  "Chest Plate": "胸当て",
  "Chirashi-Zushi": "ちらし寿司",
  Circlet: "サークレット",
  "Clay Guardian": "土の守護神",
  Collar: "首輪",
  "Crab Cakes": "カニケーキ",
  "Crimson Cape": "真紅のマント",
  Croquettes: "コロッケ",
  "Dancing Flames Scroll": "踊る火炎の巻物",
  "Defective Urn": "ひび割れたつぼ",
  "Dragon Armor": "竜鎧",
  "Dream Robe": "夢のローブ",
  "Earth Boots": "土のブーツ",
  "Earth Rune Piece": "土の紋章片",
  "Earth Shield": "土の盾",
  Emblem: "エンブレム",
  "Escape Talisman": "脱出のお札",
  Feather: "羽",
  "Feathered Hat": "羽飾りの帽子",
  "Fire Emblem": "火のエンブレム",
  "Fire Rune Piece": "火の紋章片",
  "Fire Wall": "火の壁",
  "Fish Badge": "魚のバッジ",
  "Flower Painting": "花の絵",
  "Flower Vase": "花びん",
  "French Toast": "フレンチトースト",
  "Fried Fish Balls": "魚団子揚げ",
  "Full Armor": "フルアーマー",
  "Full Helmet": "フルヘルム",
  "Fur Cape": "毛皮のマント",
  "Fur Robe": "毛皮のローブ",
  Gauntlet: "ガントレット",
  Gloves: "グローブ",
  "Gold Collar": "金の首輪",
  "Gold Emblem": "金のエンブレム",
  "Gold Necklace": "金の首飾り",
  "Goddess Statue": "女神像",
  Graffiti: "落書き",
  "Green Salad": "グリーンサラダ",
  Greaves: "グリーブ",
  "Grilled Beef": "牛肉の網焼き",
  "Grilled Fish": "焼き魚",
  "Guard Ring": "ガードリング",
  "Guard Robe": "ガードローブ",
  "Half Armor": "ハーフアーマー",
  "Half Helmet": "ハーフヘルム",
  "Half Plate": "ハーフプレート",
  "Head Gear": "ヘッドギア",
  Headband: "鉢巻き",
  Headgear: "ヘッドギア",
  "Healing Wind": "癒しの風",
  "Healing Wind Scroll": "癒しの風の巻物",
  "Horned Helmet": "角の兜",
  "Hex Doll": "呪い人形",
  "Ice Cream": "アイスクリーム",
  "Iron Boots": "鉄のブーツ",
  "Iron Shield": "鉄の盾",
  "Japanese Dish": "和皿",
  "Karate Uniform": "空手着",
  "Kindness Drops": "やさしさの雫",
  "Kite Shield": "カイトシールド",
  "Knight Armor": "騎士の鎧",
  "Leather Armor": "革の鎧",
  "Leather Cape": "革のマント",
  "Leather Coat": "革のコート",
  "Leather Hat": "革の帽子",
  Leggings: "レギンス",
  "Lovers' Garden": "恋人たちの庭",
  "Lucky Ring": "幸運の指輪",
  "Magic Ring": "魔法の指輪",
  "Magic Robe": "魔法のローブ",
  "Main-Gauche": "マンゴーシュ",
  Mangosh: "マンゴーシュ",
  "Martial Arts Robe": "武道着",
  "Master Garb": "達人の服",
  "Master Robe": "達人のローブ",
  "Master's Garb": "達人の服",
  "Master's Robe": "達人のローブ",
  "Mayo Rice Omelet": "マヨオムライス",
  "Meat Pie": "ミートパイ",
  Medicine: "薬",
  "Mega Medicine": "特効薬",
  "Nameless Urn": "名もなきつぼ",
  Needle: "針",
  "Ninja Garb": "忍者服",
  "Ninja Suit": "忍者服",
  Obento: "お弁当",
  "Octopus Pot": "たこつぼ",
  "Peeing Boy": "小便小僧",
  "Pointed Hat": "とんがり帽子",
  "Pointy Hat": "とんがり帽子",
  "Potato Pudding": "ポテトプリン",
  "Power Gloves": "パワーグローブ",
  "Power Ring": "パワーリング",
  Pudding: "プリン",
  "Red Flower Seeds": "赤い花の種",
  Robe: "ローブ",
  "Robe of Mist": "霧のローブ",
  "Rose Brooch": "バラのブローチ",
  "Sacrificial Buddha": "身代わり地蔵",
  "Sacrificial Jizo": "身代わり地蔵",
  "Scale Mail": "スケイルメイル",
  "Shoulder Pads": "肩当て",
  "Silver Armor": "銀の鎧",
  "Silver Hat": "銀の帽子",
  Silverlet: "シルバーレット",
  "Skill Ring": "技の指輪",
  "Speed Ring": "速の指輪",
  "Sound Set 3": "音セット3",
  "Spicy Pilaf": "スパイシーピラフ",
  "Star Earrings": "星のイヤリング",
  "Steamed Abalone": "アワビの蒸し物",
  "Steamed Gyoza": "蒸し餃子",
  "Steel Shield": "鋼の盾",
  "Sun Badge": "太陽のバッジ",
  Sunomono: "酢の物",
  "Taikyoku Wear": "太極服",
  Tempura: "天ぷら",
  "The Shredding": "切り裂き",
  "Thunder Amulet": "雷のお守り",
  "Thunder God's Garb": "雷神の服",
  "Thunder Runner": "雷走り",
  "Toe Shoes": "トゥシューズ",
  "Tomato Juice": "トマトジュース",
  Tunic: "チュニック",
  "Veggie Sandwich": "野菜サンド",
  "Water Amulet": "水のお守り",
  "Wind Amulet": "風のお守り",
  "Wind Hat": "風の帽子",
  "Wind of Sleep Scroll": "眠りの風の巻物",
  "Windspun Armor": "風の鎧",
  "Wing Boots": "ウィングブーツ",
  "Winged Boots": "ウィングブーツ",
  "Wooden Shield": "木の盾",
  "Wooden Shoes": "木靴",
  "Yellow Flower Seeds": "黄色い花の種",
  "Yellow Paint": "黄色い絵の具",
} as const;

const ITEM_DETAIL_DESCRIPTIONS = {
  medicine: [
    "가장 기본적인 회복용 소비 아이템입니다.",
    "전투 중 또는 이동 중에 사용해 아군 한 명의 체력을 회복하는 초반 핵심 보급품으로 정리합니다.",
  ],
} as const satisfies Partial<Record<string, readonly string[]>>;

const ITEM_DETAIL_EFFECTS = {
  medicine: ["아군 한 명의 체력을 100 회복합니다."],
} as const satisfies Partial<Record<string, readonly string[]>>;

const ITEM_DIRECT_EFFECTS_BY_ORIGINAL_NAME = {
  Antitoxin: ["독 상태를 치료합니다."],
  "Blinking Mirror": ["사용하면 본거지로 즉시 귀환합니다."],
  "Dragon Incense": ["특정 이벤트와 수집 기록에 쓰이는 특수 아이템입니다."],
  "Escape Talisman": ["던전이나 위험 지역에서 빠져나와 입구 쪽으로 이동합니다."],
  "Mega Medicine": ["아군 한 명의 체력을 크게 회복합니다."],
  Medicine: ["아군 한 명의 체력을 100 회복합니다."],
  Needle: ["수집 기록과 시설 관련 항목으로 다루는 소형 아이템입니다."],
  "Sacrificial Buddha": ["소지자가 전투 불능이 될 때 대신 소비되어 전투 복귀를 돕습니다."],
  "Sacrificial Jizo": ["소지자가 전투 불능이 될 때 대신 소비되어 전투 복귀를 돕습니다."],
  "Throat Drop": ["침묵 상태를 치료하는 데 쓰입니다."],
  "World Map": ["이동 중 세계지도를 확인하는 데 쓰입니다."],
} as const satisfies Record<string, readonly string[]>;

const ITEM_DIRECT_EFFECTS_BY_ID = {
  binoculars: ["탐색과 수집 기록에 쓰이는 보조 아이템입니다."],
} as const satisfies Partial<Record<string, readonly string[]>>;

const ITEM_SCROLL_SPELL_NAMES = {
  "Angry Blow": "분노의 일격",
  "Bolt of Wrath": "격노의 벼락",
  "Canopy Defense": "천개의 방어",
  "Clay Guardian": "진흙 수호자",
  "Dancing Flames": "춤추는 불꽃",
  "Drops of Kindness": "상냥함의 물방울",
  "Fire Wall": "화염의 벽",
  "Flaming Arrows": "화염 화살",
  "Healing Wind": "치유의 바람",
  "Protection Mist": "수호의 안개",
  "Rain of Kindness": "상냥함의 비",
  "Revenge Earth": "복수의 대지",
  "The Shredding": "절단의 바람",
  "Thunder Runner": "천둥의 질주",
  "Wind of Sleep": "수면의 바람",
} as const satisfies Record<string, string>;

const ITEM_RUNE_PIECE_EFFECT_LABELS = {
  Defense: "방어",
  Earth: "대지",
  Fire: "불",
  Lightning: "번개",
  Luck: "행운",
  Magic: "마법",
  Power: "힘",
  Skill: "기술",
  Speed: "속도",
  Water: "물",
  Wind: "바람",
} as const satisfies Record<string, string>;

const ITEM_STONE_EFFECT_LABELS = {
  Defense: "방어",
  Luck: "행운",
  Magic: "마법",
  "Magic Defense": "마법 방어",
  Power: "힘",
  Skill: "기술",
  Speed: "속도",
} as const satisfies Record<string, string>;

const ITEM_FOOD_ORIGINAL_NAMES = new Set([
  "Cream Cutlets",
  "Cream Stew",
  "Diet Lunch",
  "Dried Fish",
  "Fried Chicken",
  "Gengis Khan",
  "Green Salad",
  "Grilled Beef",
  "Japanese Stew",
  "Millet Dumplings",
  "Sandwich",
  "Spinach Juice",
  "Sweet & Sour Fish",
]);

const buildRuneSpellSummary = (spells?: readonly RuneSpellRecord[]) => {
  return spells
    ?.map((spell) => `Lv.${spell.level} ${spell.name}`)
    .join(", ");
};

const uniqueItemEffectLines = (lines: readonly string[]) =>
  [...new Set(lines.filter(Boolean))];

const findRuneSpellEffectLines = (spellName: string) => {
  return uniqueItemEffectLines(
    RUNE_REFERENCES.flatMap((rune) =>
      getRuneFunctionRecords(rune).flatMap((record) =>
        record.spells
          ?.filter((spell) => spell.name === spellName)
          .map((spell) => `${record.game}: ${spell.name} - ${spell.effect}`) ??
        [],
      ),
    ),
  );
};

const normalizeScrollSourceName = (name: string) =>
  normalizeItemName(name).replace(/\s+Scroll$/, "").trim();

const buildScrollEffectLines = (originalNames: readonly string[]) => {
  const spellNames = uniqueItemEffectLines(
    originalNames
      .map(normalizeScrollSourceName)
      .map((name) =>
        ITEM_SCROLL_SPELL_NAMES[
          name as keyof typeof ITEM_SCROLL_SPELL_NAMES
        ],
      )
      .filter(Boolean),
  );

  return spellNames.flatMap((spellName) => {
    const spellEffectLines = findRuneSpellEffectLines(spellName);

    return spellEffectLines.length > 0 ?
        spellEffectLines :
        [`${spellName} 주문을 1회 사용합니다.`];
  });
};

const buildRunePieceEffectLines = (originalNames: readonly string[]) => {
  const effects = originalNames.flatMap((name) => {
    const match = normalizeItemName(name).match(
      /^(Defense|Earth|Fire|Lightning|Luck|Magic|Power|Skill|Speed|Water|Wind) Rune Piece$/,
    );

    if (!match) {
      return [];
    }

    const label =
      ITEM_RUNE_PIECE_EFFECT_LABELS[
        match[1] as keyof typeof ITEM_RUNE_PIECE_EFFECT_LABELS
      ];

    return ["Earth", "Fire", "Lightning", "Water", "Wind"].includes(match[1]) ?
        [`무기에 부착해 ${label} 계열 보정을 부여하는 문장 조각입니다.`] :
        [`사용하면 대상의 ${label} 능력치를 올리는 문장 조각입니다.`];
  });

  return uniqueItemEffectLines(effects);
};

const buildStoneEffectLines = (originalNames: readonly string[]) => {
  const effects = originalNames.flatMap((name) => {
    const match = normalizeItemName(name).match(
      /^Stone of (Defense|Luck|Magic|Magic Defense|Power|Skill|Speed)$/,
    );

    if (!match) {
      return [];
    }

    const label =
      ITEM_STONE_EFFECT_LABELS[
        match[1] as keyof typeof ITEM_STONE_EFFECT_LABELS
      ];

    return [`사용하면 대상의 ${label} 능력치를 영구적으로 올립니다.`];
  });

  return uniqueItemEffectLines(effects);
};

const buildPatternEffectLines = (originalNames: readonly string[]) => {
  const normalizedNames = originalNames.map(normalizeItemName);

  if (normalizedNames.some((name) => /^(Dragon|Rabbit|Turtle|Unicorn) Plans \d+$/.test(name))) {
    return ["본거지 수호신상 조합에 쓰이는 설계도입니다."];
  }

  if (normalizedNames.some((name) => /^Sound Set \d+$/.test(name))) {
    return ["본거지에서 소리 설정과 수집 기록에 쓰이는 세트 아이템입니다."];
  }

  if (normalizedNames.some((name) => /^Window Set \d+$/.test(name))) {
    return ["창 디자인을 바꾸는 데 쓰이는 세트 아이템입니다."];
  }

  if (normalizedNames.some((name) => ITEM_FOOD_ORIGINAL_NAMES.has(name))) {
    return ["사용하면 체력 회복에 쓰이는 음식 소비 아이템입니다."];
  }

  return [];
};

const buildCategoryEffectLines = (category: ItemCategoryId) => {
  const effectLines: Partial<Record<ItemCategoryId, readonly string[]>> = {
    accessory: ["장착하면 능력치, 속성, 상태 보정 등 장신구 효과를 부여합니다."],
    animal: ["본거지 목장에 맡기면 수집 및 생산 기록으로 등록됩니다."],
    antique: ["감정소와 수집 기록에 쓰이는 감정품입니다. 직접 전투 효과는 없습니다."],
    armor: ["몸 방어구로 장비하면 방어 성능을 올립니다."],
    blacksmithHammer: ["대장간에 맡기면 무기 강화 한도를 확장합니다."],
    book: ["본거지 도서관에 등록되는 기록 아이템입니다."],
    consumable: ["사용하면 회복, 상태 치료, 이동 보조 등 즉시 효과를 내는 소비 아이템입니다."],
    guardianPlan: ["본거지 수호신상 조합에 쓰이는 설계도입니다."],
    helmet: ["머리 방어구로 장비하면 방어 성능을 올립니다."],
    ingredient: ["요리와 식당 운영에 쓰이는 식재료입니다."],
    keyItem: ["이벤트 진행과 기록 해금에 쓰이는 중요 아이템입니다. 직접 전투 효과는 없습니다."],
    paint: ["본거지 꾸미기와 수집 기록에 쓰이는 색상 아이템입니다."],
    recipe: ["하이요 식당에 등록하면 해당 요리를 만들 수 있습니다."],
    shield: ["방패로 장비하면 방어 성능을 올립니다."],
    soundSet: ["본거지에서 소리 설정과 수집 기록에 쓰이는 세트 아이템입니다."],
    specialItem: ["수집, 시설, 이벤트 기록에 쓰이는 특수 아이템입니다."],
    tradeItem: ["교역소 매매와 수집 기록에 쓰이는 거래 아이템입니다. 직접 전투 효과는 없습니다."],
    windowSet: ["창 디자인을 바꾸는 데 쓰이는 세트 아이템입니다."],
  };

  return effectLines[category] ?? [];
};

const buildSealedOrbEffectLines = (originalNames: readonly string[]) => {
  const rune = originalNames
    .map((name) => resolveRuneReference(normalizeItemName(name)))
    .find((record) => Boolean(record));

  if (!rune) {
    return [];
  }

  const functionRecords = getRuneFunctionRecords(rune);

  if (functionRecords.length === 0) {
    return [`문장으로 장착하면 ${rune.name}으로 작동합니다.`];
  }

  return functionRecords.flatMap((record) => {
    const spellSummary = buildRuneSpellSummary(record.spells);
    const spellLines = spellSummary ?
      [
        `${record.game}에서 문장으로 장착하면 ${spellSummary}를 사용할 수 있습니다.`,
      ] :
      [];
    const effectLines = record.effects?.map(
      (effect) => `${record.game}: ${effect}`,
    ) ?? [];
    const weaponEffectLines = record.weaponEffect ?
      [`${record.game}에서 무기에 부착하면 ${record.weaponEffect}`] :
      [];
    const noteLines =
      record.note && spellLines.length + effectLines.length + weaponEffectLines.length === 0 ?
        [`${record.game}: ${record.note}`] :
        [];

    return [
      ...spellLines,
      ...effectLines,
      ...weaponEffectLines,
      ...noteLines,
    ];
  });
};

const buildGeneratedItemEffectLines = (
  itemId: string,
  category: ItemCategoryId,
  originalNames: readonly string[],
) => {
  const directEffects = uniqueItemEffectLines([
    ...(ITEM_DIRECT_EFFECTS_BY_ID[
      itemId as keyof typeof ITEM_DIRECT_EFFECTS_BY_ID
    ] ?? []),
    ...originalNames.flatMap((name) =>
      ITEM_DIRECT_EFFECTS_BY_ORIGINAL_NAME[
        normalizeItemName(name) as keyof typeof ITEM_DIRECT_EFFECTS_BY_ORIGINAL_NAME
      ] ?? [],
    ),
  ]);

  if (directEffects.length > 0) {
    return directEffects;
  }

  if (category === "sealedOrb") {
    return buildSealedOrbEffectLines(originalNames);
  }

  if (category === "runePiece") {
    return buildRunePieceEffectLines(originalNames);
  }

  const stoneEffectLines = buildStoneEffectLines(originalNames);

  if (stoneEffectLines.length > 0) {
    return stoneEffectLines;
  }

  const scrollEffectLines = buildScrollEffectLines(originalNames);

  if (scrollEffectLines.length > 0) {
    return scrollEffectLines;
  }

  const patternEffectLines = buildPatternEffectLines(originalNames);

  if (patternEffectLines.length > 0) {
    return patternEffectLines;
  }

  return buildCategoryEffectLines(category);
};

const ITEM_RECIPE_RELATED_LINKS = [
  {
    body: "하이요 영입 뒤 본거지 식당에서 이어지는 요리 대결과 레시피 보상 흐름을 확인합니다.",
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
    title: "하이요 이벤트",
  },
] as const satisfies readonly ItemRelatedLink[];

const ITEM_GENERATED_NAME_TRANSLATIONS = {
  "Ancient Text": "고대 문서",
  "Astral Predications": "별의 예언서",
  Beef: "소고기",
  Binoculars: "쌍안경",
  "Black Urn": "검은 항아리",
  "Blinking Mirror": "깜박임의 거울",
  Blueprints: "설계도",
  "Blue Dragon Urn": "청룡 항아리",
  Book: "책",
  Cabbage: "양배추",
  "Cabbage Seeds": "양배추 씨앗",
  Calf: "송아지",
  Candle: "양초",
  "Cheek Guards": "볼 보호대",
  "Chick (Animal)": "병아리",
  "Chick (Special)": "병아리 장식",
  "Chinese Dish": "중국 접시",
  Clay: "점토",
  "Copper Hammer": "구리 망치",
  Coral: "산호",
  "Crystal Ball": "수정구",
  "Cup of the Oath": "맹세의 잔",
  "Deer Antler": "사슴뿔",
  "Dog Whistle": "개 호루라기",
  "Dragon Incense": "용의 향",
  "Drinking Set": "음주 세트",
  Earring: "귀걸이",
  Egg: "달걀",
  Engine: "엔진",
  "Entry Permit": "입장 허가증",
  "Fake Orders": "가짜 명령서",
  "Famous Urn": "유명한 항아리",
  "Fine China": "고급 자기",
  "Fire Spear": "화염창",
  Flute: "피리",
  Fur: "모피",
  "Gold Bar": "금괴",
  Goldlet: "골드릿",
  "Healing Herb": "치유의 약초",
  "Heavy Collar": "무거운 목줄",
  "Highland Soldier Uniform": "하이랜드 병사복",
  "Holly Berry": "호랑가시나무 열매",
  "Invincible Smile": "무적의 미소",
  "Iron Hammer": "철 망치",
  Kirinji: "기린지",
  "Knight Statue": "기사상",
  "Lamb (Animal)": "양",
  "Lamb (Meat)": "양고기",
  "Landscape Scroll": "산수화 족자",
  "Large Urn": "큰 항아리",
  "Leisure Set": "레저 세트",
  "Leon's Letter": "레온의 편지",
  "Letter of Introduction": "소개장",
  "Listening Orb": "듣기의 구슬",
  "Lubricating Oil": "윤활유",
  "Mathiu's Letter": "맷슈의 편지",
  Mayonnaise: "마요네즈",
  "Millet Dumplings": "조 덤플링",
  "Mole Helmet": "두더지 투구",
  "Mole Shield": "두더지 방패",
  "Mole Suit": "두더지복",
  "Moonlight Weed": "월하초",
  Musk: "사향",
  "Nanami's Vase": "나나미의 꽃병",
  "Nature's Beauty": "자연의 미",
  "Oily Rag": "기름 묻은 천",
  Opal: "오팔",
  Pearl: "진주",
  "Persian Lamp": "페르시아 램프",
  Piglet: "새끼돼지",
  Pork: "돼지고기",
  Potato: "감자",
  Rag: "헝겊",
  "Red Pepper": "고추",
  Rope: "밧줄",
  "Rose Bouquet": "장미 꽃다발",
  "Round Plate": "둥근 접시",
  "Running Water Root": "흐르는 물의 뿌리",
  Salmon: "연어",
  Salt: "소금",
  "Secret Writings": "비전서",
  "Seed Potato": "씨감자",
  "Sexy Wink": "섹시 윙크",
  Shellfish: "조개",
  Shrimp: "새우",
  "Silver Collar": "은 목줄",
  "Silver Dragon Armor": "은룡 갑옷",
  "Silver Hammer": "은 망치",
  "Silver Ring": "은 반지",
  Soap: "비누",
  "Sound Rune": "소리의 문장",
  "Soy Sauce": "간장",
  Spinach: "시금치",
  "Spinach Seedling": "시금치 모종",
  "Square Plate": "사각 접시",
  Sugar: "설탕",
  Sunglasses: "선글라스",
  "Tai Chi Garb": "태극복",
  "Throat Drop": "목캔디",
  Tomato: "토마토",
  "Tomato Seedling": "토마토 모종",
  "Toy Boat": "장난감 배",
  "Traditional Clothing": "전통 의상",
  "Triangle Plate": "삼각 접시",
  "Trio Painting": "삼인 그림",
  "War Scroll": "전쟁 두루마리",
  Wheat: "밀",
  Whitefish: "흰살생선",
  "Wide Urn": "넓은 항아리",
  "Wind Feather Ornament": "바람깃 장식",
  "Window Rune": "창의 봉인구",
  Wine: "와인",
  "Wing Ornament": "날개 장식",
  "Wooden Amulet (Event Item)": "나무 부적",
  "Wooden Amulet (Trade Item)": "나무 부적",
  "World Map": "세계지도",
  Yardstick: "자",
} as const;

const ITEM_COLOR_TRANSLATIONS = {
  Black: "검은",
  Blue: "파란",
  Green: "초록",
  Pink: "분홍",
  Red: "빨간",
  White: "흰",
  Yellow: "노란",
} as const;

const ITEM_STAT_TRANSLATIONS = {
  Defense: "방어",
  Luck: "행운",
  Magic: "마법",
  "Magic Defense": "마법 방어",
  Power: "힘",
  Skill: "기술",
  Speed: "속도",
} as const;

const ITEM_ELEMENT_TRANSLATIONS = {
  Defense: "방어",
  Earth: "대지",
  Fire: "불",
  Lightning: "번개",
  Luck: "행운",
  Magic: "마",
  Power: "힘",
  Skill: "기술",
  Speed: "속",
  Water: "물",
  Wind: "바람",
} as const;

const ITEM_JAPANESE_COLOR_TRANSLATIONS = {
  Black: "黒",
  Blue: "青",
  Green: "緑",
  Pink: "ピンク",
  Red: "赤",
  White: "白",
  Yellow: "黄",
} as const;

const ITEM_JAPANESE_ELEMENT_TRANSLATIONS = {
  Defense: "守",
  Earth: "土",
  Fire: "火",
  Lightning: "雷",
  Luck: "運",
  Magic: "魔",
  Power: "力",
  Skill: "技",
  Speed: "速",
  Water: "水",
  Wind: "風",
} as const;

const ITEM_JAPANESE_STAT_TRANSLATIONS = {
  Defense: "守",
  Luck: "運",
  Magic: "魔",
  "Magic Defense": "魔防",
  Power: "力",
  Skill: "技",
  Speed: "速",
} as const;

const ITEM_JAPANESE_PLAN_TRANSLATIONS = {
  Dragon: "竜",
  Rabbit: "兎",
  Turtle: "亀",
  Unicorn: "一角獣",
} as const;

const ITEM_PLAN_TRANSLATIONS = {
  Dragon: "용",
  Rabbit: "토끼",
  Turtle: "거북",
  Unicorn: "유니콘",
} as const;

const translateGeneratedItemName = (name: string) => {
  const direct =
    ITEM_GENERATED_NAME_TRANSLATIONS[
      name as keyof typeof ITEM_GENERATED_NAME_TRANSLATIONS
    ];

  if (direct) {
    return direct;
  }

  const scrollMatch = name.match(/^(.+) Scroll$/);

  if (scrollMatch) {
    const baseName = scrollMatch[1];
    const knownBase =
      ITEM_NAME_TRANSLATIONS[baseName as keyof typeof ITEM_NAME_TRANSLATIONS] ??
      ITEM_GENERATED_NAME_TRANSLATIONS[
        baseName as keyof typeof ITEM_GENERATED_NAME_TRANSLATIONS
      ];

    return knownBase ? `${knownBase} 두루마리` : `${baseName} 두루마리`;
  }

  const oldBookMatch = name.match(/^Old Book Vol\. (\d+)$/);

  if (oldBookMatch) {
    return `오래된 책 ${oldBookMatch[1]}권`;
  }

  const recipeMatch = name.match(/^Recipe (\d+)$/);

  if (recipeMatch) {
    return `레시피 ${recipeMatch[1]}`;
  }

  const plansMatch = name.match(/^(Dragon|Rabbit|Turtle|Unicorn) Plans (\d+)$/);

  if (plansMatch) {
    const planName =
      ITEM_PLAN_TRANSLATIONS[
        plansMatch[1] as keyof typeof ITEM_PLAN_TRANSLATIONS
      ];

    return `${planName} 설계도 ${plansMatch[2]}`;
  }

  const setMatch = name.match(/^(Sound|Window) Set (\d+)$/);

  if (setMatch) {
    return `${setMatch[1] === "Sound" ? "소리세트" : "창 세트"} ${setMatch[2]}`;
  }

  const paintMatch = name.match(/^(Black|Blue|Green|Pink|Red|White|Yellow) Paint$/);

  if (paintMatch) {
    const color =
      ITEM_COLOR_TRANSLATIONS[
        paintMatch[1] as keyof typeof ITEM_COLOR_TRANSLATIONS
      ];

    return `${color} 물감`;
  }

  const runePieceMatch = name.match(
    /^(Defense|Earth|Fire|Lightning|Luck|Magic|Power|Skill|Speed|Water|Wind) Rune Piece$/,
  );

  if (runePieceMatch) {
    const element =
      ITEM_ELEMENT_TRANSLATIONS[
        runePieceMatch[1] as keyof typeof ITEM_ELEMENT_TRANSLATIONS
      ];

    return `${element}의 문장 조각`;
  }

  const stoneMatch = name.match(
    /^Stone of (Defense|Luck|Magic|Magic Defense|Power|Skill|Speed)$/,
  );

  if (stoneMatch) {
    const stat =
      ITEM_STAT_TRANSLATIONS[
        stoneMatch[1] as keyof typeof ITEM_STAT_TRANSLATIONS
      ];

    return `${stat}의 돌`;
  }

  const karenMatch = name.match(/^Karen (Painting|Statue) ([ABC])$/);

  if (karenMatch) {
    return `카렌 ${karenMatch[1] === "Painting" ? "그림" : "상"} ${karenMatch[2]}`;
  }

  return name;
};

const translateGeneratedItemJapaneseName = (name: string) => {
  const direct =
    ITEM_JAPANESE_NAME_TRANSLATIONS[
      name as keyof typeof ITEM_JAPANESE_NAME_TRANSLATIONS
    ];

  if (direct) {
    return direct;
  }

  const sealedOrbName = resolveSealedOrbItemName(name);

  if (sealedOrbName && ITEM_RUNE_NAME_PATTERN.test(normalizeItemName(name))) {
    const rune = resolveRuneReference(name);

    if (rune?.japaneseName) {
      return rune.japaneseName.replace(/の紋章$/, "の封印球");
    }
  }

  const scrollMatch = name.match(/^(.+) Scroll$/);

  if (scrollMatch) {
    const baseName = scrollMatch[1];
    const knownBase =
      ITEM_JAPANESE_NAME_TRANSLATIONS[
        baseName as keyof typeof ITEM_JAPANESE_NAME_TRANSLATIONS
      ];

    return knownBase ? `${knownBase}の巻物` : `${baseName}の巻物`;
  }

  const oldBookMatch = name.match(/^Old Book Vol\. (\d+)$/);

  if (oldBookMatch) {
    return `古い本${oldBookMatch[1]}巻`;
  }

  const recipeMatch = name.match(/^Recipe (\d+)$/);

  if (recipeMatch) {
    return `レシピ${recipeMatch[1]}`;
  }

  const plansMatch = name.match(/^(Dragon|Rabbit|Turtle|Unicorn) Plans (\d+)$/);

  if (plansMatch) {
    const planName =
      ITEM_JAPANESE_PLAN_TRANSLATIONS[
        plansMatch[1] as keyof typeof ITEM_JAPANESE_PLAN_TRANSLATIONS
      ];

    return `${planName}設計図${plansMatch[2]}`;
  }

  const setMatch = name.match(/^(Sound|Window) Set (\d+)$/);

  if (setMatch) {
    return `${setMatch[1] === "Sound" ? "音セット" : "窓セット"}${setMatch[2]}`;
  }

  const paintMatch = name.match(/^(Black|Blue|Green|Pink|Red|White|Yellow) Paint$/);

  if (paintMatch) {
    const color =
      ITEM_JAPANESE_COLOR_TRANSLATIONS[
        paintMatch[1] as keyof typeof ITEM_JAPANESE_COLOR_TRANSLATIONS
      ];

    return `${color}い絵の具`;
  }

  const flowerSeedsMatch = name.match(
    /^(Blue|Red|Yellow) Flower Seeds$/,
  );

  if (flowerSeedsMatch) {
    const color =
      ITEM_JAPANESE_COLOR_TRANSLATIONS[
        flowerSeedsMatch[1] as keyof typeof ITEM_JAPANESE_COLOR_TRANSLATIONS
      ];

    return `${color}い花の種`;
  }

  const runePieceMatch = name.match(
    /^(Defense|Earth|Fire|Lightning|Luck|Magic|Power|Skill|Speed|Water|Wind) Rune Piece$/,
  );

  if (runePieceMatch) {
    const element =
      ITEM_JAPANESE_ELEMENT_TRANSLATIONS[
        runePieceMatch[1] as keyof typeof ITEM_JAPANESE_ELEMENT_TRANSLATIONS
      ];

    return `${element}の紋章片`;
  }

  const stoneMatch = name.match(
    /^Stone of (Defense|Luck|Magic|Magic Defense|Power|Skill|Speed)$/,
  );

  if (stoneMatch) {
    const stat =
      ITEM_JAPANESE_STAT_TRANSLATIONS[
        stoneMatch[1] as keyof typeof ITEM_JAPANESE_STAT_TRANSLATIONS
      ];

    return `${stat}の石`;
  }

  const karenMatch = name.match(/^Karen (Painting|Statue) ([ABC])$/);

  if (karenMatch) {
    return `カレン${karenMatch[1] === "Painting" ? "の絵" : "の像"}${karenMatch[2]}`;
  }

  return null;
};

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

const resolveSealedOrbItemName = (name: string) => {
  if (!ITEM_RUNE_NAME_PATTERN.test(normalizeItemName(name))) {
    return null;
  }

  return buildSealedOrbItemName(name);
};

const resolveItemRecordCategory = (
  originalName: string,
  itemReference: ItemReference | undefined,
  categoryOverride?: ItemCategoryId,
): ItemCategoryId => {
  if (resolveSealedOrbItemName(originalName)) {
    return "sealedOrb";
  }

  return categoryOverride ?? itemReference?.category ?? inferItemCategory(originalName);
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
  const sealedOrbName = resolveSealedOrbItemName(name);

  if (sealedOrbName) {
    return `${sealedOrbName}${buildItemValueSuffix(name)}`;
  }

  const item = resolveItemReference(name);

  if (!item) {
    return translateGeneratedItemName(name);
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

const GAME8_SOURCE_ENTRY_TRANSLATIONS = {
  "Ask to clean the Mercenary Fortress": "용병 요새 청소 의뢰",
  Antei: "안테이",
  "Available from the start": "초기 소지",
  "Banner Pass": "바나 고개",
  "Banner Village": "바나 마을",
  "Bought for Pilika in Muse City": "뮤즈에서 필리카에게 구매",
  "Catch in Fishing mini-game.": "낚시 미니게임",
  "Cave of the Past": "과거의 동굴",
  "Cave of the Past x2": "과거의 동굴 2회",
  "Cave of the Wind": "바람의 동굴",
  "Clean the Mercenary Fortress": "용병 요새 청소",
  "Coronet Town": "코로네",
  "Crom Village": "크롬 마을",
  "Dragon Knights' Fortress": "용기사의 요새",
  "Dragon's Den": "용동",
  "Drakemouth Village": "용구마을",
  "Dwarf Trail": "드워프 산길",
  "Dwarves' Vault": "드워프 금고",
  "Dwarves' Vault x2": "드워프 금고 2회",
  "Floating Fortress of Shasarazade": "샤사라자드 요새",
  "Forest Village": "숲의 마을",
  "Fortress of Garan": "가란 성새",
  "Fortress of Kwaba": "쿠와바 성새",
  "Found in Sindar Ruins": "신다르 유적",
  "Given by Elza": "엘자에게 받음",
  "Given by Fitcher": "피처에게 받음",
  "Given by Hilda": "힐다에게 받음",
  "Given by Jess": "제스에게 받음",
  "Given by Leon": "레온에게 받음",
  "Given by Lepant": "레판토에게 받음",
  "Great Forest": "대삼림",
  "Great Forest Village": "대삼림 마을",
  "Greenhill City": "그린힐",
  "Greenhill Forest": "그린힐 숲",
  "Gregminster": "그레그민스터",
  "Gregminster Castle": "그레그민스터 성",
  "Highland Garrison": "하이랜드 주둔지",
  "Highway Village": "가도 마을",
  "Kaku": "카쿠",
  "Kalekka": "카렉카",
  "Kirov": "키로프",
  "Kobold Village": "코볼트 마을",
  "Kobold Village Forest": "코볼트마을 숲",
  "Kouan": "코안",
  "Kouan Military Government Office": "코안 군정청",
  "Kuskus Town": "쿠스쿠스",
  "Kyaro Town": "캐로 마을",
  "Lakewest Town": "레이크웨스트 마을",
  "Lenankamp": "레난캄프",
  "Lepant's Mansion": "레판토의 저택",
  "L'Renouille": "르누이유",
  "Luikan's Hermitage": "리우칸의 암자",
  "Magician's Island": "마술사의 섬",
  "Mercenary Fortress": "용병 요새",
  "Moravia Castle": "모라비아 성",
  "Mt. Rakutei": "라쿠테이 산",
  "Mt. Seifu": "세이후 산",
  "Mt. Seifu x2": "세이후 산 2회",
  "Mt. Tigerwolf": "타이거울프 산",
  "Mt. Tigerwolf x2": "타이거울프 산 2회",
  "Muse City": "뮤즈",
  "Neclord's Castle": "네크로드 성",
  "Neclordia": "네크로디아",
  "Northern Checkpoint": "북쪽 관문",
  "North Sparrow Pass": "북쪽 참새 고개",
  "North Window": "노스 윈도우",
  "Obtained in Sindar Ruins": "신다르 유적",
  "Obtained while shopping": "심부름 중 획득",
  "Pannu Yakuta Castle": "판누 야쿠타",
  "Path to Matilda": "마틸다 방면 길",
  "Pirate's Fortress": "해적 요새",
  "Plant Cabbage Seeds": "양배추 씨앗 재배",
  "Plant Seed Potatoes.": "씨감자 재배",
  "Plant Spinach Seedlings": "시금치 모종 재배",
  "Plant Tomato Seedlings.": "토마토 모종 재배",
  "Produced by Chicks in the Ranch.": "목장에서 병아리 생산",
  "Produced by Lambs in the Ranch": "목장에서 양 생산",
  "Produced by Piglets in the Ranch.": "목장에서 새끼돼지 생산",
  "Purchase in Ryube Village": "류베 마을에서 구매",
  "Qlon Temple": "클론 사원",
  "Radat Town": "라다트",
  "Recruit Hai Yo": "하이요 합류",
  "Recruit Hellion": "헬리온 합류",
  "Recruit Templeton": "템플턴 합류",
  "Recruit Tuta, then talk to Dr. Huan": "토우타 합류 후 호우안에게 대화",
  "Rikon": "리콘",
  "Rockaxe": "록액스",
  "Rockaxe Castle": "록액스 성",
  "Rockland Military Government Office": "록랜드 군정청",
  "Rockland": "록랜드",
  "Rokkaku Hamlet": "롯카쿠 마을",
  "Ryube Forest": "류베 숲",
  "Ryube Village": "류베 마을",
  "Sajah Village": "사자 마을",
  "Sarady": "사라디",
  "Scarleticia Castle": "스칼레티시아 성",
  "Seika": "세이카",
  "Seek Valley": "시크 계곡",
  "Secret Factory": "비밀 공장",
  "Sindar Ruins": "신다르 유적",
  "Soniere Prison": "소니에르 감옥",
  "South Window City": "사우스 윈도우",
  "Stage Dancing Level 1 Prize": "무대 춤 레벨 1 보상",
  "Stage Dancing Level 2 Prize": "무대 춤 레벨 2 보상",
  "Stage Dancing Level 3 Prize": "무대 춤 레벨 3 보상",
  "Stage Dancing Level 4 Prize": "무대 춤 레벨 4 보상",
  "Stage Dancing Level 5 Prize": "무대 춤 레벨 5 보상",
  "Teien": "테이엔",
  "Tigermouth Village": "코코마을",
  "Tinto City": "틴토",
  "Tinto Mines": "틴토 광산",
  "Tinto Pass": "틴토 고개",
  "Toran Lake Castle": "트란 성",
  "Toto Village": "토토 마을",
  "Two River City": "투 리버",
  "Two River Sewers": "투 리버 하수도",
  "Village of the Dwarves": "드워프 마을",
  "Village of the Elves": "엘프 마을",
  "Village of the Hidden Rune": "숨겨진 문장의 마을",
  "Warriors' Village": "전사의 마을",
  "White Deer Inn": "백록정",
  "Whackamole (Beginner or Ultimate)": "두더지잡기(초급 또는 최종)",
  "Whackamole (Hard or Ultimate)": "두더지잡기(상급 또는 최종)",
  "Whackamole (Normal or Ultimate)": "두더지잡기(중급 또는 최종)",
  "Win eighth Cook-Off": "요리 대결 8회 우승",
  "Win eleventh Cook-Off": "요리 대결 11회 우승",
  "Win fifth Cook-Off": "요리 대결 5회 우승",
  "Win first Cook-Off": "요리 대결 1회 우승",
  "Win fourth Cook-Off": "요리 대결 4회 우승",
  "Win second Cook-Off": "요리 대결 2회 우승",
  "Win seventh Cook-Off": "요리 대결 7회 우승",
  "Win sixth Cook-Off": "요리 대결 6회 우승",
  "Win tenth Cook-Off": "요리 대결 10회 우승",
  "Win third Cook-Off": "요리 대결 3회 우승",
  "Win twelfth Cook-Off": "요리 대결 12회 우승",
} as const;

const GAME8_MINIGAME_ENTRY_TRANSLATIONS = {
  "Army League": "군단 리그",
  "Castle League": "성 리그",
  "Hero League": "영웅 리그",
  "1st Place": "1위",
  "2nd Place": "2위",
  "3rd Place": "3위",
  "Army Leage": "군단 리그",
} as const;

const GAME8_GDS_PART_LABELS = {
  D: "용",
  R: "토끼",
  T: "거북",
  U: "유니콘",
} as const;

const translateGame8GdsCode = (entry: string) => {
  if (!/^[DRTU]{4}$/.test(entry)) {
    return entry;
  }

  const [head, body, legs, tail] = entry.split("").map((part) =>
    GAME8_GDS_PART_LABELS[part as keyof typeof GAME8_GDS_PART_LABELS]
  );

  return `머리 ${head} / 몸통 ${body} / 다리 ${legs} / 꼬리 ${tail}`;
};

const translateGame8EventEntry = (entry: string) => {
  const text = entry.trim();

  if (text.includes("barter event to recruit Sheila in Kirov")) {
    return "키로프 세일라 합류 교환 이벤트";
  }

  if (text.includes("ninth book")) {
    return "오래된 책 1-8권을 책장에 꽂은 뒤 숨겨진 입력으로 획득";
  }

  if (text.includes("Astral Predications")) {
    return "마술사의 섬에서 레크나트에게 받음";
  }

  if (text.includes("Blueprints")) {
    return "레난캄프 해방군 기지에서 오뎃사에게 받음";
  }

  if (text.includes("Earring")) {
    return "2장 이벤트로 획득";
  }

  if (text.includes("Engine")) {
    return "테이엔에서 커맨돌 이벤트로 획득";
  }

  if (text.includes("Fake Orders")) {
    return "4장 이벤트에서 킴벌리와 테슬라에게 받음";
  }

  if (text.includes("Mathiu's Letter")) {
    return "맷슈가 킴벌리에게 전달하라고 맡긴 편지";
  }

  if (text.includes("Fire Spear")) {
    return "비밀 공장 방문 후 5장 이벤트로 획득";
  }

  if (text.includes("Holly Fairy")) {
    return "스칼레티시아 지역 호랑가시 요정의 희귀 드롭";
  }

  if (text.includes("War Scroll")) {
    return "메인 스토리 중 과거의 동굴에서 획득";
  }

  if (text.includes("Window Crystal")) {
    return "메인 스토리 중 과거의 동굴에서 획득";
  }

  if (text.includes("Running Water Root")) {
    return "드워프 금고 최심부에서 획득";
  }

  if (text.includes("Sound Crystal")) {
    return "카렉카에서 소리의 봉인구를 주워 획득";
  }

  if (text.includes("item store in Kirov")) {
    return "키로프 아이템 상점에서 구매";
  }

  if (text.includes("Kirinji")) {
    return "레판토의 저택 최심부에서 획득";
  }

  if (text.includes("Old Book Vol. 3")) {
    return "클론 사원 책장을 조사해 획득";
  }

  if (text.includes("item store in Rikon")) {
    return "리콘 아이템 상점에서 구매";
  }

  if (text.includes("Moonlight Weed")) {
    return "시크 계곡 최심부에서 획득";
  }

  if (text.includes("Nightmare enemies")) {
    return "소니에르 감옥 나이트메어의 희귀 드롭";
  }

  if (text.includes("item store in Teien")) {
    return "테이엔 아이템 상점에서 구매";
  }

  if (text.includes("item store in Warriors' Village")) {
    return "전사의 마을 아이템 상점에서 구매";
  }

  if (text.includes("Binoculars")) {
    return "이바노프에게 물감을 모두 전달한 뒤 획득";
  }

  if (text.includes("Blinking Mirror")) {
    return "헬리온 합류 후 획득";
  }

  if (text.includes("World Map")) {
    return "템플턴 합류 후 획득";
  }

  if (text.includes("Dragon Incense")) {
    return "드워프 금고 룰렛에서 획득";
  }

  return text;
};

const translateGame8SourceEntry = (
  sourceType: ItemSourceType,
  entry: string,
): string => {
  const valueWithCount = entry.match(/^(.+?)\s+(x\d+)$/);

  if (valueWithCount) {
    const [, baseValue, count] = valueWithCount;
    return `${translateGame8SourceEntry(sourceType, baseValue)} ${count}`;
  }

  const direct =
    GAME8_SOURCE_ENTRY_TRANSLATIONS[
      entry as keyof typeof GAME8_SOURCE_ENTRY_TRANSLATIONS
    ];

  if (direct) {
    return direct;
  }

  if (sourceType === "gds") {
    return translateGame8GdsCode(entry);
  }

  if (sourceType === "drop") {
    return translateMonsterName(entry);
  }

  if (sourceType === "minigame") {
    return Object.entries(GAME8_MINIGAME_ENTRY_TRANSLATIONS).reduce(
      (translated, [from, to]) => translated.replace(from, to),
      entry.replace("Lumberjack Knot", "나무 베기"),
    );
  }

  const producedMatch = entry.match(/^Produced by (.+) in the Ranch\\.$/);

  if (producedMatch) {
    return `목장에서 ${producedMatch[1]} 생산`;
  }

  const plantMatch = entry.match(/^Plant (.+)$/);

  if (plantMatch) {
    return `${translateGeneratedItemName(plantMatch[1])} 재배`;
  }

  return translateGame8EventEntry(entry);
};

const isItemIndexGameId = (value: string): value is ItemIndexGameId => {
  return ITEM_INDEX_PAGES.some((page) => page.id === value);
};

const resolveItemAvailabilityId = (rawName: string) => {
  const originalName = normalizeItemName(rawName);
  const itemReference = resolveItemReference(originalName);

  return itemReference?.id ?? buildItemId(originalName);
};

const buildGame8ItemGameAvailability = () => {
  const availability = new Map<string, Set<ItemIndexGameId>>();

  GAME8_ITEM_SOURCE_RECORDS.forEach((sourceRecord) => {
    if (!isItemIndexGameId(sourceRecord.game)) {
      return;
    }

    const itemId = resolveItemAvailabilityId(sourceRecord.name);
    const games = availability.get(itemId) ?? new Set<ItemIndexGameId>();

    games.add(sourceRecord.game);
    availability.set(itemId, games);
  });

  return availability;
};

const GAME8_ITEM_GAME_AVAILABILITY = buildGame8ItemGameAvailability();

const isAvailableAsSupplementalEquipment = (
  game: ItemIndexGameId,
  rawName: string,
) => {
  const game8Games = GAME8_ITEM_GAME_AVAILABILITY.get(
    resolveItemAvailabilityId(rawName),
  );

  return !game8Games || game8Games.has(game);
};

const formatItemPrices = (prices: readonly number[]) => {
  if (prices.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return `${prices
    .map(formatArchiveNumber)
    .join(" / ")} 포치`;
};

const sortItemRecords = (items: readonly ItemIndexRecord[]) => {
  return [...items].sort((left, right) =>
    left.name.localeCompare(right.name, ARCHIVE_LOCALE),
  );
};

const createItemSourceLocationSets = (): Record<ItemSourceType, Set<string>> => ({
  shop: new Set<string>(),
  drop: new Set<string>(),
  found: new Set<string>(),
  treasure: new Set<string>(),
  trade: new Set<string>(),
  minigame: new Set<string>(),
  gds: new Set<string>(),
  other: new Set<string>(),
});

const addItemSourceLocation = (
  item: ItemRecordDraft,
  sourceType: ItemSourceType,
  location: string,
) => {
  item.sourceTypes.add(sourceType);
  item.locations.add(location);
  item.sourceLocations[sourceType].add(location);
};

const sortItemSourceLocations = (
  sourceLocations: Record<ItemSourceType, Set<string>>,
): Record<ItemSourceType, readonly string[]> => ({
  shop: [...sourceLocations.shop].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  drop: [...sourceLocations.drop].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  found: [...sourceLocations.found].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  treasure: [...sourceLocations.treasure].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  trade: [...sourceLocations.trade].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  minigame: [...sourceLocations.minigame].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  gds: [...sourceLocations.gds].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
  other: [...sourceLocations.other].sort((left, right) =>
    left.localeCompare(right, ARCHIVE_LOCALE),
  ),
});

const formatGame8SourceLocation = (
  sourceType: ItemSourceType,
  location: string,
) => {
  if (sourceType === "shop" || sourceType === "drop") {
    return location;
  }

  return `${ITEM_SOURCE_TYPE_LABELS[sourceType]} · ${location}`;
};

const formatGame8RecipeSourceLocation = (
  sourceType: ItemSourceType,
  location: string,
) => {
  if (sourceType === "shop") {
    return `${location} 아이템 상점 레어 아이템`;
  }

  return formatGame8SourceLocation(sourceType, location);
};

const createItemRecordDraft = (
  rawName: string,
  categoryOverride?: ItemCategoryId,
): {
  category: ItemCategoryId;
  draft: {
    id: string;
    name: string;
    originalNames: Set<string>;
    sourceTypes: Set<ItemSourceType>;
    prices: Set<number>;
    locations: Set<string>;
    sourceLocations: Record<ItemSourceType, Set<string>>;
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
    resolveSealedOrbItemName(originalName) ??
    itemReference?.name ??
    translateGeneratedItemName(originalName);
  const category = resolveItemRecordCategory(
    originalName,
    itemReference,
    categoryOverride,
  );

  return {
    category,
    draft: {
      id,
      name,
      originalNames: new Set([itemReference?.originalName ?? originalName]),
      sourceTypes: new Set<ItemSourceType>(),
      prices: new Set<number>(),
      locations: new Set<string>(),
      sourceLocations: createItemSourceLocationSets(),
      dropRates: new Set<string>(),
    },
  };
};

const getOrCreateItemRecordDraft = (
  records: Map<string, ItemRecordDraft>,
  game: ItemIndexGameId,
  rawName: string,
  categoryOverride?: ItemCategoryId,
) => {
  const created = createItemRecordDraft(rawName, categoryOverride);

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
        if (!isAvailableAsSupplementalEquipment(gameId, equipmentName)) {
          return;
        }

        if (
          !records.has(
            `${gameId}:${resolveItemAvailabilityId(equipmentName)}`,
          )
        ) {
          return;
        }

        getOrCreateItemRecordDraft(records, gameId, equipmentName);
      });
    });
  });
};

const resolveCharacterInitialOwnerName = (
  gameId: ItemIndexGameId,
  characterId: string,
) => {
  if (gameId === ITEM_INDEX_PAGE_IDS.suikodenI) {
    return (
      SUIKODEN_I_CHARACTER_LOCALIZATION[
        characterId as keyof typeof SUIKODEN_I_CHARACTER_LOCALIZATION
      ]?.name ?? characterId
    );
  }

  return (
    SUIKODEN_II_CHARACTER_LOCALIZATION[
      characterId as keyof typeof SUIKODEN_II_CHARACTER_LOCALIZATION
    ]?.name ?? characterId
  );
};

const addItemInitialOwner = (
  owners: Map<string, ItemInitialOwner[]>,
  gameId: ItemIndexGameId,
  itemId: string,
  characterId: string,
) => {
  const key = `${gameId}:${itemId}`;
  const owner = {
    game: gameId,
    href: buildCharacterDetailPath(gameId, characterId),
    id: characterId,
    name: resolveCharacterInitialOwnerName(gameId, characterId),
  };
  const currentOwners = owners.get(key) ?? [];

  if (currentOwners.some((currentOwner) => currentOwner.href === owner.href)) {
    return;
  }

  owners.set(key, [...currentOwners, owner]);
};

const buildItemInitialOwnerIndex = () => {
  const owners = new Map<string, ItemInitialOwner[]>();
  const characterRecords = CHARACTER_DETAIL_RECORDS as Record<
    string,
    Record<string, CharacterDetailRecord>
  >;

  Object.entries(characterRecords).forEach(([gameId, recordsByCharacter]) => {
    if (!isItemIndexGameId(gameId)) {
      return;
    }

    Object.entries(recordsByCharacter).forEach(([characterId, record]) => {
      Object.values(record.role.equipment.default).forEach((equipmentName) => {
        const normalizedEquipmentName = normalizeItemName(equipmentName);

        if (ITEM_INITIAL_OWNER_EMPTY_VALUES.has(normalizedEquipmentName)) {
          return;
        }

        addItemInitialOwner(
          owners,
          gameId,
          resolveItemAvailabilityId(equipmentName),
          characterId,
        );
      });
    });
  });

  owners.forEach((currentOwners, key) => {
    owners.set(
      key,
      [...currentOwners].sort((left, right) =>
        left.name.localeCompare(right.name, ARCHIVE_LOCALE),
      ),
    );
  });

  return owners;
};

const inferGame8ItemCategory = (
  game8Type: string,
  itemName: string,
): ItemCategoryId => {
  const mappedCategory =
    GAME8_ITEM_CATEGORY_MAP[game8Type as keyof typeof GAME8_ITEM_CATEGORY_MAP];

  if (mappedCategory) {
    return mappedCategory;
  }

  return inferItemCategory(itemName);
};

const resolveGame8SourceType = (sourceType: string): ItemSourceType => {
  return (
    GAME8_SOURCE_TYPE_MAP[sourceType as keyof typeof GAME8_SOURCE_TYPE_MAP] ??
    "other"
  );
};

const parseGame8MonsterDrop = (dropValue: string) => {
  const dropMatch = dropValue.trim().match(
    /^(.+)\s\((High|Medium|Low|Rare|Once Only)\)$/,
  );

  if (!dropMatch) {
    return null;
  }

  return {
    itemName: dropMatch[1],
    rate: dropMatch[2] as Game8MonsterDropRate,
  };
};

const addGame8ItemSourceRecords = (records: Map<string, ItemRecordDraft>) => {
  GAME8_ITEM_SOURCE_RECORDS.forEach((sourceRecord) => {
    if (!isItemIndexGameId(sourceRecord.game)) {
      return;
    }

    const item = getOrCreateItemRecordDraft(
      records,
      sourceRecord.game,
      sourceRecord.name,
      inferGame8ItemCategory(sourceRecord.game8Type, sourceRecord.name),
    );

    if (!item) {
      return;
    }

    sourceRecord.sources.forEach((sourceGroup) => {
      const sourceType = resolveGame8SourceType(sourceGroup.type);

      sourceGroup.entries.forEach((entry) => {
        const translatedEntry = translateGame8SourceEntry(sourceType, entry);
        const formattedLocation =
          sourceRecord.game8Type === "Recipes" ?
            formatGame8RecipeSourceLocation(sourceType, translatedEntry) :
            formatGame8SourceLocation(sourceType, translatedEntry);

        addItemSourceLocation(
          item,
          sourceType,
          formattedLocation,
        );
      });
    });

    sourceRecord.shopPrices.forEach((price) => item.prices.add(price));
  });
};

const addGame8MonsterDropItemRecords = (
  records: Map<string, ItemRecordDraft>,
  game: ItemIndexGameId,
  monsterSourceRecords: readonly Game8MonsterSourceRecord[],
) => {
  monsterSourceRecords.forEach((sourceRecord) => {
    const monsterName = translateMonsterName(sourceRecord.monster);

    sourceRecord.entries.forEach((entry) => {
      const [, dropValue = ""] = entry.split(" | ");

      dropValue.split(",").forEach((drop) => {
        const parsedDrop = parseGame8MonsterDrop(drop);

        if (!parsedDrop) {
          return;
        }

        const item = getOrCreateItemRecordDraft(records, game, parsedDrop.itemName);

        if (!item) {
          return;
        }

        addItemSourceLocation(item, "drop", monsterName);
        item.dropRates.add(
          `${monsterName} · ${GAME8_MONSTER_DROP_RATE_LABELS[parsedDrop.rate]}`,
        );
      });
    });
  });
};

const buildItemIndexRecords = () => {
  const records = new Map<string, ItemRecordDraft>();
  const initialOwnerIndex = buildItemInitialOwnerIndex();
  const regionRecords = REGION_DETAIL_RECORDS as Record<
    string,
    RegionDetailRecord
  >;

  addGame8ItemSourceRecords(records);
  addGame8MonsterDropItemRecords(
    records,
    ITEM_INDEX_PAGE_IDS.suikodenI,
    GAME8_SUIKODEN_I_MONSTER_SOURCE_RECORDS,
  );
  addGame8MonsterDropItemRecords(
    records,
    ITEM_INDEX_PAGE_IDS.suikodenII,
    GAME8_SUIKODEN_II_MONSTER_SOURCE_RECORDS,
  );

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

        addItemSourceLocation(item, "shop", `${regionLabel} · ${shopLabel}`);
        item.prices.add(shopItem.price);
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

        addItemSourceLocation(item, "drop", enemyLabel);
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
      prices: [...record.prices].sort((left, right) => left - right),
      locations: [...record.locations].sort((left, right) =>
        left.localeCompare(right, ARCHIVE_LOCALE),
      ),
      sourceLocations: sortItemSourceLocations(record.sourceLocations),
      dropRates: [...record.dropRates].sort((left, right) =>
        left.localeCompare(right, ARCHIVE_LOCALE),
      ),
      initialOwners: initialOwnerIndex.get(`${record.game}:${record.id}`) ?? [],
    })),
  );
};

export const ITEM_INDEX_RECORDS = buildItemIndexRecords();

export const resolveItemDetailHref = (name: string) => {
  const normalizedName = normalizeItemName(name).toLowerCase();
  const itemReference = resolveItemReference(name);
  const candidateIds = [
    itemReference?.id,
    buildItemId(normalizeItemName(name)),
  ].filter(Boolean);

  const record = ITEM_INDEX_RECORDS.find((item) =>
    candidateIds.includes(item.id) ||
    item.name.toLowerCase() === normalizedName ||
    item.originalNames.some((originalName) =>
      normalizeItemName(originalName).toLowerCase() === normalizedName,
    ),
  );

  return record?.href ?? null;
};

export const getItemIndexPage = (gameId: ItemIndexGameId) => {
  return ITEM_INDEX_PAGES.find((page) => page.id === gameId) ?? ITEM_INDEX_PAGES[0];
};

export const getItemIndexRecordsByGame = (gameId: ItemIndexGameId) => {
  return ITEM_INDEX_RECORDS.filter((item) => item.game === gameId);
};

export const getItemDetailRecord = (itemId: string): ItemDetailRecord | null => {
  const gameRecords = ITEM_INDEX_RECORDS.filter((item) => item.id === itemId);
  const firstRecord = gameRecords[0];

  if (!firstRecord) {
    return null;
  }

  const originalNames = [
    ...new Set(gameRecords.flatMap((item) => item.originalNames)),
  ].sort();

  return {
    id: firstRecord.id,
    name: firstRecord.name,
    category: firstRecord.category,
    games: gameRecords.map((item) => item.game),
    originalNames,
    japaneseNames: [
      ...new Set(gameRecords.flatMap((item) => getItemJapaneseNames(item))),
    ],
    relatedLinks: firstRecord.category === "recipe" ?
      ITEM_RECIPE_RELATED_LINKS :
      [],
    descriptionLines: ITEM_DETAIL_DESCRIPTIONS[
      itemId as keyof typeof ITEM_DETAIL_DESCRIPTIONS
    ] ?? [
      `${gameRecords
        .map((item) => ITEM_GAME_DESCRIPTION_LABELS[item.game])
        .join(" / ")}에 등장하는 ${ITEM_CATEGORY_LABELS[firstRecord.category]}입니다.`,
    ],
    effectLines: ITEM_DETAIL_EFFECTS[
      itemId as keyof typeof ITEM_DETAIL_EFFECTS
    ] ?? buildGeneratedItemEffectLines(
      itemId,
      firstRecord.category,
      originalNames,
    ),
    gameRecords,
  };
};

export const getItemDetailStaticParams = () => {
  return [...new Set(ITEM_INDEX_RECORDS.map((item) => item.id))].map((itemId) => ({
    game: itemId,
  }));
};

export const getItemJapaneseNames = (item: ItemIndexRecord) => {
  return [
    ...new Set(
      item.originalNames.flatMap((name) => {
        const japaneseName =
          ITEM_JAPANESE_NAME_TRANSLATIONS[
            name as keyof typeof ITEM_JAPANESE_NAME_TRANSLATIONS
          ] ?? translateGeneratedItemJapaneseName(name);

        return japaneseName ? [japaneseName] : [];
      }),
    ),
  ];
};

export const formatItemSources = (item: ItemIndexRecord) => {
  if (item.sourceTypes.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return item.sourceTypes
    .map((sourceType) => ITEM_SOURCE_TYPE_LABELS[sourceType])
    .join(" / ");
};

export const formatItemPrice = (item: ItemIndexRecord) => {
  return formatItemPrices(item.prices);
};

const formatItemSourceLocations = (locations: readonly string[]) => {
  if (locations.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return locations.join(" / ");
};

export const formatItemShopLocations = (item: ItemIndexRecord) => {
  return formatItemSourceLocations(item.sourceLocations.shop);
};

export const formatItemDropLocations = (item: ItemIndexRecord) => {
  return formatItemSourceLocations(item.sourceLocations.drop);
};

export const formatItemOtherLocations = (item: ItemIndexRecord) => {
  const locations = ITEM_SOURCE_TYPE_ORDER.filter(
    (sourceType) => sourceType !== "shop" && sourceType !== "drop",
  ).flatMap((sourceType) => item.sourceLocations[sourceType]);

  return formatItemSourceLocations(locations);
};

export const formatItemDropRates = (item: ItemIndexRecord) => {
  if (item.dropRates.length === 0) {
    return ITEM_ARCHIVE_COPY.unavailableDetail;
  }

  return item.dropRates.join(" / ");
};

export const buildItemRecordDisplay = (
  item: ItemIndexRecord,
): ItemRecordDisplay => ({
  dropLocations: formatItemDropLocations(item),
  dropRates: formatItemDropRates(item),
  otherLocations: formatItemOtherLocations(item),
  price: formatItemPrice(item),
  shopLocations: formatItemShopLocations(item),
  sourceLabel: formatItemSources(item),
});

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
