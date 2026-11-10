# Rotation Ledger

A no-key, static-hosted planner for volunteer coordinators who repeatedly allocate community duties. AI reconciles informal past-shift notes with the current duty catalog; mandatory human review makes those identities usable as recent-duty cooldown constraints. Exact search assigns the next round without repeating recent duties, violating supplied eligibility, or assigning two new duties to one person. It minimizes maximum cumulative minutes, then sum of squared cumulative minutes. It never contacts volunteers or changes accounts.

## Workflow

1. Start with **Community kitchen** or **Reading room**, or paste/import JSON. Supply people, duty descriptions, estimated next-duty minutes, eligible person IDs, cooldown and a complete common historical window. Every historical record has a note, person, round and actual minutes.
2. Read first-download/privacy/device information. Explicitly press **Load AI & reconcile history**. Loading and per-file/per-batch progress are shown; Cancel terminates inference. Network/device errors show actionable messages with retry, never canned output.
3. Verify duty identity against source snippets and ranked similarity evidence. Correct person/round/minutes, add notes, approve or hold every record. All modifications retain originals; Undo reverses review edits. Semantic similarity is not confidence. Mixed duties must be split into separate source records by you.
4. Confirm the history window, eligibility and estimates. **Apply reviewed rotation** respects all rules. Held history, unconfirmed assumptions or impossible constraints block a complete rotation. Review rules in the input and rerun if infeasible; the planner never silently relaxes them.
5. Download current JSON, CSV or Markdown, or copy Markdown. Any review or assumption change invalidates the applied snapshot and disables exports until reapplied. Export before closing: input/reviews are held in memory, not persisted.

## Real AI and deterministic processing

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX. The model host's default revision is used, so future hosted updates are not pinned by this application.
- Runtime: `@huggingface/transformers` **4.3.2** (package lock records dependencies), ONNX Runtime Web WASM CPU, single thread. No WebGPU or API key. Browser worker runs real normalized mean-pooled 384-dimensional embeddings and cosine ranking against supplied duty descriptions. No text generation, tool calls or authority is delegated to imported text.
- First load: approximately **23 MB** model/tokenizer files from `huggingface.co` with `hf.co`/`us.aws.cdn.hf.co` redirects, plus **27 MB** same-origin WASM/runtime. Internet required. Browser may use additional working memory; no phone-memory guarantee. Local code, worker and module factory are bundled. The byte-identical WASM is shared with `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; root collection deployment must preserve this older asset.
- Runtime validation rejects wrong vector counts/dimensions, non-finite numbers or non-normalized vectors. Four texts per inference batch, bounded first 256 tokens. Notes/descriptions are ≤400 characters; longer contextual information is not modeled.
- After your approval, cooldowns, eligible-person checks, assignment enumeration, objective arithmetic, comparison metrics and exports are deterministic. Historical duty identities materially determine which next-round assignments are legal. Minutes, identity of people, round numbers, eligibility and availability are user supplied, not AI inferred.

## Privacy, caching and devices

Default user content is never uploaded. Network requests download code/model files via GET; no remote inference integration, telemetry, shared credentials or external actions. Import text cannot execute instructions or request credentials. Synthetic fixtures only.

Current desktop Chrome with WebAssembly SIMD, module workers, Cache API and sufficient memory is the tested environment. CPU/WASM is the default, not an untested GPU fallback. Physical phones, Firefox, Safari and Edge have not been verified. A missing worker/WASM requirement gives an actionable error rather than fake results. Loading/inference times out after 180 seconds. Run tokens plus worker termination prevent late imports/downloads/results from overwriting newer input; retry starts a fresh worker.

Transformers.js caches model files; this app explicitly caches its worker, runtime factory and WASM via Cache API. **Tested offline scope: fresh-worker inference in an already-open successfully cached page with all network disabled.** Offline reload, navigation and first launch are not promised. Caches can be evicted/disabled; an unavailable model then produces an error. No user content is placed in these asset caches. Review data disappears on reload.

## Input, limits and assumptions

JSON only. Use the examples as schema documentation. Required fields:

- `name` (≤100 characters), `cooldown` integer 0–4 rounds.
- `people`: 2–8 unique `{id,name}` objects.
- `duties`: 2–8 unique `{id,title,description,minutes,eligible}` objects, no more duties than people; nonempty unique eligible person IDs.
- `history`: 1–32 unique `{id,text,person,round,minutes}` objects; round 1–52, minutes integers 1–10000. Multiple entries for a person/round add actual minutes.
- IDs: 1–30 letters, digits, underscore or hyphen; descriptions/notes ≤400 characters. Original input ≤40 KB. Audit import ≤1 MB restores only `originalInput`, never approvals or asserted AI results. CSV/PDF/XLSX input unsupported.

Next round = maximum reviewed historical round + 1. Cooldown 1 forbids a person doing the same duty as in the immediately preceding round; 0 disables it. Missing records count as zero historical workload; use a complete, comparable window for everyone. Estimated next-duty time adds to actual historical time. Availability must be represented in eligibility; no dates, partial duties, concurrent shifts, multi-duty assignment, preferences, pay, severity or medical/accommodation decisions are modeled. This is a bounded planning aid, not a guarantee of interpersonal fairness.

## Outputs and comparison

- JSON: original input, every original/reviewed/proposed history record, reasons, decisions, constraints, baseline, assignments and per-person workload. Round-trip imports restore originals and require fresh AI/review.
- CSV: all historical records with original and reviewed fields, followed by each next-duty assignment. Quoting preserves commas/newlines; formula-like text cells are apostrophe escaped. Numeric fields remain numeric.
- Markdown: copyable next-round handoff plus cumulative workload and full history audit; text is escaped, not interpreted as HTML.

The literal duty-title hit count is only a transparent exact-substring input baseline, not an accuracy estimate. Planning compares maximum cumulative minutes for the **first feasible input-order assignment** against exact optimum under identical hard rules. All people, including those unassigned next round, count in that objective. Secondary squared-load minimization breaks ties; remaining ties keep input order. Search explores at most 109,601 nodes for eight people/duties. Maximum load can stay unchanged: no improvements are fabricated. Future-duty minutes are estimates, not measured time saved.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md), machine-readable reports and reproducible scripts. Both tiny known-answer fixtures matched 8/8 intended duty links in real production-browser CPU inference. This does not establish general accuracy: the negated kitchen challenge selected the wrong duty, and an unrelated instruction-like note still selected a nearest duty. Hold either rather than trusting similarity. There is no automatic rejection threshold or support for unknown duty types.

Independent exhaustive permutation tests covered 900 generated problems plus maximum bounds, arithmetic/conservation and guards. Real browser tests include two inputs, 32-record batching, 40-text maximum/8-duty planning, reviewed cooldown changes, undo/holds, actual downloaded/parsed artifacts, clipboard, offline fresh-worker inference, cancellation/stale protection, download/network errors/recovery, malformed model output, missing runtime and timeout. Defensive fault injection is restricted to failure checks; successful AI paths use the actual model. Desktop/320/390px overflow and interactions were checked; physical devices and screen-reader audit were not.

## Development / collection publishing

```sh
npm install
npm run dev
npm run predeploy
node core-test.mjs
python3 serve.py
# In another terminal, from this directory:
node browser-test.cjs
node boundary-test.cjs
node defensive-test.cjs
node stale-import-test.cjs
python3 artifact-test.py
python3 asset-test.py
```

Browser scripts use the workstation's installed Playwright and Chrome; `serve.py` serves production `dist` with real `/daily-app2/20261110-22/` paths and preserved shared WASM. `TEST_URL` can target the assembled/public app. Per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, with gh-pages installed as required. **Do not run per-app deploy:** publish combined collection from root using its existing predeploy/deploy workflow. See root README for Pages commit verification. Publication state is tracked separately in `publication-status.json`.
