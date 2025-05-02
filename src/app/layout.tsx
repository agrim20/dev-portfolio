import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata = {
  title: "Your Name | Front-End Developer",
  description: "Portfolio of a React + TypeScript developer based in Belgium.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto w-full p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
