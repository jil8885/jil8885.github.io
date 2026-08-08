import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jil8885",
  description: "공부한 내용과 진행한 프로젝트를 기록하는 블로그",
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
};

const NAV_LINKS = [
  { href: "/", label: "홈" },
  { href: "/posts", label: "포스트" },
  { href: "/tags", label: "태그" },
  { href: "/about", label: "소개" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <nav className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              jil8885
            </Link>
            <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
          {children}
        </main>
        <footer className="border-t border-neutral-200 px-4 py-6 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-500">
          © {new Date().getFullYear()} jil8885
        </footer>
      </body>
    </html>
  );
}
