# Fragment Desk — observed validation

## Local production bundle

- React/Vite `npm run predeploy` passed. Real Chrome browser, WASM CPU with GPU disabled; no remote inference.
- Real MiniLM: **6/6** intended path identities across two materially different synthetic catalogs. These are six simple fixture notes, not a general accuracy estimate. A negated/unknown note still selected a nearest path and remained pending; explicit hold withheld the worksheet.
- Office fixture: 15 aligned packets versus 12 unaligned-baseline packets on deliverable groups; five DF-blocked datagrams; 200 extra header bytes. Remote-sync MTU 1499 splits 2958 bytes into 1472/1472/14, not two packets.
- Field fixture: 25 actual and 25 baseline packets, zero blocked datagrams, 240 extra headers bytes. Exact-MTU DF datagram remains one packet. Fiber payload splits 8976/8976/2048.
- **1,000 independent generated count-feasibility checks** passed, with byte reconstruction, MTU, contiguous byte/unit offsets, nonfinal alignment and MF invariants. Invalid schemas and malformed vectors rejected.
- Actual browser downloads independently reopened using Python csv/json; JSON, audit CSV, fragment CSV and Markdown preserve source records and reviewed identities. DF-blocked groups are explicit, not dropped. Quantity-weighted delivered + blocked payload conserves input bytes.
- Multiline quoted/comma/formula-like reviewer edit survives JSON/CSV/Markdown; CSV prefixes a protective apostrophe, numeric fields remain numbers. Clipboard matches current applied audit. Hold, undo and edit invalidation passed; changing a reviewed path materially changed packet counts.
- Maximum 8-path/32-group/40-text batch processed by real inference (10 chunks). Each group at 65,515-byte payload and 10,000 quantity, including DF blocks; complete expanded audit reimport restores original input. Testing exposed the old 4 MB envelope limit; raised to 16 MB while source remains capped at 60,000 characters; full suite rerun passed.
- Fresh worker performed real inference with browser networking disabled after online warm run. This proves only already-open-page reuse, **not cold offline navigation**.
- Fault-injected network/download failure, missing WASM, unsupported workers, worker error, malformed vectors/envelopes and accelerated 180s timeout yielded errors without fake output. Real network retry passed. Cold model-download cancellation then real retry passed.
- Delayed file read, delayed worker fetch, cancelled worker response and an old error arriving during a newer real inference could not overwrite current data/results.
- Network audit from startup through workflow: no model host traffic before explicit run, GET-only public files, no bodies or fixture content in URLs. Persisted request reports strip CDN signed query values. Built text secret-pattern scan plus integration inspection; no provider credentials or upload path.
- 1440/390/320 widths: no document overflow, labeled inputs, keyboard focus and controls ≥44px; normal viewport screenshots inspected at phone/desktop sizes. Physical phone hardware, Safari/Firefox, weak devices and cold offline reload remain untested.

See browser/core/defensive/async-race/newer-run/cold-cancel/artifact JSON reports and screenshots. Fault mocks test error paths only; successful AI checks use the real neural model.

## Combined site and public release

Publication verification is recorded in assembly, public-asset, public-browser, public-gallery, Pages-build and publication-status reports. Do not infer publication from build success alone.

- Public URL verified after matching gh-pages commit `62ccb9c5972b7281edbcce6fd9dfe9e87ce68dab` reached built and workflow `45047886817` succeeded. Nine app/gallery/runtime assets byte-match. Both real-AI fixtures and the full public browser suite, independent public-export parsing, 807-card gallery and both legacy worker/image/STL regressions passed. Combined site: 999,629,655 bytes under 1,000,000,000. See `publication-status.json`.
