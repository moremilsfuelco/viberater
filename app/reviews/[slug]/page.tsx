import Image from "next/image";
import { notFound } from "next/navigation";
import { existsSync, readdirSync } from "fs";
import path from "path";
import { Band, ShipLog } from "@/components/ui";
import { calculateVibeScore, getReview, reviews, scoreKeys, scoreLabel, scoreLabels, siteUrl, verdictLabel } from "@/lib/content";
import type { Screenshot } from "@/lib/content";

const screenshotExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  return {
    title: review ? `${review.appName} Review` : "Review",
    description: review?.excerpt ?? review?.whatItDoes,
    openGraph: review
      ? {
          title: `${review.appName} Review`,
          description: review.excerpt,
          url: `${siteUrl}/reviews/${review.slug}`,
          type: "article",
          siteName: "Vibe Rater",
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
    twitter: review
      ? {
          card: "summary_large_image",
          title: `${review.appName} Review`,
          description: review.excerpt,
          images: ["/opengraph-image"]
        }
      : undefined
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = getReview(slug);
  if (!review) notFound();

  const vibeScore = calculateVibeScore(review.scores);
  const scoreRows = scoreKeys.map((key) => [scoreLabels[key], review.scores[key]] as const);
  const screenshots = getReviewScreenshots(review.slug, review.appName, review.screenshots);

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-pool">{review.category}</p>
            <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-balance">{review.appName}</h1>
            <p className="mt-4 text-xl leading-8 text-paper/[0.74]">{review.excerpt}</p>

            <div className="mt-6 grid gap-3 text-sm text-paper/[0.70] md:grid-cols-3">
              <Meta label="Founder" value={review.founderName} />
              <Meta label="Stage" value={review.stage} />
              <Meta label="Built with" value={review.tools.join(", ")} />
            </div>

            <ScreenshotGallery reviewName={review.appName} screenshots={screenshots} />

            <TextSection title="What It Is" body={review.narrative.whatItIs} />
            <TextSection title="First Impression" body={review.narrative.firstImpression} />
            <ReviewSection title="What's Working" items={review.narrative.whatsWorking} />
            <ReviewSection title="What's Risky" items={review.narrative.whatsRisky} />
            <TextSection title="What I'd Do Next If It Were Mine" body={review.narrative.whatIdDoNext} />
            <TextSection title="Monetization Thoughts" body={review.narrative.monetizationThoughts} />
            <TextSection title="Would I Keep Building It?" body={review.narrative.wouldIKeepBuildingIt} />
            <ScoreBreakdown score={vibeScore} scoreRows={scoreRows} signals={review.signals} />
            <TextSection title="Final Verdict" body={review.narrative.finalVerdict} />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-line bg-white/[0.045] p-5 text-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">Review notes</p>
              <dl className="mt-4 space-y-3 text-paper/[0.68]">
                <div><dt className="text-paper/[0.42]">Built with</dt><dd>{review.tools.join(", ")}</dd></div>
                <div><dt className="text-paper/[0.42]">Stage</dt><dd>{review.stage}</dd></div>
                <div><dt className="text-paper/[0.42]">Category</dt><dd>{review.category}</dd></div>
              </dl>
            </div>
            <ShipLog items={review.shipLogs} />
          </aside>
        </div>
      </Band>
    </main>
  );
}

function getReviewScreenshots(slug: string, appName: string, contentScreenshots: Screenshot[]) {
  const folder = path.join(process.cwd(), "public", "reviews", slug);

  if (!existsSync(folder)) {
    return contentScreenshots;
  }

  const folderScreenshots = readdirSync(folder)
    .filter((file) => screenshotExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      src: `/reviews/${slug}/${file}`,
      alt: `${appName} screenshot ${index + 1}`,
      caption: humanizeScreenshotName(file)
    }));

  return [...contentScreenshots, ...folderScreenshots];
}

function humanizeScreenshotName(file: string) {
  const name = path.basename(file, path.extname(file)).replace(/^\d+[-_ ]*/, "");
  const words = name.replace(/[-_]+/g, " ").trim();

  if (!words) {
    return "Product screenshot";
  }

  return words.charAt(0).toUpperCase() + words.slice(1);
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
    { alt: `${reviewName} screenshot pending`, caption: "Screenshots will appear here when founder-submitted or public store images are available." }
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
      <ul className="mt-4 space-y-3 text-base leading-7 text-paper/[0.74]">
        {items.map((item) => <li key={item} className="border-l-2 border-acid pl-4">{item}</li>)}
      </ul>
    </section>
  );
}

function TextSection({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-base leading-8 text-paper/[0.74]">{body}</p>
    </section>
  );
}

function ScoreBreakdown({
  score,
  scoreRows,
  signals
}: {
  score: number;
  scoreRows: readonly (readonly [string, number])[];
  signals: {
    aiSlopRisk: string;
    delusionFactor: string;
    download: string;
    keep: string;
    appleRejectionRisk: string;
  };
}) {
  return (
    <section className="mt-12 rounded-lg border border-line bg-white/[0.045] p-5 md:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">The Score, After the Coffee</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-display text-6xl font-black leading-none text-acid">{score.toFixed(1)}</p>
          <p className="mt-2 text-sm font-bold text-paper">{verdictLabel(scoreLabel(score))}</p>
        </div>
        <p className="max-w-md text-sm leading-6 text-paper/[0.64]">
          The number is the receipt, not the review. It is there to make the judgment easier to compare, not to replace the part where a human says what is actually going on.
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {scoreRows.map(([label, rowScore]) => (
          <div key={label} className="flex items-center justify-between rounded-md border border-line bg-black/[0.22] px-3 py-2 text-sm">
            <span className="text-paper/[0.64]">{label}</span>
            <span className="font-bold text-paper">{rowScore}/10</span>
          </div>
        ))}
      </div>
      <dl className="mt-6 grid gap-3 text-sm text-paper/[0.70] sm:grid-cols-2">
        <div className="rounded-md bg-white/[0.06] p-3"><dt className="text-paper/[0.42]">AI Slop Risk</dt><dd>{signals.aiSlopRisk}</dd></div>
        <div className="rounded-md bg-white/[0.06] p-3"><dt className="text-paper/[0.42]">Founder Delusion Factor</dt><dd>{signals.delusionFactor}</dd></div>
        <div className="rounded-md bg-white/[0.06] p-3"><dt className="text-paper/[0.42]">Would I Download It?</dt><dd>{signals.download}</dd></div>
        <div className="rounded-md bg-white/[0.06] p-3"><dt className="text-paper/[0.42]">Would I Keep It?</dt><dd>{signals.keep}</dd></div>
        <div className="rounded-md bg-white/[0.06] p-3 sm:col-span-2"><dt className="text-paper/[0.42]">Apple Rejection Risk</dt><dd>{signals.appleRejectionRisk}</dd></div>
      </dl>
    </section>
  );
}
