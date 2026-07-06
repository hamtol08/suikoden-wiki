/**
 * 게임플레이, 일기토, 전쟁 전투, 본거지, 요리 이벤트 데이터를 정의합니다.
 */

import {
  buildGameplayDetailPath,
  buildItemDetailPath,
  buildRegionAtlasDetailPath,
} from "@/constants/app/app-config";
import { GAME8_ITEM_SOURCE_RECORDS } from "@/constants/items/game8-item-source-records";

export const GAMEPLAY_COPY = {
  eyebrow: "Gameplay",
  title: "Gameplay Guides",
  body: "전투, 일기토, 전쟁 전투, 본거지 시설과 반복 플레이에 필요한 공략 항목을 작품별로 정리합니다.",
  tabsAriaLabel: "Gameplay sections",
  overviewTitle: "System Overview",
  battleTitle: "Battle",
  duelTitle: "Duel",
  warBattleTitle: "War Battle",
  headquartersTitle: "Headquarters",
  guideTitle: "Guide Index",
} as const;

export const GAMEPLAY_DETAIL_COPY = {
  backLabel: "Back to Gameplay",
  overviewLabel: "Overview",
  keyPointLabel: "Key Points",
  seriesLabel: "Series Notes",
  seriesTabsAriaLabel: "Series tabs",
  duelDialogLabel: "Duel Dialogue",
  duelPlayerLabel: "조작",
  duelLocationLabel: "장소",
  duelEnemyMoveLabel: "상대 행동",
  duelResponseLabel: "권장 대응",
  duelCueLabel: "대사",
  duelSeriesTabsAriaLabel: "Duel series",
  warCommandLabel: "War Commands",
  warRecordLabel: "War Battle Records",
  warRecordListLabel: "전쟁 전투 일람",
  cookingContestLabel: "요리 대결 상대별 기록",
  cookingContestRoundLabel: "회차",
  cookingContestRewardLabel: "보상",
  cookingContestNoteLabel: "비고",
  recipeListLabel: "환상수호전 II 요리 레시피",
  recipeNumberLabel: "번호",
  recipeSourceLabel: "입수",
  restaurantTipsLabel: "식당 운영 팁",
  warSeriesTabsAriaLabel: "War battle series",
  warRoleLabel: "Army Roles",
  warStrongAgainstLabel: "강점",
  warWeakAgainstLabel: "약점",
  warObjectiveLabel: "목표",
  warLocationLabel: "전장",
  facilityLabel: "Facilities",
  floorFacilityLabel: "층별 시설",
  facilityLocationLabel: "위치",
  facilityUnlockLabel: "개방",
  checklistLabel: "Archive Checklist",
} as const;

export const GAMEPLAY_DUEL_ACTION_LABELS = {
  attack: "공격",
  defend: "방어",
  special: "필사의 공격",
} as const;

export const GAMEPLAY_DETAIL_IDS = {
  battleBasics: "battle-basics",
  duel: "duel",
  haiYoCookOff: "hai-yo-cook-off",
  headquarters: "headquarters",
  repeatablePlay: "repeatable-play",
  runeSystem: "rune-system",
  suikodenIDuels: "suikoden-i-duels",
  suikodenIGameplayMechanics: "suikoden-i-gameplay-mechanics",
  suikodenITips: "suikoden-i-tips",
  suikodenIIDuels: "suikoden-ii-duels",
  suikodenIIFacilitiesMinigames: "suikoden-ii-facilities-minigames",
  suikodenIIGameplayMechanics: "suikoden-ii-gameplay-mechanics",
  suikodenIITips: "suikoden-ii-tips",
  warBattle: "war-battle",
} as const;

export const GAMEPLAY_SECTION_IDS = {
  battle: "battle",
  duel: "duel",
  guideIndex: "guide-index",
  headquarters: "headquarters",
  systemOverview: "system-overview",
  warBattle: "war-battle",
} as const;

const GAMEPLAY_LEGACY_DETAIL_IDS = {
  armyBattle: "army-battle",
} as const;

export const GAMEPLAY_TABS = [
  {
    href: `#${GAMEPLAY_SECTION_IDS.systemOverview}`,
    label: GAMEPLAY_COPY.overviewTitle,
  },
  {
    href: `#${GAMEPLAY_SECTION_IDS.battle}`,
    label: GAMEPLAY_COPY.battleTitle,
  },
  {
    href: `#${GAMEPLAY_SECTION_IDS.duel}`,
    label: GAMEPLAY_COPY.duelTitle,
  },
  {
    href: `#${GAMEPLAY_SECTION_IDS.warBattle}`,
    label: GAMEPLAY_COPY.warBattleTitle,
  },
  {
    href: `#${GAMEPLAY_SECTION_IDS.headquarters}`,
    label: GAMEPLAY_COPY.headquartersTitle,
  },
  {
    href: `#${GAMEPLAY_SECTION_IDS.guideIndex}`,
    label: GAMEPLAY_COPY.guideTitle,
  },
] as const;

export const GAMEPLAY_SYSTEMS = [
  {
    id: GAMEPLAY_DETAIL_IDS.battleBasics,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.battleBasics),
    title: "일반 전투",
    body: "6인 파티 편성, 전열·후열, 무기 사거리, 방어와 보호 행동을 함께 관리하는 기본 전투입니다.",
    points: ["파티 편성", "무기 사거리", "상태 이상", "장비 교체"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.runeSystem,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.runeSystem),
    title: "문장 운용",
    body: "문장 장착, 봉인구, 레벨별 마법 사용 횟수와 속성 상성을 함께 보는 성장 축입니다.",
    points: ["문장 장착", "마법 레벨", "속성 문장", "고유 문장"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.duel,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.duel),
    title: "일기토",
    body: "대사의 뉘앙스를 읽고 공격·방어·필사의 공격을 고르는 1:1 전투입니다. 두 작품 모두 전용 가이드와 대사 패턴이 따로 정리되어 있습니다.",
    points: ["공격", "방어", "필사의 공격", "대사 판독"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.warBattle,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.warBattle),
    title: "전쟁 전투",
    body: "부대 단위로 전황을 읽는 대규모 전투입니다. 1편은 명령과 병과 역할, 2편은 부대 편성과 진형 관리가 중요합니다.",
    points: ["부대 역할", "전황 판독", "진형", "전쟁 이벤트"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.headquarters,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.headquarters),
    title: "본거지 시설",
    body: "상점, 창고, 대장간, 감정소, 목욕탕, 도서관 등 동료 영입에 따라 열리는 시설 기록입니다.",
    points: ["시설 개방", "상점", "창고", "대장간"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.repeatablePlay,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.repeatablePlay),
    title: "미니게임과 반복 수급",
    body: "돈·경험치 수급, 교역, 낚시, 주사위 도박, 요리 등 반복 플레이에서 확인할 항목을 모읍니다.",
    points: ["돈 벌기", "경험치", "교역", "미니게임"],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.haiYoCookOff,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
    title: "하이요 이벤트",
    body: "하이요 영입 뒤 본거지 식당에서 이어지는 요리 대결 연속 이벤트입니다.",
    points: ["식당", "요리 대결", "레시피", "보상"],
  },
] as const;

export type GameplayDetailId =
  (typeof GAMEPLAY_DETAIL_IDS)[keyof typeof GAMEPLAY_DETAIL_IDS];

export type GameplayDuelActionId = keyof typeof GAMEPLAY_DUEL_ACTION_LABELS;

export type GameplayDuelPattern = {
  enemyMove: GameplayDuelActionId;
  response: GameplayDuelActionId;
  lines: readonly string[];
};

export type GameplayDuelRecord = {
  game: string;
  location: string;
  note?: string;
  opponent: string;
  patterns: readonly GameplayDuelPattern[];
  player: string;
};

export type GameplayDuelRecordGroup = {
  game: string;
  records: GameplayDuelRecord[];
};

export type GameplayWarCommandGroup = {
  body: string;
  commands: readonly {
    body: string;
    name: string;
    strongAgainst?: string;
    weakAgainst?: string;
  }[];
  game: string;
};

export type GameplayWarBattleRecord = {
  game: string;
  location: string;
  note: string;
  objective: string;
  tags: readonly string[];
  title: string;
};

export type GameplayWarBattleRecordGroup = {
  game: string;
  records: GameplayWarBattleRecord[];
};

export type GameplayWarRoleRecord = {
  body: string;
  game: string;
  points: readonly string[];
  title: string;
};

export type GameplayCookingContestRecord = {
  note: string;
  opponent: string;
  reward: string;
  round: number;
};

export type GameplayRecipeSource = {
  entries: readonly GameplayRecipeSourceEntry[];
  label: string;
};

export type GameplayRecipeSourceEntry = {
  href?: string;
  label: string;
};

export type GameplayRecipeRecord = {
  dishName: string;
  href: string;
  icon: string;
  number: number;
  sources: readonly GameplayRecipeSource[];
  title: string;
};

export type GameplayRestaurantTipRecord = {
  body: string;
  points: readonly string[];
  title: string;
};

export type GameplayFacilityRecord = {
  body: string;
  location: string;
  name: string;
  unlock: string;
};

export type GameplayFloorFacilityRecord = {
  facilities: readonly string[];
  floor: string;
  note?: string;
  summary: string;
};

export type GameplaySeriesNoteRecord = {
  game: string;
  body: string;
  points?: readonly string[];
  facilities?: readonly GameplayFacilityRecord[];
  floorFacilities?: readonly GameplayFloorFacilityRecord[];
};

export type GameplayDetailRecord = {
  id: GameplayDetailId;
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: readonly string[];
  overview: readonly string[];
  keyPoints: readonly {
    title: string;
    body: string;
  }[];
  duelRecords?: readonly GameplayDuelRecord[];
  warBattleRecords?: readonly GameplayWarBattleRecord[];
  warCommandGroups?: readonly GameplayWarCommandGroup[];
  warRoleRecords?: readonly GameplayWarRoleRecord[];
  cookingContestRecords?: readonly GameplayCookingContestRecord[];
  recipeRecords?: readonly GameplayRecipeRecord[];
  restaurantTips?: readonly GameplayRestaurantTipRecord[];
  seriesNotes: readonly GameplaySeriesNoteRecord[];
  checklist: readonly string[];
};

const duelPattern = (
  enemyMove: GameplayDuelActionId,
  response: GameplayDuelActionId,
  lines: readonly string[],
): GameplayDuelPattern => ({
  enemyMove,
  response,
  lines,
});

export const groupGameplayDuelRecordsByGame = (
  records: readonly GameplayDuelRecord[],
): GameplayDuelRecordGroup[] => {
  return records.reduce<GameplayDuelRecordGroup[]>((groups, record) => {
    const group = groups.find((item) => item.game === record.game);

    if (group) {
      group.records.push(record);
      return groups;
    }

    return [...groups, { game: record.game, records: [record] }];
  }, []);
};

export const groupGameplayWarBattleRecordsByGame = (
  records: readonly GameplayWarBattleRecord[],
): GameplayWarBattleRecordGroup[] => {
  return records.reduce<GameplayWarBattleRecordGroup[]>((groups, record) => {
    const group = groups.find((item) => item.game === record.game);

    if (group) {
      group.records.push(record);
      return groups;
    }

    return [...groups, { game: record.game, records: [record] }];
  }, []);
};

export const GAMEPLAY_DUEL_RECORDS = [
  {
    game: "Suikoden I",
    opponent: "크완다 로스만",
    player: "주인공",
    location: "판누 야쿠타",
    note: "첫 본격 일기토입니다. 상대 대사는 공격, 방어, 필사의 공격 중 다음 행동을 암시합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "제법이군. 이걸 받아낼 수 있겠나?",
        "당했군! 내가 너를 얕본 모양이다.",
        "네게 승산은 없다! 하지만 자비는 베풀지 않겠다!",
        "하하하! 그런 약한 공격은 내게 통하지 않는다!",
        "크윽! 제법이구나, 테오의 아들! 이제 내 차례다!",
        "내 칼날의 예리함을 맛보아라!",
        "어쩔 줄 모르겠나? 그래도 자비는 없다!",
        "제길! 내가 너를 얕봤군.",
        "하하! 그 정도로는 부족하다!",
        "흥, 이제 내 차례다.",
        "내 칼날의 예리함을 맛보아라!",
        "그 정도는 아무것도 아니다!",
        "왜 그러지? 네가 공격하지 않겠다면 내가 간다!",
        "잘했다. 하지만 이것도 받아낼 수 있겠나?",
        "오호! 제법이군, 테오의 아들. 이제 내 차례다!",
        "생각보다 강하군. 그럼 이건 어떠냐?",
      ]),
      duelPattern("defend", "attack", [
        "소용없다! 네 공격은 이미 읽었다!",
        "자, 네 차례다! 가진 힘을 다해 덤벼라!",
        "신중하군... 과연 지도자답다.",
        "내 철벽 같은 방어를 뚫을 수 있을 것 같나?",
        "당했군! 하지만 이번에는 아니다!",
        "어서 와라, 지루하군. 네 실력을 보여봐라!",
        "크윽! 내가 너를 얕봤다.",
        "신중하게...",
        "조심스럽군. 지도자답다.",
        "제길! 내 차례다!",
        "지루하게 굴지 마라. 네 힘을 보여라.",
        "소용없다. 네 수법은 뻔하다.",
        "이제 네 차례다. 와라!",
        "제법이군. 한 번 더 해보겠나?",
        "이제 어쩔 셈이지?",
        "내 무적의 방어를 깰 수 있겠나?",
      ]),
      duelPattern("special", "defend", [
        "받아라!",
        "하하, 와라! 한 번 더다!",
        "좋다... 네가 원한다면!",
        "이래서는 끝이 없군. 좋아... 각오해라!",
        "승부는 한순간에 결정된다! 이 일격에 모든 것을 걸겠다!",
        "말도 안 돼! 어떻게 내 공격을 피한 거냐?!",
        "다시 간다!",
        "잡아주마!",
        "어떻게 하는지 보여주마.",
        "불가능하다! 내 공격을 피할 수는 없다!",
        "재미있군. 한 판 더 어떠냐?",
        "받아라!",
        "다음은 쉽지 않을 것이다!",
        "승리가 눈앞이다! 전력을 다해 치겠다!",
        "끝이 없군. 내가 간다!",
        "잘했다. 상대할 가치가 있군. 이제 내 차례다!",
      ]),
    ],
  },
  {
    game: "Suikoden I",
    opponent: "테오 맥돌",
    player: "판",
    location: "테오군과의 결전",
    note: "판 생존과 연결되는 핵심 일기토입니다. 전투 전 무기 강화와 장비 정비가 중요합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "이래서는 끝이 없군... 내가 간다!",
        "내 공격을 읽었나?",
        "네 힘은 그게 전부냐? 이제 내 차례다!",
        "한심하구나, 판. 어떻게 하는지 보여주마!",
        "내 검은 아직도 예리하다!",
        "그 일격은 제법이었다, 판... 이제 내 차례다!",
        "우리의 격차가 보이느냐?",
        "제법이구나, 판.",
        "손이 저릴 정도군. 확실히 느껴진다.",
        "방어만 할 셈이냐, 판? 자비는 없다!",
      ]),
      duelPattern("defend", "attack", [
        "덤벼라, 판!",
        "내가 평정심을 잃은 모양이다. 더 신중해야겠군...",
        "다음 공격은 통하지 않을 것이다!",
        "대단하구나, 판. 내 공격을 읽다니. 나도 더 조심해야겠다.",
        "좋다, 다시 해봐라!",
        "와라, 판. 나를 죽일 수 있는지 보자.",
        "포기하겠느냐?",
        "왜 그러느냐, 판? 한 번 더 해보겠나?",
        "영리하구나, 판.",
        "생각보다 훨씬 낫구나.",
      ]),
      duelPattern("special", "defend", [
        "네 기술은 잘 보았다... 이제 내 기술을 보여주마!",
        "네가 오지 않겠다면... 내가 가겠다!",
        "나의 최강 기술...",
        "내 칼날을 피할 수 있겠느냐, 판?",
        "훌륭하다, 판. 진정한 전사로구나. 한 번 더 간다!",
        "일격으로 나를 끝내봐라!",
        "흠. 다시 간다!",
        "불가능하다! 받아라!",
        "그건... 안 된다.",
        "다음 것은 더 아플 것이다.",
      ]),
    ],
  },
  {
    game: "Suikoden I",
    opponent: "테오 맥돌",
    player: "주인공",
    location: "최종 결전 전후",
    note: "주인공이 직접 맞서는 테오와의 일기토입니다. 판과의 전투와 비슷하지만 일부 대사가 다릅니다.",
    patterns: [
      duelPattern("attack", "special", [
        "이제 우리의 힘 차이가 얼마나 큰지 알겠느냐?",
        "이래서는 끝이 없군... 내가 간다!",
        "계속 방어만 해서는 승리할 수 없다!",
        "방금 것은 보였느냐?",
        "그 정도는 아무것도 아니다. 이제 내 차례다.",
        "제법이었다. 이제 내 차례다.",
        "손이 저릴 정도군. 확실히 느껴진다!",
        "잘했다!",
        "무르구나... 너무 무르다! 공격이란 이렇게 하는 것이다!",
        "간다, 내 아들아.",
      ]),
      duelPattern("defend", "attack", [
        "대단하구나, 내 공격을 읽다니... 나도 더 신중해야겠군.",
        "얼마나 강해졌는지 보여다오!",
        "해방군의 지도자라... 조심스러운 것도 당연하군.",
        "흠? 벌써 끝이냐?",
        "좋다, 다시 해봐라!",
        "너를 얕봐서는 안 되겠군.",
        "내가 너를 얕봤다! 왜 그러느냐? 한 번 더 해보겠나?",
        "다음에는 네 움직임을 읽겠다!",
        "내가 평정심을 잃고 있군. 더 신중해야 한다!",
        "네가 배운 것을 보여다오.",
      ]),
      duelPattern("special", "defend", [
        "나의 최강 기술...",
        "내 검은 황제 폐하의 검이다. 봐주지 않겠다!",
        "이번 일격은 반드시 맞는다!",
        "네가 오지 않겠다면... 내가 가겠다!",
        "나를 뛰어넘을 수 있다고 생각하느냐?",
        "기쁘구나, 내 아들아. 훌륭한 전사가 되었구나. 하지만 한 번 더 간다!",
        "나의 필사의 공격...",
        "네 실력은 보았다. 이제 내가 할 수 있는 것을 보여주마.",
        "그건... 안 된다.",
        "다음 것은 더 아플 것이다.",
        "흠. 다시 간다!",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "프릭",
    player: "주인공",
    location: "용병 요새",
    note: "튜토리얼 성격의 일기토입니다. 대사와 행동 상성을 익히기 좋습니다.",
    patterns: [
      duelPattern("attack", "special", [
        "공격은 그렇게 하는 거야. 알겠어?",
        "좋아, 실력을 한번 보자.",
        "오, 좋은 일격이야. 바로 그거지.",
        "좋은 시도였어. 다음은 내 차례다.",
        "오. 조심하는 게 좋겠어. 누군가는 다칠 테니까.",
        "이건 시간 낭비일 뿐이군.",
        "그 기세야!",
        "야, 그거 휘두를 때 조심해!",
        "공격은 그렇게 하는 거야. 알겠어?",
        "이런, 힘이 좀 많이 들어갔나.",
      ]),
      duelPattern("defend", "attack", [
        "자, 나를 한번 공격해봐.",
        "다시 해볼래?",
        "한 번 더. 이번엔 실수하지 마.",
        "좀 더 조심해. 그러다 다친다.",
        "공격은 그렇게 하는 거야. 네가 직접 해봐.",
        "전투에서는 신중함이 최고의 무기야.",
        "좋아, 네 차례다. 실력을 보자.",
        "너무 자신만만하면 목숨을 잃을 수도 있어.",
        "야, 다시 해볼래?",
        "오, 그건 좀 놀랐는데.",
      ]),
      duelPattern("special", "defend", [
        "간다! 이걸 받아낼 수 있으면 좋겠군!!!",
        "이제 내 차례다. 기절하지 마.",
        "온다. 피하는 게 좋을 거야.",
        "다시 간다. 이번엔 실수하지 마.",
        "다음 건 아플 거야.",
        "우리 둘 중 하나는 이걸 끝내야겠지.",
        "내 검을 피했군. 이제 봐주기는 끝이다...",
        "좋아, 내 진짜 실력을 보여줘야겠군.",
        "치명적인 공격은 이렇게 하는 거다.....",
        "하하하! 너 제법인데. 다시 해볼래?",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "아마다",
    player: "주인공",
    location: "라다트",
    note: "영입 과정에서 두 차례 마주칠 수 있으며, 재전도 같은 대사 패턴을 사용합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "좋아, 먼저 가볍게 시험해볼까...",
        "같은 생각이었나 보군. 자, 가자.",
        "이봐, 그런 식으로는 이길 수 없어.",
        "하하하하! 아쉽구나, 꼬마!!! 이제 내 차례다!!!",
        "아야!!!!! 제법인데! 손이 다 저리군!",
        "으악!!! 좋은 일격이야... 하지만 아직 끝이 아니지!",
        "아야! 꽤 아팠겠군! 미안하네.",
        "아야!!! 제법이야!",
        "아야! 이건 확실히 느껴졌어!",
      ]),
      duelPattern("defend", "attack", [
        "제길! 젠장!!! 생각해야 해!!!",
        "헤헤, 두 번째는 그렇게 잘 안 통하지?",
        "자, 이제 네 차례다.",
        "으악!!! 그건 무서웠다!!!!!",
        "젠장!!! 이러다 질지도 모르겠군!!!",
        "하하! 다시 해볼래?",
        "자, 이제 네 차례다.",
        "헤헤, 조금 봐주는 게 좋겠군.",
        "헤헤, 먼저 네 실력을 보여봐라, 꼬마.",
        "그 수에는 두 번 다시 당하지 않아!",
      ]),
      duelPattern("special", "defend", [
        "으악! 다음엔 반드시 잡아주마!!!",
        "재미있군!!! 다시 가자!!!!",
        "잘한다, 꼬마! 하지만 난 쉽게 지지 않아!",
        "이래서는 끝이 안 나지! 이거나 한번 받아봐라!!!!!",
        "좋아, 꼬마야, 간다!",
        "그게 마음에 들었다면 더 보여주지.",
        "헤헤, 공격이 뭔지 보여주마!",
        "준비하는 게 좋을 거다. 다시 간다.",
        "이제 슬슬 봐주지 않을 때가 됐군.",
        "좋아, 다음은 내 차례다!",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "루카 브라이트",
    player: "주인공",
    location: "듀난 성 숲",
    note: "직전 보스전 이후 이어지는 일기토입니다. 루카는 필사의 공격 대사가 많아 방어 판독이 특히 중요합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "멍청한 놈!!!! 그게 네 전부냐!!!!",
        "이 건방진 꼬마가!!!",
        "하...... 무승부인가..........",
        "그 정도는 아무것도 아니다!",
        "하하하하!!! 죽어라! 죽어!!! 죽어!!!!",
        "하하하!!! 그래! 네 머리를 태양 아래 욕보여주마!!!",
        "잡아주마!! 벌레 같은 놈!!!!!!",
        "그래!!!!! 싸움이다!!!! 나는 싸움이 너무 좋다!!!!!!!!!",
        "제법 잔재주를 부리는군!!!! 건방진 놈!!!!!",
        "불손한 돼지 새끼!!!!!",
      ]),
      duelPattern("defend", "attack", [
        "어리석은 놈!!!! 그런 걸로는 날 막을 수 없다!!!!!!",
        "하하하하하하!!!!",
        "하...하하하... 싸움이야말로 내 삶이다.....",
        "너 같은 벌레가 내 길을 막게 두지 않겠다!!!",
        "죽인다!!! 내가 널 죽여주마!!!!!!",
        "한심하군!!!! 그게 힘이라고 부르는 거냐!!!!",
        "가소롭다!!! 너 같은 애송이가 날 막을 수 있다고 생각하나!!!!!",
        "멍청한 놈!!!!!!",
        "이 건방진 꼬마가.....",
        "넌 아무것도 아니다!!! 아무것도! 아무것도!! 아무것도 아니야!!!!!",
      ]),
      duelPattern("special", "defend", [
        "내 힘을 느껴라!!! 내 검을 느껴라!!!!!!!",
        "하하하하하!!!!!!!!!!",
        "하........ 아직도 계속할 셈이냐....",
        "좋다! 정말 좋다! [주인공 이름]!!!!! 하하하하!!!!!",
        "고작 칼날 따위에 내가 질 것 같으냐!!!!!!",
        "벌레 놈!!!! 네가 정말 나를 이길 수 있다고 생각했느냐!!!!!!",
        "돼지!! 돼지!!! 돼지!!!! 돼지!!!!! 돼지이이이이!!!!!!!!",
        "돼지!!!! 죽어라!!!!!!!!!",
        "돼지!!!!! 감히 내게 상처를 입히다니!!!!!",
        "언제까지고 버틸 수는 없다!!! 너 같은 한심한 벌레는!!!",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "한 커닝엄",
    player: "주인공",
    location: "르누이유",
    note: "겐카쿠의 과거와 이어지는 후반 일기토입니다. 필사의 공격 대사를 놓치지 않는 것이 안정적입니다.",
    patterns: [
      duelPattern("attack", "special", [
        "이제 내 차례다.",
        "어리석은 소년이여!!!",
        "허허허.... 겐카쿠, 자네가 잘 가르쳤군....",
        "여기서 널 지나가게 둘 수는 없다, 소년.",
        "나는 늙었지만 검 솜씨는 아직 죽지 않았다.",
        "으윽..... 네 아버지가 오늘의 너를 보았다면 자랑스러워했겠지...",
        "아주 좋구나, 소년.",
        "영원히 방어만 할 수는 없다.",
        "그런 식으로는 이길 수 없다, 소년.",
        "꽤 끈질기구나....",
      ]),
      duelPattern("defend", "attack", [
        "겐카쿠............. 좋은 아들을 길렀군....",
        "그 얕은 공격은 피했어야 했는데...",
        "네 힘을 보여다오, 겐카쿠의 아들아!!!",
        "[군 이름]군의 지도자는 신중하군....",
        "다시 해봐라, 소년.",
        "으윽... 위험을 감수하는 걸 좋아하는군.",
        "훌륭한 일격이다.... 나도 더 조심해야겠군....",
        "이제 어떻게 할 셈이냐, 소년?",
        "왜 그러느냐? 다시 해보겠느냐?",
        "나를 이길 수 있다고 생각하느냐, 소년?",
      ]),
      duelPattern("special", "defend", [
        "이걸 받아낼 수 있겠느냐?",
        "우리의 과거는 여기서 묻자, 소년!!",
        "내 또 다른 일격을 견딜 수 있는지 보자!",
        "이제 내 필사의 공격을 느껴라.",
        "보고 배워라, 소년. 검은 이렇게 쓰는 것이다!!!",
        "똑똑히 보아라, 소년!!",
        "좋다, 하지만 내 검을 막아낼 수 있겠느냐!!!",
        "내 검이 무뎌졌다고 생각하느냐!!!",
        "그 정도로는 부족하다.",
        "기백이 있구나...",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "죠우이 아트레이드",
    player: "주인공",
    location: "천산 고개",
    note: "엔딩 분기와 연결되는 마지막 일기토입니다. 특정 결말을 노릴 때는 공격보다 방어 유지가 중요합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "좋지 않은 선택이야...... [주인공 이름].... 그러다 다칠 거야....",
        "간다.... [주인공 이름]........",
        "옛날 그대로네....",
        "이 길고 긴 싸움을 끝내자....",
        "다음은 내 차례야. [주인공 이름].........",
        "그래. 그렇게 하는 거야.....",
        "왜 싸우지 않는 거야, [주인공 이름]!!!",
        "그래.....",
      ]),
      duelPattern("defend", "attack", [
        "[주인공 이름]...... 너는......",
        "[주인공 이름]..........",
        "네 힘을 시험해보자.... [주인공 이름].......",
        "그래...... [주인공 이름].........",
        "옛날 생각이 나는군....",
        "다시 해봐! [주인공 이름].......",
        "너는 [군 이름]군의 지도자잖아, [주인공 이름]........",
        "...........",
      ]),
      duelPattern("special", "defend", ["-"]),
    ],
  },
] as const satisfies readonly GameplayDuelRecord[];

export const GAMEPLAY_WAR_COMMAND_GROUPS = [
  {
    game: "Suikoden I",
    body: "트란 해방전쟁의 전쟁 전투는 매 턴 군 전체에 명령을 내리는 상성전입니다. 적 행동을 읽고 유리한 명령을 맞추는 것이 핵심입니다.",
    commands: [
      {
        name: "Charge",
        strongAgainst: "Bow",
        weakAgainst: "Magic",
        body: "기병·보병 중심의 돌격입니다. 궁병에는 강하지만 마법을 만나면 큰 손실을 입습니다.",
      },
      {
        name: "Bow",
        strongAgainst: "Magic",
        weakAgainst: "Charge",
        body: "어느 상황에서도 일정 피해를 주지만 돌격에는 손해를 보기 쉽습니다. 적 병력이 얼마 남지 않았을 때 마무리용으로 안정적입니다.",
      },
      {
        name: "Magic",
        strongAgainst: "Charge",
        weakAgainst: "Bow",
        body: "돌격을 완전히 받아칠 수 있지만 궁병에는 취약합니다. 적이 돌격을 고를 때 가장 강하게 작동합니다.",
      },
      {
        name: "Other",
        body: "도적, 닌자, 전략가, 상인, 용기사처럼 전투 전에 전황을 바꾸는 보조 명령입니다. 정찰과 강화 후 본 명령을 고르는 흐름이 안정적입니다.",
      },
    ],
  },
  {
    game: "Suikoden II",
    body: "듀난 통일전쟁의 전쟁 전투는 부대 단위로 이동하는 전술전입니다. 지형, 사거리, 특수 능력, 승리 조건을 함께 읽어야 합니다.",
    commands: [
      {
        name: "Attack",
        body: "사거리 안의 적 부대를 공격합니다. 보병과 기병은 인접 공격, 궁병과 마법 부대는 거리 유지가 중요합니다.",
      },
      {
        name: "Rune",
        body: "화염창, 마법, 회복처럼 부대가 가진 특수 능력을 사용합니다. 사용 횟수가 제한되어 있어 결정적인 턴에 쓰는 편이 좋습니다.",
      },
      {
        name: "Wait",
        body: "부대를 대기시켜 위치를 유지합니다. 적을 끌어들이거나 방어 목표를 지킬 때 필요합니다.",
      },
      {
        name: "Leave it to Apple",
        body: "자동 지휘입니다. 기본 진행에는 도움이 되지만 중요한 전투에서는 직접 이동과 사거리 관리를 하는 편이 더 안정적입니다.",
      },
    ],
  },
] as const satisfies readonly GameplayWarCommandGroup[];

export const GAMEPLAY_WAR_BATTLE_RECORDS = [
  {
    game: "Suikoden I",
    title: "판누 야쿠타 전투",
    location: "판누 야쿠타",
    objective: "크완다 로스만군 격파",
    note: "첫 대규모 전투입니다. 도적이나 닌자로 적 행동을 확인한 뒤 유리한 명령을 고르는 기본 흐름을 익힙니다.",
    tags: ["초전", "정찰", "상성전"],
  },
  {
    game: "Suikoden I",
    title: "가란 성새 공략전",
    location: "가란 성새",
    objective: "제국 방어선 돌파",
    note: "이전 전투와 같은 상성 운영입니다. 적 행동을 읽지 못하면 전략가 강화 후 돌격을 쓰는 선택지도 있습니다.",
    tags: ["성새", "전략가", "돌파"],
  },
  {
    game: "Suikoden I",
    title: "스칼레티시아 성 1차전",
    location: "스칼레티시아 성",
    objective: "밀리히군 진입 시도",
    note: "독 꽃가루 이벤트 때문에 사실상 패배가 고정된 전투입니다. 무리해서 이기려 하기보다 이벤트 흐름으로 봅니다.",
    tags: ["이벤트", "패배 고정", "독 꽃가루"],
  },
  {
    game: "Suikoden I",
    title: "스칼레티시아 성 2차전",
    location: "스칼레티시아 성",
    objective: "밀리히군 격파",
    note: "밀리히는 마법 계열을 섞어 쓰므로 정찰 실패 시 궁병이 비교적 안전한 선택입니다.",
    tags: ["재전", "마법 대응", "궁병"],
  },
  {
    game: "Suikoden I",
    title: "테오 맥돌 1차전",
    location: "테오군 전선",
    objective: "기갑기병대 저지",
    note: "화염창 확보 전에는 테오의 기갑기병대를 이길 수 없습니다. 맷슈의 지시에 따라 후퇴하는 흐름입니다.",
    tags: ["이벤트", "기갑기병", "후퇴"],
  },
  {
    game: "Suikoden I",
    title: "테오 맥돌 최종전",
    location: "테오군 전선",
    objective: "기갑기병대 격파",
    note: "화염창을 장착한 돌격이 승부를 가릅니다. 이전 전투와 달리 정면 돌파가 가능한 시점입니다.",
    tags: ["화염창", "돌격", "테오"],
  },
  {
    game: "Suikoden I",
    title: "북쪽 관문 전투",
    location: "북쪽 관문",
    objective: "그리피스군 격파",
    note: "병력 차이가 유리하지만, 닌자로 적 행동을 확인하면 손실을 더 줄일 수 있습니다.",
    tags: ["관문", "우세", "정찰"],
  },
  {
    game: "Suikoden I",
    title: "샤사라자드 부유요새전",
    location: "샤사라자드",
    objective: "소니아 슈렌군 격파",
    note: "소니아는 돌격과 마법을 섞어 씁니다. 닌자 정찰을 적극 활용하면 안정적으로 진행됩니다.",
    tags: ["소니아", "부유요새", "정찰"],
  },
  {
    game: "Suikoden I",
    title: "최종 전쟁",
    location: "그레그민스터 진입로",
    objective: "유버군 격파",
    note: "적 병력이 크지만 후반 정찰 수단과 누적 전력으로 대응할 수 있습니다. 손실을 줄이고 빠르게 끝내는 것이 좋습니다.",
    tags: ["최종전", "유버", "총력전"],
  },
  {
    game: "Suikoden II",
    title: "용병 요새 방어전",
    location: "용병 요새",
    objective: "하이랜드군 저지",
    note: "튜토리얼 성격의 첫 전쟁 전투입니다. 이동, 공격, 대기의 기본 흐름을 익힙니다.",
    tags: ["튜토리얼", "방어", "초반"],
  },
  {
    game: "Suikoden II",
    title: "용병 요새 2차 방어전",
    location: "용병 요새",
    objective: "스토리상 퇴각",
    note: "패배 흐름이 전제된 전투입니다. 무리해서 전멸을 노리기보다 이벤트 진행으로 봅니다.",
    tags: ["패배 이벤트", "퇴각", "초반"],
  },
  {
    game: "Suikoden II",
    title: "뮤즈 방어전",
    location: "뮤즈",
    objective: "하이랜드군 진격 지연",
    note: "생존과 시간 벌이가 중심입니다. 주인공 부대의 회복 능력과 아군 지원 도착을 염두에 둡니다.",
    tags: ["방어", "회복", "시간 벌기"],
  },
  {
    game: "Suikoden II",
    title: "본거지 방어전",
    location: "노스윈도우 성",
    objective: "신동맹군 본거지 방어",
    note: "본거지 확보 이후의 방어전입니다. 진입로를 막고 장거리 능력으로 적 접근을 줄입니다.",
    tags: ["본거지", "방어선", "장거리"],
  },
  {
    game: "Suikoden II",
    title: "마틸다 기사단 공동전",
    location: "마틸다 방면",
    objective: "기사단과 함께 하이랜드군 상대",
    note: "아군과 우군의 위치를 함께 봐야 합니다. 기병 이동력과 전선 유지가 중요합니다.",
    tags: ["마틸다", "기병", "우군"],
  },
  {
    game: "Suikoden II",
    title: "사우스 윈도우 방어전",
    location: "사우스 윈도우",
    objective: "도시 방어",
    note: "적 접근을 허용하면 손실이 커집니다. 궁병, 마법, 화염창으로 먼저 깎아두는 흐름이 좋습니다.",
    tags: ["도시 방어", "궁병", "화염창"],
  },
  {
    game: "Suikoden II",
    title: "키바 부자와의 결전",
    location: "라다트 방면",
    objective: "키바·클라우스 부대 격파",
    note: "키바와 클라우스의 부대는 단단합니다. 직접 교전 전 장거리 공격과 회복을 준비합니다.",
    tags: ["키바", "클라우스", "지휘관"],
  },
  {
    game: "Suikoden II",
    title: "리들리 구출전",
    location: "코볼트 방면",
    objective: "리들리 부대 구출",
    note: "구출 대상의 위치와 적 포위망을 함께 봐야 합니다. 이동력이 좋은 부대를 전진시키는 편이 안정적입니다.",
    tags: ["구출", "기동력", "리들리"],
  },
  {
    game: "Suikoden II",
    title: "루카 브라이트 최종전",
    location: "듀난 성 숲",
    objective: "루카 브라이트군 유인",
    note: "여러 전투가 이어지는 큰 분기입니다. 전쟁 전투 이후 일반 전투와 일기토가 이어지므로 회복 준비가 중요합니다.",
    tags: ["루카", "연전", "회복"],
  },
  {
    game: "Suikoden II",
    title: "그린힐 탈환전",
    location: "그린힐",
    objective: "그린힐 탈환",
    note: "본대와 양동 부대의 흐름이 함께 전개됩니다. 적 지원을 끊고 도시 진입 조건을 맞춥니다.",
    tags: ["그린힐", "탈환", "양동"],
  },
  {
    game: "Suikoden II",
    title: "뮤즈 탈환전",
    location: "뮤즈",
    objective: "뮤즈 재점령",
    note: "적 주력과의 정면 충돌이 늘어납니다. 방어가 낮은 부대를 앞으로 내지 않는 것이 중요합니다.",
    tags: ["뮤즈", "재점령", "방어"],
  },
  {
    game: "Suikoden II",
    title: "마틸다 공략전",
    location: "락액스 방면",
    objective: "마틸다 방면 돌파",
    note: "후반 전쟁 전투로 적 부대가 강해집니다. 기병과 고화력 부대를 묶어 주요 지휘관을 압박합니다.",
    tags: ["락액스", "후반", "기병"],
  },
  {
    game: "Suikoden II",
    title: "르누이유 전투",
    location: "뮤즈-하이랜드 국경",
    objective: "하이랜드 수도 진입로 개방",
    note: "전략 이벤트와 전투가 결합된 마지막 대규모 국면입니다. 이후 르누이유 공략으로 이어집니다.",
    tags: ["최종 국면", "슈우", "레온"],
  },
  {
    game: "Suikoden II",
    title: "르누이유 공략전",
    location: "르누이유",
    objective: "부대 하나를 성문 안으로 진입",
    note: "게이트 앞 방어 부대를 장거리 공격과 특수 능력으로 정리하고, 이동력이 좋은 부대를 진입시키면 종료됩니다.",
    tags: ["최종전", "성문 진입", "장거리"],
  },
] as const satisfies readonly GameplayWarBattleRecord[];

export const GAMEPLAY_WAR_ROLE_RECORDS = [
  {
    game: "Suikoden I",
    title: "정찰 담당",
    body: "도적은 확률적으로, 닌자는 확정적으로 적 행동을 읽습니다. 전쟁 전투의 가장 큰 변수를 줄이는 역할입니다.",
    points: ["닌자 우선", "도적 보조", "정찰 후 본 명령"],
  },
  {
    game: "Suikoden I",
    title: "전략가와 돌격",
    body: "전략가는 돌격 위력을 끌어올립니다. 적 행동을 확인한 뒤 강화된 돌격을 맞추면 큰 손실 없이 병력을 깎을 수 있습니다.",
    points: ["맷슈", "레온", "애플", "돌격 강화"],
  },
  {
    game: "Suikoden I",
    title: "상인과 용기사",
    body: "상인은 적 병력을 빼앗는 보조 수단이고, 용기사는 궁병을 제외한 상황에서 강한 특수 공격을 맡습니다.",
    points: ["상인", "용기사", "병력 보정", "특수 공격"],
  },
  {
    game: "Suikoden II",
    title: "장거리 화력",
    body: "궁병과 마법 부대는 적이 붙기 전에 피해를 누적합니다. 테레사, 아이다, 루크, 마자스 같은 부대가 이 역할을 맡기 좋습니다.",
    points: ["궁병", "마법", "사거리", "선제 피해"],
  },
  {
    game: "Suikoden II",
    title: "기병과 돌파",
    body: "기병은 이동 범위가 넓어 목표 지점 진입, 구출, 지휘관 압박에 강합니다. 프릭, 발레리아, 게오르그, 하우저 계열 부대가 대표적입니다.",
    points: ["기동력", "지휘관 압박", "성문 진입", "우회"],
  },
  {
    game: "Suikoden II",
    title: "회복과 생존",
    body: "회복 능력과 높은 방어는 장기전의 안전장치입니다. 주인공의 빛나는 방패 계열 지원과 호우안 계열 회복을 전선 근처에 둡니다.",
    points: ["회복", "방어", "전선 유지", "전멸 방지"],
  },
  {
    game: "Suikoden II",
    title: "화염창과 특수 능력",
    body: "화염창과 룬 명령은 제한 횟수를 갖지만 전황을 크게 바꿉니다. 적이 줄지어 있을 때 직선 범위 공격을 맞추는 것이 좋습니다.",
    points: ["화염창", "룬 명령", "범위", "횟수 관리"],
  },
] as const satisfies readonly GameplayWarRoleRecord[];

export const GAMEPLAY_HAIYO_COOKING_CONTEST_RECORDS = [
  {
    round: 1,
    opponent: "유쿰",
    reward: "레시피 2",
    note: "하이요 영입 뒤 시작되는 첫 요리 대결입니다.",
  },
  {
    round: 2,
    opponent: "고에츠",
    reward: "레시피 8",
    note: "식당 이벤트가 이어지며 승리 보상으로 레시피를 얻습니다.",
  },
  {
    round: 3,
    opponent: "시키",
    reward: "레시피 17",
    note: "초반 요리 대결 보상 흐름의 마지막 축입니다.",
  },
  {
    round: 4,
    opponent: "류키",
    reward: "레시피 19",
    note: "중반 이후 식당을 다시 확인하면 이어지는 대결입니다.",
  },
  {
    round: 5,
    opponent: "바쇼크",
    reward: "레시피 24",
    note: "요리 대결 5회 우승 보상으로 기록됩니다.",
  },
  {
    round: 6,
    opponent: "류코",
    reward: "레시피 22",
    note: "레시피 번호와 대결 순서가 일치하지 않으므로 따로 확인합니다.",
  },
  {
    round: 7,
    opponent: "안토니오",
    reward: "레시피 30",
    note: "후반 레시피 수집 구간으로 이어지는 대결입니다.",
  },
  {
    round: 8,
    opponent: "교쿠란",
    reward: "레시피 27",
    note: "요리 대결 8회 우승 보상으로 기록됩니다.",
  },
  {
    round: 9,
    opponent: "레츠오",
    reward: "-",
    note: "현재 레시피 보상 기록은 별도로 확인되지 않습니다.",
  },
  {
    round: 10,
    opponent: "레스터",
    reward: "레시피 33",
    note: "요리 대결 10회 우승 보상으로 기록됩니다.",
  },
  {
    round: 11,
    opponent: "레츠오",
    reward: "레시피 38",
    note: "마지막 구간 직전의 레시피 보상 대결입니다.",
  },
  {
    round: 12,
    opponent: "진카이",
    reward: "레시피 40",
    note: "요리 대결 최종 보상으로 레시피 40을 얻습니다.",
  },
] as const satisfies readonly GameplayCookingContestRecord[];

const GAMEPLAY_SUIKODEN_II_RECIPE_DISH_NAMES: Record<number, string> = {
  1: "오믈렛",
  2: "토마토 수프",
  3: "오히타시",
  4: "샐러드",
  5: "교자",
  6: "차우더",
  7: "바비큐 고기만두",
  8: "버터 조개",
  9: "생선 튀김",
  10: "아이스크림",
  11: "키슈",
  12: "샌드위치",
  13: "미트 파이",
  14: "생선 조림",
  15: "프라이드 치킨",
  16: "초무침",
  17: "케이크",
  18: "고로케",
  19: "파스타",
  20: "튀김",
  21: "생선구이",
  22: "그라탱",
  23: "오므라이스",
  24: "볶음밥",
  25: "피자",
  26: "데리야키",
  27: "돈가스",
  28: "카레라이스",
  29: "소고기구이",
  30: "라멘",
  31: "햄버거",
  32: "도시락",
  33: "초밥",
  34: "일본식 전골",
  35: "풀 코스",
  36: "징기스칸",
  37: "스테이크",
  38: "모둠회",
  39: "그레미오 특제 스튜",
  40: "징키스칸",
};

const GAMEPLAY_SUIKODEN_II_RECIPE_ICONS: Record<number, string> = {
  1: "🍳",
  2: "🍅",
  3: "🥬",
  4: "🥗",
  5: "🥟",
  6: "🥣",
  7: "🥙",
  8: "🧈",
  9: "🐟",
  10: "🍨",
  11: "🥧",
  12: "🥪",
  13: "🥧",
  14: "🍲",
  15: "🍗",
  16: "🥒",
  17: "🍰",
  18: "🥔",
  19: "🍝",
  20: "🍤",
  21: "🐟",
  22: "🧀",
  23: "🍛",
  24: "🍚",
  25: "🍕",
  26: "🍢",
  27: "🍖",
  28: "🍛",
  29: "🥩",
  30: "🍜",
  31: "🍔",
  32: "🍱",
  33: "🍣",
  34: "🍲",
  35: "🍽️",
  36: "🥘",
  37: "🥩",
  38: "🍣",
  39: "🥘",
  40: "🥡",
};

const GAMEPLAY_RECIPE_SOURCE_TYPE_LABELS: Record<string, string> = {
  Drop: "드롭",
  Found: "발견",
  Other: "기타",
  Shop: "아이템 상점 레어 아이템",
};

const GAMEPLAY_RECIPE_SOURCE_ENTRY_LABELS: Record<string, string> = {
  "Coronet Town": "코로네",
  "DoReMi Elf (Aqua)": "도레미 엘프(아쿠아)",
  "DoReMi Elf (Blue)": "도레미 엘프(파랑)",
  "DoReMi Elf (Green)": "도레미 엘프(초록)",
  "DoReMi Elf (Pink)": "도레미 엘프(분홍)",
  "DoReMi Elf (Red)": "도레미 엘프(빨강)",
  "DoReMi Elf (Yellow)": "도레미 엘프(노랑)",
  "Eagle Man": "이글맨",
  Gregminster: "그레그민스터",
  "Greenhill City": "그린힐",
  "Highlands (Bow)": "하이랜드 병사(활)",
  "Highlands (Sword)": "하이랜드 병사(검)",
  "Highway Village": "가도 마을",
  "Kobold Village": "코볼트 마을",
  "Kuskus Town": "쿠스쿠스",
  "Lakewest Town": "레이크웨스트 마을",
  LandShark: "랜드샤크",
  "Muse City": "뮤즈",
  "Radat Town": "라다트",
  "Recruit Hai Yo": "하이요 영입",
  "Recruit Tuta, then talk to Dr. Huan": "토우타 영입 후 호우안에게 대화",
  "Rockaxe Castle": "록액스 성",
  "Two River City": "투 리버",
  ZombieSlug: "좀비 슬러그",
};

const GAMEPLAY_RECIPE_SOURCE_REGION_IDS: Record<string, string> = {
  "Coronet Town": "coronet",
  Gregminster: "gregminster",
  "Greenhill City": "greenhill",
  "Highway Village": "highway-village",
  "Kuskus Town": "kuskus",
  "Lakewest Town": "lakewest",
  "Muse City": "muse",
  "Radat Town": "radat",
  "Rockaxe Castle": "rockaxe",
  "Two River City": "two-river",
};

const GAMEPLAY_COOK_OFF_ENTRY_NUMBERS: Record<string, number> = {
  eighth: 8,
  eleventh: 11,
  fifth: 5,
  first: 1,
  fourth: 4,
  second: 2,
  seventh: 7,
  sixth: 6,
  tenth: 10,
  third: 3,
  twelfth: 12,
};

const getGameplayRecipeNumber = (name: string) =>
  Number(name.match(/^Recipe (\d+)$/)?.[1] ?? 0);

const getGameplayRecipeItemId = (recipeNumber: number) => `recipe-${recipeNumber}`;

const localizeGameplayRecipeSourceEntry = (entry: string) => {
  const cookOffMatch = entry.match(/^Win ([a-z]+) Cook-Off$/);

  if (cookOffMatch) {
    const round = GAMEPLAY_COOK_OFF_ENTRY_NUMBERS[cookOffMatch[1]];

    return round ? `요리 대결 ${round}회 우승` : entry;
  }

  return GAMEPLAY_RECIPE_SOURCE_ENTRY_LABELS[entry] ?? entry;
};

const buildGameplayRecipeSourceEntry = (
  entry: string,
): GameplayRecipeSourceEntry => {
  const regionId = GAMEPLAY_RECIPE_SOURCE_REGION_IDS[entry];

  return {
    href: regionId ?
      buildRegionAtlasDetailPath("suikoden-ii", regionId) :
      undefined,
    label: localizeGameplayRecipeSourceEntry(entry),
  };
};

export const GAMEPLAY_SUIKODEN_II_RECIPE_RECORDS =
  GAME8_ITEM_SOURCE_RECORDS
    .filter(
      (record) =>
        record.game === "suikoden-ii" &&
        record.game8Type === "Recipes" &&
        getGameplayRecipeNumber(record.name) > 0,
    )
    .map((record): GameplayRecipeRecord => {
      const recipeNumber = getGameplayRecipeNumber(record.name);

      return {
        dishName:
          GAMEPLAY_SUIKODEN_II_RECIPE_DISH_NAMES[recipeNumber] ??
          `레시피 ${recipeNumber}`,
        href: buildItemDetailPath(getGameplayRecipeItemId(recipeNumber)),
        icon: GAMEPLAY_SUIKODEN_II_RECIPE_ICONS[recipeNumber] ?? "🍽️",
        number: recipeNumber,
        sources: record.sources.map((source) => ({
          entries: source.entries.map((entry) =>
            buildGameplayRecipeSourceEntry(entry)
          ),
          label: GAMEPLAY_RECIPE_SOURCE_TYPE_LABELS[source.type] ?? source.type,
        })),
        title: `레시피 ${recipeNumber}`,
      };
    })
    .sort((firstRecipe, secondRecipe) => firstRecipe.number - secondRecipe.number);

export const GAMEPLAY_HAIYO_RESTAURANT_TIPS = [
  {
    title: "개방 직후 기본 레시피 확보",
    body: "하이요를 영입하면 식당과 함께 여러 기본 레시피가 열립니다. 영입 직후 레시피 목록을 먼저 확인해 이후 요리 대결 보상과 구분해 둡니다.",
    points: ["하이요 영입", "식당 개방", "기본 레시피"],
  },
  {
    title: "요리 대결 보상은 순서가 섞입니다",
    body: "요리 대결 회차와 레시피 번호가 항상 일치하지 않습니다. 예를 들어 6회 보상이 레시피 22, 7회 보상이 레시피 30처럼 건너뛰어 이어집니다.",
    points: ["회차 확인", "보상 확인", "누락 점검"],
  },
  {
    title: "상점·드롭 레시피를 함께 모읍니다",
    body: "모든 레시피가 식당 이벤트 보상으로만 들어오지는 않습니다. 마을 아이템 상점의 레어 아이템, 보물상자, 몬스터 드롭으로 얻는 레시피도 있으므로 지역 이동 때 함께 확인합니다.",
    points: ["레어 아이템", "발견", "드롭"],
  },
  {
    title: "식재료 시설과 같이 관리합니다",
    body: "요리는 본거지의 농장, 목장, 낚시 같은 수급 시설과 함께 볼 때 관리가 편합니다. 시설이 늘어날 때마다 식당에서 만들 수 있는 요리를 다시 확인합니다.",
    points: ["농장", "목장", "낚시"],
  },
  {
    title: "후반 진입 전 레시피 공백 확인",
    body: "후반 지역으로 넘어가기 전에는 레시피 번호가 비어 있는지 먼저 점검합니다. 특히 아이템 상점 레어 아이템과 특정 몬스터 드롭은 나중에 찾으면 동선이 길어질 수 있습니다.",
    points: ["번호 공백", "후반 점검", "수집 동선"],
  },
] as const satisfies readonly GameplayRestaurantTipRecord[];

export const GAMEPLAY_DETAIL_RECORDS = [
  {
    id: GAMEPLAY_DETAIL_IDS.battleBasics,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.battleBasics),
    eyebrow: "Battle",
    title: "일반 전투",
    summary:
      "일반 전투는 6인 파티, 전열·후열, 무기 사거리, 문장 마법, 협력 공격을 한 화면에서 조율하는 기본 전투 체계입니다.",
    tags: ["6인 파티", "전열·후열", "무기 사거리", "협력 공격"],
    overview: [
      "두 작품 모두 전투는 턴 시작 전에 행동을 지정하고, 속도와 상태에 따라 순차적으로 처리되는 방식입니다.",
      "전열은 근거리 무기와 방어 역할을 맡기 쉽고, 후열은 중·장거리 무기와 마법 운용 캐릭터가 안정적으로 자리 잡습니다.",
      "리마스터에서는 전투 속도와 자동 전투 편의 기능이 보강되어 반복 전투의 부담이 줄어듭니다.",
    ],
    keyPoints: [
      {
        title: "사거리 기준으로 배치",
        body: "짧은 사거리 캐릭터는 전열 중심으로, 중간·긴 사거리 캐릭터는 후열에서도 공격 가능한지 먼저 확인합니다.",
      },
      {
        title: "행동 경제 관리",
        body: "공격, 방어, 아이템, 문장 마법, 협력 공격을 같은 턴 안에서 배분하므로 회복 담당의 행동 순서를 항상 염두에 둡니다.",
      },
      {
        title: "상태 이상 대비",
        body: "중요 전투 전에는 해독제·목감기 치료 아이템처럼 상태 회복 수단을 개인 소지품에 미리 분산해 둡니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "개인 인벤토리와 제한된 장비 교체 흐름 때문에 전투 전 준비가 중요합니다. 무기 강화와 방어구 교체가 체감 난도를 크게 낮춥니다.",
        points: [
          "일반 전투는 최대 6인 파티 기준으로 진행됩니다.",
          "전열·후열과 무기 사거리의 영향이 커서 짧은 사거리 캐릭터는 배치 제약을 받습니다.",
          "개인 소지품 중심이라 회복 아이템을 누구에게 들려줄지 미리 정해야 합니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "파티 운용 폭이 넓어지고 협력 공격과 문장 슬롯 활용도가 커집니다. 후반에는 역할별 전문 파티를 구성하기 좋습니다.",
        points: [
          "6인 파티 구조는 유지되지만 문장 슬롯과 협력 공격 활용 폭이 넓어집니다.",
          "전투 속도, 자동 전투, 대시 등 리마스터 편의 기능과 함께 반복 전투 부담이 줄어듭니다.",
          "후반 캐릭터 풀이 넓어져 물리 화력, 회복, 마법, 협력 공격 중심 파티를 따로 구성하기 쉽습니다.",
        ],
      },
    ],
    checklist: [
      "전열에 짧은 사거리 캐릭터를 과하게 몰아넣지 않았는지 확인",
      "보스전 전 개인 소지품에 회복·상태 회복 아이템 배분",
      "무기 레벨과 방어구가 현재 지역 난도에 맞는지 점검",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.runeSystem,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.runeSystem),
    eyebrow: "Runes",
    title: "문장 운용",
    summary:
      "문장은 마법과 고유 기술의 핵심이며, 봉인구를 장착해 캐릭터의 전투 역할을 바꾸는 성장 축입니다.",
    tags: ["봉인구", "마법 레벨", "고유 문장", "속성 상성"],
    overview: [
      "문장은 문장사 또는 문장 상점을 통해 장착·해제하며, 제거된 문장은 봉인구 형태로 보관됩니다.",
      "속성 문장은 레벨별 사용 횟수로 관리되므로 강한 주문을 언제 쓸지 정하는 것이 전투 운영의 핵심입니다.",
      "일부 캐릭터는 고유 문장이나 고정 문장을 통해 일반 캐릭터와 다른 전투 역할을 가집니다.",
    ],
    keyPoints: [
      {
        title: "역할에 맞는 장착",
        body: "마력이 높은 캐릭터는 공격·회복 속성 문장, 물리 캐릭터는 반격·연타·분노 계열처럼 행동을 강화하는 문장이 잘 맞습니다.",
      },
      {
        title: "사용 횟수 관리",
        body: "마법은 마력 수치가 아니라 레벨별 사용 횟수로 관리됩니다. 던전 중반까지는 저레벨 주문과 일반 공격을 섞는 편이 안정적입니다.",
      },
      {
        title: "봉인구와 문장의 구분",
        body: "아이템 목록의 봉인구는 장착 전 상태이며, 실제 전투 효과는 문장으로 부착된 뒤 발동됩니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "캐릭터당 장착 가능한 문장이 제한적이라 역할 분담이 선명합니다. 문장 교체 전에는 기존 문장이 봉인구로 돌아가는지 확인합니다.",
        points: [
          "문장은 문장사에게 장착하며, 봉인구 상태의 아이템이 장착 후 문장으로 작동합니다.",
          "대부분 캐릭터의 장착 폭이 좁아 공격·회복·보조 역할을 분명히 나누는 편이 좋습니다.",
          "문장 상점과 본거지 문장사는 진 영입 이후 정비 동선의 핵심이 됩니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "캐릭터별 문장 슬롯이 확장되며 물리 강화와 속성 마법을 조합하는 폭이 넓어집니다.",
        points: [
          "문장 슬롯이 늘어난 캐릭터는 물리 강화 문장과 속성 문장을 병행할 수 있습니다.",
          "문장 장착은 마을 문장사와 본거지 문장사를 통해 관리합니다.",
          "제거한 문장은 봉인구로 돌아가므로 후반 조합을 바꿔가며 운용하기 좋습니다.",
        ],
      },
    ],
    checklist: [
      "회복 담당에게 물·류수 문장 계열 확보",
      "보스전 전 공격 문장 사용 횟수 보존",
      "고정 문장이 있는 캐릭터는 남은 슬롯 기준으로 역할 보완",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.duel,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.duel),
    eyebrow: "Duel",
    title: "일기토",
    summary:
      "일기토는 상대 대사를 읽고 공격·방어·필사의 공격의 상성을 맞추는 1:1 전투입니다.",
    tags: ["대사 판독", "공격", "방어", "필사의 공격"],
    overview: [
      "일기토는 일반 전투와 달리 선택지가 제한되어 있으며, 상대의 대사가 다음 행동을 암시합니다.",
      "기본 상성은 공격이 방어에 강하고, 방어는 필사의 공격을 받아내며, 필사의 공격은 공격을 이기는 구조로 정리됩니다.",
      "일부 일기토는 패배 시 게임오버 또는 캐릭터 생존과 연결되므로 전투 전 장비와 레벨을 점검해야 합니다.",
    ],
    keyPoints: [
      {
        title: "대사 톤 읽기",
        body: "상대가 강하게 몰아붙이는 말투면 필사의 공격 가능성을, 자세를 낮추거나 기다리는 말투면 방어 가능성을 우선 의심합니다.",
      },
      {
        title: "위험한 턴은 방어",
        body: "대사 판단이 애매하고 체력이 낮다면 방어가 가장 손실을 줄이는 선택입니다.",
      },
      {
        title: "고정 이벤트 준비",
        body: "테오, 콴다, 플릭, 루카, 한, 죠우이처럼 주요 일기토 전에는 장비와 무기 강화를 미리 마칩니다.",
      },
    ],
    duelRecords: GAMEPLAY_DUEL_RECORDS,
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "콴다 로스먼과 테오 맥돌 전투가 핵심입니다. 특히 특정 캐릭터로 진행되는 일기토는 사전 육성이 중요합니다.",
        points: [
          "대표 일기토는 콴다 로스먼, 테오 맥돌 관련 전투입니다.",
          "패배가 게임오버나 캐릭터 생존에 영향을 줄 수 있어 전투 전 장비 점검이 중요합니다.",
          "대사 암시를 읽어 공격·방어·필사의 공격의 상성을 맞추는 구조입니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드 등 일기토 수가 늘고 대사 패턴의 비중도 커집니다.",
        points: [
          "플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드가 주요 일기토 축입니다.",
          "대사 패턴이 다음 행동을 암시하므로 반복되는 표현을 기억하면 안정적으로 대응할 수 있습니다.",
          "루카 브라이트처럼 스토리 긴장도가 높은 전투는 체력 관리와 방어 선택이 특히 중요합니다.",
        ],
      },
    ],
    checklist: [
      "일기토 직전 무기 레벨과 방어구 확인",
      "첫 대사는 연출일 수 있으므로 실제 암시 대사를 구분",
      "필사의 공격 의심 대사는 무리하게 공격하지 않기",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.warBattle,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.warBattle),
    eyebrow: "War Battle",
    title: "전쟁 전투",
    summary:
      "전쟁 전투는 모집한 동료와 부대 구성을 전장 단위로 활용하는 대규모 전투 시스템입니다.",
    tags: ["부대 편성", "장거리 공격", "특수 능력", "승패 조건"],
    overview: [
      "전쟁 전투는 스토리 진행 중 발생하는 대규모 전투이며, 작품마다 규칙과 조작감이 크게 다릅니다.",
      "1편은 명령 상성 중심의 심리전이고, 2편은 격자 지도에서 부대를 움직이는 전략 전투에 가깝습니다.",
      "동료 영입 수와 역할은 전쟁 전투 선택지와 부대 성능에 직접 연결됩니다.",
    ],
    keyPoints: [
      {
        title: "불리한 직접 교전 회피",
        body: "전력이 낮거나 목적이 방어인 전투에서는 무리한 근접 교전보다 장거리 공격과 대기 운영이 안정적입니다.",
      },
      {
        title: "특수 능력 우선 확인",
        body: "정찰, 강화, 회복, 화염창, 문장 공격처럼 전투 흐름을 바꾸는 능력은 일반 공격보다 먼저 검토합니다.",
      },
      {
        title: "승리 조건 확인",
        body: "모든 적을 쓰러뜨리는 전투만 있는 것이 아니므로, 지휘관 격파·특정 지점 방어·생존 조건을 구분합니다.",
      },
    ],
    warBattleRecords: GAMEPLAY_WAR_BATTLE_RECORDS,
    warCommandGroups: GAMEPLAY_WAR_COMMAND_GROUPS,
    warRoleRecords: GAMEPLAY_WAR_ROLE_RECORDS,
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "돌격, 궁병, 마법의 상성과 도적·닌자·전략가 같은 보조 명령이 핵심입니다. 불리한 선택은 동료 사망 위험으로 이어질 수 있습니다.",
        points: [
          "전투는 돌격, 궁병, 마법의 상성 판단을 중심으로 진행됩니다.",
          "도적·닌자·전략가·상인·용기사 같은 보조 명령은 턴 선택 전에 전황을 유리하게 만듭니다.",
          "불리한 명령 선택은 병력 손실뿐 아니라 일부 동료 사망 위험으로 이어질 수 있습니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "보병, 기병, 궁병, 마법 부대가 격자 위에서 움직입니다. 애플에게 맡기는 자동 지휘도 가능하지만, 장거리 부대와 회복 부대 편성이 중요합니다.",
        points: [
          "격자 지도에서 부대를 이동시키고 공격, 문장, 대기 같은 명령을 선택합니다.",
          "궁병과 마법 부대는 장거리 견제에 강하고, 기병은 이동 범위가 넓습니다.",
          "애플에게 지휘를 맡길 수 있지만, 중요한 전투는 부대 배치와 장거리 공격을 직접 관리하는 편이 안전합니다.",
        ],
      },
    ],
    checklist: [
      "전쟁 전투 전 저장",
      "장거리 공격·회복 능력 보유 부대 확인",
      "승리 조건과 패배 조건을 먼저 읽고 이동",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.headquarters,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.headquarters),
    eyebrow: "Headquarters",
    title: "본거지 시설",
    summary:
      "본거지는 동료 영입에 따라 시설과 기능이 확장되는 거점이며, 전투 준비와 수집 기록의 중심입니다.",
    tags: ["시설 확장", "동료 영입", "상점", "기록 관리"],
    overview: [
      "본거지는 스토리상 군의 중심지이자 플레이어가 반복적으로 돌아오는 정비 거점입니다.",
      "동료를 영입할수록 상점, 창고, 대장간, 감정소, 목욕탕, 도서관, 미니게임 시설 등이 열립니다.",
      "시설 위치와 개방 단계는 작품마다 다르며, 성 레벨 상승과 동료 수가 본거지 확장에 영향을 줍니다.",
    ],
    keyPoints: [
      {
        title: "기능 담당 동료 확인",
        body: "대장장이, 창고 담당, 감정사, 목욕탕 담당처럼 시설 개방에 직접 연결되는 동료를 우선 체크합니다.",
      },
      {
        title: "정비 동선 단축",
        body: "던전 진입 전 본거지에서 무기 강화, 아이템 정리, 문장 장착, 세이브를 한 번에 처리합니다.",
      },
      {
        title: "확장 후 재방문",
        body: "스토리 진행이나 동료 수 증가 뒤에는 이전에 막혀 있던 층과 방이 열리는지 다시 확인합니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "토란 호수의 성을 해방군 본거지로 사용하며, 좀비 드래곤 격파 뒤 본격적으로 기능이 열립니다.",
        points: [
          "토란 호수의 성을 해방군 본거지로 사용합니다.",
          "동료 수에 따라 지하, 1층 좌우 날개, 3층, 4층 일부, 옥상과 깃발 등 구조가 확장됩니다.",
          "배로 본거지를 나갔다가 다시 들어오면 외관 변화와 레벨 상승을 확인할 수 있습니다.",
        ],
        floorFacilities: [
          {
            floor: "지하 / 선착장",
            summary: "토란 호수와 연결되는 이동층입니다. 본거지 출입과 수상 이동 동선을 담당합니다.",
            facilities: ["선착장", "배 이동", "승강기"],
            note: "세르게이를 영입하면 성 안 이동이 훨씬 짧아집니다.",
          },
          {
            floor: "1층 / 중앙 홀",
            summary: "본거지에 돌아올 때 가장 자주 들르는 기본 정비층입니다.",
            facilities: ["술집", "파티 편성", "석판", "창고", "여관", "도구점"],
          },
          {
            floor: "1층 좌우 날개 / 상점 구역",
            summary: "성 확장 뒤 좌우 날개가 열리며 장비와 문장 정비 기능이 늘어납니다.",
            facilities: ["방어구점", "문장사", "감정사", "대장간", "주사위 도박"],
          },
          {
            floor: "2층 / 생활 구역",
            summary: "동료 방과 생활 시설을 확인하는 층입니다.",
            facilities: ["동료 대기실", "생활 방", "세이브 동선"],
          },
          {
            floor: "3층 / 기록·수집 구역",
            summary: "책, 목욕탕, 창 세트와 소리세트처럼 수집 기록을 확인하는 층입니다.",
            facilities: ["도서관", "목욕탕", "창 세트 변경", "소리세트 변경", "그림 전시"],
          },
          {
            floor: "4층 / 작전 구역",
            summary: "해방군 회의와 전쟁 전투 준비가 모이는 지휘층입니다.",
            facilities: ["작전실", "전쟁 회의", "주요 이벤트"],
          },
          {
            floor: "옥상",
            summary: "성 레벨이 오르면 외관과 깃발 변화가 드러나는 최상층입니다.",
            facilities: ["옥상", "해방군 깃발", "외관 변화 확인"],
          },
        ],
        facilities: [
          {
            name: "술집 / 파티 편성",
            location: "초기 본거지 주요 홀",
            unlock: "맷슈, 산체스",
            body: "파티 편성과 전쟁 준비의 중심 기능입니다.",
          },
          {
            name: "석판",
            location: "본거지 내부",
            unlock: "루크",
            body: "영입한 108성 현황을 확인합니다.",
          },
          {
            name: "창고",
            location: "초기 본거지 기능 구역",
            unlock: "로크",
            body: "아이템을 보관하고 꺼냅니다.",
          },
          {
            name: "여관",
            location: "초기 본거지 생활 구역",
            unlock: "마리",
            body: "숙박과 세이브를 처리합니다.",
          },
          {
            name: "도구점",
            location: "상점 구역",
            unlock: "챈들러",
            body: "일반 아이템을 구입합니다.",
          },
          {
            name: "방어구점",
            location: "성 확장 후 상점 구역",
            unlock: "채프먼",
            body: "방어구를 구입합니다.",
          },
          {
            name: "대장간",
            location: "성 내부 공방 구역",
            unlock: "마스 / 미스 / 모스 / 무스 / 메스",
            body: "영입 단계에 따라 무기 강화 한계가 올라갑니다.",
          },
          {
            name: "문장사",
            location: "성 확장 후 상점 구역",
            unlock: "진",
            body: "문장을 장착하고 해제합니다.",
          },
          {
            name: "감정사",
            location: "성 확장 후 상점 구역",
            unlock: "자바",
            body: "감정품을 확인합니다.",
          },
          {
            name: "목욕탕",
            location: "생활 시설 구역",
            unlock: "산스케",
            body: "동료와 목욕 이벤트를 확인합니다.",
          },
          {
            name: "도서관",
            location: "성 확장 후 서고",
            unlock: "휴고",
            body: "오래된 책 기록을 읽습니다.",
          },
          {
            name: "창 / 소리 변경",
            location: "성 확장 후 기능 구역",
            unlock: "윈도우 / 멜로디",
            body: "창 세트와 소리세트를 변경합니다.",
          },
        ],
      },
      {
        game: "Suikoden II",
        body: "노스윈도우 성이 신동맹군 본거지가 되며, 층별 지도와 시설 배치가 확장됩니다. 애플과 회의실은 전쟁 전투 준비에도 연결됩니다.",
        points: [
          "노스윈도우 성을 신동맹군 본거지로 사용합니다.",
          "성 레벨은 동료 수와 스토리 진행에 따라 1~4단계로 확장됩니다.",
          "1층과 2층 중심으로 시설이 배치되고, 레벨 상승 후 농장·목장·식당·교역소·감정소 등이 추가됩니다.",
        ],
        floorFacilities: [
          {
            floor: "지하 / 외곽 동선",
            summary: "성 밖 이동, 선착장, 지하 기능으로 이어지는 보조 동선입니다.",
            facilities: ["선착장", "감옥", "묘지", "목욕탕", "낚시"],
            note: "성 레벨과 동료 영입에 따라 외곽 기능이 순차적으로 늘어납니다.",
          },
          {
            floor: "1층 / 중앙 홀",
            summary: "파티 정비와 기본 상점 기능이 모이는 본거지의 중심층입니다.",
            facilities: ["술집", "파티 편성", "석판", "창고", "여관", "도구점", "방어구점", "탐정 사무소"],
          },
          {
            floor: "2층 / 회의·기록 구역",
            summary: "전쟁 준비와 기록 확인, 일부 생활 시설이 함께 배치되는 층입니다.",
            facilities: ["회의실", "애플의 전쟁 준비", "도서관", "식당", "요리 대결", "지도 제작"],
          },
          {
            floor: "3층 / 상업·공방 구역",
            summary: "성 확장 뒤 문장, 무기, 교역, 감정 기능이 집중되는 정비층입니다.",
            facilities: ["문장사", "대장간", "교역소", "감정소", "창 세트 변경", "소리세트 변경"],
          },
          {
            floor: "4층 / 개인실·동료 구역",
            summary: "주요 인물의 방과 후반 이벤트 동선이 모이는 상층부입니다.",
            facilities: ["주인공 방", "동료 방", "이벤트 방", "휴식 동선"],
          },
          {
            floor: "옥상 / 외부 시설",
            summary: "전망과 외부 시설을 함께 확인하는 최상층·외곽 구역입니다.",
            facilities: ["옥상", "농장", "목장", "텔레포트", "성 외관 변화"],
          },
        ],
        facilities: [
          {
            name: "술집",
            location: "본거지 1층",
            unlock: "성 레벨 1",
            body: "파티 편성과 동료 대기 기능의 중심입니다.",
          },
          {
            name: "석판",
            location: "본거지 1층 주요 홀",
            unlock: "성 레벨 1",
            body: "108성 영입 현황을 확인합니다.",
          },
          {
            name: "창고",
            location: "본거지 1층",
            unlock: "성 레벨 1",
            body: "아이템을 보관하고 꺼냅니다.",
          },
          {
            name: "여관",
            location: "본거지 1층",
            unlock: "힐다",
            body: "숙박과 세이브를 처리합니다.",
          },
          {
            name: "도구점 / 방어구점",
            location: "본거지 1층 상점 구역",
            unlock: "알렉스 / 한스",
            body: "아이템과 방어구를 구입합니다.",
          },
          {
            name: "문장사",
            location: "성 레벨 2 이후 상점 구역",
            unlock: "진",
            body: "문장 장착과 봉인구 관리를 맡습니다.",
          },
          {
            name: "농장 / 목장",
            location: "본거지 외곽",
            unlock: "토니 / 유즈",
            body: "식재료와 동물 수집을 관리합니다.",
          },
          {
            name: "식당",
            location: "성 레벨 2 이후 주방",
            unlock: "하이요",
            body: "요리와 요리 대결을 진행합니다.",
          },
          {
            name: "교역소",
            location: "성 레벨 3 이후 상업 구역",
            unlock: "고든",
            body: "교역품 거래를 처리합니다.",
          },
          {
            name: "감정소",
            location: "성 레벨 3 이후 상업 구역",
            unlock: "레브란테",
            body: "감정품을 확인합니다.",
          },
          {
            name: "대장간",
            location: "성 레벨 3 이후 공방 구역",
            unlock: "텟사이",
            body: "무기 강화를 담당합니다.",
          },
          {
            name: "도서관",
            location: "성 레벨 2 이후 도서관",
            unlock: "에밀리아",
            body: "오래된 책 기록을 읽습니다.",
          },
          {
            name: "탐정 사무소",
            location: "본거지 1층 기능 구역",
            unlock: "리치먼드",
            body: "영입 단서와 조사를 제공합니다.",
          },
          {
            name: "창 / 소리 변경",
            location: "성 레벨 3 이후 3층·테라스 구역",
            unlock: "텐코우 / 코넬",
            body: "창 세트와 소리세트를 변경합니다.",
          },
        ],
      },
    ],
    checklist: [
      "새 동료 영입 후 본거지 시설 변화 확인",
      "대장간·문장사·창고·감정소 위치 기억",
      "성 레벨 상승 뒤 열리는 방과 미니게임 재점검",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.repeatablePlay,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.repeatablePlay),
    eyebrow: "Repeatable Play",
    title: "미니게임과 반복 수급",
    summary:
      "반복 플레이 항목은 돈·경험치·교역·미니게임처럼 장기 진행과 수집을 보조하는 시스템입니다.",
    tags: ["돈 벌기", "경험치", "교역", "미니게임"],
    overview: [
      "두 작품 모두 전투 외에도 돈과 아이템을 확보하거나 본거지 생활감을 만드는 반복 콘텐츠가 있습니다.",
      "교역, 도박, 낚시, 요리, 목장, 탐정 조사 같은 활동은 전투 난도보다 수집과 정비 편의에 영향을 줍니다.",
      "반복 수급은 필수 공략이라기보다, 원하는 파티를 육성하고 장비를 갖추는 시간을 줄이는 보조 축입니다.",
    ],
    keyPoints: [
      {
        title: "돈 수급과 장비 강화",
        body: "무기 강화 비용이 누적되므로, 반복 수급은 최종 파티뿐 아니라 강제 합류 캐릭터 준비에도 도움이 됩니다.",
      },
      {
        title: "교역 루트 관리",
        body: "마을별 시세 차이를 이용하는 교역은 이동 동선과 함께 묶어 진행하면 부담이 줄어듭니다.",
      },
      {
        title: "수집형 시설 활용",
        body: "요리, 낚시, 목장, 수호신상, 사운드·창 세트처럼 본거지 기록을 채우는 항목은 후반에 몰아서 정리하기 좋습니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "주사위 도박과 반복 전투 수급, 본거지 상점·대장간 정비가 중심입니다. 돈을 충분히 확보하면 무기 강화 부담이 줄어듭니다.",
        points: [
          "가스파 영입 후 본거지에서 주사위 도박을 이용할 수 있습니다.",
          "마르코의 동전 맞히기, 조르쥬의 기억력 미니게임처럼 개별 동료 시설이 반복 플레이 요소를 제공합니다.",
          "반복 수급은 대장간 강화 비용과 주요 장비 구입 비용을 보완합니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "교역소, 요리 대결, 낚시, 목장, 탐정 사무소, 지도 제작자 등 본거지 기능형 콘텐츠가 더 넓게 배치됩니다.",
        points: [
          "교역소와 지역별 시세 차이를 활용해 포치를 확보합니다.",
          "요리 대결, 낚시, 목장, 수호신상 조합 등 수집형 콘텐츠가 본거지 확장과 연결됩니다.",
          "탐정 사무소와 지도 제작자 기능은 반복 탐색과 영입 체크를 보조합니다.",
        ],
      },
    ],
    checklist: [
      "무기 강화 전 필요한 포치 확보",
      "교역은 마을 이동 동선과 함께 진행",
      "미니게임 보상과 수집 기록은 본거지 확장 후 재확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenITips,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenITips),
    eyebrow: "Gate Rune War",
    title: "Suikoden I Tips & Tricks",
    summary:
      "환상수호전 I 진행 중 놓치기 쉬운 동료, 초반 정비, 엔딩 조건과 반복 준비 항목을 정리합니다.",
    tags: ["초반 진행", "108성", "엔딩", "정비"],
    overview: [
      "1편은 스토리 진행 속도가 빠르고 일부 동료는 특정 시점에만 영입할 수 있어 지역 이동 전 확인이 중요합니다.",
      "개인 소지품과 제한된 장비 슬롯 때문에 보스전 전 회복 아이템과 방어구를 미리 분산해야 합니다.",
      "108성 전원 영입은 결말과 직접 연결되므로, 본거지 석판과 지역별 영입 조건을 꾸준히 확인합니다.",
    ],
    keyPoints: [
      {
        title: "본거지 확보 후 재방문",
        body: "토란 호수의 성을 얻은 뒤에는 이전 마을을 다시 돌며 새로 영입 가능한 동료와 상점 재고를 확인합니다.",
      },
      {
        title: "강제 일기토 준비",
        body: "판과 테오의 일기토처럼 특정 캐릭터의 육성이 필요한 구간은 무기 강화와 방어구 정비를 늦추지 않는 것이 안전합니다.",
      },
      {
        title: "엔딩 조건 관리",
        body: "최종 결전 전 108성 영입 현황을 확인하고, 사망 위험이 있는 전쟁 전투에서는 저장을 분리합니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "짧은 진행 안에 영입, 본거지 확장, 전쟁 전투가 빠르게 이어집니다. 놓친 동료가 없는지 마을 단위로 체크하는 편이 안정적입니다.",
        points: [
          "새 지역 진입 전 개인 소지품 여유를 확보합니다.",
          "본거지 석판으로 108성 현황을 자주 확인합니다.",
          "대규모 전투 전에는 저장 파일을 분리합니다.",
        ],
      },
    ],
    checklist: [
      "본거지 확보 후 이전 마을 재방문",
      "판 일기토 전 무기와 방어구 점검",
      "최종전 전 108성 현황 확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIGameplayMechanics,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIGameplayMechanics),
    eyebrow: "Gate Rune War",
    title: "Suikoden I Gameplay Mechanics",
    summary:
      "환상수호전 I의 전투, 문장, 진형, 합동 마법, 보호 행동과 상태 이상을 시스템 단위로 정리합니다.",
    tags: ["전투", "문장", "진형", "상태 이상"],
    overview: [
      "전투는 6인 파티와 전열·후열 배치, 무기 사거리의 영향을 크게 받습니다.",
      "문장 장착 폭이 좁아 캐릭터별 역할이 분명하며, 회복과 공격 문장을 누구에게 맡길지 미리 정하는 것이 좋습니다.",
      "합동 마법과 협력 공격은 특정 조합에서만 사용할 수 있으므로 주요 보스전 전 파티 구성을 확인합니다.",
    ],
    keyPoints: [
      {
        title: "무기 사거리",
        body: "짧은 사거리 캐릭터는 후열에서 공격할 수 없으므로 전열을 과하게 채우지 않도록 조정합니다.",
      },
      {
        title: "문장 사용 횟수",
        body: "문장 마법은 레벨별 사용 횟수로 관리되므로 던전 중반까지 고레벨 주문을 아껴둡니다.",
      },
      {
        title: "상태 이상 대비",
        body: "독, 침묵, 목감기처럼 행동을 막는 상태는 회복 아이템을 여러 캐릭터에게 분산해 대응합니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "1편은 개인 인벤토리와 제한된 문장 슬롯 때문에 전투 전 준비의 비중이 높습니다.",
        points: [
          "전열·후열 배치는 무기 사거리 기준으로 정합니다.",
          "회복 담당과 공격 문장 담당을 분리합니다.",
          "합동 마법은 특정 속성 문장 조합을 맞춰야 사용할 수 있습니다.",
        ],
      },
    ],
    checklist: [
      "짧은 사거리 캐릭터 전열 배치 확인",
      "회복 문장과 물약류 분산",
      "보스전 전 합동 마법 가능 조합 확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIDuels,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIDuels),
    eyebrow: "Gate Rune War",
    title: "Suikoden I Duels",
    summary:
      "환상수호전 I의 콴다 로스만, 테오 맥돌 관련 일기토 대사와 대응 흐름을 정리합니다.",
    tags: ["콴다", "테오", "판", "대사 판독"],
    overview: [
      "1편 일기토는 상대 대사를 읽고 공격, 방어, 필사의 공격을 고르는 구조입니다.",
      "콴다 로스만전은 대사 판독을 익히는 첫 본격 일기토입니다.",
      "테오 맥돌 관련 전투는 판의 생존과 연결되므로 사전 장비 준비가 중요합니다.",
    ],
    keyPoints: [
      {
        title: "강한 위협은 방어",
        body: "상대가 전력을 다하겠다고 말하거나 강한 일격을 예고하면 방어를 우선합니다.",
      },
      {
        title: "기다리는 대사는 공격",
        body: "상대가 오라고 하거나 방어를 굳히는 말투라면 공격으로 흐름을 가져갑니다.",
      },
      {
        title: "공격 예고에는 필사의 공격",
        body: "상대가 자신의 차례라고 선언하거나 직접 공격을 예고하면 필사의 공격으로 받아칩니다.",
      },
    ],
    duelRecords: GAMEPLAY_DUEL_RECORDS.filter((record) => record.game === "Suikoden I"),
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "콴다 로스만, 테오 맥돌과의 일기토가 핵심입니다. 판이 참가하는 전투는 미리 육성해 두는 것이 좋습니다.",
        points: [
          "콴다 로스만전은 판독 튜토리얼에 가깝습니다.",
          "판과 테오의 전투는 판의 생존과 연결됩니다.",
          "주인공과 테오의 전투는 후반부 핵심 장면입니다.",
        ],
      },
    ],
    checklist: [
      "판 무기 강화",
      "일기토 전 체력 확인",
      "위협 대사는 방어 우선",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIITips,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIITips),
    eyebrow: "Dunan Unification War",
    title: "Suikoden II Tips & Tricks",
    summary:
      "환상수호전 II의 엔딩 조건, 놓치기 쉬운 요소, 세이브 데이터 계승과 주요 분기를 정리합니다.",
    tags: ["엔딩", "분기", "세이브 계승", "수집"],
    overview: [
      "2편은 지역과 이벤트가 넓어져 놓치기 쉬운 영입 조건과 수집 요소를 따로 관리하는 편이 좋습니다.",
      "1편 세이브 데이터 계승은 일부 이벤트와 인물 관련 요소에 영향을 줍니다.",
      "카스미·발레리아 분기처럼 한 번 선택하면 동시에 얻기 어려운 항목은 진행 전 저장을 분리합니다.",
    ],
    keyPoints: [
      {
        title: "분기 전 저장",
        body: "캐릭터 선택이나 이벤트 분기가 있는 구간은 별도 저장을 남겨 두면 수집 확인이 쉽습니다.",
      },
      {
        title: "본거지 기능 활용",
        body: "탐정 사무소, 지도 제작자, 도서관은 영입과 탐색 체크를 보조합니다.",
      },
      {
        title: "엔딩 조건 점검",
        body: "후반 돌입 전 108성 영입 현황과 중요한 캐릭터 생존 조건을 확인합니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden II",
        body: "2편은 스토리 분기와 본거지 확장, 미니게임이 넓게 얽혀 있어 체크리스트 기반 진행이 안정적입니다.",
        points: [
          "분기 이벤트 전 저장 파일을 분리합니다.",
          "수호신상 조합과 목장·요리·낚시 같은 수집형 콘텐츠를 후반에 재확인합니다.",
          "1편 데이터 계승 여부를 초반부터 확인합니다.",
        ],
      },
    ],
    checklist: [
      "분기 이벤트 전 저장",
      "본거지 탐정 사무소 조사 활용",
      "후반 돌입 전 108성 확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIIGameplayMechanics,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIGameplayMechanics),
    eyebrow: "Dunan Unification War",
    title: "Suikoden II Gameplay Mechanics",
    summary:
      "환상수호전 II의 봉인구 장착, 문장 레벨, 전쟁 전투, 무기 사거리, 상태 이상과 이동 편의를 정리합니다.",
    tags: ["봉인구", "전쟁 전투", "무기 사거리", "빠른 이동"],
    overview: [
      "2편은 문장 슬롯과 협력 공격 폭이 넓어져 캐릭터별 역할 조합이 훨씬 다양해집니다.",
      "전쟁 전투는 격자 지도와 부대 편성을 사용하므로 일반 전투와 별도의 준비가 필요합니다.",
      "빠른 이동, 본거지 파티 변경, 창고와 문장사 활용이 반복 플레이 부담을 줄입니다.",
    ],
    keyPoints: [
      {
        title: "문장 슬롯 조합",
        body: "물리 캐릭터는 연타·반격·분노 계열, 마법 캐릭터는 속성·회복 문장을 조합해 역할을 분명히 합니다.",
      },
      {
        title: "전쟁 부대 편성",
        body: "궁병, 마법, 회복, 기병처럼 역할이 다른 부대를 함께 배치해 장거리 견제와 생존을 확보합니다.",
      },
      {
        title: "이동과 정비",
        body: "본거지 시설과 빠른 이동 기능을 이용해 장비, 문장, 아이템 정리를 한 번에 처리합니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden II",
        body: "전투 시스템은 1편의 구조를 유지하면서 문장 슬롯, 협력 공격, 전쟁 전투와 편의 기능이 확장됩니다.",
        points: [
          "문장 장착 폭이 넓어져 역할 조합이 다양합니다.",
          "전쟁 전투는 부대별 역할과 지형을 함께 봅니다.",
          "본거지 시설이 늘어나 정비 동선이 중요해집니다.",
        ],
      },
    ],
    checklist: [
      "문장 슬롯별 역할 확인",
      "전쟁 전투 전 장거리·회복 부대 확인",
      "던전 전 창고와 문장사 정비",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIIFacilitiesMinigames,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIFacilitiesMinigames),
    eyebrow: "Dunan Unification War",
    title: "Suikoden II Facilities & Minigames",
    summary:
      "환상수호전 II의 본거지 시설, 교역소, 목장, 지도 제작자, 음악가, 탐정 사무소와 주요 미니게임을 정리합니다.",
    tags: ["본거지", "교역", "요리", "미니게임"],
    overview: [
      "노스윈도우 본거지는 성 레벨과 동료 영입에 따라 시설이 단계적으로 늘어납니다.",
      "교역소, 목장, 요리, 낚시, 주사위 도박은 수집과 포치 수급을 보조합니다.",
      "지도 제작자, 음악가, 탐정 사무소는 탐색 편의와 기록 수집에 연결됩니다.",
    ],
    keyPoints: [
      {
        title: "성 레벨 재확인",
        body: "동료 수가 늘어난 뒤에는 새 방과 시설이 열렸는지 본거지를 다시 둘러봅니다.",
      },
      {
        title: "수집형 시설",
        body: "목장, 요리, 낚시, 수호신상은 진행 중 놓치기 쉬우므로 후반에 한 번 더 정리합니다.",
      },
      {
        title: "수호신상 조합법",
        body: "수호신상 설계도 조합은 머리·몸통·다리·꼬리 순서로 봅니다. D는 용, R은 토끼, T는 거북, U는 유니콘을 뜻하므로 UTTT라면 머리 유니콘, 몸통 거북, 다리 거북, 꼬리 거북 조합입니다.",
      },
      {
        title: "조사와 편의",
        body: "탐정 사무소와 지도 제작자는 영입 단서, 탐색 범위, 지역 확인에 도움을 줍니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden II",
        body: "본거지 시설과 미니게임은 전투 필수 요소는 아니지만 수집, 정비, 반복 수급의 중심입니다.",
        points: [
          "교역소는 지역 시세 차이로 포치를 확보합니다.",
          "요리 대결과 낚시는 수집형 콘텐츠와 연결됩니다.",
          "수호신상 설계도는 용·토끼·거북·유니콘 부위를 머리·몸통·다리·꼬리 순서로 조합합니다.",
          "탐정 사무소는 영입과 인물 정보 확인에 유용합니다.",
        ],
      },
    ],
    checklist: [
      "성 레벨 상승 후 시설 재확인",
      "교역품 시세 확인",
      "수호신상 설계도 부위와 조합 코드 확인",
      "요리·낚시·목장 수집 상태 확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.haiYoCookOff,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
    eyebrow: "Dunan Unification War",
    title: "하이요 이벤트",
    summary:
      "하이요 영입 뒤 본거지 식당에서 이어지는 요리 대결 연속 이벤트와 레시피 보상 흐름을 정리합니다.",
    tags: ["하이요", "식당", "요리 대결", "레시피"],
    overview: [
      "하이요 이벤트는 환상수호전 II의 본거지 식당을 중심으로 진행되는 외전격 연속 이벤트입니다.",
      "하이요를 영입하면 식당이 열리고, 이후 도전 요리사들이 찾아오며 요리 대결이 진행됩니다.",
      "대결 보상은 레시피와 수집 기록으로 이어지므로, 본거지 시설과 아이템 목록을 함께 확인하는 편이 좋습니다.",
    ],
    keyPoints: [
      {
        title: "식당 개방",
        body: "성 레벨 2 이후 본거지 주방에서 하이요에게 말을 걸면 동료가 되고, 식당 기능이 열립니다.",
      },
      {
        title: "요리 대결 진행",
        body: "도전 요리사가 찾아오면 정해진 요리 대결을 진행합니다. 승리 횟수에 따라 레시피 보상이 이어집니다.",
      },
      {
        title: "레시피 수집",
        body: "레시피 아이템은 요리 대결 보상과 지역 획득처가 섞여 있으므로, 아이템 상세의 입수처를 함께 확인합니다.",
      },
    ],
    cookingContestRecords: GAMEPLAY_HAIYO_COOKING_CONTEST_RECORDS,
    recipeRecords: GAMEPLAY_SUIKODEN_II_RECIPE_RECORDS,
    restaurantTips: GAMEPLAY_HAIYO_RESTAURANT_TIPS,
    seriesNotes: [
      {
        game: "Suikoden II",
        body: "하이요 이벤트는 전투 진행 필수 요소는 아니지만, 본거지 생활감과 레시피 수집을 대표하는 연속 이벤트입니다.",
        points: [
          "하이요 영입 후 식당과 요리 대결을 이용할 수 있습니다.",
          "요리 대결 보상은 여러 레시피 아이템의 기타 입수처로 기록됩니다.",
          "농장, 목장, 낚시처럼 식재료 수급 시설과 함께 관리하면 수집 흐름이 자연스럽습니다.",
        ],
      },
    ],
    checklist: [
      "성 레벨 2 이후 하이요 영입",
      "본거지 식당 개방 확인",
      "요리 대결 승리 보상 레시피 확인",
      "레시피 아이템 상세에서 입수처 재확인",
    ],
  },
  {
    id: GAMEPLAY_DETAIL_IDS.suikodenIIDuels,
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIDuels),
    eyebrow: "Dunan Unification War",
    title: "Suikoden II Duels",
    summary:
      "환상수호전 II의 플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드 일기토 대사와 대응을 정리합니다.",
    tags: ["플릭", "아마다", "루카", "죠우이"],
    overview: [
      "2편 일기토는 튜토리얼 성격의 플릭전부터 후반 핵심 전투까지 여러 번 등장합니다.",
      "루카 브라이트전과 한 커닝엄전은 대사 판독과 체력 관리가 특히 중요합니다.",
      "죠우이 아트레이드전은 엔딩 분기와 연결되므로 목표 결말에 맞춰 행동을 조절합니다.",
    ],
    keyPoints: [
      {
        title: "대사 반복 기억",
        body: "상대별 표현이 반복되므로 공격, 방어, 필사의 공격으로 이어지는 대표 문장을 외워두면 안정적입니다.",
      },
      {
        title: "루카전 방어",
        body: "강한 위협과 광기 어린 대사는 필사의 공격 가능성이 높으므로 방어를 우선합니다.",
      },
      {
        title: "죠우이전 목표 확인",
        body: "특정 엔딩을 노릴 때는 무리한 공격보다 방어와 대기 흐름을 유지하는 것이 중요합니다.",
      },
    ],
    duelRecords: GAMEPLAY_DUEL_RECORDS.filter((record) => record.game === "Suikoden II"),
    seriesNotes: [
      {
        game: "Suikoden II",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드전이 핵심 일기토입니다.",
        points: [
          "플릭전은 일기토 튜토리얼 성격이 강합니다.",
          "아마다전은 영입 과정과 연결됩니다.",
          "루카, 한, 죠우이전은 후반 스토리의 핵심 전투입니다.",
        ],
      },
    ],
    checklist: [
      "상대별 대사 패턴 확인",
      "루카전 전 체력 유지",
      "죠우이전 전 목표 엔딩 확인",
    ],
  },
] as const satisfies readonly GameplayDetailRecord[];

const GAMEPLAY_DETAIL_ALIASES = {
  [GAMEPLAY_LEGACY_DETAIL_IDS.armyBattle]: GAMEPLAY_DETAIL_IDS.warBattle,
} as const;

const resolveGameplayDetailId = (guideId: string) => {
  return (
    GAMEPLAY_DETAIL_ALIASES[guideId as keyof typeof GAMEPLAY_DETAIL_ALIASES] ??
    guideId
  );
};

export const getGameplayDetailRecord = (
  guideId: string,
): GameplayDetailRecord | null => {
  const resolvedGuideId = resolveGameplayDetailId(guideId);

  return (
    GAMEPLAY_DETAIL_RECORDS.find((record) => record.id === resolvedGuideId) ??
    null
  );
};

export const getGameplayDetailStaticParams = () => {
  return [
    ...GAMEPLAY_DETAIL_RECORDS.map((record) => ({
      guide: record.id,
    })),
    ...Object.keys(GAMEPLAY_DETAIL_ALIASES).map((guide) => ({
      guide,
    })),
  ];
};

export const GAMEPLAY_BATTLE_SECTIONS = [
  {
    title: "파티 편성",
    body: "최대 6명의 전투 멤버를 전열과 후열에 배치합니다. 무기 사거리와 방어 역할을 함께 맞추면 초반 난도가 안정됩니다.",
    points: ["전열", "후열", "무기 사거리", "보호"],
  },
  {
    title: "행동 선택",
    body: "공격, 방어, 문장 마법, 아이템, 협력 공격을 전황에 맞춰 고르는 기본 전투 흐름입니다.",
    points: ["공격", "방어", "문장 마법", "협력 공격"],
  },
  {
    title: "상태와 성장",
    body: "상태 이상, 장비 교체, 무기 레벨, 문장 슬롯이 전투 지속력과 화력에 직접 연결됩니다.",
    points: ["상태 이상", "장비", "무기 레벨", "문장 슬롯"],
  },
] as const;

export const GAMEPLAY_DUEL_SECTIONS = [
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.duel),
    title: "대사 판독",
    body: "일기토는 상대 대사의 뉘앙스를 보고 공격, 방어, 필사의 공격을 고르는 방식입니다. 강한 위협은 방어, 빈틈을 보이는 대사는 공격 기회로 봅니다.",
    points: ["공격", "방어", "필사의 공격", "대사 패턴"],
  },
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.duel),
    title: "주요 일기토",
    body: "1편은 콴다 로스먼과 테오 맥돌, 2편은 플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드가 핵심 일기토입니다.",
    points: ["콴다", "테오", "루카", "죠우이"],
  },
] as const;

export const GAMEPLAY_WAR_BATTLE_SECTIONS = [
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.warBattle),
    title: "1편 전쟁 전투",
    body: "트란 해방전쟁의 전쟁 전투는 명령 선택, 병과 상성, 군사 역할을 중심으로 전황을 읽습니다.",
    points: ["명령", "병과", "군사", "전황"],
  },
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.warBattle),
    title: "2편 전쟁 전투",
    body: "듀난 통일전쟁의 전쟁 전투는 부대 편성, 진형, 지형, 이벤트 조건을 함께 관리하는 전략 전투입니다.",
    points: ["부대 편성", "진형", "지형", "이벤트"],
  },
] as const;

export const GAMEPLAY_HEADQUARTERS_SECTIONS = [
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.headquarters),
    title: "시설 개방",
    body: "동료 영입에 따라 상점, 창고, 대장간, 감정소, 목욕탕, 도서관 등 본거지 기능이 단계적으로 열립니다.",
    points: ["상점", "창고", "대장간", "도서관"],
  },
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.headquarters),
    title: "반복 플레이",
    body: "교역, 낚시, 요리, 주사위 도박, 탐정 사무소와 같은 시설은 수집과 반복 수급을 보조합니다.",
    points: ["교역", "낚시", "요리", "주사위 도박"],
  },
  {
    href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
    title: "하이요 이벤트",
    body: "하이요 합류 뒤 식당에서 진행되는 요리 대결 연속 이벤트입니다. 레시피, 상대 요리사, 보상 흐름을 따로 확인합니다.",
    points: ["하이요", "요리 대결", "레시피", "식당"],
  },
] as const;

export const GAMEPLAY_GUIDE_GROUPS = [
  {
    game: "Suikoden I",
    eyebrow: "Gate Rune War",
    groups: [
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenITips),
        title: "Tips & Tricks",
        body: "초반 진행, 파티 구성, 베스트 문장, 하드 모드, 엔딩과 놓치기 쉬운 지점을 함께 확인합니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIGameplayMechanics),
        title: "Gameplay Mechanics",
        body: "문장 장착과 성장, 전투 이탈, 파티·진형 변경, 합동 마법, 보호 행동, 상태 이상을 묶어 봅니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIDuels),
        title: "Duels",
        body: "콴다 로스먼, 테오 맥돌 1차전과 2차전이 대표 일기토로 분리되어 있습니다.",
      },
    ],
  },
  {
    game: "Suikoden II",
    eyebrow: "Dunan Unification War",
    groups: [
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIITips),
        title: "Tips & Tricks",
        body: "엔딩, 놓치기 쉬운 요소, 수호신상 조합, 세이브 데이터 계승, 카스미·발레리아 분기 등을 함께 관리합니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIGameplayMechanics),
        title: "Gameplay Mechanics",
        body: "봉인구 장착, 문장 레벨, 전쟁 전투, 무기 사거리, 상태 이상, 빠른 이동과 파티 변경을 정리합니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIFacilitiesMinigames),
        title: "Facilities & Minigames",
        body: "교역소, 목장, 지도 제작자, 음악가, 탐정 사무소, 요리·낚시·주사위 도박 같은 시설과 미니게임 항목입니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.haiYoCookOff),
        title: "Hai Yo Cook-Off",
        body: "하이요 영입 뒤 본거지 식당에서 이어지는 요리 대결, 레시피 보상, 수집 흐름을 따로 정리합니다.",
      },
      {
        href: buildGameplayDetailPath(GAMEPLAY_DETAIL_IDS.suikodenIIDuels),
        title: "Duels",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 죠우이 아트레이드 일기토가 별도 항목으로 분리되어 있습니다.",
      },
    ],
  },
] as const;

export const TIMELINE_COPY = {
  eyebrow: "Timeline",
  title: "Historical Timeline",
  body: "환상수호전 I 이전의 국가 형성기부터 듀난 공화국 탄생까지, 태양력 기준으로 세계관의 흐름을 정리합니다.",
  worldTitle: "World Setting",
  warTitle: "Major Wars",
  loreTitle: "World Lore",
  chronologyTitle: "Chronicle Notes",
} as const;

export const TIMELINE_WORLD_SECTIONS = [
  {
    title: "하르모니아와 문장의 분열",
    body: "북방 대륙의 정치 질서는 하르모니아의 영향권에서 출발합니다. 문장의 일족, 문의 문장, 소울이터의 행방은 이후 트란과 듀난 전쟁의 배경으로 이어집니다.",
    tags: ["Harmonia", "Gate Rune", "Soul Eater"],
  },
  {
    title: "적월제국과 트란",
    body: "적월제국은 하르모니아에서 독립해 성장한 국가이며, 황가의 패왕의 문장과 제국 장군들의 군사력이 트란 지역 질서를 지탱합니다.",
    tags: ["Scarlet Moon Empire", "Sovereign Rune", "Toran"],
  },
  {
    title: "듀난 군주국의 해체와 도시동맹",
    body: "듀난 지역은 남창을 중심으로 한 군주국에서 출발했지만, 하이랜드의 성장과 도시들의 독립으로 쪼개집니다. 뮤즈, 사우스 윈도우, 투 리버, 마틸다 기사단은 이후 죠스턴 도시동맹을 이룹니다.",
    tags: ["Dunan Monarchy", "Jowston", "Highland Kingdom"],
  },
  {
    title: "시작의 문장과 듀난 전쟁",
    body: "겐카쿠와 한 커닝엄의 과거, 리오우와 죠우이에게 나뉜 시작의 문장, 루카 브라이트의 전쟁 도발이 듀난 통일전쟁의 핵심 축입니다.",
    tags: ["Rune of Beginning", "New State Army", "Dunan Republic"],
  },
] as const;

export const TIMELINE_WAR_SECTIONS = [
  {
    title: "하르모니아 내전",
    body: "하르모니아의 내부 혼란은 적월제국 독립의 배경이 됩니다. 크라나흐 루그너가 옛 수도 그렉민스터를 중심으로 세력을 세우면서 트란 지역의 새 질서가 시작됩니다.",
    tags: ["Harmonia", "Scarlet Moon Empire", "Gregminster"],
  },
  {
    title: "듀난 군주국 내전",
    body: "듀난 군주국의 반란과 하이랜드의 개입은 사우스 윈도우 독립으로 이어집니다. 이 내전 이후 듀난 지역은 군주국 중심 질서에서 도시국가 연합의 시대로 이동합니다.",
    tags: ["Dunan Monarchy", "South Window", "Highland Kingdom"],
  },
  {
    title: "하이랜드-죠스턴 전쟁",
    body: "하이랜드와 죠스턴 도시동맹의 충돌은 겐카쿠와 한 커닝엄의 전장 기록으로 이어집니다. 시작의 문장이 두 사람에게 나뉜 과거도 이 전쟁사의 핵심입니다.",
    tags: ["Highland Kingdom", "Jowston", "Rune of Beginning"],
  },
  {
    title: "적월제국 계승 전쟁",
    body: "루그너 황가 내부의 권력 다툼은 바르바로사 즉위와 제국 장군 체제의 재편으로 이어집니다. 훗날 트란 해방전쟁에서 맞붙는 제국 권력의 전사를 이해하는 배경입니다.",
    tags: ["Scarlet Moon Empire", "Barbarossa", "Six Great Generals"],
  },
  {
    title: "문의 문장 전쟁",
    body: "오뎃사 실버버그의 트란 해방군 결성과 주인공의 소울이터 계승으로 본격화되는 환상수호전 I의 중심 전쟁입니다. 적월제국 붕괴와 트란 공화국 성립으로 마무리됩니다.",
    tags: ["Gate Rune War", "Liberation Army", "Toran Republic"],
  },
  {
    title: "듀난 통일전쟁",
    body: "루카 브라이트의 전쟁 도발과 유니콘 소년병 부대 학살로 시작되는 환상수호전 II의 중심 전쟁입니다. 하이랜드 왕국과 죠스턴 도시동맹의 붕괴 뒤 듀난 공화국이 탄생합니다.",
    tags: ["Dunan Unification War", "New State Army", "Dunan Republic"],
  },
] as const;

export const TIMELINE_LORE_SECTIONS = [
  {
    title: "종족과 공동체",
    body: "인간 국가 바깥에는 엘프, 드워프, 코볼트, 윙 호드처럼 독자적인 생활권과 문화를 가진 종족 공동체가 함께 존재합니다. 투 리버처럼 여러 종족이 한 도시 안에서 공존하는 지역도 있습니다.",
    tags: ["엘프", "드워프", "코볼트", "윙 호드"],
  },
  {
    title: "문장학과 마법 체계",
    body: "문장은 마법, 무기 속성, 국가 권력, 개인의 운명을 함께 설명하는 핵심 체계입니다. 진정한 문장과 일반 문장, 봉인구와 문장 조각은 전쟁과 일상 양쪽에 영향을 줍니다.",
    tags: ["진정한 문장", "봉인구", "문장 조각", "문장술"],
  },
  {
    title: "학문과 기록",
    body: "군학, 의학, 지도 제작, 탐정술, 문헌 기록처럼 지식과 기록을 다루는 분야가 본거지 운영과 전쟁 지휘를 뒷받침합니다. 맷슈의 군략과 본거지 도서관은 이런 학문적 기반을 보여줍니다.",
    tags: ["군학", "의학", "지도 제작", "도서관"],
  },
  {
    title: "기술과 장인 문화",
    body: "대장간, 기계 장치, 엘리베이터, 배와 수송 기술은 국가의 군사력과 생활 편의를 함께 끌어올립니다. 무기 강화와 장비 제작은 동료 성장의 중요한 축이 됩니다.",
    tags: ["대장간", "기계 장치", "무기 강화", "수송"],
  },
  {
    title: "종교와 의례",
    body: "신전, 사제, 수호신상, 108성의 운명론은 각 지역의 신앙과 의례를 보여줍니다. 문장은 신앙, 전설, 권력의 상징으로도 다뤄집니다.",
    tags: ["신전", "사제", "수호신상", "108성"],
  },
  {
    title: "경제와 생활권",
    body: "상점, 교역소, 광산, 농장, 목장, 식당과 낚시는 전쟁 뒤편의 생활 기반입니다. 본거지는 이런 시설을 흡수하면서 단순한 군사 거점에서 작은 도시로 확장됩니다.",
    tags: ["상점", "교역소", "광산", "식당"],
  },
] as const;

export const TIMELINE_CHRONICLE_NOTES = [
  {
    date: "태양력 약 70년",
    title: "문장의 일족 학살과 문의 문장 분리",
    body: "하르모니아가 문장의 일족을 공격하고, 레크나트와 윈디가 문의 문장을 나누어 가지고 도주합니다. 훗날 문장 계보와 윈디의 집착을 설명하는 출발점입니다.",
  },
  {
    date: "태양력 78",
    title: "네크로드, 달의 문장을 탈취",
    body: "네크로드가 푸른 달 마을에서 달의 문장을 훔쳐 달아납니다. 노스윈도우의 비극과 빅토르의 서사로 이어지는 오래된 사건입니다.",
  },
  {
    date: "태양력 110",
    title: "듀난 군주국 성립",
    body: "사우스 윈도우를 수도로 듀난 군주국이 세워지고, 베르난드가 초대 군주가 됩니다. 훗날 도시동맹과 하이랜드로 갈라지는 듀난 지역사의 원형입니다.",
  },
  {
    date: "태양력 약 150년",
    title: "숨겨진 문장의 마을 습격",
    body: "윈디가 소울이터를 노리고 숨겨진 문장의 마을을 습격합니다. 테드는 할아버지에게서 생과 사의 문장, 곧 소울이터를 넘겨받고 긴 도피를 시작합니다.",
  },
  {
    date: "태양력 185",
    title: "뮤즈 시의 시장제 확립",
    body: "뮤즈가 시장제를 기반으로 성장합니다. 훗날 죠스턴 도시동맹의 중심 도시가 되는 정치적 토대입니다.",
  },
  {
    date: "태양력 230",
    title: "적월제국 독립",
    body: "하르모니아 내전의 틈을 타 적월제국이 독립합니다. 크라나흐 루그너가 초대 황제가 되고, 패왕의 문장이 루그너 황가의 상징이 됩니다.",
  },
  {
    date: "태양력 237",
    title: "하이랜드 왕국 성립",
    body: "마로우 블라이트가 하르모니아 내 반란 진압의 공으로 땅과 야수의 문장을 하사받고 하이랜드 왕국을 세웁니다.",
  },
  {
    date: "태양력 252",
    title: "듀난 군주국 내전과 사우스 윈도우 독립",
    body: "듀난 군주국에서 반란이 일어나고 하이랜드가 동부 사우스 윈도우를 침공합니다. 반란 세력이 승리하면서 사우스 윈도우는 시장제를 갖춘 도시국가로 재편됩니다.",
  },
  {
    date: "태양력 280",
    title: "마틸다 기사단 성립",
    body: "뮤즈의 지원을 받아 하이랜드를 견제할 지역 기사단이 조직됩니다. 이것이 훗날 마틸다 기사단국으로 성장합니다.",
  },
  {
    date: "태양력 314",
    title: "죠스턴 도시동맹 성립",
    body: "뮤즈, 사우스 윈도우, 투 리버, 마틸다 기사단국을 중심으로 죠스턴 도시동맹이 세워집니다.",
  },
  {
    date: "태양력 428",
    title: "하이랜드의 도시동맹 침공",
    body: "로버트 블라이트 왕과 한 커닝엄 장군이 도시동맹을 침공합니다. 겐카쿠가 잔존 병력을 이끌고 저항하며, 겐카쿠와 한은 시작의 문장의 두 조각을 지닙니다.",
  },
  {
    date: "태양력 434",
    title: "겐카쿠와 한의 결투",
    body: "휴전 협정 과정에서 겐카쿠와 한 커닝엄이 영토 분쟁을 결투로 해결합니다. 패배한 겐카쿠는 도시동맹에서 추방됩니다.",
  },
  {
    date: "태양력 443",
    title: "하이랜드 왕실 습격 사건",
    body: "뮤즈 회담에서 돌아오던 하이랜드 왕실 행렬이 습격당하고, 사라 왕비와 루카 왕자가 포로가 됩니다. 루카 브라이트의 뒤틀린 증오를 설명하는 사건입니다.",
  },
  {
    date: "태양력 448",
    title: "칼레카 사건",
    body: "레온 실버버그가 칼레카 마을 학살을 조작해 죠스턴과의 전쟁 여론을 자극합니다. 이 사건 뒤 맷슈 실버버그가 제국군을 떠납니다.",
  },
  {
    date: "태양력 453",
    title: "트란 해방군 결성",
    body: "오뎃사 실버버그가 트란 해방군을 조직하며 문의 문장 전쟁이 시작됩니다. 훗날 주인공은 소울이터의 계승자가 됩니다.",
  },
  {
    date: "태양력 455",
    title: "소울이터 계승과 오뎃사의 죽음",
    body: "테드에게서 소울이터를 넘겨받은 주인공은 레난캄프 본부 습격으로 오뎃사를 잃고, 맷슈의 지원 아래 해방군의 중심에 섭니다.",
  },
  {
    date: "태양력 456",
    title: "도시동맹군의 제국 북부 점령",
    body: "맷슈 실버버그의 전략에 따라 틴토와 사우스 윈도우의 병력이 적월제국 북부를 점령합니다.",
  },
  {
    date: "태양력 457",
    title: "적월제국 붕괴와 트란 공화국 성립",
    body: "해방군이 적월제국을 무너뜨리고, 레판토가 트란 공화국의 초대 대통령으로 임명됩니다.",
  },
  {
    date: "태양력 458",
    title: "트란 북부 수복과 하이랜드의 국경 활동",
    body: "트란 공화국이 북부 지역 수복을 시작합니다. 겐카쿠 사망 이후 하이랜드는 국경에서 다시 활동을 강화합니다.",
  },
  {
    date: "태양력 460",
    title: "듀난 통일전쟁 발발",
    body: "루카 브라이트가 유니콘 소년병 부대를 학살하고 이를 죠스턴의 공격으로 위장하면서 전쟁이 재개됩니다. 리오우와 죠우이는 시작의 문장의 두 조각을 지니게 됩니다.",
  },
  {
    date: "태양력 460",
    title: "하이랜드 왕국 붕괴와 듀난 공화국 탄생",
    body: "신동맹군이 하이랜드 수도 루루노이에를 함락하고, 하이랜드 왕국과 죠스턴 도시동맹의 폐허 위에 듀난 공화국이 세워집니다.",
  },
  {
    date: "태양력 461",
    title: "듀난 공화국 공식 선거",
    body: "듀난 공화국은 국가 기반을 정비한 뒤 공식 선거를 치르고, 테레즈 와이즈메일이 초대 대통령으로 선출됩니다.",
  },
] as const;
