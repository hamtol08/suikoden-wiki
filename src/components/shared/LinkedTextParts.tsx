/**
 * 서버에서 미리 분해한 링크 텍스트 조각을 클라이언트에서도 가볍게 렌더링합니다.
 */

import Link from "next/link";
import { Fragment } from "react";

export type LinkedTextPart = {
  href?: string | null;
  text: string;
};

type LinkedTextPartsProps = {
  className?: string;
  parts: readonly LinkedTextPart[];
};

const LinkedTextParts = ({ className, parts }: LinkedTextPartsProps) => (
  <>
    {parts.map((part, index) => (
      <Fragment key={`${part.text}-${index}`}>
        {part.href ? (
          <Link className={className} href={part.href}>
            {part.text}
          </Link>
        ) : (
          part.text
        )}
      </Fragment>
    ))}
  </>
);

export default LinkedTextParts;
