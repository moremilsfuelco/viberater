import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/ui";
import { tallyUrl } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joinviberater.com"),
  title: {
    default: "Vibe Rater | Vibe-coded app reviews",
    template: "%s | Vibe Rater"
  },
  description: "Honest reviews, founder stories, launch breakdowns, and rankings for AI-built startups.",
  keywords: ["best vibe coded apps", "vibe coded app reviews", "indie ai startups", "ai founder stories", "vibe coding startups"],
  openGraph: {
    title: "Vibe Rater",
    description: "Discover the next generation of AI-built startups before everyone else.",
    url: "https://joinviberater.com",
    siteName: "Vibe Rater",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vibe Rater - We Rate The Apps People Built With Vibes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Rater",
    description: "Founder-led AI startup reviews for apps people built with vibes.",
    images: ["/opengraph-image"]
  }
};

const nav = [
  ["Reviews", "/reviews"],
  ["Articles", "/articles"],
  ["Founders", "/founders"],
  ["Vibe Score", "/vibe-score"],
  ["Best Apps", "/best-vibe-coded-apps"],
  ["Newsletter", "/newsletter"]
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="sticky top-0 z-50 border-b border-line bg-ink/[0.86] backdrop-blur-xl">
          <div className="border-b border-line/60 bg-black/[0.22]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-paper/[0.48] sm:px-6 lg:px-8">
              <span>Issue 001</span>
              <span className="hidden sm:inline">AI-built startups, reviewed by humans</span>
              <span>Open for submissions</span>
            </div>
          </div>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" aria-label="Vibe Rater home">
              <LogoMark />
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-semibold text-paper/[0.72] lg:flex">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="transition hover:text-paper">
                  {label}
                </Link>
              ))}
            </nav>
            <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="rounded-md bg-paper px-4 py-2 text-sm font-bold text-ink transition hover:bg-acid">
              Submit Your App
            </Link>
          </div>
        </header>
        {children}
        <footer className="border-t border-line bg-black/[0.30]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-paper/[0.64] sm:px-6 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
            <div>
              <p className="font-display text-lg font-bold text-paper">Vibe Rater</p>
              <p className="mt-2 max-w-md">Discover the next generation of AI-built startups before everyone else.</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/what-is-vibe-coding">What is vibe coding?</Link>
              <Link href="/best-vibe-coding-tools">Best vibe coding tools</Link>
              <Link href="/apps-built-with-ai">Apps built with AI</Link>
              <Link href="/apps-built-with-claude-code">Apps built with Claude Code</Link>
              <Link href="/apps-built-with-lovable">Apps built with Lovable</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/roast-my-app">Roast My App</Link>
              <Link href="/ai-app-review-site">AI app review site</Link>
              <Link href="/app-launch-teardowns">App launch teardowns</Link>
              <Link href="/building-in-public">Building in public</Link>
              <Link href="/founder-stories">Founder stories</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/about">About</Link>
              <Link href="/newsletter">Newsletter</Link>
              <Link href={tallyUrl} target="_blank" rel="noopener noreferrer">Submit your app</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
