# Byte Loom — observed validation

## Local production bundle

- `npm run predeploy` passed; React/Vite production base `/daily-app2/20261123-13/`.
- Desktop Chrome, headless with GPU disabled; real WASM CPU MiniLM inference. Both materially different synthetic batches matched all six intended layouts each (12/12 tiny known-answer links, **not general accuracy**).
- Sensor intake decoded `[-10,1000,-128,250,65536,32767]`; five records passed range, one deliberately exceeded the supplied 30000 maximum. Three of six decodable values differed from unsigned-LE baseline. Archive migration decoded `[-1000,65536,-32768,125,1,127]`; six passed range, five differed from baseline. Differences are not measured AI error reductions.
- Negated note “Not a water meter…” proposed pulse instead of intended temperature. It stayed pending; test reviewer held it. Semantic retrieval cannot establish identity or negation reliably.
- 3,600 independent Node Buffer signed/unsigned byte-order decoding/re-encoding oracles, all widths 1/2/4, passed, plus malformed hex/width/schema/vector guards. Independent Python `int.from_bytes` verifies downloaded release integers.
- Real maximum batch: eight profiles plus 24 records, 32 embeddings in eight chunks, complete record conservation and source restoration from exported audit JSON.
- Mandatory approval, edit-reset approval, reviewer holds, undo, invalidated export snapshots, multiline hex/reviewer notes, clipboard, downloaded current JSON/CSV/Markdown/release artifacts passed. Python CSV/JSON and Markdown embedded audit parsing passed; reviewed -999 remains signed numeric, formula-like multiline notes are escaped. All original records survive; blocked/held records are excluded only from release.
- Fresh worker real inference passed with network disabled in an already-open warmed page. Cold offline reload/navigation is **not tested or promised**.
- Real cold model-loading progress/cancellation/retry passed. Fault-injected missing WebAssembly, unavailable workers, network/model and worker-download failure, malformed vectors/envelopes, worker error, timeout, late results after cancel/input change passed without fake output. Network recovery successfully reran the real model. Delayed file reads/worker fetches and old-worker/new-real-run race checks passed.
- Empty/invalid/oversized source, unsupported file and >16 MB file were rejected. Desktop 1440 and narrow 390/320 widths passed no-horizontal-overflow, explicit form labels, focus and ≥44px controls. Normal viewport screenshots were visually inspected.
- Network recorded from production startup through inference: no model host before explicit click; GET-only asset downloads without request bodies or user context in URLs. Only sanitized host/path/query-key metadata is persisted. No remote content inference or credentials. Built text assets passed credential pattern scan; integration code inspected, not a claim of exhaustive secret detection.

## Scope and limitations

Tests use synthetic fixtures only. Unknown/negated context is a demonstrated retrieval limitation. Supplied layout and range remain human responsibility; round trips do not prove meaning, authenticity or calibration. One integer per record, not protocol detection or equipment control. Other browser engines, physical phones, low-memory devices and cold offline app startup remain untested.

Machine evidence: browser-validation.json, core-validation.json, artifact-validation.json, defensive-validation.json, async-race-validation.json, superseded-run-validation.json, cold-cancel-validation.json, runtime-dependency-audit.json and bundle-secret-scan.json. Combined-site and public results are appended after completion; no public-success claim follows merely from pushing gh-pages.

## Combined deployment bundle

Root `npm run predeploy` assembled all **818** apps with zero failed/skipped builds. All 817 earlier gallery entries were preserved, the new AI Utilities entry occurs once, every inline script compiled via Node `new Function`, and the real gallery/category/search rendered. Combined published bytes: **999,842,260**, below unchanged 1,000,000,000 guard. No new runtime-sharing rules or source-build mutations.

The complete browser workflow, both real-AI fixtures, maximum batch, offline fresh-worker, review/export/privacy and responsive checks passed again against the actual root `deploy/` bundle, followed by independent artifact parsing. Seven served gallery/app/JS/CSS/worker/factory/WASM URLs byte-matched their deployment files. Root `npm run deploy` is used, never per-app deployment. See assembled-* reports and root build/deployment logs.

## Public release verified

GitHub Pages commit `56f1fd4d882bd5bdc9db7d643aab103b81976f53` reached **built**, matching remote gh-pages. Workflow `45110008002` completed successfully. The public app is https://xianghui.github.io/daily-app2/20261123-13/ .

Seven public gallery/app/JS/CSS/worker/factory/WASM assets byte-match root deploy/. The complete public real-AI browser suite passed again: both fixtures (12/12 intended simple links), review/edit/undo/holds, download and clipboard artifacts, invalid inputs, maximum batch/chunks, cancellation/retry, fresh-worker offline inference in the warmed page, input and runtime privacy checks, and desktop/phone-width actions/layout. Independently parsed public JSON/CSV/Markdown/release outputs preserve reviewed values and every required record. All **818** public gallery cards render; AI Utilities remains first and STL Generators/Mini Games remain intact. No page errors.

Evidence: pages-build.json, pages-workflow.json, public-asset-audit.json, public-browser-validation.json, public-artifact-validation.json, public-gallery-validation.json and public screenshots/artifacts. Physical phones/other browser engines and cold offline navigation remain untested. No digest sent. Unrelated pre-existing recovery changes are preserved and excluded from source staging.
