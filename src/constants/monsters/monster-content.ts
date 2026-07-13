/**
 * 몬스터 도감의 페이지 문구, 한국어 표기, 출현지와 드롭 데이터 변환을 정의합니다.
 */

import {
  buildMonsterBossPath,
  buildMonsterDetailPath,
  buildMonsterGamePath,
} from "@/constants/app/app-config";
import {
  buildArchiveSlugId,
  formatArchiveCount,
  formatArchiveNumber,
} from "@/constants/app/archive-utils";
import { REGION_ATLAS_LOCATIONS } from "@/constants/archive/archive-content";
import {
  resolveItemDetailHref,
  translateItemName,
} from "@/constants/items/item-content";
import {
  GAME8_SUIKODEN_I_MONSTER_SOURCE_RECORDS,
  GAME8_SUIKODEN_II_MONSTER_SOURCE_RECORDS,
  type Game8MonsterSourceRecord,
} from "@/constants/monsters/game8-monster-source-records";
import {
  resolveMonsterBossGuide,
  type MonsterBossGuideRecord,
} from "@/constants/monsters/monster-boss-guides";
import { SUIKODEN_I_MONSTER_DETAIL_SOURCE_RECORDS } from "@/constants/monsters/suikoden-i-monster-detail-records";
import { SUIKODEN_II_MONSTER_DETAIL_SOURCE_RECORDS } from "@/constants/monsters/suikoden-ii-monster-detail-records";

export const MONSTER_ARCHIVE_COPY = {
  eyebrow: "Monsters",
  title: "Monster Bestiary",
  body: "환상수호전 I·II의 필드 몬스터와 전투 상대를 출현 위치, 드롭 아이템, 획득 확률 기준으로 정리합니다.",
  bossTitle: "Boss Monsters",
  bossBody: "작품별 보스 전투를 일반 몬스터 도감과 분리해, 출현 위치와 드롭 기록, 전투 공략 기준으로 정리합니다.",
  tabsAriaLabel: "Monster series",
  searchLabel: "Monster search",
  searchPlaceholder: "몬스터 이름, 출현 위치, 드롭 아이템 검색",
  bossGameTabsAriaLabel: "Boss monster series",
  clearSearchLabel: "검색어 지우기",
  resultCountSuffix: "종",
  entryCountSuffix: "종",
  locationCountSuffix: "곳",
  recordCountSuffix: "건",
  noResults: "검색 조건에 맞는 몬스터 기록이 없습니다.",
  unavailableDetail: "-",
  detailEyebrow: "Monster Profile",
  detailBody: "몬스터별 출현 위치, 드롭 아이템, 위치별 전투 스탯과 속성 반응을 정리합니다.",
  summaryTitle: "도감 요약",
  encounterTitle: "출현 위치와 드롭",
  combatSummaryTitle: "전투 요약",
  bossGuideTitle: "보스 공략",
  statTitle: "레벨·스탯",
  affinityTitle: "속성 반응",
  statusResistanceTitle: "상태 이상 내성",
  backToList: "목록으로 돌아가기",
  noStatRecords: "상세 스탯 기록이 아직 정리되지 않은 몬스터입니다.",
  noAffinityRecords: "속성 반응 기록이 아직 정리되지 않은 몬스터입니다.",
  statusResistanceLegend: "○ = 유효 / △ = 내성 / × = 무효 / - = 보통",
  labels: {
    englishName: "EN",
    japaneseName: "JP",
    games: "작품",
    originalName: "EN",
    location: "출현 위치",
    drops: "드롭",
    dropRate: "획득 확률",
    noDrop: "드롭 없음",
    recordType: "기록 구분",
    bossType: "보스형",
    fieldType: "필드형",
    encounterCount: "출현 기록",
    detailDropCount: "드롭 기록",
    statRecordCount: "스탯 기록",
    levelRange: "레벨 범위",
    hpRange: "HP 범위",
    effectiveElements: "유효 속성",
    invalidElements: "무효 속성",
    resistantElements: "내성 속성",
    normalAffinity: "특이 반응 없음",
    statusInvalid: "상태 무효",
    statusResistant: "상태 내성",
    statusEffective: "상태 유효",
    statusNormal: "일반 반응",
    suikodenICount: "Suikoden I",
    suikodenIICount: "Suikoden II",
    bossOverview: "전투 개요",
    bossPreparation: "준비",
    bossRelatedEvents: "관련 흐름",
    bossRewards: "보상",
    bossTactics: "전투 흐름",
    bossWarning: "주의점",
    bossPreparationCount: "준비 항목",
    bossRelatedCount: "관련 흐름",
    bossRewardCount: "보상 기록",
    bossTacticsCount: "전투 흐름",
    bossWarningState: "주의점",
    bossWarningAvailable: "주의점 있음",
    bossWarningUnavailable: "기본 전투",
    bossGuideReady: "공략 정리",
    bossGuideCount: "전투 팁",
    monsterCount: "몬스터 요약",
    locationCount: "출현 위치",
    dropCount: "드롭 아이템",
    level: "Lv.",
    hp: "HP",
    range: "사거리",
    str: "STR",
    mag: "MAG",
    con: "CON",
    dex: "DEX",
    spd: "SPD",
    lck: "LCK",
    fire: "불",
    water: "물",
    earth: "대지",
    wind: "바람",
    lightning: "번개",
    holy: "성",
    darkness: "어둠",
    shield: "방패",
    sword: "검",
    poison: "독",
    silence: "침묵",
    sleep: "잠",
    stun: "기절",
    death: "즉사",
  },
} as const;

export const MONSTER_BROWSER_COPY = {
  clearSearchLabel: MONSTER_ARCHIVE_COPY.clearSearchLabel,
  entryCountSuffix: MONSTER_ARCHIVE_COPY.entryCountSuffix,
  labels: {
    bossGuideCount: MONSTER_ARCHIVE_COPY.labels.bossGuideCount,
    bossGuideReady: MONSTER_ARCHIVE_COPY.labels.bossGuideReady,
    bossType: MONSTER_ARCHIVE_COPY.labels.bossType,
    drops: MONSTER_ARCHIVE_COPY.labels.drops,
    englishName: MONSTER_ARCHIVE_COPY.labels.englishName,
    japaneseName: MONSTER_ARCHIVE_COPY.labels.japaneseName,
    location: MONSTER_ARCHIVE_COPY.labels.location,
    noDrop: MONSTER_ARCHIVE_COPY.labels.noDrop,
  },
  noResults: MONSTER_ARCHIVE_COPY.noResults,
  resultCountSuffix: MONSTER_ARCHIVE_COPY.resultCountSuffix,
  searchLabel: MONSTER_ARCHIVE_COPY.searchLabel,
  searchPlaceholder: MONSTER_ARCHIVE_COPY.searchPlaceholder,
  unavailableDetail: MONSTER_ARCHIVE_COPY.unavailableDetail,
} as const;

export const MONSTER_BOSS_BROWSER_COPY = {
  ...MONSTER_BROWSER_COPY,
  gameTabsAriaLabel: MONSTER_ARCHIVE_COPY.bossGameTabsAriaLabel,
} as const;

export const MONSTER_INDEX_PAGE_IDS = {
  suikodenI: "suikoden-i",
  suikodenII: "suikoden-ii",
} as const;

export const MONSTER_BOSS_PAGE_ID = "bosses";

export type MonsterIndexGameId =
  (typeof MONSTER_INDEX_PAGE_IDS)[keyof typeof MONSTER_INDEX_PAGE_IDS];

export const isMonsterIndexGameId = (
  gameId: string,
): gameId is MonsterIndexGameId => {
  return Object.values(MONSTER_INDEX_PAGE_IDS).includes(
    gameId as MonsterIndexGameId,
  );
};

export const MONSTER_INDEX_PAGES = [
  {
    id: MONSTER_INDEX_PAGE_IDS.suikodenI,
    href: buildMonsterGamePath(MONSTER_INDEX_PAGE_IDS.suikodenI),
    title: "Suikoden I",
    eyebrow: "Gate Rune War",
  },
  {
    id: MONSTER_INDEX_PAGE_IDS.suikodenII,
    href: buildMonsterGamePath(MONSTER_INDEX_PAGE_IDS.suikodenII),
    title: "Suikoden II",
    eyebrow: "Dunan Unification War",
  },
] as const satisfies readonly {
  id: MonsterIndexGameId;
  href: string;
  title: string;
  eyebrow: string;
}[];

export const MONSTER_INDEX_TABS = [
  ...MONSTER_INDEX_PAGES,
  {
    id: MONSTER_BOSS_PAGE_ID,
    href: buildMonsterBossPath(),
    title: "Boss Monsters",
    eyebrow: "Strategy Records",
  },
] as const satisfies readonly {
  id: string;
  href: string;
  title: string;
  eyebrow: string;
}[];

const MONSTER_DROP_RATE_LABELS = {
  High: "높음",
  Low: "낮음",
  Medium: "보통",
  "Once Only": "1회 한정",
  Rare: "희귀",
} as const;

type MonsterDropRateId = keyof typeof MONSTER_DROP_RATE_LABELS;

export const MONSTER_LOCATION_TRANSLATIONS = {
  "Area A": "A 구역",
  "Area B": "B 구역",
  "Area C1": "C1 구역",
  "Area C2": "C2 구역",
  "Area C3": "C3 구역",
  "Area D": "D 구역",
  "Area E": "E 구역",
  "Area F1": "F1 구역",
  "Area F2": "F2 구역",
  "Area G": "G 구역",
  "Area H": "H 구역",
  "Area I": "I 구역",
  "Around Gregminster (Chapter 1)": "그레그민스터 주변(1장)",
  "Around Gregminster (Chapter 8)": "그레그민스터 주변(8장)",
  "Around Kirov": "키로프 주변",
  "Around Moravia": "모라비아 주변",
  "Around Seika and Kaku": "세이카와 카쿠 주변",
  "Around Teien and Rikon": "테이엔과 리콘 주변",
  "Around the Dragon Knights' Fortress": "용기사의 요새 주변",
  "Around the Village of the Elves": "엘프 마을 주변",
  "Around Warriors' Village": "전사의 마을 주변",
  "Banner Pass": "바나 고개",
  "Cave of the Past": "과거의 동굴",
  "Cave of the Wind": "바람의 동굴",
  "Crom Village": "크롬 마을",
  "Dragon's Den": "용동",
  "Dwarf Trail": "드워프 산길",
  "Dwarves' Vault": "드워프 금고",
  "Floating Fortress of Shasarazade": "수상요새 샤사라자드",
  "Forest Village": "숲의 마을",
  "Great Forest": "대삼림",
  "Greenhill City": "그린힐",
  "Greenhill Forest": "그린힐 숲",
  Gregminster: "그레그민스터",
  "Gregminster Castle": "그레그민스터 성",
  Headquarters: "본거지",
  "Highland Garrison": "하이랜드 주둔지",
  Kalekka: "칼레카",
  "Kobold Village Forest": "코볼트 마을 숲",
  "Kouan Military Government Office": "코안 군정부",
  "Kyaro Town": "캐로 마을",
  "L'Renouille": "루루노이에",
  Lenankamp: "레난캄프",
  "Lepant's Mansion": "레판토 저택",
  "Magician's Island": "마법사의 섬",
  "Mercenary Fortress": "용병 요새",
  Moravia: "모라비아 성",
  "Mt. Rakutei": "라쿠테이 산",
  "Mt. Seifu": "청풍산",
  "Mt. Tigerwolf": "타이거울프 산",
  "Muse City": "뮤즈",
  "Neclord's Castle": "네크로드 성",
  "North Sparrow Pass": "북쪽 참새 고개",
  "North Window": "노스윈도우",
  "Pannu Yakuta Castle": "판누 야쿠타 성",
  "Path to Matilda": "마틸다 방면 길",
  "Pirate's Fortress": "해적 요새",
  "Rockland Military Government Office": "록랜드 군정부",
  "Rockaxe Castle": "록엑스 성",
  "Ryube Forest": "류베 숲",
  "Scarleticia Castle": "스칼렛시아 성",
  Seika: "세이카",
  "Seek Valley": "시크 계곡",
  "Sindar Ruins": "신다르 유적",
  "Soniere Prison": "소니에르 감옥",
  "Tenzan Pass": "텐잔 고개",
  "Tigermouth Village": "코코마을",
  "Tinto City": "틴토",
  "Tinto Mines": "틴토 광산",
  "Tinto Pass": "틴토 고개",
  "Toran Lake Castle": "트란 성",
  "Two River City": "투 리버",
  "Two River Sewers": "투 리버 하수도",
} as const;

const MONSTER_NAME_TRANSLATIONS = {
  "Air Lizard": "에어 리저드",
  "Ain Gide": "아인 기드",
  Angie: "안지",
  Armadilloid: "아르마딜로이드",
  Armadillon: "아르마딜론",
  Assassin: "암살자",
  Banshee: "밴시",
  "Bandit A": "산적 A",
  "Bandit B": "산적 B",
  "Bandit C": "산적 C",
  "Beast Commander": "비스트 커맨더",
  BlackTiger: "블랙 타이거",
  "Black Elemental": "검은 엘리멘탈",
  "Black Wild Boar": "검은 멧돼지",
  BonBon: "봉봉",
  Bronzem: "브론젬",
  Chimera: "키메라",
  "Clay Doll": "진흙 인형",
  Cockatrice: "코카트리스",
  Colossus: "콜로서스",
  Commander: "커맨더",
  "Copper Sun": "코퍼 선",
  Creeper: "크리퍼",
  "Crimson Dwarf": "크림슨 드워프",
  "Crystal Core": "크리스탈 코어",
  Crow: "까마귀",
  DarkBunny: "다크 버니",
  Dagon: "다곤",
  Delf: "델프",
  "Demon Hound": "데몬 하운드",
  "Demon Sorcerer": "데몬 소서러",
  "Death Boar": "데스 보어",
  DevilEye: "데빌 아이",
  "Devil Armor": "데빌 아머",
  "Devil Shield": "데빌 실드",
  Dragon: "드래곤",
  Dwarf: "드워프",
  "Eagle Man": "이글맨",
  "Earth Golem": "어스 골렘",
  Ekidonna: "에키드나",
  "Elite Soldier": "정예 병사",
  EyeFlower: "아이 플라워",
  "Fei Yu": "페이 유",
  Fisheye: "피시 아이",
  Furball: "북실북실",
  FurFur: "퍼퍼",
  "Flying Squirrel": "날다람쥐",
  GhostSlug: "고스트 슬러그",
  "Ghost Armor": "고스트 아머",
  "Giant Slug": "거대 민달팽이",
  "Giant Snail": "거대 달팽이",
  Gigantes: "기간테스",
  "Golden Hydra": "황금 히드라",
  GoldBoar: "골드 보어",
  GrandHolly: "그랜드 홀리",
  "Grave Master": "그레이브 마스터",
  Griffin: "그리핀",
  "Grizzly Bear": "그리즐리 베어",
  "Hawk Man": "호크맨",
  HawkMan: "호크맨",
  Hippogriff: "히포그리프",
  "Hell Hound": "헬 하운드",
  "Hell Unicorn": "헬 유니콘",
  "Holly Boy": "홀리 보이",
  "Holly Fairy": "홀리 페어리",
  HollyElf: "홀리 엘프",
  "Holly Master": "홀리 마스터",
  "Holly Spirit": "홀리 스피릿",
  Ivy: "아이비",
  IronClaw: "아이언 클로",
  IronMoon: "아이언 문",
  Kanak: "카나크",
  Kerberos: "케르베로스",
  "Killer Rabbit": "킬러 래빗",
  KillerBee: "킬러비",
  KillerDog: "킬러 독",
  KillSpider: "킬 스파이더",
  "Killer Slime": "킬러 슬라임",
  Kookaburra: "쿠카부라",
  LandShark: "랜드 샤크",
  Larvae: "라바",
  Leathercut: "레더컷",
  Leonardo: "레오나르도",
  "Li Lan": "리란",
  "Mad Ivy": "매드 아이비",
  "Magic Shield": "마법 방패",
  "M-Knight": "엠 나이트",
  Magus: "마거스",
  Magician: "마법사",
  MegaWatt: "메가와트",
  Melonzoo: "멜론주",
  Minos: "미노스",
  Minotaurus: "미노타우로스",
  Mirage: "미라지",
  Monwer: "몬워",
  Mosquito: "모기",
  "Mr.Venus": "미스터 비너스",
  Nariqua: "나리쿠아",
  Neclord: "네크로드",
  Neclordia: "네크로디아",
  Nightmare: "나이트메어",
  Ninja: "닌자",
  "Ninja Master": "닌자 마스터",
  Oannes: "오안네스",
  Orc: "오크",
  PapaHolly: "파파 홀리",
  Phantom: "팬텀",
  PinkBird: "핑크 버드",
  Pixie: "픽시",
  "Pseudo-Siren": "가짜 세이렌",
  "Queen Ant": "여왕개미",
  "Rabbit Bird": "래빗 버드",
  RaggedOne: "래기드 원",
  RanRan: "란란",
  RinRin: "린린",
  "Red Elemental": "붉은 엘리멘탈",
  "Red Slime": "붉은 슬라임",
  "Red Soldier Ant": "붉은 병정개미",
  Roc: "로크",
  "Rock Buster": "록 버스터",
  Rockadillo: "록아딜로",
  "Robot Soldier (Spear)": "로봇 병사(창)",
  "Robot Soldier (Sword)": "로봇 병사(검)",
  Rowd: "라우드",
  Salamander: "샐러맨더",
  Samurai: "사무라이",
  Sandillo: "샌딜로",
  Sauroid: "사우로이드",
  Shadow: "섀도",
  ShadowDog: "섀도 독",
  "Shadow Man": "섀도 맨",
  "Shell Venus": "셸 비너스",
  Sickle: "시클",
  Sierra: "시에라",
  Simurgh: "시무르그",
  Siren: "세이렌",
  "Shiu Lin": "슈린",
  "Slasher Rabbit": "슬래셔 래빗",
  SkyKnight: "스카이 나이트",
  Spider: "스파이더",
  Spikebeak: "스파이크비크",
  Spiker: "스파이커",
  "Soldier Ant": "병정개미",
  "Sonya Shulen": "소니아 슈렌",
  Sorcerer: "소서러",
  "Star Dragon Sword": "별의 드래곤 검",
  "Slot Man": "슬롯맨",
  "Strong Arm": "스트롱 암",
  SunKing: "선 킹",
  "Sunshine King": "선샤인 킹",
  Sydonia: "시도니아",
  TargetGirl: "타깃 걸",
  TenTen: "텐텐",
  Tiger: "타이거",
  TimeKnight: "타임 나이트",
  Varkas: "바르카스",
  Viperman: "바이퍼맨",
  "Whip Master": "채찍 마스터",
  "Whip Wolf": "채찍 늑대",
  WhiteTiger: "화이트 타이거",
  "Wild Boar": "멧돼지",
  Wolf: "늑대",
  Woodpecker: "딱따구리",
  Wyvern: "와이번",
  "Zombie Dragon": "좀비 드래곤",
  ZombieSlug: "좀비 슬러그",
} as const;

const MONSTER_DROP_ITEM_TRANSLATIONS = {
  Antitoxin: "해독제",
  "Balance Rune": "밸런스의 봉인구",
  Bandana: "반다나",
  "Banshee Rune": "밴시의 봉인구",
  "Barrier Rune": "배리어의 봉인구",
  "Beauties of Nature": "자연의 미",
  "Belt of Strength": "힘의 벨트",
  "Black Urn": "검은 항아리",
  "Blood Armor": "블러드 아머",
  "Blue Dragon Urn": "청룡 항아리",
  "Blue Ribbon": "블루 리본",
  "Bonsai Tree": "분재",
  "Boar Rune": "멧돼지의 봉인구",
  "Canopy Defense Scroll": "캐노피 디펜스 두루마리",
  Cape: "망토",
  "Cape of Darkness": "어둠의 망토",
  "Celadon Urn": "청자 항아리",
  "Chain Mail": "체인메일",
  "Chaos Shield": "혼돈의 방패",
  "Cheek Guards": "볼 보호대",
  "Chest Plate": "체스트 플레이트",
  "Chinese Dish": "중국 접시",
  "Chick (Special)": "병아리",
  Circlet: "서클릿",
  "Clay Guardian Scroll": "클레이 가디언 두루마리",
  Collar: "목줄",
  "Cream Cutlets": "크림 커틀릿",
  "Cream Stew": "크림 스튜",
  "Crimson Cape": "진홍 망토",
  "Cyclone Rune": "질풍의 봉인구",
  "Dancing Flames Scroll": "춤추는 불꽃 두루마리",
  "Defense Rune Piece": "방어의 문장 조각",
  "Defective Urn": "흠집 난 항아리",
  "Diet Lunch": "다이어트 도시락",
  "Double-beat Rune": "2회공격의 봉인구",
  "Double-Strike Rune": "2회공격의 봉인구",
  "Dried Fish": "건어물",
  "Dragon Armor": "용 갑옷",
  "Drinking Set": "술잔 세트",
  "Dryad Rune": "드라이어드의 봉인구",
  "Earth Boots": "대지의 부츠",
  "Earth Rune": "흙의 봉인구",
  "Earth Rune Piece": "흙의 문장 조각",
  "Earth Shield": "대지의 방패",
  Emblem: "엠블럼",
  "Escape Talisman": "탈출 부적",
  Feather: "깃털",
  "Fine China": "고급 도자기",
  "Fire Emblem": "불의 엠블럼",
  "Fire Wall Scroll": "불의 벽 두루마리",
  "Fire Lizard Rune": "화룡의 봉인구",
  "Fire Rune": "불의 봉인구",
  "Fire Sealing Rune": "화봉인의 봉인구",
  "Firefly Rune": "반딧불이의 봉인구",
  "Flame Helmet": "화염 투구",
  "Flaming Arrows Scroll": "불화살 두루마리",
  "Flowing Rune": "류수의 봉인구",
  "Fish Badge": "물고기 배지",
  "Flower Painting": "꽃 그림",
  "Flower Vase": "꽃병",
  "Fortune Rune": "행운의 봉인구",
  "Fried Chicken": "닭튀김",
  "Full Armor": "풀 아머",
  "Full Helmet": "풀헬름",
  "Full Plate": "풀 플레이트",
  "Fur Cape": "모피 망토",
  "Gale Rune": "질풍의 봉인구",
  "Gadget Rune": "가젯의 봉인구",
  "Gengis Khan": "징키스칸",
  Gauntlet: "건틀릿",
  "Goddess Statue": "여신상",
  "Gold Bar": "금괴",
  "Gold Collar": "금 목줄",
  Goldlet: "금팔찌",
  "Gozz Rune": "고즈의 봉인구",
  Graffiti: "낙서",
  "Great Hawk Rune": "큰매의 봉인구",
  Greaves: "그리브",
  "Green Salad": "그린 샐러드",
  "Grilled Beef": "소고기구이",
  "Guard Ring": "가드 링",
  "Guard Robe": "가드 로브",
  "Half Armor": "하프 아머",
  "Half Helmet": "하프헬름",
  Headband: "이마 보호대",
  Headgear: "두건",
  "Healing Wind Scroll": "치유의 바람 두루마리",
  "Hazy Rune": "흐림의 봉인구",
  "Heavy Collar": "무거운 목줄",
  "Hex Doll": "저주 인형",
  "Holy Rune": "성스러운 봉인구",
  "Horned Helmet": "혼헬름",
  "Iron Boots": "철 부츠",
  "Iron Shield": "철 방패",
  "Japanese Dish": "일본 접시",
  "Japanese Stew": "일본식 스튜",
  "Killer Rune": "필사의 봉인구",
  "Knight Rune": "기사의 봉인구",
  "Knight Statue": "기사상",
  "Kite Rune": "연의 봉인구",
  "Landscape Scroll": "풍경화 두루마리",
  "Leather Armor": "가죽 갑옷",
  "Leather Cape": "가죽 망토",
  "Leather Hat": "가죽 모자",
  "Lightning Amulet": "번개의 부적",
  "Lightning Rune": "번개의 봉인구",
  "Lovers' Garden": "연인의 정원",
  "Lucky Ring": "행운의 반지",
  "Lunch Box": "도시락",
  "Magic Rune Piece": "마의 문장 조각",
  "Magic Robe": "마법의 로브",
  "Main-Gauche": "망고슈",
  "Martial Arts Robe": "무도가의 도복",
  "Master's Garb": "마스터 가브",
  "Master's Robe": "마스터 로브",
  Medicine: "약",
  "Mega Medicine": "특효약",
  "Medicine Rune": "약의 봉인구",
  "Mother Earth Rune": "대지의 봉인구",
  "Nameless Urn": "이름 없는 항아리",
  "Nature's Beauty": "자연의 미",
  Needle: "바늘",
  "Ninja Garb": "닌자복",
  "Nymph Rune": "님프의 봉인구",
  "Octopus Pot": "문어 항아리",
  Opal: "오팔",
  "Persian Lamp": "페르시아 램프",
  "Phero Rune": "매혹의 봉인구",
  "Peeing Boy": "오줌싸개 동상",
  "Pixie Rune": "픽시의 봉인구",
  "Pointy Hat": "뾰족 모자",
  "Power Gloves": "파워 글러브",
  "Power Ring": "파워 링",
  "Prosperity Rune": "번영의 봉인구",
  "Protection Mist Scroll": "보호의 안개 두루마리",
  "Rage Rune": "열화의 봉인구",
  "Rain of Kindness Scroll": "친절의 비 두루마리",
  "Recipe 12": "레시피 12",
  "Recipe 21": "레시피 21",
  "Recipe 29": "레시피 29",
  "Recipe 34": "레시피 34",
  "Recipe 36": "레시피 36",
  "Revenge Earth Scroll": "복수의 대지 두루마리",
  "Resurrection Rune": "부활의 봉인구",
  "Rising Sun Bento": "해돋이 도시락",
  Robe: "로브",
  "Rose Brooch": "장미 브로치",
  "Sacrificial Buddha": "대역지장보살",
  Sandwich: "샌드위치",
  "Scale Mail": "스케일 메일",
  "Seed Potato": "씨감자",
  "Shredding Wind Scroll": "더 슈레딩 두루마리",
  "Shoulder Pads": "어깨 보호대",
  "Silence Rune": "침묵의 봉인구",
  "Silver Hat": "은모자",
  "Silver Collar": "은 목줄",
  "Silver Ring": "은반지",
  Silverlet: "실버릿",
  "Skunk Rune": "스컹크의 봉인구",
  "Sound Set 2": "소리세트 2",
  "Sound Set 3": "소리세트 3",
  "Speed Ring": "스피드 링",
  "Speed Rune Piece": "속의 문장 조각",
  "Spinach Juice": "시금치 주스",
  "Spinach Seedling": "시금치 모종",
  "Spicy Stew": "매운 스튜",
  "Star Earrings": "별 귀걸이",
  "Sweet & Sour Fish": "탕수어",
  "Sylph Rune": "실프의 봉인구",
  "Tai Chi Garb": "태극복",
  "Technique Rune": "기술의 봉인구",
  "Throat Drop": "목캔디",
  "Thunder Rune": "천뢰의 봉인구",
  "Titan Rune": "타이탄의 봉인구",
  "Toy Boat": "장난감 배",
  "Toe Shoes": "토우슈즈",
  "Turtle Plans 1": "거북 설계도 1",
  "Turtle Plans 2": "거북 설계도 2",
  "Turtle Plans 3": "거북 설계도 3",
  Tunic: "튜닉",
  "Unicorn Rune": "유니콘의 봉인구",
  "Viper Rune": "독사의 봉인구",
  "Waking Rune": "각성의 봉인구",
  "Wall Rune": "벽의 봉인구",
  "Water Amulet": "물의 부적",
  "Water Rune": "물의 봉인구",
  "Water Rune Piece": "물의 문장 조각",
  "Wide Urn": "넓은 항아리",
  "Wind Amulet": "바람의 부적",
  "Wind Hat": "바람 모자",
  "Wind Rune": "바람의 봉인구",
  "Wind of Sleep Scroll": "잠의 바람 두루마리",
  "Window Set 1": "창 세트 1",
  "Window Set 2": "창 세트 2",
  "Window Set 3": "창 세트 3",
  "Windspun Armor": "바람의 갑옷",
  "Winged Boots": "윙 부츠",
  "Wooden Shield": "나무 방패",
  "Wooden Shoes": "나막신",
} as const;

const MONSTER_TYPE_PATTERNS = [
  {
    pattern: /^Highlands \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `하이랜드 병사(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Bandit \((.+)\)(?: \((\d)\))?$/,
    translate: (match: RegExpMatchArray) =>
      `산적(${translateMonsterVariant(match[1])})${match[2] ? ` ${match[2]}` : ""}`,
  },
  {
    pattern: /^Kobold \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `코볼트(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Empire Soldier \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `제국 병사(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Empire Captain \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `제국 대장(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Death Machine \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `데스 머신(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Veteran Soldier \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `베테랑 병사(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Imperial Guard \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `제국 근위병(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Golden Hydra \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `황금 히드라(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Zombie \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `좀비(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Skeleton \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `스켈레톤(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^DoReMi Elf \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `도레미 엘프(${translateMonsterVariant(match[1])})`,
  },
  {
    pattern: /^Karayans \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `카리야인(${translateMonsterVariant(match[1])})`,
  },
] as const;

const MONSTER_JAPANESE_TYPE_PATTERNS = [
  {
    pattern: /^Highlands \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `ハイランド兵(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Bandit \((.+)\)(?: \((\d)\))?$/,
    translate: (match: RegExpMatchArray) =>
      `山賊(${translateMonsterJapaneseVariant(match[1])})${match[2] ? ` ${match[2]}` : ""}`,
  },
  {
    pattern: /^Bandit ([ABC])$/,
    translate: (match: RegExpMatchArray) =>
      `山賊${translateMonsterJapaneseVariant(match[1])}`,
  },
  {
    pattern: /^Kobold \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `コボルト(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Empire Soldier \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `帝国兵(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Empire Captain \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `帝国隊長(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Robot Soldier \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `ロボット兵(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Death Machine \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `デスマシーン(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Veteran Soldier \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `ベテラン兵(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Imperial Guard \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `近衛兵(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Zombie \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `ゾンビ(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Skeleton \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `スケルトン(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^DoReMi Elf \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `ドレミの精(${translateMonsterJapaneseVariant(match[1])})`,
  },
  {
    pattern: /^Karayans \((.+)\)$/,
    translate: (match: RegExpMatchArray) =>
      `カラヤン(${translateMonsterJapaneseVariant(match[1])})`,
  },
] as const;

export type MonsterDrop = {
  href: string | null;
  name: string;
  originalName: string;
  rate: MonsterDropRateId;
  rateLabel: string;
};

export type MonsterEncounterRecord = {
  drops: readonly MonsterDrop[];
  href: string | null;
  location: string;
  originalLocation: string;
};

export type MonsterIndexRecord = {
  detailHref: string | null;
  game: MonsterIndexGameId;
  hasDrops: boolean;
  id: string;
  isBoss: boolean;
  japaneseName: string;
  name: string;
  originalName: string;
  encounters: readonly MonsterEncounterRecord[];
};

export type MonsterStatRecord = {
  con?: number;
  dex?: number;
  hp: number;
  lck?: number;
  level: number;
  location: string;
  locationHref: string | null;
  mag?: number;
  originalLocation: string;
  range?: string;
  spd?: number;
  str?: number;
};

export type MonsterAffinityRecord = {
  earth: string;
  fire: string;
  holy: string;
  lightning: string;
  water: string;
  wind: string;
  darkness?: string;
  shield?: string;
  sword?: string;
};

export type MonsterStatusResistanceRecord = {
  death: string;
  poison: string;
  silence: string;
  sleep: string;
  stun: string;
};

export type MonsterDetailRecord = MonsterIndexRecord & {
  affinity: MonsterAffinityRecord | null;
  bossGuide: MonsterBossGuideRecord | null;
  gameEyebrow: string;
  gameTitle: string;
  indexHref: string;
  japaneseName: string;
  stats: readonly MonsterStatRecord[];
  statusResistances: MonsterStatusResistanceRecord | null;
};

type MonsterDetailSourceRecord = {
  affinities: MonsterAffinityRecord | null;
  originalName: string;
  stats: readonly Omit<
    MonsterStatRecord,
    "locationHref" | "originalLocation"
  >[];
  statusResistances?: MonsterStatusResistanceRecord;
};

const MONSTER_EMPTY_DROP_VALUES = new Set(["", "No Drop", "-"]);

const MONSTER_DISPLAY_NAME_OVERRIDES = {
  "Golden Hydra (Left)": "Golden Hydra",
  "Golden Hydra (Middle)": "Golden Hydra",
  "Golden Hydra (Right)": "Golden Hydra",
} as const;

const MONSTER_COMPANION_RECORD_KEYS = new Set([
  `${MONSTER_INDEX_PAGE_IDS.suikodenI}:Varkas`,
  `${MONSTER_INDEX_PAGE_IDS.suikodenI}:Sydonia`,
]);

const MONSTER_DETAIL_ENABLED_GAMES = new Set<MonsterIndexGameId>([
  MONSTER_INDEX_PAGE_IDS.suikodenI,
  MONSTER_INDEX_PAGE_IDS.suikodenII,
]);

const DEFAULT_MONSTER_STATUS_RESISTANCES = {
  death: "-",
  poison: "-",
  silence: "-",
  sleep: "-",
  stun: "-",
} as const satisfies MonsterStatusResistanceRecord;

export const MONSTER_JAPANESE_NAME_TRANSLATIONS = {
  "Air Lizard": "エアリザード",
  "Ain Gide": "アイン・ジード",
  Angie: "アンジー",
  Armadilloid: "アルマジロイド",
  Armadillon: "アルマジロン",
  Assassin: "アサシン",
  Banshee: "バンシー",
  "Beast Commander": "ビーストコマンダー",
  BlackTiger: "ブラックタイガー",
  "Black Elemental": "ブラックエレメンタル",
  "Black Wild Boar": "ブラックワイルドボア",
  BonBon: "ボンボン",
  Bronzem: "ブロンゼム",
  Chimera: "キメラ",
  "Clay Doll": "クレイドール",
  Cockatrice: "コカトリス",
  Colossus: "コロッサス",
  Commander: "コマンダー",
  "Copper Sun": "カッパーサン",
  Creeper: "クリーパー",
  "Crimson Dwarf": "クリムゾンドワーフ",
  "Crystal Core": "クリスタルコア",
  Crow: "カラス",
  Dagon: "ダゴン",
  DarkBunny: "ダークバニー",
  Delf: "デルフ",
  "Demon Hound": "デーモンハウンド",
  "Demon Sorcerer": "デーモンソーサラー",
  "Death Boar": "デスボア",
  DevilEye: "デビルアイ",
  "Devil Armor": "デビルアーマー",
  "Devil Shield": "デビルシールド",
  Dragon: "ドラゴン",
  Dwarf: "ドワーフ",
  "Eagle Man": "イーグルマン",
  "Earth Golem": "アースゴーレム",
  Ekidonna: "エキドナ",
  "Elite Soldier": "エリート兵",
  EyeFlower: "アイフラワー",
  "Fei Yu": "フェイユー",
  Fisheye: "フィッシュアイ",
  Furball: "ファーボール",
  FurFur: "フルフル",
  "Flying Squirrel": "ムササビ",
  GhostSlug: "ゴーストスラッグ",
  "Ghost Armor": "ゴーストアーマー",
  "Giant Slug": "ジャイアントスラッグ",
  "Giant Snail": "ジャイアントスネイル",
  "Queen Ant": "クイーンアント",
  Gigantes: "ギガンテス",
  "Golden Hydra": "ゴールデンヒドラ",
  GoldBoar: "ゴールドボア",
  GrandHolly: "グランドホリー",
  "Grave Master": "グレイブマスター",
  Griffin: "グリフォン",
  "Grizzly Bear": "グリズリーベア",
  "Hawk Man": "ホークマン",
  HawkMan: "ホークマン",
  Hippogriff: "ヒポグリフ",
  "Hell Hound": "ヘルハウンド",
  "Hell Unicorn": "ヘルユニコーン",
  "Holly Boy": "ホーリーボーイ",
  "Holly Fairy": "ホーリーフェアリー",
  HollyElf: "ホーリーエルフ",
  "Holly Master": "ホーリーマスター",
  "Holly Spirit": "ホーリースピリット",
  Ivy: "アイビー",
  IronClaw: "アイアンクロー",
  IronMoon: "アイアンムーン",
  Kanak: "カナック",
  Kerberos: "ケルベロス",
  "Killer Rabbit": "キラーラビット",
  KillerBee: "キラービー",
  KillerDog: "キラードッグ",
  KillSpider: "キルスパイダー",
  "Killer Slime": "キラースライム",
  Kookaburra: "クッカブラ",
  LandShark: "ランドシャーク",
  Larvae: "ラーバ",
  Leathercut: "レザーカット",
  Leonardo: "レオナルド",
  "Li Lan": "リィラン",
  "Mad Ivy": "マッドアイビー",
  "Magic Shield": "マジックシールド",
  "M-Knight": "Mナイト",
  Magus: "マグス",
  Magician: "マジシャン",
  MegaWatt: "メガワット",
  Melonzoo: "メロンゾー",
  Minos: "ミノス",
  Minotaurus: "ミノタウロス",
  Mirage: "ミラージュ",
  Monwer: "モンワー",
  Mosquito: "モスキート",
  "Mr.Venus": "ミスタービーナス",
  Nariqua: "ナリクア",
  Neclord: "ネクロード",
  Neclordia: "ネクローディア",
  Nightmare: "ナイトメア",
  Ninja: "ニンジャ",
  "Ninja Master": "ニンジャマスター",
  Oannes: "オアンネス",
  Orc: "オーク",
  PapaHolly: "パパホリー",
  Phantom: "ファントム",
  PinkBird: "ピンクバード",
  Pixie: "ピクシー",
  "Pseudo-Siren": "シュードセイレーン",
  "Rabbit Bird": "ラビットバード",
  RaggedOne: "ラギッドワン",
  RanRan: "ランラン",
  RinRin: "リンリン",
  "Red Elemental": "レッドエレメンタル",
  "Red Slime": "レッドスライム",
  "Red Soldier Ant": "レッドソルジャーアント",
  Roc: "ロック",
  "Rock Buster": "ロックバスター",
  Rockadillo: "ロックアディロ",
  Rowd: "ラウド",
  Salamander: "サラマンダー",
  Samurai: "サムライ",
  Sandillo: "サンディロ",
  Sauroid: "サウロイド",
  Shadow: "シャドウ",
  ShadowDog: "シャドウドッグ",
  "Shadow Man": "シャドウマン",
  "Shell Venus": "シェルビーナス",
  "Shiu Lin": "シュウリン",
  Sierra: "シエラ",
  Sickle: "シックル",
  Simurgh: "シームルグ",
  Siren: "セイレーン",
  "Slot Man": "スロットマン",
  "Slasher Rabbit": "スラッシャーラビット",
  SkyKnight: "スカイナイト",
  Spider: "スパイダー",
  Spikebeak: "スパイクビーク",
  Spiker: "スパイカー",
  "Soldier Ant": "ソルジャーアント",
  "Sonya Shulen": "ソニア・シューレン",
  Sorcerer: "ソーサラー",
  "Star Dragon Sword": "星辰剣",
  "Strong Arm": "ストロングアーム",
  SunKing: "サンキング",
  "Sunshine King": "サンシャインキング",
  TargetGirl: "ターゲットガール",
  TenTen: "テンテン",
  Tiger: "タイガー",
  TimeKnight: "タイムナイト",
  Viperman: "バイパーマン",
  "Whip Master": "ウィップマスター",
  "Whip Wolf": "ウィップウルフ",
  WhiteTiger: "ホワイトタイガー",
  "Wild Boar": "ワイルドボア",
  Wolf: "ウルフ",
  Woodpecker: "キツツキ",
  Wyvern: "ワイバーン",
  "Zombie Dragon": "ゾンビドラゴン",
  ZombieSlug: "ゾンビスラッグ",
} as const satisfies Partial<Record<string, string>>;

const MONSTER_LOCATION_REGION_OVERRIDES: Record<
  MonsterIndexGameId,
  Partial<Record<string, string>>
> = {
  [MONSTER_INDEX_PAGE_IDS.suikodenI]: {
    Headquarters: "toran-castle",
  },
  [MONSTER_INDEX_PAGE_IDS.suikodenII]: {
    "Banner Pass": "banner-village",
    "Highland Garrison": "tenzan-pass-camp",
    "Kobold Village Forest": "two-river",
  },
};

const buildMonsterId = (monsterName: string) =>
  buildArchiveSlugId(resolveMonsterDisplayName(monsterName));

const resolveMonsterDisplayName = (monsterName: string) =>
  MONSTER_DISPLAY_NAME_OVERRIDES[
    monsterName as keyof typeof MONSTER_DISPLAY_NAME_OVERRIDES
  ] ?? monsterName;

const translateMonsterVariant = (value: string) => {
  const variants = {
    Bow: "활",
    Aqua: "아쿠아",
    Blue: "파랑",
    Female: "여성",
    Green: "초록",
    Left: "왼쪽",
    Male: "남성",
    Mage: "마법",
    Middle: "중앙",
    Pink: "분홍",
    Red: "빨강",
    Right: "오른쪽",
    Spear: "창",
    Sword: "검",
    Yellow: "노랑",
  } as const;

  return variants[value as keyof typeof variants] ?? value;
};

const translateMonsterJapaneseVariant = (value: string) => {
  const variants = {
    Bow: "弓",
    Aqua: "水色",
    Blue: "青",
    Female: "女",
    Green: "緑",
    Mage: "魔法",
    Male: "男",
    Pink: "桃",
    Red: "赤",
    Spear: "槍",
    Sword: "剣",
    Yellow: "黄",
    A: "A",
    B: "B",
    C: "C",
  } as const;

  return variants[value as keyof typeof variants] ?? value;
};

export const translateMonsterName = (monsterName: string) => {
  const displayName = resolveMonsterDisplayName(monsterName);
  const direct =
    MONSTER_NAME_TRANSLATIONS[
      displayName as keyof typeof MONSTER_NAME_TRANSLATIONS
    ];

  if (direct) {
    return direct;
  }

  const matchedPattern = MONSTER_TYPE_PATTERNS.find(({ pattern }) =>
    pattern.test(displayName),
  );

  if (!matchedPattern) {
    return displayName;
  }

  const match = displayName.match(matchedPattern.pattern);

  return match ? matchedPattern.translate(match) : displayName;
};

const getMonsterJapaneseName = (monsterName: string) => {
  const displayName = resolveMonsterDisplayName(monsterName);
  const direct =
    MONSTER_JAPANESE_NAME_TRANSLATIONS[
      displayName as keyof typeof MONSTER_JAPANESE_NAME_TRANSLATIONS
    ];

  if (direct) {
    return direct;
  }

  const matchedPattern = MONSTER_JAPANESE_TYPE_PATTERNS.find(({ pattern }) =>
    pattern.test(displayName)
  );

  if (!matchedPattern) {
    return MONSTER_ARCHIVE_COPY.unavailableDetail;
  }

  const match = displayName.match(matchedPattern.pattern);

  return match ?
      matchedPattern.translate(match) :
      MONSTER_ARCHIVE_COPY.unavailableDetail;
};

const translateMonsterLocation = (location: string) =>
  MONSTER_LOCATION_TRANSLATIONS[
    location as keyof typeof MONSTER_LOCATION_TRANSLATIONS
  ] ?? location;

const resolveMonsterDetailHref = (
  game: MonsterIndexGameId,
  monsterId: string,
) =>
  MONSTER_DETAIL_ENABLED_GAMES.has(game)
    ? buildMonsterDetailPath(game, monsterId)
    : null;

const normalizeMonsterLocationForLink = (location: string) =>
  location
    .replace(/\(.+?\)/g, "")
    .replace(/ 주변$/g, "")
    .replace(/ 방면 길$/g, "")
    .trim();

const resolveMonsterLocationHref = (
  game: MonsterIndexGameId,
  originalLocation: string,
  location: string,
) => {
  const overrideId =
    MONSTER_LOCATION_REGION_OVERRIDES[game][originalLocation];
  const gameRegions = REGION_ATLAS_LOCATIONS.filter(
    (region) => region.game === game,
  );

  if (overrideId) {
    return gameRegions.find((region) => region.id === overrideId)?.detailHref ??
      null;
  }

  const normalizedLocation = normalizeMonsterLocationForLink(location);
  const exactNameMatch = gameRegions.find(
    (region) => region.name === normalizedLocation,
  );

  if (exactNameMatch) {
    return exactNameMatch.detailHref;
  }

  const exactLocationMatch = gameRegions.find((region) =>
    region.locations.some((regionLocation) =>
      regionLocation === normalizedLocation
    ),
  );

  if (exactLocationMatch) {
    return exactLocationMatch.detailHref;
  }

  const partialMatch = gameRegions.find(
    (region) =>
      normalizedLocation.includes(region.name) ||
      region.name.includes(normalizedLocation) ||
      region.locations.some((regionLocation) =>
        normalizedLocation.includes(regionLocation) ||
        regionLocation.includes(normalizedLocation)
      ),
  );

  return partialMatch?.detailHref ?? null;
};

const translateMonsterDropItem = (itemName: string) =>
  MONSTER_DROP_ITEM_TRANSLATIONS[
    itemName as keyof typeof MONSTER_DROP_ITEM_TRANSLATIONS
  ] ?? translateItemName(itemName);

const parseMonsterDrop = (dropValue: string): MonsterDrop | null => {
  const trimmedDrop = dropValue.trim();

  if (MONSTER_EMPTY_DROP_VALUES.has(trimmedDrop)) {
    return null;
  }

  const dropMatch = trimmedDrop.match(
    /^(.+)\s\((High|Medium|Low|Rare|Once Only)\)$/,
  );

  if (!dropMatch) {
    return null;
  }

  const originalName = dropMatch[1];
  const rate = dropMatch[2] as MonsterDropRateId;
  const name = translateMonsterDropItem(originalName);

  return {
    href: resolveItemDetailHref(originalName) ?? resolveItemDetailHref(name),
    name,
    originalName,
    rate,
    rateLabel: MONSTER_DROP_RATE_LABELS[rate],
  };
};

const parseMonsterEncounter = (
  entry: string,
  game: MonsterIndexGameId,
): MonsterEncounterRecord => {
  const [locationValue, dropValue = ""] = entry.split(" | ");
  const location = translateMonsterLocation(locationValue);

  return {
    drops: dropValue.split(",").flatMap((drop) => {
      const parsedDrop = parseMonsterDrop(drop);

      return parsedDrop ? [parsedDrop] : [];
    }),
    href: resolveMonsterLocationHref(game, locationValue, location),
    location,
    originalLocation: locationValue,
  };
};

const buildMonsterRecord = (
  sourceRecord: Game8MonsterSourceRecord,
  game: MonsterIndexGameId,
): MonsterIndexRecord => {
  const encounters = sourceRecord.entries.map((entry) =>
    parseMonsterEncounter(entry, game),
  );
  const monsterId = buildMonsterId(sourceRecord.monster);
  const originalName = resolveMonsterDisplayName(sourceRecord.monster);

  return {
    detailHref: resolveMonsterDetailHref(game, monsterId),
    game,
    hasDrops: encounters.some((encounter) => encounter.drops.length > 0),
    id: monsterId,
    isBoss: resolveMonsterBossGuide(game, originalName) !== null,
    japaneseName: getMonsterJapaneseName(originalName),
    name: translateMonsterName(sourceRecord.monster),
    originalName,
    encounters,
  };
};

const buildEncounterMergeKey = (encounter: MonsterEncounterRecord) =>
  [
    encounter.originalLocation,
    ...encounter.drops.map((drop) =>
      `${drop.originalName}:${drop.rate}`,
    ),
  ].join("|");

const mergeMonsterRecords = (
  records: readonly MonsterIndexRecord[],
): MonsterIndexRecord[] => {
  const mergedRecords = new Map<string, MonsterIndexRecord>();

  records.forEach((record) => {
    const mergeKey = `${record.game}:${record.id}`;
    const existing = mergedRecords.get(mergeKey);

    if (!existing) {
      mergedRecords.set(mergeKey, record);
      return;
    }

    const encounterKeys = new Set(existing.encounters.map(buildEncounterMergeKey));
    const mergedEncounters = [
      ...existing.encounters,
      ...record.encounters.filter((encounter) => {
        const encounterKey = buildEncounterMergeKey(encounter);

        if (encounterKeys.has(encounterKey)) {
          return false;
        }

        encounterKeys.add(encounterKey);
        return true;
      }),
    ];

    mergedRecords.set(mergeKey, {
      ...existing,
      encounters: mergedEncounters,
      hasDrops:
        existing.hasDrops ||
        mergedEncounters.some((encounter) => encounter.drops.length > 0),
      isBoss: existing.isBoss || record.isBoss,
    });
  });

  return [...mergedRecords.values()];
};

export const MONSTER_INDEX_RECORDS =
  mergeMonsterRecords([
    ...GAME8_SUIKODEN_I_MONSTER_SOURCE_RECORDS.map((sourceRecord) =>
      buildMonsterRecord(sourceRecord, MONSTER_INDEX_PAGE_IDS.suikodenI),
    ),
    ...GAME8_SUIKODEN_II_MONSTER_SOURCE_RECORDS.map((sourceRecord) =>
      buildMonsterRecord(sourceRecord, MONSTER_INDEX_PAGE_IDS.suikodenII),
    ),
  ]).filter(
    (record) =>
      !MONSTER_COMPANION_RECORD_KEYS.has(`${record.game}:${record.originalName}`),
  );

export const getMonsterIndexPage = (gameId: MonsterIndexGameId) => {
  return MONSTER_INDEX_PAGES.find((page) => page.id === gameId) ??
    MONSTER_INDEX_PAGES[0];
};

export const getMonsterIndexRecordsByGame = (gameId: MonsterIndexGameId) => {
  return MONSTER_INDEX_RECORDS.filter((record) =>
    record.game === gameId && !record.isBoss
  );
};

export const resolveMonsterDetailHrefByName = (
  gameId: string,
  monsterName: string,
) => {
  if (!isMonsterIndexGameId(gameId)) {
    return null;
  }

  const displayName = resolveMonsterDisplayName(monsterName);
  const monsterId = buildMonsterId(displayName);
  const record = MONSTER_INDEX_RECORDS.find(
    (monster) =>
      monster.game === gameId &&
      (monster.id === monsterId || monster.originalName === displayName),
  );

  return record?.detailHref ?? null;
};

export const getBossMonsterIndexRecords = () => {
  return MONSTER_INDEX_RECORDS.filter((record) => record.isBoss);
};

export const getMonsterIndexSummary = (gameId: MonsterIndexGameId) => {
  const records = getMonsterIndexRecordsByGame(gameId);
  const locationCount = new Set(
    records.flatMap((record) =>
      record.encounters.map((encounter) => encounter.location),
    ),
  ).size;
  const dropCount = new Set(
    records.flatMap((record) =>
      record.encounters.flatMap((encounter) =>
        encounter.drops.map((drop) => drop.name),
      ),
    ),
  ).size;

  return {
    dropCount,
    locationCount,
    monsterCount: records.length,
  };
};

export const buildMonsterSummaryItems = (
  summary: ReturnType<typeof getMonsterIndexSummary>,
) => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.monsterCount,
    value: formatArchiveCount(
      summary.monsterCount,
      MONSTER_ARCHIVE_COPY.entryCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.locationCount,
    value: formatArchiveNumber(summary.locationCount),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.dropCount,
    value: formatArchiveNumber(summary.dropCount),
  },
];

export const getBossMonsterIndexSummary = () => {
  const records = getBossMonsterIndexRecords();

  return {
    monsterCount: records.length,
    suikodenICount: records.filter((record) =>
      record.game === MONSTER_INDEX_PAGE_IDS.suikodenI
    ).length,
    suikodenIICount: records.filter((record) =>
      record.game === MONSTER_INDEX_PAGE_IDS.suikodenII
    ).length,
  };
};

export const buildBossMonsterSummaryItems = (
  summary: ReturnType<typeof getBossMonsterIndexSummary>,
) => [
  {
    label: MONSTER_ARCHIVE_COPY.labels.monsterCount,
    value: formatArchiveCount(
      summary.monsterCount,
      MONSTER_ARCHIVE_COPY.entryCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.suikodenICount,
    value: formatArchiveCount(
      summary.suikodenICount,
      MONSTER_ARCHIVE_COPY.entryCountSuffix,
    ),
  },
  {
    label: MONSTER_ARCHIVE_COPY.labels.suikodenIICount,
    value: formatArchiveCount(
      summary.suikodenIICount,
      MONSTER_ARCHIVE_COPY.entryCountSuffix,
    ),
  },
];

const getMonsterDetailSourceRecord = (
  monster: MonsterIndexRecord,
): MonsterDetailSourceRecord | null => {
  if (monster.game === MONSTER_INDEX_PAGE_IDS.suikodenI) {
    return SUIKODEN_I_MONSTER_DETAIL_SOURCE_RECORDS.find((record) =>
      record.originalName === monster.originalName
    ) ?? null;
  }

  if (monster.game === MONSTER_INDEX_PAGE_IDS.suikodenII) {
    return SUIKODEN_II_MONSTER_DETAIL_SOURCE_RECORDS.find((record) =>
      record.originalName === monster.originalName
    ) ?? null;
  }

  return null;
};

const resolveMonsterStatLocationHref = (
  monster: MonsterIndexRecord,
  originalLocation: string,
) =>
  monster.encounters.find((encounter) =>
    encounter.originalLocation === originalLocation
  )?.href ?? resolveMonsterLocationHref(
    monster.game,
    originalLocation,
    translateMonsterLocation(originalLocation),
  );

const buildMonsterDetailRecord = (
  monster: MonsterIndexRecord,
): MonsterDetailRecord | null => {
  if (!MONSTER_DETAIL_ENABLED_GAMES.has(monster.game)) {
    return null;
  }

  const page = getMonsterIndexPage(monster.game);
  const detailSourceRecord = getMonsterDetailSourceRecord(monster);

  return {
    ...monster,
    affinity: detailSourceRecord?.affinities ?? null,
    bossGuide: resolveMonsterBossGuide(monster.game, monster.originalName),
    gameEyebrow: page.eyebrow,
    gameTitle: page.title,
    indexHref: page.href,
    japaneseName: monster.japaneseName,
    stats: detailSourceRecord?.stats.map((row) => ({
      ...row,
      location: translateMonsterLocation(row.location),
      locationHref: resolveMonsterStatLocationHref(monster, row.location),
      originalLocation: row.location,
    })) ?? [],
    statusResistances:
      monster.game === MONSTER_INDEX_PAGE_IDS.suikodenII && detailSourceRecord ?
        detailSourceRecord.statusResistances ?? DEFAULT_MONSTER_STATUS_RESISTANCES :
        null,
  };
};

export const getMonsterDetailRecord = (
  gameId: string,
  monsterId: string,
) => {
  const monster = MONSTER_INDEX_RECORDS.find((record) =>
    record.game === gameId && record.id === monsterId
  );

  return monster ? buildMonsterDetailRecord(monster) : null;
};

export const getMonsterDetailStaticParams = () =>
  MONSTER_INDEX_RECORDS.filter((record) =>
    MONSTER_DETAIL_ENABLED_GAMES.has(record.game)
  ).map((record) => ({
    game: record.game,
    monster: record.id,
  }));
