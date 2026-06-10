import { Band, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "About",
  description: "About Vibe Rater, a publication and discovery platform for AI-built startups."
};

export default function AboutPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="About" title="Vibe Rater is a media company for the vibe-coding era." body="Not a SaaS. Not a dashboard. A publication, review platform, founder directory, and discovery engine for the next generation of AI-built startups." />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["What we review", "Apps, tools, launches, prototypes, and startups built with Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, RevenueCat, and more."],
            ["How we score", "Design, usability, retention potential, monetization potential, differentiation, trust, founder delusion factor, AI slop risk, and whether we would actually keep it."],
            ["How this becomes a business", "Founder spotlights, featured placements, newsletter sponsorship, Top 100 lists, founder interviews, job board, and AI tool sponsorships."]
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
