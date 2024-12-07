import MemberItem from "@/components/member/MemberItem";
import membersData from "@/public/national-assembly-members.json";

export default function memberListPage({
  params,
}: {
  params: { unitNm: string };
}) {
  return (
    <div className="items-center text-center text-xl">
      {membersData.map((member) => (
        <MemberItem key={member.hgNm} enNm={member.enNm}>
          {member.hgNm}
        </MemberItem>
      ))}
    </div>
  );
}
