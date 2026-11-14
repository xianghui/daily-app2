# Observed validation — Handoff Harbor

## Local production bundle

- `npm run predeploy` passed. Production paths used for module worker, local factory and shared WASM; no dev-server-only inference.
- Real no-key MiniLM q8 WASM CPU inference in headless installed Chrome with GPU disabled. Support fixture: 10/10 endpoint labels; repair fixture: 8/8. Tiny known-answer synthetic samples, **not general accuracy**. Outputs differed with the evidence.
- Support desk: direct resolution 0.4 vs conditional eventual 29/35; expected transitions 16/7. Repair: direct completion 0.4 vs eventual 10/13; expected transitions 40/13. These describe loops under assumptions, not measured gains.
- 1,000 independent seeded absorbing chains matched exact Python Fraction solutions; maximum absolute error 7.11e-15. `arithmetic-validation.json`.
- Browser suite: review required, endpoint corrections, count edits, holds, undo, stale-export invalidation, multiline owners/notes, clipboard, real downloads, 32-row/6-stage/70-text chunking, audit reimport and input-change invalidation. Conservation: every row retained, approved counts equal matrix totals, terminal probabilities sum to one. `browser-validation.json`.
- Independently reopened downloaded JSON/CSV/Markdown with Python; all rows, endpoint changes, counts and multiline quoted/formula-like cells survived. `artifact-validation.json`.
- Network-only downloads, GET/no bodies; no model-host requests before explicit loading. Built-asset credential-pattern scan and immutable runtime byte checks passed. This is a bounded source/request audit, not a general security certification. Download-token query values are omitted from persisted reports.
- Real offline inference in a fresh worker after online warming, all network blocked in the same open page. Offline reload/navigation untested and not claimed.
- Defensive faults: blocked model network with successful real retry, blocked worker download, absent WASM, unsupported module worker, worker error, malformed vectors/envelope and timeout. No fabricated results or enabled exports on failure. `defensive-validation.json`.
- Empty/invalid/oversized JSON, bad format, duplicate IDs, invalid counts/stage definitions, incomplete review, terminal outgoing edges, missing outgoing evidence and closed nonterminal loop blocked. All-held audit retains everything without a model.
- Delayed file import and worker-source download could not overwrite newer inputs. `import-stale-validation.json`, `download-stale-validation.json`.
- Desktop 1440 and phone-shaped 390/320 CSS-pixel viewports: no horizontal overflow, labeled fields, ≥44px buttons, keyboard focus and screenshots. Overview and 320px results screenshots visually inspected. Physical phone, other engines and screen-reader usage untested.

## Limitations observed

Instruction-like unrelated text still receives a nearest-stage suggestion. It stays inert and can be held; there is no semantic relevance guarantee, automated duplicate detection or evidence certification. Counts are user supplied. Holding rows changes the modeled distribution. Closed classes intentionally block a worksheet rather than silently inventing exits. Offline scope is only a warmed open page. Tiny fixtures are not a representative benchmark.

## Combined site and collection size

Root predeploy initially failed its existing 1,000,000,000-byte guard at 1,000,588,589 bytes. The deploy-only byte-verification script now also shares two identical older geometry WASM copies from `20261025-7` / `20261025-8` with the existing immutable copy in `20261028-24`. Original source builds and legacy JS filenames remain unchanged; rewritten worker and HTML references are query-versioned. Combined output is 999,506,265 bytes. Both affected older apps ran real geometry workers, imported their synthetic image and downloaded valid binary STL artifacts after rewriting. This is deployment asset maintenance, not a new STL app. The original `/Volumes/ExternalHD/daily_app` tree was not changed.

Combined production-bundle real-AI workflow suite passed again, every new app asset byte-matched its local production build, and all 675 prior gallery entries/categories were preserved. Gallery inline scripts compile, new entry occurs exactly once, desktop/phone search/render checks passed.

## Public deployment

Combined root deployment succeeded. Matching gh-pages `a71ce0b1578b0fcecd10b2d2b5d14c54b6fc690b` reached Pages built status and its workflow completed successfully. All 8 public app/worker/factory/shared-WASM files byte-matched the production build; public gallery matched the complete local index. Both real-AI fixtures and all 6 workflow check groups passed again at the public URL, including fresh-worker warmed-page offline inference, maximum batching, reviews, downloads and phone-width checks. Independent artifact parsing passed again on public downloads. Both older geometry apps passed actual public worker/import/export checks. All 675 prior gallery cards remain intact (676 total). See `publication-status.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json` and `public-legacy-runtime-validation.json`.
