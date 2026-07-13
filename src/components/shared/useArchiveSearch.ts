/**
 * 색인형 목록에서 공통으로 쓰는 검색어 상태와 필터링 결과를 관리합니다.
 */

"use client";

import { type ChangeEvent, useMemo, useState } from "react";
import { normalizeArchiveSearchText } from "@/constants/app/archive-utils";

type SearchableRecord = {
  searchText: string;
};

export const useArchiveSearch = <RecordType extends SearchableRecord>(
  records: readonly RecordType[],
) => {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeArchiveSearchText(query);
  const filteredRecords = useMemo(() => {
    if (!normalizedQuery) {
      return records;
    }

    return records.filter((record) =>
      record.searchText.includes(normalizedQuery),
    );
  }, [normalizedQuery, records]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return {
    clearSearch,
    filteredRecords,
    handleSearchChange,
    normalizedQuery,
    query,
  };
};
