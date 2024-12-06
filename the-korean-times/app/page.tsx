import ContentHeader from "@/components/layout/ContentHeader";
import VoteBoard from "@/components/VoteBoard";

import voteData from "@/public/241203_martial_law_clear.json";

export default function Home() {
  return (
    <>
      <ContentHeader>fdfa</ContentHeader>
      <VoteBoard voteData={voteData} />
    </>
  );
}
