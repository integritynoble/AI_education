# edu.platformai.org — AI-Empowered Education for All
## Implementation Plan

**Domain:** edu.platformai.org
**Server IP:** 34.63.169.185
**Working Dir:** /home/spiritai/edu/edu_comp
**Design Method:** solveeverything.org (editorial long-form, Targeting System methodology)
**CompareGPT Source:** /home/spiritai/qiyuan (Vue 3 + FastAPI)

---

## 1. The Targeting System (Core Framework)

This is NOT audience segmentation. Following solveeverything.org, a **Targeting System** is an outcome-based measurement infrastructure that makes industrial-scale progress in education possible. It answers: *"This number is what success looks like."*

### 1.1 Primary Metric: Learning Gain per Hour (LG/H)

> A Targeting System does not care about abstract statistics like "accuracy on a dataset." It measures **Learning Gain per Hour**: did the human student actually learn faster?

| Metric | Definition | Measurement Method |
|--------|-----------|-------------------|
| **LG/H** | Measurable increase in skill for every hour spent studying | Pre-test → study session → post-test delta, normalized by time |
| **Retention Floor (30d)** | Student retains ≥80% of skill after 30 days | Automated re-assessment at day 30 |
| **Retention Floor (60d)** | Student retains ≥70% of skill after 60 days | Automated re-assessment at day 60 |
| **Retention Floor (180d)** | Student retains ≥60% of skill after 180 days | Automated re-assessment at day 180 |
| **RoCS** | Return on Cognitive Spend — value created per million AI tokens | LG/H achieved per dollar of AI compute consumed |

### 1.2 Guardrails

| Guardrail | Description |
|-----------|-------------|
| **Right of Abstention** | The student can pause or opt out of AI instruction at any time |
| **Human-in-the-Loop Override** | Teachers remain final decision-makers for placement, advancement, and intervention |
| **Parental Transparency** | Real-time dashboards showing what the AI observed, taught, and recommended for each student |
| **Decision Records (DR-AIS)** | Permanent, immutable logs of how the AI made decisions about students |

### 1.3 Maturity Model: L0 → L5 (Education Domain)

| Level | Stage | Education State |
|-------|-------|----------------|
| **L0** | Ill-Posed | No agreement on what "good teaching" means; decisions by anecdote |
| **L1** | Measurable | Standardized tests exist; baselines visible but not acted on |
| **L2** | Repeatable | SOPs for lesson plans; teacher training standardized. **Most schools are here.** |
| **L3** | Automated | AI handles 80% of personalized instruction; teachers manage exceptions and mentorship |
| **L4** | Industrialized | Schools buy "Learning Gain per Hour," not software licenses. Market re-aligns overnight. |
| **L5** | Commoditized | World-class personalized tutoring at zero marginal cost for every human on Earth |

### 1.4 Outcome-Based Procurement

The paradigm shift:
- **Old model:** Schools buy software licenses, pay per seat, measure "engagement minutes"
- **New model:** Schools buy verified Learning Gain per Hour. AI tutors that provably beat the LG/H floor are procured automatically. Those that drift or fail to teach are automatically "downshifted" (removed).

**Public dashboards create a tournament of ideas that pays the students first, not the vendors.**

### 1.5 The Industrial Intelligence Stack (Education)

Nine layers that must be built for AI education to industrialize:

| # | Layer | Education Application |
|---|-------|----------------------|
| 1 | Purpose & Payoff | Quantified learning goals (not vague mission statements) |
| 2 | Task Taxonomy | Breaking education into measurable micro-skills |
| 3 | Observability | Real-time student data streams showing progress |
| 4 | Targeting System | LG/H + Retention Floors + Guardrails (the harness) |
| 5 | Model Layer | AI tutor personalized to each learner's cognitive profile |
| 6 | Actuation | Delivering instruction via the best available interface |
| 7 | Verification & Red Teaming | Independent testing for fairness, safety, bias |
| 8 | Governance & Incentives | Payment tied to verified results (Compute Escrow) |
| 9 | Distribution | Scaling as a reliable public utility |

---

## 2. The Vision: What This AI Tutor Does

This is not a Q&A chatbot. This is a personalized, predictive agent:

- **Understands each student's cognitive profile**: language skills, interests, preferred learning style
- **Uses contextual analogies**: soccer analogies for a sports fan learning math, music theory for a musician learning fractions
- **Generates millions of bespoke explanations** and practice problems
- **Acts as a global research lab**: A/B tests teaching methods in real-time across millions of learners to discover what works best for each type of brain
- **Creates custom lesson plans, immersive experiences, and personalized exams** for a billion students simultaneously
- **Makes a world-class tutor available to every human for essentially zero cost**

The CompareGPT Education tool (from qiyuan) is the **live prototype** of this vision — letting students interact with AI-powered study modes, smart recitation, and multi-model comparison to find the best teaching approach for their brain.

---

## 3. Site Architecture

```
edu.platformai.org/
├── /                              ← Hero + Mission + Scroll narrative
│
├── /#targeting-system             ← The Targeting System explained (LG/H, Retention, Guardrails)
├── /#maturity-model               ← L0→L5 progression for education
├── /#intelligence-stack           ← The 9-layer Industrial Intelligence Stack
├── /#vision                       ← The AI Tutor vision (what it does)
├── /#how-it-works                 ← How the platform works (demo walkthrough)
├── /#live-dashboard               ← Sample LG/H public dashboard mockup
├── /#comparegpt                   ← CompareGPT Education embedded (live tool)
├── /#guardrails                   ← Safety: Abstention, Human-in-Loop, Transparency
├── /#procurement                  ← Outcome-based procurement model
├── /#join                         ← CTA: Get started / Request access
│
└── /practice                      ← Full-page CompareGPT Education experience
```

**Design choice: Single-page editorial scroll (like solveeverything.org)** with anchor navigation rather than multi-page routing. This creates the immersive, chapter-by-chapter reading experience that makes the argument compelling. A separate `/practice` page gives full-screen access to the CompareGPT tool.

---

## 4. Page Sections (Detailed)

### Section 1: Hero
- Full-viewport animated entrance
- Title: **"AI-Empowered Education for All"**
- Subtitle: *"Industrialize and personalize pedagogy to democratize access to world-class teaching."*
- Scroll indicator arrow

### Section 2: The Problem (Three Scenarios)
Three color-coded scenario blocks (solveeverything.org style):

**2024 — The Craft Era** (gray)
> A classroom of 30 students. One teacher. She knows Maria learns visually, but has no time to make a custom diagram. She knows Jamal needs the soccer analogy, but the textbook doesn't have one. The best teacher in the world still can't personalize at scale.

**2027 — The Transition** (amber)
> Maria opens her tablet. The AI tutor generates a visual explanation of photosynthesis using the anime art style she loves. Jamal gets the same concept explained through a Premier League match simulation. Both master the concept in 12 minutes — half the classroom average. The LG/H dashboard shows: +0.3 skill points/hour above baseline.

**2032 — The Industrial Era** (green)
> Education is a utility. Every child on Earth has a personalized world-class tutor. Schools no longer buy software — they buy verified Learning Gain per Hour. A student in rural Kenya receives the same quality instruction as one at an elite private school. The cost: essentially zero.

### Section 3: The Targeting System
- **LG/H explained** with animated counter visualization
- **Retention Floors** shown as a timeline (30d → 60d → 180d) with decay curve
- **Comparison table**: Old metrics vs. Targeting System metrics
- **Alpha Box**: *"For Policymakers: Every dollar of education spend should be traced to a verified LG/H outcome. If the student doesn't learn, the vendor doesn't get paid."*

### Section 4: Maturity Model (L0→L5)
- Horizontal progress bar visualization
- Each level is a clickable/scrollable card with:
  - Level name and description
  - What education looks like at this level
  - Indicator showing **"Most schools are here"** at L2
  - Arrow showing the trajectory toward L5

### Section 5: The Industrial Intelligence Stack
- Vertical 9-layer stack diagram (tower visualization)
- Each layer expands on hover/click to reveal education-specific details
- **Alpha Box**: *"For Builders: You don't need to solve all 9 layers. Pick one, make it world-class, and plug into the stack."*

### Section 6: The AI Tutor Vision
- What the AI tutor does (personalization, bespoke problems, cognitive profiling)
- Animated illustration: student interacts → AI adapts → LG/H improves
- Quote block from solveeverything.org about Diamond Age / Young Lady's Illustrated Primer

### Section 7: How It Works (Demo)
- Step-by-step walkthrough with screenshots/mockups:
  1. Student opens the platform
  2. AI assesses current knowledge (pre-test)
  3. Personalized lesson generated
  4. Smart Recitation mode (CompareGPT study feature)
  5. Progress tracked, LG/H calculated
  6. Retention floor tests at 30/60/180 days
- CTA button: **"Try It Now"** → scrolls to CompareGPT embed

### Section 8: Live Dashboard (Mockup)
- Interactive mockup of a public LG/H leaderboard
- Shows fictional schools/AI tutors ranked by LG/H scores
- Bar charts, sparklines, trend arrows
- **Alpha Box**: *"For Educators: Public dashboards create a tournament of ideas. The best teaching methods rise to the top — regardless of who invented them."*

### Section 9: CompareGPT Education (Embedded)
- Intro text: *"Experience AI-powered education. Compare AI models, use Smart Recitation, and see personalized learning in action."*
- Full-width iframe embedding the CompareGPT education tool from qiyuan
- Tabs: "Smart Recitation" | "Model Comparison" | "Study Materials"
- This is the live prototype of the Targeting System vision

### Section 10: Guardrails & Safety
- Three large cards:
  1. **Right of Abstention** — pause AI anytime
  2. **Human-in-the-Loop** — teachers decide
  3. **Parental Transparency** — see everything
- DR-AIS explanation (Decision Records for AI Systems)
- **Alpha Box**: *"For Parents: You will always see exactly what the AI taught, what it observed, and what it recommended. No black boxes."*

### Section 11: Outcome-Based Procurement
- Side-by-side comparison: "Old Model" vs "New Model"
- Compute Escrow concept explained
- How schools will buy outcomes, not licenses
- **Alpha Box**: *"For School Administrators: The first school district to adopt outcome-based AI procurement will trigger a global cascade. The market will re-align overnight."*

### Section 12: Join / CTA
- **"The future of education is measurable, personalized, and free."**
- CTA buttons: "Try CompareGPT Education" | "Read the Full Framework" (→ solveeverything.org)
- Email signup for updates
- Links: CompareGPT | SolveEverything | PlatformAI

---

## 5. Design System (solveeverything.org Method)

### 5.1 Typography

```css
/* Body — serif for intellectual gravitas */
--font-body: 'Lora', 'Georgia', serif;
--font-size-body: 19px;          /* desktop */
--font-size-body-mobile: 17px;   /* mobile */
--line-height: 1.75;
--max-width-reading: 720px;

/* Headlines & Navigation — clean sans-serif */
--font-heading: 'Inter', system-ui, sans-serif;
--font-size-h1: 3.8rem;         /* desktop hero */
--font-size-h1-mobile: 2.4rem;
--font-size-h2: 2.2rem;
--font-size-h3: 1.4rem;
--font-size-h4: 1.1rem;         /* italic */

/* Chapter numbers — decorative */
--font-size-chapter-num: 7rem;
--font-weight-chapter-num: 200;
--color-chapter-num: #e2e8f0;
```

### 5.2 Color Palette

```css
--color-bg:        #fafbfc;    /* near-white background */
--color-text:      #1e293b;    /* dark slate body text */
--color-heading:   #0f172a;    /* near-black headlines */
--color-muted:     #64748b;    /* secondary text, metadata */
--color-border:    #e2e8f0;    /* subtle borders */

/* Scenario & accent colors */
--color-past:      #94a3b8;    /* 2024 scenario — gray */
--color-transition:#f59e0b;    /* 2027 scenario — amber */
--color-future:    #10b981;    /* 2032 scenario — green */
--color-accent:    #3b82f6;    /* primary accent — blue */
--color-cta:       #2563eb;    /* CTA buttons */

/* Alpha/Callout boxes */
--color-alpha-bg:  #f8fafc;
--color-alpha-border: #334155; /* 3px left border */

/* Dashboard accents */
--color-lgh-high:  #10b981;    /* good LG/H — green */
--color-lgh-mid:   #f59e0b;    /* average LG/H — amber */
--color-lgh-low:   #ef4444;    /* poor LG/H — red */
```

### 5.3 Interactive Features

1. **Reading progress bar** — 3px gradient at top of viewport, fills as user scrolls
2. **Sticky navigation** — shows current section name, compact on scroll, full on top
3. **Scroll-triggered reveals** — sections fade in + translate up (IntersectionObserver)
4. **Glossary tooltips** — dotted underline on terms (LG/H, RoCS, DR-AIS); hover shows definition card
5. **Scenario blocks** — colored left-border boxes with year label and narrative text
6. **Alpha boxes** — callout cards labeled "For Policymakers" / "For Builders" / "For Educators" / "For Parents"
7. **Animated counters** — LG/H score ticks up when scrolled into view
8. **Interactive maturity bar** — click L0-L5 levels to expand details
9. **Dashboard mockup** — sortable leaderboard with animated bar charts
10. **Back-to-top button** — appears after 400px scroll
11. **Mobile drawer nav** — hamburger → slide-in section list
12. **Anchor navigation** — smooth scroll to sections via sticky nav links

---

## 6. CompareGPT Integration

### 6.1 Strategy

Build the qiyuan Vue 3 frontend for production and serve it as static files under `/compare-app/` via Nginx. Embed it in the main edu site via `<iframe>` in two places:
1. Section 9 of the main page (inline preview)
2. `/practice` page (full-screen experience)

### 6.2 qiyuan Build Configuration

```bash
# /home/spiritai/qiyuan/frontend/.env.edu
VITE_BASE_PATH=/compare-app/
VITE_OUT_DIR=dist-edu
VITE_PORT=8080
VITE_IS_SHOW_STUDY=true
VITE_APP_TITLE=CompareGPT Education
VITE_API_BASE_PATH=http://localhost:9102
VITE_API_BASE_QA_PATH=http://localhost:9103
```

Build: `cd /home/spiritai/qiyuan/frontend && pnpm vite build --mode edu`
Output: `/home/spiritai/qiyuan/frontend/dist-edu/`

### 6.3 Embedding

```html
<!-- Main page Section 9: inline preview (70vh) -->
<iframe
  src="/compare-app/#/chat"
  class="w-full rounded-xl shadow-lg"
  style="height: 70vh; border: none;"
  allow="clipboard-write"
  loading="lazy"
  title="CompareGPT Education"
></iframe>

<!-- /practice page: full screen -->
<iframe
  src="/compare-app/#/chat?studyId=1"
  class="w-full h-screen"
  style="border: none;"
  allow="clipboard-write"
  title="CompareGPT Education - Full Experience"
></iframe>
```

### 6.4 qiyuan Features Exposed

| Feature | Route | Description |
|---------|-------|-------------|
| Smart Recitation | `/chat` (study mode) | AI-supervised quizzing and Q&A on uploaded study materials |
| Model Comparison | `/chat` (custom mode) | Side-by-side AI model comparison |
| Study Materials | `/chat` (study selector) | Browse, select, and download study content |
| Progress Tracking | API: `/api/study/progress` | Save and retrieve study progress per session |

---

## 7. Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 14** (App Router) | SSR + static sections, React ecosystem |
| Styling | **Tailwind CSS v3** + custom CSS vars | Utility-first with editorial overrides |
| Fonts | **Google Fonts**: Lora (serif) + Inter (sans) | Matches solveeverything.org pairing |
| Animations | **Vanilla IntersectionObserver** + CSS transitions | Zero dependency, performant scroll reveals |
| Charts | **Lightweight custom SVG** | Dashboard mockup bar charts, no chart library needed |
| State | **localStorage** | Reading progress tracking |
| CompareGPT | **qiyuan** (Vue 3 + Vite) | Existing platform, iframe embedded |
| Server | **Nginx** | Reverse proxy (Next.js) + static files (qiyuan dist) |
| Process | **PM2** | Keeps Next.js server alive |
| SSL | **Certbot** (Let's Encrypt) | Free HTTPS |

---

## 8. File Structure

```
/home/spiritai/edu/edu_comp/
├── plan.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← Root layout (fonts, nav, footer)
│   │   ├── page.tsx                    ← Main page (all 12 sections)
│   │   ├── globals.css                 ← Tailwind + custom editorial styles
│   │   └── practice/
│   │       └── page.tsx                ← Full-screen CompareGPT embed
│   ├── components/
│   │   ├── layout/
│   │   │   ├── StickyNav.tsx           ← Sticky nav with section links + progress bar
│   │   │   ├── Footer.tsx
│   │   │   └── MobileDrawer.tsx        ← Mobile hamburger menu
│   │   ├── sections/
│   │   │   ├── Hero.tsx                ← S1: Full-viewport hero
│   │   │   ├── ThreeScenarios.tsx      ← S2: 2024/2027/2032 narrative blocks
│   │   │   ├── TargetingSystem.tsx     ← S3: LG/H + Retention + metrics
│   │   │   ├── MaturityModel.tsx       ← S4: L0→L5 interactive bar
│   │   │   ├── IntelligenceStack.tsx   ← S5: 9-layer vertical tower
│   │   │   ├── AITutorVision.tsx       ← S6: What the tutor does
│   │   │   ├── HowItWorks.tsx          ← S7: Step-by-step demo walkthrough
│   │   │   ├── LiveDashboard.tsx       ← S8: LG/H leaderboard mockup
│   │   │   ├── CompareGPTSection.tsx   ← S9: iframe embed
│   │   │   ├── Guardrails.tsx          ← S10: Safety cards
│   │   │   ├── Procurement.tsx         ← S11: Old vs New model
│   │   │   └── JoinCTA.tsx             ← S12: Final CTA
│   │   └── editorial/
│   │       ├── ScrollReveal.tsx        ← IntersectionObserver wrapper
│   │       ├── AlphaBox.tsx            ← "For Policymakers" callout
│   │       ├── ScenarioBlock.tsx       ← Color-coded narrative box
│   │       ├── GlossaryTerm.tsx        ← Hover tooltip for terms
│   │       ├── AnimatedCounter.tsx     ← Number ticks up on scroll
│   │       ├── ReadingProgress.tsx     ← Top progress bar
│   │       └── BackToTop.tsx           ← Scroll-to-top button
│   └── lib/
│       └── glossary.ts                 ← Term definitions (LG/H, RoCS, DR-AIS, etc.)
├── nginx/
│   └── edu.platformai.org.conf
└── scripts/
    ├── setup.sh
    └── deploy.sh
```

---

## 9. Nginx Configuration

```nginx
server {
    listen 80;
    server_name edu.platformai.org;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name edu.platformai.org;

    ssl_certificate     /etc/letsencrypt/live/edu.platformai.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/edu.platformai.org/privkey.pem;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;

    # Main edu site (Next.js on port 3000)
    location / {
        proxy_pass         http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # CompareGPT static build
    location /compare-app/ {
        alias /home/spiritai/qiyuan/frontend/dist-edu/;
        try_files $uri $uri/ /compare-app/index.html;
        add_header X-Frame-Options "SAMEORIGIN";
        add_header Content-Security-Policy "frame-ancestors 'self' edu.platformai.org";
    }

    # Proxy CompareGPT API calls
    location /compare-app/api/ {
        proxy_pass http://localhost:9102/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    location /compare-app/api/study/ {
        proxy_pass http://localhost:9103/study/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

---

## 10. Deployment Steps

### Phase 1: Infrastructure
1. Verify Nginx is installed on 34.63.169.185
2. Verify Node.js 18, pnpm, PM2 are available
3. Obtain SSL: `certbot certonly --nginx -d edu.platformai.org`

### Phase 2: Build CompareGPT
4. Create `.env.edu` in `/home/spiritai/qiyuan/frontend/`
5. Build: `pnpm vite build --mode edu`
6. Verify `dist-edu/` output

### Phase 3: Build Edu Site
7. Initialize Next.js project in `/home/spiritai/edu/edu_comp/`
8. Install dependencies: `pnpm install`
9. Build all 12 sections + editorial components + practice page
10. Build: `pnpm build`
11. Start: `pm2 start npm --name edu-platform -- start`

### Phase 4: Deploy
12. Copy Nginx config → `/etc/nginx/sites-available/`
13. Enable site, test, reload Nginx
14. Verify all sections render at https://edu.platformai.org
15. Verify CompareGPT iframe loads at /#comparegpt and /practice

---

## 11. Content: Glossary Terms (Tooltip Definitions)

| Term | Definition |
|------|-----------|
| **LG/H** | Learning Gain per Hour — the measurable increase in skill for every hour spent studying |
| **Retention Floor** | The minimum knowledge retention level required at 30, 60, and 180 days after instruction |
| **RoCS** | Return on Cognitive Spend — value created per million AI tokens purchased |
| **DR-AIS** | Decision Records for AI Systems — permanent, immutable logs of how AI made decisions |
| **Targeting System** | Outcome-based measurement infrastructure that optimizes for real-world value, not abstract metrics |
| **Compute Escrow** | Funds locked until verified benchmarks are cleared; payment tied to results |
| **Shaped Charge** | Focusing raw AI intelligence through targeted, measurable missions |
| **Right of Abstention** | A student's right to pause or opt out of AI instruction at any time |
| **A/B Testing at Scale** | Real-time testing of different teaching methods across millions of learners |

---

## 12. Open Questions for Review

1. **CompareGPT backend**: Are the qiyuan backend services (ports 9102, 9103) already running on this server? If not, the iframe embed will show UI but API calls will fail.

2. **Content depth**: Should I generate full narrative content for all 12 sections during implementation (AI-generated long-form text following the solveeverything.org writing style), or keep it to structural placeholder text?

3. **Email signup (#join)**: Should the CTA section include a real email collection form (requires backend endpoint), or just link to an external form?

4. **Dashboard data**: The LG/H leaderboard in Section 8 — should this be a static mockup with fictional data, or connect to real data from the CompareGPT study API?

5. **CompareGPT API routing**: Should the iframe's API calls go to `comparegpt.io` (live production backend) or to local services on 34.63.169.185?
