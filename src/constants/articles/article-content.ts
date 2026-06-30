import {
  APP_ROUTES,
  buildCharacterGamePath,
} from "@/constants/app/app-config";
import { IMAGE_PATHS } from "@/constants/app/app-assets";

export const FEATURE_CARDS = [
  {
    title: "Suikoden I",
    eyebrow: "Gate Rune War",
    href: buildCharacterGamePath("suikoden-i"),
    image: IMAGE_PATHS.suikodenI,
    alt: "Suikoden I key visual crop",
    body: "트란 해방군, 적월제국, 소울이터와 108성의 흐름을 정리합니다.",
  },
  {
    title: "Suikoden II",
    eyebrow: "Dunan Unification War",
    href: buildCharacterGamePath("suikoden-ii"),
    image: IMAGE_PATHS.suikodenII,
    alt: "Suikoden II key visual crop",
    body: "신동맹군과 하이랜드 왕국의 전쟁, 빛나는 방패의 문장, 주요 동료 기록을 모읍니다.",
  },
  {
    title: "Suikoden I & II HD Remaster",
    eyebrow: "Core Collection",
    href: APP_ROUTES.gameplay,
    image: IMAGE_PATHS.suikodenRemaster,
    alt: "Suikoden I and II HD Remaster key art",
    body: "두 작품의 리마스터 기준으로 인물, 문장, 지역, 전투 시스템을 연결해 탐색합니다.",
  },
] as const;

export const ARTICLE_INDEX_CARDS = [
  ...FEATURE_CARDS,
  {
    title: "Characters",
    eyebrow: "108 Stars",
    href: APP_ROUTES.characters,
    image: IMAGE_PATHS.articleCharacters,
    alt: "Suikoden character archive portrait collage",
    body: "작품별 108성과 주요 인물의 영입 흐름, 전투 역할, 협력 공격 기록을 연결합니다.",
  },
  {
    title: "Runes",
    eyebrow: "Rune Archive",
    href: APP_ROUTES.runes,
    image: IMAGE_PATHS.articleRunes,
    alt: "Suikoden rune archive orbit diagram",
    body: "일반 문장과 공개된 진정한 문장의 기능, 등장 작품, 관련 기록을 정리합니다.",
  },
  {
    title: "Region Atlas",
    eyebrow: "World Records",
    href: APP_ROUTES.regionAtlas,
    image: IMAGE_PATHS.worldMap,
    alt: "Suikoden world map archive crop",
    body: "트란, 듀난, 하이랜드와 주요 도시의 정치권, 전쟁 무대, 지역 기록을 따라갑니다.",
  },
] as const;
