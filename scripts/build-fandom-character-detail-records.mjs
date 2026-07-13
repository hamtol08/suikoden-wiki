/**
 * Suikoden Fandom API에서 캐릭터 상세 원문을 수집해 상세 기록 상수 초안을 생성합니다.
 */

import fs from "node:fs/promises";

const API_URL = "https://suikoden.fandom.com/api.php";
const OUTPUT_FILE = "src/constants/character-detail-records.ts";

const GAME_IDS = {
  suikodenI: "suikoden-i",
  suikodenII: "suikoden-ii",
};

const TITLE_OVERRIDES = {
  "suikoden-i:hero": "Tir McDohl",
  "suikoden-ii:hero": "Riou",
  "suikoden-i:mathiu": "Mathiu Silverberg",
  "suikoden-i:kasim-hazil": "Kasim Hazil",
  "suikoden-i:kwanda-rosman": "Kwanda Rosman",
  "suikoden-i:milich-oppenheimer": "Milich Oppenheimer",
  "suikoden-i:sonya-shulen": "Sonya Shulen",
  "suikoden-ii:georg-prime": "Georg",
  "suikoden-ii:freed-yamamoto": "Freed",
  "suikoden-ii:ridley-wizen": "Ridley",
  "suikoden-ii:boris-wizen": "Boris",
  "suikoden-ii:kiba-windamier": "Kiba",
  "suikoden-ii:klaus-windamier": "Klaus",
  "suikoden-ii:sierra-mikain": "Sierra",
  "suikoden-ii:kahn-marley": "Kahn Marley",
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchJson = async (params) => {
  const url = new URL(API_URL);
  Object.entries({
    format: "json",
    origin: "*",
    ...params,
  }).forEach(([key, value]) => url.searchParams.set(key, value));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fandom API failed: ${response.status} ${url.toString()}`);
  }

  return response.json();
};

const readSuikodenIICharacters = async () => {
  const source = await fs.readFile("src/constants/suikoden-ii-characters.ts", "utf8");
  const match = source.match(/export const SUIKODEN_II_CHARACTERS = (\[[\s\S]*?\]) as const;/);

  if (!match) {
    throw new Error("Could not locate SUIKODEN_II_CHARACTERS");
  }

  return new Function(`return ${match[1]};`)();
};

const buildCharacterInputs = async () => {
  const suikodenI = JSON.parse(
    await fs.readFile("public/suikoden/characters/suikoden-i/manifest.json", "utf8"),
  );
  const suikodenII = await readSuikodenIICharacters();

  return [
    ...suikodenI.map((character) => ({
      gameId: GAME_IDS.suikodenI,
      id: character.id,
      name: character.name,
    })),
    ...suikodenII.map((character) => ({
      gameId: GAME_IDS.suikodenII,
      id: character.id,
      name: character.name,
    })),
  ];
};

const normalizeTitle = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const isPrimaryPageTitle = (title) => !title.includes("/");

const resolvePageTitle = async (character) => {
  const override = TITLE_OVERRIDES[`${character.gameId}:${character.id}`];

  if (override) {
    return override;
  }

  const direct = await fetchWikitext(character.name).catch(() => null);

  if (direct?.title && isPrimaryPageTitle(direct.title)) {
    return direct.title;
  }

  const search = await fetchJson({
    action: "query",
    list: "search",
    srsearch: character.name,
    srlimit: "5",
  });
  const results = (search.query?.search ?? []).filter((result) =>
    isPrimaryPageTitle(result.title),
  );
  const normalizedName = normalizeTitle(character.name);
  const exact = results.find((result) => normalizeTitle(result.title) === normalizedName);

  return exact?.title ?? results[0]?.title ?? character.name;
};

const fetchWikitext = async (title) => {
  const parsed = await fetchJson({
    action: "parse",
    page: title,
    prop: "wikitext",
  });

  if (!parsed.parse?.wikitext?.["*"]) {
    return null;
  }

  return {
    title: parsed.parse.title,
    url: `https://suikoden.fandom.com/wiki/${encodeURIComponent(parsed.parse.title.replaceAll(" ", "_"))}`,
    wikitext: parsed.parse.wikitext["*"],
  };
};

const normalizeHeading = (value) => cleanWikiText(value).toLowerCase();

const parseHeadings = (wikitext) => {
  const headings = [];
  const headingPattern = /^(={2,6})\s*(.*?)\s*\1\s*$/gm;
  let match = headingPattern.exec(wikitext);

  while (match) {
    headings.push({
      index: match.index,
      length: match[0].length,
      level: match[1].length,
      title: normalizeHeading(match[2]),
    });
    match = headingPattern.exec(wikitext);
  }

  return headings;
};

const extractSection = (wikitext, heading) => {
  const headings = parseHeadings(wikitext);
  const match = headings.find((section) => section.title === normalizeHeading(heading));

  if (!match) {
    return "";
  }

  const start = match.index + match.length;
  const nextHeading = headings.find((section) =>
    section.index > match.index && section.level <= match.level,
  );

  return wikitext.slice(start, nextHeading?.index ?? undefined).trim();
};

const extractTabValue = (source, label) => {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`${escapedLabel}\\s*=\\s*([\\s\\S]*?)(?=\\n\\{\\{!\\}\\}-\\{\\{!\\}\\}\\n|\\n[A-Z][A-Za-z .]+\\s*=|\\n\\}\\}|$)`, "i");

  return source.match(pattern)?.[1]?.trim() ?? "";
};

const extractNestedTabber = (source, label) => {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const labelPattern = new RegExp(`${escapedLabel}\\s*=\\s*`, "i");
  const labelMatch = labelPattern.exec(source);

  if (!labelMatch) {
    return "";
  }

  const afterLabel = labelMatch.index + labelMatch[0].length;
  const templateMarker = "{{#tag:tabber|";
  const templateStart = source.indexOf(templateMarker, afterLabel);

  if (templateStart < 0) {
    return "";
  }

  const contentStart = templateStart + templateMarker.length;
  let depth = 0;
  let index = templateStart;

  while (index < source.length) {
    if (source.startsWith("{{", index)) {
      depth += 1;
      index += 2;
      continue;
    }

    if (source.startsWith("}}", index)) {
      depth -= 1;

      if (depth === 0) {
        return source.slice(contentStart, index).trim();
      }

      index += 2;
      continue;
    }

    index += 1;
  }

  return "";
};

const extractOrderedTabValue = (source, label, labels) => {
  const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startPattern = new RegExp(`(?:^|\\n)${escapedLabel}\\s*=\\s*`, "i");
  const startMatch = startPattern.exec(source);

  if (!startMatch) {
    return "";
  }

  const start = startMatch.index + startMatch[0].length;
  const nextIndexes = labels
    .filter((candidate) => candidate !== label)
    .map((candidate) => {
      const escapedCandidate = candidate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`\\n\\{\\{!\\}\\}-\\{\\{!\\}\\}\\s*\\n${escapedCandidate}\\s*=`, "i");
      const match = pattern.exec(source.slice(start));

      return match ? start + match.index : -1;
    })
    .filter((index) => index >= 0);
  const end = nextIndexes.length ? Math.min(...nextIndexes) : source.length;

  return source.slice(start, end).trim();
};

const extractTemplateParams = (source, templateNamePattern) => {
  const pattern = new RegExp(`\\{\\{${templateNamePattern}([\\s\\S]*?)\\n\\}\\}`, "i");
  const body = source.match(pattern)?.[1] ?? "";
  const params = {};

  body.replace(/\|([^=\n]+)=([^\n]*)/g, (_, key, value) => {
    params[key.trim()] = cleanWikiText(value);
    return "";
  });

  return params;
};

const cleanWikiText = (value) => {
  return value
    .replace(/<gallery[\s\S]*?<\/gallery>/gi, "")
    .replace(/<ref[\s\S]*?<\/ref>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\{\{#tag:tabber\|/gi, "")
    .replace(/\{\{!\}\}-\{\{!\}\}/g, "\n")
    .replace(/\{\{!\}\}/g, "|")
    .replace(/\{\{[^{}]*\}\}/g, "")
    .replace(/\[\[File:[^\]]+\]\]/gi, "")
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/'''''([^']+)'''''/g, "$1")
    .replace(/'''([^']+)'''/g, "$1")
    .replace(/''([^']+)''/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\[none\]/gi, "-")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n")
    .trim();
};

const splitLines = (value, limit = 8) => {
  const cleaned = cleanWikiText(value);

  if (!cleaned) {
    return [];
  }

  return cleaned
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, limit);
};

const extractCombatRecord = (roleSection) => {
  const combat = extractNestedTabber(roleSection, "Combat");
  const combatLabels = [
    "Overall",
    "Weapon Growth",
    "Runes",
    "Max Lv. Status",
    "Equipment",
    "Unite Attacks",
  ];
  const subTabLabels = ["Attached", "Recommended", "Type"];
  const equipmentTabLabels = ["Default", "Recommended", "Type"];
  const recruitment = splitLines(extractTabValue(roleSection, "Recruitment"), 6);
  const overall = splitLines(extractOrderedTabValue(combat, "Overall", combatLabels), 8);
  const weaponGrowth = extractOrderedTabValue(combat, "Weapon Growth", combatLabels);
  const runes = extractNestedTabber(combat, "Runes");
  const maxLevelStatus = extractTemplateParams(combat, "[^|\\n]*LV\\.99");
  const equipment = extractNestedTabber(combat, "Equipment");
  const uniteAttacks = splitLines(
    extractOrderedTabValue(combat, "Unite Attacks", combatLabels),
    8,
  );

  return {
    recruitment,
    overall,
    weapon: {
      type: cleanWikiText(weaponGrowth.match(/Weapon Type''':\s*([^\n<]+)/i)?.[1] ?? ""),
      range: cleanWikiText(weaponGrowth.match(/Weapon Range''':\s*([^\n<]+)/i)?.[1] ?? ""),
      startingLevel: cleanWikiText(weaponGrowth.match(/Weapon Starting Level''':\s*([^\n<]+)/i)?.[1] ?? ""),
    },
    rune: {
      attached: splitLines(extractOrderedTabValue(runes, "Attached", subTabLabels), 8),
      recommended: splitLines(
        extractOrderedTabValue(runes, "Recommended", subTabLabels),
        8,
      ),
    },
    maxLevelStatus,
    equipment: {
      default: extractTemplateParams(
        extractOrderedTabValue(equipment, "Default", equipmentTabLabels),
        "D\\. Equipment [^\\n]*",
      ),
      recommended: extractTemplateParams(
        extractOrderedTabValue(equipment, "Recommended", equipmentTabLabels),
        "R\\. Equipment [^\\n]*",
      ),
    },
    uniteAttacks,
  };
};

const buildRecord = async (character) => {
  const title = await resolvePageTitle(character);
  await sleep(80);
  const parsed = await fetchWikitext(title);

  if (!parsed) {
    return null;
  }

  const roleSection = extractSection(parsed.wikitext, "Role in the Game");

  return {
    role: extractCombatRecord(roleSection),
  };
};

const serializeRecord = (records) => {
  return `export type CharacterDetailRecord = {
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

export const CHARACTER_DETAIL_RECORDS = ${JSON.stringify(records, null, 2)} as const satisfies Record<string, Record<string, CharacterDetailRecord>>;
`;
};

const main = async () => {
  const inputs = await buildCharacterInputs();
  const records = {};

  for (const [index, character] of inputs.entries()) {
    console.log(`[${index + 1}/${inputs.length}] ${character.gameId}/${character.id}`);
    const record = await buildRecord(character);

    if (!records[character.gameId]) {
      records[character.gameId] = {};
    }

    if (record) {
      records[character.gameId][character.id] = record;
    }

    await sleep(120);
  }

  await fs.writeFile(OUTPUT_FILE, serializeRecord(records));
  console.log(`Wrote ${OUTPUT_FILE}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
