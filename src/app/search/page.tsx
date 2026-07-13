/**
 * search 라우트의 서버 페이지를 렌더링하고 통합 검색 인덱스를 연결합니다.
 */

import ArchiveHeader from "@/components/layout/ArchiveHeader";
import SearchPageBrowser from "@/components/search/SearchPageBrowser";
import ArchivePageIntro from "@/components/shared/ArchivePageIntro";
import { APP_ROUTES } from "@/constants/app/app-config";
import {
  ALL_ARCHIVE_SEARCH_INDEX,
  SEARCH_PAGE_COPY,
} from "@/constants/search/search-content";
import {
  APP_SHELL_STYLES,
  ITEM_STYLES,
  RESPONSIVE_SHELL,
} from "@/constants/styles/ui-styles";

const SearchPage = () => (
  <main className={APP_SHELL_STYLES.page}>
    <ArchiveHeader activeHref={APP_ROUTES.search} />

    <div className={RESPONSIVE_SHELL.atlasGrid}>
      <section className={ITEM_STYLES.shell}>
        <ArchivePageIntro
          body={SEARCH_PAGE_COPY.body}
          eyebrow={SEARCH_PAGE_COPY.eyebrow}
          styles={ITEM_STYLES}
          title={SEARCH_PAGE_COPY.title}
        />

        <SearchPageBrowser records={ALL_ARCHIVE_SEARCH_INDEX} />
      </section>
    </div>
  </main>
);

export default SearchPage;
