import {
  buildRuneCategoryPath,
  buildRuneDetailPath,
} from "@/constants/app-config";

export const RUNE_ARCHIVE_COPY = {
  eyebrow: "Runes",
  title: "Runes",
  body: "일반 문장과 27개의 진정한 문장을 작품별 기록과 연결해 정리합니다.",
  generalTitle: "General Runes",
  generalEyebrow: "일반 문장",
  generalBody:
    "전투, 마법, 이동, 고유 기술에 연결되는 일반 문장과 고유 문장을 함께 정리합니다.",
  trueTitle: "True Runes",
  trueEyebrow: "진정한 문장",
  trueBody:
    "27개의 진정한 문장 가운데 환상수호전 1, 2의 주요 사건과 직접 연결되는 문장을 정리합니다.",
  profileTitle: "Rune Profile",
  categoryLabel: "구분",
  gamesLabel: "등장 작품",
  aliasLabel: "표기",
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
  category: RuneCategoryId;
  games: readonly string[];
  href: string;
};

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
    category: "trueRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "bright-shield-rune",
    name: "빛나는 방패의 문장",
    aliases: ["Bright Shield Rune"],
    category: "trueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "black-sword-rune",
    name: "검은 검의 문장",
    aliases: ["Black Sword Rune"],
    category: "trueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "rune-of-beginning",
    name: "시작의 문장",
    aliases: ["Rune of Beginning"],
    category: "trueRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "blue-moon-rune",
    name: "푸른 달의 문장",
    aliases: ["Blue Moon Rune"],
    category: "trueRune",
    games: ["suikoden-i", "suikoden-ii"],
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
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "water-rune",
    name: "물의 문장",
    aliases: ["Water Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "wind-rune",
    name: "바람의 문장",
    aliases: ["Wind Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "lightning-rune",
    name: "번개의 문장",
    aliases: ["Lightning Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "thunder-rune",
    name: "천둥의 문장",
    aliases: ["Thunder Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "rage-rune",
    name: "분노의 문장",
    aliases: ["Rage Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "flowing-rune",
    name: "흐르는 문장",
    aliases: ["Flowing Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "earth-rune",
    name: "대지의 문장",
    aliases: ["Earth Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "mother-earth-rune",
    name: "모대지의 문장",
    aliases: ["Mother Earth Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "resurrection-rune",
    name: "부활의 문장",
    aliases: ["Resurrection Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "blue-gate-rune",
    name: "창문의 문장",
    aliases: ["Blue Gate Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "darkness-rune",
    name: "어둠의 문장",
    aliases: ["Darkness Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "cyclone-rune",
    name: "선풍의 문장",
    aliases: ["Cyclone Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "killer-rune",
    name: "필살의 문장",
    aliases: ["Killer Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "turtle-rune",
    name: "거북이의 문장",
    aliases: ["Turtle Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "phero-rune",
    name: "페로의 문장",
    aliases: ["Phero Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "fortune-rune",
    name: "행운의 문장",
    aliases: ["Fortune Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "counter-rune",
    name: "반격의 문장",
    aliases: ["Counter Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "hazy-rune",
    name: "양지의 문장",
    aliases: ["Hazy Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "holy-rune",
    name: "신행법의 문장",
    aliases: ["Holy Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "true-holy-rune",
    name: "진신행법의 문장",
    aliases: ["True Holy Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "fury-rune",
    name: "분노의 문장",
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
  }),
  buildRuneReference({
    id: "balance-rune",
    name: "밸런스의 문장",
    aliases: ["Balance Rune"],
    category: "generalRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "spark-rune",
    name: "스파크의 문장",
    aliases: ["Spark Rune"],
    category: "generalRune",
    games: ["suikoden-ii"],
  }),
  buildRuneReference({
    id: "clone-rune",
    name: "분신의 문장",
    aliases: ["Clone Rune"],
    category: "generalRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "blinking-rune",
    name: "순간이동의 문장",
    aliases: ["Blinking Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "falcon-rune",
    name: "매의 문장",
    aliases: ["Falcon Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
  }),
  buildRuneReference({
    id: "boar-rune",
    name: "멧돼지의 문장",
    aliases: ["Boar Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "hate-rune",
    name: "증오의 문장",
    aliases: ["Hate Rune"],
    category: "uniqueRune",
    games: ["suikoden-i"],
  }),
  buildRuneReference({
    id: "trick-rune",
    name: "장난감의 문장",
    aliases: ["Trick Rune"],
    category: "uniqueRune",
    games: ["suikoden-i", "suikoden-ii"],
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
  }),
  buildRuneReference({
    id: "unicorn-rune",
    name: "일각수의 문장",
    aliases: ["Unicorn Rune"],
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
  }),
] as const;

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
  );
};
