import {
  buildRuneCategoryPath,
  buildRuneDetailPath,
} from "@/constants/app-config";

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
  categoryLabel: "구분",
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

export const RUNE_GAME_LABELS = {
  "suikoden-i": "환상수호전 I",
  "suikoden-ii": "환상수호전 II",
  "suikoden-iii": "환상수호전 III",
  "suikoden-iv": "환상수호전 IV",
  "suikoden-v": "환상수호전 V",
  "suikoden-tactics": "환상수호전 택틱스",
  "suikoden-star-leap": "환상수호전 STAR LEAP",
  unrevealed: "미공개",
} as const;

export const RUNE_FALLBACK_IMAGE = {
  src: "/suikoden/genso-mark.svg",
  alt: "문장 대체 마크",
} as const;

const RUNE_SOURCE_IMAGE_PATH = "/suikoden/runes/";

const RUNE_NORMALIZED_ICON_PATH = "/suikoden/rune-icons/";

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
    imageSrc: "/suikoden/runes/soul-eater.png",
  }),
  buildRuneReference({
    id: "bright-shield-rune",
    name: "빛나는 방패의 문장",
    aliases: ["Bright Shield Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/bright-shield-rune.png",
  }),
  buildRuneReference({
    id: "black-sword-rune",
    name: "검은 검의 문장",
    aliases: ["Black Sword Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/black-sword-rune.png",
  }),
  buildRuneReference({
    id: "rune-of-beginning",
    name: "시작의 문장",
    aliases: ["Rune of Beginning"],
    category: "trueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/rune-of-beginning.png",
  }),
  buildRuneReference({
    id: "rune-of-change",
    name: "변화의 문장",
    aliases: ["Rune of Change"],
    category: "trueRune",
    games: ["unrevealed"],
    imageSrc: "/suikoden/runes/rune-of-change.png",
  }),
  buildRuneReference({
    id: "rune-of-punishment",
    name: "벌의 문장",
    aliases: ["Rune of Punishment"],
    category: "trueRune",
    games: ["suikoden-iv", "suikoden-tactics"],
    imageSrc: "/suikoden/runes/rune-of-punishment.png",
  }),
  buildRuneReference({
    id: "blue-moon-rune",
    name: "푸른 달의 문장",
    aliases: ["Blue Moon Rune", "Moon Rune"],
    category: "trueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/blue-moon-rune.png",
  }),
  buildRuneReference({
    id: "sovereign-rune",
    name: "패왕의 문장",
    aliases: ["Sovereign Rune"],
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
    imageSrc: "/suikoden/runes/fire-rune.png",
  }),
  buildRuneReference({
    id: "water-rune",
    name: "물의 문장",
    aliases: ["Water Rune"],
    japaneseName: "水の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/water-rune.png",
  }),
  buildRuneReference({
    id: "wind-rune",
    name: "바람의 문장",
    aliases: ["Wind Rune"],
    japaneseName: "風の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/wind-rune.png",
  }),
  buildRuneReference({
    id: "lightning-rune",
    name: "번개의 문장",
    aliases: ["Lightning Rune"],
    japaneseName: "雷の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/lightning-rune.png",
  }),
  buildRuneReference({
    id: "thunder-rune",
    name: "천둥의 문장",
    aliases: ["Thunder Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/thunder-rune.png",
  }),
  buildRuneReference({
    id: "rage-rune",
    name: "분노의 문장",
    aliases: ["Rage Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/rage-rune.png",
  }),
  buildRuneReference({
    id: "flowing-rune",
    name: "흐르는 문장",
    aliases: ["Flowing Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/flowing-rune.png",
  }),
  buildRuneReference({
    id: "earth-rune",
    name: "대지의 문장",
    aliases: ["Earth Rune"],
    japaneseName: "土の紋章",
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/earth-rune.png",
  }),
  buildRuneReference({
    id: "mother-earth-rune",
    name: "모대지의 문장",
    aliases: ["Mother Earth Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/mother-earth-rune.png",
  }),
  buildRuneReference({
    id: "resurrection-rune",
    name: "부활의 문장",
    aliases: ["Resurrection Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/resurrection-rune.png",
  }),
  buildRuneReference({
    id: "blue-gate-rune",
    name: "창문의 문장",
    aliases: ["Blue Gate Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/blue-gate-rune.png",
  }),
  buildRuneReference({
    id: "darkness-rune",
    name: "어둠의 문장",
    aliases: ["Darkness Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/darkness-rune.png",
  }),
  buildRuneReference({
    id: "cyclone-rune",
    name: "선풍의 문장",
    aliases: ["Cyclone Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/cyclone-rune.png",
  }),
  buildRuneReference({
    id: "killer-rune",
    name: "필살의 문장",
    aliases: ["Killer Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/killer-rune.png",
  }),
  buildRuneReference({
    id: "turtle-rune",
    name: "거북이의 문장",
    aliases: ["Turtle Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/turtle-rune.png",
  }),
  buildRuneReference({
    id: "phero-rune",
    name: "페로의 문장",
    aliases: ["Phero Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/phero-rune.png",
  }),
  buildRuneReference({
    id: "fortune-rune",
    name: "행운의 문장",
    aliases: ["Fortune Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/fortune-rune.png",
  }),
  buildRuneReference({
    id: "counter-rune",
    name: "반격의 문장",
    aliases: ["Counter Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/counter-rune.png",
  }),
  buildRuneReference({
    id: "hazy-rune",
    name: "양지의 문장",
    aliases: ["Hazy Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/hazy-rune.png",
  }),
  buildRuneReference({
    id: "holy-rune",
    name: "신행법의 문장",
    aliases: ["Holy Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/holy-rune.png",
  }),
  buildRuneReference({
    id: "true-holy-rune",
    name: "진신행법의 문장",
    aliases: ["True Holy Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/true-holy-rune.png",
  }),
  buildRuneReference({
    id: "fury-rune",
    name: "광분의 문장",
    aliases: ["Fury Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "double-beat-rune",
    name: "2회공격의 문장",
    aliases: ["Double Beat Rune", "Double-Beat Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "double-strike-rune",
    name: "더블 스트라이크의 문장",
    aliases: ["Double Strike Rune", "Double-Strike Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/double-strike-rune.png",
  }),
  buildRuneReference({
    id: "gale-rune",
    name: "질풍의 문장",
    aliases: ["Gale Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/gale-rune.png",
  }),
  buildRuneReference({
    id: "balance-rune",
    name: "밸런스의 문장",
    aliases: ["Balance Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/balance-rune.png",
  }),
  buildRuneReference({
    id: "spark-rune",
    name: "스파크의 문장",
    aliases: ["Spark Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/spark-rune.png",
  }),
  buildRuneReference({
    id: "warrior-rune",
    name: "전사의 문장",
    aliases: ["Warrior Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/warrior-rune.png",
  }),
  buildRuneReference({
    id: "barrier-rune",
    name: "방벽의 문장",
    aliases: ["Barrier Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "medicine-rune",
    name: "약의 문장",
    aliases: ["Medicine Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "technique-rune",
    name: "기술의 문장",
    aliases: ["Technique Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "clone-rune",
    name: "분신의 문장",
    aliases: ["Clone Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/clone-rune.png",
  }),
  buildRuneReference({
    id: "blinking-rune",
    name: "순간이동의 문장",
    aliases: ["Blinking Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/blinking-rune.png",
  }),
  buildRuneReference({
    id: "falcon-rune",
    name: "매의 문장",
    aliases: ["Falcon Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/falcon-rune.png",
  }),
  buildRuneReference({
    id: "boar-rune",
    name: "멧돼지의 문장",
    aliases: ["Boar Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/boar-rune.png",
  }),
  buildRuneReference({
    id: "hate-rune",
    name: "증오의 문장",
    aliases: ["Hate Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/hate-rune.png",
  }),
  buildRuneReference({
    id: "trick-rune",
    name: "장난감의 문장",
    aliases: ["Trick Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
    imageSrc: "/suikoden/runes/trick-rune.png",
  }),
  buildRuneReference({
    id: "fire-breath-rune",
    name: "화염방사의 문장",
    aliases: ["Fire Breath Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "rabid-fang-rune",
    name: "광아의 문장",
    aliases: ["Rabid Fang Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "howling-rune",
    name: "포효의 문장",
    aliases: ["Howling Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "great-hawk-rune",
    name: "큰매의 문장",
    aliases: ["Great Hawk Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/great-hawk-rune.png",
  }),
  buildRuneReference({
    id: "shining-wind-rune",
    name: "빛나는 바람의 문장",
    aliases: ["Shining Wind Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "blessed-white-lady-rune",
    name: "축복받은 백부인의 문장",
    aliases: ["Blessed White Lady Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/blessed-white-lady-rune.png",
  }),
  buildRuneReference({
    id: "blue-drop-rune",
    name: "푸른 물방울의 문장",
    aliases: ["Blue Drop Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "fire-dragon-rune",
    name: "화룡의 문장",
    aliases: ["Fire Dragon Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "angry-dragon-rune",
    name: "분노한 용의 문장",
    aliases: ["Angry Dragon Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "waking-rune",
    name: "각성의 문장",
    aliases: ["Waking Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/waking-rune.png",
  }),
  buildRuneReference({
    id: "spider-slay-rune",
    name: "거미베기의 문장",
    aliases: ["Spider Slay Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "unicorn-rune",
    name: "일각수의 문장",
    aliases: ["Unicorn Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/unicorn-rune.png",
  }),
  buildRuneReference({
    id: "knight-rune",
    name: "기사의 문장",
    aliases: ["Knight Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "shrike-rune",
    name: "때까치의 문장",
    aliases: ["Shrike Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/shrike-rune.png",
  }),
  buildRuneReference({
    id: "mayfly-rune",
    name: "하루살이의 문장",
    aliases: ["Mayfly Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "twin-ring-rune",
    name: "쌍륜의 문장",
    aliases: ["Twin Ring Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "gadget-rune",
    name: "가젯의 문장",
    aliases: ["Gadget Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "white-tiger-rune",
    name: "백호의 문장",
    aliases: ["White Tiger Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "white-saint-rune",
    name: "백성의 문장",
    aliases: ["White Saint Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/white-saint-rune.png",
  }),
  buildRuneReference({
    id: "swallow-rune",
    name: "제비의 문장",
    aliases: ["Swallow Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "groundhog-rune",
    name: "두더지의 문장",
    aliases: ["Groundhog Rune"],
    category: "uniqueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/groundhog-rune.png",
  }),
  buildRuneReference({
    id: "alert-rune",
    name: "경보의 문장",
    aliases: ["Alert Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/alert-rune.png",
  }),
  buildRuneReference({
    id: "alertness-rune",
    name: "경계심의 문장",
    aliases: ["Alertness Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv"],
    imageSrc: "/suikoden/runes/alertness-rune.png",
  }),
  buildRuneReference({
    id: "back-gate-rune",
    name: "뒷문의 문장",
    aliases: ["Back Gate Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-iii"],
  }),
  buildRuneReference({
    id: "balloon-rune",
    name: "풍선의 문장",
    aliases: ["Balloon Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "banshee-rune",
    name: "밴시의 문장",
    aliases: ["Banshee Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "beast-rune",
    name: "짐승의 문장",
    aliases: ["Beast Rune"],
    category: "trueRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/beast-rune.png",
  }),
  buildRuneReference({
    id: "beast-rune-suikoden-v",
    name: "수마의 문장",
    aliases: ["Beast Rune (Suikoden V)"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "boost-rune",
    name: "부스트의 문장",
    aliases: ["Boost Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "boronda-hawk-rune",
    name: "보론다 매의 문장",
    aliases: ["Boronda Hawk Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "boundary-rune",
    name: "결계의 문장",
    aliases: ["Boundary Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "bucket-rune",
    name: "양동이의 문장",
    aliases: ["Bucket Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "chameleon-rune",
    name: "카멜레온의 문장",
    aliases: ["Chameleon Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "champion-s-rune",
    name: "챔피언의 문장",
    aliases: ["Champion's Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/champion-s-rune.png",
  }),
  buildRuneReference({
    id: "charm-rune",
    name: "매혹의 문장",
    aliases: ["Charm Rune"],
    category: "generalRune",
    games: ["suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/charm-rune.png",
  }),
  buildRuneReference({
    id: "chimera-rune",
    name: "키메라의 문장",
    aliases: ["Chimera Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "circle-rune",
    name: "원환의 문장",
    aliases: ["Circle Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/circle-rune.png",
  }),
  buildRuneReference({
    id: "comet-rune",
    name: "혜성의 문장",
    aliases: ["Comet Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "conqueror-rune",
    name: "정복자의 문장",
    aliases: ["Conqueror Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "crazed-rune",
    name: "광기의 문장",
    aliases: ["Crazed Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "dawn-rune",
    name: "새벽의 문장",
    aliases: ["Dawn Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/dawn-rune.png",
  }),
  buildRuneReference({
    id: "deer-rune",
    name: "사슴의 문장",
    aliases: ["Deer Rune"],
    category: "generalRune",
    games: ["suikoden-star-leap"],
  }),
  buildRuneReference({
    id: "devil-s-doll-rune",
    name: "악마 인형의 문장",
    aliases: ["Devil's Doll Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "doremi-rune",
    name: "도레미의 문장",
    aliases: ["DoReMi Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/doremi-rune.png",
  }),
  buildRuneReference({
    id: "double-tusk-rune",
    name: "쌍아의 문장",
    aliases: ["Double Tusk Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "double-edged-rune",
    name: "양날의 문장",
    aliases: ["Double-Edged Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/double-edged-rune.png",
  }),
  buildRuneReference({
    id: "down-rune",
    name: "다운의 문장",
    aliases: ["Down Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "dragon-rune",
    name: "용의 문장",
    aliases: ["Dragon Rune"],
    category: "trueRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/dragon-rune.png",
  }),
  buildRuneReference({
    id: "drain-rune",
    name: "흡수의 문장",
    aliases: ["Drain Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/drain-rune.png",
  }),
  buildRuneReference({
    id: "dryad-rune",
    name: "드라이어드의 문장",
    aliases: ["Dryad Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "eagle-rune",
    name: "독수리의 문장",
    aliases: ["Eagle Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "eight-devil-rune",
    name: "팔귀의 문장",
    aliases: ["Eight Devil Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "eightfold-rune",
    name: "팔방의 문장",
    aliases: ["Eightfold Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "equilibrium-rune",
    name: "균형의 문장",
    aliases: ["Equilibrium Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/equilibrium-rune.png",
  }),
  buildRuneReference({
    id: "exertion-rune",
    name: "분발의 문장",
    aliases: ["Exertion Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "fierce-tiger-rune",
    name: "맹호의 문장",
    aliases: ["Fierce Tiger Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "fire-lizard-rune",
    name: "불도마뱀의 문장",
    aliases: ["Fire Lizard Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
    imageSrc: "/suikoden/runes/fire-lizard-rune.png",
  }),
  buildRuneReference({
    id: "fire-sealing-rune",
    name: "불 봉인의 문장",
    aliases: ["Fire Sealing Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/suikoden/runes/fire-sealing-rune.png",
  }),
  buildRuneReference({
    id: "firefly-rune",
    name: "반딧불의 문장",
    aliases: ["Firefly Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "flow-rune",
    name: "흐름의 문장",
    aliases: ["Flow Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "flowing-sword-rune",
    name: "흐르는 검의 문장",
    aliases: ["Flowing Sword Rune"],
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "friendship-rune",
    name: "우정의 문장",
    aliases: ["Friendship Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "front-gate-rune",
    name: "앞문의 문장",
    aliases: ["Front Gate Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "full-moon-rune",
    name: "보름달의 문장",
    aliases: ["Full Moon Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "gate-rune",
    name: "문의 문장",
    aliases: ["Gate Rune"],
    category: "trueRune",
    games: ["suikoden-i"],
    imageSrc: "/suikoden/runes/gate-rune.png",
  }),
  buildRuneReference({
    id: "giant-owl-rune",
    name: "큰올빼미의 문장",
    aliases: ["Giant Owl Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "godspeed-rune",
    name: "신속의 문장",
    aliases: ["Godspeed Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/godspeed-rune.png",
  }),
  buildRuneReference({
    id: "gozz-rune",
    name: "고즈의 문장",
    aliases: ["Gozz Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics"],
    imageSrc: "/suikoden/runes/gozz-rune.png",
  }),
  buildRuneReference({
    id: "great-firefly-rune",
    name: "큰반딧불의 문장",
    aliases: ["Great Firefly Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "hawk-rune",
    name: "호크의 문장",
    aliases: ["Hawk Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
    imageSrc: "/suikoden/runes/hawk-rune.png",
  }),
  buildRuneReference({
    id: "haziness-rune",
    name: "몽롱의 문장",
    aliases: ["Haziness Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
    imageSrc: "/suikoden/runes/haziness-rune.png",
  }),
  buildRuneReference({
    id: "hunter-rune",
    name: "사냥꾼의 문장",
    aliases: ["Hunter Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "isshin-rune",
    name: "일심의 문장",
    aliases: ["Isshin Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "jongleur-rune",
    name: "곡예사의 문장",
    aliases: ["Jongleur Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/jongleur-rune.png",
  }),
  buildRuneReference({
    id: "kangacorn-rune",
    name: "캥거콘의 문장",
    aliases: ["Kangacorn Rune"],
    category: "generalRune",
    games: ["suikoden-tactics"],
  }),
  buildRuneReference({
    id: "kindness-rune",
    name: "상냥함의 문장",
    aliases: ["Kindness Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "kite-rune",
    name: "솔개의 문장",
    aliases: ["Kite Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/suikoden/runes/kite-rune.png",
  }),
  buildRuneReference({
    id: "lion-rune",
    name: "사자의 문장",
    aliases: ["Lion Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/lion-rune.png",
  }),
  buildRuneReference({
    id: "lion-s-trial-rune",
    name: "사자의 시련의 문장",
    aliases: ["Lion's Trial Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "magic-absorb-rune",
    name: "마력 흡수의 문장",
    aliases: ["Magic Absorb Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "magic-drain-rune",
    name: "마력 배출의 문장",
    aliases: ["Magic Drain Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "magical-rune",
    name: "마법의 문장",
    aliases: ["Magical Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "mallet-rune",
    name: "망치의 문장",
    aliases: ["Mallet Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "minotaur-rune",
    name: "미노타우로스의 문장",
    aliases: ["Minotaur Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "mischief-rune",
    name: "장난의 문장",
    aliases: ["Mischief Rune"],
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "mother-earth-sword-rune",
    name: "모대지검의 문장",
    aliases: ["Mother Earth Sword Rune"],
    category: "generalRune",
    games: ["suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "multi-strike-rune",
    name: "연속타격의 문장",
    aliases: ["Multi-Strike Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "night-rune",
    name: "밤의 문장",
    aliases: ["Night Rune"],
    category: "trueRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
  }),
  buildRuneReference({
    id: "nymph-rune",
    name: "님프의 문장",
    aliases: ["Nymph Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "ogre-rune",
    name: "오거의 문장",
    aliases: ["Ogre Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "pale-gate-rune",
    name: "창백한 문의 문장",
    aliases: ["Pale Gate Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/suikoden/runes/pale-gate-rune.png",
  }),
  buildRuneReference({
    id: "parent-turtle-rune",
    name: "어미거북의 문장",
    aliases: ["Parent Turtle Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "phoenix-rune",
    name: "불사조의 문장",
    aliases: ["Phoenix Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "pixie-rune",
    name: "픽시의 문장",
    aliases: ["Pixie Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
    imageSrc: "/suikoden/runes/pixie-rune.png",
  }),
  buildRuneReference({
    id: "poison-rune",
    name: "독의 문장",
    aliases: ["Poison Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
  }),
  buildRuneReference({
    id: "power-rune",
    name: "힘의 문장",
    aliases: ["Power Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "prosperity-rune",
    name: "번영의 문장",
    aliases: ["Prosperity Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/prosperity-rune.png",
  }),
  buildRuneReference({
    id: "raven-rune",
    name: "까마귀의 문장",
    aliases: ["Raven Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "rune-of-condemnation",
    name: "단죄의 문장",
    aliases: ["Rune of Condemnation"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "red-rose-rune",
    name: "붉은 장미의 문장",
    aliases: ["Red Rose Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/red-rose-rune.png",
  }),
  buildRuneReference({
    id: "ripple-rune",
    name: "파문의 문장",
    aliases: ["Ripple Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "shield-rune",
    name: "방패의 문장",
    aliases: ["Shield Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-v"],
    imageSrc: "/suikoden/runes/shield-rune.png",
  }),
  buildRuneReference({
    id: "shining-wing-rune",
    name: "빛나는 날개의 문장",
    aliases: ["Shining Wing Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "sickle-rune",
    name: "낫의 문장",
    aliases: ["Sickle Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "sickle-weasle-rune",
    name: "족제비낫의 문장",
    aliases: ["Sickle-Weasle Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "silence-rune",
    name: "침묵의 문장",
    aliases: ["Silence Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "skunk-rune",
    name: "스컹크의 문장",
    aliases: ["Skunk Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "slash-rune",
    name: "참격의 문장",
    aliases: ["Slash Rune"],
    category: "generalRune",
    games: ["suikoden-iv"],
  }),
  buildRuneReference({
    id: "sleep-rune",
    name: "수면의 문장",
    aliases: ["Sleep Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-v"],
    imageSrc: "/suikoden/runes/sleep-rune.png",
  }),
  buildRuneReference({
    id: "solitude-rune",
    name: "고독의 문장",
    aliases: ["Solitude Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "sound-rune",
    name: "소리의 문장",
    aliases: ["Sound Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii"],
  }),
  buildRuneReference({
    id: "spreading-flame-rune",
    name: "번지는 불꽃의 문장",
    aliases: ["Spreading Flame Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "star-rune",
    name: "별의 문장",
    aliases: ["Star Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/star-rune.png",
  }),
  buildRuneReference({
    id: "steel-rune",
    name: "강철의 문장",
    aliases: ["Steel Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "strike-back-rune",
    name: "되받아치기의 문장",
    aliases: ["Strike-Back Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "sun-rune",
    name: "태양의 문장",
    aliases: ["Sun Rune"],
    category: "trueRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/sun-rune.png",
  }),
  buildRuneReference({
    id: "sunbeam-rune",
    name: "햇살의 문장",
    aliases: ["Sunbeam Rune"],
    category: "generalRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/sunbeam-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-cyclone-rune",
    name: "선풍검의 문장",
    aliases: ["Sword of Cyclone Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/sword-of-cyclone-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-rage-rune",
    name: "분노검의 문장",
    aliases: ["Sword of Rage Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/sword-of-rage-rune.png",
  }),
  buildRuneReference({
    id: "sword-of-thunder-rune",
    name: "천둥검의 문장",
    aliases: ["Sword of Thunder Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/sword-of-thunder-rune.png",
  }),
  buildRuneReference({
    id: "sylph-rune",
    name: "실프의 문장",
    aliases: ["Sylph Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "titan-rune",
    name: "타이탄의 문장",
    aliases: ["Titan Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/titan-rune.png",
  }),
  buildRuneReference({
    id: "true-earth-rune",
    name: "진정한 대지의 문장",
    aliases: ["True Earth Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/true-earth-rune.png",
  }),
  buildRuneReference({
    id: "true-fire-rune",
    name: "진정한 불의 문장",
    aliases: ["True Fire Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/true-fire-rune.png",
  }),
  buildRuneReference({
    id: "true-lightning-rune",
    name: "진정한 번개의 문장",
    aliases: ["True Lightning Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/true-lightning-rune.png",
  }),
  buildRuneReference({
    id: "true-water-rune",
    name: "진정한 물의 문장",
    aliases: ["True Water Rune"],
    category: "trueRune",
    games: ["suikoden-iii"],
    imageSrc: "/suikoden/runes/true-water-rune.png",
  }),
  buildRuneReference({
    id: "true-wind-rune",
    name: "진정한 바람의 문장",
    aliases: ["True Wind Rune"],
    category: "trueRune",
    games: ["suikoden-i","suikoden-ii","suikoden-iii"],
    imageSrc: "/suikoden/runes/true-wind-rune.png",
  }),
  buildRuneReference({
    id: "twilight-rune",
    name: "황혼의 문장",
    aliases: ["Twilight Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
    imageSrc: "/suikoden/runes/twilight-rune.png",
  }),
  buildRuneReference({
    id: "venom-rune",
    name: "맹독의 문장",
    aliases: ["Venom Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "violence-rune",
    name: "폭력의 문장",
    aliases: ["Violence Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics","suikoden-v"],
  }),
  buildRuneReference({
    id: "viper-rune",
    name: "독사의 문장",
    aliases: ["Viper Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-tactics","suikoden-v"],
    imageSrc: "/suikoden/runes/viper-rune.png",
  }),
  buildRuneReference({
    id: "wall-rune",
    name: "벽의 문장",
    aliases: ["Wall Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-v"],
    imageSrc: "/suikoden/runes/wall-rune.png",
  }),
  buildRuneReference({
    id: "war-horse-rune",
    name: "군마의 문장",
    aliases: ["War Horse Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
  buildRuneReference({
    id: "water-sealing-rune",
    name: "물 봉인의 문장",
    aliases: ["Water Sealing Rune"],
    category: "generalRune",
    games: ["suikoden-v"],
  }),
  buildRuneReference({
    id: "window-rune",
    name: "윈도우의 문장",
    aliases: ["Window Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "wizard-rune",
    name: "마법사의 문장",
    aliases: ["Wizard Rune"],
    category: "generalRune",
    games: ["suikoden-ii","suikoden-iii","suikoden-iv","suikoden-tactics"],
    imageSrc: "/suikoden/runes/wizard-rune.png",
  }),
  buildRuneReference({
    id: "wrath-rune",
    name: "격노의 문장",
    aliases: ["Wrath Rune"],
    category: "generalRune",
    games: ["suikoden-iii","suikoden-v"],
  }),
  buildRuneReference({
    id: "zexen-rune",
    name: "젝센의 문장",
    aliases: ["Zexen Rune"],
    category: "generalRune",
    games: ["suikoden-iii"],
  }),
] as const;

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
    "대지의 힘을 대표하는 진정한 문장입니다. 대지의 문장과 모대지의 문장은 이 문장에서 파생된 계열로 설명됩니다.",
    "현재는 신관장 사사라이가 지닌 것으로 알려져 있으며, 광범위한 방어와 보호의 술법을 가능하게 합니다.",
  ],
  "true-fire-rune": [
    "불의 힘을 대표하는 진정한 문장입니다. 불의 문장과 분노의 문장은 이 문장에서 비롯된 계열입니다.",
    "불꽃의 영웅이 하르모니아에서 빼앗아 독립 전쟁의 상징으로 삼았으며, 강력한 화염 술법은 아군과 적군을 함께 휘말리게 할 만큼 위험합니다.",
  ],
  "true-lightning-rune": [
    "번개의 힘을 대표하는 진정한 문장입니다. 번개의 문장과 천둥의 문장은 이 문장에서 파생된 것으로 설명됩니다.",
    "게드가 멸망한 조국에서 가지고 나온 뒤 불꽃의 영웅을 도왔고, 이후 봉인해 두었던 힘을 제2차 불꽃의 영웅 전쟁에서 다시 해방했습니다.",
  ],
  "true-water-rune": [
    "물의 힘을 대표하는 진정한 문장입니다. 물의 문장과 흐르는 문장은 이 문장의 하위 계열로 볼 수 있습니다.",
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
  "fire-rune": ["불 계열 마법을 사용할 수 있게 하는 기본 속성 문장입니다."],
  "water-rune": [
    "회복을 중심으로 운용되는 물 계열 문장으로, 일부 공격 마법도 사용할 수 있습니다.",
  ],
  "wind-rune": [
    "바람 계열 마법을 사용할 수 있게 하며, 회복과 공격 주문을 함께 다룹니다.",
  ],
  "lightning-rune": [
    "단일 대상과 복수 대상을 공격하는 번개 계열 마법을 사용할 수 있게 합니다.",
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
    "대지 계열 마법을 사용할 수 있게 하며, 주로 지원 마법과 일부 공격 마법에 쓰입니다.",
  ],
  "mother-earth-rune": [
    "대지 계열의 상위 문장으로, 대지의 힘을 끌어내는 강력한 속성 문장입니다.",
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
    "회피와 관련된 효과를 지닌 보조 문장으로, Haziness Rune 계열 표기로도 정리됩니다.",
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
    "대상 아군에게서 HP를 흡수하는 효과를 지닌 환상수호전 II의 문장입니다.",
  ],
  "beast-rune-suikoden-v": [
    "에른스트의 고유 문장으로, 그가 표범 모습에 갇히게 된 원인입니다. 전투에서는 인간 모습으로 변신하거나 포효와 발톱 공격을 사용하는 힘과 연결됩니다.",
  ],
  "boost-rune": [
    "일정 턴 동안 물리 피해를 두 배로 늘리지만, 이후 사용자의 HP가 1로 줄어듭니다.",
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
    "환상수호전 STAR LEAP에 등장하는 문장으로, 유연한 지팡이를 이용한 고통스러운 타격 기술과 연결됩니다.",
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
    "치명타를 낼 때 사용자의 HP를 회복시키는 흡수 계열 문장입니다.",
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
    "마력 배출의 문장으로도 알려져 있으며, 공격 시 낮은 단계부터 MP를 회복합니다.",
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
    "필드 효과와 HP 회복에 특화된 방어 및 지원 문장입니다.",
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
    "환상수호전 III에서 대화로만 언급되는 수수께끼의 문장입니다. 실제 모습은 등장하지 않으며, 젝센 문장이라는 번역이 젝센 문장(crest)을 잘못 옮긴 것일 가능성도 거론됩니다.",
  ],
} as const satisfies Partial<Record<string, readonly string[]>>;

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

export const getRuneDisplayImageSrc = (rune: RuneReference) => {
  if (!rune.imageSrc) {
    return RUNE_FALLBACK_IMAGE.src;
  }

  return rune.imageSrc.replace(RUNE_SOURCE_IMAGE_PATH, RUNE_NORMALIZED_ICON_PATH);
};

export const isRuneFallbackImage = (rune: RuneReference) => !rune.imageSrc;
