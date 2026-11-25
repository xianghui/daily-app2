# Reply Canopy

An editorial worksheet for reconstructing fragmented email handoffs. Input short excerpts with verified UTC timestamps; local AI retrieves related earlier messages despite subject drift. Review/edit every parent, make a root or hold, apply a chronology-safe thread forest, export usable JSON/CSV/Markdown. No inbox access, remote actions, sending or uploads.

## Distinct workflow

Checked the full current AI gallery name/description list (`gallery-audit.json`) and the original read-only gallery. Unlike topic clustering or stable participant matching, this utility builds a directed, chronological parent forest from message excerpts, with explicit roots/holds and a same-subject baseline. It does not reconstruct email headers or establish actual authorship/reply relationships.

## Real AI and static runtime

- `Xenova/all-MiniLM-L6-v2`, Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2; quantized q8 ONNX (~23 MB), normalized 384D mean-pooled embeddings.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). No WebGPU needed. Approximately 27 MB WASM plus worker/factory/tokenizer. First run needs internet to download this site's assets and Hugging Face/CDN model files, not to send user content.
- Same-origin immutable worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those older apps. Exact bytes/SHA-256 in runtime-provenance.json. The worker's real implementation was inspected: feature-extraction, WASM, q8, four-text chunks, mean pooling and normalization. Effective tokenizer cap 512; supplied max_length is not relied on as an enforced lower cap.
- App code bundled locally by React + Vite with base `/daily-app2/20261125-10/`. No external fonts, analytics, provider keys, paid services or server inference. Content never appears in download URLs or request bodies. Imported text is inert data; model has no tools.

## Devices, caching and failures

Tested current desktop Chrome with WebAssembly SIMD/module workers, GPU disabled. Several hundred MB RAM, secure context and Cache API recommended. Physical phones and other browser engines untested. WASM CPU is the default, not an untested WebGPU fallback.

Download progress and four-text inference counts are visible. Cancel terminates worker; input changes, asynchronous imports/fetches, late callbacks and a 180-second timeout are run-ID guarded. Empty/bad/oversized input, unsupported Worker/WASM, network errors, invalid vectors and worker failures produce visible errors without fake results. Retry explicitly. No state persistence except exports; caches contain static runtime/model assets and may be evicted. Worker source, factory, WASM and model assets are cached. Tested offline claim is **fresh-worker inference inside an already-open fully warmed page**, not cold navigation/reload. Clear site storage to remove caches.

## Input and workflow

Use either synthetic example, edit JSON, or import `.json` source/audit (≤1 MB). Audit import restores originals only; new inference and review required.

```json
{"minimumSimilarity":0.25,"messages":[
 {"id":"a","subject":"Planning","text":"The pottery workshop needs clay and kiln time.","time":"2026-12-01T09:00:00Z"},
 {"id":"b","subject":"Supplies arrived","text":"Clay is ready for the pottery kiln.","time":"2026-12-01T10:00:00Z"}
]}
```

Exactly these source fields; unknown fields rejected. 1–24 messages; unique IDs ≤60 chars, subject ≤60, excerpt ≤200, UTC whole seconds with real calendar validation; source ≤50,000 UTF-16 units. No .eml, mailbox, attachments or full-body parsing. Notes ≤500 chars. Subjects are retained but not fed to AI: repeated vague subjects should not dominate content meaning.

AI calculates excerpt similarities. The highest-similarity strictly earlier excerpt becomes the proposed parent only at or above `minimumSimilarity` (0–1); otherwise a root. Candidate evidence shows up to three earlier excerpts and raw cosine scores, never confidence percentages. Set threshold in source and rerun. A positive threshold does not certify relevance. Review all proposals; held messages cannot anchor approved replies. Same-time, future, self and unknown parents are blocked; strict chronology prevents cycles. All messages, including held, survive audit.

Review parent selections, decision and multiline notes. Undo restores prior review. Any review change invalidates applied exports. Apply only after every message is approved or held. Result shows explicit thread memberships.

## Outputs and comparison

JSON (`reply-canopy/v1`) preserves originals, reviewed rows, decisions, candidates, metrics and chronological approved threads. CSV keeps every message, including held, with CRLF/quoted multiline values and formula-like text escaped with apostrophe. JSON remains exact. Markdown contains approved threads and complete held records; copy uses that current applied snapshot. Exported files do not send messages or change accounts.

Baseline uses latest earlier case-insensitive same subject (one leading `Re:` removed). Parent differences are computed disagreements, not accuracy/time improvement claims. Known-answer fixtures separately compare parent IDs against hand-authored expectations. No elapsed-time or productivity estimate is invented.

## Development / publishing

`npm install`, `npm run predeploy`. Per-app deploy script remains `gh-pages -d dist` as required, but publish ONLY through the collection root's combined deploy directory, never individual deploy. Root README documents Pages build verification.

## Limitations / validation

See VALIDATION.md and machine-readable reports. English-oriented embeddings can misrank negation, unrelated excerpts, repeated boilerplate and multi-topic replies. An AI link may point to a related message that is not a real parent. There is no sender/recipient/header evidence, threading guarantee or automated external action. Human editorial confirmation is mandatory. Tiny synthetic tests are not a general accuracy estimate.
