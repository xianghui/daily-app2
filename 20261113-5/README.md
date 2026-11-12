# Renewal Beacon

Unattended daily utility, 20261113-5. A local-AI renewal notice worksheet for studio/community contract administrators. Import small synthetic or user-owned JSON clause batches, set an as-of date and preparation lead, explicitly load AI, inspect each clause and proposal, correct terms, approve or hold, apply, then copy/download the reviewed worksheet. No notices are sent or subscriptions changed.

## AI versus deterministic work

Real `Xenova/all-MiniLM-L6-v2` (Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2) runs q8 ONNX via `@huggingface/transformers` 4.3.2 and ONNX Runtime Web WASM CPU. Normalized mean-pooled 384-dimensional vectors rank each excerpt against automatic-renewal, fixed-expiry and affirmative-opt-in descriptions. Similarity is not calibrated confidence, entailment or legal understanding. Mandatory review prevents unattended application. The tiny fixtures produced **6/8** intended classifications: two Studio clauses were incorrectly mapped to automatic renewal. Unknown text is still assigned a nearest category; hold it.

After approval, all date arithmetic and exports are deterministic: automatic notice deadline = supplied next term end minus supplied calendar-day notice; preparation reminder = deadline minus preparation lead. Fixed/opt-in term ends are planning placeholders, not legally determined acceptance deadlines. Past dates remain past. Results count earlier notice tasks and notices already past while term end is future versus a term-end-only baseline. These are computed scenario counts, not measured savings or model accuracy claims.

## Requirements and privacy

First explicit run needs internet and about **50 MB**: ~23 MB model/tokenizer from Hugging Face/CDN plus ~27 MB same-origin runtime. Model may evolve at its upstream main revision. App/worker and factory are locally bundled; the byte-identical WASM is shared at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve this immutable asset. No WebGPU or key needed. Module workers and WebAssembly SIMD plus several hundred MB free RAM recommended. Headless desktop Chrome CPU tested; physical phones, low-memory devices and other browsers unverified.

User content remains in page/worker memory; default path only downloads static files. No provider credentials or remote-inference option. Imported instructions are embedded as data, never executed. Cache API stores worker, factory, WASM and model assets. Online → worker termination → fully offline fresh-worker inference passed in an **already-open warmed page**. Offline startup/reload is not claimed. Cache eviction requires downloads again. No automatic content persistence; exported artifacts contain your clauses.

## Input and review

Source JSON: `{asOf:'YYYY-MM-DD',leadDays:14,records:[{id,title,note,end,noticeDays,owner}]}` (use double quotes in actual JSON). Two editable synthetic examples are included. Import `.json` source or a prior JSON audit; audit imports restore **originals only**, forcing fresh AI and approval. Limits: source 40 KB; audit 300 KB; 1–40 unique-ID records; note 300 chars, title/owner 80, ID 40; valid dates 2000–2099; notice 0–730 days; lead 0–365 days. AI batches four texts, truncation at 256 tokens/text. Timeout 180 seconds. Cancellation terminates workers; run IDs guard delayed file reads/downloads/messages. Review notes and owners support line breaks. Every edit invalidates export snapshots; undo restores previous review. Holds retain originals and review data, but create no action.

## Output

JSON is the complete lossless audit: originals, reviewed terms/evidence, all decisions and computed actions. CSV preserves one row per original including holds; formula-like leading characters get an apostrophe for spreadsheet safety (JSON remains exact). Markdown is the current reviewed preparation checklist. ICS is valid RFC5545 with one all-day **preparation-date** event per approved action, deadline/owner in the description; past events remain past. It does not send notices or sync accounts. Reimporting JSON starts a fresh review rather than trusting old approvals.

## Limits

Not legal advice, contract interpretation or a certified deadline service. Full-clause context, legal enforceability, delivery/receipt rules, holidays, business days, jurisdiction, recurring renewals and actual opt-in deadlines require external verification. AI does not extract amounts/dates or determine applicability. Mixed clauses, negation and unfamiliar domains can misclassify. Date calculations outside 2000–2099 are blocked. No hard-coded successful AI outputs or heuristic fallback.

## Build and verification

`npm install`; `npm run predeploy`; Vite base `/daily-app2/20261113-5/`. Required per-app scripts retained, but publish only through repository root combined workflow. Run `node core-test.mjs`, serve production with `python3 serve.py`, then `node browser-test.cjs`, defensive/stale/import/model-cancel tests, `python3 artifact-test.py`, `node calendar-test.mjs`. Test scripts require local Playwright/Chrome installed in the automation workspace. See VALIDATION.md and JSON reports for observed outcomes, not universal claims.

## Publication

Published and real-inference verified at https://xianghui.github.io/daily-app2/20261113-5/ . Public asset hashes, full workflow, warmed-page offline inference, emulated phone interactions and downloaded calendar/CSV artifacts passed. See VALIDATION.md and publication-status.json.
