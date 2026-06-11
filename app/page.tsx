import Link from "next/link";
import Image from "next/image";
import { Band, FoundingCohortStatus, NewsletterSignup, ReviewCard, ScorePanel, SectionHeader, ShipLog, SubmitAppButton } from "@/components/ui";
import { articles, buildingProjects, calculateVibeScore, founders, morganBio, reviews, scoreLabel, tallyUrl, verdictLabel } from "@/lib/content";

export default function Home() {
  const topRated = [...reviews].sort((a, b) => calculateVibeScore(b.scores) - calculateVibeScore(a.scores)).slice(0, 4);
  const featured = reviews[0];
  const spotlight = founders[0];
  const featuredArticle = articles[0];
  const tools = ["Lovable", "Claude Code", "Bolt", "Cursor", "Replit", "Supabase"];

  return (
    <main>
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <Image src="/vibe-rater-hero.png" alt="" fill priority className="object-cover opacity-[0.42]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/[0.84] to-ink/[0.36]" />
        <div className="editorial-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.58]">
            <span className="rounded-full border border-line bg-black/[0.28] px-3 py-1.5">Independent reviews</span>
            <span className="rounded-full border border-line bg-black/[0.28] px-3 py-1.5">Founder interviews</span>
            <span className="rounded-full border border-line bg-black/[0.28] px-3 py-1.5">Launch breakdowns</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="py-4">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-acid">Discover the next generation of AI-built startups before everyone else.</p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-tight text-balance text-paper md:text-7xl">
              We rate the apps people built with vibes.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/[0.76]">
                Vibe Rater is a founder-first publication reviewing AI-built apps, documenting the reality of building with AI tools, and helping founders create products people actually use.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SubmitAppButton className="rounded-md bg-acid px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-paper" />
                <Link href="/reviews" className="rounded-md border border-line bg-white/[0.08] px-5 py-3 text-center text-sm font-bold text-paper transition hover:border-paper/[0.40]">Read Reviews</Link>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 text-sm text-paper/[0.68] sm:grid-cols-3">
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">{reviews.length}</strong>Launch reviews</div>
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">8-part</strong>Score rubric</div>
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">0</strong>Invented revenue claims</div>
              </div>
              <div className="mt-8 max-w-2xl">
                <FoundingCohortStatus />
              </div>
            </div>
            <ScorePanel review={featured} />
          </div>
          <div className="mt-10 border-y border-line bg-black/[0.26] px-4 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/[0.46]">Tracking the builder stack founders actually use</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="rounded-md border border-line bg-white/[0.055] px-3 py-2 text-xs font-bold text-paper/[0.76]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Band>
        <SectionHeader kicker="Featured Article" title="Founder-led, not content farm" body="Vibe Rater starts with one real founder article. The body is intentionally left for Morgan to paste manually after deployment." />
        <Link href={`/articles/${featuredArticle.slug}`} className="block rounded-lg border border-line bg-white/[0.045] p-6 shadow-glow transition hover:-translate-y-1 hover:border-acid/[0.45]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{featuredArticle.category} · {featuredArticle.date}</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-black tracking-tight text-paper">{featuredArticle.title}</h2>
          <p className="mt-4 text-sm leading-6 text-paper/[0.68]">By {featuredArticle.author}</p>
        </Link>
      </Band>

      <Band>
        <SectionHeader kicker="Launch Reviews" title="Real launch reviews from the current Vibe Rater build" body="The first reviews cover current Morgan Mitchell projects only, with no invented revenue, traction, or synthetic founder stories." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => <ReviewCard key={review.slug} review={review} />)}
        </div>
      </Band>

      <Band className="bg-white/[0.035]">
        <SectionHeader kicker="Vibe Score" title="What the score means" body="A Vibe Score is an editorial rating across eight criteria: clarity, usefulness, design, retention, monetization, differentiation, trust, and founder-market fit. It is not a revenue claim or traction claim." />
        <div className="grid gap-4 md:grid-cols-4">
          {topRated.map((review, index) => {
            const vibeScore = calculateVibeScore(review.scores);
            return (
            <Link href={`/reviews/${review.slug}`} key={review.slug} className="rounded-lg border border-line bg-ink p-5 transition hover:border-acid/[0.55]">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-paper/[0.42]">Review #{index + 1}</span>
                <span className="rounded-md bg-acid px-2.5 py-1 font-display text-lg font-black text-ink">{vibeScore.toFixed(1)}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{review.appName}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper/[0.46]">{verdictLabel(scoreLabel(vibeScore))}</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="h-full rounded-full bg-acid" style={{ width: `${vibeScore * 10}%` }} />
              </div>
            </Link>
          )})}
        </div>
        <Link href="/vibe-score" className="mt-6 inline-flex text-sm font-bold text-acid">What is a Vibe Score?</Link>
      </Band>

      <Band>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-line bg-white/[0.045] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">Launch Founder Story</p>
            <h2 className="mt-4 font-display text-3xl font-bold">{spotlight.name}</h2>
            <p className="mt-2 text-paper/[0.58]">{spotlight.app}</p>
            <p className="mt-5 text-sm leading-6 text-paper/[0.70]">{morganBio}</p>
            <div className="mt-5 grid gap-3 text-sm text-paper/[0.68] sm:grid-cols-2">
              <div className="rounded-md border border-line bg-black/[0.20] p-3"><span className="block text-paper/[0.42]">Favorite tool</span>{spotlight.favoriteTool}</div>
              <div className="rounded-md border border-line bg-black/[0.20] p-3"><span className="block text-paper/[0.42]">Current goal</span>{spotlight.currentGoal}</div>
            </div>
            <Link href={`/founders/${spotlight.slug}`} className="mt-6 inline-flex text-sm font-bold text-acid">Read profile</Link>
          </div>
          <ShipLog items={["Removed non-real founder entries before launch.", "Swapped the old submit flow for the live Tally form.", "Reworked Vibe Rater around real projects currently being built.", "Kept the review framework honest: no invented revenue, traction, or founder stories."]} />
        </div>
      </Band>

      <Band className="bg-white/[0.035]">
        <SectionHeader kicker="Building in Public" title="Projects currently being built" body="These are Morgan Mitchell projects in the Vibe Rater orbit. Only RaceIQ, HydroPal, and DoughBuddy are launch reviews today; the rest are marked as currently being built." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buildingProjects.map((project) => (
            <article key={project.name} className="rounded-lg border border-line bg-ink p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">{project.status}</p>
              <h3 className="mt-3 font-display text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-paper/[0.68]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-line px-3 py-1 text-xs text-paper/[0.70]">{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Band>

      <Band className="bg-white/[0.035]">
        <NewsletterSignup />
      </Band>

      <Band>
        <div className="rounded-lg border border-line bg-ember p-8 text-ink md:p-10">
          <h2 className="font-display text-4xl font-black tracking-tight">Built something with AI? Submit it for review.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.75]">Founders building with Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, RevenueCat, and the rest of the new stack belong here.</p>
          <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-paper">Submit Your App</Link>
        </div>
      </Band>
    </main>
  );
}
