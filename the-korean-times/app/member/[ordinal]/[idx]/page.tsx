export default function MemberDetailPage({
  params,
}: {
  params: { idx: string };
}) {
  const idx = params.idx;

  return <>MemberDetailPage {idx}</>;
}
