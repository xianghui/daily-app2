# Splitpoint Desk

A local-AI **process-further planning desk** for small workshop planners. Match informal unfinished-lot notes to user-supplied product economics, verify every proposal, and select whole lots for optional finishing within a shared minute budget. Unlike overhead allocation, FIFO stock valuation or mandatory-job sequencing, the decision is **sell at split-off versus process further**, based on incremental proceeds, with sunk-cost neutrality.

## Workflow

1. Choose **Timber workshop** or **Orchard workshop** (synthetic), paste JSON or import `.json` source/audit.
2. Supply one currency and available minutes; product profiles contain descriptions and per-unit split-off sale, final sale and additional processing cost. Lots contain informal notes, quantities, whole-lot minutes and already-incurred sunk cost.
3. Explicitly click **Load AI & match lots**. No model request begins beforehand.
4. Inspect ranked source descriptions and cosine similarities (not confidence). Correct profile, values and durations; approve or hold each lot. Profile changes reset three per-unit estimates. Notes support multiline text; undo restores row edits. Capacity is separately editable/resettable. Originals never change.
5. Set each lot to optimize, pin process or pin sell. Apply the reviewed plan. Pending rows block apply; holds block a complete release and remain visible in approved-only diagnostics. Over-capacity pins block apply; deliberate nonpositive-value processing pins show a warning. Any edit invalidates exports.
6. Download actual current JSON/CSV/Markdown or copy Markdown. Audit JSON reimport restores originals, not approvals or trusted calculations. No equipment, orders, accounts or ledger are changed.

## Input and output contract

```
{title,currency,capacity,
 profiles:[{id,description,split,final,extra}],
 requests:[{id,note,quantity,minutes,sunk}]}
```

See `src/core.js` for complete synthetic examples. Unique ASCII token IDs 1–40 characters; title ≤200, description/lot note ≤200, reviewer note ≤500. Currency is three uppercase letters; use its minor unit consistently (no currency-metadata validation or conversion).

2–6 profiles, 1–24 distinct physical lots. Whole quantity 1–1,000,000; whole-lot minutes 1–1,440; available capacity 0–1,440. Money: **nonnegative integer strings, ≤12 digits**. Profile values are per-unit; sunk cost is per whole lot, already incurred. No exponent/decimal/negative money inputs. Source ≤60,000 JS characters; source file ≤1 MB; audit ≤8 MB, with restored originals still bounded. Invalid controls/unpaired surrogates and unsupported formats are rejected.

`splitpoint-desk/v1` audit JSON retains originals, reviewed assumptions, ranked AI evidence, every held lot, choices, baseline and exact plan/totals. CSV retains all source lots and reviewed values/actions; Markdown is a source-linked planning handoff. Formula-like text is apostrophe-prefixed in CSV; genuine signed incremental values remain numeric lexical strings. Import large numeric columns as text/arbitrary-precision integers to avoid spreadsheet precision loss. Source is displayed as inert text, never executed or given authority. Exported Markdown is not HTML-sanitized for arbitrary third-party renderers; use a safe renderer.

## Real AI, source and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8; **Transformers.js 4.3.2 / ONNX Runtime Web**, normalized mean-pooled 384-dimensional embeddings on single-thread WASM CPU. AI embeds informal lot notes and supplied product descriptions. Cosine ranking retrieves a matching economic profile beyond exact names; no canned inference or deterministic replacement on failure. AI does **not** invent prices, extract amounts, assess process safety, estimate durations or decide accounting policy.

Four texts per chunk, maximum 30 texts/eight chunks. Finite vector count, 384 dimensions and normalized lengths are validated. The reused worker passes `max_length:256`, but inspected feature-extraction pipeline does not forward it: the actual tokenizer's `model_max_length` is **512**. ≤200-character bounds constrain text; unusual content may truncate. Host model revision `main` is unpinned and may change. Semantic matches can be wrong for negation, unrelated products and mixed lots. Review is mandatory; no automated relevance/abstention guarantee.

Same-origin immutable shared runtime (must remain published):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Byte hashes/sizes in `runtime-provenance.json`. Source worker was inspected; this is the actual production worker, not a mock. App/React/runtime are same-origin static assets. Sharing avoids another ~27 MB WASM copy. Upstream package/model licenses apply.

## Download, privacy, devices and offline scope

Before explicit loading the UI explains the **about 50 MB** initial transfer: ~23 MB model + ~27 MB WASM, plus JS/tokenizer. First use needs internet to this site and Hugging Face/CDN for model/config/tokenizer files. These are weight downloads, **not uploads of user content**. Default processing stays in browser memory; no API keys, paid services, remote inference, accounts or analytics. There is no optional provider integration.

Current browser with module workers, WebAssembly SIMD, BigInt, sufficient memory and preferably Cache API. WASM CPU requires no WebGPU. Tested desktop Chrome with GPU disabled; 320/390px emulated layouts are not physical-phone performance validation. Other engines and old phones unverified. Download/batch progress, cancellation, 180-second timeout, error and retry are visible. Cancellation terminates workers and pending worker fetch; run/import IDs suppress stale responses. Failed AI never produces fake suggestions.

Cache API stores model files and worker/factory/WASM when available. **Only tested offline claim:** a fresh worker runs real inference in the same already-open warmed page with network blocked. Cold offline startup, reload and navigation are not promised. Cache eviction, denied storage and private mode can cause redownload. Closing page loses unsaved data.

## Deterministic decision and comparison

For each approved lot with quantity Q, split-off unit sale S, final unit sale F and extra unit cost E:

`increment = Q × (F − S − E)`

Processing consumes the entire lot's supplied minutes; a lot cannot be split. Exact bounded 0/1 dynamic programming maximizes total incremental proceeds within 0–1,440 minutes. Process pins are mandatory, sell pins excluded; incompatible process pins block. Negative/zero auto lots are never chosen. Equal objective values keep the first encountered selection at the smallest additional-minute total. Sunk costs do not enter the optimization; reported net equals selected final/split revenues minus selected additional costs minus all approved sunk costs. BigInt money arithmetic, no rounding.

FIFO baseline takes positive auto lots in source order that still fit, under the **same pins and budget**. FIFO gap is optimized increment minus baseline increment: a computed scenario, never a measured savings/profit/time/accuracy claim. Sell-all revenue gives an explicit no-further-processing comparison. All held records are excluded from partial calculations; they do not disappear from audits.

Assumptions: certain demand at fixed supplied prices, unchanged quantities/yield, independent whole lots, one shared minute pool and no setup interactions. Excludes uncertain sales, spoilage, joint-cost allocation, tax, due dates, multi-machine schedules, partial lots and process safety assessment. A subset shortlist is not an executable timetable. Hold unsuitable work. Model similarity cannot validate economic assumptions.

## Build and validation

React + Vite; base `/daily-app2/20261126-12/`. `npm install`; `npm run predeploy`. Required per-app gh-pages dependency and predeploy/deploy scripts retained, but publish **only the combined repository-root deployment**, never per-app deploy.

- `node core-test.mjs` then `python3 independent-core.py`: arithmetic/guards and independent exhaustive subset enumeration, pins/capacity, original conservation and sunk-cost invariance.
- `python3 serve-built.py --port 7791` then `node browser-test.cjs`: production bundle, two real AI fixtures, max batch/chunks, fresh-worker offline inference, reviewed edits/pins/holds/undo, download/copy, imports, cancellation and keyboard/phone layouts.
- `node defensive-test.cjs`; `node recovery-test.cjs`: download failures and real recovery, unsupported runtime, malformed output, worker errors, timeouts, delayed old runs/imports and cancellation.
- `node challenge-test.cjs`: real negated/unrelated/instruction-like notes, documenting limitations, no tool authority.
- `python3 artifact-test.py [local-|assembled-|public-]`: independent CSV/JSON/Markdown parsing and integer/exhaustive plan checks on actual browser-downloaded artifacts.

Browser tests use the environment's Playwright and Chrome. APP_URL/PREFIX target the assembled/public bundle. Successful AI tests use the real model; only defensive tests inject faults. Read `VALIDATION.md` for observed outcomes and untested scope. No universal accuracy or real-world profit claim.
