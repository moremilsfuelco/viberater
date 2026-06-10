import { Band, NewsletterSignup, SectionHeader } from "@/components/ui";
import { newsletterIssues } from "@/lib/content";

export const metadata = {
  title: "Newsletter Archive",
  description: "The Vibe Rater newsletter archive for AI-built startups, founder stories, and weekly launch notes."
};

export default function NewsletterPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Archive" title="The Vibe Rater Dispatch" body="A reusable editorial format for the weekly newsletter." />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          {newsletterIssues.map((issue) => (
            <article key={issue.slug} className="rounded-lg border border-line bg-white/[0.045] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{issue.date}</p>
              <h2 className="mt-3 font-display text-3xl font-bold">{issue.title}</h2>
              <div className="mt-6 grid gap-3 text-sm text-paper/[0.70] md:grid-cols-2">
                <NewsletterItem label="App of the Week" value={issue.appOfWeek} />
                <NewsletterItem label="Founder of the Week" value={issue.founderOfWeek} />
                <NewsletterItem label="Vibe-Coded Launches" value="RaceIQ, HydroPal, DoughBuddy" />
                <NewsletterItem label="AI Tool of the Week" value={issue.toolOfWeek} />
                <NewsletterItem label="What We're Building" value={issue.building} wide />
              </div>
            </article>
          ))}
          <NewsletterSignup />
        </div>
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
