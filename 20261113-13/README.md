# Time Folio

A private time-billing preparation utility for independent studios: paste/import rough time notes and contract categories → real local semantic classification → mandatory human review → transparent rounded-time worksheet → JSON/CSV/Markdown export. Not an invoice system; no sending, payments or account connections.

## Workflow and formats

Use either synthetic example, or import a source JSON object with project, increment (1–60 minutes), mode (`day` or `entry`), policies and records. Each policy has id, label, description, billable (boolean), rate (integer cents/hour). Each record has id, note, minutes (whole minutes), date (YYYY-MM-DD), owner (reviewer). Edit contract rules in the source editor before running. One contract/currency per worksheet.

Load AI explicitly. Inspect candidate descriptions and cosine scores; correct categories, dates and minutes, add multiline review notes and approve or hold every row. Apply only after all decisions. Review edits invalidate exports; Undo restores the previous edit, requiring reapplication. Held rows remain in the audit but never produce charges. Approved nonbillable rows stay visible in totals. No inferred durations or automatic billability decisions.

Downloads and clipboard reflect only the current applied review. JSON includes originals, evidence, reviews, draft groups and per-entry baseline. JSON reimport restores originals only, requiring new inference/approval. CSV contains every source row with reviewed minutes; group totals repeat on each member and MUST NOT be summed. Text starting with spreadsheet formula triggers is apostrophe-escaped; numeric fields remain numeric. Markdown includes all original/reviewed notes and draft groups.

## Actual AI, license and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web (MIT), WASM CPU. Normalized mean-pooled 384-dimensional embeddings and cosine ranking compare work notes with supplied category definitions. This meaning-based link is the AI step, not a keyword table. Imported instructions are embedded as data, never executed. Unrelated text also receives a nearest category: review/hold is essential. Cosine scores are not confidence and AI cannot interpret contracts reliably.

First use needs internet: about 23 MB of model/tokenizer files from Hugging Face/CDN plus 27 MB same-origin WASM. App worker/runtime code is bundled locally. WASM is byte-identically shared from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older collection asset. See asset-validation.json for hashes. Progress, cancellation, retry, runtime/network errors and 180-second timeout are visible. No fabricated output fallback.

WebAssembly SIMD and module workers required; WebGPU is NOT required. Several hundred MB free RAM recommended. Desktop Chrome with GPU disabled tested; physical phones and other browsers not tested. Model/runtime/worker caching supports fresh-worker inference inside an already-open warmed page, including with all network blocked. Offline reload/startup is NOT promised. Browser eviction or disabled caches requires internet again. No service worker or guaranteed persistent storage.

## Privacy and limits

Content stays in browser memory, never uploaded or automatically saved. Model file downloads are not content uploads. No API keys, providers, telemetry or external inference option. Explicit downloads/copy are user-controlled. Fixtures are synthetic.

2–8 categories, 1–40 time records; embedded descriptions/notes ≤300 characters, 4-text inference batches, 256 tokens/text. Input ≤40,000 characters, source/audit file ≤300 KB; JSON only. Minutes 1–1440 per entry, rates 0–1,000,000 cents/hour, real dates from 2000–2100. Finite normalized vector dimensions/count are checked. Run IDs and worker termination guard cancellation/stale messages and asynchronous imports. Review schema, source IDs/order and all numeric limits are validated before application.

## Deterministic billing lens

Only approved billable entries enter charge groups. Entry mode rounds each entry UP to the supplied increment. Day mode groups by date AND category before rounding UP, then charges each group at its category rate. Group charge = rounded minutes × cents/hour ÷60, rounded half up to integer cents. Single contract only: grouping across different clients is unsupported. Do not use daily grouping unless allowed by the contract. Nonbillable categories never produce charges, regardless of supplied rate.

The baseline always uses per-entry rounding with identical reviewed inputs/rates. Displayed deltas are contract-rule calculations, not measured time/accuracy improvements or savings. Actual approved minutes reconcile exactly to billable plus nonbillable minutes. Held records are separately conserved. No taxes, timezones, overtime, minimum fees, discounts, clock overlap detection or legal interpretation. No checking that supplied durations are truthful.

## Build and verification

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite; base `/daily-app2/20261113-13/`. Required individual deploy scripts exist but publish ONLY through the collection root's combined `predeploy` / `deploy` workflow. See VALIDATION.md and machine-readable reports for observed checks, including production-bundle real CPU inference, artifacts, offline fresh-worker inference, faults and responsive layouts. Simple fixtures matched 10/10 categories; a harder paraphrase probe matched 3/4 and misclassified a checkout repair as advisory. Small fixture results are not general accuracy claims. Correct every proposal against the contract.
