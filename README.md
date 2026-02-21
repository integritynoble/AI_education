# AI-Empowered Education for All

**edu.platformai.org** — Industrialize and personalize pedagogy to democratize access to world-class teaching.

## The Targeting System

This platform implements the [solveeverything.org](https://solveeverything.org/) Targeting System methodology for education. A Targeting System doesn't care about abstract statistics like "accuracy on a dataset." It optimizes for real-world value:

| Metric | What It Measures |
|--------|-----------------|
| **Learning Gain per Hour (LG/H)** | Measurable increase in skill for every hour spent studying |
| **Retention Floors** | Knowledge retention at 30, 60, and 180 days after instruction |
| **RoCS** | Return on Cognitive Spend — value created per million AI tokens |

### Guardrails

- **Right of Abstention** — students can pause AI instruction at any time
- **Human-in-the-Loop** — teachers remain final decision-makers
- **Parental Transparency** — real-time dashboards showing what the AI taught and observed
- **DR-AIS** — permanent, immutable decision records for AI systems

## The Vision

This is not a Q&A chatbot. It is a personalized, predictive AI tutor that:

- Understands each student's cognitive profile, interests, and learning style
- Generates millions of bespoke explanations and practice problems
- A/B tests teaching methods in real-time across millions of learners
- Creates custom lesson plans and personalized exams at scale
- Makes world-class tutoring available to every human for essentially zero cost

## Maturity Model (L0 → L5)

| Level | Stage | Education State |
|-------|-------|----------------|
| L0 | Ill-Posed | No agreement on what "good teaching" means |
| L1 | Measurable | Standardized tests exist; baselines visible |
| L2 | Repeatable | Lesson plans standardized. **Most schools are here.** |
| L3 | Automated | AI handles 80% of personalized instruction |
| L4 | Industrialized | Schools buy LG/H, not software licenses |
| L5 | Commoditized | World-class tutoring at zero marginal cost for all |

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Design**: solveeverything.org editorial style (Lora + Inter fonts, scroll animations, reading progress)
- **AI Tools**: [CompareGPT Education](https://comparegpt.io/education) embedded via iframe
- **Server**: Nginx + PM2 + Certbot SSL
- **Domain**: edu.platformai.org

## Site Structure

Single-page editorial scroll with 12 sections:

1. Hero
2. Three Scenarios (2024 / 2027 / 2032)
3. The Targeting System (LG/H, Retention Floors)
4. Maturity Model (L0 → L5)
5. Industrial Intelligence Stack (9 layers)
6. AI Tutor Vision
7. How It Works (demo walkthrough)
8. Live LG/H Dashboard (mockup)
9. CompareGPT Education (embedded live tool)
10. Guardrails & Safety
11. Outcome-Based Procurement
12. Join / CTA

Plus a full-screen `/practice` page for the CompareGPT experience.

## Getting Started

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Production build
pnpm build
pnpm start
```

## Deployment

See [plan.md](./plan.md) for full deployment steps including Nginx configuration, CompareGPT integration, and SSL setup.

## Links

- **Live Site**: https://edu.platformai.org
- **Framework**: https://solveeverything.org
- **AI Tools**: https://comparegpt.io/education
- **Platform**: https://platformai.org
