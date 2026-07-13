/**
 * 월드맵 위 주요 지역 마커와 라벨을 렌더링합니다.
 */

import Link from "next/link";
import { type CSSProperties } from "react";
import { buildArchiveSlugId } from "@/constants/app/archive-utils";
import { WORLD_STAGE_MARKERS } from "@/constants/archive/archive-content";
import {
  ATLAS_STYLES,
  STAGE_MARKER_CONNECTOR_CONFIG,
  STAGE_MARKER_TONE_STYLES,
} from "@/constants/styles/ui-styles";

type WorldStageMarkerProps = {
  index: number;
  marker: (typeof WORLD_STAGE_MARKERS)[number];
};

type StageMarkerPositionStyle = CSSProperties & {
  "--archive-marker-delay": string;
  "--archive-marker-desktop-label-offset"?: string;
  "--archive-marker-desktop-label-y"?: string;
  "--archive-marker-desktop-x"?: string;
  "--archive-marker-desktop-y"?: string;
  "--archive-marker-x": string;
  "--archive-marker-y": string;
};

const UPPER_TOOLTIP_THRESHOLD_PERCENT = 30;

const parseRemValue = (value: string | undefined, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const buildMarkerTooltipId = (label: string) => {
  return `world-stage-marker-${buildArchiveSlugId(label)}`;
};

const buildConnectorPoints = (
  marker: (typeof WORLD_STAGE_MARKERS)[number],
) => {
  const labelOffsetRem = parseRemValue(
    "desktopLabelOffset" in marker ? marker.desktopLabelOffset : undefined,
    STAGE_MARKER_CONNECTOR_CONFIG.defaultLabelOffsetRem,
  );
  const labelShiftYRem = parseRemValue(
    "desktopLabelShiftY" in marker ? marker.desktopLabelShiftY : undefined,
    0,
  );
  const side = marker.labelSide === "left" ? -1 : 1;
  const endX = side * labelOffsetRem * STAGE_MARKER_CONNECTOR_CONFIG.unitPerRem;
  const endY = labelShiftYRem * STAGE_MARKER_CONNECTOR_CONFIG.unitPerRem;
  const elbowX =
    side *
    Math.min(
      Math.max(
        Math.abs(endX) * STAGE_MARKER_CONNECTOR_CONFIG.elbowRatio,
        STAGE_MARKER_CONNECTOR_CONFIG.elbowMin,
      ),
      STAGE_MARKER_CONNECTOR_CONFIG.elbowMax,
    );

  return `0,0 ${elbowX},${endY} ${endX},${endY}`;
};

const WorldStageMarker = ({ index, marker }: WorldStageMarkerProps) => {
  const tone = STAGE_MARKER_TONE_STYLES[marker.tone];
  const description = "description" in marker ? marker.description : undefined;
  const tooltipId = description ? buildMarkerTooltipId(marker.label) : undefined;
  const shouldPlaceTooltipBelow =
    Number.parseFloat(marker.y) < UPPER_TOOLTIP_THRESHOLD_PERCENT;
  const tooltipPlacement = shouldPlaceTooltipBelow
    ? ATLAS_STYLES.stageMarkerTooltipBelow
    : ATLAS_STYLES.stageMarkerTooltipAbove;
  const labelSide =
    marker.labelSide === "left"
      ? ATLAS_STYLES.stageMarkerLabelLeft
      : ATLAS_STYLES.stageMarkerLabelRight;
  const connectorPoints = buildConnectorPoints(marker);
  const markerStyle: StageMarkerPositionStyle = {
    "--archive-marker-delay": `${index * 70}ms`,
    "--archive-marker-x": marker.x,
    "--archive-marker-y": marker.y,
    ...("desktopX" in marker
      ? { "--archive-marker-desktop-x": marker.desktopX }
      : {}),
    ...("desktopY" in marker
      ? { "--archive-marker-desktop-y": marker.desktopY }
      : {}),
    ...("desktopLabelOffset" in marker
      ? { "--archive-marker-desktop-label-offset": marker.desktopLabelOffset }
      : {}),
    ...("desktopLabelShiftY" in marker
      ? { "--archive-marker-desktop-label-y": marker.desktopLabelShiftY }
      : {}),
  };
  const content = (
    <>
      <span
        aria-hidden="true"
        className={`${ATLAS_STYLES.stageMarkerPoint} ${tone}`}
      />
      <svg
        aria-hidden="true"
        className={ATLAS_STYLES.stageMarkerConnector}
        preserveAspectRatio="xMidYMid meet"
        viewBox={STAGE_MARKER_CONNECTOR_CONFIG.viewBox}
      >
        <polyline
          className={ATLAS_STYLES.stageMarkerConnectorHalo}
          points={connectorPoints}
        />
        <polyline
          className={ATLAS_STYLES.stageMarkerConnectorLine}
          points={connectorPoints}
        />
      </svg>
      <span className={`${ATLAS_STYLES.stageMarkerLabel} ${labelSide} ${tone}`}>
        <span
          aria-hidden="true"
          className={ATLAS_STYLES.stageMarkerShortLabel}
        >
          {marker.shortLabel}
        </span>
        <span className={ATLAS_STYLES.stageMarkerContent}>
          <span className={ATLAS_STYLES.stageMarkerTitle}>{marker.label}</span>
          <span className={ATLAS_STYLES.stageMarkerSubtitle}>
            {marker.subLabel}
          </span>
        </span>
        {description ? (
          <span
            className={`${ATLAS_STYLES.stageMarkerTooltip} ${tooltipPlacement}`}
            id={tooltipId}
          >
            <span className={ATLAS_STYLES.stageMarkerTooltipBody}>
              {description}
            </span>
          </span>
        ) : null}
      </span>
    </>
  );

  if (marker.href) {
    return (
      <Link
        aria-describedby={tooltipId}
        aria-label={`${marker.label} regions`}
        className={ATLAS_STYLES.stageMarker}
        href={marker.href}
        style={markerStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      aria-describedby={tooltipId}
      aria-label={marker.label}
      className={ATLAS_STYLES.stageMarker}
      role="group"
      style={markerStyle}
      tabIndex={0}
    >
      {content}
    </div>
  );
};

export default WorldStageMarker;
