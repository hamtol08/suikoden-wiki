/**
 * 문장과 봉인구 사이의 교차 참조 링크를 렌더링합니다.
 */

import Link from "next/link";
import {
  buildArchiveDataLabel,
  loadArchiveJsonSafely,
} from "@/constants/app/data-loading";
import { RUNE_ARCHIVE_COPY, resolveRuneReference } from "@/constants/runes/rune-content";

type RuneReferenceLinkProps = {
  className?: string;
  name: string;
};

const RuneReferenceLink = ({ className, name }: RuneReferenceLinkProps) => {
  const rune = loadArchiveJsonSafely({
    fallback: undefined,
    label: buildArchiveDataLabel("rune-reference", name),
    load: () => resolveRuneReference(name),
  });

  if (!rune || name === RUNE_ARCHIVE_COPY.unavailableDetail) {
    return <span className={className}>{name}</span>;
  }

  return (
    <Link className={className} href={rune.href}>
      {rune.name}
    </Link>
  );
};

export default RuneReferenceLink;
