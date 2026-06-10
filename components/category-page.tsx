import Link from "next/link";
import { Band, ReviewCard, SectionHeader } from "@/components/ui";
import { categoryPages, getCategoryPage, reviews } from "@/lib/content";

export function categoryMetadata(slug: string) {
  const page = getCategoryPage(slug);
  return {
    title: page?.title ?? "Vibe Rater",
    description: page?.dek,
    keywords: page?.keywords
  };
}

export function CategoryPage({ slug }: { slug: string }) {
  const page = getCategoryPage(slug);
  if (!page) return null;

  const filtered = reviews.filter((review) => {
    if (slug.includes("fitness")) return review.category.toLowerCase().includes("fitness");
    if (slug.includes("productivity")) return review.category.toLowerCase().includes("productivity");
    if (slug.includes("lovable")) return review.tools.includes("Lovable");
    if (slug.includes("claude")) return review.tools.includes("Claude Code");
    if (slug.includes("replit")) return review.tools.includes("Replit");
    return true;
  });

  return (
    <main>
      <Band>
        <SectionHeader kicker="SEO Guide" title={page.title} body={page.dek} />
        <div className="rounded-lg border border-line bg-white/[0.045] p-5">
          <p className="text-sm leading-7 text-paper/[0.70]">
            Vibe Rater tracks vibe-coded app reviews, indie AI startups, and AI founder stories with human judgment instead of launch hype. This page is designed to become a durable editorial hub as more reviews are published.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.keywords.split(", ").map((keyword) => (
              <span key={keyword} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.60]">{keyword}</span>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(filtered.length ? filtered : reviews).map((review) => <ReviewCard key={review.slug} review={review} />)}
        </div>
        <div className="mt-8 rounded-lg border border-line bg-ember p-6 text-ink">
          <h2 className="font-display text-3xl font-black">Know an app that belongs here?</h2>
          <Link href="/submit" className="mt-4 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-paper">Submit it</Link>
        </div>
      </Band>
    </main>
  );
}

export { categoryPages };
