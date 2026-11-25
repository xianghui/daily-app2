# Observed validation — 2026-11-09

## Real AI and known-answer fixtures

Production Vite bundle, headless Chrome, actual Hugging Face MiniLM q8 WASM inference (not mocks):

- Studio receipts: expected/observed A,A,B,C — 4/4 links. Received 22,000 cents; applied 21,000; credit 1,000; outstanding invoice balance 2,000. Exact-description baseline 0/4. Partial first receipt spans two invoices.
- Facilities receipts: expected/observed A,A,B,C — 4/4 links. Received 21,000 cents; applied 20,000; credit 1,000; outstanding 2,000. Exact-description baseline 0/4. Invoices deliberately supplied out of due order; 3,500 cents settled I2 before 500 cents reached I1.
- Negation challenge: “NOT for website design or ecommerce” retrieved A (wrong topical candidate). Held explicitly. Model similarity does NOT authenticate a payer or contractual applicability. These tiny fixtures are not general accuracy evidence.
- 5,346 allocation cases checked against independent closed-form expected applied/credit/outstanding amounts, due order and invoice caps. All passed. Source schema and hold guards passed.

## Browser and artifacts

`browser-validation.json`: 10 passing check groups; no page errors. Two actual inference fixtures; mandatory review gate; account edits reset decision; undo; holds; multiline quoted formula-like rationale; stale export invalidation; clipboard equals downloaded Markdown; parsed JSON/CSV/Markdown preserve all records; 8 accounts + 24 receipts = 32 texts in four-text batches, 32 invoices; audit reimport preserves originals and resets approval.

Input changes cancel previous run. Real cancellation/retry and explicitly delivered stale callbacks cannot replace current results. Empty/null/invalid/oversized payloads, duplicate IDs, oversized text/counts, invalid dates/accounts/amounts, wrong file format and oversized file rejected. Malformed vectors, constructor/runtime-unavailable errors and timeout exercised with fault injection ONLY for defensive checks. Successful inference used the actual model.

`network-validation.json`: fresh-context model-host abort produced visible fetch error, no suggestions, then actual inference recovered after unblock. `cancel-download-validation.json`: cancellation held at the actual model-weight request, no stale suggestions, real retry completed. No fake fallback.

Fresh worker created with browser context fully offline after successful online loading: actual inference completed in already-open production page. Worker/factory/WASM and model caches exercised. Offline reload/navigation NOT claimed. HTTP cache alone is not used for runtime availability.

`artifact-test.py` independently parsed browser downloads with Python JSON/CSV; verified all receipt source strings, exact numeric cents, edited multiline Unicode rationale and leading formula protection, decisions, nested allocation lines, originals and every receipt/invoice balance. Markdown includes complete receipts and invoices. JSON audit import round-trip passed.

320px and 390px viewport checks: no document horizontal overflow, 44px action buttons, input focus and working export. Screenshots visually inspected at 320px. Desktop screenshot retained. Physical touch devices, other browser engines, screen-reader audit and offline app-shell startup untested.

## Privacy / assets / gallery

Requests captured from production navigation through all tests. No model-host request before user invokes load. Only GET requests without bodies, to local-origin assets and documented Hugging Face hosts; synthetic source phrase not in URLs. Code reviewed: worker receives texts via local postMessage; no content-upload path, credentials or remote inference. Built text credential-pattern scan had no hits (not an exhaustive secret-proof claim). Shared WASM is SHA-256 byte-identical to installed runtime; asset-audit.json records hashes.

Gallery inline scripts compiled with Node new Function; new AI entry exactly once; all 555 prior entries unchanged and AI Utilities remains first. Publication/public checks are recorded separately below and in JSON reports.
