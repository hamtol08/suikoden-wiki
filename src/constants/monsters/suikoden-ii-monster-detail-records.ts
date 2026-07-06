/**
 * 환상수호전 II 몬스터 상세 화면에서 사용하는 위치별 레벨, HP, 사거리와 속성 반응 데이터입니다.
 */

export type MonsterStatSourceRow = {
  location: string;
  level: number;
  hp: number;
  range?: string;
  str?: number;
  mag?: number;
  con?: number;
  dex?: number;
  spd?: number;
  lck?: number;
};

export type MonsterAffinitySourceRecord = {
  fire: string;
  water: string;
  earth: string;
  wind: string;
  lightning: string;
  holy: string;
  darkness?: string;
  shield?: string;
  sword?: string;
};

export type MonsterStatusResistanceSourceRecord = {
  death: string;
  poison: string;
  silence: string;
  sleep: string;
  stun: string;
};

export type MonsterDetailSourceRecord = {
  originalName: string;
  stats: readonly MonsterStatSourceRow[];
  affinities: MonsterAffinitySourceRecord | null;
  statusResistances?: MonsterStatusResistanceSourceRecord;
};

export const SUIKODEN_II_MONSTER_DETAIL_SOURCE_RECORDS = [
  {
    "originalName": "Highlands (Sword)",
    "stats": [
      {
        "location": "Tenzan Pass",
        "level": 2,
        "hp": 15,
        "range": "M"
      },
      {
        "location": "Kyaro Town",
        "level": 4,
        "hp": 40,
        "range": "S"
      },
      {
        "location": "Mercenary Fortress",
        "level": 8,
        "hp": 60,
        "range": "M"
      },
      {
        "location": "Highland Garrison",
        "level": 19,
        "hp": 90,
        "range": "M"
      },
      {
        "location": "Greenhill City",
        "level": 33,
        "hp": 130,
        "range": "S"
      },
      {
        "location": "Muse City",
        "level": 19,
        "hp": 80,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 36,
        "hp": 180,
        "range": "S"
      },
      {
        "location": "Muse City",
        "level": 41,
        "hp": 180,
        "range": "S"
      },
      {
        "location": "Greenhill Forest",
        "level": 47,
        "hp": 270,
        "range": "S"
      },
      {
        "location": "Rockaxe Castle",
        "level": 51,
        "hp": 280,
        "range": "S"
      },
      {
        "location": "L'Renouille",
        "level": 54,
        "hp": 290,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Highlands (Spear)",
    "stats": [
      {
        "location": "Tenzan Pass",
        "level": 2,
        "hp": 15,
        "range": "M"
      },
      {
        "location": "Kyaro Town",
        "level": 4,
        "hp": 35,
        "range": "S"
      },
      {
        "location": "Mercenary Fortress",
        "level": 8,
        "hp": 55,
        "range": "M"
      },
      {
        "location": "Highland Garrison",
        "level": 19,
        "hp": 110,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 19,
        "hp": 100,
        "range": "M"
      },
      {
        "location": "Two River City",
        "level": 32,
        "hp": 110,
        "range": "M"
      },
      {
        "location": "Greenhill City",
        "level": 33,
        "hp": 120,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 36,
        "hp": 180,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 41,
        "hp": 187,
        "range": "M"
      },
      {
        "location": "Greenhill Forest",
        "level": 47,
        "hp": 280,
        "range": "M"
      },
      {
        "location": "Rockaxe Castle",
        "level": 51,
        "hp": 290,
        "range": "M"
      },
      {
        "location": "L'Renouille",
        "level": 54,
        "hp": 310,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Commander",
    "stats": [
      {
        "location": "Tenzan Pass",
        "level": 4,
        "hp": 50,
        "range": "M"
      },
      {
        "location": "Mercenary Fortress",
        "level": 11,
        "hp": 120,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 22,
        "hp": 120,
        "range": "M"
      },
      {
        "location": "Two River City",
        "level": 34,
        "hp": 170,
        "range": "M"
      },
      {
        "location": "Muse City",
        "level": 43,
        "hp": 220,
        "range": "M"
      },
      {
        "location": "Greenhill Forest",
        "level": 49,
        "hp": 380,
        "range": "M"
      },
      {
        "location": "Rockaxe Castle",
        "level": 52,
        "hp": 350,
        "range": "M"
      },
      {
        "location": "L'Renouille",
        "level": 56,
        "hp": 370,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Holly Boy",
    "stats": [
      {
        "location": "Area A",
        "level": 1,
        "hp": 10,
        "range": "S"
      },
      {
        "location": "Area F1",
        "level": 15,
        "hp": 45,
        "range": "S"
      },
      {
        "location": "Greenhill City",
        "level": 15,
        "hp": 45,
        "range": "S"
      },
      {
        "location": "Greenhill Forest",
        "level": 15,
        "hp": 45,
        "range": "S"
      },
      {
        "location": "Greenhill Forest",
        "level": 30,
        "hp": 83,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "FurFur",
    "stats": [
      {
        "location": "Area A",
        "level": 2,
        "hp": 30,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Slasher Rabbit",
    "stats": [
      {
        "location": "Area A",
        "level": 3,
        "hp": 40,
        "range": "L"
      },
      {
        "location": "North Sparrow Pass",
        "level": 3,
        "hp": 40,
        "range": "L"
      },
      {
        "location": "Area B",
        "level": 3,
        "hp": 40,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Wolf",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 5,
        "hp": 60,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Bandit A",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 4,
        "hp": 35,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Bandit B",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 4,
        "hp": 35,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Bandit C",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 4,
        "hp": 35,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "KillerBee",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 3,
        "hp": 0,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "BonBon",
    "stats": [
      {
        "location": "North Sparrow Pass",
        "level": 4,
        "hp": 40,
        "range": "M"
      },
      {
        "location": "Area B",
        "level": 4,
        "hp": 40,
        "range": "M"
      },
      {
        "location": "Area A",
        "level": 4,
        "hp": 45,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Spider",
    "stats": [
      {
        "location": "Area B",
        "level": 5,
        "hp": 60,
        "range": "S"
      },
      {
        "location": "Ryube Forest",
        "level": 7,
        "hp": 100,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Highlands (Bow)",
    "stats": [
      {
        "location": "Kyaro Town",
        "level": 4,
        "hp": 30,
        "range": "L"
      },
      {
        "location": "Mercenary Fortress",
        "level": 8,
        "hp": 45,
        "range": "L"
      },
      {
        "location": "Highland Garrison",
        "level": 19,
        "hp": 80,
        "range": "L"
      },
      {
        "location": "Muse City",
        "level": 19,
        "hp": 70,
        "range": "L"
      },
      {
        "location": "Two River City",
        "level": 32,
        "hp": 95,
        "range": "L"
      },
      {
        "location": "Greenhill City",
        "level": 33,
        "hp": 110,
        "range": "L"
      },
      {
        "location": "Muse City",
        "level": 36,
        "hp": 160,
        "range": "L"
      },
      {
        "location": "Muse City",
        "level": 41,
        "hp": 170,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 47,
        "hp": 260,
        "range": "L"
      },
      {
        "location": "Rockaxe Castle",
        "level": 51,
        "hp": 270,
        "range": "L"
      },
      {
        "location": "L'Renouille",
        "level": 54,
        "hp": 285,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Rowd",
    "stats": [
      {
        "location": "Kyaro Town",
        "level": 25,
        "hp": 3000,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Woodpecker",
    "stats": [
      {
        "location": "Area A",
        "level": 5,
        "hp": 40,
        "range": "L"
      },
      {
        "location": "Ryube Forest",
        "level": 5,
        "hp": 45,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "ShadowDog",
    "stats": [
      {
        "location": "Area A",
        "level": 7,
        "hp": 85,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Wild Boar",
    "stats": [
      {
        "location": "Ryube Forest",
        "level": 10,
        "hp": 300,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Giant Snail",
    "stats": [
      {
        "location": "Ryube Forest",
        "level": 8,
        "hp": 80,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Sickle",
    "stats": [
      {
        "location": "Area C1",
        "level": 10,
        "hp": 70,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "GoldBoar",
    "stats": [
      {
        "location": "Area C1",
        "level": 11,
        "hp": 250,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "KillSpider",
    "stats": [
      {
        "location": "Area C1",
        "level": 7,
        "hp": 130,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Mr.Venus",
    "stats": [
      {
        "location": "Sindar Ruins",
        "level": 16,
        "hp": 270,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Magician",
    "stats": [
      {
        "location": "Sindar Ruins",
        "level": 13,
        "hp": 90,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "MegaWatt",
    "stats": [
      {
        "location": "Sindar Ruins",
        "level": 14,
        "hp": 150,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "△",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Creeper",
    "stats": [
      {
        "location": "Sindar Ruins",
        "level": 12,
        "hp": 120,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "△",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Armadillon",
    "stats": [
      {
        "location": "Highland Garrison",
        "level": 18,
        "hp": 120,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Armadilloid",
    "stats": [
      {
        "location": "Highland Garrison",
        "level": 25,
        "hp": 70,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Killer Rabbit",
    "stats": [
      {
        "location": "Highland Garrison",
        "level": 19,
        "hp": 170,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Flying Squirrel",
    "stats": [
      {
        "location": "Area D",
        "level": 18,
        "hp": 75,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Nariqua",
    "stats": [
      {
        "location": "Area D",
        "level": 20,
        "hp": 130,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "-",
      "darkness": "-",
      "shield": "△",
      "sword": "△"
    }
  },
  {
    "originalName": "DarkBunny",
    "stats": [
      {
        "location": "Area D",
        "level": 19,
        "hp": 120,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Zombie (A)",
    "stats": [
      {
        "location": "North Window",
        "level": 22,
        "hp": 130,
        "range": "M"
      },
      {
        "location": "North Window",
        "level": 24,
        "hp": 140,
        "range": "M"
      },
      {
        "location": "Tinto Pass",
        "level": 42,
        "hp": 140,
        "range": "M"
      },
      {
        "location": "Tinto Mines",
        "level": 42,
        "hp": 130,
        "range": "M"
      },
      {
        "location": "Tigermouth Village",
        "level": 42,
        "hp": 150,
        "range": "M"
      },
      {
        "location": "Crom Village",
        "level": 41,
        "hp": 140,
        "range": "M"
      },
      {
        "location": "Tinto Mines",
        "level": 43,
        "hp": 210,
        "range": "M"
      },
      {
        "location": "Tinto City",
        "level": 45,
        "hp": 210,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Zombie (B)",
    "stats": [
      {
        "location": "North Window",
        "level": 22,
        "hp": 150,
        "range": "M"
      },
      {
        "location": "North Window",
        "level": 24,
        "hp": 160,
        "range": "M"
      },
      {
        "location": "Tinto Pass",
        "level": 42,
        "hp": 155,
        "range": "M"
      },
      {
        "location": "Tinto Mines",
        "level": 42,
        "hp": 140,
        "range": "M"
      },
      {
        "location": "Tigermouth Village",
        "level": 42,
        "hp": 165,
        "range": "M"
      },
      {
        "location": "Crom Village",
        "level": 41,
        "hp": 160,
        "range": "M"
      },
      {
        "location": "Tinto Mines",
        "level": 43,
        "hp": 230,
        "range": "M"
      },
      {
        "location": "Tinto City",
        "level": 45,
        "hp": 230,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Griffin",
    "stats": [
      {
        "location": "Cave of the Wind",
        "level": 21,
        "hp": 135,
        "range": "L"
      },
      {
        "location": "Forest Village",
        "level": 32,
        "hp": 370,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Minos",
    "stats": [
      {
        "location": "Cave of the Wind",
        "level": 23,
        "hp": 170,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "△",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "SunKing",
    "stats": [
      {
        "location": "Cave of the Wind",
        "level": 24,
        "hp": 350,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Sorcerer",
    "stats": [
      {
        "location": "Cave of the Wind",
        "level": 22,
        "hp": 110,
        "range": "L"
      },
      {
        "location": "North Window",
        "level": 26,
        "hp": 170,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Shadow Man",
    "stats": [
      {
        "location": "North Window",
        "level": 25,
        "hp": 220,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Spikebeak",
    "stats": [
      {
        "location": "Area E",
        "level": 27,
        "hp": 180,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Rockadillo",
    "stats": [
      {
        "location": "Area E",
        "level": 26,
        "hp": 140,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Sandillo",
    "stats": [
      {
        "location": "Area E",
        "level": 33,
        "hp": 120,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Siren",
    "stats": [
      {
        "location": "Two River Sewers",
        "level": 27,
        "hp": 110,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "✕",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Shadow",
    "stats": [
      {
        "location": "Two River Sewers",
        "level": 29,
        "hp": 130,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DevilEye",
    "stats": [
      {
        "location": "Two River Sewers",
        "level": 28,
        "hp": 150,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "△",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "LandShark",
    "stats": [
      {
        "location": "Two River Sewers",
        "level": 28,
        "hp": 110,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Eagle Man",
    "stats": [
      {
        "location": "Kobold Village Forest",
        "level": 32,
        "hp": 180,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Mirage",
    "stats": [
      {
        "location": "Kobold Village Forest",
        "level": 31,
        "hp": 220,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "RaggedOne",
    "stats": [
      {
        "location": "Area F1",
        "level": 29,
        "hp": 165,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Sauroid",
    "stats": [
      {
        "location": "Area F1",
        "level": 30,
        "hp": 200,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Monwer",
    "stats": [
      {
        "location": "Greenhill City",
        "level": 32,
        "hp": 90,
        "range": ""
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Melonzoo",
    "stats": [
      {
        "location": "Greenhill City",
        "level": 31,
        "hp": 167,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "HollyElf",
    "stats": [
      {
        "location": "Greenhill City",
        "level": 32,
        "hp": 170,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "PapaHolly",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 32,
        "hp": 650,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Red)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 270,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Blue)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 230,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Yellow)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 230,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Green)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 230,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Pink)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 230,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "DoReMi Elf (Aqua)",
    "stats": [
      {
        "location": "Path to Matilda",
        "level": 33,
        "hp": 230,
        "range": "L"
      },
      {
        "location": "Greenhill Forest",
        "level": 46,
        "hp": 230,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "ZombieSlug",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 33,
        "hp": 320,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Phantom",
    "stats": [
      {
        "location": "Area G",
        "level": 35,
        "hp": 250,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "PinkBird",
    "stats": [
      {
        "location": "Area G",
        "level": 34,
        "hp": 210,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "TimeKnight",
    "stats": [
      {
        "location": "Area C2",
        "level": 35,
        "hp": 160,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "WhiteTiger",
    "stats": [
      {
        "location": "Area C2",
        "level": 35,
        "hp": 230,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Tiger",
    "stats": [
      {
        "location": "Banner Pass",
        "level": 37,
        "hp": 180,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "RanRan",
    "stats": [
      {
        "location": "Banner Pass",
        "level": 36,
        "hp": 140,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "RinRin",
    "stats": [
      {
        "location": "Banner Pass",
        "level": 36,
        "hp": 150,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "TenTen",
    "stats": [
      {
        "location": "Banner Pass",
        "level": 36,
        "hp": 130,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Samurai",
    "stats": [
      {
        "location": "Banner Pass",
        "level": 38,
        "hp": 250,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Air Lizard",
    "stats": [
      {
        "location": "Tinto Pass",
        "level": 42,
        "hp": 350,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "KillerDog",
    "stats": [
      {
        "location": "Tinto Pass",
        "level": 41,
        "hp": 180,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "GhostSlug",
    "stats": [
      {
        "location": "Area H",
        "level": 40,
        "hp": 450,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Skeleton (Sword)",
    "stats": [
      {
        "location": "Area H",
        "level": 39,
        "hp": 170,
        "range": "S"
      },
      {
        "location": "Tinto Mines",
        "level": 44,
        "hp": 200,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "◯",
      "sword": "△"
    }
  },
  {
    "originalName": "Skeleton (Spear)",
    "stats": [
      {
        "location": "Area H",
        "level": 39,
        "hp": 178,
        "range": "M"
      },
      {
        "location": "Tinto Mines",
        "level": 44,
        "hp": 208,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "◯",
      "sword": "△"
    }
  },
  {
    "originalName": "Sierra",
    "stats": [
      {
        "location": "Tigermouth Village",
        "level": 47,
        "hp": 2800,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "△",
      "holy": "◯",
      "darkness": "-",
      "shield": "◯",
      "sword": "△"
    }
  },
  {
    "originalName": "Hell Unicorn",
    "stats": [
      {
        "location": "Tinto Mines",
        "level": 46,
        "hp": 570,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "✕",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "◯",
      "sword": "△"
    }
  },
  {
    "originalName": "Neclordia",
    "stats": [
      {
        "location": "Tinto Mines",
        "level": 45,
        "hp": 320,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯",
      "darkness": "△",
      "shield": "◯",
      "sword": "△"
    }
  },
  {
    "originalName": "EyeFlower",
    "stats": [
      {
        "location": "Area F2",
        "level": 45,
        "hp": 260,
        "range": ""
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Kookaburra",
    "stats": [
      {
        "location": "Area F2",
        "level": 47,
        "hp": 320,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "TargetGirl",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 48,
        "hp": 270,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "-",
      "darkness": "-",
      "shield": "△",
      "sword": "△"
    }
  },
  {
    "originalName": "GrandHolly",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 49,
        "hp": 1020,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Holly Fairy",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 47,
        "hp": 260,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Karayans (A)",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 49,
        "hp": 350,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Karayans (B)",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 49,
        "hp": 350,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Karayans (C)",
    "stats": [
      {
        "location": "Greenhill Forest",
        "level": 49,
        "hp": 350,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "IronMoon",
    "stats": [
      {
        "location": "Area C3",
        "level": 50,
        "hp": 440,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Copper Sun",
    "stats": [
      {
        "location": "Area C3",
        "level": 51,
        "hp": 600,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Fisheye",
    "stats": [
      {
        "location": "Area C3",
        "level": 48,
        "hp": 230,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Fei Yu",
    "stats": [
      {
        "location": "Area G",
        "level": 50,
        "hp": 280,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Li Lan",
    "stats": [
      {
        "location": "Area G",
        "level": 50,
        "hp": 320,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Shiu Lin",
    "stats": [
      {
        "location": "Area G",
        "level": 40,
        "hp": 260,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "BlackTiger",
    "stats": [
      {
        "location": "Area G",
        "level": 52,
        "hp": 420,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Cockatrice",
    "stats": [
      {
        "location": "Rockaxe Castle",
        "level": 52,
        "hp": 440,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Hippogriff",
    "stats": [
      {
        "location": "Rockaxe Castle",
        "level": 53,
        "hp": 360,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "M-Knight",
    "stats": [
      {
        "location": "Rockaxe Castle",
        "level": 53,
        "hp": 410,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "HawkMan",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 37,
        "hp": 260,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Spiker",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 34,
        "hp": 120,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Assassin",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 35,
        "hp": 140,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Pixie",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 36,
        "hp": 60,
        "range": "L"
      },
      {
        "location": "Mt. Rakutei",
        "level": 55,
        "hp": 130,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "△",
      "darkness": "-",
      "shield": "△",
      "sword": "△"
    }
  },
  {
    "originalName": "SkyKnight",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 52,
        "hp": 270,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Leathercut",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 53,
        "hp": 220,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "IronClaw",
    "stats": [
      {
        "location": "Mt. Rakutei",
        "level": 54,
        "hp": 320,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Minotaurus",
    "stats": [
      {
        "location": "Area I",
        "level": 54,
        "hp": 280,
        "range": "M"
      },
      {
        "location": "Tenzan Pass",
        "level": 54,
        "hp": 300,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Colossus",
    "stats": [
      {
        "location": "Area I",
        "level": 58,
        "hp": 1500,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Bronzem",
    "stats": [
      {
        "location": "L'Renouille",
        "level": 58,
        "hp": 1700,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Magus",
    "stats": [
      {
        "location": "L'Renouille",
        "level": 56,
        "hp": 350,
        "range": "L"
      },
      {
        "location": "Tenzan Pass",
        "level": 54,
        "hp": 330,
        "range": "L"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Chimera",
    "stats": [
      {
        "location": "L'Renouille",
        "level": 55,
        "hp": 750,
        "range": "S"
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  },
  {
    "originalName": "Salamander",
    "stats": [
      {
        "location": "Sindar Ruins",
        "level": 15,
        "hp": 200,
        "range": "M"
      }
    ],
    "affinities": {
      "fire": "✕",
      "water": "◯",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-",
      "darkness": "-",
      "shield": "-",
      "sword": "-"
    }
  }
] as const satisfies readonly MonsterDetailSourceRecord[];
