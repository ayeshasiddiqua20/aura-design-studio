# Aura Design Studio

Build a modern, high-converting, full-stack interior design agency website using Next.js (App Router), Tailwind CSS, Shadcn UI, Framer Motion, and Lucide icons. The design language should feel warm, sophisticated, and trustworthy (soft off-whites, warm sandy neutrals, charcoal typography, and subtle sage/mint green accents).

### 1. Navigation Header (Sticky)

- Fixed glassmorphism header with logo "AURA DESIGN STUDIO"

- Links: Portfolio, Services, Process, Case Studies

- Primary CTA Button: "Book Discovery Call" (opens a clean modal overlay with a Calendly/Cal.com embed placeholder)

### 2. Hero Section

- Bold Headline: "Spaces Designed for Living. Executed Without the Friction."

- Subheadline: "We craft high-function, modern interiors tailored to your lifestyle—delivered strictly on budget and on schedule."

- Interactive "Before & After" Image Slider Component right in the hero, letting users drag a center slider to compare a raw, dim room against a fully designed, modern minimalist living room.

- Dual CTAs: Primary "Start Your Project" and Secondary "Explore Our Work" (smooth scrolls to portfolio).

- Social Proof Metrics Bar below hero: "50+ Homes Handed Over | 100% On-Time Delivery | Zero Hidden Fees".

### 3. Interactive Style Quiz & Budget Estimator (Multi-Step Form)

- Step 1: Select Space Type (Cards with icons: Full Home, Kitchen & Living, Bedroom Suite, Commercial).

- Step 2: Select Preferred Aesthetic (Visual cards: Warm Minimalist, Japandi, Modern Classic, Industrial Lux).

- Step 3: Select Service Scope (Design Only vs. Turnkey Execution).

- Final Step: Output an instant estimated cost range based on selections, with a quick lead intake form (Name, Email, Phone) to email them the full design report.

### 4. Deep-Dive Case Study Section ("3D Render vs. Real Executed Built")

- Showcase a flagship project "The Serene Minimalist" (3-BHK Turnkey Redesign).

- Include key project specs badge: 12 Weeks Duration, $X Budget Tier, South Bombay.

- Side-by-side or tabbed visual toggle showing "3D Render Vision" vs "Final Built Reality".

- Include a breakdown section for client brief, problem statement, and material palette used (Oak millwork, textured micro-cement, ambient LED recessed lighting).

### 5. Services & Pricing Matrix

Create 3 pricing cards using a comparison layout:

1. "Design & Concept Only" (Fixed sq.ft. fee) - For DIY clients.

2. "Turnkey Execution" (Highlighted as 'Most Popular' with a badge) - Full hands-off project management, custom millwork, site supervision.

3. "Styling & Refresh" (Fixed project fee) - Furniture, decor sourcing, color palettes.

Include checklist features with green check icons and dynamic CTA buttons on each card.

### 6. The "No-Stress" 5-Step Process Roadmap

Vertical or horizontal step-by-step interactive timeline with clean icons:

1. Discovery Call (15 Mins)

2. Concept & 3D Renders

3. Material Selection & Locked Quote (BOQ)

4. Site Execution & Live Progress Dashboard

5. White-Glove Handover & Styling

### 7. Client Testimonials & Video Walkthrough Mockup

- Grid of client review cards with 5-star ratings.

- Include a video thumbnail component overlaying a play button titled "Watch the 60-second home tour with the Sharma family".

### 8. Footer & Direct Booking Section

- Embedded interactive calendar widget placeholder (Cal.com / Calendly integration UI).

- Contact details, Instagram / Pinterest social links, and copyright text.

Make all components fully responsive, mobile-first, smooth-scrolling, and accessible, using Lucide icons throughout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b7275ccf-ba9c-4e7d-abd6-4691c8206988).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
