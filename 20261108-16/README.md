# Purpose Fence

**Local AI purpose matching and human-reviewed data minimization plans.** Built for privacy coordinators who repeatedly reconcile proposed data uses with an organization-supplied purpose catalog. It does not establish consent, lawful authority, legal compliance or real-world deletion.

## Workflow

1. Paste/import JSON or select either synthetic fixture. Define 2–8 policies (`id`, `text`, allowed `fields`, `maxDays`) and 1–24 proposed uses (`id`, `text`, requested `fields`, `days`). Supply descriptions and field names, not actual personal records. Change goals by editing the purpose catalog and limits.
2. Explicitly select **Load AI & match purposes**. MiniLM embeds descriptions locally, and cosine ranking suggests a purpose. This is genuine neural inference, not keyword routing. Initial fields are the deterministic intersection of the original request and proposed policy; initial retention is the smaller of original/policy days.
3. Inspect original descriptions, AI alternatives/scores and the selected policy. Change the purpose, fields, days and rationale. Every material edit resets the decision to pending; explicitly approve or hold. **Restore original proposal**, **Trim to policy limits** and **Undo last review edit** are reversible local operations. A hold rejects release, not the original record.
4. **Apply reviewed plan** checks all decisions and constraints. Approved plans need nonempty fields drawn from both original and policy, and integer retention no greater than either limit. No new fields or extended retention may be released. Empty intersection means hold or choose another appropriate policy. An approved plan does not certify necessity: remove unnecessary allowed fields yourself.
5. Export JSON (lossless originals, every review, evidence and approved `manifest`), CSV (complete audit, held release fields/days blank), or source-linked Markdown; clipboard matches Markdown. Review edits invalidate exports until reapplied. Reimport JSON reruns from original requests, not silently trusted prior approvals. Nothing is sent, deleted or changed in another system.

## Concrete checks and baseline

Computed counts show original versus planned field-usages for the **same approved subset**, shorter retention windows, approved/held counts and all-source conservation. The baseline boundary count is computed against the **same human-reviewed purpose assignments** using original fields/days: one count per forbidden field plus one per over-limit retention. The reviewed boundary count covers approved plans only; holds are explicitly excluded. These are constraint checks, not measured privacy improvements, time savings or compliance claims. The small fixture evaluation separately compares intended purposes to a simple first-policy routing baseline.

## Real AI / runtime / download

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), converted from [`sentence-transformers/all-MiniLM-L6-v2`](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2); Apache-2.0 model license. Quantized q8 ONNX feature extraction, mean pooling, normalized 384-dimensional embeddings, 256-token truncation. English short descriptions are the intended use.
- [`@huggingface/transformers` 4.3.2](https://github.com/huggingface/transformers.js), Apache-2.0; ONNX Runtime Web (MIT), WASM CPU, one thread. React + Vite. No WebGPU requirement or remote AI path. Model selection is fixed; upstream `main` is not revision-pinned, a reproducibility limitation.
- Initial approximate cost: 23 MB model plus 27 MB runtime, tokenizer/config and app code. Internet and sufficient free memory/storage are required initially. Download hosts are `huggingface.co` and its redirected Hugging Face CDN/CAS hosts; app/worker/runtime come from the collection's origin. No weights download before explicit loading.
- Current desktop Chrome, Edge, Firefox or Safari with WebAssembly and ES-module workers required. Actual tests used installed Chrome on macOS; real phones, low-memory devices, Firefox/Safari and assistive technologies are untested. WASM CPU is the working default, not an untested GPU fallback. Blocked WASM/workers/network/cache may prevent loading; visible error and retry never fabricate an answer.
- Worker and module factory are bundled locally. The byte-identical 26,861,777-byte WASM is reused from `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. The root combined deployment must preserve that app/asset. Hash equality checked in `asset-audit.json`; runtime license is bundled in `public/runtime/`.

## Privacy and cache scope

Default data stays in memory on the page and local AI worker. Only runtime/model files download: user text is not put in request URLs, request bodies or model-host uploads. There are no API keys, account connections, agent credentials, analytics, remote inference or optional provider integrations. Imports, descriptions and instruction-like text have no tool authority.

Cache API stores worker source, WASM factory/binary and Transformers.js model/tokenizer artifacts. No input or reviews are deliberately saved in browser storage; user downloads explicitly save chosen artifacts. A successful online run followed by a terminated worker and **fresh real inference on the same open page with all networking disabled** is tested. Offline navigation/reload/app-shell startup is **not** promised. Cache eviction, storage restrictions, a changed app build or upstream model revisions can require internet again. Clearing site data clears these caches.

## Formats, bounds and errors

Only JSON input/import (≤200,000 characters / file bytes); CSV, PDF, DOCX and real data files are unsupported. IDs unique across both sets; descriptions 1–500 characters; 1–12 unique lowercase field identifiers matching `[a-z][a-z0-9_]{0,39}`; day values integers 1–3650. Maximum model input is 32 descriptions, batched in fours. Reviews allow 500-character notes. Vectors require exactly one normalized finite 384d vector per description. Outputs are schema/constraint validated; malformed vectors do not produce results. A 180-second timeout, explicit cancel and fresh retry terminate the worker; run IDs guard late messages, worker fetches and file reads.

CSV uses proper quoting for commas/newlines and prefixes formula-like text with an apostrophe for spreadsheet safety; JSON is the exact preservation format. JSON audits can be larger than input because originals/evidence/reviews are retained; the 200 KB import ceiling accommodates bounded audit round trips tested here. Synthetic fixture exports and test screenshots contain no real personal data.

## Limitations

Semantic similarity is not policy compatibility, consent, truth, necessity or legal advice. Purpose descriptions may overlap, user policies may be invalid, and missing restrictive context is not detected. A deliberately negated request that adds sale of contact lists still ranked `scheduling` first (cosine ~0.723); it should be held by a human. Deterministic field/day checks alone cannot catch this semantic problem. There are no accuracy percentages or automatic approvals. Similarity is never labeled confidence. This tool cannot verify actual retention, check databases, anonymize records, enforce policy or authorize external processing.

## Build / publish / validation

```sh
npm install
npm run predeploy
```

Per-app required scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but **do not publish individually**: that would replace the collection. Use root `npm run predeploy` / `npm run deploy` and root `deploy/` with the gallery and all apps.

See [VALIDATION.md](VALIDATION.md), machine-readable validation reports and test scripts for observed outcomes, limitations and publication evidence. Production Vite assets were tested in a real browser, including actual model downloads/inference, not just build success or mocks. Fault injection is confined to defensive failure tests.
