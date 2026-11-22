# Observed validation — Filter Budget

- Commerce lookups: 3/3 real MiniLM identity suggestions matched known answers. Equal-memory estimated work 1573.4430 ms; optimized 967.9769 ms; blocks [5, 3, 4]. Analytical estimates, not measured latency.
- Library indexes: 3/3 real MiniLM identity suggestions matched known answers. Equal-memory estimated work 20644.8805 ms; optimized 5848.4543 ms; blocks [9, 1]. Analytical estimates, not measured latency.

- Production Chrome CPU inference, no GPU: both fixtures, maximum 40 embeddings/10 chunks, network capture GET-only file downloads, no content body/URL, no pre-load model requests.
- Maximum 32 source rows retained, 64 KiB allocation exact, all reviewed counts conserved; JSON source reimport restored originals.
- 90 independently exhaustively enumerated randomized allocations agreed with DP; 101 core checks passed.
- Pending/held reviews, metadata/count edits, notes, undo, export invalidation, clipboard and real downloaded JSON/CSV/Plan CSV/Markdown independently parsed. Newlines/quotes/formula guards survived.
- Already-open warmed page, networking disabled, worker terminated/recreated: real offline inference passed. Cold offline navigation not claimed.
- Download/network abort with real retry, unavailable workers/WASM, malformed vectors/envelopes, timeout and worker errors: no fabricated output. Fault injection used only for defensive checks.
- Late cancelled/input-change messages, delayed file and worker fetch, old delayed error after newer real inference: stale results ignored.
- Unknown/negated instruction-like text still selected nearest label, left pending; hold withheld plan. Similarity cannot prove identity.
- Desktop 1440 and phone viewports 390/320: no horizontal overflow; labels, keyboard focus, ≥44px controls; screenshots inspected. Physical phones/other browsers untested.

Publication/assembled checks are recorded separately; local tests alone are not proof of public release.

## Combined production assembly
801 gallery apps present, all 800 previously published entries retained, AI Utilities first and legacy categories/search intact. Every inline script compiled. New app and three immutable runtime dependency hashes match assembled bytes; credential-pattern scan clean alongside integration review. Existing 1 GB size guard unchanged: combined site 999,588,409 bytes. No new runtime-sharing rule needed. Full assembled-bundle browser workflow suite and independently reparsed artifacts passed; cold download cancellation showed progress, stopped before results, and real retry succeeded. Unrelated existing recovery edits preserved locally and excluded from release source.


Public release verified: matching Pages `4cbe12f5a054d861905bf206852b74922db886b8` and workflow `45020727709` succeeded. Nine public gallery/app/runtime assets byte-match the assembled site. Both public real-AI fixtures (6/6 simple identities), complete reviewed/export/maximum-batch/offline/privacy suite, independently parsed artifacts and all 801 gallery cards passed. Combined size 999,588,409 bytes remains below the unchanged 1 GB guard. Source staging preserves and excludes unrelated recovery work. No digest sent.
