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
  <header className={styles.intro}>
    <p className={styles.introEyebrow}>{eyebrow}</p>
    <h1 className={styles.introTitle}>{title}</h1>
    <p className={styles.introBody}>{body}</p>
  </header>
);

export default ArchivePageIntro;
