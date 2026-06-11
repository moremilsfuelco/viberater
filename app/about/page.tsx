import { Band, SectionHeader } from "@/components/ui";
import { morganBio } from "@/lib/content";

export const metadata = {
  title: "About",
  description: "About Vibe Rater, a publication and discovery platform for AI-built startups."
};

export default function AboutPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="About" title="Vibe Rater is a founder-led publication for the vibe-coding era." body={morganBio} />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["What we review", "AI-built apps, indie software, mobile apps, and submitted products from founders building with tools like Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, and RevenueCat."],
            ["How we score", "Every Vibe Score averages eight criteria: product clarity, usefulness, design/UX, retention potential, monetization potential, differentiation, trust and safety, and founder-market fit."],
            ["Why it exists", "The goal is not to dunk on founders. The goal is to tell the truth in a useful way so builders can make products people actually use."]
          ].map(([title, body]) => (
            <section key={title} className="rounded-lg border border-line bg-white/[0.045] p-5">
              <h2 className="font-display text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-paper/[0.70]">{body}</p>
            </section>
          ))}
        </div>
      </Band>
    </main>
  );
}
