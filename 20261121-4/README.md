# Facet Ledger

Local-AI multi-topic feedback coding for researchers and customer-insight teams. React + Vite, `/daily-app2/20261121-4/`, 2026-11-21.

## Workflow and distinct objective

Single-label triage loses secondary issues in a comment. Supply a small codebook and comments split into one concern per segment; local neural embeddings suggest one topic per segment, then combine the winners into multiple labels per comment. Inspect scores and source wording, correct any labels, approve or hold every comment, and apply a reviewed topic/co-occurrence worksheet. Download JSON, Audit CSV, Summary CSV or Markdown; copy Markdown when clipboard permission permits. An edit disables exports until reapplication. Undo restores review edits. Original text is never overwritten. An entirely held batch can also export its complete audit with zero counts. Holds remain in full audits but do not contribute to counts; approving an empty set explicitly marks it uncoded.

Both galleries were parsed before choosing the workflow. Signal Fold groups comments into themes; Cohort Current compares periods; Concordance Bench compares coders. This app instead supports **multiple topic assignments within each segmented comment**, preserving co-occurrence and source IDs. It does not classify sentiment, send messages or route tickets externally.

## Real AI, model, license and downloads

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Approximately **23 MB model/tokenizer** downloaded from Hugging Face/CDN. Model `main` is unpinned; the revision observed during this run is recorded in `runtime-dependency-audit.json`.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web WASM CPU, MIT. No WebGPU or API key required. About **27 MB WASM**, plus bundled worker/factory and application code. No mandatory paid service, backend or optional provider integration.
- Reuses byte-audited immutable same-origin assets: worker `20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating app builds in collection deployments. SHA-256/byte sizes are recorded in the runtime audit and checked on assembled and public deployments.
- The worker runs actual neural feature extraction in chunks of four texts. Maximum 104 texts per run (8 topics + 24 comments × 4 segments), each ≤300 characters. The pipeline's per-call `max_length` is ignored by this runtime; the verified tokenizer ceiling is **512 tokens**. Every returned vector must have 384 finite numeric components and a normalized magnitude within tolerance.
- Neural inference retrieves semantic meanings rather than relying on literal word matching. Deterministic steps: cosine ranking, minimum-cosine floor, union of segment winners, human review, counts, pair enumeration, schema checks and exports. Cosine is not confidence or calibrated probability. No canned responses or deterministic AI fallback exists.

## Privacy, runtime and caching

User content stays inside the page and its local worker. Network requests download app/runtime/model files; **they do not upload the comments**. There is no analytics, credential input, remote AI integration or persistent document storage. Imported text is data and cannot invoke tools or request credentials. Only synthetic examples and test artifacts are committed. Cached runtime/model assets do not contain user comments.

Before loading, UI states download sizes, internet requirements and limitations. Loading shows actual model progress and processed-text counts. Cancel terminates the worker; run IDs prevent stale model responses, source fetches and file reads from replacing newer state. Network failures, unavailable runtime, malformed vectors and a 180-second timeout show retry guidance and no fake labels.

Requires a modern secure-context browser with module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Tested in desktop Chrome with GPU disabled; widths 1440, 390 and 320 CSS pixels. Physical phones, other browser engines and low-memory devices were **not** tested.

Cache API stores worker source, WASM factory/binary and model files. Actual inference was tested with **a fresh worker in an already-open warmed page, all network disabled**. Offline first visit, page navigation/reload and app-shell startup are not promised; there is no app-shell service worker. Private browsing or cache eviction can require reconnection. No model-host request occurs before explicit loading.

## Input contract

Paste JSON or import `.json` source/audit files under 2 MB. Audit import restores `originalInput` only, deliberately discarding old suggestions/approvals.

- Source JSON: 1–40,000 characters.
- `context`: nonempty string ≤300 characters.
- `minimumSimilarity`: finite number 0–1; default 0.3. This is a user-set similarity floor, not measured accuracy.
- `topics`: 2–8 unique `{id, description}` entries.
- `records`: 1–24 unique `{id, segments}` entries, each with 1–4 nonempty text segments.
- Descriptions/segments: ≤300 characters each. IDs: letter-first, letters/digits/underscore/hyphen, ≤40 characters.
- Review notes: multiline, ≤1000 characters. Review labels must be unique members of the supplied codebook; unknown labels and unresolved decisions block application.

All source segments are preserved; no automatic splitting, truncation or summarization. Break multi-concern comments into segments yourself. One nearest topic is proposed per segment above the floor, so a segment with multiple issues can still lose issues. Human reviewers can add any missing topic or remove all suggestions.

## Counts, baseline and output formats

Each approved comment contributes at most once per topic and once per unordered topic pair, irrespective of repeated segments. Topic counts can sum above the approved comment count. Co-occurrence is descriptive, not causal or representative of a population. Every count includes exact contributing source IDs. Holds are excluded; approved empty label sets contribute only to the uncoded count.

Baseline: keep only the highest-scoring successful segment winner for each approved comment, using unchanged neural evidence. Reviewed assignments may be more or fewer; the UI labels both as **assignment counts**, never accuracy/time saved. This baseline does not assert what a real human single-label workflow would do.

- **JSON**: `facet-ledger/v1`, complete originals, review labels/decisions/notes, per-segment ranked scores, baseline, topic/pair counts and source IDs.
- **Audit CSV**: one row per original comment, original segments JSON, reviewed topic IDs JSON, decision, multiline note and single-label baseline.
- **Summary CSV**: topic rows and unordered pair rows, counts, baseline topic counts and source IDs JSON. Zero-count pairs remain explicit.
- **Markdown**: reviewed topic/pair worksheet plus complete source/review text and holds.

CSV properly quotes commas, quotes and newlines. String cells beginning with spreadsheet formula characters are prefixed with an apostrophe. Downloads/copy use only the currently applied review. JSON audit reimport is the lossless source round-trip path; CSV/Markdown reimport is not supported.

## Limitations and observed checks

Two synthetic domains produced the expected ten segment winners and five multi-topic assignments per three comments, versus three single-label assignments. This tiny known-answer check is not a general accuracy estimate. A negative statement about noise still matches the noise topic: topical similarity is not sentiment or entailment. Sarcasm, unfamiliar language, overlapping topics and combined issues can mislead. A floor of 1 left all tested comments uncoded, without forced labels.

See [VALIDATION.md](VALIDATION.md) and JSON reports for actual checks. `browser-test.cjs` exercises real CPU inference, semantic input changes, max 104-text batching, offline fresh workers, review/hold/undo, clipboard/downloads, reimport and responsive controls. Defensive tests explicitly inject errors **only for failure handling**, never for successful inference. `artifact-test.py` independently parses actual downloaded files. `core-test.mjs` tests deterministic schemas/count conservation and is not presented as AI validation.

## Build and publish

`npm run predeploy` → production build. Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed. **Publish from collection root only**, never run this app's deploy: root predeploy assembles the gallery and all app builds, root deploy publishes that combined directory. Public runtime hashes and actual public model inference must be checked after Pages finishes building the matching gh-pages commit. Unrelated pre-existing working-tree changes are preserved.
