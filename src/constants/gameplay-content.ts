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
  sourceLabel: "Source",
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
    title: "일반 전투",
    body: "6인 파티 편성, 전열·후열, 무기 사거리, 방어와 보호 행동을 함께 관리하는 기본 전투입니다.",
    points: ["파티 편성", "무기 사거리", "상태 이상", "장비 교체"],
  },
  {
    title: "문장 운용",
    body: "문장 장착, 봉인구, 레벨별 마법 사용 횟수와 속성 상성을 함께 보는 성장 축입니다.",
    points: ["문장 장착", "마법 레벨", "속성 문장", "고유 문장"],
  },
  {
    title: "일기토",
    body: "대사의 뉘앙스를 읽고 공격·방어·필살을 고르는 1:1 전투입니다. 두 작품 모두 전용 가이드와 대사 패턴이 따로 정리되어 있습니다.",
    points: ["공격", "방어", "필살", "대사 판독"],
  },
  {
    title: "전쟁 전투",
    body: "부대 단위로 전황을 읽는 대규모 전투입니다. 1편은 명령과 병과 역할, 2편은 부대 편성과 진형 관리가 중요합니다.",
    points: ["부대 역할", "전황 판독", "진형", "전쟁 이벤트"],
  },
  {
    title: "본거지 시설",
    body: "상점, 창고, 대장간, 감정소, 목욕탕, 도서관 등 동료 영입에 따라 열리는 시설 기록입니다.",
    points: ["시설 개방", "상점", "창고", "대장간"],
  },
  {
    title: "미니게임과 반복 수급",
    body: "돈·경험치 수급, 교역, 낚시, 친치로린, 요리 등 반복 플레이에서 확인할 항목을 모읍니다.",
    points: ["돈 벌기", "경험치", "교역", "미니게임"],
  },
] as const;

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
    sourceHref: "https://game8.co/games/Suikoden-1",
    groups: [
      {
        title: "Tips & Tricks",
        body: "초반 진행, 파티 구성, 베스트 문장, 하드 모드, 엔딩과 놓치기 쉬운 지점을 함께 확인합니다.",
        links: [
          {
            label: "Beginner's Tips and Tricks",
            href: "https://game8.co/games/Suikoden-1/archives/493171",
          },
          {
            label: "Early Game Guide",
            href: "https://game8.co/games/Suikoden-1/archives/493355",
          },
          {
            label: "How to Win Duels and Dialogue Patterns",
            href: "https://game8.co/games/Suikoden-1/archives/493175",
          },
        ],
      },
      {
        title: "Gameplay Mechanics",
        body: "문장 장착과 성장, 전투 이탈, 파티·진형 변경, 합동 마법, 보호 행동, 상태 이상을 묶어 봅니다.",
        links: [
          {
            label: "How to Equip and Level Up Runes",
            href: "https://game8.co/games/Suikoden-1",
          },
          {
            label: "Army Battle Guide",
            href: "https://game8.co/games/Suikoden-1/archives/493603",
          },
          {
            label: "Weapon Range Guide",
            href: "https://game8.co/games/Suikoden-1",
          },
        ],
      },
      {
        title: "Duels",
        body: "콴다 로스먼, 테오 맥돌 1차전과 2차전이 대표 일기토로 분리되어 있습니다.",
        links: [
          {
            label: "Kwanda Rosman Duel Guide",
            href: "https://game8.co/games/Suikoden-1/archives/494055",
          },
          {
            label: "Teo McDohl 1st Duel Guide",
            href: "https://game8.co/games/Suikoden-1/archives/494152",
          },
          {
            label: "Teo McDohl 2nd Duel Guide",
            href: "https://game8.co/games/Suikoden-1/archives/493723",
          },
        ],
      },
    ],
  },
  {
    game: "Suikoden II",
    eyebrow: "Dunan Unification War",
    sourceHref: "https://game8.co/games/Suikoden-2",
    groups: [
      {
        title: "Tips & Tricks",
        body: "엔딩, 놓치기 쉬운 요소, 수호신상 조합, 세이브 데이터 계승, 카스미·발레리아 분기 등을 함께 관리합니다.",
        links: [
          {
            label: "Beginner's Guide",
            href: "https://game8.co/games/Suikoden-2/archives/493768",
          },
          {
            label: "Duel Guide and All Dialogue Patterns",
            href: "https://game8.co/games/Suikoden-2/archives/496263",
          },
          {
            label: "Save Data Transfer and What Carries Over",
            href: "https://game8.co/games/Suikoden-2",
          },
        ],
      },
      {
        title: "Gameplay Mechanics",
        body: "봉인구 장착, 문장 레벨, 전쟁 전투, 무기 사거리, 상태 이상, 빠른 이동과 파티 변경을 정리합니다.",
        links: [
          {
            label: "Army Battle Guide",
            href: "https://game8.co/games/Suikoden-2",
          },
          {
            label: "Best Army Battle Formations",
            href: "https://game8.co/games/Suikoden-2",
          },
          {
            label: "Level 99 Trick",
            href: "https://game8.co/games/Suikoden-2",
          },
        ],
      },
      {
        title: "Facilities & Minigames",
        body: "교역소, 목장, 지도 제작자, 음악가, 탐정 사무소, 요리·낚시·친치로린 같은 시설과 미니게임 항목입니다.",
        links: [
          {
            label: "Trading Guide and Best Trading Routes",
            href: "https://game8.co/games/Suikoden-2/archives/497516",
          },
          {
            label: "Trading Post Guide",
            href: "https://game8.co/games/Suikoden-2/archives/497502",
          },
          {
            label: "Mapmaker Guide",
            href: "https://game8.co/games/Suikoden-2/archives/504675",
          },
        ],
      },
      {
        title: "Duels",
        body: "플릭, 아마다, 루카 브라이트, 한 커닝엄, 조이 아트레이드 일기토가 별도 항목으로 분리되어 있습니다.",
        links: [
          {
            label: "Flik Duel Guide",
            href: "https://game8.co/games/Suikoden-2/archives/494790",
          },
          {
            label: "Luca Blight Duel Guide",
            href: "https://game8.co/games/Suikoden-2/archives/494890",
          },
          {
            label: "Jowy Atreides Duel Guide",
            href: "https://game8.co/games/Suikoden-2/archives/494917",
          },
        ],
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
  sourceTitle: "Timeline References",
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

export const TIMELINE_SOURCE_LINKS = [
  {
    label: "Gensopedia Suikoden Series Timeline",
    href: "https://gensopedia.org/w/Suikoden_series_timeline",
  },
  {
    label: "Suikoden Wiki Timeline",
    href: "https://suikoden.fandom.com/wiki/Timeline",
  },
  {
    label: "Dunan Republic",
    href: "https://suikoden.fandom.com/wiki/Dunan_Republic",
  },
  {
    label: "Dunan Unification War",
    href: "https://suikoden.fandom.com/wiki/Dunan_Unification_War",
  },
] as const;
