/**
 * 서버 렌더링 가능한 공통 섹션 헤더를 렌더링합니다.
 */

import Link from "next/link";
import {
  SECTION_STYLES,
  TEXT_STYLES,
} from "@/constants/styles/ui-styles";

type ArchiveSectionHeaderAction = {
  href: string;
  label: string;
};

type ArchiveSectionHeaderProps = {
  action?: ArchiveSectionHeaderAction;
  body?: string;
  eyebrow?: string;
  title: string;
};

const ArchiveSectionHeader = ({
  action,
  body,
  eyebrow,
  title,
}: ArchiveSectionHeaderProps) => (
  <div className={action ? SECTION_STYLES.headerRow : SECTION_STYLES.headerStack}>
    <div className={SECTION_STYLES.headerStack}>
      {eyebrow ? (
        <p className={TEXT_STYLES.labelGold}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={TEXT_STYLES.sectionTitle}>
        {title}
      </h2>
      {body ? (
        <p className={TEXT_STYLES.sectionBody}>
          {body}
        </p>
      ) : null}
    </div>
    {action ? (
      <Link className={SECTION_STYLES.viewAllLink} href={action.href}>
        {action.label}
      </Link>
    ) : null}
  </div>
);

export default ArchiveSectionHeader;
