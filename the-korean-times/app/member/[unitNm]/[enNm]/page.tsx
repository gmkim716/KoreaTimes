import members from "@/public/national-assembly-members.json";
import Link from "next/link";

export default async function MemberDetailPage({
  params,
}: {
  params: { unitNm: string; enNm: string };
}) {
  const tempData = members.find((member) => member.enNm === params.enNm);

  if (!tempData) {
    return <div>의원 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{tempData.hgNm} 의원 상세 정보</h1>
      <p>대수: {tempData.unitNm}</p>
      <p>이름: {tempData.hgNm}</p>
      <p>정당: {tempData.polyNm}</p>
      <p>위원회: {tempData.cmitNm}</p>
      <p>지역선거구: {tempData.origNm}</p>
      <p>성별: {tempData.gdrGbnNm}</p>
      <p>연령: ?</p>
      <p>당선횟수: {tempData.reeleGbnNm}</p>
      <p>당선방법: {tempData.electGbnNm}</p>
      <Link href={`https://www.assembly.go.kr/members/22nd/${tempData.enNm}`} />
    </div>
  );
}
