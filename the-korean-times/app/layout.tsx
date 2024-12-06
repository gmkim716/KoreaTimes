import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-grey-50">
        <Header title="투표" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
