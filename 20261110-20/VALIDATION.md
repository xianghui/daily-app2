# Observed validation — Share Ledger / 20261110-20

## Actual AI (not mocks)

Headless installed desktop Chrome, actual production Vite bundle under `/daily-app2/20261110-20/`, q8 MiniLM / WASM CPU.

- House weekend: intended `home, food, home, food`; actual `home, food, home, food` (4/4).
- Studio project: intended `tech, event, tech, event`; actual `tech, event, event, event` (3/4). The software subscription was mislinked to exhibition; the browser test manually corrects it before approving and applying. This limitation is deliberately retained, not disguised by fixture-specific model rules.
- Combined 7/8 tiny known-answer links; zero input literal policy-title matches. These eight examples are not a general accuracy estimate. Every suggestion requires human review.
- Negated food challenge selected food, but unrelated instruction-like Jupiter/password text still selected home. Text remained data; no credentials were requested or network content uploaded. Holds block the full payment plan. No claimed general negation/irrelevance detection.
- Actual 64-expense chunked runs and 8-person/6-policy maximum-bound run executed. Maximum totals 6,400,000,000 cents remained exact.

## Deterministic checks

`core-test.mjs` passed 1,800 generated cases with an independent rational largest-remainder oracle and independently applied payment balances. Checked exact-cent conservation, member-ID tie rules, positive non-self transfers, full net settlement and ≤n−1 payments. Hand-calculated participant net balances ([9466, -8134, -1332] cents and [-2799, -3952, -6650, 13401] cents), exact baseline counts and pending/hold/unconfirmed guards also checked. Greedy transfer selection is not globally minimum-transfer optimization.

Reviewed House: 35,807 cents, 6 baseline per-expense transfers versus 2 net transfers. Reviewed Studio: 31,706 cents, 9 versus 3. Baseline and final counts are computed from the actual reviewed shares. No elapsed time or accuracy improvement percentages are claimed. Balanced two-person fixture correctly produced no payments.

## Production-browser workflow and defensive checks

`browser-validation.json` / `browser-test.log` record:

- Actual model load, two different fixtures, source-linked policy evidence, pending approvals blocked, manual correction.
- Payer/policy/cents edits reset approval and invalidate exports; original amounts unchanged. Undo, hold/reject and assumption confirmation guards exercised.
- Current JSON/CSV/Markdown browser downloads and clipboard compared. Independent Python CSV/JSON parser reopened every record, changed payer/policy/cents, share allocations and notes. Formula-leading quoted Unicode text and multiline source were escaped correctly in CSV without changing original JSON. All audit JSON files were independently checked for conservation. Exported audit reimport restored original input and pending reviews, including all 64 rows.
- Full 64-row batch and 8-person/6-policy/64 maximum-cent input; already-balanced empty payment state.
- Empty, malformed, oversized JSON; invalid participant counts, duplicate IDs, unknown payer, zero weights, negative/fractional amounts, long descriptions, >64 rows; unsupported file and >1 MB import. Visible errors, no fake results.
- Real download-host abort/recovery (`network-validation.json`). Real ONNX weight-request cancellation and successful fresh-worker retry (`cancel-download-validation.json`). Delayed file read and worker-source fetch cannot overwrite a newer example (`import-stale-validation.json`).
- Fault injection (defensive tests ONLY): malformed embedding output, worker construction failure, reported WASM unsupported, accelerated 180-second timeout and delayed cancelled callbacks. No malformed/stale output applied; subsequent actual AI inference succeeded.
- Desktop 1280, narrow 390 and 320 CSS-pixel viewports: labels, keyboard focus, ≥44px primary/button targets, no horizontal overflow, review/results/export work. Entry screenshot visually inspected. Physical-phone hardware, assistive technology, browsers other than Chrome are not tested.

## Network, runtime and offline scope

Production startup does not fetch model-host assets before explicit loading. Captured requests through runs are GET file downloads only, null bodies, local origin/huggingface.co/*.hf.co destinations, no expense strings in URLs. No remote provider integration or credentials. Built-text credential-pattern scan found no matches; source was inspected, but the scan is not universal proof of security.

Worker, app and WASM factory are bundled under production paths. The binary hash equals installed runtime: `49871f5a4409519797e127440868a6d1923339d9185907f301a5b2a1d90af082` (26,861,777 bytes), reused from immutable `20261107-2`. App adds 886,709 built bytes at initial validation (see asset report for current build).

After actual online inference, set browser context offline, terminate existing worker (normal run completion), then create a fresh worker and run actual inference from Cache API/model cache. Passed. This verifies fresh-worker inference in an ALREADY-OPEN page; offline reload/navigation is not tested or promised. Cache eviction/private-mode failures can require network again. No WebGPU used; CPU WASM default itself is the tested fallback-independent path.

## Gallery and publication

Inline scripts compiled with Node `new Function`; script existence/nonemptiness asserted. New entry exactly once, newest first, area ai-utility; all 575 prior entries preserved in order with old categories. Root predeploy built/copied all 576 apps, 0 failures/skips; dedupe size guard kept site at 913,051,752 bytes on the first assembly, below 1,000,000,000.

Local standalone and assembled-collection browser reports, public assets/inference and final hosting status are recorded separately. Publication is not complete until public runtime/worker/WASM hashes, both real inference fixtures, full production browser checks and rendered gallery pass. See `publication-status.json` for final result.

Assembled collection production-browser rerun passed all ten check groups and both real fixtures (`combined-browser-validation.json`). An initial test overlapped root regeneration and saw an unavailable page; the suite was rerun after assembly completed and passed. Gallery rendered 576 cards, AI Utilities first, historical STL/Mini Games categories intact and legacy/new-app searches valid.

## Final outcome: UNPUBLISHED DRAFT

Candidate `4a4e85153ccf60f4080e4343e5d7f501a964a34e`: GitHub runs 42805197882, 42807025541 and 42808661100 each built successfully, then timed out in deployment synchronization and cancelled the Pages deployment. The public app remained HTTP 404. No actual matching deployment remained active before each documented rebuild request. No unchanged source repushes or scheduler/config changes were used. Public app/worker/factory/inference cannot be verified, so the app is NOT completed or promoted.

The candidate adds only 886,709 bytes, reuses existing WASM and downloads model weights from Hugging Face, not Pages. Shrinking or replacing its already-tested model cannot repair this hosting synchronization failure without abandoning the mandated collection. After three attempts the workflow is left as a fully functional unpublished draft rather than weakened or faked.

The new gallery entry and candidate tagline were removed; restored root index is byte-identical to the pre-run 575-entry gallery. Root predeploy/deploy republishes the existing collection without this candidate. Public prior-gallery verification and restoration details are recorded separately. Promotion requires adding the gallery entry again, rerunning its gallery checks, publishing successfully and passing `public-test.py` plus both public real-inference fixtures/full browser suite.

Final restoration check: root predeploy copied/built 575 apps with zero failures/skips (912,164,716 bytes after deduplication). Root deploy published restored gh-pages commit `8ecadaf878ff9e304fbd86eacde91bc0489b47c3`. The remote Git tree contains exactly the 575 prior app folders and no draft; remote index Git blob matches restored source. Cache-busted public gallery is byte-identical to restored source/baseline, historical rendered categories/search passed, and candidate URL is still HTTP 404. The restoration Pages workflow need not be assumed complete: these are remote-tree and observed public-old-gallery checks, not successful candidate publication.
