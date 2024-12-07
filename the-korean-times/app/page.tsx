import ContentBody from "@/components/layout/ContentBody";
import ContentHeader from "@/components/layout/ContentHeader";
import VoteBoard from "@/components/VoteBoard";

import voteData from "@/public/241203_martial_law_clear.json";

export default function Home() {
  return (
    <>
      <ContentHeader>fcasjdjfklasdjlkf;dfa</ContentHeader>
      <ContentBody>
        <VoteBoard voteData={voteData} />
      </ContentBody>
    </>
  );
}
