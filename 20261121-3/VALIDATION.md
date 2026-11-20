# Observed validation — Lag Loom

## Local production bundle

- `npm run predeploy`: passed (React + Vite, correct `/daily-app2/20261121-3/` base, required gh-pages dependency/scripts).
- Actual Chrome WASM CPU inference, GPU disabled: Workshop sensors matched `heat, flow` with planted lags `+2, −1`; Archive monitoring matched `light, humidity` with `+1, −2`. Four of four neural matches in these tiny synthetic cases, not general accuracy. All selected r values were 1 on their planted overlaps. Zero-lag baselines were approximately `.6670, −.3442, −.4320, −.0300`; these are finite-sample descriptive comparisons, not measured predictive gains.
- Swapping trace descriptions while preserving IDs/arrays changed the actual neural matches and alignment outputs. Negated light-sensor challenge still links to light: reviewed evidence required.
- 1,000 independent affine/lag identities passed; constant-window unavailable behavior, periodic ties, index/sign/overlap conservation and schema guards passed. These identities validate formulas, not real logger synchronization.
- Actual downloaded JSON/Audit CSV/Summary CSV/Markdown parsed independently. All original rows, reviewed arrays, held records, multiline quote/comma/formula-like notes and each selected source pair survived. Clipboard matched downloaded Markdown; reimport restored originals only.
- 24-record real inference/chunking/export/reimport passed. An additional actual neural boundary run used all 8 references, 24 traces, 64 samples, maxLag 8 and 32 texts/8 chunks; all 24 planted lag-2 pairings and 62-sample overlaps survived full audit reimport. Empty, malformed, over-limit, bad types/arrays, invalid reviewed samples and unsupported/oversized files were blocked. Review edit invalidated exports; undo and hold retained originals.
- Real network failure/retry, WASM/runtime failure, malformed vectors/envelopes, worker errors, unsupported module workers, accelerated 180-second timeout and late responses after cancel/input changes passed. Defensive injections are not positive inference evidence. Actual cold download cancellation/retry and a stale malformed old result during a newer real-model run passed.
- Fresh-worker real inference in an already-open warmed page passed with all browser network disabled. Offline navigation/reload is not claimed.
- Network audit: only GET asset/model downloads, no request bodies, no model requests before explicit run. Worker/source inspected; built credential-pattern scan passed. Not an exhaustive security audit.
- Desktop/narrow layouts 1440/390/320: no horizontal overflow, labeled fields, visible focus, buttons ≥44px. Input/review/results screenshots saved and inspected. Physical phones and non-Chrome engines untested.

## Collection and publication

Reports `assembled-browser-validation.json`, `assembled-gallery-ui-validation.json`, `legacy-runtime-validation.json`, public reports and `publication-status.json` record the actual completed deployment checks. Do not infer publication from build success alone.

Maximum-envelope regression found and fixed before final release: storing sample pairs redundantly for every candidate made the 24×64 audit exceed the 2 MB import limit. Candidates now retain all lag/r/overlap statistics and only the selected alignment retains full pairs. The maximum audit is 339,347 bytes and was reimported after clearing the source, waiting for the actual asynchronous file-read completion, with no alert. All originals and selected pairs remain in the artifact.

Final public release: matching Pages `192885ea27e22cf8e71df852791fa1d922296f98` reached **built**; workflow `44790587846` succeeded. Nine exact public gallery/app/runtime byte matches, the full real-model review/export/offline suite, maximum 8-reference/24-trace/64-sample audit reimport, all 760 gallery cards and Glide & Slot default/PNG/STL closed-mesh exports passed. Combined site: **999,592,393 bytes**, below unchanged 1 GB guard. Lint and build passed. No digest or external utility actions.
