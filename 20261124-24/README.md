# Namespace Loom

A local-first XML handoff utility for integration testers who receive informal export notes alongside small element/attribute fragments. The bottleneck is choosing the correct namespace vocabulary and noticing that lexical prefixes are not namespace identities.

## Workflow

1. Choose one of two synthetic examples, paste source JSON or import a `.json` source/audit file.
2. Edit 2–5 namespace profiles: `id`, semantic `description`, `defaultNamespace` and `prefixes` object. Empty default means no namespace. Namespace URIs are identifiers, never fetched.
3. Add 1–24 records: unique `id`, English `context`, and `raw` JSON string containing `{element, attributes:[{name,value}], text}`. The nested raw string lets malformed fragments survive source import and be repaired during review.
4. Explicitly select **Load AI & reconcile**. Download progress, inference chunk progress, cancellation and retry are visible.
5. Review the proposed profile, cosine similarities (not confidence) and source. Edit the fragment or profile choice, inspect expanded names, approve or hold every record. Undo restores the prior review. Pending decisions prevent applying; invalid approved fragments remain blocked in the complete audit.
6. Apply reviewed scenario. Download complete JSON, CSV or Markdown, or approved-only Fixtures JSON. Each fixture contains standalone XML plus expanded element/attribute names and exact values for independent parser assertions. Copy the current Markdown worksheet. Every edit invalidates previous export availability. Reimport complete audit JSON to restore original inputs (not prior approvals).

## Real AI and deterministic steps

`Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web WASM CPU (MIT). Normalized mean-pooled 384-dimensional real embeddings rank context notes against profile descriptions. No hard-coded responses, generative model, prompt-following or deterministic classification fallback. Context-only browser tests change the selected profile and downstream expanded element name for identical fragments.

Deterministic processing validates schemas and XML characters, expands QNames, catches duplicate expanded attribute names, escapes values and creates reviewed artifacts. Unprefixed elements use the default namespace; unprefixed attributes do not. `xml` has its standard implicit binding. Two prefix aliases bound to the same URI cannot create distinct attributes with the same local name.

Baseline applies the default namespace incorrectly to unprefixed attributes. The displayed difference count is computed only over ready records. It is a name-disagreement witness, not accuracy, percent improvement or time saved.

## Downloads, devices and offline scope

Before loading, the UI discloses ~23 MB model weights + ~27 MB runtime, plus tokenizer/code. Internet required on first load; model files download from Hugging Face and its CDN (`us.aws.cdn.hf.co` observed). No key or paid service. Current desktop Chrome with WebAssembly SIMD, secure origin, module workers and several hundred MB free RAM is recommended. Inference is CPU-only; WebGPU is not needed. Physical phones, other engines and constrained-memory devices are untested.

The immutable same-origin shared worker is `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; its factory is `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; its byte-identical WASM is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve those published apps/assets. Exact hashes in `runtime-provenance.json`. Application code is bundled locally. Worker source, module factory and WASM use Cache API; Transformers.js caches model assets. Browser eviction/private-mode restrictions may require downloads again. No service worker/app-shell offline navigation claim.

**Tested offline scope:** fresh-worker real inference in an already-open warmed production page with the browser context completely offline. Cold offline navigation/reload is unsupported. Cancellation aborts worker fetch and terminates inference worker; run identities guard delayed callbacks/file reads. Timeout is 180 seconds; malformed vectors, network/runtime errors and unavailable Worker/WebAssembly fail visibly with retry instructions, never fake output.

## Privacy and boundaries

Content/reviews stay in browser memory until user exports/copies. Requests observed in production browser tests are file GET downloads, no content bodies or context in URLs. No remote inference path, API keys, analytics, uploads or endpoint calls. Namespace URI strings are not visited. Imported content is inert data; generated XML is rendered as text, never inserted as markup. Only synthetic fixtures are committed. Built-text credential pattern scan is a supplemental check, not exhaustive proof.

## Limits and supported XML subset

- Source: ≤50,000 characters; source/audit file ≤1 MB; 2–5 profiles and 1–24 unique records.
- Descriptions/contexts ≤200 characters; raw fragment JSON ≤2500; review note ≤2000; ≤12 attributes; text/value ≤500; ≤8 prefixes per profile.
- Simple ASCII QNames with each component ≤40 characters. Namespace identifiers: empty default or bounded `urn:`/`http(s):` identifiers. Reserved namespace URIs and custom `xml*` prefixes cannot be rebound. `xml:space` values restricted to `default`/`preserve`.
- Standalone single element with attributes/text, no child trees, DTD, entities, schemas, inherited scope, inline prefix declarations, arbitrary XML import, XSD validation or automatic repair. Illegal XML 1.0 characters/unpaired surrogates and unbound prefixes block the record. Character references preserve attribute tabs/newlines/CR exactly in parser round trips.
- Four-text inference batches; checked actual tokenizer `model_max_length` is 512. Worker passes max_length 256 but the feature-extraction pipeline may use the model's 512-token cap; this app does not claim an enforced 256-token cap. Descriptions/contexts are separately bounded to 200 characters.

AI always picks a nearest profile even when unrelated, ambiguous or negated; hold inappropriate rows. Six tiny known-answer matches and one passing negation probe are not general accuracy evidence. Human verification is mandatory. No XML schema validity or production integration safety claim.

## Development and publication

React + Vite, base `/daily-app2/20261124-24/`. `npm install`, `npm run dev`, `npm run predeploy`. Per-app gh-pages scripts are retained; **publish only through the collection ROOT predeploy/deploy**, not this app's deploy command. Root deployment reuses one verified byte-identical older geometry runtime (`20261106-6` → immutable `20261028-24`) to retain the unchanged 1 GB budget; legacy source builds remain unchanged and the affected app's import/export flow is rechecked.

See `VALIDATION.md`, real-browser reports and independent `artifact-test.py` for observed outcomes. Tests use the existing workspace Playwright installation and Chrome; no runtime test hooks or mocks are built into the app.

### Local production testing

Shared runtime URLs require the collection origin. A standalone per-app Vite dev server previews the UI but does not host the older shared assets. To test real local inference, assemble at the root, serve a directory containing a `daily-app2` symlink to the root `deploy/`, and open `/daily-app2/20261124-24/`. The real-browser suite accepts `APP_URL` and `PREFIX`; asset/gallery suites accept `ASSET_BASE`/`SITE_BASE`. This run used an external temporary server directory; no shared source build was changed.
