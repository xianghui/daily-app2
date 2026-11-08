# Observed validation — Branch Harbor

2026-11-09; production Vite bundle, headless desktop Chrome, actual quantized MiniLM via WASM CPU. Evidence: `browser-test.cjs`, `browser-validation.json`, `network-validation.json`, `artifact-validation.json`, `asset-audit.json`, gallery/deployment/public evidence files. Successful AI checks do not use mocks; injected workers are used only to test defensive paths.

## Known-answer fixtures

- Launch checklist: expected and actual links `[B1,B2,B3,new,B1,B2,B3]`. Six intended base links plus one intended addition matched. Exact-text baseline found 3 identities versus 6 reviewed links. Zero competing-edit units; 4 output steps, no deletions.
- Community workshop: expected and actual `[B1,B2,B1,B2,B3,new]`. Five intended base links plus one intended addition matched. Exact-text baseline 2 versus 5 reviewed links. One competing-edit conflict (two lunch rewrites), one one-sided badge deletion, 3 released steps with default manually confirmed choices.
- Total 13/13 tiny synthetic identity/addition expectations matched. This is not representative accuracy or proof of equivalent instructions. Baseline links are mechanically counted, not measured time saved.
- Negation challenge: “Do not back up the customer database before deployment” was proposed as the original affirmative backup step. This is unsuitable despite topical similarity; explicit human identity and resolution verification remain required. No safety/semantic equivalence claims.

## Actual workflow and artifacts

- Full 28-text limit (8 base + 10 left + 10 right), real four-item inference batches: all 20 branch records and 8 base records retained, every unit either released or explicitly omitted. JSON reimport restored exact original inputs for fresh inference.
- Both-empty branches: real base-only inference, all 3 deletions explicitly confirmed, valid empty checklist.
- Pending and held mappings block merge; duplicate base targets within a branch are rejected; identity edits reset approval. Competing-edit and edit-vs-delete cases, unavailable source and empty custom resolution checked. Every resolution needs confirmation; edits invalidate export snapshots. Both review and resolution undo checked.
- Actual JSON, CSV and Markdown browser downloads parsed; a multiline `=1+1` custom resolution with comma and quotes survived JSON and correctly escaped CSV. Python independently parsed every CSV row and compared every source/output field, preserved omissions and exact reviewed values. Clipboard equals downloaded Markdown. JSON contains originals and all review evidence; CSV contains every merge unit.
- Exact one-to-one optimizer compared against exhaustive enumeration on 30 small score matrices; global-optimum displacement and unmatched choice checked. No record conservation or schema failures observed.

## Runtime / defensive / privacy checks

- Production model loaded only after explicit click; no model-host requests before loading. All observed requests were GET with no request bodies. Source inspected: no remote inference, provider integration, credentials or analytics. User text passes only to the local worker. Built text scanned for credential-like patterns: no matches; this is a pattern scan plus code inspection, not a universal secrets guarantee.
- Successful online inference followed by **fresh-worker real inference with all network offline** passed in the already-open page. This does not test or promise offline reload/app-shell startup. Cache eviction remains possible. Runtime factory, binary and worker explicitly cached.
- Fresh-context blocked model host produced “Failed to fetch”, no suggestions; unblocked retry performed real inference. Tested cancellation and retry, input change invalidation, stale callbacks after cancel and after newer success, malformed vectors, runtime error and timeout. Error-path worker injection is not counted as successful AI inference.
- Empty, invalid, null, malformed JSON, duplicate ids, oversized text/record counts and unsupported CSV import rejected. Runtime checks require WASM; unsupported runtime is simulated, not a physically WASM-disabled browser. WebGPU is unused. Timeout path injected to avoid an artificial three-minute wait.
- No horizontal overflow at 320px/390px or desktop, focused input and labelled controls checked, responsive actions/exports exercised. Screenshots saved; actual physical phones and assistive technologies not tested. Other browser engines/low-memory devices untested.

## Build / gallery / publication

- Per-app `npm run predeploy` passed. Runtime WASM bytes match shared immutable asset; local asset hashes recorded.
- Root gallery inline script compiled with `new Function`; missing scripts would fail. New entry exactly once, area `ai-utility`, all 542 preceding entries unchanged. Rendered categories preserved: AI Utilities, STL Generators, Mini Games. Search and responsive gallery checked.
- Root combined predeploy assembled 543 app builds with zero failures/skips. Combined deploy, matching Pages commit, public runtime asset hashes and real public inference are verified separately in publication evidence before final completion.

### Confirmed public checks

Published https://xianghui.github.io/daily-app2/20261109-4/ through the combined root workflow. GitHub Pages commit `35e52575639ff6965b81ec7b52d170a02198dfad` reached `built`; matching workflow completed successfully. Every public app asset (including worker/factory) and shared WASM matched local SHA-256, and public gallery bytes matched root source. The full ten-check real-browser suite passed against the public URL, including both known-answer AI fixtures, fresh-worker offline inference, max batching, current reviewed downloads, stale/cancel/error guards and phone-width UI. Public downloads were independently parsed again; original/version conservation and reviewed multiline custom text survived. Evidence is in `public-evidence/`, `public-assets-validation.json`, `public-gallery-validation.json` and `deployment-validation.json`. No failure/retry deployment trigger was needed.
