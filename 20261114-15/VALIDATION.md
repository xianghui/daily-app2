# Observed validation — Budget Beacon

## Local production bundle

- Real Chrome WASM CPU inference, GPU disabled: 12/12 intended links across two materially different six-window synthetic fixtures (shop checkout/search and media sign-in/image delivery). These tiny known answers are not a population accuracy claim.
- Shop checkout: 12,000 requests, 90 bad, 120 observed-request allowance, 30 remaining, 0.75× aggregate burn vs 2.7× equal-window burn; latest 5× crosses the configured 2× follow-up threshold. Search: 12,000 requests, 30 bad, 60 allowance, 0.5× aggregate burn.
- Negation challenge incorrectly selected checkout for an explicitly negated buying description that intended search. Candidate remains pending; human correction/hold essential. Unrelated instruction-like text likewise has no authority and can be held.
- Real inference with 32 windows (34 texts; batch size four), complete record/count conservation; real exhausted-budget case retained −10 allowance and missing-service PARTIAL flag.
- Core arithmetic checks include exact target boundary, negative remaining budget, empty services, missing coverage, hold exclusions, overlaps, invalid targets/counts and malformed vectors. 600 seeded cases compared allowances/counts with independent BigInt integer arithmetic and explicit per-minute coverage sets.
- Production-bundle Chrome tests passed review edits, service rejection, pending blocking, undo, holds, export invalidation, clipboard, malformed/empty/oversized JSON, unsupported file, invalid counts/times, overlap blocking, import originals, maximum audit reimport, cancel/retry, changed-input invalidation and late cancelled callback guards and delayed-file-import invalidation. Defensive-only injected workers cover malformed vectors/messages, worker construction/runtime errors, missing WebAssembly and timeout; successful AI paths always use real model.
- Fresh browser context network abort produces actionable failure and real model retry succeeds. Worker-file failure handled without fabricated output. With all network disabled after warming, a NEW worker successfully performs real CPU inference. Offline reload/navigation untested and not promised.
- Request capture from bundle startup through inference: no model-host call before explicit loading, only asset GETs/no request bodies, only same-origin runtime and documented model host/CDN. Built text assets scanned for common credential patterns; no matches. Shared WASM hash and factory match installed runtime. This pattern scan is not proof against every possible secret, but there is no credential integration.
- Actual downloaded JSON/CSV/Markdown and Summary CSV independently parsed with Python. All six reviewed rows and 32 maximum rows retained, original records identical, reviewed numbers matched, multiline quoted/comma/formula-like notes and owners preserved/escaped appropriately; summary reconciled. Reimport renewed all approvals.
- Desktop 1440px and narrow 390px/320px layouts tested: no horizontal overflow, labeled input controls, visible keyboard focus and ≥44px buttons. Normal phone screenshots of source/review/results visually inspected. Physical phones and non-Chrome browsers not tested.

Machine-readable reports and scripts are alongside this document (`browser-validation.json`, `core-validation.json`, `defensive-validation.json`, `stale-validation.json`, `edge-validation.json`, `artifact-validation.json`, `asset-validation.json`).

## Publishing

First combined deployment succeeded. Root predeploy assembled 664 apps (0 failures/0 skips), retaining all 663 previous gallery entries and legacy categories. Inline gallery scripts compiled; new AI entry occurs once. Published site size after existing runtime deduplication: 989,986,538 bytes.

GitHub Pages run `43564914090` completed successfully; Pages API reported **built** for the matching gh-pages commit `f06c1139f4c90d45ef3306c7d2b6dd5ccb5b1eb3`. Public URL: https://xianghui.github.io/daily-app2/20261114-15/ . App HTML/JS/CSS, worker, factory and shared WASM were fetched publicly and byte-matched with production artifacts. Public gallery byte-matched the assembled root and rendered all preserved categories/cards.

The full public real-browser suite passed both real-AI fixtures, review/edit/undo/holds and exported artifacts, invalid inputs, cancel/retry, max-batch conservation, instruction-like input, narrow layouts and warmed-page offline fresh-worker inference. Public edge checks reproduced exhausted allowance, missing-service partial coverage and the known negation mislink. Reports: `public-browser-validation.json`, `public-edge-validation.json`, `public-gallery-ui-validation.json`, `public-asset-validation.json`, `pages-build.json`, `publication-status.json`.

Pre-existing unrelated working-tree files/root edits were preserved, not claimed as this utility's implementation or included in its source commit.
