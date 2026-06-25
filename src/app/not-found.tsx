import Link from "next/link";
import { APP_ROUTES } from "@/constants/app/app-config";
import { ARCHIVE_NOT_FOUND_COPY } from "@/constants/archive/archive-content";
import {
  APP_SHELL_STYLES,
  NOT_FOUND_STYLES,
} from "@/constants/styles/ui-styles";

const NotFound = () => {
  return (
    <main className={`${APP_SHELL_STYLES.page} ${NOT_FOUND_STYLES.shell}`}>
      <section className={NOT_FOUND_STYLES.panel}>
        <p className={NOT_FOUND_STYLES.eyebrow}>
          {ARCHIVE_NOT_FOUND_COPY.eyebrow}
        </p>
        <h1 className={NOT_FOUND_STYLES.title}>
          {ARCHIVE_NOT_FOUND_COPY.title}
        </h1>
        <p className={NOT_FOUND_STYLES.body}>
          {ARCHIVE_NOT_FOUND_COPY.body}
        </p>
        <div className={NOT_FOUND_STYLES.actions}>
          <Link className={NOT_FOUND_STYLES.primaryLink} href={APP_ROUTES.home}>
            {ARCHIVE_NOT_FOUND_COPY.homeLabel}
          </Link>
          <Link
            className={NOT_FOUND_STYLES.secondaryLink}
            href={APP_ROUTES.characters}
          >
            {ARCHIVE_NOT_FOUND_COPY.archiveLabel}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
