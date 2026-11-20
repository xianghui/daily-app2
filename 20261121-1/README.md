# Pairblock Studio

A static React + Vite utility for small workshop/usability A/B pilots. Organizers often have unordered baseline experience notes rather than comparable blocks. This app embeds those notes locally, proposes minimum-distance matched pairs under a hard supplied skill-gap limit, then produces a reviewed one-per-arm roster. It does not enroll or contact anyone.

## Workflow

1. Choose either synthetic example or paste/import JSON. Use pseudonymous IDs, task-relevant baseline profiles, comparable skill scores and a fixed seed.
2. Set `maxSkillGap` (hard constraint) and `skillWeight` (soft distance weight). Freeze the seed before seeing outcomes. Click **Load AI & reconcile** to explicitly download and execute the model.
3. Inspect each profile and all peer cosine scores. Correct pair IDs (exactly two approved members per pair), add multiline review notes, approve or hold every record. No records are approved automatically. Undo reverses the last review edit.
4. Apply reviewed checks. Broken pairs or excessive skill gaps block assignment. Held records never receive an arm but survive the audit.
5. Export complete JSON, Audit CSV, paired A/B Summary CSV, or Markdown; copy Markdown also works in supported secure contexts. An edit invalidates the snapshot and disables exports until reapplied. JSON audit imports restore originals only, requiring fresh inference and review.

## Real AI, runtime and data flow

- **Task:** normalized mean-pooled, 384-dimensional neural feature extraction. **Model:** [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX weights. **Runtime:** Transformers.js 4.3.2, WASM CPU, one thread. No WebGPU, API key, backend or provider integration.
- First explicit load: approximately **23 MB model/tokenizer/config + 27 MB CPU runtime**, internet required; model assets from Hugging Face and its download CDN. Several hundred MB RAM recommended. Modern secure-context browser with WebAssembly SIMD, module workers and Cache API. Desktop Chrome on macOS tested; physical phones, Safari/Firefox/Edge and low-memory devices are unverified.
- Shared immutable same-origin worker: `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; module factory: `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM: `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Retain these originating app paths in every combined deployment. Hashes, exact sizes, tokenizer configuration and observed model revision are in `runtime-dependency-audit.json`. Sharing avoids deploying another 27 MB binary.
- Model revision `main` is unpinned and may change. Text is ≤300 characters and tokenizer `model_max_length` is 512; feature-extraction ignores per-call max_length, so we do not claim a 256-token cap. Worker inference batches four texts. Full vector shape, normalization and finite values are validated before matching.
- The app caches worker source itself; the shared worker explicitly caches module factory/WASM; Transformers.js caches downloaded model files. Caches are best effort and can be evicted or unavailable. **Tested offline scope:** after an online inference in the same already-open page, terminate the worker, disable all network and create a fresh worker for another real inference. Offline reload/navigation is **not** promised.
- Runtime and weights are downloaded; profiles are not uploaded. Text travels only through local worker `postMessage`. No analytics, network write methods, content persistence, credentials or optional remote path. Browser request audits confirm only GET downloads with no bodies. Avoid sensitive profiles and share private audit exports carefully. Model hosts still see ordinary download metadata such as IP address.
- Download and chunk progress are shown. Cancel terminates the worker, changes a run identity and prevents late file/worker messages from applying. Construction/network/model failures, malformed output, no-WASM and 180-second timeout produce errors, never deterministic pretend AI. Retry is explicit.

## Input and output

Source JSON ≤15,000 characters; even 2–16 unique records. `context` ≤300 characters; `seed` integer 1–4294967295; `maxSkillGap` 0–10; `skillWeight` 0–1. Each record has safe letter-first `id` ≤40 characters, `profile` ≤300 characters and finite numeric `skill` 0–10. Import supports `.json` only, ≤2 MB. Extra audit metadata does not count against the original-source limit. Imported instructions remain inert data. Original data is preserved, not modified or deleted.

JSON includes schema `pairblock-studio/v1`, original input, every reviewed row and neural evidence, holds, seed, pairs, assignments, arm summaries and distance comparison. Audit CSV includes every original profile/skill and current pair/decision/arm/note. Summary CSV lists each approved pair and its A/B members, cosine, gap and cost. RFC-style quoted CSV handles commas/newlines; spreadsheet-formula-like text receives a leading apostrophe, while numeric fields remain numeric. Markdown retains every source profile and review note. Exports reflect the applied current review, never initial defaults.

## Deterministic decisions and honest comparison

Pair cost = `1 − cosine + skillWeight × abs(skill_i − skill_j) / 10`. A bitmask dynamic program finds the exact minimum-cost perfect matching across all source records, excluding pairs above maxSkillGap. If infeasible, proposed pair IDs are empty and the UI explains the remedy. Reviewers may construct feasible pairs and hold the rest. Exact optimality is not claimed after edits/holds.

Source-order baseline pairs adjacent members of the same approved roster. Both total distances and baseline hard-gap violations are computed from the actual neural evidence. Lower distance is the explicit objective, **not** measured bias reduction, accuracy or time saved. Xorshift32 selects one member of each reviewed pair for A and the other for B. This is reproducible, non-cryptographic allocation, not secure concealed randomization. Pair IDs are sorted and members retain source order; changing these can change assignment even with the same seed. Do not seed-shop. Analyze outcomes with a prespecified paired analysis rather than treating them as independent groups.

Matching does not guarantee fairness, causal validity, power, representativeness or balance on unmeasured covariates. Supplied skill is not inferred. Do not use sensitive/demographic attributes. Similar text can describe opposite experience: the tested negation challenge linked “never repaired” with positive restoration experience. Every proposed pair needs human review. The app is a planning worksheet, not participant eligibility or outcome analysis.

## Development and publication

`npm install`; `npm run dev`; `npm run predeploy` builds the production bundle. Base is `/daily-app2/20261121-1/`. Per-app `predeploy` and `deploy` scripts are retained as required, but **publish only via root** `daily_app2` predeploy/deploy to preserve the collection. Serve with `python3 serve-test.py` for production bundle paths and shared assets, port 7085.

Validation: `node core-test.mjs`, `node browser-test.cjs`, `node defensive-test.cjs`, `node cold-cancel-test.cjs`, `python3 artifact-test.py`, `python3 runtime-audit.py`, `python3 security-audit.py`. Browser tests use the locally installed Playwright and Chrome. `APP_URL`/`BROWSER_REPORT` allow the same actual-model suite against assembled/public sites. See `VALIDATION.md` and machine-readable reports for observations and limits.
