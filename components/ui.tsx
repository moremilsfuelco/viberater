import Link from "next/link";
import { beehiivUrl, calculateVibeScore, getClaimedFounderReviewCount, isFoundingCohortFull, MAX_FREE_FOUNDERS, Review, scoreLabel, tallyUrl, verdictLabel } from "@/lib/content";

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-md border border-line bg-paper font-display text-sm font-black text-ink shadow-glow">
        VR
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block font-display text-lg font-black tracking-tight text-paper">Vibe Rater</span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-paper/[0.46]">AI Startup Reviews</span>
        </span>
      ) : null}
    </span>
  );
}

export function SectionHeader({ kicker, title, body }: { kicker?: string; title: string; body?: string }) {
  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {kicker ? <p className="text-xs font-bold uppercase tracking-[0.24em] text-acid">{kicker}</p> : null}
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">{title}</h2>
      </div>
      {body ? <p className="max-w-xl text-sm leading-6 text-paper/[0.62]">{body}</p> : null}
    </div>
  );
}

export function ScoreBadge({ score, compact = false }: { score: number; compact?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-md border border-acid/[0.40] bg-acid/[0.10] ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
      <span className="font-display text-xl font-black text-acid">{score.toFixed(1)}</span>
      <span className="text-[10px] font-bold uppercase leading-3 tracking-[0.18em] text-paper/[0.62]">Vibe<br />Score</span>
    </div>
  );
}

export function ScorePanel({ review }: { review: Review }) {
  const vibeScore = calculateVibeScore(review.scores);

  return (
    <div className="rounded-lg border border-line bg-black/[0.42] p-5 shadow-glow">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Featured Review</p>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight">{review.appName}</h2>
          <p className="mt-2 text-sm leading-6 text-paper/[0.66]">{review.excerpt}</p>
        </div>
        <div className="min-w-24 rounded-lg border border-acid/[0.48] bg-acid text-center text-ink" aria-label={`${review.appName} Vibe Score ${vibeScore.toFixed(1)}`}>
          <p className="border-b border-ink/[0.16] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Vibe Score</p>
          <p className="px-3 py-4 font-display text-5xl font-black leading-none">{vibeScore.toFixed(1)}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-md bg-white/[0.07] p-3"><span className="block text-paper/[0.48]">Verdict</span>{verdictLabel(scoreLabel(vibeScore))}</div>
        <div className="rounded-md bg-white/[0.07] p-3"><span className="block text-paper/[0.48]">Read if you care about</span>{review.category}</div>
      </div>
      <Link href={`/reviews/${review.slug}`} className="mt-5 inline-flex rounded-md bg-paper px-4 py-2 text-sm font-bold text-ink transition hover:bg-acid">
        Read the review
      </Link>
    </div>
  );
}

export function ReviewCard({ review, featured = false }: { review: Review; featured?: boolean }) {
  const vibeScore = calculateVibeScore(review.scores);

  return (
    <Link href={`/reviews/${review.slug}`} className={`group block rounded-lg border border-line bg-white/[0.045] p-5 shadow-glow transition hover:-translate-y-1 hover:border-paper/[0.28] ${featured ? "md:p-7" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{review.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper group-hover:text-acid">{review.appName}</h3>
        </div>
        <ScoreBadge score={vibeScore} compact />
      </div>
      <p className="mt-4 text-sm leading-6 text-paper/[0.68]">{review.excerpt}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper/[0.46]">Founder: {review.founderName}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {review.tools.map((tool) => (
          <span key={tool} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.70]">{tool}</span>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-paper">{verdictLabel(scoreLabel(vibeScore))}</p>
      <p className="mt-1 text-xs text-paper/[0.48]">Score included. Actual judgment inside.</p>
    </Link>
  );
}

export function Band({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-4 py-14 sm:px-6 lg:px-8 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

export function ShipLog({ items }: { items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-black/[0.28] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Ship Log</p>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="border-l-2 border-acid/[0.70] pl-4 text-sm leading-6 text-paper/[0.72]">{item}</div>
        ))}
      </div>
    </div>
  );
}

export function NewsletterSignup() {
  return (
    <div className="rounded-lg border border-line bg-paper p-6 text-ink md:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Newsletter</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">The Weekly Vibe Check</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.74]">A weekly report from someone actively getting their ass kicked by app development.</p>
      <div className="mt-5 grid gap-2 text-sm text-ink/[0.76] sm:grid-cols-2">
        {["AI-built apps worth watching", "Founder stories", "Product reviews", "Launch breakdowns", "App Store rejections", "Reddit disasters", "Things that worked", "Things that absolutely did not"].map((item) => (
          <div key={item} className="border-l-2 border-ember pl-3">{item}</div>
        ))}
      </div>
      <p className="mt-5 text-sm font-bold text-ink">No guru nonsense. No growth hacks. Just what actually happened.</p>
      <Link href={beehiivUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-ember">
        Join the Weekly Vibe Check
      </Link>
    </div>
  );
}

export function SubmitAppButton({ className = "" }: { className?: string }) {
  return (
    <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className={className || "inline-flex rounded-md bg-acid px-5 py-3 text-sm font-bold text-ink transition hover:bg-paper"}>
      Submit Your App
    </Link>
  );
}

export function FoundingCohortStatus() {
  const claimed = getClaimedFounderReviewCount();
  const full = isFoundingCohortFull();

  return (
    <div className={`rounded-lg border p-4 ${full ? "border-ember/[0.42] bg-ember/[0.12]" : "border-acid/[0.34] bg-acid/[0.10]"}`}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/[0.52]">Founder review capacity</p>
      <p className="mt-2 font-display text-2xl font-black text-paper">Founding Cohort: {claimed} / {MAX_FREE_FOUNDERS} Founder Reviews Claimed</p>
      <p className="mt-2 text-sm leading-6 text-paper/[0.70]">
        {full ? "Founding Cohort Full. Join the waitlist for future reviews." : "First 25 founder reviews are free while Vibe Rater builds the directory."}
      </p>
    </div>
  );
}
