/**
 * 작품별 캐릭터 기본 목록, 표시 순서, 프로필 요약 데이터를 정의합니다.
 */

import suikodenIManifest from "../../../public/characters/suikoden-i/manifest.json";
import {
  SUIKODEN_I_CHARACTER_LOCALIZATION,
  SUIKODEN_I_RUNE_LABEL,
} from "@/constants/characters/suikoden-i-character-localization";
import {
  SUIKODEN_II_CHARACTER_LOCALIZATION,
  SUIKODEN_II_CHARACTER_STAR_ORDERS,
  SUIKODEN_II_CHARACTER_TYPE_LABELS,
  SUIKODEN_II_RUNE_LABELS,
} from "@/constants/characters/suikoden-ii-character-localization";
import {
  SUIKODEN_II_CHARACTER_COPY,
  SUIKODEN_II_CHARACTERS,
} from "@/constants/characters/suikoden-ii-characters";
import {
  CHARACTER_DETAIL_RECORDS,
  type CharacterDetailRecord,
} from "@/constants/characters/character-detail-records";
import {
  resolveItemDetailHref,
  translateItemName,
} from "@/constants/items/item-content";
import {
  buildCharacterDetailPath,
  buildGameplayDetailPath,
} from "@/constants/app/app-config";
import { GAMEPLAY_DETAIL_IDS } from "@/constants/gameplay/gameplay-content";
import { RUNE_REFERENCES, resolveRuneReference } from "@/constants/runes/rune-content";
import { STAR_OF_DESTINY_KOREAN_NAMES } from "@/constants/characters/star-of-destiny";

export const CHARACTER_COPY = {
  eyebrow: "Characters",
  title: "Characters",
  body: "각 작품의 108성 및 주요 동료를 작품별로 정리합니다. 이름, 별의 자리, 구분, 주요 등장 지역을 빠르게 확인할 수 있습니다.",
  unavailableDetail: "-",
  entryCountSuffix: "명",
  portraitAlt: (name: string) => `${name} 초상`,
  detailNavigationAriaLabel: (name: string) => `${name} 상세 기록 목차`,
  detailOrderCaption: (order: string) => `No. ${order}`,
  ariaLabels: {
    seriesTabs: "Character series",
    detailLink: (name: string) => `${name} 상세 기록 보기`,
  },
  tableLabels: {
    no: "No",
    portrait: "초상",
    character: "이름",
    star: "108성",
    type: "구분",
    appearanceLocation: "등장 마을",
    rune: "룬",
    runeSlots: "룬 슬롯",
    recruitment: "영입 방법",
    order: "순번",
  },
  detailLabels: {
    profile: "Profile",
    characterRecord: "Character Record",
    profileLedger: "Profile Ledger",
    gameRole: "Game Role",
    combatData: "Combat Data",
    entryNo: "No",
    series: "Series",
    star: "108성",
    role: "구분",
    location: "등장 마을",
    rune: "기본 문장",
    runeSlots: "룬 슬롯",
    recruitmentFlow: "영입 흐름",
    combatRole: "게임 내 역할",
    runeRole: "기본 문장",
    relatedRecord: "관련 기록",
    unitePartners: "함께하는 인물",
    uniteEffect: "효과",
    uniteNote: "비고",
    backToList: "목록으로 돌아가기",
  },
  detailMessages: {
    fixedEquipment: (items: readonly string[]) =>
      `별표(*)가 붙은 장비는 해제할 수 없는 고정 장비입니다. 대상: ${items.join(", ")}.`,
  },
} as const;

const CHARACTER_ORDER_PAD_LENGTH = 3;
const COMBAT_DATA_ANCHOR_PREFIX = "combat-data";

export const CHARACTER_DETAIL_SECTION_IDS = {
  profileLedger: "profile-ledger",
  gameRole: "game-role",
  combatData: "combat-data",
} as const;

const CHARACTER_TYPE_VALUE = {
  combat: "전투",
} as const;

const CHARACTER_DETAIL_LINE_OVERRIDES = {
  "suikoden-i": {
    hero: {
      overall: [
        "티르는 항상 파티에서 빠질 수 없는 필수 멤버이며, 평균 이상의 능력치를 갖춘 균형형 캐릭터입니다. 공격력이 안정적으로 성장하고 문장 마법도 준수하게 활용할 수 있습니다. 카이와의 협력 공격은 다수의 적을 상대할 때 유용하며, 소울이터는 즉사 마법과 강력한 공격 주문을 갖춘 핵심 문장입니다.",
      ],
    },
  },
} as const;

const MAX_LEVEL_STATUS_LABELS = {
  hp: "HP",
  "lvl 1": "LV.1",
  "lvl 2": "LV.2",
  "lvl 3": "LV.3",
  "lvl 4": "LV.4",
  atk: "ATK",
  def: "DEF",
  str: "STR",
  pdf: "PDF",
  skl: "SKL",
  mdf: "MDF",
  mag: "MAG",
  spd: "SPD",
  eva: "EVA",
  luc: "LUC",
} as const;

const MAX_LEVEL_STATUS_GROUPS = [
  {
    title: "HP",
    keys: ["hp"],
  },
  {
    title: "MP",
    keys: ["lvl 1", "lvl 2", "lvl 3", "lvl 4"],
  },
  {
    title: "Battle Stats",
    keys: ["atk", "def", "str", "pdf", "skl", "mdf", "mag", "spd", "eva", "luc"],
  },
] as const;

const WEAPON_TYPE_LABELS = {
  "N/A": CHARACTER_COPY.unavailableDetail,
  Axe: "도끼",
  "Bo Staff": "봉",
  Book: "책",
  Boomerang: "부메랑",
  Bow: "활",
  Claw: "손톱",
  Claws: "손톱",
  Dart: "다트",
  Darts: "다트",
  "Double Axes": "쌍도끼",
  "Dual Swords": "쌍검",
  Fists: "주먹",
  Gun: "총",
  Hammer: "망치",
  Katana: "도",
  Kicks: "발차기",
  Knife: "나이프",
  Naginata: "나기나타",
  "Needle/Dart": "침/다트",
  Oar: "노",
  Pan: "프라이팬",
  Pickaxe: "곡괭이",
  Rod: "로드",
  Saw: "톱",
  Scythe: "낫",
  Shawl: "숄",
  Shuriken: "수리검",
  Shurikens: "수리검",
  "Sickle & Chain": "사슬낫",
  Slingshot: "새총",
  Spear: "창",
  Staff: "지팡이",
  Sword: "검",
  "Sword (Special)": "검",
  "Throwing Knife": "투척 나이프",
  "Throwing Knife (Shuriken)": "투척 나이프",
  "Throwing Knifes": "투척 나이프",
  "Throwing Roses": "투척 장미",
  Tonfas: "톤파",
  "Tri-Nunchaku": "삼절곤",
  "Twin Fang": "쌍아",
  Whip: "채찍",
  Wok: "웍",
  Wrench: "렌치",
} as const;

const WEAPON_RANGE_LABELS = {
  "N/A": CHARACTER_COPY.unavailableDetail,
  S: "근거리",
  M: "중거리",
  L: "원거리",
} as const;

const EQUIPMENT_GROUP_LABELS = {
  default: "초기 장비",
  recommended: "추천 장비",
} as const;

const EQUIPMENT_SLOT_LABELS = {
  equipment: "장비",
  helmet: "머리",
  armor: "몸",
  shield: "방패",
  other1: "장신구 1",
  other2: "장신구 2",
} as const;

const UNITE_ATTACK_LABELS = {
  "100 Kobold Attack": "100 코볼트 공격",
  "5 Squirrel Attack": "5 다람쥐 공격",
  "Bandit Attack": "산적 공격",
  "Beastmaster Attack": "야수 조련사 공격",
  "Beat Em' Up Attack": "난투 공격",
  "Beauty Attack": "미녀 공격",
  "Blacksmith Attack": "대장장이 공격",
  "Bow Attack": "활 공격",
  "Bow Wow Attack": "멍멍 공격",
  "Buddy Attack": "친구 공격",
  "Bumpy Attack": "울퉁불퉁 공격",
  "Carpenter Attack": "목수 공격",
  "Circus Attack": "서커스 공격",
  "Copycat Attack": "흉내 공격",
  "Couple Attack": "부부 공격",
  "Cross Attack": "크로스 공격",
  "Dad and Daughter Attack": "부녀 공격",
  "Double Kraken Attack": "더블 크라켄 공격",
  "Double Leader Attack": "더블 리더 공격",
  "Double Monster Attack": "더블 몬스터 공격",
  "Dragon Knight Attack": "용기사 공격",
  "Elf Attack": "엘프 공격",
  "Family Attack": "가족 공격",
  "Fancy Lad Attack": "미남 공격",
  "Fatal Attack": "필사의 공격",
  "Flash Attack": "섬광 공격",
  "Groupie Attack": "팬클럽 공격",
  "Head Up!!": "헤드 업!!",
  "Husband and Wife Attack": "부부 공격",
  "Knight Attack": "기사 공격",
  "Kobold + 1 Attack": "코볼트+1 공격",
  "Kobold Attack": "코볼트 공격",
  "Leisure Attack": "여가 공격",
  "Loyal Dog Attack": "충견 공격",
  "Manly Attack": "남자 공격",
  "Martial Arts Attack": "격투 공격",
  "Master Pupil Attack": "사제 공격",
  "Narcissus Attack": "나르시스 공격",
  "Ninja Attack": "닌자 공격",
  "Pirate Attack": "해적 공격",
  "Pretty Boy Attack": "미남 공격",
  "Pretty Girl Attack": "미소녀 공격",
  "Rival Attack": "라이벌 공격",
  "Servant Attack": "종자 공격",
  "Swordsman Attack": "검사 공격",
  "Tackle Attack": "태클 공격",
  "Talisman Attack/Guardian Attack": "부적 공격 / 수호 공격",
  "Trick Attack": "트릭 공격",
  "Twin Fighter Attack": "쌍투사 공격",
  "Warrior Attack": "전사 공격",
  "Wild Arrow Attack": "와일드 애로우 공격",
  "Winger Attack": "윙 호드 공격",
  "Winger Attacks": "윙 호드 공격",
} as const;

const UNITE_CHARACTER_LABELS = new Map<string, string>([
  ...suikodenIManifest.map((character) => [
    character.name,
    SUIKODEN_I_CHARACTER_LOCALIZATION[
      character.id as keyof typeof SUIKODEN_I_CHARACTER_LOCALIZATION
    ]?.name ?? character.name,
  ] as const),
  ...SUIKODEN_II_CHARACTERS.map((character) => [
    character.name,
    SUIKODEN_II_CHARACTER_LOCALIZATION[
      character.id as keyof typeof SUIKODEN_II_CHARACTER_LOCALIZATION
    ]?.name ?? character.name,
  ] as const),
  ["Tir", "티르 맥돌"],
  ["Riou", "주인공"],
  ["Jowy", "죠우이"],
  ["Sonya", "소니아 슈렌"],
  ["Rulodia", "루로디아"],
  ["L.C. Chan", "론챤챤"],
  ["Georg", "게오르그 프라임"],
  ["Grenseal", "그렌실"],
]);

type CharacterDetailLineKey = keyof typeof CHARACTER_DETAIL_LINE_OVERRIDES[
  "suikoden-i"
]["hero"];

export type CharacterDetailNavigationItem = {
  id: string;
  label: string;
  href: string;
};

export type CharacterCombatDataPanel = {
  id: string;
  title: string;
  lines: readonly string[];
  rowGroups?: readonly {
    title: string;
    rows: readonly {
      href?: string;
      label: string;
      links?: readonly {
        href?: string;
        label: string;
      }[];
      value: string;
    }[];
  }[];
  rows: readonly {
    href?: string;
    label: string;
    links?: readonly {
      href?: string;
      label: string;
    }[];
    value: string;
  }[];
};

export const formatCharacterOrder = (order: number) => {
  return String(order).padStart(CHARACTER_ORDER_PAD_LENGTH, "0");
};

const buildStarLabel = (order: number) => {
  return STAR_OF_DESTINY_KOREAN_NAMES[order - 1] ?? "추가 기록";
};

const CHARACTER_APPEARANCE_LOCATION_LABELS = {
  그렉민스터: "그레그민스터",
  샤사라자드: "샤사라자드 요새",
  "하이랜드 주둔지": "유니콘 부대 야영지",
  "유니콘의 숲": "코볼트마을 숲",
  롯카쿠: "롯카쿠 마을",
} as const;

const normalizeAppearanceLocation = (location: string) => {
  return CHARACTER_APPEARANCE_LOCATION_LABELS[
    location as keyof typeof CHARACTER_APPEARANCE_LOCATION_LABELS
  ] ?? location;
};

const SUIKODEN_I_APPEARANCE_MATCHES = [
  ["레난캄프", "레난캄프"],
  ["코안", "코안"],
  ["세이카", "세이카"],
  ["판누 야쿠타", "판누 야쿠타"],
  ["네크로드 성", "네크로드 성"],
  ["모라비아 성", "모라비아 성"],
  ["비밀 공장", "비밀 공장"],
  ["그렉민스터", "그레그민스터"],
  ["엘프 마을", "엘프 마을"],
  ["북쪽 관문", "북쪽 관문"],
  ["리콘", "리콘"],
  ["카쿠", "카쿠"],
  ["코볼트 마을", "코볼트 마을"],
  ["스칼레티시아 성", "스칼레티시아 성"],
  ["샤사라자드", "샤사라자드 요새"],
  ["해적 요새", "해적 요새"],
  ["카렉카", "카렉카"],
  ["키로프", "키로프"],
  ["안테이", "안테이"],
  ["테이엔", "테이엔"],
  ["드워프 마을", "드워프 마을"],
  ["전사의 마을", "전사의 마을"],
  ["클론 사원", "클론 사원"],
  ["대삼림", "대삼림"],
  ["가란 성새", "가란 성새"],
  ["시크 계곡", "시크 계곡"],
  ["쿠와바 성새", "쿠와바 성새"],
  ["트란 성", "트란 성"],
  ["본거지", "트란 성"],
  ["크완다 로스만", "판누 야쿠타"],
  ["게임 시작", "그레그민스터"],
] as const;

const SUIKODEN_I_APPEARANCE_OVERRIDES = {
  kreutz: "전사의 마을",
  kirkis: "트란 성",
  luc: "본거지",
  pahn: "코안",
  viktor: "그레그민스터",
  "tai-ho": "카쿠",
  tengaar: "네크로드 성",
  varkas: "트란 성",
  sydonia: "트란 성",
  glenshiel: "테오와의 전투 이후",
  alen: "테오와의 전투 이후",
  tesla: "안테이",
  joshua: "용동",
  liukan: "소니에르 감옥",
  futch: "용동",
  fuma: "용동",
  hugo: "과거의 동굴",
  milia: "용동",
  taggart: "모라비아 성",
  kirke: "로리마 성새",
  maas: "대삼림 마을",
  sansuke: "대삼림 마을",
} as const;

const SUIKODEN_II_APPEARANCE_MATCHES = [
  ["게임 시작", "유니콘 부대 야영지"],
  ["캐로", "캐로"],
  ["토토", "토토"],
  ["류베", "류베"],
  ["용병 요새", "용병 요새"],
  ["뮤즈", "뮤즈"],
  ["그랜마이어", "뮤즈"],
  ["솔론 지", "코로네"],
  ["쿠스쿠스", "쿠스쿠스"],
  ["투 리버", "투 리버"],
  ["레이크웨스트", "레이크웨스트"],
  ["라다트", "라다트"],
  ["그린힐", "그린힐"],
  ["가도 마을", "가도 마을"],
  ["트란공화국", "그레그민스터"],
  ["배너 마을", "바나 마을"],
  ["바나 마을", "바나 마을"],
  ["코볼트 마을", "코볼트 마을"],
  ["사우스 윈도우", "사우스 윈도우"],
  ["노스 윈도우", "노스 윈도우"],
  ["틴토", "틴토"],
  ["크롬", "크롬"],
  ["숲의 마을", "숲의 마을"],
  ["뉴 리프 학원", "그린힐"],
  ["그렉민스터", "그레그민스터"],
  ["틴토 광산", "틴토 광산"],
  ["코로네", "코로네"],
  ["본거지", "본거지 성"],
] as const;

const SUIKODEN_II_APPEARANCE_OVERRIDES = {
  "boris-wizen": "틴토",
  "kiba-windamier": "라다트",
  tomo: "차이의 집",
  sigfried: "코볼트마을 숲",
  "sierra-mikain": "틴토",
  hauser: "뮤즈",
  jess: "뮤즈",
  "georg-prime": "코코마을 부근 산길",
  pesmerga: "바람의 동굴",
  "hai-yo": "본거지 성",
  shilo: "레이크웨스트",
  viki: "마틸다 숲길",
  miklotov: "록액스",
  camus: "록액스",
  "klaus-windamier": "라다트",
  sheena: "그레그민스터",
  gordon: "그레그민스터",
  lorelai: "그레그민스터",
  sasuke: "롯카쿠 마을",
  mondo: "롯카쿠 마을",
  badeaux: "마틸다 숲길",
  "kahn-marley": "틴토",
  gijimu: "틴토",
  "lo-wen": "틴토",
  koyu: "틴토",
  marlowe: "틴토",
} as const;

const resolveAppearanceLocation = (
  recruitment: string,
  matches: readonly (readonly [string, string])[],
) => {
  const location = matches.find(([keyword]) => recruitment.includes(keyword))?.[1] ??
    CHARACTER_COPY.unavailableDetail;

  return normalizeAppearanceLocation(location);
};

const resolveOptionalGameRole = (localized: object) => {
  if (!("gameRole" in localized)) {
    return undefined;
  }

  return typeof localized.gameRole === "string" ? localized.gameRole : undefined;
};

const localizeSuikodenIICharacter = (
  character: (typeof SUIKODEN_II_CHARACTERS)[number],
) => {
  const localized = SUIKODEN_II_CHARACTER_LOCALIZATION[character.id];
  const starOrder = SUIKODEN_II_CHARACTER_STAR_ORDERS[character.id];
  const characterType =
    SUIKODEN_II_CHARACTER_TYPE_LABELS[
      character.characterType as keyof typeof SUIKODEN_II_CHARACTER_TYPE_LABELS
    ] ?? character.characterType;
  const rune =
    SUIKODEN_II_RUNE_LABELS[
      character.rune as keyof typeof SUIKODEN_II_RUNE_LABELS
    ] ?? character.rune;

  return {
    ...character,
    order: starOrder,
    name: localized.name,
    star: buildStarLabel(starOrder),
    characterType,
    appearanceLocation: normalizeAppearanceLocation(
      SUIKODEN_II_APPEARANCE_OVERRIDES[
        character.id as keyof typeof SUIKODEN_II_APPEARANCE_OVERRIDES
      ] ??
        resolveAppearanceLocation(
          localized.recruitment,
          SUIKODEN_II_APPEARANCE_MATCHES,
        ),
    ),
    recruitment: localized.recruitment,
    gameRole: resolveOptionalGameRole(localized),
    rune,
  };
};

type SuikodenICharacterId = keyof typeof SUIKODEN_I_CHARACTER_LOCALIZATION;

const localizeSuikodenICharacter = (
  character: (typeof suikodenIManifest)[number],
  index: number,
) => {
  const characterId = character.id as SuikodenICharacterId;
  const localized = SUIKODEN_I_CHARACTER_LOCALIZATION[characterId];

  return {
    id: character.id,
    game: "suikoden-i",
    order: index + 1,
    name: localized.name,
    star: buildStarLabel(index + 1),
    characterType: localized.characterType,
    appearanceLocation: normalizeAppearanceLocation(
      SUIKODEN_I_APPEARANCE_OVERRIDES[
        characterId as keyof typeof SUIKODEN_I_APPEARANCE_OVERRIDES
      ] ??
        resolveAppearanceLocation(
          localized.recruitment,
          SUIKODEN_I_APPEARANCE_MATCHES,
        ),
    ),
    recruitment: localized.recruitment,
    gameRole: resolveOptionalGameRole(localized),
    rune: "rune" in localized ? localized.rune : SUIKODEN_I_RUNE_LABEL,
    runeSlots: "-",
    image: character.file,
  };
};

export const CHARACTER_SERIES = [
  {
    id: "suikoden-i",
    title: "Suikoden I",
    eyebrow: "Gate Rune War",
    body: "트란 해방군에 합류하는 108성의 기본 인덱스입니다. 인물별 상세 기록은 별도 문서에서 다룹니다.",
  },
  {
    id: "suikoden-ii",
    title: SUIKODEN_II_CHARACTER_COPY.title,
    eyebrow: "Dunan Unification War",
    body: SUIKODEN_II_CHARACTER_COPY.body,
  },
] as const;

export const SUIKODEN_I_CHARACTERS = suikodenIManifest.map(
  localizeSuikodenICharacter,
);

export const CHARACTER_DATA_BY_GAME = {
  "suikoden-i": SUIKODEN_I_CHARACTERS,
  "suikoden-ii": SUIKODEN_II_CHARACTERS.map(localizeSuikodenIICharacter).sort(
    (a, b) => a.order - b.order,
  ),
} as const;

export const CHARACTER_DETAIL_AVAILABLE_GAMES = [
  "suikoden-i",
  "suikoden-ii",
] as const;

const CHARACTER_DETAIL_AVAILABLE_GAME_IDS = new Set<string>(
  CHARACTER_DETAIL_AVAILABLE_GAMES,
);

export type CharacterGameId = keyof typeof CHARACTER_DATA_BY_GAME;
export type CharacterEntry =
  (typeof CHARACTER_DATA_BY_GAME)[CharacterGameId][number];

const CHARACTER_GAME_ID_BY_SERIES_TITLE = new Map<string, CharacterGameId>(
  CHARACTER_SERIES.map((series) => [series.title, series.id]),
);

export const isCharacterGameId = (gameId: string): gameId is CharacterGameId => {
  return gameId in CHARACTER_DATA_BY_GAME;
};

export const isCharacterDetailAvailable = (
  gameId: string,
): gameId is CharacterGameId => {
  return isCharacterGameId(gameId) &&
    CHARACTER_DETAIL_AVAILABLE_GAME_IDS.has(gameId);
};

export const getCharacterSeries = (gameId: CharacterGameId) => {
  return CHARACTER_SERIES.find((series) => series.id === gameId) ??
    CHARACTER_SERIES[0];
};

export const resolveCharacterGameIdBySeriesTitle = (
  seriesTitle?: string,
): CharacterGameId | undefined => {
  return seriesTitle
    ? CHARACTER_GAME_ID_BY_SERIES_TITLE.get(seriesTitle)
    : undefined;
};

export const buildCharacterProfileRows = (
  character: CharacterEntry,
  seriesTitle: string,
) => {
  const paddedOrder = formatCharacterOrder(character.order);

  return [
    {
      label: CHARACTER_COPY.detailLabels.entryNo,
      value: paddedOrder,
    },
    {
      label: CHARACTER_COPY.detailLabels.series,
      value: seriesTitle,
    },
    {
      label: CHARACTER_COPY.detailLabels.star,
      value: character.star,
    },
    {
      label: CHARACTER_COPY.detailLabels.role,
      value: character.characterType,
    },
    {
      label: CHARACTER_COPY.detailLabels.location,
      value: character.appearanceLocation,
    },
  ];
};

const getCharacterDetailLines = (
  character: CharacterEntry,
  key: CharacterDetailLineKey,
  fallback: readonly string[],
) => {
  const gameOverrides = CHARACTER_DETAIL_LINE_OVERRIDES[
    character.game as keyof typeof CHARACTER_DETAIL_LINE_OVERRIDES
  ];
  const characterOverrides = gameOverrides?.[
    character.id as keyof typeof gameOverrides
  ];
  const lines = characterOverrides?.[key];

  return lines ?? fallback;
};

export const getCharacterDetailRecord = (
  character: CharacterEntry,
): CharacterDetailRecord | null => {
  const gameRecords = CHARACTER_DETAIL_RECORDS[
    character.game as keyof typeof CHARACTER_DETAIL_RECORDS
  ] as Record<string, CharacterDetailRecord> | undefined;

  return gameRecords?.[character.id] ?? null;
};

export const buildCharacterDetailNavigationItems = ({
  character,
  combatDataPanels,
}: {
  character: CharacterEntry;
  combatDataPanels: readonly CharacterCombatDataPanel[];
}): CharacterDetailNavigationItem[] => {
  const baseItems = [
    {
      id: CHARACTER_DETAIL_SECTION_IDS.profileLedger,
      label: CHARACTER_COPY.detailLabels.profileLedger,
      href: `#${CHARACTER_DETAIL_SECTION_IDS.profileLedger}`,
    },
    {
      id: CHARACTER_DETAIL_SECTION_IDS.gameRole,
      label: CHARACTER_COPY.detailLabels.gameRole,
      href: `#${CHARACTER_DETAIL_SECTION_IDS.gameRole}`,
    },
  ];

  if (character.characterType !== CHARACTER_TYPE_VALUE.combat) {
    return baseItems;
  }

  return [
    ...baseItems,
    ...(combatDataPanels.length > 0 ? [
      {
        id: CHARACTER_DETAIL_SECTION_IDS.combatData,
        label: CHARACTER_COPY.detailLabels.combatData,
        href: `#${CHARACTER_DETAIL_SECTION_IDS.combatData}`,
      },
      ...combatDataPanels.map((panel) => ({
        id: panel.id,
        label: panel.title,
        href: `#${panel.id}`,
      })),
    ] : []),
  ];
};

const buildCharacterCombatRole = (character: CharacterEntry) => {
  if (character.gameRole) {
    return character.gameRole;
  }

  return character.characterType;
};

const buildCharacterRuneRole = (
  character: CharacterEntry,
  record: CharacterDetailRecord | null,
) => {
  const primaryRunes = resolveCharacterPrimaryRunes(character, record);
  const runeText = primaryRunes.join(" / ");
  const hasRune = primaryRunes.length > 0;
  const hasRuneSlots = character.runeSlots !== CHARACTER_COPY.unavailableDetail;

  if (hasRune && hasRuneSlots) {
    return `합류 당시 기본 장착 문장은 ${runeText}입니다. 문장 슬롯은 ${character.runeSlots}개입니다.`;
  }

  if (hasRune) {
    return `합류 당시 기본 장착 문장은 ${runeText}입니다.`;
  }

  if (hasRuneSlots) {
    return `합류 당시 기본 장착 문장은 확인되지 않습니다. 문장 슬롯은 ${character.runeSlots}개입니다.`;
  }

  return CHARACTER_COPY.unavailableDetail;
};

export const buildCharacterGameRoleRows = (
  character: CharacterEntry,
  record: CharacterDetailRecord | null,
) => {
  return [
    {
      label: CHARACTER_COPY.detailLabels.recruitmentFlow,
      value: character.recruitment,
    },
    {
      label: CHARACTER_COPY.detailLabels.combatRole,
      value: buildCharacterCombatRole(character),
    },
    {
      label: CHARACTER_COPY.detailLabels.runeRole,
      value: buildCharacterRuneRole(character, record),
    },
    ...(character.game === "suikoden-ii" && character.id === "hai-yo" ?
      [
        {
          href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
          label: CHARACTER_COPY.detailLabels.relatedRecord,
          value: "하이요 이벤트",
        },
      ] :
      []),
  ];
};

const normalizeDetailValue = (value: string) => {
  if (["[none]", "n/a"].includes(value.trim().toLowerCase())) {
    return CHARACTER_COPY.unavailableDetail;
  }

  return translateItemName(value);
};

const EQUIPMENT_FIXED_MARK = "*";

const isFixedEquipment = (value: string) => value.includes(EQUIPMENT_FIXED_MARK);

const removeEquipmentFixedMark = (value: string) =>
  value.replaceAll(EQUIPMENT_FIXED_MARK, "").trim();

const translateFixedEquipmentName = (value: string) =>
  removeEquipmentFixedMark(translateItemName(value));

const translateWeaponType = (value: string) => {
  return WEAPON_TYPE_LABELS[value as keyof typeof WEAPON_TYPE_LABELS] ?? value;
};

const translateWeaponRange = (value: string) => {
  return WEAPON_RANGE_LABELS[value as keyof typeof WEAPON_RANGE_LABELS] ?? value;
};

const translateEquipmentSlot = (value: string) => {
  return EQUIPMENT_SLOT_LABELS[value as keyof typeof EQUIPMENT_SLOT_LABELS] ??
    value;
};

const buildEquipmentLabel = (
  group: keyof typeof EQUIPMENT_GROUP_LABELS,
  slot: string,
) => `${EQUIPMENT_GROUP_LABELS[group]} ${translateEquipmentSlot(slot)}`;

const hasFinalConsonant = (value: string) => {
  const lastCharacter = value.trim().at(-1);

  if (!lastCharacter) {
    return false;
  }

  const code = lastCharacter.charCodeAt(0);

  if (code < 0xac00 || code > 0xd7a3) {
    return false;
  }

  return (code - 0xac00) % 28 > 0;
};

const topicMarker = (value: string) => hasFinalConsonant(value) ? "은" : "는";

const buildCharacterOverallFallbackLines = (
  character: CharacterEntry,
  role: CharacterDetailRecord["role"] | undefined,
) => {
  const topic = topicMarker(character.name);
  const weaponType = role?.weapon.type ? translateWeaponType(role.weapon.type) : "";
  const weaponRange = role?.weapon.range ?
    translateWeaponRange(role.weapon.range) :
    "";
  const weaponSummary = [weaponRange, weaponType].filter(Boolean).join(" ");
  const primaryRunes = resolveCharacterPrimaryRunes(
    character,
    role ? { role } : null,
  );
  const runeSummary = primaryRunes.length > 0 ?
    `${primaryRunes.join(" / ")} 기본 장착 문장` :
    "기본 전투 역할";

  return [
    weaponSummary ?
      `${character.name}${topic} ${weaponSummary} 무기를 사용하는 ${character.characterType} 인물입니다. ${runeSummary}과 최대 레벨 능력치를 함께 보며 편성 위치를 판단합니다.` :
      `${character.name}${topic} ${character.characterType} 구분의 인물입니다. 영입 흐름과 전투 기록을 함께 보며 작품 내 역할을 확인합니다.`,
  ];
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const RUNE_NAME_MATCHERS = RUNE_REFERENCES.flatMap((rune) =>
  [rune.name, ...rune.aliases].map((name) => ({
    name,
    runeName: rune.name,
    pattern: new RegExp(`${escapeRegExp(name)}(?!\\s+Piece)`, "gi"),
  })),
);

const extractDisplayRuneNames = (line: string) => {
  const matches = RUNE_NAME_MATCHERS.flatMap((matcher) =>
    [...line.matchAll(matcher.pattern)].map((match) => ({
      index: match.index ?? 0,
      length: match[0].length,
      runeName: matcher.runeName,
    })),
  );

  return uniqueRuneNames(
    matches
      .sort((a, b) => a.index - b.index || b.length - a.length)
      .map((match) => match.runeName),
  );
};

const CHARACTER_UNAVAILABLE_RUNE_LABELS = new Set([
  CHARACTER_COPY.unavailableDetail,
  "없음",
  "None",
  "None.",
]);

const normalizeRuneEntryText = (value: string) =>
  value
    .replace(/^#+/, "")
    .replace(/^['"*\s]+/, "")
    .replace(/['"*\s]+$/, "")
    .trim();

const isUnavailableRuneText = (value: string) =>
  CHARACTER_UNAVAILABLE_RUNE_LABELS.has(normalizeRuneEntryText(value));

const splitCharacterRuneLabel = (value: string) => {
  if (isUnavailableRuneText(value)) {
    return [];
  }

  return uniqueRuneNames(value
    .split(/\s*\/\s*|\s*,\s*|\s+and\s+/i)
    .map((rune) => rune.trim())
    .filter((rune) => rune && !isUnavailableRuneText(rune))
    .map((name) => resolveRuneReference(name)?.name ?? name));
};

const hasSentenceLikeRuneDescription = (value: string) =>
  /\b(after|attached|become|best|can|can't|cannot|come|comes|equipped|found|good|has|have|is|recommended|upgrade|use|using|with)\b/i.test(
    value,
  );

const extractDirectAttachedRuneNames = (line: string) => {
  const normalizedLine = normalizeRuneEntryText(line);
  const slotMatch = normalizedLine.match(
    /^(?:Head|R\. Hand|L\. Hand|Right Hand|Left Hand)\s*-\s*(.+)$/i,
  );
  const runeText = (slotMatch?.[1]?.trim() ?? normalizedLine)
    .replace(/\([^)]*\)/g, "")
    .trim();

  if (isUnavailableRuneText(runeText) || hasSentenceLikeRuneDescription(runeText)) {
    return [];
  }

  return extractDisplayRuneNames(runeText);
};

const extractProseAttachedRuneNames = (line: string) => {
  const normalizedLine = normalizeRuneEntryText(line);
  const proseMatches = [
    normalizedLine.match(/\bpersonal rune,\s*(?:the\s+)?(.+?Rune)\b/i),
    normalizedLine.match(/\bcomes? equipped with\s+(?:the\s+)?(.+?Rune)\b/i),
    normalizedLine.match(/\bcomes? with\s+(?:the\s+)?(.+?Rune)\b/i),
    normalizedLine.match(/\bhas\s+(?:a\s+|the\s+)?(.+?Rune)\s+permanently attached\b/i),
    normalizedLine.match(/\b(.+?Rune)\s+permanently attached\b/i),
  ];

  return proseMatches.flatMap((match) =>
    match?.[1] ? extractDisplayRuneNames(match[1]) : [],
  );
};

const extractAttachedRuneNames = (lines: readonly string[]) => {
  const directRuneNames = lines.flatMap(extractDirectAttachedRuneNames);

  if (directRuneNames.length > 0) {
    return directRuneNames;
  }

  return lines.flatMap(extractProseAttachedRuneNames);
};

const uniqueRuneNames = (names: readonly string[]) => [...new Set(names)];

export const resolveCharacterPrimaryRunes = (
  character: CharacterEntry,
  record: CharacterDetailRecord | null,
) => {
  const role = record?.role;
  const attachedRunes = role ? extractAttachedRuneNames(role.rune.attached) : [];

  if (attachedRunes.length > 0) {
    return uniqueRuneNames(attachedRunes);
  }

  const characterRunes = splitCharacterRuneLabel(character.rune);

  if (characterRunes.length > 0) {
    return characterRunes;
  }

  return [];
};

const translateUniteCharacterName = (name: string) => {
  return UNITE_CHARACTER_LABELS.get(name.trim()) ?? name.trim();
};

const translateUniteCharacterNames = (value: string) => {
  return value
    .replace(/^either\s+/i, "")
    .replace(/\s*\(.+\)\s*/g, " ")
    .split(/\s+and\s+|,\s*/)
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => name.replace(/^or\s+/i, "").replace(/\s+or\s+/i, ""))
    .map((name) => name.replace(/\.$/, ""))
    .filter(Boolean)
    .map(translateUniteCharacterName);
};

const translateUniteCharacterList = (value: string) => {
  return translateUniteCharacterNames(value)
    .join(", ");
};

const translateUniteAttackName = (value: string) => {
  const normalizedValue = value
    .replace(/^the\s+/i, "")
    .replace(/\.$/, "")
    .trim();

  return UNITE_ATTACK_LABELS[
    normalizedValue as keyof typeof UNITE_ATTACK_LABELS
  ] ?? normalizedValue;
};

const translateUniteAttackNames = (value: string) => {
  const normalizedValue = value
    .replace(/\.$/, "")
    .replace(/\s+which is really the Fancy Lad Attack/i, "")
    .replace(/,\s*mistranslated as (?:the )?Cutie Boy Attack/i, "")
    .replace(/,\s*mistranslated as Pretty Boy Attack/i, "")
    .replace(/,\s*translated as (?:the )?Cutie Boy Attack/i, "")
    .replace(/,\s*with\s+/i, " with ")
    .replace(/^the\s+/i, "")
    .trim();

  if (normalizedValue in UNITE_ATTACK_LABELS) {
    return [translateUniteAttackName(normalizedValue)];
  }

  return normalizedValue
    .split(/,\s+and\s+|,\s*|\s+and\s+/)
    .map((attack) => attack.trim())
    .filter(Boolean)
    .map(translateUniteAttackName);
};

const translateUniteAttackList = (value: string) => {
  return translateUniteAttackNames(value)
    .join(", ");
};

type ParsedUniteAttackRecord = {
  attack: string;
  effects: readonly string[];
  notes: readonly string[];
  partners: readonly string[];
};

const translateUniteDamageTarget = (target: string) => {
  const normalizedTarget = target.toLowerCase();

  if (normalizedTarget.includes("all enemies")) {
    return "적 전체";
  }

  if (normalizedTarget.includes("one enemy")) {
    return "적 1체";
  }

  if (normalizedTarget.includes("targets")) {
    return "대상";
  }

  return "적";
};

const translateUniteStatusEffect = (status: string) => {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("knockdown")) {
    return "넘어짐";
  }

  if (normalizedStatus.includes("instant death")) {
    return "즉사";
  }

  if (normalizedStatus.includes("sleep")) {
    return "수면";
  }

  return status;
};

const normalizeUniteDamageMultiplier = (value: string) =>
  value.replace(/%$/, "x").replace(/x$/i, "배");

const extractUniteAttackEffects = (line: string) => {
  const effects: string[] = [];
  const damageMatch = line.match(
    /\b(?:does|deals)\s+([\d.]+%?|[\d.]+x)\s+damage\s+to\s+(one enemy|all enemies|targets?)/i,
  );
  const chanceMatch = line.match(
    /(?:with\s+(?:a\s+)?)?(\d+)%\s+chance\s+(?:of|to inflict|at putting.+to)\s+([a-z ]+)/i,
  );

  if (damageMatch) {
    effects.push(
      `${translateUniteDamageTarget(damageMatch[2])}에게 ${normalizeUniteDamageMultiplier(damageMatch[1])} 피해를 줍니다.`,
    );
  }

  if (/has a chance at putting the enemies to sleep/i.test(line)) {
    effects.push("적 전체에게 수면을 부여할 수 있습니다.");
  } else if (chanceMatch) {
    effects.push(
      `${chanceMatch[1]}% 확률로 ${translateUniteStatusEffect(chanceMatch[2])}을 부여할 수 있습니다.`,
    );
  } else if (/chance to inflict Knockdown on targets/i.test(line)) {
    effects.push("대상에게 넘어짐을 부여할 수 있습니다.");
  }

  if (/unbalanc/i.test(line)) {
    effects.push("사용 후 참여자가 균형을 잃을 수 있습니다.");
  }

  return effects;
};

const buildParsedUniteAttackRecords = ({
  attackText,
  effects = [],
  notes = [],
  partnerText,
}: {
  attackText: string;
  effects?: readonly string[];
  notes?: readonly string[];
  partnerText?: string;
}): ParsedUniteAttackRecord[] => {
  const attacks = translateUniteAttackNames(attackText);
  const partners = partnerText ? translateUniteCharacterNames(partnerText) : [];

  return attacks.map((attack) => ({
    attack,
    effects,
    notes,
    partners,
  }));
};

const formatUniteAttackUsage = (
  _characterName: string,
  attackText: string,
  partnerText?: string,
) => {
  const attacks = translateUniteAttackList(attackText);
  const partners = partnerText ? translateUniteCharacterList(partnerText) : "";

  return partners ?
      `${attacks}을 ${partners}와 함께 사용할 수 있습니다.` :
      `${attacks}에 참여할 수 있습니다.`;
};

const translateUniteAttackLine = (line: string) => {
  const normalizedLine = line.replace(/^\*/, "").trim();

  if (/^(None\.?|.+ has no (known )?unite attacks?\.?|.+ does not have any unite attacks with other characters\.?)$/i.test(normalizedLine)) {
    return CHARACTER_COPY.unavailableDetail;
  }

  if (normalizedLine === "Head Up!! and Double Kraken Attack") {
    return "헤드 업!! / 더블 크라켄 공격";
  }

  if (normalizedLine.startsWith("Head Up!! teleports")) {
    return "헤드 업!!는 아비즈보어 또는 루로디아를 적 1체에게 보내 2배 피해를 주며, 사용 후 균형을 잃습니다.";
  }

  if (normalizedLine === "Riou can perform the following Unite Attacks:") {
    return "다음 협력 공격을 사용할 수 있습니다.";
  }

  const specialTranslations: Record<string, string> = {
    "Gadget can participate in the Trick Attack, which could be powered up if Meg is equipped with the Lubricating Oil.":
      "트릭 공격에 참여할 수 있습니다. 메그가 윤활유를 장비하면 위력이 강화됩니다.",
    "Camus can participate in the Knight Attack and the Pretty Boy Attack which is really the Fancy Lad Attack.":
      "기사 공격과 미남 공격에 참여할 수 있습니다.",
    "Gengen can participate in the Kobold Attack (with a small chance for alternative version as 100 Kobold Attack) and the Bow Wow Attack.":
      "코볼트 공격과 멍멍 공격에 참여할 수 있습니다. 코볼트 공격은 낮은 확률로 100 코볼트 공격으로 변화합니다.",
    "Maas can participate in the Blacksmith Attack. The unite attack is very powerful, so the best way to use him is to take advantage of this unite attack.":
      "대장장이 공격에 참여할 수 있습니다. 위력이 높은 협력 공격이므로 이를 중심으로 운용하기 좋습니다.",
    "Miklotov can participate in the Knight Attack and the Pretty Boy Attack, which is really the Fancy Lad Attack.":
      "기사 공격과 미남 공격에 참여할 수 있습니다.",
    "Rikimaru can participate in the Manly Attack. With a Cup of Promise equipped to either him or Amada, the unite attack has a chance to inflict Knockdown on targets.":
      "남자 공격에 참여할 수 있습니다. 리키마루 또는 아마다가 약속의 술잔을 장비하면 대상에게 넘어짐을 부여할 수 있습니다.",
    "Sasuke can participate in the Pretty Boy Attack, translated as the \"Cutie Boy Attack\".":
      "미남 공격에 참여할 수 있습니다.",
  };

  if (normalizedLine in specialTranslations) {
    return specialTranslations[normalizedLine];
  }

  const withHisMasterMatch = normalizedLine.match(
    /^(.+) has a (.+) with his master, (.+)\.$/,
  );
  if (withHisMasterMatch) {
    return formatUniteAttackUsage(
      withHisMasterMatch[1],
      withHisMasterMatch[2],
      withHisMasterMatch[3],
    );
  }

  const canUniteMatch = normalizedLine.match(
    /^(.+) can unite with (.+) and either (.+) or (.+) to perform the (.+)\.$/,
  );
  if (canUniteMatch) {
    return `${translateUniteAttackName(canUniteMatch[5])}을 ${[
      canUniteMatch[2],
      canUniteMatch[3],
      canUniteMatch[4],
    ].map(translateUniteCharacterName).join(", ")}와 함께 사용할 수 있습니다.`;
  }

  const performWithMatch = normalizedLine.match(/^(.+) can perform the (.+) with (.+)\.$/);
  if (performWithMatch) {
    return formatUniteAttackUsage(
      performWithMatch[1],
      performWithMatch[2],
      performWithMatch[3],
    );
  }

  const bulletWithMatch = normalizedLine.match(/^(.+ Attack) with (.+)$/);
  if (bulletWithMatch) {
    return `${translateUniteAttackName(bulletWithMatch[1])}을 ${translateUniteCharacterList(bulletWithMatch[2])}와 함께 사용할 수 있습니다.`;
  }

  const participateWithMatch = normalizedLine.match(
    /^(.+) can participate in (?:both )?(?:the )?(.+?) with (.+)\.$/,
  );
  if (participateWithMatch) {
    return formatUniteAttackUsage(
      participateWithMatch[1],
      participateWithMatch[2],
      participateWithMatch[3],
    );
  }

  const participateMatch = normalizedLine.match(
    /^(.+) can participate in (?:both )?(?:the )?(.+)\.$/,
  );
  if (participateMatch) {
    return formatUniteAttackUsage(participateMatch[1], participateMatch[2]);
  }

  return normalizedLine;
};

const parseUniteAttackLine = (line: string): ParsedUniteAttackRecord[] => {
  const normalizedLine = line.replace(/^\*/, "").trim();

  if (/^(None\.?|.+ has no (known )?unite attacks?\.?|.+ does not have any unite attacks with other characters\.?)$/i.test(normalizedLine)) {
    return [];
  }

  if (normalizedLine === "Head Up!! and Double Kraken Attack") {
    return buildParsedUniteAttackRecords({
      attackText: normalizedLine,
    });
  }

  if (normalizedLine.startsWith("Head Up!! teleports")) {
    return buildParsedUniteAttackRecords({
      attackText: "Head Up!!",
      effects: [
        "아비즈보어 또는 루로디아를 적 1체에게 보내 2배 피해를 주며, 사용 후 균형을 잃습니다.",
      ],
    });
  }

  const specialRecords: Record<string, readonly ParsedUniteAttackRecord[]> = {
    "Gadget can participate in the Trick Attack, which could be powered up if Meg is equipped with the Lubricating Oil.":
      buildParsedUniteAttackRecords({
        attackText: "Trick Attack",
        notes: ["메그가 윤활유를 장비하면 위력이 강화됩니다."],
        partnerText: "Meg",
      }),
    "Camus can participate in the Knight Attack and the Pretty Boy Attack which is really the Fancy Lad Attack.":
      buildParsedUniteAttackRecords({
        attackText: "Knight Attack and Pretty Boy Attack",
      }),
    "Gengen can participate in the Kobold Attack (with a small chance for alternative version as 100 Kobold Attack) and the Bow Wow Attack.":
      [
        ...buildParsedUniteAttackRecords({
          attackText: "Kobold Attack",
          notes: ["낮은 확률로 100 코볼트 공격으로 변화합니다."],
        }),
        ...buildParsedUniteAttackRecords({
          attackText: "Bow Wow Attack",
        }),
      ],
    "Maas can participate in the Blacksmith Attack. The unite attack is very powerful, so the best way to use him is to take advantage of this unite attack.":
      buildParsedUniteAttackRecords({
        attackText: "Blacksmith Attack",
        notes: ["위력이 높은 협력 공격이므로 이를 중심으로 운용하기 좋습니다."],
      }),
    "Miklotov can participate in the Knight Attack and the Pretty Boy Attack, which is really the Fancy Lad Attack.":
      buildParsedUniteAttackRecords({
        attackText: "Knight Attack and Pretty Boy Attack",
      }),
    "Rikimaru can participate in the Manly Attack. With a Cup of Promise equipped to either him or Amada, the unite attack has a chance to inflict Knockdown on targets.":
      buildParsedUniteAttackRecords({
        attackText: "Manly Attack",
        effects: [
          "리키마루 또는 아마다가 약속의 술잔을 장비하면 대상에게 넘어짐을 부여할 수 있습니다.",
        ],
        partnerText: "Amada",
      }),
    "Sasuke can participate in the Pretty Boy Attack, translated as the \"Cutie Boy Attack\".":
      buildParsedUniteAttackRecords({
        attackText: "Pretty Boy Attack",
      }),
  };

  if (normalizedLine in specialRecords) {
    return [...specialRecords[normalizedLine]];
  }

  const beautyCalledMatch = normalizedLine.match(
    /^She has a Unite with (.+?) called the (.+?) which (.+)\.?$/,
  );
  if (beautyCalledMatch) {
    return buildParsedUniteAttackRecords({
      attackText: beautyCalledMatch[2],
      effects: extractUniteAttackEffects(normalizedLine),
      partnerText: beautyCalledMatch[1],
    });
  }

  const withHisMasterMatch = normalizedLine.match(
    /^(.+) has a (.+) with his master, (.+)\.$/,
  );
  if (withHisMasterMatch) {
    return buildParsedUniteAttackRecords({
      attackText: withHisMasterMatch[2],
      partnerText: withHisMasterMatch[3],
    });
  }

  const canUniteMatch = normalizedLine.match(
    /^(.+) can unite with (.+) and either (.+) or (.+) to perform the (.+)\.$/,
  );
  if (canUniteMatch) {
    return buildParsedUniteAttackRecords({
      attackText: canUniteMatch[5],
      partnerText: [canUniteMatch[2], canUniteMatch[3], canUniteMatch[4]].join(", "),
    });
  }

  const performWithMatch = normalizedLine.match(
    /^(.+) can (?:perform|use) the (.+) with (.+)\.?$/,
  );
  if (performWithMatch) {
    return buildParsedUniteAttackRecords({
      attackText: performWithMatch[2],
      partnerText: performWithMatch[3],
    });
  }

  const participateWithMatch = normalizedLine.match(
    /^(.+) can participate in (?:both )?(?:the )?(.+?) with (.+)\.?$/,
  );
  if (participateWithMatch) {
    return buildParsedUniteAttackRecords({
      attackText: participateWithMatch[2],
      partnerText: participateWithMatch[3],
    });
  }

  const bulletWithCommaEffectMatch = normalizedLine.match(
    /^(.+ Attack), .+?, with (.+?) does .+$/,
  );
  if (bulletWithCommaEffectMatch) {
    return buildParsedUniteAttackRecords({
      attackText: bulletWithCommaEffectMatch[1],
      effects: extractUniteAttackEffects(normalizedLine),
      partnerText: bulletWithCommaEffectMatch[2],
    });
  }

  const bulletWithDoesEffectMatch = normalizedLine.match(
    /^(.+ Attack) with (.+?) does .+$/,
  );
  if (bulletWithDoesEffectMatch) {
    return buildParsedUniteAttackRecords({
      attackText: bulletWithDoesEffectMatch[1],
      effects: extractUniteAttackEffects(normalizedLine),
      partnerText: bulletWithDoesEffectMatch[2],
    });
  }

  const bulletWithWhichEffectMatch = normalizedLine.match(
    /^(.+ Attack) with (.+?), which .+$/,
  );
  if (bulletWithWhichEffectMatch) {
    return buildParsedUniteAttackRecords({
      attackText: bulletWithWhichEffectMatch[1],
      effects: extractUniteAttackEffects(normalizedLine),
      partnerText: bulletWithWhichEffectMatch[2],
    });
  }

  const bulletWithMatch = normalizedLine.match(/^(.+ Attack) with (.+)$/);
  if (bulletWithMatch) {
    return buildParsedUniteAttackRecords({
      attackText: bulletWithMatch[1],
      partnerText: bulletWithMatch[2],
    });
  }

  const participateMatch = normalizedLine.match(
    /^(.+) can participate in (?:both )?(?:the )?(.+)\.?$/,
  );
  if (participateMatch) {
    return buildParsedUniteAttackRecords({
      attackText: participateMatch[2],
    });
  }

  return [];
};

const translateUniteAttackLines = (lines: readonly string[]) => {
  return lines.map(translateUniteAttackLine);
};

const isNoUniteAttackLine = (line: string) => {
  const normalizedLine = line.replace(/^\*/, "").trim();

  return /^(None\.?|.+ has no (known )?unite attacks?\.?|.+ does not have any unite attacks with other characters\.?)$/i.test(normalizedLine);
};

const isUniteAttackHeadingLine = (line: string) => {
  return line.replace(/^\*/, "").trim() ===
    "Riou can perform the following Unite Attacks:";
};

const buildUniteAttackKey = (game: string, attack: string) => {
  return `${game}:${attack}`;
};

const UNITE_ATTACK_PARTICIPANT_OVERRIDES = new Map<string, readonly string[]>([
  [buildUniteAttackKey("suikoden-i", "울퉁불퉁 공격"), ["쿠린", "험프리 민츠"]],
  [buildUniteAttackKey("suikoden-i", "부부 공격"), ["레판토", "아이린"]],
  [buildUniteAttackKey("suikoden-i", "목수 공격"), ["겐", "산스케"]],
  [
    buildUniteAttackKey("suikoden-i", "가족 공격"),
    ["레판토", "아이린", "시나"],
  ],
  [buildUniteAttackKey("suikoden-ii", "더블 크라켄 공격"), ["어비스보어", "루로디아"]],
  [buildUniteAttackKey("suikoden-ii", "미소녀 공격"), ["텐가알", "미리", "멕"]],
  [
    buildUniteAttackKey("suikoden-ii", "5 다람쥐 공격"),
    ["무쿠무쿠", "마쿠마쿠", "미쿠미쿠", "메쿠메쿠", "모쿠모쿠"],
  ],
  [buildUniteAttackKey("suikoden-ii", "100 코볼트 공격"), ["겐겐", "카보챠"]],
  [buildUniteAttackKey("suikoden-ii", "팬클럽 공격"), ["프릭", "니나"]],
]);

const UNITE_ATTACK_EFFECT_OVERRIDES = new Map<string, readonly string[]>([
  [
    buildUniteAttackKey("suikoden-i", "사제 공격"),
    ["적 다수를 공격합니다."],
  ],
  [
    buildUniteAttackKey("suikoden-i", "부적 공격 / 수호 공격"),
    ["적 1체에게 2배 피해를 주며, 사용 후 균형을 잃지 않습니다."],
  ],
  [
    buildUniteAttackKey("suikoden-ii", "트릭 공격"),
    ["적 전체를 공격합니다."],
  ],
]);

const buildUniteAttackParticipantRegistry = () => {
  const participants = new Map<string, Set<string>>();
  const characterRecords = CHARACTER_DETAIL_RECORDS as Record<
    string,
    Record<string, CharacterDetailRecord>
  >;

  Object.entries(characterRecords).forEach(([game, recordsByCharacter]) => {
    Object.entries(recordsByCharacter).forEach(([characterId, record]) => {
      const character = CHARACTER_DATA_BY_GAME[
        game as keyof typeof CHARACTER_DATA_BY_GAME
      ]?.find((entry) => entry.id === characterId);
      const characterName = character?.name ?? characterId;

      record.role.uniteAttacks.forEach((line) => {
        parseUniteAttackLine(line).forEach((uniteAttack) => {
          const key = buildUniteAttackKey(game, uniteAttack.attack);
          const names = participants.get(key) ?? new Set<string>();
          const overrideNames = UNITE_ATTACK_PARTICIPANT_OVERRIDES.get(key);

          if (overrideNames) {
            overrideNames.forEach((partner) => names.add(partner));
          } else {
            names.add(characterName);
            uniteAttack.partners.forEach((partner) => names.add(partner));
          }
          participants.set(key, names);
        });
      });
    });
  });

  return participants;
};

const UNITE_ATTACK_PARTICIPANTS = buildUniteAttackParticipantRegistry();

const CHARACTER_DETAIL_LINK_ALIASES = {
  "티르 맥돌": {
    game: "suikoden-i",
    id: "hero",
  },
} as const;

const hasCharacterDetailRecord = (game: string, characterId: string) => {
  const gameRecords = CHARACTER_DETAIL_RECORDS[
    game as keyof typeof CHARACTER_DETAIL_RECORDS
  ] as Record<string, CharacterDetailRecord> | undefined;

  return Boolean(gameRecords?.[characterId]);
};

const resolveCharacterDetailLinkByName = (
  name: string,
  preferredGame: string,
) => {
  const aliasedCharacter =
    CHARACTER_DETAIL_LINK_ALIASES[
      name as keyof typeof CHARACTER_DETAIL_LINK_ALIASES
    ];

  if (aliasedCharacter && hasCharacterDetailRecord(
    aliasedCharacter.game,
    aliasedCharacter.id,
  )) {
    return buildCharacterDetailPath(aliasedCharacter.game, aliasedCharacter.id);
  }

  const findCharacter = (game: string) => {
    return CHARACTER_DATA_BY_GAME[
      game as keyof typeof CHARACTER_DATA_BY_GAME
    ]?.find((entry) => entry.name === name && hasCharacterDetailRecord(game, entry.id));
  };
  const preferredCharacter = findCharacter(preferredGame);

  if (preferredCharacter) {
    return buildCharacterDetailPath(preferredGame, preferredCharacter.id);
  }

  const matchedGame = CHARACTER_DETAIL_AVAILABLE_GAMES.find((game) =>
    Boolean(findCharacter(game)),
  );
  const matchedCharacter = matchedGame ? findCharacter(matchedGame) : null;

  return matchedGame && matchedCharacter ?
      buildCharacterDetailPath(matchedGame, matchedCharacter.id) :
      null;
};

const buildUnitePartnerLinks = (
  game: string,
  partners: readonly string[],
) => {
  return partners.map((partner) => ({
    href: resolveCharacterDetailLinkByName(partner, game) ?? undefined,
    label: partner,
  }));
};

const buildUniteAttackRowGroups = (
  character: CharacterEntry,
  lines: readonly string[],
): NonNullable<CharacterCombatDataPanel["rowGroups"]> => {
  const groups = new Map<
    string,
    {
      effects: Set<string>;
      notes: Set<string>;
      partners: Set<string>;
    }
  >();

  lines.forEach((line) => {
    parseUniteAttackLine(line).forEach((uniteAttack) => {
      const group = groups.get(uniteAttack.attack) ?? {
        effects: new Set<string>(),
        notes: new Set<string>(),
        partners: new Set<string>(),
      };
      const attackKey = buildUniteAttackKey(character.game, uniteAttack.attack);
      const overridePartners = UNITE_ATTACK_PARTICIPANT_OVERRIDES.get(attackKey);
      const registryPartners =
        overridePartners ?? UNITE_ATTACK_PARTICIPANTS.get(attackKey);
      const overrideEffects = UNITE_ATTACK_EFFECT_OVERRIDES.get(attackKey);

      registryPartners?.forEach((partner) => {
        if (partner !== character.name) {
          group.partners.add(partner);
        }
      });
      uniteAttack.partners.forEach((partner) => {
        if (partner !== character.name) {
          group.partners.add(partner);
        }
      });
      overrideEffects?.forEach((effect) => group.effects.add(effect));
      uniteAttack.effects.forEach((effect) => group.effects.add(effect));
      uniteAttack.notes.forEach((note) => group.notes.add(note));
      groups.set(uniteAttack.attack, group);
    });
  });

  return [...groups.entries()].map(([attack, group]) => ({
    title: attack,
    rows: [
      {
        label: CHARACTER_COPY.detailLabels.unitePartners,
        links: buildUnitePartnerLinks(character.game, [...group.partners]),
        value: [...group.partners].join(", ") || CHARACTER_COPY.unavailableDetail,
      },
      ...([...group.effects].length > 0 ? [
        {
          label: CHARACTER_COPY.detailLabels.uniteEffect,
          value: [...group.effects].join(" "),
        },
      ] : []),
      ...([...group.notes].length > 0 ? [
        {
          label: CHARACTER_COPY.detailLabels.uniteNote,
          value: [...group.notes].join(" "),
        },
      ] : []),
    ],
  }));
};

const buildUniteAttackPanelContent = (
  character: CharacterEntry,
  lines: readonly string[],
) => {
  const rowGroups = buildUniteAttackRowGroups(character, lines);
  const unparsedLines = lines
    .filter((line) => !isNoUniteAttackLine(line))
    .filter((line) => !isUniteAttackHeadingLine(line))
    .filter((line) => parseUniteAttackLine(line).length === 0)
    .map(translateUniteAttackLine);

  if (rowGroups.length > 0) {
    return {
      lines: unparsedLines,
      rowGroups,
    };
  }

  return {
    lines: lines.length ? translateUniteAttackLines(lines) : [],
    rowGroups: [],
  };
};

const buildMaxLevelStatusRows = (values: Record<string, string>) => {
  return MAX_LEVEL_STATUS_GROUPS
    .map((group) => ({
      title: group.title,
      rows: group.keys
        .map((label) => ({
          label: MAX_LEVEL_STATUS_LABELS[label],
          value: values[label],
        }))
        .filter((row) => row.value),
    }))
    .filter((group) => group.rows.length > 0);
};

const buildEquipmentRows = (record: CharacterDetailRecord | null) => {
  if (!record) {
    return [];
  }

  const buildEquipmentRow = (
    group: keyof typeof EQUIPMENT_GROUP_LABELS,
    label: string,
    value: string,
  ) => ({
    href: resolveItemDetailHref(value) ?? undefined,
    label: buildEquipmentLabel(group, label),
    value: normalizeDetailValue(value),
  });

  const defaultRows = Object.entries(record.role.equipment.default)
    .filter(([, value]) => value)
    .map(([label, value]) => buildEquipmentRow("default", label, value));
  const recommendedRows = Object.entries(record.role.equipment.recommended)
    .filter(([, value]) => value)
    .map(([label, value]) => buildEquipmentRow("recommended", label, value));

  return [...defaultRows, ...recommendedRows];
};

const buildEquipmentLines = (record: CharacterDetailRecord | null) => {
  if (!record) {
    return [];
  }

  const equipmentValues = [
    ...Object.values(record.role.equipment.default),
    ...Object.values(record.role.equipment.recommended),
  ];
  const fixedEquipmentNames = [
    ...new Set(
      equipmentValues
        .filter(isFixedEquipment)
        .map(translateFixedEquipmentName)
        .filter((name) => name && name !== CHARACTER_COPY.unavailableDetail),
    ),
  ];

  return fixedEquipmentNames.length > 0 ?
      [CHARACTER_COPY.detailMessages.fixedEquipment(fixedEquipmentNames)] :
      [];
};

const hasCombatDataPanelContent = (panel: CharacterCombatDataPanel) => {
  return panel.lines.length > 0 ||
    panel.rows.length > 0 ||
    Boolean(panel.rowGroups?.some((group) => group.rows.length > 0));
};

export const buildCharacterCombatDataPanels = (
  character: CharacterEntry,
  record: CharacterDetailRecord | null,
): CharacterCombatDataPanel[] => {
  if (character.characterType !== CHARACTER_TYPE_VALUE.combat) {
    return [];
  }

  const role = record?.role;
  const weaponRows = role?.weapon ? [
    { label: "유형", value: translateWeaponType(role.weapon.type) },
    { label: "사거리", value: translateWeaponRange(role.weapon.range) },
    { label: "초기 레벨", value: role.weapon.startingLevel },
  ].filter((row) => row.value) : [];
  const runeLines = resolveCharacterPrimaryRunes(character, record);
  const uniteAttackPanelContent = buildUniteAttackPanelContent(
    character,
    role?.uniteAttacks ?? [],
  );

  return [
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-overall`,
      title: "Overall",
      lines: getCharacterDetailLines(
        character,
        "overall",
        buildCharacterOverallFallbackLines(character, role),
      ),
      rows: [],
    },
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-weapon-growth`,
      title: "Weapon Growth",
      lines: [],
      rows: weaponRows,
    },
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-runes`,
      title: "기본 문장",
      lines: runeLines,
      rows: [],
    },
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-max-lv-status`,
      title: "Max Lv. Status",
      lines: [],
      rowGroups: role?.maxLevelStatus ?
        buildMaxLevelStatusRows(role.maxLevelStatus) :
        [],
      rows: [],
    },
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-equipment`,
      title: "Equipment",
      lines: buildEquipmentLines(record),
      rows: buildEquipmentRows(record),
    },
    {
      id: `${COMBAT_DATA_ANCHOR_PREFIX}-unite-attacks`,
      title: "협력 공격",
      lines: uniteAttackPanelContent.lines,
      rowGroups: uniteAttackPanelContent.rowGroups,
      rows: [],
    },
  ].filter(hasCombatDataPanelContent);
};
