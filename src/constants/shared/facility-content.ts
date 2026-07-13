/**
 * 마을, 본거지, 지역 상세에서 공유하는 시설 이름과 역할 설명을 정의합니다.
 */

const FACILITY_SHOP_NAME_LABELS = {
  "Armor Shop": "방어구점",
  Armorer: "방어구점",
  "General Store": "도구점",
  "Item Shop": "도구점",
  "Supply Shop": "도구점",
  "Tool Shop": "도구점",
  "Trading Post": "교역소",
  "Weapon Store": "무기점",
  "Weapon Shop": "무기점",
} as const;

export const FACILITY_NAME_LABELS = {
  ...FACILITY_SHOP_NAME_LABELS,
  Appraiser: "감정소",
  Bath: "목욕탕",
  Blacksmith: "대장간",
  Detective: "탐정 사무소",
  Fishing: "낚시",
  Gambling: "도박장",
  Hotel: "여관",
  Inn: "여관",
  Library: "도서관",
  Mapmaker: "지도 제작",
  Save: "저장 지점",
  Restaurant: "식당",
  "Rune Shop": "문장사",
  "Save Point": "저장 지점",
  "Trade Shop": "교역소",
  Warehouse: "창고",
} as const;

const FACILITY_NAME_PART_LABELS = {
  "Rare Finds": "레어 아이템",
  Shop: "상점",
} as const;

export type FacilityRoleKey =
  | "appraisal"
  | "armorShop"
  | "bath"
  | "blacksmith"
  | "detective"
  | "farm"
  | "fishing"
  | "gambling"
  | "inn"
  | "itemShop"
  | "library"
  | "mapmaker"
  | "port"
  | "restaurant"
  | "runeShop"
  | "save"
  | "storage"
  | "tavern"
  | "trade"
  | "weaponShop";

export const FACILITY_ROLE_LABELS: Record<FacilityRoleKey, string> = {
  appraisal: "감정소",
  armorShop: "방어구점",
  bath: "목욕탕",
  blacksmith: "대장간",
  detective: "탐정 사무소",
  farm: "농장·목장",
  fishing: "낚시",
  gambling: "주사위 도박",
  inn: "여관",
  itemShop: "도구점",
  library: "도서관",
  mapmaker: "지도 제작",
  port: "항구·선착장",
  restaurant: "식당",
  runeShop: "문장사",
  save: "저장 지점",
  storage: "창고",
  tavern: "술집",
  trade: "교역소",
  weaponShop: "무기점",
} as const;

export const FACILITY_ROLE_DESCRIPTIONS: Record<FacilityRoleKey, string> = {
  appraisal:
    "감정품의 정체를 확인해 수집품, 장식품, 교역품으로 판별하는 시설입니다.",
  armorShop:
    "투구, 갑옷, 장갑, 신발, 장신구처럼 방어와 보조 능력에 영향을 주는 장비를 구입합니다.",
  bath:
    "동료와 휴식 이벤트를 확인하는 생활 시설입니다. 본거지에서는 수집 요소와 연결되기도 합니다.",
  blacksmith:
    "캐릭터 고유 무기를 강화합니다. 장인의 영입 단계와 진행도에 따라 강화 한계가 올라갑니다.",
  detective:
    "동료 조사, 영입 단서, 인물 정보를 확인하는 보조 정보 시설입니다.",
  farm:
    "식재료와 동물 수집을 관리합니다. 요리와 본거지 생활 기록에 연결됩니다.",
  fishing:
    "물고기를 낚아 포치와 식재료를 확보하는 반복형 생활 시설입니다.",
  gambling:
    "주사위 도박과 미니게임으로 포치를 벌거나 일부 동료 영입 조건을 처리하는 시설입니다.",
  inn:
    "파티의 체력을 회복하고 저장을 처리하는 휴식 시설입니다. 일부 마을에서는 이벤트의 기준점이 됩니다.",
  itemShop:
    "회복 아이템, 상태 이상 회복품, 탈출·귀환 계열 아이템과 일부 봉인구를 구입하는 기본 보급 시설입니다.",
  library:
    "오래된 책과 세계 기록을 읽는 시설입니다. 수집한 문헌을 확인하는 역할을 합니다.",
  mapmaker:
    "지도와 이동 정보를 확인하는 시설입니다. 세계·지역 탐색 기록과 연결됩니다.",
  port:
    "배 이동과 지역 간 이동 동선을 여는 교통 시설입니다. 호수와 해역을 건너는 진행에 쓰입니다.",
  restaurant:
    "요리, 레시피, 요리 대결을 진행하는 시설입니다. 하이요 이벤트와 연결됩니다.",
  runeShop:
    "봉인구를 문장으로 장착하거나 해제하고, 문장 관련 정비를 맡는 시설입니다.",
  save:
    "진행 기록을 저장하는 지점입니다. 분기와 전투 전에는 별도 저장을 남기는 기준점이 됩니다.",
  storage:
    "소지품을 맡기고 꺼내는 보관 시설입니다. 장기 탐색 전후의 아이템 정리에 쓰입니다.",
  tavern:
    "동료 정보, 이벤트 대화, 파티 재정비가 모이는 생활 거점입니다. 일부 영입 조건의 기준점이 됩니다.",
  trade:
    "지역별 시세 차이를 이용해 교역품을 사고파는 시설입니다. 포치 벌이에 활용됩니다.",
  weaponShop:
    "검, 창, 활처럼 캐릭터가 사용하는 기본 무기를 구입하는 장비 시설입니다.",
} as const;

const FACILITY_ROLE_MATCHERS: readonly {
  keywords: readonly string[];
  role: FacilityRoleKey;
}[] = [
  { keywords: ["Item Shop", "도구", "아이템 상점"], role: "itemShop" },
  { keywords: ["Tool Shop", "General Store", "Supply Shop", "잡화"], role: "itemShop" },
  { keywords: ["Armorer", "Armor Shop", "방어구"], role: "armorShop" },
  { keywords: ["Inn", "Hotel", "여관", "숙소"], role: "inn" },
  { keywords: ["Blacksmith", "대장간", "무기 강화"], role: "blacksmith" },
  { keywords: ["Weapon Shop", "Weapon Store", "무기점"], role: "weaponShop" },
  { keywords: ["Rune Shop", "문장사", "봉인구"], role: "runeShop" },
  { keywords: ["Appraiser", "감정"], role: "appraisal" },
  { keywords: ["Trade", "Trading Post", "교역"], role: "trade" },
  { keywords: ["Warehouse", "창고"], role: "storage" },
  { keywords: ["Bath", "목욕"], role: "bath" },
  { keywords: ["Library", "도서관"], role: "library" },
  { keywords: ["Restaurant", "식당", "요리"], role: "restaurant" },
  { keywords: ["Detective", "탐정"], role: "detective" },
  { keywords: ["Map", "지도"], role: "mapmaker" },
  { keywords: ["Farm", "목장", "농장"], role: "farm" },
  { keywords: ["Port", "Dock", "항구", "선착장", "연락선"], role: "port" },
  { keywords: ["Tavern", "술집", "주점"], role: "tavern" },
  { keywords: ["Fishing", "낚시"], role: "fishing" },
  { keywords: ["Gambling", "Chinchirorin", "주사위", "도박"], role: "gambling" },
  { keywords: ["Save", "Save Point", "저장", "세이브"], role: "save" },
] as const;

export const getFacilityLabel = (name: string) => {
  const exactLabel = FACILITY_NAME_LABELS[name as keyof typeof FACILITY_NAME_LABELS];

  if (exactLabel) {
    return exactLabel;
  }

  return Object.entries(FACILITY_NAME_LABELS).reduce(
    (label, [sourceName, translatedName]) =>
      label.replace(sourceName, translatedName),
    Object.entries(FACILITY_NAME_PART_LABELS).reduce(
      (label, [sourceName, translatedName]) =>
        label.replace(sourceName, translatedName),
      name,
    ),
  );
};

export const getFacilityRoleLabel = (role: FacilityRoleKey) =>
  FACILITY_ROLE_LABELS[role];

export const resolveFacilityRole = (name: string) => {
  const normalizedName = name.toLocaleLowerCase("ko-KR");
  const matcher = FACILITY_ROLE_MATCHERS.find(({ keywords }) =>
    keywords.some((keyword) =>
      normalizedName.includes(keyword.toLocaleLowerCase("ko-KR")),
    ),
  );

  return matcher?.role ?? null;
};
