/**
 * 서버 렌더링 가능한 정적 영역에 공통 CSS 등장 애니메이션을 적용합니다.
 */

import { createElement, type ReactNode } from "react";
import { MOTION_SURFACE_CLASS } from "@/constants/styles/motion-styles";

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

const MotionSurface = ({
  as = "article",
  children,
  className,
  id,
}: MotionSurfaceProps) => {
  return createElement(
    as,
    {
      className: `${className} ${MOTION_SURFACE_CLASS}`,
      id,
    },
    children,
  );
};

export default MotionSurface;
