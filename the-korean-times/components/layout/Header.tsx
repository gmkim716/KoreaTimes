import Link from "next/link";
import Search from "../Search";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      style={{
        background: "var(--bg-gradient-navbar)",
      }}
    >
      <nav className="flex items-center justify-between p-4 text-white">
        <div>{title}</div>
        <Search />
        <div className="flex gap-8">
          <Link href={"/signup"}>회원가입</Link>
          <Link href={"/login"}>로그인</Link>
        </div>
      </nav>
    </header>
  );
}
