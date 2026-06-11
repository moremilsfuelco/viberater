import Link from "next/link";
import { Band, FoundingCohortStatus } from "@/components/ui";
import { futureReviewOffers, isFoundingCohortFull, tallyEmbedUrl, tallyUrl } from "@/lib/content";

export const metadata = {
  title: "Submit Your App",
  description: "Submit your AI-built app, indie startup, mobile app, or vibe-coded project to Vibe Rater."
};

export default function SubmitPage() {
  const cohortFull = isFoundingCohortFull();
  const benefits = [
    "Vibe Score",
    "Honest review",
    "Product feedback",
    "Monetization ideas",
    "Growth recommendations"
  ];

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <section className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-acid">Founder submissions</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-[0.96] tracking-tight text-balance text-paper md:text-6xl">
              Submit Your App to Vibe Rater
            </h1>
            <p className="mt-5 text-lg leading-8 text-paper/[0.74]">
              We're reviewing AI-built apps, indie startups, SaaS products, mobile apps, and vibe-coded projects.
            </p>
            <div className="mt-5">
              <FoundingCohortStatus />
            </div>
            {cohortFull ? (
              <p className="mt-4 rounded-lg border border-ember/[0.32] bg-ember/[0.10] p-4 text-sm font-semibold leading-6 text-paper">
                New submissions are still accepted, but they are marked as Waitlist. A free review is not promised after the founding cohort is full.
              </p>
            ) : null}

            <div className="mt-6 rounded-lg border border-line bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-pool">You'll receive</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-paper/[0.74]">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-acid" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={tallyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full justify-center rounded-md bg-acid px-5 py-4 text-sm font-black text-ink transition hover:bg-paper sm:w-auto"
            >
              {cohortFull ? "Join the Waitlist" : "Submit Your App"}
            </Link>
            <p className="mt-3 text-xs leading-5 text-paper/[0.46]">
              If the embedded form does not load, use the button to open the secure Tally form directly.
            </p>

            <div className="mt-6 rounded-lg border border-line bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Future pricing structure</p>
              <div className="mt-4 space-y-3">
                {futureReviewOffers.map((offer) => (
                  <div key={offer.name} className="rounded-md border border-line bg-black/[0.20] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-bold text-paper">{offer.name}</p>
                      <p className="font-display text-2xl font-black text-acid">{offer.price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-paper/[0.62]">{offer.description}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.42]">Payments not enabled yet</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-lg border border-line bg-white/[0.045] shadow-glow">
            <div className="flex items-center justify-between border-b border-line bg-black/[0.24] px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-paper/[0.50]">{cohortFull ? "Live waitlist form" : "Live submission form"}</p>
              <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-acid hover:text-paper">
                Open form
              </Link>
            </div>
            <iframe
              src={tallyEmbedUrl}
              title="Submit Your App to Vibe Rater"
              width="100%"
              height="980"
              loading="lazy"
              className="block min-h-[760px] w-full border-0 bg-paper"
            />
            <div className="border-t border-line bg-black/[0.30] p-4 text-center">
              <Link
                href={tallyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-line bg-white/[0.08] px-4 py-3 text-sm font-bold text-paper transition hover:border-acid hover:text-acid"
              >
                {cohortFull ? "Join the Waitlist" : "Submit Your App"}
              </Link>
            </div>
          </section>
        </div>
      </Band>
    </main>
  );
}
