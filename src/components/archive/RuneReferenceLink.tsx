import Link from "next/link";
import { RUNE_ARCHIVE_COPY, resolveRuneReference } from "@/constants/rune-content";

type RuneReferenceLinkProps = {
  className?: string;
  name: string;
};

const RuneReferenceLink = ({ className, name }: RuneReferenceLinkProps) => {
  const rune = resolveRuneReference(name);

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
