# Sort Canopy

A local-AI card-sort reconciliation and flat navigation-draft utility for UX researchers. An inconsistent export may call the same card “forgot login” and “reset credentials.” MiniLM retrieves a canonical card identity for each observation; humans verify every mapping and participant/pile. The deterministic solver then finds a fixed-count grouping with maximum agreement with actual participant sorts, not embedding similarity.

## Workflow

1. Choose **Shop cards** or **Library cards**, or paste/import synthetic/source JSON with `context`, `groups`, `cards:[{id,description}]` and `logs:[{id,participant,pile,cardText}]`.
2. Set the requested number of nonempty groups in the source JSON. Each participant must sort every canonical card exactly once. Pile IDs only have meaning within a participant; identical pile letters across different participants do not link sessions.
3. Explicitly **Load AI & reconcile inputs**. Review original notes, candidate descriptions and cosine evidence (not confidence). Edit card, participant, pile or multiline follow-up; individually approve or hold each row. Undo reverses review edits. Input changes cancel/invalidate older runs.
4. **Apply reviewed plan**. Pending reviews fail validation; holds, missing cards and duplicated cards block synthesis. No incomplete session or held row is silently excluded. Altered review fields disable all exports until reapplied.
5. Inspect the navigation draft, complete co-sorting pair counts and source-order baseline. Download complete audit **JSON**, spreadsheet-protected **CSV**, **Markdown**, or ready-only **Navigation JSON**. Copy the current reviewed worksheet. All artifacts reflect the applied review snapshot. Import an audit to restore originals; AI and human approvals must be renewed, not trusted from an imported file. Group IDs are intentionally generic; rename them in the exported draft and test with users.

## Real AI, runtime and licensing

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX feature extraction, mean pooling, normalized 384-dimensional vectors.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web CPU/WASM (MIT). Four-text inference batches; malformed/nonfinite/wrong-dimensional/non-normalized results fail closed.
- Real no-key default; no server inference, no remote-provider integration, no shared credentials. WebGPU is not needed. Requires module workers, WebAssembly SIMD, Cache API and several hundred MB of RAM. Desktop Chrome on macOS CPU tested; physical phones, Firefox/Safari/Edge are unverified. Responsive phone-width emulation is not a physical-device performance claim.
- Approximately **23 MB model plus 27 MB CPU runtime** on initial load, plus app/worker code. Internet is required before files are cached. Hosts: same-origin collection runtime plus Hugging Face and its documented redirected CDN hosts. The model uses upstream default revision; it is not pinned. Cache eviction/upstream changes can require a new download and may change suggestions. No universal classification accuracy is claimed.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, module factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those originating apps/paths. The shared worker protocol is `{id,texts}` → progress/batch/result-vectors/error. Its dependencies and exact served hashes are audited.
- The pipeline tokenizes with truncation and the model tokenizer ceiling **512**. The originating worker supplies max_length=256, but this pipeline does not forward that option, so **256 is not claimed as the enforced limit**. Text lengths are bounded to 300 characters.

## Privacy, loading, cache and offline behavior

Nothing loads from the model host until the explicit AI button. User content stays in browser memory and worker messages; weights download **to** the browser, not notes **to** a server. No analytics, account access, emails, remote changes or participant outreach. Imported instructions cannot request tools or credentials; they are embedded as inert data. Samples/committed artifacts are synthetic only.

Visible loading/download and chunk status, cancel, retry and a 180-second timeout are provided. Worker construction, WASM, network, malformed envelope and vector failures show actionable errors; there is no fake-AI or deterministic sample-output fallback. Cancellation terminates workers and monotonically invalidates asynchronous fetch/import/run identities.

Worker source and CPU module/binary are explicitly Cache-API cached; the model uses runtime browser cache. Fresh-worker real inference passed with **all network blocked in an already-open warmed page**. Offline reload/navigation/app-shell startup is not promised. Notes/reviews are not persisted automatically; download an audit before closing. Browser cache clearing removes downloaded runtime/model files.

## Bounds and algorithm

2–8 canonical cards; 2–24 observations; at most 12 input participant IDs; 1–card-count requested groups. IDs: 1–40 ASCII letters/digits/underscore/hyphen. Descriptions/context: 1–300 characters. Review notes: ≤1,000. Source: ≤50,000 characters; JSON import envelope: ≤2 MB. Up to 32 texts in four-text model chunks. Complete-session constraints may reduce the practically possible participant count for larger decks. Source is retained without destructive edits.

For every unordered canonical card pair, count participants who placed it together/apart. A candidate partition gains one point for each participant–pair judgment that agrees with its together/apart decision. Enumerate all unlabeled nonempty partitions via restricted-growth labels and choose maximum score for exactly `groups` groups. Deterministic ties choose the first canonical-order partition. At eight cards/three groups, 966 partitions are evaluated. All canonical cards appear once and only once. The source-order baseline groups consecutive cards into nearly even groups using `floor(index*k/n)`. The comparison displays raw agreement counts and their computed difference, not invented confidence, elapsed time, accuracy or independent usability gain.

## Limitations

Nearest semantic matches can be wrong, including irrelevant or negated notes; human review is mandatory. Similarity does not identify a person or validate a session. Participants and pairs receive equal weight. Binary same/different judgments are not statistically independent. Exactly-k optimization can overfit small samples; no confidence intervals, hierarchy, representative population claim or usability certification. Multiple optimal partitions may exist. Group labels require editorial naming. This is a reviewed worksheet, not a deployed menu or a remote card-sort service.

## Validation and development

See [VALIDATION.md](VALIDATION.md) for actual outcomes and artifacts. `npm run predeploy` builds the React + Vite production app; per-app deploy scripts remain required but **do not publish the app in isolation**. Collection publishing is root `npm run predeploy`, then root `npm run deploy`; source main is committed/pushed separately. Vite base is `/daily-app2/20261119-19/`. Browser tests use installed Playwright/Chrome on the builder machine and real default inference; fault injection is limited to failure/race tests. No mocks establish successful AI checks.
