# Observed validation — 2026-11-21

## App / actual AI

- React + Vite production build passed. Production paths served under `/daily-app2/20261121-24/`, not Vite dev mode.
- Real default MiniLM q8 / single-thread WASM inference, Chrome with GPU disabled: **14/14** known mappings across two materially different synthetic inputs (shop demand and help-desk cases). This tiny positive fixture is not a general accuracy estimate.
- Actual negation challenge: “Not bakery bread loaves. Fresh fruit produce demand only.” mapped to **bread**, expected **fruit**. Human review mandatory; no claim that similarity understands exclusions or aggregation membership.
- Shop: raw maximum mismatch 20 units; weighted adjustment loss 163.63636363636365 versus bottom-up 200. Help desk: raw mismatch 20 cases; loss 306.66666666666674 versus bottom-up 1400. Coherent residuals below 1e-8. These are optimization outcomes, **not predictive accuracy or time improvements**.
- Maximum 12 nodes, 6 leaves, 32 estimates / 44 texts / 11 real chunks processed. Duplicate-node application blocked; held snapshot retains all 32 records and reimports its originals.
- Real fresh-worker inference with browser fully offline in an already-open warmed page passed. Offline app-shell startup/reload is not claimed.

## Deterministic checks / artifacts

- Core: 136 checks (including maximum 12-node/6-leaf reconciliation), including 120 independent convex KKT certificates, known solution `[12,6,6]` with loss 12 versus baseline 36; binding nonnegative leaf solution `(100/1001,0)`; malformed hierarchy, weights, vectors, duplicate/missing mappings, pending/held reviews.
- Browser downloaded JSON, Audit CSV, Forecast CSV and Markdown from both fixtures and edited reviews. Independent Python csv/json parsing confirmed row conservation, full-precision reconciled figures, nonnegative/additive totals, current edited value, unchanged originals, multiline quoted/comma/formula note escaping, held output and max-batch conservation.
- Clipboard and downloaded Markdown include current reviewed content. Edits invalidate exports; undo works; mapping/value edits reset approval. Audit import restores originals only.

## Defensive / UX / privacy

- Actual model-host abort and recovery/retry; worker download failure; simulated absent WASM/unsupported worker; malformed vectors/envelope; worker error; accelerated 180-second timeout; late cancelled/input-change messages. All fail without canned output. Fault injection is used only for defensive checks, not successful AI results.
- Cold model-download progress/cancellation followed by real retry passed. Delayed old worker result cannot replace a newer successful real-inference run.
- Empty/invalid/null/oversized text, unsupported/oversized file, field validation, cycle/unknown-parent checks passed.
- Desktop 1440 and narrow 390/320 widths, labels, focus, ≥44px controls and no horizontal overflow passed. Normal-viewport screenshots reviewed. Physical phones, assistive-technology session, non-Chrome engines and low-memory devices not tested.
- Startup through real inference network captured: no model requests before explicit load; only GET downloads, no request bodies/content uploads. Sanitized request report omits CDN signed values. Built text assets credential-pattern scan: zero hits. Source integration review: no backend/provider/key/analytics integration. Content is never inserted into model-host URL parameters.
- Byte-identical shared worker/factory/WASM source protocol and hashes checked; older dependency paths must remain published.

## Publication

Root assembly passed: **781 apps**, **999,896,110 bytes**, existing 1 GB guard unchanged, no new deduplication rules. Every prior gallery entry/category survives; every inline script compiles. Assembled production bundle reran the full real-inference/workflow/offline/export suite successfully. Public verification completed below.


### Public verification passed

- Combined root deploy reported Published; Pages workflow completed successfully, latest built commit matches remote gh-pages `1daef9aa2ec3cc726b01c119e34bbb92ab24295e`. No rebuild trigger or Pages configuration changes required.
- Public gallery, app HTML/CSS/JS, shared worker/factory/WASM: **7 byte-for-byte hash matches** to assembled production files.
- Full real-browser workflow suite reran at https://xianghui.github.io/daily-app2/20261121-24/: both materially different fixtures / 14 labels, max batch/chunks, review/edit/undo/holds, fresh-worker offline inference, actual artifact downloads/clipboard, input errors, responsive layouts and download-only privacy checks passed. Public gallery rendering/search/categories passed.
- Public downloaded artifacts independently reparsed successfully. Public initial asset check occurred while deployment was still active and saw the prior gallery; retry after deployment delivered the expected bytes.
- Source commit excludes unrelated pre-existing root edits/recovery drafts, which remain in the working tree. Original collection untouched; no scheduler/digest changes.
