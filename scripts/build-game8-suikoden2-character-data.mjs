import { writeFile } from "node:fs/promises";
import path from "node:path";
import iconManifest from "../public/suikoden/characters/suikoden-ii/manifest.json" with {
  type: "json",
};

const pageUrl = "https://game8.co/games/Suikoden-2/archives/494337";
const outputPath = path.join(
  process.cwd(),
  "src",
  "constants",
  "suikoden-ii-characters.ts",
);

const htmlDecode = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const stripTags = (value) =>
  htmlDecode(value)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const splitCells = (row) =>
  [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((cell) => cell[1]);

const extractCharacterLink = (cell) => {
  const linkMatch = cell.match(/<a[^>]+href=(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>([\s\S]*?)<\/a>/);

  if (!linkMatch) {
    return {
      name: stripTags(cell),
    };
  }

  return {
    name: stripTags(linkMatch[4]),
  };
};

const extractRune = (cell) => {
  const text = stripTags(cell);

  return text || "None";
};

const response = await fetch(pageUrl);

if (!response.ok) {
  throw new Error(`Failed to load ${pageUrl}: ${response.status}`);
}

const html = await response.text();
const headerStart = html.indexOf("data-cell=\"character\"");
const tableStart = html.indexOf("<tbody>", headerStart);
const tableEnd = html.indexOf("</tbody>", tableStart);
const tableHtml = html.slice(tableStart, tableEnd);
const rows = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map(
  (match) => match[1],
);

const allCharacters = rows
  .map((row, index) => {
    const cells = splitCells(row);

    if (cells.length < 5) {
      return null;
    }

    const character = extractCharacterLink(cells[0]);
    const id = slugify(character.name);
    const type = stripTags(cells[1]);
    const recruitment = stripTags(cells[2]);
    const rune = extractRune(cells[3]);
    const runeSlots = stripTags(cells[4]) || "-";

    return {
      id,
      game: "suikoden-ii",
      order: index,
      name: character.name,
      star: "Star of Destiny",
      characterType: type,
      recruitment,
      rune,
      runeSlots,
      image: "/suikoden/genso-mark.svg",
    };
  })
  .filter(Boolean);

const detailsById = new Map(allCharacters.map((character) => [character.id, character]));

const characters = iconManifest.map((icon, index) => {
  const details = detailsById.get(icon.id);

  return {
    id: icon.id,
    game: "suikoden-ii",
    order: index + 1,
    name: icon.name,
    star: "Star of Destiny",
    characterType: details?.characterType ?? "Archive Entry",
    recruitment: details?.recruitment ?? "-",
    rune: details?.rune ?? "-",
    runeSlots: details?.runeSlots ?? "-",
    image: icon.file,
  };
});

const source = `export const SUIKODEN_II_CHARACTER_COPY = {
  eyebrow: "Characters",
  title: "Suikoden II",
  body: "Dunan Unification War에 합류하는 108성 및 주요 인물을 영입 흐름, 전투 여부, 룬 정보와 함께 정리합니다.",
  tableTitle: "108 Stars & Character Index",
  detailCta: "View Character Entry",
  backToList: "Back to Suikoden II Characters",
} as const;

export const SUIKODEN_II_CHARACTERS = ${JSON.stringify(characters, null, 2)} as const;
`;

await writeFile(outputPath, source);
console.log(`${characters.length} Suikoden II characters saved to ${outputPath}`);
