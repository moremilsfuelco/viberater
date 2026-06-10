import Link from "next/link";
import { Review, scoreLabel, verdictLabel } from "@/lib/content";

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
      <span className="font-display text-xl font-black text-acid">{score}</span>
      <span className="text-[10px] font-bold uppercase leading-3 tracking-[0.18em] text-paper/[0.62]">Vibe<br />Score</span>
    </div>
  );
}

export function ScorePanel({ review }: { review: Review }) {
  const scoreRows = [
    ["Design", review.scores.design],
    ["Use", review.scores.usability],
    ["Retention", review.scores.retention],
    ["Money", review.scores.monetization],
    ["Different", review.scores.differentiation],
    ["Trust", review.scores.trust]
  ];

  return (
    <div className="rounded-lg border border-line bg-black/[0.42] p-5 shadow-glow">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Featured Review</p>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight">{review.appName}</h2>
          <p className="mt-2 text-sm leading-6 text-paper/[0.66]">{review.tagline}</p>
        </div>
        <div className="min-w-24 rounded-lg border border-acid/[0.48] bg-acid text-center text-ink">
          <p className="border-b border-ink/[0.16] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em]">Vibe Score</p>
          <p className="px-3 py-4 font-display text-5xl font-black leading-none">{review.vibeScore}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {scoreRows.map(([label, score]) => (
          <div key={label} className="rounded-md border border-line bg-white/[0.055] p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-paper/[0.42]">{label}</p>
            <p className="mt-1 font-display text-xl font-black text-paper">{score}/10</p>
          </div>
        ))}
      </div>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-md bg-white/[0.07] p-3"><span className="block text-paper/[0.48]">Verdict</span>{verdictLabel(review.verdict)}</div>
        <div className="rounded-md bg-white/[0.07] p-3"><span className="block text-paper/[0.48]">Founder Signal</span>{review.signals.delusionFactor}</div>
      </div>
    </div>
  );
}

export function ReviewCard({ review, featured = false }: { review: Review; featured?: boolean }) {
  return (
    <Link href={`/reviews/${review.slug}`} className={`group block rounded-lg border border-line bg-white/[0.045] p-5 shadow-glow transition hover:-translate-y-1 hover:border-paper/[0.28] ${featured ? "md:p-7" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{review.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper group-hover:text-acid">{review.appName}</h3>
        </div>
        <ScoreBadge score={review.vibeScore} compact />
      </div>
      <p className="mt-4 text-sm leading-6 text-paper/[0.68]">{review.tagline}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-paper/[0.46]">Founder: {review.founderName}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {review.tools.map((tool) => (
          <span key={tool} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.70]">{tool}</span>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-paper">{verdictLabel(review.verdict)}</p>
      <p className="mt-1 text-xs text-paper/[0.48]">{scoreLabel(review.vibeScore)}</p>
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
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">Get the weekly vibe report.</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.70]">One app of the week, one founder story, new launches, an AI tool worth watching, and the honest build notes behind Vibe Rater.</p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input aria-label="Email" type="email" placeholder="founder@example.com" className="min-h-12 flex-1 rounded-md border border-ink/[0.15] bg-white px-4 text-sm outline-none focus:border-ink" />
        <button className="min-h-12 rounded-md bg-ink px-5 text-sm font-bold text-paper transition hover:bg-ember" type="submit">Join newsletter</button>
      </form>
    </div>
  );
}
