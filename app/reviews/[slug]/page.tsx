import { notFound } from "next/navigation";
import { Band, ScoreBadge, ShipLog } from "@/components/ui";
import { getReview, reviews, verdictLabel } from "@/lib/content";

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  return {
    title: review ? `${review.appName} Review` : "Review",
    description: review?.tagline
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) notFound();

  const scoreRows = [
    ["Design", review.scores.design],
    ["Usability", review.scores.usability],
    ["Retention Potential", review.scores.retention],
    ["Monetization Potential", review.scores.monetization],
    ["Differentiation", review.scores.differentiation],
    ["Trust & Security", review.scores.trust]
  ];

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <article>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{review.category}</p>
            <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-balance">{review.appName}</h1>
            <p className="mt-4 text-xl leading-8 text-paper/[0.72]">{review.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {review.tools.map((tool) => <span key={tool} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.70]">{tool}</span>)}
            </div>
            <p className="mt-6 rounded-lg border border-line bg-white/[0.04] p-4 text-sm leading-6 text-paper/[0.64]">Assumptions: {review.assumptions}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Screenshot placeholder", "Product flow placeholder", "Founder proof placeholder"].map((label) => (
                <div key={label} className="aspect-[4/3] rounded-lg border border-line bg-gradient-to-br from-white/[0.12] to-white/[0.02] p-4 text-xs uppercase tracking-[0.18em] text-paper/[0.40]">{label}</div>
              ))}
            </div>

            <ReviewSection title="The Good" items={review.good} />
            <ReviewSection title="The Risk" items={review.risk} />
            <TextSection title="Money Potential" body={review.moneyPotential} />
            <TextSection title="Founder Advice" body={review.founderAdvice} />
            <TextSection title="Final Verdict" body={review.finalVerdict} />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-line bg-white/[0.045] p-5">
              <ScoreBadge score={review.vibeScore} />
              <p className="mt-5 text-sm font-bold text-acid">{verdictLabel(review.verdict)}</p>
              <div className="mt-5 space-y-3">
                {scoreRows.map(([label, score]) => (
                  <div key={label} className="flex items-center justify-between border-b border-line pb-2 text-sm">
                    <span className="text-paper/[0.62]">{label}</span>
                    <span className="font-bold text-paper">{score}/10</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-line bg-white/[0.045] p-5 text-sm">
              <p className="font-bold text-paper">Reality Checks</p>
              <dl className="mt-4 space-y-3 text-paper/[0.68]">
                <div><dt className="text-paper/[0.42]">Founder Delusion Factor</dt><dd>{review.signals.delusionFactor}</dd></div>
                <div><dt className="text-paper/[0.42]">AI Slop Risk</dt><dd>{review.signals.aiSlopRisk}</dd></div>
                <div><dt className="text-paper/[0.42]">Would I Download It?</dt><dd>{review.signals.download}</dd></div>
                <div><dt className="text-paper/[0.42]">Would I Keep It?</dt><dd>{review.signals.keep}</dd></div>
              </dl>
            </div>
            <ShipLog items={review.shipLogs} />
          </aside>
        </div>
      </Band>
    </main>
  );
}

function ReviewSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-paper/[0.70]">
        {items.map((item) => <li key={item} className="border-l-2 border-acid pl-4">{item}</li>)}
      </ul>
    </section>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-paper/[0.70]">{body}</p>
    </section>
  );
}
