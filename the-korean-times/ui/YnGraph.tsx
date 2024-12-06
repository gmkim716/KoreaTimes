"use client";

import { VoteData } from "@/types/types";
import styled from "@emotion/styled";

/**
 * 둥근 모서리의 가로 막대 형태의 찬/반 비교 그래프
 *
 * @returns 가로 막대 형태의 찬/반 비교 그래프
 */

type YnGraphProps = {
  dataset: VoteData;
};

export default function YnGraph({ dataset }: YnGraphProps) {
  const { totalCnt, agreeCnt, disagreeCnt } = dataset;

  const agreePercentage = totalCnt > 0 ? (agreeCnt / totalCnt) * 100 : 0;
  const disagreePercentage = totalCnt > 0 ? (disagreeCnt / totalCnt) * 100 : 0;

  return (
    <>
      <YnGraph.Container>
        <YnGraph.Bar color="#4caf50" width={agreePercentage}>
          {agreeCnt}표
        </YnGraph.Bar>
        <YnGraph.Bar color="#f44336" width={disagreePercentage}>
          {disagreeCnt}표
        </YnGraph.Bar>
      </YnGraph.Container>
      <YnGraph.Total>총 투표수: {totalCnt}</YnGraph.Total>
    </>
  );
}

YnGraph.Container = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: #e6e6e6;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

YnGraph.Bar = styled.div<{ color: string; width: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  height: 100%;
  transition: width 0.3s ease;
  background-color: ${({ color }) => color};
  width: ${({ width }) => width}%;
`;
YnGraph.Total = styled.div`
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
  color: #666;
`;
