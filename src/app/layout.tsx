/**
 * 전역 폰트, 테마 초기화, viewport, 공통 헤더/푸터 기반 레이아웃을 정의합니다.
 */

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import ArchiveFooter from "@/components/layout/ArchiveFooter";
import ArchiveNavigationLoading from "@/components/layout/ArchiveNavigationLoading";
import { APP_LANGUAGE, THEME_MODES } from "@/constants/app/app-config";
import {
  THEME_META_COLORS,
  THEME_MODE_INIT_SCRIPT,
} from "@/constants/app/theme";
import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { APP_SHELL_STYLES } from "@/constants/styles/ui-styles";
import "./globals.css";

const archiveSans = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  variable: "--font-archive-sans",
  weight: "45 920",
  display: "swap",
});

const archiveDisplay = localFont({
  src: [
    {
      path: "../assets/fonts/Cinzel-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Cinzel-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Cinzel-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archive-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: ARCHIVE_COPY.metadata.title,
  description: ARCHIVE_COPY.metadata.description,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: THEME_META_COLORS.safeAreaLight,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: THEME_META_COLORS.safeAreaDark,
    },
  ],
  viewportFit: "cover",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang={APP_LANGUAGE}
      data-theme={THEME_MODES.light}
      className={`${archiveSans.variable} ${archiveDisplay.variable} ${APP_SHELL_STYLES.html}`}
      suppressHydrationWarning
    >
      <body className={APP_SHELL_STYLES.body}>
        <div aria-hidden="true" className={APP_SHELL_STYLES.safeAreaTop} />
        <div aria-hidden="true" className={APP_SHELL_STYLES.safeAreaBottom} />
        <Script
          id="archive-theme-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_MODE_INIT_SCRIPT }}
        />
        <ArchiveNavigationLoading />
        {children}
        <ArchiveFooter />
      </body>
    </html>
  );
};

export default RootLayout;
