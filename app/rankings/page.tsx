import Link from "next/link";
import { Band, SectionHeader } from "@/components/ui";
import { calculateVibeScore, publishedReviews, scoreLabel, verdictLabel } from "@/lib/content";

export const metadata = {
  title: "Launch Review Scores",
  description: "Current Vibe Rater launch reviews scored by the Vibe Score framework."
};

export default function RankingsPage() {
  const ranked = [...publishedReviews].sort((a, b) => calculateVibeScore(b.scores) - calculateVibeScore(a.scores));
  return (
    <main>
      <Band>
        <SectionHeader kicker="Vibe Score" title="Launch Review Scores" body="A score view for real Vibe Rater launch reviews. New products are added after founders submit through the live form." />
        <div className="overflow-hidden rounded-lg border border-line">
          {ranked.map((review, index) => (
            <Link href={`/reviews/${review.slug}`} key={review.slug} className="grid gap-4 border-b border-line bg-white/[0.035] p-4 last:border-b-0 md:grid-cols-[64px_1fr_120px_220px] md:items-center">
              <span className="font-display text-2xl font-black text-paper/[0.48]">#{index + 1}</span>
              <span>
                <strong className="block font-display text-xl">{review.appName}</strong>
                <span className="text-sm text-paper/[0.58]">{review.whatItDoes}</span>
              </span>
              <span className="font-display text-3xl font-black text-acid">{calculateVibeScore(review.scores).toFixed(1)}</span>
              <span className="text-sm text-paper/[0.70]">{verdictLabel(scoreLabel(calculateVibeScore(review.scores)))}</span>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
