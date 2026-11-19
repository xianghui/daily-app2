# Dose Atelier — observed validation

## Local production bundle

- Vite `npm run predeploy` passed. Real production dist served under its actual `/daily-app2/20261119-12/` base, not the dev server.
- Real no-key MiniLM inference, WASM CPU/GPU disabled: Paper & fabric → print/print/textile; Photo & manuscript → photo/photo/book. Six of six expected links on these tiny synthetic fixtures, not a general accuracy estimate. Model vectors drive editable object assignments.
- Paper total doses: 190 and 220 lux-hours; remaining whole days: 8 and 9. Intentionally invalid unweighted baseline days: 4 and 9. Archive totals: 140 and 100; days 6 and 5, baseline 3 and 5. Supplied limits are invented fixtures, not conservation recommendations.
- Independent arithmetic verification: 3,025 unit-hour accumulation and exhaustive whole-day oracle cases; schema/bounds, missing/held objects, zero lux, zero budget and malformed-vector tests passed.
- Actual downloaded JSON/audit CSV/Dose CSV/Markdown independently parsed with Python. All IDs/originals/reviewed fields, dose/day totals and negative over-budget remainder survive; multiline quotes/commas and formula-like notes escaped appropriately. JSON audit reimport preserves original maximum input and requires renewed AI/review.
- Maximum batch: 8 objects / 24 logs / 32 real model texts in four-text chunks; total dose 24,000,000,000 lux-hours, exact safe integers. Per-object identities manually reviewed in this stress test; not an eight-way accuracy claim.
- Pending approval blocks Apply; holds and missing objects block day exports; edits invalidate snapshots; undo, semantic remapping, numeric editing, copied current Markdown, zero remaining days for over-budget objects and missing-object retention tested.
- Fresh worker, already-open warmed page, all networking disabled: real inference passed. Cache API covers worker/factory/WASM/model. Offline reload/navigation not claimed.
- Empty/invalid/null/oversized input, duplicate IDs, invalid numbers/limits, invalid formats/files, cancel/retry, changed input, delayed old worker reply and delayed file import tested. Fault injection covers failed downloads/network, missing WASM, unsupported Worker, malformed vectors/envelope, worker error and 180-second timeout; no fake output survives. Network restoration followed by real inference passed.
- Request audit: no model-host downloads before explicit load; only GET/HEAD with no bodies or source text in URLs. No provider/key integration. Built text assets scanned for credential patterns in assembly/public audit; pattern scanning alone is not proof of absence of all secrets.
- Desktop 1440px, phone 390/320px: no horizontal overflow, ≥44px button heights, all controls labeled, visible focus; normal-viewport input/review/result screenshots visually inspected. Physical phones, low-memory hardware, non-Chrome browsers and screen readers untested.
- Irrelevant prompt-like text still returns a nearest object. It is never treated as authority; holding it blocks the worksheet. Model retrieval cannot verify object identity, complete logs, nonoverlap, budgets or conservation safety.

Reports are machine-generated alongside this file. Assembly, public Pages and legacy shared-runtime checks are recorded below only once observed.

## Combined-site assembly

- Root `npm run predeploy` passed: 721 apps built/copied, zero failed/skipped. Gallery root byte-matches source; every inline script compiled with Node new Function. Exactly one new ai-utility entry; all 720 prior entries unchanged; AI Utilities first, earlier STL/game categories/search intact. Desktop/phone gallery checks passed.
- Combined published assembly: 999,568,266 bytes, below existing conservative 1,000,000,000-byte guard. No guard weakening. Nine app/gallery/worker/factory/WASM assets byte-matched served assembly; built credential-pattern scan passed.
- Assembled production bundle passed the same complete real-AI fixture/review/export/privacy/offline/max-batch suite.
- To stay within the size guard, existing deploy-only byte-identical geometry reuse adds 20261028-26 → immutable 20261028-24 WASM (541,470 bytes, SHA-256 73e3b419ad31294f6b1cc478173944e50efc4a34bfdeeff0107bdfc12975f11c). Older source dist remains unchanged. Legacy JS compatibility URLs retained; revised entry/worker references query-versioned. Default geometry, PNG import and STL import yielded three distinct preview signatures and valid finite binary STL exports (3,188 / 3,036 / 2,956 triangles). No page errors.


## Public Pages release

- Root `npm run deploy` published the combined site. Matching Pages commit `8698b68eeddd12ad01a2fb9967fcc25e3eb0401f` reached `built`; workflow 44449447496 completed successfully on the first deployment. Source remains the existing gh-pages branch root. No configuration change/rebuild fallback needed.
- Thirteen public root/app/AI worker/factory/WASM/legacy assets byte-match the assembled production files. No embedded credential patterns/provider integration found. Public URL: https://xianghui.github.io/daily-app2/20261119-12/ .
- Complete public real-AI suite passed: both materially different fixtures, reviewed edits/holds/undo/numeric remaps, actual clipboard/downloaded artifacts, missing and over-budget handling, maximum batch and audit roundtrip, cancel/retry, input invalidation, privacy audit, responsive layouts and fresh-worker offline inference. Public artifacts independently parsed again with Python. No page errors.
- Public older app 20261028-26 passed default generation, PNG and STL imports, three distinct geometry signatures and parsed finite binary STL downloads using shared immutable geometry WASM.
- Public gallery retained all 720 prior cards, one new AI Utility (721 total), previous categories/search and responsive layouts. No digest sent.
