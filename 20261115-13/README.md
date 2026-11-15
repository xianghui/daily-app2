# Quorum Canopy

A browser-local proxy-register review desk for association secretaries: informal delegation notes → real AI identity proposals for both endpoints → mandatory human review → deterministic representation graph and weighted-quorum worksheet → complete JSON/CSV/Markdown exports. No messages, votes or account actions.

## Use

`npm install`, `npm run dev`; production `npm run predeploy`. Vite base `/daily-app2/20261115-13/`. Per-app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist` are present, but publish **only the root combined deployment**.

1. Choose either synthetic example or paste/import source JSON. Supply complete eligible `members` (unique id, label, descriptive identity, integer weight, boolean present), `records` (unique id, fromText, toText), integer `quorumPercent`, integer `maxProxies` and boolean `allowChains`. The JSON editor lets you change attendance, weights and rules; doing so clears all previous suggestions/exports.
2. Explicitly load AI. Before this action no model is requested. Review original snippets, both nearest proposed member descriptions and cosine alternatives. Names alone can be poor embedding identities: provide distinct functional descriptions. Nothing is approved automatically.
3. Verify signatures/evidence outside the app, correct either endpoint, add a multiline evidence note, approve or hold **each** proxy. Undo restores the previous review state. Endpoint changes reset approval. Any edit invalidates exports.
4. Apply. Self links, duplicated outgoing mandates, present-member delegation, cycles, disabled chains or attendee proxy-cap breaches block application. Correct/hold a link and apply again. Paths ending at an absent member remain unrepresented, visibly, rather than silently counting their weight.
5. Inspect every eligible member's path, attending representative and weight. Direct attendance is the baseline; reviewed representation includes approved proxy paths. Required integer weight is `ceil(total eligible weight × quorumPercent / 100)`. No invented time savings, confidence or accuracy claim.
6. Export current reviewed JSON audit (all originals, reviews, evidence and calculations), proxy CSV (all records including holds), roster CSV (all members including unrepresented) and Markdown. Copy the current worksheet. Reimport JSON restores originals **only**; approvals must be renewed. Text CSV formula prefixes are neutralized with an apostrophe, including multiline formulas; JSON retains exact text. Keep confidential exports private yourself.

## Real AI and static runtime

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; upstream [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2). Quantized q8 ONNX, normalized mean-pooled 384-dimensional embeddings. Rank each note endpoint against supplied member descriptions. AI materially removes repeated manual identity searches; it does **not** authenticate identities/mandates, infer weights/attendance, classify legal validity or declare official quorum.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread, four texts per batch, maximum 256 tokens per text. No WebGPU requirement or mandatory paid service/API key. There is no remote AI option.
- Initial download approximately 23 MB model/tokenizer plus 26,861,777-byte (~27 MB) WASM, worker/runtime/app code. Internet required on first use. Model files download from Hugging Face and its CDN (currently `huggingface.co` / `us.aws.cdn.hf.co`); no user content is sent there. Progress reports current file and inference text counts; cancel terminates the worker; 180-second timeout and explicit error/retry handling. No fake fallback.
- To preserve the collection's 1 GB guard, reuse immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps/assets. `asset-audit.json` records exact hashes. The worker's text/vector protocol, CPU settings and dependency paths were inspected and tested here.
- Requires module workers, WebAssembly SIMD and several hundred MB free RAM. Desktop Chrome CPU without GPU tested; physical phones, low-memory devices and other browsers unverified. A narrow desktop-browser viewport is not a physical-phone performance test.
- Cache API stores worker, factory, binary and model downloads; no user records. Tested offline scope: **already-open warmed page, terminated worker, network disabled, new worker and new real inference**. Offline reload/startup is not claimed. Browser eviction, private mode, policy or insufficient storage may require internet again.

## Privacy and bounds

User content and review state stay in browser memory; no uploads, analytics, credentials or automatic persistence. Downloads are user-initiated. Treat notes as embedding data, never tool instructions; prompt-like text can still produce an irrelevant nearest identity, requiring hold. React renders imported text as text. Requests were inspected from production startup through inference; only GET downloads, no request bodies. Credential-pattern scans supplement source/runtime review, not a universal security guarantee.

Limits: 2–12 members, 1–48 proxy notes, unique IDs ≤40 characters, labels ≤100, each description/endpoint ≤300, source JSON ≤40,000 characters, original/audit `.json` file ≤2 MB, notes ≤1,000. Member weights 1–10,000 integers, quorum 1–100 percent, per-attendee delegated-member cap 0–48. Maximum model batch workload 108 texts. Finite normalized 384-value vector count/dimensions checked before suggestions. Cancellation/input/import changes and delayed worker/download messages are guarded by run IDs.

## Deterministic rules and limitations

A fixed complete eligible register, fixed positive integer weights, at most one approved outbound proxy per absent member, no self links, no cycles. Present members cannot also delegate. If enabled, chains carry each originating member's weight to their final attendee; no split mandates or duplicate weight. The attendee cap counts **all direct and indirect delegated members**, excluding the attendee. A path ending at an absent member carries no represented weight. Holding an edge may break upstream representation; all resulting paths remain visible. Baseline counts the same register's directly attending members only. Required quorum is inclusive `>=`, not strict majority; the source rules must explicitly fit your governing documents.

This model does not handle joint owners, competing time-versioned proxies, agenda-specific authority, split weights, legal validity, revocations or rules allowing present members to delegate. It does not resolve ambiguous names or competing signed mandates automatically. Governing documents and identity evidence must be checked externally. Results describe supplied assumptions, not official meeting status. No ballot, dispatch, invitation or legal certification.

## Validation

See [observed validation](VALIDATION.md), runnable `browser-test.cjs`, `boundary-test.cjs`, `defensive-test.cjs`, `arithmetic-test.mjs`, independent Python artifact parser and privacy/asset audits. Fixtures and exported test artifacts are entirely synthetic. Two distinct browser fixtures matched 10/10 intended endpoints; this tiny easy set is not general identity accuracy. An unrelated instruction-like challenge still returned a nearest member and was held. 5,000 exhaustive four-member graph/attendance/chain-mode cases passed against an independent transitive-closure oracle. Actual production-browser exports were downloaded and independently parsed, including multiline/formula-like notes and maximum batch original reimport.

Quorum Canopy public release: first matching Pages build `8fe00083cf0f33996299e1b4ad4909640b9c34b4` reached built. Byte-matched public app/worker/factory/WASM, both real-AI fixtures, full reviewed workflow/artifact/offline checks, privacy traffic audit, all 686 preserved gallery cards and the newly deduplicated older geometry app passed. Source commit excludes unrelated pre-existing edits.

Only short English synthetic identity descriptions were evaluated. At most 256 tokens are embedded per text; longer token sequences are truncated even within the character limit.
