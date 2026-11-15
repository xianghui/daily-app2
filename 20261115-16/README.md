# Branch Atlas

A local-AI **ordered help-menu planning desk** for information designers. It reconciles paraphrased usage notes with a supplied topic register, then creates an optimal depth-capped binary branch plan without changing the topic order. No site changes, uploads, analytics, accounts or API keys.

## Use

1. Paste/import source JSON, or try **Library help** and **Garden shop help**. `cards` is the required leaf order, not automatically alphabetical. Supply all topics, observed frequency counts and `maxDepth`.
2. Explicitly click **Load AI & match topics**. Real MiniLM embeddings compare each note to every topic definition. It proposes nearest topic identities; it does **not** infer counts, write labels or certify relevance.
3. Inspect original snippets and cosine-similarity evidence. Correct topic/count; approve or hold every note. Check overlapping notes to avoid double counting. Identity/count edits reset approval. Undo reverses review edits. All edits invalidate applied exports.
4. **Apply reviewed worksheet**. Exact deterministic interval dynamic programming minimizes occurrence-weighted branch depth under a hard maximum depth, preserving every topic, including zero counts. Compare a recursively balanced topic-count tree on the identical reviewed usage frame.
5. Inspect every L/R route and expandable contiguous branch range. Download complete JSON, all-note CSV, all-topic Routes CSV or Markdown; copy the worksheet. JSON reimport restores originals only, never prior approvals.

The handoff is a structural worksheet, **not a deployable menu**. Human designers must write meaningful group labels and test them. A short modeled route does not establish a usable interface.

## Source format / limits

```json
{
  "maxDepth": 3,
  "cards": [
    {"id":"renew","label":"Borrowing renewals","description":"Renew library books and extend their return dates"},
    {"id":"wifi","label":"Wireless internet","description":"Connect a laptop to library WiFi"}
  ],
  "records": [
    {"id":"U1","description":"Keep my checked out books for another week","count":80},
    {"id":"U2","description":"Get my laptop online with the wireless network","count":10}
  ]
}
```

- 2–12 topics, 1–24 notes. IDs unique within each array, 1–40 characters; labels 1–100; descriptions 1–300. Counts integers 0–1,000,000; `maxDepth` integer 1–8. More topics than `2 ** maxDepth` blocks processing.
- Source ≤40,000 characters. `.json` files ≤2 MB, allowing a full exported audit envelope; extracted `originalInput` must independently satisfy source limits. Other file formats unsupported.
- 384-dimensional finite unit embeddings, exact expected vector count and normalization tolerance validated before any proposals. Four texts per inference batch, 256-token cap. At most 36 input texts. Nearest matching is not a relevance threshold or identity guarantee.
- 180-second timeout; worker construction/runtime/network errors are actionable, with no fabricated output. Retry starts a new worker. Cancel terminates it. Run IDs protect late results, late worker downloads and delayed file reads.

## Real AI and static hosting

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled English sentence embeddings. Runtime: Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **WASM CPU** with one thread. No WebGPU requirement; no untested GPU fallback or remote provider.

For collection size efficiency this app reuses immutable same-origin production assets:

- worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` (26,861,777 bytes).

**Preserve both originating apps and exact paths.** Tests trace the actual worker text/vector protocol, bundled factory/WASM paths and public bytes. The shared model loader uses the public model repository revision; this app does not claim a separately pinned model revision.

Before loading, the UI discloses approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker JavaScript. Internet and Hugging Face/CDN access are required initially. Download progress and processed batch counts are displayed; cancellation is available throughout. Model-host GETs download files, not user text. There is no server-only inference or optional provider integration.

Requires WebAssembly SIMD, module workers, and several hundred MB RAM. Cache API enables offline reuse; restricted/private storage may prevent it. Tested in desktop Chrome with GPU disabled, plus desktop/320/390-pixel responsive emulation. Physical phones, other browsers and low-memory performance are **not verified**.

## Privacy and offline scope

Usage descriptions move only to an on-device Web Worker. Imported instruction-like text is data, not a request for credentials or tool authority. No content uploads or local content persistence. No credentials embedded or requested. Exports contain only the user-selected worksheet.

Cache API stores public worker, model, tokenizer, factory and WASM assets, not usage notes. Tested online load → terminate worker → block all network → **fresh-worker real inference in the already-open warmed page**. Offline initial navigation/reload is **not promised**. Cache eviction or private browsing can require redownload.

## Deterministic method / metric interpretation

Each internal branch splits a contiguous topic interval into nonempty left/right ranges. For interval `[i,j)` and remaining depth `h`, the optimum is its total frequency plus the minimum left/right subproblem cost across feasible split points. A single leaf costs zero at that subtree; intervals with more than `2^h` leaves are infeasible. Ties choose the first split. Complexity is bounded by the 12-topic/8-depth caps.

All leaves remain in source order. Binary paths are prefix-free and depth-safe. Weighted steps are `sum(topicCount * leafDepth)`; modeled mean steps divides by approved occurrences, or shows **No usage** for zero total. Baseline recursively halves topic count (not usage weight), retaining the same depth cap. The UI shows computed differences only, not measured time, accuracy or percent improvement. Literal exact-full-ID/label match count is a coverage baseline, not semantic accuracy.

Counts are scenario inputs, not unique users, predictions or measurements made by this app. Holds exclude usage and explicitly mark an incomplete frequency frame. Zero-count topics are retained and identified, not assumed irrelevant. No costs for reading group labels, backtracking, accessibility, unequal click effort or changing user demand are modeled.

## Exports

JSON `schemaVersion:1` preserves every original, ordered review, evidence vector similarities, both trees, all-topic routes, source constraints, holds and comparison metrics. Audit CSV preserves every usage record including holds and multiline review notes. Routes CSV includes every topic with approved count, optimized/baseline path and depth. Markdown contains the full review and route handoff. Exports require the current applied review and are disabled after any edit.

CSV uses CRLF, standard quoted comma/newline escaping and an apostrophe for string cells beginning with spreadsheet formula characters (`= + - @ tab CR`), including multiline text; numeric counts remain numeric. JSON is lossless. Downloaded artifacts were independently parsed using Python's CSV/JSON libraries and current reviewed fields compared. Maximum audit-envelope reimport restores all 24 originals.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Both simple fixtures matched 8/8 supplied topic identities; each modeled 130 weighted steps vs 200 balanced steps. This is a tiny synthetic known-answer result, not general accuracy. Unrelated instruction-like text still got a nearest proposal and required human hold. Maximum batching intentionally uses ambiguous similar definitions and is manually corrected before applying. English descriptions recommended. AI identity review remains essential.

Independent enumeration of all ordered binary tree shapes matched 350 random weighted/capped cases for 2–8 leaves. All-zero cases through 12 topics and every feasible depth cap passed. Full browser checks cover real CPU inference, review/edit/hold/undo, cancellation/retry/races, faults, clipboard/downloads, originals preservation, production paths and offline scope.

## Build and publication

React + Vite; base `/daily-app2/20261115-16/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages dependency retained. **Only publish through root combined-site predeploy/deploy**, not this app's deploy. `PORT=6894 node serve.cjs` serves local production builds; `COMBINED=1 PORT=6895 node serve.cjs` serves assembled root deployment. Run `node arithmetic-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs` and the race/artifact audits. Test-only injected workers exercise errors/races only; successful AI checks always load the real model.
