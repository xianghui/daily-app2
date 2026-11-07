# Scope Harbor

A local-AI change-request register for project leads. Import short requests and concrete IN/OUT charter examples; compare semantic meaning; inspect the strongest evidence on both sides; override or defer decisions; assign follow-up owners and rationale; mark every request reviewed; apply and export a complete register.

## Run and publish

`npm install`, `npm run dev`; production: `npm run predeploy`. Base `/daily-app2/20261107-9/`. Required per-app `deploy` is retained but **publish from the collection root**, never deploy this app over the gallery.

## What the AI actually does

Xenova/all-MiniLM-L6-v2 (Apache-2.0, https://huggingface.co/Xenova/all-MiniLM-L6-v2), q8 ONNX encoder, Transformers.js 4.3.2 and ONNX Runtime Web. Neural mean-pooled normalized 384-dimensional embeddings run in a dedicated WASM CPU worker, four texts per batch. Only request summaries and charter examples are embedded. Deterministic cosine ranking finds the strongest IN example and OUT example. If both scores are below 0.25 or the absolute gap is at most the user margin, defer; otherwise propose the higher side. These thresholds are workflow rules, not calibrated probabilities. Schema validation, review counts, baseline comparison and exports are deterministic.

This is distinct from document folder routing: no filenames/destinations/filesystem operation. It compares **opposing project boundaries**, exposes both sources and ambiguity, and creates a human-reviewed change-control register. It does not decide contractual scope, feasibility or commercial obligations. No server or remote-provider option exists.

## Network, devices, cache and privacy

First explicit AI run downloads approximately 23 MB public model/tokenizer files from Hugging Face (`huggingface.co`, redirects to its documented CDN) and ~27 MB same-origin WASM runtime. No model-host requests before loading. Requests/content remain in tab memory and worker messages, never query strings, HTTP bodies or telemetry. The model host sees ordinary asset requests/IP, not project text. No API keys needed or stored. No personal data is included; fixtures are synthetic.

Requires current browser with Workers, WebAssembly SIMD, Cache API for offline reuse, and approximately 300 MB free memory. Desktop Chrome tested on this host; actual low-memory phones, Safari and Firefox not tested. WebGPU is not required and there is no WebGPU-only path or fake fallback. Worker/network/model failures show an actionable error. Timeout 180 seconds, Cancel terminates the worker, retry starts anew. Run identity also guards delayed worker startup, result delivery and file reads.

Worker source and WASM factory/binary use Cache API; model assets use Transformers.js browser cache. Another successful inference with a **fresh worker in an already open tab with all networking disabled** was tested. Offline reload/navigation/app installation is not promised. Storage eviction, blocked caching or private mode can require internet again. User data is not saved in these caches; export before closing.

Runtime binary is the byte-identical collection asset at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Vite references this preserved older build to avoid duplicating 26,861,777 bytes. Factory and worker are bundled in this app. Preserve that earlier app during combined publishing. Licenses and notices are included locally.

## Inputs and safeguards

UTF-8 CSV, exact headers, quoted commas/newlines supported. Each import ≤40,000 bytes:

- Requests: `id,title,summary`, 1–60 rows, unique nonempty ID ≤80 chars, title 1–100 chars, summary 1–300 chars.
- Charter: `id,boundary,example`, 2–12 rows, unique ID ≤80 chars, boundary exactly `IN`/`OUT`, at least one of each, example 1–300 chars.
- Margin 0–1. Model context ceiling 256 tokens; unusual character sequences may truncate despite character bounds. Short English prose works best.

Invalid vectors (count, dimension, finite values, normalization) are rejected, not converted to canned results. Text is treated as encoder data, never executable instructions. No tools, credentials or external actions are exposed to it.

## Review and outputs

Every original request survives, including deferred requests. See original summary and strongest charter examples with IDs and cosine scores (not confidence). Override IN/OUT/REVIEW, assign an owner ≤80 chars and a note ≤500 chars. Any edit invalidates applied exports; changing decision/owner/note unchecks review. Undo retains the last 30 edits. Mark every row reviewed, then apply. Apply performs schema/record conservation checks. Changing source inputs clears old recommendations. JSON contains originals, charter, evidence, reviewed decisions and computed metrics. CSV contains every request, decision, owner, rationale, AI suggestion, evidence IDs/scores and baseline. CSV prefixes formula-like text with an apostrophe; JSON preserves exact text. Downloads and clipboard reflect only the current applied register.

Baseline: each side's largest count of shared alphabetic words between request summary and examples; ties defer. Counts of baseline/AI decided rows, disagreements and overrides are computed from the current reviewed register. They are not quality or speed claims. Use comparison to inspect differences, not assume AI superiority.

## Validation and limitations

See VALIDATION.md and browser-validation.json for observed production-bundle checks, actual exported artifacts and known-answer results. The two supplied projects have six human-labeled requests: five correct decided suggestions, one conservative deferral (profile photo, strongest IN similarity 0.245 below 0.25), zero wrong decided suggestions. This tiny fixture is not an accuracy benchmark. Similarity can miss negation, exclusions, exceptions, domain distinctions and long multi-part requests. Concrete balanced examples and human review are essential.
