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
        <SectionHeader kicker="About" title="Vibe Rater reviews the apps people are building with AI." body={morganBio} />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["What we review", "AI-built apps, indie software, mobile apps, and submitted products from founders building with tools like Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, and RevenueCat."],
            ["How we score", "A good app has to make sense fast, solve something real, feel trustworthy, and give people a reason to come back. The Vibe Score is our way of putting a number on that gut check."],
            ["Why it exists", "Most builders do not need more hype. They need a sharper read on what is working, what is confusing, and what would make someone care enough to come back."]
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
