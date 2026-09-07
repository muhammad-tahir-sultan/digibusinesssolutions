# Digi Business Solutions — Website Build Specification

> Hand this file to any AI coding tool or developer (Claude Code, Cursor, v0, a freelancer, etc.) as the single source of truth. It contains brand direction, color system, page-by-page sections, and full copy so the site can be built without further clarification.

---

## 1. Project Overview

**Business:** Digi Business Solutions
**Domain:** digibusinesssolutions.business
**What the company does:** Digi Business Solutions is a done-for-you eBay store management service. US and European residents who own (or are willing to open) an eBay seller account partner with Digi Business Solutions, which handles all day-to-day store operations — product research, listing, order fulfillment support, customer service, and account health/compliance — while the client remains the account owner of record and earns a share of the profit as passive income.

**Important positioning note (read before writing any copy):**
The client is always the account owner. Digi Business Solutions is the *service provider/operator*, working transparently on the client's store (e.g., via authorized staff access), not a silent controller of someone else's identity. All copy in this spec is written on that basis — do not reword it into language implying the client has no involvement, no visibility, or no responsibility. Phrases like "we run everything, you do nothing" should be avoided; use "we handle the daily operations, you stay the owner" instead.

**Goal of the website:** Convert visitors (people with, or willing to get, a US/EU eBay account) into applicants who book a call or fill out a partnership application.

**Pages (5 total):**
1. Home
2. How It Works
3. Partnership / Pricing (the 60/40 model)
4. About Us
5. FAQ + Contact / Apply

**Tone:** Confident, transparent, professional — not "get rich quick." Emphasize legitimacy, ownership, and a real operational team. Avoid hype words like "guaranteed," "passive money for nothing," "instant income."

---

## 2. Brand Identity

### 2.1 Logo / Wordmark
- Simple wordmark: **"Digi"** in bold weight + **"Business Solutions"** in a lighter weight, OR a monogram "DBS" in a rounded square as an icon paired with the wordmark.
- Suggested icon motif: a simple upward arrow or storefront/shop icon merged into the "D," symbolizing growth and e-commerce.

### 2.2 Typography
- **Headings:** `Poppins` (600/700 weight) — modern, trustworthy, slightly tech-forward.
- **Body text:** `Inter` (400/500 weight) — highly readable, professional.
- Google Fonts import:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet">
```

### 2.3 Color Palette

Theme: **trust + e-commerce growth** — deep navy/blue (finance/trust) paired with a vibrant green (growth/money) and a warm accent for CTAs.

| Role | Color Name | Hex | Usage |
|---|---|---|---|
| Primary | Deep Navy | `#0B1F3A` | Header, footer, headings, nav background |
| Primary Light | Ocean Blue | `#1D4ED8` | Links, secondary buttons, icon accents |
| Secondary / Growth | Emerald Green | `#10B981` | Highlights, "profit," checkmarks, stat numbers |
| Accent / CTA | Amber Orange | `#F59E0B` | Primary CTA buttons, "Apply Now" highlights |
| Neutral Dark | Charcoal | `#1F2937` | Body text |
| Neutral Light | Cloud Gray | `#F5F7FA` | Section backgrounds (alternating with white) |
| Base | White | `#FFFFFF` | Main background |
| Border/Divider | Light Gray | `#E5E7EB` | Card borders, dividers |

**CSS variables to define globally:**
```css
:root {
  --color-primary: #0B1F3A;
  --color-primary-light: #1D4ED8;
  --color-secondary: #10B981;
  --color-accent: #F59E0B;
  --color-text: #1F2937;
  --color-bg-alt: #F5F7FA;
  --color-bg: #FFFFFF;
  --color-border: #E5E7EB;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

**Usage rules:**
- Primary CTA buttons: Amber (`--color-accent`) background, white text, rounded (8px), slight shadow on hover.
- Secondary buttons: transparent with navy border and navy text.
- Stat numbers / percentage callouts (e.g. "40%"): Emerald green, bold, large.
- Section backgrounds alternate white → cloud gray → white for visual rhythm.
- Never place amber text on white (contrast/legibility) — amber is for buttons/badges only, not body text.

---

## 3. Global Components

### 3.1 Navbar (all pages)
- Logo left.
- Nav links: Home | How It Works | Partnership | About | FAQ
- Right side: **"Apply Now"** button (amber, always visible, sticky on scroll).

### 3.2 Footer (all pages)
- Columns: Brand blurb + tagline | Quick links | Contact info | Legal (Privacy Policy, Terms of Service placeholders)
- Tagline suggestion: *"Your Store. Our Operations. Shared Success."*
- Bottom bar: `© 2026 Digi Business Solutions. All rights reserved.`
- Include a short compliance line in the footer, e.g.: *"Digi Business Solutions provides eBay store management services. Clients retain ownership of their eBay accounts at all times."* (this protects positioning and should stay on every page)

---

## 4. Page-by-Page Content

### PAGE 1 — Home

**Section 1: Hero**
- Headline: **"Turn Your eBay Account Into a Passive Income Stream — Without Lifting a Finger on Day-to-Day Work."**
- Subheadline: "Digi Business Solutions manages every part of your eBay store — product research, listings, orders, and customer support — while you stay the owner and keep 40% of the profit."
- CTA buttons: `Apply for Partnership` (amber, primary) + `See How It Works` (outline, secondary)
- Visual: illustration or photo collage of a laptop with an eBay-style storefront dashboard, subtle upward growth chart line overlay.

**Section 2: Trust Bar**
- Row of 3-4 short trust points with icons: "US & EU Applicants Welcome" | "You Stay the Account Owner" | "Full Operational Team" | "Transparent 60/40 Split"

**Section 3: Why This Works (3-column benefit cards)**
- Card 1 — *"Zero Experience Needed"*: "You don't need to know eBay, e-commerce, or product sourcing. Our team already does."
- Card 2 — *"You Keep Ownership"*: "The account and the funds are legally yours. We operate it; you own it."
- Card 3 — *"Real Operational Team"*: "Product research, listing, fulfillment coordination, customer service, and account health — handled daily by specialists."

**Section 4: How It Works (condensed 4-step preview, links to full page)**
1. Apply & Get Approved
2. Set Up Your Store (or connect your existing one)
3. Our Team Runs Operations Daily
4. You Receive Your Share of the Profit
- CTA: "See the full process →" (links to How It Works page)

**Section 5: The Partnership Split (visual callout)**
- Large visual: a simple split bar/donut showing 60% (Digi Business Solutions — Operations) / 40% (You — Owner)
- Short copy: "We handle 100% of the daily work. You still keep 40% of every dollar of profit — for staying the account owner and letting our team operate."
- CTA: `See Full Partnership Details`

**Section 6: FAQ Teaser**
- 3 short questions with 1-line answers, "View all FAQs →" link to FAQ page.

**Section 7: Final CTA banner**
- "Ready to turn your eBay account into an income stream?" + `Apply Now` button.

---

### PAGE 2 — How It Works

**Section 1: Page Hero**
- Headline: "From Application to Payout — Here's Exactly How It Works"
- Subheadline: "A simple, transparent process. No hidden steps."

**Section 2: Step-by-step (numbered, 5 steps, alternating left/right layout)**
1. **Apply** — "Fill out a short application telling us about yourself and your eligibility (residency in the US or a European country)."
2. **Screening Call** — "Our team verifies your details and walks you through the partnership agreement so everything is clear before you commit."
3. **Store Setup** — "If you already have an eBay account, we get it operation-ready. If not, we guide you through opening one properly in your name."
4. **We Operate, You Own** — "Our team manages product research, listings, pricing, order processing, and customer support daily — under your account, with you kept informed."
5. **Get Paid** — "Profits are received directly into your bank account. Your 40% share is yours; no waiting on us to send it."

**Section 3: What We Handle vs. What You Do (2-column comparison table)**
| Handled by Digi Business Solutions | Handled by You |
|---|---|
| Product research & sourcing | Being the verified account holder |
| Listing creation & optimization | Reviewing monthly performance reports |
| Order processing coordination | Staying reachable for account verification if eBay requests it |
| Customer support | Approving any major account decisions |
| Account health & policy compliance | — |

**Section 4: Timeline expectation**
- Short honest note: "Most stores take 2-4 weeks to start generating consistent sales while listings and reputation build. We'll keep you updated throughout."

**Section 5: CTA**
- "Ready to get started?" + `Apply Now`

---

### PAGE 3 — Partnership / Pricing (the 60/40 model)

**Section 1: Hero**
- Headline: "A Straightforward 60/40 Partnership"
- Subheadline: "No monthly fees. No upfront costs. We only succeed when your store does."

**Section 2: The Model Explained**
- Large visual split graphic (60% Operations / 40% Owner) repeated with more detail here than on Home.
- Copy block: "You don't pay us a salary or a monthly fee. Instead, once your store is profitable, profit is split 60% to Digi Business Solutions (covering the team, tools, and operations that run your store) and 40% to you, as the account owner."
- Bullet list:
  - "No cost to join"
  - "No inventory to buy upfront (dropship/sourcing handled by our team)"
  - "You always retain ownership of the account and the funds"
  - "Clear monthly reporting on sales and profit"

**Section 3: Who This Is For**
- Bullet list: "Residents of the United States or a European country" | "18+ and able to verify identity for eBay's requirements" | "Comfortable being the account owner and staying reachable for occasional verification" | "Looking for supplemental income without a second job's time commitment"

**Section 4: Who This Is NOT For**
- Honest disqualifiers build trust: "Looking for guaranteed fixed payouts regardless of sales" | "Not able to verify their identity or banking details" | "Wanting zero involvement or communication with our team"

**Section 5: CTA**
- "See if you qualify" + `Apply Now`

---

### PAGE 4 — About Us

**Section 1: Hero**
- Headline: "We're the Operations Team Behind Growing eBay Stores"
- Subheadline: "Digi Business Solutions was built to give everyday people in the US and Europe a way to earn from e-commerce — without needing the time, tools, or experience to run a store themselves."

**Section 2: Our Story (placeholder — user to personalize)**
- 2-3 paragraph placeholder: "Digi Business Solutions started with a simple idea: many people have the eligibility to open a strong eBay account — US or EU residency, a clean identity, a bank account — but not the time or knowledge to run a profitable store. Meanwhile, our team has spent [X years] mastering product research, listing optimization, and marketplace operations. [Founder/company] built Digi Business Solutions to connect these two things: your eligibility and ownership, our operational expertise — with profit shared fairly between both sides."
- *(Note to developer: mark this as an editable placeholder — founder should personalize with real background, years of experience, team size, etc.)*

**Section 3: Our Values (3-4 icon cards)**
- Transparency — "Clear reporting, clear terms, no hidden fees."
- Ownership Respected — "Your account, your funds, your control — always."
- Expertise — "A dedicated team focused on product research, listings, and customer experience."
- Long-Term Partnership — "We grow when you grow — so we're invested in your store's success."

**Section 4: Team snapshot (optional)**
- Simple row: "Product Research Team" | "Listing & SEO Specialists" | "Customer Support" | "Account Health & Compliance"

**Section 5: CTA**
- "Want to partner with us?" + `Apply Now`

---

### PAGE 5 — FAQ + Contact / Apply

**Section 1: Hero**
- Headline: "Questions? Answers. Then, Let's Talk."

**Section 2: FAQ Accordion**
1. **Do I need eBay experience?** — "No. Our team handles the operational side entirely. You just need to be the verified account holder."
2. **Who owns the eBay account?** — "You do, always. We operate the store on your behalf, but the account and the funds it generates belong to you."
3. **Where does the money go?** — "All payments from eBay go directly into your bank account, since it's tied to your account. Your 40% share stays with you; you send us our 60% share according to the payment schedule in the partnership agreement." *(Note to developer: user should confirm and adjust the exact payment-flow wording here to match their real process.)*
4. **What countries are eligible?** — "Residents of the United States and most European countries. Apply and we'll confirm eligibility for your specific location."
5. **Is there a cost to join?** — "No upfront fees. We only earn once your store is generating profit."
6. **How much time do I need to give?** — "Minimal. Occasional verification steps and staying reachable for updates — the daily operations are on us."
7. **Can I end the partnership?** — "Yes. Terms for ending the partnership are outlined in the agreement you'll review before signing."

**Section 3: Contact / Apply Form**
- Form fields: Full Name, Email, Country of Residence, Do you already have an eBay account? (Yes/No), Phone (optional), Message/Notes
- Submit button: `Submit Application` (amber)
- Confirmation microcopy under form: "We typically respond within 1-2 business days."

**Section 4: Direct contact info**
- Email, and optionally WhatsApp/Telegram if used for business outreach.

---

## 5. Technical Build Notes

- **Recommended stack:** Static site — plain HTML/CSS/JS, or a simple React/Next.js build if the developer prefers component reuse across 5 pages. Either works fine for a 5-page marketing site.
- **Responsive:** Mobile-first. Stack all multi-column sections vertically under 768px.
- **Forms:** Wire the application form to an email service (e.g., Formspree, EmailJS) or a simple backend endpoint — specify which before build starts.
- **Images:** Use clean, professional stock imagery (people at laptops, warehouse/shipping, growth charts) — avoid stock photos that look like generic "get rich quick" ad creative.
- **Animations:** Subtle fade-up on scroll for section reveals; avoid heavy motion that feels like a hype/sales-funnel page.
- **SEO basics:** Set page titles/meta descriptions per page (e.g., Home: "Digi Business Solutions | eBay Store Management Partnership"). Add Open Graph tags for link previews.
- **Legal pages:** Even simple Privacy Policy and Terms of Service pages/placeholders should be linked in the footer before the site goes live — required for a form that collects personal data (name, email, country) and recommended for any partnership-application business.

---

## 6. Copy Guardrails (for whoever builds/edits this)

When extending or rewriting any copy on this site, keep these rules:
- Never claim guaranteed income or guaranteed profit percentages.
- Never say "you don't need to do anything" or "we fully control your account" — always frame the client as the owner who stays informed and occasionally involved.
- Always disclose that funds go to the client's account, not the company's.
- Avoid superlatives like "risk-free," "guaranteed," "instant money."
