# Decision Estuary

A static React + Vite utility for product leads and community facilitators consolidating recurring pairwise consultation logs. Different names for the same proposal create manual reconciliation work; direct win totals can conceal preference cycles. This app offers real local semantic identity proposals, mandatory human review and a deterministic winning-votes strongest-path worksheet. It is distinct from ranked-ballot/instant-runoff tallying: inputs are directional pairwise counts, including incomplete and repeated comparisons, not complete ranked ballots.

## Workflow

1. Open a synthetic neighborhood or maker-space example, paste source JSON, or import a `.json` source/audit file.
2. Edit the canonical `parts` (2–6 option IDs, labels and descriptions). Enter `records` (1–24 logs: id, left/right description, votesLeft/votesRight and owner).
3. Explicitly choose **Load AI & reconcile pairs**. Model/runtime downloads begin only now. Real MiniLM embeddings rank both source descriptions against the supplied option descriptions; candidate cosine evidence is visible. AI does not invent vote counts, verify identity, detect duplicate voters or infer missing preferences.
4. Review **both** identities and vote counts for each record. Correct proposals, add multiline follow-up notes, approve or hold. A hold preserves every record but blocks complete-log ranking. Undo restores the previous review; every edit invalidates prior export snapshots. Input changes cancel pending work and clear stale suggestions.
5. Apply reviewed comparisons. Resolve self-comparisons and inspect missing, tied and repeated pairs. Compare the direct-win baseline with strongest-path tiers. No tie is silently broken.
6. Download JSON, CSV or Markdown, or copy the checklist. JSON includes immutable originals, evidence, reviewed records and matrices. CSV includes every comparison and escapes spreadsheet-formula-leading text. Markdown contains the shortlist, matrices and follow-ups. Reimport audit JSON restores **original input only**, requiring fresh inference and approval. No external decision, email or account change is performed.

## Real AI and runtime

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction, normalized mean pooling, 384 dimensions. Model registry revision is not pinned, so future upstream changes may change suggestions; review remains mandatory.
- Runtime: `@huggingface/transformers` (Apache-2.0), `onnxruntime-web` (MIT), WASM CPU, one thread, four texts per batch, at most 256 tokens per text. See package-lock for exact installed versions. No WebGPU or backend required.
- First load: approximately **23 MB model + 27 MB WASM**, plus bundled app/worker/runtime factory. Several hundred MB free memory recommended. Hugging Face (`huggingface.co` with its CDN redirects) supplies only static model files; this same-origin GitHub Pages collection supplies runtime assets.
- Runtime factory is bundled under `public/runtime/`. WASM is byte-identical to the immutable shared `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; preserve that older app. Worker, factory and WASM have explicit Cache API reuse; Transformers.js caches model assets. No runtime JavaScript is fetched from an external CDN.
- Current desktop Chrome on WASM CPU is actually tested. Other browsers, physical phones, low-memory devices and browsers disabling SIMD/module workers are unverified. Such failures give actionable errors, never canned suggestions. Download progress, batch progress, cancellation, errors and 180-second timeout are shown. Run tokens and worker termination guard cancelled/stale results.
- Offline scope: **an already-open warmed page after successful inference can create a fresh worker and run real inference offline**, tested with all network disabled. Offline navigation/reload/app-shell installation is not promised. Storage eviction or denied Cache API requires internet. User documents are not placed in caches.

## Privacy and limits

No keys or paid services. No optional remote inference. Default content stays inside the browser and is not persisted. Only static asset GETs occur in observed production-browser requests; source text is absent from URLs and bodies. Imported text never changes authority or requests credentials. JSON downloads are user-controlled local artifacts. No real personal data is bundled: fixtures are synthetic. The model is not a reasoning/instruction model and can incorrectly match negation or unrelated descriptions.

Source JSON ≤30,000 characters; import file ≤2 MB for full audit envelopes. Project ≤100 characters; 2–6 unique options, ID ≤60, label ≤100, description ≤300. 1–24 unique comparison IDs, both descriptions ≤300, owner ≤150; directional votes integers 0–100,000 with at least one total vote per log. Review notes ≤1,000. All suggestions require review; malformed/nonfinite/incorrectly shaped embeddings are rejected.

## Deterministic analysis and honest comparison

Sum all reviewed directional vote counts into matrix `d`. Self-comparisons block ranking; held logs block complete-log ranking. For distinct options initialize edge `p[i][j] = d[i][j]` only if `d[i][j] > d[j][i]`, otherwise zero. Floyd–Warshall max/min closure computes strongest paths. An option is preferred if its strongest path exceeds the reverse path. Tier 1 contains options without a strictly stronger opponent path; recursively remove each tier. Equal paths remain tied. The direct-win baseline counts strict pairwise wins without considering their margins or indirect paths. Display counts, both matrices, coverage gaps, ties and repeated pair logs; do not infer preferences for missing pairs.

The first synthetic example has a direct 3-cycle: garden beats cycle 8:3, cycle beats library 7:2, library beats garden 6:4 after aggregation. Each has one direct win; strongest paths shortlist garden. These are computed properties of supplied examples, **not measured accuracy, efficiency gains or preference truth**. The second example gives a different two-option result. Comparison counts are vote **observations**, not distinct people. Repeated respondents, unequal group sizes, contradictory evidence, missing comparisons, incomparable questions and duplicate logs can change or invalidate interpretation. This is not a certified election, sample-representativeness guarantee or automatic product decision. Collect missing comparisons and verify provenance before acting.

## Development and deployment

`npm install`, `npm run dev`, `npm run predeploy`. Base `/daily-app2/20261114-4/`. Required per-app deploy scripts exist, but **publish only from repository root** with its combined `deploy/` workflow. Direct per-app deployment replaces the gallery.

Validation scripts and observed outcomes are in [VALIDATION.md](VALIDATION.md). Known limits include tiny synthetic identity fixtures, no external validation of participants, no physical-phone or cross-browser certification, mutable upstream model revision and no offline reload promise.
