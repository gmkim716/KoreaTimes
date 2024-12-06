"use client";

import { VoteData2, VoteDataItem } from "@/types/types";
import styled from "@emotion/styled";
import MemberItem from "./VoteBoard/MemberItem";

/**
 * 국회 전광판을 모티브로 한 컴포넌트
 *
 * -[v] 국회의원들의 목록, 투표 현황
 * -[v] 이름 클릭 시 해당 국회의원 상세 페이지로 이동
 */
type VoteBoardProps = {
  voteData: VoteData2;
};

export default function VoteBoard({ voteData }: VoteBoardProps) {
  const {
    agenda,
    date,
    stats = { total: 0, attend: 0, agree: 0, disagree: 0, abstention: 0 },
    dataset,
  } = voteData;
  const { total, attend, agree, disagree, abstention } = stats;

  return (
    <VoteBoard.Container>
      <VoteBoard.Agenda text={agenda} time={date} />
      <VoteBoard.Stats
        total={total}
        attend={attend}
        agree={agree}
        disagree={disagree}
        abstention={abstention}
      />
      <VoteBoard.MemberList dataset={dataset} />
    </VoteBoard.Container>
  );
}

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="p-4 bg-[var(--vote-board-background-color)] text-gray-100">
      {children}
    </div>
  );
};

type AgendaProps = {
  text: string;
  time?: string;
};
const Agenda = ({ text, time }: AgendaProps) => {
  return (
    <h1 className="text-3xl font-bold text-center p-4 ">
      {text} ({time})
    </h1>
  );
};

type StatsProps = {
  total: number;
  attend: number;
  agree: number;
  disagree: number;
  abstention: number;
};
const Stats = ({ total, attend, agree, disagree, abstention }: StatsProps) => {
  return (
    <ul className="grid grid-cols-5 gap-4 p-4 list-none border-4 border-[var(--vote-board-border-color)]">
      <li>{total}</li>
      <li>{attend}</li>
      <li>{agree}</li>
      <li>{disagree}</li>
      <li>{abstention}</li>
    </ul>
  );
};

type MemberListProps = {
  dataset: VoteDataItem[];
};
const MemberList = ({ dataset }: MemberListProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {dataset.map((member: VoteDataItem) => (
        <MemberItem key={member.hgNm} hgNm={member.hgNm} vote={member.vote} />
      ))}
    </ul>
  );
};

VoteBoard.Container = Container;
VoteBoard.Agenda = Agenda;
VoteBoard.Stats = Stats;
VoteBoard.MemberList = MemberList;
