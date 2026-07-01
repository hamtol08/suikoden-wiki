/**
 * 아카이브 페이지 상단 소개 영역을 공통 형태로 렌더링합니다.
 */

import CharacterNameLinkText from "@/components/shared/CharacterNameLinkText";
import MotionSurface from "@/components/shared/MotionSurface";

type ArchivePageIntroStyles = {
  intro: string;
  introBody: string;
  introEyebrow: string;
  introTitle: string;
};

type ArchivePageIntroProps = {
  body: string;
  eyebrow: string;
  styles: ArchivePageIntroStyles;
  title: string;
};

const ArchivePageIntro = ({
  body,
  eyebrow,
  styles,
  title,
}: ArchivePageIntroProps) => (
  <MotionSurface as="header" className={styles.intro}>
    <p className={styles.introEyebrow}>{eyebrow}</p>
    <h1 className={styles.introTitle}>{title}</h1>
    <p className={styles.introBody}>
      <CharacterNameLinkText text={body} />
    </p>
  </MotionSurface>
);

export default ArchivePageIntro;
