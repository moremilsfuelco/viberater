import { Band, FoundingCohortStatus } from "@/components/ui";
import { futureReviewOffers, isFoundingCohortFull } from "@/lib/content";

export const metadata = {
  title: "Submit Your Startup",
  description: "Get your startup reviewed or roasted by Vibe Rater."
};

const stages = ["Idea", "MVP", "Beta", "Live", "Revenue", "Scaling"];
const requestTypes = ["Honest review", "Roast my startup", "Founder interview", "Launch feature"];

export default function SubmitPage() {
  const cohortFull = isFoundingCohortFull();

  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <section className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-acid">Founder submissions</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-[0.96] tracking-tight text-balance text-paper md:text-6xl">
              Get your startup reviewed or roasted by Vibe Rater.
            </h1>
            <p className="mt-5 text-lg leading-8 text-paper/[0.74]">
              A useful review gives you sharper positioning, a public backlink, social proof, and something better than another polite “looks cool” reply.
            </p>

            <div className="mt-5">
              <FoundingCohortStatus />
            </div>
            {cohortFull ? (
              <p className="mt-4 rounded-lg border border-ember/[0.32] bg-ember/[0.10] p-4 text-sm font-semibold leading-6 text-paper">
                The founding cohort is full. You can still submit, but new entries go into the waitlist instead of claiming a free review.
              </p>
            ) : null}

            <div className="mt-6 grid gap-3">
              {[
                "A clear review gives you positioning feedback.",
                "A public feature gives you a backlink.",
                "A roast gives you attention.",
                "A founder breakdown gives you credibility.",
                "A launch feature gives you something to share."
              ].map((item) => (
                <div key={item} className="rounded-md border border-line bg-white/[0.045] p-4 text-sm font-semibold text-paper/[0.76]">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-line bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember">Likely paid options later</p>
              <div className="mt-4 space-y-3">
                {futureReviewOffers.map((offer) => (
                  <div key={offer.name} className="rounded-md border border-line bg-black/[0.20] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-bold text-paper">{offer.name}</p>
                      <p className="font-display text-2xl font-black text-acid">{offer.price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-paper/[0.62]">{offer.description}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.42]">Not for sale yet</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-white/[0.045] p-5 shadow-glow md:p-6">
            <form action="/api/submissions" method="post" className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Startup name" name="startupName" required />
                <Field label="Website URL" name="websiteUrl" type="url" required />
                <Field label="Founder name" name="founderName" required />
                <Field label="Founder email" name="founderEmail" type="email" required />
                <Field label="Category" name="category" placeholder="AI fitness, devtools, consumer app..." />
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">Stage</span>
                  <select name="stage" className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-3 text-sm text-paper outline-none focus:border-acid">
                    {stages.map((stage) => <option key={stage}>{stage}</option>)}
                  </select>
                </label>
              </div>

              <Field label="One-line pitch" name="pitch" required />
              <TextArea label="What problem does it solve?" name="problem" />
              <TextArea label="Who is it for?" name="audience" />
              <TextArea label="What makes it different?" name="differentiation" />
              <TextArea label="Current traction" name="traction" placeholder="Users, waitlist, revenue range, launch notes. No need to inflate it." />
              <TextArea label="Biggest challenge" name="biggestChallenge" />

              <fieldset className="rounded-md border border-line bg-black/[0.18] p-4">
                <legend className="px-1 text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">Do you want</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {requestTypes.map((type) => (
                    <label key={type} className="flex items-center gap-3 text-sm text-paper/[0.76]">
                      <input type="checkbox" name="requestTypes" value={type} className="size-4 accent-lime-300" />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="Social links" name="socialLinks" placeholder="X, LinkedIn, GitHub, Product Hunt..." />
              <Field label="Logo upload or logo URL" name="logo" placeholder="Paste a public logo URL or drive link" />
              <Field label="Screenshots/demo URL" name="screenshotsDemoUrl" placeholder="App Store, demo, Loom, Drive, or screenshot folder" />

              <div className="space-y-3 rounded-md border border-line bg-black/[0.18] p-4">
                <label className="flex items-start gap-3 text-sm leading-6 text-paper/[0.76]">
                  <input type="checkbox" name="permissionToPublish" required className="mt-1 size-4 accent-lime-300" />
                  I give Vibe Rater permission to publish a review, roast, founder breakdown, or launch feature using the information I submitted.
                </label>
                <label className="flex items-start gap-3 text-sm leading-6 text-paper/[0.76]">
                  <input type="checkbox" name="newsletterOptIn" className="mt-1 size-4 accent-lime-300" />
                  Add me to the Weekly Vibe Check list if newsletter syncing is available.
                </label>
              </div>

              <button type="submit" className="w-full rounded-md bg-acid px-5 py-4 text-sm font-black text-ink transition hover:bg-paper">
                Submit your startup
              </button>
              <p className="text-xs leading-5 text-paper/[0.48]">
                Submissions are stored locally for now. When Vibe Rater adds Supabase or another database, this form can move over without changing the public page.
              </p>
            </form>
          </section>
        </div>
      </Band>
    </main>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">{label}</span>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-3 text-sm text-paper outline-none placeholder:text-paper/[0.28] focus:border-acid" />
    </label>
  );
}

function TextArea({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">{label}</span>
      <textarea name={name} placeholder={placeholder} rows={4} className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-3 text-sm leading-6 text-paper outline-none placeholder:text-paper/[0.28] focus:border-acid" />
    </label>
  );
}
