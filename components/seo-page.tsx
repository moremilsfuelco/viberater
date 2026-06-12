import Link from "next/link";
import { Band, FoundingCohortStatus } from "@/components/ui";
import { beehiivUrl, seoPages, SeoPage, tallyUrl } from "@/lib/content";

const coreLinks = [
  ["Submit Your Startup", tallyUrl, true],
  ["Vibe Score", "/vibe-score", false],
  ["Articles", "/articles", false],
  ["Reviews", "/reviews", false],
  ["Newsletter", beehiivUrl, true]
] as const;

export function SeoLandingPage({ page }: { page: SeoPage }) {
  const related = seoPages.filter((item) => item.slug !== page.slug);

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <article>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-acid">Vibe Rater Guide</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tight text-balance">{page.h1}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-paper/[0.74]">{page.intro}</p>

            {page.specialNote ? (
              <p className="mt-6 rounded-lg border border-ember/[0.42] bg-ember/[0.10] p-4 text-sm font-bold leading-6 text-paper">
                {page.specialNote}
              </p>
            ) : null}

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {page.sections.map((section) => (
                <section key={section.heading} className="rounded-lg border border-line bg-white/[0.045] p-5">
                  <h2 className="font-display text-2xl font-bold">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-paper/[0.70]">{section.body}</p>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-lg border border-line bg-white/[0.045] p-6">
              <h2 className="font-display text-3xl font-bold">Useful Vibe Rater links</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {coreLinks.map(([label, href, external]) => (
                  <Link
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="rounded-md border border-line bg-black/[0.22] px-4 py-3 text-sm font-bold text-paper transition hover:border-acid hover:text-acid"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-3xl font-bold">More founder-focused guides</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.slug} href={`/${item.slug}`} className="rounded-md border border-line bg-white/[0.035] p-4 transition hover:border-acid/[0.48]">
                    <span className="text-sm font-bold text-paper">{item.h1}</span>
                    <span className="mt-2 block text-xs leading-5 text-paper/[0.58]">{item.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <FoundingCohortStatus />
            <div className="rounded-lg border border-line bg-ember p-5 text-ink">
              <h2 className="font-display text-2xl font-black">Built something with AI?</h2>
              <p className="mt-2 text-sm leading-6 text-ink/[0.74]">Submit it for a review that says the quiet part out loud.</p>
              <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-md bg-ink px-4 py-3 text-sm font-bold text-paper">
                Submit Your Startup
              </Link>
            </div>
            <div className="rounded-lg border border-line bg-paper p-5 text-ink">
              <h2 className="font-display text-2xl font-black">The Weekly Vibe Check</h2>
              <p className="mt-2 text-sm leading-6 text-ink/[0.74]">No guru nonsense. No growth hacks. Just what actually happened.</p>
              <Link href={beehiivUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-md bg-ink px-4 py-3 text-sm font-bold text-paper">
                Join the Newsletter
              </Link>
            </div>
          </aside>
        </div>
      </Band>
    </main>
  );
}
