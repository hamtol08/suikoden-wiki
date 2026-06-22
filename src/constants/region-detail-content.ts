export const REGION_DETAIL_COPY = {
  sectionTitle: "지역 기록",
  recruitableTitle: "합류 인물",
  shopTitle: "상점 기록",
  enemyTitle: "출연 몬스터",
  villageSuffix: "마을",
  priceLabel: "가격",
  priceCurrency: "potch",
  dropLabel: "드랍",
  chanceLabel: "획득 확률",
  earlyGame: "○ 초반 획득 가능",
  lateGame: "• 엔딩 전 획득 가능",
  alwaysAvailable: "상시 획득 가능",
} as const;

export const REGION_SHOP_NAME_LABELS = {
  Armorer: "방어구점",
  "Item Shop": "아이템 상점",
} as const;

export const REGION_DROP_CHANCE_LABELS = {
  High: `${REGION_DETAIL_COPY.chanceLabel} 높음`,
  Medium: `${REGION_DETAIL_COPY.chanceLabel} 보통`,
  Low: `${REGION_DETAIL_COPY.chanceLabel} 낮음`,
  None: "-",
} as const;

export type RegionShopItemAvailability = "early" | "late" | "always";

export type RegionShopItem = {
  name: string;
  price: number;
  availability?: RegionShopItemAvailability;
};

export type RegionShopRecord = {
  name: string;
  items: readonly RegionShopItem[];
};

export type RegionEnemyDrop = {
  item: string;
  chance: "High" | "Medium" | "Low" | "None";
};

export type RegionEnemyRecord = {
  name: string;
  phase?: string;
  drops: readonly RegionEnemyDrop[];
};

export type RegionDetailRecord = {
  shops?: readonly RegionShopRecord[];
  enemies?: readonly RegionEnemyRecord[];
};

export const MONSTER_NAME_TRANSLATIONS = {
  Crow: "까마귀",
  Mosquito: "모스키토",
  Furball: "북실북실",
  "Red Soldier Ant": "붉은 병정개미",
  "Wild Boar": "멧돼지",
  "Ninja Master": "상급 닌자",
  "Empire Soldier (Sword)": "제국병(검)",
  "Empire Soldier (Spear)": "제국병(창)",
  "Empire Soldier (Bow)": "제국병(활)",
  "Killer Rabbit": "살인 토끼",
  "Flying Squirrel": "날다람쥐",
  "Beast Commander": "야수 지휘관",
  Roc: "괴조 로크",
  "Holly Boy": "호랑가시 소년",
  "Holly Spirit": "호랑가시 정령",
  "Holly Master": "호랑가시 주술사",
  "Kobold (Sword)": "코볼트(검)",
  "Kobold (Bow)": "코볼트(활)",
  "Mad Ivy": "광기의 담쟁이",
  Creeper: "덩굴 괴물",
  "Veteran Soldier (Bow)": "고참병(활)",
  "Veteran Soldier (Spear)": "고참병(창)",
  "Veteran Soldier (Female)": "고참병(여성)",
  "Devil Armor": "악마 갑옷",
  "Devil Shield": "악마 방패",
  Siren: "세이렌",
  "Elite Soldier": "정예병",
  Kerberos: "케르베로스",
  "Hell Hound": "지옥견",
  "Whip Master": "채찍술사",
  Ninja: "닌자",
  Magus: "마도사",
  Mirage: "환영",
  "Rabbit Bird": "토끼새",
  "Earth Golem": "대지 골렘",
  Simurgh: "시무르그",
  Orc: "오크",
  까마귀: "까마귀",
  모기: "모스키토",
  퍼볼: "북실북실",
  붉은병정개미: "붉은 병정개미",
  멧돼지: "멧돼지",
  닌자마스터: "닌자 마스터",
  시무르그: "시무르그",
  오크: "오크",
} as const;

export const translateMonsterName = (name: string) => {
  const normalizedName = name.replace(/\s+/g, "");
  const translations = MONSTER_NAME_TRANSLATIONS as Record<string, string>;

  return translations[name] ?? translations[normalizedName] ?? name;
};

export const buildRegionDetailKey = (gameId: string, regionId: string) =>
  `${gameId}:${regionId}`;

export const REGION_CHARACTER_LOCATION_ALIASES = {
  "suikoden-i:great-forest": ["대삼림", "대삼림 마을"],
  "suikoden-i:toran-castle": ["본거지", "트란 성"],
  "suikoden-ii:banner-village": ["바나 마을", "Bana Village"],
  "suikoden-ii:crom": ["크롬", "크롬 마을"],
  "suikoden-ii:drakemouth-village": [
    "용의 입 마을",
    "드레이크마우스 마을",
    "Drakemouth Village",
  ],
  "suikoden-ii:kyaro": ["캐로", "캐로 마을"],
  "suikoden-ii:lakewest": ["레이크웨스트", "레이크웨스트 마을"],
  "suikoden-ii:ryube": ["류베", "류베 마을"],
  "suikoden-ii:tigermouth-village": [
    "호랑이 입 마을",
    "호랑이 입 산길",
    "타이거마우스 마을",
    "타이거마우스 산길",
    "Tigermouth Village",
  ],
  "suikoden-ii:toto": ["토토", "토토 마을"],
} as const;

export const REGION_DETAIL_RECORDS = {
  "suikoden-i:gregminster": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100, availability: "early" },
          { name: "Antitoxin", price: 200, availability: "early" },
          { name: "Escape Talisman", price: 500, availability: "late" },
          { name: "Mega Medicine", price: 500, availability: "late" },
          { name: "Sacrificial Buddha", price: 5000, availability: "late" },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Bandana", price: 50, availability: "early" },
          { name: "Wooden Shoes", price: 100, availability: "early" },
          { name: "Robe", price: 100, availability: "early" },
          { name: "Tunic", price: 200, availability: "early" },
          { name: "Headband", price: 300, availability: "early" },
          { name: "Fur Robe", price: 700, availability: "early" },
          { name: "Guard Ring", price: 8500, availability: "late" },
          { name: "Cape of Darkness", price: 8500, availability: "late" },
          { name: "Winged Boots", price: 10200, availability: "early" },
          { name: "Silver Hat", price: 27000, availability: "late" },
          { name: "Dragon Armor", price: 37000, availability: "late" },
          { name: "Full Armor", price: 57000, availability: "late" },
          { name: "Earth Shield", price: 68000, availability: "late" },
          { name: "Master's Robe", price: 78000, availability: "late" },
        ],
      },
    ],
    enemies: [
      { name: "Crow", phase: "초반 필드", drops: [{ item: "Bandana", chance: "High" }] },
      {
        name: "Mosquito",
        phase: "초반 필드",
        drops: [
          { item: "Medicine", chance: "High" },
          { item: "Holy Rune", chance: "Medium" },
        ],
      },
      {
        name: "Furball",
        phase: "초반 필드",
        drops: [
          { item: "Defective Urn", chance: "High" },
          { item: "Celadon Urn", chance: "Low" },
          { item: "Octopus Pot", chance: "Medium" },
        ],
      },
      { name: "Red Soldier Ant", phase: "초반 필드", drops: [{ item: "-", chance: "None" }] },
      { name: "Wild Boar", phase: "초반 필드", drops: [{ item: "Earth Rune Piece", chance: "High" }] },
      { name: "Ninja Master", phase: "후반 필드", drops: [{ item: "Crimson Cape", chance: "High" }] },
      { name: "Simurgh", phase: "후반 필드", drops: [{ item: "Thunder Rune", chance: "High" }] },
      {
        name: "Orc",
        phase: "후반 필드",
        drops: [
          { item: "Beauties of Nature", chance: "Low" },
          { item: "Lovers' Garden", chance: "Medium" },
          { item: "Graffiti", chance: "High" },
        ],
      },
    ],
  },
  "suikoden-i:rockland": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Antitoxin", price: 200 },
          { name: "Escape Talisman", price: 500 },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Greaves", price: 200 },
          { name: "Tunic", price: 200 },
          { name: "Wooden Shield", price: 300 },
          { name: "Gloves", price: 300 },
          { name: "Headband", price: 300 },
          { name: "Fur Robe", price: 700 },
        ],
      },
    ],
  },
  "suikoden-i:lenankamp": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Antitoxin", price: 200 },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Tunic", price: 200 },
          { name: "Headband", price: 300 },
          { name: "Cape", price: 400 },
          { name: "Circlet", price: 600 },
          { name: "Fur Robe", price: 700 },
          { name: "Chest Plate", price: 1000 },
          { name: "Pointy Hat", price: 1200 },
        ],
      },
    ],
    enemies: [
      { name: "Empire Soldier (Sword)", phase: "레난캄프", drops: [{ item: "-", chance: "None" }] },
      { name: "Empire Soldier (Spear)", phase: "레난캄프", drops: [{ item: "-", chance: "None" }] },
      { name: "Empire Soldier (Bow)", phase: "레난캄프", drops: [{ item: "-", chance: "None" }] },
    ],
  },
  "suikoden-i:sarady": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Water Rune", price: 7000 },
        ],
      },
    ],
  },
  "suikoden-i:seika": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Antitoxin", price: 200 },
          { name: "Water Rune", price: 7000 },
        ],
      },
    ],
    enemies: [
      { name: "Empire Soldier (Sword)", phase: "세이카", drops: [{ item: "-", chance: "None" }] },
      {
        name: "Empire Soldier (Spear)",
        phase: "세이카",
        drops: [
          { item: "Flower Vase", chance: "Medium" },
          { item: "Defective Urn", chance: "High" },
        ],
      },
      {
        name: "Killer Rabbit",
        phase: "세이카 주변",
        drops: [
          { item: "Peeing Boy", chance: "Low" },
          { item: "Hex Doll", chance: "High" },
          { item: "Japanese Dish", chance: "Medium" },
        ],
      },
      { name: "Flying Squirrel", phase: "세이카 주변", drops: [{ item: "Holy Rune", chance: "High" }] },
      {
        name: "Beast Commander",
        phase: "세이카 주변",
        drops: [
          { item: "Blue Ribbon", chance: "High" },
          { item: "Phero Rune", chance: "Medium" },
        ],
      },
      { name: "Roc", phase: "세이카 주변", drops: [{ item: "Feather", chance: "High" }] },
    ],
  },
  "suikoden-i:kaku": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Antitoxin", price: 200 },
          { name: "Escape Talisman", price: 500 },
          { name: "Holy Rune", price: 5000 },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Gloves", price: 300 },
          { name: "Wooden Shield", price: 300 },
          { name: "Cape", price: 400 },
          { name: "Fur Robe", price: 700 },
          { name: "Chest Plate", price: 1000 },
          { name: "Pointy Hat", price: 1200 },
          { name: "Guard Robe", price: 1700 },
          { name: "Shoulder Pads", price: 2000 },
        ],
      },
    ],
    enemies: [
      {
        name: "Killer Rabbit",
        phase: "카쿠 주변",
        drops: [
          { item: "Peeing Boy", chance: "Low" },
          { item: "Hex Doll", chance: "High" },
          { item: "Japanese Dish", chance: "Medium" },
        ],
      },
      { name: "Flying Squirrel", phase: "카쿠 주변", drops: [{ item: "Holy Rune", chance: "High" }] },
      {
        name: "Beast Commander",
        phase: "카쿠 주변",
        drops: [
          { item: "Blue Ribbon", chance: "High" },
          { item: "Phero Rune", chance: "Medium" },
        ],
      },
      { name: "Roc", phase: "카쿠 주변", drops: [{ item: "Feather", chance: "High" }] },
    ],
  },
  "suikoden-i:kouan": {
    shops: [
      {
        name: "Armorer",
        items: [
          { name: "Boots", price: 800 },
          { name: "Blue Ribbon", price: 1150 },
          { name: "Gauntlet", price: 1700 },
          { name: "Emblem", price: 2700 },
          { name: "Martial Arts Robe", price: 3000 },
          { name: "Leather Armor", price: 5900 },
          { name: "Iron Shield", price: 7300 },
        ],
      },
    ],
  },
  "suikoden-i:great-forest": {
    enemies: [
      {
        name: "Holly Boy",
        phase: "대삼림",
        drops: [
          { item: "Flower Painting", chance: "Medium" },
          { item: "Lovers' Garden", chance: "Low" },
          { item: "Graffiti", chance: "High" },
        ],
      },
      {
        name: "Holly Spirit",
        phase: "대삼림",
        drops: [
          { item: "Toe Shoes", chance: "Medium" },
          { item: "Needle", chance: "High" },
        ],
      },
      { name: "Kobold (Sword)", phase: "대삼림", drops: [{ item: "Wooden Shield", chance: "High" }] },
      {
        name: "Kobold (Bow)",
        phase: "대삼림",
        drops: [
          { item: "Collar", chance: "High" },
          { item: "Medicine", chance: "Medium" },
        ],
      },
    ],
  },
  "suikoden-i:dwarf-village": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Mega Medicine", price: 500 },
          { name: "Turtle Rune", price: 15000 },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Chest Plate", price: 1000 },
          { name: "Fur Cape", price: 2800 },
          { name: "Half Helmet", price: 3300 },
          { name: "Leather Armor", price: 5900 },
          { name: "Half Armor", price: 8700 },
        ],
      },
    ],
  },
  "suikoden-i:antei": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Needle", price: 200 },
          { name: "Mega Medicine", price: 500 },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Toe Shoes", price: 2800 },
          { name: "Half Helmet", price: 3300 },
          { name: "Headgear", price: 6500 },
          { name: "Rose Brooch", price: 7000 },
          { name: "Guard Ring", price: 8500 },
          { name: "Magic Robe", price: 15000 },
          { name: "Ninja Garb", price: 22000 },
        ],
      },
    ],
  },
  "suikoden-i:teien": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Yellow Flower Seeds", price: 200 },
          { name: "Yellow Paint", price: 500 },
          { name: "Mega Medicine", price: 500 },
          { name: "Killer Rune", price: 8000 },
        ],
      },
    ],
    enemies: [
      {
        name: "Holly Master",
        phase: "테이엔 주변",
        drops: [
          { item: "Magic Robe", chance: "Low" },
          { item: "Needle", chance: "Medium" },
          { item: "Nameless Urn", chance: "High" },
        ],
      },
      { name: "Mad Ivy", phase: "테이엔 주변", drops: [{ item: "Headgear", chance: "High" }] },
      { name: "Creeper", phase: "테이엔 주변", drops: [{ item: "Earth Rune", chance: "High" }] },
    ],
  },
  "suikoden-i:rikon": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100 },
          { name: "Blue Flower Seeds", price: 200 },
          { name: "Antitoxin", price: 200 },
          { name: "Blue Paint", price: 500 },
          { name: "Earth Rune", price: 6000 },
        ],
      },
    ],
    enemies: [
      {
        name: "Holly Master",
        phase: "리콘 주변",
        drops: [
          { item: "Magic Robe", chance: "Low" },
          { item: "Needle", chance: "Medium" },
          { item: "Nameless Urn", chance: "High" },
        ],
      },
      { name: "Mad Ivy", phase: "리콘 주변", drops: [{ item: "Headgear", chance: "High" }] },
      { name: "Creeper", phase: "리콘 주변", drops: [{ item: "Earth Rune", chance: "High" }] },
    ],
  },
  "suikoden-i:pannu-yakuta": {
    enemies: [
      { name: "Veteran Soldier (Bow)", phase: "판누 야쿠타", drops: [{ item: "Emblem", chance: "High" }] },
      { name: "Veteran Soldier (Spear)", phase: "판누 야쿠타", drops: [{ item: "Leather Armor", chance: "High" }] },
      { name: "Veteran Soldier (Female)", phase: "판누 야쿠타", drops: [{ item: "-", chance: "None" }] },
      { name: "Devil Armor", phase: "판누 야쿠타", drops: [{ item: "Main-Gauche", chance: "High" }] },
      { name: "Devil Shield", phase: "판누 야쿠타", drops: [{ item: "Chaos Shield", chance: "High" }] },
    ],
  },
  "suikoden-i:shasarazade": {
    enemies: [
      {
        name: "Siren",
        phase: "샤사라자드",
        drops: [
          { item: "Sound Set 3", chance: "High" },
          { item: "Flowing Rune", chance: "Medium" },
        ],
      },
      {
        name: "Elite Soldier",
        phase: "샤사라자드",
        drops: [
          { item: "Horned Helmet", chance: "Medium" },
          { item: "Mega Medicine", chance: "High" },
        ],
      },
      { name: "Kerberos", phase: "샤사라자드", drops: [{ item: "Gold Collar", chance: "High" }] },
    ],
  },
  "suikoden-i:moravia-castle": {
    enemies: [
      { name: "Hell Hound", phase: "모라비아 성", drops: [{ item: "-", chance: "None" }] },
      { name: "Elite Soldier", phase: "모라비아 성", drops: [{ item: "Rage Rune", chance: "High" }] },
      {
        name: "Whip Master",
        phase: "모라비아 성",
        drops: [
          { item: "Hex Doll", chance: "High" },
          { item: "Bonsai Tree", chance: "Medium" },
          { item: "Goddess Statue", chance: "Low" },
        ],
      },
      {
        name: "Ninja",
        phase: "모라비아 성",
        drops: [
          { item: "Cape of Darkness", chance: "High" },
          { item: "Winged Boots", chance: "Medium" },
        ],
      },
      { name: "Magus", phase: "모라비아 성", drops: [{ item: "Fortune Rune", chance: "High" }] },
      { name: "Mirage", phase: "모라비아 성", drops: [{ item: "Speed Ring", chance: "High" }] },
      { name: "Rabbit Bird", phase: "모라비아 성", drops: [{ item: "Sacrificial Buddha", chance: "High" }] },
      { name: "Earth Golem", phase: "모라비아 성", drops: [{ item: "Master's Garb", chance: "High" }] },
    ],
  },
  "suikoden-ii:gregminster": {
    shops: [
      {
        name: "Item Shop",
        items: [
          { name: "Medicine", price: 100, availability: "early" },
          { name: "Antitoxin", price: 200, availability: "early" },
          { name: "Escape Talisman", price: 500, availability: "late" },
          { name: "Mega Medicine", price: 500, availability: "late" },
          { name: "Sacrificial Buddha", price: 5000, availability: "late" },
        ],
      },
      {
        name: "Armorer",
        items: [
          { name: "Bandana", price: 50, availability: "early" },
          { name: "Wooden Shoes", price: 100, availability: "early" },
          { name: "Robe", price: 100, availability: "early" },
          { name: "Tunic", price: 200, availability: "early" },
          { name: "Headband", price: 300, availability: "early" },
          { name: "Fur Robe", price: 700, availability: "early" },
          { name: "Guard Ring", price: 8500, availability: "late" },
          { name: "Cape of Darkness", price: 8500, availability: "late" },
          { name: "Winged Boots", price: 10200, availability: "early" },
          { name: "Silver Hat", price: 27000, availability: "late" },
          { name: "Dragon Armor", price: 37000, availability: "late" },
          { name: "Full Armor", price: 57000, availability: "late" },
          { name: "Earth Shield", price: 68000, availability: "late" },
          { name: "Master's Robe", price: 78000, availability: "late" },
        ],
      },
    ],
  },
} as const satisfies Record<string, RegionDetailRecord>;

export const getRegionDetailRecord = (gameId: string, regionId: string) => {
  const records = REGION_DETAIL_RECORDS as Record<string, RegionDetailRecord>;

  return records[buildRegionDetailKey(gameId, regionId)] ?? null;
};

export const getRegionCharacterLocationAliases = (
  gameId: string,
  regionId: string,
) => {
  return REGION_CHARACTER_LOCATION_ALIASES[
    buildRegionDetailKey(
      gameId,
      regionId,
    ) as keyof typeof REGION_CHARACTER_LOCATION_ALIASES
  ] ?? [];
};
