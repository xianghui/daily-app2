# Radix Quay

A binary-payload handoff preflight for integration operations staff. Informal source notes often lose the encoding contract when attachment fields are combined into a batch. **Real local AI** retrieves a supplied Base64 profile from those notes; human review precedes deterministic strict decoding and byte-safe manifest export.

Distinct from the collection's charset, output-escaping and integer byte-order utilities: this checks Base64 alphabets, padding, unused pad bits and restricted MIME folding. It neither guesses character encoding nor authenticates tokens. All examples are synthetic; no system is connected.

## Workflow

1. Choose **Attachment handoff** or **Integration batch**, paste JSON, or import source/audit `.json` ≤1 MB. Source object: `plans:[{id,description,mode}]`, `records:[{id,context,raw}]`. Edit supplied profile descriptions/constraints directly in JSON.
2. Explicitly click **Load AI & reconcile**. Initial internet download approximately **23 MB weights + 27 MB CPU runtime**, plus code. Progress and cancellation are visible. Nothing loads from the model host before this action.
3. Inspect source context, original payload and ranked cosine evidence. Change profile/payload, write multiline reviewer notes, then approve or hold each row. Policy/payload edits reset approval. MIME review has an explicit **Use CRLF line endings** action (browser textareas otherwise normalize line endings); it does not change original data. Undo restores the last 100 review states. Every edit invalidates applied exports.
4. **Apply reviewed scenario** checks strict grammar, decodes exact bytes and proves a canonical Base64 round-trip. Blocked and held records stay in complete audits but are excluded from release. Re-encoding noncanonical source bytes is not automatic; verify and edit deliberately.
5. Download complete **JSON/CSV/Markdown** or a valid-only **Manifest JSON**. Copy Markdown. Reimport an audit to restore originals only and require new inference/review. Exports always represent the current applied snapshot.

```json
{"plans":[{"id":"api","description":"JSON API standard Base64 binary blob with equals padding and no whitespace","mode":"standard"},{"id":"link","description":"URL query field uses dash underscore Base64 without equals padding","mode":"url"}],"records":[{"id":"sample","context":"Web URL query binary attachment identifier uses URL-safe unpadded Base64","raw":"-_8"}]}
```

Limits: 2–5 unique profiles (ID ≤60, description ≤200); 1–24 unique records (ID ≤80, nonempty context ≤200, raw string ≤512, may be empty but then blocked); source JSON ≤24,000 characters; reviewer notes ≤2,000. Audit envelopes have a separate 1 MB import limit; extracted originals retain strict source limits. Four-text embedding chunks, normalized finite 384-value vectors validated for exact count and near-unit norm. Every source identity and review count must match before applying.

## Real AI and runtime

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT). WASM CPU, single thread, mean-pooled normalized 384-dimensional embeddings. The actual worker embeds profile descriptions and source context; **payload bytes are not model inputs**. Cosine ranking selects the proposed profile. The installed pipeline receives max_length 256 but the feature-extraction path's actual tokenizer maximum is **512 tokens**; input texts are bounded to 200 characters. Upstream revision is `main`, not pinned: future weights/tokenizer changes may alter results.

No backend, API key, paid provider, external inference or agent credential. The default uses CPU WASM, not WebGPU or a hidden fallback. AI materially changes outputs: with the same folded payload `Zm9v\r\nYmFy`, a mail context selects MIME and yields `666f6f626172`; API and URL contexts select profiles that block it. All three context-only variants were run through the actual model. Alphabet validation, decoding, review gating, byte conservation and exports are deterministic.

**Limitations:** similarity is not confidence or contract verification. Every note gets a nearest profile, including irrelevant or instruction-like text. The competing-negation probe selected API rather than intended mail. Twelve simple fixture matches do not establish general accuracy. Model matches do not prove source legitimacy or applicability. Hold uncertain cases. Decoded data is shown only as hex, never executed, rendered as markup or sent to an API.

## Explicit deterministic contracts

- `standard`: RFC 4648 plus/slash alphabet, no whitespace, required exact padding for incomplete final quanta. Full groups of three bytes need no equals.
- `url`: dash/underscore alphabet, **forbids padding**, forbids whitespace; remainder-one lengths rejected.
- `mime`: restricted attachment body, standard alphabet and exact padding; nonempty lines of ≤76 characters separated by CRLF, optional single terminal CRLF. No bare CR/LF, tabs/spaces, headers or complete MIME-message parsing. This is intentionally narrower than permissive MIME decoders.

All profiles reject nonzero unused pad bits by re-encoding decoded bytes and comparing compact input exactly. `Zh==` permissively decodes to byte 66 but is not canonical `Zg==`; it is blocked. Empty strings blocked. Outputs are exact binary hex, not guessed UTF-8. No compression, PEM/data URL parsing, JWT/signature validation, authentication or encryption claims.

Baseline: deterministic permissive decoding strips ASCII TAB/LF/FF/CR/space, accepts either alphabet, removes trailing padding and accepts missing padding/nonzero pad bits. It still rejects illegal characters and remainder-one lengths. This is a comparison, not a recommended importer. Metrics are computed from approved rows only: baseline accepts, strict blocked-but-baseline-accepted, ready bytes and verified round-trips. Held records are excluded. No fabricated time savings or confidence/accuracy percentages. The useful reduction is a single source-linked worksheet exposing contract violations a permissive decoder hides.

## Data flow, devices and caching

Content and review state stay in browser memory. No localStorage, analytics, optional provider or uploads. Only explicitly downloaded artifacts leave memory to your local downloads folder. Model files download from Hugging Face and its CDN; app/runtime from this GitHub Pages collection. Actual browser network audits capture GET-only asset requests, no bodies and no context text in URLs. Public reports store host/path/query **names only**, never signed CDN values.

Tested current desktop Chrome with module workers, **WebAssembly SIMD** and several hundred MB available RAM. Physical phones, low-memory machines, Safari/Firefox are untested; narrow-screen emulation tests layout, not physical-device inference. Actionable errors for unsupported runtime, download failure, malformed model output, worker construction and 180-second timeout. Cancel terminates workers; run IDs protect delayed fetches/file reads and late messages; retry is explicit. There are no fake suggestions after failure.

Immutable same-origin dependencies (preserve their original app builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes in `runtime-provenance.json`; inspected real worker protocol `{id,texts}` to `{id,type,vectors/info/done/total/error}`, four-text batches and actual CPU pipeline. Shared assets avoid duplicating ~27 MB in an already large collection. Worker source cache `radix-quay-worker-v1`, CPU factory/binary cache `circuit-cove-runtime-v1`, model Cache API managed by Transformers.js. Cache eviction/private storage can require redownload. **Tested offline claim only:** after online warmup, terminate worker, disable all network and run real inference with a fresh worker in the already-open page. **Offline reload/navigation is not claimed.**

## Artifacts and validation

JSON audit: originalInput, all reviews, checks, metrics. CSV retains every row including held/blocked and multiline notes/payloads, escaping quotes/commas/newlines. Formula-leading text (`= + - @ TAB CR`) gets an apostrophe; JSON remains lossless. Markdown includes JSON-encoded source/review/check records, so embedded line breaks stay explicit. Manifest: `format,totalBytes,records:[{id,profile,mode,bytes,hex,base64}]`; approved valid rows only. MIME output is canonical compact standard Base64 (≤512); downstream folding is not performed. Byte count and hex are authoritative, not inferred character text. Python's independent base64/json/csv parsers reopen actual browser downloads and verify all records, reviewed edits and byte totals.

See `VALIDATION.md` and reports for observed outcomes, defensive injection boundaries and device limits. Deterministic codec tests are not AI quality tests.

## Build / reproduce

React + Vite, base `/daily-app2/20261124-4/`. `npm install`, `npm run predeploy`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Publish via ROOT combined-site deploy only**, never this app's deploy script.

Local static validation: `python3 serve.py --source --port 7520`, then `node browser-test.cjs`. Sibling shared production assets are mounted by this static-only helper (no inference server). `node core-test.mjs`, `python3 artifact-test.py`; fault injection scripts use that same local origin. After root `npm run predeploy`, run `python3 serve.py --port 7521` and use `APP_URL=http://127.0.0.1:7521/daily-app2/20261124-4/ PREFIX=assembled- node browser-test.cjs`. Public: set APP_URL to the published app URL, PREFIX=public-. Tests use this environment's existing Playwright installation; it is not a shipped dependency.

### Collection size maintenance

Root assembly initially exceeded the existing 1 GB guard. One byte-identical legacy geometry runtime (`20261029-31`) now reuses `20261028-24` through the existing deploy-only rule. Source builds and old JS URLs are preserved; references are query-versioned. Collection size after assembly: 999,593,813 bytes. See legacy browser validation reports and root assembly log; no app removed and no guard increase.
