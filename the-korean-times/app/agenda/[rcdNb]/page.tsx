import ContentBody from "@/components/layout/ContentBody";
import ContentHeader from "@/components/layout/ContentHeader";
import VoteBoard from "@/components/VoteBoard";
import { VoteData2 } from "@/types/types";
import ChartJsPieChart from "@/ui/chartjs/PieChart";
import VoteData from "@/public/241203_martial_law_clear.json";

export default async function AgendaPage({
  params,
}: {
  params: { rcdNb: string };
}) {
  const rcdNb = params.rcdNb;
  const tempVoteData: VoteData2 = {
    agenda: "계엄령 해제 표결",
    date: "2024-12-03",
    stats: {
      total: 300,
      attend: 200,
      agree: 150,
      disagree: 50,
      abstention: 0,
    },
    dataset: [
      {
        hgNm: "홍길동",
        vote: "agree",
      },
      {
        hgNm: "이순신",
        vote: "disagree",
      },
      {
        hgNm: "강감찬",
        vote: "abstention",
      },
    ],
  };

  return (
    <>
      <ContentHeader>{rcdNb} 회의록</ContentHeader>
      <ContentBody>
        <VoteBoard voteData={VoteData} />
        <ChartJsPieChart width="600px" height="600px" />

        <h1>관련 기사</h1>
        <ul>
          <li>계엄령 해제 표결 관련 기사 1</li>
          <li>계엄령 해제 표결 관련 기사 2</li>
          <li>계엄령 해제 표결 관련 기사 3</li>
        </ul>
      </ContentBody>
    </>
  );
}
