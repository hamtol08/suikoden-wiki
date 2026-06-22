import type suikodenIManifest from "../../public/suikoden/characters/suikoden-i/manifest.json";

type SuikodenICharacterId = (typeof suikodenIManifest)[number]["id"];

type SuikodenICharacterLocalization = {
  name: string;
  characterType: "전투" | "비전투";
  recruitment: string;
  gameRole?: string;
  rune?: string;
};

export const SUIKODEN_I_RUNE_LABEL = "-";

export const SUIKODEN_I_CHARACTER_LOCALIZATION = {
  hero: {
    name: "주인공",
    characterType: "전투",
    recruitment: "게임 시작부터 조작할 수 있는 주인공입니다.",
    rune: "소울이터",
  },
  lepant: {
    name: "레판토",
    characterType: "전투",
    recruitment: "코안에서 크레이즈에게 붙잡힌 아이린을 구출하면 합류합니다.",
  },
  mathiu: {
    name: "맷슈 실버버그",
    characterType: "비전투",
    recruitment: "세이카를 떠나는 과정에서 해방군의 군사로 합류합니다.",
    gameRole: "해방군의 수석 군사로 합류합니다. 전쟁 전투에서는 전략가 유닛으로 기록됩니다.",
  },
  luc: {
    name: "루크",
    characterType: "전투",
    recruitment: "본거지를 확보한 뒤 자동으로 합류합니다.",
  },
  humphrey: {
    name: "험프리 민츠",
    characterType: "전투",
    recruitment: "크완다 로스만을 쓰러뜨린 뒤 자동으로 합류합니다.",
  },
  "kasim-hazil": {
    name: "카심 하질",
    characterType: "전투",
    recruitment: "모라비아 성 제압 후 맷슈의 설득을 거쳐 합류합니다.",
  },
  "kwanda-rosman": {
    name: "크완다 로스만",
    characterType: "전투",
    recruitment: "판누 야쿠타 성에서 결투에 승리한 뒤 처형하지 않는 선택을 하면 합류합니다.",
  },
  pesmerga: {
    name: "페슈멜가",
    characterType: "전투",
    recruitment: "네크로드 격파 후 본거지 레벨 4 이상에서 네크로드 성 최상층을 찾아가면 합류합니다.",
  },
  gremio: {
    name: "그레미오",
    characterType: "전투",
    recruitment: "게임 시작부터 주인공 일행으로 함께합니다.",
  },
  warren: {
    name: "워렌",
    characterType: "전투",
    recruitment: "모라비아 성 감옥에서 빅토르, 빈센트와 함께 구출되며 자동으로 합류합니다.",
  },
  "kun-to": {
    name: "쿤트",
    characterType: "비전투",
    recruitment: "비밀 공장에서 화염창을 확보한 뒤 키로프의 저택에서 말을 걸면 합류합니다.",
  },
  cleo: {
    name: "클레오",
    characterType: "전투",
    recruitment: "게임 시작부터 주인공 일행으로 함께합니다.",
  },
  viktor: {
    name: "빅토르",
    characterType: "전투",
    recruitment: "레난캄프에서 제국군 추격을 피해 도망치는 과정에서 자동으로 합류합니다.",
  },
  valeria: {
    name: "발레리아",
    characterType: "전투",
    recruitment: "엘프 마을 감옥에서 탈출한 뒤 합류합니다.",
  },
  griffith: {
    name: "그리피스",
    characterType: "전투",
    recruitment: "북쪽 관문 전투 이후 자동으로 합류합니다.",
  },
  clive: {
    name: "클라이브",
    characterType: "전투",
    recruitment: "본거지 레벨 4 이후 리콘 여관에 나타날 때 말을 걸면 합류합니다.",
  },
  flik: {
    name: "프릭",
    characterType: "전투",
    recruitment: "본거지를 떠난 뒤 카쿠에서 다시 만나면 합류합니다.",
  },
  camille: {
    name: "카미유",
    characterType: "전투",
    recruitment: "카쿠 주점에서 대화하면 합류합니다.",
  },
  kreutz: {
    name: "크로이츠",
    characterType: "전투",
    recruitment: "험프리를 파티에 넣고 말을 걸면 합류합니다.",
  },
  stallion: {
    name: "스탈리온",
    characterType: "전투",
    recruitment: "크완다 로스만을 쓰러뜨린 뒤 자동으로 합류합니다.",
  },
  kage: {
    name: "카게",
    characterType: "전투",
    recruitment: "비밀 공장에서 만나 20,000 포치를 지불하면 합류합니다.",
  },
  "fu-su-lu": {
    name: "후-스-루-",
    characterType: "전투",
    recruitment: "코볼트 마을 여관에서 식사값 10,000 포치를 대신 내주면 합류합니다.",
  },
  kirkis: {
    name: "키르키스",
    characterType: "전투",
    recruitment: "본거지에서 윈디의 자객을 물리친 뒤 선착장으로 나가려 하면 합류합니다.",
  },
  milich: {
    name: "미르이히 오펜하이머",
    characterType: "전투",
    recruitment: "스칼레티시아 성 제압 후 처형하지 않고 받아들이면 합류합니다.",
  },
  pahn: {
    name: "판",
    characterType: "전투",
    recruitment: "아이린 구출 후 자동으로 합류합니다. 이후 결투에서 생존해야 최종 기록을 유지할 수 있습니다.",
  },
  "sonya-shulen": {
    name: "소니아 슈렌",
    characterType: "전투",
    recruitment: "샤사라자드 전투 후 본거지에 포로로 온 소냐에게 다시 말을 걸고 받아들이면 합류합니다.",
  },
  anji: {
    name: "안지",
    characterType: "전투",
    recruitment: "타이호와 야무크를 데리고 해적 요새로 가서 안지 일행을 쓰러뜨리면 합류합니다.",
  },
  "tai-ho": {
    name: "타이호",
    characterType: "전투",
    recruitment: "친치로린에서 1,000 포치를 따면 합류합니다.",
  },
  kanak: {
    name: "카낙",
    characterType: "전투",
    recruitment: "타이호와 야무크를 데리고 해적 요새로 가서 안지 일행을 쓰러뜨리면 합류합니다.",
  },
  "yam-koo": {
    name: "야무크",
    characterType: "전투",
    recruitment: "트란 성을 확보한 뒤 자동으로 합류합니다.",
  },
  leonardo: {
    name: "레오나르도",
    characterType: "전투",
    recruitment: "타이호와 야무크를 데리고 해적 요새로 가서 안지 일행을 쓰러뜨리면 합류합니다.",
  },
  hix: {
    name: "힉스",
    characterType: "전투",
    recruitment: "네크로드 성에 진입하면 자동으로 합류합니다.",
  },
  tengaar: {
    name: "텐가알",
    characterType: "전투",
    recruitment: "네크로드를 격파한 뒤 자동으로 합류합니다.",
  },
  varkas: {
    name: "바르카스",
    characterType: "전투",
    recruitment: "레판토 합류 후 본거지로 돌아오면 시드니아와 함께 합류합니다.",
  },
  sydonia: {
    name: "시드니아",
    characterType: "전투",
    recruitment: "레판토 합류 후 본거지로 돌아오면 바르카스와 함께 합류합니다.",
  },
  eileen: {
    name: "아이린",
    characterType: "전투",
    recruitment: "코안에서 크레이즈에게 인질로 잡힌 아이린을 구하면 합류합니다.",
  },
  leon: {
    name: "레온 실버버그",
    characterType: "비전투",
    recruitment: "카렉카에서 만난 뒤 본거지의 맷슈에게 편지를 받아 다시 전하면 합류합니다.",
  },
  georges: {
    name: "조르쥬",
    characterType: "비전투",
    recruitment: "키로프 여관에서 카드 게임에 승리하면 합류합니다.",
  },
  ivanov: {
    name: "이와노프",
    characterType: "비전투",
    recruitment: "미르이히를 쓰러뜨린 뒤 스칼레티시아 성에서 말을 걸면 합류합니다.",
  },
  jeane: {
    name: "진",
    characterType: "비전투",
    recruitment: "안테이 룬 상점에서 말을 걸면 합류합니다.",
  },
  eikei: {
    name: "에이케이",
    characterType: "전투",
    recruitment: "주인공 레벨 41 이상에서 테이엔의 에이케이에게 말을 걸면 합류합니다.",
  },
  maximillian: {
    name: "맥시밀리언",
    characterType: "비전투",
    recruitment: "모라비아 성 제압 후 북쪽 관문에서 말을 걸고 합류를 허락하면 합류합니다.",
  },
  sancho: {
    name: "산쵸",
    characterType: "비전투",
    recruitment: "모라비아 성 제압 후 북쪽 관문에서 맥시밀리언을 영입하면 함께 합류합니다.",
  },
  glenshiel: {
    name: "그렌실",
    characterType: "전투",
    recruitment: "테오와의 일대일 승부 이후 아렌과 함께 자동으로 합류합니다.",
  },
  alen: {
    name: "아렌",
    characterType: "전투",
    recruitment: "테오와의 일대일 승부 이후 그렌실과 함께 자동으로 합류합니다.",
  },
  tesla: {
    name: "테스라",
    characterType: "비전투",
    recruitment: "킴벌리를 영입한 뒤 대화하면 소니에르 감옥 침투에 협력하며 합류합니다.",
  },
  jabba: {
    name: "자바",
    characterType: "비전투",
    recruitment: "이름 없는 항아리를 얻어 리콘의 자바에게 감정받으면 합류합니다.",
  },
  lorelai: {
    name: "로렐라이",
    characterType: "전투",
    recruitment: "본거지를 얻은 뒤 주인공 레벨 25 이상에서 코안의 로렐라이에게 말을 걸면 합류합니다.",
  },
  blackman: {
    name: "블랙맨",
    characterType: "전투",
    recruitment: "카렉카에서 주변 식물을 밟지 않고 접근해 말을 걸면 합류합니다.",
  },
  joshua: {
    name: "요슈아",
    characterType: "비전투",
    recruitment: "드래곤을 치료한 뒤 드래곤 기사단 거점에서 자동으로 합류합니다.",
  },
  morgan: {
    name: "모건",
    characterType: "전투",
    recruitment: "클론 사원에서 말을 걸면 합류합니다.",
  },
  mose: {
    name: "모스",
    characterType: "전투",
    recruitment: "비밀 공장 사건을 마치고 화염창을 확보하면 자동으로 합류합니다.",
  },
  esmeralda: {
    name: "에스메랄다",
    characterType: "비전투",
    recruitment: "소니에르 감옥에서 얻을 수 있는 오팔을 안테이의 에스메랄다에게 건네면 합류합니다.",
  },
  melodye: {
    name: "멜로디",
    characterType: "비전투",
    recruitment: "키로프에서 소리의 봉인을 건네면 합류합니다.",
  },
  chapman: {
    name: "챔프먼",
    characterType: "비전투",
    recruitment: "안테이 방어구점에서 말을 걸면 합류를 요청합니다.",
  },
  liukan: {
    name: "류칸",
    characterType: "전투",
    recruitment: "소니에르 감옥에서 구출하면 합류합니다.",
  },
  fukien: {
    name: "훗켄",
    characterType: "전투",
    recruitment: "클론 사원을 방문하면 자동으로 합류합니다.",
  },
  futch: {
    name: "프치",
    characterType: "전투",
    recruitment: "드래곤을 치료한 뒤 자동으로 합류합니다.",
  },
  kasumi: {
    name: "카스미",
    characterType: "전투",
    recruitment: "스칼레티시아 성을 제압한 뒤 자동으로 합류합니다.",
  },
  maas: {
    name: "마스",
    characterType: "전투",
    recruitment: "트란 성 본거지를 얻은 뒤 대삼림 마을 대장간에서 말을 걸면 합류합니다.",
  },
  crowley: {
    name: "클로우리",
    characterType: "전투",
    recruitment: "본거지 레벨 4 이후 클론 사원 과거의 동굴 지하 2층 비밀방에서 말을 걸면 합류합니다.",
  },
  fuma: {
    name: "후마",
    characterType: "전투",
    recruitment: "용동 바깥 그림자 속에 숨어 있는 후마를 찾아 말을 걸면 합류합니다.",
  },
  moose: {
    name: "무스",
    characterType: "전투",
    recruitment: "마스, 미스, 모스를 파티에 넣고 전사의 마을에서 말을 걸면 합류합니다.",
  },
  meese: {
    name: "미스",
    characterType: "전투",
    recruitment: "마스를 영입한 뒤 드워프 마을 대장간에서 말을 걸면 합류합니다.",
  },
  sergei: {
    name: "쎄르게이",
    characterType: "전투",
    recruitment: "트란 성 확보 후 카쿠 주점에서 말을 걸면 합류합니다.",
  },
  kimberly: {
    name: "킴벌리",
    characterType: "전투",
    recruitment: "소니에르 감옥 침투 전에 맷슈의 편지를 안테이의 킴벌리에게 전하면 합류합니다.",
  },
  sheena: {
    name: "시나",
    characterType: "전투",
    recruitment: "레판토를 파티에 넣고 세이카 여관의 시나에게 말을 걸면 합류합니다.",
  },
  kessler: {
    name: "케스라",
    characterType: "전투",
    recruitment: "로니 벨을 도운 뒤 비밀 공장에서 말을 걸면 합류합니다.",
  },
  marco: {
    name: "마르코",
    characterType: "비전투",
    recruitment: "전사의 마을에서 게임에 승리하면 합류합니다.",
  },
  gen: {
    name: "겐",
    characterType: "전투",
    recruitment: "테이엔에서 류칸의 은거지로 건너가는 일을 도와주기로 하며 커맨돌과 함께 합류합니다.",
  },
  hugo: {
    name: "유고",
    characterType: "비전투",
    recruitment: "과거의 동굴에서 얻은 전쟁 두루마리를 건네면 합류합니다.",
  },
  hellion: {
    name: "헬리온",
    characterType: "전투",
    recruitment: "테이엔 여관에서 말을 걸고 합류 요청을 받아들이면 합류합니다.",
  },
  mina: {
    name: "미나",
    characterType: "전투",
    recruitment: "주인공에게 발가락 신발을 장비시킨 뒤 안테이 여관에서 춤을 추면 합류합니다.",
  },
  milia: {
    name: "미리어",
    characterType: "전투",
    recruitment: "드래곤 치료를 위해 월광초를 찾으러 떠날 때 자동으로 합류합니다.",
  },
  kamandol: {
    name: "커맨돌",
    characterType: "전투",
    recruitment: "테이엔에서 류칸의 은거지로 건너가는 일을 도와주기로 하며 겐과 함께 합류합니다.",
  },
  juppo: {
    name: "쥬포",
    characterType: "전투",
    recruitment: "코안 레판토 저택에서 만나며, 레판토 영입 후 본거지에 합류합니다.",
  },
  kasios: {
    name: "카시오스",
    characterType: "비전투",
    recruitment: "미르이히를 파티에 넣고 스칼레티시아 성의 카시오스에게 말을 걸면 합류합니다.",
  },
  viki: {
    name: "빅키",
    characterType: "비전투",
    recruitment: "엘프 마을로 향하는 길의 대삼림에서 만나 받아들이면 합류합니다.",
  },
  rubi: {
    name: "루비",
    characterType: "전투",
    recruitment: "키르키스 레벨 41 이상에서 키르키스를 파티에 넣고 코볼트 마을의 루비에게 말을 걸면 합류합니다.",
  },
  vincent: {
    name: "뱅쌍 드 브르",
    characterType: "비전투",
    recruitment: "모라비아 성 감옥으로 돌아가 감방 안의 빈센트에게 말을 걸면 합류합니다.",
  },
  meg: {
    name: "멕",
    characterType: "전투",
    recruitment: "쥬포를 파티에 넣고 카쿠 여관 근처의 멕에게 말을 걸면 합류합니다.",
  },
  taggart: {
    name: "타거트",
    characterType: "비전투",
    recruitment: "워렌을 영입할 때 자동으로 함께 합류합니다.",
  },
  giovanni: {
    name: "죠반니",
    characterType: "비전투",
    recruitment: "코안에서 아이린을 구출한 뒤 레판토와 함께 합류합니다.",
  },
  quincy: {
    name: "퀸시",
    characterType: "전투",
    recruitment: "동료 81명 이상을 모은 뒤 가란 성새의 퀸시에게 말을 걸면 합류합니다.",
  },
  apple: {
    name: "애플",
    characterType: "비전투",
    recruitment: "판누 야쿠타 성 제압 후 세이카의 맷슈 집에 나타납니다.",
  },
  kai: {
    name: "카이",
    characterType: "전투",
    recruitment: "본거지를 얻은 뒤 가란 성새에서 말을 걸면 합류합니다.",
  },
  lotte: {
    name: "롯테",
    characterType: "전투",
    recruitment: "카쿠에서 롯테의 고양이를 찾아 리콘의 롯테에게 돌려주면 합류합니다.",
  },
  mace: {
    name: "메스",
    characterType: "전투",
    recruitment: "본거지 레벨 4 이상에서 마스, 미스, 무스, 모스를 모두 파티에 넣고 시크 계곡의 메스에게 말을 걸면 합류합니다.",
  },
  onil: {
    name: "오닐",
    characterType: "비전투",
    recruitment: "트란 성 확보 후 세이카의 오닐에게 말을 걸면 합류합니다.",
  },
  kuromimi: {
    name: "크로미미",
    characterType: "전투",
    recruitment: "코볼트 마을에서 제국군과 함께 싸우는 과정에서 합류합니다.",
  },
  gon: {
    name: "곤",
    characterType: "전투",
    recruitment: "크로미미를 파티에 넣고 코볼트 마을의 곤에게 말을 걸면 합류합니다.",
  },
  antonio: {
    name: "안토니오",
    characterType: "전투",
    recruitment: "마리를 영입한 뒤 본거지에 요리사가 필요하다는 말을 들은 후 세이카 여관에서 말을 걸면 합류합니다.",
  },
  lester: {
    name: "레스터",
    characterType: "전투",
    recruitment: "키로프의 집 두 곳에서 스튜를 조사한 뒤 레스터에게 말을 걸면 합류합니다.",
  },
  kirke: {
    name: "키르케",
    characterType: "전투",
    recruitment: "로리마 성새를 제압한 뒤 키르키에게 말을 걸면 합류합니다.",
  },
  roc: {
    name: "로크",
    characterType: "비전투",
    recruitment: "코안 레판토 저택에 침입한 뒤 안쪽 방에서 말을 걸면 합류합니다.",
  },
  ledon: {
    name: "루돈",
    characterType: "비전투",
    recruitment: "로니 벨을 도운 뒤 비밀 공장에서 말을 걸면 합류합니다.",
  },
  sylvina: {
    name: "실비나",
    characterType: "전투",
    recruitment: "크완다 로스만을 쓰러뜨린 뒤 자동으로 합류합니다.",
  },
  "ronnie-bell": {
    name: "로니벨",
    characterType: "전투",
    recruitment: "비밀 공장 사건을 마치고 화염창을 확보하면 자동으로 합류합니다.",
  },
  gaspar: {
    name: "가스퍼",
    characterType: "비전투",
    recruitment: "카쿠 주점 지하에서 친치로린에 승리하면 합류합니다.",
  },
  window: {
    name: "윈도우",
    characterType: "비전투",
    recruitment: "과거의 동굴에서 얻은 창문의 봉인을 전사의 마을의 윈도우에게 건네면 합류합니다.",
  },
  marie: {
    name: "마리",
    characterType: "비전투",
    recruitment: "트란 성 확보 후 세이카 여관에서 말을 걸면 합류합니다.",
  },
  zen: {
    name: "젠",
    characterType: "비전투",
    recruitment: "클론 사원에서 빨강, 파랑, 노랑 꽃씨를 건네면 합류합니다.",
  },
  sarah: {
    name: "세일라",
    characterType: "전투",
    recruitment: "키로프 주민들과의 교환을 통해 얻은 비누를 건네면 합류합니다.",
  },
  sansuke: {
    name: "산스케",
    characterType: "전투",
    recruitment: "트란 성 확보 후 대삼림 마을에서 말을 걸면 합류합니다.",
  },
  qlon: {
    name: "클론",
    characterType: "비전투",
    recruitment: "스칼레티시아 성 사건 이후 안테이에서 말을 걸면 합류합니다.",
  },
  templeton: {
    name: "템플턴",
    characterType: "비전투",
    recruitment: "불탄 엘프 마을에서 말을 걸면 합류합니다.",
  },
  krin: {
    name: "쿠린",
    characterType: "전투",
    recruitment: "코안에서 레판토를 돕는 과정 이후 레판토와 함께 합류합니다.",
  },
  chandler: {
    name: "찬드라",
    characterType: "비전투",
    recruitment: "트란 성 확보 후 쿠와바 성새 바깥의 찬드라에게 말을 걸면 합류합니다.",
  },
} as const satisfies Record<SuikodenICharacterId, SuikodenICharacterLocalization>;
