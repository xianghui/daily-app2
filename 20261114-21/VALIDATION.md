# Observed validation — Uptime Orchard / 2026-11-14

## Production bundle and real local AI

`npm run predeploy` passed. Headless desktop Chrome ran the actual production bundle, locally emitted worker, Transformers.js 4.3.2, quantized MiniLM and ONNX WASM CPU (GPU disabled). No successful AI assertions use mocks.

| Tiny synthetic fixture | Intended groups matched | Computed system scenario | All-required baseline |
|---|---:|---:|---:|
| Office connectivity | 4/4 | 0.997501 | 0.829521 |
| Cold-room monitoring | 5/5 | 0.88396 | 0.36288 |

These are computed supplied-assumption scenarios, not measured uptime or general accuracy estimates. Embeddings actually change group membership, which changes redundancy calculations; changing a reviewed sensor into the reporting group changes the exported system result.

A real negation challenge (“not an electrical mains power supply … connection for internet access”) incorrectly selected **power**, not internet. Nearest semantic similarity does not reason reliably about negation, physical topology, correlated failures or irrelevant content. Every row starts pending; holds block system figures. Human review and independently verified probabilities are essential.

## Arithmetic, schemas and hard constraints

- 462 seeded heterogeneous-probability/k cases matched independent exhaustive operating-state enumeration (up to nine units). Probability 0/1, impossible k, group conservation, required integer counts, finite unit vectors, source identity and record order checked.
- One-at-a-time perfect-component sensitivity independently recomputed via the full analysis path. No negative claimed gains. Baseline and redundant probabilities matched known answers.
- Any hold, missing required group, or insufficient units withholds system, baseline and sensitivity. Group figures explicitly cover approved units only. Duplicate IDs, invalid probabilities, malformed/missing objects, empty, unsupported or oversized inputs rejected.
- Maximum 6-group/32-record fixture processed in four-text inference chunks and retained every row through JSON/CSV download and audit reimport. All review decisions reset to pending on reimport.

## Workflow and artifacts

- Actual UI review, reassignment, probability edits, undo, holds and apply checked; edits invalidate exports. Input changes invalidate all previous inference and applied results.
- Actual downloaded JSON, CSV and Markdown reopened with independent Python JSON/CSV parsers. Four CSV files matched every current row, decision, group, probability and original record. Multiline owner/note cells, quoted commas and spreadsheet-formula prefixes survived with CSV formula escaping. Markdown copied using real clipboard API and reopened from download.
- Downloaded audits restored originals and required fresh inference/review; no silent application of old approvals.
- Cancel/download-retry, network abort then real retry, input change during active run, delayed stale cancelled-worker callback and delayed import read could not overwrite newer input/results. Stale callback tests deliberately inject workers that ignore termination **only to test guards**.
- Network denial, missing WASM, failed worker download/construction, worker crash, malformed vector dimensions, malformed message envelope and accelerated timeout all left no fabricated suggestions or enabled stale exports. Defensive-only injections are labeled in their test source.

## Privacy, runtime and offline

Captured requests from production-page startup through inference: model hosts contacted only after explicit load; all requests GET without bodies; only static collection/model-host URLs. No user text was present in network payloads. No provider integration, API keys or user content storage. Built text assets scanned for credential patterns; no matches. Static asset scan is not a universal secret audit.

After an online real inference, networking was disabled entirely and another run created a fresh worker and completed actual CPU inference using cached worker/module/WASM/model assets. Only this already-open warmed-page offline scope is claimed. Offline app reload/navigation, cache eviction recovery without internet, physical phones, Safari/Firefox and low-memory devices remain untested.

## Layout, gallery and publication

Desktop 1440px and narrow 390/320px production-browser viewports: no horizontal overflow; all form controls have labels; keyboard focus exists; buttons ≥44px high; source, review and applied-result actions work. Normal screenshots inspected; mobile hero wrapping corrected and browser suite rerun. Physical touch devices, screen readers and exhaustive accessibility audit untested.

Every inline root gallery script compiled with Node `new Function`; missing scripts fail the test. New entry appears once as `ai-utility`, newest first. All prior entries, categories, styling and search preserved, with AI Utilities first. Root deployment directory assembly, public Pages status, byte-hashed public worker/runtime/WASM and public real-inference evidence are recorded in the JSON reports after publication; a branch push alone is not considered verification.

## Evidence

- `browser-validation.json`, `edge-validation.json`
- `arithmetic-validation.json`, `artifact-validation.json`
- `defensive-validation.json`, `stale-validation.json`, `import-stale-validation.json`
- `gallery-validation.json`, `gallery-ui-validation.json`
- `combined-browser-validation.json`, `combined-gallery-ui-validation.json`
- `public-browser-validation.json`, `public-asset-validation.json`, `publication-status.json`

Pre-existing unrelated root README/index changes and untracked folders were preserved. The job's source commit stages only this app and its own gallery/tagline/README edits. No digest sent.

## Final public result

First combined deployment succeeded: Pages `c94f150d9e1b248fd77f32b745a66425f1c384c1` reached **built**. Public URL https://xianghui.github.io/daily-app2/20261114-21/ . Entire public production-bundle workflow suite (eight groups), both real-AI fixtures, endpoint/insufficient/negation checks, reviewed artifact parsing, fresh-worker offline inference, all 669 prior gallery cards/categories and byte-matched public worker/runtime/WASM passed. The documented negation misclassification also reproduced publicly. No build/inference/deployment blocker remains.
