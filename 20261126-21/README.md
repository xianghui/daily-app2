# Cashpath Bridge

An indirect **operating-cash management worksheet**, not a complete or filing-ready statement of cash flows. For a close reviewer who receives short, inconsistently worded notes and must reconcile profit with working-capital and noncash adjustments.

## Workflow

1. Load either synthetic example, paste source JSON, or import a `.json` source/audit file.
2. Supply the title, period and signed `profitMinor`, then 1–24 records with unique `id`, `note`, nonnegative integer `openingMinor`, `closingMinor` and `amountMinor`. All values use one currency; 100 minor units = one currency unit. Unused fields are zero. See `src/core.js` for complete example schemas.
3. Explicitly click **Load AI & classify close notes**. Local neural embeddings propose one of five treatments from each note, not from numeric values. Inspect the visible reference rankings and original snippets. Cosine similarity is not a confidence percentage.
4. Review/edit treatment and numbers, add multiline reviewer notes, approve or hold every record. Undo restores the previous review/completeness state. Originals never change. Source edits cancel inference and clear old approvals/results.
5. Attest that the register is complete, nonoverlapping and exclusions were reviewed; apply the current review. Pending records cannot apply. Holds or missing completeness block the complete total, but audit exports remain available.
6. Export current applied JSON, complete audit CSV, Markdown, or the running bridge CSV. Copy current Markdown. Any edit invalidates the applied snapshot until reapplied. Reimport audit JSON restores originals, deliberately not approvals. Download your work before leaving; it is not persisted.

## What AI does; what is deterministic

The real `Xenova/all-MiniLM-L6-v2` quantized q8 open-weight sentence encoder (Apache-2.0) executes in a local web worker with Transformers.js 4.3.x and ONNX Runtime Web WASM CPU. The immutable worker was built with Transformers.js 4.3.2 and ONNX runtime 1.31.0-dev; provenance is in `runtime-provenance.json`. Model/source: <https://huggingface.co/Xenova/all-MiniLM-L6-v2> and <https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2>. Runtime licenses: Transformers.js Apache-2.0, ONNX Runtime MIT.

The worker produces normalized, mean-pooled 384-dimensional embeddings in chunks of four texts. Five reference vectors and every short note vector are actually inferred, then cosine-ranked. This gives semantic treatment suggestions across wording such as “unpaid invoices owed to merchandise suppliers” rather than relying on a keyword table. Nothing generates or guesses financial amounts. A run with missing/invalid vectors fails: no canned response, heuristic fallback, server inference or remote provider integration exists.

Deterministic steps validate schemas and numeric bounds, require review, calculate all signs and totals with BigInt minor-unit arithmetic, compare a profit-is-cash shortcut, preserve originals and encode artifacts. Types/effects:

| Reviewed treatment | Operating cash effect |
| --- | --- |
| Operating asset movement | opening − closing |
| Operating liability movement | closing − opening |
| Noncash expense add-back | + amount |
| Gain removed from profit | − amount |
| Investing / financing excluded | 0 |

The baseline comparison is the **computed signed adjustment relative to reported profit**, not measured time savings, productivity, accuracy or a claim of correct accounting. A running identity and treatment subtotals show exactly how the bridge adds up.

## Downloads, devices, offline scope

Before any loading the UI discloses about **50 MB initial download** (~23 MB ONNX model, ~27 MB WASM plus tokenizer/runtime code). Model and tokenizer files download from Hugging Face and its documented `hf.co`/Xet CDN redirects; runtime assets come from this GitHub Pages origin. Initial internet access is required. Model revision is upstream `main`; future upstream changes can change suggestions and are not guaranteed equivalent to tested outputs. No oversized generative model or GPU is required.

Current desktop Chrome/Edge supporting WebAssembly SIMD, module workers and adequate memory is recommended. Tests use real desktop Chrome with GPU disabled. Mobile layouts are tested but inference performance on physical phones, other browser engines and low-memory devices is **not established**. Unsupported runtime, model/worker download errors, worker errors, invalid responses and 180-second timeout fail visibly with retry guidance. Cancellation terminates the worker, aborts pending worker fetch, invalidates run identity and prevents stale responses from writing newer state. Progress exposes downloaded files and real embedding chunk counts.

Runtime/model files use Cache API. After one successful run, **fresh-worker inference in an already-open warmed page with networking disabled is tested**. Offline navigation/reload is not promised; there is no service worker. Cache eviction/private browsing/disabled storage can require redownloads. Content is never put in model caches or storage. Browser/site code is still trusted code; do not treat client-side processing as a defense against a compromised browser.

### Same-origin immutable runtime sharing

This app deliberately reuses the collection's existing worker and full WASM runtime rather than adding another ~27 MB copy. Preserve these published source apps and assets:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

The `{id,texts}` protocol returns progress/batch/result vectors or an error. Worker source and MJS/WASM bytes are explicitly cached so a newly created blob worker can work offline, without relying solely on HTTP caching. Absolute same-origin dependency URLs survive blob-worker construction. `bundle-audit.py` and `asset-audit.py` verify SHA-256 provenance and served bytes. The reused feature-extraction pipeline forwards its tokenizer's configured 512-token ceiling, not the ignored pipeline-level `max_length:256` argument; see `tokenizer-audit.json`. Notes are further bounded to 200 characters; long text may truncate. No document instructions are executed.

## Input, output, limits and safety of results

Source limit 60,000 characters, records 1–24, title ≤100 characters, period ≤80, notes ≤200. JSON/audit imports ≤8 MB (separate envelope limit), numeric balances/amounts 0–100,000,000,000 minor units, signed profit within ±100,000,000,000. IDs are unique 1–32 ASCII letters/digits/underscore/hyphen. Reviewer notes ≤500 characters. Disallowed control characters, fractional values and unsafe values are rejected. Validated finite normalized vectors must have exactly the expected count and 384 dimensions.

All source records survive in `cashpath-bridge-v1` audit JSON alongside originals, current review, signed effects, blockers, totals and trail. CSV uses CRLF and quoted escaping; formula-like text beginning `=`, `+`, `-`, `@`, tab or CR receives an apostrophe. Actual numeric cells, including signed cash effects, remain numeric. Worksheet CSV contains initial profit followed by each adjustment, with exact before/effect/after minor-unit columns. Markdown is a human-readable trace, not HTML for publication.

This is a bounded reconciliation aid, not accounting advice or financial certification. Supply consistently adjusted operating balances: do not double-count an impairment/provision through both its balance movement and an add-back. Cash-only asset acquisitions, debt principal and financing distributions are excluded here, not lost: their source rows remain in the audit. Exclusion does **not** produce an investing/financing cash-flow statement.

No tax/interest-paid reconciliation, FX, acquisitions, lease reconciliation, overdrafts, negative-balance reclassification, policy selection, source-document verification or full balance-sheet reconciliation is supported. Missing notes are not discoverable by this model. Completeness is human attestation. In observed probes, “not depreciation; cash was spent buying a new machine” was wrongly assigned addback, and an irrelevant coffee-machine request was assigned operating asset. Negation, unfamiliar terms or irrelevant input can still receive a nearest class; mandatory review/hold is essential. Misclassified gains, losses and ambiguous expenses require correction or holding.

## Build, validate, publish

React + Vite; base `/daily-app2/20261126-21/`. `npm install`, `npm run predeploy`. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with `gh-pages` installed. **Do not deploy this app independently:** publish the assembled collection from repository root via root `npm run predeploy` / `npm run deploy`.

Local production test: `python3 serve-built.py --port 7803`, then `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `python3 artifact-test.py local-`, `python3 bundle-audit.py`. Browser tests require the locally installed Playwright/Chrome path shown in their source. `serve-built.py --assembled` serves the root deploy tree only after assembly completes; use `APP_URL` and `PREFIX` for assembled/public testing. Public-byte audit uses `python3 asset-audit.py https://xianghui.github.io/daily-app2/ public-`.

See [VALIDATION.md](VALIDATION.md) for observed outcomes, tests and untested scope. Only synthetic fixtures are included. No credentials are used or included.
