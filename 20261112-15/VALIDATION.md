# Observed validation — 2026-11-12

## Production bundle, real browser, real model

Chrome headless, WASM CPU, actual q8 MiniLM downloads and inference (no mocks on successful checks). `browser-validation.json` records fixtures and privacy:

- Print studio: binding, screen, packing, binding — 4/4 intended links. Labor 843.5333377293495 minutes versus constant-time 1176.
- Community kitchen: dumpling, icing, label, dumpling — 4/4 intended links. Labor 408.95052162430466 minutes versus constant-time 630.
- Negation challenge “Not sewing book signatures: wrapping notebooks in shipping cartons” incorrectly retrieved binding, not packing. Unrelated credential/instruction-like weather text still retrieved screen. Both remained pending and were held; aggregate output was blocked. These failures demonstrate why review is required. No universal accuracy claim.
- No model requests before explicit Load. Observed requests were GET without bodies, only local asset/model download traffic; no fixture content in URLs. Fresh worker with the entire context offline performed actual inference in the already-open warmed page. No offline reload claim.
- 24-record maximum input, four-text model batching, row conservation and maximum exported-envelope reimport passed. Imported JSON intentionally restores originals and resets review decisions.
- Empty/bad/oversized JSON, unsupported file, invalid reviewed numbers, cancellation/retry, input invalidation, source evidence, task-change defaults, review edits, holds, undo, clipboard and current-artifact downloads passed.
- Desktop 1440px and narrow 390/320px viewports: labels, focus, no horizontal overflow, screenshots saved. This is viewport testing, not a physical mobile performance test.

## Independent constraints/artifacts

`core-validation.json`: 1000 seeded natural-log oracle cases agreed with the log2 unit-time implementation; rates 100% exactly equal baseline for 48 boundary cases. Monotonic per-unit times, split-batch additivity, reviewed schema, vector dimension/finite/norm validation and original-record conservation checked. Unit 4 at an 80% rate is 64% of first-unit time, distinguishing Crawford unit time from cumulative average.

`artifact-validation.json`: Python json/csv parsers reopened actual browser downloads; reviewed unit edits, quoted comma/newline/formula-like notes, all 24 maximum-batch rows, and exported batch-total reconciliation passed. Markdown/clipboard contained current edits; held totals blocked; undo restored a released plan.

Defensive tests intentionally inject malformed vectors, unsupported module workers, worker errors and accelerated timeout ONLY to test rejection; those are not AI quality evidence. A blocked model host and worker download produced errors with no canned output; restoring the network allowed real inference. Additional tests record actual-worker WebAssembly absence, delayed import/worker-source cancellation, late old vectors ignored despite simulated ignored termination, and real model-host download cancellation followed by real inference retry.

## Publication

Root gallery/assembly and public asset/runtime/inference checks are recorded in their corresponding reports after release. Public browser validation repeats the full real-inference workflow at the Pages URL. Built text-asset credential-pattern scanning is a supplementary check, not a proof of absence of every conceivable secret. No optional provider or credential path exists.

### Completed public release

Pages commit `d45872285197746b8501f98cc2bf67356b45855b` built and deployed successfully on the first publication. `public-validation.json` confirms byte-identical public app files, bundled worker, local WASM factory, shared WASM and complete 616-entry gallery. `public-browser-validation.json` repeats real inference for both known-answer fixtures plus review/edit/hold/undo, current downloads, maximum batch, input errors, cancellation/stale-input protection and fresh-worker offline inference at the public Pages URL. Independent artifact parsers were rerun on public downloads. `public-gallery-validation.json` verifies newest-first display, all legacy categories and 1440/320px overflow checks. Physical phones, other browser engines and offline reload remain untested.

The combined local server uses the stable repository as its working directory: root deployment replaces `deploy/`, so a server whose current directory is inside that deleted tree must be restarted. Final post-deployment combined checks passed after restarting the harness. Downloaded CSV artifacts intentionally retain RFC-style CRLF record endings; Git's whitespace check reports those carriage returns, not application defects.
