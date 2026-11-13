# Observed validation — 2026-11-13

## Actual production-bundle CPU inference

Desktop Chrome with `--disable-gpu`, bundled worker/runtime, real Hugging Face q8 model. Both synthetic batches yielded 8/8 intended identities: community portal power/network/compute/storage and exhibit kiosk storage/power/compute/network. This tiny fixture result is NOT general accuracy. An unrelated instruction-like note still matched storage and stayed pending; held by the test. No arbitrary-text relevance guarantee.

After required review, community portal baseline 0.812763 → modeled 0.938741265, cost 200, nine feasible allocations. Extra power and network units selected. Exhibit kiosk baseline 0.7432128 → modeled 0.9230702976, cost 240 of 280, nineteen allocations. Extra compute/storage selected. These are supplied-assumption scenarios, not measured improvements, AI confidence or procurement recommendations validated against actual systems.

## Passed locally

- Nine browser workflow groups: two real inference fixtures; edit/multiline/hold/undo/current exports/clipboard/reimport; fully offline warmed-page fresh-worker inference; empty/invalid/oversized/duplicate/unsupported input; cancellation/retry/stale input; 40 records and maximum audit reimport; zero budget, zero/certain success, missing/duplicate stage blocking; instruction-like data; desktop/390/320 px layout, focus and ≥44 px buttons.
- Six fault-injection groups: model network failure plus real retry; worker download abort; unsupported worker; malformed embeddings; accelerated timeout; worker error. No fake outputs or enabled exports on error.
- Real model-host request delayed, cancelled, changed input and retried with real model. Late download did not overwrite new input. Oversized JSON-file rejection, delayed-file-read invalidation and late-worker messages after input replacement also passed. Correcting a stage to a duplicate blocks the plan, and undo restores it.
- 1,000 independent Python Fraction exhaustive-allocation oracles: probability and baseline within 1e-12; exact selected cost, feasible candidate count, availability and budget constraints. Schema/malformed vector guards also checked. The full six-stage, 4,096-allocation bound selected all available replicas under a sufficient budget.
- Actual JSON/CSV/Markdown browser downloads parsed independently with Python. Every source/review survives; edited multiline text and spreadsheet-formula escaping verified; maximum 40-row audit round-trip restores originals and pending reviews. Forty duplicate stage links correctly block planning rather than discard notes.
- Network trace from startup through inference: only GETs, no request bodies; model hosts not contacted until explicit run. No content-bearing URLs or upload integration. Static credential-pattern scan is evidence, not proof against every possible secret format.
- Worker/runtime factory and shared 26,861,777-byte WASM bytes/paths verified. Already-open page works offline with a new real inference worker after warming. No offline reload/startup claim.
- Production build passed. Phone screenshots visually inspected at ordinary viewport height; no horizontal overflow. A touch-emulated 320 px browser completed real inference, tapped review/apply/download/undo and preserved edited multiline evidence.
- Root predeploy assembled all 644 entries with zero failed/skipped builds. Root and every new-app artifact byte-matched; existing gallery categories/cards/search remained intact. Full nine-group browser suite repeated on the assembled production bundle.

Machine-readable evidence: `browser-validation.json`, `defensive-validation.json`, `model-cancel-validation.json`, `core-validation.json`, `artifact-validation.json`, `asset-validation.json`.

## Not tested / limitations

Physical phones, non-Chrome engines, low-memory hardware, all cache/storage policies and fresh offline navigation are untested. Real failure independence, horizon consistency and correctness of user success/cost evidence cannot be established by this tool. Common-cause failures/failover/repair/load sharing omitted. Floating-point near-ties may choose different equivalent allocations. Model revision is not frozen; synthetic fixture performance is not operational reliability assurance.

## Combined/public verification

Publication evidence is recorded separately in `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json`, and `public-gallery-validation.json` after successful deployment. A gh-pages push alone is not verification.

Public Pages commit `31e3342f34ed393a94ab64a35ab4663cb7289b95` reached built status. The complete public app, worker, factory and shared WASM byte-matched the production build. Both real-AI fixtures and all nine public workflow groups passed, including offline fresh-worker inference; public gallery rendered all 644 entries with legacy categories/search intact. See public reports.
