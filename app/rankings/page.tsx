import Link from "next/link";
import { Band, SectionHeader } from "@/components/ui";
import { reviews, verdictLabel } from "@/lib/content";

export const metadata = {
  title: "Top Vibe-Coded Apps",
  description: "A leaderboard of AI-built startups ranked by Vibe Score."
};

export default function RankingsPage() {
  const ranked = [...reviews].sort((a, b) => b.vibeScore - a.vibeScore);
  return (
    <main>
      <Band>
        <SectionHeader kicker="Leaderboard" title="Top 100 Vibe-Coded Apps" body="The MVP leaderboard starts with seeded reviews and is ready to expand into a recurring editorial franchise." />
        <div className="overflow-hidden rounded-lg border border-line">
          {ranked.map((review, index) => (
            <Link href={`/reviews/${review.slug}`} key={review.slug} className="grid gap-4 border-b border-line bg-white/[0.035] p-4 last:border-b-0 md:grid-cols-[64px_1fr_120px_220px] md:items-center">
              <span className="font-display text-2xl font-black text-paper/[0.48]">#{index + 1}</span>
              <span>
                <strong className="block font-display text-xl">{review.appName}</strong>
                <span className="text-sm text-paper/[0.58]">{review.tagline}</span>
              </span>
              <span className="font-display text-3xl font-black text-acid">{review.vibeScore}</span>
              <span className="text-sm text-paper/[0.70]">{verdictLabel(review.verdict)}</span>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
