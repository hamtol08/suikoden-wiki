/**
 * Suikoden 관련 뉴스 목록과 뉴스 페이지 문구 데이터를 정의합니다.
 */

export const SUIKODEN_NEWS_ITEMS = [
  {
    date: "Jul 01, 2026",
    title: "Suikoden Live 2026 Focuses on STAR LEAP",
    body: "코나미가 스타 리프 최신 정보를 중심으로 한 환상수호전 라이브 방송을 진행했습니다.",
    href: "https://www.gematsu.com/event/suikoden-live-july-1-2026",
    outlet: "Gematsu",
    tag: "Star Leap",
  },
  {
    date: "Mar 05, 2026",
    title: "Suikoden Anime Trailer Highlights the Suikoden II Adaptation",
    body: "환상수호전 2편 기반 애니메이션의 새 영상과 10월 방영 예정 정보가 공개됐습니다.",
    href: "https://www.gamesradar.com/entertainment/anime-shows/suikoden-anime-trailer-proves-its-a-pitch-perfect-adaptation-of-the-legendary-ps1-rpgs-sequel-but-were-not-sure-it-will-fit-in-all-108-companions/",
    outlet: "GamesRadar+",
    tag: "Anime",
  },
  {
    date: "Apr 24, 2025",
    title: "Suikoden I & II HD Remaster Coming to Nintendo Switch 2",
    body: "리마스터판의 닌텐도 스위치 2 대응 소식과 출시 일정이 정리됐습니다.",
    href: "https://www.gematsu.com/2025/04/suikoden-i-ii-hd-remaster-gate-rune-and-dunan-unification-wars-coming-to-switch-2-on-june-5",
    outlet: "Gematsu",
    tag: "Remaster",
  },
  {
    date: "Mar 04, 2025",
    title: "Suikoden: STAR LEAP Announced for iOS, Android",
    body: "코나미가 모바일 신작 스타 리프를 발표하며 시리즈의 새 전개를 알렸습니다.",
    href: "https://www.gematsu.com/2025/03/suikoden-star-leap-announced-for-ios-android",
    outlet: "Gematsu",
    tag: "Star Leap",
  },
  {
    date: "Aug 27, 2024",
    title: "Suikoden I & II HD Remaster Launches March 6, 2025",
    body: "환상수호전 1·2편 리마스터의 출시일과 플랫폼 정보가 공개됐습니다.",
    href: "https://www.gematsu.com/2024/08/suikoden-i-ii-hd-remaster-gate-rune-and-dunan-unification-wars-launches-march-6-2025",
    outlet: "Gematsu",
    tag: "Remaster",
  },
] as const;

export const NEWS_PAGE_COPY = {
  latestEyebrow: "Latest Dispatch",
  latestCta: "Read Latest",
  topicsEyebrow: "News Streams",
  topicsTitle: "Tracked Topics",
  topicsBody: "시리즈 전개, 리마스터, 애니메이션, 스타 리프 관련 소식을 흐름별로 확인합니다.",
  archiveEyebrow: "News Archive",
  archiveTitle: "All News",
  articleCountSuffix: "건",
  latestDateLabel: "최근 기록",
} as const;

export const SUIKODEN_NEWS_TOPIC_CARDS = [
  ...new Map(
    SUIKODEN_NEWS_ITEMS.map((item) => [item.tag, item]),
  ).entries(),
].map(([tag, latestItem]) => ({
  tag,
  count: SUIKODEN_NEWS_ITEMS.filter((item) => item.tag === tag).length,
  latestDate: latestItem.date,
}));
