import { buildGameplayDetailPath } from "@/constants/app/app-config";

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
  duelDialogLabel: "Duel Dialogue",
  duelPlayerLabel: "조작",
  duelLocationLabel: "장소",
  duelEnemyMoveLabel: "상대 행동",
  duelResponseLabel: "권장 대응",
  duelCueLabel: "대사",
  warCommandLabel: "War Commands",
  warRecordLabel: "War Battle Records",
  warRoleLabel: "Army Roles",
  warObjectiveLabel: "목표",
  warLocationLabel: "전장",
  facilityLabel: "Facilities",
  facilityLocationLabel: "위치",
  facilityUnlockLabel: "개방",
  checklistLabel: "Archive Checklist",
} as const;

export const GAMEPLAY_DUEL_ACTION_LABELS = {
  attack: "공격",
  defend: "방어",
  special: "필살",
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
    id: "war-battle",
    href: buildGameplayDetailPath("war-battle"),
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

export type GameplayWarRoleRecord = {
  body: string;
  game: string;
  points: readonly string[];
  title: string;
};

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
  duelRecords?: readonly GameplayDuelRecord[];
  warBattleRecords?: readonly GameplayWarBattleRecord[];
  warCommandGroups?: readonly GameplayWarCommandGroup[];
  warRoleRecords?: readonly GameplayWarRoleRecord[];
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

const duelPattern = (
  enemyMove: GameplayDuelActionId,
  response: GameplayDuelActionId,
  lines: readonly string[],
): GameplayDuelPattern => ({
  enemyMove,
  response,
  lines,
});

export const GAMEPLAY_DUEL_RECORDS = [
  {
    game: "Suikoden I",
    opponent: "크완다 로스만",
    player: "주인공",
    location: "판누 야쿠타",
    note: "첫 본격 일기토입니다. 상대 대사는 공격, 방어, 필살 중 다음 행동을 암시합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "You're good. Can you withstand this?",
        "You got me! Perhaps I have underestimated you.",
        "You don't stand a chance! But I shall show no mercy!",
        "Hahaha! Puny attacks like that won't work on me!",
        "Grrr! You are good, son of Teo! Now it's my turn!",
        "You shall taste the sharpness of my blade!",
        "At a loss, are you? But I'll show you no mercy!",
        "Damn! I underestimated you.",
        "Ha ha! You'll have to do better than that!",
        "Heh, now it's my turn.",
        "Taste the sharpness of my blade!",
        "That's nothing!",
        "What's the matter? If you won't attack, then I will!",
        "Well done. But can you take this?",
        "Whoa! Pretty good, Teo's little boy. Now it's my turn!",
        "You're better than I thought. But how about this?",
      ]),
      duelPattern("defend", "attack", [
        "It's no use! I see through your attack!",
        "Come on, your turn! Come at me with everything you've got!",
        "How cautious you are...As befits a leader.",
        "Think you can break through my impenetrable defenses, do you?",
        "You got me! But not this time!",
        "Come on, you're boring me. Show me what you've got!",
        "Arghhh! I underestimated you.",
        "Carefully...",
        "Cautious, aren't you. Just like a leader.",
        "Damn! My turn!",
        "Don't bore me. Show me what you can do.",
        "Forget it. You're methods are obvious.",
        "Now it's your turn. Come on!",
        "Pretty good. How about another one?",
        "What now?",
        "Can you break my invulnerable defenses?",
      ]),
      duelPattern("special", "defend", [
        "Take this!",
        "Haha, come on! Once more!",
        "Very well...If that's how you want it!",
        "This is going nowhere. Very well...Prepare yourself!",
        "Victory is decided in an instant! I shall put my all into this strike!",
        "Impossible! How are you able to dodge my attacks?!",
        "Here we go again!",
        "I'll get you!",
        "I'll show you how it's done.",
        "Impossible! You can't avoid my blows!",
        "Interesting. How about another round?",
        "Take that!",
        "The next one won't be so easy!",
        "Victory is near! I strike with all my might!",
        "We're getting nowhere. Here I come!",
        "Well done. You're a worthy opponent. Now it's my turn!",
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
        "This is getting nowhere... Here I come!",
        "Saw through my attack, did you?",
        "Is that all you've got? Now it's my turn!",
        "Pathetic, Pahn. Let me show you how it's done!",
        "My sword is still sharp as ever!",
        "You got me with that one, Pahn... Now it's my turn!",
        "Do you see how we're mismatched?",
        "Pretty good, Pahn.",
        "The numbness in my hands, it's real.",
        "All you can do is defend, Pahn? No mercy!",
      ]),
      duelPattern("defend", "attack", [
        "Come at me, Pahn!",
        "It seems I lost my cool. I must be more careful...",
        "This next one will not get past me!",
        "Impressive, Pahn, seeing through my attack like that. I must be more cautious.",
        "All right, do it again!",
        "Come on, Pahn. See if you can kill me.",
        "Do you give up?",
        "What's the matter, Pahn? How about another round?",
        "You're a smart one, Pahn.",
        "You're better than I thought.",
      ]),
      duelPattern("special", "defend", [
        "You have shown me your techniques... Now, I shall show you mine!",
        "If you will not come at me... then I shall come to you!",
        "My most powerful technique...",
        "Can you dodge my blade, Pahn?",
        "Excellent, Pahn. You're a real fighter. Here's another!",
        "Finish me with a single blow!",
        "Hmmm. Here I come again!",
        "Impossible! Take that!",
        "That's... no good.",
        "The next one will be more painful.",
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
        "Do you understand now just how great the difference in our strength is?",
        "This is going nowhere... Here I come!",
        "Always on the defensive... That will not bring you victory!",
        "Did you see that coming?",
        "That was nothing. Now it's my turn.",
        "That was pretty good. Now it's my turn.",
        "The numbness in my hands, it's real!",
        "Well done!",
        "You're soft...soft! This is how you attack!",
        "Here I come, my son.",
      ]),
      duelPattern("defend", "attack", [
        "Impressive, seeing through my attack like that... I must be more cautious myself.",
        "Show me how strong you have become!",
        "The leader of the Liberation Army... No wonder you are cautious.",
        "Hmm? Finished already?",
        "Good, try it again!",
        "I mustn't underestimate you.",
        "I underestimated you! What's wrong? Another round?",
        "I'll see you coming next time!",
        "I'm losing my cool. I must be more cautious!",
        "Show me what you've learned.",
      ]),
      duelPattern("special", "defend", [
        "My most powerful technique...",
        "My sword is the sword of His Majesty the Emperor. I shall not hold back!",
        "This one will hit its mark!",
        "If you will not come at me... then I shall come to you!",
        "Think you can surpass me, do you?",
        "I'm delighted, my son. You're quite a warrior. But here's another!",
        "My deadly sword...",
        "Now that I've seen what you've got, I'll show you what I can do.",
        "That's... no good.",
        "The next one will be more painful.",
        "Hmmm. Here I come again!",
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
        "That's how to attack. Got it?",
        "Okay, let's see what you've got.",
        "Whoa, nice stroke. That's the way.",
        "Nice try. I'll go next.",
        "Whoa. Better be careful. Someone's gonna get hurt.",
        "This is just a waste of time.",
        "That's the spirit!",
        "Hey, be careful how you swing that thing!",
        "That's how to attack. Got it?",
        "Oops, I might have put too much into that one.",
      ]),
      duelPattern("defend", "attack", [
        "C'mon take a swing at me.",
        "Want to try that again?",
        "One more time. Don't mess up.",
        "Better be more careful. You'll get yourself hurt.",
        "That's how to attack. Try it yourself.",
        "In combat, caution is the best weapon.",
        "Okay, it's your turn. Let's see what you've got.",
        "Don't get too confident or you'll get yourself killed.",
        "Hey, wanna try that again?",
        "Hey, that was a surprise.",
      ]),
      duelPattern("special", "defend", [
        "Here goes! Hope you can handle this!!!",
        "Now it's my turn. Don't faint on me.",
        "Here it comes. Better get out of the way.",
        "I'm going again. Don't mess up this time.",
        "The next one's going to hurt.",
        "One of us is going to have to finish this.",
        "You dodged my sword, the kid gloves are coming off...",
        "Okay, maybe I should show you what I've really got.",
        "This is how you deliver a deadly attack.....",
        "Ha ha ha! You're something else. Wanna try that again?",
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
        "Okay, first a little test...",
        "Thinking the same thing, eh. C'mon let's go.",
        "Hey, you're not gonna win that way y'know.",
        "Ha ha ha ha! Too bad, boy!!! Now it's my turn!!!",
        "YOWCH!!!!! Nice one! My hand's all numb!",
        "ARGH!!! Nice shot... But it ain't over yet!",
        "Ouch! That musta hurt! Sorry about that.",
        "Ouch!!! Pretty good!",
        "Ouch! I definitely felt that one!",
      ]),
      duelPattern("defend", "attack", [
        "Damn! Dammit!!! Gotta think!!!",
        "He he, doesn't work so well the second time, eh.",
        "C'mon. It's your turn now.",
        "Woah!!! That was scary!!!!!",
        "Dammit!!! I might lose this one!!!",
        "Ha ha! Wanna try that again?",
        "C'mon. It's your turn now.",
        "He he, I guess I'd better hold back a little.",
        "He he, first show me what you've got, boy.",
        "I won't fall for that one again!",
      ]),
      duelPattern("special", "defend", [
        "Argh! I'll get you next time!!!",
        "That was fun!!! Let's go again!!!!",
        "Way to go, kid! But I won't lose that easy!",
        "That won't get us anywhere! Try this one on fer size!!!!!",
        "Okay, boy, here I go!",
        "If you liked that, I'll give you some more.",
        "He he, I'll show you how to attack!",
        "Better get ready. Here I go again.",
        "I'm just about ready to take the kid gloves off.",
        "Okay, it's my turn next!",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "루카 브라이트",
    player: "주인공",
    location: "듀난 성 숲",
    note: "직전 보스전 이후 이어지는 일기토입니다. 루카는 필살 대사가 많아 방어 판독이 특히 중요합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "Idiot!!!! Is that the best you can do!!!!",
        "You little punk!!!",
        "Hah...... A draw..........",
        "That's nothing!",
        "Hah hah hah hah!!! Die! Die!!! Die!!!!",
        "Hahaha!!! Yes! I'll disgrace your head under the sun!!!",
        "I'll get you!! You insect!!!!!!",
        "That's right!!!!! Battle!!!! I just love a good fight!!!!!!!!!",
        "Pretty tricky!!!! You punk!!!!!",
        "You impertinent little pig!!!!!",
      ]),
      duelPattern("defend", "attack", [
        "Fool!!!! That can't stop me!!!!!!",
        "Hahahahahahah!!!!",
        "Hah...hah hah hah... Fighting is my life.....",
        "I won't let an insect like you get in my way!!!",
        "Kill!!! I'll kill you!!!!!!",
        "Pathetic!!!! That's what you call power!!!!",
        "Ridiculous!!! You think a punk like you can stop me!!!!!",
        "You fool!!!!!!",
        "You little punk.....",
        "You're nothing!!! Nothing! Nothing!! Nothing!!!!!",
      ]),
      duelPattern("special", "defend", [
        "Feel my strength!!! Feel my sword!!!!!!!",
        "Hah hah hah hah hah!!!!!!!!!!",
        "Hah........ Are we still doing this....",
        "I love it! I love it! [Hero's Name]!!!!! Hah hah hah hah !!!!!",
        "I won't be defeated by a mere blade!!!!!!",
        "Insect!!!! You really thought you could defeat me!!!!!!",
        "Pig!! Pig!!! Pig!!!! Pig!!!!! Piiiiiiiiiiig!!!!!!!!",
        "Pig!!!! Die!!!!!!!!!",
        "Pig!!!!! You dare wound me!!!!!",
        "You can't take it forever!!! A pathetic insect like you!!!",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "한 커닝엄",
    player: "주인공",
    location: "르누이유",
    note: "겐카쿠의 과거와 이어지는 후반 일기토입니다. 필살 대사를 놓치지 않는 것이 안정적입니다.",
    patterns: [
      duelPattern("attack", "special", [
        "And now it's my turn.",
        "Foolish boy!!!",
        "Ho ho ho.... You taught him well, Genkaku my friend....",
        "I can't let you past here, son.",
        "I may be old, but I haven't lost my sword arm.",
        "Unf..... Your father would have been proud to see you today...",
        "Very good, boy.",
        "You can't defend yourself forever.",
        "You can't win like that, boy.",
        "You're a tough one....",
      ]),
      duelPattern("defend", "attack", [
        "Genkaku............. You raised a good son....",
        "I should have avoided that cheap little shot...",
        "Let me see your power, Genkaku's son!!!",
        "The leader of the [Army Name] Army is cautious I see....",
        "Try that again, boy.",
        "Unf...you like to take risks, eh.",
        "Well struck.... It seems I should be more careful....",
        "What will you do now, boy?",
        "What's wrong? Want to try again?",
        "You think you can beat me, boy?",
      ]),
      duelPattern("special", "defend", [
        "Can you take this?",
        "Let's bury our past here, boy!!",
        "Let's see if you can withstand another of my blows!",
        "Now feel my deadly sword.",
        "Watch and learn, boy. Here's how to wield a sword!!!",
        "Watch closely, boy!!",
        "Yes, but can you defend against my sword!!!",
        "You think my sword has lost its bite!!!",
        "You'll have to do better than that.",
        "You've got spirit...",
      ]),
    ],
  },
  {
    game: "Suikoden II",
    opponent: "조이 아트레이드",
    player: "주인공",
    location: "천산 고개",
    note: "엔딩 분기와 연결되는 마지막 일기토입니다. 특정 결말을 노릴 때는 공격보다 방어 유지가 중요합니다.",
    patterns: [
      duelPattern("attack", "special", [
        "Bad move...... [Hero's Name].... That'll get you hurt....",
        "Here goes.... [Hero's Name]........",
        "Just like the old days....",
        "Let's finish this long, long battle....",
        "Next it's my turn. [Hero's Name].........",
        "That's right. That's the way.....",
        "Why won't you fight, [Hero's Name]!!!",
        "That's right.....",
      ]),
      duelPattern("defend", "attack", [
        "[Hero's Name]...... You......",
        "[Hero's Name]..........",
        "Let's test your strength.... [Hero's Name].......",
        "That's right...... [Hero's Name].........",
        "This reminds me of the old days....",
        "Try again! [Hero's Name].......",
        "You're the leader of the [Army Name] Army, [Hero's Name]........",
        "...........",
      ]),
      duelPattern("special", "defend", ["None"]),
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
        body: "기병·보병 중심의 돌격입니다. Bow에는 강하지만 Magic을 만나면 큰 손실을 입습니다.",
      },
      {
        name: "Bow",
        strongAgainst: "Magic",
        weakAgainst: "Charge",
        body: "어느 상황에서도 일정 피해를 주지만 Charge에는 손해를 보기 쉽습니다. 적 병력이 얼마 남지 않았을 때 마무리용으로 안정적입니다.",
      },
      {
        name: "Magic",
        strongAgainst: "Charge",
        weakAgainst: "Bow",
        body: "Charge를 완전히 받아칠 수 있지만 Bow에는 취약합니다. 적이 돌격을 고를 때 가장 강하게 작동합니다.",
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
    note: "이전 전투와 같은 상성 운영입니다. 적 행동을 읽지 못하면 전략가 강화 후 Charge를 쓰는 선택지도 있습니다.",
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
    note: "밀리히는 Magic 계열을 섞어 쓰므로 정찰 실패 시 Bow가 비교적 안전한 선택입니다.",
    tags: ["재전", "Magic 대응", "Bow"],
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
    note: "화염창 장착 Charge가 승부를 가릅니다. 이전 전투와 달리 정면 돌파가 가능한 시점입니다.",
    tags: ["화염창", "Charge", "테오"],
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
    note: "소니아는 Charge와 Magic을 섞어 씁니다. 닌자 정찰을 적극 활용하면 안정적으로 진행됩니다.",
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
    title: "전략가와 Charge",
    body: "전략가는 Charge 위력을 끌어올립니다. 적 행동을 확인한 뒤 강화 Charge를 맞추면 큰 손실 없이 병력을 깎을 수 있습니다.",
    points: ["맷슈", "레온", "애플", "Charge 강화"],
  },
  {
    game: "Suikoden I",
    title: "상인과 용기사",
    body: "상인은 적 병력을 빼앗는 보조 수단이고, 용기사는 Bow를 제외한 상황에서 강한 특수 공격을 맡습니다.",
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
    body: "회복 능력과 높은 방어는 장기전의 안전장치입니다. 주인공의 빛나는 방패 계열 지원과 후안 계열 회복을 전선 근처에 둡니다.",
    points: ["회복", "방어", "전선 유지", "전멸 방지"],
  },
  {
    game: "Suikoden II",
    title: "화염창과 특수 능력",
    body: "화염창과 룬 명령은 제한 횟수를 갖지만 전황을 크게 바꿉니다. 적이 줄지어 있을 때 직선 범위 공격을 맞추는 것이 좋습니다.",
    points: ["화염창", "룬 명령", "범위", "횟수 관리"],
  },
] as const satisfies readonly GameplayWarRoleRecord[];

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
    duelRecords: GAMEPLAY_DUEL_RECORDS,
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
    id: "war-battle",
    href: buildGameplayDetailPath("war-battle"),
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
    warBattleRecords: GAMEPLAY_WAR_BATTLE_RECORDS,
    warCommandGroups: GAMEPLAY_WAR_COMMAND_GROUPS,
    warRoleRecords: GAMEPLAY_WAR_ROLE_RECORDS,
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

const GAMEPLAY_DETAIL_ALIASES = {
  "army-battle": "war-battle",
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
