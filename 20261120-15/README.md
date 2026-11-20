# Panel Passage

A local-AI worksheet for workshop/induction coordinators reconciling repeated competency ratings. It answers a specific question: did the **same people** move up/down, or did the respondent panel change?

## Workflow

1. Choose a synthetic example or paste/import source JSON. Define the full participant roster, 2–8 competency descriptions, and rating records with trusted participant ID, before/after wave, and whole 0–4 rubric level. Edit context, scale label and semantic abstention threshold in JSON. Use a consistent rubric at both waves and pseudonymous IDs.
2. Explicitly click **Load AI & reconcile**. Real local MiniLM embeddings retrieve the closest competency by meaning, beyond exact label matching. They do not infer people, waves, scores, competence or causal effects.
3. Inspect source snippets and ranked definition evidence. Correct competency/person/wave/level, add multiline notes, approve or hold every observation. Undo restores the previous review state. Holds retain originals but exclude them from calculations. Duplicate approved competency/person/wave cells block application.
4. Apply the reviewed panel. Inspect per-competency up/down/same counts, 5×5 transition matrix, complete-roster missing-wave follow-ups and paired change beside the all-respondent cross-sectional baseline. No missing value becomes zero; no overall competency score is invented.
5. Download complete JSON, observation CSV, roster-pair CSV or Markdown; copy the worksheet. Edits invalidate exports until reapplication. JSON audit import restores originals only and requires fresh inference/review; it does not silently trust old approvals.

## Real AI, runtime & downloads

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; 384-dimensional normalized mean-pooled neural embeddings, q8 ONNX, CPU WASM. Cosine similarity is not confidence or factual validation.
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). No API key, provider integration or server required. No WebGPU required; CPU is the tested default, not an untested fallback.
- Before first load: approximately **23 MB model + 27 MB WASM**, plus ~0.6 MB worker/factory and app bundle; internet required. Public weight/tokenizer downloads use Hugging Face and its CDN hosts. The shared worker's model `main` is unpinned; observed revision is recorded in `runtime-dependency-audit.json`. A host revision change needs revalidation. Actual tokenizer model ceiling is 512 tokens; the feature pipeline does not enforce its supplied per-call max_length, so text is separately bounded to 300 characters.
- Audited immutable same-origin assets: worker and WASM factory from **20261115-6**, binary from **20261107-2**. Preserve those published apps and exact URLs; SHA-256/byte counts are in the runtime audit. Reusing runtime files does not move inference off-device.
- Explicit Cache API caches worker source, factory, WASM and model files. Tested offline scope: **fresh worker inference in the already-open warmed page** after an online run. Offline navigation/reload/installability is not promised. Storage denial or eviction can require downloads again.
- Secure-context current browser with module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. Tested: desktop Chrome with GPU disabled, plus 320/390 px emulation. Physical phones, Safari/Firefox and every low-memory device are unverified. Network/runtime errors give retry guidance; no fake responses or heuristic fallback. Cancel terminates workers; run IDs reject late results/imports/fetches; 180-second timeout.

## Privacy & authority

Content and reviews stay in browser memory; no analytics, uploads, external actions or shared credentials. Model downloads are GET requests for public files, not uploads of supplied data. Clipboard and downloads occur only on explicit action. Inputs are treated as data and never run as instructions or tools. Browser memory/cache behavior depends on the browser; app documents are not persisted by the app. All committed fixtures are synthetic. No email, enrollment, grading-system change or participant contact is performed.

## Inputs, schema & limits

Source JSON ≤60,000 characters; import source/audit `.json` ≤2 MB; context/unit/descriptions 1–300 characters; 1–24 unique participants; 2–8 unique competencies (`first` array); 1–96 unique observation IDs. ASCII IDs 1–40 characters (`A-Z a-z 0-9 _ -`). `minSimilarity` is 0–1. Each record needs `id,text,person,wave,value`. Person must be registered; wave is `before` or `after`; value is integer 0–4. Four texts per actual model batch, at most 104 texts / 26 batches. Model vectors must have the correct count, dimension, finite components and normalized length before ranking. Imported malformed/empty/oversized/unsupported input is blocked.

## Deterministic methods & limitations

For every registered competency × participant, pair the approved before/after observations only; missing and held observations are never imputed. `up/down/same` uses ordered comparisons. Mean change uses the mean of within-person differences and assumes meaningful equal intervals; ordinal-only scales should use direction counts instead. Cross-sectional baseline is the mean of all approved after ratings minus the mean of all approved before ratings, even when respondents differ. Both are unavailable if their required observations are missing. The gap is descriptive, **not a validated bias correction**, treatment effect, uncertainty interval or significance test. Complete-roster audit is structural, not evidence that all eligible people were registered. Selection/attrition, holds, rubric changes and miscoded identities can still mislead. AI nearest meaning can be wrong on negation, ambiguous identifiers or unrelated text; mandatory human review is essential.

## Outputs

JSON schema `panel-passage/v1` retains every original, all reviews/proposals/evidence, full competency×person roster, missing values as null, transition matrices, denominators and warnings. Observation CSV keeps original and edited fields, all held records and notes. Pair CSV keeps every registered cell and source IDs; blank is missing, numeric zero is retained. Markdown includes all originals, reviewed fields, comparisons and missing evidence. Quoted CSV uses CRLF, proper escaping and formula-prefix protection on strings; notes remain exact in JSON (CSV adds a leading apostrophe when necessary). No destructive transformations occur.

## Validation & deployment

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual outcomes, including real model inference, independent panel oracles, downloaded-artifact parsing, cancellation/races/network faults, offline scope and layouts. Fixtures are tiny synthetic quality probes, not population accuracy estimates.

React + Vite; base `/daily-app2/20261120-15/`. `npm run predeploy` builds this app. Required per-app deploy scripts are retained, but **publish only via the root combined-site workflow**, never this app's deploy command. The original `/Volumes/ExternalHD/daily_app` collection is read-only and untouched.
