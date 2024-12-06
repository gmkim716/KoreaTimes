"use client";

import styled from "@emotion/styled";

type MemberItemProps = {
  key: string;
  hgNm: string;
  enNm?: string;
  vote: "agree" | "disagree" | "abstention" | "";
};

export default function MemberItem({ key, hgNm, enNm, vote }: MemberItemProps) {
  const handleClick = () => {
    console.log(`${enNm} clicked ${vote}`);
  };

  return (
    <Container key={key} onClick={handleClick} vote={vote}>
      <Marker vote={vote} />
      <Name>{hgNm}</Name>
    </Container>
  );
}

const Container = styled.li<{
  vote: "agree" | "disagree" | "abstention" | "";
}>`
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ vote }) =>
    vote === "agree"
      ? "var(--positive)"
      : vote === "disagree"
      ? "var(--negative)"
      : "var(--neutral)"};
  &:hover {
    background-color: ${({ vote }) =>
      vote === "agree"
        ? "rgba(6, 254, 67, 0.1)" /* --positive에 약간 투명 */
        : vote === "disagree"
        ? "rgba(228, 80, 114, 0.1)" /* --negative에 약간 투명 */
        : "rgba(240, 240, 240, 0.3)"}; /* --neutral에 약간 투명 */
  }
`;
const Marker = styled.div<{ vote?: string }>`
  width: 10px;
  height: 10px;
  background-color: ${({ vote }) =>
    vote === "agree"
      ? "var(--positive)"
      : vote === "disagree"
      ? "var(--negative)"
      : "var(--neutral)"};
  border-radius: 50%;
  flex-shrink: 0;
`;
const Name = styled.div`
  font-weight: bold;
`;
