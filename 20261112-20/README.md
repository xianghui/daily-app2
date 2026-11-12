# Rubric Concord

A local-AI moderation worksheet for assessment leads reconciling criterion names in paired independent ratings. It is not a grading system. Distinct from label auditing or survey weighting: the output is criterion-specific inter-rater agreement, confusion matrices and an ordinal-gap discussion agenda.

## Workflow
1. Choose Writing workshop or Presentation panel (synthetic fixtures), paste JSON or import `.json`.
2. Provide 2–8 rubric criteria (id/title/description), 1–24 paired rating records (id/sample/text/a/b). Set levels 2–5, gapThreshold 1–levels−1 and maxDisputes 0–24. A and B must refer to the same two assessors across all records. Ratings must use a common ordered scale.
3. Explicitly load AI. Real MiniLM embeddings reconcile rating-note wording to criterion descriptions, using cosine ranking. Review each source and alternative score; similarities are NOT confidence.
4. Correct criterion and ratings, add verification notes, approve or hold each pair. Undo is available. Input changes cancel/clear old runs; review edits invalidate export snapshots. Holds block analysis release but remain in audit exports. Duplicate sample/criterion pairs block release.
5. Apply reviewed ratings. Inspect per-criterion confusion matrices, exact agreement and linear weighted kappa. Discuss largest gaps first; the gap threshold and capacity ceiling are supplied goals, not statistical certificates.
6. Download JSON (complete originals, reviewed pairs, matrices and priorities), audit CSV, priority CSV or Markdown; copy Markdown. Reimporting JSON restores originals only and requires fresh inference and approvals. CSV imports/PDFs are unsupported.

## Real AI and static runtime
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; q8 ONNX, mean-pooled normalized 384-vectors.
- Runtime: `@huggingface/transformers` 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU / single thread; no WebGPU required.
- About 23 MB weights/tokenizer from Hugging Face/CDN plus 26,861,777-byte WASM and local runtime/worker (~50 MB first use). Internet required initially. Model download progress, four-text batch progress, cancellation, retry and 180-second timeout are visible.
- Production base `/daily-app2/20261112-20/`; worker and runtime factory bundled locally. Byte-identical WASM reused from immutable `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that earlier app in the combined deployment. No server-only calls, API key, optional provider or backend.
- Modern module-worker + WebAssembly SIMD browser, several hundred MB free RAM recommended. Desktop Chrome tested; physical phones and Safari/Firefox unverified. Responsive layouts tested at 1440/390/320 px.
- Explicit Cache API stores worker, factory and WASM; Transformers.js caches model files. After an online run, a new worker runs actual inference with all network disabled in the already-open page. Offline reload/navigation is NOT promised. Eviction/private mode may require downloading again.

## Privacy and limits
Content stays in browser/worker memory, without automatic persistent content storage. Network traffic only downloads public assets; no content uploads or credentials. No remote inference, gradebook integration or external action. Imported instructions remain inert data. Originals ≤24 KB, envelopes/files ≤1 MB, record text ≤400 chars, 256-token model context and 1–24 record bound. Imported numbers are never inferred by AI. Finite, normalized 384-vector output is required; failures never generate fallback suggestions. Cancellation and input changes invalidate run IDs, including pending file/worker fetches.

## Deterministic interpretation
For each criterion, disagreement weight is |A−B|/(levels−1). Observed weighted disagreement is the mean weight; expected weighted disagreement uses the product of the two assessor marginals. Kappa = 1−observed/expected, undefined when expected is zero or there are no pairs. Negative values are retained. Exact agreement counts identical ratings. The simple baseline is all unequal pairs; the moderation count is pairs meeting gapThreshold. Priority is descending absolute gap, then ID, with every pair preserved. No percentages of improvement, invented confidence, measured savings or consensus grades.

Tiny, selected and restricted-range samples produce fragile kappa. Marginal prevalence affects kappa; ordinal-distance weights are assumptions. No inferential intervals, fairness conclusions or assessor-quality certification. MiniLM cannot reliably distinguish negation, unrelated notes or very similar rubrics: mandatory human review is essential.

## Development and validation
`npm install`; `npm run dev`; `npm run predeploy`. Required per-app deploy script is retained but **publish only via root** `npm run predeploy` / `npm run deploy` to preserve the collection. See VALIDATION.md and machine-readable reports for observed results. All fixtures are synthetic. CSV textual formula prefixes are escaped; numeric ratings remain numbers. JSON is the lossless audit/round-trip format.

## Gallery distinction
Existing Rubric Relay (20261108-15) compares student answers to score anchors for second marking. Rubric Concord never scores answers: it reconciles criterion identities in two already-scored independent rating logs, computes marginal-adjusted agreement and creates a gap-ranked moderation agenda. Debate Rounds in the original read-only collection is timed debate practice, not a paired-rater agreement audit. See idea-check.json.
