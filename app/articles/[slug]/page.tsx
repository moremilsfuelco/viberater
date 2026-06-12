import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Band } from "@/components/ui";
import { articles, editorialArticles, getArticle, getEditorialArticle, siteUrl } from "@/lib/content";

export function generateStaticParams() {
  return Array.from(new Set([...articles, ...editorialArticles].map((article) => article.slug))).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const editorial = getEditorialArticle(slug);
  return {
    title: article?.title ?? editorial?.title ?? "Article",
    description: article?.excerpt ?? editorial?.excerpt,
    openGraph: article || editorial
      ? {
          title: article?.title ?? editorial!.title,
          description: article?.excerpt ?? editorial!.excerpt,
          url: `${siteUrl}/articles/${article?.slug ?? editorial!.slug}`,
          type: "article",
          siteName: "Vibe Rater",
          publishedTime: article?.date,
          authors: article ? [article.author] : undefined,
          images: [
            {
              url: "/opengraph-image",
              width: 1200,
              height: 630,
              alt: "Vibe Rater - We Rate The Apps People Built With Vibes"
            }
          ]
        }
      : undefined,
    twitter: article || editorial
      ? {
          card: "summary_large_image",
          title: article?.title ?? editorial!.title,
          description: article?.excerpt ?? editorial!.excerpt,
          images: ["/opengraph-image"]
        }
      : undefined
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const editorial = getEditorialArticle(slug);
  if (!article && !editorial) notFound();

  return (
    <main>
      <Band>
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{article?.category ?? editorial!.category}{article ? ` · ${article.date}` : ` · ${editorial!.status}`}</p>
          {article ? <p className="mt-5 text-sm font-bold text-acid">By <Link href={`/founders/${article.authorSlug}`}>{article.author}</Link></p> : null}
          <div className="mt-10 space-y-6 rounded-lg border border-line bg-white/[0.045] p-6">
            {article ? <ArticleBody body={article.body} /> : <EditorialBody article={editorial!} />}
          </div>
        </article>
      </Band>
    </main>
  );
}

function EditorialBody({ article }: { article: NonNullable<ReturnType<typeof getEditorialArticle>> }) {
  return (
    <>
      <h1 className="font-display text-5xl font-black leading-[0.96] tracking-tight text-balance">{article.title}</h1>
      <p className="text-base leading-8 text-paper/[0.78]">{article.excerpt}</p>
      {article.status === "draft" ? (
        <p className="rounded-md border border-line bg-black/[0.20] p-4 text-sm font-semibold leading-6 text-paper/[0.70]">
          This piece is in the editorial queue. The working title and structure are live so founders can see what Vibe Rater is building toward.
        </p>
      ) : null}
      {article.bodySections.map((section) => (
        <section key={section.heading}>
          <h2 className="font-display text-3xl font-bold">{section.heading}</h2>
          <p className="mt-3 text-base leading-8 text-paper/[0.78]">{section.body}</p>
        </section>
      ))}
    </>
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
