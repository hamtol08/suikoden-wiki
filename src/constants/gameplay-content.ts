import { buildGameplayDetailPath } from "@/constants/app-config";

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
  facilityLabel: "Facilities",
  facilityLocationLabel: "위치",
  facilityUnlockLabel: "개방",
  checklistLabel: "Archive Checklist",
} as const;

export const GAMEPLAY_TABS = [
  {
    href: "#system-overview",
    label: "System Overview",
  },
  {
    href: "#battle",
    label: "Battle",
  },
  {
    href: "#duel",
    label: "Duel",
  },
  {
    href: "#war-battle",
    label: "War Battle",
  },
  {
    href: "#headquarters",
    label: "Headquarters",
  },
  {
    href: "#guide-index",
    label: "Guide Index",
  },
] as const;

export const GAMEPLAY_SYSTEMS = [
  {
    id: "battle-basics",
    href: buildGameplayDetailPath("battle-basics"),
    title: "일반 전투",
    body: "6인 파티 편성, 전열·후열, 무기 사거리, 방어와 보호 행동을 함께 관리하는 기본 전투입니다.",
    points: ["파티 편성", "무기 사거리", "상태 이상", "장비 교체"],
  },
  {
    id: "rune-system",
    href: buildGameplayDetailPath("rune-system"),
    title: "문장 운용",
    body: "문장 장착, 봉인구, 레벨별 마법 사용 횟수와 속성 상성을 함께 보는 성장 축입니다.",
    points: ["문장 장착", "마법 레벨", "속성 문장", "고유 문장"],
  },
  {
    id: "duel",
    href: buildGameplayDetailPath("duel"),
    title: "일기토",
    body: "대사의 뉘앙스를 읽고 공격·방어·필살을 고르는 1:1 전투입니다. 두 작품 모두 전용 가이드와 대사 패턴이 따로 정리되어 있습니다.",
    points: ["공격", "방어", "필살", "대사 판독"],
  },
  {
    id: "army-battle",
    href: buildGameplayDetailPath("army-battle"),
    title: "전쟁 전투",
    body: "부대 단위로 전황을 읽는 대규모 전투입니다. 1편은 명령과 병과 역할, 2편은 부대 편성과 진형 관리가 중요합니다.",
    points: ["부대 역할", "전황 판독", "진형", "전쟁 이벤트"],
  },
  {
    id: "headquarters",
    href: buildGameplayDetailPath("headquarters"),
    title: "본거지 시설",
    body: "상점, 창고, 대장간, 감정소, 목욕탕, 도서관 등 동료 영입에 따라 열리는 시설 기록입니다.",
    points: ["시설 개방", "상점", "창고", "대장간"],
  },
  {
    id: "repeatable-play",
    href: buildGameplayDetailPath("repeatable-play"),
    title: "미니게임과 반복 수급",
    body: "돈·경험치 수급, 교역, 낚시, 친치로린, 요리 등 반복 플레이에서 확인할 항목을 모읍니다.",
    points: ["돈 벌기", "경험치", "교역", "미니게임"],
  },
] as const;

export type GameplaySystemId = (typeof GAMEPLAY_SYSTEMS)[number]["id"];

export type GameplayDetailRecord = {
  id: GameplaySystemId;
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
  seriesNotes: readonly {
    game: string;
    body: string;
    points?: readonly string[];
    facilities?: readonly {
      name: string;
      location: string;
      unlock: string;
      body: string;
    }[];
  }[];
  checklist: readonly string[];
};

export const GAMEPLAY_DETAIL_RECORDS = [
  {
    id: "battle-basics",
    href: buildGameplayDetailPath("battle-basics"),
    eyebrow: "Battle",
    title: "일반 전투",
    summary:
      "일반 전투는 6인 파티, 전열·후열, 무기 사거리, 문장 마법, 협력 공격을 한 화면에서 조율하는 기본 전투 체계입니다.",
    tags: ["6인 파티", "전열·후열", "무기 사거리", "협력 공격"],
    overview: [
      "두 작품 모두 전투는 턴 시작 전에 행동을 지정하고, 속도와 상태에 따라 순차적으로 처리되는 방식입니다.",
      "전열은 근거리 무기와 방어 역할을 맡기 쉽고, 후열은 중·장거리 무기와 마법 운용 캐릭터가 안정적으로 자리 잡습니다.",
      "HD Remaster에서는 전투 속도와 자동 전투 편의 기능이 보강되어 반복 전투의 부담이 줄어듭니다.",
    ],
    keyPoints: [
      {
        title: "사거리 기준으로 배치",
        body: "S 사거리 캐릭터는 전열 중심으로, M·L 사거리 캐릭터는 후열에서도 공격 가능한지 먼저 확인합니다.",
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
          "전열·후열과 무기 사거리의 영향이 커서 S 사거리 캐릭터는 배치 제약을 받습니다.",
          "개인 소지품 중심이라 회복 아이템을 누구에게 들려줄지 미리 정해야 합니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "파티 운용 폭이 넓어지고 협력 공격과 문장 슬롯 활용도가 커집니다. 후반에는 역할별 전문 파티를 구성하기 좋습니다.",
        points: [
          "6인 파티 구조는 유지되지만 문장 슬롯과 협력 공격 활용 폭이 넓어집니다.",
          "전투 속도, 자동 전투, 대시 등 HD Remaster 편의 기능과 함께 반복 전투 부담이 줄어듭니다.",
          "후반 캐릭터 풀이 넓어져 물리 화력, 회복, 마법, 협력 공격 중심 파티를 따로 구성하기 쉽습니다.",
        ],
      },
    ],
    checklist: [
      "전열에 S 사거리 캐릭터를 과하게 몰아넣지 않았는지 확인",
      "보스전 전 개인 소지품에 회복·상태 회복 아이템 배분",
      "무기 레벨과 방어구가 현재 지역 난도에 맞는지 점검",
    ],
  },
  {
    id: "rune-system",
    href: buildGameplayDetailPath("rune-system"),
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
        body: "마법은 MP가 아니라 레벨별 사용 횟수로 관리됩니다. 던전 중반까지는 저레벨 주문과 일반 공격을 섞는 편이 안정적입니다.",
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
          "문장 상점과 본거지 문장사는 Jeane 영입 이후 정비 동선의 핵심이 됩니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "캐릭터별 문장 슬롯이 확장되며 물리 강화와 속성 마법을 조합하는 폭이 넓어집니다.",
        points: [
          "문장 슬롯이 늘어난 캐릭터는 물리 강화 문장과 속성 문장을 병행할 수 있습니다.",
          "문장 장착은 마을 문장사와 본거지 Rune Master를 통해 관리합니다.",
          "제거한 문장은 봉인구로 돌아가므로 후반 조합을 바꿔가며 운용하기 좋습니다.",
        ],
      },
    ],
    checklist: [
      "회복 담당에게 물·흐르는 문장 계열 확보",
      "보스전 전 공격 문장 사용 횟수 보존",
      "고정 문장이 있는 캐릭터는 남은 슬롯 기준으로 역할 보완",
    ],
  },
  {
    id: "duel",
    href: buildGameplayDetailPath("duel"),
    eyebrow: "Duel",
    title: "일기토",
    summary:
      "일기토는 상대 대사를 읽고 공격·방어·필살의 상성을 맞추는 1:1 전투입니다.",
    tags: ["대사 판독", "공격", "방어", "필살"],
    overview: [
      "일기토는 일반 전투와 달리 선택지가 제한되어 있으며, 상대의 대사가 다음 행동을 암시합니다.",
      "기본 상성은 공격이 방어에 강하고, 방어는 필살을 받아내며, 필살은 공격을 이기는 구조로 정리됩니다.",
      "일부 일기토는 패배 시 게임오버 또는 캐릭터 생존과 연결되므로 전투 전 장비와 레벨을 점검해야 합니다.",
    ],
    keyPoints: [
      {
        title: "대사 톤 읽기",
        body: "상대가 강하게 몰아붙이는 말투면 필살 가능성을, 자세를 낮추거나 기다리는 말투면 방어 가능성을 우선 의심합니다.",
      },
      {
        title: "위험한 턴은 방어",
        body: "대사 판단이 애매하고 체력이 낮다면 방어가 가장 손실을 줄이는 선택입니다.",
      },
      {
        title: "고정 이벤트 준비",
        body: "테오, 콴다, 플릭, 루카, 한, 조이처럼 주요 일기토 전에는 장비와 무기 강화를 미리 마칩니다.",
      },
    ],
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "콴다 로스먼과 테오 맥돌 전투가 핵심입니다. 특히 특정 캐릭터로 진행되는 일기토는 사전 육성이 중요합니다.",
        points: [
          "대표 일기토는 콴다 로스먼, 테오 맥돌 관련 전투입니다.",
          "패배가 게임오버나 캐릭터 생존에 영향을 줄 수 있어 전투 전 장비 점검이 중요합니다.",
          "대사 암시를 읽어 공격·방어·필살의 상성을 맞추는 구조입니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 조이 아트레이드 등 일기토 수가 늘고 대사 패턴의 비중도 커집니다.",
        points: [
          "플릭, 아마다, 루카 브라이트, 한 커닝엄, 조이 아트레이드가 주요 일기토 축입니다.",
          "대사 패턴이 다음 행동을 암시하므로 반복되는 표현을 기억하면 안정적으로 대응할 수 있습니다.",
          "루카 브라이트처럼 스토리 긴장도가 높은 전투는 체력 관리와 방어 선택이 특히 중요합니다.",
        ],
      },
    ],
    checklist: [
      "일기토 직전 무기 레벨과 방어구 확인",
      "첫 대사는 연출일 수 있으므로 실제 암시 대사를 구분",
      "필살 의심 대사는 무리하게 공격하지 않기",
    ],
  },
  {
    id: "army-battle",
    href: buildGameplayDetailPath("army-battle"),
    eyebrow: "War Battle",
    title: "전쟁 전투",
    summary:
      "전쟁 전투는 모집한 동료와 부대 구성을 전장 단위로 활용하는 대규모 전투 시스템입니다.",
    tags: ["부대 편성", "장거리 공격", "특수 능력", "승패 조건"],
    overview: [
      "전쟁 전투는 스토리 진행 중 발생하는 대규모 전투이며, 작품마다 규칙과 조작감이 크게 다릅니다.",
      "1편은 명령 상성 중심의 심리전이고, 2편은 격자 지도에서 유닛을 움직이는 전략 RPG에 가깝습니다.",
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
    seriesNotes: [
      {
        game: "Suikoden I",
        body: "Charge, Bow, Magic의 상성과 도적·닌자·전략가 같은 보조 명령이 핵심입니다. 불리한 선택은 동료 사망 위험으로 이어질 수 있습니다.",
        points: [
          "전투는 Charge, Bow, Magic의 상성 판단을 중심으로 진행됩니다.",
          "도적·닌자·전략가·상인·용기사 같은 보조 명령은 턴 선택 전에 전황을 유리하게 만듭니다.",
          "불리한 명령 선택은 병력 손실뿐 아니라 일부 동료 사망 위험으로 이어질 수 있습니다.",
        ],
      },
      {
        game: "Suikoden II",
        body: "보병, 기병, 궁병, 마법 부대가 격자 위에서 움직입니다. Apple에게 맡기는 자동 지휘도 가능하지만, 장거리 부대와 회복 부대 편성이 중요합니다.",
        points: [
          "격자 지도에서 부대를 이동시키고 Attack, Rune, Wait 같은 명령을 선택합니다.",
          "궁병과 마법 부대는 장거리 견제에 강하고, 기병은 이동 범위가 넓습니다.",
          "Apple에게 지휘를 맡길 수 있지만, 중요한 전투는 부대 배치와 장거리 공격을 직접 관리하는 편이 안전합니다.",
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
    id: "headquarters",
    href: buildGameplayDetailPath("headquarters"),
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
        facilities: [
          {
            name: "술집 / 파티 편성",
            location: "초기 본거지 주요 홀",
            unlock: "Mathiu, Sanchez",
            body: "파티 편성과 전쟁 준비의 중심 기능입니다.",
          },
          {
            name: "석판",
            location: "본거지 내부",
            unlock: "Luc",
            body: "영입한 108성 현황을 확인합니다.",
          },
          {
            name: "창고",
            location: "초기 본거지 기능 구역",
            unlock: "Roc",
            body: "아이템을 보관하고 꺼냅니다.",
          },
          {
            name: "여관",
            location: "초기 본거지 생활 구역",
            unlock: "Marie",
            body: "숙박과 세이브를 처리합니다.",
          },
          {
            name: "도구점",
            location: "상점 구역",
            unlock: "Chandler",
            body: "일반 아이템을 구입합니다.",
          },
          {
            name: "방어구점",
            location: "성 확장 후 상점 구역",
            unlock: "Chapman",
            body: "방어구를 구입합니다.",
          },
          {
            name: "대장간",
            location: "성 내부 공방 구역",
            unlock: "Maas / Meese / Mose / Moose / Mace",
            body: "영입 단계에 따라 무기 강화 한계가 올라갑니다.",
          },
          {
            name: "문장사",
            location: "성 확장 후 상점 구역",
            unlock: "Jeane",
            body: "문장을 장착하고 해제합니다.",
          },
          {
            name: "감정사",
            location: "성 확장 후 상점 구역",
            unlock: "Jabba",
            body: "감정품을 확인합니다.",
          },
          {
            name: "목욕탕",
            location: "생활 시설 구역",
            unlock: "Sansuke",
            body: "동료와 목욕 이벤트를 확인합니다.",
          },
          {
            name: "도서관",
            location: "성 확장 후 서고",
            unlock: "Hugo",
            body: "오래된 책 기록을 읽습니다.",
          },
          {
            name: "창 / 소리 변경",
            location: "성 확장 후 기능 구역",
            unlock: "Window / Melodye",
            body: "창 세트와 소리세트를 변경합니다.",
          },
        ],
      },
      {
        game: "Suikoden II",
        body: "노스윈도우 성이 신동맹군 본거지가 되며, 층별 지도와 시설 배치가 확장됩니다. Apple과 회의실은 전쟁 전투 준비에도 연결됩니다.",
        points: [
          "노스윈도우 성을 신동맹군 본거지로 사용합니다.",
          "성 레벨은 동료 수와 스토리 진행에 따라 1~4단계로 확장됩니다.",
          "1층과 2층 중심으로 시설이 배치되고, 레벨 상승 후 농장·목장·식당·교역소·감정소 등이 추가됩니다.",
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
            unlock: "Hilda",
            body: "숙박과 세이브를 처리합니다.",
          },
          {
            name: "도구점 / 방어구점",
            location: "본거지 1층 상점 구역",
            unlock: "Alex / Hans",
            body: "아이템과 방어구를 구입합니다.",
          },
          {
            name: "문장사",
            location: "성 레벨 2 이후 상점 구역",
            unlock: "Jeane",
            body: "문장 장착과 봉인구 관리를 맡습니다.",
          },
          {
            name: "농장 / 목장",
            location: "본거지 외곽",
            unlock: "Tony / Yuzu",
            body: "식재료와 동물 수집을 관리합니다.",
          },
          {
            name: "식당",
            location: "성 레벨 2 이후 주방",
            unlock: "Hai Yo",
            body: "요리와 요리 대결을 진행합니다.",
          },
          {
            name: "교역소",
            location: "성 레벨 3 이후 상업 구역",
            unlock: "Gordon",
            body: "교역품 거래를 처리합니다.",
          },
          {
            name: "감정소",
            location: "성 레벨 3 이후 상업 구역",
            unlock: "Lebrante",
            body: "감정품을 확인합니다.",
          },
          {
            name: "대장간",
            location: "성 레벨 3 이후 공방 구역",
            unlock: "Tessai",
            body: "무기 강화를 담당합니다.",
          },
          {
            name: "도서관",
            location: "성 레벨 2 이후 도서관",
            unlock: "Emilia",
            body: "오래된 책 기록을 읽습니다.",
          },
          {
            name: "탐정 사무소",
            location: "본거지 1층 기능 구역",
            unlock: "Richmond",
            body: "영입 단서와 조사를 제공합니다.",
          },
          {
            name: "창 / 소리 변경",
            location: "성 레벨 3 이후 3층·테라스 구역",
            unlock: "Tenkou / Connell",
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
    id: "repeatable-play",
    href: buildGameplayDetailPath("repeatable-play"),
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
        body: "친치로린과 반복 전투 수급, 본거지 상점·대장간 정비가 중심입니다. 돈을 충분히 확보하면 무기 강화 부담이 줄어듭니다.",
        points: [
          "Gaspar 영입 후 본거지에서 친치로린을 이용할 수 있습니다.",
          "Marco의 동전 맞히기, Georges의 기억력 미니게임처럼 개별 동료 시설이 반복 플레이 요소를 제공합니다.",
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
] as const satisfies readonly GameplayDetailRecord[];

export const getGameplayDetailRecord = (guideId: string) => {
  return GAMEPLAY_DETAIL_RECORDS.find((record) => record.id === guideId) ?? null;
};

export const getGameplayDetailStaticParams = () => {
  return GAMEPLAY_DETAIL_RECORDS.map((record) => ({
    guide: record.id,
  }));
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
    title: "대사 판독",
    body: "일기토는 상대 대사의 뉘앙스를 보고 공격, 방어, 필살을 고르는 방식입니다. 강한 위협은 방어, 빈틈을 보이는 대사는 공격 기회로 봅니다.",
    points: ["공격", "방어", "필살", "대사 패턴"],
  },
  {
    title: "주요 일기토",
    body: "1편은 콴다 로스먼과 테오 맥돌, 2편은 플릭, 아마다, 루카 브라이트, 한 커닝엄, 조이 아트레이드가 핵심 일기토입니다.",
    points: ["콴다", "테오", "루카", "조이"],
  },
] as const;

export const GAMEPLAY_WAR_BATTLE_SECTIONS = [
  {
    title: "1편 전쟁 전투",
    body: "트란 해방전쟁의 전쟁 전투는 명령 선택, 병과 상성, 군사 역할을 중심으로 전황을 읽습니다.",
    points: ["명령", "병과", "군사", "전황"],
  },
  {
    title: "2편 전쟁 전투",
    body: "듀난 통일전쟁의 전쟁 전투는 부대 편성, 진형, 지형, 이벤트 조건을 함께 관리하는 전략 전투입니다.",
    points: ["부대 편성", "진형", "지형", "이벤트"],
  },
] as const;

export const GAMEPLAY_HEADQUARTERS_SECTIONS = [
  {
    title: "시설 개방",
    body: "동료 영입에 따라 상점, 창고, 대장간, 감정소, 목욕탕, 도서관 등 본거지 기능이 단계적으로 열립니다.",
    points: ["상점", "창고", "대장간", "도서관"],
  },
  {
    title: "반복 플레이",
    body: "교역, 낚시, 요리, 친치로린, 탐정 사무소와 같은 시설은 수집과 반복 수급을 보조합니다.",
    points: ["교역", "낚시", "요리", "친치로린"],
  },
] as const;

export const GAMEPLAY_GUIDE_GROUPS = [
  {
    game: "Suikoden I",
    eyebrow: "Gate Rune War",
    groups: [
      {
        title: "Tips & Tricks",
        body: "초반 진행, 파티 구성, 베스트 문장, 하드 모드, 엔딩과 놓치기 쉬운 지점을 함께 확인합니다.",
      },
      {
        title: "Gameplay Mechanics",
        body: "문장 장착과 성장, 전투 이탈, 파티·진형 변경, 합동 마법, 보호 행동, 상태 이상을 묶어 봅니다.",
      },
      {
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
        title: "Tips & Tricks",
        body: "엔딩, 놓치기 쉬운 요소, 수호신상 조합, 세이브 데이터 계승, 카스미·발레리아 분기 등을 함께 관리합니다.",
      },
      {
        title: "Gameplay Mechanics",
        body: "봉인구 장착, 문장 레벨, 전쟁 전투, 무기 사거리, 상태 이상, 빠른 이동과 파티 변경을 정리합니다.",
      },
      {
        title: "Facilities & Minigames",
        body: "교역소, 목장, 지도 제작자, 음악가, 탐정 사무소, 요리·낚시·친치로린 같은 시설과 미니게임 항목입니다.",
      },
      {
        title: "Duels",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 조이 아트레이드 일기토가 별도 항목으로 분리되어 있습니다.",
      },
    ],
  },
] as const;

export const TIMELINE_COPY = {
  eyebrow: "Timeline",
  title: "Historical Timeline",
  body: "환상수호전 I 이전의 국가 형성기부터 듀난 공화국 탄생까지, 태양력 기준으로 세계관의 흐름을 정리합니다.",
  worldTitle: "World Setting",
  chronologyTitle: "Chronicle Notes",
} as const;

export const TIMELINE_WORLD_SECTIONS = [
  {
    title: "하르모니아와 문장의 분열",
    body: "북방 대륙의 정치 질서는 하르모니아의 영향권에서 출발합니다. 문장의 일족, 문장의 문장, 소울이터의 행방은 이후 트란과 듀난 전쟁의 배경으로 이어집니다.",
    tags: ["Harmonia", "Gate Rune", "Soul Eater"],
  },
  {
    title: "적월제국과 트란",
    body: "적월제국은 하르모니아에서 독립해 성장한 국가이며, 황가의 패왕의 문장과 제국 장군들의 군사력이 트란 지역 질서를 지탱합니다.",
    tags: ["Scarlet Moon Empire", "Sovereign Rune", "Toran"],
  },
  {
    title: "듀난 왕국의 해체와 도시동맹",
    body: "듀난 지역은 남창을 중심으로 한 왕국에서 출발했지만, 하이랜드의 성장과 도시들의 독립으로 쪼개집니다. 뮤즈, 사우스 윈도우, 투 리버, 마틸다 기사단은 이후 죠스턴 도시동맹을 이룹니다.",
    tags: ["Dunan Monarchy", "Jowston", "Highland Kingdom"],
  },
  {
    title: "시작의 문장과 듀난 전쟁",
    body: "겐카쿠와 한 커닝엄의 과거, 리오우와 조이에게 나뉜 시작의 문장, 루카 브라이트의 전쟁 도발이 듀난 통일전쟁의 핵심 축입니다.",
    tags: ["Rune of Beginning", "New State Army", "Dunan Republic"],
  },
] as const;

export const TIMELINE_CHRONICLE_NOTES = [
  {
    date: "태양력 c.70",
    title: "문장의 일족 학살과 문장의 문장 분리",
    body: "하르모니아가 문장의 일족을 공격하고, 레크나트와 윈디가 문장의 문장을 나누어 가지고 도주합니다. 훗날 문장 계보와 윈디의 집착을 설명하는 출발점입니다.",
  },
  {
    date: "태양력 78",
    title: "네크로드, 달의 문장을 탈취",
    body: "네크로드가 푸른 달 마을에서 달의 문장을 훔쳐 달아납니다. 노스윈도우의 비극과 빅토르의 서사로 이어지는 오래된 사건입니다.",
  },
  {
    date: "태양력 110",
    title: "듀난 왕국 성립",
    body: "사우스 윈도우를 수도로 듀난 왕국이 세워지고, 베르난드가 초대 왕이 됩니다. 훗날 도시동맹과 하이랜드로 갈라지는 듀난 지역사의 원형입니다.",
  },
  {
    date: "태양력 c.150",
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
    title: "듀난 왕국 내전과 사우스 윈도우 독립",
    body: "듀난 왕국에서 반란이 일어나고 하이랜드가 동부 사우스 윈도우를 침공합니다. 반란 세력이 승리하면서 사우스 윈도우는 시장제를 갖춘 도시국가로 재편됩니다.",
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
    body: "오뎃사 실버버그가 트란 해방군을 조직하며 문장의 문장 전쟁이 시작됩니다. 훗날 주인공은 소울이터의 계승자가 됩니다.",
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
    body: "루카 브라이트가 유니콘 소년병 부대를 학살하고 이를 죠스턴의 공격으로 위장하면서 전쟁이 재개됩니다. 리오우와 조이는 시작의 문장의 두 조각을 지니게 됩니다.",
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
