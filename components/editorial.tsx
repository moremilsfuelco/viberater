import Link from "next/link";
import { Band, FounderSubmissionCard, SectionHeader } from "@/components/ui";
import { EditorialArticle, getEditorialArticlesByCategory, getEditorialIndex, tallyUrl } from "@/lib/content";

const internalLinks = [
  ["Submit", tallyUrl],
  ["Reviews", "/reviews"],
  ["Vibe Score", "/vibe-score"],
  ["Articles", "/articles"],
  ["Newsletter", "/newsletter"]
];

export function EditorialIndexPage({ slug }: { slug: string }) {
  const index = getEditorialIndex(slug);
  if (!index) return null;

  const articles = getEditorialArticlesByCategory(index.category);

  return (
    <main>
      <Band>
        <SectionHeader kicker="Vibe Rater" title={index.h1} body={index.intro} />
        <div className="mb-8 flex flex-wrap gap-2">
          {internalLinks.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md border border-line bg-white/[0.055] px-3 py-2 text-xs font-bold text-paper/[0.72] transition hover:border-acid hover:text-acid">
              {label}
            </Link>
          ))}
        </div>
        {articles.length ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => <EditorialCard key={article.slug} article={article} />)}
            <FounderSubmissionCard />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-white/[0.045] p-6">
              <h2 className="font-display text-3xl font-bold">{index.emptyTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-paper/[0.68]">{index.emptyBody}</p>
            </div>
            <FounderSubmissionCard />
          </div>
        )}
      </Band>
    </main>
  );
}

export function EditorialCard({ article }: { article: EditorialArticle }) {
  const href = article.status === "published" && article.slug === "i-built-8-apps-with-ai"
    ? "/articles/i-built-8-apps-with-ai"
    : tallyUrl;

  return (
    <Link href={href} target={href === tallyUrl ? "_blank" : undefined} rel={href === tallyUrl ? "noopener noreferrer" : undefined} className="group block rounded-lg border border-line bg-white/[0.045] p-5 shadow-glow transition hover:-translate-y-1 hover:border-acid/[0.42]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-line px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-paper/[0.54]">{article.category}</span>
        <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${article.status === "published" ? "bg-acid text-ink" : "bg-white/[0.08] text-paper/[0.52]"}`}>
          {article.status}
        </span>
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-paper group-hover:text-acid">{article.title}</h2>
      <p className="mt-3 text-sm leading-6 text-paper/[0.66]">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.62]">{tag}</span>
        ))}
      </div>
    </Link>
  );
}
