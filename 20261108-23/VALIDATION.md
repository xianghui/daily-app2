# Observed validation — Dependency Lens

Production Vite bundle served under its exact `/daily-app2/20261108-23/` base. Real headless desktop Chrome, ONNX WASM CPU; no mocked success or deterministic fallback.

- Community event: expected/actual producers art, venue, print (3/3). All 5 tasks retained. Exact-description baseline 0/3; AI proposals 3/3. User-estimated sequential total 10h; dependency-only lower bound 8h.
- Data release: expected/actual clean, eval, train (3/3). All 5 tasks retained. Exact baseline 0/3; proposals 3/3. Sequential 10h; lower bound 9h. These are computed planning estimates, not measured productivity.
- Challenge: forbidden/negated artwork still proposed art; human hold necessary. Hostile credential-upload text was inert and produced no above-floor link. No request or action executed from inputs.
- Review/hold/edit/undo verified; edited notes survive JSON/CSV/Markdown, clipboard equals downloaded Markdown. Held training input blocks train, eval and report (3 tasks) and excludes them from both timing metrics. Cycle creation rejects apply; correcting it permits apply.
- Maximum 24 tasks/48 requirements = 72 texts, four-text inference batches; 48 review rows and all originals retained through JSON reimport. All-held batch blocks all 24 tasks. No self-candidates. Zero-requirement fixture produces independent timings after actual model inference.
- Empty/invalid/null/oversized JSON, duplicate IDs, excessive tasks, long fields, invalid hours/floor/requirements and unsupported PDF reject cleanly. Cancellation, input changes, retry, failed worker download/recovery, obsolete fetch and late cancelled worker messages tested.
- Fault-injected malformed vectors, worker construction/runtime failure, worker crash and 180-second timeout handled without fake output. Successful runs always use the real model.
- Fresh profile model-host failure leaves no result; network restored and real retry succeeds (network-validation.json).
- After online inference, network disabled and worker terminated/recreated: real offline inference succeeds from caches in the already-open page. No offline reload claim. Context request capture shows only GETs with no bodies, static model/runtime assets and no user-content uploads; no model-host request before explicit Run.
- Independent Python parsers verify CSV task+requirement row counts, originals, durations, provider/status fields and quoted multiline formula-like notes. JSON maximum-batch round trip lossless; Markdown/clipboard current review agrees.
- 1440px desktop and 320/390px narrow phones: no horizontal overflow, labeled review controls, visible keyboard focus, touch-size buttons, working exports. Screenshots retained. Actual phone hardware, non-Chrome browsers, screen readers and offline navigation not tested.
- Built asset SHA-256 audit, shared-WASM byte identity and credential pattern scan passed. Source has no remote provider/key integration. Secret scan is not a universal security proof.
- Gallery scripts compiled with Node new Function, unique correctly categorized entry, all prior entries unchanged; rendered gallery checked with older categories intact.

Machine reports and browser scripts provide reproducible evidence. Tiny synthetic fixture success is not general accuracy, dependency truth or a resource-feasible schedule guarantee. Public deployment evidence is recorded separately after publishing.

Final audit correction: maximum-batch JSON is approximately 119 KB, larger than the 100 KB task-input limit. Audit envelopes now accept up to 1 MB while extracted original task JSON remains capped at 100 KB. The browser suite was rerun and now explicitly verifies the file import succeeded, contains `dependency-lens/v1` in the editor and restores the original maximum batch, rather than inadvertently rerunning the previous text after a rejected file. Additional deterministic checks cover two-input AND timing, explicit external availability and transitive holds (boundary-validation.json).

## Public verification

Corrected combined site published at https://xianghui.github.io/daily-app2/20261108-23/ . GitHub Pages reports gh-pages commit `7c4120250f33b6836bde7d0aead64e78953106e9` built. Public index/code/worker/WASM-factory hashes match the tested dist; shared WASM hash matches, and public gallery is byte-identical to source. Public browser suite passed all 14 groups: both real inference fixtures (6/6 known links), offline fresh-worker inference, 72-text maximum batch, confirmed audit file import, review/undo/cycle/hold checks, cancellation/stale/failure/timeout controls and 320/390 layouts. Public JSON/CSV/Markdown artifacts were independently parsed. Public request capture contains GET-only static/model downloads with no content upload. See public-evidence/, public-assets-validation.json, public-gallery-validation.json and deployment-validation.json.

The first public test attempt exposed a test-harness race: file selection resolves before the asynchronous file read completes. The harness now waits for the audit schema to appear in the editor before asserting or running; the full public suite then passed. This did not require an app-code change or another deployment.
