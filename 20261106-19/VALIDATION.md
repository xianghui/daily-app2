# Ledger Lane validation — 2026-11-06

## Production-bundle browser checks

`browser-validation.json` records actual headless desktop Chrome execution using Playwright against the production Vite bundle (not dev mode).

- Real MiniLM q8 / WASM inference: two materially different fixtures, 4 rows each. Studio expected [6200,6100,6300,6400]; field expected [6100,6200,6300,6400]. Observed 8/8 correct on these small straightforward synthetic examples only. Not an accuracy claim for real bookkeeping.
- Studio assigned coverage 4/4 versus literal-account-code baseline 0/4. Total exactly 21400 integer cents. Similarity values displayed as cosine, not confidence.
- Real imported quoted CSV plus negative refund classified correctly. Full 40-row/44-text workload completed through worker batches of four. All rows retained.
- Review code rejection, notes, apply snapshots, export invalidation after editing, undo and clipboard equality tested. Downloaded JSON and CSV parsed separately using Python's csv/json/Decimal; row count, source descriptions, amounts/refund, account assignments, notes, formula escaping and reconciled totals checked.
- Cache test: first online inference followed by fresh worker offline inference in same open page passed. Online reload rerun made no further model-host requests. Whole-app offline reload is not claimed.
- Network observation: 14 model-host GET/HEAD requests to huggingface.co/us.aws.cdn.hf.co; no request bodies or user-content uploads. No external requests on initial app open. Runtime/worker/WASM hosted locally. Built-text credential-pattern scan passed; no provider integrations or credentials included.
- Empty, malformed CSV/header, invalid amount, duplicate ID, oversized field, 41-row input and unsupported PDF file rejected. Model-host download abort yields explicit error and no records; removal of block and retry succeeds.
- Cancel/retry and source-change stale-result protection passed. Unsupported Workers, malformed embeddings and accelerated timeout fault injections produce actionable errors and no fake results. These fault injections test guards, not AI quality.
- Desktop 1440px and phones 390/320px: no horizontal page overflow, labels and keyboard focus tested; screenshots saved. Phone screenshot visually reviewed. Touch controls minimum 44px. Full screen-reader audit and physical mobile performance not tested.
- Core tests separately check schema validation, threshold rejection, unknown code rejection, row preservation, exact totals, multiline/quote CSV parsing and spreadsheet-formula sanitization.

## Fixes during validation

- Initial browser test assumed a single-line input's newline normalization incorrectly; corrected test to the observed input value. No app data fabrication.
- First offline fresh-worker check failed because browser HTTP caching did not retain the worker script. Fixed with explicit Cache API worker source cache plus blob worker; WASM base resolved against origin. Entire browser suite passed afterward, including fresh-worker offline inference.

## Limitations

No external posting, tax compliance rules, mixed-currency support, locale financial parsing, XLSX/PDF import, precision beyond two decimals, or semantic accuracy guarantee. Only current desktop Chrome was exercised. No claim of full-shell offline startup or universal phone support. Package/runtime license information and actual data flow are documented in README.

## Publication

Root inline-script syntax, entry uniqueness and preservation of every existing gallery entry checked before deploy. Public Pages status/commit, per-file byte comparisons including worker and WASM, public-gallery rendering and public real-inference suite are recorded in deployment-validation.json, live-gallery-validation.json and live-browser-validation.json after publication.

Published successfully via the root combined workflow. Pages commit `1c8adbdb240063dc1b23cc0ec0df2d82c8685b51` reached `built`. Every app production file was fetched from the public URL and matched local SHA-256, including hashed worker and 26.86 MB WASM. Live gallery rendered 490 cards with all categories preserved and Ledger Lane once. Full real-inference browser suite then passed against `https://xianghui.github.io/daily-app2/20261106-19/`, including both known-answer batches, batch-40, offline fresh worker, cache/reload, review/export, privacy requests, cancel/stale and injected error cases. See live-browser-validation.json and deployment-validation.json.
