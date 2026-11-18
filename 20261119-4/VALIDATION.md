# Phase Folio — observed validation

## Local production build
- `npm run predeploy` passed (React + Vite, actual static base).
- Real Chrome CPU/WASM inference, not mocked, matched **14/14** intended identities over two materially different synthetic fixtures: eight midnight delivery records and six daytime service records. This small easy set is not an accuracy estimate.
- Midnight bread window: 23:50 → 00:20, width 30 minutes, 3/4 events covered at 75% target. Circular mean 00:10 versus linear 09:05; mean shortest clock distance 185 versus 447.5 minutes. Linen window 06:00 → 06:20, 20 minutes and 3/4 coverage. One noon bread outlier is retained outside the arc.
- Daytime recycling window: 08:00 → 08:40 (40 minutes); gardening: 13:00 → 14:00 (60 minutes), each 3/3 events at 100% target.
- Known opposite-phase fixture produces undefined circular means, not fabricated times. Irrelevant instruction-like text still gets a nearest candidate: held explicitly, calculation blocked. Embeddings do not establish truth/identity and cannot safely reject every unrelated input.
- Core tests: explicit wrap/tie/duplicate/opposite fixtures plus 300 generated sets agree with an independent exhaustive endpoint oracle; row and arc-coverage constraints pass.
- Maximum batch: 8 streams, 24 events, 32 texts in four-text chunks, every source retained; maximum audit reimport retains originals and resets reviews.
- Reviewed-minute and stream edits, mandatory approval reset, pending/hold blocking, undo, multiline notes, current-snapshot invalidation and clipboard checked. Independent Python parsed browser-downloaded JSON/CSV/Markdown; rows, originals, reviewed fields, quotes, commas and multiline formula-like strings survive correctly.
- Fresh-worker **real inference with browser offline** passes in warmed open page. This does not test offline navigation/reload, physical devices or cache-evicted sessions.
- Invalid/empty/oversized/duplicate/malformed inputs, unsupported formats, invalid clock minutes and missing groups handled. Cancel/retry and input-change invalidation tested with real model; fault-injected late old-worker result cannot overwrite newer completed run; delayed file import cannot overwrite newer source.
- Defensive injection: blocked model network with successful real retry; missing WebAssembly; failed worker download; unsupported Worker; malformed vector and null envelope; 180-second timer accelerated for timeout branch; worker error. All produce no fake results or enabled export. Injection is ONLY defensive, not evidence of working AI.
- Network inspection from production startup through inference: no model request before explicit invocation, all requests GET with no bodies, no fixture content in URLs; only same-origin/Hugging Face/CDN downloads. No optional provider integration. Text-asset credential-pattern scan supplemented by code/data-flow inspection.
- Desktop 1440px and narrow 390/320px labels, focus, touch-height controls, no horizontal overflow and input/review/results screenshots checked. Other browser engines, actual touch hardware and screen-reader speech untested.

Machine-readable reports and actual exported fixtures accompany this file. Shared runtime worker/factory/WASM paths are audited against assembled deployment and public bytes before completion. Publication outcome is recorded separately.

## Combined assembly
Root `npm run predeploy` passed with 713 apps, zero failed/skipped, after deploy-only byte-identical geometry WASM reuse. Total assembled bytes: 999,609,793, below the existing decimal 1 GB guard. All 712 prior gallery entries remain unchanged and the new entry appears once as AI Utilities (first category). Every inline script compiles; full gallery render/search/legacy categories passed. Shared AI worker/factory/WASM and all app assets are byte-identical to served assembly. Legacy `20261030-27` still generates a nonempty valid binary STL; real PNG import changes geometry and produces another valid STL using the shared WASM, with no page errors.
