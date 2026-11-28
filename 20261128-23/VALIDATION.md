# Observed validation — Strandlight Bench

Date: 2026-11-28. Synthetic fixtures only. Test scripts and JSON evidence are committed beside this file. No mocked model is used for successful inference; fault injection is confined to defensive checks.

## Real AI and useful workflow

Desktop Chrome, headless, WASM CPU with GPU disabled, **production Vite bundle**, not dev mode:

- Cabinet batch: RED / BLUE / GREEN / WHITE retrieved as expected, **4/4**.
- Theater batch: AMBER / VIOLET / IR / PINK retrieved as expected, **4/4**.
- Every suggestion includes actual cosine evidence from model-produced 384-dimensional vectors. Model host requests occur only after Run; no content uploads were observed. All captured requests were GET without bodies; stored evidence strips CDN query values.
- Cabinet reviewed plan: **19 parallel branches** versus **54** single-LED baseline branches, preserving 54 LEDs.
- Theater reviewed plan: **19 branches** versus **48** baseline, preserving 48 LEDs.
- Both simple nominal baselines pass the supplied worst-case limits; no invented safety improvement. Branch count is a deterministic topology estimate, not measured energy, brightness or productivity.
- Negation challenge “Not red scarlet warning indicators. Use the blue status LEDs instead.” incorrectly selected **RED**, not BLUE. Manual profile correction reloaded the BLUE specifications and survived the applied export. This is not a general accuracy claim.

## Local and assembled checks

- `npm run predeploy`: production app builds successfully; exact base and per-app deployment scripts retained.
- **904** core checks cover schema validation, explicit enumerated bounds, conservation, full review requirements, invalid source and blocked/held releases.
- **1,207 independent Python artifact checks** per full browser-suite scope use Decimal arithmetic and exhaustive option search, independently recompute baseline choices and counts, parse real downloaded CSV with `csv.DictReader`, check ordered row/quantity preservation and formula-leading multiline reviewer notes. JSON audit originals reimport at maximum batch size.
- 24 lots, 8 profiles, 32 short texts/eight inference chunks, 5,760 LEDs exercised; all originals remain in audit JSON/CSV, with exact branch × series LED conservation for every planned lot.
- Approve, hold, profile/specification edits, review invalidation, invalid numeric values, undo, multiline edits, actual clipboard copy and all four download types exercised. A deliberately infeasible resistor catalog blocks worksheet export while audit artifacts remain available.
- Warmed-page offline test sets the entire browser context offline, terminates the old worker via input change and performs another real inference in a fresh worker. Passed; cold offline navigation is not claimed.
- Empty, malformed, oversized and duplicate-ID sources; bad bounds, empty text, Unicode/control validation; unsupported/oversized/malformed imports are rejected visibly before model inference.
- Ten defensive checks: actual worker and model download aborts; unavailable Worker or WebAssembly; throwing worker construction; worker error; malformed vectors; accelerated timeout; stale callback; pending-worker-fetch cancellation. No fabricated output on failure.
- Separate actual model-request cancellation/retry and actual failed worker-download retry passed. An injected late callback from an older worker cannot overwrite a newer real-AI batch. Delayed file-read race cannot overwrite a newer selected example.
- Desktop 1440 px and narrow 390/320 px screenshots, no horizontal overflow, labeled inputs, minimum 44 px controls and keyboard focus progression exercised. Selected profile IDs are compact; their full descriptions remain visible below the selector.
- Runtime provenance SHA-256 is recorded; byte audits verify own bundle plus shared worker, factory and WASM. Built JS/CSS credential-pattern scan plus manual integration inspection finds no credential/provider path. A pattern scan alone is not an exhaustive proof.

## Combined deployment

Root inline scripts compile via Node `new Function`; gallery entry occurs exactly once as `ai-utility`. All **946 earlier entries**, categories and order are preserved. Root assembly built **947 apps, zero failed/skipped**, **832,643,421 bytes**, below the unchanged conservative 1 GB guard. No legacy source tree or older runtime source was changed. Combined root deploy is the only publishing path.

Public verification status is recorded in `publication-status.json` after publication; a branch push alone is not treated as proof. See `assembled-*` and `public-*` reports for the observed scope.

## Not tested / limitations

Physical circuits, real part identity, thermal conditions, electrical construction/safety, brightness matching, wiring losses, supply stability, physical phones, other browser engines, cold offline app startup, screen-reader usability and universal classification accuracy are not verified. These are bounded low-voltage teaching worksheets, not hardware approval. No digest or external equipment actions are part of this builder.

## Verified public release

GitHub Pages reports **built** for matching gh-pages commit `7ec4576c575af964851ce6b0e7cbac5c5bcdc5ba`; [workflow 46153252858](https://github.com/xianghui/daily-app2/actions/runs/46153252858) completed successfully. [Live app](https://xianghui.github.io/daily-app2/20261128-23/). All eight expected asset byte lengths/SHA-256 values match the production bundle, including the shared worker/factory/WASM. Full public browser suite passed both real-AI batches, warmed-page fresh-worker offline inference, maximum batch, review/hold/undo/edit, copied/downloaded artifacts, blocked plans and responsive checks. Public defensive, actual failure/cancellation recovery, stale-worker and import-race/input-guard suites passed. Independent public artifact rechecks: **1,207 assertions**. Public gallery: **947 cards**, current app first in AI Utilities, old categories and old/new searches intact. Reports and screenshots use the `public-` prefix. No digest sent.
