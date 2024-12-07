export default function ContentBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto px-4">{children}</div>;
}
