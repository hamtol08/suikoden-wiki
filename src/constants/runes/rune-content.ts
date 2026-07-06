/**
 * 일반 문장과 진정한 문장의 이름, 이미지, 기능, 주문 데이터를 정의합니다.
 */

import {
  buildRuneCategoryPath,
  buildRuneDetailPath,
} from "@/constants/app/app-config";

export const RUNE_ARCHIVE_COPY = {
  eyebrow: "Runes",
  title: "Runes",
  body: "일반 문장과 공개된 진정한 문장을 작품별 기록과 연결해 정리합니다.",
  generalTitle: "General Runes",
  generalEyebrow: "일반 문장",
  generalBody:
    "전투, 마법, 이동, 고유 기술에 연결되는 일반 문장과 고유 문장을 함께 정리합니다.",
  trueTitle: "True Runes",
  trueEyebrow: "진정한 문장",
  trueBody:
    "공개된 진정한 문장을 작품별 기록과 함께 정리합니다.",
  profileTitle: "Rune Profile",
  runeDescriptionTitle: "문장 개요",
  trueRuneDescriptionTitle: "진정한 문장 개요",
  runeFunctionTitle: "문장 기능",
  runeSpellLabel: "주문",
  runeEffectLabel: "효과",
  runeWeaponEffectLabel: "무기 장착 효과",
  categoryLabel: "구분",
  functionTypeLabel: "기능 타입",
  lineageLabel: "문장 계열",
  gamesLabel: "등장 작품",
  aliasLabel: "영문명",
  englishNameLabel: "EN",
  japaneseNameLabel: "JP",
  searchLabel: "Rune search",
  searchPlaceholder: "문장 이름, 영문 표기, 등장 작품 검색",
  resultCountSuffix: "개 문장",
  resultCount: (count: number) => `${count.toLocaleString("ko-KR")}개 문장`,
  noResults: "검색 조건에 맞는 문장이 없습니다.",
  unavailableDetail: "-",
  ariaLabels: {
    categoryTabs: "Rune categories",
  },
} as const;

export const RUNE_FUNCTION_TYPE_LABELS = {
  active: "공격형",
  passive: "패시브형",
} as const;

export const RUNE_FUNCTION_TYPE_DESCRIPTIONS = {
  active: "주문이나 전투 기술을 직접 발동하는 문장",
  passive: "장착 중 능력치, 상태, 보상, 무기 효과를 보정하는 문장",
} as const;

export type RuneFunctionTypeId = keyof typeof RUNE_FUNCTION_TYPE_LABELS;

export const RUNE_CATEGORY_LABELS = {
  trueRune: "진정한 문장",
  generalRune: "일반 문장",
  uniqueRune: "고유 문장",
} as const;

export type RuneCategoryId = keyof typeof RUNE_CATEGORY_LABELS;

export const RUNE_INDEX_PAGE_IDS = {
  general: "general",
  true: "true",
} as const;

export type RuneIndexPageId =
  (typeof RUNE_INDEX_PAGE_IDS)[keyof typeof RUNE_INDEX_PAGE_IDS];

export const RUNE_INDEX_PAGES = [
  {
    id: RUNE_INDEX_PAGE_IDS.general,
    href: buildRuneCategoryPath(RUNE_INDEX_PAGE_IDS.general),
    title: RUNE_ARCHIVE_COPY.generalTitle,
    eyebrow: RUNE_ARCHIVE_COPY.generalEyebrow,
    body: RUNE_ARCHIVE_COPY.generalBody,
    categories: ["generalRune", "uniqueRune"],
  },
  {
    id: RUNE_INDEX_PAGE_IDS.true,
    href: buildRuneCategoryPath(RUNE_INDEX_PAGE_IDS.true),
    title: RUNE_ARCHIVE_COPY.trueTitle,
    eyebrow: RUNE_ARCHIVE_COPY.trueEyebrow,
    body: RUNE_ARCHIVE_COPY.trueBody,
    categories: ["trueRune"],
  },
] as const satisfies readonly {
  id: RuneIndexPageId;
  href: string;
  title: string;
  eyebrow: string;
  body: string;
  categories: readonly RuneCategoryId[];
}[];

export type RuneReference = {
  id: string;
  name: string;
  aliases: readonly string[];
  japaneseName?: string;
  category: RuneCategoryId;
  games: readonly string[];
  imageSrc?: string;
  href: string;
};

export type RuneSpellRecord = {
  level: number;
  name: string;
  effect: string;
};

export type RuneFunctionRecord = {
  game: string;
  note?: string;
  spells?: readonly RuneSpellRecord[];
  effects?: readonly string[];
  weaponEffect?: string;
};

export const RUNE_GAME_LABELS = {
  "suikoden-i": "환상수호전 I",
  "suikoden-ii": "환상수호전 II",
  "suikoden-iii": "환상수호전 III",
  "suikoden-iv": "환상수호전 IV",
  "suikoden-v": "환상수호전 V",
  "suikoden-tactics": "환상수호전 택틱스",
  "suikoden-star-leap": "환상수호전 스타 리프",
  unrevealed: "미공개",
} as const;

export const RUNE_FALLBACK_IMAGE = {
  src: "/genso-mark.svg",
  alt: "문장 대체 마크",
} as const;

const buildRuneReference = (
  rune: Omit<RuneReference, "href">,
): RuneReference => {
  return {
    ...rune,
    href: buildRuneDetailPath(rune.id),
  };
};

export const RUNE_REFERENCES = [
  buildRuneReference({
    id: "soul-eater",
    name: "소울이터",
    aliases: ["Soul Eater"],
    japaneseName: "ソウルイーター",
    category: "trueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/soul-eater.png",
  }),
  buildRuneReference({
    id: "bright-shield-rune",
    name: "빛나는 방패의 문장",
    aliases: ["Bright Shield Rune"],
    japaneseName: "輝く盾の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/bright-shield-rune.png",
  }),
  buildRuneReference({
    id: "black-sword-rune",
    name: "검은 검의 문장",
    aliases: ["Black Sword Rune"],
    japaneseName: "黒き刃の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/black-sword-rune.png",
  }),
  buildRuneReference({
    id: "rune-of-beginning",
    name: "시작의 문장",
    aliases: ["Rune of Beginning"],
    japaneseName: "始まりの紋章",
    category: "trueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/rune-of-beginning.png",
  }),
  buildRuneReference({
    id: "rune-of-change",
    name: "변화의 문장",
    aliases: ["Rune of Change"],
    japaneseName: "変化の紋章",
    category: "trueRune",
    games: ["unrevealed"],
    imageSrc: "/rune-icons/rune-of-change.png",
  }),
  buildRuneReference({
    id: "rune-of-punishment",
    name: "벌의 문장",
    aliases: ["Rune of Punishment"],
    japaneseName: "罰の紋章",
    category: "trueRune",
    games: ["suikoden-iv", "suikoden-tactics"],
    imageSrc: "/rune-icons/rune-of-punishment.png",
  }),
  buildRuneReference({
    id: "blue-moon-rune",
    name: "푸른 달의 문장",
    aliases: ["Blue Moon Rune", "Moon Rune"],
    japaneseName: "月の紋章",
    category: "trueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/blue-moon-rune.png",
  }),
  buildRuneReference({
    id: "sovereign-rune",
    name: "패왕의 문장",
    aliases: ["Sovereign Rune"],
    japaneseName: "覇王の紋章",
    category: "trueRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "fire-rune",
    name: "불의 문장",
    aliases: ["Fire Rune"],
    japaneseName: "火の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/fire-rune.png",
  }),
  buildRuneReference({
    id: "water-rune",
    name: "물의 문장",
    aliases: ["Water Rune"],
    japaneseName: "水の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/water-rune.png",
  }),
  buildRuneReference({
    id: "wind-rune",
    name: "바람의 문장",
    aliases: ["Wind Rune"],
    japaneseName: "風の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/wind-rune.png",
  }),
  buildRuneReference({
    id: "lightning-rune",
    name: "번개의 문장",
    aliases: ["Lightning Rune"],
    japaneseName: "雷の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/lightning-rune.png",
  }),
  buildRuneReference({
    id: "thunder-rune",
    name: "천둥의 문장",
    aliases: ["Thunder Rune"],
    japaneseName: "雷鳴の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/thunder-rune.png",
  }),
  buildRuneReference({
    id: "rage-rune",
    name: "열화의 문장",
    aliases: ["Rage Rune"],
    japaneseName: "烈火の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/rage-rune.png",
  }),
  buildRuneReference({
    id: "flowing-rune",
    name: "류수의 문장",
    aliases: ["Flowing Rune"],
    japaneseName: "流水の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/flowing-rune.png",
  }),
  buildRuneReference({
    id: "earth-rune",
    name: "흙의 문장",
    aliases: ["Earth Rune"],
    japaneseName: "土の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/earth-rune.png",
  }),
  buildRuneReference({
    id: "mother-earth-rune",
    name: "대지의 문장",
    aliases: ["Mother Earth Rune"],
    japaneseName: "母なる大地の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/mother-earth-rune.png",
  }),
  buildRuneReference({
    id: "resurrection-rune",
    name: "부활의 문장",
    aliases: ["Resurrection Rune"],
    japaneseName: "破魔の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/resurrection-rune.png",
  }),
  buildRuneReference({
    id: "blue-gate-rune",
    name: "창문의 문장",
    aliases: ["Blue Gate Rune"],
    japaneseName: "蒼き門の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/blue-gate-rune.png",
  }),
  buildRuneReference({
    id: "darkness-rune",
    name: "어둠의 문장",
    aliases: ["Darkness Rune"],
    japaneseName: "闇の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/darkness-rune.png",
  }),
  buildRuneReference({
    id: "cyclone-rune",
    name: "선풍의 문장",
    aliases: ["Cyclone Rune"],
    japaneseName: "旋風の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/cyclone-rune.png",
  }),
  buildRuneReference({
    id: "killer-rune",
    name: "필살의 문장",
    aliases: ["Killer Rune"],
    japaneseName: "必殺の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/killer-rune.png",
  }),
  buildRuneReference({
    id: "turtle-rune",
    name: "거북이의 문장",
    aliases: ["Turtle Rune"],
    japaneseName: "亀の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/turtle-rune.png",
  }),
  buildRuneReference({
    id: "phero-rune",
    name: "페로의 문장",
    aliases: ["Phero Rune"],
    japaneseName: "フェロの紋章",
    category: "generalRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/phero-rune.png",
  }),
  buildRuneReference({
    id: "fortune-rune",
    name: "행운의 문장",
    aliases: ["Fortune Rune"],
    japaneseName: "幸運の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/fortune-rune.png",
  }),
  buildRuneReference({
    id: "counter-rune",
    name: "반격의 문장",
    aliases: ["Counter Rune"],
    japaneseName: "返し刃の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/counter-rune.png",
  }),
  buildRuneReference({
    id: "hazy-rune",
    name: "양지의 문장",
    aliases: ["Hazy Rune"],
    japaneseName: "陽炎の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/hazy-rune.png",
  }),
  buildRuneReference({
    id: "holy-rune",
    name: "신행법의 문장",
    aliases: ["Holy Rune"],
    japaneseName: "神行法の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/holy-rune.png",
  }),
  buildRuneReference({
    id: "true-holy-rune",
    name: "진신행법의 문장",
    aliases: ["True Holy Rune"],
    japaneseName: "真神行法の紋章",
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/true-holy-rune.png",
  }),
  buildRuneReference({
    id: "fury-rune",
    name: "광분의 문장",
    aliases: ["Fury Rune"],
    japaneseName: "怒りの紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "double-beat-rune",
    name: "2회공격의 문장",
    aliases: ["Double Beat Rune", "Double-Beat Rune"],
    japaneseName: "2回攻撃の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "double-strike-rune",
    name: "더블 스트라이크의 문장",
    aliases: ["Double Strike Rune", "Double-Strike Rune"],
    japaneseName: "倍返しの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/double-strike-rune.png",
  }),
  buildRuneReference({
    id: "gale-rune",
    name: "질풍의 문장",
    aliases: ["Gale Rune"],
    japaneseName: "疾風の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/gale-rune.png",
  }),
  buildRuneReference({
    id: "balance-rune",
    name: "밸런스의 문장",
    aliases: ["Balance Rune"],
    japaneseName: "バランスの紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/balance-rune.png",
  }),
  buildRuneReference({
    id: "spark-rune",
    name: "스파크의 문장",
    aliases: ["Spark Rune"],
    japaneseName: "スパークの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/spark-rune.png",
  }),
  buildRuneReference({
    id: "warrior-rune",
    name: "전사의 문장",
    aliases: ["Warrior Rune"],
    japaneseName: "戦士の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/warrior-rune.png",
  }),
  buildRuneReference({
    id: "barrier-rune",
    name: "방벽의 문장",
    aliases: ["Barrier Rune"],
    japaneseName: "バリアーの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "medicine-rune",
    name: "약의 문장",
    aliases: ["Medicine Rune"],
    japaneseName: "薬の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "technique-rune",
    name: "기술의 문장",
    aliases: ["Technique Rune"],
    japaneseName: "技の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "clone-rune",
    name: "분신의 문장",
    aliases: ["Clone Rune"],
    japaneseName: "分身の紋章",
    category: "generalRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/clone-rune.png",
  }),
  buildRuneReference({
    id: "blinking-rune",
    name: "순간이동의 문장",
    aliases: ["Blinking Rune"],
    japaneseName: "瞬きの紋章",
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/blinking-rune.png",
  }),
  buildRuneReference({
    id: "falcon-rune",
    name: "매의 문장",
    aliases: ["Falcon Rune"],
    japaneseName: "はやぶさの紋章",
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/falcon-rune.png",
  }),
  buildRuneReference({
    id: "boar-rune",
    name: "멧돼지의 문장",
    aliases: ["Boar Rune"],
    japaneseName: "猪の紋章",
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/boar-rune.png",
  }),
  buildRuneReference({
    id: "hate-rune",
    name: "증오의 문장",
    aliases: ["Hate Rune"],
    japaneseName: "憎しみの紋章",
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/hate-rune.png",
  }),
  buildRuneReference({
    id: "trick-rune",
    name: "장난감의 문장",
    aliases: ["Trick Rune"],
    japaneseName: "からくりの紋章",
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/rune-icons/trick-rune.png",
  }),
  buildRuneReference({
    id: "fire-breath-rune",
    name: "화염방사의 문장",
    aliases: ["Fire Breath Rune"],
    japaneseName: "火炎放射の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "rabid-fang-rune",
    name: "광아의 문장",
    aliases: ["Rabid Fang Rune"],
    japaneseName: "狂牙の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "howling-rune",
    name: "포효의 문장",
    aliases: ["Howling Rune"],
    japaneseName: "吠え猛るの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "great-hawk-rune",
    name: "큰매의 문장",
    aliases: ["Great Hawk Rune"],
    japaneseName: "大鷹の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/great-hawk-rune.png",
  }),
  buildRuneReference({
    id: "shining-wind-rune",
    name: "빛나는 바람의 문장",
    aliases: ["Shining Wind Rune"],
    japaneseName: "輝く風の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "blessed-white-lady-rune",
    name: "축복받은 백부인의 문장",
    aliases: ["Blessed White Lady Rune"],
    japaneseName: "祝福の白き貴婦人の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/blessed-white-lady-rune.png",
  }),
  buildRuneReference({
    id: "blue-drop-rune",
    name: "푸른 물방울의 문장",
    aliases: ["Blue Drop Rune"],
    japaneseName: "青いしずくの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "fire-dragon-rune",
    name: "화룡의 문장",
    aliases: ["Fire Dragon Rune"],
    japaneseName: "火竜の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "angry-dragon-rune",
    name: "분노한 용의 문장",
    aliases: ["Angry Dragon Rune"],
    japaneseName: "怒れる竜の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "waking-rune",
    name: "각성의 문장",
    aliases: ["Waking Rune"],
    japaneseName: "目覚めの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/waking-rune.png",
  }),
  buildRuneReference({
    id: "spider-slay-rune",
    name: "거미베기의 문장",
    aliases: ["Spider Slay Rune"],
    japaneseName: "蜘蛛斬りの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "unicorn-rune",
    name: "일각수의 문장",
    aliases: ["Unicorn Rune"],
    japaneseName: "一角獣の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/unicorn-rune.png",
  }),
  buildRuneReference({
    id: "knight-rune",
    name: "기사의 문장",
    aliases: ["Knight Rune"],
    japaneseName: "騎士の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "shrike-rune",
    name: "때까치의 문장",
    aliases: ["Shrike Rune"],
    japaneseName: "百舌鳥の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/shrike-rune.png",
  }),
  buildRuneReference({
    id: "mayfly-rune",
    name: "하루살이의 문장",
    aliases: ["Mayfly Rune"],
    japaneseName: "蜉蝣の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "twin-ring-rune",
    name: "쌍륜의 문장",
    aliases: ["Twin Ring Rune"],
    japaneseName: "双輪の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "gadget-rune",
    name: "가젯의 문장",
    aliases: ["Gadget Rune"],
    japaneseName: "ガジェットの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "white-tiger-rune",
    name: "백호의 문장",
    aliases: ["White Tiger Rune"],
    japaneseName: "白虎の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "white-saint-rune",
    name: "백성의 문장",
    aliases: ["White Saint Rune"],
    japaneseName: "白聖の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/white-saint-rune.png",
  }),
  buildRuneReference({
    id: "swallow-rune",
    name: "제비의 문장",
    aliases: ["Swallow Rune"],
    japaneseName: "つばめの紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "groundhog-rune",
    name: "두더지의 문장",
    aliases: ["Groundhog Rune"],
    japaneseName: "土竜の紋章",
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/groundhog-rune.png",
  }),
  buildRuneReference({
    id: "alert-rune",
    name: "경보의 문장",
    aliases: ["Alert Rune"],
    japaneseName: "警報の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/alert-rune.png",
  }),
  buildRuneReference({
    id: "alertness-rune",
    name: "경계심의 문장",
    aliases: ["Alertness Rune"],
    japaneseName: "警戒の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv"],
    imageSrc: "/rune-icons/alertness-rune.png",
  }),
  buildRuneReference({
    id: "back-gate-rune",
    name: "뒷문의 문장",
    aliases: ["Back Gate Rune"],
    japaneseName: "裏門の紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-iii"],
  }),
  buildRuneReference({
    id: "balloon-rune",
    name: "풍선의 문장",
    aliases: ["Balloon Rune"],
    japaneseName: "風船の紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "banshee-rune",
    name: "밴시의 문장",
    aliases: ["Banshee Rune"],
    japaneseName: "バンシーの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "beast-rune",
    name: "짐승의 문장",
    aliases: ["Beast Rune"],
    japaneseName: "獣の紋章",
    category: "trueRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/beast-rune.png",
  }),
  buildRuneReference({
    id: "beast-rune-suikoden-v",
    name: "수마의 문장",
    aliases: ["Beast Rune (Suikoden V)"],
    japaneseName: "獣の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "boost-rune",
    name: "부스트의 문장",
    aliases: ["Boost Rune"],
    japaneseName: "ブーストの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "boronda-hawk-rune",
    name: "보론다 매의 문장",
    aliases: ["Boronda Hawk Rune"],
    japaneseName: "ボロンダ鷹の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "boundary-rune",
    name: "결계의 문장",
    aliases: ["Boundary Rune"],
    japaneseName: "結界の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "bucket-rune",
    name: "양동이의 문장",
    aliases: ["Bucket Rune"],
    japaneseName: "バケツの紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "chameleon-rune",
    name: "카멜레온의 문장",
    aliases: ["Chameleon Rune"],
    japaneseName: "カメレオンの紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "champion-s-rune",
    name: "챔피언의 문장",
    aliases: ["Champion's Rune"],
    japaneseName: "チャンピオンの紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/champion-s-rune.png",
  }),
  buildRuneReference({
    id: "charm-rune",
    name: "매혹의 문장",
    aliases: ["Charm Rune"],
    japaneseName: "魅惑の紋章",
    category: "generalRune",
    games: ["suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/charm-rune.png",
  }),
  buildRuneReference({
    id: "chimera-rune",
    name: "키메라의 문장",
    aliases: ["Chimera Rune"],
    japaneseName: "キメラの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "circle-rune",
    name: "원환의 문장",
    aliases: ["Circle Rune"],
    japaneseName: "円の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/circle-rune.png",
  }),
  buildRuneReference({
    id: "comet-rune",
    name: "혜성의 문장",
    aliases: ["Comet Rune"],
    japaneseName: "彗星の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "conqueror-rune",
    name: "정복자의 문장",
    aliases: ["Conqueror Rune"],
    japaneseName: "征服者の紋章",
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "crazed-rune",
    name: "광기의 문장",
    aliases: ["Crazed Rune"],
    japaneseName: "狂気の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "dawn-rune",
    name: "새벽의 문장",
    aliases: ["Dawn Rune"],
    japaneseName: "黎明の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/dawn-rune.png",
  }),
  buildRuneReference({
    id: "deer-rune",
    name: "사슴의 문장",
    aliases: ["Deer Rune"],
    japaneseName: "鹿の紋章",
    category: "generalRune",
    games: ["suikoden-star-leap"],
  }),
  buildRuneReference({
    id: "devil-s-doll-rune",
    name: "악마 인형의 문장",
    aliases: ["Devil's Doll Rune"],
    japaneseName: "悪魔人形の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "doremi-rune",
    name: "도레미의 문장",
    aliases: ["DoReMi Rune"],
    japaneseName: "ドレミの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/doremi-rune.png",
  }),
  buildRuneReference({
    id: "double-tusk-rune",
    name: "쌍아의 문장",
    aliases: ["Double Tusk Rune"],
    japaneseName: "双牙の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "double-edged-rune",
    name: "양날의 문장",
    aliases: ["Double-Edged Rune"],
    japaneseName: "両刃の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/double-edged-rune.png",
  }),
  buildRuneReference({
    id: "down-rune",
    name: "다운의 문장",
    aliases: ["Down Rune"],
    japaneseName: "ダウンの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "dragon-rune",
    name: "용의 문장",
    aliases: ["Dragon Rune"],
    japaneseName: "竜の紋章",
    category: "trueRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/dragon-rune.png",
  }),
  buildRuneReference({
    id: "drain-rune",
    name: "흡수의 문장",
    aliases: ["Drain Rune"],
    japaneseName: "吸収の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/drain-rune.png",
  }),
  buildRuneReference({
    id: "dryad-rune",
    name: "드라이어드의 문장",
    aliases: ["Dryad Rune"],
    japaneseName: "ドライアドの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "eagle-rune",
    name: "독수리의 문장",
    aliases: ["Eagle Rune"],
    japaneseName: "鷲の紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "eight-devil-rune",
    name: "팔귀의 문장",
    aliases: ["Eight Devil Rune"],
    japaneseName: "八鬼の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "eightfold-rune",
    name: "팔방의 문장",
    aliases: ["Eightfold Rune"],
    japaneseName: "八房の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "equilibrium-rune",
    name: "균형의 문장",
    aliases: ["Equilibrium Rune"],
    japaneseName: "均衡の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/equilibrium-rune.png",
  }),
  buildRuneReference({
    id: "exertion-rune",
    name: "분발의 문장",
    aliases: ["Exertion Rune"],
    japaneseName: "奮起の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "fierce-tiger-rune",
    name: "맹호의 문장",
    aliases: ["Fierce Tiger Rune"],
    japaneseName: "猛虎の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "fire-lizard-rune",
    name: "불도마뱀의 문장",
    aliases: ["Fire Lizard Rune"],
    japaneseName: "火蜥蜴の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/rune-icons/fire-lizard-rune.png",
  }),
  buildRuneReference({
    id: "fire-sealing-rune",
    name: "불 봉인의 문장",
    aliases: ["Fire Sealing Rune"],
    japaneseName: "火封じの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/rune-icons/fire-sealing-rune.png",
  }),
  buildRuneReference({
    id: "firefly-rune",
    name: "반딧불의 문장",
    aliases: ["Firefly Rune"],
    japaneseName: "ほたるの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "flow-rune",
    name: "흐름의 문장",
    aliases: ["Flow Rune"],
    japaneseName: "流れの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "flowing-sword-rune",
    name: "흐르는 검의 문장",
    aliases: ["Flowing Sword Rune"],
    japaneseName: "流水剣の紋章",
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "friendship-rune",
    name: "우정의 문장",
    aliases: ["Friendship Rune"],
    japaneseName: "友情の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "front-gate-rune",
    name: "앞문의 문장",
    aliases: ["Front Gate Rune"],
    japaneseName: "表門の紋章",
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "full-moon-rune",
    name: "보름달의 문장",
    aliases: ["Full Moon Rune"],
    japaneseName: "満月の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "gate-rune",
    name: "문의 문장",
    aliases: ["Gate Rune"],
    japaneseName: "門の紋章",
    category: "trueRune",
    games: ["suikoden-i"],
    imageSrc: "/rune-icons/gate-rune.png",
  }),
  buildRuneReference({
    id: "giant-owl-rune",
    name: "큰올빼미의 문장",
    aliases: ["Giant Owl Rune"],
    japaneseName: "大ふくろうの紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "godspeed-rune",
    name: "신속의 문장",
    aliases: ["Godspeed Rune"],
    japaneseName: "神速の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/godspeed-rune.png",
  }),
  buildRuneReference({
    id: "gozz-rune",
    name: "고즈의 문장",
    aliases: ["Gozz Rune"],
    japaneseName: "ゴズの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics"],
    imageSrc: "/rune-icons/gozz-rune.png",
  }),
  buildRuneReference({
    id: "great-firefly-rune",
    name: "큰반딧불의 문장",
    aliases: ["Great Firefly Rune"],
    japaneseName: "大ほたるの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "hawk-rune",
    name: "호크의 문장",
    aliases: ["Hawk Rune"],
    japaneseName: "鷹の紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
    imageSrc: "/rune-icons/hawk-rune.png",
  }),
  buildRuneReference({
    id: "haziness-rune",
    name: "몽롱의 문장",
    aliases: ["Haziness Rune"],
    japaneseName: "朧の紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
    imageSrc: "/rune-icons/haziness-rune.png",
  }),
  buildRuneReference({
    id: "hunter-rune",
    name: "사냥꾼의 문장",
    aliases: ["Hunter Rune"],
    japaneseName: "狩人の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "isshin-rune",
    name: "일심의 문장",
    aliases: ["Isshin Rune"],
    japaneseName: "一心の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "jongleur-rune",
    name: "곡예사의 문장",
    aliases: ["Jongleur Rune"],
    japaneseName: "曲芸師の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/jongleur-rune.png",
  }),
  buildRuneReference({
    id: "kangacorn-rune",
    name: "캥거콘의 문장",
    aliases: ["Kangacorn Rune"],
    japaneseName: "カンガコーンの紋章",
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "kindness-rune",
    name: "상냥함의 문장",
    aliases: ["Kindness Rune"],
    japaneseName: "親切の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "kite-rune",
    name: "솔개의 문장",
    aliases: ["Kite Rune"],
    japaneseName: "鳶の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/rune-icons/kite-rune.png",
  }),
  buildRuneReference({
    id: "lion-rune",
    name: "사자의 문장",
    aliases: ["Lion Rune"],
    japaneseName: "獅子の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/lion-rune.png",
  }),
  buildRuneReference({
    id: "lion-s-trial-rune",
    name: "사자의 시련의 문장",
    aliases: ["Lion's Trial Rune"],
    japaneseName: "獅子の試練の紋章",
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "magic-absorb-rune",
    name: "마력 흡수의 문장",
    aliases: ["Magic Absorb Rune"],
    japaneseName: "魔力吸収の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "magic-drain-rune",
    name: "마력 배출의 문장",
    aliases: ["Magic Drain Rune"],
    japaneseName: "魔力排出の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "magical-rune",
    name: "마법의 문장",
    aliases: ["Magical Rune"],
    japaneseName: "魔法の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "mallet-rune",
    name: "망치의 문장",
    aliases: ["Mallet Rune"],
    japaneseName: "小槌の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "minotaur-rune",
    name: "미노타우로스의 문장",
    aliases: ["Minotaur Rune"],
    japaneseName: "ミノタウロスの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "mischief-rune",
    name: "장난의 문장",
    aliases: ["Mischief Rune"],
    japaneseName: "いたずらの紋章",
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "mother-earth-sword-rune",
    name: "대지검의 문장",
    aliases: ["Mother Earth Sword Rune"],
    japaneseName: "母なる大地剣の紋章",
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "multi-strike-rune",
    name: "연속타격의 문장",
    aliases: ["Multi-Strike Rune"],
    japaneseName: "連続攻撃の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "night-rune",
    name: "밤의 문장",
    aliases: ["Night Rune"],
    japaneseName: "夜の紋章",
    category: "trueRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
  }),
  buildRuneReference({
    id: "nymph-rune",
    name: "님프의 문장",
    aliases: ["Nymph Rune"],
    japaneseName: "ニンフの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "ogre-rune",
    name: "오거의 문장",
    aliases: ["Ogre Rune"],
    japaneseName: "オーガの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "pale-gate-rune",
    name: "창백한 문의 문장",
    aliases: ["Pale Gate Rune"],
    japaneseName: "青白き門の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/rune-icons/pale-gate-rune.png",
  }),
  buildRuneReference({
    id: "parent-turtle-rune",
    name: "어미거북의 문장",
    aliases: ["Parent Turtle Rune"],
    japaneseName: "親亀の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "phoenix-rune",
    name: "불사조의 문장",
    aliases: ["Phoenix Rune"],
    japaneseName: "不死鳥の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "pixie-rune",
    name: "픽시의 문장",
    aliases: ["Pixie Rune"],
    japaneseName: "ピクシーの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
    imageSrc: "/rune-icons/pixie-rune.png",
  }),
  buildRuneReference({
    id: "poison-rune",
    name: "독의 문장",
    aliases: ["Poison Rune"],
    japaneseName: "毒の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
  }),
  buildRuneReference({
    id: "power-rune",
    name: "힘의 문장",
    aliases: ["Power Rune"],
    japaneseName: "力の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "prosperity-rune",
    name: "번영의 문장",
    aliases: ["Prosperity Rune"],
    japaneseName: "繁栄の紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/prosperity-rune.png",
  }),
  buildRuneReference({
    id: "raven-rune",
    name: "까마귀의 문장",
    aliases: ["Raven Rune"],
    japaneseName: "烏の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "rune-of-condemnation",
    name: "단죄의 문장",
    aliases: ["Rune of Condemnation"],
    japaneseName: "断罪の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "red-rose-rune",
    name: "붉은 장미의 문장",
    aliases: ["Red Rose Rune"],
    japaneseName: "赤い薔薇の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/red-rose-rune.png",
  }),
  buildRuneReference({
    id: "ripple-rune",
    name: "파문의 문장",
    aliases: ["Ripple Rune"],
    japaneseName: "波紋の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "shield-rune",
    name: "방패의 문장",
    aliases: ["Shield Rune"],
    japaneseName: "盾の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-v"],
    imageSrc: "/rune-icons/shield-rune.png",
  }),
  buildRuneReference({
    id: "shining-wing-rune",
    name: "빛나는 날개의 문장",
    aliases: ["Shining Wing Rune"],
    japaneseName: "輝く翼の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "sickle-rune",
    name: "낫의 문장",
    aliases: ["Sickle Rune"],
    japaneseName: "鎌の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "sickle-weasle-rune",
    name: "족제비낫의 문장",
    aliases: ["Sickle-Weasle Rune"],
    japaneseName: "かまいたちの紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "silence-rune",
    name: "침묵의 문장",
    aliases: ["Silence Rune"],
    japaneseName: "沈黙の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "skunk-rune",
    name: "스컹크의 문장",
    aliases: ["Skunk Rune"],
    japaneseName: "スカンクの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "slash-rune",
    name: "참격의 문장",
    aliases: ["Slash Rune"],
    japaneseName: "斬撃の紋章",
    category: "generalRune",
    games: ["suikoden-iv"],
  }),
  buildRuneReference({
    id: "sleep-rune",
    name: "수면의 문장",
    aliases: ["Sleep Rune"],
    japaneseName: "眠りの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
    imageSrc: "/rune-icons/sleep-rune.png",
  }),
  buildRuneReference({
    id: "solitude-rune",
    name: "고독의 문장",
    aliases: ["Solitude Rune"],
    japaneseName: "孤独の紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "sound-rune",
    name: "소리의 문장",
    aliases: ["Sound Rune"],
    japaneseName: "音の紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii"],
  }),
  buildRuneReference({
    id: "spreading-flame-rune",
    name: "번지는 불꽃의 문장",
    aliases: ["Spreading Flame Rune"],
    japaneseName: "広がる炎の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "star-rune",
    name: "별의 문장",
    aliases: ["Star Rune"],
    japaneseName: "星の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/star-rune.png",
  }),
  buildRuneReference({
    id: "steel-rune",
    name: "강철의 문장",
    aliases: ["Steel Rune"],
    japaneseName: "鋼の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "strike-back-rune",
    name: "되받아치기의 문장",
    aliases: ["Strike-Back Rune"],
    japaneseName: "反撃の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "sun-rune",
    name: "태양의 문장",
    aliases: ["Sun Rune"],
    japaneseName: "太陽の紋章",
    category: "trueRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/sun-rune.png",
  }),
  buildRuneReference({
    id: "sunbeam-rune",
    name: "햇살의 문장",
    aliases: ["Sunbeam Rune"],
    japaneseName: "日光の紋章",
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/sunbeam-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-cyclone-rune",
    name: "선풍검의 문장",
    aliases: ["Sword of Cyclone Rune"],
    japaneseName: "旋風剣の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/sword-of-cyclone-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-rage-rune",
    name: "열화검의 문장",
    aliases: ["Sword of Rage Rune"],
    japaneseName: "烈火剣の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/sword-of-rage-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-thunder-rune",
    name: "천둥검의 문장",
    aliases: ["Sword of Thunder Rune"],
    japaneseName: "雷鳴剣の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/sword-of-thunder-rune.png",
  }),
  buildRuneReference({
    id: "sylph-rune",
    name: "실프의 문장",
    aliases: ["Sylph Rune"],
    japaneseName: "シルフの紋章",
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "titan-rune",
    name: "타이탄의 문장",
    aliases: ["Titan Rune"],
    japaneseName: "タイタンの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/titan-rune.png",
  }),
  buildRuneReference({
    id: "true-earth-rune",
    name: "진정한 대지의 문장",
    aliases: ["True Earth Rune"],
    japaneseName: "真なる土の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/true-earth-rune.png",
  }),
  buildRuneReference({
    id: "true-fire-rune",
    name: "진정한 불의 문장",
    aliases: ["True Fire Rune"],
    japaneseName: "真なる火の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/true-fire-rune.png",
  }),
  buildRuneReference({
    id: "true-lightning-rune",
    name: "진정한 번개의 문장",
    aliases: ["True Lightning Rune"],
    japaneseName: "真なる雷の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/true-lightning-rune.png",
  }),
  buildRuneReference({
    id: "true-water-rune",
    name: "진정한 물의 문장",
    aliases: ["True Water Rune"],
    japaneseName: "真なる水の紋章",
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/rune-icons/true-water-rune.png",
  }),
  buildRuneReference({
    id: "true-wind-rune",
    name: "진정한 바람의 문장",
    aliases: ["True Wind Rune"],
    japaneseName: "真なる風の紋章",
    category: "trueRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
    imageSrc: "/rune-icons/true-wind-rune.png",
  }),
  buildRuneReference({
    id: "twilight-rune",
    name: "황혼의 문장",
    aliases: ["Twilight Rune"],
    japaneseName: "黄昏の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/rune-icons/twilight-rune.png",
  }),
  buildRuneReference({
    id: "venom-rune",
    name: "맹독의 문장",
    aliases: ["Venom Rune"],
    japaneseName: "猛毒の紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "violence-rune",
    name: "폭력의 문장",
    aliases: ["Violence Rune"],
    japaneseName: "暴力の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "viper-rune",
    name: "독사의 문장",
    aliases: ["Viper Rune"],
    japaneseName: "毒蛇の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/rune-icons/viper-rune.png",
  }),
  buildRuneReference({
    id: "wall-rune",
    name: "벽의 문장",
    aliases: ["Wall Rune"],
    japaneseName: "壁の紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/rune-icons/wall-rune.png",
  }),
  buildRuneReference({
    id: "war-horse-rune",
    name: "군마의 문장",
    aliases: ["War Horse Rune"],
    japaneseName: "軍馬の紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "water-sealing-rune",
    name: "물 봉인의 문장",
    aliases: ["Water Sealing Rune"],
    japaneseName: "水封じの紋章",
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "window-rune",
    name: "윈도우의 문장",
    aliases: ["Window Rune"],
    japaneseName: "窓の紋章",
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "wizard-rune",
    name: "마법사의 문장",
    aliases: ["Wizard Rune"],
    japaneseName: "魔法使いの紋章",
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics"],
    imageSrc: "/rune-icons/wizard-rune.png",
  }),
  buildRuneReference({
    id: "wrath-rune",
    name: "격노의 문장",
    aliases: ["Wrath Rune"],
    japaneseName: "激怒の紋章",
    category: "generalRune",
    games: ["suikoden-iii","suikoden-v"],
  }),
  buildRuneReference({
    id: "zexen-rune",
    name: "젝센의 문장",
    aliases: ["Zexen Rune"],
    japaneseName: "ゼクセンの紋章",
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
] as const;

const RUNE_ACTIVE_FUNCTION_IDS = new Set<string>([
  "angry-dragon-rune",
  "banshee-rune",
  "beast-rune",
  "beast-rune-suikoden-v",
  "black-sword-rune",
  "blessed-white-lady-rune",
  "blinking-rune",
  "blue-drop-rune",
  "blue-gate-rune",
  "boar-rune",
  "boronda-hawk-rune",
  "bright-shield-rune",
  "charm-rune",
  "chimera-rune",
  "clone-rune",
  "comet-rune",
  "cyclone-rune",
  "darkness-rune",
  "dawn-rune",
  "deer-rune",
  "devil-s-doll-rune",
  "doremi-rune",
  "double-tusk-rune",
  "dryad-rune",
  "eagle-rune",
  "earth-rune",
  "eight-devil-rune",
  "falcon-rune",
  "fierce-tiger-rune",
  "fire-breath-rune",
  "fire-dragon-rune",
  "fire-rune",
  "flowing-rune",
  "flowing-sword-rune",
  "front-gate-rune",
  "full-moon-rune",
  "gadget-rune",
  "giant-owl-rune",
  "gozz-rune",
  "great-hawk-rune",
  "groundhog-rune",
  "hate-rune",
  "hawk-rune",
  "howling-rune",
  "isshin-rune",
  "jongleur-rune",
  "kangacorn-rune",
  "kite-rune",
  "lightning-rune",
  "lion-rune",
  "lion-s-trial-rune",
  "mallet-rune",
  "mayfly-rune",
  "minotaur-rune",
  "mother-earth-rune",
  "mother-earth-sword-rune",
  "nymph-rune",
  "ogre-rune",
  "pale-gate-rune",
  "parent-turtle-rune",
  "phoenix-rune",
  "pixie-rune",
  "rabid-fang-rune",
  "rage-rune",
  "red-rose-rune",
  "resurrection-rune",
  "ripple-rune",
  "rune-of-condemnation",
  "shield-rune",
  "shining-wind-rune",
  "shining-wing-rune",
  "shrike-rune",
  "sickle-rune",
  "sickle-weasle-rune",
  "slash-rune",
  "soul-eater",
  "sound-rune",
  "spider-slay-rune",
  "spreading-flame-rune",
  "star-rune",
  "swallow-rune",
  "sylph-rune",
  "thunder-rune",
  "titan-rune",
  "trick-rune",
  "true-earth-rune",
  "true-fire-rune",
  "true-lightning-rune",
  "true-water-rune",
  "true-wind-rune",
  "twin-ring-rune",
  "unicorn-rune",
  "viper-rune",
  "war-horse-rune",
  "water-rune",
  "white-saint-rune",
  "white-tiger-rune",
  "wind-rune",
  "window-rune",
  "wrath-rune",
]);

export const RUNE_TRUE_RUNE_DESCRIPTIONS = {
  "beast-rune": [
    "동물적인 분노와 격정을 상징하는 진정한 문장입니다. 하르모니아가 블라이트 가문에 하사한 것으로 알려졌지만, 실제로는 문장 자신의 의지로 루루노이에에 깃든 것으로 전해집니다.",
    "루카 브라이트가 그 힘에 관심을 보인 뒤 전쟁 병기로 각성했고, 피의 제물을 통해 금빛 늑대와 은빛 늑대의 형상으로 모습을 드러냈습니다.",
  ],
  "rune-of-beginning": [
    "창조의 순간에 깃든 최초의 혼돈을 상징하는 진정한 문장입니다. 일반적으로 빛나는 방패의 문장과 검은 검의 문장으로 나뉜 상태로 나타납니다.",
    "두 반쪽의 소유자는 서로 맞서도록 운명지어지며, 완전한 형태의 힘은 전쟁을 심판하는 권능과 연결된다고 전해집니다.",
  ],
  "blue-moon-rune": [
    "자비와 파괴를 함께 품은 진정한 문장입니다. 소유자를 흡혈귀로 바꾸는 강한 저주를 지녔고, 힘을 다스리지 못하면 소유자의 정신까지 지배합니다.",
    "시에라 미카인은 긴 시간 끝에 그 충동을 억누르는 법을 익혔으나, 네크로드가 문장을 빼앗으면서 푸른 달 마을의 불멸과 저주가 무너졌습니다.",
  ],
  "rune-of-change": [
    "우주 전체의 변화를 관장한다고 알려진 진정한 문장입니다. 구체적인 힘과 소재는 거의 밝혀지지 않았습니다.",
    "신다르의 지도자가 이 문장을 지녔다는 전승이 있으며, 신다르가 오랜 세월 이동을 계속한 운명과도 연결된다고 여겨집니다.",
  ],
  "circle-rune": [
    "질서와 정체를 상징하는 진정한 문장입니다. 하르모니아 신성국의 이름과 통치 이념은 이 문장이 가진 조화의 힘에서 비롯된 것으로 전해집니다.",
    "소유자인 히쿠사크의 행방과 실제 권능은 불분명하지만, 학자들은 최근 하르모니아의 정체가 이 문장의 성향과 무관하지 않다고 봅니다.",
  ],
  "dragon-rune": [
    "용이 세계에 존재할 수 있게 하는 진정한 문장입니다. 용을 통제하는 권능도 함께 지닌 것으로 알려져 있습니다.",
    "용기사단의 지도자가 계승해 온 문장으로, 조슈아 레벤하이트와 밀리아의 계보를 통해 용기사단의 정통성과 연결됩니다.",
  ],
  "eightfold-rune": [
    "유버가 지닌 것으로 알려진 진정한 문장입니다. 정확한 권능은 공개되지 않았습니다.",
    "괴물을 부리거나 소환하는 듯한 유버의 힘, 그리고 순간이동 능력이 이 문장에서 비롯된 것이라는 추정만 남아 있습니다.",
  ],
  "gate-rune": [
    "세계와 세계를 잇는 힘을 지닌 진정한 문장입니다. 푸른 문의 문장은 이 문장에서 파생된 힘으로 설명됩니다.",
    "문장 일족이 오랫동안 수호했으나 하르모니아의 침공 뒤 앞문의 문장과 뒷문의 문장으로 나뉘어 윈디와 레크나트에게 이어졌습니다.",
  ],
  "night-rune": [
    "밤의 힘을 상징하는 진정한 문장입니다. 언데드와 흡혈귀 같은 밤의 존재들이 세계에 머무를 수 있게 하는 힘과 연결됩니다.",
    "별의 검이 밤의 문장의 화신인지, 혹은 검에 문장이 깃든 것인지는 논쟁이 있지만, 그 검은 밤의 존재를 베는 힘을 지닙니다.",
  ],
  "soul-eater": [
    "생명과 죽음을 상징하는 진정한 문장으로, 생명을 먹는 문장이라는 별명처럼 강력한 저주를 품고 있습니다.",
    "소유자 주변의 운명을 죽음으로 끌어당기며, 죽은 이들의 혼을 문장 안에 품는 것으로 전해집니다. 테드와 티르 맥돌의 삶을 크게 바꾼 문장입니다.",
  ],
  "rune-of-punishment": [
    "속죄와 용서를 관장하는 진정한 문장입니다. 왼팔에 깃들며, 압도적인 파괴력을 발휘하는 대신 소유자의 생명력을 대가로 삼습니다.",
    "소유자의 생명이 다하면 기억을 흡수하고 다음 숙주로 옮겨 가는 치명적인 저주로 악명 높으며, 운명의 별들이 모였을 때 용서의 국면으로 전환됩니다.",
  ],
  "sovereign-rune": [
    "절대 지배를 상징하는 진정한 문장입니다. 루그너 가문의 가보로 전해졌고, 바르바롯사의 용왕검에 봉인되어 있었습니다.",
    "모든 문장의 힘을 무효화하는 권능과 삼두룡으로 변하는 힘을 지닌 것으로 알려졌으나, 바르바롯사의 최후 이후 행방은 불명입니다.",
  ],
  "sun-rune": [
    "태양의 양육과 파괴를 동시에 품은 진정한 문장입니다. 과거 밤의 문장과 이어져 있었으나, 밤의 문장이 검의 형태를 취하며 분리된 것으로 전해집니다.",
    "팔레나에서는 너무 위험한 힘으로 여겨져 봉인 관리되었고, 새벽의 문장과 황혼의 문장이 균형을 맞추지 못하면 소유자의 정신을 잠식할 수 있습니다.",
  ],
  "true-earth-rune": [
    "대지의 힘을 대표하는 진정한 문장입니다. 흙의 문장과 대지의 문장은 이 문장에서 파생된 계열로 설명됩니다.",
    "현재는 신관장 사사라이가 지닌 것으로 알려져 있으며, 광범위한 방어와 보호의 술법을 가능하게 합니다.",
  ],
  "true-fire-rune": [
    "불의 힘을 대표하는 진정한 문장입니다. 불의 문장과 열화의 문장은 이 문장에서 비롯된 계열입니다.",
    "불꽃의 영웅이 하르모니아에서 빼앗아 독립 전쟁의 상징으로 삼았으며, 강력한 화염 술법은 아군과 적군을 함께 휘말리게 할 만큼 위험합니다.",
  ],
  "true-lightning-rune": [
    "번개의 힘을 대표하는 진정한 문장입니다. 번개의 문장과 천둥의 문장은 이 문장에서 파생된 것으로 설명됩니다.",
    "게드가 멸망한 조국에서 가지고 나온 뒤 불꽃의 영웅을 도왔고, 이후 봉인해 두었던 힘을 제2차 불꽃의 영웅 전쟁에서 다시 해방했습니다.",
  ],
  "true-water-rune": [
    "물의 힘을 대표하는 진정한 문장입니다. 물의 문장과 류수의 문장은 이 문장의 하위 계열로 볼 수 있습니다.",
    "와이어트 라이트펠로가 소유했던 문장으로, 불꽃의 영웅 전쟁 이후 여러 장소에 봉인되었다가 다시 계승되었습니다. 치유와 공격 양쪽에 강한 술법을 부여합니다.",
  ],
  "true-wind-rune": [
    "바람의 힘을 대표하는 진정한 문장입니다. 바람의 문장과 선풍의 문장은 이 문장에서 비롯된 계열입니다.",
    "루크가 오랫동안 소유했던 문장으로, 골렘 소환과 강력한 바람 술법에 쓰였습니다. 그는 이 문장을 파괴하려 했지만 새로운 불꽃의 영웅의 저항으로 실패했습니다.",
  ],
} as const satisfies Record<string, readonly string[]>;

export const RUNE_GENERAL_RUNE_DESCRIPTIONS = {
  "bright-shield-rune": [
    "시작의 문장을 이루는 두 반쪽 중 하나로, 검은 검의 문장과 짝을 이루는 방어와 치유의 힘입니다.",
  ],
  "black-sword-rune": [
    "시작의 문장을 이루는 두 반쪽 중 하나로, 빛나는 방패의 문장과 대립하는 공격적인 힘입니다.",
  ],
  "fire-rune": [
    "불 계열 기본 문장으로, 화염 공격 마법을 사용할 수 있습니다. 상위 문장인 열화의 문장으로 이어집니다.",
  ],
  "water-rune": [
    "회복을 중심으로 운용되는 물 계열 기본 문장입니다. 상위 문장인 류수의 문장으로 이어집니다.",
  ],
  "wind-rune": [
    "바람 계열 기본 문장으로, 회복과 공격 주문을 함께 다룹니다. 상위 문장인 선풍의 문장으로 이어집니다.",
  ],
  "lightning-rune": [
    "번개 계열 기본 문장으로, 단일 대상과 복수 대상을 공격하는 마법을 사용할 수 있습니다. 상위 문장인 천둥의 문장으로 이어집니다.",
  ],
  "thunder-rune": [
    "번개의 문장보다 강한 상위 문장으로, 고급 번개 마법을 사용할 수 있습니다.",
  ],
  "rage-rune": [
    "불의 문장보다 강한 상위 문장으로, 고급 화염 마법을 사용할 수 있습니다.",
  ],
  "flowing-rune": [
    "물의 문장보다 강한 상위 문장으로, 강력한 회복 주문과 일부 공격 주문을 다룹니다.",
  ],
  "earth-rune": [
    "흙 계열 기본 문장으로, 주로 지원 마법과 일부 공격 마법에 쓰입니다. 상위 문장인 대지의 문장으로 이어집니다.",
  ],
  "mother-earth-rune": [
    "흙의 문장보다 강한 상위 문장으로, 대지의 힘을 끌어내는 강력한 속성 문장입니다.",
  ],
  "resurrection-rune": [
    "빛 계열 마법을 담은 문장으로, 언데드 계열 적에게 강하고 회복과 공격 양쪽에 특화됩니다.",
  ],
  "blue-gate-rune": [
    "창백한 문의 문장 계열로, 다른 세계의 존재를 불러내 적을 공격하는 소환 문장입니다.",
  ],
  "darkness-rune": [
    "소울이터 계열의 하위 문장으로 언급되며, 어둠의 힘을 다루는 문장입니다.",
  ],
  "cyclone-rune": [
    "바람의 문장보다 강한 상위 문장으로, 고급 바람 마법을 사용할 수 있습니다.",
  ],
  "killer-rune": [
    "착용자의 치명타 확률을 높이는 전투 보조 문장입니다.",
  ],
  "turtle-rune": [
    "착용자가 상태 이상이나 특정 전투 불이익을 받지 않도록 보조하는 방어형 문장입니다.",
  ],
  "phero-rune": [
    "이성 동료가 착용자를 대신 보호할 수 있게 하는 특수 지원 문장입니다.",
  ],
  "fortune-rune": [
    "전투에서 얻는 경험치를 두 배로 늘리는 성장 보조 문장입니다.",
  ],
  "counter-rune": [
    "직접 공격을 받은 뒤 반격할 가능성을 높이는 물리 보조 문장입니다.",
  ],
  "hazy-rune": [
    "회피와 관련된 효과를 지닌 보조 문장으로, 흐릿함 계열 표기로도 정리됩니다.",
  ],
  "holy-rune": [
    "다리 힘과 이동 속도를 높인다고 전해지는 이동 보조 문장입니다.",
  ],
  "true-holy-rune": [
    "이름과 달리 진정한 문장은 아니며, 이동 능력을 크게 높이는 고유 문장입니다.",
  ],
  "fury-rune": [
    "착용자를 전투 중 광전사 상태로 만들어 공격성을 높이는 문장입니다.",
  ],
  "double-beat-rune": [
    "일반 공격 횟수를 늘려 한 턴의 물리 공격 효율을 높이는 문장입니다.",
  ],
  "double-strike-rune": [
    "주는 피해를 크게 높이는 대신 받는 피해도 늘어나는 고위험 물리 강화 문장입니다.",
  ],
  "gale-rune": [
    "속도를 높여 적보다 먼저 행동할 가능성을 키우는 보조 문장입니다.",
  ],
  "balance-rune": [
    "착용자가 자세를 무너뜨리는 상태가 되는 것을 막는 안정화 문장입니다.",
  ],
  "spark-rune": [
    "전투에서 아군의 행동 순서를 조정해 빠른 캐릭터 뒤에 다른 아군이 이어서 행동하게 합니다.",
  ],
  "technique-rune": [
    "무기에 붙여 직접 공격 시 일정 확률로 적에게서 돈을 훔치게 하는 문장입니다.",
  ],
  "clone-rune": [
    "양손 무기 사용자에게 맞춰진 근접 공격 문장으로, 분신을 활용한 공격에 쓰입니다.",
  ],
  "blinking-rune": [
    "적을 멀리 보내거나 물체를 전장으로 불러와 피해를 주는 순간이동 계열 문장입니다.",
  ],
  "falcon-rune": [
    "하이아류 검술과 관련된 고유 문장으로, 발레리아의 대표 공격 문장입니다.",
  ],
  "boar-rune": [
    "맨손 전투용 문장으로, 한 턴 동안 일반 공격 피해를 높이는 대신 자세가 무너집니다.",
  ],
  "hate-rune": [
    "로니 벨의 고유 문장으로, 특정 적에게 강한 불 속성 피해를 주는 공격 문장입니다.",
  ],
  "fire-breath-rune": [
    "볼간의 고유 문장으로, 적 하나에게 큰 피해를 주지만 사용 뒤 자세가 무너집니다.",
  ],
  "rabid-fang-rune": [
    "밥의 고유 문장으로, 늑대인간의 본모습을 끌어내 전투 능력을 강화합니다.",
  ],
  "howling-rune": [
    "아군 몬스터에게 분노 상태를 부여하는 드문 지원 문장입니다.",
  ],
  "blessed-white-lady-rune": [
    "지그프리드의 고유 문장으로, 일반적인 고유 문장보다 다양한 기술을 지닌 공격 문장입니다.",
  ],
  "blue-drop-rune": [
    "아비즈보아와 루로디아의 고유 문장으로, 적에게 피해를 주지만 사용 뒤 자세가 무너집니다.",
  ],
  "fire-dragon-rune": [
    "적 하나에게 큰 화염 피해를 주며, 사용자는 반동 피해를 받습니다.",
  ],
  "angry-dragon-rune": [
    "적 하나에게 큰 피해를 주는 고유 공격 문장으로, 전투마다 사용 횟수가 제한됩니다.",
  ],
  "spider-slay-rune": [
    "신의 고유 문장으로, 적 하나에게 큰 피해를 주지만 한 전투에 한 번만 사용할 수 있습니다.",
  ],
  "shrike-rune": [
    "닌자들이 주로 사용하는 특수 문장으로, 빠르고 강한 근접 기술과 연결됩니다.",
  ],
  "mayfly-rune": [
    "몬도의 고유 문장으로, 한 줄의 적을 공격하는 범위형 기술에 쓰입니다.",
  ],
  "twin-ring-rune": [
    "카렌의 고유 문장으로, 적 하나에게 큰 피해를 주지만 사용 후 자세가 무너질 수 있습니다.",
  ],
  "groundhog-rune": [
    "밀리의 고유 문장으로, 적 하나에게 큰 피해를 주지만 전투마다 사용 횟수가 제한됩니다.",
  ],
  "back-gate-rune": [
    "문의 문장이 윈디와 레크나트에 의해 나뉘며 생긴 두 반쪽 중 하나입니다.",
  ],
  "balloon-rune": [
    "공격한 적에게 풍선 상태를 부여할 가능성이 있는 특수 상태 이상 문장입니다.",
  ],
  "banshee-rune": [
    "대상 아군에게서 체력을 흡수하는 효과를 지닌 환상수호전 II의 문장입니다.",
  ],
  "beast-rune-suikoden-v": [
    "에른스트의 고유 문장으로, 그가 표범 모습에 갇히게 된 원인입니다. 전투에서는 인간 모습으로 변신하거나 포효와 발톱 공격을 사용하는 힘과 연결됩니다.",
  ],
  "boost-rune": [
    "일정 턴 동안 물리 피해를 두 배로 늘리지만, 이후 사용자의 체력이 1로 줄어듭니다.",
  ],
  "boronda-hawk-rune": [
    "자크의 고유 문장으로, 모든 적에게 낮은 배율의 피해를 주며 전투마다 한 번 사용할 수 있습니다.",
  ],
  "boundary-rune": [
    "마법 피해를 크게 줄이는 대신 물리 방어가 0이 되는 극단적인 방어 문장입니다.",
  ],
  "bucket-rune": [
    "공격한 적에게 양동이 상태를 부여할 가능성이 있는 특수 상태 이상 문장입니다.",
  ],
  "chameleon-rune": [
    "착용자의 속성 친화가 날마다 바뀌는 독특한 속성 보조 문장입니다.",
  ],
  "champion-s-rune": [
    "착용자의 레벨을 기준으로 약한 적과의 조우를 피하게 해 주는 탐색 보조 문장입니다.",
  ],
  "charm-rune": [
    "진이 사용하는 특수 문장으로, 그녀가 플레이어블로 등장하는 작품마다 함께 등장합니다.",
  ],
  "chimera-rune": [
    "착용자의 부정적 상태를 다른 파티원에게 옮기며, 긍정적 상태도 함께 제거합니다.",
  ],
  "comet-rune": [
    "벨의 고유 문장으로, 대상과 주변 적에게 피해를 주지만 사용 후 자세가 무너집니다.",
  ],
  "conqueror-rune": [
    "검은 문장으로도 불리며, 윈디가 제국 오장군 일부에게 부여한 지배 계열 문장입니다.",
  ],
  "crazed-rune": [
    "전투 중 광전사 상태가 되어 피해가 늘지만 명중과 행동 제어에 불이익을 받습니다.",
  ],
  "dawn-rune": [
    "팔레나의 세 문장 중 하나로, 태양의 문장과 함께 왕가의 문장 체계에 속합니다.",
  ],
  "deer-rune": [
    "환상수호전 스타 리프에 등장하는 문장으로, 유연한 지팡이를 이용한 고통스러운 타격 기술과 연결됩니다.",
  ],
  "devil-s-doll-rune": [
    "멜의 고유 문장으로, 적 하나에게 강한 화염 기반 물리 피해를 줍니다.",
  ],
  "doremi-rune": [
    "코르네리오의 고유 문장으로, 도레미 엘프의 소리를 활용하는 기술과 연결됩니다.",
  ],
  "double-tusk-rune": [
    "에이스의 고유 문장으로, 대상과 주변 적에게 피해를 주지만 사용 후 자세가 무너집니다.",
  ],
  "double-edged-rune": [
    "더블 스트라이크의 문장과 같은 계열로, 공격 강화와 방어 리스크를 함께 지닌 문장입니다.",
  ],
  "down-rune": [
    "무기에 붙여 직접 공격 시 일정 확률로 적에게 다운 상태를 부여하는 문장입니다.",
  ],
  "drain-rune": [
    "치명타를 낼 때 사용자의 체력을 회복시키는 흡수 계열 문장입니다.",
  ],
  "dryad-rune": [
    "상위 마법 사용 횟수를 낮은 단계 마법 사용 횟수로 바꾸는 마력 운용 문장입니다.",
  ],
  "eagle-rune": [
    "케이트의 고유 문장으로, 넓은 사거리와 명중 보조가 있는 특수 공격에 쓰입니다.",
  ],
  "eight-devil-rune": [
    "유버가 전투에서 사용한 문장으로, 팔방의 문장 권능 일부와 관련된 것으로 추정됩니다.",
  ],
  "equilibrium-rune": [
    "밸런스의 문장과 같은 계열로, 자세가 무너지는 상태를 막는 안정화 문장입니다.",
  ],
  "exertion-rune": [
    "턴이 지날수록 착용자의 공격력을 단계적으로 높이는 무기 문장입니다.",
  ],
  "fierce-tiger-rune": [
    "숀의 고유 문장으로, 적 하나에게 큰 피해를 주지만 사용 후 자세가 무너집니다.",
  ],
  "fire-lizard-rune": [
    "무기에 붙이면 피해가 증가하지만 착용자도 반동 피해를 받습니다.",
  ],
  "flow-rune": [
    "물 위에서 작동하는 신속 계열 문장으로, 수상 이동 능력을 크게 높입니다.",
  ],
  "friendship-rune": [
    "모은 동료 수에 따라 착용자의 공격력을 높이는 무기 문장입니다.",
  ],
  "front-gate-rune": [
    "문의 문장이 윈디와 레크나트에 의해 나뉘며 생긴 두 반쪽 중 하나입니다.",
  ],
  "full-moon-rune": [
    "켄지의 고유 문장으로, 적 하나에게 큰 피해를 주지만 사용 후 자세가 무너집니다.",
  ],
  "giant-owl-rune": [
    "범위 내 적에게 피해를 주거나 일시적인 지원 효과를 부여하는 전술형 문장입니다.",
  ],
  "godspeed-rune": [
    "신행법 계열 문장으로, 이동 능력을 크게 높이는 효과와 연결됩니다.",
  ],
  "great-firefly-rune": [
    "공격받을 확률을 높이지만, 일반 반딧불의 문장처럼 사용자가 집중 공격 대상이 되지는 않습니다.",
  ],
  "hawk-rune": [
    "큰매의 문장 계열로, 날렵한 고유 공격 기술과 연결되는 문장입니다.",
  ],
  "isshin-rune": [
    "조커의 고유 문장으로, 큰 피해와 함께 자세 붕괴 가능성을 지닌 공격 기술에 쓰입니다.",
  ],
  "jongleur-rune": [
    "노래나 읊조림을 통해 아군에게 여러 강화 효과를 부여하는 고유 지원 문장입니다.",
  ],
  "kindness-rune": [
    "파티 활동 시간이나 능력치 강화에 따라 사용자의 공격력이 점차 증가하는 무기 문장입니다.",
  ],
  "lion-s-trial-rune": [
    "에이케이의 고유 문장으로, 새턴판에서 특수한 두 방식의 기술로 사용됩니다.",
  ],
  "magic-absorb-rune": [
    "마력 배출의 문장으로도 알려져 있으며, 공격 시 낮은 단계부터 마법 사용 횟수를 회복합니다.",
  ],
  "magic-drain-rune": [
    "무기에 붙이면 명중률이 낮아지는 대신 공격 성공 시 1레벨 마법 사용 횟수를 회복합니다.",
  ],
  "magical-rune": [
    "착용자의 마력을 크게 올리지만 마법 방어를 낮추는 공격적 마법 보조 문장입니다.",
  ],
  "mallet-rune": [
    "피콜로 전용 문장으로, 적 하나에게 큰 피해를 주는 고유 공격 기술입니다.",
  ],
  "mischief-rune": [
    "등장 횟수가 적고 효과가 수수께끼로 남아 있는 장난 계열 문장입니다.",
  ],
  "multi-strike-rune": [
    "연속 공격 확률을 높이는 대신 받는 피해가 두 배가 되는 고위험 문장입니다.",
  ],
  "nymph-rune": [
    "착용자의 운에 따라 여러 효과 중 하나가 무작위로 발동하는 문장입니다.",
  ],
  "ogre-rune": [
    "곤봉 사용자에게 맞춰진 문장으로, 앞줄 적을 공격하지만 사용 후 자세가 무너집니다.",
  ],
  "pale-gate-rune": [
    "다른 세계의 존재를 소환해 적을 공격하는 소환 마법 문장입니다.",
  ],
  "parent-turtle-rune": [
    "제노의 고유 문장으로, 아군 전체의 상태 변화 일부를 막아 주는 방어 문장입니다.",
  ],
  "phoenix-rune": [
    "크리스 라이트펠로우의 고유 문장으로, 적을 빠르게 찌르는 공격 기술에 쓰입니다.",
  ],
  "power-rune": [
    "공격력을 크게 높이는 대신 물리 방어가 절반으로 줄어드는 강화 문장입니다.",
  ],
  "prosperity-rune": [
    "전투 후 얻는 돈을 늘리는 재화 획득 보조 문장입니다.",
  ],
  "raven-rune": [
    "대도 라벤의 고유 문장으로, 어두운 장소에서 착용자의 능력을 높입니다.",
  ],
  "rune-of-condemnation": [
    "벌의 문장에서 파생된 것으로 전해지는 어둠 계열 문장입니다. 단죄의 서에 깃든 저주의 원동력이며, 적과 사용자 모두에게 피해를 주는 강력한 마법을 품고 있습니다.",
  ],
  "red-rose-rune": [
    "나르시스트 계열 인물들이 주로 사용하는 장미 문장입니다.",
  ],
  "ripple-rune": [
    "퀸의 고유 문장으로, 힘을 모은 뒤 공격하는 충전형 기술에 쓰입니다.",
  ],
  "shield-rune": [
    "필드 효과와 체력 회복에 특화된 방어 및 지원 문장입니다.",
  ],
  "shining-wing-rune": [
    "루비의 고유 문장으로, 가느다란 직선 범위의 적에게 피해를 줍니다.",
  ],
  "sickle-rune": [
    "하즈키의 고유 문장으로, 지정한 적의 경로상에 있는 모든 적을 공격합니다.",
  ],
  "sickle-weasle-rune": [
    "사나에 Y의 고유 문장으로, 낫의 문장과 같은 계열의 직선 공격 기술입니다.",
  ],
  "slash-rune": [
    "환상수호전 IV에 등장하는 특수 지원 문장으로, 희귀 보상으로 얻을 수 있습니다.",
  ],
  "solitude-rune": [
    "정상적인 플레이가 아닌 코드 사용으로만 확인되는 무기 문장입니다.",
  ],
  "sound-rune": [
    "음 연구자들이 선호하는 희귀 문장으로, 소리와 관련된 효과를 지닙니다.",
  ],
  "spreading-flame-rune": [
    "브라이트의 고유 문장으로, 대상과 주변 적에게 화염 기반 피해를 줍니다.",
  ],
  "star-rune": [
    "제라세의 고유 마법 문장으로, 별의 힘을 이용해 적을 공격합니다.",
  ],
  "steel-rune": [
    "물리 피해를 크게 줄이는 대신 마법 방어가 0이 되는 극단적인 방어 문장입니다.",
  ],
  "strike-back-rune": [
    "모든 물리 공격에 반격할 수 있게 하지만 회피율이 낮아지는 반격 문장입니다.",
  ],
  "sunbeam-rune": [
    "시간이 지날수록 상처를 조금씩 회복시키는 지속 회복 문장입니다.",
  ],
  "sword-of-cyclone-rune": [
    "무기에 바람 속성을 부여하고 바람 저항을 높이는 검 계열 문장입니다.",
  ],
  "sword-of-rage-rune": [
    "직접 공격에 불 마법을 더하고 불 저항을 높이는 검 계열 문장입니다.",
  ],
  "sword-of-thunder-rune": [
    "무기에 번개 속성을 부여해 직접 공격에 추가 피해를 더하는 검 계열 문장입니다.",
  ],
  "titan-rune": [
    "양손검의 위력을 높이는 문장으로, 공격력을 올리는 대신 일정한 부담을 동반합니다.",
  ],
  "twilight-rune": [
    "팔레나의 세 문장 중 하나로, 태양의 문장과 왕가의 문장 체계에 속합니다.",
  ],
  "venom-rune": [
    "공격에 맹독 효과를 더하지만 사용자가 독에 걸릴 위험도 있는 문장입니다.",
  ],
  "water-sealing-rune": [
    "물 마법을 막는 대신 불 속성 저항을 낮추는 봉인 계열 문장입니다.",
  ],
  "window-rune": [
    "창 장인 윈도우의 고유 문장으로, 비밀 공격 기술과 연결됩니다.",
  ],
  "zexen-rune": [
    "환상수호전 III에서 대화로만 언급되는 수수께끼의 문장입니다. 실제 모습은 등장하지 않으며, 젝센 문장이라는 번역이 문장 표기를 잘못 옮긴 것일 가능성도 거론됩니다.",
  ],
} as const satisfies Partial<Record<string, readonly string[]>>;

export const RUNE_LINEAGE_NOTES = {
  "fire-rune": "기본 문장: 불의 문장 / 상위 문장: 열화의 문장",
  "rage-rune": "기본 문장: 불의 문장 / 상위 문장: 열화의 문장",
  "water-rune": "기본 문장: 물의 문장 / 상위 문장: 류수의 문장",
  "flowing-rune": "기본 문장: 물의 문장 / 상위 문장: 류수의 문장",
  "wind-rune": "기본 문장: 바람의 문장 / 상위 문장: 선풍의 문장",
  "cyclone-rune": "기본 문장: 바람의 문장 / 상위 문장: 선풍의 문장",
  "earth-rune": "기본 문장: 흙의 문장 / 상위 문장: 대지의 문장",
  "mother-earth-rune": "기본 문장: 흙의 문장 / 상위 문장: 대지의 문장",
  "lightning-rune": "기본 문장: 번개의 문장 / 상위 문장: 천둥의 문장",
  "thunder-rune": "기본 문장: 번개의 문장 / 상위 문장: 천둥의 문장",
} as const satisfies Partial<Record<string, string>>;

const buildSpellRecords = (
  spells: readonly Omit<RuneSpellRecord, "level">[],
  startIndex = 0,
) =>
  spells.slice(startIndex, startIndex + 4).map((spell, index) => ({
    ...spell,
    level: index + 1,
  }));

const SUIKODEN_I_FIRE_SPELLS = [
  {
    name: "화염 화살",
    effect: "적 1명에게 약 100의 불 속성 피해를 줍니다.",
  },
  {
    name: "파이어스톰",
    effect: "적 전체에게 약 150의 불 속성 피해를 줍니다.",
  },
  {
    name: "춤추는 불꽃",
    effect: "적 전체에게 약 400의 불 속성 피해를 줍니다.",
  },
  {
    name: "폭발",
    effect: "적 전체에게 약 700의 불 속성 피해를 줍니다.",
  },
  {
    name: "최후의 불꽃",
    effect: "적 전체에게 약 900의 불 속성 피해를 줍니다.",
  },
] as const;

const SUIKODEN_II_FIRE_SPELLS = [
  {
    name: "화염 화살",
    effect: "적 전체에게 약 60의 불 속성 피해를 줍니다.",
  },
  {
    name: "화염의 벽",
    effect: "적 1열에게 약 150의 불 속성 피해를 줍니다.",
  },
  {
    name: "춤추는 불꽃",
    effect: "적 전체에게 약 300의 불 속성 피해를 줍니다.",
  },
  {
    name: "폭발",
    effect: "적 전체에게 약 700의 불 속성 피해를 줍니다.",
  },
  {
    name: "최후의 불꽃",
    effect: "적 전체에게 약 900의 불 속성 피해를 줍니다.",
  },
] as const;

const SUIKODEN_I_WATER_SPELLS = [
  {
    name: "상냥함의 물방울",
    effect: "아군 1명의 체력을 완전히 회복합니다.",
  },
  {
    name: "기만의 안개",
    effect: "아군 전체의 회피율을 높입니다.",
  },
  {
    name: "상냥함의 물",
    effect: "아군 전체의 체력을 약 300 회복합니다.",
  },
  {
    name: "상냥함의 비",
    effect: "아군 전체의 체력을 완전히 회복합니다.",
  },
  {
    name: "어머니 바다",
    effect: "전투 불능을 포함해 아군의 체력과 상태를 크게 회복합니다.",
  },
] as const;

const SUIKODEN_II_WATER_SPELLS = [
  {
    name: "상냥함의 물방울",
    effect: "아군 1명의 체력을 완전히 회복합니다.",
  },
  {
    name: "수호의 안개",
    effect: "3턴 동안 아군 전체의 마법 방어를 20% 올립니다.",
  },
  {
    name: "상냥함의 비",
    effect: "아군 전체의 체력을 약 300 회복합니다.",
  },
  {
    name: "침묵의 호수",
    effect: "3턴 동안 적과 아군 모두 마법을 사용할 수 없게 합니다.",
  },
  {
    name: "어머니 바다",
    effect: "아군 1명의 체력을 완전히 회복하고 전투 불능을 포함한 상태 이상을 치료합니다.",
  },
] as const;

const SUIKODEN_I_WIND_SPELLS = [
  {
    name: "수면의 바람",
    effect: "적 전체에게 수면을 부여합니다.",
  },
  {
    name: "절단의 바람",
    effect: "적 1명에게 약 400의 바람 속성 피해를 줍니다.",
  },
  {
    name: "치유의 바람",
    effect: "아군 1명의 체력을 완전히 회복하고 상태 이상을 치료합니다.",
  },
  {
    name: "폭풍",
    effect: "적 전체에게 약 500의 바람 속성 피해를 줍니다.",
  },
  {
    name: "빛나는 바람",
    effect: "적 전체에게 약 500의 피해를 주고 아군 전체를 약 500 회복합니다.",
  },
] as const;

const SUIKODEN_II_WIND_SPELLS = [
  {
    name: "수면의 바람",
    effect: "적 1열에게 수면을 부여합니다.",
  },
  {
    name: "치유의 바람",
    effect: "아군 1명의 체력을 완전히 회복합니다.",
  },
  {
    name: "절단의 바람",
    effect: "적 전체에게 약 450의 바람 속성 피해를 줍니다.",
  },
  {
    name: "폭풍 경보",
    effect: "다음 공격 마법 1회를 시전자에게 되돌립니다.",
  },
  {
    name: "빛나는 바람",
    effect: "아군 전체를 약 500 회복하고 적 전체에게 약 500의 피해를 줍니다.",
  },
] as const;

const SUIKODEN_I_EARTH_SPELLS = [
  {
    name: "진흙 수호자",
    effect: "아군 1명의 방어력을 올립니다. 플레이스테이션판에서는 효과가 정상 적용되지 않는 것으로 알려져 있습니다.",
  },
  {
    name: "대지의 목소리",
    effect: "지상에 있는 적 전체에게 약 300의 대지 속성 피해를 줍니다.",
  },
  {
    name: "구리 피부",
    effect: "3턴 동안 아군 1명의 현재 체력을 고정해 피해와 회복을 모두 막습니다.",
  },
  {
    name: "지진",
    effect: "지상에 있는 적 전체에게 약 700의 대지 속성 피해를 줍니다.",
  },
  {
    name: "수호하는 대지",
    effect: "아군 전체의 방어력을 올립니다. 플레이스테이션판에서는 효과가 정상 적용되지 않는 것으로 알려져 있습니다.",
  },
] as const;

const SUIKODEN_II_EARTH_SPELLS = [
  {
    name: "진흙 수호자",
    effect: "아군 1명의 방어력을 50% 올립니다.",
  },
  {
    name: "복수의 대지",
    effect: "3턴 동안 아군 1명의 반격 명중률을 100%로 만듭니다.",
  },
  {
    name: "천개의 방어",
    effect: "아군 전체를 대상으로 하는 마법 1회를 막습니다.",
  },
  {
    name: "지진",
    effect: "지상에 있는 적 전체에게 약 800의 대지 속성 피해를 줍니다.",
  },
  {
    name: "수호하는 대지",
    effect: "5턴 동안 아군 전체의 방어와 마법 방어를 올립니다.",
  },
] as const;

const SUIKODEN_I_LIGHTNING_SPELLS = [
  {
    name: "분노의 일격",
    effect: "적 1명에게 약 150의 번개 속성 피해를 줍니다.",
  },
  {
    name: "소나기 번개",
    effect: "적 전체에게 약 100의 번개 속성 피해를 줍니다.",
  },
  {
    name: "격노의 일격",
    effect: "적 1명에게 약 600의 번개 속성 피해를 줍니다.",
  },
  {
    name: "번개의 구체",
    effect: "적 1명에게 약 1000의 번개 속성 피해를 줍니다.",
  },
  {
    name: "천둥신",
    effect: "적 전체에게 약 900의 번개 속성 피해를 줍니다.",
  },
] as const;

const SUIKODEN_II_LIGHTNING_SPELLS = [
  {
    name: "분노의 일격",
    effect: "적 1명에게 약 100의 번개 속성 피해를 줍니다.",
  },
  {
    name: "천둥의 질주",
    effect: "적 1열에게 약 120의 번개 속성 피해를 줍니다.",
  },
  {
    name: "격노의 벼락",
    effect: "적 1명에게 약 600의 번개 속성 피해를 줍니다.",
  },
  {
    name: "토르의 일격",
    effect: "적 1명에게 약 1000의 번개 속성 피해를 줍니다.",
  },
  {
    name: "뇌우",
    effect: "적 1명에게 약 1200의 번개 속성 피해를 줍니다.",
  },
] as const;

export const RUNE_FUNCTION_RECORDS = {
  "fire-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_FIRE_SPELLS),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_FIRE_SPELLS),
      weaponEffect: "직접 공격 피해의 1/4만큼 불 속성 추가 피해를 줍니다.",
    },
  ],
  "rage-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_FIRE_SPELLS, 1),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_FIRE_SPELLS, 1),
      weaponEffect: "직접 공격 피해의 1/2만큼 불 속성 추가 피해를 줍니다.",
    },
  ],
  "water-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_WATER_SPELLS),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_WATER_SPELLS),
      weaponEffect: "전투 중 매 턴 체력을 5 회복합니다.",
    },
  ],
  "flowing-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_WATER_SPELLS, 1),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_WATER_SPELLS, 1),
      weaponEffect: "전투 중 매 턴 체력을 15 회복합니다.",
    },
  ],
  "wind-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_WIND_SPELLS),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_WIND_SPELLS),
      weaponEffect: "마법을 5% 확률로 반사합니다.",
    },
  ],
  "cyclone-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_WIND_SPELLS, 1),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_WIND_SPELLS, 1),
      weaponEffect: "마법을 15% 확률로 반사합니다.",
    },
  ],
  "earth-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_EARTH_SPELLS),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_EARTH_SPELLS),
      weaponEffect: "방어가 5 오르고 전투 중 매 턴 체력을 3 회복합니다.",
    },
  ],
  "mother-earth-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_EARTH_SPELLS, 1),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_EARTH_SPELLS, 1),
      weaponEffect: "방어가 15 오르고 전투 중 매 턴 체력을 5 회복합니다.",
    },
  ],
  "lightning-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_LIGHTNING_SPELLS),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_LIGHTNING_SPELLS),
      weaponEffect: "직접 공격 피해의 1/4만큼 번개 속성 추가 피해를 줍니다.",
    },
  ],
  "thunder-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: buildSpellRecords(SUIKODEN_I_LIGHTNING_SPELLS, 1),
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: buildSpellRecords(SUIKODEN_II_LIGHTNING_SPELLS, 1),
      weaponEffect: "직접 공격 피해의 1/2만큼 번개 속성 추가 피해를 줍니다.",
    },
  ],
  "resurrection-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: [
        {
          level: 1,
          name: "꾸짖기",
          effect: "적 1명에게 약 70의 피해를 줍니다. 언데드에게는 피해가 증가합니다.",
        },
        {
          level: 2,
          name: "외침",
          effect: "전투 불능 아군 1명을 부활시킵니다.",
        },
        {
          level: 3,
          name: "절규",
          effect: "아군 전체의 체력을 약 400 회복합니다.",
        },
        {
          level: 4,
          name: "매혹의 화살",
          effect: "적 전체에게 약 400의 피해를 줍니다. 언데드에게는 피해가 증가합니다.",
        },
      ],
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "꾸짖기",
          effect: "적 1명에게 약 30의 피해를 줍니다. 언데드에게는 피해가 증가합니다.",
        },
        {
          level: 2,
          name: "외침",
          effect: "전투 불능 아군 1명을 부활시킵니다.",
        },
        {
          level: 3,
          name: "매혹의 화살",
          effect: "적 전체에게 약 400의 피해를 줍니다. 언데드에게는 피해가 증가합니다.",
        },
        {
          level: 4,
          name: "절규",
          effect: "아군 전체의 체력을 약 300 회복합니다.",
        },
      ],
    },
  ],
  "soul-eater": [
    {
      game: RUNE_GAME_LABELS["suikoden-i"],
      spells: [
        {
          level: 1,
          name: "죽음의 손끝",
          effect: "보스를 제외한 적 1명에게 즉사 효과를 시도합니다.",
        },
        {
          level: 2,
          name: "검은 그림자",
          effect: "적 전체에게 약 300의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "지옥",
          effect: "보스를 제외한 적 전체에게 즉사 효과를 시도합니다.",
        },
        {
          level: 4,
          name: "심판",
          effect: "적 1명에게 약 1500의 피해를 줍니다.",
        },
      ],
    },
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "죽음의 손가락",
          effect: "보스를 제외한 적 1명에게 즉사 효과를 시도합니다.",
        },
        {
          level: 2,
          name: "검은 그림자",
          effect: "적 전체에게 약 500의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "지옥",
          effect: "보스를 제외한 적 전체에게 즉사 효과를 시도합니다.",
        },
        {
          level: 4,
          name: "심판",
          effect: "적 1명에게 약 1500의 피해를 줍니다.",
        },
      ],
    },
  ],
  "blinking-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "준비!",
          effect: "적 1명을 순간이동시킵니다. 실패하면 아군 1명이 순간이동할 수 있습니다.",
        },
        {
          level: 2,
          name: "조준!",
          effect: "적 전체에게 약 150의 피해를 줍니다. 실패하면 아군 위로 물체가 떨어질 수 있습니다.",
        },
        {
          level: 3,
          name: "발동!",
          effect: "모든 적을 순간이동시킵니다. 실패하면 사용자 외의 대상이 순간이동할 수 있습니다.",
        },
      ],
    },
  ],
  "darkness-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "죽음의 손가락",
          effect: "보스를 제외한 적 1명에게 즉사 효과를 시도합니다.",
        },
        {
          level: 2,
          name: "영혼 강탈",
          effect: "적 1명에게 약 300의 피해를 주고 같은 양의 체력을 회복합니다.",
        },
        {
          level: 3,
          name: "최후의 종",
          effect: "적 1열에 즉사 효과를 시도하고, 실패한 대상에게는 약 500의 피해를 줍니다.",
        },
        {
          level: 4,
          name: "검은 그림자",
          effect: "적 전체에게 약 500의 피해를 줍니다.",
        },
      ],
    },
  ],
  "blue-gate-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      note: "환상수호전 II에서는 창백한 문의 문장 계열 주문으로 정리됩니다.",
      spells: [
        {
          level: 1,
          name: "문 열기",
          effect: "적 1명에게 약 50의 피해를 줍니다.",
        },
        {
          level: 2,
          name: "왕의 길",
          effect: "적 전체에게 약 150의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "창백한 궁전",
          effect: "적 전체에게 약 400의 피해를 줍니다.",
        },
        {
          level: 4,
          name: "공허한 세계",
          effect: "적 전체에게 약 900의 피해를 주고 아군 전체에게도 약 90의 피해를 줍니다.",
        },
      ],
    },
  ],
  "pale-gate-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "문 열기",
          effect: "적 1명에게 약 50의 피해를 줍니다.",
        },
        {
          level: 2,
          name: "왕의 길",
          effect: "적 전체에게 약 150의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "창백한 궁전",
          effect: "적 전체에게 약 400의 피해를 줍니다.",
        },
        {
          level: 4,
          name: "공허한 세계",
          effect: "적 전체에게 약 900의 피해를 주고 아군 전체에게도 약 90의 피해를 줍니다.",
        },
      ],
    },
  ],
  "bright-shield-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "위대한 축복",
          effect: "아군 전체의 체력을 약 70 회복하고 상태 이상을 치료합니다.",
        },
        {
          level: 2,
          name: "빛나는 빛",
          effect: "적 전체에게 약 130의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "전투의 맹세",
          effect: "아군 전체의 체력을 약 300 회복하고 일정 확률로 분노 상태를 부여합니다.",
        },
        {
          level: 4,
          name: "용서의 표식",
          effect: "아군 전체를 크게 회복하고 남은 힘으로 적 1명에게 큰 피해를 줍니다.",
        },
      ],
    },
  ],
  "black-sword-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "섬광의 심판",
          effect: "적 1명에게 약 120의 피해를 줍니다.",
        },
        {
          level: 2,
          name: "반짝이는 칼날",
          effect: "적 전체에게 약 100의 피해를 주고 일정 확률로 즉사 효과를 시도합니다.",
        },
        {
          level: 3,
          name: "꿰뚫는 일격",
          effect: "적 1명에게 약 700의 피해를 줍니다.",
        },
        {
          level: 4,
          name: "굶주린 마귀",
          effect: "적 전체에게 약 1200의 피해를 줍니다.",
        },
      ],
    },
  ],
  "blessed-white-lady-rune": [
    {
      game: RUNE_GAME_LABELS["suikoden-ii"],
      spells: [
        {
          level: 1,
          name: "빛나는 눈동자",
          effect: "적 1명에게 약 120의 피해를 줍니다.",
        },
        {
          level: 2,
          name: "달빛 숲",
          effect: "적 1열에게 약 200의 피해를 줍니다.",
        },
        {
          level: 3,
          name: "하얀 여사제",
          effect: "적 전체에게 약 400의 피해를 줍니다.",
        },
      ],
    },
  ],
} as const satisfies Partial<Record<string, readonly RuneFunctionRecord[]>>;

const RUNE_REFERENCE_BY_NAME = new Map<string, RuneReference>();

RUNE_REFERENCES.forEach((rune) => {
  [rune.name, ...rune.aliases].forEach((name) => {
    RUNE_REFERENCE_BY_NAME.set(name.toLowerCase(), rune);
  });
});

export const resolveRuneReference = (name: string) => {
  return RUNE_REFERENCE_BY_NAME.get(name.toLowerCase());
};

export const getRuneReference = (runeId: string) => {
  return RUNE_REFERENCES.find((rune) => rune.id === runeId) ?? null;
};

export const getRuneIndexPage = (pageId: RuneIndexPageId) => {
  return RUNE_INDEX_PAGES.find((page) => page.id === pageId) ??
    RUNE_INDEX_PAGES[0];
};

export const getRuneIndexPageByCategory = (category: RuneCategoryId) => {
  return RUNE_INDEX_PAGES.find((page) =>
    (page.categories as readonly RuneCategoryId[]).includes(category),
  ) ?? RUNE_INDEX_PAGES[0];
};

export const getRuneReferencesByPageId = (pageId: RuneIndexPageId) => {
  const page = getRuneIndexPage(pageId);

  return RUNE_REFERENCES.filter((rune) =>
    (page.categories as readonly RuneCategoryId[]).includes(rune.category),
  ).toSorted((left, right) =>
    left.name.localeCompare(right.name, "ko-KR", { numeric: true }),
  );
};

export const formatRuneGames = (games: readonly string[]) =>
  games
    .map((game) =>
      RUNE_GAME_LABELS[game as keyof typeof RUNE_GAME_LABELS] ?? game,
    )
    .join(" / ");

export const getRuneDescriptionTitle = (rune: RuneReference) => {
  return rune.category === "trueRune" ?
      RUNE_ARCHIVE_COPY.trueRuneDescriptionTitle :
      RUNE_ARCHIVE_COPY.runeDescriptionTitle;
};

export const getRuneDescriptionLines = (rune: RuneReference) => {
  if (rune.category === "trueRune") {
    return RUNE_TRUE_RUNE_DESCRIPTIONS[
      rune.id as keyof typeof RUNE_TRUE_RUNE_DESCRIPTIONS
    ] ?? [];
  }

  return RUNE_GENERAL_RUNE_DESCRIPTIONS[
    rune.id as keyof typeof RUNE_GENERAL_RUNE_DESCRIPTIONS
  ] ?? [
    `${rune.name}은 ${formatRuneGames(rune.games)}에 등장하는 ${RUNE_CATEGORY_LABELS[rune.category]}입니다. 개별 문장 기록을 기준으로 목록화했습니다.`,
  ];
};

export const getRuneLineageNote = (rune: RuneReference) => {
  return RUNE_LINEAGE_NOTES[
    rune.id as keyof typeof RUNE_LINEAGE_NOTES
  ] ?? null;
};

export const getRuneFunctionRecords = (
  rune: RuneReference,
): readonly RuneFunctionRecord[] => {
  const records = RUNE_FUNCTION_RECORDS[
    rune.id as keyof typeof RUNE_FUNCTION_RECORDS
  ];

  if (records) {
    return records;
  }

  const effects = getRuneDescriptionLines(rune);

  return effects.length > 0 ?
      [
        {
          game: formatRuneGames(rune.games),
          effects,
        },
      ] :
      [];
};

export const getRuneFunctionType = (rune: RuneReference): RuneFunctionTypeId => {
  return RUNE_ACTIVE_FUNCTION_IDS.has(rune.id) ? "active" : "passive";
};

export const getRuneFunctionTypeLabel = (rune: RuneReference) => {
  return RUNE_FUNCTION_TYPE_LABELS[getRuneFunctionType(rune)];
};

export const getRuneFunctionTypeDescription = (rune: RuneReference) => {
  return RUNE_FUNCTION_TYPE_DESCRIPTIONS[getRuneFunctionType(rune)];
};

export const getRuneDisplayImageSrc = (rune: RuneReference) => {
  if (!rune.imageSrc) {
    return RUNE_FALLBACK_IMAGE.src;
  }

  return rune.imageSrc;
};

export const isRuneFallbackImage = (rune: RuneReference) => !rune.imageSrc;
