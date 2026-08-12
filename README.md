# Mayur Gotmare — Portfolio

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS 4 and GSAP.

## 1. Install & run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev
```

## 2. Add your images

The uploaded project didn't include a `public/` images folder. Add these
files (see `public/png/README_ADD_YOUR_IMAGES.txt` for the full list):

- `public/png/mayurImg.png` — profile photo
- `public/png/MyntraCloneImg.png`, `Protfolio_img.png`, `MovieRecommendetion.jpg`, `Typing_img.png` — project screenshots
- `public/resume.pdf` — your resume (linked from the hero section)

## 3. Set up the contact form (emails you directly)

The contact form no longer uses a client-exposed API key. It posts to a
server route (`src/app/api/contact/route.ts`) which sends mail through
[Resend](https://resend.com) (free tier: 3,000 emails/month, no credit card).

1. Sign up at resend.com and grab an API key.
2. Add these environment variables (locally in `.env.local`, and in Vercel
   under Project Settings → Environment Variables):

   ```
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_TO_EMAIL=mayurgotmare2003@gmail.com
   CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
   ```

   `CONTACT_FROM_EMAIL` can stay as `onboarding@resend.dev` (Resend's shared
   sandbox sender) until you verify your own domain in Resend, after which
   you can send from an address like `contact@yourdomain.com`.
3. The display email on the contact page and footer is already set to
   `mayurgotmare2003@gmail.com` — update it in `src/app/contact/page.tsx` and
   `src/app/components/footer.tsx` if that ever changes.

The route also includes basic rate limiting and a honeypot field to cut down
on spam, and returns clear success/error states to the form instead of a
browser `alert()`.

## 4. Deploy to Vercel

1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js — no build config needed.
4. Add the three environment variables from step 3 in the Vercel dashboard
   before your first deploy (or redeploy after adding them).
5. Deploy. Your contact form, sitemap (`/sitemap.xml`) and robots.txt
   (`/robots.txt`) will all work out of the box.

Update the `siteUrl` values in `src/app/layout.tsx`, `src/app/sitemap.ts`
and `src/app/robots.ts` to your final Vercel/custom domain for correct SEO
metadata.

## What changed from the previous version

- Unified a single dark, gradient-accented design system (CSS variables in
  `globals.css`) across every page instead of five different color schemes.
- Rebuilt the contact form to send real email via a secure server route
  instead of a hardcoded, client-visible API key.
- Fixed nav typos ("Experirence", "Projets"), dead project links, and
  swapped missing PNG icons for `lucide-react` icons.
- Added SEO metadata, Open Graph tags, `sitemap.ts`, `robots.ts`, and an
  auto-generated favicon.
- Replaced the missing hero/contact illustration SVGs with a code-panel
  mockup and a contact-info card so the site doesn't depend on unavailable
  assets.
- Added a footer, a home page CTA/highlights section, and general spacing,
  accessibility and content-cleanup passes on every page.
