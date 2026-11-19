# Observed validation — Offset Harbor

## Local production bundle

- npm run predeploy passed (React + Vite).
- Real desktop Chrome WASM CPU, GPU disabled: Workshop devices matched 8/8 endpoints; Field loggers matched 6/6. No hard-coded responses. Workshop ranges: reference [0,0], camera [10,15], printer [16,18], sensor [14,20] ms. Baseline bounds 2 clocks; propagation bounds 3 and tightens/adds 2. Field: base [0,0], drone [−12,−9], boat [10,11], acoustic unbounded. Width-target follow-ups are computed, not accuracy or safety claims.
- 1,200 independent exhaustive integer-feasibility/marginal-bound oracle cases passed. Contradictions including self/disconnected cycles, schema and malformed vectors checked.
- Actual reviewed JSON/audit CSV/offset CSV/Markdown downloaded and independently parsed; every source and review preserved. Multiline quotes/commas/formula-leading notes escaped; signed numeric fields remain signed. Clipboard checked. Maximum 24-comparison/8-device/56-text batch runs real inference, retains all records and reimports its audit; approvals intentionally reset.
- Review pending gate, edits of identities/bounds, hold, undo, stale-export invalidation, contradictions with no corrections and disconnected devices checked. Empty/invalid/oversized source/file, duplicate IDs, wrong formats, anchor, bounds and target width rejected.
- Cancel/retry, input change during run, late old result after newer run, delayed file read after newer input passed. Injected worker output faults only test defenses; real model used for successful workflows.
- Eight defensive faults passed: model-host network abort then real retry, unavailable WASM, worker-download abort, unavailable module workers, malformed vectors/envelope, worker exception and accelerated 180-second timeout. No fake results released.
- Model download begins only after explicit action. Requests are GET/HEAD static downloads with no bodies or source text. Fresh-worker real inference passed with all networking disabled in an already-open warmed page; no offline reload claim.
- Desktop 1440px and narrow 390/320px: no horizontal overflow, labels/focus and ≥44px buttons checked, overview/review/results screenshots inspected. Physical phones/other browsers/screen readers untested.

## Collection and publication

Gallery, assembled-site/public asset and inference checks are recorded in companion reports. Publication is not complete until matching Pages commit built and actual public real inference/assets pass. No model universal accuracy or synchronization certification claim.

## Verified public release

Matching Pages commit `f110107087195beb0319947d179c553af241b910` reached built; workflow 44442232086 succeeded. Full public production-browser suite passed both real-AI fixtures (14/14 endpoint links), fresh-worker offline inference, reviewed/downloaded artifacts, maximum batch, privacy and responsive checks. Nine public gallery/app/runtime/worker/factory/WASM assets byte-match the combined assembly. All 720 gallery cards, older categories and search pass. Root assembly is 999,844,246 bytes; no new older-runtime rewriting. No digest sent. Source-only commit excludes unrelated pre-existing work.
