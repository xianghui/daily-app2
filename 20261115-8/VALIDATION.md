# Observed validation — 2026-11-15

## Local production bundle

- `npm run predeploy` passed, React + Vite production base verified.
- Real default MiniLM q8 CPU inference in desktop Chrome with GPU disabled. Library: search/renew/reserve **3/3** expected matches. Travel: flight/hotel/rail/car **4/4** expected matches. These seven synthetic examples are not a general accuracy estimate. Unrelated instruction-like text still receives a nearest match: explicitly held by the reviewer and blocked from protocols, documenting the model limitation.
- Complete library block: fixed-order maximum position spread **6**, Williams **0**; directed-pair spread **6**, Williams **0**. Complete travel blocks: corresponding counts **8 → 0** and **8 → 0**. These are computed design counts, not measured time/bias improvements.
- Independent arithmetic suite checked every N=2…6 and roster size 1…48: all orders are permutations, all position/pair totals conserved, every complete block has zero position/pair spread. Missing/duplicate condition tasks block protocols.
- Real max inference: 6 conditions + 16 cards = 22 texts in chunks of four, 48 participants × 6 tasks = 288 protocol rows. All 16 original cards retained including 10 held extras. Maximum audit reimport resets approvals and performs fresh real inference.
- Browser review/condition reassignment/hold/undo and multiline edits passed. Edits disable stale exports. Independent Python `csv.DictReader` parsed downloaded CSVs, reconciled every ID and reviewed field, multiline quotes/commas and spreadsheet-formula escaping; protocol rows match every participant, order and reviewed instruction. Markdown/clipboard contents checked. JSON originals reimported in browser. See `artifact-validation.json`.
- Real warmed-page **fresh-worker offline inference** passed with all network disabled. No offline app-shell navigation/reload claim.
- Empty/null/malformed/oversized source, missing arrays, duplicate task/participant IDs, unsupported files and empty reviewed instructions rejected. Real cancel/retry and source-change stale run checks passed. Delayed file read, worker fetch and fault-injected late result could not overwrite changed input. Oversized file import rejected. Network failure followed by real retry succeeded.
- Fault injection, for defensive tests only: unavailable WASM, unsupported worker construction, worker download failure/error, malformed vector/envelope and accelerated 180s timeout all produce errors with no rows or export. Successful inference tests used the real unmodified model/worker.
- Browser request traces: GET file downloads only, no request bodies, no model-host requests before explicit loading. Build/shared runtime credential-pattern scan and source inspection found no credentials or remote-provider integrations. This is not a general security certification.
- Desktop 1440px and narrow 390px/320px layouts: no horizontal overflow, all form labels associated, controls ≥44px, focus traversal and copy/download actions pass. Normal viewport screenshots captured; phone overview and results visually inspected. Physical phones, other browser engines, screen-reader behavior and offline reload remain untested.

## Publication

Combined-site and public inference checks are recorded separately in `combined-*`, `public-*` and `publication-status.json` after publishing. A branch push alone is not proof of public availability.

## Combined-site build

The first root predeploy hit the conservative 1,000,000,000-byte budget by 11,727 bytes. Replaced the general-purpose CSV dependency with a small quoted CSV writer and reran real browser/artifact checks; no older apps or size guard were changed. Root predeploy/deploy now assemble 681 apps, zero failures/skips, 999,992,577 bytes. Complete combined-bundle real workflow/offline suite, runtime byte checks and preserved-gallery UI passed. All 680 prior working-tree gallery entries/categories retained.

## Public release — passed

Pages build `ddc7c12e1dc4e7f5b25a697a5d486e4a94d3bdca` reached `built`. Public app HTML/CSS/JS, shared worker, WASM factory and binary byte-match production files. The full real public-browser suite passed again: both known-answer fixtures, fresh-worker offline inference, max batch, reviewed edits/holds/undo, download/reimport/copy, partial-block notices, phone layouts and GET-download-only privacy trace. Downloaded public artifacts were independently parsed and reconciled again. Public gallery retains all 680 preceding working-tree entries and categories, with Order Canopy first among 681 apps. No rebuild trigger or Pages source change was needed.

Pre-existing root README/index edits and untracked `20261105-7/` and `20261109-17/` were preserved, not included in the builder source commit. The published gallery preserves the existing working-tree entry for Receipt Current; its unrelated source restoration remains uncommitted locally.
