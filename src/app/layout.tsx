import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata = {
  title: "Agrim Mehra | Software Developer",
  description:
    "Portfolio of a Software developer looking for new opportunities.",
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
        <main className="flex-1 max-w-5xl mx-auto w-full p-6">
          {children} <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
