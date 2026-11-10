# Observed validation — 2026-11-11

## Local production build

- `npm run predeploy` passed. Real production bundle served with its `/daily-app2/20261111-6/` base, emitted module worker and same-origin shared WASM (no dev-server inference).
- Headless installed desktop Chrome/Playwright ran real q8 MiniLM WASM inference on two distinct synthetic manifests. Color workshop matched blue/red (2/2), stock draw 20/30 mL; Sweetness lab matched sugar/salt/blue (3/3), stock draw 50/20/10 mL. Literal stock-title baseline was 0/2 and 0/3, respectively. These tiny known-answer outcomes are not general accuracy estimates.
- Challenge: “Not blue food dye, use red food coloring for ruby water” incorrectly ranked blue. Unrelated instruction-like text also ranked blue. Both were held; no preparation emitted. Semantic similarity cannot establish identity, negation or compatibility.
- Maximum 6-stock/12-request manifest processed in batches of four; all 12 expected identities matched. Every original survived reviewed JSON and CSV exports and audit-original reimport. No lost rows.
- Review changes invalidate export snapshots and renew approvals; undo, pending blocking, reject/hold and confirmation blocking passed. Empty numeric values, target > stock and insufficient aggregate inventory blocked a ready worksheet.
- 500 generated valid plans passed independently asserted solute balance, volume balance and total-volume conservation; six malformed/oversized schema families rejected. CSV and JSON browser downloads independently parsed with Python, including comma/quote/newline/formula-like review text and maximum rows. Copied Markdown matched the downloaded artifact.
- A successful warmed-page run was followed by all-network-disabled fresh-worker real inference; passed. Worker source, factory, WASM and model were cached. No claim of offline reload/navigation. Cache eviction and storage-denied environments are not guaranteed offline.
- Production startup through inference request capture: only GET/no bodies; documented model file hosts and same-origin/runtime blob traffic. No model download before explicit Run. No user-content strings observed in URLs; no provider integration or key use. Built-text token-pattern scan passed; a scan is not exhaustive proof.
- Cancellation during loading, input-change stale guards, delayed file import, delayed worker download cancellation and real retry passed. A deliberately late terminated-worker result could not overwrite a newer run (defensive injection only). Actual worker WebAssembly-unavailable error and injected unsupported module workers, malformed vector, timeout, worker error and network/download failure showed no fabricated results. Network recovery real retry passed. Fault injection was only used for defensive checks, never successful inference.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, labeled editable fields, keyboard focus and export actions passed. Reviewed phone screenshot visually inspected. These are emulated viewport checks, not physical phone performance tests. Full screen-reader certification and other browsers untested.

## Publication

Combined assembly and public verification results are stored in `assembly-validation.json`, `public-validation.json`, `public-browser-validation.json`, and `hosting-attempts.json` when completed. Source commit/push state is recorded in `publication-status.json`. Never infer publication from build success alone.

### Completed public verification

- Root predeploy assembled 583 apps, zero failures/skips; shared WASM hash and every new app file matched deployment assembly. All 582 pre-existing workspace gallery entries/order remained unchanged and the new entry appeared once, first under AI Utilities. All inline gallery scripts compiled with Node `new Function`.
- Root `npm run deploy` published the combined collection. Pages workflow 42901827778 built/deployed commit `6447407769ce6c87c57e2ac7a12b887d6dacb82f` successfully; Pages API reports `built` for that exact gh-pages head.
- Public HTML/app JS/CSS, worker, runtime factory and shared WASM fetched successfully and matched local SHA-256/bytes. Public gallery matched working source byte-for-byte; AI Utilities, STL Generators, Mini Games and preserved older categories rendered.
- Full browser suite passed again at https://xianghui.github.io/daily-app2/20261111-6/: both real fixture inferences, all five expected identities, cached fresh-worker offline inference, maximum batch, review/edit/undo/hold, stock constraints, exports, input/cancel/retry and desktop/phone layouts. Public request capture again showed GET-only model/runtime files and no uploads. Physical phones, other browsers and offline navigation remain untested.
- Pre-existing unrelated workspace source edits/untracked folders are deliberately excluded from this app’s commit; they are not deleted or overwritten.
