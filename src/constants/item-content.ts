import { buildItemDetailPath } from "@/constants/app-config";

export const ITEM_ARCHIVE_COPY = {
  title: "Items",
  body: "장비, 소비 아이템, 전투 기록에 등장하는 주요 아이템을 정리합니다.",
  unavailableDetail: "-",
} as const;

export const ITEM_CATEGORY_LABELS = {
  helmet: "투구",
  armor: "방어구",
  shield: "방패",
  accessory: "장신구",
  consumable: "소비 아이템",
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

const buildItemReference = (
  item: Omit<ItemReference, "href">,
): ItemReference => {
  return {
    ...item,
    href: buildItemDetailPath(item.id),
  };
};

const ITEM_VALUE_SUFFIX_PATTERN = /(\s\(x\d+\)|\*)/g;

const ITEM_REFERENCE_GAMES = ["suikoden-i", "suikoden-ii"] as const;

const ITEM_NAME_TRANSLATIONS = {
  "Angry Blow": "분노의 일격",
  Antitoxin: "해독제",
  Bandana: "밴대너",
  "BBQ Meat Bun": "바비큐 고기만두",
  "Belt of Strength": "힘의 벨트",
  "Beauties of Nature": "자연의 미",
  "Blue Flower Seeds": "파란 꽃씨",
  "Blue Paint": "파란 물감",
  "Blue Ribbon": "블루 리본",
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
  "Chest Plate": "체스트 플레이트",
  "Chirashi-Zushi": "지라시스시",
  Circlet: "서클릿",
  "Clay Guardian": "클레이 가디언",
  Collar: "목걸이",
  "Crab Cakes": "게살 케이크",
  "Crimson Cape": "진홍 망토",
  Croquettes: "크로켓",
  "Dancing Flames Scroll": "춤추는 불꽃 두루마리",
  "Defective Urn": "흠집 난 항아리",
  "Dragon Armor": "용 갑옷",
  "Earth Boots": "대지의 부츠",
  "Earth Rune Piece": "대지의 문장 조각",
  "Earth Shield": "대지의 방패",
  Emblem: "엠블럼",
  "Escape Talisman": "빠져나가기 부적",
  Feather: "깃털",
  "Feathered Hat": "깃털 모자",
  "Fire Emblem": "파이어 엠블럼",
  "Fire Wall": "파이어 월",
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
  "Gold Collar": "금 목걸이",
  "Gold Emblem": "골드 엠블럼",
  "Gold Necklace": "금목걸이",
  "Goddess Statue": "여신상",
  Graffiti: "낙서",
  Greaves: "그리브",
  "Grilled Beef": "소고기구이",
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
  "Iron Shield": "철 방패",
  "Japanese Dish": "일본 접시",
  "Karate Uniform": "도복",
  "Kindness Drops": "친절의 물방울",
  "Kite Shield": "카이트 실드",
  "Leather Armor": "레더 아머",
  "Leather Cape": "가죽 망토",
  "Leather Coat": "가죽 코트",
  "Leather Hat": "가죽 모자",
  Leggings: "레깅스",
  "Lovers' Garden": "연인의 정원",
  "Magic Ring": "매직 링",
  "Magic Robe": "매직 로브",
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
  "Ninja Suit": "닌자복",
  "Ninja Garb": "닌자복",
  Obento: "도시락",
  "Octopus Pot": "문어 항아리",
  "Peeing Boy": "오줌싸개 동상",
  "Pointy Hat": "뾰족 모자",
  "Pointed Hat": "뾰족 모자",
  "Power Gloves": "파워 글러브",
  "Power Ring": "파워 링",
  Robe: "로브",
  "Robe of Mist": "안개의 로브",
  "Rose Brooch": "장미 브로치",
  "Sacrificial Buddha": "대역지장보살",
  "Sacrificial Jizo": "대역지장보살",
  "Scale Mail": "스케일 메일",
  "Shoulder Pads": "어깨 보호대",
  "Silver Hat": "은모자",
  Silverlet: "실버릿",
  "Skill Ring": "스킬 링",
  "Speed Ring": "스피드 링",
  "Sound Set 3": "음 세트 3",
  "Spicy Pilaf": "매운 필라프",
  "Star Earrings": "별 귀걸이",
  "Steamed Abalone": "전복찜",
  "Steamed Gyoza": "찐교자",
  "Steel Shield": "철 방패",
  "Sun Badge": "선 배지",
  "Taikyoku Wear": "태극복",
  Tempura: "튀김",
  "The Shredding": "더 슈레딩",
  "Thunder God's Garb": "뇌신의 옷",
  "Thunder Runner": "썬더 러너",
  "Toe Shoes": "토우슈즈",
  Tunic: "튜닉",
  "Veggie Sandwich": "채소 샌드위치",
  "Water Amulet": "물의 부적",
  "Wind Hat": "바람 모자",
  "Wind of Sleep Scroll": "잠의 바람 두루마리",
  "Windspun Armor": "바람 갑옷",
  "Wing Boots": "윙 부츠",
  "Winged Boots": "윙 부츠",
  "Wooden Shield": "나무 방패",
  "Wooden Shoes": "나무신",
  "Yellow Flower Seeds": "노란 꽃씨",
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
  return name.replace(ITEM_VALUE_SUFFIX_PATTERN, "").trim();
};

const buildItemValueSuffix = (name: string) => {
  return [...name.matchAll(ITEM_VALUE_SUFFIX_PATTERN)]
    .map(([suffix]) => suffix.trim())
    .join("");
};

const inferItemCategory = (name: string): ItemCategoryId => {
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
    /blow|cakes|cream|drops|eel|fish|gyoza|medicine|meat|obento|omelet|pilaf|sandwich|scroll|tempura|wall|wind/i
      .test(name)
  ) {
    return "consumable";
  }

  return "accessory";
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
