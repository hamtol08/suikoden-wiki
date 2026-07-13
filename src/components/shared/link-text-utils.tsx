/**
 * 본문 속 이름을 링크로 바꿀 때 공통으로 쓰는 경계 판정과 노드 래핑 유틸입니다.
 */

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { escapeArchiveRegExp } from "@/constants/app/archive-utils";

type DelimitedLinkTextOptions = {
  match: string;
  offset: number;
  postpositionPattern: RegExp;
  text: string;
  tokenPattern: RegExp;
};

type LinkTextReference = {
  href: string;
};

type LinkedReferenceTextOptions = {
  linkClassName: string;
  pattern: RegExp;
  postpositionPattern: RegExp;
  resolveReference: (match: string) => LinkTextReference | null;
  text: string;
  tokenPattern: RegExp;
};

export const escapeLinkTextRegExp = (value: string) =>
  escapeArchiveRegExp(value);

const isTokenCharacter = (value: string | undefined, tokenPattern: RegExp) => {
  return value ? tokenPattern.test(value) : false;
};

export const isDelimitedLinkText = ({
  match,
  offset,
  postpositionPattern,
  text,
  tokenPattern,
}: DelimitedLinkTextOptions) => {
  const previous = text[offset - 1];
  const next = text[offset + match.length];

  if (isTokenCharacter(previous, tokenPattern)) {
    return false;
  }

  if (!isTokenCharacter(next, tokenPattern)) {
    return true;
  }

  return postpositionPattern.test(text.slice(offset + match.length));
};

export const wrapLinkedTextNodes = (nodes: ReactNode[]) =>
  nodes.map((node, index) => (
    <Fragment key={typeof node === "string" ? `${node}-${index}` : index}>
      {node}
    </Fragment>
  ));

export const renderLinkedReferenceText = ({
  linkClassName,
  pattern,
  postpositionPattern,
  resolveReference,
  text,
  tokenPattern,
}: LinkedReferenceTextOptions) => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  pattern.lastIndex = 0;
  text.replace(pattern, (...matchArguments) => {
    const match = matchArguments[0];
    const offset = matchArguments.at(-2) as number;

    if (
      !isDelimitedLinkText({
        match,
        offset,
        postpositionPattern,
        text,
        tokenPattern,
      })
    ) {
      return match;
    }

    const reference = resolveReference(match);

    if (!reference) {
      return match;
    }

    if (offset > lastIndex) {
      nodes.push(text.slice(lastIndex, offset));
    }

    nodes.push(
      <Link className={linkClassName} href={reference.href}>
        {match}
      </Link>,
    );
    lastIndex = offset + match.length;

    return match;
  });

  if (nodes.length === 0) {
    return text;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return wrapLinkedTextNodes(nodes);
};
