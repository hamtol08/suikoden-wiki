/**
 * 환상수호전 I 몬스터 상세 화면에서 사용하는 위치별 스탯과 속성 반응 데이터입니다.
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

export const SUIKODEN_I_MONSTER_DETAIL_SOURCE_RECORDS = [
  {
    "originalName": "Crow",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 1)",
        "level": 4,
        "hp": 15,
        "str": 30,
        "mag": 5,
        "con": 7,
        "dex": 70,
        "spd": 27,
        "lck": 24
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Mosquito",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 1)",
        "level": 4,
        "hp": 17,
        "str": 30,
        "mag": 0,
        "con": 6,
        "dex": 50,
        "spd": 29,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Furball",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 1)",
        "level": 5,
        "hp": 18,
        "str": 31,
        "mag": 9,
        "con": 5,
        "dex": 5,
        "spd": 16,
        "lck": 12
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Red Soldier Ant",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 1)",
        "level": 8,
        "hp": 28,
        "str": 48,
        "mag": 0,
        "con": 10,
        "dex": 18,
        "spd": 22,
        "lck": 3
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Wild Boar",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 1)",
        "level": 7,
        "hp": 60,
        "str": 65,
        "mag": 0,
        "con": 19,
        "dex": 15,
        "spd": 20,
        "lck": 14
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Holly Boy",
    "stats": [
      {
        "location": "Magician's Island",
        "level": 3,
        "hp": 10,
        "str": 29,
        "mag": 10,
        "con": 7,
        "dex": 5,
        "spd": 15,
        "lck": 70
      },
      {
        "location": "Great Forest",
        "level": 5,
        "hp": 80,
        "str": 100,
        "mag": 20,
        "con": 40,
        "dex": 20,
        "spd": 80,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "FurFur",
    "stats": [
      {
        "location": "Magician's Island",
        "level": 4,
        "hp": 18,
        "str": 31,
        "mag": 7,
        "con": 5,
        "dex": 5,
        "spd": 16,
        "lck": 5
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Clay Doll",
    "stats": [
      {
        "location": "Magician's Island",
        "level": 12,
        "hp": 300,
        "str": 40,
        "mag": 25,
        "con": 2,
        "dex": 21,
        "spd": 17,
        "lck": 20
      },
      {
        "location": "Cave of the Past",
        "level": 44,
        "hp": 450,
        "str": 280,
        "mag": 160,
        "con": 70,
        "dex": 35,
        "spd": 65,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "△",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Bandit (Sword) (1)",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 5,
        "hp": 34,
        "str": 49,
        "mag": 14,
        "con": 6,
        "dex": 15,
        "spd": 18,
        "lck": 18
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Bandit (Sword) (2)",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 7,
        "hp": 55,
        "str": 52,
        "mag": 12,
        "con": 8,
        "dex": 20,
        "spd": 15,
        "lck": 16
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Bandit (Bow)",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 5,
        "hp": 32,
        "str": 47,
        "mag": 10,
        "con": 3,
        "dex": 19,
        "spd": 22,
        "lck": 22
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Black Wild Boar",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 7,
        "hp": 60,
        "str": 65,
        "mag": 0,
        "con": 19,
        "dex": 15,
        "spd": 20,
        "lck": 20
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Soldier Ant",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 4,
        "hp": 28,
        "str": 48,
        "mag": 0,
        "con": 10,
        "dex": 18,
        "spd": 22,
        "lck": 6
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Queen Ant",
    "stats": [
      {
        "location": "Mt. Seifu",
        "level": 15,
        "hp": 7000,
        "str": 75,
        "mag": 55,
        "con": 50,
        "dex": 25,
        "spd": 20,
        "lck": 55
      },
      {
        "location": "Seek Valley",
        "level": 52,
        "hp": 800,
        "str": 310,
        "mag": 270,
        "con": 80,
        "dex": 60,
        "spd": 110,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "◯",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Empire Soldier (Sword)",
    "stats": [
      {
        "location": "Rockland Military Government Office",
        "level": 8,
        "hp": 48,
        "str": 65,
        "mag": 10,
        "con": 7,
        "dex": 40,
        "spd": 15,
        "lck": 12
      },
      {
        "location": "Lenankamp",
        "level": 12,
        "hp": 58,
        "str": 80,
        "mag": 12,
        "con": 10,
        "dex": 40,
        "spd": 15,
        "lck": 27
      },
      {
        "location": "Seika",
        "level": 13,
        "hp": 55,
        "str": 75,
        "mag": 14,
        "con": 11,
        "dex": 40,
        "spd": 26,
        "lck": 24
      },
      {
        "location": "Kouan Military Government Office",
        "level": 20,
        "hp": 150,
        "str": 120,
        "mag": 35,
        "con": 40,
        "dex": 60,
        "spd": 50,
        "lck": 40
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Empire Soldier (Spear)",
    "stats": [
      {
        "location": "Rockland Military Government Office",
        "level": 8,
        "hp": 55,
        "str": 60,
        "mag": 8,
        "con": 7,
        "dex": 55,
        "spd": 15,
        "lck": 14
      },
      {
        "location": "Lenankamp",
        "level": 12,
        "hp": 65,
        "str": 75,
        "mag": 13,
        "con": 10,
        "dex": 55,
        "spd": 15,
        "lck": 27
      },
      {
        "location": "Seika",
        "level": 13,
        "hp": 68,
        "str": 70,
        "mag": 16,
        "con": 11,
        "dex": 55,
        "spd": 28,
        "lck": 24
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Empire Soldier (Bow)",
    "stats": [
      {
        "location": "Rockland Military Government Office",
        "level": 8,
        "hp": 44,
        "str": 60,
        "mag": 9,
        "con": 5,
        "dex": 65,
        "spd": 33,
        "lck": 17
      },
      {
        "location": "Lenankamp",
        "level": 12,
        "hp": 54,
        "str": 70,
        "mag": 9,
        "con": 6,
        "dex": 65,
        "spd": 33,
        "lck": 29
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Empire Soldier (Female)",
    "stats": [
      {
        "location": "Rockland Military Government Office",
        "level": 8,
        "hp": 50,
        "str": 65,
        "mag": 12,
        "con": 5,
        "dex": 55,
        "spd": 25,
        "lck": 25
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Empire Captain (Male)",
    "stats": [
      {
        "location": "Rockland Military Government Office",
        "level": 14,
        "hp": 100,
        "str": 95,
        "mag": 15,
        "con": 15,
        "dex": 45,
        "spd": 10,
        "lck": 25
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Killer Slime",
    "stats": [
      {
        "location": "Mt. Tigerwolf",
        "level": 7,
        "hp": 40,
        "str": 72,
        "mag": 55,
        "con": 34,
        "dex": 20,
        "spd": 22,
        "lck": 23
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Slasher Rabbit",
    "stats": [
      {
        "location": "Mt. Tigerwolf",
        "level": 6,
        "hp": 60,
        "str": 65,
        "mag": 6,
        "con": 10,
        "dex": 30,
        "spd": 29,
        "lck": 6
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Giant Snail",
    "stats": [
      {
        "location": "Mt. Tigerwolf",
        "level": 9,
        "hp": 120,
        "str": 95,
        "mag": 18,
        "con": 24,
        "dex": 35,
        "spd": 22,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Killer Rabbit",
    "stats": [
      {
        "location": "Around Seika and Kaku",
        "level": 10,
        "hp": 60,
        "str": 90,
        "mag": 7,
        "con": 15,
        "dex": 30,
        "spd": 29,
        "lck": 7
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Flying Squirrel",
    "stats": [
      {
        "location": "Around Seika and Kaku",
        "level": 11,
        "hp": 90,
        "str": 99,
        "mag": 9,
        "con": 25,
        "dex": 40,
        "spd": 35,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Beast Commander",
    "stats": [
      {
        "location": "Around Seika and Kaku",
        "level": 13,
        "hp": 90,
        "str": 60,
        "mag": 35,
        "con": 40,
        "dex": 30,
        "spd": 70,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Roc",
    "stats": [
      {
        "location": "Around Seika and Kaku",
        "level": 14,
        "hp": 110,
        "str": 125,
        "mag": 16,
        "con": 55,
        "dex": 55,
        "spd": 60,
        "lck": 20
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Giant Slug",
    "stats": [
      {
        "location": "Toran Lake Castle",
        "level": 15,
        "hp": 120,
        "str": 95,
        "mag": 15,
        "con": 35,
        "dex": 35,
        "spd": 22,
        "lck": 26
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Oannes",
    "stats": [
      {
        "location": "Toran Lake Castle",
        "level": 16,
        "hp": 200,
        "str": 90,
        "mag": 17,
        "con": 30,
        "dex": 10,
        "spd": 45,
        "lck": 12
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Ghost Armor",
    "stats": [
      {
        "location": "Toran Lake Castle",
        "level": 17,
        "hp": 250,
        "str": 110,
        "mag": 35,
        "con": 30,
        "dex": 30,
        "spd": 40,
        "lck": 27
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "◯"
    }
  },
  {
    "originalName": "Robot Soldier (Sword)",
    "stats": [
      {
        "location": "Lepant's Mansion",
        "level": 18,
        "hp": 150,
        "str": 135,
        "mag": 0,
        "con": 70,
        "dex": 20,
        "spd": 45,
        "lck": 0
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Robot Soldier (Spear)",
    "stats": [
      {
        "location": "Lepant's Mansion",
        "level": 18,
        "hp": 160,
        "str": 150,
        "mag": 0,
        "con": 65,
        "dex": 15,
        "spd": 40,
        "lck": 0
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Slot Man",
    "stats": [
      {
        "location": "Lepant's Mansion",
        "level": 19,
        "hp": 200,
        "str": 180,
        "mag": 110,
        "con": 50,
        "dex": 70,
        "spd": 80,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Holly Spirit",
    "stats": [
      {
        "location": "Great Forest",
        "level": 21,
        "hp": 350,
        "str": 150,
        "mag": 60,
        "con": 55,
        "dex": 55,
        "spd": 65,
        "lck": 70
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "△",
      "earth": "△",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Kobold (Sword)",
    "stats": [
      {
        "location": "Great Forest",
        "level": 20,
        "hp": 150,
        "str": 150,
        "mag": 20,
        "con": 48,
        "dex": 40,
        "spd": 49,
        "lck": 35
      },
      {
        "location": "Around the Village of the Elves",
        "level": 20,
        "hp": 150,
        "str": 150,
        "mag": 20,
        "con": 48,
        "dex": 40,
        "spd": 49,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Kobold (Bow)",
    "stats": [
      {
        "location": "Great Forest",
        "level": 20,
        "hp": 120,
        "str": 140,
        "mag": 10,
        "con": 42,
        "dex": 35,
        "spd": 45,
        "lck": 35
      },
      {
        "location": "Around the Village of the Elves",
        "level": 20,
        "hp": 120,
        "str": 140,
        "mag": 10,
        "con": 42,
        "dex": 35,
        "spd": 45,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Kobold (Mage)",
    "stats": [
      {
        "location": "Around the Village of the Elves",
        "level": 20,
        "hp": 50,
        "str": 100,
        "mag": 130,
        "con": 40,
        "dex": 70,
        "spd": 60,
        "lck": 37
      }
    ],
    "affinities": {
      "fire": "✕",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "△"
    }
  },
  {
    "originalName": "Strong Arm",
    "stats": [
      {
        "location": "Around the Village of the Elves",
        "level": 21,
        "hp": 300,
        "str": 200,
        "mag": 20,
        "con": 60,
        "dex": 50,
        "spd": 40,
        "lck": 29
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Eagle Man",
    "stats": [
      {
        "location": "Dwarf Trail",
        "level": 22,
        "hp": 150,
        "str": 165,
        "mag": 40,
        "con": 55,
        "dex": 75,
        "spd": 68,
        "lck": 40
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Death Boar",
    "stats": [
      {
        "location": "Dwarf Trail",
        "level": 22,
        "hp": 350,
        "str": 182,
        "mag": 10,
        "con": 45,
        "dex": 40,
        "spd": 35,
        "lck": 25
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "◯",
      "earth": "◯",
      "wind": "◯",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Dwarf",
    "stats": [
      {
        "location": "Dwarf Trail",
        "level": 21,
        "hp": 300,
        "str": 170,
        "mag": 25,
        "con": 55,
        "dex": 58,
        "spd": 56,
        "lck": 36
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Crimson Dwarf",
    "stats": [
      {
        "location": "Dwarves' Vault",
        "level": 23,
        "hp": 250,
        "str": 175,
        "mag": 27,
        "con": 35,
        "dex": 45,
        "spd": 60,
        "lck": 38
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Death Machine (Sword)",
    "stats": [
      {
        "location": "Dwarves' Vault",
        "level": 25,
        "hp": 150,
        "str": 180,
        "mag": 0,
        "con": 60,
        "dex": 40,
        "spd": 55,
        "lck": 0
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Death Machine (Spear)",
    "stats": [
      {
        "location": "Dwarves' Vault",
        "level": 25,
        "hp": 170,
        "str": 185,
        "mag": 0,
        "con": 65,
        "dex": 45,
        "spd": 50,
        "lck": 0
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Veteran Soldier (Bow)",
    "stats": [
      {
        "location": "Pannu Yakuta Castle",
        "level": 26,
        "hp": 250,
        "str": 175,
        "mag": 38,
        "con": 45,
        "dex": 50,
        "spd": 80,
        "lck": 47
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Veteran Soldier (Spear)",
    "stats": [
      {
        "location": "Pannu Yakuta Castle",
        "level": 26,
        "hp": 270,
        "str": 190,
        "mag": 40,
        "con": 55,
        "dex": 55,
        "spd": 70,
        "lck": 45
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Veteran Soldier (Female)",
    "stats": [
      {
        "location": "Pannu Yakuta Castle",
        "level": 26,
        "hp": 260,
        "str": 185,
        "mag": 42,
        "con": 50,
        "dex": 53,
        "spd": 80,
        "lck": 44
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Devil Armor",
    "stats": [
      {
        "location": "Pannu Yakuta Castle",
        "level": 27,
        "hp": 400,
        "str": 210,
        "mag": 50,
        "con": 60,
        "dex": 40,
        "spd": 50,
        "lck": 40
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "◯"
    }
  },
  {
    "originalName": "Devil Shield",
    "stats": [
      {
        "location": "Pannu Yakuta Castle",
        "level": 27,
        "hp": 250,
        "str": 195,
        "mag": 90,
        "con": 55,
        "dex": 56,
        "spd": 45,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Holly Master",
    "stats": [
      {
        "location": "Around Teien and Rikon",
        "level": 26,
        "hp": 400,
        "str": 240,
        "mag": 75,
        "con": 35,
        "dex": 50,
        "spd": 80,
        "lck": 90
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "△",
      "earth": "△",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Mad Ivy",
    "stats": [
      {
        "location": "Around Teien and Rikon",
        "level": 28,
        "hp": 600,
        "str": 235,
        "mag": 35,
        "con": 25,
        "dex": 75,
        "spd": 70,
        "lck": 33
      },
      {
        "location": "Scarleticia Castle",
        "level": 28,
        "hp": 600,
        "str": 235,
        "mag": 35,
        "con": 25,
        "dex": 75,
        "spd": 70,
        "lck": 33
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Creeper",
    "stats": [
      {
        "location": "Around Teien and Rikon",
        "level": 29,
        "hp": 300,
        "str": 210,
        "mag": 40,
        "con": 25,
        "dex": 90,
        "spd": 73,
        "lck": 25
      },
      {
        "location": "Scarleticia Castle",
        "level": 29,
        "hp": 300,
        "str": 210,
        "mag": 40,
        "con": 25,
        "dex": 90,
        "spd": 73,
        "lck": 25
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Red Slime",
    "stats": [
      {
        "location": "Soniere Prison",
        "level": 27,
        "hp": 150,
        "str": 225,
        "mag": 60,
        "con": 55,
        "dex": 50,
        "spd": 60,
        "lck": 45
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Viperman",
    "stats": [
      {
        "location": "Soniere Prison",
        "level": 30,
        "hp": 200,
        "str": 203,
        "mag": 55,
        "con": 60,
        "dex": 45,
        "spd": 70,
        "lck": 56
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Delf",
    "stats": [
      {
        "location": "Soniere Prison",
        "level": 25,
        "hp": 150,
        "str": 180,
        "mag": 40,
        "con": 85,
        "dex": 30,
        "spd": 30,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Nightmare",
    "stats": [
      {
        "location": "Soniere Prison",
        "level": 32,
        "hp": 150,
        "str": 250,
        "mag": 240,
        "con": 45,
        "dex": 60,
        "spd": 90,
        "lck": 70
      },
      {
        "location": "Scarleticia Castle",
        "level": 32,
        "hp": 150,
        "str": 250,
        "mag": 240,
        "con": 45,
        "dex": 60,
        "spd": 90,
        "lck": 70
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Dagon",
    "stats": [
      {
        "location": "Around Kirov",
        "level": 31,
        "hp": 400,
        "str": 230,
        "mag": 80,
        "con": 50,
        "dex": 70,
        "spd": 75,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Pseudo-Siren",
    "stats": [
      {
        "location": "Around Kirov",
        "level": 32,
        "hp": 250,
        "str": 260,
        "mag": 160,
        "con": 20,
        "dex": 60,
        "spd": 90,
        "lck": 40
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "△",
      "holy": "-"
    }
  },
  {
    "originalName": "Grizzly Bear",
    "stats": [
      {
        "location": "Around Kirov",
        "level": 34,
        "hp": 470,
        "str": 280,
        "mag": 35,
        "con": 30,
        "dex": 50,
        "spd": 50,
        "lck": 10
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Hawk Man",
    "stats": [
      {
        "location": "Kalekka",
        "level": 35,
        "hp": 300,
        "str": 245,
        "mag": 40,
        "con": 55,
        "dex": 90,
        "spd": 99,
        "lck": 55
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Shadow",
    "stats": [
      {
        "location": "Kalekka",
        "level": 36,
        "hp": 170,
        "str": 260,
        "mag": 60,
        "con": 45,
        "dex": 120,
        "spd": 88,
        "lck": 90
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Demon Hound",
    "stats": [
      {
        "location": "Kalekka",
        "level": 37,
        "hp": 700,
        "str": 250,
        "mag": 75,
        "con": 60,
        "dex": 70,
        "spd": 65,
        "lck": 45
      }
    ],
    "affinities": {
      "fire": "✕",
      "water": "◯",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Whip Wolf",
    "stats": [
      {
        "location": "Around Warriors' Village",
        "level": 38,
        "hp": 350,
        "str": 240,
        "mag": 75,
        "con": 70,
        "dex": 90,
        "spd": 150,
        "lck": 55
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Hell Hound",
    "stats": [
      {
        "location": "Around Warriors' Village",
        "level": 37,
        "hp": 300,
        "str": 258,
        "mag": 30,
        "con": 65,
        "dex": 70,
        "spd": 70,
        "lck": 40
      },
      {
        "location": "Moravia",
        "level": 50,
        "hp": 300,
        "str": 335,
        "mag": 30,
        "con": 80,
        "dex": 80,
        "spd": 80,
        "lck": 40
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Grave Master",
    "stats": [
      {
        "location": "Around Warriors' Village",
        "level": 39,
        "hp": 400,
        "str": 270,
        "mag": 20,
        "con": 80,
        "dex": 30,
        "spd": 50,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "△",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Sorcerer",
    "stats": [
      {
        "location": "Around Warriors' Village",
        "level": 40,
        "hp": 200,
        "str": 270,
        "mag": 190,
        "con": 30,
        "dex": 100,
        "spd": 90,
        "lck": 90
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Banshee",
    "stats": [
      {
        "location": "Cave of the Past",
        "level": 41,
        "hp": 120,
        "str": 270,
        "mag": 180,
        "con": 40,
        "dex": 110,
        "spd": 90,
        "lck": 70
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "△",
      "holy": "-"
    }
  },
  {
    "originalName": "Red Elemental",
    "stats": [
      {
        "location": "Cave of the Past",
        "level": 42,
        "hp": 80,
        "str": 250,
        "mag": 150,
        "con": 40,
        "dex": 90,
        "spd": 130,
        "lck": 66
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Larvae",
    "stats": [
      {
        "location": "Neclord's Castle",
        "level": 45,
        "hp": 180,
        "str": 260,
        "mag": 100,
        "con": 80,
        "dex": 90,
        "spd": 110,
        "lck": 50
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Demon Sorcerer",
    "stats": [
      {
        "location": "Neclord's Castle",
        "level": 46,
        "hp": 350,
        "str": 320,
        "mag": 290,
        "con": 50,
        "dex": 70,
        "spd": 100,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Hell Unicorn",
    "stats": [
      {
        "location": "Neclord's Castle",
        "level": 47,
        "hp": 700,
        "str": 380,
        "mag": 265,
        "con": 60,
        "dex": 85,
        "spd": 90,
        "lck": 100
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Black Elemental",
    "stats": [
      {
        "location": "Dragon's Den",
        "level": 48,
        "hp": 120,
        "str": 270,
        "mag": 240,
        "con": 60,
        "dex": 100,
        "spd": 140,
        "lck": 66
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Magic Shield",
    "stats": [
      {
        "location": "Dragon's Den",
        "level": 49,
        "hp": 190,
        "str": 280,
        "mag": 230,
        "con": 130,
        "dex": 80,
        "spd": 100,
        "lck": 37
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Sunshine King",
    "stats": [
      {
        "location": "Dragon's Den",
        "level": 50,
        "hp": 1600,
        "str": 340,
        "mag": 280,
        "con": 90,
        "dex": 95,
        "spd": 95,
        "lck": 50
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "△",
      "lightning": "-",
      "holy": "◯"
    }
  },
  {
    "originalName": "Ivy",
    "stats": [
      {
        "location": "Around the Dragon Knights' Fortress",
        "level": 49,
        "hp": 250,
        "str": 290,
        "mag": 170,
        "con": 80,
        "dex": 70,
        "spd": 110,
        "lck": 25
      },
      {
        "location": "Seek Valley",
        "level": 49,
        "hp": 250,
        "str": 290,
        "mag": 170,
        "con": 80,
        "dex": 70,
        "spd": 110,
        "lck": 25
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Shadow Man",
    "stats": [
      {
        "location": "Around the Dragon Knights' Fortress",
        "level": 50,
        "hp": 400,
        "str": 310,
        "mag": 60,
        "con": 60,
        "dex": 150,
        "spd": 130,
        "lck": 90
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Mirage",
    "stats": [
      {
        "location": "Around the Dragon Knights' Fortress",
        "level": 52,
        "hp": 400,
        "str": 330,
        "mag": 175,
        "con": 95,
        "dex": 130,
        "spd": 120,
        "lck": 70
      },
      {
        "location": "Around Moravia",
        "level": 52,
        "hp": 400,
        "str": 330,
        "mag": 175,
        "con": 95,
        "dex": 130,
        "spd": 120,
        "lck": 70
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Rock Buster",
    "stats": [
      {
        "location": "Seek Valley",
        "level": 51,
        "hp": 600,
        "str": 300,
        "mag": 240,
        "con": 90,
        "dex": 75,
        "spd": 80,
        "lck": 39
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "△",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Wyvern",
    "stats": [
      {
        "location": "Seek Valley",
        "level": 53,
        "hp": 1000,
        "str": 320,
        "mag": 260,
        "con": 85,
        "dex": 110,
        "spd": 120,
        "lck": 75
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Rabbit Bird",
    "stats": [
      {
        "location": "Around Moravia",
        "level": 51,
        "hp": 300,
        "str": 305,
        "mag": 160,
        "con": 50,
        "dex": 110,
        "spd": 60,
        "lck": 110
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Earth Golem",
    "stats": [
      {
        "location": "Around Moravia",
        "level": 53,
        "hp": 600,
        "str": 340,
        "mag": 230,
        "con": 110,
        "dex": 70,
        "spd": 70,
        "lck": 35
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "△",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Elite Soldier",
    "stats": [
      {
        "location": "Moravia",
        "level": 52,
        "hp": 400,
        "str": 340,
        "mag": 190,
        "con": 120,
        "dex": 120,
        "spd": 110,
        "lck": 60
      },
      {
        "location": "Floating Fortress of Shasarazade",
        "level": 54,
        "hp": 550,
        "str": 360,
        "mag": 180,
        "con": 120,
        "dex": 130,
        "spd": 130,
        "lck": 100
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Whip Master",
    "stats": [
      {
        "location": "Moravia",
        "level": 51,
        "hp": 700,
        "str": 320,
        "mag": 175,
        "con": 90,
        "dex": 85,
        "spd": 180,
        "lck": 55
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Ninja",
    "stats": [
      {
        "location": "Moravia",
        "level": 52,
        "hp": 450,
        "str": 340,
        "mag": 60,
        "con": 70,
        "dex": 140,
        "spd": 160,
        "lck": 90
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Magus",
    "stats": [
      {
        "location": "Moravia",
        "level": 54,
        "hp": 300,
        "str": 270,
        "mag": 290,
        "con": 50,
        "dex": 90,
        "spd": 125,
        "lck": 120
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "△",
      "earth": "△",
      "wind": "△",
      "lightning": "△",
      "holy": "◯"
    }
  },
  {
    "originalName": "Siren",
    "stats": [
      {
        "location": "Floating Fortress of Shasarazade",
        "level": 53,
        "hp": 300,
        "str": 260,
        "mag": 210,
        "con": 45,
        "dex": 70,
        "spd": 90,
        "lck": 80
      }
    ],
    "affinities": {
      "fire": "△",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "△",
      "holy": "-"
    }
  },
  {
    "originalName": "Kerberos",
    "stats": [
      {
        "location": "Floating Fortress of Shasarazade",
        "level": 55,
        "hp": 900,
        "str": 370,
        "mag": 160,
        "con": 70,
        "dex": 150,
        "spd": 180,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "✕",
      "water": "◯",
      "earth": "◯",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Ninja Master",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 8)",
        "level": 55,
        "hp": 400,
        "str": 330,
        "mag": 120,
        "con": 30,
        "dex": 140,
        "spd": 170,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Simurgh",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 8)",
        "level": 56,
        "hp": 700,
        "str": 315,
        "mag": 160,
        "con": 45,
        "dex": 80,
        "spd": 130,
        "lck": 55
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Orc",
    "stats": [
      {
        "location": "Around Gregminster (Chapter 8)",
        "level": 57,
        "hp": 1500,
        "str": 340,
        "mag": 30,
        "con": 5,
        "dex": 30,
        "spd": 15,
        "lck": 30
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "△",
      "holy": "-"
    }
  },
  {
    "originalName": "Imperial Guard (Male)",
    "stats": [
      {
        "location": "Gregminster Castle",
        "level": 56,
        "hp": 550,
        "str": 330,
        "mag": 200,
        "con": 130,
        "dex": 100,
        "spd": 90,
        "lck": 110
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Imperial Guard (Female)",
    "stats": [
      {
        "location": "Gregminster Castle",
        "level": 56,
        "hp": 500,
        "str": 325,
        "mag": 220,
        "con": 130,
        "dex": 110,
        "spd": 95,
        "lck": 115
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Phantom",
    "stats": [
      {
        "location": "Gregminster Castle",
        "level": 58,
        "hp": 550,
        "str": 335,
        "mag": 190,
        "con": 70,
        "dex": 150,
        "spd": 120,
        "lck": 95
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "-",
      "wind": "◯",
      "lightning": "-",
      "holy": "-"
    }
  },
  {
    "originalName": "Colossus",
    "stats": [
      {
        "location": "Gregminster Castle",
        "level": 59,
        "hp": 800,
        "str": 350,
        "mag": 100,
        "con": 90,
        "dex": 80,
        "spd": 60,
        "lck": 75
      }
    ],
    "affinities": {
      "fire": "-",
      "water": "-",
      "earth": "◯",
      "wind": "-",
      "lightning": "◯",
      "holy": "-"
    }
  },
  {
    "originalName": "Ekidonna",
    "stats": [
      {
        "location": "Gregminster Castle",
        "level": 60,
        "hp": 1000,
        "str": 370,
        "mag": 310,
        "con": 40,
        "dex": 100,
        "spd": 90,
        "lck": 60
      }
    ],
    "affinities": {
      "fire": "◯",
      "water": "-",
      "earth": "△",
      "wind": "-",
      "lightning": "-",
      "holy": "-"
    }
  }
] as const satisfies readonly MonsterDetailSourceRecord[];
