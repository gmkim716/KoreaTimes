"use client";

import { useState } from "react";
import styled from "@emotion/styled";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", query);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        placeholder="검색어를 입력하세요"
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearch}>검색</SearchButton>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #3a3a3a;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
