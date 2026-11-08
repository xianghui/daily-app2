# Handoff Trace

Operations leads paste/import an ordered SOP plus role charters. Real local semantic inference proposes one responsible role per step. Review source-linked cosine rankings, correct owners or hold ambiguous steps, enter the expected incoming deliverable, then apply a deterministic boundary audit and export a practical handoff checklist. Unlike resource dispatch tools, this preserves execution order and audits cross-role accountability; it does not allocate people or claim staff competence.

## Use

1. Choose Refund procedure or Publishing procedure (synthetic fixtures), or paste JSON `roles:[{id,description}], steps:[{id,text}]` in execution order.
2. Edit role descriptions to define responsibility boundaries. Explicitly click **Load AI & map responsibilities**.
3. Review every proposal: approve or hold. Role changes reset approval; every edit invalidates an applied export. Undo restores the preceding review state. Add incoming deliverables to receiving steps.
4. Apply reviewed plan. Each adjacent approved cross-role pair becomes a documented/missing handoff; any held endpoint blocks that boundary. Held steps are never silently bridged. Missing descriptions remain unresolved warnings, not a release certification.
5. Download JSON (all originals, reviews, vectors' similarity rankings, metrics/boundaries), CSV (every ordered step, spreadsheet formula protection), or Markdown checklist; copy Markdown where clipboard permission allows. JSON reimport restores originals, requiring new inference and review, not silently restoring decisions.

## Real AI, runtime, source and license

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web 1.30.0 (MIT). Normalized mean-pooled 384-dimensional sentence embeddings; cosine retrieval against user-supplied role descriptions, no generated text. Embeddings materially enable paraphrase matching instead of keyword sorting. All boundary logic, reviewed completeness counts, order conservation and export validation are deterministic. No-owner baseline counts unassigned input steps; this is a completeness comparison, not accuracy or time savings.

Approximately 23 MB weights plus 27 MB WASM and app/tokenizer assets on first use. Internet required initially. Model files download from Hugging Face and its CDN; code, worker and module factory are same-origin. Public model revision follows upstream main (not immutable). Uses WASM CPU with one thread, no WebGPU or server. Current WASM-capable desktop browsers intended. Chrome tested; Firefox/Safari, physical phones and low-memory devices untested. Phones can be slow. Limits: 2–8 roles, 1–40 ordered steps, 500 characters per description/text, 40-character simple unique IDs, JSON at most 100,000 characters / uploaded files at most 100,000 bytes. Four texts per inference batch, 256-token truncation, English intended.

`vite.config.js` reuses the byte-identical deployed WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve that older asset when deploying. `asset-audit.json` verifies its SHA-256 against the installed runtime. The worker and factory are bundled locally. No paid services/API keys.

## Privacy, cache and failures

Inputs/reviews live only in page memory and the local worker, never uploaded. No analytics, external actions, remote inference or credential integration. Network traffic is static GET model/runtime downloads; imported instructions cannot change authority or execute tools. Exports deliberately contain originals and should be handled accordingly.

Worker, WASM factory and binary use Cache API; model files use Transformers.js browser cache. User content is not cached. Successful inference followed by offline fresh-worker inference in the **same open page** was tested. Offline reload/app-shell startup is not promised. Browser eviction/private modes can remove caching. Cancel terminates worker and run identity guards prevent old downloads, file reads and messages replacing current results. Timeout: 180 seconds. Invalid input/vector schemas, unavailable WASM, worker/model/runtime network failures show actionable errors without fabricated results. Retry starts fresh.

## Limitations

Similarity always proposes a nearest role, even for unrelated or negated steps; cosine scores are not confidence. A negative refund instruction incorrectly selected Finance during testing. Hold ambiguous steps and verify charters, permissions, actual competence, multi-owner tasks and sequencing yourself. One responsible role per step; no RACI multi-owner inference, parallel branches, loops, legal/safety certification or automatic sends. User-provided sequence is preserved, not verified. Incoming deliverable text is human supplied, not AI generated or checked for adequacy.

## Development/publishing

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite; production base `/daily-app2/20261108-19/`. Required per-app deploy script exists but **publish only via root** `npm run predeploy` then `npm run deploy` to preserve collection. See [validation](VALIDATION.md) and browser/artifact audit JSON files for observed evidence. Tests require local Playwright/Chrome as configured in scripts; `python3 serve-test.py` serves production assets and immutable shared WASM.
