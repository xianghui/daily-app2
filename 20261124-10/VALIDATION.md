# Observed validation — Precondition Desk (20261124-10)

## Local production bundle

- `npm run predeploy`: passed; React + Vite production bundle at the real deployment base. Shared module worker, factory and CPU WASM SHA-256 values match runtime-provenance.json.
- Actual headless installed Chrome, GPU disabled: both fixtures execute the default real MiniLM q8 CPU model. **8/8 intended contract links**, all eight known precondition outcomes (four passes/four failures across two batches). These are tiny synthetic fixtures, not general accuracy. Context-only change with identical path/current/saved tags switches version → exists and fails → passes via real inference.
- Competing-negation challenge intended `create` but retrieved `exists`. Mandatory human verification is prominently documented; no confidence percentages or universal correctness claim.
- `core-test.mjs`: **637 cases** passed: bounded exhaustive existence/current/saved ETag/mode combinations, weak/strong/case/empty/comma/backslash tags, path/control/header injection rejection, schemas, pending/held/blocked states and known outcomes.
- Real browser workflow: required review, intent changes, snapshot repair, malformed approved snapshot blocked, holds, undo, multiline note with quotes/commas/formula-leading text, original preservation, export invalidation, clipboard, actual JSON/CSV/Markdown/dry-run downloads and max-24 source-audit reimport. Four-text model chunks run on max batch. Cancellation/retry returns fresh real suggestions.
- `artifact-test.py`: **480 independent Python assertions** on browser downloads: CSV quoting/formula protection, JSON/Markdown records, current review fields, exact headers, independent precondition oracle, metrics and release conservation. All records retained, including held/blocked records in full audits; valid dry-run worksheets include predicted failures by design.
- Fresh worker created with all network disabled after successful warm inference: actual MiniLM inference passed. Scope is only an already-open warmed page; no cold offline reload/navigation claim.
- Nine defensive cases: real worker-download network abort; unavailable Worker/WebAssembly; worker construction/runtime error; malformed vectors; shortened timeout injection; late error; cancellation during delayed worker fetch. No fabricated suggestions. Fault injection is only for defensive tests; successful AI tests use real model inference.
- Actual Hugging Face model-download abort fails closed and explicit retry succeeds. Delayed File.text cannot overwrite newer input. A deliberately late, structurally valid injected result cannot overwrite a newer real-inference run. Keyboard tab order through contract/snapshot/decision passed.
- Request capture starts before page load: no model request before explicit invocation; captured network traffic consists of GET downloads with no bodies and no fixture context in URLs. Shared source dataflow inspected: public file downloads only, no inference endpoint or user-content fetch. Persisted traffic records omit signed query values. Credential-pattern scan found none in built text assets; scanner alone is not proof of every possible secret.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, every form control labeled, visible buttons/selects/inputs/summaries ≥44px. Normal viewport hero/review/results screenshots saved. Inspected hero-390 and review-320 visually: readable, uncut controls. Physical phone/cross-engine performance untested.

## Combined collection and public checks

Root gallery inline script compiled with Node new Function; missing scripts are a hard failure. New entry exactly once with correct area/folder; all **838 prior entries** preserved, **839 total**. Existing categories/styles retained; AI Utilities remains first. Root predeploy built/copied all 839 apps, zero failed/skipped. Byte-identical legacy geometry reuse adds 20261031-27 → 20261028-24 without editing its source builds or changing the 1,000,000,000-byte guard; affected real worker/import/export/restoration and public checks are recorded separately.

Assembled and public browser/asset/gallery/artifact reports record subsequent release checks. Publication is not established until matching Pages commit/build and actual public inference succeed; see publication-status.json for final status. No digest is sent by this builder.

## Explicitly not tested/claimed

Physical phones, other engines, low-memory devices, cold offline startup, general semantic accuracy, live HTTP requests, real server precondition compliance/authentication, sequential writes, multiple validators/date conditions, downstream production integration and prevented-overwrite/time-saving metrics. The utility never contacts an input endpoint, sends a request body or changes server state.


### Verified release

Matching Pages commit `03fa39b24c93c28ba18647dba927c1078846c147` reached **built**; workflow `45302997855` completed **success**. The public URL passed all nine app/gallery/shared-runtime exact byte matches, both real-model fixtures, context-only AI impact, review/edit/undo/hold/blocked worksheets, actual downloads, maximum-24 batch, warmed offline fresh-worker inference, privacy traffic checks and phone-width layout checks. Independently parsed public downloads passed **480** Python assertions; **36** dry-run entries round-tripped through actual browser Headers/Request constructors without sending them. All **839** public gallery cards render. Five affected legacy asset byte matches and real built-in/image/STL exports plus design restoration passed publicly. Combined site **999,543,916 bytes** is below the unchanged guard. No fallback, cold-offline, physical-phone or live-server claim. Source staging isolates this run from unrelated pre-existing recovery work.
