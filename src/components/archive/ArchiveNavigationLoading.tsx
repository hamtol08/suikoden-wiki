"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import ArchiveRouteLoading from "@/components/archive/ArchiveRouteLoading";
import {
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

type ArchiveNavigationEvent = CustomEvent<{
  href?: string;
}>;

const ArchiveNavigationLoading = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const lastCommittedLocationKeyRef = useRef("");
  const startedLocationKeyRef = useRef("");
  const targetLocationKeyRef = useRef<string | null>(null);
  const startedAtRef = useRef(0);
  const hideTimerRef = useRef<number | null>(null);
  const maximumTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);
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

  const clearPendingHide = useCallback(() => {
    clearTimer(hideTimerRef);
    clearTimer(settleTimerRef);
    clearFrame();
  }, [clearFrame, clearTimer]);

  const hideLoading = useCallback(() => {
    clearTimer(maximumTimerRef);
    clearPendingHide();

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
            settleTimerRef.current = null;
          }, NAVIGATION_LOADING_TIMING.settleDelayMs);
        });
      });
    }, remainingMs);
  }, [clearPendingHide, clearTimer]);

  const showLoading = useCallback((targetLocationKey?: string | null) => {
    clearPendingHide();
    clearTimer(maximumTimerRef);

    startedLocationKeyRef.current =
      lastCommittedLocationKeyRef.current || getLocationKey();
    targetLocationKeyRef.current = targetLocationKey ?? null;
    startedAtRef.current = Date.now();
    setIsVisible(true);

    maximumTimerRef.current = window.setTimeout(() => {
      lastCommittedLocationKeyRef.current = getLocationKey();
      targetLocationKeyRef.current = null;
      setIsVisible(false);
      maximumTimerRef.current = null;
    }, NAVIGATION_LOADING_TIMING.maximumVisibleMs);
  }, [clearPendingHide, clearTimer]);

  useEffect(() => {
    const currentLocationKey = getLocationKey();

    if (!isVisible) {
      lastCommittedLocationKeyRef.current = currentLocationKey;
      return;
    }

    const targetLocationKey = targetLocationKeyRef.current;
    const hasReachedTarget = targetLocationKey
      ? currentLocationKey === targetLocationKey
      : currentLocationKey !== startedLocationKeyRef.current;

    if (hasReachedTarget) {
      hideLoading();
    }
  }, [hideLoading, isVisible, pathname]);

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
    };
  }, [clearFrame, clearTimer, showLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={NAVIGATION_LOADING_STYLES.overlay} role="status">
      <ArchiveRouteLoading />
    </div>
  );
};

export default ArchiveNavigationLoading;
