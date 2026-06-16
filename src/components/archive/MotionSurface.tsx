"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION_PRESETS } from "@/constants/motion-styles";

type MotionSurfaceProps = {
  children: ReactNode;
  className: string;
};

const MotionSurface = ({ children, className }: MotionSurfaceProps) => {
  return (
    <motion.article
      className={className}
      initial={MOTION_PRESETS.surface.initial}
      whileInView={MOTION_PRESETS.surface.whileInView}
      viewport={MOTION_PRESETS.surface.viewport}
      transition={MOTION_PRESETS.surface.transition}
    >
      {children}
    </motion.article>
  );
};

export default MotionSurface;
