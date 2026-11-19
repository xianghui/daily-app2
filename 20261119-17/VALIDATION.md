# Observed validation — Charge Terrace

## Local production bundle

- React/Vite predeploy passed. Real Chrome WASM CPU inference, not WebGPU or a mock, matched 12/12 intended meter identities across two materially different synthetic input sets: Workshop tariff (two meters, three intervals) and Community peak (three meters, two intervals, lossy conversion, nonzero initial charge).
- Exact fixture costs: no-storage 46 → discrete optimum 18; no-storage 31 → optimum 15.85 supplied cost units. These are assumed tariff worksheets, not measured energy savings or general accuracy claims.
- 1,000 independent exhaustive-state oracle cases matched the DP objective, checking capacity, transition caps, no exports, conversion energy balance, start/end equality and no-worse-than-idle baseline.
- Full 48-row / eight-meter / six-period batch ran real inference (56 texts in four-text chunks), retained all records and reimported its complete audit. The fixed maximum source remains below 50,000 characters.
- Review identity/period/kWh changes, blank numeric rejection, multiline notes, approval reset, holds, undo, duplicate/missing meter-period blocking, applied snapshot invalidation, actual clipboard, JSON/CSV/Markdown downloads and audit reimport passed.
- Independent Python parsers checked actual downloaded JSON/CSV: all original IDs, reviewed values, schedule states/imports/costs, commas, quoted newlines, formula-prefix escaping and negative numeric discharges survived.
- Empty/invalid/oversized/duplicate/negative/out-of-range input and unsupported imports blocked. Network failure with real retry, worker download failure, unsupported Worker/WASM, worker exception, malformed vector/envelope and timeout fault injections produced actionable errors with no fake output.
- Warm cancel/retry, cold model-download cancellation/retry, changed-source invalidation, deliberately delayed old-worker result after a newer run, and delayed file import all passed. Mock workers were used only to simulate failures/races, never successful AI evidence.
- Real fresh-worker inference succeeded with all network disabled in an already-open warmed page. Offline navigation/reload was not tested and is not promised.
- Request capture observed only GET/HEAD downloads, no bodies or source text in URLs, and no pre-load model request. Runtime shares immutable prior app assets; default content never leaves the browser. Built-text credential-pattern scan accompanies assembled/public audits; source has no remote provider integration.
- Desktop 1440px and phone widths 390/320px: no horizontal overflow, ≥44px button targets, associated form labels and visible focus. Normal viewport screenshots of overview/review/results inspected. Physical phones and non-Chrome browsers untested.
- Unrelated instruction-like text still receives a nearest meter: the fixture was explicitly held and release blocked. Similarity is not correctness or confidence; no universal accuracy claim.

## Publication checks

- Root predeploy and root deploy passed; 726 staged apps, zero failures/skips; 999,708,707 published bytes, below the conservative 1 GB guard. All 725 prior gallery entries/categories preserved; inline scripts compiled and new entry appears exactly once, with AI Utilities first.
- GitHub Pages commit `d7fd904a746c9b4d29602236a493aea3dec63963` reached `built`; matching workflow `44485279132` completed successfully.
- Nine public app/gallery/AI runtime assets and four affected legacy/shared geometry assets byte-matched the combined assembly (13 checks). The new live page reran both real-AI fixtures, reviewed edits/holds/undo/clipboard/downloads, maximum 56-text inference, fresh-worker offline/privacy checks and responsive layout tests with zero page errors.
- Actual public-browser downloads were parsed again by independent Python JSON/CSV parsers; original and reviewed values plus schedule states/costs survived.
- Deploy-only byte-identical geometry WASM reuse additionally covers `20261028-21` → `20261028-24`; original source builds remain unchanged. Actual default generation, PNG import, binary-STL import, changed preview geometry and parsed finite STL downloads passed from assembled and public sites. Legacy JS compatibility URLs are retained and revised workers/entries query-versioned.
- Unrelated pre-existing workspace edits are excluded from source staging. No digest or external message sent.
