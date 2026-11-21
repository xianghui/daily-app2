# Observed validation — Cloze Orchard

## Local production and combined deployment bundle

- `npm run predeploy`: passes; React + Vite production base `/daily-app2/20261121-17/`. Required per-app scripts/dependency retained. `npm run lint`: no app errors (test-only unused parameters cleaned afterward).
- Real **BERT q8 WASM CPU** inference, desktop Chrome headless with GPU disabled. Science notebook: 8/8 expected exact spans; Newsroom notebook: 6/6. Reviewed cards match each source answer. These are tiny synthetic fixtures, not a general accuracy claim.
- Repeated-name input: 4 kept neural spans become 3 distinct notes, one duplicate avoided vs one-note-per-kept-span; both Sarah occurrences masked on one card. Zero-entity passage yields no fabricated candidates and survives review/audit.
- Maximum 12-passage batch: 48 neural candidates, 48 reviewed cards, all 12 source records retained; audit imports originals and renews reviews. All inference chunks actually execute.
- Budget overflow blocks export instead of dropping cards. Every candidate requires keep/reject and every passage requires review. Exact-offset edits change exported answers. Manual literal additions retain provenance. Rejections remain in audit; undo and edits invalidate export snapshots.
- Multiline notes, quotes, commas, HTML-like text, formula-like prefixes, tabs and cloze-looking text tested. Actual downloaded CSV/TSV/JSON independently parsed; all sources, reviewed answers and notes compared; TSV clozes reconstruct original text. Source-leading `#`, literal `foo::bar` manual answer and a hostile-looking note tested in an actual real-model browser workflow. HTML encoding prevents syntax injection. Clipboard equals actual TSV download.
- **Offline:** successful online run → model worker terminated → all browser context network offline → fresh worker performs real BERT inference. Only an already-open warmed-page scope is promised, not offline app startup/reload.
- Cancellation during initial model download (weight request intercepted) and real retry pass. Missing WASM, worker constructor/download/error, network abort/recovery, malformed predictions/envelope and accelerated 240-second timeout all show errors and no fake cards. Defensive-only worker substitutions are not successful AI checks.
- Late cancelled worker response cannot replace a newer successful real run. Delayed async audit import cannot overwrite newer source. Source changes invalidate output. Instruction-like source is treated only as NER data.
- Empty, oversized/many/long passages, reserved braces, unsupported formats, malformed audit and >2 MB import rejected. 221 independent literal-reconstruction oracle cases plus schema/BIO/budget/span/encoding checks pass.
- Desktop 1440, phone widths 390 and 320: normal viewport input/review/results screenshots inspected; no horizontal overflow; all form controls labeled, keyboard focus visible, interactive targets ≥44 CSS px. These are desktop-emulated layouts, not physical-device or screen-reader certification.
- Runtime dependencies hash-match immutable shared NER worker/factory (`20261107-11`) and WASM (`20261107-2`). Public model metadata rechecked: MIT, `8e892123e8b7c2c0c2bd1dcb598b7d244c4e53aa`; runtime uses unpinned main.
- Actual external request capture from startup to inference: no model-host fetch before explicit load; model/static downloads only, GET/no bodies; no source content in URLs. Reports persist host/path/query-key names only, never temporary CDN signed query values. Source data flow manually inspected; built-asset credential-pattern scan found no matches (not a proof by itself). No provider integration, storage API or imported-HTML rendering.
- Gallery: all inline scripts compile with Node `new Function`; entry appears exactly once, first, `area:"ai-utility"`; all 773 previous records unchanged; all 774 cards render, AI Utilities precedes STL Generators/Mini Games, search and narrow widths pass. Tagline updated, not legacy categories.
- Root `npm run predeploy`: 774 copied/built, 0 failed/skipped; combined deploy size **999,798,407 bytes**, under unchanged **1,000,000,000** guard. Exact current bytes in security/assembly report. No new runtime dedup rule or old-app removal.

## Explicit untested scope / limits

No actual Anki desktop application import was executed. Export compatibility is based on standard import headers/field mapping plus independent artifact parsing/reconstruction; choose Cloze and inspect Anki’s preview. No `.apkg` claimed. Other browsers, physical low-memory phones, screen readers, offline navigation/reload, learning efficacy, factual correctness, universal entity accuracy and general-concept question generation are not certified. BERT can miss/mislabel names; literal repeated masking can match inside longer words. Mandatory human review remains essential.

## Reports

`core-validation.json`, `assembled-browser-validation.json`, `edge-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, `tsv-edge-validation.json`, `artifact-validation.json`, `gallery-validation.json`, `gallery-ui-validation.json`, `runtime-dependency-audit.json`, `model-host-audit.json`, `security-validation.json`. Screenshots and synthetic downloaded artifacts accompany the reports.

## Public release

Root `npm run deploy` published the combined site. Matching Pages commit `8aa6c238f904dc9fc3081be899e1de3471ae2084` reached **built**, workflow `44883776817` succeeded on the first deployment. Seven public gallery/app/NER-worker/factory/WASM byte hashes match the assembled build. The full real-model workflow suite passed at the public URL: both tiny notebooks, all 14 expected spans/cards, reviewed edits/rejections/undo, actual artifacts and clipboard, maximum batch, initial load/cancel/retry, fully offline fresh-worker inference, empty/oversized/invalid inputs, responsive layouts and download-only privacy checks. Independent downloaded-artifact parsing passed again. All 774 public gallery cards, earlier categories/search and phone widths passed.

No old app/runtime rule removed; no new dedup rule needed. Unrelated pre-existing recovery drafts/root edits were preserved and excluded from source staging. No digest sent. See `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json`.
