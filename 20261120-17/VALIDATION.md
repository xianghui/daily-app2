# Observed validation — Precision Porch

Synthetic data only, 2026-11-20. Real desktop Chrome on macOS, CPU WASM (`--disable-gpu` for main suite). No fake model used for success checks.

## Real AI, workflow and quality

- Two materially different synthetic sets: machined bracket/hole dimensions in mm and paper sheet dimensions in cm. Actual MiniLM embeddings executed in production bundles: **8/8 + 8/8 intended feature links**. Tiny curated fixtures are not population accuracy.
- Each reviewed fixture: 8 original readings → 6 specimen-feature groups: 2 inside, 1 outside, 2 borderline, 1 conflicting. Last-point baseline had 4 passes, **2 of those require quantization-interval recheck**. No measured productivity or accuracy improvement claimed.
- Source meaning changed to the other feature changed the actual neural suggestion and resulting interval group. AI materially affects feature reconciliation, not numeric calculations.
- Instruction-like unrelated text abstained at supplied threshold on this run; held manually and retained. This does not establish robust out-of-domain rejection or injection generalization. Embeddings are not truth/negation validation; every link requires human review.
- All records require explicit approve/hold. Corrected reading changes conflicting-repeat outcome while original value remains unchanged. Unit mismatch blocks application. Hold and undo preserve every original and recalculate outputs. Any edit disables snapshot exports until apply.
- Maximum 8 feature definitions + 96 readings ran **26 four-text neural batches**; all 96 records survived audit, CSV, interval CSV and original-only audit reimport. Edited final-row multiline note survived.

## Deterministic and artifact checks

`node core-test.mjs`: **1,200 independent half-step-grid enumeration oracles** verify feasible endpoints and inside/outside/borderline/conflict states; both fixtures' full metric expectations passed. These test quantization logic, not AI accuracy or metrological assumptions.

Actual browser downloads reopened using Python `csv.DictReader` and JSON. Complete reading order, group source IDs, original values, reviewed values, independent max/min interval endpoints and Markdown IDs passed. Quotes, commas, line breaks and formula-like multiline review text survive with intentional CSV formula prefix. Clipboard contains current reviewed worksheet. Exported audit reimport renews approvals rather than trusting stored decisions.

## Defensive and race checks

Empty/malformed/null/oversized JSON, duplicate IDs, missing arrays, text bounds, invalid specimen IDs, unsupported units, nonfinite values, zero resolution, inverted bounds and unsupported/oversized imports were rejected.

Injected model-network failure followed by real retry, absent WASM, worker-download failure, unsupported worker construction, malformed vectors, malformed result envelope, timeout and worker error all produced actionable error states with no fake output or exports. Fault injection is only for failures. Cold model-download cancellation + real retry passed. Input changes during inference, late old result after a newer completed run, delayed file reads and delayed worker-source downloads cannot overwrite newer state.

An initial copied race-test assertion referred to the prior app's fixture ID; the assertion was corrected to this app's actual `width` fixture and the complete affected checks reran successfully. This was a test adaptation issue, not an app fallback.

## Privacy, cache, runtime and layouts

Network capture from startup through real inference: no model requests before explicit load; only GET/HEAD downloads, no bodies or source text in URLs. Persisted reports omit signed query values. Built text assets scanned for credential patterns; runtime/protocol/source audited and shared dependency SHA-256 recorded. No external inference integration or credentials.

Online inference followed by browser offline mode, terminated worker and a **fresh worker in the already-open warmed page** performed real inference. Offline navigation/reload is NOT claimed. Cache eviction/private storage may require redownload. Model main is unpinned; observed revision in runtime audit.

Desktop 1440 and narrow 390/320 widths: no horizontal overflow, all inputs labeled, visible keyboard focus and ≥44px buttons. Normal-viewport overview/review/results screenshots saved; desktop overview and narrow review/results manually inspected. Physical phones, other browsers, assistive-technology end-to-end use, real instruments and production measurement datasets are untested. No calibration, full uncertainty, conformity or physical print/sample-release claim.

## Collection and publication

Gallery inline scripts compile with Node `new Function`; missing scripts fail the test. One new correctly categorized entry, all 749 prior gallery objects and legacy categories are preserved. AI Utilities remains first. Gallery search and narrow layouts tested.

First root assembly exceeded the unchanged 1,000,000,000-byte guard. Existing deploy-only byte-identical geometry WASM sharing is extended to `20261028-6` using immutable `20261028-24`; source dist trees are untouched and JS compatibility URLs retained. Affected older-app default, PNG, STL, shared-worker runtime and three distinct valid STL downloads must pass before completion. Shared AI worker/factory/WASM remain preserved.

Final combined assembly and public Pages outcomes are recorded below after their checks complete; this file does not treat branch publication alone as proof of a working site.


## Assembled production bundle — passed

Root predeploy passed: **750 apps, 0 failed, 0 skipped**, **999,670,818 bytes** after byte-identical runtime reuse. All new app and shared dependency bytes matched assembled files. Both real-AI fixtures, full reviewed-artifact/privacy/offline/max-batch suite and 750-card gallery reran against the assembled production server. Affected Quoin & Curve (`20261028-6`) default, PNG and STL inputs produced three distinct closed, outward-wound validated STL artifacts matching preview fingerprints through the shared worker/WASM path. No original collection or legacy source builds modified.


## Public verification — passed

Matching GitHub Pages commit `fa3c626d59e7d7a48cd6a7cfdf267e52971dd21e` reached **built** with successful workflow [44700413384](https://github.com/xianghui/daily-app2/actions/runs/44700413384). All 9 public gallery/app/worker/factory/WASM files matched the assembled bytes; all 4 affected legacy shell/worker/WASM assets also matched. Public real-model fixtures again matched **8/8 + 8/8**, and the complete review/undo/edit/export/clipboard/privacy/offline/max-batch suite passed. All **750** gallery cards and prior categories remained usable. Quoin & Curve default/PNG/STL again produced three distinct validated STL artifacts matching previews through the shared runtime. See public-* reports, pages-watch.json and publication-status.json. No digest sent.
