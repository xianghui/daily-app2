# Warpwise Desk — observed validation

## Local production bundle

- React/Vite `npm run predeploy` passed; exact deployment base `/daily-app2/20261127-6/`. No backend, shared credentials or optional provider integration.
- Desktop Chrome, GPU disabled: **real q8 MiniLM inference** matched `cotton,wool` and `linen,linen,silk` against known synthetic yarn descriptions (5/5 easy notes). A trivial first-reference baseline gets 1/5. This tiny set is not representative semantic accuracy.
- Negation probe `Not cotton. Only silk filament yarn.` incorrectly chose **cotton**. Unrelated credential-request text also forced cotton but caused no upload or authority change. All model suggestions remain pending until human approval/hold. These failures are documented, not hidden as confident predictions.
- Example 1: 352 cotton ends × 2041 mm; 96 wool ends × 4540 mm. Total **1,154.272 m**, versus **943.2 m** unadjusted baseline.
- Example 2: linen **1,445.542 m** required against **1,350 m** stock; **95.542 m shortage**. The unadjusted **1,290.2 m** baseline misses it. Stock gap blocks operational CSV, never the complete audit.
- Independent Python Fraction replay: **300 randomized cases / 6,219 assertions**, including conservative ceilings, motif counts, selvedges, reed widths, per-end warp length, all shared stock pools, baseline and release gates. Separate known-answer, zero-allowance and maximum-safe-integer tests passed.
- Actual reed width 440 mm fails a 435 mm loom even though the pre-motif allowance width is 435 mm. End-capacity violation also blocks operational CSV while retaining every source.
- Required review, holds, dimension/profile/repeat edits, stale-export invalidation, undo, multiline reviewer note, copy/download, 12-project/8-profile max batch and audit reimport tested. Model computes 20 embeddings in five chunks at the maximum batch.
- 41 bad/empty/oversized input guards; unsupported/oversized file import; actual model/worker download aborts; unsupported Worker/WASM; worker construction/error; malformed vector output; timeout; cancel during pending fetch; late cancelled response; successful real retry all passed. Fault injection applies ONLY to defensive tests.
- Fully network-disabled **fresh-worker real inference in the already-open warmed page** passed. Cold offline navigation/reload is not claimed. Cache eviction/device memory behavior is not guaranteed.
- Requests from initial production startup through inference were inspected: no model-host request before explicit loading; GET downloads only, no bodies, no source text in URLs; external destinations limited to Hugging Face/HF CDN hosts. Persisted audit strips signed query VALUES. Built text credential-pattern scan and source integration review found no embedded provider credentials; pattern scanning alone is not exhaustive proof.
- Desktop 1440, phone-width 390 and 320 layouts: no horizontal overflow, visible input/review/result snapshots, labels, keyboard tab order and ≥44px buttons/input/selects. Screenshots manually inspected. Physical phones, other engines, screen-reader usability and low-memory hardware remain unverified.

## Artifacts and runtime

`browser-test.cjs` downloads actual JSON, CSV and Markdown; `artifact-test.py` uses independent Python JSON/CSV parsers and Fraction arithmetic to compare original/review identity, approved plan counts, formulas, stock conservation, release gating, baseline totals and exports. Edited multiline formula-like text is preserved in JSON/Markdown and deliberately apostrophe-escaped in CSV. Maximum-batch JSON reimport restores all originals, requiring renewed review.

Runtime protocol, normalized pooling, four-text batches and single-thread WASM setting inspected from the actual shared worker. Exact shared file hashes in `runtime-provenance.json` and `bundle-audit.json`. Tokenizer max length is observed from downloaded config; worker's `max_length:256` is not claimed as an enforced cap. Application text limit is 200 characters. Immutable shared dependencies remain unchanged.

## Publishing status

Local validations passed. Combined assembly, public Pages commit/assets, public real inference/artifacts and gallery checks are recorded below after completion. Do not treat branch push alone as successful release.

## Known scope limitations

Synthetic textile profiles only, not validated production specifications. Nearest-reference retrieval mishandles negation/unrelated text; verify exact yarn/sample identity. Fixed contraction/take-up ratios and common sett (including selvedges), one continuous warp, one waste allowance, no inter-piece gaps. Warp-only calculation omits weft, joins, breakage, tension/strength, sampling, mistakes, equipment geometry and production tolerances. Conservative integer ceilings satisfy the modeled inequalities, not actual finished-size or safe-operation guarantees. No orders or loom actions occur.

## Assembled-site preflight

Root predeploy passed: **906 builds, zero failures/skips**, combined tree **821,778,478 bytes** before the small tagline change; the existing size guard and runtime-sharing rules are unchanged. All nine gallery/app/shared-runtime file hashes matched the assembled tree. The real browser workflow suite was rerun from the assembled production bundle, including explicit review of example 2 to reduce piece count, enable operational CSV, and undo to restore the stock gap. Independent parsers validated **16 downloaded audit artifacts / 1,190 assertions**. Real worker-download failure recovered to real inference; a late old schema-valid response/error could not replace a newer real run. Gallery rendered all **906** cards, new app once and first, AI Utilities first, older categories/search/phone layouts intact. Actual downloaded tokenizer config reports model_max_length 512.

## Verified public release

GitHub Pages reports **built** for matching gh-pages commit `a2a00e95985aabd4677424ab38a96e2d80663a2e`; workflow **45896326739** completed successfully. The public root, app, app assets and immutable worker/factory/WASM all matched local production bytes (**9 exact files**). Full public real-AI workflow suite passed, including both known-answer fixtures, review/edit/undo, explicit stock-gap repair and reversal, all maximum-batch records, cancellation/retry, input guards, clipboard/downloads, network privacy and fully offline fresh-worker scope. Independent parsers verified **16 public audit artifacts / 1,190 assertions**. Actual public worker-download failure recovered to real inference; late old schema-valid results/errors could not replace a newer real run. Public gallery rendered **906 cards**, preserving previous entries/categories, search and narrow layouts. Public result screenshots manually inspected.

Final root publishing lifecycle assembled **821,778,479 bytes**, below the unchanged size guard. No runtime-sharing changes or digest messages. Known limitations above still apply; these tests do not establish real textile production outcomes or representative semantic accuracy.
