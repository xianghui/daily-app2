# Validation — Parallel Room / 2026-11-07

Production-bundle tests in actual headless Chrome through Playwright; real public MiniLM ONNX weights, WASM CPU, no mock successful inference.

- Product summit: three related session pairs all separated; round-robin model clash cost **1.5285298063 → 0**, same-block pairs above 0.45 **2 → 0**.
- Community festival: three related session pairs all separated; cost **1.6939230577 → 0**, pairs **2 → 0**.
- Six known related pairs separated across these two synthetic fixtures. This is not accuracy on other conferences, attendee impact, or measured time savings.
- Full 12-session / 3-block input: three real embedding chunks, every record preserved, counts [4,4,4].
- Exact optimization checked against independently exhaustive 3^7 assignments for 20 distinct symmetric test matrices; identical minima.
- Review, explicit reject/restore baseline, undo, manual note edits, copy, exports and capacity blocking passed. Current edits invalidate export snapshots. JSON and CSV independently parsed with Python; multiline quoted fields and formula-like cells tested. JSON preserves originals; CSV formula neutralization is deliberate and tested.
- Cached real inference with a new worker and all browser network disabled passed in the already-open production page. Cached online reload also passed without extra model-host requests. Offline startup/navigation is not claimed.
- 8 malformed/empty/oversized/duplicate input cases, bad floor, unsupported file type and oversize file tested. Download/network abort and retry, runtime asset failure and retry, download cancellation and retry, inference cancellation/retry and input changes passed.
- Fault-injected missing Worker/WASM, malformed vectors, timeout, worker construction/error, late cancelled response and stale asynchronous file read handled without fake output or stale overwrite. Faults only test defenses; fixture successes use real AI.
- Network audit: no remote requests before explicit run. Model downloads only GET/HEAD, no user-content request bodies/URLs; observed Hugging Face and us.aws.cdn.hf.co hosts. Runtime is same-origin. Built asset credential-pattern scan and source data-flow review found no provider integrations, credentials or content upload code.
- Desktop 1440 px and narrow 390/320 px: no horizontal overflow, labeled inputs, visible focus and touch-size controls; phone review/download action passed. Screenshots saved; phone visual inspection confirms readable stacked layout. No browser page errors.
- npm run predeploy passed; installed dependency audit reported zero vulnerabilities. Shared WASM SHA-256 documented in README and asset audit.

Evidence: browser-validation.json, core-validation.json, export-roundtrip-validation.json, asset-audit.json. Public publication checks are recorded separately after deployment; local tests alone do not prove Pages delivery.

Not tested: physical phones, Safari/Firefox, offline fresh navigation, general event scheduling quality or actual attendance. No dates, speakers or room-equipment constraints are inferred.

## Public verification — passed

Published through root combined deployment. GitHub Pages built `c459098f22f788c45e622aa00619b6721d2d7cde`, matching remote gh-pages. All seven app assets and the shared 26,861,777-byte WASM fetched from public Pages and matched production SHA-256 values. Public gallery rendered all 508 entries with AI Utilities first and prior categories intact.

The complete real-browser suite was repeated at https://xianghui.github.io/daily-app2/20261107-15/ in a fresh browser context: both real-inference fixtures, 6/6 related-pair separations, full 12-session batching, offline fresh-worker inference, cached reload, review/edit/reject/undo, invalid inputs, runtime/download/network failure and retry, cancellation/stale guards, defensive injections, clipboard/downloads, desktop/390/320 layouts all passed. Public-downloaded JSON and CSV artifacts were independently parsed with Python, confirming every source, reviewed note, room/capacity constraint and multiline escaping. No page errors.

See deployment-validation.json, public-gallery-validation.json and public-evidence/ for exact output and artifacts. Source-only lint passed; upstream vendored runtime is not linted as authored source. Export-parser reruns skip their own validation report files. No digest was sent.
