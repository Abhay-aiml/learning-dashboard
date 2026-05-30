# LearnFlow Dashboard

A futuristic student learning dashboard built with Next.js, Supabase, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture
- Data fetching is done via Next.js Server Components in `page.tsx`
- Supabase client is initialized server-side in `src/lib/supabase.ts`
- Client components handle all animations and interactions
- Suspense boundaries show skeleton loaders during data fetch

## Setup
1. Clone the repo
2. Copy `.env.example` to `.env.local`
3. Add your Supabase credentials
4. Run `npm install`
5. Run `npm run dev`

## Environment Variables
See `.env.example` for required variables.
