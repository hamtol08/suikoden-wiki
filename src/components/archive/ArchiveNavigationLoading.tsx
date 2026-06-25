"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ArchiveRouteLoading from "@/components/archive/ArchiveRouteLoading";
import {
  APP_ROUTES,
  ARCHIVE_NAVIGATION_EVENT_NAME,
  NAVIGATION_LOADING_TIMING,
} from "@/constants/app-config";
import { NAVIGATION_LOADING_STYLES } from "@/constants/ui-styles";

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
  const progressRatio = Math.min(
    1,
    elapsedMs / NAVIGATION_LOADING_TIMING.fallbackToNotFoundMs,
  );

  return Math.min(96, 8 + progressRatio * 88);
};

type ArchiveNavigationEvent = CustomEvent<{
  href?: string;
}>;

const ArchiveNavigationLoading = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const lastCommittedLocationKeyRef = useRef("");
  const startedLocationKeyRef = useRef("");
  const targetLocationKeyRef = useRef<string | null>(null);
  const startedAtRef = useRef(0);
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
      setProgressPercent(getNavigationProgress(startedAtRef.current));
      progressFrameRef.current = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
  }, [clearProgressFrame]);

  const hideLoading = useCallback(() => {
    clearTimer(maximumTimerRef);
    clearPendingHide();
    clearProgressFrame();
    setProgressPercent(100);

    const elapsedMs = Date.now() - startedAtRef.current;
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
            setIsVisible(false);
            setProgressPercent(0);
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
    maximumTimerRef.current = null;

    if (hasNavigationReachedTarget()) {
      hideLoading();
      return;
    }

    targetLocationKeyRef.current = APP_ROUTES.navigationFallbackNotFound;
    router.replace(APP_ROUTES.navigationFallbackNotFound, { scroll: false });
  }, [hasNavigationReachedTarget, hideLoading, router]);

  const showLoading = useCallback((targetLocationKey?: string | null) => {
    clearPendingHide();
    clearTimer(maximumTimerRef);

    startedLocationKeyRef.current =
      lastCommittedLocationKeyRef.current || getLocationKey();
    targetLocationKeyRef.current = targetLocationKey ?? null;
    startedAtRef.current = Date.now();
    setProgressPercent(8);
    setIsVisible(true);
    startProgress();

    maximumTimerRef.current = window.setTimeout(
      moveToNavigationFallback,
      NAVIGATION_LOADING_TIMING.fallbackToNotFoundMs,
    );
  }, [clearPendingHide, clearTimer, moveToNavigationFallback, startProgress]);

  useEffect(() => {
    const currentLocationKey = getLocationKey();

    if (!isVisible) {
      lastCommittedLocationKeyRef.current = currentLocationKey;
      return;
    }

    if (hasNavigationReachedTarget()) {
      const hideFrame = window.requestAnimationFrame(hideLoading);

      return () => window.cancelAnimationFrame(hideFrame);
    }
  }, [hasNavigationReachedTarget, hideLoading, isVisible, pathname]);

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
      clearTimer(hideTimerRef);
      clearTimer(maximumTimerRef);
      clearTimer(settleTimerRef);
      clearFrame();
      clearProgressFrame();
    };
  }, [clearFrame, clearProgressFrame, clearTimer, showLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={NAVIGATION_LOADING_STYLES.overlay} role="status">
      <ArchiveRouteLoading progressPercent={progressPercent} />
    </div>
  );
};

export default ArchiveNavigationLoading;
