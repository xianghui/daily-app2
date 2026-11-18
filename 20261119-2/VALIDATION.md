# Tail Atlas validation

## Local production bundle

- `npm run predeploy` passed. No dev-server-only inference path.
- `core-test.mjs`: known-answer bucket totals, exact ranks/intervals, threshold counts, the 650 ms baseline, overflow null handling, source/count conservation, missing metrics and holds. Invalid vectors, edges, goals and counts rejected.
- `browser-test.cjs`: actual Chrome CPU neural inference for two materially different synthetic inputs. Storefront: checkout, checkout, image, image; media pipeline: index, index, video, video. **8/8 intended links on these tiny fixtures**, not general accuracy. Both groups' quantiles checked against known answers. No mocked successful AI path.
- Actual reviewed JSON/CSV/Markdown downloads and clipboard exercised. Independent Python CSV/JSON parser confirms every original, reviewed count, mapping, escaped multiline note and record survives. 24-window/8-metric maximum input inferred in chunks of four; audit round-trip retains all originals and resets approvals.
- Review, hold, undo, numeric edit, remap, export snapshot invalidation, input changes, cancellation with real retry and fresh-worker offline inference passed. Offline claim excludes reload/navigation.
- Empty/invalid/oversized/duplicate/count/edge/goal inputs and invalid/oversized/unsupported files rejected. Fault-injected download/network errors, unavailable WASM/module workers, malformed vectors/envelope, worker errors and timeout leave no output and exports disabled. Network recovery reran real AI.
- Delayed import cannot overwrite newer input. Fault-injected late old result cannot replace a completed newer run (defensive-only simulation, not evidence of AI).
- Irrelevant instruction-like text still returns a nearest metric: recorded challenge explicitly demonstrates this limitation; hold blocks the worksheet and no network authority is acquired.
- Production requests: no model downloads before explicit load; only GET/no bodies, same-origin assets and documented Hugging Face/CDN; fixture text absent from URLs. Reports retain paths/query-key names, never signed query values.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, >=44px buttons, associated form labels, keyboard focus and working review/export controls. Normal-viewport input/review/result screenshots visually inspected. Physical mobile hardware/other browsers untested.

## Gallery and publication

Gallery scripts compile with Node `new Function`; new ai-utility entry once, all 710 prior entries unchanged. Existing AI Utilities-first ordering and utility tagline preserved. Root assembly, assembled-production rerun, secret pattern scan and public Pages/asset/inference results are recorded below after execution.

Root predeploy initially failed the conservative size guard at 1,000,164,436 bytes. Extended existing deploy-only byte-identical geometry runtime reuse to `20261030-26` → `20261028-24`, preserving source dist files and legacy JS URLs with query-versioned references. Retry passed at 999,623,171 bytes, 711 apps, zero failures/skips. Legacy browser generation, image import and valid binary STL downloads passed on the assembled bundle. All Tail Atlas served app/worker/factory/WASM bytes match source builds; credential-pattern scan passed. No provider integration exists.

Additional independent oracle: 1,000 deterministic-seeded raw sample sets were sorted directly; each exact raw nearest-rank value lies in the histogram-reported interval, including edge and overflow semantics.

## Public release verified

Matching gh-pages commit `fefc924839c14ea6ae90500283853c3a12425452` reached built on the first publish. Public app HTML/JS/CSS plus worker/factory/WASM are byte-identical to assembled production assets. Both real MiniLM fixture sets, maximum batch, reviewed downloads/clipboard, invalid inputs, cancellation/retry, privacy request audit, fresh-worker offline inference and desktop/narrow layouts passed again at the public URL. Independent artifact parser passed on public downloads. Public gallery renders all 711 cards and preserves categories/search. The newly deduplicated older app passed real public model generation/image import/valid STL download. Physical mobile devices and offline navigation remain untested.
