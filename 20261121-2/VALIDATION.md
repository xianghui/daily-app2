# Observed validation — 2026-11-21

## Production bundle / real browser

Desktop Chrome headless on CPU (GPU disabled), not a mocked model. Both examples loaded real MiniLM q8 through the deployed shared worker. Four of four known device links matched:

| Synthetic input | Predicted links | Wh | Peak W | Required Ah | Ideal Ah baseline |
|---|---|---:|---:|---:|---:|
| Outdoor repair bench | light, fan | 312 | 108 | 41.563604 | 32.5 |
| Archive demonstration | projector, scanner | 432 | 168 | 28.339477 | 24 |

Swapping the second fixture's note meanings while preserving IDs/times changed real predictions to scanner/projector and energy to 576 Wh. AI therefore changes the workflow rather than providing decorative labels. The negated projector note still matched projector: this is semantic retrieval, not negation reasoning, and every suggestion requires review. Small synthetic fixtures do not establish general accuracy.

## Checks that passed locally

- Build, normalized 384-vector schema, independent hand-known 312 Wh/108 W fixture, independent Peukert formula and k=1 equality, first limit crossing, numeric/time bounds.
- Mandatory approve/hold; edited device/time/count resets approval; invalid time blocks calculation; undo; held load conservation; all originals retained.
- Actual downloaded JSON/CSV/Markdown independently parsed; reviewed multiline quote/comma/formula-like notes survive, CSV formula protection works, clipboard matches reviewed Markdown, maximum 24-record audit round-trips.
- Maximum batch of 24 notes plus two device profiles executed in seven neural chunks; no rows lost. Timeline spans the full mission; independent sum of interval Wh matches output.
- Empty/malformed/overlong/schema-invalid/numeric-type inputs; unsupported and oversized imports; cancel and real retry; cold model download cancellation.
- Forced network failure with real recovery; WASM-unavailable, worker construction/download/error, malformed output/envelope and timeout defensive injections; late cancellation/input messages ignored with no fabricated results.
- Fully offline fresh-worker real inference in a warmed open production page. Offline reload/startup not claimed.
- Requests from startup through inference all GET without bodies; no model download before explicit run; only documented asset/model hosts. Built credential pattern scan clean; no provider integration.
- 1440, 390 and 320 pixel viewports; no horizontal overflow, labeled forms, visible focus, ≥44px buttons. Normal viewport input/review/results screenshots saved and phone review plus desktop results visually inspected.

Reports: `core-validation.json`, `browser-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, `artifact-validation.json`, `runtime-dependency-audit.json`, `security-validation.json`.

## Scope not tested

Physical phones, other browser engines, low-memory devices, actual batteries/discharge curves, electrical surge/safety, first-visit offline and offline reload. Deterministic model assumptions are documented, not calibrated against hardware. Hosting/assembled verification is recorded below after publication.

## Combined-site validation

Root `npm run predeploy` and root deploy lifecycle assembled 759 apps with zero failures. Existing deploy-only immutable WASM sharing preserved the size guard: 999,869,131 bytes. App and every shared dependency matched source build hashes. Full real-inference/workflow/offline suite passed again against the assembled production directory. Gallery inline scripts compiled, Power Reserve appeared exactly once first in AI Utilities, all 758 previous objects survived unchanged, and desktop/phone gallery search and legacy categories rendered. A separate test injected a late old-run malformed message while a newer **real** inference succeeded; it was ignored and the new result remained intact (`stale-retry-validation.json`).

## Public verification — passed

GitHub Pages build `2068043ca6e90263b0b5f117c536a9ed3b7ed0da` reached **built** with workflow `44780561355` completed successfully. The public gallery, every app asset and all three shared AI worker/factory/WASM dependencies matched the combined build byte-for-byte (10 files). The full real-browser suite passed against https://xianghui.github.io/daily-app2/20261121-2/ — both real inference fixtures, changed-meaning output, maximum batching, review/undo/held/export/import/clipboard, warmed-page fresh-worker inference with all network disabled, and desktop/narrow layouts. Public gallery rendering/search preserved 758 previous entries and categories. Reports: `pages-build.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json`.
