import Link from "next/link";
import { Band, SectionHeader } from "@/components/ui";
import { articles } from "@/lib/content";

export const metadata = {
  title: "Articles",
  description: "Vibe Rater essays, build notes, and dispatches."
};

export default function ArticlesPage() {
  return (
    <main>
      <Band>
        <SectionHeader kicker="Articles" title="Dispatches from the build" body="The stuff that happened after the app technically worked. Launches, mistakes, App Store fights, Reddit bruises, and the occasional useful lesson." />
        <div className="grid gap-4">
          {articles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article.slug} className="rounded-lg border border-line bg-white/[0.045] p-6 shadow-glow transition hover:-translate-y-1 hover:border-acid/[0.45]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{article.category} · {article.date}</p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black tracking-tight">{article.title}</h2>
              <p className="mt-4 text-sm leading-6 text-paper/[0.68]">By {article.author}</p>
            </Link>
          ))}
        </div>
      </Band>
    </main>
  );
}
