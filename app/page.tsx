import Link from "next/link";
import Image from "next/image";
import { Band, FounderSubmissionCard, FoundingCohortStatus, NewsletterSignup, ReviewCard, ScorePanel, SectionHeader, ShipLog, SubmitAppButton } from "@/components/ui";
import { articles, calculateVibeScore, founders, morganBio, publishedReviews, scoreLabel, tallyUrl, verdictLabel } from "@/lib/content";

export default function Home() {
  const topRated = [...publishedReviews].sort((a, b) => calculateVibeScore(b.scores) - calculateVibeScore(a.scores)).slice(0, 4);
  const featured = publishedReviews[0];
  const spotlight = founders[0];
  const featuredArticle = articles[0];
  const hasFeaturedArticle = Boolean(featuredArticle?.body?.trim());
  const tools = ["Lovable", "Claude Code", "Bolt", "Cursor", "Replit", "Supabase"];
  const mediaSections = [
    ["Founder Breakdowns", "/founder-breakdowns", "The decisions, mistakes, and lessons behind the product."],
    ["App Store Lessons", "/app-store-lessons", "Launch pain, rejected builds, screenshots, subscriptions, and mobile reality."],
    ["AI-Built Apps", "/ai-built-apps", "Apps built with the new AI stack, judged like actual products."],
    ["Startup Roasts", "/startup-roasts", "Blunt positioning feedback that gives founders something worth sharing."],
    ["Distribution & Marketing", "/distribution", "The part after shipping where most apps quietly get humbled."]
  ];

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
                Brutally honest app reviews, startup breakdowns, and founder lessons.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/[0.76]">
                Vibe Rater is a media company and review platform for founders who want sharper positioning, useful feedback, and a public feature that does more than sit in a launch thread for six hours.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SubmitAppButton className="rounded-md bg-acid px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-paper" label="Submit your startup" />
                <Link href="/reviews" className="rounded-md border border-line bg-white/[0.08] px-5 py-3 text-center text-sm font-bold text-paper transition hover:border-paper/[0.40]">Read the latest reviews</Link>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 text-sm text-paper/[0.68] sm:grid-cols-3">
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">{publishedReviews.length}</strong>Launch review</div>
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">7-part</strong>Vibe Score</div>
                <div className="border-l border-line pl-4"><strong className="block font-display text-2xl text-paper">0</strong>Invented revenue claims</div>
              </div>
              <div className="mt-8 max-w-2xl">
                <FoundingCohortStatus />
              </div>
            </div>
            {featured ? <ScorePanel review={featured} /> : <FounderSubmissionCard featured />}
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

      {hasFeaturedArticle ? (
        <Band>
          <SectionHeader kicker="Featured Article" title="Latest from Vibe Rater" />
          <Link href={`/articles/${featuredArticle.slug}`} className="block rounded-lg border border-line bg-white/[0.045] p-6 shadow-glow transition hover:-translate-y-1 hover:border-acid/[0.45]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">{featuredArticle.category} · {featuredArticle.date}</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-black tracking-tight text-paper">{featuredArticle.title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-paper/[0.68]">{featuredArticle.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <p className="text-sm font-bold text-paper">By {featuredArticle.author}</p>
              <span className="rounded-md bg-acid px-4 py-2 text-sm font-bold text-ink">Read Article</span>
            </div>
          </Link>
        </Band>
      ) : null}

      <Band>
        <SectionHeader kicker="Latest Reviews" title="The first apps on the board" body="RaceIQ is the first published review. The next spots are for founders building something real enough to take feedback." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {publishedReviews.map((review) => <ReviewCard key={review.slug} review={review} />)}
          <FounderSubmissionCard />
          <FounderSubmissionCard />
        </div>
      </Band>

      <Band className="bg-white/[0.035]">
        <SectionHeader kicker="Editorial" title="What Vibe Rater covers" body="Not just submissions. Vibe Rater is building a media surface for the messy middle of app launches, AI-built startups, and founders trying to get people to care." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mediaSections.map(([title, href, body]) => (
            <Link key={href} href={href} className="rounded-lg border border-line bg-ink p-5 transition hover:-translate-y-1 hover:border-acid/[0.48]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-acid">{title}</p>
              <p className="mt-4 text-sm leading-6 text-paper/[0.68]">{body}</p>
            </Link>
          ))}
        </div>
      </Band>

      <Band>
        <SectionHeader kicker="Founder Incentive" title="Why submit?" body="Because a quiet product with no feedback is a terrible place to be. A public Vibe Rater feature gives founders more useful material to work with." />
        <div className="grid gap-4 md:grid-cols-5">
          {["Get honest feedback", "Earn a backlink", "Get social proof", "Reach founders/builders", "Improve your positioning"].map((item) => (
            <div key={item} className="rounded-lg border border-line bg-white/[0.045] p-4">
              <p className="font-bold text-paper">{item}</p>
            </div>
          ))}
        </div>
        <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-acid px-5 py-3 text-sm font-bold text-ink transition hover:bg-paper">Submit your startup</Link>
      </Band>

      <Band className="bg-white/[0.035]">
        <SectionHeader kicker="Vibe Score" title="What the score means" body="A Vibe Score is the quick read on whether an app is clear, useful, trustworthy, and worth opening again. It is not a revenue claim. It is not a victory lap." />
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
          <FounderSubmissionCard />
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
          <ShipLog items={["Cut the pretend founder stuff before launch.", "Opened a real founder submission queue.", "Reworked Vibe Rater around real projects and founder submissions.", "Kept the reviews grounded: no invented revenue, traction, or founder stories."]} />
        </div>
      </Band>

      <Band className="bg-white/[0.035]">
        <NewsletterSignup />
      </Band>

      <Band>
        <div className="rounded-lg border border-line bg-ember p-8 text-ink md:p-10">
          <h2 className="font-display text-4xl font-black tracking-tight">Built something with AI? Submit it for review.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/[0.75]">Founders building with Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, RevenueCat, and the rest of the new stack belong here.</p>
          <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-bold text-paper">Submit Your Startup</Link>
        </div>
      </Band>
    </main>
  );
}
