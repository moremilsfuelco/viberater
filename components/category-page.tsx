import Link from "next/link";
import { Band, ReviewCard, SectionHeader } from "@/components/ui";
import { buildingProjects, categoryPages, getCategoryPage, reviews, tallyUrl } from "@/lib/content";

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

  const relatedProjects = buildingProjects.filter((project) => {
    if (slug.includes("fitness")) return ["RaceIQ", "Athlo"].includes(project.name);
    if (slug.includes("productivity")) return project.name === "ClaimCheck";
    if (slug.includes("lovable")) return project.tools.includes("Lovable");
    if (slug.includes("claude")) return project.tools.includes("Claude Code");
    if (slug.includes("replit")) return project.tools.includes("Replit");
    return true;
  });

  return (
    <main>
      <Band>
        <SectionHeader kicker="SEO Guide" title={page.title} body={page.dek} />
        <div className="rounded-lg border border-line bg-white/[0.045] p-5">
          <p className="text-sm leading-7 text-paper/[0.70]">
            Vibe Rater tracks vibe-coded app reviews, indie AI startups, and founder stories with human judgment instead of launch hype. As more real apps come in, this page gets sharper.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {page.keywords.split(", ").map((keyword) => (
              <span key={keyword} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.60]">{keyword}</span>
            ))}
          </div>
        </div>
        {filtered.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((review) => <ReviewCard key={review.slug} review={review} />)}
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) => (
              <article key={project.name} className="rounded-lg border border-line bg-white/[0.045] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">{project.status}</p>
                <h2 className="mt-3 font-display text-2xl font-bold">{project.name}</h2>
                <p className="mt-4 text-sm leading-6 text-paper/[0.68]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.70]">{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="mt-8 rounded-lg border border-line bg-ember p-6 text-ink">
          <h2 className="font-display text-3xl font-black">Know an app that belongs here?</h2>
          <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-paper">Submit it</Link>
        </div>
      </Band>
    </main>
  );
}

export { categoryPages };
