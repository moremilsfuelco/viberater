import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Band } from "@/components/ui";
import { articles, getArticle } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article?.title ?? "Article",
    description: article?.excerpt
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <Band>
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{article.category} · {article.date}</p>
          <p className="mt-5 text-sm font-bold text-acid">By <Link href={`/founders/${article.authorSlug}`}>{article.author}</Link></p>
          <div className="mt-10 space-y-6 rounded-lg border border-line bg-white/[0.045] p-6">
            <ArticleBody body={article.body} />
          </div>
        </article>
      </Band>
    </main>
  );
}

function ArticleBody({ body }: { body: string }) {
  return body.split("\n\n").map((block, index) => {
    if (block.startsWith("# ")) {
      return (
        <h1 key={index} className="font-display text-5xl font-black leading-[0.96] tracking-tight text-balance">
          {block.replace("# ", "")}
        </h1>
      );
    }

    return (
      <p key={index} className="text-base leading-8 text-paper/[0.78]">
        {block.split("\n").map((line, lineIndex) => (
          <Fragment key={`${index}-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {line}
          </Fragment>
        ))}
      </p>
    );
  });
}
