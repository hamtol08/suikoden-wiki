import type { SUIKODEN_II_CHARACTERS } from "@/constants/suikoden-ii-characters";
import { STAR_OF_DESTINY_KOREAN_NAMES } from "@/constants/star-of-destiny";

type SuikodenIICharacterId = (typeof SUIKODEN_II_CHARACTERS)[number]["id"];

type CharacterLocalization = {
  name: string;
  recruitment: string;
  gameRole?: string;
};

export const SUIKODEN_II_STAR_NAMES = STAR_OF_DESTINY_KOREAN_NAMES;

export const SUIKODEN_II_CHARACTER_STAR_ORDERS = {
  hero: 1,
  "ridley-wizen": 2,
  "boris-wizen": 2,
  shu: 3,
  luc: 4,
  "humphrey-mintz": 5,
  hauser: 6,
  "kiba-windamier": 7,
  pesmerga: 8,
  "sierra-mikain": 9,
  "teresa-wisemail": 10,
  nina: 11,
  feather: 12,
  sigfried: 12,
  abizboah: 12,
  viktor: 13,
  valeria: 14,
  tomo: 14,
  fitcher: 15,
  clive: 16,
  flik: 17,
  tsai: 18,
  jess: 19,
  stallion: 20,
  "georg-prime": 21,
  hanna: 22,
  killey: 23,
  anita: 24,
  nanami: 26,
  rina: 27,
  "tai-ho": 28,
  eilie: 29,
  "yam-koo": 30,
  bolgan: 31,
  hix: 32,
  tengaar: 33,
  "freed-yamamoto": 34,
  "yoshino-yamamoto": 35,
  chaco: 36,
  "klaus-windamier": 37,
  gilbert: 38,
  tetsu: 39,
  jeane: 40,
  wakaba: 41,
  maximillian: 42,
  genshu: 43,
  camus: 44,
  miklotov: 45,
  jude: 46,
  lebrante: 47,
  lorelai: 48,
  tony: 49,
  gijimu: 50,
  rikimaru: 51,
  gantetsu: 52,
  "simone-verdricci": 53,
  connell: 54,
  hans: 55,
  huan: 56,
  tuta: 57,
  futch: 58,
  kasumi: 59,
  badeaux: 60,
  mazus: 61,
  mondo: 62,
  sasuke: 63,
  leona: 64,
  adlai: 65,
  raura: 66,
  sheena: 67,
  kinnison: 68,
  shiro: 69,
  amada: 70,
  emilia: 71,
  zamza: 72,
  karen: 73,
  "lo-wen": 74,
  tenkou: 75,
  gadget: 76,
  annallee: 77,
  viki: 78,
  koyu: 79,
  vincent: 80,
  meg: 81,
  mukumuku: 82,
  marlowe: 83,
  richmond: 84,
  apple: 85,
  "long-chan-chan": 86,
  millie: 87,
  tessai: 88,
  taki: 89,
  gengen: 90,
  gabocha: 91,
  yuzu: 92,
  "hai-yo": 93,
  "kahn-marley": 94,
  barbara: 95,
  sid: 96,
  shin: 97,
  oulan: 98,
  shilo: 99,
  alex: 100,
  hilda: 101,
  bob: 102,
  ayda: 103,
  pico: 104,
  alberto: 105,
  templeton: 106,
  hoi: 107,
  gordon: 108,
} as const satisfies Record<SuikodenIICharacterId, number>;

export const SUIKODEN_II_CHARACTER_TYPE_LABELS = {
  Combat: "전투",
  "Non-Combat": "비전투",
  "Archive Entry": "기록",
} as const;

export const SUIKODEN_II_RUNE_LABELS = {
  "-": "없음",
  None: "없음",
  "Bright Shield Rune": "빛나는 방패의 문장",
  "Lightning Rune": "번개의 문장",
  "Exertion Rune": "분발의 문장",
  "Shining Wind Rune": "빛나는 바람의 문장",
  "White Saint Rune": "백성의 문장",
  "Thunder Rune": "천둥의 문장",
  "Blue Drop Rune": "푸른 물방울의 문장",
  "Groundhog Rune": "두더지의 문장",
  "Fire Dragon Rune": "화룡의 문장",
  "Medicine Rune": "약의 문장",
  "Fire Breath Rune": "화염 숨결의 문장",
  "Angry Dragon Rune": "분노한 용의 문장",
  "Spider Slay Rune": "거미베기의 문장",
  "Gadget Rune": "가젯의 문장",
  "White Tiger Rune": "백호의 문장",
  "Blinking Rune": "순간이동의 문장",
  "Knight Rune": "기사의 문장",
  "Rage Rune": "분노의 문장",
  "Shrike Rune": "때까치의 문장",
  "Mayfly Rune": "하루살이의 문장",
  "Howling Rune": "포효의 문장",
  "Technique Rune": "기술의 문장",
  "Rabid Fang Rune": "광아의 문장",
  "Swallow Rune": "제비의 문장",
} as const;

export const SUIKODEN_II_CHARACTER_LOCALIZATION = {
  hero: {
    name: "주인공",
    recruitment: "게임 시작부터 조작할 수 있는 주인공입니다.",
  },
  nanami: {
    name: "나나미",
    recruitment: "캐로 처형장에서 탈출한 뒤 자동으로 합류합니다. 캐로에서 구하지 못한 경우에도 용병 요새 붕괴 뒤 뮤즈 입장을 거절당하면 합류합니다.",
  },
  tsai: {
    name: "챠이",
    recruitment: "토토 마을이 파괴된 뒤 류베 숲 근처의 집을 찾아가 말을 걸면 용병 요새로 합류합니다.",
  },
  hanna: {
    name: "한나",
    recruitment: "애플 합류 후 토토로 돌아가 말을 걸면 합류합니다.",
  },
  anita: {
    name: "아니타",
    recruitment: "뮤즈 주점 또는 바나 마을 여관에서 여러 번 말을 걸고 부탁을 들어주면 합류합니다. 발레리아가 파티에 있으면 바나 마을에서 바로 영입할 수 있습니다.",
  },
  viktor: {
    name: "빅토르",
    recruitment: "그랜마이어를 만나기 전 자동으로 파티에 합류합니다.",
  },
  flik: {
    name: "프릭",
    recruitment: "그랜마이어를 만나기 전 자동으로 파티에 합류합니다.",
  },
  "freed-yamamoto": {
    name: "프리드 야마모토",
    recruitment: "그랜마이어와 만난 뒤 자동으로 합류합니다.",
  },
  shu: {
    name: "슈우",
    recruitment: "솔론 지의 군대를 격파한 뒤 자동으로 합류합니다.",
  },
  luc: {
    name: "루크",
    recruitment: "솔론 지의 군대를 격파한 뒤 파티에 합류합니다.",
  },
  "tai-ho": {
    name: "타이호",
    recruitment: "피쳐를 투 리버로 데려가기로 한 뒤, 친치로린에서 5000 포치를 따면 합류합니다.",
  },
  "yam-koo": {
    name: "야무크",
    recruitment: "쿠스쿠스에서 타이호와 함께 합류합니다.",
  },
  "ridley-wizen": {
    name: "리드리 와이젠",
    recruitment: "투 리버를 구한 뒤 합류합니다.",
  },
  "boris-wizen": {
    name: "보리스 와이젠",
    recruitment: "네크로드 격파 후 나나미와 함께 도망치는 선택을 하면 리드리 대신 합류합니다.",
  },
  fitcher: {
    name: "피쳐",
    recruitment: "투 리버를 구한 뒤 자동으로 합류합니다.",
  },
  chaco: {
    name: "챠코",
    recruitment: "투 리버를 구한 뒤 파티에 합류합니다.",
  },
  hix: {
    name: "힉스",
    recruitment: "성 레벨 2 이후 레이크웨스트 여관에서 힉스와 텐가알를 만난 뒤 코볼트 마을 사건을 해결하면 합류합니다.",
  },
  tengaar: {
    name: "텐가알",
    recruitment: "성 레벨 2 이후 레이크웨스트 여관에서 힉스와 함께 이벤트를 시작하고 코볼트 마을 사건을 해결하면 합류합니다.",
  },
  "yoshino-yamamoto": {
    name: "요시노 야마모토",
    recruitment: "프리드 야마모토를 파티에 넣고 라다트에서 말을 걸면 합류합니다.",
  },
  stallion: {
    name: "스탈리온",
    recruitment: "성 레벨 2 이후 전투에서 50회 도망친 상태로 라다트에서 달리기 승부를 하면 합류합니다.",
  },
  clive: {
    name: "클라이브",
    recruitment: "뮤즈에서 엘자의 물건을 맡은 뒤 배로 향하고, 엘자와 클라이브의 결투 이후 배에 탄 상태에서 말을 걸면 합류합니다.",
  },
  "teresa-wisemail": {
    name: "테레스 와이즈멜",
    recruitment: "그린힐에서 탈출한 뒤 자동으로 합류합니다.",
  },
  nina: {
    name: "니나",
    recruitment: "그린힐에서 탈출한 뒤 파티에 합류합니다.",
  },
  "humphrey-mintz": {
    name: "험프리 민츠",
    recruitment: "가도 마을 여관에서 험프리와 대화하고 하룻밤을 묵은 뒤 의뢰를 수락하면 합류합니다.",
  },
  "kiba-windamier": {
    name: "키바 윈드마이어",
    recruitment: "키바의 군대를 격파한 뒤 자동으로 합류합니다.",
  },
  valeria: {
    name: "발레리아",
    recruitment: "트란공화국의 레판토 대통령과 만나는 회의에서 장군으로 선택하면 합류합니다.",
  },
  tomo: {
    name: "토모",
    recruitment: "성 레벨 3 이후 챠이를 파티에 넣고 말을 걸어 그의 집으로 따라가면 합류합니다.",
  },
  feather: {
    name: "페더",
    recruitment: "바도에게 받은 듣기 수정을 숲의 마을에서 사용하고 그리폰을 쓰러뜨리면 합류합니다.",
  },
  sigfried: {
    name: "지크프리드",
    recruitment: "순결한 소녀를 파티에 넣고 유니콘의 길에서 바도의 듣기 수정을 사용하면 합류합니다.",
  },
  "sierra-mikain": {
    name: "시에라 미케네",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  hauser: {
    name: "하우저",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  jess: {
    name: "제스",
    recruitment: "네크로드 격파 후 제스의 사과를 받아들이면 합류합니다.",
  },
  "georg-prime": {
    name: "게오르그 프라임",
    recruitment: "성 레벨 3 이후 네크로드를 격파하고 호랑이 입 산길에서 말을 걸면 합류합니다.",
  },
  killey: {
    name: "키리",
    recruitment: "성 레벨 3 이후 사우스 윈도우에서 알렉스 이야기를 전하고 본거지의 알렉스와 대화한 뒤, 다시 사우스 윈도우에서 여러 번 설득하면 합류합니다.",
  },
  pesmerga: {
    name: "페슈멜가",
    recruitment: "성 레벨 4 이후 바람의 동굴 가장 안쪽에서 말을 걸면 합류합니다.",
  },
  abizboah: {
    name: "어비스보어",
    recruitment: "성 레벨 3 이상에서 틴토 광산의 듣기 구슬을 사용해 대화하면 가족과 함께 합류합니다.",
  },
  mukumuku: {
    name: "무쿠무쿠",
    recruitment: "용병 요새에서 탈출한 뒤 캐로의 도장 뒤 나무를 세 번 조사하면 합류합니다. 또는 그린힐 주변에서 다람쥐 부대 영입 방식으로 만날 수 있습니다.",
  },
  rikimaru: {
    name: "리키마루",
    recruitment: "류베에서 식사값을 대신 내주겠다고 하면 합류합니다. 류베에서 놓쳤다면 파괴 후 코로넷에서 다시 만날 수 있습니다.",
  },
  millie: {
    name: "미리",
    recruitment: "류베에서 보나파르트를 찾는 일을 도와주겠다고 하면 합류합니다.",
  },
  kinnison: {
    name: "키니슨",
    recruitment: "류베 숲의 새 둥지를 나무에 돌려놓고 잠시 후 같은 장소로 돌아가면 합류합니다.",
  },
  shiro: {
    name: "시로",
    recruitment: "류베 숲의 새 둥지를 돌려놓은 뒤 시간이 지나 같은 장소로 돌아가면 키니슨과 함께 합류합니다.",
  },
  zamza: {
    name: "자무자",
    recruitment: "나나미를 파티에 넣고 토토에서 말을 걸면 합류합니다. 놓친 경우 솔론 지 격파 후 사우스 윈도우에서 다시 만날 수 있습니다.",
  },
  apple: {
    name: "애플",
    recruitment: "토토 마을의 파괴를 확인한 뒤 자동으로 합류합니다.",
  },
  tuta: {
    name: "토우타",
    recruitment: "용병 요새 함락 후 뮤즈에서 말을 걸면 합류합니다.",
  },
  gilbert: {
    name: "길버트",
    recruitment: "뮤즈 전쟁 이벤트 중 길버트의 부대에 피해를 주면 합류합니다.",
  },
  eilie: {
    name: "아이리",
    recruitment: "코로넷에서 친치로린으로 타이호를 이긴 뒤 파티에 합류합니다.",
  },
  rina: {
    name: "리나",
    recruitment: "코로넷에서 친치로린으로 타이호를 이긴 뒤 파티에 합류합니다.",
  },
  bolgan: {
    name: "볼간",
    recruitment: "코로넷에서 친치로린으로 타이호를 이긴 뒤 파티에 합류합니다.",
  },
  leona: {
    name: "레오나",
    recruitment: "솔론 지의 군대를 격파한 뒤 자동으로 합류합니다.",
  },
  gengen: {
    name: "겐겐",
    recruitment: "캐로에서 돌아온 뒤 파티에 합류합니다.",
  },
  barbara: {
    name: "바바라",
    recruitment: "솔론 지의 군대를 격파한 뒤 자동으로 합류합니다.",
  },
  huan: {
    name: "호우안",
    recruitment: "솔론 지의 군대를 격파한 뒤 자동으로 합류합니다.",
  },
  oulan: {
    name: "오우란",
    recruitment: "여성 캐릭터만으로 파티를 구성해 쿠스쿠스에 들어가고, 입구 근처 여성에게 말을 걸면 합류합니다.",
  },
  taki: {
    name: "타키",
    recruitment: "레이크웨스트에서 여러 번 말을 걸면 합류합니다.",
  },
  hans: {
    name: "한스",
    recruitment: "투 리버 여관에서 말을 걸고 본거지에 방어구점을 열게 하면 합류합니다.",
  },
  tetsu: {
    name: "테츠",
    recruitment: "코볼트 마을의 프라이드 타코를 파티원에게 사용한 뒤 레이크웨스트에서 말을 걸면 합류합니다.",
  },
  "hai-yo": {
    name: "하이요",
    recruitment: "성 레벨 2 이후 본거지 주방에서 말을 걸면 합류합니다.",
  },
  richmond: {
    name: "리치몬드",
    recruitment: "라다트에서 동전 던지기 승부를 받아들여 진 뒤, 식당 입구 근처 손님에게 얻은 동전을 사용해 다시 말을 걸면 합류합니다.",
  },
  amada: {
    name: "아마다",
    recruitment: "피쳐를 투 리버로 데려가기로 한 뒤 아마다와 결투해 이기면 합류합니다.",
  },
  alex: {
    name: "알렉스",
    recruitment: "사우스 윈도우 여관 2층에서 말을 걸면 합류합니다.",
  },
  hilda: {
    name: "힐다",
    recruitment: "사우스 윈도우에서 알렉스와 함께 합류합니다.",
  },
  adlai: {
    name: "아다리",
    recruitment: "사우스 윈도우에서 나무 방패, 대역지장보살, 바람의 문장을 가져간 뒤 바람의 문장을 던지면 합류합니다.",
  },
  emilia: {
    name: "에밀리아",
    recruitment: "성 레벨 2 이후 그린힐 학원 안내를 받은 뒤 정체를 밝히면 합류합니다.",
  },
  gabocha: {
    name: "카보챠",
    recruitment: "성 레벨 2 이후 겐겐을 파티에 넣고 투 리버에서 말을 걸면 합류합니다.",
  },
  sid: {
    name: "시드",
    recruitment: "성 레벨 2 이후 챠코를 파티에 넣고 투 리버의 시드 방에 들어가면 합류합니다.",
  },
  jeane: {
    name: "진",
    recruitment: "그린힐 사건 후 성 레벨 2 이상에서 투 리버의 문장점에 있는 진에게 말을 걸면 합류합니다.",
  },
  shilo: {
    name: "시로우",
    recruitment: "성 레벨 2 이후 친치로린에서 5000 포치를 따면 합류합니다.",
  },
  yuzu: {
    name: "유즈",
    recruitment: "성 레벨 2 이후 힉스와 텐가알가 합류한 상태에서 코볼트 마을의 양 세 마리를 찾아주고 본거지 체류를 허락하면 합류합니다.",
  },
  shin: {
    name: "신",
    recruitment: "그린힐에서 탈출한 뒤 파티에 합류합니다.",
  },
  meg: {
    name: "멕",
    recruitment: "성 레벨 2 이후 뮤즈에서 말을 걸면 합류합니다.",
  },
  gadget: {
    name: "카라쿠리마루",
    recruitment: "성 레벨 2 이후 뮤즈에서 멕에게 말을 걸면 함께 합류합니다.",
  },
  wakaba: {
    name: "와카바",
    recruitment: "성 레벨 2 이후 주인공 레벨이 30 이상일 때 숲의 마을에서 말을 걸면 합류합니다.",
  },
  tony: {
    name: "토니",
    recruitment: "성 레벨 2 이후 숲의 마을 촌장의 집에서 두 번 말을 걸면 합류합니다.",
  },
  viki: {
    name: "빅키",
    recruitment: "마틸다로 가는 숲길에서 만나 본거지에 머무르게 하면 합류합니다.",
  },
  futch: {
    name: "프치",
    recruitment: "가도 마을에서 험프리와 함께 파티에 합류합니다.",
  },
  miklotov: {
    name: "마이크로토프",
    recruitment: "록액스 사건을 마친 뒤 파티에 합류합니다.",
  },
  camus: {
    name: "카뮤",
    recruitment: "록액스 사건을 마친 뒤 파티에 합류합니다.",
  },
  "klaus-windamier": {
    name: "크라우스 윈드마이어",
    recruitment: "키바 군을 격파한 뒤 자동으로 합류합니다.",
  },
  kasumi: {
    name: "카스미",
    recruitment: "트란공화국의 레판토 대통령과 만나는 회의에서 장군으로 선택하면 합류합니다.",
  },
  sheena: {
    name: "시나",
    recruitment: "레판토 대통령과 대화한 뒤 자동으로 합류합니다.",
  },
  gordon: {
    name: "고든",
    recruitment: "성 레벨 3 이후 그레그민스터에서 의뢰를 받고 교역으로 총 50000 포치를 번 뒤 다시 말을 걸면 합류합니다.",
  },
  lorelai: {
    name: "로렐라이",
    recruitment: "성 레벨 3 이후 그레그민스터에서 말을 걸면 합류합니다.",
  },
  sasuke: {
    name: "사스케",
    recruitment: "발레리아를 선택했다면 몬도 합류 후 자동으로 합류합니다. 카스미를 선택했다면 카스미를 파티에 넣고 롯카쿠 교역소 근처에서 말을 걸어야 합니다.",
  },
  mondo: {
    name: "몬드",
    recruitment: "그레그민스터 숲길 네 번째 화면의 숨겨진 입구로 롯카쿠에 들어가면 한조의 명령으로 합류합니다. 카스미 루트는 성 레벨 3, 발레리아 루트는 성 레벨 4가 필요합니다.",
  },
  templeton: {
    name: "템플턴",
    recruitment: "제스의 임무를 받은 뒤 용병 요새에서 만나고 토토까지 따라가면 합류합니다.",
  },
  badeaux: {
    name: "버드",
    recruitment: "동물 캐릭터를 파티에 넣고 마틸다로 가는 숲길에서 말을 걸면 합류합니다.",
  },
  ayda: {
    name: "에이다",
    recruitment: "숲의 마을에서 페더와 함께 합류합니다.",
  },
  connell: {
    name: "코넬",
    recruitment: "성 레벨 3 이후 사운드 세트를 가지고 숲의 마을의 코넬에게 말을 걸면 합류합니다.",
  },
  karen: {
    name: "카렌",
    recruitment: "루카 블라이트 격파 후 성 레벨 3 이상에서 쿠스쿠스 여관으로 가 춤 제안을 수락하면 합류합니다.",
  },
  maximillian: {
    name: "맥시밀리언",
    recruitment: "루카 블라이트 격파 후 성 레벨 3 이상에서 사우스 윈도우에 있는 맥시밀리언에게 말을 걸면 합류합니다.",
  },
  raura: {
    name: "라울라",
    recruitment: "성 레벨 3 이후 진을 먼저 영입한 상태로 틴토에서 말을 걸면 합류합니다.",
  },
  "kahn-marley": {
    name: "칸 마리",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  tenkou: {
    name: "텐코우",
    recruitment: "성 레벨 3 이후 크롬에서 윈도우 세트를 가져다주면 합류합니다.",
  },
  "long-chan-chan": {
    name: "론챤챤",
    recruitment: "성 레벨 2 이후 와카바를 파티에 넣고 크롬 여관에서 말을 걸면 합류합니다.",
  },
  gijimu: {
    name: "기짐",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  "lo-wen": {
    name: "로우엔",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  koyu: {
    name: "코우유",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  marlowe: {
    name: "마를로 코디",
    recruitment: "네크로드를 격파하면 합류합니다.",
  },
  lebrante: {
    name: "레브란트",
    recruitment: "성 레벨 3 이후 청자 항아리를 가지고 라다트의 르브란테에게 말을 걸면 합류합니다.",
  },
  "simone-verdricci": {
    name: "시몬 베르드리치",
    recruitment: "성 레벨 3 이후 장미 브로치를 가진 상태로 라다트 수문에서 말을 걸면 합류합니다.",
  },
  hoi: {
    name: "호이",
    recruitment: "성 레벨 3 이후 라다트 식당에서 말을 걸면 루카 격파 후 영입할 수 있습니다.",
  },
  gantetsu: {
    name: "간테츠",
    recruitment: "성 레벨 3 이후 네크로드를 격파하고 사우스 윈도우에서 힘겨루기로 이기면 합류합니다. 파티 힘 합계 400 이상이 필요합니다.",
  },
  annallee: {
    name: "안네리",
    recruitment: "성 레벨 3 이후 사우스 윈도우 여관에서 말을 걸고 시청 앞에서 노래를 들으면 합류합니다.",
  },
  bob: {
    name: "밥",
    recruitment: "동료가 80명 이상일 때 투 리버에서 말을 걸면 합류합니다.",
  },
  jude: {
    name: "쥬드",
    recruitment: "뉴 리프 학원에서 쥬드와 대화한 뒤 숲의 마을에서 점토를 받아 돌아오면 합류합니다.",
  },
  pico: {
    name: "피코",
    recruitment: "안나리를 영입하고 성 레벨 3이 된 뒤 틴토 방어구점에서 말을 걸면 합류합니다.",
  },
  alberto: {
    name: "알버트",
    recruitment: "성 레벨 3 이후 안나리와 피코를 영입한 상태로 틴토 방어구점에서 안나리 이야기를 하면 합류합니다.",
  },
  tessai: {
    name: "텟사이",
    recruitment: "성 레벨 3 이후 그린힐 해방 뒤 빅토르를 파티에 넣고 대장간에서 말을 걸면 합류합니다.",
  },
  genshu: {
    name: "겐슈우",
    recruitment: "성 레벨 4 이후 레벨 14 무기를 장비한 파티원이 있는 상태로 쿠스쿠스에서 코로넷으로 배를 타고 이동해 말을 걸면 합류합니다.",
  },
  vincent: {
    name: "벵쌍 드 블루",
    recruitment: "성 레벨 4 이후 시몬을 파티에 넣고 라다트 수문에서 말을 걸면 합류합니다.",
  },
  mazus: {
    name: "메이저스",
    recruitment: "성 레벨 4 이후 틴토 광산에서 말을 걸면 합류합니다.",
  },
} as const satisfies Record<SuikodenIICharacterId, CharacterLocalization>;
