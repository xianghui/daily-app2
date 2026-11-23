# Epoch Ledger

A local-first date-system reconciliation workbench for data stewards migrating mixed spreadsheet exports and telemetry extracts. Source descriptions often survive while workbook date-system metadata does not: a plausible-looking numeric column can resolve to entirely different dates.

## Workflow

1. Load either synthetic example or import source JSON. Edit supported profile descriptions to match known source systems and provide 1–24 records with unique IDs, source context and numeric string values.
2. Explicitly click **Load AI & reconcile**. Real local MiniLM embeds context/profile descriptions and ranks cosine similarity. The numeric value does not enter AI and does not determine the semantic match. Inspect all profile scores; similarity is not confidence.
3. Review each suggested date system and numeric value. Correct mismatches or hold unknown sources. Approval confirms the explicit UTC assumption. Notes support multiline text. Edits invalidate exports; undo restores the previous edit without changing originals.
4. Apply the reviewed scenario. Deterministic arithmetic converts valid approved records; blocked/held sources remain in the complete audit. Compare against all-Excel-1900 interpretation.
5. Download complete JSON/CSV/Markdown, ready-only release CSV, or copy Markdown. Reimport audit JSON to restore originals, then rerun inference and review. Nothing is uploaded, sent, or written back to a workbook.

## Real AI, runtime and licenses

- `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Mean-pooled normalized 384-dimensional text embeddings.
- Transformers.js 4.3.2, Apache-2.0; ONNX Runtime Web, MIT.
- Reuses the immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, its `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these earlier apps/paths. Runtime dependency bytes are audited with the production bundle; no backend is required.
- First run downloads approximately 23 MB model/tokenizer files from Hugging Face/CDN plus 27 MB same-origin CPU runtime. Internet, HTTPS/localhost, module workers, WebAssembly SIMD and several hundred MB RAM required. WebGPU not required. Current desktop Chromium tested; other engines and physical phones untested.
- Worker/runtime Cache API plus Transformers model caching support a new worker in an **already-open warmed page** after a complete online run. This exact scope is browser-tested offline. Cold offline navigation/reload is not promised; browser cache eviction requires internet.
- Text chunks of four; at most 28 embeddings per run, tokenizer model context 512. Descriptions/contexts ≤200 characters. Finite normalized vectors and dimensions/counts validated before ranking. 180-second timeout; cancellation terminates worker and invalidates asynchronous fetch/result identities. No fake fallback.

## Privacy and authority

No API keys, remote inference, analytics, accounts, uploads or external actions. Requests are static GET downloads; contexts are passed only to a local worker. Imported instruction-like text is inert model data, never executable or tool authority. All fixtures are synthetic. CSV formula-leading text is prefixed with an apostrophe, including multiline fields; JSON preserves exact strings. The app does not render imported HTML.

## Formats and constraints

Source JSON: `{ "profiles": [{"id":"excel1900","description":"..."}, ...], "records": [{"id":"row-1","context":"...","value":"45292"}, ...] }`.

Use 2–4 profiles with distinct supported IDs: `excel1900`, `excel1904`, `unixSeconds`, `unixMillis`; 1–24 unique records. Profile IDs determine arithmetic, descriptions supply retrieval context. Source ≤24,000 characters, import files ≤1 MB; larger audit envelopes accepted only when their originals satisfy the stricter source limits. IDs ≤80 characters, contexts/descriptions 1–200 characters. Numeric strings ≤24 characters, at most three decimal places; Unix milliseconds must be integers. Reviewer notes ≤2,000 characters.

Spreadsheet days are nonnegative. Excel 1900 day 1 is 1900-01-01; day 59 is 1900-02-28; **every value on day 60 is blocked**, not silently repaired; day 61 is 1900-03-01. Excel 1904 day 0 is 1904-01-01. Fractions represent days and round to nearest millisecond. Output dates restricted to 1900–2100 UTC. Excel serials have no timezone: export assumes UTC explicitly. This is not timezone/DST inference, historical calendar conversion or source-metadata discovery.

JSON contains original input, current review layer, per-record conversion/error/baseline and computed counts. Complete CSV includes context, original/reviewed numeric strings, system, decision, status, UTC ISO date, blocker reason and review note. Release CSV contains ready/approved records only; all others remain in complete audits. Markdown is a worksheet, not an import format. ISO dates use explicit `Z` and milliseconds.

## Comparison and limitations

Baseline treats each approved reviewed value as Excel 1900; `different` counts ready results differing from that baseline, including baseline range failures. This demonstrates interpretation differences, not general accuracy or measured productivity improvement. Held and blocked records do not receive fabricated dates. Even unrelated context gets a nearest profile: mandatory review is essential. Negation and ambiguous notes are known MiniLM limitations; source metadata is the authoritative reference. No automatic release, payroll, compliance or deadline assurance.

## Build / validate / publish

React + Vite, base `/daily-app2/20261123-16/`; `npm run predeploy` builds. Per-app `deploy` remains required but **do not invoke it**: publication uses the repository root combined workflow. See `VALIDATION.md` for observed results and limitations. Core, real-browser, independent artifact, failure-injection, gallery, runtime byte audit and affected legacy regression scripts are included. Browser tests use local installed Playwright/Chrome.

The existing deploy-only byte-identical geometry reuse rule extends to `20261029-25` → `20261028-24`, preserving the source builds and compatibility URLs. This avoids raising the existing conservative 1 GB guard; the affected old app's real worker, image/STL import, export and design restoration are regression-tested.
