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
import { GAME8_ITEM_SOURCE_RECORDS } from "@/constants/game8-item-source-records";

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
  searchLabel: "Item search",
  searchPlaceholder: "아이템 이름, 영문 표기, 분류, 입수처 검색",
  resultCountSuffix: "개 아이템",
  resultCount: (count: number) => `${count.toLocaleString("ko-KR")}개 아이템`,
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
    englishName: "EN",
    japaneseName: "JP",
    originalName: "영문 표기",
    games: "등장 작품",
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
};

export type ItemDetailRecord = {
  id: string;
  name: string;
  category: ItemCategoryId;
  games: readonly ItemIndexGameId[];
  originalNames: readonly string[];
  japaneseNames: readonly string[];
  descriptionLines: readonly string[];
  effectLines: readonly string[];
  gameRecords: readonly ItemIndexRecord[];
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

const ITEM_NORMALIZATION_SUFFIX_PATTERN = /(\s\(x\d+\)|\*|\s\/Imported Data)/g;

const ITEM_EMPTY_VALUES = new Set(["", "-", "[none]", "None", "None.", "N/A"]);

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
  "Blue Dragon Urn": "青竜のつぼ",
  "Fire Rune Piece": "火の紋章片",
} as const;

const ITEM_DETAIL_DESCRIPTIONS = {
  medicine: [
    "가장 기본적인 회복용 소비 아이템입니다.",
    "전투 중 또는 이동 중에 사용해 아군 한 명의 HP를 회복하는 초반 핵심 보급품으로 정리합니다.",
  ],
} as const satisfies Partial<Record<string, readonly string[]>>;

const ITEM_DETAIL_EFFECTS = {
  medicine: ["아군 한 명의 HP를 100 회복합니다."],
} as const satisfies Partial<Record<string, readonly string[]>>;

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
  "Moonlight Weed": "월광초",
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
  "Window Rune": "창문의 문장",
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
  "Cave of the Past x2": "과거의 동굴 x2",
  "Cave of the Wind": "바람의 동굴",
  "Clean the Mercenary Fortress": "용병 요새 청소",
  "Coronet Town": "코로네",
  "Crom Village": "크롬",
  "Dragon Knights' Fortress": "용기사의 요새",
  "Dragon's Den": "용동",
  "Drakemouth Village": "드래곤마우스 마을",
  "Dwarf Trail": "드워프 산길",
  "Dwarves' Vault": "드워프 금고",
  "Dwarves' Vault x2": "드워프 금고 x2",
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
  "Highway Village": "호랑이 입 산길 마을",
  "Kaku": "카쿠",
  "Kalekka": "카렉카",
  "Kirov": "키로프",
  "Kobold Village": "코볼트 마을",
  "Kobold Village Forest": "코볼트마을 숲",
  "Kouan": "코안",
  "Kouan Military Government Office": "코안 군정청",
  "Kuskus Town": "쿠스쿠스",
  "Kyaro Town": "캐로",
  "Lakewest Town": "레이크웨스트",
  "Lenankamp": "레난캄프",
  "Lepant's Mansion": "레판토의 저택",
  "L'Renouille": "르누이유",
  "Luikan's Hermitage": "리우칸의 암자",
  "Magician's Island": "마술사의 섬",
  "Mercenary Fortress": "용병 요새",
  "Moravia Castle": "모라비아 성",
  "Mt. Rakutei": "라쿠테이 산",
  "Mt. Seifu": "세이후 산",
  "Mt. Seifu x2": "세이후 산 x2",
  "Mt. Tigerwolf": "타이거울프 산",
  "Mt. Tigerwolf x2": "타이거울프 산 x2",
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
  "Purchase in Ryube Village": "류베에서 구매",
  "Qlon Temple": "클론 사원",
  "Radat Town": "라다트",
  "Recruit Hai Yo": "하이 요 합류",
  "Recruit Hellion": "헬리온 합류",
  "Recruit Templeton": "템플턴 합류",
  "Recruit Tuta, then talk to Dr. Huan": "튜타 합류 후 후안에게 대화",
  "Rikon": "리콘",
  "Rockaxe": "록액스",
  "Rockaxe Castle": "록액스 성",
  "Rockland Military Government Office": "록랜드 군정청",
  "Rockland": "록랜드",
  "Rokkaku Hamlet": "롯카쿠 마을",
  "Ryube Forest": "류베 숲",
  "Ryube Village": "류베",
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
  "Tigermouth Village": "호랑이 입 산길 마을",
  "Tinto City": "틴토",
  "Tinto Mines": "틴토 광산",
  "Tinto Pass": "틴토 고개",
  "Toran Lake Castle": "트란 성",
  "Toto Village": "토토",
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
    .map((price) => price.toLocaleString("ko-KR"))
    .join(" / ")} 포치`;
};

const sortItemRecords = (items: readonly ItemIndexRecord[]) => {
  return [...items].sort((left, right) =>
    left.name.localeCompare(right.name, "ko-KR"),
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
    left.localeCompare(right, "ko-KR"),
  ),
  drop: [...sourceLocations.drop].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  found: [...sourceLocations.found].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  treasure: [...sourceLocations.treasure].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  trade: [...sourceLocations.trade].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  minigame: [...sourceLocations.minigame].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  gds: [...sourceLocations.gds].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
  ),
  other: [...sourceLocations.other].sort((left, right) =>
    left.localeCompare(right, "ko-KR"),
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

const createItemRecordDraft = (
  game: ItemIndexGameId,
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
    itemReference?.name ??
    buildSealedOrbItemName(originalName) ??
    translateGeneratedItemName(originalName);
  const category =
    categoryOverride ?? itemReference?.category ?? inferItemCategory(originalName);

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
  const created = createItemRecordDraft(game, rawName, categoryOverride);

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

        getOrCreateItemRecordDraft(records, gameId, equipmentName);
      });
    });
  });
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
        addItemSourceLocation(
          item,
          sourceType,
          formatGame8SourceLocation(sourceType, translatedEntry),
        );
      });
    });

    sourceRecord.shopPrices.forEach((price) => item.prices.add(price));
  });
};

const buildItemIndexRecords = () => {
  const records = new Map<string, ItemRecordDraft>();
  const regionRecords = REGION_DETAIL_RECORDS as Record<
    string,
    RegionDetailRecord
  >;

  addGame8ItemSourceRecords(records);

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
        left.localeCompare(right, "ko-KR"),
      ),
      sourceLocations: sortItemSourceLocations(record.sourceLocations),
      dropRates: [...record.dropRates].sort((left, right) =>
        left.localeCompare(right, "ko-KR"),
      ),
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
    descriptionLines: ITEM_DETAIL_DESCRIPTIONS[
      itemId as keyof typeof ITEM_DETAIL_DESCRIPTIONS
    ] ?? [
      `${gameRecords
        .map((item) => getItemIndexPage(item.game).title)
        .join(" / ")}에 등장하는 ${ITEM_CATEGORY_LABELS[firstRecord.category]}입니다.`,
    ],
    effectLines: ITEM_DETAIL_EFFECTS[
      itemId as keyof typeof ITEM_DETAIL_EFFECTS
    ] ?? [],
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
          ];

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
