import { VoteData2, VoteDataItem } from "@/types/types";
import MemberItem from "./VoteBoard/MemberItem";

type VoteBoardProps = {
  voteData: VoteData2;
};

/**
 * 국회 전광판을 모티브로 한 컴포넌트
 *
 * -[v] 국회의원들의 목록, 투표 현황
 * -[v] 이름 클릭 시 해당 국회의원 상세 페이지로 이동
 */

export default function VoteBoard({ voteData }: VoteBoardProps) {
  const { agenda, date, stats, dataset } = voteData;

  return (
    <VoteBoard.Container>
      <VoteBoard.Agenda text={agenda} time={date} />
      <VoteBoard.Stats stats={stats} />
      <VoteBoard.MemberList dataset={dataset} />
    </VoteBoard.Container>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-[var(--vote-board-background-color)] text-gray-100">
      {children}
    </div>
  );
};
const Agenda = ({ text, time }: { text: string; time?: string }) => {
  return (
    <h1 className="text-3xl font-bold text-center p-4 ">
      {text} ({time})
    </h1>
  );
};
type StatsProps = {
  stats: {
    total: number;
    attend: number;
    agree: number;
    disagree: number;
    abstention: number;
  };
};
const Stats = ({ stats }: StatsProps) => {
  const { total, attend, agree, disagree, abstention } = stats;
  return (
    <ul className="grid grid-cols-5 gap-4 list-none border-4 border-[var(--vote-board-border-color)] text-center text-2xl divide-x-4 divide-[var(--vote-board-border-color)]">
      <li className="p-4">재석: {total} 인</li>
      <li className="p-4">재석: {attend} 인</li>
      <li className="p-4 text-[var(--agree)]">찬성: {agree} 인</li>
      <li className="p-4 text-[var(--disagree)]">반대: {disagree} 인</li>
      <li className="p-4 text-[var(--abstension)]">기권: {abstention} 인</li>
    </ul>
  );
};
const MemberList = ({ dataset }: { dataset: VoteDataItem[] }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 cursor-pointer">
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
