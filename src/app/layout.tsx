import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/src/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parveen Kumar | Full-Stack Software Engineer",
  description:
    "Parveen Kumar is a Full-Stack Software Engineer specializing in Next.js, React, Java, Spring Boot, MySQL, and scalable web applications.",
  keywords: [
    "Parveen Kumar",
    "Full Stack Software Engineer",
    "Frontend Engineer",
    "Next.js Developer",
    "React Developer",
    "Spring Boot Developer",
    "Java Developer",
    "Software Engineer Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}