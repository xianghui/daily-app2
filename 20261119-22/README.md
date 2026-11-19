# Thread Atelier

A local-AI agenda workbench for facilitators with unordered workshop activity cards. Neural embeddings expose topical links that exact-name sorting cannot; a constrained sequencer proposes a complete activity order. Humans must review it before a timed agenda is applied/exported. Unlike Chapter Cut (contiguous chapter boundaries), Packet Seam (insertion into fixed reading packets) or setup-family job scheduling, this app reorders a complete arbitrary card set using neural adjacent-link scores, pinned endpoints and explicit prerequisites.

## Workflow / formats

1. Choose a synthetic example or paste/import JSON with `context`, `cards:[{id,text,minutes}]`, `start`, `end`, and `before:[[earlierID,laterID]]`.
2. Set duration and prerequisites in source. Click **Load AI & sequence cards**. No model-host downloads occur beforehand.
3. Inspect each card's suggested integer position and closest topical neighbors. Edit positions, add multiline facilitation notes, individually approve or hold. Undo restores review edits. To change card text/durations/constraints, edit source and rerun AI; source originals are never overwritten by recommendations.
4. **Apply reviewed agenda**. Every position must be unique, all cards approved, opener/closer pinned and prerequisites satisfied. Holds/violations produce an audit with no agenda; pending/invalid reviews fail validation. No silent card deletion.
5. Download complete JSON, all-card CSV or Markdown agenda; copy Markdown. All exports use the current applied snapshot. Review edits disable exports until reapplied. JSON audit reimport restores originals and renews inference/approvals, not saved approvals. CSV protects formula-leading text with an apostrophe, including multiline content; JSON is lossless.

## AI / downloads / dependencies

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX. Real normalized mean-pooled 384-dimensional neural embeddings for every activity. Cosine similarity compares meanings, not keyword equality or confidence.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU. No WebGPU, server, API key or optional provider integration.
- About **23 MB model + 27 MB runtime** plus worker/app code. First use needs internet; weights download from Hugging Face and redirected CDN. Upstream main revision is not pinned; changes/cache eviction may change results or download needs.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Keep both originating apps/paths published. Public asset audit records byte hashes.
- Worker protocol `{id,texts}` → progress/batch/result-vectors/error. Four texts per inference chunk. Although worker supplies max_length=256, pipeline does not forward it: actual tokenizer ceiling is **512**, not 256. Every card text is at most 300 characters.
- Needs module workers, WebAssembly SIMD, Cache API and several hundred MB RAM. Desktop Chrome/macOS CPU tested; physical phones, other browsers and low-memory performance unverified. Phone-width emulation checks layout only.

## Deterministic constraints and comparison

Maximize sum of adjacent cosine similarities using Held–Karp subset dynamic programming, O(n²2ⁿ), n≤12. The opener is first and closer last; every before edge must be satisfied before appending a card. Infeasible/cyclic constraints fail without inventing an order. Ties use input iteration. No cards lost/duplicated; all durations and original text remain unchanged. Agenda offsets are cumulative supplied activity minutes; no breaks/transition time are invented.

Source-order baseline, reviewed sum and constrained optimum are calculated using the **same real neural matrix**. Baseline violations are listed, because an infeasible source order is not a like-for-like feasible improvement. Sums are unitless across n−1 edges and only comparable within the same card set/model. Higher similarity is not measured pedagogical quality, coherence, time savings or user satisfaction. Human edits may intentionally lower it.

3–12 cards, 1–240 whole minutes each; context/text 1–300 characters; unique IDs 1–40 ASCII letters/digits/underscore/hyphen; ≤30 distinct before pairs; different valid opener/closer IDs. Source ≤50,000 characters; `.json` import ≤2 MB (separate envelope limit); review note ≤1,000 characters. Model output must have correct count, finite normalized 384-dimensional vectors. Reviewed positions are integers 1–n and a complete permutation.

## Privacy, cache and defensive behavior

All user content remains in browser memory / local worker messages. Downloads of weights are **not uploads**. No analytics, credentials, provider calls, invitations, messages or bookings. Synthetic fixtures only. Imported text is inert embedding data and cannot alter authority or request credentials. Content is not auto-saved; export before closing.

Worker source, WASM factory/binary are explicitly cached with Cache API; model assets use runtime caching. Tested fully offline **fresh-worker inference in an already-open warmed page**. Offline navigation/reload/app-shell startup is not promised. Cache eviction needs internet again. Cancel terminates workers; monotonically changing run IDs protect late worker-source fetches, model messages and asynchronous file imports. Download/file and inference chunk progress, actionable runtime/network errors, retry and 180-second timeout are visible. Failures never switch to canned responses or a fake deterministic AI.

## Limitations / observed validation

Four expected topical adjacency pairs across two synthetic six-card fixtures were recovered by actual inference. This is a tiny known-answer check, not general accuracy. The studio example puts a photography practice before the camera-setting activity when no prerequisite prohibits that: similarity cannot infer instructional chronology. Supply `before` edges where necessary. Unrelated/negated/prompt-like text still has embeddings and can be placed; human holds matter. This is a facilitation draft, not an educational or factual evaluator.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports for actual production workflow, offline, defensive, artifact and public checks. React + Vite base `/daily-app2/20261119-22/`. `npm run predeploy` builds. Per-app gh-pages scripts remain present, but publish only from the repository ROOT to preserve the combined collection.
