# Allset Desk — observed validation

## Real model / production bundle

- Scaffolded React + Vite, installed required gh-pages dependency; `npm run predeploy` passes at `/daily-app2/20261125-22/`.
- Current desktop Chrome, GPU disabled, real MiniLM q8 model in WASM CPU worker. Two materially different fixtures: print-partner notes and community-venue notes. **12/12** intended links, versus **5/12** always-first-capability baseline. Not a representative accuracy claim.
- Print worksheet: North has three printing notes but misses delivery/recycling; South covers all three; Quiet has no evidence and stays visible. Community worksheet: East covers all three; West misses garden despite three notes. Each has one count-only false pass.
- Four challenge cases are in `quality-challenge.json`: courier paraphrase succeeds; negated recycling and unrelated violin repair still get recycling; two-capability note gets printing only. Mandatory human hold/splitting is documented. The model is retrieval, not proof or negation certification.
- Maximum batch: eight capabilities + 24 evidence notes / eight four-text chunks, eight suppliers retained, full exported audit reimported and processed again.
- Offline: after caching, network blocked, worker terminated/recreated and **real inference** succeeds in already-open warmed page. Cold offline navigation/reload unclaimed.

## Exact logic, artifact and review checks

- `node core-test.mjs`: 34 schema/constraint/import/goal/hold checks.
- `python3 oracle-test.py`: 250 random duplicate-bearing cases match independently executed SQLite relational division, including non-vacuous empty-requirement guard.
- Real browser downloaded JSON, complete CSV, all-supplier follow-up CSV and Markdown for both fixtures, reviewed multiline text and maximum batch. `artifact-test.py` independently parses them with Python JSON/CSV, checks every required record, current supplier/capability/decision, proper escaping and follow-up gap sets. Formula-like multiline notes are safely apostrophe-prefixed in CSV; JSON and clipboard preserve exact originals.
- Capability change, supplier reassignment and required-set edit each change actual coverage; undo restores it. All links must be approved or held. Holding a sole required capability changes the supplier to unresolved. Zero selected requirements yields empty-scope for every supplier, no automatic pass. Export buttons invalidate on every edit. Clipboard contains the current reviewed note, not stale sample content.

## Defensive and privacy checks

- Empty/bad JSON, unknown fields, invalid references/types, control characters, duplicate IDs, oversized source/import, unsupported format and 25-note batch reject without fabricated results.
- Actual worker and Hugging Face download aborts produce errors; removing the fault and retrying executes the real model.
- Fault injection is used **only** for defensive checks: unavailable Worker/WebAssembly, construction/worker errors, malformed result vectors, accelerated timeout, stale callbacks and delayed worker fetch cancellation.
- Cancel/retry executes the real model; delayed first-run callbacks cannot overwrite newer real-AI results; a delayed file import cannot replace newer source.
- Network captured from production startup through inference: no model traffic before explicit load, GET-only downloads, no request bodies or user content in URLs. Only same-origin and documented Hugging Face/CDN hosts. Reports persist sanitized host/path and query-key names, never signed URL query values.
- Same-origin worker, factory and WASM hashes match provenance. Built JS/CSS credential-pattern scan is clean; combined source/network inspection is not a claim to detect all possible secret formats.

## Layout and collection

- Desktop 1440 and narrow 390/320 viewport screenshots saved for hero, review and results. No horizontal overflow; form controls have labels, buttons ≥44px; Tab/Enter/Space can load examples, run real AI, change required flags and undo. Physical devices and other browser engines untested.
- All gallery inline scripts compile with Node `new Function`; 875 entries, new AI Utility exactly once/newest, 874 prior entries unchanged, category order/labels preserved. Real browser gallery rendering, new-app search and oldest-app search pass.
- Root predeploy assembles all 875 apps without failures/skips: 813,467,570 bytes after existing deploy-only runtime deduplication, below the unchanged 1 GB guard. No source asset deletion or category relabeling.

## Publication

**Published and publicly verified.** Root `npm run deploy` succeeded; GitHub Pages workflow `45621100644` completed successfully for remote gh-pages commit `30be10ef6699d1049f5ef5b7bcf7ab36cab67212`, matching the Pages API built commit. No fallback trigger or deployment retry was needed.

- Seven public assets (HTML, application JS/CSS, shared worker/factory/WASM, root gallery) are byte-identical to local production builds. Public combined-site report: 813,467,570 bytes.
- At the real public URL, both real-AI fixtures matched 12/12 links, review/goal/supplier edits, holds/undo, current downloads/clipboard, empty-scope handling, maximum 32-text run/reimport, bad inputs/imports, cancellation/retry and fresh-worker offline inference passed.
- Independent public downloaded-artifact parsing passed all four fixture/review/max sets. Public desktop/390/320 layout screenshots and keyboard controls passed. Public gallery renders all 875 cards, AI Utilities first, new search/oldest search work.
- Public network trace remains GET-only documented file downloads with no content uploads and zero pre-load model requests. No page errors. Sanitized reports preserve no signed query values.
- See `publication-status.json`, `pages-build-latest.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-artifact-validation.json`, `public-gallery-browser-validation.json` and `public-keyboard-validation.json`.

Physical phones, other browser engines, cold offline startup, representative matching quality, and supplier authenticity/commercial outcomes remain unverified. No digest or supplier outreach sent. Unrelated pre-existing drafts were preserved and excluded.
