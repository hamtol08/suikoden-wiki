import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const sources = [
  {
    game: "suikoden-i",
    pageUrl: "https://game8.co/games/Suikoden-1/archives/504332",
  },
  {
    game: "suikoden-ii",
    pageUrl: "https://game8.co/games/Suikoden-2/archives/504340",
  },
];

const outputRoot = path.join(
  process.cwd(),
  "public",
  "suikoden",
  "characters",
);

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const extractAttribute = (tag, attributeName) => {
  const match = tag.match(new RegExp(`${attributeName}=([\"'])(.*?)\\1`));

  return match?.[2] ?? "";
};

const extractCharacterIcons = (html) => {
  const imageTags = html.match(/<img[^>]+>/g) ?? [];

  return imageTags
    .map((tag) => {
      const alt = extractAttribute(tag, "alt");
      const src = extractAttribute(tag, "data-src") || extractAttribute(tag, "src");

      return {
        alt,
        name: alt.replace(/ Icon$/, ""),
        sourceUrl: src,
      };
    })
    .filter(
      (image) =>
        image.alt.endsWith(" Icon") &&
        image.name &&
        image.sourceUrl.includes("img.game8.co") &&
        image.sourceUrl.endsWith("/show"),
    );
};

const downloadImage = async (image, destination) => {
  const response = await fetch(image.sourceUrl, {
    headers: {
      referer: "https://game8.co/",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${image.name}: ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await writeFile(destination, Buffer.from(arrayBuffer));
};

for (const source of sources) {
  const response = await fetch(source.pageUrl);

  if (!response.ok) {
    throw new Error(`Failed to load ${source.pageUrl}: ${response.status}`);
  }

  const html = await response.text();
  const icons = extractCharacterIcons(html);
  const outputDirectory = path.join(outputRoot, source.game);

  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });

  const manifest = [];

  for (const [index, icon] of icons.entries()) {
    const fileName = `${String(index + 1).padStart(3, "0")}-${slugify(icon.name)}.png`;
    const destination = path.join(outputDirectory, fileName);

    await downloadImage(icon, destination);

    manifest.push({
      id: slugify(icon.name),
      name: icon.name,
      file: `/suikoden/characters/${source.game}/${fileName}`,
    });
  }

  await writeFile(
    path.join(outputDirectory, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  console.log(`${source.game}: ${manifest.length} icons saved`);
}
