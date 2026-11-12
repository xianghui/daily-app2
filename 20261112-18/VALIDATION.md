# Observed validation — 2026-11-12

## Real model quality and useful outputs

Production build served using its GitHub Pages path in desktop Chrome, actual q8 MiniLM/WASM inference, no fake success path:

| Synthetic batch | Intended links | Actual links | FEFO expired / FIFO expired | FEFO unmet / FIFO unmet |
|---|---|---|---|---|
| Print cooperative | ink, glue, ink, glue | all four matched | 3 / 6 packs | 0 / 0 packs |
| Ceramics studio | clay, paint, clay, paint | all four matched | 3 / 7 packs | 1 / 4 packs |

These are exact scenario counts from supplied inputs, not measured improvements or general accuracy. The model correctly selected glue for “Not black printing ink: paper book binding glue adhesive”, but assigned an unrelated instruction/credential/weather note to glue too. It has no robust unknown class. Both stayed pending until human holds; holds blocked release. Eight simple matches do not establish compatibility or expiry validity. AI mapping actually determines which demand stream may consume a lot; it is not decorative.

## Distinct rescue workflow

The original picker-only draft overlapped Pantry Current and was expanded before publication. After protecting FEFO demand, the final utility schedules only otherwise-expiring residual into shared daily handoff slots. Print cooperative rescues 3 packs, leaves 0 expiry and meets its zero-loss goal. Ceramics studio rescues 2 packs but 1 still expires; its zero-loss goal is explicitly unmet. Demand picks stay unchanged. These are capacity-constrained surplus-rescue plans, not another ingredient reservation tool.

## Checks performed

- `npm run predeploy`: production Vite build succeeds. Worker and factory local, immutable shared WASM audited; no model host request before explicit loading.
- `rescue-test.mjs`: 2,000 independent unit-pack rescue scenarios plus 200 exhaustive shared-capacity optimum cases. Protected demand remains untouched, shared daily caps/expiry cutoffs hold, every pack conserves and loss-goal status matches.
- `core-test.mjs`: 2,500 independent unit-pack oracle cases for both policies; 200 exhaustive tiny cases confirm FEFO maximum served packs under these assumptions. Lot/demand conservation, product separation, expiry eligibility, boundaries and schema validation pass.
- `browser-test.cjs`: both real fixtures; required review, numeric edits, product correction, export invalidation, undo, holds, copy Markdown, actual downloads and original-input reimport; empty/invalid/oversized JSON and unsupported file errors; real cancellation/retry/input invalidation; 24-lot batching; all form labels, focus and no page overflow at 1440/390/320 pixels. Screenshots saved and desktop/mobile overviews visually inspected.
- Warmed-page **fresh worker** real inference with context completely offline passes. No offline reload/app-shell claim. All user-data path requests were GETs without bodies, and content fragments were absent from requested URLs. Source inspection confirms only local worker receives user content. Pattern scanning built JS/MJS found no credential-like strings; not an exhaustive secret detector.
- `defensive-test.cjs`: real model network abort/recovery and worker-download failure. Injected malformed vectors, worker constructor/device failure, worker error and accelerated timeout all show actionable errors, no result and disabled exports. Injection used only for failure guards.
- `stale-import-test.cjs`: delayed file reads and worker download cancellation discarded; fresh real retry works. Actual worker modified only for fault test to remove WebAssembly returns required-device error.
- `stale-result-test.cjs`: injected obsolete worker ignores termination and returns valid vectors after a new run; cannot replace newer input/results.
- `model-cancel-test.cjs`: observed real model-host download, cancelled it, changed inputs, then real inference retry matched ceramics fixture. No mock success path.
- `edge-browser-test.cjs`: 8 products × 14 days = 112 complete product/day records; 24 lots with 400-character text, 80-character titles, maximum quantities and inclusive expiry. All 2,400,000 packs conserved; 1,200,000 expired and 40 unmet in the intentionally uneven-stock fixture. Zero demand and unstocked products retained. Large audit envelope reimports originals and resets approvals.
- `artifact-test.py`: independently parses real downloaded JSON/CSV/Markdown; 4/24/24 lot audits preserve every row and edited quantity; comma/quote/newline/formula-like fields round-trip with documented apostrophe protection. Reviewed and maximum-edge pick CSVs conserve every daily demand and every lot pick. Markdown preserves all IDs and reviewed 17-pack edit.

## Not tested / limitations

No physical phone, non-Chrome engine, offline navigation, real stock datasets, storage/expiry safety, compatibility certification, external integration or universal model accuracy. Network/device/timeout errors are explicit and retryable. Demand and expiry are supplied assumptions. No actual stock movement or measured operational saving is claimed.

## Collection/public release

Recorded separately in `gallery-validation.json`, `gallery-ui-validation.json`, `combined-browser-validation.json`, `public-browser-validation.json`, `public-asset-validation.json` and `publication-status.json` when those steps complete. A build or branch push alone is not public AI verification.

Public release completed on the first attempt: Pages commit `761feea75e2fed01b7f5d05f95703cd1f5b27f1a` reached built; workflow 43189344326 succeeded. Public app, worker, factory and shared WASM byte-matched production. All eight public browser checks, both real fixtures/rescue outputs, warmed-page offline inference, artifacts and preserved 619-entry gallery passed. See publication/public reports.
