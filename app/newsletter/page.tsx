import Link from "next/link";
import { Band, NewsletterSignup, SectionHeader } from "@/components/ui";
import { articles, beehiivUrl, newsletterIssues } from "@/lib/content";

export const metadata = {
  title: "The Weekly Vibe Check",
  description: "The Vibe Rater weekly report from someone actively getting their ass kicked by app development."
};

export default function NewsletterPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Newsletter" title="The Weekly Vibe Check" body="A weekly report from someone actively getting their ass kicked by app development. No guru nonsense. No growth hacks. Just what actually happened." />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          {newsletterIssues.map((issue) => (
            <article key={issue.slug} className="rounded-lg border border-line bg-white/[0.045] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{issue.date}</p>
              <h2 className="mt-3 font-display text-3xl font-bold">{issue.title}</h2>
              <div className="mt-6 grid gap-3 text-sm text-paper/[0.70] md:grid-cols-2">
                <NewsletterItem label="App of the Week" value={issue.appOfWeek} />
                <NewsletterItem label="Founder of the Week" value={issue.founderOfWeek} />
                <NewsletterItem label="Vibe-Coded Launches" value="RaceIQ, plus open slots for founder submissions" />
                <NewsletterItem label="Latest Article" value={articles[0].title} />
                <NewsletterItem label="AI Tool of the Week" value={issue.toolOfWeek} />
                <NewsletterItem label="What We're Building" value={issue.building} wide />
              </div>
              <Link href={`/articles/${issue.articleSlug}`} className="mt-6 inline-flex text-sm font-bold text-acid">Read the first article</Link>
            </article>
          ))}
          <NewsletterSignup />
        </div>
        <Link href={beehiivUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-md bg-acid px-5 py-3 text-sm font-bold text-ink transition hover:bg-paper">
          Join the Weekly Vibe Check
        </Link>
      </Band>
    </main>
  );
}

function NewsletterItem({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`rounded-md bg-black/[0.22] p-4 ${wide ? "md:col-span-2" : ""}`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-acid">{label}</p>
      <p className="mt-2 leading-6">{value}</p>
    </div>
  );
}
