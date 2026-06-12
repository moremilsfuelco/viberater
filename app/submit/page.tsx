import Link from "next/link";
import { Band, FoundingCohortStatus } from "@/components/ui";
import { tallyUrl } from "@/lib/content";

export const metadata = {
  title: "Submit Your App",
  description: "Submit your AI-built app, indie startup, or mobile product to Vibe Rater."
};

const stages = ["Idea", "MVP", "Beta", "Live", "Revenue", "Scaling"];
const requestTypes = ["Honest review", "Roast my startup", "Founder interview", "Launch feature"];

export default function SubmitPage() {
  const nativeSubmissionsEnabled = process.env.NATIVE_SUBMISSIONS_ENABLED === "true";

  if (nativeSubmissionsEnabled) {
    return <NativeSubmissionPage />;
  }

  return (
    <main>
      <Band>
        <div className="mx-auto max-w-4xl rounded-lg border border-line bg-white/[0.045] p-8 shadow-glow md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-acid">Founder submissions</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.96] tracking-tight text-balance text-paper md:text-6xl">
            Submit your app for review
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-paper/[0.74]">
            Built something with AI? Send it in. I’m reviewing real apps from real founders and giving honest feedback on what’s working, what’s risky, and what I’d do next.
          </p>
          <div className="mt-7">
            <FoundingCohortStatus />
          </div>
          <Link href={tallyUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-md bg-acid px-6 py-4 text-sm font-black text-ink transition hover:bg-paper">
            Submit through Tally
          </Link>
        </div>
      </Band>
    </main>
  );
}

function NativeSubmissionPage() {
  return (
    <main>
      <Band>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <section className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-acid">Development submission form</p>
            <h1 className="mt-4 font-display text-5xl font-black leading-[0.96] tracking-tight text-balance text-paper md:text-6xl">
              Native submission form
            </h1>
            <p className="mt-5 text-lg leading-8 text-paper/[0.74]">
              This form is hidden from production unless NATIVE_SUBMISSIONS_ENABLED is set to true.
            </p>
          </section>

          <section className="rounded-lg border border-line bg-white/[0.045] p-5 shadow-glow md:p-6">
            <form action="/api/submissions" method="post" className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Startup name" name="startupName" required />
                <Field label="Website URL" name="websiteUrl" type="url" required />
                <Field label="Founder name" name="founderName" required />
                <Field label="Founder email" name="founderEmail" type="email" required />
                <Field label="Category" name="category" />
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
              <TextArea label="Current traction" name="traction" />
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

              <Field label="Social links" name="socialLinks" />
              <Field label="Logo URL" name="logo" />
              <Field label="Screenshots/demo URL" name="screenshotsDemoUrl" />

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
            </form>
          </section>
        </div>
      </Band>
    </main>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">{label}</span>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-3 text-sm text-paper outline-none focus:border-acid" />
    </label>
  );
}

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-paper/[0.50]">{label}</span>
      <textarea name={name} rows={4} className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-3 text-sm leading-6 text-paper outline-none focus:border-acid" />
    </label>
  );
}
