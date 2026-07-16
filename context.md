# Meghdoot Motors — Project Context

> **Maruti Suzuki Authorized Service Station** | Ahmedabad, Gujarat  
> Founded: June 1999 | Authorized: 22 Feb 2002  
> Founders: Niraj Chokshi & Rakesh Gajjar

---

## 📋 Project Overview

Meghdoot Motors is a static HTML/CSS/JS website for a Maruti Suzuki Authorized Service Station (MASS) in Ahmedabad. The site showcases the workshop's 23+ year legacy, premium services, annual service plan, **full insurance services hub** (claim intimation, renewal & new insurance), photo gallery, and contact information — all built with a **Corporate Modern with Tactile Accents** design language.

**Design Theme:** "High-Performance Precision" — Deep Navy (authority), Racing Red (action/CTAs), Metallic Silver & Graphite (technical finish), Clean Light-Grey base. **Navbar is white.**

---

## 📁 Full Folder Structure

```
C:\Projects\Meghdoot\
│
├── context.md                          ← THIS FILE — project context hub
│
├── index.html                          ← Home page (hero, stats, services, testimonials, CTA)
├── about.html                          ← About Us (legacy, timeline, founders)
├── services.html                       ← Services (filterable grid, process steps)
├── annual-service-plan.html            ← Annual Service Plan (membership card, comparison)
├── insurance-claim.html                ← Insurance HUB (overview, 3 service cards, partners, inquiry form)
├── claim-intimation.html               ← [NEW] Claim Intimation (process steps, inquiry form, partners)
├── insurance-renewal.html              ← [NEW] Insurance Renewal (benefits, form, partners)
├── new-insurance.html                  ← [NEW] New Insurance (coverage options, form, partners)
├── gallery.html                        ← Gallery (before/after slider, filterable grid, lightbox)
├── contact.html                        ← Contact (map, inquiry form, founder contacts, car model selector)
│
├── assets/
│   └── images/
│       ├── .gitkeep                    ← Placeholder for images folder
│       ├── logo.png                    ← [PLACEHOLDER] Meghdoot Motors logo
│       ├── mass-logo.png               ← [PLACEHOLDER] Maruti Suzuki authorized logo
│       └── placeholder.svg             ← [PLACEHOLDER] Generic SVG fallback for all images
│
├── css/
│   ├── variables.css                   ← Design tokens (colors, typography, spacing, shadows, nav-height: 75px)
│   ├── base.css                        ← Reset, typography utilities, grid, layout primitives
│   ├── components.css                  ← Buttons, nav (white bg), footer, cards, forms, badges, timeline, gallery, lightbox, partner logos (pop-out hover), testimonials
│   └── pages.css                       ← Page-specific overrides (hero sections, contact form, claim stepper, etc.)
│
├── js/
│   ├── main.js                         ← Header scroll, mobile nav toggle, active page, smooth scroll, ESC key
│   ├── animations.js                   ← IntersectionObserver fade-ups, animated stat counters
│   ├── form.js                         ← Contact form validation & simulated submission
│   └── gallery.js                      ← Filter tabs, lightbox, before/after slider, services page filter (dual)
│
└── stitch_meghdoot_motors_digital_showroom/
    ├── home_meghdoot_motors/           ← [STITCHED] Tailwind CSS version
    ├── about_us_meghdoot_motors/       ← [STITCHED] Tailwind CSS version
    ├── services_meghdoot_motors/       ← [STITCHED] Tailwind CSS version
    ├── annual_service_plan_meghdoot_motors/ ← [STITCHED] Tailwind CSS version
    ├── insurance_claims_meghdoot_motors/   ← [STITCHED] Tailwind CSS version (legacy)
    ├── contact_meghdoot_motors/        ← [STITCHED] Tailwind CSS version
    ├── gallery_meghdoot_motors/        ← [STITCHED] Tailwind CSS version
    └── high_performance_precision/
        └── DESIGN.md                   ← [REFERENCE] Full design system spec
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` (Deep Navy) | `#001646` | Headers, primary backgrounds, navigation (text) |
| `--color-primary-container` | `#0b2a6b` | Darker navy for containers |
| `--color-secondary` (Racing Red) | `#bb0218` | **CTAs**, critical alerts, brand highlights |
| `--color-secondary-container` | `#df2a2e` | Brighter red for hover states, badges |
| `--color-surface` | `#f7f9fb` | Light grey base (reduces glare vs white) |
| `--color-surface-variant` | `#e0e3e5` | Metallic Silver for borders, secondary text |
| `--color-outline` | `#757681` | Graphite outlines |
| `--color-outline-variant` | `#c5c6d2` | Lighter outlines |
| `--color-tertiary` | `#181921` | Near-black for membership card |
| `--color-error` | `#ba1a1a` | Validation errors |

### Typography

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Display Large | Barlow Condensed | 72px | 700 | 80px | -0.02em |
| Headline Large | Barlow Condensed | 48px | 700 | 56px | -0.01em |
| Headline Large (Mobile) | Barlow Condensed | 36px | 700 | 42px | — |
| Headline Medium | Barlow Condensed | 32px | 600 | 40px | — |
| Body Large | Inter | 18px | 400 | 28px | — |
| Body Medium | Inter | 16px | 400 | 24px | — |
| Label Bold | Inter | 14px | 600 | 20px | 0.05em |

### Spacing Scale

| Token | Value |
|---|---|
| `--spacing-stack-xs` | 4px |
| `--spacing-stack-sm` | 8px |
| `--spacing-stack-md` | 16px |
| `--spacing-stack-lg` | 32px |
| `--spacing-gutter` | 24px |
| `--spacing-margin-desktop` | 64px |
| `--spacing-margin-mobile` | 20px |
| `--spacing-section-gap` | 80px |
| `--spacing-container-max` | 1280px |

### Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | 0.125rem (2px) |
| `--radius-default` | 0.25rem (4px) |
| `--radius-md` | 0.375rem (6px) |
| `--radius-lg` | 0.5rem (8px) |
| `--radius-xl` | 0.75rem (12px) |
| `--radius-full` | 9999px |

### Shadows

| Token | Value |
|---|---|
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.08)` |
| `--shadow-dropdown` | `0 4px 12px rgba(0,0,0,0.1)` |
| `--shadow-modal` | `0 10px 40px rgba(0,0,0,0.15)` |
| `--shadow-glow` | `0 10px 30px -5px rgba(0,22,70,0.2)` |
| `--shadow-glow-hover` | `0 20px 40px -10px rgba(0,22,70,0.15)` |

### Transitions

| Token | Value |
|---|---|
| `--transition-fast` | 150ms ease |
| `--transition-base` | 300ms ease |
| `--transition-slow` | 500ms ease |
| `--transition-bounce` | 300ms cubic-bezier(0.34, 1.56, 0.64, 1) |

---

## 🧱 Component Inventory

### Buttons
- `.btn-primary` — Racing Red bg, white text, shadow (primary CTA)
- `.btn-secondary` — Navy outline, transparent fill
- `.btn-ghost` — White outline on dark backgrounds
- `.btn-navy` — Solid navy fill
- `.btn-book` — Book a Service (in mobile nav, red bg)
- `.btn-lg` — Large variant (16px padding)

### Header / Navigation
- **White navbar** (`rgba(255,255,255,0.95)` with `backdrop-filter: blur(24px)`)
- Dark navy nav link text with animated underline (`.nav-links a::after` — red)
- Logo: white background pill with subtle border + shadow to separate from white nav
- Meghdoot Motors logo and Maruti Suzuki MASS logo both **44px height** (equalized)
- Desktop nav link hover: navy bg tint
- Mobile hamburger → slide-in panel (dark navy, 300px width)
- Scroll state: `.scrolled` class reduces header-inner height to 60px
- **Navbar height: 75px** (was 72px, increased 4%)

### Hero Sections
- Gallery-style hero text pattern: description in semi-transparent white gradient box with red left border, dark text (`text-on-surface-variant`)
- Full-viewport hero for Home, others 60-75vh
- Gradient overlay: `rgba(0,22,70,0.9)` → `rgba(0,22,70,0.4)`
- Insurance hero pages use `min-height: 75vh` to fit all content (icon + heading + text box + buttons)

### Service Cards
- White bg, `1px solid var(--color-outline-variant)` border
- Hover: `translateY(-4px)` + `shadow-glow`, border transparent
- Icon (2.5rem, navy), heading (Headline Medium, uppercase), description, CTA link (red)
- Used for insurance services cards on main hub page

### Insurance Partner Logos
- Enhanced with border, shadow, higher base opacity (0.8)
- Reduced initial grayscale (60%)
- **Hover: translateY(-6px) scale(1.08)** with strong shadow for pop-out effect
- Width: 130px, min-height: 56px (accommodates multi-line names like "INDUSIND(Reliance Gen.)")
- 14 providers shown: ICICI Lombard, HDFC Ergo, New India, Tata AIG, Bajaj Allianz, Royal Sundaram, Iffco Tokio, Zuno Gen., IndusInd(Reliance Gen.), Zurich Kotak, Liberty, Chola MS, Bharti, Shriram

### Claim Stepper
- 5-step or 4-step horizontal grid with circular icons
- Hover: scale(1.1) icon + red bg
- Used on claim-intimation.html (5 steps) and insurance-renewal.html (4 steps)

### Car Model Dropdown (Contact)
- 31 Maruti Suzuki models: 800, A-Star, Alto, Alto K10, Baleno, Brezza, Celerio, Ciaz, Dzire, Eeco, Ertiga, Esteem, Fronx, Grand Vitara, Gypsy, Ignis, Invicto, Jimny, Kizashi, Omni, Ritz, S-Cross, S-Presso, SX4, Swift, Versa, Victoris, Wagon R, XL6, Zen, Zen Estilo

### Service Type Dropdown (Contact)
- Options: Routine Maintenance, Insurance, Body Work & Paint, Electrical Repair, **Inquiry**

### Google Maps
- **Updated** embed to point directly to Meghdoot Motors coordinates (23.0626762, 72.5687528) instead of YMCA Club

---

## 🔧 JavaScript Functionality

### `main.js`
- Sticky Header, Mobile Nav, Active Page, Smooth Scroll, ESC Key

### `animations.js`
- Fade-up Reveal, Section Reveal, Animated Counters

### `form.js`
- Validation (required, phone, email), real-time validation, simulated submission, insurance claim form handling (`.claim-form`), input focus effects

### Inline JS (per-page)
- **index.html**: New testimonial carousel with 10 reviews, arrow nav, star ratings, keyboard support
- **new-insurance.html**: `submitNewInsurance()` function for the "Get Free Quote" form

### `gallery.js`
- Filter Tabs, Lightbox, Before/After Slider, Services Filter (dual — gallery items + service cards)

---

## 📝 Notes & TODOs

### Completed Revisions (July 2026)

#### Insurance Hub Overhaul
- ✅ Rebranded "Insurance Claim" → **"Insurance"** hub page with 3 service cards
- ✅ Created **3 dedicated insurance pages**: `claim-intimation.html`, `insurance-renewal.html`, `new-insurance.html`
- ✅ Each page has its own hero, benefits section, inquiry form, and partner logos
- ✅ "How Claims Work" process moved from main insurance page → `claim-intimation.html`
- ✅ Added **8 new insurance providers**: Iffco Tokio, Zuno Gen., IndusInd(Reliance Gen.), Zurich Kotak, Liberty, Chola MS, Bharti, Shriram (total 14)
- ✅ **Desktop nav** labels updated: "Insurance Claim" → "Insurance" across all pages
- ✅ Contact form "Insurance Claim" option → "Insurance"
- ✅ Home page service card "Insurance Claim" → "Insurance"
- ⚠️ **Mobile nav** on all pages still shows "Insurance Claim" (needs update)
- ⚠️ **Footer** on all pages still shows "Maruti Insurance" (needs update)

#### Hero Text Readability
- ✅ Applied Gallery-style hero text pattern (semi-transparent white gradient box + red left border + dark text) to all 4 insurance pages
- ✅ Fixed hero height: `height:60vh` → `min-height:75vh` so CTA buttons are fully visible

#### Navbar & Design
- ✅ **Changed navbar from dark navy to white** with dark text
- ✅ **Enhanced partner logo cards** with pop-out hover (scale, shadow, border color)
- ✅ Equalized logo sizes: Meghdoot Motors logo and Maruti Suzuki MASS logo both 44px
- ✅ Increased navbar height by 4%: `--nav-height: 75px` (was 72px), scrolled: 60px (was 58px)

#### Hero Background Fix
- ✅ Added missing `.insurance-hero .hero-bg` CSS to insurance-claim.html so the background image covers the full hero section

#### Location
- ✅ Updated Google Maps embed with actual Meghdoot Motors coordinates (23.0627, 72.5688)

#### Car Models
- ✅ Added all **31 Maruti Suzuki models** to contact form dropdown

#### Form Updates
- ✅ "Express Service (Same-Day Turnaround)" → "Inquiry" in service type dropdown

#### Testimonial Carousel Overhaul (Homepage)
- ✅ Completely rebuilt testimonials on `index.html` with interactive carousel
- ✅ Added **arrow navigation** (prev/next) with hover-to-navy styling
- ✅ Added **star ratings** (filled gold stars) for each review
- ✅ Added **10 real customer reviews** with names, vehicle details, and ratings (3-5 stars)
- ✅ Added **fade animation** between slides (`fadeIn` keyframe, 0.4s ease)
- ✅ Added **keyboard support**: ArrowLeft/ArrowRight to navigate
- ✅ Added **counter display** (e.g., "1 / 10")
- ✅ Infinite loop wrap-around navigation
- ✅ Old CSS (`.testimonial-carousel`, `.testimonial-track`, etc.) retained in components.css but unused

#### Client Revision Round (July 16, 2026)

##### About Page — Founding History
- ✅ Corrected timeline: **1999** — workshop founded as **Mini Motors** (original name confirmed by client)
- ✅ **22 Feb 2002** — after MASS authorization, rebranded to **Meghdoot Motors**
- ✅ Updated hero copy, legacy text, timeline entries (1999 & 2002), and structured data to reflect two distinct milestones
- ✅ Hero copy: "since 1999" → "from a trusted local workshop to a MASS"
- ✅ Timeline 1999: "Meghdoot Motors established" → "Mini Motors established"
- ✅ Timeline 2002: added rebranding detail
- ✅ Legacy text explicitly names Mini Motors as original workshop name

##### About Page — Founder Designations
- ✅ Both Niraj Chokshi & Rakesh Gajjar: simplified from "Co-Founder & Director" / "Co-Founder & Technical Head" → **"Co-founder"** (equal, no hierarchy)
- ✅ Updated image `alt` attributes accordingly

##### Services Page — Service-Aware Inquiry Form
- ✅ Added inline inquiry form on `services.html` with service-aware pre-population
- ✅ "Book This" links on all 8 service cards now trigger `openInquiry(serviceName)` which scrolls to form and pre-fills service type
- ✅ Service-specific helper text changes based on which service is selected
- ✅ Dropdown allows changing service type, which updates the displayed info
- ✅ Includes simulated form submission with success state

##### Services Page — "Periodic Maintenance" → "Routine Maintenance"
- ✅ Renamed across services.html (card heading, meta description)
- ✅ Updated on index.html (service card)
- ✅ Updated annual-service-plan.html (feature description text)
- ✅ Contact form already had "Routine Maintenance" option — no change needed there

##### Services Page — 5,000km → 10,000km
- ✅ Changed "every 5,000km" → "every 10,000km" on services.html

##### Claim Intimation → Claim Assistance
- ✅ Renamed all visible labels from "Claim Intimation" to **"Claim Assistance"** (confirmed with client)
- ✅ Updated on claim-intimation.html (title, meta description, hero heading)
- ✅ Updated on insurance-claim.html (meta description, hero text, service card heading, form dropdown)
- ✅ File URL kept stable (`claim-intimation.html`) to avoid broken links

#### Cross-Cutting Fixes
- ✅ **Mobile nav**: Changed "Insurance Claim" → "Insurance" on all pages (index.html, about.html, services.html, contact.html, annual-service-plan.html, gallery.html)
- ✅ **Footer**: Changed "Maruti Insurance" → "Insurance" on index.html
- ⚠️ Remaining footer entries on other pages were already correct

### Still Open / Needs Client Input
- ⬜ Before/after slider needs genuine matching photos (currently representative images)
- ⬜ Before/after slider needs genuine matching photos (currently representative images)
- ⬜ About page founder photos need real portraits of Niraj Chokshi & Rakesh Gajjar
- ⬜ Street address text across all pages still references "Opp. YMCA Club" — verify if address has changed
- ⬜ Form submission needs real backend integration
- ⬜ Social media links are placeholder (`href="#"`)
- ⬜ Privacy Policy & Terms of Service pages are placeholder
- ⬜ Consider adding `robots.txt` and `sitemap.xml` for SEO
- ⬜ Add Open Graph meta tags for social sharing

---

*Last updated: July 16, 2026*
