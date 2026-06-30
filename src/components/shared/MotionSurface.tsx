"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION_PRESETS } from "@/constants/styles/motion-styles";

type MotionSurfaceElement =
  | "article"
  | "blockquote"
  | "div"
  | "header"
  | "li"
  | "section";

type MotionSurfaceProps = {
  as?: MotionSurfaceElement;
  children: ReactNode;
  className: string;
  id?: string;
};

const buildMotionProps = (className: string, id?: string) => ({
  className,
  id,
  initial: MOTION_PRESETS.surface.initial,
  transition: MOTION_PRESETS.surface.transition,
  viewport: MOTION_PRESETS.surface.viewport,
  whileInView: MOTION_PRESETS.surface.whileInView,
});

const MotionSurface = ({
  as = "article",
  children,
  className,
  id,
}: MotionSurfaceProps) => {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { className, id }
    : buildMotionProps(className, id);

  if (as === "div") {
    return <motion.div {...motionProps}>{children}</motion.div>;
  }

  if (as === "blockquote") {
    return <motion.blockquote {...motionProps}>{children}</motion.blockquote>;
  }

  if (as === "header") {
    return <motion.header {...motionProps}>{children}</motion.header>;
  }

  if (as === "li") {
    return <motion.li {...motionProps}>{children}</motion.li>;
  }

  if (as === "section") {
    return <motion.section {...motionProps}>{children}</motion.section>;
  }

  return <motion.article {...motionProps}>{children}</motion.article>;
};

export default MotionSurface;
