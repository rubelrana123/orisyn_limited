import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orisyn Limited",
  description: "Orisyn Limited — quality you can trust.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${anton.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
