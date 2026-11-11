# Watt Folio

A private usage-budget worksheet for coordinators of small shared spaces. Reconcile rough appliance notes with supplied power profiles, verify watts/units and current/proposed daily minutes, then export a complete energy-reduction plan. Unlike a meter or a smart-plug controller, this app only calculates from assumptions and never controls devices.

## Use

1. Choose **Office day** or **Community room**, paste JSON, or import a `.json` file. Fixtures are synthetic.
2. Supply 2–6 profiles (`id`, `title`, `description`, integer `watts`), 1–24 records (`id`, `text`, integer `units`, `minutes`, `planned`), integer period `days`, `tariff` cents/kWh and reduction `target` Wh.
3. Explicitly **Load AI & match profiles**. Wait for download and four-text embedding batches, or cancel and retry.
4. Inspect source notes, profile descriptions and similarity alternatives. Edit the profile, average watts, count, times or reviewer note. Changing profile copies its supplied wattage. Approve or hold every row. Undo restores the previous review snapshot; any edit invalidates applied exports.
5. Verify period/tariff/target; **Apply reviewed plan**. Inspect totals and ranked reduction actions. Held rows are preserved, not silently treated as measured zero consumption.
6. Download JSON (original input + complete reviews + exact calculations), complete CSV (including holds), Markdown plan or copy the worksheet. Reimport of exported JSON restores ORIGINAL inputs, not changed assumptions or approvals. Reapply review edits if needed; prior decisions are never auto-approved.

## Actual AI and privacy

- Model: [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), [upstream source](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), Apache-2.0.
- [Transformers.js](https://github.com/huggingface/transformers.js) 4.3.2 (Apache-2.0), q8 ONNX, WASM/CPU ONNX Runtime (MIT). Runtime and worker are bundled same-origin. See THIRD_PARTY_NOTICES.md and licenses/.
- Actual learned, normalized, mean-pooled 384-dimensional embeddings rank supplied power-profile descriptions against appliance notes. Cosine similarities are evidence, not confidence. Schema validates finite, normalized 384-vectors and record counts. No generative instructions, tools or credential requests are interpreted from imported data.
- Initial explicit load needs internet and approximately 50 MB downloads: ~23 MB weights/tokenizer from huggingface.co / hf.co and CDN, ~27 MB same-origin runtime. No model request is made before pressing load. No user text is put in network URLs, bodies or logs; no API keys or provider integration exist. All inference and review happen locally. Downloads are files arriving on-device, not document uploads.
- Model assets use the public model repository's current default revision. Reproducibility is limited if the host updates it; observed tests document the current outputs. Worker/runtime assets are content-addressed or immutable shared paths.
- Worker source, runtime module factory/binary and model files cache in browser Cache API. A real fresh-worker inference with the browser fully offline was tested in the already-open page. Offline navigation/reload is NOT promised. Private browsing, storage restrictions and eviction can require another download. App content is not persisted; downloaded artifacts are user-controlled.
- The shared identical WASM binary is `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`, SHA-256 `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082`. Preserve this earlier app asset during combined deployment. A separate local copy is not deployed.

## Deterministic calculation and baseline

Energy is exact integer watt-minutes: `watts × daily minutes × identical units × days`. Current watt-minutes = proposed + reduction, checked before applying. Divide by 60,000 for kWh. Estimated cost cents = watt-minutes × integer tariff / 60,000; fractional cents remain estimates, not posted money. Display rounds kWh to three places and currency units to two, but JSON/CSV preserve watt-minutes. Sums at maximum dimensions remain safe integers. Target is tested in integer watt-minutes; reduction-priority ordering is descending savings, input-order ties. This is a reviewed what-if plan, not an automatic schedule optimizer or measured bill reduction.

The naive always-first-profile baseline uses the same reviewed minutes/counts/period with the first supplied wattage. It illustrates sensitivity to classification, not savings. AI/review agreement and first-profile/review agreement are computed from approved rows only, not independent accuracy. Fixture known-answer quality is reported separately. Tariff applies uniformly; no tax, standing charges, demand fees, standby cycling, simultaneous circuit limits or time-of-use pricing are modeled. Nothing schedules, switches or buys electricity.

## Requirements, validation and limits

Tested: installed desktop Chrome using Playwright, production bundle, WASM SIMD CPU, module workers, Cache API. No WebGPU requirement. Several hundred MB free memory recommended. Physical phones and other browsers untested; 320/390 px viewports checked. Limits: 2–6 profiles; 1–24 records; 400 characters per embedding text; first 256 tokens; batches of four; original JSON ≤24 KB characters; imports ≤1 MB; 180-second timeout. Profiles 1–10,000 W; counts 1–100; minutes 0–1440; planned ≤ current; days 1–366; integer tariff 0–1000 cents/kWh; target 0–1 billion Wh. Empty/invalid inputs, failed workers, unavailable WASM, bad vectors, network failures and timeouts stop with errors, never fake results. Termination and run identities guard edits/imports/cancellation against stale writes.

See [VALIDATION.md](VALIDATION.md) and machine-readable `*-validation.json` for actual checks and limitations. Both simple fixtures matched 8/8 expected profiles; a negated lamp description incorrectly matched computer, and irrelevant instruction-like prose still received a nearest profile. Mandatory review/holds are essential. No open-set rejection or measured power inference is claimed. Ratings and schedule changes must be verified independently; do not curtail essential ventilation, heating, refrigeration or safety loads based on this worksheet.

## Development / publishing

`npm install`, `npm run dev`; `npm run predeploy` builds. Base `/daily-app2/20261111-13/`. Per-app deploy script exists as required but **do not execute it**: publish from the collection root with `npm run predeploy` then `npm run deploy`. Combined Pages root must preserve prior apps and shared WASM. Tests import the workspace's Playwright package and use `python3 serve.py` at port 6433 for local production assets; set TEST_URL and REPORT for the public browser suite.

Published and public-AI verified: https://xianghui.github.io/daily-app2/20261111-13/ . See publication-status.json for the Pages commit and validation reports.
