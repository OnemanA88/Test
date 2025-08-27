This is a Next.js project bootstrapped with `create-next-app`.

## HelloJaiSoif — MVP Setup

Prerequisites:
- Node.js 18+
- npm

### 1) Install and run
```bash
npm install
cp .env.example .env
# Fill .env with your keys
npm run dev
```
App will be available at http://localhost:3000

### 2) Environment variables (.env)
- NEXT_PUBLIC_BASE_URL=http://localhost:3000
- STRIPE_SECRET_KEY=sk_test_...
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
- NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id

Optional (Auth/DB to be added later):
- NEXT_PUBLIC_SUPABASE_URL=
- NEXT_PUBLIC_SUPABASE_ANON_KEY=

### 3) Payments
- Stripe Checkout: form POST to `/api/checkout/stripe` creates a session and redirects. Configure `STRIPE_SECRET_KEY`.
- PayPal Smart Buttons: add `NEXT_PUBLIC_PAYPAL_CLIENT_ID`.
- Webhooks (set these endpoints in provider dashboards):
  - Stripe: `POST /api/webhooks/stripe` (set STRIPE_WEBHOOK_SECRET)
  - PayPal: `POST /api/webhooks/paypal`

### 4) Security & SEO
- Middleware sets CSP, HSTS, and security headers.
- Sitemap at `/sitemap.xml`, robots at `/robots.txt`.
- Product JSON-LD on Pack page.

### 5) Routes
- `/` Accueil (Hero, USP, CTA Pack Enfants)
- `/packs` Listing (Pack Enfants dispo, autres bientôt)
- `/packs/1` Fiche produit Pack Enfants
- `/cart` Panier, `/checkout` Paiement (Stripe/PayPal)
- `/about`, `/faq`, `/contact` Pages de contenu
- `/privacy`, `/terms`, `/cookies` Légaux
- `/account` Compte (placeholder), `/admin` Back-office (placeholder)

### 6) Notes
- Cart state via Zustand (guest). Auth/DB and full admin CRUD planned next.
- Delivery: Île-de-France en 48h (mention sur les pages).
