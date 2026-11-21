# Probe Orchard

A local-AI diagnostic-question planning worksheet for service-desk/workshop coordinators. Rough incoming reports are the input; repeated manual reconciliation against a cause library is the bottleneck. Real neural semantic retrieval proposes a small cause shortlist. Human-reviewed causes feed an **exact minimum-worst-case-cost binary check tree**, exported as a source-linked worksheet. It does not diagnose, repair, send tickets or operate equipment.

## Workflow
1. Paste JSON/import `.json` or select Print desk / Cycle workshop synthetic examples. Define your hypothesis descriptions, binary check signatures, check minute costs and shortlist size. Check signatures in the examples are deliberately synthetic teaching assumptions, not validated repair procedures. The mixed-domain library demonstrates retrieval; remove inapplicable causes and verify the active domain's check definitions.
2. Explicitly select **Load AI & reconcile**. Download progress and actual embedding batches are shown. Cancel terminates the worker; retry starts a fresh one.
3. Inspect each report, AI shortlist and all cosine evidence. Add missing causes, remove unsuitable ones, leave a multiline review note, and approve or hold each report. Undo restores the prior review layer. A shortlist is not exhaustive evidence merely because the model selected it.
4. **Apply reviewed plans** checks all decisions and builds question trees. Identical signatures remain explicitly unresolved. Compare optimized worst-case costs with source check order (redundant checks skipped in both). Any review/input change invalidates the applied snapshot and disables exports.
5. Export lossless JSON, complete audit CSV or branch-checklist Markdown; copy the current worksheet. Reimporting audit JSON restores originals only and requires new AI/review.

## Real AI / model / source / license
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX, normalized mean-pooled **384-dimensional embeddings**.
- Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), **single-thread WASM CPU**. No WebGPU or API key required. No server inference or optional remote provider integration.
- Semantic cosine ranks supplied cause descriptions against each report. Model output drives candidate membership; it does not generate check truth, extract durations, establish completeness, or assign calibrated probabilities. All candidates remain editable. Instruction-like imported text has no authority.
- Approximately **23 MB model/tokenizer + 27 MB CPU runtime**, plus app/worker code, on first use. Internet required initially. Model assets download from Hugging Face/CDN only after explicit loading. The host's `main` revision is unpinned; observed revision is recorded in runtime audit, not promised immutable.
- Reuses byte-verified same-origin assets to stay within the collection size budget: worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve their originating published apps. Hashes and inspected protocol recorded in `runtime-dependency-audit.json`.
- Four texts per inference chunk; maximum 8 hypothesis definitions +16 reports =24 texts /6 chunks. Text limited to 300 characters; actual tokenizer ceiling is **512 tokens**, not the worker's ignored pipeline max_length option. Finite vector count/dimension/unit-norm validation precedes ranking.

## Deterministic method
For each candidate subset S, consider only checks splitting S into two nonempty outcome subsets. Minimize `check cost + max(optimal(no), optimal(yes))` by memoized exact subset dynamic programming. Ties follow source check order. A singleton or set with no discriminating check is a zero-additional-cost terminal leaf; the latter is marked **unresolved**, not falsely diagnosed. At most eight causes and six checks keep this bounded. Both optimized and source-order trees partition the same supplied candidates and preserve indistinguishable groups. No check is repeated on a path because its outcome becomes constant after branching.

Baseline: follow check source order, skipping any check not splitting the current subset. Counts are sums of each approved report's **worst-case planning minutes**, not measured wall time, expected workload, accuracy, or actual saved time. Trees optimize only supplied costs, not risk or usefulness outside the candidate universe.

Assumptions: exactly one cause among the reviewed exhaustive shortlist; reliable deterministic binary checks; costs additive/fixed; no order effects. Concurrent faults, noisy tests, missing causes or test interactions invalidate this model. The AI cannot certify these assumptions or establish test safety. This is a worksheet for appropriate existing procedures, not a safety-critical diagnostic system.

## Formats / bounds / privacy
Source JSON object:
- `title`: 1–120 characters; `shortlist`: integer 2–4.
- `checks`: 1–6 `{id,text,cost}` objects; minutes >0 and ≤1000.
- `hypotheses`: 2–8 `{id,text,outcomes}` objects; one binary 0=no /1=yes per check in source order.
- `reports`: 1–16 `{id,text}` objects.
- IDs unique within each list, letter-first and ≤40 letters/digits/underscore/hyphen. Text 1–300 characters. Paste ≤60,000 characters; source/audit import `.json` ≤2 MB. Review notes ≤2,000 characters.

JSON exports preserve all originals, reviews (including held reports and AI evidence), both trees and computed comparisons. CSV includes every report, current candidate selection, review decision/note and costs/unresolved groups. CSV quotes commas/newlines and prefixes formula-leading text with an apostrophe; JSON is lossless. Genuine numeric costs stay numeric. Markdown supplies source-linked yes/no branch checklists and all reports/holds/notes.

User text remains in browser/worker memory. No content POSTs, analytics, credential use, remote AI or persistent user-content storage. Only static downloads leave the browser; model downloads are not content uploads. Exported files contain the user's selected data and should be handled accordingly. All committed fixtures are synthetic.

## Devices / caching / failure behavior
HTTPS or localhost, module workers, WebAssembly SIMD, Cache API for reusable offline assets and several hundred MB free RAM. Desktop Chrome CPU tested with GPU disabled; physical phones/other engines/low-memory devices untested. Responsive UI tested at 1440,390,320 CSS pixels.

Cache API retains worker source, WASM factory/binary and Transformers.js model files subject to eviction/private-mode restrictions. **Tested offline scope: real inference with a fresh terminated/recreated worker in an already-open warmed production page, all network blocked.** Offline startup/reload is not promised. Internet may be needed again after cache eviction or host revisions.

180-second timeout; cancellation/input changes terminate workers and invalidate run IDs. Late worker/fetch/file-read responses cannot apply stale results. Unsupported devices, runtime/worker/download errors and malformed vectors show actionable errors; no heuristic/canned fallback is used. Empty/invalid/oversized input and incomplete reviews block application. Cancellation during real first download and subsequent inference retry are tested.

## Verification / development / publication
See `VALIDATION.md` and machine-readable reports for observed real model fixtures, independent optimizer oracle, conservation/path checks, artifact round trips, edge/failure injection, privacy, offline and public checks. Successful AI checks use the real model; mocks only test defensive failures. A negation/instruction-like unrelated challenge still receives semantic candidates: human holds remain necessary.

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261121-15/`. Required `predeploy: npm run build` and `deploy: gh-pages -d dist` retained. **Publish only through the repository ROOT combined-site workflow**, never the per-app deploy. Browser scripts use the existing workspace Playwright installation; adjust import paths elsewhere.
