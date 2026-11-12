# Observed validation — 2026-11-12

## Production-bundle local checks

- React/Vite `npm run predeploy`: passed. Browser tests serve the actual `dist` at `/daily-app2/20261112-14/`, not a dev-only worker path.
- Real q8 MiniLM WASM inference in Chrome/macOS: workshop notes → metal/metal/tile/green; community notes → asphalt/concrete/lawn/asphalt. **8/8 simple known-answer matches** across two distinct batches, not a general accuracy estimate.
- Workshop fixture: no-storage supply 82.1667% of annual demand; first grid tank meeting 85% target: 1500 L, supplying 85.2917%. Community fixture: zero storage already supplies 91.6538%, so the 90% target does not justify a tank in this model. These are computed synthetic estimates, not measured savings.
- 100 seeded scenarios matched an independent Python exhaustive tank-sizing/water-balance oracle. Checked monthly mass conservation, demand conservation, storage bounds, baseline comparison and minimum discrete feasible capacity.
- Actual 24-record maximum batch, four-text embedding chunks, schema/number/empty/invalid/oversize/format guards: passed. No lost records.
- Review pending block, surface/area editing, formula-like multiline notes, hold blocking, undo, export invalidation, current-result downloads, clipboard and original-only JSON reimport: passed.
- Downloaded JSON/audit CSV/monthly CSV/Markdown independently parsed with Python: all catchments/edits survived; 12 monthly records agree with JSON; 24-record CSV/JSON counts agree; formula prefixing and quoted commas/newlines preserved.
- Fresh-worker real inference with the browser fully offline in the warmed open page: passed. Offline reload/navigation is not claimed.
- Network log: no Hugging Face calls before load; only GET downloads without bodies; no source strings in request URLs. No keys/provider integration. Built-asset credential scan is recorded separately; it supplements source and network inspection, not an absolute proof of absence.
- Injected network, worker-download, unsupported module-worker, actual worker WebAssembly-disabled, worker-error, malformed-vector and accelerated-timeout failures all surfaced errors, disabled exports and produced no fake output. Network recovery reran the real model.
- Delayed file read, delayed worker download, a worker deliberately ignoring termination and returning late valid vectors: stale completions could not replace newer input/results.
- Cancellation of an actual gated model-host download, new input, then real inference retry: passed.
- Desktop 1440 and phone-width 390/320 layouts: no document horizontal overflow, form labels/focus checks and real inputs/results/exports. Wide monthly data scrolls within its container. Physical phone performance, other browsers and low-memory devices untested.

Defensive mocks were used **only** to induce failure/race paths; successful inference, fixture answers, offline behavior and retries use the real downloaded model. See JSON reports and test sources for scope.

## Known limitations

AI always chooses a nearest supplied profile, even for irrelevant or adversarial instructions. The negated metal-roof challenge incorrectly chose green (expected metal); an unrelated instruction chose metal. `challenge-validation.json` records actual outputs; all remain pending and cannot execute instructions. Human verification is mandatory, and cosine is not calibrated confidence. Tiny fixtures do not establish field accuracy.

The deterministic monthly model is optimistic about storm timing and excludes first flush, treatment, evaporation, leakage, daily sequencing and site constraints. Starting stock is empty. Results are discrete-grid scenario estimates, not weather predictions, guaranteed supply or installation advice. Example coefficients are synthetic assumptions.

## Publication

Public app/runtime/worker/shared-WASM byte comparisons, public real inference, gallery conservation and Pages commit verification are recorded in `public-validation.json`, `public-browser-validation.json`, `public-gallery-validation.json` and `publication-status.json` after deployment. Until these reports exist, publication is not verified.

Public verification passed: Pages commit `bb521672a17b020d25ef10a642e6f2289745089d`, successful workflow `43159388415`. All eight public app/runtime assets (including shared WASM) match production bytes; the 615-entry public gallery matches source exactly. The complete real-inference workflow suite passed again on the public URL, including both fixtures, fresh-worker offline inference, review/export/clipboard, maximum batch and responsive checks. No public runtime/inference check remains unverified.
