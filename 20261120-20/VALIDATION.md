# Bundle Orchard — observed checks (2026-11-20)

## Real model and known answers

Production Vite bundle in actual desktop Chrome with GPU disabled, real MiniLM q8/ONNX WASM CPU inference. No mocked successful AI path. Café basket: 4/4 intended category links. Art-shop basket: 4/4. These eight synthetic labels are not a broad accuracy estimate. Both reviewed baskets produce 600-cent optimal versus 500-cent largest-first discounts. Changing the first item's actual text to a different category changes its neural link and final discount to 300 cents. An unrelated instruction-like note is inert but can mislink; the observed category is recorded in `browser-validation.json`, and human hold is required.

The shared immutable worker/factory/WASM protocol and hashes were inspected and verified. Actual model host revision was rechecked this run. Four-text batching, mean pooling, finite normalized 384-vectors, q8 WASM CPU one-thread. Actual tokenizer ceiling 512; feature pipeline ignores per-call max_length. Descriptions separately capped at 300 characters. Shared model main remains unpinned and can change.

## Deterministic constraints

`core-test.mjs`: 600 seeded independently exhaustive assignment-oracle baskets match the exact solver. This oracle assigns each unit to a promotion or none rather than calling production candidate generation. No duplicate unit/promotion uses; no discount exceeds chosen subtotal; exact saving ≥ greedy. Maximum repeated-category case: 12 units, six triple rules, 1,320 candidates, 1,200-cent saving. Timing in `core-validation.json` is observed locally, not advertised productivity.

Browser checks cover individual prices, all-source conservation, exact-cent receipt reconciliation, mandatory review, held units remaining full price and ineligible, undo, edited prices, fractional-price rejection, originals-only audit imports, complete max-batch round trip and changed semantics affecting results. CSV/JSON/Markdown/receipt artifacts are actually downloaded; `artifact-test.py` independently parses all records, quoted commas/newlines, formula-escaped notes, numeric negative discount rows and reconciled payable totals. Clipboard preserves the reviewed multiline note.

## Defensive/privacy/cache checks

Actual network failure followed by successful real retry; model-worker download failure; absent WebAssembly; unavailable worker construction; malformed result vectors/message; worker error; accelerated 180-second timeout. Fault injection is only for defensive checks, never the successful AI evidence. No fabricated result/export on failure. Cold model download is intercepted then cancelled; real retry passes without stale output. Warm-run cancel/retry and source edits terminate/invalidate workers; input limits, empty/bad/oversized/unsupported JSON, unknown/repeated IDs and malformed promotion terms are rejected.

No model-host traffic before explicit loading. Recorded requests from production startup through inference contain GET/HEAD downloads only, no request bodies or source text in URLs. Persisted audit removes CDN query values. Manual integration review finds no remote-content inference, credentials or analytics; built-text credential pattern scan is clean (not an exhaustive security claim).

A fresh worker runs actual inference with the entire browser context offline after warming. This establishes **already-open warmed-page offline inference only**. Offline reload/startup is not promised. Physical phones and non-Chrome browsers are unverified.

## UI and publishing

1440, 390 and 320 widths have no page overflow; labels, visible keyboard focus and 44px touch controls checked. Normal viewport overview/review/results screenshots were visually inspected at desktop and phone widths. Zero page errors. Existing starter styles replaced. Complete gallery scripts compile, new entry exactly once, all 752 prior entries preserved, AI Utilities first, older categories and search work.

App predeploy and root combined assembly/deploy are required. Public hashes and actual public inference, artifacts, privacy and offline checks are recorded in `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`, `assembly-validation.json` and `publication-status.json` once completed. The unchanged 1,000,000,000-byte guard and all shared origins remain intact. Only this task's changes are committed; unrelated pre-existing recovery edits/drafts remain untouched.

Two test-helper issues were corrected: the Python newline reader used an unsupported Path.read_text argument, and the gallery-before helper expected tuple arrays rather than objects. A browser-close wait was bounded after all checks and report writing. These were harness corrections, not substituted AI or skipped assertions; checks were rerun.

Public real-AI suite passed on the final bundle: both 4/4 category fixtures, semantically changed discounts, complete reviewed downloads/clipboard, all-held/no-eligible cases, maximum repeated-category batching, cancellation/staleness, privacy and fresh-worker offline inference. Nine public gallery/app/runtime files byte-match the combined build, and the 753-card public gallery preserves all 752 prior entries. The final tab title/favicon correction changed shell assets only; final assembled and public suites were rerun. Matching Actions build/deploy succeeded; a stale errored legacy Pages API record was separately retriggered only after confirming no active run. Final status is in publication-status.json.

Final matching Pages head is now `built`; the documented legacy rebuild and Actions workflow 44725946355 succeeded without another branch push. Public asset bytes were rechecked after this same-head rebuild. No production AI code changed after the successful public suite.
