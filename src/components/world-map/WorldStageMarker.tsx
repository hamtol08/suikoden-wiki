/**
 * 월드맵 위 주요 지역 마커와 라벨을 렌더링합니다.
 */

import Link from "next/link";
import { WORLD_STAGE_MARKER_COLORS } from "@/constants/app/theme";
import { WORLD_STAGE_MARKERS } from "@/constants/archive/archive-content";
import {
  ATLAS_STYLES,
  STAGE_MARKER_TONE_STYLES,
} from "@/constants/styles/ui-styles";

type WorldStageMarkerProps = {
  marker: (typeof WORLD_STAGE_MARKERS)[number];
};

const LocationPinMark = () => (
  <svg
    aria-hidden="true"
    className={ATLAS_STYLES.stageMarkerActiveIcon}
    viewBox="0 0 32 32"
  >
    <path
      d="M16 2.5c-6.1 0-11 4.8-11 10.8 0 7.8 11 16.2 11 16.2s11-8.4 11-16.2c0-6-4.9-10.8-11-10.8Z"
      fill={WORLD_STAGE_MARKER_COLORS.activeFill}
    />
    <path
      d="M8.5 13.2c0-4.3 3.3-7.7 7.5-7.7"
      fill="none"
      opacity="0.28"
      stroke={WORLD_STAGE_MARKER_COLORS.activeGlint}
      strokeLinecap="round"
      strokeWidth="2"
    />
    <circle
      cx="16"
      cy="13.2"
      fill={WORLD_STAGE_MARKER_COLORS.activeCore}
      r="4.4"
    />
  </svg>
);

const WorldStageMarker = ({ marker }: WorldStageMarkerProps) => {
  const tone = STAGE_MARKER_TONE_STYLES[marker.tone];
  const content = (
    <>
      {marker.isActive ? <LocationPinMark /> : null}
      <span className={ATLAS_STYLES.stageMarkerContent}>
        <span className={ATLAS_STYLES.stageMarkerTitle}>{marker.label}</span>
        <span className={ATLAS_STYLES.stageMarkerSubtitle}>
          {marker.subLabel}
        </span>
      </span>
    </>
  );

  if (marker.href) {
    return (
      <Link
        aria-label={`${marker.label} regions`}
        className={`${ATLAS_STYLES.stageMarker} ${tone}`}
        href={marker.href}
        style={{ left: marker.x, top: marker.y }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      aria-label={marker.label}
      className={`${ATLAS_STYLES.stageMarker} ${tone}`}
      role="img"
      style={{ left: marker.x, top: marker.y }}
    >
      {content}
    </div>
  );
};

export default WorldStageMarker;
