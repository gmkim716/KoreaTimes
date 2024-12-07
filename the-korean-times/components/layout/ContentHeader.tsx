export default function ContentHeader({
  children,
  bgImg,
}: {
  children: React.ReactNode;
  bgImg?: string;
}) {
  return (
    <div
      className="4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-xl text-white"
      style={{
        background: "var(--bg-gradient-navbar)",
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
      }}
    >
      {children}
    </div>
  );
}
