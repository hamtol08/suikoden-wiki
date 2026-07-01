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
          "Because of his status as the Hero of Suikoden, Tir is technically the first character to \"join\" your party at the very beginning of the game. Tir cannot be removed from the party."
        ],
        "overall": [
          "As Tir is a required member of the party at all times, it helps that he's a well balanced character, with above average stats. His attack rating raises well and he gains a moderate magician's power in rune spells. His Unite Attack with Kai is very good against dealing with large forces, and his Soul Eater Rune is excellent due to it's powerful instant death magic and incredible offensive spells."
        ],
        "weapon": {
          "type": "Bo Staff",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "Soul Eater*",
            "''*Become a Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "After some events, Tir has the Soul Eater permanently attached."
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
          "Tir has a Master Pupil Attack with his master, Kai."
        ]
      }
    },
    "lepant": {
      "role": {
        "recruitment": [
          "Lepant joins Tir automatically after saving Eileen."
        ],
        "overall": [
          "Lepant is a strong front line fighter."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "Lepant is a good character to attach a Counter Rune or Killer Rune too."
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
          "Lepant can participate in both the Couple Attack and the Family Attack."
        ]
      }
    },
    "mathiu": {
      "role": {
        "recruitment": [
          "Mathiu joins automatically after Tir agrees to become leader of the Liberation Army."
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
          "Luc joins Tir automatically at Toran Castle."
        ],
        "overall": [
          "Luc is a strong mage, but his weapon makes him a liability, as in the front row he can't take much damage due to his low HP, but in the back row he can't attack, either. This makes him reliant on his magic to do anything. He has a Guard Robe and Speed Ring permanently equipped, which limits his defensive options. Despite these shortcomings, Luc is one of the best mages in the game, only beaten out by Crowley."
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
            "Upgrade Luc to a Cyclone Rune or Thunder Rune to take better advantage of his magic power."
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
          "Luc has no Unite Attacks."
        ]
      }
    },
    "humphrey": {
      "role": {
        "recruitment": [
          "Humphrey joins automatically after the original remaining members from the Liberation Army meet up at the new headquarters."
        ],
        "overall": [
          "Humphrey is a strong front line fighter and tank. He has high strength and excellent defense, but low speed and accuracy, so equipment that improves his speed or attack reliability helps him stay useful."
        ],
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
          "Humphrey can participate in the Bumpy Attack with Krin."
        ]
      }
    },
    "kasim-hazil": {
      "role": {
        "recruitment": [
          "Joins automatically after the events at Moravia Castle."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Sword",
          "Weapon Range: S",
          "Weapon Starting Level: 13"
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
            "Gale Rune since it lack a bit in Speed."
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
          "Kasim has no Unite Attacks."
        ]
      }
    },
    "kwanda-rosman": {
      "role": {
        "recruitment": [
          "After defeating Kwanda in a duel in Pannu Yakuta, choose the following choices:",
          "* \"Something's wrong.\"",
          "* \"I want you to join us.\""
        ],
        "overall": [
          "Kwanda is easily the best tank in game if he's up to level because of his DEF growth and all kinds of heavy armors and shields that are available for him."
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
            "Sunbeam Rune or Holy Rune."
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
          "Kwanda has no Unite Attacks."
        ]
      }
    },
    "pesmerga": {
      "role": {
        "recruitment": [
          "In order to recruit Pesmerga, speak with him on the top floor of Neclord's Castle.",
          "Note: The castle must be Lv. 4 in order to recruit Pesmerga."
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
            "Pesmerga is able to use the Clone Rune. A Killer Rune also works well."
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
          "Joins automatically before receiving the first mission from Kraze, but leaves after the events in Soniere. However, he rejoins just before the final battle if all 107 other stars are recruited."
        ],
        "overall": [
          "Gremio is a required party member during the early parts of the game. He is an average character in stat growth, but his medium range weapon makes him a good back or front row character. His weapon also gains some significant power at the highest level, which helps to offset his average strength. The best with offense he could do is to the Talisman Attack with Pahn, which benefits both of them with double damage and no unbalance at all. He will also protect Tir in combat if Tir is at critical HP.",
          "Ironically, after level 60, his STR changes growth type to be really impressive. So, if the player employs the leveling trick to quickly get him to Level 96+, he would become a good fighter like any other prominent warriors."
        ],
        "weapon": {
          "type": "Axe",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "Gremio is statistically average in many areas. While he can use magic runes, his MP pool will be low for most of the game, so it may be best to give him support runes like the Prosperity Rune or the Holy Rune. Eventually the Killer Rune could be an alternate choice for him."
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
          "Gremio can participate in the Talisman Attack/Guardian Attack with Pahn."
        ]
      }
    },
    "warren": {
      "role": {
        "recruitment": [
          "Joins automatically after the events at Moravia Castle."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Spear",
          "Weapon Range: M",
          "Weapon Starting Level: 12"
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
            "Physical runes are suited for him."
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
          "Warren has no Unite Attacks."
        ]
      }
    },
    "kun-to": {
      "role": {
        "recruitment": [
          "Joins automatically after lending boats to carry the Fire Spears."
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
          "She joins Tir automatically in Gregminster."
        ],
        "overall": [
          "Cleo is a required member of the main battle party during the early part of the game. Her long range weapon, medium armor, and rune spell abilities make her a good back row character. She will also protect Tir in combat if Tir is at critical HP."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "Cleo has a good magic rune growth, making her ideal for magic runes. As Leknaat gives her a Fire Rune to protect Tir, it is a viable choice for the early portions of the game. However, as many options become more available, it's advisable to make good use of her high MP with the other elements or eventually update her Fire Rune to Rage Rune. She makes an excellent and fast healer with the Flowing Rune in the later stages of the story, when monsters and bosses frequently use special attacks that target the entire team."
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
          "Cleo can unite with Eileen and either Valeria or Sonya to perform the Beauty Attack."
        ]
      }
    },
    "viktor": {
      "role": {
        "recruitment": [
          "Viktor joins Tir automatically after leaving Gregminster."
        ],
        "overall": [
          "Viktor will be a required member in the party often in the main storyline. Fortunately he's one of the most powerful physical attackers in the game with strong physical stats to back it up. He also has decent enough defensive attributes and HP as he levels up."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "Viktor can equip the Clone Rune found on Mt. Tigerwolf. This is the only place the rune is available, and any character who wields a heavy sword can use it, but with the frequency that Viktor is in the battle party and how early on it is available, it tends to be a good idea to put it on Viktor and leave it there. The Killer Rune is also a nice alternative in the later stages, due to Viktor's critical hits being capable of outdamaging the Clone Rune ability when his levels get high enough. It is also suggested to embed a Fire Rune Piece or Lightning Rune Piece to his sword. Just like any other non-magic character, Viktor benefits most from equipping him with a Fury Rune and Double Beat Rune, turning him into a powerhouse."
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
          "Viktor has no Unite Attacks."
        ]
      }
    },
    "valeria": {
      "role": {
        "recruitment": [
          "Valeria joins automatically after the events in Pannu Yakuta."
        ],
        "overall": [
          "Valeria is a strong front line fighter, with her Falcon Rune being good for consistent damage."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Falcon Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Valeria has a Falcon Rune permanently attached."
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
          "Valeria can participate in the Beauty Attack."
        ]
      }
    },
    "griffith": {
      "role": {
        "recruitment": [
          "Griffith is recruited automatically after defeating him at the Northern Checkpoint, regardless of the player's choice."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Sword",
          "Weapon Range: S",
          "Weapon Starting Level: 8"
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "None."
          ],
          "recommended": [
            "Counter Rune."
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
          "Griffith has no Unite Attacks."
        ]
      }
    },
    "clive": {
      "role": {
        "recruitment": [
          "He joins when spoken to when he appears at the Inn in Rikon. He appears there at random starting after events in Lorimar."
        ],
        "overall": [
          "Clive is a strong rear line fighter, his gun Storm can do as much damage as some of the front line S type fighters, and his speed stat is exceptional. He is physical and magic defense are not great, so keep him in the back row. With a careful set-up, Clive can be a very versatile main fighter/support unit in combat."
        ],
        "weapon": {
          "type": "Gun",
          "range": "L",
          "startingLevel": "13"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "Rear line physical runes are helpful. Due to his high speed stat and good backrow combat skills, Clive makes good use of the Spark Rune. A Killer Rune is also handy. Though magic isn't his forte, he can be competent as a back-up support spell caster with a Earth Rune or Water Rune."
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
          "Clive has no unite attacks."
        ]
      }
    },
    "flik": {
      "role": {
        "recruitment": [
          "He joins automatically in Kaku when Viktor and Tir speak to him after the events in Pannu Yakuta occur."
        ],
        "overall": [
          "Flik is a regularly-required party member. He has good physical abilities and is fair with his Lightning Rune. Upon upgraded to Thunder Rune, Flik is powerful lightning wielder, that can deal heavy damage."
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
            "Flik comes with a Lightning Rune attached, but which can be removed. Upgrading to the Thunder Rune is recommended. Once he is at a higher character level, his sword attack becomes more useful than his magic, and equipping him with either a Fury Rune or a Double Beat Rune can turn him into an extremely powerful front line character."
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
          "Flik can participate in the Pretty Boy Attack with Alen and Grenseal."
        ]
      }
    },
    "camille": {
      "role": {
        "recruitment": [
          "Camille joins automatically after talking to her in Kaku."
        ],
        "overall": [
          "Camille is a decent M weapon character who also has good magic growth."
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
            "Camille has a decent magic growth, so an attack or healing magic rune would be recommended for her, such as a Fire Rune or Water Rune."
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
          "Camille can participate in Pretty Girl Attack."
        ]
      }
    },
    "kreutz": {
      "role": {
        "recruitment": [
          "Speak to him at the Dragon's Den with Humphrey in the active party."
        ],
        "overall": [
          "Kreutz is all physical combat, but lack a lot in speed. Statistically, he's similar to Humphrey, just with a heavier focus on defense as the cost of speed and a little of his strength. He can be a powerful fighter, especially when geared towards being a defensive wall. Thankfully, despite his low speed, he is one of a handful of characters that can equip the Windspun Armor which will slightly offset the issue. He can in fact equip most of the heaviest armor types in the game, making him an excellent shield on the front lines."
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
            "Gale Rune since he lacks terribly in Speed. The Killer Rune is also a good choice to help beef up his good physical strength."
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
          "Kreutz has no Unite Attacks."
        ]
      }
    },
    "stallion": {
      "role": {
        "recruitment": [
          "Stallion joins Tir automatically after events at Pannu Yakuta."
        ],
        "overall": [
          "Stallion is an archer who, with his great speed, usually attacks first."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "True Holy Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Stallion come with a True Holy Rune permanently attached."
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
          "Stallion can participate in both the Elf Attack and the Wild Arrow Attack."
        ]
      }
    },
    "kage": {
      "role": {
        "recruitment": [
          "Speak to him at the Secret Factory and pay his 20,000 Potch service fee."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Dart",
          "Weapon Range: L",
          "Weapon Starting Level: 9"
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
            "Killer Rune would be the best for him."
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
          "Kage can participate in the Ninja Attack."
        ]
      }
    },
    "fu-su-lu": {
      "role": {
        "recruitment": [
          "He joins Tir if Tir agrees to pay his 10,000 Potch food bill at the Inn in the Great Forest Kobold Village."
        ],
        "overall": [
          "Fu Su Lu is a strong close range physical fighter with high marks in HP, attack, and defense. He contributes to the strongest unite attack in the game when teamed up with Kuromimi and Gon in the Kobold + 1 Attack.",
          "Fu Su Lu is also one of the slowest characters in the game, and this presents a problem when his astounding attack score could better contribute to battles where the enemies have higher HP scores. However, it is possible to make Fu Su Lu into an agile character. This is accomplished by first equipping him with the Gale Rune, found in a slightly hidden area in Pannu Yakuta. Second, Speed Rune Pieces can be farmed from the Red Elementals in the Cave of the Past. Using a Speed Rune Piece on a character equipped with the Gale Rune causes them to gain two points in speed instead of just one (as the Gale Rune doubles the Speed stat of the character, the game reads the increase as double too, hence giving them two points instead of the usual one). Using this method, Fu Su Lu can become a speedy frontline powerhouse."
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
            "The Gale Rune is arguably the best for Fu Su Lu due to his low SPD."
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
          "Fu Su Lu can participate in the Kobold + 1 Attack."
        ]
      }
    },
    "kirkis": {
      "role": {
        "recruitment": [
          "Kirkis joins automatically after events in Pannu Yakuta."
        ],
        "overall": [
          "Kirkis is a fast archer, working very well from the back line. He is also competent with runes."
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
            "Kirkis does well with basic magic runes, such as the Fire Rune or Water Rune."
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
          "Kirkis can participate in both the Wild Arrow Attack and the Elf Attack."
        ]
      }
    },
    "milich": {
      "role": {
        "recruitment": [
          "After defeating Milich at Scarleticia Castle, forgive him for the events caused under the Black Rune's control and ask him to join."
        ],
        "overall": [
          "Milich is a well-rounded swordsman and magic user. His balanced stats let him serve as a front line fighter while still making good use of elemental runes."
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
            "Elemental runes work well with Milich because of his magic skill."
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
          "Milich has no Unite Attacks."
        ]
      }
    },
    "pahn": {
      "role": {
        "recruitment": [
          "Pahn joins Tir when spoken to after the events in Kouan. At a later point in the game, Pahn must duel Teo McDohl. If Pahn is defeated in the duel, then he will be technically killed in the story. The player must keep his weapon properly sharpened and have Pahn higher than level 30 with good equipment in order to increase the possibility of winning the duel."
        ],
        "overall": [
          "Pahn is a slow but otherwise great front line fighter, and his Boar Rune does decent damage to one enemy, but unbalances him after using it. His best asset is his synergy with different party combinations. Pahn has three different Unite attacks he can participate in, all of which have powerful fighters involved for high damage potential."
        ],
        "weapon": {
          "type": "Claw",
          "range": "S",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "Boar Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Pahn has a Boar Rune permanently attached."
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
          "*Talisman Attack/Guardian Attack with Gremio",
          "*Beat Em' Up Attack with Ronnie Bell",
          "*Martial Arts Attack with Eikei and Morgan"
        ]
      }
    },
    "sonya-shulen": {
      "role": {
        "recruitment": [
          "After the mission at Shasarazade, speak to her in the prison at the HQ. Request her assistance.",
          "Note: She is generally the last Star of Destiny required to get all 108 Stars."
        ],
        "overall": [
          "Sonya is both a decent fighter and magic user."
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
          "Sonya can participate in the Beauty Attack."
        ]
      }
    },
    "anji": {
      "role": {
        "recruitment": [
          "After the castle is level 3 or higher, take Tai Ho and Yam Koo in a party to the Pirate's Hideout. Defeat the 3 pirates within 5 rounds to recruit them."
        ],
        "overall": [
          "Anji's a capable fighter, more so in the company of his crew."
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
            "Anji is a typical Medium-range fighter, and does well with any physical rune."
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
          "Anji can participate in the Pirate Attack, with Leonardo and Kanak."
        ]
      }
    },
    "tai-ho": {
      "role": {
        "recruitment": [
          "Tai Ho joins Tir in Kaku after beating him at Chinchirorin before going to explore Toran Castle."
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
            "Due to his weak magic abilities, an effect rune would be recommended to specialize Tai Ho for physical attacks, like the Hazy Rune or the Killer Rune."
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
          "Kanak joins alongside Anji and Leonardo when defeated at their hideout. Take Tai Ho and Yam Koo to the Pirate's Hideout once the castle is Level 3 or higher."
        ],
        "overall": [
          "Kanak is a powerful fighter, and alongside the other pirates makes for a formidable ally."
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
            "Physical combat runes are best."
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
          "Kanak can participate in the Pirate Attack."
        ]
      }
    },
    "yam-koo": {
      "role": {
        "recruitment": [
          "Yam Koo joins the Tir automatically after clearing monsters out of Toran Castle."
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
            "A Turtle Rune to negate Unbalanced status after using unite attack with Tai Ho."
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
          "After the castle reaches level 3, take Tai Ho and Yam Koo to the Pirate's Hideout, and upon defeating Anji, Leonardo, and Kanak, they will join."
        ],
        "overall": [
          "Leonardo is yet another strong fighter, and when combined with the other pirates in a battle party, he is rather formidable."
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
            "Physical effect runes accentuate Leonardo's combat abilities."
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
          "Leonardo can participate in the Pirate Attack."
        ]
      }
    },
    "hix": {
      "role": {
        "recruitment": [
          "He joins automatically along with Tengaar after defeating Neclord."
        ],
        "overall": [
          "Hix is an average fighter with low magic usability. A Killer Rune or a Prosperity Rune can give him more use in battle. The Fury Rune could also be used."
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
            "Killer Rune, to deal more damage. To balance his relatively average/poor stats at the point when he joins, as he must go with you through Neclord's Castle before he can be removed from your party."
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
          "Hix can participate in the Warrior Attack, with Tengaar."
        ]
      }
    },
    "tengaar": {
      "role": {
        "recruitment": [
          "Automatically joins after rescuing her from Neclord's Castle."
        ],
        "overall": [
          "Tengaar is a very underrated character. She has above-average magic ability and a long ranged weapon which makes her ideal for a backline magician. Equipping her with an elemental rune and sharpening her weapon can make her a very valuable member on your team."
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
            "Elemental runes work best for Tengaar, especially the Earth Rune."
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
          "Varkas joins Tir alongside Sydonia automatically in Toran Castle after the events in Kouan."
        ],
        "overall": [
          "Varkas is a solid fighter with good strength and defense."
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
            "He's best used when paired with Sydonia for their unite, so a Holy Rune is a good help for the party."
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
          "Varkas can participate in the Bandit Attack."
        ]
      }
    },
    "sydonia": {
      "role": {
        "recruitment": [
          "Sydonia joins automatically with Varkas at Toran Castle after events in Kouan."
        ],
        "overall": [
          "Sydonia is a fast fighter, making him useful for getting the drop on enemies. Sydonia's speed makes him good for attack runes to deal damage before enemies can strike. With medium range and weak defense, keep in the back row and just let him harass enemies from the backlines."
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
            "The best use for him is to unite attack with Varkas, so a support rune such as a Water or Flowing Rune for him to heal outside of battle is recommended."
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
          "Sydonia can participate in the Bandit Attack."
        ]
      }
    },
    "eileen": {
      "role": {
        "recruitment": [
          "She joins Tir with her husband Lepant automatically after the events in Kouan."
        ],
        "overall": [
          "Eileen wields throwing darts. She has a high magic stat, and makes a very decent magician early on. Because of her equally high speed stat, equipping her with a version of the Earth or Water rune makes Eileen a very good defensive and offensive force for the party. She has Star Earrings permanently equipped in one of her accessory slots, affording her a small measure of auto healing each turn should she get injured."
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
          "Eileen can participate in the Couple Attack, the Family Attack, and the Beauty Attack."
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
          "Talk to him at the inn in Kirov and beat the record of the Matching Cards in any level he offers."
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
          "Speak to Eikei in Teien when Tir is Lv. 40 or higher."
        ],
        "overall": [
          "Eikei is another powerful frontline fighter with high marks in HP, strength, skill and defense. However, he has little to no magical skill, as well as average luck and speed."
        ],
        "weapon": {
          "type": "Claw",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Lion's Trial Rune (Sega Saturn only), Double Beat Rune (PlayStation only)"
          ],
          "recommended": [
            "Boar Rune (PlayStation only)"
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
          "Eikei can participate in the Martial Arts Attack."
        ]
      }
    },
    "maximillian": {
      "role": {
        "recruitment": [
          "Joins upon request at the Northern Checkpoint after rescuing Warren and Viktor."
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
          "Joins with Maximillian at the Northern Checkpoint after rescuing Warren and Viktor."
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
          "Grenseal joins automatically with Alen after defeating General Teo."
        ],
        "overall": [
          "Grenseal is a good swordsman and magic user. His permanently attached Thunder Rune and strong magic growth make him useful against groups of enemies as an attacking mage."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Thunder Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Grenseal has the Thunder Rune permanently attached."
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
          "Grenseal can participate in the Pretty Boy Attack with Flik and Alen."
        ]
      }
    },
    "alen": {
      "role": {
        "recruitment": [
          "Joins automatically with Grenseal after defeating General Teo."
        ],
        "overall": [
          "Alen is a decent character overall, thanks to his excellent affinity with magic, and his decent fighting skills."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Rage Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Alen's Rage Rune is permanently attached."
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
          "Alen can participate in the Pretty Boy Attack with Flik and Grenseal."
        ]
      }
    },
    "tesla": {
      "role": {
        "recruitment": [
          "Tesla joins automatically when spoken to in Antei after Mathiu assigns Tir to recruit he and Kimberly."
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
          "Fight Holly Fairies around the Scarleticia Area until one drops a Nameless Urn, then speak to Jabba in Rikon with the urn in your inventory to get him to join."
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
          "After having set the HQ, Lorelai joins Tir in Kouan if he's over level 25 when he talks to her."
        ],
        "overall": [
          "Lorelai is an effective back row attacker with her bow, though this is offset by her mediocre magic parameter."
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
            "Since her magic parameter never climbs to a sufficient number to make good use of spells, it is recommended to give her a Hazy Rune to help her avoid certain enemies' long distance attacks."
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
          "Lorelai has no Unite Attacks."
        ]
      }
    },
    "blackman": {
      "role": {
        "recruitment": [
          "Speak to him at Kalekka without stepping on his plants.",
          "Note: If you step on his plants before speaking to him, simply exit the village and return."
        ],
        "overall": [
          "Blackman is a very strong fighter."
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
            "Physicals runes like the Killer Rune would be perfect for him."
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
          "Blackman does not have any unite attacks with other characters."
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
          "Speak to him at Qlon Temple if your Castle is at least Level 3 and allow him to join the army, otherwise he will say he needs more training."
        ],
        "overall": [
          "Morgan plays very similar to Pahn, with high attack power and HP but low speed and light armor."
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
            "He is one of 3 characters that can use the Boar Rune, which is a nice alternative for him. A Killer Rune is also useful."
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
          "Morgan can participate in the Martial Arts Attack."
        ]
      }
    },
    "mose": {
      "role": {
        "recruitment": [
          "Joins automatically at Kirov after obtaining the Fire Spears."
        ],
        "overall": [
          "Like the other smiths, Mose is a solid M range physical fighter."
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
            "Mose is well suited to most physical effect runes."
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
          "Mose can participate in the Blacksmith Attack."
        ]
      }
    },
    "esmeralda": {
      "role": {
        "recruitment": [
          "Head to the the Inn at Antei, she will join when presented with an Opal. The Opal is dropped by the Nightmare enemy in Soniere Prison."
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
          "Speak to her at Kirov with the Sound Orb in your inventory."
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
          "Chapman joins when talked to at the Antei Armor store."
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
          "Joins automatically when spoken to in Soniere Prison."
        ],
        "overall": [
          "Low stats, with exception of skill and luck. Able to equip shields.",
          "He is also a decent magic user."
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
          "Liukan can participate in the Flash Attack."
        ]
      }
    },
    "fukien": {
      "role": {
        "recruitment": [
          "Fukien automatically joins after you enter Qlon Temple."
        ],
        "overall": [
          "Fukien is a really good magic user and his Resurrection Rune is pretty useful."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "Resurrection Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Fukien has the Resurrection Rune permanently attached."
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
          "Fukien can participate in the Flash Attack."
        ]
      }
    },
    "futch": {
      "role": {
        "recruitment": [
          "Joins automatically after returning from Seek Valley."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Spear",
          "Weapon Range: M",
          "Weapon Starting Level: 9"
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
          "Futch can participate in the Dragon Knight Attack."
        ]
      }
    },
    "kasumi": {
      "role": {
        "recruitment": [
          "Joins automatically before the first battle with Teo McDohl's army."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Dart",
          "Weapon Range: L",
          "Weapon Starting Level: 6"
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Shrike Rune*",
            "''*Fixed Rune, can't be detached.''"
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
          "Kasumi can participate in both the Pretty Girl Attack and the Ninja Attack."
        ]
      }
    },
    "maas": {
      "role": {
        "recruitment": [
          "Maas joins Tir when spoken to in the Great Forest Kobold Village."
        ],
        "overall": [
          "Maas is an average character, but can be used as a good attacker early on."
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
            "Maas is weak in magic, so runes that give him a bonus like the Hazy Rune are best. He can also be useful early on by putting a Holy Rune on him for the ability to dash."
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
          "Maas can participate in the Blacksmith Attack. The unite attack is very powerful, so the best way to use him is to take advantage of this unite attack."
        ]
      }
    },
    "crowley": {
      "role": {
        "recruitment": [
          "Prerequisites: Level 4 Headquarters",
          "To recruit Crowley, speak to him in a secret passage in the Cave of the Past.",
          "To get to the secret passage, once inside the cave, take the north exit and head down the stairs. Head all the way to the right, and then south to a new screen. Start heading right and go south. Head up the stairs and you will be in the previous screen. Take the stairs down and head south to the next screen, and then head south once more. The hidden passage is against the southern wall."
        ],
        "overall": [
          "Crowley is one of the most powerful magic users."
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
            "Cyclone Rune or Rage Rune."
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
          "Crowley has no Unite Attacks."
        ]
      }
    },
    "fuma": {
      "role": {
        "recruitment": [
          "Speak to him at the Dragon Knights' Fortress and allow him to join the party.",
          "Note: He is at the upper-right corner outside of the fortress, and will not appear unless your Castle is at least Level 3."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Shuriken",
          "Weapon Range: L",
          "Weapon Starting Level: 11"
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
          "Fuma can participate in the Ninja Attack, with Kage and Kasumi."
        ]
      }
    },
    "moose": {
      "role": {
        "recruitment": [
          "Speak to him in the weapon shop at the Warrior's Village with Maas, Meese, and Mose in your active party."
        ],
        "overall": [
          "Like the other smiths, Moose is a solid M range physical fighter."
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
          "Moose can participate in the Blacksmith Attack."
        ]
      }
    },
    "meese": {
      "role": {
        "recruitment": [
          "Speak to Meese in the Village of the Dwarves after recruiting Maas and he will join."
        ],
        "overall": [
          "Like the other blacksmiths, Meese is a solid M range physical fighter."
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
            "Meese is well suited to most physical effect runes, such as a Killer Rune."
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
          "Meese can participate in the Blacksmith Attack."
        ]
      }
    },
    "sergei": {
      "role": {
        "recruitment": [
          "Sergei joins Tir when spoken to in Kaku after exploring Toran Castle."
        ],
        "overall": [
          "Sergei is a fairly standard physical fighter."
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
            "Physical runes work well."
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
          "Sergei has no Unite Attacks."
        ]
      }
    },
    "kimberly": {
      "role": {
        "recruitment": [
          "Kimberly will join when spoken to at her home in Antei, after Mathiu instructs Tir to recruit her and Tesla."
        ],
        "overall": [
          "Other than a high skill and luck stat, she's very vulnerable and weak as a magician and fighter. Her weak defense and attack prevents her from being a decent frontline character. It's best to keep her as a back row magician with some medicine. However, with the right rune and equipment, she can actually deal some pretty decent damage with her weapon."
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
            "Any basic magic rune works well, such as a Lightning Rune."
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
          "Kimberly has no Unite Attacks."
        ]
      }
    },
    "sheena": {
      "role": {
        "recruitment": [
          "Sheena joins Tir when spoken to with Lepant in the party at the Inn in Seika."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "Lightning Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Sheena joins with a Lightning Rune permanently equipped."
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
          "Speak to him at the Secret Factory."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Axe",
          "Weapon Range: M",
          "Weapon Starting Level: 9"
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
            "Physical combat runes are best."
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
          "Kessler has no Unite Attacks."
        ]
      }
    },
    "marco": {
      "role": {
        "recruitment": [
          "Play his game and win 5,000 potch from him in the Warrior's Village."
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
          "Gen will automatically join when spoken to in a house in Teien when Tir and party need a way to pass the Dunan Rapids."
        ],
        "overall": [
          "Gen is a strong physical fighter with plenty of HP and defense to handle the frontline, with low magical skill being his only real flaw. He has decent speed and can keep up with faster characters in the party."
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
            "Gen is competent with front row physical runes, such as the Hazy Rune, Counter Rune, and Killer Rune."
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
          "Gen can participate in both the Carpenter Attack and the Fatal Attack."
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
          "Hellion joins Tir when spoken to at the Inn in Teien, as long as the castle is level 2 or higher."
        ],
        "overall": [
          "Hellion is a powerful magician."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "Mother Earth Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Hellion comes with a Mother Earth Rune permanently attached."
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
          "None"
        ]
      }
    },
    "mina": {
      "role": {
        "recruitment": [
          "To recruit Mina, speak with her at the inn in Antei, where she is dancing, with Toe Shoes equipped to Tir. Agree to dance with her and she will join after a short scene."
        ],
        "overall": [
          "Mina's very high magic power is noteworthy and makes her a great candidate for runes of either attack or support magic; this is equally supported by her excellent speed parameter. Her shawl weapon is short-ranged and unique among mages. However, it's best to keep her out of the front positions due to the fact she has both a Magic Robe and Toe Shoes permanently attached, which limits her defense options quite a bit."
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
            "Magic runes are suited well to her."
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
          "Mina has no Unite Attacks."
        ]
      }
    },
    "milia": {
      "role": {
        "recruitment": [
          "Joins automatically before heading to Seek Valley."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Spear",
          "Weapon Range: M",
          "Weapon Starting Level: 9"
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
            "Killer Rune."
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
          "Milia can participate in the Dragon Knight Attack."
        ]
      }
    },
    "kamandol": {
      "role": {
        "recruitment": [
          "Kamandol joins automatically alongside Gen during the events to pass the Dunan Rapids."
        ],
        "overall": [
          "Kamandol is a capable magic rune user. Meanwhile, sticking him to his unite attack is also a viable option."
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
            "Any basic magic rune, such as a Fire Rune, is recommended."
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
          "Kamandol can participate in the Fatal Attack."
        ]
      }
    },
    "juppo": {
      "role": {
        "recruitment": [
          "He joins in Lepant's Mansion when spoken to outside of the wheel room.",
          "''Note: If you didn't recruit him while sneaking in Lepant's Mansion, he will automatically be available at the HQ after Lepant joined.''"
        ],
        "overall": [
          "Juppo is a decent back row physical fighter."
        ],
        "weapon": {
          "type": "Dart",
          "range": "L",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "Trick Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Juppo has a Trick Rune permanently attached."
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
          "Juppo can participate in the Trick Attack."
        ]
      }
    },
    "kasios": {
      "role": {
        "recruitment": [
          "Speak to him in Scarleticia Castle with Milich Oppenheimer in the party."
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
          "Viki speaks to Tir when she teleports herself to the forest path, where he can offer to recruit her."
        ],
        "overall": [
          "Viki is a powerful magic rune user and a good addition to the battle party, if you are very lucky. It is rather risky to use spells with her, because she has a 20% chance of backfiring with every spell cast. This can damage your group badly, because of Viki's high magic skill. She's a bit more limited with rune customization over some of the other mages due to her Blinking Rune being permanently attached to a slot."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "Viki has her permanently attached Blinking Rune.",
            "Growth =",
            "*Head - Gained at Level 30.",
            "*R. Hand - Blinking Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "With her magic power, any magic rune is recommended, as well as a Blue Gate Rune on her forehead.",
            "Rune Affinity =",
            "Viki has skill E in every rune, which means she damages 20% more, but also has a chance of backfiring."
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
          "Head Up!! teleports Abizboah or Rulodia on to one enemy for 2x damage, unbalancing the octopus."
        ]
      }
    },
    "rubi": {
      "role": {
        "recruitment": [
          "Bring Kirkis to speak to Rubi at the Great Forest Kobold Village when Kirkis is Lv. 35 or higher and speak to Rubi to recruit him."
        ],
        "overall": [
          "Rubi is another capable Elven archer."
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
            "Rubi can make competent use of basic elemental runes or physical attack runes."
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
          "Rubi can participate in the Wild Arrow Attack."
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
          "In order to recruit Meg in Suikoden, speak to her outside the inn at Kaku with Juppo in the party."
        ],
        "overall": [
          "Meg mirrors Juppo in being a good back row physical fighter. She has a Guard Robe permanently equipped. Compared to her uncle, she's much stronger and her high luck stat ensures she lands critical hits more often. Her lower HP and defense stats means she can't survive much punishment for long, at least until she acquires more powerful gear."
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
            "Meg is the only character other than Juppo who can equip a Trick Rune. Another option is to give her a Killer Rune, which when combined with her naturally high luck parameter, allows her to inflict many critical hits in one fight alone."
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
          "Meg can participate in the Trick Attack."
        ]
      }
    },
    "taggart": {
      "role": {
        "recruitment": [
          "Joins automatically after informing of Warren's capture."
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
          "Giovanni joins automatically with Lepant."
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
          "Speak to him at the Garan Fortress with at least 80 recruits (dead and \"away\" characters do not count)."
        ],
        "overall": [
          "Quincy is another strong long range attacker with subpar magic skills being his only weakness. Therefore, it is best to give him a Killer Rune to allow him to inflict some critical hits from afar. His speed is also high, so he has no trouble contributing to battles quickly.",
          "Quincy is an expert at using bows, he uses it only for hunting, but he uses dual-edged phurbas in battle."
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
            "Killer Rune."
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
          "Quincy has no Unite Attacks."
        ]
      }
    },
    "apple": {
      "role": {
        "recruitment": [
          "Speak to her in Seika and she'll join to find out Mathiu's reason for joining."
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
          "After having set the HQ, He joins Tir when spoken to at the Garan Fortress."
        ],
        "overall": [
          "Kai is a solid physical attacker, but weak in magic. But what makes Kai a powerhouse is his Unite Attack with the Protagonist, which is the best Unite Attack in the game to hit multiple enemies. Due that, Kai is best suited to take care of Random Battles."
        ],
        "weapon": {
          "type": "Bo Staff",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "Hazy Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Kai comes with a Hazy Rune permanently attached."
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
          "Kai can participate in both the Master Pupil Attack and the Flash Attack."
        ]
      }
    },
    "lotte": {
      "role": {
        "recruitment": [
          "Lotte can be found in the inn in Rikon. Talk to her when your HQ has reached LV3, retrieve her cat in Kaku, and return it to her."
        ],
        "overall": [
          "Lotte is a powerful magician, so keep her in the back row and equip her with an upgraded elemental rune that is needed. She's a poor melee fighter, like most dedicated mages, but her high magic stat allows her to use Lv.1 and Lv.2 spells with decent frequency in long dungeon crawls."
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
            "Lotte is a powerful mage who can make good use of any of the Elemental Runes. She starts with an Earth Rune, but it can be switched to a more offense-oriented category like a Thunder or Rage Rune. She can also be a strong support unit by upgrading to a Mother Earth Rune or by equipping either a Cyclone or Flowing Rune."
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
          "Lotte has no Unite Attacks."
        ]
      }
    },
    "mace": {
      "role": {
        "recruitment": [
          "Speak to him at Seek Valley with Maas, Meese, Moose and Mose in your active party. A Level 4 Headquarters is required before recruiting him."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Hammer",
          "Weapon Range: M",
          "Weapon Starting Level: 15"
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
          "Mace can participate in the Blacksmith Attack."
        ]
      }
    },
    "onil": {
      "role": {
        "recruitment": [
          "Onil joins Tir when spoken to in Seika after exploring Toran Castle."
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
          "Kuromimi joins Tir automatically after the events at Pannu Yakuta."
        ],
        "overall": [
          "Kuromimi is a strong frontline swordsman with good attack and HP scores. He also has excellent defense due to being able to equip helmets, mid-weight armor, shields and Kobold-exclusive Necklace accessories."
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
            "A Killer Rune or Counter Rune complements Kuromimi's fighting abilities."
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
          "Kuromimi can participate in both the Kobold Attack and the Kobold + 1 Attack."
        ]
      }
    },
    "gon": {
      "role": {
        "recruitment": [
          "Bring Kuromimi to visit him in the Great Forest Kobold Village and speak to him to recruit him."
        ],
        "overall": [
          "Much like Kuromimi, Gon is a good frontline fighter with excellent defense due to being able to equip helmets, mid-weight armor, shields and exclusive Necklace accessories. A rather unique feature he has is an extremely high luck parameter, a trait that Meg also has in common with him. This allows him to make more critical hits, making him an incredibly powerful character."
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
            "Gon can make good use of any physical effect runes, such as the Counter Rune or Hazy Rune. Like Meg, a Killer Rune would be something he can benefit from due to his high luck stat."
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
          "Gon can participate in both the Kobold Attack and the Kobold + 1 Attack."
        ]
      }
    },
    "antonio": {
      "role": {
        "recruitment": [
          "He joins when Tir speaks to him at the Inn in Seika, after Marie has been recruited and mentions she needs help. You need to sleep or just choose \"don't stay\" a couple of times at your HQ until Marie triggers the dialog that she needs help, then go back see Antonio."
        ],
        "overall": [
          "Weapon Growth =",
          "Weapon Type: Pan",
          "Weapon Range: M",
          "Weapon Starting Level: 8"
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
          "Antonio has no known unite attacks."
        ]
      }
    },
    "lester": {
      "role": {
        "recruitment": [
          "In Kirov, enter the houses to the left and right of Sarah and taste the stew on the stove. Then enter the house south of Sarah and talk to him. Will not appear unless Toran Castle is at least Level 3."
        ],
        "overall": [
          "Lester joins as a cook, although this doesn't grant any specific abilities or bonuses."
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
            "Physicals runes would be suited for him."
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
          "Lester has no Unite Attacks."
        ]
      }
    },
    "kirke": {
      "role": {
        "recruitment": [
          "Kirke joins when spoken to at the Lorimar checkpoint after the events there make the area available."
        ],
        "overall": [
          "Kirke is a moderately good physical combat character."
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
            "Kirke is well suited to physical combat runes. The Killer Rune would be thematically appropriate."
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
          "Kirke has no Unite Attacks."
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
          "Speak to him at the Secret Factory."
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
          "Sylvina joins automatically after events at Pannu Yakuta."
        ],
        "overall": [
          "Sylvina has decent magic growth, so giving her magic runes can make her a useful party member."
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
            "Sylvina is a capable archer and magic rune user."
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
          "Sylvina can participate in both the Elf Attack and the Wild Arrow Attack."
        ]
      }
    },
    "ronnie-bell": {
      "role": {
        "recruitment": [
          "Joins automatically before delivering the Fire Spears."
        ],
        "overall": [
          "Ronnie Bell is a powerful fighter that bears the Hate Rune. This can allow her to be a great frontline or backline fighter since her rune is a ranged attack."
        ],
        "weapon": {
          "type": "Claws",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "Hate Rune*",
            "''*Fixed Rune, can't be detached.''"
          ],
          "recommended": [
            "Ronnie Bell has a Hate Rune permanently attached."
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
          "Ronnie Bell can participate in the Beat Em' Up Attack."
        ]
      }
    },
    "gaspar": {
      "role": {
        "recruitment": [
          "Gaspar joins if Tir wins 5000 potch off of him in Chinchirorin in Kaku."
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
          "Talk to him at Warrior's Village with the Window Orb in your inventory and he will join."
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
          "Marie joins Tir when talked to at the inn in Seika after securing Toran Castle."
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
          "Joins upon request at Qlon Temple if you bring him Blue, Red, and Yellow Flower Seeds."
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
          "Sarah joins in Kirov after Tir completes the trade sequence and gives her Soap."
        ],
        "overall": [
          "Sarah is a balanced long range fighter and a capable magic rune user. She can attack safely from the back row and works especially well with support or healing runes."
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
            "Water Rune or Flowing Rune"
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
          "Sarah has no Unite Attacks."
        ]
      }
    },
    "sansuke": {
      "role": {
        "recruitment": [
          "Sansuke joins Tir when spoken to in Great Forest Village after exploring Toran Castle."
        ],
        "overall": [
          "Sansuke is an average attack character."
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
            "Physical effect runes or a Holy Rune are effective uses of Sansuke as a party member."
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
          "Sansuke can participate in the Carpenter Attack with Gen."
        ]
      }
    },
    "qlon": {
      "role": {
        "recruitment": [
          "Qlon joins if you speak to him in Antei after liberating it from Milich Oppenheimer."
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
          "Templeton joins Tir when spoken to at the Burnt village of the Elves."
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
          "Krin joins Tir automatically during the events in Kouan."
        ],
        "overall": [
          "Krin is a fairly weak rear line fighter, and ends up being a liability if not properly leveled by the time he's a required party member."
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
            "A Holy Rune makes Krin useful for his tenure as a required party member."
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
          "Krin can participate in the Bumpy Attack."
        ]
      }
    },
    "chandler": {
      "role": {
        "recruitment": [
          "Chandler can be recruited at the Kwaba Fortress after Tir has claimed Toran Castle."
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
          "As the main protagonist of Suikoden II, Riou is available by default at the beginning of the game, and cannot be removed from the party."
        ],
        "overall": [
          "Riou is a fantastic character with above average stats in all categories. He has several powerful Unite Attacks in the game and his Bright Shield Rune is one of the most powerful and useful runes in the game with its diverse functions as both an offensive and defensive rune. A close inspection of his stats show that Riou's stats favor melee stats, but his well-rounded affinity and extra rune slots make him quite diverse for player customization."
        ],
        "weapon": {
          "type": "Tonfas",
          "range": "M",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "*Head - Gained at Lv. 40",
            "*Right Hand - Bright Shield Rune (Permanent, Story Event)",
            "*Left Hand - Gained at Lv. 25",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Riou has all-around great stats and can be customized for magic or melee. For a melee set-up, a combination of a Double Beat Rune, Double Strike Rune, Killer Rune, or even a Fury Rune will work wonders for him. For a mage set-up, Riou is one of the few characters who can equip a Blue Gate Rune, and he has a high affinity with the Resurrection Rune. The Bright Shield Rune is literally all the party needs for healing although the Forgiver Sign spell is a powerful damaging move too. Riou is a perfect candidate for the Friendship Rune to be embedded on his weapon. Attaching a Fire Sealing Rune to him is very useful in the battle against Luca Blight, because the attack of Luca Blight usually uses the element of fire. If the player has a lot of potch, the player can embed a Technique Rune for Riou."
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
          "Riou can perform the following Unite Attacks:",
          "*Buddy Attack with Jowy",
          "*Family Attack with Nanami",
          "*Leisure Attack with Nanami",
          "*Copycat Attack with Hoi",
          "*Double Leader Attack with Tir"
        ]
      }
    },
    "nanami": {
      "role": {
        "recruitment": [
          "Nanami joins while escaping Kyaro if the player chooses to rescue her. If not, Nanami joins automatically at the first visit to Muse after getting the Bright Shield Rune. She permanently leaves after liberating Rockaxe."
        ],
        "overall": [
          "Nanami is a balanced character, with high speed status."
        ],
        "weapon": {
          "type": "Tri-Nunchaku",
          "range": "M",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*Right Hand - None",
            "*Left Hand - None",
            "*Weapon - No Rune attached"
          ],
          "recommended": [
            "Spark Rune, Balance Rune, Double Beat Rune and Water Rune."
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
          "Nanami can participate in the Family Attack and Leisure Attack with Riou."
        ]
      }
    },
    "tsai": {
      "role": {
        "recruitment": [
          "Tsai joins automatically when you ask him to repair the fire spears."
        ],
        "overall": [],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Unicorn Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Resurrection Rune and Wind Rune"
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
          "Tsai can participate in Dad and Daughter Attack."
        ]
      }
    },
    "hanna": {
      "role": {
        "recruitment": [
          "Speak to Hanna in Toto Village after it is burned to the ground."
        ],
        "overall": [
          "Hanna is a decent frontline party member with high defensive stats and the ability to carry shields for that extra bit of survivability. Only flaw is her one-rune slot limitation, which causes her to be outclassed by other frontline party members later in the game."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Beat Rune, Fury Rune"
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
          "Hanna can participate in the Tackle Attack."
        ]
      }
    },
    "anita": {
      "role": {
        "recruitment": [
          "There are two ways to recruit Anita.",
          "#Speak with her at the tavern in Muse or the inn at Banner Village and complete her requests. Travel in/out of town in order to get more requests from her until she can be recruited. Her level is only 16.",
          "#Speak with Anita at the Banner Village Inn with Valeria in the party. Her level this time is 40. (Sometimes 99 due to a glitch.)"
        ],
        "overall": [
          "Anita is a decent unit but she is outclassed by her rival Valeria. Although have the same amount of rune slots, Valeria generally has superior stats."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Falcon Rune (Permanently attached)",
            "*L. Hand - None (Acquired at level 50)",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Giving Anita the Fury Rune is the best way to increase the damage she can output with her Falcon Rune"
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
          "Anita can perform the Rival Attack with Valeria."
        ]
      }
    },
    "viktor": {
      "role": {
        "recruitment": [
          "Viktor automatically joins in South Window."
        ],
        "overall": [
          "As with Suikoden, Viktor is one of the better physical attack characters in Suikoden II, and has a good HP, high strength growth and decent enough survivability. He makes an extremely solid front line character once he joins the party. Viktor wields his 2 handed sword until he once again reunites with the Celestial Sword."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - No Slot",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Viktor does well with the Titan Rune, which replaces the Clone Rune from the first Suikoden. He only gains 2 rune slots, but it is a huge upgrade from one in Suikoden 1. His weak magic abilities make combat enhancing runes, like the Warrior Rune, a recommended choice. That said, he is one of the very few physical warriors that gain 2 Rune slots. With that, he can take full advantage of the exceptionally powerful physical rune set of Double Beat Rune and Double Strike Rune or the Fury Rune or Violence Rune. A rune attached to his weapon like a Friendship Rune is recommended or the Exertion Rune which will make Viktor in prolonged battles even more effective. With the right setup of his runes, Viktor possibly has the potential to be one of the most powerful, if not the most powerful, physical attackers in the game."
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
          "Viktor can use the Cross Attack with Flik."
        ]
      }
    },
    "flik": {
      "role": {
        "recruitment": [
          "Flik joins automatically in South Window."
        ],
        "overall": [
          "Flik is still an effective and reliable front line fighter and competent magic rune user, much like in the first game. His affinity with the lightning element remains, so he works well with the Lightning Rune and later the Thunder Rune. He has solid physical stats and good survivability and the ability to carry shields as part of his gear further augments it. Flik is also a powerful lightning magic user once his rune was upgraded to Thunder Rune and is capable of dealing magic heavy damage to his enemy using its final spell, Thunder Storm."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head -",
            "*R. Hand - Lightning Rune",
            "*L. Hand -"
          ],
          "recommended": [
            "Thunder Rune, Fury Rune, Double Beat Rune, and/or Double Strike Rune"
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
          "*Cross Attack with Viktor does 1.5x damage to one enemy with 30% chance of knockdown.",
          "*Groupie Attack with Nina does 2.5x damage to one enemy, Nina unbalances.",
          "*Fancy Lad Attack, mistranslated as Pretty Boy Attack, with Camus and Miklotov does 1.5x damage to one enemy with a 25% chance of instant death."
        ]
      }
    },
    "freed-yamamoto": {
      "role": {
        "recruitment": [
          "Joins automatically after meeting with Granmeyer in South Window."
        ],
        "overall": [],
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
            "Fire Rune, Earth Rune or Wind Rune."
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
          "Freed can participate in the Husband and Wife Attack."
        ]
      }
    },
    "shu": {
      "role": {
        "recruitment": [
          "Shu joins automatically after the events in Radat."
        ],
        "overall": [
          "Shu is the Military Strategist."
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
          "He automatically joins in North Window Castle."
        ],
        "overall": [
          "Luc becomes a very useful character early on with his magic power and Pixie Rune. The Pixie Rune allows him to attack from the back row, making him a well balanced mage. Luc has all three Rune slots available and is one of the best characters to utilize the Blue Gate Rune. Due to his high magic, available Rune slots, and spell charges; equipping Luc with two Runes that can perform a Unite Magic spell will allow him to do it by himself, though it will cost two Lv. 4 spell charges to do so."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "4"
        },
        "rune": {
          "attached": [
            "*Head -",
            "*R. Hand - Wind Rune",
            "*L. Hand - Pixie Rune"
          ],
          "recommended": [
            "Upgrade the Wind Rune to a Cyclone Rune, and a Blue Gate Rune on his forehead for a good attack/support mage. The Pixie Rune is useful in the beginning when he has limited magic charges, but later on it's better to drop it for another magic rune like a Flowing Rune or even a magic enhancing Rune like a Wizard Rune or Alertness Rune. The Darkness Rune is great on him, as he can do the highest possible damage from it compared to everyone else. He has very high affinities for every Rune."
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
          "Luc can participate in Pretty Boy Attack, mistranslated as the Cutie Boy Attack, with Futch and Sasuke."
        ]
      }
    },
    "tai-ho": {
      "role": {
        "recruitment": [
          "Tai Ho appears in Suikoden II as one of the 108 Stars of Destiny. He can be recruited in Kuskus as one of the boatmen needed to get to Two River, however you need to win 5000 potch from him in Chinchirorin. Saving before taking him on is recommended."
        ],
        "overall": [
          "Tai Ho is an average combat character."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "Tai Ho can use the Unicorn Rune for his spear, which makes him useful against enemy columns."
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
          "Tai Ho has no Unite Attacks."
        ]
      }
    },
    "yam-koo": {
      "role": {
        "recruitment": [
          "Yam Koo joins when you recruit Tai Ho."
        ],
        "overall": [
          "He is no longer a battle character like he was in the first game and he allows you to play the Fishing Minigame, which allows you to make some money off of the fish you catch, as well as supply ingredients for the Cook-off Minigame. You pay Yam Koo 100 potch for bait, then may choose to sell your catch to him, often for a profit."
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
          "Ridley is recruited automatically after the events in Two River."
        ],
        "overall": [
          "Ridley is an Infantry Unit with 10 ATK and 7 DEF.",
          "Like Georg, Shu and Jowy, Ridley has a Critical skill at his disposal to dispatch his enemies. However, this ability is nullified when either Seed, Culgan or other Highland soldiers attack."
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
          "Boris shows up in Dunan in his father's stead if Ridley is killed in the Dunan Unification War. This occurs if you choose to run away with Nanami when she asks you in Tinto."
        ],
        "overall": [
          "Boris is a leader unit with 9 ATK and 8 DEF."
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
          "Fitcher is recruited automatically after the events in Two River.",
          "Fitcher plays an important role in the story. Other than that, he serves no function."
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
          "Chaco joins automatically after the events in Two River."
        ],
        "overall": [
          "Chaco as a spear user, can attack from the back row. As far as attributes go, he has rather low health, but has good luck and high speed stats and oddly enough, solid magic defence to make up for his low HP. He gains access to 3 rune slots as he levels, opening up some real powerful options and setups for the late game."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - None (Acquired at level 55)",
            "*R. Hand - None (Acquired at level 45)",
            "*L. Hand - None (Available upon recruitment)"
          ],
          "recommended": [
            "Chaco gains access to all 3 rune slots available as he levels up. Therefore this grants Chaco access to a great amount of customization and huge damage potential. Chaco has a low magic stat but he can work as a mage. Chaco would work best with a combination of Resurrection Rune, Wind Rune, Lightning Rune and Wind Rune. Chaco's 3 runes slots gives him access to the Double-Strike Rune, Double-Beat Rune and Fury Rune combo which along with his high strength stat allows him to output high amounts of damage."
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
          "Chaco can participate in the Winger Attacks."
        ]
      }
    },
    "hix": {
      "role": {
        "recruitment": [
          "Speak to Hix and Tengaar in the inn in Lakewest after the events in Two River. Follow them to the Kobold Village and help them complete the Test of the Unicorn."
        ],
        "overall": [
          "Statistically, Hix is the same as the first game, with below-average stats and attributes. However, his permanently attached Exertion Rune (one of the strongest embedded runes) to his weapon makes him far more usable in this game compared to the first. This gives him a heavy boost in his attack power and makes him deadly in prolonged battles like boss encounters but will require Strength increasing gear for that to be most effective."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "To take full advantage of the Exertion Rune, a powerful physical rune like the Double Beat Rune or the Violence Rune is recommended."
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
          "Hix can participate in the Warrior Attack, with Tengaar."
        ]
      }
    },
    "tengaar": {
      "role": {
        "recruitment": [
          "Joins with Hix after completing the Test of the Unicorn sidequest in Kobold Village."
        ],
        "overall": [
          "Tengaar can be a very valuable asset to your team, especially against Luca Blight. With 2 available rune slots, she can be an amazing support mage. With a Mother Earth Rune and a Flowing Rune, she can spam heals, buffs, and dish out some damage with Earthquake.",
          "Unlike most Mages, her weapon is L-ranged, which makes her being a backrow magician just a bit better."
        ],
        "weapon": {
          "type": "Throwing Knife",
          "range": "L",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "Earth Rune"
          ],
          "recommended": [
            "Mother Earth Rune, Flowing Rune"
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
          "Tengaar can participate in both the Warrior Attack and the Pretty Girl Attack."
        ]
      }
    },
    "yoshino-yamamoto": {
      "role": {
        "recruitment": [
          "After you obtain your headquarters, speak to her in Radat with Freed in your party."
        ],
        "overall": [
          "Yoshino is one of the few characters that is pretty much all rounded. With no real weaknesses or strenghts when it comes to stats, she is a suitable choice for both a fighter and a magician. As a fighter, she can be in both lines of the party to attack, and as a magician, she truly excels with the Water Rune. Her amount of hitpoints is very typical for a medium ranged fighter, but this can make Yoshino a rare breed in the Suikoden world; a magician standing on the first row. Yoshino comes equipped with a Water Amulet that can't be unequipped."
        ],
        "weapon": {
          "type": "Naginata",
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
            "Yoshino has high skills with all runes, but excels with a Water Rune or Flowing Rune."
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
          "Yoshino can participate in the Husband and Wife Attack."
        ]
      }
    },
    "stallion": {
      "role": {
        "recruitment": [
          "Run Away (or Let Go) from battles over 50 times, then speak to Stallion in Radat town to race him after progressing the storyline in Two River. If you've run away enough, you win and he joins.",
          "Entourage Ability =",
          "Stallion grants doubled walking speed while on the field."
        ],
        "overall": [
          "Stallion remains a speedy archer, usually able to attack first."
        ],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "True Holy Rune"
          ],
          "recommended": [
            "Great Hawk Rune"
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
          "Stallion can participate in the Bow Attack."
        ]
      }
    },
    "clive": {
      "role": {
        "recruitment": [
          "Talk to Clive in South Window once passage to Lakewest has been secured and he will join."
        ],
        "overall": [
          "Clive is still a great rear line fighter, and he's still capable of being a good support unit. His speed stat and attack power are both excellent."
        ],
        "weapon": {
          "type": "Gun",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*Right Hand - None",
            "*Left Hand - N/A",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Clive is well suited to a Kite Rune. You can also still use a Spark Rune or Medicine Rune for support. Clive works best with a Double-Beat Rune, a Killer Rune due to his high TEC stat and an embedded Exertion Rune."
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
          "Clive has no unite attacks."
        ]
      }
    },
    "teresa-wisemail": {
      "role": {
        "recruitment": [
          "Teresa is recruited automatically after the events in Greenhill."
        ],
        "overall": [
          "Teresa is an Archery Unit with 5 ATK and 6 DEF.",
          "Teresa is a second bow cavalry sprite after Flik and she is able to bombard the enemy frontlines. She can also be considered as an equivalent to Culgan in bombarding the enemy. When being put in other characters in both offense and defense, she can overpower bow sprites or soldiers and being evenly matched with Culgan when bombarding each other with bow and arrows.",
          "Her skill in the war tactics is Bombard which she can bombard the enemy in a single attack to damage their opponent. However her skill will be ineffective when attacking, Seed, Culgan, Yuber, Lucia and Jowy."
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
          "Nina joins automatically after the events in Greenhill."
        ],
        "overall": [
          "Suprisingly, she is one of the best characters in the entire game. A high magic and magic defense stat, coupled with above average HP, defense and strength + her strong weapon, she can dish out good magical and physical damage. She also has a great unite attack with Flik, adding even more usefulness."
        ],
        "weapon": {
          "type": "Book",
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
            "Fire Rune, Earth Rune, Balance Rune and Fury Rune"
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
          "Nina can participate in the Groupie Attack."
        ]
      }
    },
    "humphrey-mintz": {
      "role": {
        "recruitment": [
          "Speak to Humphrey in the Inn at the Highway Village a few times. Complete the quest with him and Futch."
        ],
        "overall": [
          "Just like his appearance in the first game, Humphrey boasts superior defense and good strength. With his ability to equip heavy armor and the possibility of carrying the Winspun Armor from the save transfer, Humphrey is one of the best front line tank in the game. unfortunately, he still suffers from low speed and technique making him almost always attack last and very rarely hitting more than once, and he is very vulnerable to magic."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "None"
          ],
          "recommended": [
            "The Warrior Rune is great for him since his defense can be very high."
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
          "None"
        ]
      }
    },
    "kiba-windamier": {
      "role": {
        "recruitment": [
          "Kiba is recruited automatically after defeating his company in battle, regardless if you choose to have him beheaded."
        ],
        "overall": [
          "Before he sides with Riou's group, he is sided with his son Klaus and his stats are- Attack 7 and Defense 16. When he is sided with Riou's group his stats are bigger than the other characters even to put each of characters in both attack and defense stat. His ability in the war tactics was Heavy Armor that makes his opponent to damage him up to three hits instead of two. He is the second character to have a cavalry in Riou's group after Flik."
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
          "Valeria is one of two choices offered by Lepant, along with Kasumi, as a recruitment option in Gregminster when forging an alliance with Toran.",
          "Choosing her will grant you the following:",
          "#Innate Cavalry ability for map battles",
          "#Better defense for greater staying power",
          "#Can equip Shields (Mangosh for Counter ability or a good shield with higher defense, such as a Silver Shield)"
        ],
        "overall": [
          "Valeria is a skilled front line fighter. Valeria is famous for being one of a few characters that are able to break the damage limit put into the game by the designers."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "6"
        },
        "rune": {
          "attached": [
            "*Head - No Slot",
            "*R. Hand - Falcon Rune (permanently attached.)",
            "*L. Hand - None"
          ],
          "recommended": [
            "Valeria can equip the Viper Rune with her weapon type. A Double Strike Rune is also great on her."
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
          "Rival Attack with Anita, which deals 3x damage to one enemy, unbalancing Valeria."
        ]
      }
    },
    "tomo": {
      "role": {
        "recruitment": [
          "Take Tsai back to his house in Ryube Forest after recruiting either Valeria or Kasumi. After a scene, Tomo will join you."
        ],
        "overall": [],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Unicorn Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Unicorn Rune and Earth Rune"
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
          "Tomo can participate in the Dad and Daughter Attack."
        ]
      }
    },
    "feather": {
      "role": {
        "recruitment": [
          "Defeat the griffins enemies in Forest Village when your castle is at level 3. If the player wins this battle, use one of Badeaux's Listening Crystals. If the player loses this battle, Feather can't be recruited, but Ayda can still be recruited (this proves that Feather is no longer mandatory in the 108 Stars of Destiny and can choose 2 of 3 available beasts between Feather, Abizboah, and Sigfried)."
        ],
        "overall": [],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Shining Wind Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Strike Rune, Fury Rune or Balance Rune"
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
          "Feather can participate in the Beastmaster Attack and Double Monster Attack."
        ]
      }
    },
    "sigfried": {
      "role": {
        "recruitment": [
          "Go through the Kobold Forest with a pure maiden in the party. One of Badeaux's Listening Crystals has to be used, and Hix and Tengaar must be recruited. Most young females are considered pure maidens.",
          "Here a list of characters that can be brought to recruit Siegfried:",
          "* Ayda",
          "* Eilie",
          "* Karen",
          "* Kasumi"
        ],
        "overall": [],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Blessed White Lady Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Lightning Rune, and Resurrection Rune"
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
          "Sigfried can participate in the Beastmaster Attack and Double Monster Attack."
        ]
      }
    },
    "sierra-mikain": {
      "role": {
        "recruitment": [
          "Sierra joins automatically after defeating Neclord."
        ],
        "overall": [],
        "weapon": {
          "type": "Claws",
          "range": "S",
          "startingLevel": "10"
        },
        "rune": {
          "attached": [
            "*Head - Darkness Rune",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Darkness Rune and Lightning Rune",
            "Or Double Strike Rune and Fury Rune for the Servant Attack"
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
          "Sierra can participate in the Servant Attack."
        ]
      }
    },
    "hauser": {
      "role": {
        "recruitment": [
          "Hauser joins automatically after defeating Neclord in Tinto."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "11"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "**Double Beat Rune"
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
          "None."
        ]
      }
    },
    "jess": {
      "role": {
        "recruitment": [
          "After defeating Neclord, accept his apology.",
          "Note: Do not reject his apology, or you will not be able to recruit him again."
        ],
        "overall": [
          "Jess is a military support character. ATK+2 DEF+0.",
          "Jess is a military support character and like both Klaus and Boris, he has an evade skill which he tries to defend from strong enemies with high offense.",
          "When using his evade skill he says:",
          "Original:",
          "Remastered:",
          "\"I see their plan, and we'll avert their offense!\""
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
          "After defeating Neclord in Tinto, return to the Tinto Pass and take the lower path. You'll find a clearing with an unused campfire and Georg Prime staring off in the distance. Speak with him and either choose \"Yeah\" or \"I can't pay you with money\" and Georg Prime will join your team."
        ],
        "overall": [
          "Georg Prime is a powerhouse of a fighter. He has high attack power and is incredibly fast. He will usually join the group around level 60 and his Killer Rune also helps him do higher damage."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "12"
        },
        "rune": {
          "attached": [
            "Georg Prime comes equipped with a Killer Rune attached to his right hand."
          ],
          "recommended": [
            "Attach a Rage Rune or Thunder Rune onto his weapon to increase his damage significantly."
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
          "Georg Prime has no known Unite Attacks."
        ]
      }
    },
    "killey": {
      "role": {
        "recruitment": [
          "Before defeating Luca Blight, you can find him outside the trade shop in South Window. Tell him about Alex and then return to headquarters. You find him in the item shop at your castle arguing with Alex. After those events find him again in South Window and ask him to join. You can find him even earlier in South Window after the scene with Jowy Atreides and Sasarai, but you must have your castle at level 3.",
          "*Killey can be brought to Gregminster to help recruit Lorelai. A scene plays out between them reminiscing Lorelai's \"tip\" that landed him in prison on the Queendom of Falena."
        ],
        "overall": [
          "Early on, Killey is one of such characters who is the jack of all trades, master of none. His stat growth is pretty balanced, but nothing outstanding, with slightly lesser stats in attack than his defenses. His Hit Points are quite mediocre however, making staying at the back row a better choice. Despite his average attributes, Killey is one of the very few characters that can equip all 3 rune slots, which is where Killey really comes into his own. Therefore, he can be geared as a spellcaster or even better, a pure physical attacker, giving Killey extreme potential for damage and versatility in the late game. The best choice for Killey would be to equip a Fury Rune, a Double-Beat Rune and a Double-Strike Rune and see the amount of damage he can dish on the enemies."
        ],
        "weapon": {
          "type": "Dual Swords",
          "range": "M",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "Given Killey is one of the very few characters in the game who has access to all three available rune slots, he has the potential to be one of the most potent and hardest hitting fighters in the game when equipped with the Double-Beat Rune, Double-Strike Rune, and Fury Rune. As a result, he can potentially deal even significantly more damage than the likes of Viktor and Riou. With a full physical rune setup, a weapon embedded rune that grants physical damage bonus like the Friendship Rune and the Exertion Rune is also greatly recommended."
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
          "Killey has no known unite attacks."
        ]
      }
    },
    "pesmerga": {
      "role": {
        "recruitment": [
          "Talk to him in Cave of the Wind after defeating the Bone Dragon. The player must have recruited over 100 Stars of Destiny."
        ],
        "overall": [
          "Once again, Pesmerga returns as a powerful ally with high stats in Strength, HP, and Defense. His one open Rune slot and one open equipment slot means he has extremely limited customization options, but his high stats and good equipment still keeps him as one of the top fighters. He still needs a speedy ally with a Spark Rune to overcome his lackluster speed stat. His permanently embedded Rage Rune gives his weapon a fire elemental property, but also increases his high attack power even more. His magic stat has also been given a modest boost that makes him more flexible, but the player may still want to concentrate on his melee skills over magic."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "14"
        },
        "rune": {
          "attached": [
            "Pesmerga comes with a Counter Rune attached and a Rage Rune permanently embedded into his weapon."
          ],
          "recommended": [
            "Fury Rune, Killer Rune, Double Beat Rune, Double Strike Rune, or Titan Rune"
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
          "Pesmerga has no Unite Attacks."
        ]
      }
    },
    "abizboah": {
      "role": {
        "recruitment": [
          "Obtain the Listening Crystals fron Badeaux. Go to Tinto Mines and speak to him at the lake."
        ],
        "overall": [],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
        },
        "rune": {
          "attached": [
            "*Head - Blue Drop Rune (Permanently attached)",
            "*R. Hand - N/A",
            "*L. Hand - N/A"
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
          "Head Up!! and Double Kraken Attack"
        ]
      }
    },
    "mukumuku": {
      "role": {
        "recruitment": [
          "There are two ways to recruit Mukumuku:",
          "#Examine the large tree behind Genkaku's Dojo in Kyaro three times before meeting Nanami.",
          "#Wander the path from Greenhill to the Muse/Greenhill Border until he enters your active party. There must be a free spot in the party, and chances are higher if less people are in it. A True Holy Rune and a Champion's Rune can speed up the time it takes to get him in the party. Also, note that battles are not required, but rather standing still for over 30 minutes makes the chances better. This way is not recommended for the impatient, but is required for the remaining squirrel characters."
        ],
        "overall": [
          "Despite his appearance, Mukumuku has very solid stats, as all monster-type characters. Mukumuku excels at strength, defense and speed, which compensates the fact he cannot equip any type of gear. Also, he is a long-range character, which can keep him safe in the back row, as his HP is lower than most monster characters."
        ],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
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
          "Mukumuku can participate in the 5 Squirrel Attack."
        ]
      }
    },
    "rikimaru": {
      "role": {
        "recruitment": [
          "Find him collapsed in Ryube and offer to buy him dinner for 3000 potch. If you missed him in Ryube, Rikimaru could be found later in Coronet, again paying for his 3000 potch meal."
        ],
        "overall": [
          "Rikimaru is possibly the first character that Riou can recruit as a very early-game physical heavy hitter and tank (If Riou pays for his dinner in Ryube) with his HP skyrocketing as he levels. He wields a two handed sword in battle."
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
            "*Rikimaru is a basic heavy attacker, with a lot of Hit Points. His One-Rune slot limitation does limit his potency however. Double Beat Rune (or Fury Rune if unite attack with Amada). And because of this limitation and partly because as a physical attacker, embedding runes to his weapon that benefits it are almost always a must if the player is using him."
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
          "Rikimaru can participate in the Manly Attack. With a Cup of Promise equipped to either him or Amada, the unite attack has a chance to inflict Knockdown on targets."
        ]
      }
    },
    "millie": {
      "role": {
        "recruitment": [
          "Speak to her in Ryube and help her retrieve Bonaparte. Go to the right in the forest, chase Bonaparte and fight him. Once defeated, she will join."
        ],
        "overall": [],
        "weapon": {
          "type": "Boomerang",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "Millie has a personal rune, the Groundhog Rune. She can only use it once she is recruited and it only works once per battle.",
            "*Head - None",
            "*R. Hand - Groundhog Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Millie excels with the Fire Rune and Lightning Rune, but she's good with all elementals, except the Water Rune. As for alignment runes, Millie is good with the Darkness Rune, but poor with Resurrection Rune."
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
          "Millie can participate in the Pretty Girl Attack with Meg and Tengaar."
        ]
      }
    },
    "kinnison": {
      "role": {
        "recruitment": [
          "Find the bird's nest in Ryube Forest and place it back in the tree. Leave the forest and return to the same spot after several minutes. Choose the first option, and he and Shiro will join.",
          "Note: Do not choose the second option, \"I can't say...\", when given the two options. If you do, they will leave and you will not be able to recruit them again."
        ],
        "overall": [],
        "weapon": {
          "type": "Bow",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Double Beat Rune, Great Hawk Rune, and Hazy Rune."
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
          "Kinnison can participate in Loyal Dog Attack and Bow Attack."
        ]
      }
    },
    "shiro": {
      "role": {
        "recruitment": [
          "Place the bird back in its nest in Ryube Forest. Return after a few minutes have passed and talk to Kinnison and Shiro. Choose the first option and they will join."
        ],
        "overall": [
          "Being a monster/animal type, Shiro has very solid stats, excelling in strength, defense and speed, which compensates for the fact he cannot equip any type of gear. Shiro ends up being one of the fastest characters in the game, with speed ratings that put him on par with Riou, Nanami, Kasumi, and similar agility specialists."
        ],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Counter Rune, Fury Rune, Spark Rune, or Double Beat Rune"
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
          "Shiro can participate in Loyal Dog Attack and Bow Wow Attack."
        ]
      }
    },
    "zamza": {
      "role": {
        "recruitment": [
          "There are two ways to recruit Zamza:",
          "#Speak to Zamza in the inn in Toto Village with Nanami in your party.",
          "#He can also be recruited in South Window Inn later in the game, if you missed him in Toto Village. Once again, Nanami must be in the party."
        ],
        "overall": [
          "Zamza is a very well rounded character, with no particular weakness. However, this also means that he does not excel at many skills either. His strongest point is his high amount of hit points, which is needed because of his Equipment Class. Since his personal rune, the Fire Dragon Rune, has infinite attacks, it is adviced to embed a Fire Sealing Rune on Zamza to utilize its power fully, as it damages Zamza as well. It is advised to embed the Fire Lizard Rune on his weapon, to get max damage. Another Rune Zamza has high affinity with is the Fire Rune or Rage Rune, but his mediocre magic stat make him an unfitting choice for a pure magician (This can be remedied through the usage of Stones of Magic obtained through the Rope Climbing Minigame and the Game Over trick)."
        ],
        "weapon": {
          "type": "Fists",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Fire Dragon Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fire Rune, Rage Rune, Fire Sealing Rune, and Fire Lizard Rune"
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
          "Zamza has no known unite attacks."
        ]
      }
    },
    "apple": {
      "role": {
        "recruitment": [
          "Apple joins automatically during the events at the Mercenary Fortress."
        ],
        "overall": [
          "Speaking to Apple allows Riou to set arrangement for Army battle units."
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
          "Speak to Tuta in Muse after Jess asks you to spy on the Highland Army."
        ],
        "overall": [],
        "weapon": {
          "type": "Stones",
          "range": "L",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "Medicine Rune"
          ],
          "recommended": [
            "Medicine Rune and Water Rune"
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
          "Tuta has no Unite Attacks."
        ]
      }
    },
    "gilbert": {
      "role": {
        "recruitment": [
          "In order to recruit Gilbert, you must damage his unit during the third major battle. Gilbert must also survive this battle."
        ],
        "overall": [
          "Gilbert is a leader unit with +7 ATK and +8 DEF."
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
          "Joins automatically in Coronet after securing the passage to South Window."
        ],
        "overall": [],
        "weapon": {
          "type": "Throwing Knifes",
          "range": "L",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fire Rune, Lightning Rune, Earth Rune and Water Rune"
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
          "Eilie can participate in the Circus Attack with Rina and Bolgan."
        ]
      }
    },
    "rina": {
      "role": {
        "recruitment": [
          "Rina joins automatically in Coronet after securing passage to South Window."
        ],
        "overall": [
          "Rina is an L Ranged fighter, which means she can attack from all positions in the party. Rina has 3 Rune slots completely free, which is a rarity amongst most characters. With those 3 rune slots, you can make her quite the fighter from the back row, which again, is a rarity. However, many players would argue that her true power is in her magic, although her only above average rune affinity is water. Rina can also affix the Blue Gate Rune, one of twenty characters in the game. Rina also has higher magic defense than average, so when placed in the back row of a party, Rina can last long in battle and deal great damage."
        ],
        "weapon": {
          "type": "Darts",
          "range": "L",
          "startingLevel": "1"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Fire Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Blue Gate Rune, Lightning Rune, and Water Rune",
            "Rina is a very well rounded magician. She can equip every magical rune, and has a C in all, except Water, where she has a B."
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
          "Rina can participate in the Circus Attack and the Beauty Attack."
        ]
      }
    },
    "bolgan": {
      "role": {
        "recruitment": [
          "Bolgan joins automatically in Coronet after securing passage to South Window."
        ],
        "overall": [
          "Bolgan only has access to the Fire Breath Rune and overall his stats range from mediocre to bad. He is not unusable but there are several alternatives that are leagues above him."
        ],
        "weapon": {
          "type": "Fists",
          "range": "S",
          "startingLevel": "2"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Fire Breath Rune (Permanently attached)",
            "*L. Hand - N/A",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Bolgan only has 1 rune slot and the player can not remove his Fire Breath Rune leaving no room for customization."
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
          "Bolgan can participate in Circus Attack, Servant Attack, and Flash Attack."
        ]
      }
    },
    "leona": {
      "role": {
        "recruitment": [
          "Leona joins automatically after gaining your headquarters."
        ],
        "overall": [
          "Talking to Leona allows you to change your party."
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
          "Gengen joins automatically after returning to the Mercenary Fortress."
        ],
        "overall": [
          "Gengen is the king of average. While not really being being bad at everything, he's not great either and often other characters will fill specific roles better. His unite atack with Shiro can be useful too. Overall, Gengen is good for the early to mid game, but will quickly get outclassed. Still, he will never be an awful choice in a party if you really want to keep him around. As a plus, he can be loaded up with armor, a shield, and necklaces to tank hits in the front row if needed. One of his worst flaws is his low magic defense, which is liable to get him knocked out more easily against enemy magic users and special attacks."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "3"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
          ],
          "recommended": [
            "Barrier Rune"
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
          "Gengen can participate in the Kobold Attack (with a small chance for alternative version as 100 Kobold Attack) and the Bow Wow Attack."
        ]
      }
    },
    "barbara": {
      "role": {
        "recruitment": [
          "Barbara helps out from the beginning but rejoins for good after defeating Solon Jhee."
        ],
        "overall": [
          "Barbara runs the storehouse in the HQ."
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
          "Huan joins automatically after defeating Solon Jhee."
        ],
        "overall": [
          "Huan is the doctor in the HQ."
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
          "Speak with the woman near the entrance of Kuskus to learn about the bandits attacking women. Exit and return with an all-female party and walk across the bridge. After a brief scene Oulan will save you and then can be asked to join your group.",
          "*You can get Oulan prior to obtaining your headquarters, as soon as you're able to form an all female party."
        ],
        "overall": [],
        "weapon": {
          "type": "Fists",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Angry Dragon Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fury Rune"
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
          "Oulan can participate in the Tackle Attack."
        ]
      }
    },
    "taki": {
      "role": {
        "recruitment": [
          "Speak to Taki three times after reaching Lakewest and she will join you. Taki can be recruited a bit earlier through the Matilda Glitch, As soon as Highland have taken over Muse. Player should travel through the path between Greenhill-Matilda then Two-River (You can also recruit Hans in the 2nd floor of Inn in the Human's District with this method) to finally reach Lakewest. Tetsu is also possible to recruit."
        ],
        "overall": [
          "Taki is a gossiper and talking to her will give you a hint about how to make the story progress and how to recruit certain characters."
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
          "Hans can be found in the Inn in Two River. If you ask him to give you money, it will take him a while to get it and you'll have to return to the Inn to get him.",
          "Hans can be recruited a bit earlier through the Matilda Glitch, As soon as the Highland Army have taken over Muse. Player should travel through the path between Greenhill-Matilda to Two River and recruit him on the 2nd floor of the Inn, He should already open his shop as soon as the player defeated the boss in the North Window Castle."
        ],
        "overall": [
          "Hans opens an Armor Shop in the HQ."
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
          "Speak with Tetsu at his house in Lakewest while under the toasty status effect. You can get this from eating Fried Tacos purchased in the Kobold section in Two River City.",
          "Tetsu can be recruited a bit earlier through the Matilda Glitch. As soon as the Highland Army has taken over Muse, the player should travel through the path between Greenhill-Matilda then Two-River (You can also recruit Hans in the 2nd floor of Inn in the Human's District with this method) to finally reach Lakewest."
        ],
        "overall": [
          "Tetsu will open a bath in your castle."
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
          "Find Hai Yo in your castle after the events in Two River, he should be on a balcony the opposite direction of the mountain view, where Yoshino does laundry. Once you find him, talk and choose the first option to have him join."
        ],
        "overall": [
          "For most of the game, Hai Yo's stat will all be under average to average, and he'll be forced into the front line due to his S range, making him a bad choice most of the time. However, in the later game he should open a 3rd rune slot allowing you to customize him more, along with a free weapon slot and 3 accessories slot open. With the right set up he can then become a powerhouse, dealing more damage than the likes of Pesmerga. This, however, will require a lot of training and diversion of rare resources toward him that would probably best used on Killey or Sheena who will fill that heavy powerhouse even better due to their superior natural stats."
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
          "Hai Yo has no known unite attacks."
        ]
      }
    },
    "richmond": {
      "role": {
        "recruitment": [
          "After obtaining and defending the headquarters, Richmond can be recruited in Radat. Accept his challenge and lose the coin flip, then speak to the customer in the tavern that is closest to the door, and he will give a coin to have Richmond use. Bring Richmond the coin and he will join."
        ],
        "overall": [
          "Richmond is the Investigator in Suikoden II. After recruiting him, he can perform investigations on characters for a fee to obtain more information about the character. Richmond takes approximately 10 minutes on each investigation.",
          "Investigations =",
          "'''Richmond's Investigations",
          "Secret #1 =",
          "Name:Richmond",
          "Age: 35",
          "From:South Window",
          "Position:Special Forces"
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
          "Defeat him in a Duel at Radat after agreeing to take Fitcher to Two River City."
        ],
        "overall": [
          "Amada is a solid frontline option during the earlier parts of the game due to high HP and strength. Once you progress further through the game you will find that his access to only 1 rune slot limits him greatly when compared to other options."
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
            "Amada is a decent frontline unit during the early stages of the game however he is limited to only have 1 rune slot which hinders his late game viability. He will make good use of the Unicorn Rune or Double-Beat Rune."
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
          "Amada can participate in the Manly Attack with Rikimaru."
        ]
      }
    },
    "alex": {
      "role": {
        "recruitment": [
          "Speak to Alex and Hilda in the Inn at South Window after obtaining your castle."
        ],
        "overall": [
          "Alex opens an item shop in your castle."
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
          "Speak to Hilda and Alex in the Inn at South Window after getting your castle."
        ],
        "overall": [
          "Hilda runs the Inn at the HQ."
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
          "After you obtain your headquarters, you can find Adlai in South Window. You must get him a Sacrificial Jizo, a Wooden Shield, and a Wind Crystal in that order. All except the Sacrificial Jizo can be found in South Window. When you give him the Wind Crystal, you must throw it at him instead of handing it to him. Adlai will praise you for standing up to him and join your army."
        ],
        "overall": [
          "Adlai sets up an elevator at Dunan Castle."
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
          "Once you first enter Greenhill after it is captured, confide to Emilia your true reason for being there. If you do, then she will join you after you escape Greenhill. If you do not, you'll have to wait until you liberate Greenhill to recruit her."
        ],
        "overall": [
          "Emilia is the castle Librarian. She will stay at the library and she will receive the books that Riou will brought to her.",
          "====Old Book Locations====",
          "*Old Book Vol. 1 - Genkaku's room when you visit Kyaro.",
          "*Old Book Vol. 2 - Chest inside Sindar Ruins.",
          "*Old Book Vol. 3 - Rare find at item shop in South Window.",
          "*Old Book Vol. 4 - Bookshelf in Muse Meeting Hall where Jess gives you the Highland Uniforms. (missable)",
          "*Old Book Vol. 5 - In the 2nd room on the left on the first floor in Greenhill Academy.",
          "*Old Book Vol. 6 - Speak to a person in Forest Village trading post."
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
          "Speak to him at his house in the Kobold District in Two River with Gengen in your active party. Gabocha will follow you back to your castle."
        ],
        "overall": [
          "Most of Gabocha stats are poor to average, only being okay in luck and speed. His unite attack with Gengen has a 20% chance of being good, but will only deal 1x damage 80% of the time to a single enemy with Gabocha always being unbalanced therefor isnt really worth it. Unless you find him so cute you just have to use him, Its better to use another L range character."
        ],
        "weapon": {
          "type": "Slingshot",
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
          "Gabocha can participate in the Bow Wow Attack, the Kobold Attack, and the 100 Kobold Attack."
        ]
      }
    },
    "sid": {
      "role": {
        "recruitment": [
          "Once your castle is at Level 2, find Sid in his room behind the waterfall in the Two River Sewers with Chaco in your party and he will join you."
        ],
        "overall": [
          "Sid is similar to Chaco in terms of play style and the fact he also gains access to all 3 runes as he levels up. The key difference is that Sid is a glass cannon. He trades physical and magical defense attributes for significantly higher attack. With the 3 rune setup, he has huge potential to hit extremely hard. However care must be taken as Sid cannot really take much punishment."
        ],
        "weapon": {
          "type": "Spear",
          "range": "M",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - Waking Rune"
          ],
          "recommended": [
            "Resurrection Rune, Darkness Rune, and Unicorn Rune."
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
          "Sid can participate in the Winger Attack."
        ]
      }
    },
    "jeane": {
      "role": {
        "recruitment": [
          "After the quest in Greenhill City, make sure your Castle Level is 2 and speak with Jeane at the Rune Shop at Two River City."
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
          "Speak to Shilo in the Inn in Lakewest after the events in Two River. Win 5000 potch from him in Chinchirorin."
        ],
        "overall": [],
        "weapon": {
          "type": "Darts",
          "range": "L",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - None",
            "*L. Hand - N/A"
          ],
          "recommended": [
            "Killer Rune"
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
          "Shilo has no known unite attacks."
        ]
      }
    },
    "yuzu": {
      "role": {
        "recruitment": [
          "Yuzu can be found in Kobold Village after recruiting Hix and Tengaar and after the events in Greenhill. Help Yuzu find her three missing sheep and she'll gladly help you out. The sheep are at the end of the Kobold Forest, where Sigfried was. Once all of them are retrieved, she will join you."
        ],
        "overall": [
          "Yuzu manage the Ranch at the HQ, and take care of the animals there. Any animal you find, bring it to her, and they will be added to the farm. These animals provide meat to be used at Hai Yo's Restaurant.",
          "Animal Location=",
          "Calf",
          "*Bought from a boy by the road in Highway Village.",
          "*Bought from a guy with a hat near the entrance to Drakemouth Village.",
          "*Bought from a boy by the Inn in Highway Village, after Rockaxe has been liberated.",
          "Lamb",
          "*Yuzu will have this one by default."
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
          "Shin joins automatically after the events in Greenhill."
        ],
        "overall": [
          "Shin comes in with good physical strength. His real value lies in his high luck and tech, allowing him to deal a lot of critical, counters, status effect, as well as a good dodge rate, which comes in handy against his sub par defense, both physical and magical. In other words, he is a good front line glass canon. Give him a Killer Rune and cast Clay Guardian on him to increase his pros while diminishing his cons and making him a solid character to have."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Spider Slay Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Killer Rune"
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
          "Shin can participate in the Swordsman Attack with Genshu."
        ]
      }
    },
    "meg": {
      "role": {
        "recruitment": [
          "In order to recruit Meg, speak to her at the Muse-Greenhill Border when the HQ is at least at Level 2."
        ],
        "overall": [
          "Meg is still a solid back row fighter, with decent physical and magic power. Meg usually reaches her fourth rune level (100+ magic skill) at level 60. Equipped with a Lightning Rune/Thunder Rune or a Wind Rune/Cyclone Rune, she can cause quite a bit of damage because of her affinity with both runes. Meg has the highest Luck stat in the game, and can easily top 250 at level 60 if built correctly. This luck stat makes her one of the better characters to have a Hunter Rune equipped, as a normal tactic is to cast Wind of Sleep, whose success is based partially on luck. Meg can equip robes and lighter equipment, but cannot equip the heavier kinds like chain and armors. She does not wear a shield, just as before. She has a Luck Ring equipped, which cannot be taken off. While she can make a nice healer with a Water Rune or a Flowing Rune in Suikoden, she loses this ability in Suikoden II because of her poor speed."
        ],
        "weapon": {
          "type": "Throwing Knife",
          "range": "L",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "*Head - No Slot",
            "*R. Hand - Trick Rune",
            "*L. Hand - Water Rune"
          ],
          "recommended": [
            "Meg's equipped runes make her a pretty balanced character, and can make her a decent healer right after recruitment. However, later in the game, it is advisable to equip her with a Lightning or Wind Rune, because of her high skill with those runes. Do not equip Earth, Fire or Resurrection Runes on Meg in Suikoden II, as she has a 20% chance of backfiring with them.",
            "Meg affinities are:",
            "Darkness : C Earth : E Fire : E Lightning: A Resurrection: E Water : C Wind : A"
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
          "Meg can participate in the Trick Attack."
        ]
      }
    },
    "gadget": {
      "role": {
        "recruitment": [
          "After the events in Two River, find Meg and Gadget at the Muse-Greenhill Border. After some data analyzing and talking, they will join Riou."
        ],
        "overall": [
          "Gadgets is a great character for the the mid-game. Most of his stats are above average to great in order to make up for the fact that he cannot equip any gear. His defense is superior to the likes of even Humphrey making him a great damage sponge for the front line. His attacks are descent but he gets outshined in the offense department once other characters get better sharpened weapons and get to hit multiple times. His unite attack with Meg has no drawback like unbalance making it for a good aoe skill. His main drawback comes from the fact that he cannot equip any item, removing any utility or variety to him, making him a one trick... barrel."
        ],
        "weapon": {
          "type": "N/A",
          "range": "N/A",
          "startingLevel": "N/A"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - None",
            "*L. Hand - None"
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
          "Gadget can participate in the Trick Attack, which could be powered up if Meg is equipped with the Lubricating Oil."
        ]
      }
    },
    "wakaba": {
      "role": {
        "recruitment": [
          "Speak to Wakaba in the Forest Village after the events in Two River."
        ],
        "overall": [
          "Wakaba is a solid frontline fighter with decent attack power and high speed, tech and luck attributes. Despite having slightly lower defensive attributes, this weakness is offset with her having extremely high hit points, allowing her to function as a viable tank."
        ],
        "weapon": {
          "type": "Kicks",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - White Tiger Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fire Rune"
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
          "Wakaba can participate in the Twin Fighter Attack."
        ]
      }
    },
    "tony": {
      "role": {
        "recruitment": [
          "Speak to Tony in Forest Village after forming an alliance with Two River City."
        ],
        "overall": [
          "Tony open a farm and grows crops that are used for cooking at the castle Headquarters."
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
          "Viki appears in the Path to Matilda, where she can again be recruited just by speaking to her."
        ],
        "overall": [
          "Viki is a powerful magic rune user and a good addition to the battle party, if you are very lucky. It is rather risky to use spells with her, because she has a 20% chance of backfiring with every spell cast. This can damage your group badly, because of Viki's high magic skill. She's a bit more limited with rune customization over some of the other mages due to her Blinking Rune being permanently attached to a slot."
        ],
        "weapon": {
          "type": "Rod",
          "range": "S",
          "startingLevel": "5"
        },
        "rune": {
          "attached": [
            "Viki has her permanently attached Blinking Rune."
          ],
          "recommended": [
            "With her magic power, any magic rune is recommended, as well as a Blue Gate Rune on her forehead.",
            "Rune Affinity =",
            "Viki has skill E in every rune, which means she damages 20% more, but also has a chance of backfiring."
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
          "Head Up!! teleports Abizboah or Rulodia on to one enemy for 2x damage, unbalancing the octopus."
        ]
      }
    },
    "futch": {
      "role": {
        "recruitment": [
          "Speak to Humphrey at the Inn in Highway Village. Spend the night. Leave the Inn, see a scene, and agree to help him on Mt. Rakutei.",
          "Note: This can be done early in the game using the Matilda trick."
        ],
        "overall": [],
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
            "Unicorn Rune and Wind Rune"
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
          "Futch can participate in the Pretty Boy Attack, translated as Cutie Boy Attack"
        ]
      }
    },
    "miklotov": {
      "role": {
        "recruitment": [
          "Joins automatically after the mission in Rockaxe."
        ],
        "overall": [],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "9"
        },
        "rune": {
          "attached": [
            "*Head - None",
            "*R. Hand - Knight Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Fire Rune"
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
          "Miklotov can participate in the Knight Attack and the Pretty Boy Attack, which is really the Fancy Lad Attack."
        ]
      }
    },
    "camus": {
      "role": {
        "recruitment": [
          "Joins automatically along with Miklotov after your mission to Rockaxe."
        ],
        "overall": [
          "Camus is a well rounded character apart from his speed which is a bit lacking. His stats lean towards being physical attacker however his permanently attached Rage Rune prevents him from using the Double-Beat Rune and Fury Rune combo."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [
            "*Head - N/A",
            "*R. Hand - Rage Rune (Permanently attached)",
            "*L. Hand - None (Acquired at level 47)",
            "*Weapon - No rune attached."
          ],
          "recommended": [
            "Camus has a Rage Rune permanently equipped. Surprisingly he has a higher affinity for wind magic than fire magic so equipping a Wind Rune which would eventually be replaced with a Cyclone Rune is not a bad idea. Otherwise you could equip a Double-Beat Rune or Fury Rune to make use of his high strength."
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
          "Camus can participate in the Knight Attack and the Pretty Boy Attack which is really the Fancy Lad Attack."
        ]
      }
    },
    "klaus-windamier": {
      "role": {
        "recruitment": [
          "Klaus is recruited automatically along with his father Kiba after you defeat them in battle."
        ],
        "overall": [
          "He is sided with his father Kiba Windamier in the Highland group to make their stat into Attack 7 and Defense 16. When he is sided with Riou's group, he has an evade skill similar to Jess and Boris Wizen, and also has a Cavalry skill to equip either in Riou and the other groups to have a cavalry sprite.",
          "When he uses his evade skill he will say:",
          "Original:",
          "\"Be calm. Move with the enemy.\"",
          "Remastered:",
          "\"Be calm and deflect their blows.\""
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
          "Kasumi is one of two choices offered by Lepant, along with Valeria, as a recruitment option in Gregminster when forging an alliance with the Toran Republic."
        ],
        "overall": [
          "She's got average to good stats all around, with superior speed, and access to good unite attacks. Kasumi's downfall is her relative low defense for a front line fighter making her quite susceptible to physical attacks. Keep her healed up and you'll have a very speedy hitter."
        ],
        "weapon": {
          "type": "Claws",
          "range": "S",
          "startingLevel": "7"
        },
        "rune": {
          "attached": [
            "*Head - No Slot",
            "*R. Hand - Shrike Rune",
            "*L. Hand - None"
          ],
          "recommended": [
            "Spark Rune"
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
          "Kasumi can participate in Ninja Attack and Beauty Attack."
        ]
      }
    },
    "sheena": {
      "role": {
        "recruitment": [
          "Sheena also appears in Suikoden II as a Star of Destiny. He joins automatically when President Lepant sends him along as part of the agreement with the Toran Republic."
        ],
        "overall": [
          "Sheena remains a competent swordsman as well as adept at rune use. His stats are also well rounded, equally capable physically or magically. He is another example of a character being the jack of all trades and master of none. Sheena is also unique in that he is one of the very few characters in the game to have three open Rune slots and an open weapon rune slot, meaning that he has deep customization potential. With the right set up, Sheena can be become one of the strongest characters in the game. It is recommended to equip him with a Fury Rune, Double-Beat Rune and Double-Strike Rune."
        ],
        "weapon": {
          "type": "Sword",
          "range": "S",
          "startingLevel": "8"
        },
        "rune": {
          "attached": [],
          "recommended": [
            "Gaining access to all 3 rune slots as he levels opens up his extreme versatility. With that, Sheena has a huge potential to be one of the juggernauts in the game, especially when equipped with a Double Beat Rune, a Double Strike Rune, and/or a Fury Rune, along with an Exertion Rune embedded to his weapon."
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
          "Sheena has no known Unite Attacks."
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
          "She has a Unite with Rina, Karen, or Kasumi (any combination of the 3) called the Beauty Attack which does 0.25% damage to all enemies and has a chance at putting the enemies to sleep.",
          "Also participant of True Beauty Attack with Rina, Karen and Kasumi."
        ]
      }
    },
    "sasuke": {
      "role": {
        "recruitment": [
          "Enter Rokkaku. The entrance is hidden on the 4th screen in the Forest Path to Gregminster. Hanzo will order Mondo and him to join. If you recruited Kasumi, she must be in the active party. If you recruited Valeria, you must have recruited 100 or more Stars of Destiny."
        ],
        "overall": [
          "Sasuke is an L ranged fighter, best put in the back row. Sasuke has incredibly high Technique and Speed stats, but also has a small advantage in hit points compared to other L range fighters, having the same amount as some S range characters. This makes him a better fighter than a magician from the back row, which is rare. He has only one open rune slot, but considering he has no major strengths in magic, it may be worth putting a combat rune there, like a Fury Rune or a Spark Rune instead, to maximize his attack or other skills."
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
          "Sasuke can participate in the Pretty Boy Attack, translated as the \"Cutie Boy Attack\"."
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
          "Mondo can participate in the Ninja Attack."
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
          "Once your castle is at level 3, bring either Shiro or Mukumuku to visit Badeaux on the Forest Path to Matilda Knightdom."
        ],
        "overall": [
          "Badeaux is an all around average character. His magic stat is decent, but his affinity with all magic runes is appalling making him better suited for physical skills and status runes. His real strength comes with his affinity with beast party members, making them berserk and having unites attacks involving them. If you're using a beast heavy party, the player should consider using him. Otherwise, there are better alternatives."
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
          "Badeaux can participate in the Beastmaster Attack."
        ]
      }
    },
    "ayda": {
      "role": {
        "recruitment": [
          "There are two ways to recruit Ayda:",
          "#Joins with Feather in Forest Village. Win the battle and accept Feather in your party. You must use one of the two Listening Crystals in order to get both of them.",
          "#Ayda can still be recruited alone (without Feather) if the player loses the battle against the Griffins. The easy way is to attach Riou a Fire Lizard Rune and bring him to 1 HP. Remove all party members and trigger this battle with this condition and lose on purpose. This event needs to be activated before recruiting Abizboah and/or Sigfried."
        ],
        "overall": [
          "Ayda is frail but she does hit very hard and can also make great use of the Water Rune or Earth Rune to provide support for the party."
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
          "Ayda can participate in the Bow Attack with Kinnison."
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
          "Karen can participate in the Beauty Attack."
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
          "Speak to her at Tinto after you have recruited Jeane and let her know that she is at your headquarters."
        ],
        "overall": [
          "Raura opens and manages a Scroll Shop at the HQ."
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
          "Kahn is recruited automatically after defeating Neclord in Tinto."
        ],
        "overall": [
          "Kahn is a exceptional fighter who can wield two weapons on his arsenal. He normally attacks his enemies using a sword but can deal critical damage his opponent by hitting it with a spear. His Resurrection Rune was his most powerful rune to face undead creatures including zombies, Bone Dragon and Neclord to deal heavy damage but can't be used against non-undead creatures cause it deals weak damage."
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
          "Kahn has no known unite attacks."
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
          "With Wakaba in the party, go to the Inn at Crom Village. After the scene, speak to L.C.Chan behind the Item Shop and he will join.",
          "There is an exploit that allows the recruitment of L.C.Chan before Crom. When Teresa accompanies Riou to sign the peace treaty with Jowy in Muse City, before entering Muse, head north to the Muse-Matilda Border, and push the door far enough to get through. With Wakaba in the party, proceed to Rockaxe Town and head to the inn. A cutscene will follow, and L.C.Chan will run out of the inn. Exit to find him hiding behind the inn. Talk to him and he will join."
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
          "L.C. Chan can participate in the Flash Attack and Twin Fighter Attack."
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
          "Gijimu can participate in the Bandit Attack."
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
          "Lo Wen can participate in the Bandit Attack."
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
          "Koyu can participate in the Bandit Attack."
        ]
      }
    },
    "marlowe": {
      "role": {
        "recruitment": [
          "Marlowe joins automatically after the events in Tinto."
        ],
        "overall": [
          "Marlowe's function is unclear at this time."
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
          "Once your castle has reached level 3, speak to Lebrante in Radat with a Celadon Urn in your inventory."
        ],
        "overall": [
          "Lebrante will open an Appraisal Shop at the HQ."
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
          "Simone can participate in the Narcissus Attack."
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
          "Hoi can participate in the Copycat Attack."
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
          "Gantetsu can participate in Flash Attack."
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
          "Speak to Bob in the Kobold section of Two River after your castle is at level 3 and you have recruited at least 80 stars."
        ],
        "overall": [
          "Bob is a well rounded character capable of dishing out decent magic damage but he excels at dealing physical damage with his werewolf transformation."
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
          "Bob can participate in the Servant Attack."
        ]
      }
    },
    "jude": {
      "role": {
        "recruitment": [
          "Speak to Jude in the Greenhill Academy after the liberation. He will tell you he needs clay. Speak to a man walking in the woods in Forest Village and he will give you clay. Return to Jude and he will join you."
        ],
        "overall": [
          "Jude can sculpt a Guardian Deity for your castle."
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
          "Speak to Tessai in Kuskus with Viktor in your party after you have liberated Greenhill. You must have gained 101 Stars of Destiny beforehand."
        ],
        "overall": [
          "Tessai is the blacksmith in your castle."
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
          "Speak to Genshu at the Coronet docks with anyone's weapon sharped to level 14 or above. Must also have at least 101 stars.",
          "Note: If Tessai does not have the Silver Hammer, recruit and bring Pesmerga in your party, as his sword is level 14 automatically. Genshu is one of the last Stars of Destiny required to get all 108 Stars."
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
          "Genshu can participate in Swordsman Attack with Shin."
        ]
      }
    },
    "vincent": {
      "role": {
        "recruitment": [
          "Speak to Vincent in Radat with Simone in the party, after Greenhill has been liberated."
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
          "Vincent can participate in the Narcissus Attack."
        ]
      }
    },
    "mazus": {
      "role": {
        "recruitment": [
          "Speak to Mazus in the Tinto Mines after liberating Greenhill. You have to have at least 100 recruits, since he is a very proud man.",
          "Note: Mazus is one of the few characters that can be Lv. 99 upon recruiting due to a glitch."
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
          "Mazus has no known unite attacks."
        ]
      }
    }
  }
} as const satisfies Record<string, Record<string, CharacterDetailRecord>>;
