# Tender Prism

A local-AI vendor scorecard for procurement reviewers. Distinct workflow: evidence-to-criterion matching, mandatory measurement review, fixed-anchor multi-criteria scoring, equal-weight baseline and omit-one-criterion sensitivity. No external purchasing or supplier contact.

## Use

1. Choose Laptop purchase or Delivery contract, or paste/import source JSON.
2. Supply 2–4 known vendors and 2–8 criteria. Each criterion has id, label, semantic description, unit, low/high anchors, `higher`/`lower` direction and positive integer weight. Weights must sum to 100. Anchors are fixed user assumptions, not cohort min/max.
3. Supply 1–32 records with id, vendor, rough description, numeric value and owner. Values already use the criterion unit. Source max 30,000 characters; descriptions max 300 characters. Numbers finite 0–100,000,000; high must exceed low.
4. Explicitly load AI. Review proposed criteria, vendor identities and measurements. Evidence panels show source descriptions and cosine similarities (not confidence). Approve or hold every record; edit notes/owners. Undo is available.
5. Apply. Exactly one approved row per vendor/criterion is required. Duplicate pairs block application; missing pairs yield a partial audit with NO rankings. Held originals remain in exports. Out-of-anchor values are explicitly listed and clamped.
6. Download JSON (lossless originals, reviews, evidence, criteria and comparisons), CSV (all original/reviewed rows, spreadsheet-formula escaping), or Markdown (scorecard, assumptions and complete register); copy Markdown. Any review edit invalidates export until reapplication. Reimport JSON audit restores originals only and requires new inference/review. Imports ≤2 MB, `.json` only.

## Real AI / static runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX via @huggingface/transformers and ONNX Runtime Web. Model task: mean-pooled, normalized 384-dimensional embeddings compare each record description with supplied criterion descriptions. Four texts per batch, 256 tokens max, 180-second run timeout. There is no generated text, extraction of facts, credential integration, remote inference or deterministic fallback posing as AI.

First explicit run downloads approximately 23 MB model/tokenizer from Hugging Face/CDN plus 27 MB CPU runtime and app assets from this collection. Runtime worker and module factory are bundled locally. The byte-identical shared WASM lives at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that app/path on deployment. WASM SHA-256: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. No WebGPU required; tested CPU path only.

Current desktop Chrome with module workers, WebAssembly SIMD, Cache API and several hundred MB free memory is the tested target. Physical phones and other browser engines untested. UI tested at 1440/390/320 CSS-pixel widths. Loading shows model file progress and batch counts; cancellation terminates worker. Run identities protect against stale workers and asynchronous imports. Network, malformed results, worker faults and timeout report actionable errors without fake results.

## Privacy and cache

No API keys, analytics, backend or agent credentials. User text stays in the browser; only static model/runtime GET downloads occur. Imported instructions are data, never authority. No automatic input storage. Runtime, worker and model assets cache through Cache API. A warmed, already-open page can terminate its worker and perform real inference in a fresh worker with the browser offline (tested). Offline reload/navigation is NOT promised. Cache eviction/private mode can require redownload; download cache persists independently of content.

## Deterministic scoring and limitations

Utility is `clamp((value-low)/(high-low),0,1)`; lower-is-better uses `1-utility`. Sum utility × weight gives points/100. Equal-weight baseline uses 100/criterion-count with identical evidence. Sensitivity sets one weight to zero and proportionally renormalizes the others. Exact ties have equal scores; alphabetical display order is not an award recommendation. Floating-point arithmetic and displayed rounding apply.

AI materially reconciles paraphrased criterion descriptions, avoiding literal-label matching; it does not verify units, infer numeric measurements, establish supplier eligibility or decide truth. Every inference is pending until reviewed. Additive scores assume independent, compensable criteria and can conceal unacceptable individual performance. Use mandatory eligibility checks separately. The literal-label count is wording coverage, NOT accuracy. Small synthetic known answers do not establish real-world reliability. Unrelated instruction-like text still gets a nearest suggestion; reviewers must hold it. No universal quality or time-saving claims.

## Build / publish

React + Vite. `npm install`, `npm run predeploy`; Vite base `/daily-app2/20261114-10/`. Per-app required deploy script retained but DO NOT use it to publish the collection. Root `/Volumes/ExternalHD/daily_app2` predeploy/deploy assembles and publishes the combined site. See VALIDATION.md and machine-readable test reports for observed checks.
