/**
 * 전역 레이아웃, 카드, 표, 버튼, 페이지별 Tailwind 스타일 상수를 정의합니다.
 */

import { THEME_CLASSES } from "@/constants/app/theme";

export const RESPONSIVE_SHELL = {
  pageMax: "mx-auto max-w-7xl",
  headerInner:
    "mx-auto grid min-h-16 max-w-[96rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 pb-2 pt-[calc(0.5rem+env(safe-area-inset-top))] sm:px-6 lg:px-8",
  bodyGrid:
    "mx-auto grid max-w-7xl grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px]",
  atlasGrid:
    "mx-auto grid max-w-7xl grid-cols-1",
  contentPad: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  rightRailPad:
    "space-y-5 px-4 pb-8 pt-0 sm:px-6 md:px-8 xl:border-l xl:px-6 xl:py-6",
} as const;

export const APP_SHELL_STYLES = {
  html: "h-full antialiased",
  body: "min-h-full flex flex-col",
  page: `min-h-screen ${THEME_CLASSES.page}`,
  safeAreaTop:
    "pointer-events-none fixed inset-x-0 top-0 z-[80] h-[env(safe-area-inset-top)] bg-[#f8f4ec] dark:bg-[#111c2c]",
  safeAreaBottom:
    "pointer-events-none fixed inset-x-0 bottom-0 z-[80] h-[env(safe-area-inset-bottom)] bg-[#f8f4ec] dark:bg-[#09111d]",
} as const;

export const FOOTER_STYLES = {
  shell:
    "mt-auto border-t border-[#d8c9a5] bg-[#f8f4ec] text-[#101827] dark:border-[#604403] dark:bg-[#09111d] dark:text-[#f4f1ea]",
  inner:
    "mx-auto max-w-7xl px-4 pb-[calc(4rem+env(safe-area-inset-bottom))] pt-8 sm:px-6 lg:px-8",
  title: "font-serif text-2xl font-semibold tracking-wide",
  body: "mt-2 max-w-2xl text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  notice: "mt-4 text-xs font-semibold text-[#7a5900] dark:text-[#e9c176]",
} as const;

export const ROUTE_LOADING_STYLES = {
  shell:
    "relative grid min-h-screen place-items-center overflow-hidden bg-[#f6f1e8] px-5 py-10 text-[#101827] dark:bg-[#050b14] dark:text-[#f4f1ea]",
  field:
    "pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(16,24,39,0.07)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 dark:bg-[linear-gradient(90deg,rgba(212,175,55,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(244,241,234,0.07)_1px,transparent_1px)]",
  shade:
    "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,232,0.94),rgba(246,241,232,0.72)_45%,rgba(16,24,39,0.16))] dark:bg-[linear-gradient(180deg,rgba(5,11,20,0.98),rgba(10,20,33,0.88)_48%,rgba(212,175,55,0.10))]",
  stage:
    "relative z-10 grid w-full max-w-3xl place-items-center text-center",
  eyebrow:
    "text-sm font-bold uppercase tracking-[0.28em] text-[#7a5900] dark:text-[#e9c176]",
  title:
    "mt-3 font-serif text-4xl font-semibold text-[#101827] dark:text-[#f4f1ea] sm:text-6xl",
  body:
    "mt-4 max-w-xl break-keep text-base font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  progressStage: "mt-8 w-full max-w-md",
  progress:
    "h-1.5 w-full overflow-hidden rounded-full border border-[#d8c9a5] bg-white/70 dark:border-[#38475f] dark:bg-[#111c2c]",
  progressBar:
    "h-full w-full origin-left rounded-full bg-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.7)] transition-transform duration-150 ease-out",
  progressBarIndeterminate:
    "h-full w-2/3 origin-left rounded-full bg-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.7)] [animation:archive-progress-indeterminate_1.6s_ease-in-out_infinite]",
} as const;

export const NAVIGATION_LOADING_STYLES = {
  overlay: "fixed inset-0 z-[90] overflow-y-auto",
} as const;

export const NOT_FOUND_STYLES = {
  shell:
    "grid min-h-screen place-items-center px-4 py-12 sm:px-6 lg:px-8",
  panel:
    "w-full max-w-3xl rounded-lg border border-[#d8c9a5] bg-white p-6 text-center shadow-sm dark:border-[#604403] dark:bg-[#111c2c] sm:p-8",
  eyebrow:
    "text-sm font-bold uppercase tracking-[0.24em] text-[#7a5900] dark:text-[#e9c176]",
  title:
    "mt-3 font-serif text-4xl font-semibold text-[#101827] dark:text-[#f4f1ea] sm:text-6xl",
  body:
    "mx-auto mt-4 max-w-xl break-keep text-base font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  actions: "mt-7 flex flex-wrap justify-center gap-3",
  primaryLink:
    "rounded bg-[#101827] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#233144] dark:bg-[#d4af37] dark:text-[#261900] dark:hover:bg-[#e9c176]",
  secondaryLink:
    "rounded border border-[#d8c9a5] bg-white/70 px-4 py-3 text-sm font-bold text-[#7a5900] transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#604403] dark:bg-[#172337] dark:text-[#e9c176] dark:hover:bg-[#14243a]",
} as const;

export const CONTAINER_STYLES = {
  header: `sticky top-0 z-50 border-b backdrop-blur ${THEME_CLASSES.header}`,
  hero: "relative overflow-hidden rounded-lg border border-[#c9b77f] bg-[#131b2e] dark:border-[#604403]",
  heroMedia: "relative min-h-[360px] md:min-h-[400px] xl:min-h-[440px]",
  panel: `rounded-lg border p-5 ${THEME_CLASSES.panel}`,
  navyPanel: `rounded-lg border p-5 ${THEME_CLASSES.navyPanel}`,
  newsPanel: `mt-9 overflow-hidden rounded-lg border ${THEME_CLASSES.panel}`,
} as const;

export const HEADER_STYLES = {
  logoLink: "col-start-1 flex min-w-0 shrink-0 items-center gap-3",
  logoMark: "size-11 rounded-md border border-[#d8c9a5] shadow-sm dark:border-[#604403]",
  logoTextGroup: "flex min-w-0 flex-col leading-none",
  logoTitle: "truncate font-serif text-lg font-bold tracking-wide text-[#101827] dark:text-[#f4f1ea]",
  logoKicker: "mt-1 hidden text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176] sm:block",
  actions: "col-start-3 flex items-center justify-self-end gap-3",
  mobileSearch: "col-span-full 2xl:hidden",
  nav: "col-start-2 hidden min-w-0 items-center justify-center gap-1 text-sm font-semibold 2xl:flex",
  navGroupButton:
    "flex items-center gap-1.5 whitespace-nowrap rounded px-3 py-2 text-[#233144] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#f4f1ea] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176]",
  navGroupButtonActive:
    "flex items-center gap-1.5 whitespace-nowrap rounded bg-[#fff8e2] px-3 py-2 text-[#7a5900] shadow-[inset_0_-2px_0_#d4af37] dark:bg-[#14243a] dark:text-[#e9c176]",
  navChevron: "size-3.5 transition",
  navChevronOpen: "size-3.5 rotate-180 transition",
  dropdown:
    "absolute inset-x-0 top-full hidden border-b border-[#d8c9a5] bg-[#f8f4ec]/98 shadow-lg backdrop-blur 2xl:block dark:border-[#604403] dark:bg-[#111c2c]/98",
  dropdownInner: "mx-auto flex max-w-[96rem] items-center gap-3 px-8 py-3",
  dropdownTitle: "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  dropdownLink:
    "rounded border border-[#d8c9a5] bg-white/65 px-4 py-2 text-sm font-semibold text-[#233144] transition hover:border-[#d4af37] hover:text-[#7a5900] dark:border-[#38475f] dark:bg-[#172337] dark:text-[#f4f1ea] dark:hover:text-[#e9c176]",
  dropdownLinkActive:
    "rounded border border-[#d4af37] bg-[#fff8e2] px-4 py-2 text-sm font-semibold text-[#7a5900] dark:bg-[#14243a] dark:text-[#e9c176]",
  menuButton:
    "flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#d8c9a5] bg-white/70 text-[#7a5900] shadow-sm transition hover:border-[#d4af37] hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#604403] dark:bg-[#172337]/80 dark:text-[#e9c176] dark:hover:bg-[#14243a] 2xl:hidden",
  drawerOverlay:
    "fixed inset-0 z-[100] bg-[#050b14]/72 2xl:hidden",
  drawerPanel:
    "absolute inset-y-0 right-0 h-dvh w-[min(24rem,calc(100vw-2rem))] overflow-y-auto border-l border-[#d8c9a5] bg-[#f8f4ec] p-5 shadow-2xl dark:border-[#604403] dark:bg-[#111c2c]",
  drawerHeader: "flex items-center justify-between gap-4",
  drawerTitle: "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  drawerClose:
    "flex size-10 items-center justify-center rounded border border-[#d8c9a5] text-[#7a5900] transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#604403] dark:text-[#e9c176] dark:hover:bg-[#14243a]",
  drawerSection: "mt-6 border-t border-[#d8c9a5] pt-5 dark:border-[#38475f]",
  drawerNav: "grid gap-3",
  drawerGroup: "rounded-lg border border-[#d8c9a5] bg-white/55 p-3 dark:border-[#38475f] dark:bg-[#172337]/70",
  drawerGroupButton:
    "flex w-full items-center justify-between gap-3 rounded px-2 py-2 text-left text-sm font-bold text-[#101827] transition hover:bg-[#fff8e2] dark:text-[#f4f1ea] dark:hover:bg-[#14243a]",
  drawerGroupButtonActive:
    "flex w-full items-center justify-between gap-3 rounded bg-[#fff8e2] px-2 py-2 text-left text-sm font-bold text-[#7a5900] shadow-[inset_3px_0_0_#d4af37] transition dark:bg-[#14243a] dark:text-[#e9c176]",
  drawerGroupItems: "mt-2 grid gap-1 border-t border-[#d8c9a5] pt-2 dark:border-[#38475f]",
  drawerLink:
    "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-[#3e4654] transition hover:bg-white/70 hover:text-[#101827] dark:text-[#c5c6cd] dark:hover:bg-[#172337] dark:hover:text-[#f4f1ea]",
  drawerLinkActive:
    "flex items-center gap-3 rounded-md bg-[#dfe8ff] px-3 py-3 text-sm font-semibold text-[#101827] dark:bg-[#14243a] dark:text-[#f4f1ea]",
} as const;

export const HERO_STYLES = {
  image: "object-cover opacity-95 brightness-110 saturate-110",
  overlay: "absolute inset-0 bg-gradient-to-l from-[#101827]/90 via-[#101827]/35 to-transparent",
  titleScrim:
    "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050b14]/92 via-[#050b14]/58 to-transparent sm:h-44",
  content:
    "absolute inset-x-0 bottom-0 flex items-end p-5 sm:p-8 xl:p-10",
  title:
    "archive-hero-title-flow rounded border border-[#d4af37]/30 bg-gradient-to-r from-[#050b14]/78 via-[#101827]/62 to-[#24070d]/40 bg-clip-text px-4 py-2 font-serif text-4xl font-semibold text-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_14px_34px_rgba(5,11,20,0.48)] drop-shadow-[0_4px_10px_rgba(5,11,20,0.95)] backdrop-blur-[3px] [-webkit-text-stroke:0.35px_rgba(255,255,255,0.28)] [animation:archive-hero-title-flow_4.8s_linear_infinite] [background-image:linear-gradient(100deg,#ffffff_0%,#fff3c4_20%,#d4af37_38%,#f6efe2_52%,#fff3c4_68%,#d4af37_84%,#ffffff_100%)] [background-size:220%_100%] sm:text-5xl xl:text-6xl",
} as const;

export const BUTTON_STYLES = {
  search:
    "h-10 gap-2 rounded border border-[#b9c2d4] bg-white/70 px-3 py-0 text-sm shadow-sm transition focus-within:border-[#d4af37] dark:border-[#38475f] dark:bg-[#172337]/80",
  themeToggle:
    "flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#d8c9a5] bg-white/70 text-[#7a5900] shadow-sm transition hover:border-[#d4af37] hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#604403] dark:bg-[#172337]/80 dark:text-[#e9c176] dark:hover:bg-[#14243a]",
} as const;

export const CARD_STYLES = {
  feature:
    "h-full overflow-hidden rounded-lg border border-[#d8c9a5] bg-white shadow-sm dark:border-[#604403] dark:bg-[#172337]",
  featureLink:
    "block h-full text-[#101827] transition hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#f4f1ea] dark:hover:bg-[#14243a]",
  featureImage: "relative aspect-[4/3] bg-[#dfe8ff] dark:bg-[#14243a]",
  category:
    "rounded-lg border border-[#c7d3e9] bg-[#e8effd] p-5 transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:bg-white dark:border-[#38475f] dark:bg-[#14243a] dark:hover:bg-[#172337]",
  timelineItem: "p-5",
  newsArticle: "p-0",
  newsArticleLink:
    "block p-5 text-[#101827] transition hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#f4f1ea] dark:hover:bg-[#14243a]",
} as const;

export const SECTION_STYLES = {
  block: "mt-9",
  headerRow: "flex items-end justify-between gap-4",
  viewAllLink: "hidden text-sm font-semibold text-[#7a5900] dark:text-[#e9c176] sm:block",
  cardBody: "p-4",
  cardAction:
    "mt-4 text-sm font-bold text-[#7a5900] dark:text-[#e9c176]",
  categoryIcon:
    "flex size-10 items-center justify-center rounded bg-[#dfe8ff] text-[#233144] dark:bg-[#050b14] dark:text-[#e9c176]",
  newsHeader: "bg-[#131b2e] px-5 py-4",
  newsTitle: "font-serif text-2xl font-semibold text-white",
  newsList: "divide-y divide-[#e5dcc7] dark:divide-[#38475f]",
  timelineMetaRow: "flex flex-wrap items-center justify-between gap-3",
  timelineDate: "text-xs font-bold text-[#7a5900] dark:text-[#e9c176]",
  timelineTag:
    "rounded bg-[#edf3ff] px-2 py-1 text-xs font-bold text-[#233144] dark:bg-[#14243a] dark:text-[#f4f1ea]",
  timelineTitle: "mt-3 font-serif text-lg font-semibold",
  newsArticleFooter:
    "mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#7a5900] dark:text-[#e9c176]",
} as const;

export const RIGHT_RAIL_STYLES = {
  quote: "rounded-lg border-l-4 border-[#d4af37] bg-[#e8effd] p-5 dark:bg-[#14243a]",
  quoteOriginal:
    "font-serif text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  quoteBody: "mt-2 font-serif text-lg italic leading-8",
  quoteFooter: "mt-3 text-sm font-bold text-[#7a5900] dark:text-[#e9c176]",
  trendingTitle: "font-serif text-xl font-semibold",
  trendingList: "mt-4 flex flex-wrap gap-2",
  trendingLink: "rounded border border-[#d4af37]/45 px-3 py-2 text-sm text-[#ffe3a3] hover:bg-white/10",
} as const;

export const GRID_STYLES = {
  feature: "mt-5 grid gap-4 md:grid-cols-3 xl:gap-5",
  categories: "mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5",
  atlasLogs: "grid gap-4 md:grid-cols-2",
} as const;

export const TEXT_STYLES = {
  labelGold: "text-sm font-bold text-[#7a5900] dark:text-[#e9c176]",
  sectionTitle: "mt-1 font-serif text-3xl font-semibold md:text-4xl",
  cardBody: `mt-3 text-sm leading-6 ${THEME_CLASSES.mutedText}`,
  sidebarMuted: "mt-1 text-sm text-[#5d6676] dark:text-[#c5c6cd]",
  featureEyebrow: "text-xs font-bold text-[#7a5900] dark:text-[#e9c176]",
  cardTitle: "mt-2 font-serif text-xl font-semibold",
  categoryTitle: "mt-4 font-serif text-lg font-semibold",
  characterNameLink:
    "font-semibold text-[#7a5900] underline decoration-[#d4af37]/45 underline-offset-4 transition hover:text-[#101827] hover:decoration-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#e9c176] dark:hover:text-[#f4f1ea]",
  characterNameLinkPhrase: "whitespace-nowrap",
} as const;

export const IMAGE_STYLES = {
  objectCover: "object-cover",
} as const;

export const ICON_STYLES = {
  small: "size-4",
  navSmall: "relative size-4",
  category: "size-5",
  search: "size-4 text-[#7a5900] dark:text-[#e9c176]",
  themeToggle: "size-5",
} as const;

export const SEARCH_STYLES = {
  form: `relative hidden items-center 2xl:flex ${BUTTON_STYLES.search}`,
  headerForm: `relative flex w-full items-center ${BUTTON_STYLES.search}`,
  input:
    "h-full w-56 min-w-0 bg-transparent text-sm outline-none placeholder:text-[#687387] dark:placeholder:text-[#c5c6cd]",
  headerInput:
    "h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#687387] dark:placeholder:text-[#c5c6cd]",
  clearButton:
    "flex size-6 shrink-0 items-center justify-center rounded text-[#4b5565] transition hover:bg-[#edf3ff] hover:text-[#101827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#f4f1ea]",
  submitButton:
    "flex h-full shrink-0 items-center text-sm font-semibold text-[#7a5900] transition hover:text-[#101827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#e9c176] dark:hover:text-[#f4f1ea]",
  suggestions:
    "absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[120] overflow-hidden rounded-lg border border-[#d8c9a5] bg-white shadow-xl dark:border-[#604403] dark:bg-[#111c2c]",
  suggestionButton:
    "grid w-full grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-3 border-b border-[#eee4cd] px-3 py-3 text-left transition last:border-b-0 hover:bg-[#fff8e2] focus-visible:bg-[#fff8e2] focus-visible:outline-none dark:border-[#38475f] dark:hover:bg-[#14243a] dark:focus-visible:bg-[#14243a]",
  suggestionButtonActive:
    "grid w-full grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-3 border-b border-[#eee4cd] bg-[#fff8e2] px-3 py-3 text-left outline-none last:border-b-0 dark:border-[#38475f] dark:bg-[#14243a]",
  suggestionOrder:
    "flex h-8 items-center justify-center rounded border border-[#d4af37]/50 bg-[#fffaf0] font-mono text-xs font-bold tracking-wide text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  suggestionText: "min-w-0",
  suggestionName:
    "block truncate text-sm font-bold text-[#101827] dark:text-[#f4f1ea]",
  suggestionMeta:
    "mt-1 block truncate text-xs text-[#5d6676] dark:text-[#c5c6cd]",
  empty:
    "absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[120] rounded-lg border border-[#d8c9a5] bg-white px-4 py-3 text-sm text-[#5d6676] shadow-xl dark:border-[#604403] dark:bg-[#111c2c] dark:text-[#c5c6cd]",
} as const;

export const IMAGE_SIZE_HINTS = {
  hero: "(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 760px",
  feature: "(max-width: 767px) 100vw, (max-width: 1279px) 30vw, 320px",
  characterIcon: "72px",
  characterPortrait: "(max-width: 767px) 45vw, 220px",
  worldMap: "(max-width: 1023px) 100vw, 960px",
} as const;

export const CHARACTER_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow:
    "mb-3 text-base font-bold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody: "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  tabs:
    "mt-6 flex flex-wrap gap-2 rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c]",
  tab:
    "flex-1 rounded px-4 py-3 text-center text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176] sm:flex-none sm:text-left",
  tabActive:
    "flex-1 rounded bg-[#101827] px-4 py-3 text-center text-sm font-bold text-white shadow-[inset_0_-2px_0_#d4af37] dark:bg-[#d4af37] dark:text-[#261900] sm:flex-none sm:text-left",
  panel:
    "mt-6 overflow-hidden rounded-lg border border-[#d8c9a5] bg-white dark:border-[#604403] dark:bg-[#111c2c]",
  panelHeader:
    "border-b border-[#d8c9a5] bg-[#fffaf0] px-5 py-4 dark:border-[#38475f] dark:bg-[#101827]",
  panelTitle: "text-sm font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  mobileList: "grid gap-3 p-3 lg:hidden",
  mobileCard:
    "block rounded-lg border border-[#d8c9a5] bg-[#fffdf7] p-4 transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#38475f] dark:bg-[#172337] dark:hover:border-[#d4af37] dark:hover:bg-[#14243a]",
  mobileCardStatic:
    "rounded-lg border border-[#d8c9a5] bg-[#fffdf7] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  mobileCardTop: "grid min-w-0 grid-cols-[3.25rem_3.5rem_minmax(0,1fr)] items-center gap-3",
  mobileOrder:
    "flex h-9 items-center justify-center rounded border border-[#d4af37]/50 bg-[#fff8e2] text-xs font-bold text-[#7a5900] dark:bg-[#14243a] dark:text-[#e9c176]",
  mobileNameWrap: "grid min-w-0 gap-1",
  mobileCardBody: "mt-4 grid gap-3",
  mobileMetaGrid: "grid grid-cols-1 gap-2 sm:grid-cols-2",
  mobileMetaBox:
    "grid min-w-0 gap-1 rounded border border-[#c7d3e9] bg-[#edf3ff] p-3 dark:border-[#38475f] dark:bg-[#14243a]",
  mobileMetaLabel:
    "block text-[0.68rem] font-bold text-[#7a5900] dark:text-[#e9c176]",
  mobileMetaValue:
    "block break-keep text-sm font-semibold leading-5 text-[#101827] dark:text-[#f4f1ea]",
  tableWrap: "hidden overflow-x-auto lg:block",
  table: "w-full min-w-[50rem] table-fixed border-collapse text-center",
  tableColNo: "w-[9%]",
  tableColPortrait: "w-[13%]",
  tableColCharacter: "w-[23%]",
  tableColStar: "w-[18%]",
  tableColType: "w-[14%]",
  tableColLocation: "w-[23%]",
  tableHead:
    "border-b border-[#d8c9a5] bg-[#101827] text-xs font-bold uppercase tracking-wide text-[#e9c176] dark:border-[#38475f]",
  tableHeadCell: "px-4 py-4 text-center",
  tableRow:
    "border-b border-[#eee4cd] transition hover:bg-[#fff8e2] dark:border-[#38475f] dark:hover:bg-[#14243a]",
  tableCell: "p-0 text-center align-middle text-sm text-[#4b5565] dark:text-[#c5c6cd]",
  tableCellContent:
    "flex min-h-[5.5rem] items-center justify-center px-4 py-4",
  tableCellLink:
    "flex min-h-[5.5rem] items-center justify-center px-4 py-4 transition focus-visible:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d4af37] dark:focus-visible:bg-[#14243a]",
  avatar:
    "relative size-14 shrink-0 overflow-hidden rounded border border-[#c7d3e9] bg-[#edf3ff] dark:border-[#38475f] dark:bg-[#050b14]",
  avatarImage: "object-cover",
  name:
    "block break-keep font-sans text-[1.05rem] font-bold text-[#101827] dark:text-[#f4f1ea]",
  subName:
    "block text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  orderText:
    "font-mono text-xs font-bold tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  starText: "font-semibold text-[#101827] dark:text-[#f4f1ea]",
  locationText: "font-semibold text-[#4b5565] dark:text-[#c5c6cd]",
  chip:
    "inline-flex rounded border border-[#c7d3e9] bg-[#edf3ff] px-2 py-1 text-xs font-bold text-[#4b5565] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd]",
  detailHero:
    "grid items-end gap-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#38475f] dark:bg-[#111c2c] md:grid-cols-[20rem_minmax(0,1fr)] sm:p-6",
  detailPortraitPanel: "grid gap-4 text-center md:text-left",
  portrait:
    "relative mx-auto aspect-square w-44 overflow-hidden rounded-lg border-2 border-[#d4af37] bg-[#edf3ff] shadow-sm dark:bg-[#050b14] md:w-full",
  portraitImage: "object-cover",
  detailIdentityText: "grid min-h-[4.5rem] content-start",
  detailPortraitMeta:
    "text-xs font-bold uppercase tracking-[0.24em] text-[#7a5900] dark:text-[#e9c176]",
  detailHeroContent: "grid min-h-[4.5rem] content-start gap-4 self-end",
  detailKicker: "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  detailTitle:
    "mt-2 break-keep font-serif text-3xl font-semibold leading-tight sm:whitespace-nowrap md:text-4xl",
  detailChipRow: "flex flex-wrap gap-2",
  detailChipPrimary:
    "rounded-full bg-[#101827] px-4 py-1.5 text-xs font-bold text-white dark:bg-[#d4af37] dark:text-[#261900]",
  detailChipSecondary:
    "rounded-full border border-[#d4af37]/40 bg-[#fff8e2] px-4 py-1.5 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  detailChipTertiary:
    "rounded-full border border-[#c7d3e9] bg-[#edf3ff] px-4 py-1.5 text-xs font-bold text-[#38475f] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd]",
  recordNavigation:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-4 dark:border-[#38475f] dark:bg-[#111c2c]",
  recordNavigationTitle:
    "text-sm font-bold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  recordNavigationList:
    "mt-3 flex flex-wrap gap-2 border-b border-[#d8c9a5] pb-2 dark:border-[#38475f]",
  recordNavigationLink:
    "rounded-t border border-[#d8c9a5] border-b-0 bg-[#fffaf0] px-4 py-2 text-sm font-bold text-[#4b5565] transition hover:bg-[#fff8e2] hover:text-[#7a5900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd] dark:hover:text-[#e9c176]",
  detailLayout: "mt-6 grid gap-6",
  detailSection:
    "scroll-mt-32 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#38475f] dark:bg-[#111c2c] sm:p-6",
  detailSectionHeader: "mb-4 flex items-center gap-3",
  detailSectionAccent: "h-8 w-1 rounded-full bg-[#d4af37]",
  detailSectionTitle: "font-serif text-2xl font-semibold",
  detailLedger:
    "overflow-hidden rounded border border-[#d8c9a5] dark:border-[#38475f]",
  detailLedgerRow:
    "grid grid-cols-1 border-b border-[#eee4cd] last:border-b-0 dark:border-[#38475f] sm:grid-cols-[12rem_minmax(0,1fr)]",
  detailLedgerTerm:
    "flex min-h-12 items-center bg-[#edf3ff] px-4 py-3 text-xs font-bold uppercase text-[#7a5900] dark:bg-[#14243a] dark:text-[#e9c176]",
  detailLedgerValue:
    "flex min-h-12 items-center px-4 py-3 text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  detailLedgerValueText: "min-w-0 break-keep",
  combatDataGrid: "grid gap-4",
  combatDataPanel:
    "scroll-mt-32 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#14243a]",
  combatDataTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  combatDataLines:
    "mt-3 grid gap-2 text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  combatDataGroups: "mt-4 grid gap-4",
  combatDataGroup:
    "rounded-md border border-[#c7d3e9] bg-white/35 p-3 dark:border-[#38475f] dark:bg-[#111c2c]/45",
  combatDataGroupTitle:
    "text-xs font-bold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  combatDataRows:
    "mt-3 grid gap-px overflow-hidden rounded border border-[#c7d3e9] bg-[#c7d3e9] dark:border-[#38475f] dark:bg-[#38475f] sm:grid-cols-2",
  combatDataRowsSingle:
    "mt-3 grid gap-px overflow-hidden rounded border border-[#c7d3e9] bg-[#c7d3e9] dark:border-[#38475f] dark:bg-[#38475f]",
  combatDataRow:
    "grid gap-1 bg-white/70 p-3 dark:bg-[#111c2c]/80",
  combatDataTerm:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  combatDataValue:
    "break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  combatDataValueLinkList:
    "inline-flex flex-wrap items-center gap-x-1 gap-y-1 break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  combatDataValueLink:
    "break-keep text-sm font-semibold leading-6 text-[#101827] underline decoration-[#d4af37]/45 underline-offset-4 transition hover:text-[#7a5900] hover:decoration-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#f4f1ea] dark:hover:text-[#e9c176]",
  combatDataValueSeparator:
    "text-sm font-semibold leading-6 text-[#7d8795] dark:text-[#c5c6cd]",
  detailBackAction: "mt-5 flex justify-end border-t border-[#c7d3e9] pt-4 dark:border-[#38475f]",
  detailBackLink:
    "inline-flex min-h-11 items-center gap-2 rounded border border-[#d4af37] bg-[#fff8e2] px-4 py-2 text-sm font-bold text-[#7a5900] transition hover:bg-[#f2e1a6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:bg-[#322002] dark:text-[#e9c176] dark:hover:bg-[#4a3003]",
} as const;

export const RUNE_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow:
    "text-base font-bold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody: "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  tabs:
    "mt-6 flex flex-wrap gap-2 rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c]",
  browser: "mt-6",
  searchPanel:
    "rounded-lg border border-[#d8c9a5] bg-white/70 p-3 dark:border-[#604403] dark:bg-[#111c2c]",
  searchForm:
    "flex min-h-12 items-center gap-3 rounded-md border border-[#d8c9a5] bg-white px-4 dark:border-[#38475f] dark:bg-[#172337]",
  searchInput:
    "min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#101827] outline-none placeholder:text-[#7d8795] dark:text-[#f4f1ea] dark:placeholder:text-[#7d8795]",
  searchMeta:
    "mt-2 px-1 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  tab:
    "flex-1 rounded px-4 py-3 text-center text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176] sm:flex-none sm:text-left",
  tabActive:
    "flex-1 rounded bg-[#101827] px-4 py-3 text-center text-sm font-bold text-white shadow-[inset_0_-2px_0_#d4af37] dark:bg-[#d4af37] dark:text-[#261900] sm:flex-none sm:text-left",
  grid: "mt-6 grid gap-3",
  card:
    "grid gap-3 rounded-lg border border-[#d8c9a5] bg-white p-4 transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#604403] dark:bg-[#172337] dark:hover:bg-[#14243a] sm:grid-cols-[5rem_minmax(0,1fr)]",
  cardImageWrap:
    "flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#eee4cd] bg-[#101827] dark:border-[#38475f]",
  cardImage: "size-full object-contain p-2",
  cardFallbackImage: "size-full object-contain p-2 opacity-95",
  cardContent: "min-w-0",
  cardMeta: "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  cardTitle: "mt-2 font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  cardBody: "mt-2 text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  cardSubNames: "mt-2 grid gap-0.5 text-xs leading-5 text-[#4b5565] dark:text-[#c5c6cd]",
  cardSubName: "grid grid-cols-[max-content_minmax(0,1fr)] gap-3",
  cardSubNameLabel:
    "font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  cardSubNameValue: "min-w-0 break-keep font-semibold",
  cardGames: "mt-2 text-xs font-semibold text-[#7d8795] dark:text-[#c5c6cd]",
  cardBadgeRow: "mt-3 flex flex-wrap gap-2",
  cardFunctionBadge:
    "rounded border border-[#d4af37]/35 bg-[#fff8e2] px-2.5 py-1 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  empty:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white/70 p-6 text-center text-sm font-semibold text-[#4b5565] dark:border-[#604403] dark:bg-[#111c2c] dark:text-[#c5c6cd]",
  detailPanel:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  detailTitle: "font-serif text-3xl font-semibold",
  detailImageWrap:
    "mt-5 flex size-36 items-center justify-center overflow-hidden rounded-full border border-[#eee4cd] bg-[#101827] dark:border-[#38475f]",
  detailImage: "size-full object-contain p-3",
  detailFallbackImage: "size-full object-contain p-3 opacity-95",
  descriptionBlock:
    "mt-5 rounded-md border border-[#eee4cd] bg-[#fff8e2] p-4 dark:border-[#38475f] dark:bg-[#111c2c]",
  descriptionTitle:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  descriptionLines:
    "mt-3 grid gap-2 break-keep text-sm font-semibold leading-7 text-[#3e4654] dark:text-[#c5c6cd]",
  functionTypeNote:
    "mt-3 break-keep rounded-md border border-[#d8c9a5] bg-[#fff8e2] p-4 text-sm font-semibold leading-7 text-[#3e4654] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
  relatedLinkGrid: "mt-5 grid gap-3 sm:grid-cols-2",
  relatedLink:
    "rounded-md border border-[#d8c9a5] bg-[#fff8e2] p-4 transition hover:border-[#d4af37] hover:bg-[#fff2bd] dark:border-[#604403] dark:bg-[#322002] dark:hover:bg-[#3d2906]",
  relatedLinkTitle:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  relatedLinkBody:
    "mt-2 break-keep text-sm font-semibold leading-6 text-[#3e4654] dark:text-[#f4f1ea]",
  ledger:
    "mt-5 overflow-hidden rounded border border-[#d8c9a5] dark:border-[#38475f]",
  ledgerRow:
    "grid grid-cols-1 border-b border-[#eee4cd] last:border-b-0 dark:border-[#38475f] sm:grid-cols-[12rem_minmax(0,1fr)]",
  ledgerTerm:
    "flex min-h-12 items-center bg-[#edf3ff] px-4 py-3 text-xs font-bold uppercase text-[#7a5900] dark:bg-[#14243a] dark:text-[#e9c176]",
  ledgerValue:
    "flex min-h-12 items-center px-4 py-3 text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  functionPanel:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  functionTitle:
    "font-serif text-3xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  functionSummaryGrid: "mt-5 grid gap-3 sm:grid-cols-3",
  functionSummaryCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#111c2c]/80",
  functionSummaryLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  functionSummaryValue:
    "mt-2 font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  functionGrid: "mt-5 grid gap-4 xl:grid-cols-2",
  functionCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#111c2c]",
  functionGame:
    "font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  functionNote:
    "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  functionSubTitle:
    "mt-4 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  spellList:
    "mt-3 grid gap-px overflow-hidden rounded border border-[#c7d3e9] bg-[#c7d3e9] dark:border-[#38475f] dark:bg-[#38475f]",
  spellRow:
    "grid gap-2 bg-white/80 p-3 dark:bg-[#172337] md:grid-cols-[4.5rem_12rem_minmax(0,1fr)] md:items-center",
  spellLevel:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  spellName:
    "font-semibold text-[#101827] dark:text-[#f4f1ea]",
  spellEffect:
    "break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  functionEffectList:
    "mt-3 grid gap-2",
  functionEffectItem:
    "break-keep rounded border border-[#d8c9a5] bg-[#fff8e2] px-3 py-2 text-sm font-semibold leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
  functionSingleEffect:
    "mt-3 break-keep rounded border border-[#d8c9a5] bg-[#fff8e2] px-3 py-2 text-sm font-semibold leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
} as const;

export const ITEM_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow:
    "text-base font-bold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody: "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  tabs:
    "mt-6 flex flex-wrap gap-2 rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c]",
  tab:
    "flex-1 rounded px-4 py-3 text-center text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176] sm:flex-none sm:text-left",
  tabActive:
    "flex-1 rounded bg-[#101827] px-4 py-3 text-center text-sm font-bold text-white shadow-[inset_0_-2px_0_#d4af37] dark:bg-[#d4af37] dark:text-[#261900] sm:flex-none sm:text-left",
  browser: "mt-6",
  searchPanel:
    "rounded-lg border border-[#d8c9a5] bg-white/70 p-3 dark:border-[#604403] dark:bg-[#111c2c]",
  searchForm:
    "flex min-h-12 items-center gap-3 rounded-md border border-[#d8c9a5] bg-white px-4 dark:border-[#38475f] dark:bg-[#172337]",
  searchInput:
    "min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#101827] outline-none placeholder:text-[#7d8795] dark:text-[#f4f1ea] dark:placeholder:text-[#7d8795]",
  searchClearButton:
    "flex size-8 shrink-0 items-center justify-center rounded text-[#7a5900] transition hover:bg-[#fff8e2] hover:text-[#101827] dark:text-[#e9c176] dark:hover:bg-[#14243a] dark:hover:text-[#f4f1ea]",
  searchMeta:
    "mt-2 px-1 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  summaryGrid: "mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
  summaryLeadCard:
    "rounded-lg border border-[#d8c9a5] bg-white p-4 dark:border-[#604403] dark:bg-[#172337] sm:col-span-2",
  summaryCard:
    "rounded-lg border border-[#d8c9a5] bg-white p-4 dark:border-[#604403] dark:bg-[#172337]",
  summaryLabel:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  summaryValue: "mt-2 font-serif text-3xl font-semibold",
  panel:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-4 dark:border-[#604403] dark:bg-[#111c2c] sm:p-5",
  panelHeader:
    "flex flex-col gap-2 border-b border-[#d8c9a5] pb-4 dark:border-[#38475f] sm:flex-row sm:items-end sm:justify-between",
  panelTitle: "font-serif text-3xl font-semibold",
  panelMeta:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  list: "mt-5 grid gap-3",
  card:
    "grid gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337] lg:grid-cols-[minmax(10rem,16rem)_minmax(0,1fr)]",
  cardHeader: "min-w-0",
  cardName:
    "break-keep font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  cardTitleLink:
    "transition hover:text-[#7a5900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:hover:text-[#e9c176]",
  cardOriginal:
    "mt-1 text-xs font-bold uppercase text-[#7d8795] dark:text-[#c5c6cd]",
  cardSubNames: "mt-2 grid gap-0.5 text-xs leading-5 text-[#4b5565] dark:text-[#c5c6cd]",
  cardSubName: "grid grid-cols-[max-content_minmax(0,1fr)] gap-3",
  cardSubNameLabel:
    "font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  cardSubNameValue: "min-w-0 break-keep font-semibold",
  chipRow: "mt-3 flex flex-wrap gap-2",
  chip:
    "rounded border border-[#d4af37]/35 bg-[#fff8e2] px-2.5 py-1 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  ledger:
    "grid gap-px overflow-hidden rounded border border-[#c7d3e9] bg-[#c7d3e9] dark:border-[#38475f] dark:bg-[#38475f]",
  ledgerRow:
    "grid gap-1 bg-white/70 p-3 dark:bg-[#111c2c]/80 sm:grid-cols-[8rem_minmax(0,1fr)]",
  ledgerTerm:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  ledgerValue:
    "break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  initialOwnerList: "inline-flex flex-wrap gap-x-1 gap-y-1",
  initialOwnerLink:
    "underline decoration-[#d4af37]/60 underline-offset-4 transition hover:text-[#7a5900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:hover:text-[#e9c176]",
  empty:
    "mt-5 rounded-lg border border-[#d8c9a5] bg-white/70 p-6 text-center text-sm font-semibold text-[#4b5565] dark:border-[#604403] dark:bg-[#111c2c] dark:text-[#c5c6cd]",
  detailPanel:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  detailHeader:
    "grid gap-5 border-b border-[#d8c9a5] pb-5 dark:border-[#38475f]",
  detailTitle: "font-serif text-3xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailSubNames:
    "mt-3 grid gap-1 text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailNameRow: "grid grid-cols-[5rem_minmax(0,1fr)] gap-3",
  detailNameLabel:
    "font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  detailNameValue: "min-w-0 break-keep font-semibold",
  detailMetaGrid:
    "grid gap-px overflow-hidden rounded border border-[#c7d3e9] bg-[#c7d3e9] dark:border-[#38475f] dark:bg-[#38475f] md:grid-cols-2",
  detailMetaRow:
    "grid items-center gap-1 bg-[#edf3ff] p-3 dark:bg-[#111c2c]/80 sm:grid-cols-[7rem_minmax(0,1fr)]",
  detailInsightGrid:
    "mt-5 grid gap-3 border-t border-[#d8c9a5] pt-5 dark:border-[#38475f] sm:grid-cols-2 xl:grid-cols-4",
  detailInsightCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#111c2c]/80",
  detailInsightLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  detailInsightValue:
    "mt-2 break-keep font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailSection:
    "mt-5 rounded-md border border-[#eee4cd] bg-[#fff8e2] p-4 dark:border-[#38475f] dark:bg-[#111c2c]",
  detailSectionTitle:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  detailSectionBody:
    "mt-3 grid gap-2 break-keep text-sm font-semibold leading-7 text-[#3e4654] dark:text-[#c5c6cd]",
  detailGameGrid: "mt-5 grid gap-4",
  relatedLinkGrid: "mt-4 grid gap-3 sm:grid-cols-2",
  relatedLink:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 transition hover:border-[#d4af37] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#38475f] dark:bg-[#172337] dark:hover:bg-[#14243a]",
  relatedLinkTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  relatedLinkBody:
    "mt-2 break-keep text-sm font-semibold leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
} as const;

export const MONSTER_STYLES = {
  ...ITEM_STYLES,
  listGroup:
    "grid gap-3 rounded-lg border border-[#eee4cd] bg-white/60 p-3 dark:border-[#38475f] dark:bg-[#111c2c]/60",
  listGroupTitle:
    "text-xs font-extrabold uppercase tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  listGroupItems: "grid gap-3",
  card:
    "grid gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 transition hover:border-[#d4af37] hover:bg-white dark:border-[#38475f] dark:bg-[#172337] dark:hover:bg-[#14243a]",
  cardHeader:
    "border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  cardOriginal:
    "mt-1 text-xs font-bold uppercase text-[#7d8795] dark:text-[#c5c6cd]",
  encounterGrid: "grid gap-3 md:grid-cols-2",
  encounterCard:
    "grid gap-3 rounded-md border border-[#c7d3e9] bg-white/70 p-3 dark:border-[#38475f] dark:bg-[#111c2c]/80",
  encounterField: "grid gap-1",
  encounterTerm:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  encounterLocation:
    "break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  encounterLocationLink:
    "break-keep text-sm font-semibold leading-6 text-[#101827] underline decoration-[#d4af37]/50 underline-offset-4 transition hover:text-[#7a5900] hover:decoration-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#f4f1ea] dark:hover:text-[#e9c176]",
  dropList: "grid gap-2",
  dropItem:
    "grid gap-1 rounded border border-[#eee4cd] bg-[#fffaf0] px-3 py-2 dark:border-[#38475f] dark:bg-[#172337] sm:grid-cols-[minmax(0,1fr)_max-content] sm:items-center",
  dropName:
    "break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  dropNameLink:
    "break-keep text-sm font-semibold leading-6 text-[#101827] underline decoration-[#d4af37]/50 underline-offset-4 transition hover:text-[#7a5900] hover:decoration-[#d4af37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#f4f1ea] dark:hover:text-[#e9c176]",
  dropRate:
    "w-fit rounded border border-[#d4af37]/35 bg-[#fff8e2] px-2.5 py-1 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  noDrop:
    "mt-2 break-keep rounded border border-[#eee4cd] bg-[#fffaf0] px-3 py-2 text-sm font-semibold leading-6 text-[#4b5565] dark:border-[#38475f] dark:bg-[#172337] dark:text-[#c5c6cd]",
  bossGuideGrid:
    "mt-4 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
  bossGuideCard:
    "rounded border border-[#c7d3e9] bg-white/75 p-3 dark:border-[#38475f] dark:bg-[#172337]",
  bossGuideCardWide:
    "rounded border border-[#c7d3e9] bg-white/75 p-3 dark:border-[#38475f] dark:bg-[#172337] lg:col-span-2",
  bossGuideLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  bossGuideBody:
    "mt-2 break-keep text-sm font-semibold leading-7 text-[#3e4654] dark:text-[#c5c6cd]",
  bossGuideList:
    "mt-2 grid gap-2 break-keep text-sm font-semibold leading-6 text-[#3e4654] dark:text-[#c5c6cd]",
  bossGuideListItem:
    "rounded border border-[#eee4cd] bg-[#fffaf0] px-3 py-2 dark:border-[#38475f] dark:bg-[#111c2c]",
  bossGuideSummaryGrid:
    "grid gap-2 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-3 dark:border-[#38475f] dark:bg-[#111c2c]/80 sm:grid-cols-3 lg:col-span-2",
  bossGuideSummaryCard:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 dark:border-[#604403] dark:bg-[#172337]",
  bossGuideSummaryLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  bossGuideSummaryValue:
    "mt-1 break-keep text-sm font-semibold leading-6 text-[#101827] dark:text-[#f4f1ea]",
  statTableWrap:
    "mt-4 overflow-x-auto rounded border border-[#c7d3e9] dark:border-[#38475f]",
  statTable:
    "w-full min-w-[48rem] border-collapse bg-white/80 text-sm dark:bg-[#111c2c]/80",
  statHeadCell:
    "border-b border-r border-[#c7d3e9] bg-[#edf3ff] px-3 py-3 text-center text-xs font-extrabold uppercase text-[#7a5900] last:border-r-0 dark:border-[#38475f] dark:bg-[#172337] dark:text-[#e9c176]",
  statCell:
    "border-b border-r border-[#c7d3e9] px-3 py-3 text-center font-semibold text-[#101827] last:border-r-0 dark:border-[#38475f] dark:text-[#f4f1ea]",
  statLocationCell:
    "border-b border-r border-[#c7d3e9] px-3 py-3 text-left font-semibold text-[#101827] dark:border-[#38475f] dark:text-[#f4f1ea]",
  affinityGrid: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
  affinityCard:
    "rounded border border-[#c7d3e9] bg-[#edf3ff] p-3 dark:border-[#38475f] dark:bg-[#172337]",
  affinityLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  affinityValue:
    "mt-2 text-lg font-bold text-[#101827] dark:text-[#f4f1ea]",
  statusTableWrap:
    "mt-4 overflow-x-auto rounded border border-[#c7d3e9] dark:border-[#38475f]",
  statusTable:
    "w-full min-w-[32rem] border-collapse bg-white/80 text-sm dark:bg-[#111c2c]/80",
  statusHeadCell:
    "border-b border-r border-[#c7d3e9] bg-[#edf3ff] px-3 py-4 text-center text-xs font-extrabold uppercase text-[#7a5900] last:border-r-0 dark:border-[#38475f] dark:bg-[#172337] dark:text-[#e9c176]",
  statusCell:
    "border-r border-[#c7d3e9] px-3 py-4 text-center text-lg font-bold text-[#101827] last:border-r-0 dark:border-[#38475f] dark:text-[#f4f1ea]",
  statusLegend:
    "mt-3 break-keep text-sm font-semibold leading-6 text-[#6b7280] dark:text-[#c5c6cd]",
  detailBackAction: "mt-5 flex justify-end border-t border-[#c7d3e9] pt-4 dark:border-[#38475f]",
  detailBackLink:
    "rounded border border-[#d4af37] bg-[#fff8e2] px-4 py-2 text-sm font-bold text-[#7a5900] transition hover:bg-[#d4af37] hover:text-[#101827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:bg-[#322002] dark:text-[#e9c176] dark:hover:bg-[#d4af37] dark:hover:text-[#101827]",
} as const;

export const ATLAS_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow: "text-sm font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody: "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  mapPanel:
    "archive-map-reveal relative mt-6 overflow-hidden rounded-lg border border-[#38475f] bg-[#050b14] shadow-sm",
  mapCanvas: "relative aspect-[1037/770] overflow-hidden bg-[#596674]",
  mapImage: "object-contain opacity-100",
  mapVeil:
    "archive-map-veil pointer-events-none absolute inset-0",
  mapFrame:
    "archive-map-frame pointer-events-none absolute inset-0 rounded-lg border border-[#d8e2ec]/75 shadow-[inset_0_0_0_1px_rgba(5,11,20,0.55),inset_0_0_18px_rgba(255,255,255,0.12),0_0_0_1px_rgba(5,11,20,0.62)]",
  stageMarker:
    "archive-stage-marker group absolute size-3 -translate-x-1/2 -translate-y-1/2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#e9c176]",
  stageMarkerPoint:
    "archive-stage-marker-point absolute left-1/2 top-1/2 z-20 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-75 shadow-[0_0_12px_rgba(5,11,20,0.32)]",
  stageMarkerConnector:
    "archive-stage-marker-connector pointer-events-none absolute left-1/2 top-1/2 z-10 h-40 w-[28rem] -translate-x-1/2 -translate-y-1/2 overflow-visible",
  stageMarkerConnectorHalo:
    "archive-stage-marker-connector-halo fill-none stroke-[#050b14]/55 stroke-[4]",
  stageMarkerConnectorLine:
    "archive-stage-marker-connector-line fill-none stroke-[#fffaf0] stroke-2 drop-shadow-[0_1px_4px_rgba(5,11,20,0.48)]",
  stageMarkerLabel:
    "absolute top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border px-0 text-center shadow-[0_8px_22px_rgba(5,11,20,0.28)] backdrop-blur-[2px] transition group-hover:scale-[1.05] group-focus-visible:scale-[1.05] xl:flex xl:h-12 xl:w-48 xl:px-3 xl:group-hover:scale-[1.03] xl:group-focus-visible:scale-[1.03]",
  stageMarkerLabelLeft:
    "archive-stage-marker-label-left",
  stageMarkerLabelRight:
    "archive-stage-marker-label-right",
  stageMarkerShortLabel:
    "font-serif text-sm font-bold tracking-wide drop-shadow-[0_2px_5px_rgba(5,11,20,0.55)] xl:hidden",
  stageMarkerContent: "hidden min-w-0 flex-col items-center leading-none xl:flex",
  stageMarkerTitle:
    "block whitespace-nowrap font-serif text-sm font-semibold tracking-wide",
  stageMarkerSubtitle:
    "mt-1 block whitespace-nowrap text-[0.55rem] font-bold uppercase tracking-[0.08em] opacity-85",
  stageMarkerTooltip:
    "pointer-events-none absolute left-1/2 z-30 hidden w-72 -translate-x-1/2 rounded-md border border-[#d8c9a5] bg-[#fffdf7]/95 p-3 text-left text-[#101827] opacity-0 shadow-[0_16px_34px_rgba(5,11,20,0.24)] backdrop-blur transition duration-200 after:absolute after:left-1/2 after:size-3 after:-translate-x-1/2 after:rotate-45 after:border-[#d8c9a5] after:bg-[#fffdf7]/95 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 dark:border-[#604403] dark:bg-[#111c2c]/95 dark:text-[#f4f1ea] dark:after:border-[#604403] dark:after:bg-[#111c2c]/95 xl:block",
  stageMarkerTooltipAbove:
    "bottom-[calc(100%+0.875rem)] translate-y-1 after:-bottom-[0.4375rem] after:border-b after:border-r",
  stageMarkerTooltipBelow:
    "top-[calc(100%+0.875rem)] -translate-y-1 after:-top-[0.4375rem] after:border-l after:border-t",
  stageMarkerTooltipBody:
    "block break-keep text-xs font-semibold leading-5 text-[#4b5565] dark:text-[#c5c6cd]",
  mobileStageNotes:
    "grid gap-3 border-t border-[#38475f] bg-[#050b14] p-3 xl:hidden",
  mobileStageNoteCard:
    "rounded-md border border-[#38475f] bg-[#111c2c]/90 p-3 text-[#f4f1ea] shadow-[inset_0_1px_0_rgba(244,241,234,0.08)]",
  mobileStageNoteLink:
    "block rounded-md border border-[#38475f] bg-[#111c2c]/90 p-3 text-[#f4f1ea] shadow-[inset_0_1px_0_rgba(244,241,234,0.08)] transition hover:-translate-y-0.5 hover:border-[#e9c176] hover:bg-[#172337] hover:shadow-[0_12px_26px_rgba(5,11,20,0.28),inset_0_1px_0_rgba(244,241,234,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c176]",
  mobileStageNoteTitle:
    "font-serif text-base font-semibold tracking-wide text-[#f4f1ea]",
  mobileStageNoteSubtitle:
    "mt-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#e9c176]",
  mobileStageNoteBody:
    "mt-2 break-keep text-xs font-semibold leading-5 text-[#c5c6cd]",
  point:
    "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center",
  pointIcon:
    "flex size-8 items-center justify-center rounded-full border bg-[#101827]/80 shadow-[0_0_14px_rgba(28,163,236,0.28)] backdrop-blur sm:size-9",
  pointLabel:
    "hidden rounded border bg-[#101827]/85 px-2.5 py-1 text-xs font-bold backdrop-blur lg:block",
  detailsCard:
    "border-t border-[#38475f] bg-[#101827]/95 p-5 text-[#f4f1ea] md:absolute md:bottom-6 md:right-6 md:w-[25rem] md:rounded-lg md:border md:shadow-2xl",
  detailsMeta: "text-xs font-bold uppercase text-[#e9c176]",
  detailsTitle: "mt-1 font-serif text-2xl font-semibold",
  detailsKoreanName:
    "mt-1 text-sm font-semibold text-[#7d8795] dark:text-[#c5c6cd]",
  detailsBody: "mt-4 text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailGrid: "mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3",
  detailBox:
    "relative overflow-hidden rounded-md border border-[#d8c9a5] bg-[#fffaf0] bg-[linear-gradient(135deg,#fffaf0_0%,#f7efd9_44%,#edf3ff_100%)] p-4 shadow-[inset_4px_0_0_#d4af37,0_1px_0_rgba(16,24,39,0.04)] dark:border-[#38475f] dark:bg-[#050b14]/80 dark:bg-none dark:shadow-none",
  detailLabel: "text-[0.68rem] font-extrabold uppercase tracking-wide text-[#8a6400] dark:text-[#e9c176]/80",
  detailValue: "mt-2 text-sm font-bold text-[#101827] dark:text-[#f4f1ea]",
  locationList: "mb-5 mt-5 flex flex-wrap gap-2.5",
  locationTag:
    "rounded-full border border-[#11a3a3]/45 bg-[#dff7f1] bg-[linear-gradient(135deg,#dff7f1_0%,#fff4c7_100%)] px-3.5 py-1.5 text-xs font-extrabold text-[#075f68] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_2px_8px_rgba(17,163,163,0.16)] ring-1 ring-[#d4af37]/25 dark:border-[#27548a] dark:bg-[#14243a] dark:bg-none dark:text-[#b7c7e4] dark:shadow-none dark:ring-0",
  logSection:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#111c2c] sm:p-6",
  logHeader: "mb-4 flex items-center gap-3 border-b border-[#d8c9a5] pb-3 dark:border-[#38475f]",
  logIcon:
    "flex size-10 items-center justify-center rounded bg-[#dfe8ff] text-[#7a5900] dark:bg-[#14243a] dark:text-[#e9c176]",
  logTitle: "font-serif text-2xl font-semibold",
  logCard:
    "flex gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  logCardIcon:
    "flex size-11 shrink-0 items-center justify-center rounded bg-white text-[#7a5900] dark:bg-[#050b14] dark:text-[#e9c176]",
  logCardTitle: "text-sm font-bold text-[#7a5900] dark:text-[#e9c176]",
  logCardBody: "mt-1 text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  atlasSection:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white/65 p-5 dark:border-[#604403] dark:bg-[#111c2c]/75 sm:p-6",
  atlasSectionHeader:
    "flex flex-col gap-2 border-b border-[#d8c9a5] pb-4 dark:border-[#38475f] md:flex-row md:items-end md:justify-between",
  atlasSectionEyebrow: "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  atlasSectionTitle: "font-serif text-3xl font-semibold",
  atlasSectionBody: "max-w-2xl text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  tabsShell: "mt-6",
  tabList:
    "flex flex-wrap gap-2 rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c]",
  tab:
    "flex items-center gap-2 rounded px-4 py-3 text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176]",
  tabActive:
    "flex items-center gap-2 rounded bg-[#101827] px-4 py-3 text-sm font-bold text-white shadow-[inset_0_-2px_0_#d4af37] dark:bg-[#d4af37] dark:text-[#261900]",
  tabCount:
    "rounded border border-current/30 px-2 py-0.5 text-xs",
  regionGrid: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
  regionCard:
    "grid h-full min-h-[31rem] grid-rows-[6rem_6.5rem_9.25rem_auto] gap-4 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337]",
  regionCardHeader: "overflow-hidden",
  regionCardTitle: "font-serif text-2xl font-semibold",
  regionCardKoreanName:
    "mt-1 text-sm font-semibold text-[#7d8795] dark:text-[#c5c6cd]",
  regionCardMeta: "mt-1 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  regionCardBody:
    "overflow-hidden text-sm leading-7 text-[#7d8795] dark:text-[#c5c6cd]",
  traitList: "grid grid-rows-3 gap-2",
  traitItem: "flex items-center rounded border border-[#c7d3e9] bg-[#edf3ff] px-3 py-2 text-sm text-[#4b5565] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd]",
  regionCardLink:
    "inline-flex w-fit self-end rounded bg-[#101827] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#233144] dark:bg-[#d4af37] dark:text-[#261900] dark:hover:bg-[#e9c176]",
  regionRecordSection: "mt-6 grid gap-5",
  regionRecordHeader: "flex items-center gap-3",
  regionRecordAccent: "h-8 w-1 rounded-full bg-[#d4af37]",
  regionRecordTitle: "font-serif text-3xl font-semibold",
  regionSummaryGrid: "grid gap-3 sm:grid-cols-2 xl:grid-cols-5",
  regionSummaryCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#14243a]",
  regionSummaryLabel:
    "text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  regionSummaryValue:
    "mt-2 font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  regionRecordPanel:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  regionRecordPanelTitle:
    "font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  regionRecordGrid: "mt-4 grid gap-4 lg:grid-cols-2",
  regionRecordCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#14243a]",
  regionRecordCardTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  regionRecordCardMeta:
    "mt-1 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  regionDataList:
    "mt-3 divide-y divide-[#c7d3e9] overflow-hidden rounded border border-[#c7d3e9] bg-white/55 dark:divide-[#38475f] dark:border-[#38475f] dark:bg-[#111c2c]/55",
  regionDataRow:
    "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-3 text-sm",
  regionDataName:
    "block break-keep font-semibold text-[#101827] dark:text-[#f4f1ea]",
  regionDataMeta:
    "mt-1 mr-2 inline-flex rounded border border-[#d4af37]/35 px-2 py-0.5 text-[0.68rem] font-bold text-[#7a5900] dark:text-[#e9c176]",
  regionDataValue:
    "whitespace-nowrap text-sm font-bold text-[#7a5900] dark:text-[#e9c176]",
  regionRecordEmpty:
    "mt-3 rounded border border-[#c7d3e9] bg-white/55 px-3 py-3 text-sm font-semibold leading-6 text-[#4b5565] dark:border-[#38475f] dark:bg-[#111c2c]/55 dark:text-[#c5c6cd]",
  regionCharacterGrid: "mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
  regionCharacterCard:
    "grid gap-1 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#38475f] dark:bg-[#14243a] dark:hover:bg-[#172337]",
  regionCharacterOrder:
    "font-mono text-xs font-bold tracking-wide text-[#7a5900] dark:text-[#e9c176]",
  regionCharacterName:
    "font-sans text-base font-bold text-[#101827] dark:text-[#f4f1ea]",
  regionCharacterMeta:
    "text-xs font-semibold text-[#5d6676] dark:text-[#c5c6cd]",
} as const;

export const STAGE_MARKER_TONE_STYLES = {
  gold:
    "border-[#f0c84b] bg-[#3a2d09]/95 text-[#ffe8a8] ring-2 ring-[#f0c84b]/35",
  jade:
    "border-[#6ee49a] bg-[#0b3f2f]/95 text-[#c9ffd6] ring-2 ring-[#6ee49a]/35",
  sage: "border-[#a7c778]/60 bg-[#263315]/76 text-[#dceab7]/90",
  amber: "border-[#d99430]/60 bg-[#38240e]/76 text-[#ffd99a]/90",
  copper: "border-[#c8753d]/60 bg-[#351b12]/76 text-[#ffc2a3]/90",
} as const;

export const GAMEPLAY_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow:
    "text-sm font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody:
    "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  section:
    "mt-6 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#111c2c] sm:p-6",
  tabList:
    "mt-6 flex snap-x gap-2 overflow-x-auto overscroll-x-contain rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c] md:flex-wrap md:overflow-visible",
  tab:
    "shrink-0 snap-start whitespace-nowrap rounded px-4 py-3 text-center text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176] md:text-left",
  sectionHeader:
    "flex flex-col gap-2 border-b border-[#d8c9a5] pb-4 dark:border-[#38475f] sm:flex-row sm:items-end sm:justify-between",
  sectionEyebrow:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  sectionTitle: "font-serif text-3xl font-semibold",
  sectionBody: "max-w-2xl text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  systemGrid: "mt-5 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-3",
  systemCard:
    "grid min-h-44 min-w-0 grid-rows-[auto_1fr_auto] gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-5 text-left transition hover:border-[#d4af37] hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#38475f] dark:bg-[#172337] dark:hover:bg-[#14243a]",
  systemTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  systemBody: "break-keep text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  tagList: "flex flex-wrap content-start gap-2 border-t border-[#c7d3e9] pt-4 dark:border-[#38475f]",
  tag:
    "break-keep rounded border border-[#d4af37]/35 bg-[#fff8e2] px-2.5 py-1 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  guideGrid: "mt-5 grid gap-4 xl:grid-cols-2",
  gamePanel:
    "rounded-lg border border-[#d8c9a5] bg-[#fffdf7] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  gameHeader: "flex flex-col gap-1 border-b border-[#eee4cd] pb-3 dark:border-[#38475f]",
  gameEyebrow:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  gameTitle: "font-serif text-2xl font-semibold",
  guideGroup:
    "mt-4 block min-w-0 rounded-md border border-[#c7d3e9] bg-white/70 p-4 text-left transition hover:border-[#d4af37] hover:bg-[#fff8e2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:border-[#38475f] dark:bg-[#111c2c]/65 dark:hover:bg-[#14243a]",
  guideTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  guideBody: "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  timelineGrid: "mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-4",
  timelineCard:
    "grid min-h-44 grid-rows-[auto_1fr_auto] gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-5 dark:border-[#38475f] dark:bg-[#172337]",
  chronologyList: "mt-5 grid gap-3",
  chronologyItem:
    "grid gap-3 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337] md:grid-cols-[11rem_minmax(0,1fr)]",
  chronologyDate:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  chronologyTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  chronologyBody:
    "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailBackLink:
    "mb-5 inline-flex rounded border border-[#d8c9a5] bg-white/70 px-4 py-2 text-sm font-bold text-[#7a5900] transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#604403] dark:bg-[#172337] dark:text-[#e9c176] dark:hover:bg-[#14243a]",
  detailPanelGrid: "mt-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]",
  detailMain: "grid gap-5",
  detailAside: "grid content-start gap-5",
  detailSection:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#111c2c] sm:p-6",
  detailSectionTitle:
    "font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailParagraphList:
    "mt-4 grid gap-3 break-keep text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  detailCardGrid: "mt-4 grid gap-3",
  detailCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  detailCardTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailCardBody:
    "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailSeriesGrid: "mt-4 grid gap-4 xl:grid-cols-2",
  detailPointList:
    "mt-4 grid gap-2 border-t border-[#c7d3e9] pt-4 dark:border-[#38475f]",
  detailPointItem:
    "break-keep rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  duelRecordStack: "mt-4 grid gap-6",
  duelTabList:
    "flex flex-wrap gap-2 rounded-lg border border-[#d8c9a5] bg-white/70 p-2 dark:border-[#604403] dark:bg-[#111c2c]",
  duelTab:
    "min-h-11 rounded px-4 py-2 text-sm font-bold text-[#3e4654] transition hover:bg-[#fff8e2] hover:text-[#7a5900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:text-[#c5c6cd] dark:hover:bg-[#14243a] dark:hover:text-[#e9c176]",
  duelTabActive:
    "min-h-11 rounded bg-[#101827] px-4 py-2 text-sm font-bold text-white shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] dark:bg-[#e9c176] dark:text-[#101827]",
  duelGameGroup: "grid gap-4",
  duelGameTitle:
    "border-b border-[#d8c9a5] pb-2 font-serif text-2xl font-semibold text-[#101827] dark:border-[#604403] dark:text-[#f4f1ea]",
  duelRecordGrid: "grid gap-4",
  duelRecordCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  duelRecordHeader:
    "grid gap-3 border-b border-[#c7d3e9] pb-4 dark:border-[#38475f] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-start",
  duelRecordGame:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  duelRecordTitle:
    "mt-1 font-serif text-2xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  duelRecordMetaGrid: "grid gap-2 sm:grid-cols-2 lg:grid-cols-1",
  duelRecordMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  duelRecordMetaLabel:
    "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  duelRecordNote:
    "mt-4 break-keep rounded border border-[#d8c9a5] bg-[#fff8e2] p-4 text-sm font-semibold leading-7 text-[#3e4654] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
  duelPatternGrid: "mt-4 grid gap-3 xl:grid-cols-3",
  duelPatternCard:
    "rounded-md border border-[#d8c9a5] bg-white/80 p-3 dark:border-[#604403] dark:bg-[#111c2c]",
  duelPatternHeader: "grid gap-2 sm:grid-cols-2 xl:grid-cols-1",
  duelPatternMeta:
    "rounded border border-[#eee4cd] bg-[#fffdf7] px-3 py-2 text-sm font-bold text-[#101827] dark:border-[#38475f] dark:bg-[#172337] dark:text-[#f4f1ea]",
  duelPatternLabel:
    "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  duelCueTitle:
    "mt-4 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  duelLineList:
    "mt-2 grid gap-2",
  duelLineItem:
    "break-keep rounded border border-[#c7d3e9] bg-[#edf3ff] px-3 py-2 text-sm leading-6 text-[#3e4654] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd]",
  cookingRecordGrid: "mt-4 grid gap-3 md:grid-cols-2",
  cookingRecordCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  cookingRecordHeader:
    "border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  cookingRecordRound:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  cookingRecordTitle:
    "mt-1 font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  cookingRecordMetaGrid: "mt-3 grid gap-2 sm:grid-cols-2",
  cookingRecordMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  cookingRecordMetaLabel:
    "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  cookingRecordNote:
    "mt-3 break-keep text-sm font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  minigameGrid: "mt-4 grid gap-3 xl:grid-cols-2",
  minigameCard:
    "grid min-w-0 gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  minigameHeader:
    "border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  minigameGame:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  minigameTitle:
    "mt-1 break-keep font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  minigameMetaGrid: "grid gap-2 sm:grid-cols-3",
  minigameMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  minigameMetaLabel:
    "mb-1 block text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  minigameBody:
    "break-keep text-sm font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  minigameRelatedList:
    "flex flex-wrap gap-2 border-t border-[#c7d3e9] pt-3 dark:border-[#38475f]",
  minigameTipBlock:
    "rounded border border-[#d8c9a5] bg-[#fff8e2] p-3 dark:border-[#604403] dark:bg-[#322002]",
  minigameTipTitle:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  minigameTipList: "mt-2 grid gap-2",
  minigameTipItem:
    "break-keep text-sm font-semibold leading-6 text-[#3e4654] dark:text-[#e9c176]",
  uniteAttackGrid: "mt-4 grid gap-3 xl:grid-cols-2",
  uniteAttackCard:
    "grid min-w-0 gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  uniteAttackHeader:
    "border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  uniteAttackGame:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  uniteAttackTitle:
    "mt-1 break-keep font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  uniteAttackMetaGrid: "grid gap-2 md:grid-cols-3",
  uniteAttackMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  uniteAttackMetaLabel:
    "mb-1 block text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  uniteAttackBody:
    "break-keep text-sm font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  uniteAttackTagList:
    "flex flex-wrap gap-2 border-t border-[#c7d3e9] pt-3 dark:border-[#38475f]",
  missablePhaseGrid: "mt-4 grid gap-3 xl:grid-cols-2",
  missablePhaseCard:
    "grid min-w-0 gap-4 rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  missablePhaseHeader:
    "border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  missablePhaseGame:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  missablePhaseTitle:
    "mt-1 break-keep font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  missablePhaseMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold leading-6 text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  missablePhaseMetaLabel:
    "mb-1 block text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  missablePhaseBody:
    "break-keep text-sm font-semibold leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  missablePhaseTagList:
    "flex flex-wrap gap-2 border-t border-[#c7d3e9] pt-3 dark:border-[#38475f]",
  guardianPlanTableWrap:
    "mt-4 overflow-x-auto rounded-lg border border-[#c7d3e9] dark:border-[#38475f]",
  guardianPlanTable:
    "w-full min-w-[52rem] border-collapse bg-white/80 text-sm dark:bg-[#111c2c]/80",
  guardianPlanHeadCell:
    "border-b border-r border-[#c7d3e9] bg-[#edf3ff] px-3 py-3 text-left text-xs font-extrabold uppercase text-[#7a5900] last:border-r-0 dark:border-[#38475f] dark:bg-[#172337] dark:text-[#e9c176]",
  guardianPlanNameCell:
    "w-64 border-b border-r border-[#c7d3e9] px-3 py-3 text-left align-top dark:border-[#38475f]",
  guardianPlanName:
    "block break-keep font-serif text-lg font-semibold text-[#101827] dark:text-[#f4f1ea]",
  guardianPlanBody:
    "mt-2 block break-keep text-xs font-semibold leading-5 text-[#4b5565] dark:text-[#c5c6cd]",
  guardianPlanCodeCell:
    "border-b border-r border-[#c7d3e9] px-3 py-3 text-center font-serif text-2xl font-semibold text-[#101827] dark:border-[#38475f] dark:text-[#f4f1ea]",
  guardianPlanCell:
    "border-b border-r border-[#c7d3e9] px-3 py-3 align-top font-semibold leading-6 text-[#3e4654] last:border-r-0 dark:border-[#38475f] dark:text-[#c5c6cd]",
  guardianPlanLocationLabel:
    "mb-1 block text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  recipeGrid: "mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3",
  recipeCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  recipeHeader:
    "flex items-start gap-3 border-b border-[#c7d3e9] pb-3 dark:border-[#38475f]",
  recipeIcon:
    "grid size-11 shrink-0 place-items-center rounded-full border border-[#d8c9a5] bg-[#fff8e2] text-xl shadow-sm dark:border-[#604403] dark:bg-[#111c2c]",
  recipeNumber:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  recipeTitle:
    "mt-1 font-serif text-xl font-semibold text-[#101827] underline-offset-4 hover:underline dark:text-[#f4f1ea]",
  recipeDish:
    "mt-2 break-keep text-sm font-semibold leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  recipeSourceList: "mt-3 grid gap-2",
  recipeSourceItem:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  recipeSourceLabel:
    "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  recipeSourceDetail: "mt-1 break-keep leading-6",
  inlineLink:
    "font-bold text-[#7a5900] underline underline-offset-4 hover:text-[#101827] dark:text-[#e9c176] dark:hover:text-[#f4f1ea]",
  restaurantTipGrid: "mt-4 grid gap-3 md:grid-cols-2",
  restaurantTipCard:
    "rounded-lg border border-[#d8c9a5] bg-[#fff8e2] p-4 dark:border-[#604403] dark:bg-[#322002]",
  restaurantTipTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  restaurantTipBody:
    "mt-3 break-keep text-sm font-semibold leading-7 text-[#4b5565] dark:text-[#e9c176]",
  restaurantTipTagList:
    "mt-4 flex flex-wrap gap-2 border-t border-[#d8c9a5] pt-3 dark:border-[#604403]",
  warGuideStack: "mt-4 grid gap-6",
  warSectionTitle:
    "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  warCommandGrid: "mt-3 grid gap-4 xl:grid-cols-2",
  warCommandGroup:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  warGameLabel:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  warGroupBody:
    "mt-2 break-keep text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  warCommandList: "mt-4 grid gap-3",
  warCommandCard:
    "rounded-md border border-[#d8c9a5] bg-white/80 p-3 dark:border-[#604403] dark:bg-[#111c2c]",
  warCommandName:
    "font-serif text-lg font-semibold text-[#101827] dark:text-[#f4f1ea]",
  warCommandBody:
    "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  warCommandMetaGrid: "mt-3 flex flex-wrap gap-2",
  warCommandMeta:
    "rounded border border-[#d4af37]/35 bg-[#fff8e2] px-2.5 py-1 text-xs font-bold text-[#7a5900] dark:bg-[#322002] dark:text-[#e9c176]",
  warBattleList: "mt-3 grid gap-3",
  warBattleCard:
    "rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  warBattleHeader:
    "grid gap-3 border-b border-[#c7d3e9] pb-3 dark:border-[#38475f] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]",
  warBattleTitle:
    "mt-1 font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  warBattleMetaGrid: "grid gap-2 sm:grid-cols-2 lg:grid-cols-1",
  warBattleMeta:
    "rounded border border-[#d8c9a5] bg-white/70 px-3 py-2 text-sm font-semibold text-[#3e4654] dark:border-[#604403] dark:bg-[#111c2c]/75 dark:text-[#c5c6cd]",
  warBattleMetaLabel:
    "mr-2 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  warBattleNote:
    "mt-3 break-keep text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  warTagList:
    "mt-4 flex flex-wrap gap-2 border-t border-[#c7d3e9] pt-3 dark:border-[#38475f]",
  warRoleGrid: "mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3",
  warRoleCard:
    "grid min-h-48 grid-rows-[auto_auto_1fr_auto] rounded-lg border border-[#c7d3e9] bg-[#edf3ff] p-4 dark:border-[#38475f] dark:bg-[#172337]",
  warRoleTitle:
    "mt-1 font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  warRoleBody:
    "mt-3 break-keep text-sm leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  detailFacilitySection:
    "mt-5 border-t border-[#c7d3e9] pt-4 dark:border-[#38475f]",
  detailFacilityTitle:
    "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  detailFloorList: "mt-3 grid gap-3",
  detailFloorItem:
    "rounded-md border border-[#c7d3e9] bg-[#edf3ff] p-3 dark:border-[#38475f] dark:bg-[#172337]",
  detailFloorTitle:
    "font-serif text-lg font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailFloorBody:
    "mt-2 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailFloorTagList:
    "mt-3 flex flex-wrap gap-2 border-t border-[#c7d3e9] pt-3 dark:border-[#38475f]",
  detailFloorNote:
    "mt-3 break-keep rounded border border-[#d8c9a5] bg-[#fff8e2] px-3 py-2 text-xs font-semibold leading-5 text-[#7a5900] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
  detailFacilityList: "mt-3 grid gap-3",
  detailFacilityItem:
    "rounded-md border border-[#d8c9a5] bg-[#fffdf7] p-3 dark:border-[#604403] dark:bg-[#111c2c]",
  detailFacilityName:
    "font-serif text-lg font-semibold text-[#101827] dark:text-[#f4f1ea]",
  detailFacilityMetaGrid:
    "mt-3 grid gap-2 text-xs font-semibold text-[#4b5565] dark:text-[#c5c6cd] sm:grid-cols-2",
  detailFacilityMeta:
    "rounded border border-[#eee4cd] bg-white px-2.5 py-2 dark:border-[#38475f] dark:bg-[#172337]",
  detailFacilityMetaLabel:
    "mr-2 font-bold text-[#7a5900] dark:text-[#e9c176]",
  detailFacilityBody:
    "mt-3 break-keep text-sm leading-6 text-[#4b5565] dark:text-[#c5c6cd]",
  detailChecklist:
    "mt-4 grid gap-2",
  detailChecklistItem:
    "rounded border border-[#d8c9a5] bg-[#fff8e2] px-3 py-2 text-sm font-semibold text-[#7a5900] dark:border-[#604403] dark:bg-[#322002] dark:text-[#e9c176]",
} as const;

export const STAGE_MARKER_CONNECTOR_CONFIG = {
  defaultLabelOffsetRem: 3,
  elbowMax: 72,
  elbowMin: 34,
  elbowRatio: 0.52,
  unitPerRem: 16,
  viewBox: "-224 -80 448 160",
} as const;
