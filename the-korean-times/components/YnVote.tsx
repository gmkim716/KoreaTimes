import { VoteData } from "@/types/types";
import YnGraph from "@/ui/YnGraph";

/**
 * Vote 컴포넌트
 *
 * @returns 가로 막대 형태의 찬/반 비교 그래프
 */

type VoteProps = {
  agenda: string;
  voteData: VoteData;
};

export default function YnVote({
  agenda = "비상계엄 해제 요구 결의안",
  voteData,
}: VoteProps) {
  return (
    <div className="w-full max-w-[600px] mx-auto p-4 border border-gray-300 rounded-lg bg-gray-100">
      <h3 className="mb-3 text-lg font-bold text-center">{agenda}</h3>
      <YnGraph dataset={voteData} />
    </div>
  );
}
