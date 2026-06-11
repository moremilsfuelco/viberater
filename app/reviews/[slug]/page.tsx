import Image from "next/image";
import { notFound } from "next/navigation";
import { Band, ScoreBadge, ShipLog } from "@/components/ui";
import { calculateVibeScore, getReview, reviews, scoreKeys, scoreLabel, scoreLabels, verdictLabel } from "@/lib/content";

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  return {
    title: review ? `${review.appName} Review` : "Review",
    description: review?.whatItDoes
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) notFound();

  const vibeScore = calculateVibeScore(review.scores);
  const scoreRows = scoreKeys.map((key) => [scoreLabels[key], review.scores[key]] as const);

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <article>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{review.category}</p>
            <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-balance">{review.appName}</h1>
            <p className="mt-4 text-xl leading-8 text-paper/[0.72]">{review.whatItDoes}</p>

            <div className="mt-6 grid gap-3 text-sm text-paper/[0.70] md:grid-cols-3">
              <Meta label="Founder" value={review.founderName} />
              <Meta label="Stage" value={review.stage} />
              <Meta label="Built with" value={review.tools.join(", ")} />
            </div>

            <ScreenshotGallery reviewName={review.appName} screenshots={review.screenshots} />

            <ReviewSection title="The Good" items={review.good} />
            <ReviewSection title="The Risk" items={review.risk} />
            <TextSection title="Monetization Notes" body={review.monetizationNotes} />
            <TextSection title="Retention Notes" body={review.retentionNotes} />
            <TextSection title="Distribution Ideas" body={review.distributionIdeas} />
            <TextSection title="Founder Advice" body={review.founderAdvice} />
            <TextSection title="Final Verdict" body={review.finalVerdict} />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-line bg-white/[0.045] p-5">
              <ScoreBadge score={vibeScore} />
              <p className="mt-5 text-sm font-bold text-acid">{verdictLabel(scoreLabel(vibeScore))}</p>
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
                <div><dt className="text-paper/[0.42]">AI Slop Risk</dt><dd>{review.signals.aiSlopRisk}</dd></div>
                <div><dt className="text-paper/[0.42]">Founder Delusion Factor</dt><dd>{review.signals.delusionFactor}</dd></div>
                <div><dt className="text-paper/[0.42]">Would I Download It?</dt><dd>{review.signals.download}</dd></div>
                <div><dt className="text-paper/[0.42]">Would I Keep It?</dt><dd>{review.signals.keep}</dd></div>
                <div><dt className="text-paper/[0.42]">Apple Rejection Risk</dt><dd>{review.signals.appleRejectionRisk}</dd></div>
              </dl>
            </div>
            <ShipLog items={review.shipLogs} />
          </aside>
        </div>
      </Band>
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-line bg-white/[0.045] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/[0.42]">{label}</p>
      <p className="mt-2 font-semibold text-paper">{value}</p>
    </div>
  );
}

function ScreenshotGallery({ reviewName, screenshots }: { reviewName: string; screenshots: Array<{ src?: string; alt: string; caption: string }> }) {
  const items = screenshots.length ? screenshots : [
    { alt: `${reviewName} screenshot pending`, caption: "Screenshots will appear here when founder-submitted, public store, or manually added images are available." }
  ];

  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-bold">Screenshots</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <figure key={item.caption} className="overflow-hidden rounded-lg border border-line bg-white/[0.045]">
            {item.src ? (
              <Image src={item.src} alt={item.alt} width={640} height={480} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-white/[0.12] to-white/[0.02] p-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.42]">
                Screenshot pending
              </div>
            )}
            <figcaption className="p-3 text-xs leading-5 text-paper/[0.58]">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
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
