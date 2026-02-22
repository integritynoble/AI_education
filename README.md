# AI-Empowered Education for All

**Live at:** [edu.platformai.org](https://edu.platformai.org)

Industrialize and personalize pedagogy to democratize access to world-class teaching. Built on the [solveeverything.org](https://solveeverything.org) methodology with integrated [CompareGPT Education](https://comparegpt.io/education).

---

## The Targeting System

A field allows for industrial-scale progress only when we can state, with mathematical precision: *"This number is what success looks like."*

A Targeting System does not care about abstract statistics like "accuracy on a dataset." It optimizes for real-world value. For education, it measures one thing above all: **did the student actually learn faster?**

### Primary Metric: Learning Gain per Hour (LG/H)

The measurable increase in skill for every hour spent studying. Not engagement minutes. Not click-through rates. Actual learning.

| Metric | Definition | Measurement Method |
|--------|-----------|-------------------|
| **LG/H** | Measurable increase in skill per hour studied | Pre-test -> study session -> post-test delta, normalized by time |
| **Retention Floor (30d)** | Student retains >= 80% of skill after 30 days | Automated re-assessment at day 30 |
| **Retention Floor (60d)** | Student retains >= 70% of skill after 60 days | Automated re-assessment at day 60 |
| **Retention Floor (180d)** | Student retains >= 60% of skill after 180 days | Automated re-assessment at day 180 |
| **RoCS** | Return on Cognitive Spend -- value per million AI tokens | LG/H achieved per dollar of AI compute consumed |

### Guardrails

Power without accountability is dangerous. Every system needs brakes.

| Guardrail | Description |
|-----------|-------------|
| **Right of Abstention** | The student can pause or opt out of AI instruction at any time |
| **Human-in-the-Loop Override** | Teachers remain final decision-makers for placement, advancement, and intervention |
| **Parental Transparency** | Real-time dashboards showing what the AI observed, taught, and recommended for each student |
| **Decision Records (DR-AIS)** | Permanent, immutable logs of how the AI made decisions about students |

### Maturity Model: L0 -> L5

Education's path from craft to commodity.

| Level | Stage | Education State |
|-------|-------|----------------|
| **L0** | Ill-Posed | No agreement on what "good teaching" means; decisions by anecdote |
| **L1** | Measurable | Standardized tests exist; baselines visible but not acted on |
| **L2** | Repeatable | SOPs for lesson plans; teacher training standardized. **Most schools are here.** |
| **L3** | Automated | AI handles 80% of personalized instruction; teachers manage exceptions and mentorship |
| **L4** | Industrialized | Schools buy "Learning Gain per Hour," not software licenses. Market re-aligns overnight. |
| **L5** | Commoditized | World-class personalized tutoring at zero marginal cost for every human on Earth |

### The Industrial Intelligence Stack

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

### Outcome-Based Procurement

The paradigm shift:

- **Old model:** Schools buy software licenses, pay per seat, measure "engagement minutes"
- **New model:** Schools buy verified Learning Gain per Hour. AI tutors that provably beat the LG/H floor are procured automatically. Those that drift or fail to teach are automatically "downshifted" (removed).

Public dashboards create a tournament of ideas that pays the students first, not the vendors.

---

## The Vision

This is not a Q&A chatbot. This is a personalized, predictive agent:

- **Understands each student's cognitive profile**: language skills, interests, preferred learning style
- **Uses contextual analogies**: soccer analogies for a sports fan learning math, music theory for a musician learning fractions
- **Generates millions of bespoke explanations** and practice problems
- **Acts as a global research lab**: A/B tests teaching methods in real-time across millions of learners
- **Creates custom lesson plans, immersive experiences, and personalized exams** for a billion students simultaneously
- **Makes a world-class tutor available to every human for essentially zero cost**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 + custom CSS vars |
| Fonts | Google Fonts: Lora (serif) + Inter (sans) |
| Backend | FastAPI + SQLite |
| Auth | SSO via comparegpt.io + JWT |
| CompareGPT | Embedded via iframe |
| Server | Nginx reverse proxy |
| Process | PM2 |
| SSL | Let's Encrypt (Certbot) |

## Site Architecture

```
edu.platformai.org/
|-- /                         Main page (editorial scroll with 12 sections)
|-- /#targeting-system        The Targeting System (LG/H, Retention, RoCS, Guardrails)
|-- /#maturity-model          L0 -> L5 progression for education
|-- /#intelligence-stack      The 9-layer Industrial Intelligence Stack
|-- /#vision                  The AI Tutor vision
|-- /#how-it-works            Platform walkthrough
|-- /#live-dashboard          LG/H public dashboard mockup
|-- /#comparegpt              CompareGPT Education embedded
|-- /#guardrails              Safety: Abstention, Human-in-Loop, Transparency
|-- /#procurement             Outcome-based procurement model
|-- /#join                    CTA
|-- /practice                 Full-page CompareGPT Education experience
```

## Development

```bash
npm install
npm run dev        # Development server on port 3200
npm run build      # Production build
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --port 3201
```
