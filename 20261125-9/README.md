# Mentor Grove

A local-first mentoring cohort planner for coordinators: turn learners’ goals/backgrounds and mentors’ offers/ideal-learner descriptions into **two independently generated, human-reviewed preference lists**, then export a capacity-safe, stable introduction worksheet. Nothing is sent or booked.

This differs from the collection’s expertise-score assignment and peer-pairing utilities: it models both parties’ strict preferences, incomplete mutual acceptability and mentor capacities. Its objective is **absence of blocking pairs**, not maximum total similarity. See `gallery-duplicate-audit.json` for the inspected gallery and nearest comparisons.

## Workflow

1. Paste/import cohort JSON or choose a synthetic community/technical example.
2. Edit goals, background, offers, ideal learner descriptions and capacities. Explicitly click **Load AI & rank fit** to download/run the real model.
3. Review both sides. Lists are JSON arrays of exact IDs, highest preference first. Reorder them, remove unsuitable IDs, annotate, approve or hold each person. A pair is acceptable only when both approved parties list each other. Approval is a coordinator’s scenario decision, **not the participants’ consent**.
4. Apply reviewed matching. Learners propose in preference order; mentors retain up to capacity according to their reviewed ranks. Inspect a full proposal trace and baseline blocking-pair witnesses. Held/unmatched people remain in the audit.
5. Download JSON, CSV or Markdown, or copy the worksheet. Any edit invalidates the applied snapshot and disables exports. Undo restores the previous review state but also requires applying again. Importing an audit restores originals only, never old approvals.

## Actual AI and deterministic boundary

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, roughly 23 MB weights; [upstream model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2).
- Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU**. No WebGPU required. Roughly 27 MB WASM plus worker, factory and tokenizer assets. First run downloads about 50 MB plus overhead and requires internet.
- Actual normalized mean-pooled 384-dimensional embeddings compare learner goals with mentor offers. Separately, mentor ideal-learner descriptions are compared with learner backgrounds. Four-text inference chunks; the model tokenizer enforces a 512-token cap (the pipeline's requested max_length 256 is not treated as a guaranteed cap). Input descriptions are additionally bounded to 200 JS characters. Vectors are checked for exact count/dimension, finite values and near-unit norm before ranking.
- Similarity is **not confidence**, suitability, identity, fairness, consent or measured program success. The English-oriented model can misrank negation, nuanced profiles or unrelated goals. Complete initial rankings can include unsuitable choices; remove them or hold the person before applying. No fake AI or deterministic demo fallback.
- All subsequent steps are deterministic: mutual-list filtering, strict ordered preference validation, learner-proposing capacity-aware deferred acceptance, independent blocking-pair check, record conservation and exports. ID order breaks exact AI-score ties; humans can reorder.
- Stability applies only to the supplied fixed capacities and strict reviewed mutual lists. No learner–mentor pair can both prefer a deviation (including a mutually acceptable empty seat). Learner-proposing gives the learner-optimal stable allocation under these assumptions; it is not a maximum-score, maximum-filled-seat or fairness optimizer. No real invitations or enrollment changes.

## Static hosting and shared assets

React + Vite; base `/daily-app2/20261125-9/`. No server inference, API integration, paid service or credentials.

Immutable same-origin runtime dependencies must remain published:

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

`runtime-provenance.json` records exact bytes and SHA-256. The imported worker uses the documented text/vector protocol, model/dtype/mean pooling and CPU settings. App code is bundled locally. Model/tokenizer downloads use Hugging Face and its CDN redirects; no user content is uploaded. No analytics, external fonts, optional providers or API keys. Only static GET asset requests are needed. Signed CDN query values are omitted from committed network reports.

Current desktop Chrome with WebAssembly SIMD, module workers, secure context, Cache API and several hundred MB available RAM is the tested runtime. Physical phones and other engines are untested; viewport tests are not physical-device inference tests. Use current desktop Chrome if loading fails. CPU mode remains usable without WebGPU.

Worker source, WASM factory/binary and model files cache locally when browser storage permits. Cache is subject to browser eviction. **Tested offline scope: fresh-worker inference within an already-open, fully warmed page only.** Cold offline navigation/reload and PWA installation are not supported or claimed. Data/reviews stay in memory until export. Cancelling terminates the worker; changed source, late reads and worker callbacks cannot replace a newer run. Downloads/inference have progress, cancellation, visible network/device errors, retry and a 180-second timeout.

## Input schema and limits

Source JSON has exactly `mentors` and `learners`; unknown source fields are rejected, not silently dropped.

```json
{"mentors":[
  {"id":"web","offer":"Accessible HTML and CSS","ideal":"First-time web developers","capacity":1},
  {"id":"sql","offer":"Relational query tuning","ideal":"Experienced database engineers","capacity":2}
],"learners":[
  {"id":"L01","goal":"Build my first accessible webpage","background":"New to HTML and CSS"}
]}
```

- 2–8 mentors; 1–24 learners. Unique IDs within each side, 1–60 characters.
- Every offer, ideal, goal and background: 1–200 characters; mentor capacities: integers 1–3.
- Original source: ≤50,000 UTF-16 units. `.json` source/audit imports: ≤1,000,000 bytes, with original source limits reapplied. Unsupported formats, malformed/oversized input and invalid reviews fail visibly.
- Review notes: ≤500 characters. Preference arrays must have known, distinct IDs. Empty lists are allowed and leave no mutually acceptable matches.
- Descriptions are data, never executable instructions. The model has no tools or authority to ask for credentials.

## Output and comparisons

- **JSON** (`mentor-grove/v1`): every original record, both review lists, source-linked similarity evidence, mutual lists, all learners including held/unmatched, allocation, proposal trace, baseline witnesses and computed checks. Canonical originals round-trip through JSON import; approvals deliberately do not.
- **CSV**: every learner’s ID, goal/background, status, assigned mentor, reviewed rank and note. Standards-compliant quoting preserves commas, quotes and line breaks. Formula-like text receives a leading apostrophe; JSON retains exact original strings. No spreadsheet formulas are evaluated.
- **Markdown/copy**: complete introduction worksheet and blocking witnesses, with JSON-style quoted values and escaped line breaks. The app does not render this Markdown export.
- Comparison uses exactly the same reviewed mutual preferences and capacities: baseline learners, in input order, take the first available acceptable mentor. Reported counts are computed blocking pairs, not invented productivity/accuracy percentages. If both plans have zero blocking pairs, no improvement is claimed. Capacity and record counts are computed, not estimates.

## Development and publication

```sh
npm install
npm run predeploy
```

Per-app scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`, but **publish only from collection root** with its combined `deploy/` workflow. An individual app deploy would replace the gallery. See root README.

## Validation and known limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable browser, defensive, independent, export and public verification reports. Two tiny fixtures are not general accuracy estimates. Real participant data, outreach, mentor quality, real-world preferences, eligibility, protected traits, fairness, consent and eventual outcomes are not inferred. Run a coordinator review and seek participant agreement separately before acting on the worksheet.
