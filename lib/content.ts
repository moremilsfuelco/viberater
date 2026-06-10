export type Verdict =
  | "Probably Not A Business"
  | "Early Potential"
  | "Strong Potential"
  | "Dangerous If Executed Well";

export type Review = {
  slug: string;
  appName: string;
  tagline: string;
  founderSlug: string;
  founderName: string;
  category: string;
  tools: string[];
  vibeScore: number;
  verdict: Verdict;
  scores: {
    design: number;
    usability: number;
    retention: number;
    monetization: number;
    differentiation: number;
    trust: number;
  };
  signals: {
    delusionFactor: string;
    aiSlopRisk: string;
    download: string;
    keep: string;
  };
  assumptions: string;
  good: string[];
  risk: string[];
  moneyPotential: string;
  founderAdvice: string;
  finalVerdict: string;
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

export const reviews: Review[] = [
  {
    slug: "raceiq",
    appName: "RaceIQ",
    tagline: "Training intelligence for runners who want smarter race prep.",
    founderSlug: "morgan-raceiq",
    founderName: "Morgan Mitchell",
    category: "AI fitness",
    tools: ["Expo", "Codex", "RevenueCat", "Supabase"],
    vibeScore: 86,
    verdict: "Dangerous If Executed Well",
    scores: { design: 9, usability: 8, retention: 9, monetization: 8, differentiation: 8, trust: 7 },
    signals: {
      delusionFactor: "Useful ambition, not fantasy",
      aiSlopRisk: "Low if recommendations stay specific",
      download: "Yes, before a race cycle",
      keep: "Yes, if weekly plan updates are sharp"
    },
    assumptions: "Placeholder review based on stated product direction. No revenue, user count, or conversion claims are assumed.",
    good: ["Clear user pain: runners want confidence before race day.", "The category supports recurring use when training plans adapt.", "Premium can feel natural if insight quality is high."],
    risk: ["Generic coaching advice would collapse trust quickly.", "Fitness claims need careful wording and safety boundaries."],
    moneyPotential: "Subscription potential exists, but only if the plan feels materially better than free content and basic tracking apps.",
    founderAdvice: "Own one narrow race-prep promise first. Make the app undeniable for a 10K, half marathon, or marathon before broadening.",
    finalVerdict: "RaceIQ has strong potential because the job-to-be-done is emotionally charged and repeatable.",
    shipLogs: ["Spent 6 hours making build metadata obvious enough for TestFlight.", "RevenueCat worked locally, then became a personality test.", "The best feature idea was also the one that needed the most restraint."]
  },
  {
    slug: "hydropal",
    appName: "HydroPal",
    tagline: "A hydration companion that turns daily water habits into a lighter ritual.",
    founderSlug: "sam-hydropal",
    founderName: "Sam Rivera",
    category: "AI wellness",
    tools: ["Lovable", "Supabase", "Cursor"],
    vibeScore: 72,
    verdict: "Early Potential",
    scores: { design: 8, usability: 8, retention: 7, monetization: 5, differentiation: 5, trust: 7 },
    signals: {
      delusionFactor: "Manageable if it avoids medical cosplay",
      aiSlopRisk: "Medium",
      download: "Maybe, if the reminders are charming",
      keep: "Only if it becomes part of a routine"
    },
    assumptions: "Placeholder review. Product specifics are illustrative and should be replaced with founder-submitted details.",
    good: ["Easy to understand instantly.", "Habit apps can earn daily surface area.", "A friendly tone could differentiate it from sterile trackers."],
    risk: ["Hydration is crowded and easy to trivialize.", "AI needs a real role beyond generated encouragement."],
    moneyPotential: "Light monetization is possible through premium packs, integrations, or habit coaching, but the core use case may resist a heavy subscription.",
    founderAdvice: "Pick a distinct user: athletes, desk workers, parents, or people taking specific supplements. Bland wellness is the danger zone.",
    finalVerdict: "HydroPal is likable, but it needs a sharper wedge to become a business.",
    shipLogs: ["The founder renamed the reminder engine three times and it still just says drink water.", "First users loved the tone, ignored the streaks, and asked for Apple Watch support."]
  },
  {
    slug: "doughbuddy",
    appName: "DoughBuddy",
    tagline: "AI help for home bakers trying to make better bread without a spreadsheet.",
    founderSlug: "nina-doughbuddy",
    founderName: "Nina Patel",
    category: "AI food",
    tools: ["Claude Code", "Next.js", "Supabase"],
    vibeScore: 79,
    verdict: "Strong Potential",
    scores: { design: 8, usability: 7, retention: 8, monetization: 7, differentiation: 8, trust: 7 },
    signals: {
      delusionFactor: "Earned niche obsession",
      aiSlopRisk: "Low if recipes are tested",
      download: "Yes, if I bake weekly",
      keep: "Yes, if it remembers my kitchen"
    },
    assumptions: "Placeholder review. No customer traction or revenue is implied.",
    good: ["Specific hobbyist audience with high intent.", "Great fit for memory, troubleshooting, and iterative logs.", "Founder can build content and community around visible progress."],
    risk: ["Recipe hallucinations can ruin trust.", "Needs tested examples, not only generated advice."],
    moneyPotential: "Could support paid recipe collections, fermentation logs, classes, or kitchen-specific troubleshooting.",
    founderAdvice: "Make the first delightful loop about saving one loaf, then turn saved loaves into shareable proof.",
    finalVerdict: "DoughBuddy feels like a niche that could punch above its weight with credible content.",
    shipLogs: ["A starter hydration calculator caused more debate than the landing page.", "The founder learned that 'room temperature' means nothing."]
  },
  {
    slug: "athlo",
    appName: "Athlo",
    tagline: "A social performance layer for recreational athletes.",
    founderSlug: "leo-athlo",
    founderName: "Leo Chen",
    category: "AI fitness",
    tools: ["Replit", "Expo", "Codex"],
    vibeScore: 81,
    verdict: "Strong Potential",
    scores: { design: 8, usability: 8, retention: 8, monetization: 7, differentiation: 7, trust: 7 },
    signals: {
      delusionFactor: "High, but in the fun way",
      aiSlopRisk: "Medium",
      download: "Yes, if teammates are there",
      keep: "Depends on network density"
    },
    assumptions: "Placeholder review. Social graph, revenue, and engagement details are not assumed.",
    good: ["Fitness plus identity can create strong retention.", "Team and local competition mechanics are naturally shareable.", "AI can help translate activity into useful narratives."],
    risk: ["Social apps are brutally hard without a dense initial community.", "It can drift into feature soup fast."],
    moneyPotential: "Monetization is plausible through clubs, events, premium analytics, or team tools once a community forms.",
    founderAdvice: "Start with one sport and one city. Win a real group chat before chasing a broad network.",
    finalVerdict: "Athlo has energy, but execution depends on distribution discipline.",
    shipLogs: ["The onboarding asked for seven goals and everyone picked 'get faster'.", "A leaderboard made three friends more competitive than expected."]
  },
  {
    slug: "claimcheck",
    appName: "ClaimCheck",
    tagline: "A plain-English helper for tracking insurance claims without losing your mind.",
    founderSlug: "ava-claimcheck",
    founderName: "Ava Brooks",
    category: "AI productivity",
    tools: ["Bolt", "Claude Code", "Supabase"],
    vibeScore: 88,
    verdict: "Dangerous If Executed Well",
    scores: { design: 8, usability: 9, retention: 7, monetization: 9, differentiation: 8, trust: 8 },
    signals: {
      delusionFactor: "Justified if trust is earned",
      aiSlopRisk: "Low tolerance category",
      download: "Yes, during a claim",
      keep: "Maybe after resolution"
    },
    assumptions: "Placeholder review. Legal, compliance, and revenue claims are intentionally avoided.",
    good: ["Pain is acute, expensive, and confusing.", "Users may pay when the situation is stressful.", "Clear documents and timelines create tangible value."],
    risk: ["Trust, privacy, and legal boundaries must be extremely clear.", "Bad advice could cause real harm."],
    moneyPotential: "High willingness to pay is possible for guided organization, document summaries, and claim-status workflows, but trust must lead the product.",
    founderAdvice: "Do not pretend to be a lawyer or insurer. Be the calm, organized folder the user desperately needed.",
    finalVerdict: "ClaimCheck has one of the strongest problem shapes in the set.",
    shipLogs: ["The founder deleted three 'AI advocate' headlines after realizing they sounded legally cursed.", "The first useful feature was just a better timeline."]
  },
  {
    slug: "beanquest",
    appName: "BeanQuest",
    tagline: "A discovery app for finding better coffee wherever you are.",
    founderSlug: "morgan-beanquest",
    founderName: "Morgan Mitchell",
    category: "AI local discovery",
    tools: ["Expo", "RevenueCat", "Google Places", "Codex"],
    vibeScore: 84,
    verdict: "Strong Potential",
    scores: { design: 9, usability: 8, retention: 8, monetization: 7, differentiation: 8, trust: 8 },
    signals: {
      delusionFactor: "Healthy obsession",
      aiSlopRisk: "Low if place data stays current",
      download: "Yes, while traveling",
      keep: "Yes, if recommendations beat maps"
    },
    assumptions: "Placeholder review. No revenue, install, or App Store performance numbers are invented.",
    good: ["Coffee discovery is emotional and repeatable.", "Local recommendations are easy to judge quickly.", "Premium can work if it unlocks meaningful discovery, not artificial scarcity."],
    risk: ["Competes against default map behavior.", "Bad or stale place data immediately damages confidence."],
    moneyPotential: "Potential exists through premium discovery filters, city guides, and sponsorships, but the free path needs to remain genuinely useful.",
    founderAdvice: "Make the first recommendation feel handcrafted. One great cafe beats ten mediocre pins.",
    finalVerdict: "BeanQuest feels publication-friendly and product-friendly: taste, place, and habit all show up.",
    shipLogs: ["Spent a heroic amount of time making Restore Purchases visible enough.", "A fallback cafe list became surprisingly important.", "The app got better when Premium stopped trying to sound inevitable."]
  }
];

export const founders: Founder[] = [
  {
    slug: "morgan-raceiq",
    name: "Morgan Mitchell",
    app: "RaceIQ",
    background: "Indie builder focused on mobile apps, launch systems, and AI-assisted product development.",
    why: "Race training creates anxiety, and AI can help turn scattered advice into a clearer plan.",
    favoriteTool: "Codex",
    biggestMistake: "Trying to debug TestFlight ambiguity from inside the normal app experience.",
    biggestLesson: "When provenance matters, make the build impossible to confuse.",
    currentGoal: "Ship a version that runners trust enough to use throughout a full training cycle."
  },
  {
    slug: "sam-hydropal",
    name: "Sam Rivera",
    app: "HydroPal",
    background: "Designer turned vibe coder, building small wellness utilities.",
    why: "Most habit trackers feel punitive. Sam wanted hydration reminders that felt lighter.",
    favoriteTool: "Lovable",
    biggestMistake: "Making the first version too cute before the habit loop was clear.",
    biggestLesson: "A tiny product still needs a sharp audience.",
    currentGoal: "Find a niche where hydration tracking feels necessary instead of nice-to-have."
  },
  {
    slug: "nina-doughbuddy",
    name: "Nina Patel",
    app: "DoughBuddy",
    background: "Home baker, community organizer, and weekend software tinkerer.",
    why: "Bread forums are full of wisdom, but beginners need help translating it to their kitchen.",
    favoriteTool: "Claude Code",
    biggestMistake: "Letting the AI generate recipes before the app had enough guardrails.",
    biggestLesson: "Credibility beats volume in food apps.",
    currentGoal: "Build a tested recipe library and a better troubleshooting flow."
  },
  {
    slug: "leo-athlo",
    name: "Leo Chen",
    app: "Athlo",
    background: "Former college athlete building social tools for recreational competitors.",
    why: "Local athletes already compete in group chats. Athlo tries to make that energy visible.",
    favoriteTool: "Replit",
    biggestMistake: "Starting too broad across too many sports.",
    biggestLesson: "Communities form around repeated rituals, not feature lists.",
    currentGoal: "Win one local running and pickup basketball community."
  },
  {
    slug: "ava-claimcheck",
    name: "Ava Brooks",
    app: "ClaimCheck",
    background: "Operations lead who has spent too much time inside paperwork-heavy systems.",
    why: "Insurance claims are stressful because people lose track of documents, calls, and next steps.",
    favoriteTool: "Bolt",
    biggestMistake: "Writing copy that sounded more legally powerful than the product should claim.",
    biggestLesson: "Trust is a product feature.",
    currentGoal: "Create the calmest possible claim timeline experience."
  },
  {
    slug: "morgan-beanquest",
    name: "Morgan Mitchell",
    app: "BeanQuest",
    background: "Mobile app builder exploring discovery products with strong taste and clear utility.",
    why: "Finding genuinely good coffee in a new place should not require ten tabs and blind optimism.",
    favoriteTool: "Codex",
    biggestMistake: "Letting premium positioning get ahead of the free discovery promise.",
    biggestLesson: "Reviewers and users both need the happy path to be obvious.",
    currentGoal: "Make nationwide cafe discovery feel instant, useful, and trustworthy."
  }
];

export const newsletterIssues = [
  {
    slug: "issue-001",
    title: "The first Vibe Rater dispatch",
    date: "2026-06-09",
    appOfWeek: "ClaimCheck",
    founderOfWeek: "Ava Brooks",
    toolOfWeek: "Claude Code",
    building: "We are building the review system, founder directory, and the first submission flow."
  }
];

export const categoryPages = [
  {
    slug: "best-vibe-coded-apps",
    title: "Best Vibe-Coded Apps",
    dek: "A living list of AI-built apps with unusually strong taste, traction potential, or founder clarity.",
    keywords: "best vibe coded apps, vibe coding startups, indie ai startups"
  },
  {
    slug: "apps-built-with-lovable",
    title: "Apps Built With Lovable",
    dek: "Reviews and founder stories from teams shipping fast with Lovable.",
    keywords: "apps built with lovable, lovable app reviews, vibe coded app reviews"
  },
  {
    slug: "apps-built-with-claude-code",
    title: "Apps Built With Claude Code",
    dek: "A directory of startups, prototypes, and software products built with Claude Code.",
    keywords: "apps built with claude code, ai founder stories, indie ai startups"
  },
  {
    slug: "apps-built-with-replit",
    title: "Apps Built With Replit",
    dek: "Launches from builders using Replit to turn ideas into live products.",
    keywords: "apps built with replit, vibe coding startups"
  },
  {
    slug: "best-ai-fitness-apps",
    title: "Best AI Fitness Apps",
    dek: "Fitness apps built with AI, reviewed for utility, retention, trust, and money potential.",
    keywords: "best ai fitness apps, ai fitness startups"
  },
  {
    slug: "best-ai-productivity-apps",
    title: "Best AI Productivity Apps",
    dek: "AI productivity apps ranked by actual usefulness, clarity, and business potential.",
    keywords: "best ai productivity apps, indie ai startups"
  }
];

export function getReview(slug: string) {
  return reviews.find((review) => review.slug === slug);
}

export function getFounder(slug: string) {
  return founders.find((founder) => founder.slug === slug);
}

export function getCategoryPage(slug: string) {
  return categoryPages.find((page) => page.slug === slug);
}

export function scoreLabel(score: number) {
  if (score >= 86) return "Elite signal";
  if (score >= 80) return "Strong signal";
  if (score >= 70) return "Promising";
  return "Needs sharper proof";
}

export function verdictLabel(verdict: Verdict) {
  const labels: Record<Verdict, string> = {
    "Probably Not A Business": "💀 Probably Not A Business",
    "Early Potential": "🌱 Early Potential",
    "Strong Potential": "🚀 Strong Potential",
    "Dangerous If Executed Well": "🦄 Dangerous If Executed Well"
  };

  return labels[verdict];
}
