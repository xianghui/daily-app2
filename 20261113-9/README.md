# Version Harbor

A local-AI release-impact worksheet for maintainers of stable libraries and public APIs. Input rough change notes and the current stable version; bottleneck: interpreting compatibility impact before choosing a version. MiniLM suggests breaking/additive/fix/internal classes. Review or hold every note; deterministic precedence and version arithmetic produce an actionable candidate and migration/uncertainty checklist. This does not inspect code, establish compatibility, create tags or publish releases.

## Run and use

`npm install`, `npm run dev`; production: `npm run predeploy`. Base `/daily-app2/20261113-9/`. Per-app deployment scripts are retained as required, but **publish the collection from its root**; never invoke this app's deploy to replace the collection.

1. Load either synthetic example or paste/import source JSON. Set `project`, `current` and `records` with unique `id`, `note`, `owner`. One claim per note; ≤40 records, ≤300 characters/note, source ≤40,000 characters. Source/audit JSON file ≤300 KB.
2. Explicitly load AI. Before loading, see approximate download/network/device requirements. Cancel terminates the worker; retry starts fresh. Source edits invalidate the run, review and result.
3. Inspect source snippets, ranked class descriptions and cosine scores (not confidence). Edit class, follow-up owner and multiline migration/review note. Approve or hold every record. Undo restores the previous review state (last 100 edits).
4. Apply to an in-app worksheet. Major takes precedence over minor, patch, none. Major/minor resets lower components. Any held record blocks the candidate. Internal-only means no public release. Only stable `major.minor.patch` with major ≥1 and components ≤999999; no 0.x, prereleases, build metadata, v prefix or leading zeroes. Candidate overflow blocks apply. Patch baseline overflow is reported as unavailable/null.
5. Export complete JSON/CSV/Markdown or copy Markdown. Every source/held record survives. CSV includes original and reviewed fields; leading formula-like text gets an apostrophe. JSON reimport restores original inputs, deliberately not approvals or edits: run/review again. Keep audit files to retain those reviews. No inputs are automatically persisted.

## Real AI, runtime and data flow

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX feature extraction. Model card and repository provide provenance/license. No generated text, hard-coded response lookup or heuristic fallback.
- Runtime: Transformers.js **4.3.2**, locally bundled module worker; ONNX Runtime Web WASM CPU, normalized mean-pooled 384D vectors, max 256 tokens/text, four texts/batch. Finite dimension/count/norm checks precede cosine ranking. A class prototype is embedded alongside source notes; no prompt/tool authority exists.
- Initial transfer approximately 50 MB: ~23 MB model/config/tokenizer from Hugging Face and its download CDN (observed: `huggingface.co`, `us.aws.cdn.hf.co`, including signed redirects); ~27 MB same-origin WASM. Bundled runtime module/worker also download from the app origin. Weight revision follows model host default; not immutable-pinned, so future host/model changes may affect results. No API key or paid service. No remote inference option.
- Shared immutable WASM path `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm` is byte-identical to this installed runtime. Preserve that older app asset. Hash in `asset-validation.json`.
- Default content remains in browser memory/worker. Only static-file GETs occur; no user-content requests. Downloads are not uploads. Browser download artifacts are explicitly initiated by the user. Clear browsing/site storage to remove model/runtime caches.
- Worker source, runtime factory and WASM explicitly use Cache API; Transformers caches model assets. **Tested offline scope: real inference from a fresh worker inside an already-open warmed page after all network is disabled.** No offline navigation/reload/startup promise; no service worker. Cache failure/eviction requires internet.
- Modern WebAssembly SIMD and module-worker browser, several hundred MB free RAM recommended. Headless installed desktop Chrome tested with GPU disabled (CPU path). No WebGPU required. Physical phones and Safari/Firefox/Edge inference unverified. Network/worker/model failures, timeout (180 seconds), unsupported WebAssembly and malformed vectors produce actionable errors, no substitute AI. Run IDs guard delayed worker fetches, file reads and late messages.

## Comparison and limitations

Patch-only baseline assumes every note is a compatible fix. Reviewed candidate includes your corrections and can expose a major/minor release instead. It is not a measured saving or performance claim. Both examples are small synthetic fixtures; class description wording was refined against them. Latest run matched 8/8 intended example labels; this is **not independent generalization evidence**. Before refinement a removed endpoint was misclassified, and another wording overcalled additive changes as major. Unrelated instruction-like text still mapped to a class. Negation, mixed notes, domain-specific public contracts and behavioral compatibility need maintainer review and external tests. Do not treat nearest similarity as an unknown detector. No compatibility certification, automatic release action or security triage.

## Validation

See [VALIDATION.md](VALIDATION.md), machine-readable reports and reproducible scripts. Production bundle tested for real inference on two workflows, max batch, failures, stale/cancelled work, offline fresh worker, review/edit/undo/hold, output round-trip, privacy requests, desktop/narrow-phone layout and emulated touch. Only synthetic fixtures are included.

## Additional wording probe

Six fresh synthetic notes, not used to retune category descriptions, matched 5/6 intended labels. Mandatory argument and deleted response-field changes matched major; optional sorting, rounding repair and documentation-only matched their intended classes. A negated “No endpoints are removed” optional-feature note misclassified as major. Human correction produced the expected `3.9.12 → 4.0.0` worksheet while preserving all six notes. See `probe-validation.json`; this tiny probe is not broad accuracy evidence.

## Publication verified

Live: https://xianghui.github.io/daily-app2/20261113-9/ . Combined-root publication, all public app/worker/runtime bytes, complete public workflow and preserved gallery verified. Public full suite used installed Playwright bundled Chromium; system-Chrome public automation stalled, while local/combined system-Chrome checks passed. See `VALIDATION.md` and `public-test-notes.md`.
