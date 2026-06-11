import Link from "next/link";
import { notFound } from "next/navigation";
import { Band } from "@/components/ui";
import { articles, founders, getFounder } from "@/lib/content";

export function generateStaticParams() {
  return founders.map((founder) => ({ slug: founder.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const founder = getFounder(slug);
  return {
    title: founder ? `${founder.name} Founder Profile` : "Founder Profile",
    description: founder ? `${founder.name} is building ${founder.app}.` : undefined
  };
}

export default async function FounderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const founder = getFounder(slug);
  if (!founder) notFound();

  const rows = [
    ["Background", founder.background],
    ["Why they built it", founder.why],
    ["Favorite AI tool", founder.favoriteTool],
    ["Biggest mistake", founder.biggestMistake],
    ["Biggest lesson", founder.biggestLesson],
    ["Current goal", founder.currentGoal]
  ];

  return (
    <main>
      <Band>
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{founder.app}</p>
          <h1 className="mt-4 font-display text-5xl font-black tracking-tight">{founder.name}</h1>
          <p className="mt-5 text-xl leading-8 text-paper/[0.72]">A founder profile about the actual build: the reason, the mistake, the lesson, and the current goal.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {rows.map(([label, value]) => (
            <section key={label} className="rounded-lg border border-line bg-white/[0.045] p-5">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-acid">{label}</h2>
              <p className="mt-3 text-sm leading-6 text-paper/[0.72]">{value}</p>
            </section>
          ))}
        </div>
        <section className="mt-10 rounded-lg border border-line bg-white/[0.045] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">First Article</p>
          <h2 className="mt-3 font-display text-3xl font-bold">{articles[0].title}</h2>
          <p className="mt-3 text-sm leading-6 text-paper/[0.68]">{articles[0].category} · {articles[0].date}</p>
          <Link href={`/articles/${articles[0].slug}`} className="mt-5 inline-flex text-sm font-bold text-acid">Read article</Link>
        </section>
      </Band>
    </main>
  );
}
