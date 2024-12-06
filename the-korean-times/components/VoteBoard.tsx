import { VoteData2, VoteDataItem } from "@/types/types";
import MemberItem from "./VoteBoard/MemberItem";

/**
 * 국회 전광판을 모티브로 한 컴포넌트
 *
 * -[v] 국회의원들의 목록, 투표 현황
 * -[v] 이름 클릭 시 해당 국회의원 상세 페이지로 이동
 */

export default function VoteBoard({ voteData }: VoteBoardProps) {
  const {
    agenda = "",
    date = "",
    stats = { total: 0, attend: 0, agree: 0, disagree: 0, abstention: 0 },
    dataset = [],
  } = voteData;

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

const Stats = ({ stats }: StatsProps) => {
  const { total, attend, agree, disagree, abstention } = stats;
  return (
    <ul className="grid grid-cols-5 gap-4 p-4 list-none border-4 border-[var(--vote-board-border-color)] text-center text-2xl">
      <StatsItem value={total} />
      <StatsItem value={attend} />
      <StatsItem value={agree} />
      <StatsItem value={disagree} />
      <StatsItem value={abstention} />
    </ul>
  );
};
const StatsItem = ({ value }: { value: number }) => {
  return <li>{value} 인</li>;
};
const MemberList = ({ dataset }: { dataset: VoteDataItem[] }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {dataset.map((member: VoteDataItem) => (
        <MemberItem key={member.hgNm} hgNm={member.hgNm} vote={member.vote} />
      ))}
    </ul>
  );
};

type VoteBoardProps = {
  voteData: VoteData2;
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

VoteBoard.Container = Container;
VoteBoard.Agenda = Agenda;
VoteBoard.Stats = Stats;
VoteBoard.MemberList = MemberList;
