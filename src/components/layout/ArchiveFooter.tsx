import { ARCHIVE_COPY } from "@/constants/archive/archive-content";
import { FOOTER_STYLES } from "@/constants/styles/ui-styles";

const ArchiveFooter = () => {
  const { footer } = ARCHIVE_COPY;

  return (
    <footer className={FOOTER_STYLES.shell}>
      <div className={FOOTER_STYLES.inner}>
        <div>
          <p className={FOOTER_STYLES.title}>{footer.title}</p>
          <p className={FOOTER_STYLES.body}>{footer.body}</p>
          <p className={FOOTER_STYLES.notice}>{footer.notice}</p>
        </div>
      </div>
    </footer>
  );
};

export default ArchiveFooter;
