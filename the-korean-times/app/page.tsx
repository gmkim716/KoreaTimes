import BoardWidget from "@/components/widgets/Board";

import members from "@/public/national-assembly-members.json";

export default function Home() {
  if (!members) {
    return;
  }

  return (
    <div>
      <BoardWidget members={members} />
    </div>
  );
}
