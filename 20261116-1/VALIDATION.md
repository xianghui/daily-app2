# Observed validation — Quote Crossings

## Local production bundle

- React/Vite per-app predeploy passed. Production base `/daily-app2/20261116-1/`; immutable same-origin worker/factory/WASM hashes audited separately.
- Real Chrome WASM CPU inference (GPU disabled), no mocks on successful workflow checks. European trip: 7/8 endpoint identities correct. `q2` source “Money used in Germany” incorrectly selected USD; human correction to EUR is explicitly exercised and preserved before applying. Pacific workshop: 8/8 endpoints correct. **15/16 on these tiny fixtures only, not universal accuracy.** Model evidence does not identify rate direction, availability or bid/ask.
- Corrected European worksheet: direct 1000 USD → 740 GBP; USD→EUR→GBP gives 765 GBP (difference 25 supplied-rate GBP). Pacific: direct 100000 JPY → 950 AUD; JPY→SGD→AUD gives approximately 990 AUD (difference approximately 40). These are illustrative supplied-rate arithmetic, not real savings. Pacific round-trip product 1.0098 is flagged as inconsistent, not tradable profit.
- 60 generated directed-graph cases independently enumerated by vertex permutations match path counts/products; hop-one baseline equals direct, missing paths and all-held batches remain unavailable. Separate cycle invariants verify closed simple cycles and cap/threshold semantics.
- Maximum 8 currencies / 24 distinct quote directions / 8 requests / 56 embedding texts processed in batches of four. Exact-description endpoint matches checked; complete downloaded 24-row audit reimport restores originals and renews pending reviews.
- Mandatory review, endpoint/rate edits, self/duplicate-direction blocking, pending reset, undo, held quotes, multiline notes, stale export invalidation, copy and actual JSON/CSV/Markdown downloads exercised. Independent artifact parser checks every row, exact JSON originals, current numeric rates, comma/quote/newline escaping and spreadsheet safety.
- Empty/malformed/oversized source, invalid rates/amounts/IDs/hops, unsupported/malformed/oversized files handled without results.
- Cancellation/retry, changed input invalidation, delayed import/download and older-result races tested. Defensive fault injection covers absent WASM, unsupported Workers, malformed vectors/envelopes, worker errors and timeout. Fresh-context model download failure and real recovery tested; worker download failure tested.
- Default path request audit confirms only GET asset downloads, no request bodies or source text in full URLs, and no model request before explicit load. Signed URL query values are not persisted. Built text credential-pattern scan passes; no provider integration or shared credential exists.
- Fully network-disabled fresh-worker inference passes inside an already-open warmed page. No offline app-shell reload/navigation claim; cache eviction/private-mode behavior is not guaranteed.
- Desktop 1440px and narrow 390/320px viewport screenshots, no horizontal overflow, associated labels, ≥44px buttons and keyboard focus tested. Physical phones/other browsers untested. Similarity is never displayed as confidence.

See machine-readable `browser-validation.json`, `defensive-validation.json`, `arithmetic-validation.json`, `artifact-validation.json` and stale-race reports for actual observations. Public and combined-site results are recorded below only after those checks run.

## Combined-site assembly and size guard

Root predeploy initially failed at 1,000,144,430 bytes. The existing deploy-only byte-identical Manifold reuse list was extended by `20261030-23`, retaining its source build/legacy JS URLs and query-versioned shell/worker references. Rebuild passed at **999,603,163 bytes**, 698 apps copied, zero failed/skipped. Real legacy worker checks passed for default, image import and STL import; downloaded meshes match preview/source fingerprints and independent STL validation. This is deployment compatibility regression testing, not part of the new utility workflow. Preserve shared geometry host `20261028-24`. No source assets of old apps were changed.

Final combined production-bundle real inference, 56-text maximum batch, review/artifact/privacy/offline suite and preserved 698-card gallery passed after removing global smooth scrolling that made rapid cancellation unstable in automation. The corrected cancellation/retry check passed on the final bundle.

## Public release

First matching Pages build `e9a3d90d34fe6314096caec8d042ec87435b27c0` reached **built**. Public app, worker, factory, WASM and gallery byte-match the final deployment. Both real-AI fixtures, required human correction, maximum batch, reviewed artifacts, cancellation/retry, stale-input protection, offline fresh-worker inference, privacy traffic checks and responsive gallery passed at the public URL. The preserved gallery has 698 cards, including all 697 prior entries. The affected legacy public shell/worker/shared WASM hashes and real default/image/mesh worker-export regression passed. See public reports and `publication-status.json`. Physical devices and offline reload remain untested; one of 16 simple fixture endpoints was wrong and required human correction.
