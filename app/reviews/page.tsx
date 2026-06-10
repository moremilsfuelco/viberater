import { Band, ReviewCard, SectionHeader } from "@/components/ui";
import { reviews } from "@/lib/content";

export const metadata = {
  title: "Vibe-Coded App Reviews",
  description: "A directory of honest reviews for vibe-coded apps and indie AI startups."
};

export default function ReviewsPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Directory" title="Vibe-Coded App Reviews" body="Every review scores the product, the business potential, the AI slop risk, and whether we would actually keep it." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => <ReviewCard key={review.slug} review={review} />)}
        </div>
      </Band>
    </main>
  );
}
