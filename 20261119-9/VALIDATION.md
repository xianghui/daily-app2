# Observed validation — Replica Compass

- `npm run predeploy` passed with React/Vite production base `/daily-app2/20261119-9/`.
- Real MiniLM WASM CPU inference in Chrome: Read-heavy catalog `[read,read,write]`, Write-heavy journal `[write,write,read]`, all 6 known-answer groups matched. Read-heavy: 990 reads + 10 writes, R2/W4, 4.21 assumed ms/op versus all-node 40. Write-heavy: 50 reads + 950 writes, R3/W3, 14 assumed ms/op versus all-node 55. Baselines fail the fixtures' one-offline-node target and are labeled. No measured performance/accuracy claim.
- Independent exhaustive node-subset intersection/availability oracle checked 125 N/f/workload cases (N3–7). All selected pairs attained minimum modeled latency; infeasible targets returned no candidate.
- Real maximum 26-text inference, 24 million operations, nine-node/81-pair enumeration and maximum audit-original reimport passed. All reviewed groups/counts preserved.
- Actual browser-downloaded CSV, JSON, Markdown independently parsed/reopened. Multiline quoted formula-like notes survive JSON, are correctly quoted/neutralized in CSV and copied as current Markdown. Review/edit/remap/count/hold/undo and stale-export invalidation passed.
- Fresh worker with all network disabled ran actual inference successfully inside warmed open page. No offline page startup promise.
- Empty/invalid/oversized inputs, unsupported file formats, duplicate IDs, fractional/negative/out-of-range fields, infeasible tolerance, cancellation/retry and input-change invalidation passed.
- Eight defensive modes: real model-host network failure/recovery, no-WASM, worker download failure, unsupported Worker, malformed vectors, malformed envelope, timeout and worker error. No fake outputs. Separate delayed-file and late-old-worker tests protect newer inputs/results.
- Only GET/HEAD static requests observed; no request bodies or source text in URLs; no model requests before explicit loading. Reports retain URL origins/paths only, never signed query values. No remote inference integration.
- Desktop 1440px and phone 390/320px emulation: no horizontal overflow, ≥44px buttons, form labels/focus outlines; normal viewport input/review/result screenshots inspected. Physical phones, other browser engines and assistive tech untested.

Publication checks are recorded below after combined deployment; a branch push alone is not completion.

## Public release verified

Combined root predeploy assembled all 718 apps without failures. Final deploy footprint 999,853,709 bytes under the existing conservative 1 GB guard; no deployment script or old source build changed. Root deploy published `abe1418a32e255030251b15730f1696788beaa66`; matching Pages workflow [44426992781](https://github.com/xianghui/daily-app2/actions/runs/44426992781) succeeded and Pages reported `built`.

All 9 public app/gallery/worker/factory/WASM assets byte-matched the assembled build. The full real-AI workflow suite passed again at the public URL, including both fixtures, review/export/artifact checks, maximum batch, cancellation, privacy traffic, offline fresh worker and phone layouts. Public gallery rendered all 718 cards with 717 prior entries/categories unchanged. Separate public artifacts were independently parsed after download. No digest sent.
