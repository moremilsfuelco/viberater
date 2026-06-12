import Link from "next/link";
import { Band } from "@/components/ui";

export const metadata = {
  title: "Submission Received",
  description: "Your Vibe Rater submission was received."
};

export default async function ThanksPage({ searchParams }: { searchParams: Promise<{ name?: string }> }) {
  const { name } = await searchParams;

  return (
    <main>
      <Band>
        <div className="mx-auto max-w-3xl rounded-lg border border-line bg-white/[0.045] p-8 shadow-glow">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-acid">Submission received</p>
          <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-paper">
            {name ? `${name} is in the queue.` : "Your startup is in the queue."}
          </h1>
          <p className="mt-5 text-base leading-8 text-paper/[0.72]">
            Thanks for sending it in. If it is a fit, Vibe Rater will turn it into a review, roast, founder breakdown, or launch feature with a useful public angle.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/reviews" className="rounded-md bg-acid px-5 py-3 text-center text-sm font-bold text-ink transition hover:bg-paper">Read reviews</Link>
            <Link href="/distribution" className="rounded-md border border-line bg-white/[0.08] px-5 py-3 text-center text-sm font-bold text-paper transition hover:border-acid">Read distribution essays</Link>
          </div>
        </div>
      </Band>
    </main>
  );
}
