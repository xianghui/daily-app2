# State Orchard — observed validation

## Local production bundle

- `npm run predeploy` passed; no fake model or deterministic inference fallback. Real Chrome, single-thread WASM CPU with GPU disabled.
- Two materially different synthetic tables executed real MiniLM: Support twins **16/16** endpoints; Library ladder **16/16**. These 32 endpoint occurrences repeat eight unique short endpoint phrasings. This is a tiny known-answer check, not general accuracy. Support: four reachable states reduce to two. Library: three reachable states remain three; one catalog state is unreachable. Unknown/negated instruction-like input still selected a nearest state and required a human hold. Sources remained data; no credential request or tool invocation.
- `core-test.mjs`: **1,000** generated machines compared every reachable pair against an independent product-graph equivalence oracle; all distinguishing witnesses replayed. Reviewed totality/duplicate guards, pending approvals, held scenarios, normalized-vector schema and invalid source bounds checked.
- `browser-test.cjs`: real maximum **8 states × 4 events = 32 transitions**, **72 embeddings / 18 chunks**, all rows preserved and complete audit reimported. A reviewed endpoint change changes reduced behavior, not merely audit text. Event duplication blocks output. Hold, multiline review notes, undo, export invalidation, JSON/CSV/Markdown/DOT/test CSV downloads and clipboard passed.
- Actual warmed-page **fresh-worker offline inference** passed with all network disabled. This is not cold offline reload/navigation. Cache eviction remains a limitation.
- Request capture from production startup through inference found only GET file downloads and no content in URL/body. Model-host downloads started only on explicit loading. Persisted audits retain host/path/query-key names, never signed CDN query values. Built credential-pattern scan and source integration inspection are performed during assembly; scans alone are not exhaustive proof.
- `defensive-test.cjs`: model-host network abort with real retry, unsupported WASM, failed worker download, unsupported module workers, malformed vector/envelope, 180-second watchdog (accelerated by fault injection), worker crash, late cancelled/input responses. Fault injection was used only for defensive checks, never successful AI claims. No fake rows were produced.
- `async-race-test.cjs`, `newer-run-test.cjs`, `cold-cancel-test.cjs`: delayed import and worker fetch cannot overwrite newer source; newer real inference survives an older delayed error; initial model download cancellation followed by real retry succeeds.
- Independent Python CSV/JSON parsing checked **7** exported audit envelopes, current reviewed links, all records, quoted commas/newlines and spreadsheet formula protection. Reduced DOT structural syntax and transition counts checked; four downloaded DOT graphs also parsed successfully using independent pydot (Graphviz renderer is not installed). Parser results are recorded in `artifact-validation.json`. Test CSV event lists round-trip as JSON arrays. Max audit reimport restores all 32 originals.
- Desktop **1440 px**, narrow **390/320 px**: no horizontal overflow; labels, focus, ≥44 px controls and actions checked. Normal viewport hero/review/results screenshots visually inspected. Physical phone inference, other browsers and assistive-tech user testing remain untested.

## Collection/public release

Gallery inline scripts compile with `new Function`; new AI Utilities entry appears exactly once, newest first; all 796 prior entries/categories preserved. Root assembly, legacy-runtime sharing, public asset/inference and Pages status results are recorded below. All release gates passed.


### Assembled collection checks

Root `npm run predeploy` passed: 797 built, zero failed/skipped. All prior 796 entries and all categories remain; AI Utilities is first and State Orchard newest. Full assembled production-bundle browser suite, both real neural fixtures, offline fresh-worker inference, exports and gallery rendering passed. The necessary `20261029-12` geometry sharing removed 541,470 byte-identical bytes; real older-app worker, built-in geometry, image/STL imports and parsed STL/design exports passed. App `dist/` and shared-runtime hashes match the assembly. Credential pattern scan clean; no provider/upload integration found. Initial combined size 999,681,681 bytes (final deploy may differ by tagline bytes), with the conservative 1,000,000,000-byte guard unchanged.


### Verified public release

Public release verified: matching Pages `f5453356435b3a3519ab7978aa28b3217a7696ed` and workflow `44996946423` succeeded. Seven public gallery/app/worker/factory/WASM assets byte-match the combined site. Both public real-AI fixtures (32/32 endpoint occurrences across eight repeated short phrasings), complete reviewed/export/maximum-batch/offline/privacy checks, all 797 gallery cards and the affected older app’s real worker/image/STL import/export regression passed. Combined size 999,681,689 bytes remains below the unchanged 1 GB guard. Source staging excludes and preserves unrelated recovery work. No digest sent.

Live URL: https://xianghui.github.io/daily-app2/20261122-16/ . Public production browser suite reran both actual AI fixtures, maximum 72-text batching, reviewed edits/holds/undo, artifact downloads and reimport, offline fresh-worker inference, privacy/network checks, invalid inputs and responsive actions. Independent artifact parsing reran after public downloads. `publication-status.json`, `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json` and public legacy regression reports contain observed evidence. No Pages fallback trigger or deployment retry was needed.
