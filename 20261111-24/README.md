# Sieve Folio

A local-first sieve-grading audit bench for lab technicians turning informal sample notes and retained-mass logs into a reviewed grading worksheet. Synthetic examples only; no material release, equipment control or certification.

## Workflow

1. Load Aggregate bench or Seed cleaning bench, paste JSON, or import `.json` (including an exported audit).
2. Supply 3–8 strictly descending sieve apertures in **mm**, with **0 = pan**; 2–6 material specifications have inclusive [min,max] percent-passing envelopes in the same order. Bounds must be nonincreasing. Set an absolute mass discrepancy tolerance in whole grams. Example envelopes are invented teaching values, not published standards.
3. Supply 1–12 samples: unique ID, informal description, starting grams and one retained gram mass per sieve including pan. Whole grams only; convert subgram laboratory data elsewhere without hiding precision loss.
4. Explicitly click **Load AI & match specifications**. Real local AI retrieves the closest supplied material description.
5. Inspect source snippets, original masses and candidate cosine scores. Review/edit the specification and all masses, add notes and approve or hold/reject every sample. Undo restores prior review edits. Holds remain visible and exported, without grading verdicts.
6. **Apply reviewed grading** to compute mass checks and cumulative percent passing. Any edit invalidates that applied snapshot. Discard removes the snapshot, not originals.
7. Download complete JSON, one-row-per-sample CSV or detailed Markdown, or copy Markdown. JSON audit import restores originals only: rerun AI and renew approvals rather than trusting imported decisions.

## Real AI and deterministic boundary

Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX; [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0) with ONNX Runtime Web WASM CPU (MIT). Produces normalized mean-pooled 384-dimensional vectors in four-text chunks with max 256-token context. Cosine similarity ranks supplied descriptions; it is **not confidence**, material identification, equivalence or chemical analysis. AI does not extract mass or generate specifications. Negation, near-identical materials and unrelated notes can mislink; every sample needs human review or hold.

Deterministic processing preserves starting and retained masses, sums cumulative retained mass, and divides the remaining mass by **recovered**, not starting, mass for percent passing. Inclusive envelope checks use integer cross-products before rounding. A discrepancy greater than supplied absolute tolerance, or zero recovered mass, blocks the whole sample's envelope verdict. No interpolation, standardized test-method checks, uncertainty analysis or assessment of moisture/contamination/sampling quality.

The concrete improvement is a complete, consistently mapped grading audit rather than mass-only acceptance. Displayed baseline passes recovery alone; full-envelope passes also require every sieve within bounds. Extra grading flags count approved, recovery-valid samples outside an envelope. Held samples are excluded from both. Exact-title resolution and AI–review agreement are computed separately; agreement is not accuracy. No measured time savings or universal quality claims.

## Download, devices, privacy and cache

Before loading, the UI discloses ~50 MB first download: ~23 MB model/tokenizer files from `huggingface.co`, `hf.co` and their model CDN redirects, plus ~27 MB same-origin WASM. Runtime JS, worker and module factory are bundled locally. The byte-identical WASM is shared from `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; **preserve that app asset** in the root publishing workflow.

Current desktop Chrome was tested. WebAssembly SIMD, module workers, several hundred MB memory and initial internet access required. WebGPU is not required: tested WASM CPU is the default, not an untested GPU fallback. Physical phones, low-memory devices and other browser engines are unverified. No API key, paid provider, optional remote inference, analytics or content upload. All sample text/masses remain in browser memory and downloaded local artifacts. Only fixed model/runtime file downloads occur. Imported instruction-like text is embedded as data and cannot call tools or request credentials.

Model downloads use Transformers.js Cache API. Worker source, WASM factory and binary are explicitly cached; cache failures/private mode/eviction can force redownloads. **Fresh-worker inference offline after an online run is tested only in an already-open page. Offline reload/navigation is NOT supported or claimed.** Closing/reloading still needs app-shell network availability.

Model loading and chunk progress are visible. Cancel terminates the worker; changing input invalidates runs. IDs guard late worker messages, delayed worker fetches and file reads. A 180-second timeout leaves no fabricated results. Network/runtime/model/embedding validation errors provide retry guidance. Unsupported device errors do not silently substitute heuristics.

## Formats and bounds

JSON original schema is shown in the examples. Names ≤80 chars; IDs ≤40, sample/spec description ≤400; ≤12 samples, ≤6 specs, ≤8 sieves; integers for masses (starting 1–1,000,000 g, each retained 0–1,000,000 g, recovered total ≤1,000,000 g), tolerance 0–10,000 g, aperture 0–1,000 mm, integer envelope percentages. Originals ≤18,000 JSON characters; import envelope/file ≤1 MB. CSV/PDF import unsupported. Reviewer notes ≤400 chars. Structured vectors require correct count/dimension, finite components and normalized lengths.

JSON contains immutable originals, every reviewed row, candidates, holds, computed sieve details and metrics (`sieve-folio/v1`). CSV preserves every sample, original/reviewed mass arrays, notes, status and passing values with RFC-style quoting; formula-like string fields are prefixed with `'` for spreadsheet protection (including multiline notes). Genuine signed numeric differences remain numeric, not formula-escaped. Markdown includes every sample plus detailed cumulative tables. Audit import reuses originals, not imported analysis. No session autosave of sample content.

## Development and publication

`npm install`, `npm run dev`, `npm run predeploy`. Vite base `/daily-app2/20261111-24/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` exist, but **publish only via root combined predeploy/deploy**, never individual deploy.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for observed tests, actual limitations and publication verification. No provider credentials or personal data are fixtures.
