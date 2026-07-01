/**
 * 등장 애니메이션과 모션 전환에 쓰는 공통 설정을 정의합니다.
 */

export const MOTION_PRESETS = {
  search: {
    initial: { opacity: 0, y: -4 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25 },
  },
  surface: {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-48px" },
    transition: { duration: 0.28, ease: "easeOut" },
  },
  list: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.035, delayChildren: 0.04 },
    },
    exit: { opacity: 0 },
    transition: { duration: 0.16, ease: "easeOut" },
  },
  listItem: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.22, ease: "easeOut" },
  },
  drawerOverlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.18, ease: "easeOut" },
  },
  drawerPanel: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] },
  },
} as const;
