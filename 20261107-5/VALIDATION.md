# Retrieval Bench validation — 2026-11-07

## Production bundle on local HTTP / current desktop Chrome

- Real MiniLM q8 ONNX inference on WASM CPU, no WebGPU. Help-center corpus: expected top-one results D1/D3, observed 2/2 versus keyword baseline 1/2. Garden corpus: G1/G3, observed 2/2 versus keyword 1/2. Combined 4/4 semantic, 2/4 keyword. Small authored development fixtures, not held-out/general accuracy. Actual vector scores are saved in browser-validation.json.
- Maximum 40 documents + 8 queries: 48 real neural embeddings in 12 batches, all 320 unique pairs preserved. No rows lost; all default relevance judgments unjudged.
- Review relevance/reject, note edits, undo, export snapshot invalidation, applied JSON/CSV downloads, qrels download and JSON clipboard passed. Unjudged-only qrels disabled. Independent Python parsers verified every original query/document/pair/judgment/note and numeric rank/score in downloaded artifacts, including quoted commas, newlines and spreadsheet-formula-like content. qrels reopened as Q1 0 D1 1.
- Fresh worker in already-open page with network disabled performed actual inference successfully. Successful online reload reused cached model assets with no additional external asset requests. Offline navigation/reopening is NOT claimed.
- Cancel/retry, cancellation during first model download, changes during active run, deliberately late cancelled worker response and delayed file read guards passed. Network failures for model host and local WASM produced errors and no results; retry after restoring network succeeded.
- Empty/bad headers/short rows/duplicate or invalid IDs/oversized cells/oversized paste/41 documents, empty/missing-expected-ID/9 queries, invalid K, unsupported PDF and oversized file inputs all rejected. Schema tests reject wrong dimensions, NaN/Infinity and non-normalized vectors, invalid grades and incomplete pair sets.
- Fault injection: missing Worker, missing WASM, malformed AI output, accelerated 180-second timeout, worker constructor failure and runtime error all surfaced safely. Fault injection is used only for guard tests; successful model checks use real inference.
- Network observation from app startup: no external requests before explicit loading; subsequent remote traffic only asset GET/HEAD requests without request bodies, using huggingface.co and us.aws.cdn.hf.co. No source content appeared in requests checked. Runtime code contains no remote inference path, telemetry or API keys. Built-text credential-pattern scan passed, not a mathematical guarantee about all possible secrets.
- Desktop 1440px and narrow 390px/320px layouts: no horizontal overflow, working review/export, associated form labels and keyboard focus. Screenshots visually inspected. Current desktop Chrome only; physical phones, Safari/Firefox, assistive technology audit and low-memory hardware remain untested.
- npm run predeploy passed. Shared WASM bytes match SHA-256 in asset-audit.json. Model weights are not pinned to an immutable revision; upstream changes require fixture reruns.

## Collection

Gallery inline scripts compile with Node new Function, new AI utility appears once, all 499 earlier entries preserved, AI Utilities category precedes older categories. Gallery browser check: 500 cards, search and earlier STL/Mini Games sections intact. Root predeploy: 500 built, zero failed/skipped; combined deploy includes every app entry point and byte-identical new app assets.

## Public verification

See deployment-validation.json and live-browser-validation.json for final public checks. Root combined deployment only; no individual-app publication.

Testing harness corrections: an initial test used an exact accessible name that omitted the decorative arrow; fixed the selector and reran the full suite successfully. The first combined-folder audit ran before assembly finished; rerun after root predeploy completed passed all 500 entries. These were test sequencing/selector issues, not substituted AI outputs.

Initial Pages attempt built successfully but its deploy job stayed in syncing_files and timed out after 10 minutes. The failed deploy job was retried using the same root artifact; pages-failure-1.log records the provider failure. Public success is not inferred from the branch push.

Failed-job rerun was accepted but remained queued with zero jobs for over three minutes; cancellation API returned "Cannot cancel a workflow run that is completed". Confirmed Pages deployment state failure and latest build errored before requesting a fresh legacy build (run 42288304249) of the unchanged gh-pages commit. No concurrent active file-sync jobs were started intentionally.

Second actual deployment (42288304249) also timed out after 10 minutes, this time after progressing to finished_file_sync; see pages-failure-2.log. Requested one final legacy rebuild on the same validated commit rather than changing model or older apps.

## Final outcome: UNPUBLISHED DRAFT

Third actual deployment (42290066829) timed out as well. Public app URL remained HTTP 404. Public inference, public worker/runtime hash verification and public new-app gallery verification therefore could not be completed. No live-browser-validation.json or deployment-validation.json success is claimed. The candidate was removed from root APPS and the combined deployment contents, retaining all 499 prior entries/apps. Draft source and local evidence are retained; no completed app was added.

Rollback audit passed: root predeploy copied all 499 previous apps, zero failed/skipped, and excluded 20261107-5. Public gallery browser check found 499 cards, AI Utilities first, STL/Mini Games preserved and search working; public HTML has no draft entry. Publication failure is isolated from successful local app validation.

Restored combined deployment branch pushed as `531cdd25d63612a2cd35cc2872415382d7363da6` via the root workflow (Published). This branch restoration is not claimed as a successful new-app deployment. The public gallery was independently verified to retain 499 prior apps and no draft entry.
