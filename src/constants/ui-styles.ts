import { THEME_CLASSES } from "@/constants/theme";

export const RESPONSIVE_SHELL = {
  pageMax: "mx-auto max-w-7xl",
  headerInner:
    "mx-auto grid min-h-16 max-w-[96rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-2 sm:px-6 lg:px-8",
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
  logoLink: "flex min-w-0 shrink-0 items-center gap-3",
  logoMark: "size-11 rounded-md border border-[#d8c9a5] shadow-sm dark:border-[#604403]",
  logoTextGroup: "flex min-w-0 flex-col leading-none",
  logoTitle: "truncate font-serif text-lg font-bold tracking-wide text-[#101827] dark:text-[#f4f1ea]",
  logoKicker: "mt-1 hidden text-[0.68rem] font-bold uppercase text-[#7a5900] dark:text-[#e9c176] sm:block",
  actions: "flex items-center gap-3",
  nav: "hidden min-w-0 items-center justify-center gap-1 text-sm font-semibold 2xl:flex",
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
    "fixed inset-0 z-[80] flex justify-end bg-[#050b14]/55 backdrop-blur-sm 2xl:hidden",
  drawerPanel:
    "h-dvh w-[min(24rem,calc(100vw-2rem))] overflow-y-auto border-l border-[#d8c9a5] bg-[#f8f4ec] p-5 shadow-2xl dark:border-[#604403] dark:bg-[#111c2c]",
  drawerHeader: "flex items-center justify-between gap-4",
  drawerTitle: "font-serif text-xl font-semibold text-[#101827] dark:text-[#f4f1ea]",
  drawerClose:
    "flex size-10 items-center justify-center rounded border border-[#d8c9a5] text-[#7a5900] transition hover:border-[#d4af37] hover:bg-[#fff8e2] dark:border-[#604403] dark:text-[#e9c176] dark:hover:bg-[#14243a]",
  drawerSection: "mt-6 border-t border-[#d8c9a5] pt-5 dark:border-[#38475f]",
  drawerSectionTitle: "text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  drawerNav: "mt-3 grid gap-3",
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
    "rounded border border-white/18 bg-[#050b14]/26 px-4 py-2 font-serif text-4xl font-semibold text-white shadow-[0_10px_32px_rgba(5,11,20,0.45)] drop-shadow-[0_4px_10px_rgba(5,11,20,0.95)] backdrop-blur-[2px] sm:text-5xl xl:text-6xl",
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
  featureImage: "relative aspect-[4/3] bg-[#dfe8ff] dark:bg-[#14243a]",
  category:
    "rounded-lg border border-[#c7d3e9] bg-[#e8effd] p-5 transition hover:-translate-y-0.5 hover:border-[#d4af37] hover:bg-white dark:border-[#38475f] dark:bg-[#14243a] dark:hover:bg-[#172337]",
  timelineItem: "p-5",
} as const;

export const SECTION_STYLES = {
  block: "mt-9",
  headerRow: "flex items-end justify-between gap-4",
  viewAllLink: "hidden text-sm font-semibold text-[#7a5900] dark:text-[#e9c176] sm:block",
  cardBody: "p-4",
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
} as const;

export const RIGHT_RAIL_STYLES = {
  statHeader: "flex items-center gap-3",
  statMark: "rounded border border-[#d8c9a5] dark:border-[#604403]",
  statTitle: "font-serif text-xl font-semibold",
  statFounded: "text-xs font-bold text-[#7a5900] dark:text-[#e9c176]",
  statList: "mt-5 divide-y divide-[#eee4cd] dark:divide-[#38475f]",
  statRow: "flex items-center justify-between py-3",
  statValue: "font-serif text-lg font-semibold",
  quote: "rounded-lg border-l-4 border-[#d4af37] bg-[#e8effd] p-5 dark:bg-[#14243a]",
  quoteBody: "font-serif text-lg italic leading-8",
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
  form: `hidden items-center 2xl:flex ${BUTTON_STYLES.search}`,
  drawerForm: `mt-5 flex w-full items-center ${BUTTON_STYLES.search}`,
  input:
    "h-full w-56 min-w-0 bg-transparent text-sm outline-none placeholder:text-[#687387] dark:placeholder:text-[#c5c6cd]",
  drawerInput:
    "h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#687387] dark:placeholder:text-[#c5c6cd]",
  submitLabel: "flex h-full items-center text-sm font-semibold text-[#7a5900] dark:text-[#e9c176]",
} as const;

export const IMAGE_SIZE_HINTS = {
  hero: "(max-width: 767px) 100vw, (max-width: 1279px) 70vw, 760px",
  feature: "(max-width: 767px) 100vw, (max-width: 1279px) 30vw, 320px",
  worldMap: "(max-width: 1023px) 100vw, 960px",
} as const;

export const ATLAS_STYLES = {
  shell: "min-w-0 px-4 py-6 sm:px-6 md:px-8 lg:px-8 xl:px-10",
  intro:
    "rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337] sm:p-6",
  introEyebrow: "text-sm font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  introTitle: "mt-2 font-serif text-4xl font-semibold md:text-5xl",
  introBody: "mt-4 max-w-3xl text-base leading-7 text-[#4b5565] dark:text-[#c5c6cd]",
  mapPanel:
    "relative mt-6 overflow-hidden rounded-lg border border-[#38475f] bg-[#050b14] shadow-sm",
  mapCanvas: "relative aspect-[1037/770] overflow-hidden bg-[#596674]",
  mapImage: "object-contain opacity-100",
  mapVeil:
    "pointer-events-none absolute inset-0 bg-transparent",
  mapFrame:
    "pointer-events-none absolute inset-0 rounded-lg border border-[#d8e2ec]/75 shadow-[inset_0_0_0_1px_rgba(5,11,20,0.55),inset_0_0_18px_rgba(255,255,255,0.12),0_0_0_1px_rgba(5,11,20,0.62)]",
  stageMarker:
    "absolute flex h-12 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full border px-3 text-center shadow-[0_8px_22px_rgba(5,11,20,0.28)] backdrop-blur-[2px] transition hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e9c176]",
  stageMarkerContent: "flex min-w-0 flex-col items-center leading-none",
  stageMarkerActiveIcon:
    "size-7 shrink-0 drop-shadow-[0_2px_5px_rgba(5,11,20,0.55)]",
  stageMarkerTitle:
    "block whitespace-nowrap font-serif text-sm font-semibold tracking-wide",
  stageMarkerSubtitle:
    "mt-1 block whitespace-nowrap text-[0.55rem] font-bold uppercase tracking-[0.08em] opacity-85",
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
  detailsBody: "mt-4 text-sm leading-6 text-[#c5c6cd]",
  detailGrid: "mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3",
  detailBox:
    "rounded border border-[#38475f] bg-[#050b14]/80 p-3",
  detailLabel: "text-[0.68rem] font-bold uppercase text-[#e9c176]/80",
  detailValue: "mt-1 text-sm font-semibold",
  locationList: "mt-4 flex flex-wrap gap-2",
  locationTag:
    "rounded border border-[#27548a] bg-[#14243a] px-2 py-1 text-xs font-bold text-[#b7c7e4]",
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
    "grid h-full min-h-[30rem] grid-rows-[5rem_6.5rem_9.25rem_auto] gap-4 rounded-lg border border-[#d8c9a5] bg-white p-5 dark:border-[#604403] dark:bg-[#172337]",
  regionCardHeader: "overflow-hidden",
  regionCardTitle: "font-serif text-2xl font-semibold",
  regionCardMeta: "mt-1 text-xs font-bold uppercase text-[#7a5900] dark:text-[#e9c176]",
  regionCardBody:
    "overflow-hidden text-sm leading-7 text-[#7d8795] dark:text-[#c5c6cd]",
  traitList: "grid grid-rows-3 gap-2",
  traitItem: "flex items-center rounded border border-[#c7d3e9] bg-[#edf3ff] px-3 py-2 text-sm text-[#4b5565] dark:border-[#38475f] dark:bg-[#14243a] dark:text-[#c5c6cd]",
  regionCardLink:
    "inline-flex w-fit self-end rounded bg-[#101827] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#233144] dark:bg-[#d4af37] dark:text-[#261900] dark:hover:bg-[#e9c176]",
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
