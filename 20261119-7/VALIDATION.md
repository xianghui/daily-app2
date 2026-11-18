# Observed validation — Balance Bay

Date: 2026-11-19. Synthetic data only. Desktop Chrome, Playwright, real production Vite bundle, WASM CPU (successful AI browser run launched with GPU disabled).

## Real AI and workflow

- Gallery display: real MiniLM matched ceramic vessel, silk flowers and art book, 3/3 expected links. Reviewed total 11 kg; weighted center (66.8181818182, 30.9090909091) cm is outside target while equal-prop baseline (40,30) is inside. Shortest feasible independent move: vessel x 85 → 75.625 cm, 9.375 cm displacement. Staging, approving and applying places weighted center at target boundary.
- Demo counter: real MiniLM matched speaker, desk light and leaflet stand, 3/3 expected links. Reviewed 8.5 kg, center (79.7058823529,50.5882352941) versus equal-prop (46.6666666667,33.3333333333). Staged proposed move reached the target. Both tiny fixtures are smoke/known-answer checks, NOT general accuracy estimates.
- Irrelevant instruction-like text still receives a nearest inventory suggestion; held review blocks computation. No instructions are executed. No confidence percentages.
- Actual downloaded JSON/CSV/Markdown, copied worksheet, edited multiline/formula-like notes, identity/mass/coordinate changes, hold/undo and staged-move/undo round trips passed. Independent Python CSV/JSON parsing checked every row, original/reviewed coordinates, current mass, proposed coordinates and mass-weighted center. Spreadsheet text escaping preserved multiline quotes; numeric fields stayed numeric.
- Complete 24-prop/8-profile input (32 embedding texts, four-text chunks), complete output, last-row multiline note, and maximum audit-original reimport passed. Audit imports intentionally reset suggestions and approvals, not restore a trusted applied result.

## Deterministic calculation checks

`node core-test.mjs`: 600 generated layouts, 205,821 independently enumerated integer-grid single-prop moves; no feasible sampled move beat the continuous projection candidate. 660 returned candidates independently recomputed inside target with conserved mass. Fixture identities/counts, equal-mass baseline equivalence, no-feasible-move case, invalid target, held/pending review blocking, malformed vectors and formula escaping passed. A floating-point zero-width intersection was found and fixed by an explicit 1e-8 cm boundary tolerance, then the entire test rerun passed. Grid comparisons validate these generated scenarios, not a proof of arbitrary geometry or physical feasibility.

## Defensive browser checks

- Empty, malformed, oversized JSON; duplicate IDs; missing profiles/props; invalid mass/deck/target/coordinates; unsupported PDF; oversized file and corrupt JSON all fail visibly without suggestions.
- Real download cancellation and retry, input mutation during run, late old worker result after newer completed run and delayed file import after input change: old callbacks cannot replace current input/results.
- Eight isolated fault cases: network/model abort with successful real retry, missing WebAssembly, worker download failure, unsupported worker construction, malformed vectors, malformed envelope, timeout and worker error. Each blocks exports without fake output. Only defensive cases inject faults; successful AI fixtures use the actual model.
- Real fresh-worker inference with all networking disabled passed after online warm-up in the same open page. Worker source, module factory, WASM and model are explicitly cached. Offline navigation/reload is NOT claimed or tested.
- Captured all browser-context requests from page startup through inference: no model-host download before explicit button; all requests GET/HEAD with no bodies and no source descriptions in URLs. Only app/static-runtime downloads and Hugging Face/CDN model files. Built text assets passed credential-pattern scan; source contains no remote-provider integration or key handling. Pattern scans are not exhaustive secret detection.

## Presentation

1440, 390 and 320 px layouts passed no-horizontal-overflow, all form labels, visible focus outline and minimum 44px button checks. Normal viewport screenshots of input, review and results saved; phone review/results visually inspected. These are desktop-emulated viewports, not physical-phone runtime tests. Other browsers and low-memory devices remain unverified.

## Collection and release

Root inline scripts compile using Node `new Function`; exactly one new `ai-utility` entry; all 715 prior cards preserved with AI Utilities first, STL Generators and Mini Games intact. Search and phone gallery views passed. Root predeploy assembles all 716 apps with no failed/skipped builds.

The combined site was near its conservative 1 GB limit. Extended the existing DEPLOY-ONLY byte-identical Manifold runtime reuse to older `20261030-30` → immutable `20261028-24`. Source builds and older JS URLs remain untouched/preserved; changed worker/shell references are query-versioned. This is deployment deduplication, not a new STL output direction. Actual older-app generation, image import and parsed binary-STL export are tested before release. Public byte audits and final Pages status are recorded separately after deployment.

Limitations: point centers only; no footprint, collisions, center height, structural support, lifting/tipping, uncertainty or dynamic forces. All proposed moves are independent alternatives. No measured time saving or universal quality claim.


## Public verification completed

Matching Pages commit `0e39024aadfefc820aff4aa863a652e74754a540` reached `built` with a successful build/deploy workflow. All 12 public app/runtime/affected-legacy assets byte-match the final assembled production files. The FULL workflow suite reran against `https://xianghui.github.io/daily-app2/20261119-7/`: both actual MiniLM fixtures, reviewed edits/holds/undo/staged moves, actual artifacts and independent parsing, maximum batch, defensive input cases, cancellation/retry, cache/offline fresh-worker inference, privacy request audit, desktop/phone layouts and labels passed. All 716 public gallery cards and categories remain; affected older app `20261030-30` generated models, imported an image and exported valid binary STL through its shared runtime. See public validation JSON/logs and `publication-status.json`. Root deployment used the combined site only; no digest sent.
