# Lumen Ledger

Local-AI work-area reconciliation and reviewed lighting shortfall worksheet for community workspace coordinators. Built with React + Vite, no backend or API key.

## Workflow

1. Read the download/device notice; load either synthetic example or paste/import JSON.
2. Supply 2–8 task profiles (`id`, `title`, `description`, `lux`) and 1–24 independent areas (`id`, `text`, integer `area` m², `existing` fixture count).
3. Set identical-fixture `lumens`, `utilizationMilli`, `maintenanceMilli` (600 means 0.600), and `maxExtra` fixtures available. These are assumptions, not automatically inferred measurements.
4. Explicitly load AI. Review each proposed task, area, existing count, lux target and semantic alternatives. Correct or hold each record. All start pending; there is deliberately no bulk approval.
5. Apply the reviewed inventory. Holds block sizing; undo restores previous review edits. Editing originals cancels processing and clears results; editing reviews invalidates exports until reapplication.
6. Export complete JSON, Audit CSV, Zone CSV or Markdown, or copy Markdown. All artifacts derive from the current applied snapshot. JSON reimport restores **originals only**, requiring fresh inference/review rather than trusting old approvals. Nothing changes connected systems.

## Real AI and runtime

`Xenova/all-MiniLM-L6-v2`, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Transformers.js 4.3.2 (Apache-2.0) feature extraction on q8 ONNX/WASM CPU, mean pooled normalized 384-vectors. Four texts per inference batch, maximum 256 tokens per text. Cosine ranking proposes the nearest supplied task profile; scores are **not confidence**. AI materially reconciles free descriptions with profiles before any fixture calculation; no canned responses or heuristic fallback exists.

First run requires internet and approximately 50 MB: ~23 MB model/tokenizer from Hugging Face and its CDN, ~27 MB same-origin ONNX runtime. A real progress callback reports download files/progress, then batch progress. Cancel terminates the worker; timeout is 180 seconds. Modern module workers + WebAssembly SIMD and several hundred MB free RAM recommended. WebGPU is not required; the default tested runtime is CPU. Desktop headless Chrome tested; physical phones, other engines and low-memory devices unverified. Error messages offer retry/network/device guidance without producing fake results.

Worker and module factory bundle locally. The byte-identical immutable WASM is shared with `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`; the root deployment must preserve it. Public runtime files use Cache API and model files use Transformers.js caching. **Offline fresh-worker inference was tested only in an already-open warmed page**, with all network blocked. Offline navigation/reload is NOT promised. Cache eviction or private-mode restrictions can require downloading again. Model revision follows the host's current default; future upstream changes may affect results.

## Privacy and bounds

Only public model/runtime assets download, and only after loading. No user content uploads, remote inference option, telemetry, provider keys or automatic content persistence. Original input and reviews stay in page/worker memory. Browser exports are user-initiated local downloads. Model/runtime caches contain public files, not user content. Imported text is inert model input; it cannot grant tool authority, run instructions or request credentials.

JSON originals ≤18 KB; import envelope ≤1 MB; text ≤400 characters; safe unique IDs; at most 8 profiles and 24 areas. Target lux 1–3000, whole area 1–10000 m², existing fixtures 0–1000, lumens 100–100000, factors 1–1000 milli, maxExtra 0–10000. CSV/PDF imports unsupported. Finite normalized 384-vector shape validated before ranking; strict reviewed schema before sizing. Run identity protects delayed file reads, worker downloads and results from overwriting current input. Defensive tests use faults only for error handling; successful AI tests use real model weights.

## Deterministic calculation and baseline

Effective maintained fixture lumens = lumens × utilizationMilli × maintenanceMilli / 1,000,000.

Required fixture count = ceiling(target lux × area / effective lumens). Existing fixtures are never removed; additions = max(0, required − existing). Average lux = installed fixtures × effective lumens / area. The raw-lumen baseline repeats the same calculation assuming both loss factors are 1, then evaluates its estimated actual lux using supplied losses. Metrics count extra fixtures and missed area targets, not measured time/accuracy/savings. A sum of required additions above maxExtra flags **budget insufficient**. The required scenario is not a budget-limited allocation and is explicitly labeled as such.

Factors and target defaults are synthetic—not standards or manufacturer specifications. This simple independent-area average-lumen method ignores geometry, daylight, uniformity, glare, mounting layouts, emergency/electrical rules and fixture sharing between areas. It is not compliance, installation design or purchasing advice. Check actual photometric data and measurements with a qualified lighting professional. Semantic similarity can misread negation or unrelated notes; verify every task and target.

## Validation and deployment

See [VALIDATION.md](VALIDATION.md) and JSON check reports. `npm run predeploy` builds; per-app gh-pages dependency and deploy scripts are retained for contract compatibility, but **publish only with the root combined-site workflow**. Browser test scripts use the workspace Playwright installation, production bundles and real model downloads. Synthetic fixtures only; no private data or credentials. Source and public browser validation records distinguish tested behavior from device assumptions.
