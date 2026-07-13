/**
 * 아티클 색인 카드와 소개 문구 데이터를 정의합니다.
 */

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

export const ARTICLE_ARCHIVE_CARDS = [
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
    title: "Items",
    eyebrow: "Inventory Records",
    href: APP_ROUTES.items,
    image: IMAGE_PATHS.suikodenRemaster,
    alt: "Suikoden I and II HD Remaster item archive crop",
    body: "상점, 드롭, 초기 소유자, 봉인구와 장비 효과를 작품별 아이템 기록으로 연결합니다.",
  },
  {
    title: "Monsters",
    eyebrow: "Bestiary",
    href: APP_ROUTES.monsters,
    image: IMAGE_PATHS.worldMap,
    alt: "Suikoden world map monster record crop",
    body: "필드 출현 몬스터와 보스 전투를 출현 위치, 드롭 아이템, 스탯 기준으로 정리합니다.",
  },
  {
    title: "Gameplay",
    eyebrow: "System Records",
    href: APP_ROUTES.gameplay,
    image: IMAGE_PATHS.suikodenRemaster,
    alt: "Suikoden gameplay guide archive crop",
    body: "전투, 일기토, 전쟁 전투, 본거지, 미니게임 흐름을 플레이 기록으로 모읍니다.",
  },
  {
    title: "Timeline",
    eyebrow: "History",
    href: APP_ROUTES.timeline,
    image: IMAGE_PATHS.worldMap,
    alt: "Suikoden timeline world map crop",
    body: "문의 문장 전쟁부터 트란과 듀난의 주요 전쟁, 종족과 학문 기록을 따라갑니다.",
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

export const ARTICLE_INDEX_CARDS = [
  ...FEATURE_CARDS,
  ...ARTICLE_ARCHIVE_CARDS,
] as const;

export const ARTICLE_INDEX_SECTIONS = [
  {
    id: "series",
    eyebrow: "Core Records",
    title: "Series Articles",
    body: "작품별 큰 흐름을 먼저 잡는 입문 색인입니다.",
    cards: FEATURE_CARDS,
  },
  {
    id: "reference",
    eyebrow: "Archive Routes",
    title: "Reference Index",
    body: "인물, 문장, 아이템, 몬스터, 지역, 전투 기록으로 바로 이어지는 상세 색인입니다.",
    cards: ARTICLE_ARCHIVE_CARDS,
  },
] as const;
