# Observed validation — Handoff Trace

## Local production bundle

- `npm run predeploy`: passed; production Vite assets, local worker and WASM module factory. SHA-256 shared-WASM identity and credential-pattern scan passed (`asset-audit.json`). Scan is not a general security guarantee; implementation has no credential/provider integration.
- Actual Chrome WASM q8 inference: refund fixture support/warehouse/finance/support; publishing fixture editor/designer/editor/developer. **8/8 tiny known-answer matches**, not general accuracy. Both produced three cross-role missing handoffs. No canned response/fallback.
- Reviewed edit/undo and fresh export: holding the second publishing step blocked two adjacent boundaries; entering the fourth step's deliverable documented the remaining boundary. No skipping held steps. CSV/JSON/Markdown exports independently parsed; originals, edited notes/deliverables and all records survived. Multiline comma/quote and spreadsheet formula-like cells escaped. Clipboard equals actual Markdown export.
- 40 steps, 8 anchors, four-text chunking: all rows conserved; complete held batch exported; JSON import rerun preserved input. Empty/null/malformed/duplicate/oversized text, >40 records, invalid identifiers, unsupported PDF/oversized files rejected.
- Online → fully offline fresh worker in same open page: real inference passed. No offline reload claim.
- Cancellation/retry, input invalidation, stale fetch failures and stale worker results ignored. Worker construction/crash, malformed vector, timeout defenses exercised via fault injection (not used for successful AI tests). Real model-host abort and runtime module download abort produced errors and subsequent real inference recovered. Current WASM CPU does not require WebGPU; mocked unsupported-runtime path tested, not physical unsupported devices.
- Requests captured from startup through inference: GET downloads only, no request bodies or user content; no model-host access before explicit load. Hostile instructions inert; unrelated step required a hold. See sanitized request path log in `browser-validation.json`.
- Desktop plus 320/390px layouts passed overflow checks; visible focus and touch-size buttons; edits/download actions worked. Screenshots inspected. Headless desktop Chrome viewport emulation, not physical phone testing.
- Boundary negation probe: “Do not refund the customer or transfer money. Ask support for help.” selected Finance. **Known failure:** similarity is not permission/responsibility certification; mandatory review/hold.
- Gallery script compilation, exactly-one AI utility entry, preservation of all prior entries/categories and gallery rendering checks passed. Deployment/public evidence is recorded separately after publishing.

## Public deployment

- Root predeploy assembled 535 existing/new gallery apps with no missing index files. All 534 prior gallery entries remained unchanged; category order and labels preserved. Root combined deploy succeeded.
- GitHub Pages build/deploy completed for gh-pages commit `4eaabf14f11f0ece797ac7fae586ff073b3f1f4d` (see `deployment-validation.json`).
- Public app assets, worker, factory, shared WASM and complete gallery matched local SHA-256/bytes (`public-assets-validation.json`).
- Full real-browser suite rerun on https://xianghui.github.io/daily-app2/20261108-19/: both real-AI known-answer fixtures, reviewed exports, 40-step batch, fully offline fresh-worker inference, mobile layouts, cancellation/retry/stale guards and fault-injected defensive paths passed (`public-browser-validation.json`). Public gallery rendered without browser errors; independent artifact checks reran after public downloads.
