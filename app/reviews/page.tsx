import { Band, FounderSubmissionCard, ReviewCard, SectionHeader } from "@/components/ui";
import { publishedReviews } from "@/lib/content";

export const metadata = {
  title: "Vibe-Coded App Reviews",
  description: "A directory of honest reviews for vibe-coded apps and indie AI startups."
};

export default function ReviewsPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Latest Reviews" title="Brutally honest app reviews" body="Every review starts with the same question: would a real person understand this, use it, trust it, and come back? Then we get into what’s promising, what’s risky, and what the founder should fix next." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {publishedReviews.length ? publishedReviews.map((review) => <ReviewCard key={review.slug} review={review} />) : null}
          <FounderSubmissionCard />
          <FounderSubmissionCard />
        </div>
      </Band>
    </main>
  );
}
