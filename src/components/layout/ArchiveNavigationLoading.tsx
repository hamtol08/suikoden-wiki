"use client";

/**
 * 클라이언트 라우트 이동 중 표시되는 진행 바 로딩 상태를 관리합니다.
 */

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useReducer, useRef } from "react";
import ArchiveRouteLoading from "@/components/layout/ArchiveRouteLoading";
import {
  APP_ROUTES,
  ARCHIVE_NAVIGATION_EVENT_NAME,
  NAVIGATION_LOADING_TIMING,
} from "@/constants/app/app-config";
import { NAVIGATION_LOADING_STYLES } from "@/constants/styles/ui-styles";

const isModifiedClick = (event: MouseEvent) => {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
};

const getLocationKey = () => `${window.location.pathname}${window.location.search}`;

const isSameDocumentNavigation = (href: string) => {
  const targetUrl = new URL(href, window.location.href);

  return (
    targetUrl.origin === window.location.origin &&
    targetUrl.pathname === window.location.pathname &&
    targetUrl.search === window.location.search
  );
};

const shouldShowNavigationLoading = (event: MouseEvent) => {
  if (event.defaultPrevented || event.button !== 0 || isModifiedClick(event)) {
    return false;
  }

  if (!(event.target instanceof Element)) {
    return false;
  }

  const anchor = event.target.closest<HTMLAnchorElement>("a[href]");

  if (!anchor) {
    return false;
  }

  const rawHref = anchor.getAttribute("href");

  if (
    !rawHref ||
    rawHref.startsWith("#") ||
    rawHref.startsWith("mailto:") ||
    rawHref.startsWith("tel:") ||
    anchor.hasAttribute("download") ||
    (anchor.target && anchor.target !== "_self")
  ) {
    return false;
  }

  return !isSameDocumentNavigation(anchor.href);
};

const getNavigationKey = (href: string) => {
  const targetUrl = new URL(href, window.location.href);

  if (targetUrl.origin !== window.location.origin) {
    return null;
  }

  return `${targetUrl.pathname}${targetUrl.search}`;
};

const getNavigationProgress = (startedAt: number) => {
  const elapsedMs = Date.now() - startedAt;
  const fastProgressRatio = Math.min(
    1,
    elapsedMs / NAVIGATION_LOADING_TIMING.fastProgressMs,
  );

  if (fastProgressRatio < 1) {
    return (
      NAVIGATION_LOADING_TIMING.initialProgressPercent +
      fastProgressRatio *
        (
          NAVIGATION_LOADING_TIMING.fastProgressTargetPercent -
          NAVIGATION_LOADING_TIMING.initialProgressPercent
        )
    );
  }

  const remainingProgress =
    NAVIGATION_LOADING_TIMING.maximumProgressPercent -
    NAVIGATION_LOADING_TIMING.fastProgressTargetPercent;
  const slowProgressRatio = Math.min(
    1,
    (elapsedMs - NAVIGATION_LOADING_TIMING.fastProgressMs) /
      (
        NAVIGATION_LOADING_TIMING.fallbackToNotFoundMs -
        NAVIGATION_LOADING_TIMING.fastProgressMs
      ),
  );

  return Math.min(
    NAVIGATION_LOADING_TIMING.maximumProgressPercent,
    NAVIGATION_LOADING_TIMING.fastProgressTargetPercent +
      slowProgressRatio * remainingProgress,
  );
};

type ArchiveNavigationEvent = CustomEvent<{
  href?: string;
}>;

type NavigationLoadingState = {
  isVisible: boolean;
  progressPercent: number;
};

type NavigationLoadingAction =
  | { progressPercent: number; type: "setProgress" }
  | { type: "completeProgress" }
  | { type: "hide" }
  | { type: "reset" }
  | { type: "showInitial" };

const NAVIGATION_LOADING_INITIAL_STATE: NavigationLoadingState = {
  isVisible: false,
  progressPercent: 0,
};

const navigationLoadingReducer = (
  state: NavigationLoadingState,
  action: NavigationLoadingAction,
): NavigationLoadingState => {
  switch (action.type) {
    case "setProgress":
      return { ...state, progressPercent: action.progressPercent };
    case "completeProgress":
      return { ...state, progressPercent: 100 };
    case "hide":
    case "reset":
      return NAVIGATION_LOADING_INITIAL_STATE;
    case "showInitial":
      return {
        isVisible: true,
        progressPercent: NAVIGATION_LOADING_TIMING.initialProgressPercent,
      };
    default:
      return state;
  }
};

const ArchiveNavigationLoading = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loadingState, dispatchLoading] = useReducer(
    navigationLoadingReducer,
    NAVIGATION_LOADING_INITIAL_STATE,
  );
  const lastCommittedLocationKeyRef = useRef("");
  const startedLocationKeyRef = useRef("");
  const targetLocationKeyRef = useRef<string | null>(null);
  const startedAtRef = useRef(0);
  const progressStartedAtRef = useRef(0);
  const revealTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const maximumTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);
  const progressFrameRef = useRef<number | null>(null);
  const settleFrameRef = useRef<number | null>(null);

  const clearTimer = useCallback((timerRef: typeof hideTimerRef) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearFrame = useCallback(() => {
    if (settleFrameRef.current) {
      window.cancelAnimationFrame(settleFrameRef.current);
      settleFrameRef.current = null;
    }
  }, []);

  const clearProgressFrame = useCallback(() => {
    if (progressFrameRef.current) {
      window.cancelAnimationFrame(progressFrameRef.current);
      progressFrameRef.current = null;
    }
  }, []);

  const clearPendingHide = useCallback(() => {
    clearTimer(hideTimerRef);
    clearTimer(settleTimerRef);
    clearFrame();
  }, [clearFrame, clearTimer]);

  const startProgress = useCallback(() => {
    clearProgressFrame();

    const updateProgress = () => {
      dispatchLoading({
        progressPercent: getNavigationProgress(progressStartedAtRef.current),
        type: "setProgress",
      });
      progressFrameRef.current = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
  }, [clearProgressFrame]);

  const hideLoading = useCallback(() => {
    clearTimer(revealTimerRef);
    clearTimer(maximumTimerRef);
    clearPendingHide();
    clearProgressFrame();
    dispatchLoading({ type: "completeProgress" });

    const visibleStartedAt = progressStartedAtRef.current || startedAtRef.current;
    const elapsedMs = Date.now() - visibleStartedAt;
    const remainingMs = Math.max(
      0,
      NAVIGATION_LOADING_TIMING.minimumVisibleMs - elapsedMs,
    );

    hideTimerRef.current = window.setTimeout(() => {
      hideTimerRef.current = null;

      settleFrameRef.current = window.requestAnimationFrame(() => {
        settleFrameRef.current = window.requestAnimationFrame(() => {
          settleFrameRef.current = null;
          settleTimerRef.current = window.setTimeout(() => {
            lastCommittedLocationKeyRef.current = getLocationKey();
            targetLocationKeyRef.current = null;
            dispatchLoading({ type: "hide" });
            settleTimerRef.current = null;
          }, NAVIGATION_LOADING_TIMING.settleDelayMs);
        });
      });
    }, remainingMs);
  }, [clearPendingHide, clearProgressFrame, clearTimer]);

  const hasNavigationReachedTarget = useCallback(() => {
    const currentLocationKey = getLocationKey();
    const targetLocationKey = targetLocationKeyRef.current;

    return targetLocationKey
      ? currentLocationKey === targetLocationKey
      : currentLocationKey !== startedLocationKeyRef.current;
  }, []);

  const moveToNavigationFallback = useCallback(() => {
    clearTimer(revealTimerRef);
    maximumTimerRef.current = null;

    if (hasNavigationReachedTarget()) {
      hideLoading();
      return;
    }

    targetLocationKeyRef.current = APP_ROUTES.navigationFallbackNotFound;
    router.replace(APP_ROUTES.navigationFallbackNotFound, { scroll: false });
  }, [clearTimer, hasNavigationReachedTarget, hideLoading, router]);

  const showLoading = useCallback((targetLocationKey?: string | null) => {
    clearTimer(revealTimerRef);
    clearPendingHide();
    clearTimer(maximumTimerRef);
    clearProgressFrame();

    startedLocationKeyRef.current =
      lastCommittedLocationKeyRef.current || getLocationKey();
    targetLocationKeyRef.current = targetLocationKey ?? null;
    startedAtRef.current = Date.now();
    progressStartedAtRef.current = 0;
    dispatchLoading({ type: "reset" });

    revealTimerRef.current = window.setTimeout(() => {
      revealTimerRef.current = null;

      if (hasNavigationReachedTarget()) {
        clearTimer(maximumTimerRef);
        lastCommittedLocationKeyRef.current = getLocationKey();
        targetLocationKeyRef.current = null;
        return;
      }

      progressStartedAtRef.current = Date.now();
      dispatchLoading({ type: "showInitial" });
      startProgress();
    }, NAVIGATION_LOADING_TIMING.delayedRevealMs);

    maximumTimerRef.current = window.setTimeout(
      moveToNavigationFallback,
      NAVIGATION_LOADING_TIMING.fallbackToNotFoundMs,
    );
  }, [
    clearPendingHide,
    clearProgressFrame,
    clearTimer,
    hasNavigationReachedTarget,
    moveToNavigationFallback,
    startProgress,
  ]);

  useEffect(() => {
    const currentLocationKey = getLocationKey();

    if (!loadingState.isVisible) {
      if (hasNavigationReachedTarget()) {
        clearTimer(revealTimerRef);
        clearTimer(maximumTimerRef);
        targetLocationKeyRef.current = null;
      }

      lastCommittedLocationKeyRef.current = currentLocationKey;
      return;
    }

    if (hasNavigationReachedTarget()) {
      const hideFrame = window.requestAnimationFrame(hideLoading);

      return () => window.cancelAnimationFrame(hideFrame);
    }
  }, [
    clearTimer,
    hasNavigationReachedTarget,
    hideLoading,
    loadingState.isVisible,
    pathname,
  ]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (shouldShowNavigationLoading(event)) {
        const anchor = event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>("a[href]")
          : null;

        showLoading(anchor ? getNavigationKey(anchor.href) : null);
      }
    };

    const handleNavigationRequest = (event: Event) => {
      const navigationEvent = event as ArchiveNavigationEvent;
      const targetLocationKey = navigationEvent.detail?.href
        ? getNavigationKey(navigationEvent.detail.href)
        : null;

      showLoading(targetLocationKey);
    };

    const handlePopState = () => {
      const currentLocationKey = getLocationKey();

      if (currentLocationKey !== lastCommittedLocationKeyRef.current) {
        showLoading(currentLocationKey);
      }

      lastCommittedLocationKeyRef.current = currentLocationKey;
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener(ARCHIVE_NAVIGATION_EVENT_NAME, handleNavigationRequest);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener(
        ARCHIVE_NAVIGATION_EVENT_NAME,
        handleNavigationRequest,
      );
      window.removeEventListener("popstate", handlePopState);
      clearTimer(revealTimerRef);
      clearTimer(hideTimerRef);
      clearTimer(maximumTimerRef);
      clearTimer(settleTimerRef);
      clearFrame();
      clearProgressFrame();
    };
  }, [clearFrame, clearProgressFrame, clearTimer, showLoading]);

  if (!loadingState.isVisible) {
    return null;
  }

  return (
    <div className={NAVIGATION_LOADING_STYLES.overlay} role="status">
      <ArchiveRouteLoading progressPercent={loadingState.progressPercent} />
    </div>
  );
};

export default ArchiveNavigationLoading;
