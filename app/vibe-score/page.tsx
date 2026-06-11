import { Band, SectionHeader } from "@/components/ui";
import { scoringFramework } from "@/lib/content";

export const metadata = {
  title: "What is a Vibe Score?",
  description: "How Vibe Rater judges whether an AI-built app feels clear, useful, trustworthy, and worth coming back to."
};

const labels = [
  ["9.0-10", "Dangerous If Executed Well"],
  ["8.0-8.9", "Strong Potential"],
  ["7.0-7.9", "Early Signal"],
  ["6.0-6.9", "Needs Sharpening"],
  ["5.0-5.9", "Interesting But Messy"],
  ["Below 5", "Probably Not A Business"]
];

export default function VibeScorePage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Vibe Score" title="What is a Vibe Score?" body="The Vibe Score is our gut-check number for whether an app feels clear, useful, trustworthy, and worth coming back to. We’re not here to be fake nice, and we’re not here to dunk on people for sport. The point is to give builders feedback they can actually use." />
        <div className="grid gap-4 md:grid-cols-2">
          {scoringFramework.map(([title, body], index) => (
            <section key={title} className="rounded-lg border border-line bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">Score {index + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-paper/[0.70]">{body}</p>
            </section>
          ))}
        </div>
        <section className="mt-10 rounded-lg border border-line bg-white/[0.045] p-6">
          <h2 className="font-display text-3xl font-bold">Overall Vibe Score</h2>
          <p className="mt-3 text-sm leading-7 text-paper/[0.70]">We score the things that usually decide whether an app has a shot: can people understand it, does it solve a real problem, does it feel safe, and would anyone come back after the first try. The number is there to make the judgment easier to scan. The notes are where the real value lives.</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {labels.map(([range, label]) => (
              <div key={range} className="rounded-md border border-line bg-black/[0.22] p-4">
                <p className="font-display text-2xl font-black text-acid">{range}</p>
                <p className="mt-1 text-sm font-bold text-paper">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </Band>
    </main>
  );
}
