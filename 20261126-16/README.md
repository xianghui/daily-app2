# Blendtrace Desk

Local-AI ingredient reconciliation and exact material **mix/yield** investigation worksheets. Built 2026-11-26 as `20261126-16`, React + Vite, static GitHub Pages.

## Process and distinction

**User:** recipe/material-cost reviewer. **Input:** complete standard recipe, finished batch count and informal actual consumption notes. **Bottleneck:** inconsistent ingredient wording followed by a net usage gap that masks substitution versus total-input differences. **Output:** human-reviewed ingredient links, quantities, source evidence and exact mix/yield bridge as JSON/CSV/Markdown. No production changes, recipe optimization, purchasing or ledger writes.

This is not the earlier Variance Loom (`20261114-9`) price/usage/activity-volume bridge. This app holds standard prices fixed and decomposes the usage gap into **material substitution mix** versus **total input yield**, using revised standard quantities. There is no actual-price or planned-output analysis. It is not Fiber Balance's minimum-cost recipe optimization. The initial duplicate draft was replaced before gallery publication; `idea-audit.json` records the final objective and all-gallery comparison.

1. Choose **Bakery flour blend** or **Recycled paper furnish**, paste source JSON, or import a `.json` source/audit.
2. Set actualOutput (finished batches) and each standard's perOutput (input per finished batch), price (integer minor units) and shared physical unit. Use complete consumption, not purchases.
3. Explicitly load AI. Download/batch progress and cancellation are visible.
4. Inspect original note and cosine ranking evidence. Verify ingredient and consumed quantity; approve or hold every record. Review notes support multiline edits. Undo restores the preceding review; originals never change.
5. Apply the current review. Any hold blocks the complete bridge but not the full audit export. Edits invalidate exports until reapplied.
6. Download JSON (lossless audit including exact fractions), CSV (all original/reviewed consumption), Markdown (exact bridge and source-linked investigation sheet), or copy the worksheet. Audit reimport restores originals and intentionally does not trust prior approvals.

## Real AI, model/runtime and licenses

No key, remote API or provider integration. Shared worker model URLs use the model host’s default `main` revision, not an immutable weight revision; future host changes require retesting. `Xenova/all-MiniLM-L6-v2` ([model/source](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream sentence-transformers MiniLM) runs locally through Transformers.js 4.3.2 (Apache-2.0) and ONNX Runtime Web WASM (MIT). The shared built runtime was inspected for feature-extraction, q8, WASM device, mean pooling, normalized vectors and batches of four. Every vector must be finite, nonzero and 384-dimensional; count/dimension mismatches fail visibly. Cosine similarity ranks supplied material descriptions; no fake model, canned recommendations or fabricated confidence.

Text bounds: 200 characters per short English description/note, 32 total embedded texts maximum. The shared feature-extraction call has a max_length option of 256 but that option is not relied upon: the inspected tokenizer's effective model_max_length is **512**. The character bound keeps supported short English texts below that. Negation, similar grades, multilingual text and jargon are unreliable. Two negation challenge notes both matched the wrong material. Always inspect source and review; this is retrieval, not instruction-following or causal reasoning. Imported content is inert data and cannot request credentials or change tool authority.

### Download, device, cache and offline scope

First load is approximately **50 MB**: ~23 MB q8 ONNX plus 26,861,777-byte WASM, with JS/tokenizer overhead. Internet is initially required for Hugging Face and its CDN (`huggingface.co`, `hf.co`/`xethub.hf.co`) and same-origin runtime files. This is a model download, **not an input upload**. No content requests before explicit loading, analytics, secrets or remote inference. Inputs/reviews remain in page memory; closing the tab loses them unless exported.

Current desktop Chrome/Edge with WebAssembly SIMD, module workers and BigInt is recommended. Tested headless installed Chrome on this machine with GPU disabled: inference uses CPU, not WebGPU. Other browsers, low-memory devices and actual phones remain unverified; slow CPU devices may exceed the 180-second timeout. Errors identify network/runtime requirements; retry is explicit. No silent heuristic fallback.

To avoid duplicate runtime storage in the large collection, the same-origin immutable worker and WASM factory are reused from `20261115-6`; the WASM binary is from `20261107-2`. Exact paths/sizes/hashes are recorded in `runtime-provenance.json`. Preserve those deployed paths. Their scripts contain no user data. The worker wrapper caches worker source in Cache API; the shared worker caches WASM factory/binary and Transformers.js caches model files. **Fresh-worker inference in an already open, fully warmed page** was tested with all network offline. Offline navigation/reload/app startup is not supported or promised. Cache eviction, storage restrictions and private browsing may require re-download. Cancel terminates workers and aborts source fetch; generation IDs prevent late results after cancellation/input changes. Worker, constructor, download, malformed-vector and timeout failures are visible and leave no fabricated results.

## Formats and hard bounds

```json
{
  "title": "Bread mix review",
  "actualOutput": 10,
  "materials": [
    {"id":"wheat","description":"White wheat bread flour","unit":"kg","perOutput":6,"price":200},
    {"id":"rye","description":"Dark rye flour","unit":"kg","perOutput":4,"price":400}
  ],
  "records": [
    {"id":"F1","note":"White wheat flour consumed","unit":"kg","quantity":60},
    {"id":"F2","note":"Dark rye flour for loaves","unit":"kg","quantity":50}
  ]
}
```

One finished product/batch family, one period, one currency and **one common, physically additive input unit**. Recipe inputs must be meaningfully interchangeable for interpreting mix; the tool cannot establish that assumption. 2–8 unique material IDs, 1–24 unique consumption IDs, IDs 1–32 ASCII letters/digits/underscore/hyphen. actualOutput 1–10,000; perOutput 1–1,000; consumed quantity 1–100,000; standard price 0–100,000 minor units. Quantities/prices must be whole safe integers. Notes/descriptions ≤200, title ≤100, units ≤20, reviewer notes ≤500 characters. Paste ≤60,000 characters, source/audit file ≤8 MB; source bounds are independently enforced after envelope extraction. Invalid JSON/format/duplicate IDs/unlike units/out-of-range quantities block processing.

Every source record is retained. A standard with no matched rows is zero actual consumption; verify completeness, do not infer a missing record. No fractional input quantities: choose a smaller shared whole unit. No WIP, joint products, quality/moisture adjustments, unit/currency conversions, causal conclusions or recipe execution.

CSV is RFC-style quoted CRLF with escaped quotes/newlines and leading-character spreadsheet-formula sanitization on text. JSON is authoritative for exact text. Export fractions are `{n:"signed numerator",d:"positive denominator"}` in minor units; Markdown renders exact fractions. UI currency amounts are rounded to two decimals only, **not allocations of rounded cents**. Source/review rows and all exact results are in JSON; CSV is the consumption audit, Markdown the investigation handoff.

## Deterministic method and baseline

Let AQ_i be reviewed consumed quantity, q_i standard quantity per batch, S=sum(q_i), T=sum(AQ_i), O actual finished batches, and SP_i standard price. Revised standard quantity RSQ_i=T*q_i/S. Mix_i=(AQ_i−RSQ_i)*SP_i. Yield_i=(RSQ_i−O*q_i)*SP_i. Their exact sum is Usage_i=(AQ_i−O*q_i)*SP_i. BigInt rational arithmetic preserves recurring fractions and guarantees sum(mix)+sum(yield)=sum(usage), without allocating rounding residuals. Human input, not AI, determines all quantities and standards.

**Baseline:** aggregate usage-cost difference at standard prices. It is arithmetically correct but can hide offsetting mix and yield effects. The paper example has usage +1000 minor units, with mix +5200 and yield −4200. Figures are descriptive standard-price comparisons; positive means higher cost, not proven waste. No measured savings, universal accuracy or percentage improvement claim.

## Run, deploy and validation

`npm install`; `npm run dev`; `npm run predeploy`. Per-app `deploy: gh-pages -d dist` is retained but **do not use it for this collection**. Vite base `/daily-app2/20261126-16/`. Publish the combined root `deploy/` via root predeploy/deploy, preserving the gallery and shared assets.

`node core-test.mjs && python3 independent-core.py` checks 120 deterministic generated recipes against independent Python fractions. `python3 serve-built.py --port 7797` serves real production paths. `node browser-test.cjs`, `node defensive-test.cjs`, `node download-cancel-test.cjs`, `node challenge-test.cjs`, `python3 artifact-test.py` test actual browser inference, review/export/offline and defenses. Test scripts use the workspace-installed Playwright and installed Chrome, not an app dependency. `APP_URL`, `PREFIX`, `GALLERY_URL` select assembled/public checks. See [VALIDATION.md](VALIDATION.md) for observed outcomes and known limitations.
