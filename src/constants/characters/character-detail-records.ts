/**
 * 캐릭터 상세 페이지에 쓰이는 상세 기록, 장비, 협력 공격 데이터를 정의합니다.
 */

export type CharacterDetailRecord = {
  role: {
    recruitment: readonly string[];
    overall: readonly string[];
    weapon: {
      type: string;
      range: string;
      startingLevel: string;
    };
    rune: {
      attached: readonly string[];
      recommended: readonly string[];
    };
    maxLevelStatus: Record<string, string>;
    equipment: {
      default: Record<string, string>;
      recommended: Record<string, string>;
    };
    uniteAttacks: readonly string[];
  };
};

export const CHARACTER_DETAIL_RECORDS = {
  "suikoden-i": {
    "hero": {
      "role": {
        "recruitment": [
          "티르는 환상수호전 I의 주인공으로, 게임 시작과 함께 일행에 합류한 상태입니다. 파티에서 제외할 수 없습니다."
        ],
        "overall": [
          "티르는 항상 파티에 포함되는 필수 멤버이며, 전반적인 능력치가 균형 잡힌 편입니다. 공격력이 안정적으로 성장하고 문장 마법도 무난하게 다룰 수 있습니다. 카이와 사용하는 사제 공격은 다수의 적을 상대할 때 강력하며, 소울이터는 즉사 마법과 공격 마법 모두 뛰어난 주력 문장입니다."
        ],
        "weapon": {
          "type": "Bo Staff",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "소울이터*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "이벤트 진행 후 티르는 소울이터를 고정 문장으로 지니게 됩니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "866",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "5",
          "lvl 4": "3",
          "atk": "218",
          "def": "171",
          "str": "188",
          "pdf": "168",
          "skl": "220",
          "mdf": "",
          "mag": "178",
          "spd": "217",
          "eva": "",
          "luc": "178"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Gloves",
            "other2": "Boots"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Earth Boots"
          }
        },
        "uniteAttacks": [
          "티르는 스승 카이와 함께 사제 공격을 사용할 수 있습니다."
        ]
      }
    },
    "lepant": {
      "role": {
        "recruitment": [
          "아이린을 구한 뒤 레판토가 자동으로 합류합니다."
        ],
        "overall": [
          "레판토는 전열에서 안정적으로 싸우는 강력한 물리 공격수입니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "레판토는 반격의 문장이나 필살의 문장과 궁합이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "822",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "172",
          "def": "144",
          "str": "322",
          "pdf": "",
          "skl": "178",
          "mdf": "",
          "mag": "129",
          "spd": "141",
          "eva": "",
          "luc": "147"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Power Ring",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "레판토는 부부 공격과 가족 공격에 참여할 수 있습니다."
        ]
      }
    },
    "mathiu": {
      "role": {
        "recruitment": [
          "주인공이 해방군의 지도자가 되기로 결심한 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "luc": {
      "role": {
        "recruitment": [
          "트란 성에서 자동으로 합류합니다."
        ],
        "overall": [
          "루크는 강력한 마법형 캐릭터입니다. 체력이 낮아 전열 운용은 부담스럽고, 후열에서는 일반 공격을 하기 어렵기 때문에 마법 의존도가 높습니다. 가드 로브와 스피드 링이 고정 장비라 방어 장비 선택지도 좁지만, 순수 마법 성능만큼은 크로울리 다음가는 수준입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "Wind Rune"
          ],
          "recommended": [
            "마법 능력을 살리려면 바람의 문장을 선풍의 문장으로 강화하거나, 번개의 문장 계열을 장착하는 운용이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "506",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "9",
          "lvl 4": "9",
          "atk": "54",
          "def": "71",
          "str": "58",
          "pdf": "79",
          "skl": "162",
          "mdf": "",
          "mag": "266",
          "spd": "190",
          "eva": "",
          "luc": "78"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe*",
            "shield": "-",
            "other1": "Speed Ring*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Guard Robe*",
            "shield": "-",
            "other1": "Speed Ring*",
            "other2": "Earth Boots"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "humphrey": {
      "role": {
        "recruitment": [
          "해방군의 기존 생존 멤버들이 새 본거지에서 합류한 뒤 험프리가 자동으로 합류합니다."
        ],
        "overall": [
          "험프리는 강력한 전열 공격수이자 방어형 탱커입니다. 힘과 방어력이 높지만 속도와 명중 안정성이 낮으므로, 속도나 공격 신뢰도를 보완하는 장비를 주면 더 오래 활약할 수 있습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "Clone Rune or Killer Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "881",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "245",
          "def": "221",
          "str": "400",
          "pdf": "350",
          "skl": "130",
          "mdf": "",
          "mag": "79",
          "spd": "125",
          "eva": "",
          "luc": "120"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "Cape",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Windspun Armor",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "험프리는 크린과 함께 울퉁불퉁 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kasim-hazil": {
      "role": {
        "recruitment": [
          "모라비아 성 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 검",
          "무기 사거리: S",
          "무기 시작 레벨: 13"
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "13"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "속도가 다소 부족하므로 질풍의 문장이 보완책이 됩니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "1013",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "265",
          "def": "188",
          "str": "425",
          "pdf": "",
          "skl": "151",
          "mdf": "",
          "mag": "80",
          "spd": "133",
          "eva": "",
          "luc": "113"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Ninja Suit",
            "shield": "-",
            "other1": "Gauntlet",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Crimson Cape",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "kwanda-rosman": {
      "role": {
        "recruitment": [
          "판누 야쿠타에서 콴다를 일기토로 쓰러뜨린 뒤 다음 선택지를 고르면 합류합니다.",
          "* 뭔가 이상하다.",
          "* 우리와 함께해 달라."
        ],
        "overall": [
          "콴다는 방어 성장과 중장비 착용 폭이 뛰어나, 레벨만 충분하다면 1편에서 손꼽히는 탱커로 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "햇살의 문장이나 신행법의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "864",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "233",
          "def": "245",
          "str": "403",
          "pdf": "426",
          "skl": "124",
          "mdf": "",
          "mag": "79",
          "spd": "110",
          "eva": "",
          "luc": "121"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Windspun Armor",
            "shield": "Earth Shield",
            "other1": "Speed Ring",
            "other2": "Mangosh"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "pesmerga": {
      "role": {
        "recruitment": [
          "네크로드 성 최상층에서 페슈메르가에게 말을 걸면 합류합니다.",
          "페슈메르가를 영입하려면 본거지 레벨이 4 이상이어야 합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "분신의 문장을 사용할 수 있으며, 필살의 문장도 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "1033",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "244",
          "def": "255",
          "str": "404",
          "pdf": "411",
          "skl": "100",
          "mdf": "",
          "mag": "77",
          "spd": "58",
          "eva": "",
          "luc": "114"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Dragon Armor*",
            "shield": "Steel Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Dragon Armor*",
            "shield": "Chaos Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": []
      }
    },
    "gremio": {
      "role": {
        "recruitment": [
          "크레이즈에게 첫 임무를 받기 전 자동으로 합류합니다. 소니에르 사건 이후 이탈하지만, 다른 107성을 모두 모았다면 최종 결전 직전에 다시 합류합니다."
        ],
        "overall": [
          "그레미오는 초반부 필수 파티 멤버입니다. 능력치 성장은 평균적이지만, 중거리 무기를 사용해 전열과 후열 모두 배치할 수 있습니다. 무기 최종 강화 시 화력이 꽤 올라 평균적인 힘을 보완할 수 있고, 판과 함께 사용하는 부적 공격은 불균형 없이 높은 피해를 줄 수 있습니다. 티르의 HP가 위급할 때는 전투 중 티르를 보호하기도 합니다.",
          "레벨 60 이후에는 힘 성장 유형이 크게 좋아집니다. 고레벨 육성을 활용해 96레벨 이상까지 올리면 주요 전사형 캐릭터에 가까운 공격수로도 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "그레미오는 전반적으로 평균적인 능력치를 지닙니다. 마법 문장을 사용할 수는 있지만 주문 사용 횟수가 넉넉하지 않으므로, 번영의 문장이나 신행법의 문장처럼 보조 성격의 문장이 어울립니다. 후반에는 필살의 문장도 선택지가 될 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "752",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "185",
          "def": "191",
          "str": "355",
          "pdf": "315",
          "skl": "167",
          "mdf": "",
          "mag": "106",
          "spd": "124",
          "eva": "",
          "luc": "169"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Cape",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "그레미오는 판과 함께 부적 공격과 수호 공격에 참여할 수 있습니다."
        ]
      }
    },
    "warren": {
      "role": {
        "recruitment": [
          "모라비아 성 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 창",
          "무기 사거리: M",
          "무기 시작 레벨: 12"
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "12"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 공격형 문장이 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "829",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "169",
          "def": "172",
          "str": "319",
          "pdf": "304",
          "skl": "160",
          "mdf": "",
          "mag": "105",
          "spd": "125",
          "eva": "",
          "luc": "131"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "kun-to": {
      "role": {
        "recruitment": [
          "화염창을 운반할 배를 빌려준 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "cleo": {
      "role": {
        "recruitment": [
          "그레그민스터에서 티르 일행에 자동으로 합류합니다."
        ],
        "overall": [
          "클레오는 초반부 주요 전투 파티의 필수 멤버입니다. 장거리 무기, 중간급 방어구, 문장 마법을 함께 활용할 수 있어 후열 배치에 잘 맞습니다. 티르의 HP가 위급할 때는 전투 중 티르를 보호하기도 합니다."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "클레오는 문장 마법 성장치가 좋아 마법 문장 운용에 적합합니다. 레크나트가 티르를 지키라고 불의 문장을 맡기므로 초반에는 그대로 써도 좋습니다. 이후 선택지가 늘어나면 높은 주문 사용 횟수를 살려 다른 원소 문장으로 바꾸거나, 불의 문장을 열화의 문장으로 올리는 것도 좋습니다. 후반에는 류수의 문장을 장착하면 빠르고 안정적인 회복 담당으로 활약할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "809",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "7",
          "lvl 4": "5",
          "atk": "180",
          "def": "166",
          "str": "161",
          "pdf": "167",
          "skl": "201",
          "mdf": "",
          "mag": "195",
          "spd": "186",
          "eva": "",
          "luc": "108"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "Medicine (x6)"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Wing Boots",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "클레오는 아이린, 발레리아 또는 소니아 슈렌과 함께 미녀 공격을 사용할 수 있습니다."
        ]
      }
    },
    "viktor": {
      "role": {
        "recruitment": [
          "그레그민스터를 떠난 뒤 빅토르가 자동으로 합류합니다."
        ],
        "overall": [
          "빅토르는 본편 진행 중 자주 필수 멤버로 들어오는 전열 공격수입니다. 물리 능력치가 강해 1편에서 손꼽히는 물리 화력을 보여주며, 레벨이 오를수록 HP와 방어력도 충분히 따라옵니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "빅토르는 호랑이 늑대산에서 얻는 분신의 문장을 잘 활용합니다. 중검 사용자라면 장착할 수 있지만, 빅토르가 전투 파티에 자주 들어가고 획득 시점도 이르기 때문에 그대로 맡기기 좋습니다. 후반에는 치명타 화력을 살리는 필살의 문장도 대안이 됩니다. 무기에는 불의 문장 조각이나 번개의 문장 조각을 붙이면 좋고, 물리 특화 운용에서는 분노의 문장과 2회공격의 문장 조합으로 화력을 크게 끌어올릴 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "842",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "242",
          "def": "184",
          "str": "204",
          "pdf": "209",
          "skl": "108",
          "mdf": "",
          "mag": "125",
          "spd": "160",
          "eva": "155",
          "luc": "151"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Boots",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "valeria": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 발레리아가 자동으로 합류합니다."
        ],
        "overall": [
          "발레리아는 강력한 전열 공격수입니다. 고유 문장인 매의 문장은 안정적인 피해를 주기 좋아 꾸준한 화력 담당으로 쓰기 좋습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Falcon Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
          "발레리아는 매의 문장을 고정 장착하고 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "876",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "4",
          "lvl 4": "1",
          "atk": "228",
          "def": "181",
          "str": "380",
          "pdf": "344",
          "skl": "151",
          "mdf": "",
          "mag": "131",
          "spd": "147",
          "eva": "",
          "luc": "136"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "발레리아는 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "griffith": {
      "role": {
        "recruitment": [
          "북쪽 관문에서 그리피스를 쓰러뜨리면 선택과 관계없이 자동으로 합류합니다."
        ],
        "overall": [
          "그리피스는 검을 사용하는 전열형 캐릭터입니다. 무기 시작 레벨이 높아 합류 직후에도 기본 화력을 확보하기 쉽습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "반격의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "810",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "170",
          "def": "154",
          "str": "320",
          "pdf": "331",
          "skl": "131",
          "mdf": "",
          "mag": "115",
          "spd": "119",
          "eva": "",
          "luc": "130"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Speed Ring",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "clive": {
      "role": {
        "recruitment": [
          "로리마 지역 사건 이후 리콘 여관에 무작위로 나타납니다. 그때 말을 걸면 합류합니다."
        ],
        "overall": [
          "클라이브는 강력한 후열 물리 공격수입니다. 총 스톰의 화력은 일부 전열 S거리 캐릭터에 맞먹고, 속도도 매우 뛰어납니다. 물리·마법 방어는 높지 않으므로 후열에 두는 편이 좋으며, 세팅에 따라 공격과 보조를 모두 맡는 다재다능한 전투 요원이 될 수 있습니다."
        ],
        "weapon": {
          "type": "Gun",
          "range": "L",
          "startingLevel": "13"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "후열 물리 운용을 보조하는 문장이 잘 맞습니다. 높은 속도와 후열 전투 능력 덕분에 스파크의 문장을 활용하기 좋고, 필살의 문장도 유용합니다. 마법 특화 캐릭터는 아니지만 대지의 문장이나 물의 문장을 장착하면 보조 주문 담당으로도 쓸 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "875",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "195",
          "def": "150",
          "str": "345",
          "pdf": "290",
          "skl": "255",
          "mdf": "",
          "mag": "130",
          "spd": "190",
          "eva": "",
          "luc": "168"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Magic Robe",
            "shield": "-",
            "other1": "Cape",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Crimson Cape",
            "other2": "Earth Boots"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "flik": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 카쿠에서 빅토르와 주인공이 말을 걸면 자동으로 합류합니다."
        ],
        "overall": [
          "플릭은 주요 흐름에서 자주 동행하는 전열형 캐릭터입니다. 물리 능력이 안정적이고 번개의 문장도 무난하게 다룹니다. 번개의 문장을 뇌명의 문장으로 강화하면 높은 피해를 낼 수 있는 번개 계열 전력이 됩니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "Lightning Rune"
          ],
          "recommended": [
            "초기 장착 문장인 번개의 문장은 탈착할 수 있습니다. 뇌명의 문장으로 강화하는 선택이 무난하며, 레벨이 오른 뒤에는 검 공격의 비중도 커집니다. 분노의 문장이나 2회공격의 문장을 쓰면 강력한 전열 공격수로 운용할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "877",
          "lvl 1": "8",
          "lvl 2": "6",
          "lvl 3": "4",
          "lvl 4": "2",
          "atk": "190",
          "def": "152",
          "str": "188",
          "pdf": "150",
          "skl": "192",
          "mdf": "",
          "mag": "161",
          "spd": "194",
          "eva": "",
          "luc": "149"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "Cape",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Power Gloves",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "플릭은 아렌, 그렌실과 함께 미남 공격에 참여할 수 있습니다."
        ]
      }
    },
    "camille": {
      "role": {
        "recruitment": [
          "카쿠에서 말을 걸면 자동으로 합류합니다."
        ],
        "overall": [
          "카밀은 중거리 무기를 쓰는 균형형 캐릭터이며, 마법 성장도 나쁘지 않습니다."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "마법 성장도 나쁘지 않으므로 불의 문장이나 물의 문장처럼 공격·회복 마법을 보조하는 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "802",
          "lvl 1": "8",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "3",
          "atk": "172",
          "def": "138",
          "str": "322",
          "pdf": "262",
          "skl": "250",
          "mdf": "",
          "mag": "166",
          "spd": "172",
          "eva": "",
          "luc": "133"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "카밀은 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kreutz": {
      "role": {
        "recruitment": [
          "험프리를 파티에 넣고 용동굴에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "크로이츠는 물리 전투에 특화된 전열형 캐릭터입니다. 속도가 낮은 대신 방어 쪽에 무게가 실려 있으며, 험프리와 비슷한 계열로 운용할 수 있습니다. 중장비 착용 폭이 넓고 풍사의 갑옷을 장비할 수 있어, 전열에서 방패 역할을 맡기 좋습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "속도가 낮으므로 질풍의 문장으로 보완하기 좋습니다. 높은 물리 능력을 살리려면 필살의 문장도 좋은 선택입니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "889",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "234",
          "def": "190",
          "str": "394",
          "pdf": "361",
          "skl": "136",
          "mdf": "",
          "mag": "86",
          "spd": "87",
          "eva": "",
          "luc": "100"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Half Armor",
            "shield": "Steel Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Windspun Armor",
            "shield": "Earth Shield",
            "other1": "Mangosh",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "stallion": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "스탈리온은 속도가 매우 높은 궁수입니다. 대부분의 전투에서 먼저 행동하기 쉬운 후열 전력입니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "True Holy Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
            "진정한 신행법의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "696",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "4",
          "lvl 4": "1",
          "atk": "131",
          "def": "166",
          "str": "286",
          "pdf": "275",
          "skl": "185",
          "mdf": "",
          "mag": "142",
          "spd": "255",
          "eva": "",
          "luc": "144"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "Wing Boots*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Wing Boots*",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "스탈리온은 엘프 공격과 와일드 애로우 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kage": {
      "role": {
        "recruitment": [
          "비밀 공장에서 말을 걸고 의뢰비 20,000 포치를 지불하면 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 다트",
          "무기 사거리: L",
          "무기 시작 레벨: 9"
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필살의 문장이 가장 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "787",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "145",
          "def": "171",
          "str": "295",
          "pdf": "272",
          "skl": "190",
          "mdf": "",
          "mag": "125",
          "spd": "255",
          "eva": "",
          "luc": "118"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "카게는 닌자 공격에 참여할 수 있습니다."
        ]
      }
    },
    "fu-su-lu": {
      "role": {
        "recruitment": [
          "대삼림 코볼트 마을 여관에서 식사값 10,000 포치를 대신 내주면 합류합니다."
        ],
        "overall": [
          "후 수 루는 체력, 공격, 방어가 높은 근접 물리형 캐릭터입니다. 쿠로미미, 곤과 함께하는 코볼트+1 공격에 참여해 높은 피해를 낼 수 있습니다.",
          "다만 속도는 매우 낮은 편입니다. 판누 야쿠타의 숨은 장소에서 얻는 질풍의 문장을 장착하고 속도의 문장 조각을 사용하면 속도 보완이 쉬워집니다. 이 방식으로 단점을 줄이면 강력한 전열 공격수로 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "속도가 낮기 때문에 질풍의 문장이 가장 안정적인 보완책입니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "1037",
          "lvl 1": "4",
          "lvl 2": "1",
          "lvl 3": "0",
          "lvl 4": "0",
          "atk": "260",
          "def": "200",
          "str": "460",
          "pdf": "308",
          "skl": "86",
          "mdf": "",
          "mag": "53",
          "spd": "92",
          "eva": "",
          "luc": "84"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Fur Cape",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Power Ring",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "후 스 루는 코볼트 + 1 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kirkis": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "키르키스는 속도가 빠른 궁수로, 후열에서 안정적으로 활약합니다. 문장 운용도 어느 정도 가능한 편입니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "불의 문장이나 물의 문장 같은 기본 마법 문장을 무난하게 활용할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "807",
          "lvl 1": "8",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "170",
          "def": "168",
          "str": "325",
          "pdf": "292",
          "skl": "255",
          "mdf": "",
          "mag": "170",
          "spd": "190",
          "eva": "",
          "luc": "123"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "키르키스는 와일드 애로우 공격과 엘프 공격에 참여할 수 있습니다."
        ]
      }
    },
    "milich": {
      "role": {
        "recruitment": [
          "스칼레티시아 성에서 밀리히를 쓰러뜨린 뒤, 검은 문장의 영향으로 벌어진 일을 용서하고 합류를 요청하면 동료가 됩니다."
        ],
        "overall": [
          "밀리히는 검술과 마법을 함께 다루는 균형형 캐릭터입니다. 전열에서 싸우면서도 속성 문장을 활용할 수 있는 능력치를 갖추고 있습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "마법 능력이 괜찮으므로 속성 문장과 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "822",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "7",
          "lvl 4": "6",
          "atk": "176",
          "def": "171",
          "str": "326",
          "pdf": "332",
          "skl": "160",
          "mdf": "",
          "mag": "207",
          "spd": "149",
          "eva": "",
          "luc": "85"
        },
        "equipment": {
          "default": {
            "helmet": "Pointed Hat",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Rose Brooch*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Rose Brooch*",
            "other2": "Power Gloves"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "pahn": {
      "role": {
        "recruitment": [
          "코우안 사건 이후 말을 걸면 합류합니다. 이후 테오 맥돌과의 일기토가 발생하므로, 무기를 충분히 강화하고 레벨 30 이상과 좋은 장비를 갖춰 두면 승리 가능성을 높일 수 있습니다."
        ],
        "overall": [
          "파안은 속도가 낮지만 전열 전투 능력은 좋은 캐릭터입니다. 멧돼지의 문장은 단일 적에게 괜찮은 피해를 주지만 사용 후 균형을 잃습니다. 여러 조합의 협력 공격에 참여할 수 있어 파티 구성에 따라 높은 피해를 기대할 수 있습니다."
        ],
        "weapon": {
          "type": "Claw",
          "range": "S",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "Boar Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
            "멧돼지의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "935",
          "lvl 1": "4",
          "lvl 2": "1",
          "lvl 3": "0",
          "lvl 4": "0",
          "atk": "244",
          "def": "199",
          "str": "231",
          "pdf": "196",
          "skl": "174",
          "mdf": "",
          "mag": "60",
          "spd": "112",
          "eva": "",
          "luc": "150"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Gloves",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "그레미오와 함께 부적 공격 / 수호자 공격을 사용할 수 있습니다.",
          "로니 벨과 함께 두들겨 패기 공격을 사용할 수 있습니다.",
          "에이케이, 모건과 함께 무술 공격을 사용할 수 있습니다."
        ]
      }
    },
    "sonya-shulen": {
      "role": {
        "recruitment": [
          "샤사라자드 임무 이후 본거지 감옥에서 말을 걸고 협력을 요청하면 합류합니다.",
          "일반적으로 108성을 모두 모을 때 마지막으로 필요한 동료입니다."
        ],
        "overall": [
          "소니아 슈렌은 전투와 마법 양쪽을 모두 무난하게 다루는 캐릭터입니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "Flowing Rune"
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "861",
          "lvl 1": "8",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "189",
          "def": "146",
          "str": "339",
          "pdf": "323",
          "skl": "173",
          "mdf": "",
          "mag": "169",
          "spd": "220",
          "eva": "",
          "luc": "132"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "Crimson Cape*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Crimson Cape*",
            "other2": "Mangosh"
          }
        },
        "uniteAttacks": [
          "소니아 슈렌은 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "anji": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이상에서 타이 호와 얌 쿠를 파티에 넣고 해적의 아지트로 가면 됩니다. 세 해적을 5턴 안에 쓰러뜨리면 합류합니다."
        ],
        "overall": [
          "안지는 전투 능력이 좋은 중거리 캐릭터이며, 해적단 동료들과 함께할 때 더 강하게 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "중거리 물리형 캐릭터이므로 물리 공격을 보강하는 문장과 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "877",
          "lvl 1": "6",
          "lvl 2": "7",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "196",
          "def": "127",
          "str": "346",
          "pdf": "244",
          "skl": "172",
          "mdf": "",
          "mag": "102",
          "spd": "186",
          "eva": "",
          "luc": "112"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "안지는 레오나르도, 카나크와 함께 해적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "tai-ho": {
      "role": {
        "recruitment": [
          "트란 성을 조사하러 가기 전, 카쿠에서 주사위 도박으로 이기면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "마법 능력은 낮으므로 흐릿한 문장이나 필살의 문장처럼 물리 공격을 보조하는 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "",
          "lvl 1": "",
          "lvl 2": "",
          "lvl 3": "",
          "lvl 4": "",
          "atk": "",
          "def": "",
          "str": "",
          "pdf": "",
          "skl": "",
          "mdf": "",
          "mag": "",
          "spd": "",
          "eva": "",
          "luc": ""
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": []
      }
    },
    "kanak": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이상에서 타이 호와 얌 쿠를 파티에 넣고 해적의 아지트로 가면 안지, 레오나르도와 함께 등장합니다. 전투에서 이기면 세 명이 함께 합류합니다."
        ],
        "overall": [
          "카낙은 강력한 물리형 캐릭터이며, 다른 해적단 동료들과 함께 편성하면 위협적인 전력이 됩니다."
        ],
        "weapon": {
          "type": "Sickle & Chain",
          "range": "M",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "물리 전투를 강화하는 문장이 가장 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "813",
          "lvl 1": "4",
          "lvl 2": "1",
          "lvl 3": "0",
          "lvl 4": "0",
          "atk": "164",
          "def": "145",
          "str": "314",
          "pdf": "269",
          "skl": "175",
          "mdf": "",
          "mag": "55",
          "spd": "190",
          "eva": "",
          "luc": "97"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "카나크는 해적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "yam-koo": {
      "role": {
        "recruitment": [
          "트란 성의 몬스터를 정리한 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "타이 호와의 협력 공격 뒤 균형 잃음 상태를 막기 위해 거북이의 문장이 유용합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "809",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "171",
          "def": "130",
          "str": "321",
          "pdf": "247",
          "skl": "200",
          "mdf": "",
          "mag": "108",
          "spd": "200",
          "eva": "",
          "luc": "137"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": []
      }
    },
    "leonardo": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이후 타이 호와 얌 쿠를 파티에 넣고 해적의 아지트로 가면 됩니다. 안지, 레오나르도, 카낙을 쓰러뜨리면 함께 합류합니다."
        ],
        "overall": [
          "레오나르도 역시 강한 물리형 캐릭터입니다. 다른 해적단 동료들과 함께 전투 파티를 구성하면 더 위협적인 전력이 됩니다."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 효과를 강화하는 문장이 전투 능력을 더 잘 살려 줍니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "873",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "234",
          "def": "151",
          "str": "404",
          "pdf": "269",
          "skl": "127",
          "mdf": "",
          "mag": "82",
          "spd": "146",
          "eva": "",
          "luc": "82"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "레오나르도는 해적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "hix": {
      "role": {
        "recruitment": [
          "네클로드를 쓰러뜨린 뒤 텐가알과 함께 자동으로 합류합니다."
        ],
        "overall": [
          "힉스는 평균적인 전열 전투 캐릭터이며 마법 활용도는 낮은 편입니다. 필살의 문장이나 행운의 문장으로 전투 기여도를 올릴 수 있고, 분노의 문장도 선택지가 됩니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "10"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "합류 직후 네클로드 성을 함께 돌파해야 하므로, 부족한 화력을 보완하려면 필살의 문장이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "820",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "206",
          "def": "152",
          "str": "356",
          "pdf": "",
          "skl": "172",
          "mdf": "",
          "mag": "122",
          "spd": "163",
          "eva": "",
          "luc": "215"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "Wooden Shield",
            "other1": "Boots",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Speed Ring",
            "other2": "Power Gloves"
          }
        },
        "uniteAttacks": [
          "힉스는 텐가알과 함께 전사 공격에 참여할 수 있습니다."
        ]
      }
    },
    "tengaar": {
      "role": {
        "recruitment": [
          "네클로드 성에서 구출한 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "텐가알은 마법 능력이 높고 장거리 무기를 사용하므로 후열 마법 운용에 적합합니다. 속성 문장을 장착하고 무기를 강화하면 안정적인 후열 전력이 됩니다."
        ],
        "weapon": {
          "type": "Throwing Knife",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "속성 문장이 잘 어울리며, 특히 흙의 문장을 활용하기 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "710",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "8",
          "lvl 4": "6",
          "atk": "131",
          "def": "186",
          "str": "261",
          "pdf": "233",
          "skl": "185",
          "mdf": "",
          "mag": "217",
          "spd": "174",
          "eva": "",
          "luc": "109"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Guard Ring",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe",
            "shield": "-",
            "other1": "Wing Boots",
            "other2": ""
          }
        },
        "uniteAttacks": []
      }
    },
    "varkas": {
      "role": {
        "recruitment": [
          "코우안 사건 이후 트란 성에서 시드니아와 함께 자동으로 합류합니다."
        ],
        "overall": [
          "바르카스는 힘과 방어가 좋은 안정적인 물리형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "시드니아와의 협력 공격을 함께 운용하기 좋습니다. 이동과 탐색 편의를 위해 신행법의 문장도 도움이 됩니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "880",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "242",
          "def": "175",
          "str": "412",
          "pdf": "301",
          "skl": "130",
          "mdf": "",
          "mag": "90",
          "spd": "155",
          "eva": "",
          "luc": "106"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "Leggings",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Windspun Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "바르카스는 산적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sydonia": {
      "role": {
        "recruitment": [
          "코우안 사건 이후 트란 성에서 바르카스와 함께 자동으로 합류합니다."
        ],
        "overall": [
          "시드니아는 속도가 빠른 장거리형 캐릭터입니다. 적보다 먼저 행동하기 쉬워 공격 문장과 궁합이 좋고, 방어가 약하므로 후열에서 적을 견제하는 운용이 안정적입니다."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "바르카스와의 협력 공격을 중심으로 운용하기 좋습니다. 전투 밖 회복까지 고려하면 물의 문장이나 류수의 문장 같은 보조 문장도 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "743",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "154",
          "def": "127",
          "str": "304",
          "pdf": "244",
          "skl": "201",
          "mdf": "",
          "mag": "115",
          "spd": "205",
          "eva": "",
          "luc": "100"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "시드니아는 산적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "eileen": {
      "role": {
        "recruitment": [
          "코우안 사건 이후 남편 레판토와 함께 자동으로 합류합니다."
        ],
        "overall": [
          "아이린은 투척 무기를 사용하는 장거리 캐릭터입니다. 마법 능력과 속도가 높아 초반 마법 운용에 좋으며, 흙의 문장이나 물의 문장 계열을 장착하면 방어와 회복을 모두 보조할 수 있습니다. 별 귀걸이가 고정 장비라 매 턴 소량 회복 효과도 기대할 수 있습니다."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "Earth Rune"
          ],
          "recommended": [
            "Mother Earth Rune, Water Rune or Flowing Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "630",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "8",
          "lvl 4": "7",
          "atk": "99",
          "def": "111",
          "str": "249",
          "pdf": "",
          "skl": "111",
          "mdf": "",
          "mag": "217",
          "spd": "191",
          "eva": "",
          "luc": "161"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Robe",
            "shield": "-",
            "other1": "Star Earrings*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe",
            "shield": "-",
            "other1": "Star Earrings*",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "아일린은 부부 공격, 가족 공격, 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "leon": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "georges": {
      "role": {
        "recruitment": [
          "키로프 여관에서 말을 걸고, 제시하는 난도의 카드 맞추기 기록을 넘기면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "ivanov": {
      "role": {
        "recruitment": [
          "Speak with him at Scarleticia Castle after defeating Milich Oppenheimer."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "jeane": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "eikei": {
      "role": {
        "recruitment": [
          "주인공 레벨이 40 이상일 때 테이엔에서 에이케이에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "에이케이는 체력, 힘, 기술, 방어가 높은 강력한 전열 캐릭터입니다. 대신 마법 능력은 거의 없고 운과 속도는 평균적인 편입니다."
        ],
        "weapon": {
          "type": "Claw",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "사자의 시련의 문장(세가 새턴판), 2회공격의 문장(플레이스테이션판)"
          ],
          "recommended": [
            "멧돼지의 문장(플레이스테이션판)"
          ]
        },
        "maxLevelStatus": {
          "hp": "",
          "lvl 1": "",
          "lvl 2": "",
          "lvl 3": "",
          "lvl 4": "",
          "atk": "",
          "def": "",
          "str": "",
          "pdf": "",
          "skl": "",
          "mdf": "",
          "mag": "",
          "spd": "",
          "eva": "",
          "luc": ""
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "에이케이는 격투가 공격에 참여할 수 있습니다."
        ]
      }
    },
    "maximillian": {
      "role": {
        "recruitment": [
          "워렌과 빅토르를 구출한 뒤 북방 검문소에서 합류를 요청하면 동료가 됩니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "sancho": {
      "role": {
        "recruitment": [
          "워렌과 빅토르를 구출한 뒤 북방 검문소에서 막시밀리안과 함께 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "glenshiel": {
      "role": {
        "recruitment": [
          "테오 장군을 쓰러뜨린 뒤 아렌과 함께 자동으로 합류합니다."
        ],
        "overall": [
          "그렌실은 검술과 마법을 함께 다루는 캐릭터입니다. 고정 장착된 뇌명의 문장과 좋은 마법 성장을 바탕으로 다수의 적을 상대하는 공격 마법 운용에 유용합니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Thunder Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
            "뇌명의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "812",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "7",
          "lvl 4": "5",
          "atk": "171",
          "def": "168",
          "str": "321",
          "pdf": "345",
          "skl": "156",
          "mdf": "",
          "mag": "195",
          "spd": "165",
          "eva": "",
          "luc": "129"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "Steel Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Power Gloves",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "그렌실은 플릭, 아렌과 함께 미남 공격에 참여할 수 있습니다."
        ]
      }
    },
    "alen": {
      "role": {
        "recruitment": [
          "테오 장군을 쓰러뜨린 뒤 그렌실과 함께 자동으로 합류합니다."
        ],
        "overall": [
          "아렌은 마법 적성이 뛰어나고 전투 능력도 안정적인 균형형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Rage Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
            "열화의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "875",
          "lvl 1": "8",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "191",
          "def": "133",
          "str": "341",
          "pdf": "346",
          "skl": "133",
          "mdf": "",
          "mag": "171",
          "spd": "146",
          "eva": "",
          "luc": "139"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "Steel Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Speed Ring",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "아렌은 플릭, 그렌실과 함께 미남 공격에 참여할 수 있습니다."
        ]
      }
    },
    "tesla": {
      "role": {
        "recruitment": [
          "맷슈가 테슬라와 킴벌리 영입을 지시한 뒤 안테이에서 말을 걸면 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "jabba": {
      "role": {
        "recruitment": [
          "스칼레티시아 주변에서 홀리 페어리를 쓰러뜨려 이름 없는 항아리를 얻은 뒤, 그 항아리를 소지한 상태로 리콘의 자바에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "lorelai": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 주인공 레벨이 25 이상인 상태로 코우안에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "로렐라이는 활을 쓰는 후열 공격수입니다. 마법 능력은 평범하지만 원거리 물리 공격으로 안정적으로 기여합니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "마법 능력은 크게 오르지 않으므로 주문 운용보다는 흐릿한 문장으로 생존력을 보완하는 편이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "814",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "172",
          "def": "149",
          "str": "327",
          "pdf": "326",
          "skl": "222",
          "mdf": "",
          "mag": "99",
          "spd": "114",
          "eva": "",
          "luc": "110"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "blackman": {
      "role": {
        "recruitment": [
          "칼레카에서 밭을 밟지 않고 말을 걸면 합류합니다.",
          "말을 걸기 전에 밭을 밟았다면 마을 밖으로 나갔다가 다시 들어오면 됩니다."
        ],
        "overall": [
          "블랙맨은 물리 전투력이 높은 강력한 전열 캐릭터입니다."
        ],
        "weapon": {
          "type": "Pickaxe",
          "range": "M",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "필살의 문장처럼 물리 전투를 강화하는 문장이 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "825",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "210",
          "def": "183",
          "str": "380",
          "pdf": "301",
          "skl": "130",
          "mdf": "",
          "mag": "88",
          "spd": "150",
          "eva": "",
          "luc": "120"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Windspun Armor",
            "shield": "-",
            "other1": "Speed Ring",
            "other2": "Power Gloves"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "joshua": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "morgan": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이상에서 크론 사원에 있는 모건에게 말을 걸고 합류를 허락하면 동료가 됩니다. 조건을 만족하지 못하면 아직 수련이 더 필요하다고 말합니다."
        ],
        "overall": [
          "모건은 파안과 비슷한 근접 물리형 캐릭터입니다. 공격력과 체력이 높지만 속도가 낮고 방어구 선택은 가벼운 편입니다."
        ],
        "weapon": {
          "type": "Fists",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Counter Rune"
          ],
          "recommended": [
            "멧돼지의 문장을 사용할 수 있는 몇 안 되는 캐릭터라 대체 선택지로 좋습니다. 필살의 문장도 유용합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "863",
          "lvl 1": "4",
          "lvl 2": "2",
          "lvl 3": "0",
          "lvl 4": "0",
          "atk": "240",
          "def": "175",
          "str": "411",
          "pdf": "277",
          "skl": "130",
          "mdf": "",
          "mag": "63",
          "spd": "116",
          "eva": "",
          "luc": "83"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Mangosh"
          }
        },
        "uniteAttacks": [
          "파안, 에이케이와 함께 무술 공격을 사용할 수 있습니다."
        ]
      }
    },
    "mose": {
      "role": {
        "recruitment": [
          "화염창을 확보한 뒤 키로프에서 자동으로 합류합니다."
        ],
        "overall": [
          "모스는 다른 대장장이 동료처럼 중거리 물리형 캐릭터로 무난하게 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Hammer",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "대부분의 물리 효과 문장과 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "811",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "173",
          "def": "174",
          "str": "323",
          "pdf": "300",
          "skl": "175",
          "mdf": "",
          "mag": "92",
          "spd": "141",
          "eva": "",
          "luc": "135"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "마스, 미스, 무스, 메스와 함께 대장장이 공격을 사용할 수 있습니다."
        ]
      }
    },
    "esmeralda": {
      "role": {
        "recruitment": [
          "안테이 여관에서 오팔을 건네면 합류합니다. 오팔은 소니에르 감옥의 나이트메어가 드롭합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "melodye": {
      "role": {
        "recruitment": [
          "소리의 봉인구를 소지한 상태로 키로프에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "chapman": {
      "role": {
        "recruitment": [
          "안테이 방어구점에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "liukan": {
      "role": {
        "recruitment": [
          "소니에르 감옥에서 말을 걸면 자동으로 합류합니다."
        ],
        "overall": [
          "기술과 운을 제외한 능력치는 낮은 편이지만 방패를 장비할 수 있습니다.",
          "마법 운용도 어느 정도 가능한 캐릭터입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "Water Rune or Flowing Rune."
          ]
        },
        "maxLevelStatus": {
          "hp": "693",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "4",
          "lvl 4": "1",
          "atk": "129",
          "def": "124",
          "str": "259",
          "pdf": "230",
          "skl": "223",
          "mdf": "",
          "mag": "136",
          "spd": "150",
          "eva": "",
          "luc": "170"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "류칸은 섬광 공격에 참여할 수 있습니다."
        ]
      }
    },
    "fukien": {
      "role": {
        "recruitment": [
          "크론 사원에 들어간 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "후켄은 뛰어난 마법형 캐릭터이며, 고정 장착된 부활의 문장도 활용도가 높습니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "Resurrection Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": [
            "부활의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "634",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "106",
          "def": "127",
          "str": "236",
          "pdf": "259",
          "skl": "127",
          "mdf": "",
          "mag": "182",
          "spd": "166",
          "eva": "",
          "luc": "172"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Speed Ring",
            "other2": "Crimson Cape"
          }
        },
        "uniteAttacks": [
          "후켄은 섬광 공격에 참여할 수 있습니다."
        ]
      }
    },
    "futch": {
      "role": {
        "recruitment": [
          "시크 계곡에서 돌아온 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 창",
          "무기 사거리: M",
          "무기 시작 레벨: 9"
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "Wind Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "810",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "215",
          "def": "164",
          "str": "265",
          "pdf": "319",
          "skl": "157",
          "mdf": "",
          "mag": "101",
          "spd": "186",
          "eva": "",
          "luc": "184"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "풋치는 용기사 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kasumi": {
      "role": {
        "recruitment": [
          "테오 맥돌 군과의 첫 전투 전에 자동으로 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 다트",
          "무기 사거리: L",
          "무기 시작 레벨: 6"
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Shrike Rune*",
            "고정 문장이라 해제할 수 없습니다."
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "812",
          "lvl 1": "8",
          "lvl 2": "6",
          "lvl 3": "5",
          "lvl 4": "2",
          "atk": "175",
          "def": "153",
          "str": "325",
          "pdf": "254",
          "skl": "199",
          "mdf": "",
          "mag": "153",
          "spd": "255",
          "eva": "",
          "luc": "140"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "카스미는 미녀 공격과 닌자 공격에 참여할 수 있습니다."
        ]
      }
    },
    "maas": {
      "role": {
        "recruitment": [
          "대삼림 코볼트 마을에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "마스는 평균적인 능력치의 캐릭터지만, 초반에는 공격수로 활용할 수 있습니다."
        ],
        "weapon": {
          "type": "Hammer",
          "range": "M",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "마법은 약하므로 흐릿한 문장처럼 전투 보조 효과가 있는 문장이 어울립니다. 초반에는 신행법의 문장을 장착해 이동 편의를 챙기는 선택도 가능합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "744",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "148",
          "def": "148",
          "str": "298",
          "pdf": "272",
          "skl": "170",
          "mdf": "",
          "mag": "112",
          "spd": "150",
          "eva": "",
          "luc": "146"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "메스, 무스, 모스와 함께 대장장이 공격을 사용할 수 있습니다. 협력 공격 위력이 높아 이 조합을 활용하는 운용이 좋습니다."
        ]
      }
    },
    "crowley": {
      "role": {
        "recruitment": [
          "본거지 레벨 4 이후 과거의 동굴 숨은 통로에서 말을 걸면 합류합니다.",
          "동굴 안쪽에서 북쪽 출구와 계단을 이용해 우회한 뒤, 남쪽 벽 쪽 숨은 통로를 찾아야 합니다."
        ],
        "overall": [
          "크로울리는 1편에서 손꼽히는 강력한 마법형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "Cyclone Rune"
          ],
          "recommended": [
            "선풍의 문장이나 열화의 문장이 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "640",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "9",
          "lvl 4": "9",
          "atk": "104",
          "def": "94",
          "str": "234",
          "pdf": "174",
          "skl": "116",
          "mdf": "",
          "mag": "255",
          "spd": "133",
          "eva": "",
          "luc": "162"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Master Robe*",
            "shield": "-",
            "other1": "Emblem*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe*",
            "shield": "-",
            "other1": "Emblem*",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "fuma": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이상에서 용기사의 요새 바깥 오른쪽 위에 있는 후마에게 말을 걸고 합류를 허락하면 동료가 됩니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 수리검",
          "무기 사거리: L",
          "무기 시작 레벨: 11"
        ],
        "weapon": {
          "type": "Shuriken",
          "range": "L",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "807",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "171",
          "def": "170",
          "str": "321",
          "pdf": "270",
          "skl": "172",
          "mdf": "",
          "mag": "86",
          "spd": "234",
          "eva": "",
          "luc": "127"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Ninja Suit",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Mangosh"
          }
        },
        "uniteAttacks": [
          "후마는 카게, 카스미와 함께 닌자 공격에 참여할 수 있습니다."
        ]
      }
    },
    "moose": {
      "role": {
        "recruitment": [
          "마스, 메스, 모스를 파티에 넣고 전사의 마을 무기점에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "무스는 다른 대장장이 동료처럼 중거리 물리형 캐릭터로 무난하게 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Hammer",
          "range": "M",
          "startingLevel": "12"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "742",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "151",
          "def": "150",
          "str": "301",
          "pdf": "273",
          "skl": "195",
          "mdf": "",
          "mag": "103",
          "spd": "149",
          "eva": "",
          "luc": "148"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "무스는 대장장이 공격에 참여할 수 있습니다."
        ]
      }
    },
    "meese": {
      "role": {
        "recruitment": [
          "마스를 영입한 뒤 드워프 마을의 메스에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "메스는 다른 대장장이 동료처럼 중거리 물리형 캐릭터로 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Hammer",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필살의 문장처럼 물리 효과를 강화하는 문장과 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "752",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "154",
          "def": "150",
          "str": "304",
          "pdf": "274",
          "skl": "180",
          "mdf": "",
          "mag": "107",
          "spd": "154",
          "eva": "",
          "luc": "150"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "메스는 대장장이 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sergei": {
      "role": {
        "recruitment": [
          "트란 성을 조사한 뒤 카쿠에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "세르게이는 표준적인 근접 물리형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Wrench",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 전투를 보조하는 문장이 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "634",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "100",
          "def": "200",
          "str": "230",
          "pdf": "250",
          "skl": "200",
          "mdf": "",
          "mag": "100",
          "spd": "109",
          "eva": "",
          "luc": "112"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Robe",
            "shield": "-",
            "other1": "Gloves",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "kimberly": {
      "role": {
        "recruitment": [
          "맷슈가 킴벌리와 테슬라 영입을 지시한 뒤 안테이의 킴벌리 집에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "킴벌리는 기술과 운이 높지만 방어와 공격은 낮아 전열 운용에는 취약합니다. 후열에 배치하고 회복 아이템을 보조로 들려주는 편이 안정적이며, 문장과 장비를 잘 맞추면 무기 공격으로도 어느 정도 피해를 낼 수 있습니다."
        ],
        "weapon": {
          "type": "Knife",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "번개의 문장처럼 기본 마법 문장이 무난하게 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "750",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "150",
          "def": "148",
          "str": "300",
          "pdf": "272",
          "skl": "209",
          "mdf": "",
          "mag": "112",
          "spd": "172",
          "eva": "",
          "luc": "170"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Wooden Shoes",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Wing Boots",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "sheena": {
      "role": {
        "recruitment": [
          "레판토를 파티에 넣고 세이카 여관의 시나에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "번개의 문장*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "번개의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "",
          "lvl 1": "",
          "lvl 2": "",
          "lvl 3": "",
          "lvl 4": "",
          "atk": "",
          "def": "",
          "str": "",
          "pdf": "",
          "skl": "",
          "mdf": "",
          "mag": "",
          "spd": "",
          "eva": "",
          "luc": ""
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": []
      }
    },
    "kessler": {
      "role": {
        "recruitment": [
          "로니 벨을 도운 뒤 비밀 공장에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 도끼",
          "무기 사거리: M",
          "무기 시작 레벨: 9"
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 전투를 강화하는 문장이 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "818",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "168",
          "def": "150",
          "str": "330",
          "pdf": "282",
          "skl": "175",
          "mdf": "",
          "mag": "112",
          "spd": "142",
          "eva": "",
          "luc": "130"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Windspun Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "marco": {
      "role": {
        "recruitment": [
          "전사의 마을에서 마르코의 게임에 승리해 5,000 포치를 따면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "gen": {
      "role": {
        "recruitment": [
          "듀난 급류를 건너야 하는 시점에 테이엔의 집에서 말을 걸면 커맨돌과 함께 자동으로 합류합니다."
        ],
        "overall": [
          "겐은 체력과 방어가 좋아 전열을 맡기 쉬운 물리형 캐릭터입니다. 마법 능력이 낮은 점이 단점이지만, 속도는 무난해 전투 흐름을 따라가기 어렵지 않습니다."
        ],
        "weapon": {
          "type": "Saw",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "흐릿한 문장, 반격의 문장, 필살의 문장처럼 전열 물리 운용을 보조하는 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "869",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "202",
          "def": "176",
          "str": "362",
          "pdf": "280",
          "skl": "177",
          "mdf": "",
          "mag": "103",
          "spd": "157",
          "eva": "",
          "luc": "155"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Speed Ring",
            "other2": "Mangosh"
          }
        },
        "uniteAttacks": [
          "산스케와 함께 목수 공격을 사용할 수 있고, 커맨돌과 함께 필사의 공격을 사용할 수 있습니다."
        ]
      }
    },
    "hugo": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "hellion": {
      "role": {
        "recruitment": [
          "본거지 레벨 2 이상에서 테이엔 여관의 헬리온에게 말을 걸고 합류 요청을 받아들이면 동료가 됩니다."
        ],
        "overall": [
          "헬리온은 강력한 마법형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "대지의 문장*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "대지의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "556",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "8",
          "lvl 4": "6",
          "atk": "80",
          "def": "120",
          "str": "210",
          "pdf": "225",
          "skl": "80",
          "mdf": "",
          "mag": "216",
          "spd": "120",
          "eva": "",
          "luc": "144"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe",
            "shield": "-",
            "other1": "Wing Boots",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "mina": {
      "role": {
        "recruitment": [
          "주인공에게 발가락 신발을 장비시킨 뒤 안테이 여관에서 춤추는 미나에게 말을 걸고 함께 춤추면 합류합니다."
        ],
        "overall": [
          "미나는 마법 능력과 속도가 높아 공격·보조 마법 문장 모두에 잘 맞습니다. 숄 무기는 짧은 사거리라 마법형 캐릭터 중에서도 독특하지만, 마법 로브와 발가락 신발이 고정 장비라 방어 선택지가 좁으므로 전열 배치는 피하는 편이 좋습니다."
        ],
        "weapon": {
          "type": "Shawl",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "마법 문장 전반이 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "627",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "6",
          "lvl 4": "5",
          "atk": "111",
          "def": "145",
          "str": "269",
          "pdf": "223",
          "skl": "153",
          "mdf": "",
          "mag": "186",
          "spd": "203",
          "eva": "",
          "luc": "155"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Magic Robe*",
            "shield": "-",
            "other1": "Toe Shoes*",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Magic Robe*",
            "shield": "-",
            "other1": "Toe Shoes*",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "milia": {
      "role": {
        "recruitment": [
          "드래곤 치료를 위해 시크 계곡으로 향하기 전 자동으로 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 창",
          "무기 사거리: M",
          "무기 시작 레벨: 9"
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필살의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "872",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "190",
          "def": "192",
          "str": "340",
          "pdf": "369",
          "skl": "127",
          "mdf": "",
          "mag": "81",
          "spd": "140",
          "eva": "",
          "luc": "123"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "Wooden Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "후치와 함께 용기사 공격을 사용할 수 있습니다."
        ]
      }
    },
    "kamandol": {
      "role": {
        "recruitment": [
          "듀난 급류를 건너는 이벤트 중 겐과 함께 자동으로 합류합니다."
        ],
        "overall": [
          "커맨돌은 문장 마법을 어느 정도 다룰 수 있는 캐릭터입니다. 겐과의 협력 공격을 중심으로 운용하는 것도 선택지입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "불의 문장처럼 기본 마법 문장이 무난합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "748",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "149",
          "def": "100",
          "str": "279",
          "pdf": "225",
          "skl": "230",
          "mdf": "",
          "mag": "125",
          "spd": "132",
          "eva": "",
          "luc": "92"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "겐과 함께 필사의 공격을 사용할 수 있습니다."
        ]
      }
    },
    "juppo": {
      "role": {
        "recruitment": [
          "코안의 레판토 저택에서 바퀴 장치 방 밖에 있는 쥬포에게 말을 걸면 합류합니다.",
          "잠입 중 영입하지 못해도 레판토 합류 이후 본거지에서 다시 합류할 수 있습니다."
        ],
        "overall": [
          "쥬포는 후열에서 운용하기 좋은 물리형 캐릭터입니다."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "트릭의 문장*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "트릭의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "694",
          "lvl 1": "8",
          "lvl 2": "6",
          "lvl 3": "5",
          "lvl 4": "2",
          "atk": "123",
          "def": "155",
          "str": "273",
          "pdf": "271",
          "skl": "220",
          "mdf": "",
          "mag": "151",
          "spd": "149",
          "eva": "",
          "luc": "182"
        },
        "equipment": {
          "default": {
            "helmet": "Pointed Hat",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "멕과 함께 트릭 공격을 사용할 수 있습니다."
        ]
      }
    },
    "kasios": {
      "role": {
        "recruitment": [
          "밀리히 오펜하이머를 파티에 넣고 스칼레티시아 성에서 카시오스에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "viki": {
      "role": {
        "recruitment": [
          "엘프 마을로 향하는 대삼림 길에서 빅키가 순간이동으로 나타납니다. 이때 합류를 제안하면 동료가 됩니다."
        ],
        "overall": [
          "빅키는 강력한 마법형 캐릭터지만, 주문 사용 시 역효과가 발생할 수 있어 운용에 위험이 따릅니다. 마법 능력이 높기 때문에 역효과가 파티에 큰 피해를 줄 수도 있습니다. 점멸의 문장이 고정되어 있어 다른 마법형 캐릭터보다 문장 구성 자유도는 낮은 편입니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "점멸의 문장이 고정 장착되어 있습니다.",
            "문장 슬롯 =",
            "*머리 - 레벨 30에 개방",
            "*오른손 - 점멸의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "마법 능력이 높으므로 대부분의 마법 문장이 잘 맞습니다. 머리 슬롯에는 푸른 문의 문장도 선택지가 됩니다.",
            "문장 적성 =",
            "모든 문장 숙련이 E로 처리되어 피해량이 20% 높아지지만 역효과가 발생할 수 있습니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Magic Robe",
            "shield": "-",
            "other1": "Tempura (x5)",
            "other2": "Magic Ring",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "문어 계열 동료와 함께 사용하는 협력 공격은 단일 적에게 큰 피해를 주고 사용자를 균형 잃음 상태로 만듭니다."
        ]
      }
    },
    "rubi": {
      "role": {
        "recruitment": [
          "키르키스를 파티에 넣고 대삼림 코볼트 마을의 루비에게 말을 걸면 합류합니다. 키르키스의 레벨 조건을 만족해야 합니다."
        ],
        "overall": [
          "루비는 엘프 궁수 계열의 후열 공격수입니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "기본 속성 문장이나 물리 공격 보조 문장을 무난하게 활용할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "796",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "7",
          "lvl 4": "5",
          "atk": "170",
          "def": "150",
          "str": "323",
          "pdf": "274",
          "skl": "200",
          "mdf": "",
          "mag": "192",
          "spd": "185",
          "eva": "",
          "luc": "63"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Brass Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "키르키스, 실비나와 함께 야생 화살 공격을 사용할 수 있습니다."
        ]
      }
    },
    "vincent": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "meg": {
      "role": {
        "recruitment": [
          "쥬포를 파티에 넣고 카쿠 여관 밖의 멕에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "멕은 쥬포와 비슷하게 후열에서 운용하기 좋은 물리형 캐릭터입니다. 가드 로브가 고정 장착되어 있으며, 운이 높아 치명타를 기대하기 쉽습니다. 체력과 방어가 낮아 강한 장비를 갖추기 전까지는 오래 맞는 운용에 약합니다."
        ],
        "weapon": {
          "type": "Throwing Knife",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "쥬포 외에 트릭의 문장을 활용할 수 있는 캐릭터입니다. 높은 운을 살려 필살의 문장을 장착하면 한 전투에서 치명타를 여러 번 노릴 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "",
          "lvl 1": "",
          "lvl 2": "",
          "lvl 3": "",
          "lvl 4": "",
          "atk": "",
          "def": "",
          "str": "",
          "pdf": "",
          "skl": "",
          "mdf": "",
          "mag": "",
          "spd": "",
          "eva": "",
          "luc": ""
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe*",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Guard Robe*",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "쥬포와 함께 트릭 공격을 사용할 수 있습니다."
        ]
      }
    },
    "taggart": {
      "role": {
        "recruitment": [
          "워렌이 붙잡혔다는 사실을 알린 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "giovanni": {
      "role": {
        "recruitment": [
          "코안에서 아이린을 구출한 뒤 레판토와 함께 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "quincy": {
      "role": {
        "recruitment": [
          "동료 80명 이상을 모은 뒤 가란 성새에서 퀸시에게 말을 걸면 합류합니다. 사망했거나 이탈 중인 인물은 수에 포함되지 않습니다."
        ],
        "overall": [
          "퀸시는 강력한 장거리 공격수이며, 마법 능력이 낮은 것이 가장 큰 약점입니다. 필살의 문장으로 원거리 치명타를 노리면 장점을 살리기 좋습니다.",
          "활 솜씨가 뛰어나지만 전투에서는 양날 푸르바를 사용합니다."
        ],
        "weapon": {
          "type": "Throwing Knife (Shuriken)",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필살의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "739",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "151",
          "def": "170",
          "str": "301",
          "pdf": "297",
          "skl": "250",
          "mdf": "",
          "mag": "85",
          "spd": "183",
          "eva": "",
          "luc": "169"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Feather",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "apple": {
      "role": {
        "recruitment": [
          "세이카에서 말을 걸면 맷슈가 해방군에 합류한 이유를 확인하기 위해 함께합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "kai": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 가란 성새에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "카이는 물리 공격이 안정적이지만 마법은 약한 캐릭터입니다. 주인공과 함께 사용하는 사제 공격이 다수의 적을 상대하는 데 매우 강력해, 일반 전투 정리에 특히 좋습니다."
        ],
        "weapon": {
          "type": "Bo Staff",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "흐릿한 문장*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "흐릿한 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "866",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "231",
          "def": "153",
          "str": "389",
          "pdf": "256",
          "skl": "141",
          "mdf": "",
          "mag": "79",
          "spd": "116",
          "eva": "",
          "luc": "131"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Power Ring"
          }
        },
        "uniteAttacks": [
          "주인공과 함께 사제 공격을 사용할 수 있고, 류칸과 함께 섬광 공격을 사용할 수 있습니다."
        ]
      }
    },
    "lotte": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이후 리콘 여관의 롯테에게 말을 걸고, 카쿠에서 고양이를 찾아 돌려주면 합류합니다."
        ],
        "overall": [
          "롯테는 강력한 마법형 캐릭터입니다. 근접 전투는 약하므로 후열에 두고 필요한 상위 속성 문장을 장착하는 편이 좋습니다. 마법 능력이 높아 장기 던전 탐색에서도 낮은 레벨 주문을 안정적으로 사용할 수 있습니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "Earth Rune"
          ],
          "recommended": [
            "초기 흙의 문장을 유지해도 좋고, 공격형으로 쓰려면 뇌명의 문장이나 열화의 문장으로 바꿀 수 있습니다. 보조형으로는 대지의 문장, 선풍의 문장, 류수의 문장도 잘 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "695",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "7",
          "lvl 4": "5",
          "atk": "130",
          "def": "125",
          "str": "260",
          "pdf": "249",
          "skl": "150",
          "mdf": "",
          "mag": "195",
          "spd": "153",
          "eva": "",
          "luc": "170"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "mace": {
      "role": {
        "recruitment": [
          "본거지 레벨 4 이상에서 마스, 미스, 무스, 모스를 모두 파티에 넣고 시크 계곡의 메스에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 망치",
          "무기 사거리: M",
          "무기 시작 레벨: 15"
        ],
        "weapon": {
          "type": "Hammer",
          "range": "M",
          "startingLevel": "15"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "875",
          "lvl 1": "7",
          "lvl 2": "5",
          "lvl 3": "4",
          "lvl 4": "1",
          "atk": "195",
          "def": "193",
          "str": "355",
          "pdf": "317",
          "skl": "205",
          "mdf": "",
          "mag": "136",
          "spd": "168",
          "eva": "",
          "luc": "170"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "마스, 미스, 무스, 모스와 함께 대장장이 공격을 사용할 수 있습니다."
        ]
      }
    },
    "onil": {
      "role": {
        "recruitment": [
          "트란 성을 조사한 뒤 세이카에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "kuromimi": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "크로미미는 공격과 체력이 좋은 전열 검사입니다. 투구, 중량 방어구, 방패, 코볼트 전용 목걸이를 장비할 수 있어 방어 면에서도 안정적입니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필살의 문장이나 반격의 문장이 전투 능력을 잘 보완합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "823",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "166",
          "def": "170",
          "str": "316",
          "pdf": "355",
          "skl": "160",
          "mdf": "",
          "mag": "105",
          "spd": "169",
          "eva": "",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Gold Necklace",
            "other2": "Speed Ring"
          }
        },
        "uniteAttacks": [
          "곤과 함께 코볼트 공격을 사용할 수 있고, 곤과 후 수 루와 함께 코볼트+1 공격을 사용할 수 있습니다."
        ]
      }
    },
    "gon": {
      "role": {
        "recruitment": [
          "크로미미를 파티에 넣고 대삼림 코볼트 마을의 곤에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "곤은 크로미미처럼 전열에서 버티기 좋은 물리형 캐릭터입니다. 투구, 중량 방어구, 방패, 전용 목걸이를 장비할 수 있어 방어가 높고, 운이 매우 높아 치명타도 기대하기 쉽습니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "반격의 문장이나 흐릿한 문장처럼 물리 효과를 보조하는 문장을 잘 활용합니다. 운이 높으므로 필살의 문장도 좋은 선택입니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "744",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "3",
          "lvl 4": "0",
          "atk": "299",
          "def": "352",
          "str": "149",
          "pdf": "177",
          "skl": "158",
          "mdf": "",
          "mag": "111",
          "spd": "132",
          "eva": "",
          "luc": "251"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Horned Helmet",
            "armor": "Master Garb",
            "shield": "Earth Shield",
            "other1": "Gold Necklace",
            "other2": "Power Gloves"
          }
        },
        "uniteAttacks": [
          "크로미미와 함께 코볼트 공격을 사용할 수 있고, 크로미미와 후 수 루와 함께 코볼트+1 공격을 사용할 수 있습니다."
        ]
      }
    },
    "antonio": {
      "role": {
        "recruitment": [
          "마리를 영입한 뒤 본거지에서 요리사가 필요하다는 말을 들으면, 세이카 여관의 안토니오에게 말을 걸어 합류시킬 수 있습니다. 본거지에서 몇 차례 숙박하거나 머무르지 않는 선택을 반복해 마리의 대사를 확인한 뒤 찾아가면 됩니다."
        ],
        "overall": [
          "무기 성장 =",
          "무기 유형: 프라이팬",
          "무기 사거리: M",
          "무기 시작 레벨: 8"
        ],
        "weapon": {
          "type": "Pan",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "693",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "128",
          "def": "134",
          "str": "300",
          "pdf": "294",
          "skl": "134",
          "mdf": "",
          "mag": "75",
          "spd": "159",
          "eva": "",
          "luc": "133"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Gloves",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "Earth Shield",
            "other1": "Power Gloves",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "lester": {
      "role": {
        "recruitment": [
          "본거지 레벨 3 이상에서 키로프의 세일라 좌우 집에 들어가 난로 위 스튜를 맛본 뒤, 세일라 남쪽 집의 레스터에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "레스터는 요리사로 합류하지만, 전투 능력이나 별도 보너스를 제공하는 시설 효과는 없습니다."
        ],
        "weapon": {
          "type": "Pan",
          "range": "M",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 전투를 보조하는 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "742",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "158",
          "def": "123",
          "str": "328",
          "pdf": "285",
          "skl": "155",
          "mdf": "",
          "mag": "84",
          "spd": "180",
          "eva": "",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "Earth Shield",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "kirke": {
      "role": {
        "recruitment": [
          "로리마 성새를 제압한 뒤 해당 지역을 이용할 수 있게 되면, 검문소의 키르케에게 말을 걸어 합류시킬 수 있습니다."
        ],
        "overall": [
          "키르케는 무난한 물리 전투 캐릭터입니다."
        ],
        "weapon": {
          "type": "Scythe",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 전투 문장과 잘 맞으며, 필살의 문장도 분위기와 성능 양쪽에서 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "811",
          "lvl 1": "6",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "0",
          "atk": "170",
          "def": "156",
          "str": "330",
          "pdf": "280",
          "skl": "159",
          "mdf": "",
          "mag": "103",
          "spd": "64",
          "eva": "",
          "luc": "130"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "roc": {
      "role": {
        "recruitment": [],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "ledon": {
      "role": {
        "recruitment": [
          "로니 벨을 도운 뒤 비밀 공장에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "sylvina": {
      "role": {
        "recruitment": [
          "판누 야쿠타 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "실비나는 마법 성장도 나쁘지 않아 마법 문장을 장착하면 후열에서 유용하게 활용할 수 있습니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "궁수이면서 문장 마법도 어느 정도 다룰 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "696",
          "lvl 1": "9",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "123",
          "def": "142",
          "str": "278",
          "pdf": "248",
          "skl": "163",
          "mdf": "",
          "mag": "172",
          "spd": "191",
          "eva": "",
          "luc": "196"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Robe",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Master Robe",
            "shield": "-",
            "other1": "Wing Boots",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "키르키스, 루비와 함께 엘프 공격과 야생 화살 공격을 사용할 수 있습니다."
        ]
      }
    },
    "ronnie-bell": {
      "role": {
        "recruitment": [
          "화염창을 전달하기 전 자동으로 합류합니다."
        ],
        "overall": [
          "로니 벨은 증오의 문장을 지닌 강력한 전투 캐릭터입니다. 문장 공격이 원거리라 전열과 후열 어느 쪽에서도 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Claws",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "증오의 문장*",
            "*고정 문장이 되어 해제할 수 없습니다."
          ],
          "recommended": [
            "증오의 문장이 고정 장착되어 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "871",
          "lvl 1": "4",
          "lvl 2": "2",
          "lvl 3": "0",
          "lvl 4": "0",
          "atk": "230",
          "def": "200",
          "str": "400",
          "pdf": "303",
          "skl": "145",
          "mdf": "",
          "mag": "68",
          "spd": "121",
          "eva": "",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "Headband",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "파안과 함께 두들겨 패기 공격을 사용할 수 있습니다."
        ]
      }
    },
    "gaspar": {
      "role": {
        "recruitment": [
          "카쿠 주점 지하에서 주사위 도박으로 5,000 포치를 따면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "window": {
      "role": {
        "recruitment": [
          "창의 봉인구를 소지한 상태로 전사의 마을의 윈도우에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "marie": {
      "role": {
        "recruitment": [
          "트란 성을 확보한 뒤 세이카 여관에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "zen": {
      "role": {
        "recruitment": [
          "클론 사원에서 빨간 꽃의 씨앗, 파란 꽃의 씨앗, 노란 꽃의 씨앗을 건네면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "sarah": {
      "role": {
        "recruitment": [
          "키로프 주민들과의 교환을 통해 얻은 비누를 세일라에게 건네면 합류합니다."
        ],
        "overall": [
          "세일라는 균형 잡힌 장거리 전투 캐릭터이며 문장 마법도 다룰 수 있습니다. 후열에서 안전하게 공격할 수 있고, 보조나 회복 문장과 특히 잘 맞습니다."
        ],
        "weapon": {
          "type": "Throwing Knife",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물의 문장이나 류수의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "817",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "4",
          "lvl 4": "1",
          "atk": "165",
          "def": "173",
          "str": "315",
          "pdf": "290",
          "skl": "130",
          "mdf": "",
          "mag": "144",
          "spd": "135",
          "eva": "",
          "luc": "104"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "sansuke": {
      "role": {
        "recruitment": [
          "트란 성을 조사한 뒤 대삼림 마을에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "산스케는 평균적인 물리 공격 캐릭터입니다."
        ],
        "weapon": {
          "type": "Saw",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "물리 효과 문장이나 신행법의 문장을 장착하면 활용도가 높아집니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "696",
          "lvl 1": "5",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "129",
          "def": "140",
          "str": "289",
          "pdf": "221",
          "skl": "172",
          "mdf": "",
          "mag": "85",
          "spd": "155",
          "eva": "",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "겐과 함께 목수 공격을 사용할 수 있습니다."
        ]
      }
    },
    "qlon": {
      "role": {
        "recruitment": [
          "안테이를 해방한 뒤 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "templeton": {
      "role": {
        "recruitment": [
          "불타버린 엘프 마을에서 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "krin": {
      "role": {
        "recruitment": [
          "코우안 사건 중 자동으로 합류합니다."
        ],
        "overall": [
          "크린은 후열 전투 캐릭터지만 기본 전투력은 낮은 편입니다. 필수 동행 구간 전까지 제대로 성장시키지 않으면 부담이 될 수 있습니다."
        ],
        "weapon": {
          "type": "Needle/Dart",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "필수 동행 구간을 고려하면 신행법의 문장이 유용합니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "698",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "110",
          "def": "107",
          "str": "",
          "pdf": "",
          "skl": "190",
          "mdf": "",
          "mag": "76",
          "spd": "252",
          "eva": "",
          "luc": "167"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          },
          "recommended": {
            "helmet": "Silver Hat",
            "armor": "Taikyoku Wear",
            "shield": "-",
            "other1": "-",
            "other2": "-"
          }
        },
        "uniteAttacks": [
          "험프리와 함께 울퉁불퉁 공격을 사용할 수 있습니다."
        ]
      }
    },
    "chandler": {
      "role": {
        "recruitment": [
          "트란 성을 확보한 뒤 쿠와바 성새에서 영입할 수 있습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    }
  },
  "suikoden-ii": {
    "hero": {
      "role": {
        "recruitment": [
          "환상수호전 II의 주인공으로, 게임 시작부터 일행에 포함되어 있으며 파티에서 제외할 수 없습니다."
        ],
        "overall": [
          "주인공은 전반적인 능력치가 평균 이상인 뛰어난 캐릭터입니다. 여러 강력한 협력 공격에 참여할 수 있고, 빛나는 방패의 문장은 공격과 방어 양쪽에서 모두 유용한 핵심 문장입니다. 근접 전투 능력이 좋으면서도 문장 슬롯과 적성이 균형 잡혀 있어 다양한 방식으로 운용할 수 있습니다."
        ],
        "weapon": {
          "type": "Tonfas",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "*머리 - 레벨 40에 개방",
            "*오른손 - 빛나는 방패의 문장(스토리 고정)",
            "*왼손 - 레벨 25에 개방",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "근접 운용에서는 2회공격의 문장, 2배공격의 문장, 필살의 문장, 분노의 문장이 잘 맞습니다. 마법 운용에서는 푸른 문의 문장과 부활의 문장 적성을 활용할 수 있습니다. 빛나는 방패의 문장만으로도 회복 역할을 충분히 맡을 수 있고, 무기에는 우정의 문장이나 기술의 문장을 붙이는 선택도 좋습니다. 루카 블라이트전에서는 불 봉인의 문장이 도움이 됩니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "827",
          "lvl 1": "9",
          "lvl 2": "6",
          "lvl 3": "3",
          "lvl 4": "2",
          "atk": "205",
          "def": "149",
          "str": "200",
          "pdf": "150",
          "skl": "216",
          "mdf": "163",
          "mag": "158",
          "spd": "197",
          "luc": "215"
        },
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Robe",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Gloves",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "Wind Hat",
            "armor": "Master Garb",
            "shield": "-",
            "other1": "Magic Ring",
            "other2": "Winged Boots",
            "other3": "Power Gloves"
          }
        },
        "uniteAttacks": [
          "죠우이와 함께 친구 공격을 사용할 수 있습니다.",
          "나나미와 함께 가족 공격을 사용할 수 있습니다.",
          "나나미와 함께 한가로운 공격을 사용할 수 있습니다.",
          "호이와 함께 흉내 공격을 사용할 수 있습니다.",
          "티르와 함께 더블 리더 공격을 사용할 수 있습니다."
        ]
      }
    },
    "nanami": {
      "role": {
        "recruitment": [
          "캬로 탈출 중 나나미를 구하기로 선택하면 함께 합류합니다. 이때 구하지 않아도 빛나는 방패의 문장을 얻은 뒤 뮤즈를 처음 방문하면 자동으로 합류합니다. 록엑스 해방 이후에는 영구 이탈합니다."
        ],
        "overall": [
          "나나미는 균형 잡힌 능력치와 높은 속도가 장점인 전투 캐릭터입니다."
        ],
        "weapon": {
          "type": "Tri-Nunchaku",
          "range": "M",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*오른손 - 없음",
            "*왼손 - 없음",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "번개의 문장, 균형의 문장, 2회공격의 문장, 물의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "697",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "150",
          "def": "154",
          "str": "320",
          "pdf": "255",
          "skl": "197",
          "mdf": "165",
          "mag": "134",
          "spd": "225",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "Feathered Hat",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Medicine (x4)",
            "other2": "Gloves",
            "other3": "Wooden Shoes"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "주인공과 함께 가족 공격과 한가로운 공격을 사용할 수 있습니다."
        ]
      }
    },
    "tsai": {
      "role": {
        "recruitment": [
          "화염창 수리를 부탁하면 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 유니콘의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "부활의 문장과 바람의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Clay Guardian (x4)",
            "other2": "Gauntlet",
            "other3": "Leggings"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "토모와 함께 부녀 공격을 사용할 수 있습니다."
        ]
      }
    },
    "hanna": {
      "role": {
        "recruitment": [
          "토토 마을이 불탄 뒤 한나에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "한나는 방어 능력이 높고 방패를 장비할 수 있어 초반 전열에서 안정적인 캐릭터입니다. 다만 문장 슬롯이 하나뿐이라 후반에는 다른 전열 캐릭터보다 확장성이 떨어집니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "2회공격의 문장이나 분노의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "802",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "168",
          "def": "189",
          "str": "318",
          "pdf": "279",
          "skl": "164",
          "mdf": "125",
          "mag": "114",
          "spd": "134",
          "luc": "157"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Coat",
            "shield": "Steel Shield",
            "other1": "Medicine (x6)",
            "other2": "Leather Cape",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "오울란과 함께 태클 공격을 사용할 수 있습니다."
        ]
      }
    },
    "anita": {
      "role": {
        "recruitment": [
          "아니타는 두 가지 방식으로 영입할 수 있습니다.",
          "뮤즈 주점 또는 바나 마을 여관에서 여러 번 말을 걸고 부탁을 들어주면 합류합니다. 마을을 드나들며 추가 부탁을 확인해야 합니다.",
          "발레리아를 파티에 넣고 바나 마을 여관에서 아니타에게 말을 걸면 바로 영입할 수 있습니다."
        ],
        "overall": [
          "아니타는 무난한 전열 캐릭터지만, 라이벌인 발레리아와 비교하면 전반적인 능력치에서 밀리는 편입니다. 문장 슬롯 수는 같지만 순수 성능은 발레리아가 더 안정적입니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 매의 문장(고정 장착)",
            "*왼손 - 없음(레벨 50에 개방)",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "매의 문장 피해를 높이려면 분노의 문장을 함께 운용하는 방식이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "817",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "168",
          "def": "147",
          "str": "318",
          "pdf": "265",
          "skl": "190",
          "mdf": "163",
          "mag": "138",
          "spd": "185",
          "luc": "180"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "Thunder Runner (x1)",
            "other2": "Shoulder Pads",
            "other3": "Gauntlet"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "rshield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "발레리아와 함께 라이벌 공격을 사용할 수 있습니다."
        ]
      }
    },
    "viktor": {
      "role": {
        "recruitment": [
          "사우스 윈도우에서 자동으로 합류합니다."
        ],
        "overall": [
          "빅토르는 2편에서도 뛰어난 물리 공격수입니다. 체력과 힘 성장이 좋고 생존력도 안정적이라 합류 직후부터 전열 핵심으로 운용할 수 있습니다. 별의 검과 다시 만나기 전까지는 양손검을 사용합니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 슬롯 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "마법 능력은 낮으므로 전사의 문장처럼 전투를 강화하는 문장이 좋습니다. 슬롯이 두 개까지 열리기 때문에 2회공격의 문장, 2배공격의 문장, 분노의 문장, 폭력의 문장 같은 물리형 조합을 적극적으로 활용할 수 있습니다. 무기에는 우정의 문장이나 분발의 문장을 붙이면 장기전에서 더 강해집니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "869",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "199",
          "def": "219",
          "str": "210",
          "pdf": "203",
          "skl": "149",
          "mdf": "154",
          "mag": "90",
          "spd": "152",
          "eva": "168",
          "luc": "159"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Chain Mail",
            "shield": "-",
            "other1": "Gloves",
            "other2": "Boots",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "플릭과 함께 십자 공격을 사용할 수 있습니다."
        ]
      }
    },
    "flik": {
      "role": {
        "recruitment": [
          "사우스 윈도우에서 자동으로 합류합니다."
        ],
        "overall": [
          "플릭은 1편처럼 안정적인 전열 전투와 문장 마법을 모두 소화하는 캐릭터입니다. 번개 속성 적성이 좋아 번개의 문장과 천둥의 문장을 잘 활용하며, 방패 장비도 가능해 생존력이 괜찮습니다. 천둥의 문장으로 강화하면 강력한 번개 마법 전력으로도 활약합니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 번개의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "천둥의 문장, 분노의 문장, 2회공격의 문장, 2배공격의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "825",
          "lvl 1": "9",
          "lvl 2": "7",
          "lvl 3": "4",
          "lvl 4": "2",
          "atk": "195",
          "def": "162",
          "str": "184",
          "pdf": "165",
          "skl": "178",
          "mdf": "145",
          "mag": "187",
          "spd": "168",
          "eva": "108",
          "luc": "101"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Leather Armor",
            "shield": "Steel Shield",
            "other1": "Leather Cape",
            "other2": "Boots",
            "other3": "Mega Medicine (x3)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "빅토르와 함께 십자 공격을 사용해 단일 적에게 1.5배 피해를 주고 일정 확률로 넘어뜨립니다.",
          "니나와 함께 추종자 공격을 사용해 단일 적에게 2.5배 피해를 주며, 니나는 균형을 잃습니다.",
          "카뮤, 마이크로토프와 함께 미남 공격을 사용해 단일 적에게 1.5배 피해를 주고 일정 확률로 즉사시킵니다."
        ]
      }
    },
    "freed-yamamoto": {
      "role": {
        "recruitment": [
          "사우스 윈도우에서 그랜마이어를 만난 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장, 흙의 문장, 바람의 문장이 어울립니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "748",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "146",
          "def": "145",
          "str": "296",
          "pdf": "230",
          "skl": "150",
          "mdf": "150",
          "mag": "131",
          "spd": "171",
          "luc": "218"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Brass Armor",
            "shield": "Wooden Shield",
            "other1": "Water Amulet",
            "other2": "Medicine (x6)",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "요시노와 함께 부부 공격을 사용할 수 있습니다."
        ]
      }
    },
    "shu": {
      "role": {
        "recruitment": [
          "라다트 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "슈는 신동맹군의 군사입니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "luc": {
      "role": {
        "recruitment": [
          "노스윈도우 성에서 자동으로 합류합니다."
        ],
        "overall": [
          "루크는 높은 마법 능력과 요정의 문장 덕분에 초반부터 유용한 마법형 캐릭터입니다. 요정의 문장으로 후열에서도 공격할 수 있고, 세 문장 슬롯을 모두 사용할 수 있어 푸른 문의 문장을 활용하기 좋은 캐릭터입니다. 마법 능력과 주문 횟수가 높아 조합 마법 운용에도 강합니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 바람의 문장",
            "*왼손 - 요정의 문장"
          ],
          "recommended": [
            "바람의 문장을 선풍의 문장으로 강화하면 공격·보조 마법을 안정적으로 맡길 수 있습니다. 푸른 문의 문장도 잘 어울리며, 후반에는 류수의 문장이나 마법 보조 문장으로 바꾸는 선택도 좋습니다. 어둠의 문장 역시 높은 마법 능력을 살리기 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "700",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "7",
          "lvl 4": "4",
          "atk": "72",
          "def": "77",
          "str": "69",
          "pdf": "71",
          "skl": "166",
          "mdf": "212",
          "mag": "249",
          "spd": "202",
          "luc": "72"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Speed Ring*",
            "other2": "Mega Medicine (x3)",
            "other3": "Bolt of Wrath (x1)"
          },
          "recommended": {
            "helmet": "Wind Hat",
            "armor": "Dream Robe",
            "shield": "-",
            "other1": "Speed Ring*",
            "other2": "Magic Ring",
            "other3": "Magic Ring"
          }
        },
        "uniteAttacks": [
          "프치, 사스케와 함께 미남 공격을 사용할 수 있습니다."
        ]
      }
    },
    "tai-ho": {
      "role": {
        "recruitment": [
          "타이 호는 투 리버로 가기 위해 필요한 뱃사공 중 한 명입니다. 쿠스쿠스에서 주사위 도박으로 5,000 포치를 따면 합류합니다."
        ],
        "overall": [
          "타이 호는 평균적인 전투 캐릭터입니다."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "창 계열 무기에 유니콘의 문장을 활용할 수 있어 적 열을 상대할 때 도움이 됩니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Grilled Fish (x5)",
            "other2": "Belt of Strength",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "yam-koo": {
      "role": {
        "recruitment": [
          "타이호를 영입하면 야무크도 함께 합류합니다."
        ],
        "overall": [
          "1편과 달리 전투 캐릭터로는 참여하지 않고, 본거지에서 낚시를 담당합니다. 미끼값 100 포치를 내고 낚시를 진행하며, 잡은 물고기는 판매해 포치를 벌거나 하이요 식당의 식재료 수급에 활용할 수 있습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "ridley-wizen": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "전쟁 전투에서는 공격 10, 방어 7의 보병 부대로 활약합니다.",
          "리드리는 강력한 일격 계열 지휘 능력을 사용할 수 있지만, 시드와 컬건을 비롯한 하이랜드군과 맞설 때는 이 효과가 제한됩니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "boris-wizen": {
      "role": {
        "recruitment": [
          "틴토에서 나나미와 함께 도망치는 선택을 해 리드리가 듀난 통일전쟁 중 전사하면, 보리스가 리드리 대신 듀난 성에 합류합니다."
        ],
        "overall": [
          "전쟁 전투에서는 공격 9, 방어 8의 지휘관 부대로 편성됩니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "fitcher": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 자동으로 합류합니다.",
          "이야기 진행에서 외교와 중개 역할을 맡지만, 별도의 전투·시설 기능은 없습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "chaco": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "창을 쓰는 중거리 전투원이라 후열에서도 공격할 수 있습니다. HP는 낮은 편이지만 행운과 속도가 높고 마법 방어도 괜찮아 약점을 어느 정도 보완합니다. 레벨이 오르면 문장 슬롯을 최대 3개까지 활용할 수 있어 후반에는 강한 세팅을 만들 수 있습니다."
        ],
        "weapon": {
          "type": "창",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*머리 - 없음 (55레벨에 개방)",
            "*오른손 - 없음 (45레벨에 개방)",
            "*왼손 - 없음 (합류 시 사용 가능)"
          ],
          "recommended": [
            "레벨이 오르면 문장 슬롯 3개를 모두 사용할 수 있어 세팅 폭이 넓습니다. 마력은 낮지만 회생의 문장, 바람의 문장, 번개의 문장 같은 보조·공격 문장도 활용할 수 있고, 2회공격의 문장, 2회공격의 봉인구 계열, 분노의 문장을 조합하면 높은 힘을 바탕으로 큰 물리 피해를 낼 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "694",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "151",
          "def": "160",
          "str": "291",
          "pdf": "275",
          "skl": "150",
          "mdf": "190",
          "mag": "133",
          "spd": "210",
          "luc": "190"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Meat Pie (x4)",
            "other2": "Sun Badge",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "윙 호드 공격에 참여할 수 있습니다."
        ]
      }
    },
    "hix": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 레이크웨스트 여관에서 힉스와 텐가알에게 말을 걸고, 코볼트 마을로 따라가 유니콘의 시험을 도우면 합류합니다."
        ],
        "overall": [
          "기본 능력치는 1편과 비슷하게 평균보다 낮은 편입니다. 다만 무기에 고정된 분발의 문장 덕분에 장기전에서 공격력이 크게 올라가며, 보스전처럼 전투가 길어지는 상황에서 더 쓸 만합니다. 힘을 보강하는 장비를 함께 쓰면 효과가 잘 살아납니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "분발의 문장을 살리려면 2회공격의 문장이나 폭력의 문장처럼 물리 공격을 보강하는 문장이 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "820",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "155",
          "def": "155",
          "str": "278",
          "pdf": "259",
          "skl": "172",
          "mdf": "150",
          "mag": "128",
          "spd": "194",
          "luc": "183"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "Wooden Shield",
            "other1": "Medicine (x6)",
            "other2": "Gauntlet",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "텐가알과 함께 전사 공격에 참여할 수 있습니다."
        ]
      }
    },
    "tengaar": {
      "role": {
        "recruitment": [
          "코볼트 마을에서 유니콘의 시험을 마치면 힉스와 함께 합류합니다."
        ],
        "overall": [
          "텐가알은 루카 블라이트전 같은 장기전에서 특히 유용한 지원형 마법사입니다. 문장 슬롯 2개를 활용해 대지의 문장과 류수의 문장을 조합하면 회복, 보조, 지진 계열 공격을 함께 맡을 수 있습니다.",
          "무기가 장거리라 후열에서 안정적으로 운용하기 좋습니다."
        ],
        "weapon": {
          "type": "투척 단검",
          "range": "L",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "흙의 문장"
          ],
          "recommended": [
            "대지의 문장, 류수의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "744",
          "lvl 1": "9",
          "lvl 2": "7",
          "lvl 3": "4",
          "lvl 4": "2",
          "atk": "131",
          "def": "129",
          "str": "267",
          "pdf": "196",
          "skl": "147",
          "mdf": "170",
          "mag": "190",
          "spd": "169",
          "luc": "166"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Wind Amulet",
            "other2": "Pudding (x6)",
            "other3": "Blue Ribbon"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "전사 공격과 미소녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "yoshino-yamamoto": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 프리드 야마모토를 파티에 넣고 라다트에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "요시노는 뚜렷한 약점이나 특출난 한쪽 장점 없이 균형 잡힌 능력치를 가진 인물입니다. 중거리 무기 덕분에 전열과 후열 양쪽에서 공격할 수 있고, 마법 운용에서는 물 계열 문장과 궁합이 좋습니다. 물의 부적을 기본 장비하고 있으며 해제할 수 없습니다."
        ],
        "weapon": {
          "type": "나기나타",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "여러 문장을 무난히 다루지만, 물의 문장이나 류수의 문장을 장착했을 때 특히 안정적으로 활약합니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Water Amulet",
            "other2": "Obento (x4)",
            "other3": "Belt of Strength"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "부부 공격에 참여할 수 있습니다."
        ]
      }
    },
    "stallion": {
      "role": {
        "recruitment": [
          "전투에서 50회 이상 도망친 뒤, 투 리버 사건을 진행하고 라다트에서 스탈리온에게 말을 걸어 달리기 승부를 하면 합류합니다.",
          "동행 효과: 필드 이동 속도가 빨라집니다."
        ],
        "overall": [
          "스탈리온은 속도가 높은 궁수라 전투에서 먼저 행동하기 쉽습니다."
        ],
        "weapon": {
          "type": "활",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "진정한 신행법의 문장"
          ],
          "recommended": [
            "대매의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Winged Boots",
            "other2": "Sunomono (x7)",
            "other3": "Leather Cape"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "궁 공격에 참여할 수 있습니다."
        ]
      }
    },
    "clive": {
      "role": {
        "recruitment": [
          "레이크웨스트로 가는 동선이 열린 뒤 사우스 윈도우에서 클라이브에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "클라이브는 후열 공격수로 뛰어나며 보조 역할도 맡을 수 있습니다. 속도와 공격력이 모두 좋아 안정적인 장거리 화력을 제공합니다."
        ],
        "weapon": {
          "type": "총",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "솔개의 문장과 잘 맞으며, 지원용으로는 스파크의 문장이나 약의 문장도 활용할 수 있습니다. 기술 수치가 높으므로 2회공격의 문장, 필살의 문장, 무기 고정형 분발의 문장과도 궁합이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "744",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "156",
          "def": "129",
          "str": "295",
          "pdf": "206",
          "skl": "230",
          "mdf": "150",
          "mag": "109",
          "spd": "208",
          "luc": "106"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Leather Cape",
            "other2": "Boots",
            "other3": "Sacrificial Jizo"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "teresa-wisemail": {
      "role": {
        "recruitment": [
          "그린힐 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "전쟁 전투에서는 공격 5, 방어 6의 궁병 부대로 편성됩니다.",
          "활 부대 지휘관으로 적 전열을 견제하는 역할을 맡습니다. 플릭 이후 합류하는 원거리 전력이며, 컬건과 맞서는 장면에서도 원거리 견제 성격이 두드러집니다.",
          "전쟁 전투 기술은 포격 계열입니다. 다만 시드, 컬건, 유버, 루시아, 죠우이 같은 주요 지휘관을 상대로는 효과가 제한됩니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "nina": {
      "role": {
        "recruitment": [
          "그린힐 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "마력과 마법 방어가 높고 HP, 방어, 힘도 평균 이상이라 마법과 물리 양쪽에서 활약할 수 있습니다. 플릭과의 협력 공격도 있어 실전 활용도가 높습니다."
        ],
        "weapon": {
          "type": "책",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장, 흙의 문장, 밸런스의 문장, 분노의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Magic Robe",
            "shield": "-",
            "other1": "Spicy Pilaf (x6)",
            "other2": "Fish Badge",
            "other3": "Guard Ring"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "추종자 공격에 참여할 수 있습니다."
        ]
      }
    },
    "humphrey-mintz": {
      "role": {
        "recruitment": [
          "가도 마을 여관에서 험프리에게 여러 번 말을 걸고, 후치와 함께 이어지는 의뢰를 완료하면 합류합니다."
        ],
        "overall": [
          "1편과 마찬가지로 높은 방어력과 힘을 가진 전열 탱커입니다. 중장비를 착용할 수 있고 세이브 데이터 계승으로 바람잣는 갑옷을 가져올 수 있어 전열 안정성이 뛰어납니다. 대신 속도와 기술이 낮아 행동이 늦고 연속 공격이 잘 나오지 않으며, 마법에는 취약합니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "없음"
          ],
          "recommended": [
            "방어력이 높아 전사의 문장과 궁합이 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "942",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "227",
          "def": "238",
          "str": "387",
          "pdf": "349",
          "skl": "150",
          "mdf": "139",
          "mag": "89",
          "spd": "106",
          "luc": "111"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Knight Armor /*Imported Data*",
            "shield": "-",
            "other1": "Mega Medicine (x3)",
            "other2": "Gauntlet",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "kiba-windamier": {
      "role": {
        "recruitment": [
          "전쟁 전투에서 키바의 부대를 격파한 뒤, 처형 선택 여부와 관계없이 자동으로 합류합니다."
        ],
        "overall": [
          "합류 전에는 클라우스와 함께 하이랜드군 지휘관으로 등장하며, 전쟁 전투에서 방어가 높은 부대로 표현됩니다. 합류 후에는 플릭에 이어 기병 전력을 제공하며, 중장갑 특성으로 전쟁 전투에서 높은 내구력을 발휘합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "valeria": {
      "role": {
        "recruitment": [
          "트란공화국과 동맹을 맺을 때 그레그민스터에서 카스미와 함께 제시되는 선택지 중 한 명입니다.",
          "발레리아를 선택하면 전쟁 전투에서 기병 전력을 확보할 수 있고, 높은 방어력과 방패 장비를 바탕으로 안정적인 전열 운용이 가능합니다."
        ],
        "overall": [
          "발레리아는 숙련된 전열 전투원입니다. 매의 문장을 활용한 강한 단일 공격이 특징이며, 특정 세팅에서는 매우 높은 피해를 낼 수 있습니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 슬롯 없음",
            "*오른손 - 매의 문장 (고정 장착)",
            "*왼손 - 없음"
          ],
          "recommended": [
            "무기 유형상 독사의 문장을 활용할 수 있고, 2회공격의 문장도 잘 맞습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "815",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "1",
          "atk": "192",
          "def": "152",
          "str": "342",
          "pdf": "270",
          "skl": "195",
          "mdf": "155",
          "mag": "145",
          "spd": "184",
          "luc": "180"
        },
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Scale Mail",
            "shield": "Kite Shield",
            "other1": "Mega Medicine (x3)",
            "other2": "Silverlet",
            "other3": "Leather Cape"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "아니타와 라이벌 공격을 사용할 수 있습니다. 적 하나에게 3배 피해를 주고, 사용 후 발레리아가 언밸런스 상태가 됩니다."
        ]
      }
    },
    "tomo": {
      "role": {
        "recruitment": [
          "발레리아 또는 카스미를 영입한 뒤 챠이를 류베 숲의 집으로 데려가면, 이벤트 후 토모가 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "창",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 유니콘의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "유니콘의 문장, 흙의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Thunder God's Garb",
            "shield": "-",
            "other1": "Ice Cream (x6)",
            "other2": "Gauntlet",
            "other3": "Leggings"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "부녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "feather": {
      "role": {
        "recruitment": [
          "성 레벨 3 이후 숲의 마을에서 그리폰 계열 적을 쓰러뜨리고 바도의 듣기 수정을 사용하면 합류합니다. 이 전투에서 패배하면 페더는 영입할 수 없지만, 아이다는 계속 영입할 수 있습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 빛나는 바람의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "2회공격의 문장, 분노의 문장, 밸런스의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "891",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "530",
          "def": "238",
          "str": "530",
          "pdf": "238",
          "skl": "163",
          "mdf": "131",
          "mag": "128",
          "spd": "170",
          "luc": "151"
        },
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "비스트마스터 공격과 더블 몬스터 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sigfried": {
      "role": {
        "recruitment": [
          "힉스와 텐가알을 영입한 뒤, 순결한 소녀로 판정되는 여성 동료를 파티에 넣고 코볼트 숲을 지나가면 지크프리드를 만날 수 있습니다. 이때 바도의 듣기 수정을 사용해야 합니다.",
          "지크프리드 영입에 데려갈 수 있는 대표 인물은 아이다, 아이리, 카렌, 카스미입니다."
        ],
        "overall": [],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 축복받은 백색 숙녀의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "번개의 문장, 회생의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "900",
          "lvl 1": "9",
          "lvl 2": "7",
          "lvl 3": "6",
          "lvl 4": "4",
          "atk": "518",
          "def": "226",
          "str": "518",
          "pdf": "226",
          "skl": "133",
          "mdf": "190",
          "mag": "175",
          "spd": "126",
          "luc": "106"
        },
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "비스트마스터 공격과 더블 몬스터 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sierra-mikain": {
      "role": {
        "recruitment": [
          "네크로드를 격파하면 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "손톱",
          "range": "S",
          "startingLevel": "10"
        },
        "rune": {
          "attached": [
            "*머리 - 어둠의 문장",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "어둠의 문장, 번개의 문장",
            "하인 공격을 중시한다면 2회공격의 문장과 분노의 문장도 선택지입니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Magic Robe",
            "shield": "-",
            "other1": "Tomato Juice (x6)",
            "other2": "Magic Ring",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "하인 공격에 참여할 수 있습니다."
        ]
      }
    },
    "hauser": {
      "role": {
        "recruitment": [
          "틴토에서 네크로드를 격파하면 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "2회공격의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Scale Mail",
            "shield": "-",
            "other1": "Dancing Flames Scroll (x3)",
            "other2": "Silverlet",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "jess": {
      "role": {
        "recruitment": [
          "네크로드를 격파한 뒤 제스의 사과를 받아들이면 합류합니다.",
          "사과를 거절하면 다시 영입할 수 없습니다."
        ],
        "overall": [
          "전쟁 전투에서는 공격 +2, 방어 +0의 군사 지원 인물입니다.",
          "클라우스나 보리스처럼 회피 계열 전술을 사용해 강한 적의 공세를 흘려보내는 역할을 맡습니다.",
          "회피 전술 사용 시 리마스터판에서는 “적의 의도를 읽었다. 공세를 피한다!”라는 취지의 대사를 말합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "georg-prime": {
      "role": {
        "recruitment": [
          "틴토에서 네크로드를 격파한 뒤 틴토 산길로 돌아가 아래쪽 길을 따라가면 빈 모닥불이 있는 공터에서 게오르그 프라임을 만날 수 있습니다. 대화에서 “그래” 또는 “돈으로는 못 갚아”에 해당하는 선택지를 고르면 합류합니다."
        ],
        "overall": [
          "게오르그 프라임은 공격력과 속도가 매우 높은 강력한 전투원입니다. 보통 60레벨 전후로 합류하며, 필살의 문장 덕분에 높은 피해를 안정적으로 노릴 수 있습니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "12"
        },
        "rune": {
          "attached": [
            "오른손에 필살의 문장을 장착한 상태로 합류합니다."
          ],
          "recommended": [
            "무기에 열화의 문장이나 번개의 문장을 부여하면 피해량을 크게 끌어올릴 수 있습니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Full Helmet",
            "armor": "Silver Armor",
            "shield": "[none]",
            "other1": "Cheesecake (x6)",
            "other2": "Silverlet",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "[none]",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "killey": {
      "role": {
        "recruitment": [
          "루카 블라이트 격파 전 사우스 윈도우 교역소 밖에서 키리를 만나 알렉스 이야기를 전한 뒤 본거지로 돌아가면, 도구점에서 알렉스와 말다툼하는 장면을 볼 수 있습니다. 이후 다시 사우스 윈도우에서 키리에게 합류를 요청하면 동료가 됩니다.",
          "죠우이 아트레이드와 사사라이 이벤트 이후에도 성 레벨 3 이상이면 더 이른 시점에 만날 수 있습니다. 키리를 데리고 그레그민스터에 가면 로렐라이 영입 관련 대화를 볼 수 있습니다."
        ],
        "overall": [
          "키리는 초반 기준으로 능력치가 고르게 분포한 만능형 인물입니다. HP가 아주 높지는 않아 후열 운용이 안정적이고, 세 개의 문장 슬롯을 모두 활용할 수 있어 후반에는 물리 화력 세팅이나 마법 보조 세팅 모두 가능합니다. 분노의 문장, 2회공격의 문장, 2회공격 계열 보조 문장을 조합하면 높은 폭발력을 낼 수 있습니다."
        ],
        "weapon": {
          "type": "쌍검",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "문장 슬롯 3개를 모두 활용할 수 있어 2회공격의 문장, 2회공격 계열 보조 문장, 분노의 문장 조합이 강력합니다. 물리 세팅을 극대화하려면 무기에 우정의 문장이나 분발의 문장처럼 물리 피해를 올리는 문장을 붙이는 것도 좋습니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Scale Mail",
            "shield": "-",
            "other1": "Mega Medicine (x3)",
            "other2": "Cape of Darkness",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "pesmerga": {
      "role": {
        "recruitment": [
          "108성 동료를 100명 이상 모은 뒤, 본 드래곤을 격파하고 바람의 동굴 깊은 곳에서 말을 걸면 합류합니다."
        ],
        "overall": [
          "페슈멜가는 높은 힘, HP, 방어력을 갖춘 강력한 전열 전투원입니다. 문장과 장비 선택 폭은 좁지만 기본 능력과 장비가 좋아 상위권 물리 공격수로 운용할 수 있습니다. 속도가 낮으므로 스파크의 문장을 지닌 동료와 함께 쓰면 단점이 줄어듭니다. 무기에 고정된 열화의 문장은 화염 속성을 부여하고 공격력을 더 끌어올립니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "14"
        },
        "rune": {
          "attached": [
            "반격의 문장을 장착하고 있으며, 무기에는 열화의 문장이 고정되어 있습니다."
          ],
          "recommended": [
            "분노의 문장, 필살의 문장, 2회공격의 문장, 2회공격 계열 보조 문장, 타이탄의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "820",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "230",
          "def": "168",
          "str": "390",
          "pdf": "331",
          "skl": "172",
          "mdf": "170",
          "mag": "133",
          "spd": "80",
          "luc": "135"
        },
        "equipment": {
          "default": {
            "helmet": "Horned Helmet*",
            "armor": "Knight Armor*",
            "shield": "Chaos Shield*",
            "other1": "Guard Ring*",
            "other2": "Iron Boots*",
            "other3": "Bolt of Wrath (x3)"
          },
          "recommended": {
            "helmet": "Horned Helmet*",
            "armor": "Knight Armor*",
            "shield": "Chaos Shield*",
            "other1": "Guard Ring*",
            "other2": "Iron Boots*",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "abizboah": {
      "role": {
        "recruitment": [
          "바도에게 듣기 수정을 받은 뒤 틴토 광산의 호수로 가서 어비스보어에게 사용하면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 푸른 물방울의 문장 (고정 장착)",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "970",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "640",
          "def": "160",
          "str": "640",
          "pdf": "160",
          "skl": "109",
          "mdf": "85",
          "mag": "89",
          "spd": "130",
          "luc": "171"
        },
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "머리 들기!!, 더블 크라켄 공격"
        ]
      }
    },
    "mukumuku": {
      "role": {
        "recruitment": [
          "무쿠무쿠는 두 가지 방식으로 영입할 수 있습니다.",
          "나나미를 만나기 전 캐로의 겐카쿠 도장 뒤 큰 나무를 세 번 조사하면 합류합니다.",
          "또는 파티에 빈자리를 둔 상태로 그린힐과 뮤즈-그린힐 국경 사이 길에서 기다리면 파티에 들어올 수 있습니다. 파티 인원이 적을수록 확률이 오르며, 진정한 신행법의 문장과 챔피언의 문장이 있으면 시간을 줄일 수 있습니다."
        ],
        "overall": [
          "무쿠무쿠는 장비를 착용할 수 없지만 몬스터형 동료답게 힘, 방어, 속도가 탄탄합니다. 장거리 공격이 가능해 후열에서 안전하게 운용할 수 있으며, HP가 낮은 편인 단점도 어느 정도 보완됩니다."
        ],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "2회공격의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "628",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "299",
          "def": "237",
          "str": "299",
          "pdf": "126",
          "skl": "129",
          "mdf": "132",
          "mag": "",
          "spd": "160",
          "eva": "",
          "luc": ""
        },
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "무쿠무쿠는 5마리 날다람쥐 공격에 참여할 수 있습니다."
        ]
      }
    },
    "rikimaru": {
      "role": {
        "recruitment": [
          "류베에서 쓰러져 있는 리키마루를 발견한 뒤 3,000 포치짜리 식사를 사주겠다고 하면 합류합니다. 류베에서 놓쳤다면 이후 코로네에서 다시 만날 수 있으며, 이때도 3,000 포치 식사값을 내야 합니다."
        ],
        "overall": [
          "리키마루는 초반에 영입할 수 있는 물리 전열 요원입니다. 레벨이 오를수록 HP가 크게 늘어 탱커 역할을 맡기 좋고, 전투에서는 양손검을 사용합니다."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "리키마루는 HP가 높은 중전열 공격수입니다. 문장 슬롯이 하나뿐이라 확장성은 낮지만, 2회공격의 문장이나 아마다와 함께 쓸 경우 분노의 문장을 고려할 수 있습니다. 물리 공격수로 운용한다면 무기에 화력을 보조하는 문장을 붙이는 편이 좋습니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "리키마루는 사나이 공격에 참여할 수 있습니다. 리키마루나 아마다 중 한 명이 약속의 잔을 장비하면 협력 공격에 넘어뜨리기 효과가 붙을 수 있습니다."
        ]
      }
    },
    "millie": {
      "role": {
        "recruitment": [
          "류베에서 밀리에게 말을 걸고 보나파르트를 되찾는 일을 도와주면 됩니다. 숲 오른쪽으로 이동해 보나파르트를 쫓아가 전투에서 이기면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Boomerang",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "밀리는 고유 문장인 땅다람쥐의 문장을 지니고 있습니다. 영입 후 사용할 수 있으며 전투당 한 번만 발동합니다.",
            "*Head - None",
            "*R. Hand - Groundhog Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "밀리는 불의 문장과 번개의 문장 적성이 좋고, 물의 문장을 제외한 원소 문장 전반을 무난하게 다룹니다. 계열 문장에서는 어둠 계열과 궁합이 좋지만, 부활 계열은 효율이 낮습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "693",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "1",
          "atk": "108",
          "def": "123",
          "str": "139",
          "mag": "143",
          "spd": "162",
          "luc": "211"
        },
        "equipment": {
          "default": {
            "helmet": "Feathered Hat",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Gloves",
            "other3": "Blue Ribbon"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "메그, 텐가알과 함께 미소녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "kinnison": {
      "role": {
        "recruitment": [
          "류베 숲에서 새 둥지를 찾아 나무에 돌려놓고, 숲을 나갔다가 잠시 뒤 같은 장소로 돌아가면 키니슨과 시로를 만날 수 있습니다. 첫 번째 선택지를 고르면 둘이 함께 합류합니다.",
          "두 번째 선택지를 고르면 떠나 버려 다시 영입할 수 없습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "활",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "2회공격의 문장, 대매의 문장, 흐릿함의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Bandana",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Healing Wind Scroll (x1)",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "충견 공격과 궁 공격에 참여할 수 있습니다."
        ]
      }
    },
    "shiro": {
      "role": {
        "recruitment": [
          "류베 숲에서 새 둥지를 나무에 돌려놓은 뒤 잠시 후 돌아와 키니슨과 시로에게 말을 걸고 첫 번째 선택지를 고르면 함께 합류합니다."
        ],
        "overall": [
          "시로는 동물형 동료라 장비를 착용할 수 없지만 힘, 방어, 속도가 모두 뛰어납니다. 특히 속도는 주인공, 나나미, 카스미 같은 민첩형 인물과 견줄 정도로 높습니다."
        ],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "반격의 문장, 분노의 문장, 스파크의 문장, 2회공격의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "충견 공격과 멍멍 공격에 참여할 수 있습니다."
        ]
      }
    },
    "zamza": {
      "role": {
        "recruitment": [
          "자무자는 두 가지 방식으로 영입할 수 있습니다.",
          "나나미를 파티에 넣고 토토 마을 여관에서 자무자에게 말을 걸면 합류합니다.",
          "토토에서 놓쳤다면 이후 사우스 윈도우 여관에서 다시 만날 수 있으며, 이때도 나나미가 파티에 있어야 합니다."
        ],
        "overall": [
          "자무자는 뚜렷한 약점이 적은 균형형 전열 인물입니다. HP가 높아 전열 유지력이 좋고, 고유 문장인 화룡의 문장을 반복 사용할 수 있습니다. 다만 화룡의 문장은 자무자에게도 피해를 주므로 화염 봉인의 문장과 함께 운용하면 안정성이 올라갑니다. 순수 마법사보다는 물리 전투원에 가깝습니다."
        ],
        "weapon": {
          "type": "권격",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 화룡의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장, 열화의 문장, 화염 봉인의 문장, 불도마뱀의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Feathered Hat",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Cape",
            "other3": "Leggings"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "apple": {
      "role": {
        "recruitment": [
          "용병 요새 이벤트 중 자동으로 합류합니다."
        ],
        "overall": [
          "애플에게 말을 걸면 전쟁 전투 부대 편성을 정리할 수 있습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "tuta": {
      "role": {
        "recruitment": [
          "제스가 하이랜드군 정찰을 요청한 뒤 뮤즈에서 토우타에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "돌",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "약의 문장"
          ],
          "recommended": [
            "약의 문장, 물의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "504",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "113",
          "def": "128",
          "str": "253",
          "pdf": "159",
          "skl": "128",
          "mdf": "119",
          "mag": "92",
          "spd": "167",
          "luc": "176"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Medicine (x6)",
            "other3": "Medicine (x6)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "gilbert": {
      "role": {
        "recruitment": [
          "세 번째 대규모 전쟁 전투에서 길버트 부대에 피해를 주고, 길버트가 전투에서 살아남으면 합류합니다."
        ],
        "overall": [
          "전쟁 전투에서는 공격 +7, 방어 +8의 지휘관 부대로 편성됩니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "eilie": {
      "role": {
        "recruitment": [
          "사우스 윈도우로 가는 이동 동선을 확보한 뒤 코로네에서 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "투척 단검",
          "range": "L",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장, 번개의 문장, 흙의 문장, 물의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "734",
          "lvl 1": "9",
          "lvl 2": "6",
          "lvl 3": "3",
          "lvl 4": "1",
          "atk": "150",
          "def": "147",
          "str": "181",
          "pdf": "247",
          "skl": "177",
          "mdf": "168",
          "mag": "156",
          "spd": "165",
          "luc": "180"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Tunic",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Gloves",
            "other3": "Wooden Shoes"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "리나, 볼간과 함께 서커스 공격에 참여할 수 있습니다."
        ]
      }
    },
    "rina": {
      "role": {
        "recruitment": [
          "사우스 윈도우로 가는 이동 동선을 확보한 뒤 코로네에서 자동으로 합류합니다."
        ],
        "overall": [
          "리나는 장거리 전투원이라 파티 어느 위치에서도 공격할 수 있습니다. 세 개의 문장 슬롯을 모두 자유롭게 쓸 수 있는 드문 인물이며, 후열 물리 공격수나 마법사로 모두 운용 가능합니다. 물 계열 문장 적성이 좋고, 푸른 문장의 문장도 장착할 수 있어 마법 운용 폭이 넓습니다."
        ],
        "weapon": {
          "type": "다트",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 불의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "푸른 문장의 문장, 번개의 문장, 물의 문장",
            "리나는 전반적으로 균형 잡힌 마법사입니다. 대부분의 마법 문장을 무난히 다루며, 특히 물 계열 적성이 더 좋습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "684",
          "lvl 1": "9",
          "lvl 2": "8",
          "lvl 3": "5",
          "lvl 4": "3",
          "atk": "123",
          "def": "132",
          "str": "263",
          "pdf": "232",
          "skl": "155",
          "mdf": "200",
          "mag": "202",
          "spd": "167",
          "luc": "147"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Robe",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Angry Blow (x2)",
            "other3": "Cape"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "서커스 공격과 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "bolgan": {
      "role": {
        "recruitment": [
          "사우스 윈도우로 가는 이동 동선을 확보한 뒤 코로네에서 자동으로 합류합니다."
        ],
        "overall": [
          "볼간은 화염 숨결의 문장을 고정으로 사용합니다. 전반적인 능력치는 높지 않지만, 초중반에는 서커스 공격 등 협력 공격 구성원으로 활용할 수 있습니다."
        ],
        "weapon": {
          "type": "권격",
          "range": "S",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 화염 숨결의 문장 (고정 장착)",
            "*왼손 - 없음",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "문장 슬롯이 사실상 화염 숨결의 문장으로 고정되어 있어 세팅 자유도는 낮습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "884",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "1",
          "atk": "219",
          "def": "108",
          "str": "261",
          "pdf": "234",
          "skl": "108",
          "mdf": "126",
          "mag": "87",
          "spd": "109",
          "luc": "189"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Leggings",
            "other2": "Wooden Shoes",
            "other3": "Sacrificial Jizo"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "서커스 공격, 하인 공격, 번쩍 공격에 참여할 수 있습니다."
        ]
      }
    },
    "leona": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "레오나에게 말을 걸면 파티 편성을 변경할 수 있습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "gengen": {
      "role": {
        "recruitment": [
          "캐로에서 돌아온 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "겐겐은 전반적으로 평균적인 전열 전투원입니다. 초중반에는 방어구와 방패를 갖춰 전열을 맡길 수 있고, 시로와의 협력 공격도 활용할 수 있습니다. 다만 후반에는 특화형 동료에게 밀리기 쉽고, 마법 방어가 낮아 적 마법과 특수 공격에 약합니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "방벽의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "736",
          "lvl 1": "8",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "144",
          "def": "151",
          "str": "294",
          "pdf": "241",
          "skl": "166",
          "mdf": "105",
          "mag": "119",
          "spd": "188",
          "luc": "160"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Coat",
            "shield": "Wooden Shield",
            "other1": "Cape",
            "other2": "Boots",
            "other3": "Medicine (x6)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "코볼트 공격과 멍멍 공격에 참여할 수 있습니다. 코볼트 공격은 낮은 확률로 100 코볼트 공격으로 변화할 수 있습니다."
        ]
      }
    },
    "barbara": {
      "role": {
        "recruitment": [
          "초반부터 일행을 돕고, 솔론 지의 군대를 격파한 뒤 정식으로 합류합니다."
        ],
        "overall": [
          "본거지에서 창고를 운영합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "huan": {
      "role": {
        "recruitment": [
          "솔론 지의 군대를 격파한 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "호우안은 본거지의 의사로, 회복과 의료 관련 이벤트를 담당합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "oulan": {
      "role": {
        "recruitment": [
          "쿠스쿠스 입구 근처 여성에게 여성만 노리는 산적 이야기를 들은 뒤, 여성 캐릭터만으로 파티를 구성해 마을에 다시 들어가 다리를 건너면 이벤트가 발생합니다. 오우란이 일행을 구해 준 뒤 합류를 요청할 수 있습니다.",
          "여성 파티를 구성할 수 있는 시점이라면 본거지를 얻기 전에도 영입할 수 있습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "권격",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 성난 용의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "분노의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "923",
          "lvl 1": "6",
          "lvl 2": "3",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "183",
          "def": "216",
          "str": "318",
          "pdf": "283",
          "skl": "155",
          "mdf": "209",
          "mag": "89",
          "spd": "91",
          "luc": "149"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Chain Mail",
            "shield": "-",
            "other1": "Power Gloves",
            "other2": "Medicine (x6)",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "오울란은 몸통박치기 공격에 참여할 수 있습니다."
        ]
      }
    },
    "taki": {
      "role": {
        "recruitment": [
          "레이크웨스트에 도착한 뒤 타키에게 세 번 말을 걸면 합류합니다. 마틸다 국경 우회 동선을 이용하면 조금 더 이르게 영입할 수 있습니다. 하이랜드군이 뮤즈를 점령한 뒤 그린힐-마틸다 방면 길을 지나 투 리버를 거쳐 레이크웨스트까지 이동하면 됩니다. 같은 방법으로 투 리버 인간 구역 여관 2층에서 한스를 먼저 영입할 수 있고, 테츠도 이르게 영입할 수 있습니다."
        ],
        "overall": [
          "타키는 소문과 정보를 들려주는 인물입니다. 말을 걸면 다음 진행 방향이나 특정 동료 영입에 대한 힌트를 얻을 수 있습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "hans": {
      "role": {
        "recruitment": [
          "한스는 투 리버 여관에서 만날 수 있습니다. 돈을 달라고 요청하면 준비 시간이 필요하므로, 잠시 뒤 다시 여관으로 돌아와야 합류시킬 수 있습니다.",
          "마틸다 국경 우회 동선을 이용하면 조금 더 이르게 영입할 수 있습니다. 하이랜드군이 뮤즈를 점령한 뒤 그린힐-마틸다 방면 길을 통해 투 리버로 이동하고, 인간 구역 여관 2층에서 한스를 영입하면 됩니다. 노스윈도우 성 보스전을 마친 뒤에는 바로 상점을 열 수 있습니다."
        ],
        "overall": [
          "한스는 본거지에 방어구점을 엽니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "tetsu": {
      "role": {
        "recruitment": [
          "따끈따끈 상태가 된 뒤 레이크웨스트의 테츠 집에서 말을 걸면 합류합니다. 이 상태는 투 리버 코볼트 구역에서 산 튀김 타코를 먹으면 얻을 수 있습니다.",
          "마틸다 국경 우회 동선을 이용하면 조금 더 이르게 영입할 수 있습니다. 하이랜드군이 뮤즈를 점령한 뒤 그린힐-마틸다 방면 길을 지나 투 리버를 거쳐 레이크웨스트까지 이동하면 됩니다. 같은 방법으로 투 리버 인간 구역 여관 2층에서 한스도 먼저 영입할 수 있습니다."
        ],
        "overall": [
          "테츠는 본거지에 목욕탕을 엽니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "hai-yo": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 본거지에서 하이요를 찾을 수 있습니다. 요시노가 빨래를 하는 곳과 반대편, 산이 보이는 발코니 쪽에 있으니 말을 걸고 첫 번째 선택지를 고르면 합류합니다."
        ],
        "overall": [
          "하이요는 대부분의 구간에서 능력치가 평균 이하에서 평균 정도이며, 무기 사거리가 S라 전열에 서야 하므로 초중반 전투 요원으로는 다루기 까다롭습니다. 다만 후반에는 세 번째 문장 슬롯이 열리고 무기 문장 슬롯과 장신구 슬롯을 활용할 수 있어 세팅 폭이 넓어집니다. 충분히 육성하고 희귀 장비와 문장을 투자하면 강력한 물리 화력 요원이 될 수 있지만, 같은 자원을 키리나 시나처럼 기본 성능이 높은 캐릭터에게 쓰는 편이 더 효율적일 때가 많습니다."
        ],
        "weapon": {
          "type": "Wok",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fury Rune, Double Strike Rune, Double Beat Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "748",
          "lvl 1": "8",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "121",
          "def": "143",
          "str": "286",
          "pdf": "220",
          "skl": "126",
          "mdf": "124",
          "mag": "122",
          "spd": "180",
          "luc": "151"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "BBQ Meat Bun (x9)",
            "other2": "Fried Fish Balls (x4)",
            "other3": "Wooden Shoes"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "richmond": {
      "role": {
        "recruitment": [
          "본거지를 얻고 방어전을 마친 뒤 라다트에서 리치몬드를 영입할 수 있습니다. 동전 던지기 승부를 받아들여 일부러 패배한 뒤, 술집 입구 가까이에 있는 손님에게 말을 걸면 리치몬드에게 쓰게 할 동전을 받을 수 있습니다. 그 동전을 리치몬드에게 가져가면 합류합니다."
        ],
        "overall": [
          "리치몬드는 환상수호전 II의 조사 담당 동료입니다. 영입 후에는 비용을 받고 동료 조사를 진행해 인물 정보를 추가로 확인해 줍니다.",
          "조사에는 약 10분 정도가 걸리며, 본거지에서 동료 기록을 보강하는 정보 시설 역할을 맡습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "amada": {
      "role": {
        "recruitment": [
          "피처를 투 리버까지 데려가기로 한 뒤 라다트에서 아마다와 일기토를 벌여 승리하면 합류합니다."
        ],
        "overall": [
          "아마다는 높은 HP와 힘 덕분에 초반 전열 요원으로 안정적입니다. 다만 문장 슬롯이 하나뿐이라 후반으로 갈수록 다른 전열 캐릭터보다 세팅 폭이 좁아집니다."
        ],
        "weapon": {
          "type": "Oar",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - None",
            "*L. Hand - N/A",
            "*Weapon - Earth Rune"
          ],
          "recommended": [
            "초반에는 전열 요원으로 충분히 쓸 수 있지만, 문장 슬롯이 하나뿐이라 후반 확장성이 낮습니다. 유니콘의 문장이나 2회공격의 문장을 활용하면 물리 화력을 보완할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "921",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "173",
          "def": "162",
          "str": "313",
          "pdf": "262",
          "skl": "130",
          "mdf": "128",
          "mag": "112",
          "spd": "147",
          "luc": "145"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Chirashi-Zushi (x5)",
            "other2": "Belt of Strength",
            "other3": "Leggings"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "아마다는 리키마루와 함께 사나이 공격에 참여할 수 있습니다."
        ]
      }
    },
    "alex": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 사우스 윈도우 여관에서 알렉스와 힐다에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "알렉스는 본거지에 도구점을 엽니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "hilda": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 사우스 윈도우 여관에서 힐다와 알렉스에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "힐다는 본거지에서 여관을 운영합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "adlai": {
      "role": {
        "recruitment": [
          "본거지를 얻은 뒤 사우스 윈도우에서 아다리를 만날 수 있습니다. 대역지장보살, 나무 방패, 바람의 봉인구를 순서대로 가져가야 하며, 대역지장보살을 제외한 물품은 사우스 윈도우에서 구할 수 있습니다. 마지막 바람의 봉인구는 건네지 말고 던지는 선택을 해야 하며, 아다리가 그 배짱을 인정하고 합류합니다."
        ],
        "overall": [
          "아다리는 듀난 성에 승강기를 설치합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "emilia": {
      "role": {
        "recruitment": [
          "하이랜드군 점령 후 그린힐에 처음 들어갔을 때 에밀리아에게 정체를 밝히면, 그린힐 탈출 후 합류합니다. 정체를 밝히지 않았다면 그린힐 해방 후에 다시 영입해야 합니다."
        ],
        "overall": [
          "에밀리아는 본거지 도서관을 담당합니다. 오래된 책을 가져가면 도서관 기록으로 보관됩니다.",
          "오래된 책 1권: 캐로 방문 시 겐카쿠의 방",
          "오래된 책 2권: 신다르 유적 보물상자",
          "오래된 책 3권: 사우스 윈도우 도구점 레어 아이템",
          "오래된 책 4권: 제스가 하이랜드 군복을 건네는 뮤즈 회의장 책장",
          "오래된 책 5권: 그린힐 학원 1층 왼쪽 두 번째 방",
          "오래된 책 6권: 숲의 마을 교역소 인물과 대화"
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "gabocha": {
      "role": {
        "recruitment": [
          "겐겐을 파티에 넣고 투 리버 코볼트 구역의 카보챠 집에서 말을 걸면 본거지까지 따라와 합류합니다."
        ],
        "overall": [
          "카보챠는 행운과 속도를 제외하면 능력치가 낮거나 평균적인 편입니다. 겐겐과의 협력 공격은 낮은 확률로 강화되지만 대부분은 단일 적에게 낮은 피해만 주고 카보챠가 언밸런스 상태가 되므로 실전 효율은 높지 않습니다. 장거리 공격수가 필요하다면 다른 동료가 더 안정적입니다."
        ],
        "weapon": {
          "type": "새총",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "필살의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "698",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "124",
          "def": "134",
          "str": "264",
          "pdf": "211",
          "skl": "186",
          "mdf": "128",
          "mag": "126",
          "spd": "190",
          "luc": "192"
        },
        "equipment": {
          "default": {
            "helmet": "Pointed Hat",
            "armor": "Leather Coat",
            "shield": "-",
            "other1": "Croquettes (x4)",
            "other2": "Fish Badge",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "멍멍 공격, 코볼트 공격, 100 코볼트 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sid": {
      "role": {
        "recruitment": [
          "성 레벨 2 이후 챠코를 파티에 넣고 투 리버 하수도의 폭포 뒤 방에서 시드를 만나면 합류합니다."
        ],
        "overall": [
          "시드는 챠코처럼 레벨이 오르면 문장 슬롯 3개를 활용할 수 있습니다. 차이는 방어를 포기한 고화력형이라는 점입니다. 세 문장 세팅을 맞추면 매우 강한 공격을 낼 수 있지만, 물리·마법 방어가 낮아 집중 공격에는 취약합니다."
        ],
        "weapon": {
          "type": "창",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 각성의 문장"
          ],
          "recommended": [
            "회생의 문장, 어둠의 문장, 유니콘의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Mayo Rice Omelet (x9)",
            "other2": "Gauntlet",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "윙 호드 공격에 참여할 수 있습니다."
        ]
      }
    },
    "jeane": {
      "role": {
        "recruitment": [
          "그린힐 사건 후 성 레벨 2 이상에서 투 리버 문장점의 진에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "shilo": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 레이크웨스트 여관에서 시로우에게 말을 걸고 주사위 도박으로 5,000 포치를 따면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "다트",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": [
            "필살의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Wind of Sleep Scroll (x2)",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "yuzu": {
      "role": {
        "recruitment": [
          "힉스와 텐가알을 영입하고 그린힐 사건을 마친 뒤 코볼트 마을에서 유즈를 만날 수 있습니다. 사라진 양 세 마리를 코볼트 숲 끝, 지크프리드가 있던 장소에서 찾아 돌려주면 합류합니다."
        ],
        "overall": [
          "유즈는 본거지 목장을 관리합니다. 발견한 동물을 데려가면 목장에 추가되며, 일부 동물은 하이요 식당에서 사용할 식재료 수급과 연결됩니다.",
          "송아지: 가도 마을 길가의 소년에게 구입",
          "송아지: 용구마을 입구 근처 모자를 쓴 남자에게 구입",
          "송아지: 록엑스 해방 후 가도 마을 여관 근처 소년에게 구입",
          "양: 유즈가 기본으로 데리고 있습니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "shin": {
      "role": {
        "recruitment": [
          "그린힐 사건 이후 자동으로 합류합니다."
        ],
        "overall": [
          "신은 물리 공격력이 좋고 행운과 기술이 높아 치명타, 반격, 상태 이상, 회피를 노리기 좋습니다. 물리·마법 방어는 낮은 편이라 전열 고화력형 유리 대포에 가깝습니다. 필살의 문장과 대지 계열 방어 보조를 함께 쓰면 장점은 살리고 약점은 줄일 수 있습니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 거미베기의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "필살의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Chain Mail",
            "shield": "-",
            "other1": "Mega Medicine (x3)",
            "other2": "Belt of Strength",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "겐슈와 함께 검객 공격에 참여할 수 있습니다."
        ]
      }
    },
    "meg": {
      "role": {
        "recruitment": [
          "본거지 레벨 2 이상에서 뮤즈-그린힐 국경에 있는 멕에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "멕은 후열에서 안정적으로 싸울 수 있는 장거리 전투원입니다. 물리와 마법을 모두 어느 정도 다루며, 번개 계열과 바람 계열 문장 적성이 좋아 공격 마법으로도 활약할 수 있습니다. 행운 수치가 매우 높아 사냥꾼의 문장이나 수면 계열 보조와도 궁합이 좋습니다. 다만 중장비와 방패는 장비할 수 없고, 행운의 반지는 해제할 수 없습니다."
        ],
        "weapon": {
          "type": "투척 단검",
          "range": "L",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "*머리 - 슬롯 없음",
            "*오른손 - 장난의 문장",
            "*왼손 - 물의 문장"
          ],
          "recommended": [
            "초기 문장 구성 덕분에 합류 직후에는 보조 회복도 맡을 수 있습니다. 후반에는 적성이 높은 번개 계열이나 바람 계열 문장이 더 어울립니다.",
            "문장 적성: 어둠 C, 흙 E, 불 E, 번개 A, 회생 E, 물 C, 바람 A"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Lucky Ring",
            "other2": "Anchovy Pizza (x5)",
            "other3": "French Toast (x4)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "장난 공격에 참여할 수 있습니다."
        ]
      }
    },
    "gadget": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 뮤즈-그린힐 국경에서 멕과 카라쿠리마루를 만나면, 대화 이벤트 후 함께 합류합니다."
        ],
        "overall": [
          "카라쿠리마루는 장비를 착용할 수 없는 대신 중반 기준 능력치가 높게 책정된 전열형 동료입니다. 방어력이 매우 높아 피해를 받아내기 좋고, 멕과의 협력 공격은 언밸런스 부담 없이 범위 피해를 줄 수 있습니다. 다만 장비와 아이템을 활용할 수 없어 후반으로 갈수록 운용 폭은 좁아집니다."
        ],
        "weapon": {
          "type": "-",
          "range": "-",
          "startingLevel": "-"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 없음",
            "*왼손 - 없음"
          ],
          "recommended": []
        },
        "maxLevelStatus": {
          "hp": "740",
          "lvl 1": "5",
          "lvl 2": "2",
          "lvl 3": "1",
          "lvl 4": "0",
          "atk": "561",
          "def": "475",
          "str": "561",
          "pdf": "475",
          "skl": "170",
          "mdf": "141",
          "mag": "74",
          "spd": "154",
          "luc": "133"
        },
        "equipment": {
          "default": {
            "equipment": "N/A"
          },
          "recommended": {}
        },
        "uniteAttacks": [
          "장난 공격에 참여할 수 있습니다. 멕이 윤활유를 장비하면 협력 공격이 강화될 수 있습니다."
        ]
      }
    },
    "wakaba": {
      "role": {
        "recruitment": [
          "투 리버 사건 이후 숲의 마을에서 와카바에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "와카바는 공격력과 속도, 기술, 운이 고르게 높은 전열 전투원입니다. 방어 계열 능력은 다소 낮지만 HP가 높아 전열에서 버티는 역할을 맡기 좋습니다."
        ],
        "weapon": {
          "type": "발차기",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 백호의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Veggie Sandwich (x5)",
            "other2": "Belt of Strength",
            "other3": "Skill Ring"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "쌍투사 공격에 참여할 수 있습니다."
        ]
      }
    },
    "tony": {
      "role": {
        "recruitment": [
          "투 리버와 동맹을 맺은 뒤 숲의 마을에서 토니에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "토니는 본거지에 농장을 열고, 요리에 쓰이는 작물을 재배합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "viki": {
      "role": {
        "recruitment": [
          "마틸다로 가는 길에서 빅키를 만나 말을 걸면 합류합니다."
        ],
        "overall": [
          "빅키는 강력한 마법 문장 사용자이지만, 주문 사용 시 역효과가 발생할 수 있어 운이 필요한 인물입니다. 높은 마법 능력 때문에 역효과가 터지면 아군 피해도 커질 수 있습니다. 눈깜박임의 문장이 고정되어 있어 다른 마법형 동료보다 문장 세팅 폭은 좁습니다."
        ],
        "weapon": {
          "type": "지팡이",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "눈깜박임의 문장이 고정 장착되어 있습니다."
          ],
          "recommended": [
            "마력이 높아 공격 마법 문장 전반과 잘 맞으며, 머리 슬롯에는 푸른 문장의 문장도 선택할 수 있습니다.",
            "문장 적성은 대부분 E로, 피해량이 커지는 대신 역효과 위험도 함께 존재합니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Magic Robe",
            "shield": "-",
            "other1": "Tempura (x5)",
            "other2": "Magic Ring",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "머리 들기!!는 어비스보어나 루로디아를 적 하나에게 순간이동시켜 2배 피해를 주고, 사용 후 문어가 언밸런스 상태가 됩니다."
        ]
      }
    },
    "futch": {
      "role": {
        "recruitment": [
          "가도 마을 여관에서 험프리에게 말을 걸고 하룻밤 묵은 뒤, 여관 밖 이벤트에서 라쿠테이 산 의뢰를 돕겠다고 하면 합류합니다.",
          "마틸다 우회 동선을 이용하면 더 이른 시점에도 진행할 수 있습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "창",
          "range": "M",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "-"
          ],
          "recommended": [
            "유니콘의 문장, 바람의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "754",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "145",
          "def": "130",
          "str": "285",
          "pdf": "227",
          "skl": "161",
          "mdf": "130",
          "mag": "138",
          "spd": "190",
          "eva": "0",
          "luc": "185"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Leather Armor",
            "shield": "Steel Shield",
            "other1": "Medicine (x6)",
            "other2": "Gauntlet",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "미소년 공격에 참여할 수 있습니다."
        ]
      }
    },
    "miklotov": {
      "role": {
        "recruitment": [
          "록엑스 임무를 마친 뒤 자동으로 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 기사단의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "불의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "823",
          "lvl 1": "8",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "212",
          "def": "182",
          "str": "372",
          "pdf": "259",
          "skl": "155",
          "mdf": "140",
          "mag": "123",
          "spd": "152",
          "luc": "152"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Half Plate",
            "shield": "-",
            "other1": "Fire Emblem",
            "other2": "Mega Medicine (x3)",
            "other3": "Gauntlet"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "기사 공격과 미소년 공격에 참여할 수 있습니다."
        ]
      }
    },
    "camus": {
      "role": {
        "recruitment": [
          "록엑스 임무를 마친 뒤 마이크로토프와 함께 자동으로 합류합니다."
        ],
        "overall": [
          "카뮤는 속도가 조금 부족한 점을 제외하면 균형 잡힌 인물입니다. 능력치는 물리 공격수에 가깝지만, 오른손에 열화의 문장이 고정되어 있어 2회공격의 문장과 분노의 문장 조합을 그대로 쓰기는 어렵습니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*머리 - 없음",
            "*오른손 - 열화의 문장 (고정 장착)",
            "*왼손 - 없음 (47레벨에 개방)",
            "*무기 - 장착 문장 없음"
          ],
          "recommended": [
            "카뮤는 열화의 문장을 고정 장착하고 있지만, 의외로 바람 계열 적성이 좋아 바람의 문장이나 선풍의 문장도 선택지입니다. 물리 화력을 살리고 싶다면 2회공격의 문장이나 분노의 문장을 활용할 수 있습니다."
          ]
        },
        "maxLevelStatus": {
          "hp": "752",
          "lvl 1": "9",
          "lvl 2": "9",
          "lvl 3": "7",
          "lvl 4": "5",
          "atk": "169",
          "def": "167",
          "str": "319",
          "pdf": "284",
          "skl": "166",
          "mdf": "145",
          "mag": "171",
          "spd": "155",
          "luc": "141"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Chain Mail",
            "shield": "Kite Shield",
            "other1": "Crimson Cape",
            "other2": "Mega Medicine (x3)",
            "other3": "Gauntlet"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "기사 공격과 미소년 공격에 참여할 수 있습니다."
        ]
      }
    },
    "klaus-windamier": {
      "role": {
        "recruitment": [
          "키바 부대를 격파한 뒤 아버지 키바와 함께 자동으로 합류합니다."
        ],
        "overall": [
          "하이랜드군 시절에는 키바와 함께 높은 방어력을 지닌 부대로 등장합니다. 합류 후에는 제스나 보리스 와이젠처럼 회피 계열 전술을 사용할 수 있고, 기병 전술도 부대 편성에 보탤 수 있습니다.",
          "회피 전술 사용 시 리마스터판에서는 “침착하게, 적의 공격을 흘려라.”라는 취지의 대사를 말합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "kasumi": {
      "role": {
        "recruitment": [
          "트란공화국과 동맹을 맺을 때 그레그민스터에서 발레리아와 함께 제시되는 선택지 중 한 명입니다."
        ],
        "overall": [
          "카스미는 전반적으로 준수한 능력치와 높은 속도를 지닌 전열 공격수입니다. 협력 공격도 좋아 활용도가 높지만, 전열 인물치고 방어가 낮아 물리 공격에 취약합니다. 회복을 꾸준히 보조하면 빠른 타격 요원으로 활약합니다."
        ],
        "weapon": {
          "type": "손톱",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*머리 - 슬롯 없음",
            "*오른손 - 때까치의 문장",
            "*왼손 - 없음"
          ],
          "recommended": [
            "스파크의 문장"
          ]
        },
        "maxLevelStatus": {
          "hp": "761",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "155",
          "def": "160",
          "str": "300",
          "pdf": "215",
          "skl": "195",
          "mdf": "151",
          "mag": "142",
          "spd": "225",
          "luc": "178"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Ninja Suit",
            "shield": "-",
            "other1": "Bolt of Wrath (x2)",
            "other2": "Speed Ring",
            "other3": "Winged Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "닌자 공격과 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "sheena": {
      "role": {
        "recruitment": [
          "트란공화국과의 협정에 따라 레판토 대통령이 시나를 보내며 자동으로 합류합니다."
        ],
        "overall": [
          "시나는 검술과 문장 운용을 모두 무난히 해내는 균형형 인물입니다. 물리와 마법 모두 가능한 만능형에 가깝고, 세 개의 문장 슬롯과 무기 문장 슬롯을 활용할 수 있어 세팅 자유도가 매우 높습니다. 분노의 문장, 2회공격의 문장, 2회공격 계열 보조 문장을 조합하면 강력한 공격수로 만들 수 있습니다."
        ],
        "weapon": {
          "type": "검",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "레벨이 오르면 문장 슬롯 3개를 활용할 수 있어 운용 폭이 넓어집니다. 2회공격의 문장, 2회공격 계열 보조 문장, 분노의 문장에 무기 고정형 분발의 문장을 더하면 높은 물리 화력을 기대할 수 있습니다."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Silver Hat",
            "armor": "Magic Robe",
            "shield": "Steel Shield",
            "other1": "Star Earrings",
            "other2": "Green Salad (x5)",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "gordon": {
      "role": {
        "recruitment": [
          "At Castle Level 3, speak to Gordon in Gregminster to accept his quest and make a total of 50,000 potch from trading. Speaking to him again will allow you to recruit him."
        ],
        "overall": [],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "lorelai": {
      "role": {
        "recruitment": [
          "Lorelai appears in Suikoden II as one of the 108 Stars of Destiny. She can be recruited in Greminster by speaking to her. The easiest way to is by having Killey in your party."
        ],
        "overall": [
          "Lorelai is a balanced physical attacker and magic user, and with her spear can operate from the front or rear rows."
        ],
        "weapon": {
          "type": "Scythe",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Lorelai comes with a Drain Rune attached to her right hand."
          ],
          "recommended": [
            "A Killer Rune is useful if you want to take advantage of her Drain Rune. She's a competent mage or fighter so she is rather flexible with most runes."
          ]
        },
        "maxLevelStatus": {
          "hp": "741",
          "lvl 1": "9",
          "lvl 2": "6",
          "lvl 3": "3",
          "lvl 4": "2",
          "atk": "150",
          "def": "150",
          "str": "325",
          "pdf": "220",
          "skl": "185",
          "mdf": "190",
          "mag": "161",
          "spd": "152",
          "luc": "165"
        },
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Chain Mail",
            "shield": "-",
            "other1": "Thunder Amulet",
            "other2": "Mega Medicine (x4)",
            "other3": "Fur Cape"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "리나, 카렌, 카스미 중 함께 편성된 인물과 미인 공격을 사용할 수 있습니다. 적 전체에게 피해를 주고 일정 확률로 수면 상태를 부여합니다.",
          "리나, 카렌, 카스미와 함께 진 미인 공격에도 참여합니다."
        ]
      }
    },
    "sasuke": {
      "role": {
        "recruitment": [
          "그레그민스터 방면 숲길 네 번째 화면에 숨겨진 롯카쿠에 들어가면 한조의 명령으로 몬도와 함께 합류합니다. 카스미를 선택했다면 파티에 카스미가 있어야 하며, 발레리아를 선택했다면 108성 100명 이상을 모은 상태여야 합니다."
        ],
        "overall": [
          "사스케는 후열 배치에 적합한 장거리 전투형 인물입니다. 기술과 속도가 높고 장거리 캐릭터치고 체력도 나쁘지 않아, 마법 운용보다는 분노의 문장이나 스파크의 문장처럼 전투 보조 문장으로 공격 성능을 끌어올리는 편이 좋습니다."
        ],
        "weapon": {
          "type": "Shurikens",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Killer Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Spark Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Ninja Suit",
            "shield": "-",
            "other1": "Dancing Flames Scroll (x2)",
            "other2": "Sun Badge",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "사스케는 미남 공격에 참여할 수 있습니다."
        ]
      }
    },
    "mondo": {
      "role": {
        "recruitment": [
          "You must either have Kasumi recruited, or have Valeria recruited and recruited 100 stars of Destiny or more. In either case, you must find the secret village of Rokkaku on the path to Gregminster. When you enter the village, Sasuke will catch you and immediately bring you to Hanzo. He will then order Sasuke and Mondo to your disposal."
        ],
        "overall": [],
        "weapon": {
          "type": "Claws",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - Mayfly Rune",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Balance Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Ninja Suit",
            "shield": "-",
            "other1": "The Shredding (x2)",
            "other2": "Belt of Strength",
            "other3": "Sacrificial Jizo"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "몬도는 닌자 공격에 참여할 수 있습니다."
        ]
      }
    },
    "templeton": {
      "role": {
        "recruitment": [
          "Templeton can be found first at Viktor's ruined fort, then followed to Toto. Speaking to him there can get him to join."
        ],
        "overall": [
          "Templeton once again entrusts the Suiko Map to Riou, allowing the player to see a minimap on the screen. You can also talk to Templeton to get a short description of the locations in the game."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "badeaux": {
      "role": {
        "recruitment": [
          "성 레벨 3 이후 시로 또는 무쿠무쿠를 파티에 넣고 마틸다 기사단 방면 숲길의 바드에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "바드는 평균적인 능력치를 가진 전투형 인물입니다. 마법 적성은 낮은 편이라 물리 기술과 상태 보조 문장에 더 잘 맞고, 짐승 계열 동료와 함께 편성할 때 협력 공격과 특수 운용 가치가 커집니다."
        ],
        "weapon": {
          "type": "Whip",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Howling Rune (Permanently attached)",
            "*L. Hand - None (Available upon recruitment)",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "If the player wishes to use Badeaux's for his niche natural synergy with beast party members they should equip him with the Howling Rune. Other than that he could use a Counter Rune for extra damage and survivability. If the player wishes to use Badeaux without beast party members they could equip with any combination of the following Double-Strike Rune, Double-Beat Rune or Fury Rune."
          ]
        },
        "maxLevelStatus": {
          "hp": "801",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "162",
          "def": "152",
          "str": "327",
          "pdf": "223",
          "skl": "151",
          "mdf": "152",
          "mag": "127",
          "spd": "142",
          "luc": "125"
        },
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "Canopy Defense (x3)",
            "other2": "Leather Cape",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "바드는 비스트마스터 공격에 참여할 수 있습니다."
        ]
      }
    },
    "ayda": {
      "role": {
        "recruitment": [
          "아이다 영입은 두 가지 흐름으로 갈립니다.",
          "숲의 마을에서 페더 관련 전투에 승리하고 페더를 받아들이면 함께 합류합니다. 둘을 모두 얻으려면 들음의 결정 중 하나를 사용해야 합니다.",
          "그리핀 전투에서 패배하면 페더 없이 아이다만 합류시킬 수도 있습니다. 이 이벤트는 아비즈보아나 지그프리드를 영입하기 전에 진행해야 합니다."
        ],
        "overall": [
          "아이다는 내구가 낮은 편이지만 공격력이 높고, 물의 문장이나 흙의 문장을 활용해 파티 지원 역할도 맡을 수 있습니다."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Great Hawk Rune",
            "*L. Hand - None (Acquired at level 42)",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Ayda can provide great support when equipped with the Flowing Rune and/or Mother Earth Rune. Equipping the Spark Rune is also viable as she is quite fast. She could also use the Great Hawk Rune or Double-Beat Rune along side with the Fury Rune if you want her to be a physical damage threat."
          ]
        },
        "maxLevelStatus": {
          "hp": "747",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "148",
          "def": "148",
          "str": "295",
          "pdf": "248",
          "skl": "171",
          "mdf": "145",
          "mag": "131",
          "spd": "209",
          "luc": "189"
        },
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Fur Cape",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "아이다는 킨니슨과 함께 활 공격에 참여할 수 있습니다."
        ]
      }
    },
    "connell": {
      "role": {
        "recruitment": [
          "After the Dunan Castle reaches Level 3, show Connell any of the Sound Sets in Forest Village."
        ],
        "overall": [
          "Connell can change your sound effects of your actions. The Sound Sets are needed to change the sound effect."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "karen": {
      "role": {
        "recruitment": [
          "Find her in the Inn in Kuskus after defeating Luca Blight. Dance successfully with her and she'll join you."
        ],
        "overall": [],
        "weapon": {
          "type": "Claws",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Twin Ring Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Blue Gate Rune, and Resurrection Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "777",
          "lvl 1": "9",
          "lvl 2": "6",
          "lvl 3": "3",
          "lvl 4": "2",
          "atk": "156",
          "def": "129",
          "str": "321",
          "pdf": "241",
          "skl": "146",
          "mdf": "151",
          "mag": "168",
          "spd": "173",
          "luc": "177"
        },
        "equipment": {
          "default": {
            "helmet": "Feathered Hat",
            "armor": "Master Robe",
            "shield": "-",
            "other1": "Wind of Sleep Scroll (x4)",
            "other2": "Blue Ribbon",
            "other3": "Toe Shoes"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "카렌은 미녀 공격에 참여할 수 있습니다."
        ]
      }
    },
    "maximillian": {
      "role": {
        "recruitment": [
          "Enter South Window any time after beating Luca Blight and choose the first option to have Max join you.",
          "Note: Do not choose the second option, \"Don't waste your breath, old man.\", upon being given the two options. If you do, Max will run off for good and you will not be able to recruit him again."
        ],
        "overall": [
          "Maximillian is an Infantry Unit with 6 ATK and 7 DEF."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "raura": {
      "role": {
        "recruitment": [
          "진을 영입한 뒤 틴토에서 말을 걸어 진이 본거지에 있다는 사실을 알려주면 합류합니다."
        ],
        "overall": [
          "라우라는 본거지에서 주문서 상점을 열고 관리합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "kahn-marley": {
      "role": {
        "recruitment": [
          "틴토에서 네크로드를 쓰러뜨린 뒤 자동으로 합류합니다."
        ],
        "overall": [
          "칸은 검과 창을 함께 다루는 전투형 인물입니다. 평소에는 검으로 공격하지만 창을 이용해 치명타를 노릴 수 있으며, 부활의 문장은 좀비, 본 드래곤, 네크로드 같은 언데드 계열 적을 상대할 때 특히 강력합니다."
        ],
        "weapon": {
          "type": "Sword (Special)",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Resurrection Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Blue Gate Rune, Darkness Rune, and Resurrection Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "820",
          "lvl 1": "9",
          "lvl 2": "6",
          "lvl 3": "3",
          "lvl 4": "2",
          "atk": "179",
          "def": "153",
          "str": "344",
          "pdf": "256",
          "skl": "180",
          "mdf": "171",
          "mag": "169",
          "spd": "150",
          "luc": "129"
        },
        "equipment": {
          "default": {
            "helmet": "Leather Hat",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "Cape of Darkness",
            "other2": "Fire Wall (x3)",
            "other3": "Kindness Drops (x3)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    },
    "tenkou": {
      "role": {
        "recruitment": [
          "Once in Crom, show Tenkou any Window Sets you have and he will join you."
        ],
        "overall": [
          "Tenkou is the Window Maker and can change your windows."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "long-chan-chan": {
      "role": {
        "recruitment": [
          "와카바를 파티에 넣고 크롬 마을 여관으로 가면 이벤트가 발생합니다. 이후 도구점 뒤쪽의 롱 찬찬에게 말을 걸면 합류합니다.",
          "특수한 진행으로 크롬 방문 전에도 영입할 수 있지만, 일반 흐름에서는 와카바와 함께 크롬 마을 이벤트를 진행하는 것이 기준입니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Fists",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - White Tiger Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fury Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Steamed Gyoza (x5)",
            "other2": "Belt of Strength",
            "other3": "Power Ring"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "롱 찬찬은 섬광 공격과 쌍격투가 공격에 참여할 수 있습니다."
        ]
      }
    },
    "gijimu": {
      "role": {
        "recruitment": [
          "Gijimu is recruited automatically after defeating Neclord in Tinto."
        ],
        "overall": [
          "Gijimu is just like any solid physical attacker. He is armed with sharp axes and can wear the heavy class armor, which includes some of the heaviest and best armor available, like the Windspun Armor. He also has the additional benefit of survivability of being able to attack from the back row, although he is already a perfectly capable frontline tank in his own right. He already comes with the powerful Double Beat Rune, making him pretty much set for the rest of the game."
        ],
        "weapon": {
          "type": "Double Axes",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Double Beat Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Gijimu already comes equipped with one of the best physical attack passive runes in the game in form of the Double Beat Rune. That makes swapping that with another alternative with even a Fury Rune almost totally unnecessary. As a physical attacker with a one-rune limitation, having a rune attached to his weapon that will also benefit physical attack like the Exertion Rune or Friendship Rune helps."
          ]
        },
        "maxLevelStatus": {
          "hp": "878",
          "lvl 1": "7",
          "lvl 2": "4",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "253",
          "def": "172",
          "str": "428",
          "pdf": "280",
          "skl": "159",
          "mdf": "130",
          "mag": "105",
          "spd": "144",
          "luc": "142"
        },
        "equipment": {
          "default": {
            "helmet": "Full Helmet",
            "armor": "Dragon Armor",
            "shield": "-",
            "other1": "Broiled Eel (x5)",
            "other2": "Fur Cape",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "기지무는 산적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "lo-wen": {
      "role": {
        "recruitment": [
          "Lo Wen joins automatically after completely destroying Neclord in Tinto."
        ],
        "overall": [],
        "weapon": {
          "type": "Darts",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Killer Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Half Helmet",
            "armor": "Dragon Armor",
            "shield": "-",
            "other1": "Crab Cakes (x6)",
            "other2": "Belt of Strength",
            "other3": "Boots"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "로웬은 산적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "koyu": {
      "role": {
        "recruitment": [
          "Koyu joins automatically after completely destroying Neclord in Tinto."
        ],
        "overall": [],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Gale Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Goss Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Dragon Armor",
            "shield": "-",
            "other1": "Medicine (x6)",
            "other2": "Belt of Strength",
            "other3": "Fish Badge"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "코우유는 산적 공격에 참여할 수 있습니다."
        ]
      }
    },
    "marlowe": {
      "role": {
        "recruitment": [
          "Marlowe joins automatically after the events in Tinto."
        ],
        "overall": [
          "말로우의 구체적인 기능 기록은 아직 정리 중입니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "lebrante": {
      "role": {
        "recruitment": [
          "성 레벨 3 이후 청자 항아리를 소지한 상태로 라다트의 레브란테에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "레브란테는 본거지에서 감정소를 열고 감정품 확인을 담당합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "simone-verdricci": {
      "role": {
        "recruitment": [
          "Purchase a Rose Brooch from the Rare Finds section of the item shop in Banner Village. Show it to Simone near the docks in Radat and ask him to join your group.",
          "Note 1: Since Rare Finds refresh every 30 minutes and the items available are checked when selecting the option, it is recommended to save at Banner Village inn and check the rare Finds. If Rose Brooch isn't there, quit and reload.",
          "Note 2: If you choose \"Run around and bark like a dog.\" or \"I want gold\", he will do it but you will never be able to recruit him anymore."
        ],
        "overall": [],
        "weapon": {
          "type": "Throwing Roses",
          "range": "L",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Beat Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Chain Mail",
            "shield": "-",
            "other1": "Cape of Darkness",
            "other2": "Gold Emblem",
            "other3": "Mega Medicine (x6)"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "시몬은 나르시스 공격에 참여할 수 있습니다."
        ]
      }
    },
    "hoi": {
      "role": {
        "recruitment": [
          "Find Hoi in the bar in Radat after defeating Luca Blight."
        ],
        "overall": [],
        "weapon": {
          "type": "Twin Fang",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Beat Rune and Drain Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Leather Armor",
            "shield": "-",
            "other1": "Sacrificial Jizo",
            "other2": "Sacrificial Jizo",
            "other3": "Sacrificial Jizo"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "호이는 흉내쟁이 공격에 참여할 수 있습니다."
        ]
      }
    },
    "gantetsu": {
      "role": {
        "recruitment": [
          "After defeating Neclord in Tinto, speak to Gantetsu in South Window with a full party."
        ],
        "overall": [],
        "weapon": {
          "type": "Staff",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Resurrection Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Beat Rune, Double Strike Rune, Fury Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "755",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "3",
          "lvl 4": "1",
          "atk": "145",
          "def": "165",
          "str": "245",
          "pdf": "255",
          "skl": "128",
          "mdf": "170",
          "mag": "147",
          "spd": "147",
          "luc": "142"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Karate Uniform",
            "shield": "-",
            "other1": "Healing Wind (x3)",
            "other2": "Belt of Strength",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "간테츠는 섬광 공격에 참여할 수 있습니다."
        ]
      }
    },
    "annallee": {
      "role": {
        "recruitment": [
          "Find Annallee in the Inn in South Window (only when your castle is at level 3) after the scene the first scene Sasarai appears in, or you can recruit her after defeating Luca Blight."
        ],
        "overall": [
          "Annallee plays music in the HQ along with Alberto and Pico."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "bob": {
      "role": {
        "recruitment": [
          "성 레벨 3 이후 108성 80명 이상을 모은 상태로 투 리버 코볼트 구역의 밥에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "밥은 균형 잡힌 능력치를 가진 전투형 인물입니다. 마법도 어느 정도 다룰 수 있지만, 늑대인간 변신을 활용한 물리 공격에서 강점이 큽니다."
        ],
        "weapon": {
          "type": "Rod",
          "range": "M",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Rabid Fang Rune (Permanently attached)",
            "*L. Hand - None (Acquired at level 42)",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "In terms of damage Bob's Rabid Fang Rune works best when paired with a Double-Beat Rune or the Violence Rune. However the Fury Rune and Double-Strike Rune are good alternatives. To further take advantage of it, it is recommend to embedded a bonus physical damage rune like Friendship or Exertion. This will make Bob potentially an extremely powerful physical nuke. In terms of magic damage Bob would work best with a Darkness Rune."
          ]
        },
        "maxLevelStatus": {
          "hp": "882",
          "lvl 1": "9",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "146",
          "def": "165",
          "str": "311",
          "pdf": "265",
          "skl": "153",
          "mdf": "183",
          "mag": "135",
          "spd": "185",
          "luc": "120"
        },
        "equipment": {
          "default": {
            "helmet": "-",
            "armor": "Guard Robe",
            "shield": "-",
            "other1": "Grilled Beef (x2)",
            "other2": "Shoulder Pads",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "밥은 하인 공격에 참여할 수 있습니다."
        ]
      }
    },
    "jude": {
      "role": {
        "recruitment": [
          "그린힐 해방 뒤 그린힐 학원의 주드에게 말을 걸어 점토가 필요하다는 이야기를 듣습니다. 숲의 마을 숲길을 걷는 남자에게 점토를 받은 뒤 주드에게 돌아가면 합류합니다."
        ],
        "overall": [
          "주드는 본거지의 수호신상을 제작하는 시설 담당 동료입니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "pico": {
      "role": {
        "recruitment": [
          "After the liberation of Greenhill, speak to him in the Greenhill Inn. You must have recruited Annallee."
        ],
        "overall": [
          "Pico plays music in the HQ along with Alberto and Annallee."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "alberto": {
      "role": {
        "recruitment": [
          "After you have recruited both Annallee and Pico, you can find Alberto in the armorer in Tinto. Tell him where they can be found and he'll join you."
        ],
        "overall": [
          "Alberto plays music in the HQ along with Annallee and Pico."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "tessai": {
      "role": {
        "recruitment": [
          "그린힐 해방 후 108성 101명 이상을 모은 상태에서 빅토르를 파티에 넣고 쿠스쿠스의 텟사이에게 말을 걸면 합류합니다."
        ],
        "overall": [
          "텟사이는 본거지에서 대장간을 담당합니다."
        ],
        "weapon": {
          "type": "",
          "range": "",
          "startingLevel": ""
        },
        "rune": {
          "attached": [],
          "recommended": []
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {},
          "recommended": {}
        },
        "uniteAttacks": []
      }
    },
    "genshu": {
      "role": {
        "recruitment": [
          "108성 101명 이상을 모은 뒤, 누군가의 무기를 레벨 14 이상으로 강화한 상태에서 코로네 부두의 겐슈에게 말을 걸면 합류합니다.",
          "은망치가 없어 강화가 어렵다면, 기본 무기 레벨이 높은 페슈메르가를 파티에 넣어 조건을 맞출 수 있습니다. 겐슈는 108성 완성을 위한 후반 영입 인물입니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Katana",
          "range": "S",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Swallow Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Swallow Rune"
          ]
        },
        "maxLevelStatus": {
          "hp": "743",
          "lvl 1": "8",
          "lvl 2": "5",
          "lvl 3": "2",
          "lvl 4": "1",
          "atk": "180",
          "def": "143",
          "str": "340",
          "pdf": "250",
          "skl": "169",
          "mdf": "125",
          "mag": "128",
          "spd": "176",
          "luc": "167"
        },
        "equipment": {
          "default": {
            "helmet": "Head Gear",
            "armor": "Thunder God's Garb",
            "shield": "-",
            "other1": "Steamed Abalone (x4)",
            "other2": "Shoulder Pads",
            "other3": "-"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "겐슈는 신과 함께 검객 공격에 참여할 수 있습니다."
        ]
      }
    },
    "vincent": {
      "role": {
        "recruitment": [
          "그린힐 해방 후 시몬을 파티에 넣고 라다트의 뱅상에게 말을 걸면 합류합니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "10"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "Hazy Rune"
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Feathered Hat",
            "armor": "Scale Mail",
            "shield": "Mangosh",
            "other1": "Rose Brooch",
            "other2": "Potato Pudding (x6)",
            "other3": "Blue Ribbon"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "뱅상은 나르시스 공격에 참여할 수 있습니다."
        ]
      }
    },
    "mazus": {
      "role": {
        "recruitment": [
          "그린힐 해방 뒤 108성 100명 이상을 모은 상태로 틴토 광산의 마자스에게 말을 걸면 합류합니다.",
          "마자스는 특정 진행 상황에서 합류 시 레벨이 매우 높게 잡힐 수 있는 인물로 알려져 있습니다."
        ],
        "overall": [],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - Blue Gate Rune",
            "*R. Hand - Thunder Rune",
            "*L. Hand - Fire Rune"
          ],
          "recommended": [
            "Blue Gate Rune, Thunder Rune, and Resurrection Rune."
          ]
        },
        "maxLevelStatus": {},
        "equipment": {
          "default": {
            "helmet": "Circlet",
            "armor": "Robe of Mist",
            "shield": "-",
            "other1": "Mega Medicine (x3)",
            "other2": "Guard Ring",
            "other3": "Magic Ring"
          },
          "recommended": {
            "helmet": "-",
            "armor": "-",
            "shield": "-",
            "other1": "-",
            "other2": "-",
            "other3": "-"
          }
        },
        "uniteAttacks": [
          "-"
        ]
      }
    }
  }
} as const satisfies Record<string, Record<string, CharacterDetailRecord>>;
