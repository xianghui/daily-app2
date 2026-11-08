# Observed validation — 2026-11-09

Local production bundle tested in headless installed desktop Google Chrome via Playwright, not Vite dev. Synthetic data only.

- **Real inference:** Service interviews → money→billing, latency→speed, signin→access; Museum observations → interpretation→learning, orientation→navigation, rest→comfort. All **6/6 expected links** matched. Each fixture retained 4/4 judgments, with 0 raw exact-code agreements, 3 normalized agreements and 1 remaining disagreement. This tiny easy fixture is not a general accuracy claim.
- Four-text batches and maximum 8+8 codebooks / 80 paired judgments passed. Unique one-to-one mapping, row preservation and JSON reimport of originals checked.
- Human target change resets approval; hold, undo, duplicate-target blocking, mandatory review and export invalidation passed. Museum hold produced 2 unresolved, 2 agreeing and 0 disagreeing pairs, as expected.
- Downloaded actual JSON/CSV/Markdown, independently parsed CSV with Python, checked all 4 source rows and edited multiline quoted formula-like note; CSV adds spreadsheet protection, JSON preserves exact original note. Clipboard matched Markdown. Reimport reran inference on all 80 pairs.
- **Offline claim verified:** terminate worker after online inference, disable *all* context networking, invoke fresh worker and real model successfully. This is the already-open page only; offline reload/navigation is not claimed or tested.
- No model-host requests before explicit load. Captured production startup/inference requests were GET with no bodies; no user content in request URLs. Source has no remote inference/provider integration. Built asset credential-pattern scan found no matches (not a universal secret detector).
- Network model-host abort generated `Failed to fetch`, no fabricated suggestions; removing abort and retrying real inference succeeded in a clean context.
- Empty/invalid JSON, invalid references, duplicate ids, unsupported file format, size/count/text limits tested. Malformed embeddings, missing WASM error, timeout and late cancelled messages injected for defensive tests only. Cancel/retry and input changes during a run prevented stale results. These injected failures are **not** counted as real-inference validation.
- CPU WASM inference succeeds without using WebGPU. Physical phones and non-Chrome engines not tested. Responsive 390px and 320px viewports passed no-overflow checks and working export; screenshots saved and 390px layout inspected. Desktop screenshot saved. Labels/focus styles and 44px buttons present; no screen-reader audit claimed.
- Core tests check actual global optimum versus greedy assignment, unequal codebook sizes/unmatched codes, review/hold constraints, vector/schema/bounds validation. Initial test expectation for a service hold was corrected from 2 to 1 unresolved pair (only one record uses that code); application logic unchanged.
- Shared runtime byte identity and asset SHA-256 values recorded. Runtime factory and worker paths served from production bundle; only model files are external.

## Limits

MiniLM similarity cannot establish equivalence, detect truth/negation, or repair different granularity. One-to-one reconciliation can be unsuitable for many-to-one research schemes. Model recommendations must all be reviewed; counts describe reviewed normalization, not reliability. See README for model/license/privacy/limits.

## Publication

Root gallery inline-script compilation, unique AI-utility entry, category order and preservation of all 540 earlier entries passed. Combined build contains all 541 apps. The public app passed the same full nine-check browser suite, including two real-inference fixtures, fresh-worker offline inference, max batch, artifacts and defensive failures; independently parsed public exports also passed. Evidence is in `public-evidence/`. Final matching-head Pages status, asset hashes and public gallery checks are recorded separately in `deployment-validation.json`, `public-assets-validation.json` and `public-gallery-validation.json`. No public success is inferred merely from a branch push.

Final publication confirmed: Pages built commit `e095b62db4eaf2e70c3761906f04b167024db70f`; every public app asset and the shared WASM matched local SHA-256, root gallery matched source byte-for-byte, all 541 cards and prior categories rendered, search and responsive gallery checks passed.
