# Vibe Rater

Vibe Rater is a dark-mode-first editorial publication and discovery platform for vibe-coded apps, AI-built startups, indie software, and founders building with tools like Claude Code, Codex, Lovable, Replit, Bolt, Cursor, Supabase, Expo, and RevenueCat.

It is intentionally not a SaaS. There are no accounts, dashboards, subscriptions, billing flows, or multi-tenant product surfaces.

## Routes

- `/`
- `/reviews`
- `/reviews/[slug]`
- `/founders`
- `/founders/[slug]`
- `/rankings`
- `/newsletter`
- `/submit`
- `/about`
- `/best-vibe-coded-apps`
- `/apps-built-with-lovable`
- `/apps-built-with-claude-code`
- `/apps-built-with-replit`
- `/best-ai-fitness-apps`
- `/best-ai-productivity-apps`

## Local Development

Install dependencies, then run:

```bash
npm run dev
```

The submit form posts to a placeholder local API route at `/api/submit`. Replace that route with email, file storage, or Supabase when submissions go live.
