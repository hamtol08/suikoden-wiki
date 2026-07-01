/**
 * 색인 페이지에서 재사용하는 탭 내비게이션 UI를 제공합니다.
 */

import Link from "next/link";

type ArchiveIndexTab = {
  href: string;
  id: string;
  title: string;
};

type ArchiveIndexTabsStyles = {
  tab: string;
  tabActive: string;
  tabs: string;
};

type ArchiveIndexTabsProps = {
  activeId: string;
  ariaLabel: string;
  pages: readonly ArchiveIndexTab[];
  styles: ArchiveIndexTabsStyles;
};

const ArchiveIndexTabs = ({
  activeId,
  ariaLabel,
  pages,
  styles,
}: ArchiveIndexTabsProps) => (
  <nav aria-label={ariaLabel} className={styles.tabs}>
    {pages.map((page) => (
      <Link
        className={page.id === activeId ? styles.tabActive : styles.tab}
        href={page.href}
        key={page.id}
      >
        {page.title}
      </Link>
    ))}
  </nav>
);

export default ArchiveIndexTabs;
