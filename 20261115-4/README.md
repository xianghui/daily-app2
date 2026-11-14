# Lot Accord

An AI-assisted finite-lot sampling-plan review desk for quality coordinators. Informal inspection descriptions are often inconsistent with a procedure catalog; reviewing the wrong sample plan can obscure acceptance risk. This utility matches meaning, keeps every original, and creates a reviewed risk/follow-up worksheet. It never releases stock.

## Workflow

1. Choose **Packaging checks** or **Workshop checks**, paste source JSON, or import `.json` (≤2 MB). Fixtures are entirely synthetic.
2. Supply 2–6 procedure descriptions with sample size `n` and acceptance maximum `c`; supply 1–32 lots with `id`, `description`, `N` (lot units), `goodD`, `badD` (assumed defective-unit counts in two scenarios), and `owner`. Set `goals.maxGoodReject` and `goals.maxBadAccept` in [0,1]. Source ≤30,000 characters; description ≤300, labels ≤100, IDs ≤50, owner ≤150. IDs are unique within each list. N is integer 2–100000, 0 ≤ goodD < badD ≤ N, n integer 1–500, c integer 0–n. Approved rows additionally require n ≤ N.
3. Explicitly click **Load AI & match procedures**. No model request occurs before this. Watch download/file progress and four-text inference batches; cancellation terminates the worker. Timeout is 180 seconds; retry always starts a fresh worker.
4. Review original notes and ranked source descriptions/cosine evidence. Change procedure (resets n/c to supplied defaults), edit lot assumptions/sample limits, owner and multiline follow-ups. Approve for calculation or hold every row. Undo restores the last review edit. Source changes clear results and approvals.
5. Apply the reviewed worksheet. Inspect finite-lot risks, explicit targets and the replacement-based comparison. Revise n/c and reassess if a goal is missed. Changes invalidate export snapshots until applied again. No automatic acceptance or plan optimization is claimed.
6. Download actual JSON, CSV or Markdown, or copy Markdown. JSON preserves all originals, review/evidence, holds and calculations. CSV includes every lot and approved results, escaping spreadsheet formula-like text. Markdown is the follow-up worksheet. Audit JSON reimport restores **originals only**, not prior edits or approvals. Save the audit itself to retain the reviewed state.

## Real AI / runtime / licenses

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0. English semantic embeddings, quantized q8 ONNX, approximately 23 MB plus tokenizer/config files. Source model: sentence-transformers/all-MiniLM-L6-v2. Model host main revision is used; upstream changes could affect repeatability. Not a generative assistant.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2, Apache-2.0; ONNX Runtime Web 1.30.0, MIT; WASM CPU, one thread, normalized mean-pooled 384-dimensional embeddings. Four texts/batch, truncated at 256 tokens. Total vector count/dimension/norm and finite entries are validated before similarity ranking.
- AI materially maps paraphrases to supplied inspection procedures, avoiding literal-name-only lookup. It does not extract numbers, know approved standards, verify suitability or estimate quality. Nearest similarity always returns a candidate, including unrelated text: manual review/hold is mandatory. No confidence percentages.
- React + Vite static app. Runtime JS and module worker are bundled. The ~27 MB byte-identical WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older build when publishing the collection. Factory JS is bundled at `runtime/ort-wasm-simd-threaded.asyncify.mjs`. The build verifies production paths in browser tests.
- Current desktop Chrome with WebAssembly SIMD, module workers, Cache API and several hundred MB free RAM tested; no WebGPU required. Physical phones, low-memory devices, Safari/Firefox/Edge not tested. Small phone viewport layouts tested, not device inference performance.

## Deterministic method and assumptions

For a population of N units with exactly D defective **units**, sample n distinct units uniformly without replacement. Accept-count scenario is X ≤ c. We sum normalized log-combination weights C(D,k) C(N−D,n−k) over feasible k (hypergeometric). Good-lot rejection = 1−P(accept|goodD); poor-lot acceptance = P(accept|badD). Explicit risk-goal flags are computed from these values, not AI judgements. Numerical log normalization handles large combinations and boundary populations.

Baseline: binomial with replacement using the same D/N, n, c. It intentionally ignores the finite-population effect. Differences are not measured time savings, accuracy gains, quality estimates or improved outcomes. Both scenarios use user-supplied hypothetical counts. Independent Python exact combinations validate the implementation; no universal precision claim.

Requires uniform random sampling, complete known lot, binary defective-unit classification and error-free inspection. Clustered draws, multiple defects per unit, uncertain lot composition or imperfect tests violate this model. Good/poor labels are supplied scenarios, not standard AQL/LTPD definitions. This is not a standards-compliant acceptance plan, safety assurance, certification, actual disposition or optimal-plan recommendation. A target match is not permission to release a lot.

## Privacy, network, cache and failures

No API key, paid service, analytics or remote inference. User content stays in browser memory; only model/runtime file GET downloads use the network. Hugging Face (`huggingface.co`) and its CDN (observed `us.aws.cdn.hf.co`, possibly `cas-bridge.xethub.hf.co`) serve weights/config; this collection serves app/worker/runtime. Model downloads are not content uploads. Model/runtime caches contain files, not imported lots. JSON/CSV/Markdown downloads intentionally contain user-supplied data.

Explicit Cache API bridges preserve worker code, factory and WASM; Transformers.js caches model files. After one successful online run, **fresh-worker inference in the same already-open warmed page** was tested with network disabled. Offline app reload/navigation is **not** promised. Cache eviction, browser policy or private browsing can require another download. No service worker or persistent content store.

Network/runtime/worker failures, unsupported module workers/WASM, malformed messages/embedding tensors, timeout, empty/invalid/oversized JSON, wrong extensions, invalid numeric scenarios and sample > lot are actionable errors. No fabricated fallback. Run identities guard late worker fetches, messages and file reads; cancellation/input changes cannot revive stale results. Held rows are retained and not calculated. Audit envelope ≤2 MB is separate from original-source ≤30,000 characters. Multiline reviewers' edits survive current exports.

## Development / publishing

```
npm install
npm run predeploy
```

Vite base `/daily-app2/20261115-4/`. Required per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`; **do not deploy this app alone**. Root `/Volumes/ExternalHD/daily_app2` predeploy assembles every gallery app and root deploy publishes the combined collection. No agent credentials are in source or bundles.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed real inference, independent arithmetic, actual exports, offline scope, failure handling, accessibility/layout checks and publication status.
