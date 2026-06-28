import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-pjs",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sharvil Mithari — Frontend Developer & AI Enthusiast",
  description:
    "Computer Engineering student crafting modern web apps, AI-powered tools and intuitive digital experiences using Next.js, Python and Generative AI.",
  keywords: [
    "Sharvil Mithari",
    "Frontend Developer",
    "Next.js",
    "React",
    "AI",
    "Portfolio",
    "Web Developer",
    "Pune",
  ],
  authors: [{ name: "Sharvil Mithari" }],
  openGraph: {
    title: "Sharvil Mithari — Frontend Developer & AI Enthusiast",
    description:
      "Computer Engineering student crafting modern web apps, AI-powered tools and intuitive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
