"use client";

import { useRouter } from "next/navigation";

export default function MemberItem({
  children,
  enNm,
}: {
  children: React.ReactNode;
  enNm?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/member/22/${enNm}`);
  };
  return <div onClick={handleClick}>{children}</div>;
}
