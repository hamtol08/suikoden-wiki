/**
 * 지역 상세 페이지의 마을, 던전, 시설, 몬스터 데이터를 정의합니다.
 */

import {
  FACILITY_ROLE_DESCRIPTIONS,
  getFacilityLabel,
  getFacilityRoleLabel,
  resolveFacilityRole,
  type FacilityRoleKey,
} from "@/constants/shared/facility-content";

export const REGION_DETAIL_COPY = {
  sectionTitle: "지역 기록",
  summaryTitle: "요약",
  recruitableTitle: "합류 인물",
  facilityTitle: "상점 및 시설 역할",
  facilityBody:
    "시설은 판매 품목만이 아니라 회복, 저장, 문장 정비, 아이템 보관, 정보 확인 같은 진행 편의를 담당합니다. 실제 판매 품목은 상점 기록에서 확인합니다.",
  facilityDefaultLabel: "지역 기본 기능",
  facilityItemCountSuffix: "개",
  facilityRecordLabel: "시설 기록",
  facilityShopLinkLabel: "상점 기록 보기",
  facilityShopItemsLabel: "판매 품목",
  shopTitle: "상점 기록",
  enemyTitle: "필드 출연 몬스터",
  acquisitionTitle: "획득 기록",
  recruitableCountLabel: "합류 인물",
  facilityCountLabel: "시설",
  shopCountLabel: "상점",
  shopItemCountLabel: "상점 품목",
  enemyCountLabel: "필드 출연 몬스터",
  enemyDropCountLabel: "몬스터 드롭",
  acquisitionCountLabel: "획득 아이템",
  villageSuffix: "마을",
  priceLabel: "가격",
  priceCurrency: "포치",
  dropLabel: "드롭",
  chanceLabel: "획득 확률",
  noDrop: "드롭 기록 없음",
  earlyGame: "○ 초반 획득 가능",
  lateGame: "• 엔딩 전 획득 가능",
  alwaysAvailable: "상시 획득 가능",
} as const;

export const REGION_DETAIL_ANCHORS = {
  shops: "region-shop-records",
} as const;

export const REGION_FACILITY_ROLE_DESCRIPTIONS = FACILITY_ROLE_DESCRIPTIONS;

export const REGION_DEFAULT_FACILITY_ROLES_BY_CATEGORY = {
  "Border Village": ["inn", "itemShop", "save"],
  Capital: ["inn", "itemShop", "armorShop", "save"],
  "Castle Town": ["inn", "itemShop", "armorShop", "save"],
  "City-State": ["inn", "itemShop", "armorShop", "save"],
  Headquarters: ["tavern", "storage", "inn", "itemShop", "armorShop", "blacksmith", "runeShop", "save"],
  Hometown: ["inn", "itemShop", "save"],
  "Mining City-State": ["inn", "itemShop", "trade", "save"],
  "Mountain Village": ["inn", "itemShop", "save"],
  "Opening Front": ["storage", "save"],
  "Port Town": ["inn", "itemShop", "port", "save"],
  "River Town": ["inn", "itemShop", "port", "save"],
  "Ruined Town": ["storage", "inn", "itemShop", "save"],
  Settlement: ["inn", "itemShop", "save"],
  Town: ["inn", "itemShop", "save"],
  "Toran Capital": ["inn", "itemShop", "armorShop", "save"],
  Village: ["inn", "itemShop", "save"],
} as const satisfies Partial<Record<string, readonly FacilityRoleKey[]>>;

export const getRegionFacilityLabel = getFacilityLabel;

export const getRegionFacilityRoleLabel = getFacilityRoleLabel;

export const resolveRegionFacilityRole = resolveFacilityRole;

export const REGION_DROP_CHANCE_LABELS = {
  High: `${REGION_DETAIL_COPY.chanceLabel} 높음`,
  Medium: `${REGION_DETAIL_COPY.chanceLabel} 보통`,
  Low: `${REGION_DETAIL_COPY.chanceLabel} 낮음`,
  None: "-",
} as const;

export type RegionShopItemAvailability = "early" | "late" | "always";

export const REGION_SHOP_AVAILABILITY_LABELS: Record<
  RegionShopItemAvailability,
  string
> = {
  always: REGION_DETAIL_COPY.alwaysAvailable,
  early: REGION_DETAIL_COPY.earlyGame,
  late: REGION_DETAIL_COPY.lateGame,
} as const;

export type RegionShopItem = {
  name: string;
  price: number;
  availability?: RegionShopItemAvailability;
};

export type RegionShopRecord = {
  name: string;
  items: readonly RegionShopItem[];
};

export type RegionFacilityRecord = {
  name: string;
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
  facilities?: readonly RegionFacilityRecord[];
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
  "Empire Soldier (Female)": "제국병(여성)",
  "Imperial Guard (Male)": "제국 근위병(남성)",
  "Robot Soldier (Sword)": "로봇 병사(검)",
  "Robot Soldier (Spear)": "로봇 병사(창)",
  "Death Machine (Sword)": "죽음의 기계(검)",
  "Death Machine (Spear)": "죽음의 기계(창)",
  "Bandit (Bow)": "산적(활)",
  "Bandit (Sword) (2)": "산적(검)",
  "Bandit A": "산적 A",
  "Bandit B": "산적 B",
  "Bandit C": "산적 C",
  "Highlands (Bow)": "하이랜드병(활)",
  "Highlands (Spear)": "하이랜드병(창)",
  "Highlands (Sword)": "하이랜드병(검)",
  "Killer Rabbit": "살인 토끼",
  "Slasher Rabbit": "칼날 토끼",
  "Flying Squirrel": "날다람쥐",
  "Beast Commander": "야수 지휘관",
  Roc: "괴조 로크",
  "Holly Boy": "호랑가시 소년",
  PapaHolly: "호랑가시 아버지",
  GrandHolly: "거대 호랑가시",
  HollyElf: "호랑가시 엘프",
  "Holly Spirit": "호랑가시 정령",
  "Holly Master": "호랑가시 주술사",
  "Holly Fairy": "호랑가시 요정",
  "Kobold (Sword)": "코볼트(검)",
  "Kobold (Bow)": "코볼트(활)",
  "Kobold (Mage)": "코볼트(마법사)",
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
  "Air Lizard": "공중 도마뱀",
  Assassin: "암살자",
  Armadilloid: "아르마딜로이드",
  Armadillon: "아르마딜론",
  Banshee: "밴시",
  "Black Elemental": "검은 정령",
  BonBon: "봉봉",
  Bronzem: "브론젬",
  Chimera: "키메라",
  "Clay Doll": "흙 인형",
  Colossus: "콜로서스",
  Commander: "지휘관",
  Cockatrice: "코카트리스",
  "Copper Sun": "코퍼 선",
  "Crimson Dwarf": "붉은 드워프",
  Culgan: "컬건",
  Dagon: "다곤",
  DarkBunny: "어둠 토끼",
  "Death Boar": "데스 보어",
  "Demon Hound": "악마 사냥개",
  "Demon Sorcerer": "악마 주술사",
  DevilEye: "데빌 아이",
  "DoReMi Elf (Aqua)": "도레미 엘프(아쿠아)",
  "DoReMi Elf (Blue)": "도레미 엘프(파랑)",
  "DoReMi Elf (Green)": "도레미 엘프(초록)",
  "DoReMi Elf (Pink)": "도레미 엘프(분홍)",
  "DoReMi Elf (Red)": "도레미 엘프(빨강)",
  "DoReMi Elf (Yellow)": "도레미 엘프(노랑)",
  Dragon: "드래곤",
  Dwarf: "드워프",
  "Eagle Man": "독수리 인간",
  Ekidonna: "에키돈나",
  EyeFlower: "눈꽃",
  "Fei Yu": "페이 유",
  Fisheye: "피시아이",
  FurFur: "퍼퍼",
  "Ghost Armor": "유령 갑옷",
  GhostSlug: "유령 민달팽이",
  "Giant Slug": "거대 민달팽이",
  "Giant Snail": "거대 달팽이",
  Gigantes: "기간테스",
  GoldBoar: "황금 멧돼지",
  Gorudo: "고르도",
  "Grave Master": "무덤 주인",
  Griffin: "그리핀",
  "Grizzly Bear": "회색곰",
  "Hawk Man": "매 인간",
  HawkMan: "호크맨",
  "Hell Unicorn": "지옥 유니콘",
  Hippogriff: "히포그리프",
  IronClaw: "철발톱",
  IronMoon: "아이언 문",
  Ivy: "담쟁이",
  KillSpider: "킬러 거미",
  "Killer Slime": "킬러 슬라임",
  KillerBee: "킬러 벌",
  KillerDog: "킬러 도그",
  Kookaburra: "쿠카부라",
  LandShark: "랜드 샤크",
  Larvae: "유충",
  Leathercut: "레더컷",
  "Li Lan": "리 란",
  "M-Knight": "마법 기사",
  "Magic Shield": "마법 방패",
  Magician: "마법사",
  MegaWatt: "메가와트",
  Melonzoo: "멜론주",
  Minos: "미노스",
  Minotaurus: "미노타우로스",
  "Mist Shade (Female)": "안개 그림자(여성)",
  "Mist Shade (Male)": "안개 그림자(남성)",
  Monwer: "몬워",
  "Mr.Venus": "미스터 비너스",
  Nariqua: "나리쿠아",
  Neclord: "네크로드",
  Neclordia: "네크로디아",
  Nightmare: "나이트메어",
  Oannes: "오안네스",
  Phantom: "팬텀",
  PinkBird: "핑크 버드",
  Pixie: "픽시",
  "Pseudo-Siren": "가짜 세이렌",
  "Queen Ant": "여왕개미",
  RaggedOne: "누더기 괴물",
  RanRan: "란란",
  RinRin: "린린",
  "Red Elemental": "붉은 정령",
  "Red Slime": "붉은 슬라임",
  "Rock Buster": "록 버스터",
  Rockadillo: "록카딜로",
  Salamander: "샐러맨더",
  Samurai: "사무라이",
  Sandillo: "샌딜로",
  Sauroid: "사우로이드",
  Shadow: "그림자",
  ShadowDog: "섀도 독",
  "Shadow Man": "그림자 인간",
  "Shiu Lin": "슈린",
  Sickle: "낫",
  "Skeleton (Spear)": "해골(창)",
  "Skeleton (Sword)": "해골(검)",
  SkyKnight: "스카이 나이트",
  "Slot Man": "슬롯맨",
  "Soldier Ant": "병정개미",
  Sorcerer: "주술사",
  Spider: "거미",
  Spiker: "스파이커",
  Spikebeak: "스파이크비크",
  "Strong Arm": "강철 팔",
  SunKing: "선 킹",
  "Sunshine King": "햇살왕",
  TargetGirl: "타깃 걸",
  TenTen: "텐텐",
  Tiger: "호랑이",
  TimeKnight: "타임 나이트",
  Viperman: "바이퍼맨",
  "Whip Wolf": "채찍 늑대",
  WhiteTiger: "화이트 타이거",
  Woodpecker: "딱따구리",
  Wyvern: "와이번",
  "Zombie Dragon": "좀비 드래곤",
  "Zombie (A)": "좀비 A",
  "Zombie (B)": "좀비 B",
  ZombieSlug: "좀비 민달팽이",
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
    "용구마을",
    "용의 입 마을",
    "드레이크마우스 마을",
    "Drakemouth Village",
  ],
  "suikoden-ii:kyaro": ["캐로", "캐로 마을"],
  "suikoden-ii:lakewest": ["레이크웨스트", "레이크웨스트 마을"],
  "suikoden-ii:ryube": ["류베", "류베 마을"],
  "suikoden-ii:tigermouth-village": [
    "코코마을",
    "호구마을",
    "호구의 마을",
    "타이거마우스 마을",
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
