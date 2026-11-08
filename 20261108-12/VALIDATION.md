# Route Caliper validation — 2026-11-08

## Observed local production-bundle checks

- React/Vite `npm run predeploy` passed; actual emitted worker and local factory plus shared immutable WASM were used (not a dev-only path). `asset-audit.json` records SHA-256/byte counts and equality to the installed binary. No credential-pattern findings; source inspection shows no provider/key integration.
- Real headless Chrome inference used downloaded `Xenova/all-MiniLM-L6-v2` q8 on WASM CPU. No model-host requests before the explicit Load AI action. Functional runs did not mock the model. Request capture in `browser-validation.json` shows GET-only asset/model downloads, no bodies and no source text in URLs. This is an observed data-flow check, not an exhaustive audit of third-party packages.
- **Service desk:** all six in-domain calibration/test top labels matched. Calibration threshold 0.6636918577. Holdout baseline 3/4 correct, one out-of-domain mistake; thresholded 1/1 correct, zero errors, three abstentions, 25% coverage.
- **Community library:** all six in-domain top labels matched. Threshold 0.5114692798. Holdout baseline 3/4 correct, one out-of-domain mistake; thresholded 2/2 correct, zero errors, two abstentions, 50% coverage.
- Both out-of-domain samples abstained, but **three valid test samples also abstained**. Thus no universal quality improvement is claimed. These tiny synthetic fixtures demonstrate behavior, not production accuracy.
- Challenge: “This is not a lost parcel query; my account password no longer works.” predicted delivery instead of access (cosine 0.4296), then abstained. This confirms negation/mixed-intent limitations. Instruction-like source data stayed data; no credentials were requested and no external tool action occurred.
- First online success followed by blocked-network **fresh-worker** inference passed. This proves open-page offline processing after caching, not offline reload/navigation/startup. Model weights, worker, factory and WASM caching were exercised; eviction/private mode/other browsers remain variable.
- 48-record input processed in batches of four and preserved all unique IDs, source order and split totals. Exported audit reimport restored all original inputs. Reviewed decisions intentionally do not restore on import.
- Edit gold label resets decision; original label and AI prediction remain immutable. Exclusion, undo, note changes, reapproval, Apply, current-snapshot invalidation, clipboard, actual browser JSON/CSV/MD downloads passed. Independent Python CSV/JSON parsing verified every record/edited field, quotes/newlines, formula-like multiline safety and recomputed split counts/errors/abstentions (`artifact-validation.json`).
- Core tests independently checked threshold/precision/count math, calibration-only selection, equal-score ties, no qualified threshold → abstain all, invalid/unnormalized vectors and pending-review blocking. Changing test gold labels left the selected threshold unchanged. Excluding every calibration row blocked Apply.
- Empty/invalid/oversized JSON, too many rows, oversize text, unknown formats, duplicate cross-split text, missing split, out-of-range target, invalid schema were rejected without output. Cancel/retry and input-change invalidation passed. Late worker result, late failed worker fetch and late file import could not replace newer state.
- Worker-fetch failure and actual model-host download failure from an empty cache produced actionable errors, then real retry succeeded. Malformed/nonfinite vectors, worker-construction/missing-runtime error, worker crash and accelerated 180-second timeout were tested through fault injection, with no fake output.
- Desktop and 320/390 CSS-pixel layouts checked for horizontal overflow; phone editing, Apply and download succeeded. Keyboard focus outlines, labels and ≥44px controls were checked. Screenshots saved. Native phones, assistive-technology end-to-end use, non-Chrome inference, peak RAM/performance and cold offline startup were **not** tested.

## Collection checks

All inline gallery scripts compile with `new Function`; the new folder appears exactly once with `area:"ai-utility"`. All 527 prior entries remain byte-for-byte structurally unchanged. Gallery browser check rendered 528 cards, AI Utilities first, STL Generators/Mini Games intact, new entry/search working and no page errors.

Root predeploy succeeded: 528 built/copied, zero failed/skipped. Every entry has `deploy/<folder>/index.html`; root gallery matches source; the new app and shared WASM are present (`combined-build-validation.json`). Root combined-site deployment is used, never the per-app deployment script.

## Public verification

Verified live at https://xianghui.github.io/daily-app2/20261108-12/ . GitHub Pages reached `built` for `c6c9be06a562b328cd5718d01905e174c6ce8af5`, matching remote gh-pages head (`deployment-validation.json`). All public app/worker/factory/shared-WASM assets returned HTTP 200 with SHA-256 equal to local production assets (`public-assets-validation.json`).

The entire 15-check real-browser production suite passed again at the public URL, including two materially different real-model fixtures, open-page fresh-worker offline inference, maximum batch, review/undo/clipboard, actual downloaded artifacts, stale/cancelled runs, worker-network failure/retry, malformed output, unsupported runtime and timeout defenses. Independent artifact parsing passed on those public downloads. `public-browser-validation.json` contains observed checks, fixture predictions/metrics and sanitized request origins/paths with query parameter names only; short-lived signed public-model CDN query values are deliberately not persisted. `public-gallery-validation.json` confirms all 528 cards, retained categories and working new-entry search without page errors.

No digest/announcement was sent. Main-branch source is committed/pushed separately from the verified combined Pages deployment. Pre-existing unrelated `20261105-7/` work is not included.
