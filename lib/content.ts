export const siteUrl = "https://joinviberater.com";
export const tallyUrl = "https://tally.so/r/44Og9B";
export const tallyEmbedUrl = "https://tally.so/embed/44Og9B?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
export const beehiivUrl = "https://viberater.beehiiv.com/";
export const MAX_FREE_FOUNDERS = 25;

export type Verdict =
  | "Dangerous If Executed Well"
  | "Strong Potential"
  | "Early Signal"
  | "Needs Sharpening"
  | "Interesting But Messy"
  | "Probably Not A Business";

export type CoreScores = {
  productClarity: number;
  usefulness: number;
  designUx: number;
  retentionPotential: number;
  monetizationPotential: number;
  differentiation: number;
  trustSafety: number;
  founderMarketFit: number;
};

export type Screenshot = {
  src?: string;
  alt: string;
  caption: string;
};

export type Review = {
  slug: string;
  appName: string;
  founderSlug: string;
  founderName: string;
  whatItDoes: string;
  excerpt: string;
  stage: string;
  category: string;
  tools: string[];
  screenshots: Screenshot[];
  submissionStatus: "published" | "accepted" | "waitlist" | "draft";
  scores: CoreScores;
  signals: {
    aiSlopRisk: string;
    delusionFactor: string;
    download: string;
    keep: string;
    appleRejectionRisk: string;
  };
  good: string[];
  risk: string[];
  monetizationNotes: string;
  retentionNotes: string;
  distributionIdeas: string;
  founderAdvice: string;
  finalVerdict: string;
  narrative: {
    whatItIs: string;
    firstImpression: string;
    whatsWorking: string[];
    whatsRisky: string[];
    whatIdDoNext: string;
    monetizationThoughts: string;
    wouldIKeepBuildingIt: string;
    finalVerdict: string;
  };
  shipLogs: string[];
};

export type Founder = {
  slug: string;
  name: string;
  app: string;
  background: string;
  why: string;
  favoriteTool: string;
  biggestMistake: string;
  biggestLesson: string;
  currentGoal: string;
};

export type BuildingProject = {
  name: string;
  status: string;
  description: string;
  tools: string[];
};

export type Article = {
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
};

export type ReviewOffer = {
  name: string;
  price: "$49" | "$99" | "$199";
  description: string;
  enabled: boolean;
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  specialNote?: string;
};

export const morganBio =
  "Morgan Mitchell is a software engineer, runner, and indie founder building AI-powered products in public. Current projects include RaceIQ, HydroPal, DoughBuddy, Athlo, ClaimCheck, BeanQuest, DiscMode, and Vibe Rater. Vibe Rater exists to review AI-built apps, document the reality of building with AI tools, and help founders create products people actually use.";

export const scoringFramework = [
  ["Product Clarity", "Can a visitor understand what the app does within 10 seconds?"],
  ["Usefulness", "Does it solve a real problem or is it just AI slapped onto something?"],
  ["Design / UX", "Does it feel polished, usable, and intentional?"],
  ["Retention Potential", "Would someone come back after the first use?"],
  ["Monetization Potential", "Is there a believable path to revenue?"],
  ["Differentiation", "Why this app instead of an existing alternative?"],
  ["Trust & Safety", "Does the app feel legitimate, safe, and not sketchy?"],
  ["Founder-Market Fit", "Does the founder seem close enough to the problem to build something useful?"]
] as const;

export const scoreKeys: Array<keyof CoreScores> = [
  "productClarity",
  "usefulness",
  "designUx",
  "retentionPotential",
  "monetizationPotential",
  "differentiation",
  "trustSafety",
  "founderMarketFit"
];

export const scoreLabels: Record<keyof CoreScores, string> = {
  productClarity: "Product Clarity",
  usefulness: "Usefulness",
  designUx: "Design / UX",
  retentionPotential: "Retention Potential",
  monetizationPotential: "Monetization Potential",
  differentiation: "Differentiation",
  trustSafety: "Trust & Safety",
  founderMarketFit: "Founder-Market Fit"
};

export function calculateVibeScore(scores: CoreScores) {
  const total = scoreKeys.reduce((sum, key) => sum + scores[key], 0);
  return Number((total / scoreKeys.length).toFixed(1));
}

export function scoreLabel(score: number): Verdict {
  if (score >= 9) return "Dangerous If Executed Well";
  if (score >= 8) return "Strong Potential";
  if (score >= 7) return "Early Signal";
  if (score >= 6) return "Needs Sharpening";
  if (score >= 5) return "Interesting But Messy";
  return "Probably Not A Business";
}

export function verdictLabel(verdict: Verdict) {
  return verdict;
}

export const reviews: Review[] = [
  {
    slug: "raceiq",
    appName: "RaceIQ",
    founderSlug: "morgan-mitchell",
    founderName: "Morgan Mitchell",
    whatItDoes: "RaceIQ is training intelligence for runners who want smarter race prep.",
    excerpt: "RaceIQ has the cleanest founder-problem fit in the launch set. Runners already obsess over race day. The product just has to earn enough trust to be useful instead of becoming another motivational quote dispenser with a stopwatch.",
    stage: "Currently being built",
    category: "AI fitness",
    tools: ["Expo", "Codex", "RevenueCat", "Supabase"],
    screenshots: [],
    submissionStatus: "published",
    scores: {
      productClarity: 9,
      usefulness: 8,
      designUx: 9,
      retentionPotential: 9,
      monetizationPotential: 8,
      differentiation: 8,
      trustSafety: 7,
      founderMarketFit: 9
    },
    signals: {
      aiSlopRisk: "Low if recommendations stay specific and testable",
      delusionFactor: "Ambitious, but grounded in a real runner problem",
      download: "Yes, before a race cycle",
      keep: "Yes, if weekly plan updates feel earned",
      appleRejectionRisk: "Medium if health claims get too aggressive"
    },
    good: ["Clear user pain: runners want confidence before race day.", "Race prep creates a natural reason to return weekly.", "The product has room for a useful premium layer if recommendations are genuinely specific."],
    risk: ["Generic coaching advice would weaken trust quickly.", "Fitness guidance needs careful wording, boundaries, and product restraint."],
    monetizationNotes: "RaceIQ has monetization potential if it helps runners make better training decisions, not just read generic motivation.",
    retentionNotes: "Retention depends on weekly planning, race countdowns, and whether runners trust the product enough to keep returning during a training block.",
    distributionIdeas: "Start with runners training for a specific race distance, public build logs, race-prep content, and testing with actual runners.",
    founderAdvice: "Own one narrow race-prep promise first. Make RaceIQ excellent for one race distance before expanding the product surface.",
    finalVerdict: "RaceIQ is the strongest launch review because the pain is emotional, recurring, and tied to a clear outcome.",
    narrative: {
      whatItIs: "RaceIQ is a race-prep app for runners who want smarter training guidance before they show up at the start line and realize vibes are not a pacing strategy. The useful promise is simple: help a runner understand what to do next, why it matters, and whether their race plan is actually sane.",
      firstImpression: "This is the strongest idea in the launch batch because the problem is already emotional. Runners do not need to be convinced that race day matters. They are already checking the weather ten days out, overthinking shoe choice, and pretending their left calf is totally fine. RaceIQ can meet them in that moment if it stays practical.",
      whatsWorking: [
        "The user has a real deadline. Race day gives the product urgency without needing fake scarcity or founder theater.",
        "The weekly loop is obvious. Training plans, readiness checks, race countdowns, and post-run notes all give runners a reason to come back.",
        "Morgan is close enough to the problem to know where the weird little anxieties live. That matters more than another generic AI coach voice telling people to believe in themselves."
      ],
      whatsRisky: [
        "Fitness advice is trust-sensitive. The second RaceIQ sounds like it is making medical claims or overpromising performance, the whole thing gets shaky.",
        "Generic AI encouragement would kill it. Runners can smell vague advice immediately, usually while wearing shoes that cost too much.",
        "The app has to resist feature sprawl. Race prep is the wedge. Everything else can wait its turn."
      ],
      whatIdDoNext: "If it were mine, I would make RaceIQ embarrassingly good for one race scenario first. Pick a distance, pick a runner type, and make the product feel like it was built by someone who has actually panicked during a taper. I would also test every recommendation against real runner expectations before adding more surface area.",
      monetizationThoughts: "There is a believable paid path here if the product helps runners make better decisions during a training block. Premium can work around smarter plan adjustments, race-specific prep, and check-ins that feel earned. It cannot just be a paywall around generic motivation. Nobody needs a subscription to be told to hydrate and stay consistent.",
      wouldIKeepBuildingIt: "Yes. This is the one I would keep pushing hardest because the pain is recurring, emotional, and tied to a clear outcome. The question is not whether runners care. They do. The question is whether RaceIQ can become trustworthy enough to sit next to the watch, the plan, and the mildly cursed spreadsheet.",
      finalVerdict: "RaceIQ feels like a real product trying to escape the swamp of generic fitness apps. Keep it narrow, keep it honest, and make every recommendation prove it deserves to exist."
    },
    shipLogs: ["Build provenance became part of the product lesson.", "RevenueCat setup exposed how much polish purchase flows need.", "The best feature ideas were also the ones that needed the most restraint."]
  },
  {
    slug: "hydropal",
    appName: "HydroPal",
    founderSlug: "morgan-mitchell",
    founderName: "Morgan Mitchell",
    whatItDoes: "HydroPal is a hydration companion for turning daily water habits into a lighter ritual.",
    excerpt: "HydroPal is instantly understandable, which is good. It is also in a category where every phone already knows how to nag you, which is less good.",
    stage: "Currently being built",
    category: "AI wellness",
    tools: ["Lovable", "Cursor", "Supabase"],
    screenshots: [],
    submissionStatus: "draft",
    scores: {
      productClarity: 8,
      usefulness: 7,
      designUx: 8,
      retentionPotential: 7,
      monetizationPotential: 5,
      differentiation: 5,
      trustSafety: 7,
      founderMarketFit: 7
    },
    signals: {
      aiSlopRisk: "Medium",
      delusionFactor: "Manageable if the product stays narrow",
      download: "Maybe, if the reminders feel useful",
      keep: "Only if it becomes part of a daily routine",
      appleRejectionRisk: "Low if it avoids medical claims"
    },
    good: ["Easy to understand instantly.", "Habit products can earn daily surface area.", "The product can become more useful if it adapts to context instead of sending generic nudges."],
    risk: ["Hydration is a crowded and lightweight category.", "AI needs a real job beyond encouragement."],
    monetizationNotes: "HydroPal likely needs a focused audience or bundle strategy before monetization feels obvious.",
    retentionNotes: "Retention depends on whether the app becomes part of a daily loop rather than another ignored reminder.",
    distributionIdeas: "Pick a specific audience, show real habit experiments, and make the use case concrete before going broad.",
    founderAdvice: "Choose a specific user and context. A hydration app for everyone risks becoming a reminder app for no one.",
    finalVerdict: "HydroPal has early signal, but it needs a sharper wedge before it deserves a bigger score.",
    narrative: {
      whatItIs: "HydroPal is a hydration companion built around daily water habits. The pitch is not complicated: help people drink more water without turning their phone into a tiny wellness cop.",
      firstImpression: "The good news is that anyone can understand HydroPal in about five seconds. The bad news is that hydration apps live in one of the most dangerous neighborhoods in software: the land of reminders people ignore after three days. I say that with love, and also with several abandoned habit apps in my own personal graveyard.",
      whatsWorking: [
        "The product is clear. Nobody needs a whiteboard session to understand what it does.",
        "A daily habit gives HydroPal natural repetition if the reminders feel helpful instead of needy.",
        "The brand can stay light. Hydration does not need to pretend it is curing civilization."
      ],
      whatsRisky: [
        "The category is crowded and lightweight. A hydration app has to justify why it deserves a permanent spot on someone's phone.",
        "AI needs a real job here. If the AI layer is just cheerful nudges in different outfits, users will bounce.",
        "Medical-sounding claims would be a mistake. Keep it useful, not clinical."
      ],
      whatIdDoNext: "If it were mine, I would stop thinking about 'people who should drink more water' and pick one painfully specific use case. Runners in a training block. Desk workers who forget until 4 p.m. People who use caffeine as a personality. The narrower the user, the easier it becomes to make the product feel less like a reminder and more like a tiny intervention.",
      monetizationThoughts: "This is the hardest monetization story of the three launch reviews. A standalone subscription for water reminders is a tough sell unless HydroPal becomes meaningfully personalized or bundles into a broader wellness routine. I would prove retention first, then think about paid features. Charging too early here would be like opening a lemonade stand before buying lemons.",
      wouldIKeepBuildingIt: "Yes, but I would keep the scope brutally small. HydroPal does not need a giant roadmap. It needs one daily loop that users do not hate by Friday.",
      finalVerdict: "HydroPal has early signal because the product is clear and the habit is real. It needs a sharper audience and a stronger reason to exist beyond reminders before it becomes more than a pleasant idea."
    },
    shipLogs: ["The simple version is probably the correct version.", "The product gets better when it stops trying to sound medical.", "The habit loop matters more than the AI layer."]
  },
  {
    slug: "doughbuddy",
    appName: "DoughBuddy",
    founderSlug: "morgan-mitchell",
    founderName: "Morgan Mitchell",
    whatItDoes: "DoughBuddy is AI help for home bakers trying to make better bread without a spreadsheet.",
    excerpt: "DoughBuddy works because bread people are already obsessive in exactly the way software people understand. The trick is making the advice tested enough to earn trust.",
    stage: "Currently being built",
    category: "AI food",
    tools: ["Claude Code", "Next.js", "Supabase"],
    screenshots: [],
    submissionStatus: "draft",
    scores: {
      productClarity: 8,
      usefulness: 8,
      designUx: 8,
      retentionPotential: 8,
      monetizationPotential: 7,
      differentiation: 8,
      trustSafety: 7,
      founderMarketFit: 8
    },
    signals: {
      aiSlopRisk: "Low if recipes and guidance are tested",
      delusionFactor: "Earned niche obsession",
      download: "Yes, if I bake weekly",
      keep: "Yes, if it remembers my kitchen and past bakes",
      appleRejectionRisk: "Low"
    },
    good: ["Specific hobbyist audience with high intent.", "Great fit for logs, troubleshooting, and iterative improvement.", "The product can create useful content and community from real baking attempts."],
    risk: ["Recipe hallucinations can ruin trust.", "The app needs tested guidance, not endless recipe churn."],
    monetizationNotes: "DoughBuddy could monetize through premium recipe systems, baking logs, classes, or practical troubleshooting if the guidance becomes credible.",
    retentionNotes: "Retention improves if bakers can track past bakes, compare results, and build confidence over time.",
    distributionIdeas: "Publish build-in-public bake logs, show before-and-after attempts, and recruit serious hobby bakers as early testers.",
    founderAdvice: "Make the first loop about saving one bake. A single better loaf is stronger proof than a large recipe database.",
    finalVerdict: "DoughBuddy has strong potential because it is specific, tactile, and naturally content-rich.",
    narrative: {
      whatItIs: "DoughBuddy is AI help for home bakers who want better bread without turning their kitchen into a spreadsheet bunker. It can live somewhere between recipe guide, baking log, troubleshooting buddy, and the calmer version of that one forum commenter who knows too much about hydration percentages.",
      firstImpression: "This one has a good shape. Bread is specific, visual, repeatable, and emotionally annoying in the exact way that creates loyal users. People do not casually wonder why their loaf collapsed. They investigate. They post photos. They blame humidity. They develop opinions about starters that would concern their relatives.",
      whatsWorking: [
        "The audience has high intent. Home bakers already want to improve, compare attempts, and understand what went wrong.",
        "The product can earn retention through logs, past bakes, adjustments, and progress over time.",
        "There is natural content here. Every bake creates a story, a photo, a result, and usually a small crisis."
      ],
      whatsRisky: [
        "Recipe hallucinations are not cute when someone wastes six hours and a bag of flour.",
        "The app has to prove its guidance. Bread people will forgive rough edges before they forgive confidently wrong advice.",
        "A giant recipe database is less interesting than helping one baker fix one recurring problem."
      ],
      whatIdDoNext: "If it were mine, I would make DoughBuddy excellent at post-bake diagnosis before expanding. Let a baker log what happened, compare it to past attempts, and get one practical adjustment for next time. Saving one loaf is more persuasive than generating fifty recipes nobody asked for.",
      monetizationThoughts: "There is a real paid path if DoughBuddy becomes a trusted baking notebook plus troubleshooting layer. Premium could make sense around advanced logs, recipe history, guided experiments, classes, or community features. But the trust has to come first. Bread is slow. So is credibility.",
      wouldIKeepBuildingIt: "Yes. This is a strong niche with a user who already cares too much, which is usually where good products hide. I would keep building it as long as the app keeps getting closer to the actual messy kitchen, not just the fantasy recipe card.",
      finalVerdict: "DoughBuddy has strong potential because it is specific, tactile, and naturally repeatable. The product should be less 'AI recipe machine' and more 'I helped you understand why that loaf looked like a doorstop.'"
    },
    shipLogs: ["The starter math is less glamorous than the product idea, but more important.", "Trust depends on tested guidance.", "The best product proof is a better loaf."]
  }
];

export const founders: Founder[] = [
  {
    slug: "morgan-mitchell",
    name: "Morgan Mitchell",
    app: "Vibe Rater",
    background: morganBio,
    why: "Vibe Rater exists to review AI-built apps, document the reality of building with AI tools, and help founders create products people actually use.",
    favoriteTool: "Codex",
    biggestMistake: "Letting non-real editorial entries stand in for real founder trust.",
    biggestLesson: "A founder-first publication needs real projects, real context, and clear scoring rules from day one.",
    currentGoal: "Launch Vibe Rater with real founder submissions, honest reviews, and a useful directory of AI-built products."
  }
];

export const buildingProjects: BuildingProject[] = [
  { name: "RaceIQ", status: "Currently being built", description: "AI-powered race preparation and training intelligence for runners.", tools: ["Expo", "Codex", "RevenueCat", "Supabase"] },
  { name: "HydroPal", status: "Currently being built", description: "A hydration companion focused on daily habit formation.", tools: ["Lovable", "Cursor", "Supabase"] },
  { name: "DoughBuddy", status: "Currently being built", description: "AI help for home bakers improving bread, recipes, and baking logs.", tools: ["Claude Code", "Next.js", "Supabase"] },
  { name: "Athlo", status: "Currently being built", description: "A sports and fitness product in the Vibe Rater build-in-public portfolio.", tools: ["Replit", "Expo", "Codex"] },
  { name: "ClaimCheck", status: "Currently being built", description: "A product exploring clearer workflows around claims, documents, and stressful admin tasks.", tools: ["Bolt", "Claude Code", "Supabase"] },
  { name: "BeanQuest", status: "Currently being built", description: "A coffee discovery app for finding better cafes and local recommendations.", tools: ["Expo", "RevenueCat", "Google Places", "Codex"] },
  { name: "DiscMode", status: "Currently being built", description: "A music and discovery project in the public build portfolio.", tools: ["Expo", "Codex"] }
];

export const articles: Article[] = [
  {
    slug: "i-built-8-apps-with-ai",
    title: "I Built 8 Apps With AI and Somehow That's Not Even the Dumbest Thing I've Done This Year",
    author: "Morgan Mitchell",
    authorSlug: "morgan-mitchell",
    date: "2026-06-10",
    category: "Building in Public",
    excerpt: "Morgan Mitchell on building eight apps with AI, getting humbled by Apple, and learning that shipping is the only part that tells the truth.",
    body: `# I Built 8 Apps With AI and Somehow That's Not Even the Dumbest Thing I've Done This Year

If you spend enough time online, you'd think AI app development is basically a money printer. Every day there's some guy on Twitter posting screenshots about how he built an app over a weekend and now makes more money than a surgeon while working three hours a week from a beach in Bali.

Meanwhile I'm over here trying to figure out why Apple rejected my app again.

Over the last year I've built RaceIQ, HydroPal, DoughBuddy, Athlo, DiscMode, ClaimCheck, BeanQuest, and a handful of other projects that seemed like brilliant ideas at two in the morning. When people talk about AI app development, they usually focus on the building part. That's because building is fun. Building is exciting. Building lets you feel like a genius for a few hours.

Nobody talks about what happens after that.

Nobody talks about spending an entire evening trying to understand why a build that worked yesterday suddenly doesn't work today. Nobody talks about certificates, provisioning profiles, metadata requirements, subscription configurations, privacy disclosures, screenshots, or the fact that Apple can reject your app for reasons that sometimes feel completely reasonable and other times feel like they were selected by spinning a wheel.

The funny thing is that I genuinely thought building would be the hard part.

I was wrong.

Building is easier than it's ever been. That's the entire reason we're having this conversation. A year ago I couldn't have built most of these products. Today I can sit down with Claude, ChatGPT, Cursor, Codex, or whatever tool we're all obsessing over this week and get something working shockingly fast.

The hard part is getting another human being to care.

That's it. That's the whole game.

You can build an app in a weekend. Convincing somebody to download it is harder. Convincing them to open it twice is harder than that. Convincing them to pay for it is harder still.

RaceIQ is probably the best example. I spent months building features, refining flows, fighting Apple, tweaking onboarding, fixing bugs, and thinking about training plans. Then I launched it and discovered the most humbling fact in software: nobody wakes up in the morning hoping a stranger launches another app.

People care about solving their problems. They don't care about your roadmap.

That's why one real user teaches you more than a thousand views on a launch post. One paying customer will expose flaws in your assumptions faster than any analytics dashboard. One confused person trying to use your product will immediately find the thing you thought was obvious but absolutely is not.

And then there's Reddit.

God help me, Reddit.

I have probably learned more from Reddit than any other platform. I've also been banned from enough subreddits that I'm starting to wonder if there's a secret leaderboard somewhere. Every community has its own rules, its own culture, and its own interpretation of what constitutes self-promotion. Sometimes I deserved it. Sometimes I genuinely have no idea what happened. Either way, nothing will humble you faster than spending an hour writing what you think is a thoughtful post only to watch it disappear because you violated Rule 14 subsection B regarding promotional content on alternate Thursdays.

The frustrating thing is that Reddit is also where some of the best feedback lives. Buried somewhere between the trolls, the arguments, and the guy explaining why every startup idea is doomed, there's usually somebody telling you exactly what's wrong with your product.

They're often right.

The biggest lie in the AI app gold rush is that the bottleneck is coding. Coding is becoming less of a bottleneck every month. Distribution isn't. Trust isn't. Retention isn't. Product-market fit definitely isn't.

Everybody is posting screenshots of revenue. Nobody is posting screenshots of retention.

Everybody is posting launches. Nobody is posting what happened three months later.

Everybody wants to talk about how fast they built something. Very few people want to talk about whether anybody actually came back and used it again.

I still think this is the best time in history to build software. I just think the conversation around it has become a little detached from reality. AI didn't magically eliminate the hard parts. It mostly eliminated the excuses. The hard parts are still there waiting for you the moment you're done building.

Apple is still waiting.

Users are still waiting.

Marketing is still waiting.

And if you're unlucky, Reddit is definitely waiting.

I've built eight apps with AI so far. Most of them still need work. Some are further along than others. Only one has survived Apple's gauntlet. I haven't become rich. I haven't discovered a secret growth hack. I haven't unlocked passive income.

What I have done is learn more in the last year than I did in years of talking about building things.

Turns out shipping teaches lessons that dreaming never will.`
  }
];

export const newsletterIssues = [
  {
    slug: "issue-001",
    title: "The Weekly Vibe Check",
    date: "2026-06-10",
    appOfWeek: "RaceIQ",
    founderOfWeek: "Morgan Mitchell",
    articleSlug: "i-built-8-apps-with-ai",
    toolOfWeek: "Codex",
    building: "Vibe Rater is live with a submit form, a Vibe Score, and the first Morgan Mitchell build-in-public story."
  }
];

export const futureReviewOffers: ReviewOffer[] = [
  {
    name: "Founder Review",
    price: "$49",
    description: "A concise Vibe Score review with practical product feedback.",
    enabled: false
  },
  {
    name: "Deep Dive Review",
    price: "$99",
    description: "A deeper review with scoring, retention notes, monetization notes, and distribution ideas.",
    enabled: false
  },
  {
    name: "Founder Interview + Review",
    price: "$199",
    description: "A founder story plus a full Vibe Rater product review.",
    enabled: false
  }
];

export const categoryPages = [
  { slug: "best-vibe-coded-apps", title: "Best Vibe-Coded Apps", dek: "A living list of AI-built apps reviewed with a clear Vibe Score framework.", keywords: "best vibe coded apps, vibe coding startups, indie ai startups" },
  { slug: "apps-built-with-lovable", title: "Apps Built With Lovable", dek: "Reviews and build notes from apps made with Lovable and the modern AI founder stack.", keywords: "apps built with lovable, lovable app reviews, vibe coded app reviews" },
  { slug: "apps-built-with-claude-code", title: "Apps Built With Claude Code", dek: "A directory of startups, prototypes, and software products built with Claude Code.", keywords: "apps built with claude code, ai founder stories, indie ai startups" },
  { slug: "apps-built-with-replit", title: "Apps Built With Replit", dek: "Launches from builders using Replit to turn ideas into live products.", keywords: "apps built with replit, vibe coding startups" },
  { slug: "best-ai-fitness-apps", title: "Best AI Fitness Apps", dek: "Fitness apps built with AI, reviewed for utility, retention, trust, and product potential.", keywords: "best ai fitness apps, ai fitness startups" },
  { slug: "best-ai-productivity-apps", title: "Best AI Productivity Apps", dek: "AI productivity apps reviewed by usefulness, clarity, trust, and product potential.", keywords: "best ai productivity apps, indie ai startups" }
];

export const seoPages: SeoPage[] = [
  {
    slug: "what-is-vibe-coding",
    title: "What Is Vibe Coding?",
    description: "A plain-English guide to vibe coding, AI-built apps, and what still matters once the code actually runs.",
    h1: "What Is Vibe Coding?",
    intro: "Vibe coding is what happens when founders use AI tools to move from idea to working software faster than the old rules allowed. The catch is that fast code does not automatically mean a useful product.",
    sections: [
      { heading: "The short version", body: "Vibe coding means using tools like Claude Code, Codex, Cursor, Lovable, Bolt, Replit, and Supabase to build software through fast iteration, prompting, editing, testing, and shipping." },
      { heading: "What still matters", body: "The app still needs clarity, usefulness, trust, retention, distribution, and a reason to exist. Vibe Rater reviews those parts because that is where most AI-built apps either become real products or quietly disappear." }
    ]
  },
  {
    slug: "best-vibe-coding-tools",
    title: "Best Vibe Coding Tools",
    description: "A practical guide to the AI tools people are using to build and ship vibe-coded apps.",
    h1: "Best Vibe Coding Tools",
    intro: "The best vibe coding tool is the one that helps you ship a product people can understand, use, and trust. The stack matters, but the product judgment matters more.",
    sections: [
      { heading: "Tools worth watching", body: "Vibe Rater tracks products built with Claude Code, Codex, Cursor, Lovable, Bolt, Replit, Supabase, Expo, and RevenueCat because those tools keep showing up in real founder workflows." },
      { heading: "The builder trap", body: "A tool can help you build quickly, but it will not solve positioning, onboarding, retention, App Store review, or distribution. That is why a Vibe Score looks past polish and asks whether the product has a real reason to exist." }
    ]
  },
  {
    slug: "apps-built-with-ai",
    title: "Apps Built With AI",
    description: "A directory and review hub for real apps built with AI tools.",
    h1: "Apps Built With AI",
    intro: "AI-built apps are no longer a novelty. The interesting question is whether anyone wants to use them after the launch post fades.",
    sections: [
      { heading: "What gets covered", body: "Vibe Rater covers AI-built apps from real founders, including Morgan Mitchell projects and products submitted through the review form." },
      { heading: "How we review them", body: "Every review asks the same hard questions: is it clear, useful, trustworthy, different enough, and worth coming back to?" }
    ]
  },
  {
    slug: "apps-built-with-cursor",
    title: "Apps Built With Cursor",
    description: "Reviews and founder notes for apps built with Cursor.",
    h1: "Apps Built With Cursor",
    intro: "Cursor can help founders move quickly, but the product still has to earn attention. This page tracks real products and submitted apps built with Cursor.",
    sections: [
      { heading: "What we look for", body: "We care less about how fast the code came together and more about whether the app is clear, useful, safe, and likely to retain real users." },
      { heading: "Submit a Cursor-built app", body: "If you built with Cursor, send the product through the Tally form. We will look at what is clear, what is confusing, and whether the app gives people a reason to return." }
    ]
  },
  {
    slug: "apps-built-with-codex",
    title: "Apps Built With Codex",
    description: "A review hub for apps built with Codex and AI coding agents.",
    h1: "Apps Built With Codex",
    intro: "Codex can help founders build and refactor faster. Vibe Rater is interested in what happens after that: onboarding, retention, trust, monetization, and distribution.",
    sections: [
      { heading: "Real products over tool demos", body: "This page is for apps and founder projects built with Codex, not screenshots of prompts or empty launch hype." },
      { heading: "How to get reviewed", body: "Submit the app with context, links, and screenshots if available. If screenshots are private or unavailable, we use a tasteful pending state rather than scraping anything." }
    ]
  },
  {
    slug: "apps-built-with-bolt",
    title: "Apps Built With Bolt",
    description: "Reviews for apps built with Bolt and judged like real products.",
    h1: "Apps Built With Bolt",
    intro: "Bolt makes it easier to get something live. Vibe Rater asks the harder question: is the thing worth using?",
    sections: [
      { heading: "What counts", body: "Real projects, public launches, and submitted Bolt apps can be included. We are not making up rankings or pretending traction exists." },
      { heading: "Review angle", body: "We look at the product, not just the build speed. The score is blunt because vague compliments do not help anyone ship a better product." }
    ]
  },
  {
    slug: "apps-built-with-lovable",
    title: "Apps Built With Lovable",
    description: "A page for Lovable-built apps that are judged like real products.",
    h1: "Apps Built With Lovable",
    intro: "Lovable is one of the tools changing how quickly founders can turn an idea into an app. Vibe Rater reviews whether those apps are clear, useful, and worth coming back to.",
    sections: [
      { heading: "Fast builds still need taste", body: "A Lovable-built app can look polished quickly, but founders still need product judgment, clear positioning, and a believable path to users." },
      { heading: "Submit your Lovable app", body: "If your app was built with Lovable, submit it for review. The founding cohort tracker will show whether free reviews are still available or whether submissions are moving to waitlist." }
    ]
  },
  {
    slug: "apps-built-with-replit",
    title: "Apps Built With Replit",
    description: "Reviews and launch notes for apps built with Replit by indie founders and AI builders.",
    h1: "Apps Built With Replit",
    intro: "Replit helps founders get ideas into the browser fast. Vibe Rater focuses on whether those ideas become products people actually use.",
    sections: [
      { heading: "Real product feedback", body: "A prototype does not need a victory parade. It needs someone to point out what is clear, what is risky, and what would make it more useful." },
      { heading: "Distribution matters", body: "A Replit build can ship quickly, but the hard part is still earning trust, attention, and repeat usage." }
    ]
  },
  {
    slug: "apps-built-with-claude-code",
    title: "Apps Built With Claude Code",
    description: "A review hub for apps built with Claude Code, founder workflows, and AI-assisted shipping.",
    h1: "Apps Built With Claude Code",
    intro: "Claude Code can help founders build faster, debug faster, and ship more confidently. It does not magically create product-market fit.",
    sections: [
      { heading: "What Vibe Rater looks for", body: "We review whether Claude Code-built products are understandable, useful, differentiated, trustworthy, and close enough to a real founder problem." },
      { heading: "Submit your app", body: "Send your Claude Code-built product through the review form with context, links, and screenshots if you have them." }
    ]
  },
  {
    slug: "vibe-coding-app-reviews",
    title: "Vibe Coding App Reviews",
    description: "Honest reviews for vibe-coded apps, AI-built products, and indie founder launches.",
    h1: "Vibe Coding App Reviews",
    intro: "Vibe Rater reviews the apps people built with vibes, AI tools, late-night confidence, and occasionally terrible judgment.",
    sections: [
      { heading: "What we look at", body: "Every review covers what the app does, who built it, what it was built with, what feels promising, what feels risky, and what the founder should fix next." },
      { heading: "Useful over mean", body: "Blunt does not mean cruel. It means skipping the polite fog and getting to the part that helps." }
    ]
  },
  {
    slug: "ai-app-review-site",
    title: "AI App Review Site",
    description: "Vibe Rater is an AI app review site for founders building products with AI tools.",
    h1: "AI App Review Site",
    intro: "Vibe Rater exists because the AI app gold rush has plenty of launch posts and not enough honest product feedback.",
    sections: [
      { heading: "What makes it different", body: "Reviews are public, direct, and grounded in whether the product is actually useful." },
      { heading: "Who should submit", body: "Submit if you built an AI-powered product, mobile app, indie tool, or vibe-coded project and want a sharper read before the next launch push." }
    ]
  },
  {
    slug: "submit-your-ai-app",
    title: "Submit Your AI App",
    description: "Submit your AI-built app to Vibe Rater for a clear, blunt review.",
    h1: "Submit Your AI App",
    intro: "Built something with AI? Send it in. Vibe Rater reviews real submitted apps and keeps the feedback direct enough to be useful.",
    sections: [
      { heading: "What to include", body: "Send the app name, founder name, links, tools used, stage, and screenshots if you have them. Do not worry if it is messy. Most real products are." },
      { heading: "What happens next", body: "Submissions go through Tally. If the founding cohort is full, new submissions are still accepted but treated as waitlist interest rather than a promised free review." }
    ]
  },
  {
    slug: "roast-my-app",
    title: "Roast My App",
    description: "Get your AI-built app reviewed with honest, blunt product feedback.",
    h1: "Roast My App",
    intro: "Get your AI-built app reviewed by someone who has been rejected by Apple, banned from Reddit, broken builds in production, and still keeps shipping.",
    specialNote: "Not vibrators. Vibe Rater. Different kind of brutally honest review.",
    sections: [
      { heading: "Free for now", body: "Roast My App is free for now while Vibe Rater builds the founding cohort. Paid reviews will probably come later, but there is nothing to buy today." },
      { heading: "Not mean for sport", body: "The feedback is blunt, but it is not mean for sport. The point is to help the product get clearer, sharper, and more useful." }
    ]
  },
  {
    slug: "ai-startup-directory",
    title: "AI Startup Directory",
    description: "A directory for AI-built startups, reviewed apps, and products built in public.",
    h1: "AI Startup Directory",
    intro: "The Vibe Rater directory is starting small on purpose: real projects, real submissions, and no made-up rankings.",
    sections: [
      { heading: "What appears here", body: "Reviewed apps, submitted products, founder stories, and build-in-public projects will show up here as the site grows." },
      { heading: "Why this matters", body: "AI-built startups need more than launch hype. They need feedback, discoverability, and honest context about what is actually working." }
    ]
  },
  {
    slug: "indie-app-reviews",
    title: "Indie App Reviews",
    description: "Honest reviews for indie apps, AI-built products, and software built in public.",
    h1: "Indie App Reviews",
    intro: "Indie founders do not need another vague compliment. They need someone to look at the product and say what is clear, what is confusing, and what might actually work.",
    sections: [
      { heading: "Useful critique", body: "A Vibe Rater review is for the builder first. If it would not help the founder make a better product, it does not belong." },
      { heading: "What gets scored", body: "Each app gets judged on the stuff users notice fast: clarity, usefulness, design, trust, differentiation, and whether anyone has a reason to return." }
    ]
  },
  {
    slug: "founder-stories",
    title: "Founder Stories",
    description: "Founder stories from AI builders, indie makers, and people shipping software in public.",
    h1: "Founder Stories",
    intro: "Vibe Rater founder stories focus on what actually happened: the product, the mistakes, the weird launch moments, and the lessons that did not fit in a polished Twitter thread.",
    sections: [
      { heading: "Current founder story", body: "The launch founder story is Morgan Mitchell, the founder of Vibe Rater and builder of RaceIQ, HydroPal, DoughBuddy, Athlo, ClaimCheck, BeanQuest, DiscMode, and Vibe Rater." },
      { heading: "Future stories", body: "New stories will come from builders who submit real products. Otherwise there is nothing worth publishing." }
    ]
  },
  {
    slug: "app-launch-teardowns",
    title: "App Launch Teardowns",
    description: "Blunt teardowns of app launches, positioning, product clarity, and what founders can fix next.",
    h1: "App Launch Teardowns",
    intro: "A launch teardown looks past the announcement and asks what the app actually communicates, who it is for, and why someone would come back.",
    sections: [
      { heading: "What gets torn down", body: "Positioning, onboarding, product clarity, screenshots, pricing, trust, distribution, and the gap between what the founder thinks is obvious and what users actually understand." },
      { heading: "Why it helps", body: "Launches are noisy. A teardown gives founders a sharper read on what to fix before the next push." }
    ]
  },
  {
    slug: "app-store-rejection-stories",
    title: "App Store Rejection Stories",
    description: "Stories and lessons from App Store rejections, review fixes, and mobile app launch pain.",
    h1: "App Store Rejection Stories",
    intro: "App Store rejection stories are where optimism goes to get humbled. Vibe Rater treats them as lessons, not shame.",
    sections: [
      { heading: "Why they matter", body: "Rejections expose messy store copy, broken flows, privacy gaps, subscription confusion, and assumptions founders did not know they were making." },
      { heading: "What Vibe Rater covers", body: "We cover what broke, what fixed it, and what the next founder can avoid." }
    ]
  },
  {
    slug: "building-in-public",
    title: "Building in Public",
    description: "Build-in-public notes from Vibe Rater and people shipping AI-built apps.",
    h1: "Building in Public",
    intro: "Building in public is not just posting wins. It is admitting when Apple rejects the build, Reddit hates the post, or the feature you loved makes no sense to users.",
    sections: [
      { heading: "What gets shared", body: "Vibe Rater shares founder stories, product reviews, launch notes, App Store lessons, and the unglamorous parts of shipping." },
      { heading: "Current build portfolio", body: "Morgan Mitchell is currently building RaceIQ, HydroPal, DoughBuddy, Athlo, ClaimCheck, BeanQuest, DiscMode, and Vibe Rater." }
    ]
  },
  {
    slug: "ai-founder-interviews",
    title: "AI Founder Interviews",
    description: "Interviews with people building AI-powered apps, vibe-coded products, and indie software.",
    h1: "AI Founder Interviews",
    intro: "AI founder interviews should be more than victory laps. Vibe Rater wants the mistake, the lesson, and the part that almost broke the founder's brain.",
    sections: [
      { heading: "What we ask", body: "Why they built it, what tools they used, what went wrong, what users misunderstood, and what they would fix next." },
      { heading: "How to be considered", body: "Submit your app through Tally. Interviews may become a paid format later, but right now the focus is finding builders with something real to say." }
    ]
  }
];

export function getReview(slug: string) {
  return publishedReviews.find((review) => review.slug === slug);
}

export function getFounder(slug: string) {
  return founders.find((founder) => founder.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategoryPage(slug: string) {
  return categoryPages.find((page) => page.slug === slug);
}

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug);
}

export function getClaimedFounderReviewCount() {
  return reviews.filter((review) => review.submissionStatus === "published" || review.submissionStatus === "accepted").length;
}

export function isFoundingCohortFull() {
  return getClaimedFounderReviewCount() >= MAX_FREE_FOUNDERS;
}

export const publishedReviews = reviews.filter((review) => review.submissionStatus === "published");
