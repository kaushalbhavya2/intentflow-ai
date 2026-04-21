# IntentFlow
### AI-Powered Keyword Clustering & Intent Mapping Tool
*by Bhavya Kaushal*

> Turn raw keyword lists into structured content strategy — automatically clustered, intent-labelled, and ready to act on.

---

## What It Does

IntentFlow takes a messy list of keywords and uses Google's Gemini AI to:

- **Cluster** them into logical thematic groups
- **Label** each cluster by funnel stage — TOFU, MOFU, or BOFU
- **Generate** a content angle, suggested CTA, and recommended channels per cluster
- **Produce** a full strategic recommendation for each cluster
- **Export** everything to CSV or copy as JSON

No spreadsheets. No manual grouping. Paste in → structured strategy out.

---

## Live Demo

Host on GitHub Pages by uploading `index.html` to any repo with Pages enabled — no build step, no dependencies, no server required.

**To try it immediately:** open the file in any browser, click "Load sample keywords", add your free Google AI Studio key, and click Analyse.

---

## Getting Started

### 1. Get a Free Google AI Studio API Key

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **Create API key**
4. Copy the key — it will start with `AIzaSy...`

The free tier is generous enough for portfolio demos and regular personal use. No credit card required.

> **Security note:** Your API key is entered directly in the browser and is never stored, logged, or sent anywhere except Google's API endpoint. It lives only in your browser session. Never paste your key into a chat, email, or public forum.

### 2. Run the App

**Option A — GitHub Pages (recommended for portfolio)**
1. Create a new GitHub repository (e.g. `intentflow`)
2. Upload `index.html` to the root of the repo
3. Upload `README.md` to the root of the repo
4. Go to **Settings → Pages → Source: main branch → Save**
5. Your tool will be live at `https://yourusername.github.io/intentflow` within 60 seconds

**Option B — Run locally**
1. Download `index.html`
2. Double-click to open in Chrome, Firefox, or Safari
3. No install, no server, no terminal needed

---

## How to Use

### Paste Mode
Enter keywords in the text area — one per line. These can be raw exports from:
- Ahrefs, SEMrush, or Moz
- Google Search Console
- Google Keyword Planner
- Any keyword research tool

### CSV Upload Mode
Switch to the **CSV Upload** tab, then drop or browse to a `.csv` file. The tool reads the first column automatically and skips the header row if detected.

### Funnel Stage Filters
Use the **TOFU / MOFU / BOFU** chips to control which funnel stages Gemini clusters into. Useful when building content for a specific stage.

### Reading the Output
After analysis you get:

- An **intent distribution chart** showing keyword spread across funnel stages
- **Cluster cards**, each containing:
  - Cluster name and intent badge
  - All grouped keywords
  - Content angle
  - Suggested CTA
  - Recommended channels
  - Full strategic recommendation
- **Export to CSV** — one row per cluster, all fields included
- **Copy JSON** — raw structured output for use in automations or other tools

---

## Keyword Volume Guidelines

| Batch Size | Notes |
|---|---|
| 1–50 | Instant results, clean clustering |
| 50–150 | Recommended sweet spot |
| 150–250 | Works well, may take 10–15 seconds |
| 250+ | Split into batches for best quality |

---

## Intent Definitions

| Stage | Signals | Examples |
|---|---|---|
| **TOFU** — Top of Funnel | Informational, awareness, "what is", "how to" | *"what is marketing automation"*, *"email segmentation guide"* |
| **MOFU** — Middle of Funnel | Consideration, comparison, "best", "vs" | *"hubspot vs salesforce"*, *"best crm for small business"* |
| **BOFU** — Bottom of Funnel | Transactional, pricing, demo, buy, trial | *"hubspot pricing"*, *"request a crm demo"*, *"free trial marketing software"* |

---

## Tech Stack

| Layer | Detail |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript — zero dependencies |
| AI Engine | Google Gemini (`gemini-2.0-flash`) via REST API |
| Fonts | Syne, DM Mono, Instrument Serif via Google Fonts |
| Hosting | Any static host — GitHub Pages, Netlify, Vercel |

No npm. No build step. No framework. One file.

---

## Portfolio Context

This tool was built to demonstrate applied AI thinking in a marketing strategy context.

**What it shows:**
- **AI and automation thinking** — wrapping a real language model API into a usable product workflow
- **Marketing strategy application** — TOFU/MOFU/BOFU intent mapping, content angle generation, channel recommendations
- **Analytical structuring** — converting unstructured keyword lists into organised, actionable outputs
- **Product mindset** — a tool someone would actually use, not just a screenshot

**Resume framing:**
> "Built an AI-assisted keyword clustering and intent mapping tool that automates search segmentation and converts raw keyword lists into structured content strategy outputs, including funnel-stage classification, content angles, CTA recommendations, and channel guidance."

---

## Customisation

Everything lives in one HTML file — edit it directly.

**To change the AI model:** Find `gemini-2.0-flash` in the script and replace with any model from [Google AI Studio](https://aistudio.google.com).

**To change the prompt logic:** Find the `prompt` variable inside `runAnalysis()` and edit the instructions, intent definitions, or output structure.

**To update branding:** Edit the header section and the CSS variables at the top of the `<style>` block.

---

## Limitations

- Requires a Google AI Studio API key (free tier, no credit card needed)
- Max 250 keywords per run — split larger lists into batches
- No persistent storage — results clear on page refresh, so export to CSV to save your work
- Clustering quality depends on keyword clarity — very short or ambiguous terms may group unexpectedly

---

## License

MIT — free to use, adapt, and share.

---

*IntentFlow — built by Bhavya Kaushal*
