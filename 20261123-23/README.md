# Text Quay

A byte-to-text handoff desk for data-migration editors working with short exports from modern web systems and legacy Western European office databases. Real local MiniLM retrieves a source-encoding profile from informal provenance notes. Human-reviewed strict decoding produces Unicode text with exact source-byte round trips. It neither translates content nor automatically detects encoding from bytes.

## Workflow

1. Choose **Mixed text handoff** or **Recovery queue**, paste JSON, or import source/audit `.json` ≤1 MB. Shape: `{plans:[{id,description,kind}],records:[{id,context,raw}]}`. `kind` is `utf-8` or `windows-1252`; `raw` is hex, optionally separated by whitespace. Examples contain synthetic data only.
2. Read download/device requirements, then explicitly **Load AI & reconcile**. MiniLM embeds profile descriptions and source context, not bytes, and ranks cosine matches. This materially handles informal source labels; it is not regex encoding detection, a chat wrapper or a canned answer.
3. Inspect source evidence, profile details and similarity (not confidence). Correct profile/hex, add multiline notes, approve or hold every record. Byte/profile edits require renewed approval. Undo is reversible; originals remain unchanged. To edit profiles, change source JSON and rerun.
4. **Apply reviewed scenario**. Strict deterministic decoding blocks malformed UTF-8, undefined Windows-1252 bytes, unsupported controls and a conflicting UTF-8 BOM. Exact re-encoding must reproduce every reviewed byte. Holds/blockers remain in audits and never appear in text releases. Correct/hold ambiguous provenance even when both encodings round-trip.
5. Download JSON/CSV/Markdown audits, ready-only **Text JSON**, or copy the worksheet. Any review edit invalidates exports. Audit reimport restores originals only and requires fresh inference and review.

## Supported scope and limits

2–5 profiles, 1–24 records; unique profile IDs ≤60 and record IDs ≤80 characters; profile descriptions/context ≤200; source JSON ≤24,000; review notes ≤2,000. Hex fields ≤600 characters and 1–200 bytes. No 0x prefixes or binary/file auto-detection. The separate 1 MB audit-envelope import limit supports maximum-batch reimport. Records, including held and blocked records, survive full audits.

UTF-8 uses fatal TextDecoder with `ignoreBOM:true` to preserve a leading U+FEFF. Windows-1252 uses explicit code-page mappings and rejects undefined bytes 81/8D/8F/90/9D. A leading EF BB BF under Windows-1252 is conservatively blocked as a conflicting UTF-8 BOM. All C0/C1 controls except TAB/CR/LF are blocked. No newline/Unicode normalization, translation, markup execution or filename changes. Valid literal U+FFFD in UTF-8 is permitted; displayed baseline counts are replacement-character **occurrences**, not a count of malformed input sequences.

Byte round-trip equality proves only reversibility under the **reviewed** encoding, not linguistic correctness. C3 A9 means `é` in UTF-8 and `Ã©` in Windows-1252; both round-trip exactly. Imported text is inert data, never tool instructions or authority to request credentials. Other code pages and full-document migration are outside this small-sample worksheet's scope.

## Real AI, devices, downloads and privacy

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX ≈23 MB. Normalized mean-pooled 384-dimensional embeddings, four-text batches. Vector count, dimension, finiteness and normalization checked before ranking. Actual tokenizer maximum is 512; the feature-extraction pipeline does not enforce the worker's supplied `max_length:256`. Each text is bounded to 200 characters. Model revision is upstream `main`, not immutable; future model changes may alter rankings.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. WebGPU unnecessary. Current desktop Chrome with WebAssembly SIMD and module workers tested. Several hundred MB free RAM recommended. Physical phones, other engines and disabled-SIMD hardware untested; responsive tests are desktop emulation, not a phone performance promise.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and ≈27 MB WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve originating apps/assets. Protocol inspected: `{id,texts}` → progress/batch/error/result `{id,vectors}`. SHA-256 provenance is in runtime-provenance.json. No large runtime duplication.
- Nothing downloads from the model host until an explicit run. Initial internet downloads use public Hugging Face/CDN files and this site; downloading weights is not uploading input. Source notes/bytes/reviews stay in page/worker memory. No remote inference, API keys, analytics or saved localStorage designs. Network tests inspect actual GET-only requests and no source content in URLs/bodies. Persisted reports omit temporary CDN query values.
- Worker source cache `text-quay-worker-v1`; runtime cache `circuit-cove-runtime-v1`; Transformers.js model cache. After online warmup, a terminated/new worker can infer with all network disabled in the **already-open warmed page**. Offline reload/navigation is not promised. Eviction/private mode may require redownload; cache availability is browser-controlled.
- File/batch progress, cancel by worker termination, explicit retry and a 180-second timeout. Run identities guard late file reads, worker fetches and results. Runtime/network/worker/malformed-vector failures produce actionable errors, never fake fallback output. No server is necessary.

## Artifacts and comparison

Full JSON preserves every original, reviewed decision/evidence, check and metric. CSV uses CRLF, quotes quotes/commas/newlines and prefixes formula-leading text (`= + - @ TAB CR`) with an apostrophe. JSON remains lossless. Markdown escapes source/check text with JSON string representations; imported HTML is never rendered.

Text JSON is an array of `{id,sourceEncoding,text,sourceHex}` for approved valid records. Unicode, BOM and CR/LF survive the JSON representation exactly; consumers must parse JSON rather than concatenate its strings blindly. Every release row must re-encode to sourceHex. No external system is changed.

Baseline: permissive UTF-8 decoding of the **same reviewed bytes**, compared only on ready rows. Displayed changed-interpretation count and U+FFFD occurrences are computed, not AI accuracy, time saved or productivity percentages. Blocked/held rows are explicitly excluded. Strict validation catches malformed input where permissive decoding inserts replacement characters; the baseline is not recommended as an import strategy.

## Development and validation

React + Vite; base `/daily-app2/20261123-23/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`, and gh-pages is installed. **Publish only through the collection ROOT workflow**, preserving all earlier apps and the existing size guard. See VALIDATION.md for observed checks and limitations; tests use synthetic fixtures. No optional paid provider or credential integration exists.

Observed quality: both small six-record synthetic batches matched 12/12 intended profiles and all eight expected decoded strings; a competing-negation challenge incorrectly chose modern UTF-8 when Windows-1252 was intended. This is a mandatory-review provenance aid, not encoding certainty or a general accuracy claim.
