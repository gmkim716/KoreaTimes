"use client";

import { MemberType } from "@/types/types";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

/**
 * 국회 전광판을 모티브로 한 컴포넌트
 *
 * 국회의원들의 목록, 투표 현황
 */
type BoardWidgetProps = {
  members: MemberType[]; // todo: 찬반 여부가 추가된 데이터 전달이 필요
};
export default function BoardWidget({ members }: BoardWidgetProps) {
  const router = useRouter();

  const tempOrdinal = 22; // todo: 임시로 22대 국회로 설정

  const handleClick = (idx: number) => () => {
    router.push(`/member/${tempOrdinal}/${idx}`);
  };
  return (
    <BoardWidget.Container>
      <BoardWidget.StatsList>
        <BoardWidget.StatsItem>제적:인</BoardWidget.StatsItem>
        <BoardWidget.StatsItem>재석:인</BoardWidget.StatsItem>
        <BoardWidget.StatsItem>찬성:인</BoardWidget.StatsItem>
        <BoardWidget.StatsItem>반대:인</BoardWidget.StatsItem>
        <BoardWidget.StatsItem>기권:인</BoardWidget.StatsItem>
      </BoardWidget.StatsList>
      <BoardWidget.MemberList>
        {members.map((member) => (
          <BoardWidget.MemberItem
            key={member.idx}
            onClick={handleClick(member.idx)}
          >
            <BoardWidget.Marker status={"disagree"} />
            {member.name}
          </BoardWidget.MemberItem>
        ))}
      </BoardWidget.MemberList>
    </BoardWidget.Container>
  );
}

BoardWidget.Container = styled.div`
  background-color: var(--board-background-color);
  color: #f5f5f5;
`;
BoardWidget.Stats = styled.div`
  display: flex;
  padding: 1rem;
`;
BoardWidget.StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
  list-style: none;
  color: yellow;
`;
BoardWidget.StatsItem = styled.li`
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
`;
BoardWidget.MemberList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
BoardWidget.MemberItem = styled.li<{
  status?: "agree" | "disagree" | undefined;
}>`
  font-size: 1.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ status }) =>
    status === "agree"
      ? "var(--positive)"
      : status === "disagree"
      ? "var(--negative)"
      : "var(--neutral)"};

  &:hover {
    background-color: ${({ status }) =>
      status === "agree"
        ? "rgba(6, 254, 67, 0.1)" /* --positive에 약간 투명 */
        : status === "disagree"
        ? "rgba(228, 80, 114, 0.1)" /* --negative에 약간 투명 */
        : "rgba(240, 240, 240, 0.3)"}; /* --neutral에 약간 투명 */
  }
`;
BoardWidget.Marker = styled.span<{ status?: "agree" | "disagree" | undefined }>`
  width: 10px;
  height: 10px;
  background-color: ${({ status }) =>
    status === "agree"
      ? "var(--positive)"
      : status === "disagree"
      ? "var(--negative)"
      : "var(--neutral)"};
  border-radius: 50%;
  flex-shrink: 0;
`;
