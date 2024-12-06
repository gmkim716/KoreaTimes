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

export default function YnVote({ agenda = tempAgenda, voteData }: VoteProps) {
  return (
    <div style={styles.container}>
      <h3 style={styles.agenda}>{agenda}</h3>
      <YnGraph dataset={voteData} />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  agenda: {
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center" as const,
  },
};

const tempAgenda = "비상계엄 해제 요구 결의안";
