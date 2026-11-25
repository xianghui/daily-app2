# Carryfield Desk — 20261125-24

A local-AI worksheet for operations analysts flattening **sectioned spreadsheet exports**. The repeat bottleneck is deciding which rows introduce categories, which are details and which stop inheritance. Global forward-fill leaks categories past subtotals or unresolved rows. This app proposes semantic row roles, requires human review, computes boundary-aware fill with exact source IDs, and exports tidy detail rows plus a complete audit. It never edits a spreadsheet or sends anything.

## Use
1. Paste source JSON or import `.json`; load either synthetic example to learn the schema.
2. Click **Load AI & classify rows**, explicitly initiating model/runtime downloads and local inference.
3. Review every role, group and source context; edit mistakes. Headings need an exact group, not an AI-invented label. A detail group override becomes the active group for subsequent details. Boundaries **and holds** reset the group. An orphan is an approved detail with no active group.
4. Approve or hold every row and apply. Resolve each orphan with an explicit group or hold it before downloading Tidy CSV. Holds are conservative barriers, not deleted source records.
5. Export current JSON/CSV/Markdown audit, copy the worksheet, or download ready-only Tidy CSV with group-source witnesses. Every review edit disables the old snapshot; undo restores the prior review, then apply again.

Input example:
```json
{"title":"Office sections","rows":[{"id":"h","text":"Section heading: Marketing department","group":"Marketing","value":null},{"id":"p","text":"Individual expense item: printed posters","group":null,"value":120},{"id":"t","text":"Subtotal summary: end of this section","group":null,"value":120}]}
```
Original order is authoritative. 1–24 rows, unique ASCII `[A-Za-z0-9_-]` IDs ≤60 characters; row text ≤200 characters; group null or nonempty text ≤100 characters; numeric value null or finite ±1 billion. Source ≤40,000 characters; import ≤500 KB, including richer audit envelopes. No XLSX/CSV import, layout detection, type guessing or multi-column hierarchies. Unknown fields, malformed/control-character text, unsupported files and invalid values are rejected. Audit JSON reimport restores originals only, requiring fresh inference and review. Values/totals are retained, **not** checked for accounting arithmetic or currency equivalence.

## Real AI / requirements / privacy
- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 (~23 MB ONNX).
- Runtime: Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU, normalized mean-pooled 384-dimensional embeddings. Cosine ranking against three actual role embeddings; no canned results or regex classifier. Model does not perform the fill, invent categories, execute imported instructions or verify truth. No confidence percentages.
- Four texts per inference chunk, at most 27 embeddings = seven chunks. App limits every embedded string to 200 characters; shared tokenizer `model_max_length` is 512 tokens. Worker pipeline `max_length:256` is **not** a guaranteed token cap in this pipeline; unusual text can truncate at tokenizer ceiling.
- Initial downloads ~50 MB (23 MB model + 26,861,777-byte WASM, plus tokenizer and JS). Requires internet to Hugging Face/CDN and same-origin static assets. Weights are not revision-pinned, so later model-host changes can affect results. UI exposes loading/download and batch progress, cancellation and 180-second timeout.
- Current browser with WebAssembly SIMD, module workers and enough memory. No WebGPU, server or API key. Desktop Chrome with GPU disabled tested. Other engines, physical phones and low-memory devices unverified. Browser/runtime failures give actionable errors and no simulated output.
- Shared immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. **Preserve both older apps and paths.** Hashes/bytes in `runtime-provenance.json` and `asset-audit.json`. These are bundled collection assets, not remote inference services.
- Worker source, factory, binary and model use Cache API where available. Tested offline scope: terminate the inference worker and run a new real worker in the **same already-open warmed page**, network disabled. No offline cold startup/navigation/reload promise; eviction/private mode may require downloads. No service worker.
- Content stays in page/worker memory until the user exports it. Only static model/runtime GET downloads; no uploaded user text, telemetry, optional provider integration, API key or agent credentials. Browser model caches persist weights, not input. Copy requires clipboard permission; download is the fallback. Imported text is data, never authority.
- Finite normalized vector count/dimension validation, run IDs, worker termination, aborted source fetch, guarded file reads, stale-run rejection, schema validation and visible errors handle defensive paths.

## Output and comparison
Audit JSON (`carryfield-desk/v1`) includes untouched originals, complete review, every row, propagated group/source and actual computed metrics. Audit CSV includes all rows; Tidy CSV includes only ready approved details and is disabled while any approved orphan remains. Formula-like text starting `= + - @ TAB CR` gets a leading apostrophe in CSV, including multiline cells; JSON preserves exact strings and signed numeric values. Markdown is plain text, not an HTML renderer.

Comparison carries the last non-null **original** group across every row, ignoring boundaries and holds. The displayed count measures differences in reviewed detail groups, including manual label edits; it is not a claimed improvement, accuracy or time saving. A valid tidy row points to an earlier/equal approved heading or explicit detail override with that exact group and no intervening reset. Structural/held rows remain in audit exports. No row is silently destroyed.

## Observed quality and limitations
Two synthetic handoffs: **12/13** unedited role predictions matched expected roles (always-item baseline 7/13). The Engineering heading was mistaken for an item. Browser tests correct it through the normal review control before applying. Each reviewed handoff exposed one orphan that naive global fill would mislabel. A separate harder-wording probe matched only **4/8** desired reviews; negations, implicit endings and mixed-purpose headings are unreliable. The model always chooses a nearest role and cannot reject unrelated text; hold it manually. No representative accuracy, production accounting safety or universal device guarantee is claimed.

See `VALIDATION.md`, real request-path audits, independently parsed downloaded artifacts and `oracle-validation.json`. No personal data or supplied credentials were used.

## Development / deployment
```sh
npm install
npm run dev
npm run predeploy
node core-test.mjs
python3 oracle-test.py
node browser-test.cjs
python3 artifact-test.py
node defensive-test.cjs
node recovery-test.cjs
node audit-assets.mjs
```
Browser tests use installed Playwright and Chrome, with `APP_URL`/`PREFIX` overrides for assembled/public reruns. Test server must map `/daily-app2/<folder>/` to that app's `dist/`, including the shared dependencies. Per-app required scripts remain `predeploy: npm run build` and `deploy: gh-pages -d dist`. **Publish only from collection root** using its combined deployment workflow; individual deployment would replace the gallery. No digest/announcements are sent by this builder.
