import { Band, SectionHeader } from "@/components/ui";

export const metadata = {
  title: "Submit Your App",
  description: "Submit your vibe-coded app for review by Vibe Rater."
};

export default function SubmitPage() {
  const fields = [
    ["Founder Name", "text"],
    ["Email", "email"],
    ["App Name", "text"],
    ["Website", "url"],
    ["App Store Link", "url"],
    ["Play Store Link", "url"],
    ["Tools Used", "text"],
    ["Monthly Revenue Range", "text"]
  ];

  return (
    <main>
      <Band>
        <SectionHeader kicker="Submit" title="Finally, someone is paying attention to what you built." body="For the MVP, this form is presentation-ready with a placeholder handler. It can be wired to email, a local file route, or Supabase later." />
        <form action="/api/submit" method="post" className="grid gap-4 rounded-lg border border-line bg-white/[0.045] p-5 md:grid-cols-2">
          {fields.map(([label, type]) => (
            <label key={label} className="text-sm font-semibold text-paper">
              {label}
              <input type={type} name={label.toLowerCase().replaceAll(" ", "-")} className="mt-2 min-h-12 w-full rounded-md border border-line bg-black/[0.28] px-4 text-sm text-paper outline-none focus:border-acid" />
            </label>
          ))}
          <label className="text-sm font-semibold text-paper md:col-span-2">
            What Feedback Are You Looking For?
            <textarea name="feedback" rows={6} className="mt-2 w-full rounded-md border border-line bg-black/[0.28] px-4 py-3 text-sm text-paper outline-none focus:border-acid" />
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-acid px-5 py-3 text-sm font-bold text-ink">Submit for review</button>
            <p className="mt-3 text-xs leading-5 text-paper/[0.48]">Placeholder handler: connect this to an API route, form provider, or Supabase table when submissions go live.</p>
          </div>
        </form>
      </Band>
    </main>
  );
}
