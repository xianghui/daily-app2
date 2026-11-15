# Quorum Canopy — observed validation

All data are synthetic. Successful inference tests use the real downloaded MiniLM q8 model and WASM CPU, not mock responses. Fault injections are isolated to defensive tests.

## Local production bundle

- `npm run predeploy` passed. React + Vite base `/daily-app2/20261115-13/`; app code bundled locally. Shared immutable CPU worker/factory/WASM paths inspected and byte-audited.
- `browser-test.cjs` passed real Chrome CPU inference (GPU disabled), two distinct inputs: maker-association proxy chains and community-venue direct proxies. Intended endpoints **10/10**. Fixture 1: direct weight 2, represented 10, required 8/10. Fixture 2: direct 3, represented 12, required 9/12. This is a small easy known-answer set, not general identity accuracy. AI proposals change the reviewed graph; deterministic arithmetic alone does not produce those proposals.
- Review is mandatory; holds, undo, both endpoint edits, approval reset, applied-export invalidation, multiline notes, copy, actual CSV/JSON/Markdown/roster downloads and original-only audit reimport passed. Independent Python CSV/JSON parser checked every proxy/member record, exact weights, original snippets and escaped quotes/commas/newlines/formula-like text. A first Markdown assertion was corrected to account for intentional list indentation; exported note content was unchanged.
- Maximum **12 members / 48 proxy notes / 108 embedding texts**, four-text inference chunks, complete export and audit-original reimport passed. All-held proxies preserve direct attendance and every member. No artificial missing-member totals.
- Empty/malformed/oversized source, duplicate IDs, missing arrays, fractional weights, bad quorum/chain setting, oversized descriptions, unsupported file format and >2 MB file rejection passed.
- Cancel/retry and input changes passed. Separate delayed-worker-source, delayed-file-read, late-cancelled-worker and old-run-after-new-run tests passed. Mock workers in these four tests test stale-message defense only, not inference quality.
- `defensive-test.cjs` passed model-host failure then successful real-model retry; worker download failure; disabled WASM; unavailable module workers; malformed vector output and malformed message envelope; worker errors; accelerated timeout. All failures leave no fabricated recommendations/exports. Timeout acceleration and failure injection are defensive tests only.
- `boundary-test.cjs` passed actual UI graph correction tests: cycles, duplicate delegations, present-member outgoing proxy, proxy capacity, disabled chains, absent terminal exclusion and exact ceiling of an 81% threshold (9 of 10). Broken chain case represented only 3 of 10, leaving 7 visibly unrepresented.
- `arithmetic-test.mjs`: **5,000 graph cases** (all 625 four-node functional graphs × four attendance masks × two chain settings, cap 2) agreed with independent transitive-closure oracle, plus explicit review, duplicate, schema, zero-norm-vector, all-held and threshold checks. This verifies modeled rules, not external legal rules.
- Production page requested no model before explicit load. Recorded requests from startup through all inference were GET downloads without bodies. Source/runtime paths inspected; no user content in URLs, no remote inference/upload endpoint. Built text assets and shared dependencies scanned for credential patterns. Audit stores CDN query key names, never temporary signed query values.
- Fully blocked network after successful online use: new worker executes real inference in the **already-open warmed page**. Offline reload/startup not tested or promised. Cache eviction/private browsing and physical low-memory devices unverified.
- Desktop 1440 px, narrow 390 and 320 px: no horizontal overflow; all controls labeled; buttons ≥44 px; keyboard focus check passed. Normal viewport screenshots inspected for overview and results; all overview/review/results images saved. Physical phones and non-Chrome browsers unverified.

## Known limitations

Embedding similarity is not identity authentication, mandate validity or confidence. An instruction-like unrelated challenge still received a nearest member; holding it preserved direct attendance only. Weights, actual attendance and legal rules are supplied assumptions. Self/duplicate/cyclic links block rather than guess. No split/agenda-specific/time-versioned mandates, ballot execution, official legal quorum declaration or external actions. A complete register and external signed-evidence verification remain essential.

## Gallery and publication

See `gallery-validation.json` for compilation of every inline script and exact new-entry/older-entry preservation. Combined production and public verification reports will record actual deployment results; source branch push alone is not publication proof. Shared hosts `20261115-6` and `20261107-2` must remain published.

## Combined-site checks

Root predeploy initially exceeded the unchanged conservative 1 GB guard. Extend the existing deploy-only byte-identical geometry WASM reuse to `20261030-17`, retaining source build and legacy JS URLs with query-versioned entry references. SHA-256 matches the immutable `20261028-24` runtime: `73e3b419ad31294f6b1cc478173944e50efc4a34bfdeeff0107bdfc12975f11c`. Root predeploy then assembled all 686 entries at **999,699,977 bytes**, below the guard. The affected older app passed real browser geometry generation, local image import and downloaded binary STL parse. No legacy category was relabeled. Root inline scripts compile; the new entry appears exactly once; all 685 prior working-tree entries, category order, searches and narrow layouts passed.

## Public verification

First matching GitHub Pages build `8fe00083cf0f33996299e1b4ad4909640b9c34b4` reached **built**. Public app and all shared AI/runtime assets plus modified legacy geometry assets byte-match the assembled bundle. Both real-AI fixtures, all seven workflow test groups, actual reviewed artifact round-trips, already-open warmed-page offline fresh-worker inference, request privacy audit, 686-card preserved gallery and the affected legacy geometry worker/import/STL-export check passed at public URLs. See `public-*-validation.json`, `pages-build.json` and `publication-status.json`. No digest sent.
