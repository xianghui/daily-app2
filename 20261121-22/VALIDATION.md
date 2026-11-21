# Observed validation — 2026-11-21

All inputs are synthetic. Successful AI checks use actual quantized MiniLM weights in desktop Google Chrome, production Vite bundles, WASM CPU with GPU disabled. Fault injection appears only in defensive tests.

## Local workflow / real AI

`browser-test.cjs` / `browser-validation.json`:

- Workshop circuit: three informal offers matched panel/batten/highbay (3/3 expected); approved exact mix `[0,1,2]`, cost 22,500 supplied cents, 160 W, ≈317.33 estimated maintained lux ≥300 target. Greedy picks three battens, consumes 180 W and yields ≈168 lux: no feasible target under its own choices.
- Gallery refresh: track/pendant/downlight (3/3 expected); exact planner correctly finds no mix meeting 250 lux under 90 W. Greedy also fails. No feasible plan claimed or saving fabricated.
- Negation challenge: expected fluorescent batten, AI chose LED panel. **Failed semantic challenge**, documented as a limitation; every row requires human verification, no confidence percentages.
- No weights downloaded before explicit loading; online then fully offline fresh-worker real inference in the same warmed open page. Offline reload/startup is not claimed.
- Maximum eight-offer inference, review/apply/reimport and 65,536-layout search. `edge-test.cjs` adds full eight-profile/eight-offer (16 texts / 4 actual chunks), all eight identical-description identities matched.
- Review required, approve/hold, editable source/numeric/profile/notes, undo, snapshot invalidation, complete held audit, actual JSON/CSV/Markdown downloads and clipboard equality. Source JSON import restores originals only.
- Empty/invalid/null/oversized input, unsupported/oversized files, focused controls with labels, touch targets ≥44 px, no horizontal overflow at 1440/390/320 widths. Normal-viewport hero/review/result screenshots inspected.
- Request audit observed only GET asset downloads without request bodies, documented origin/Hugging Face/CDN hosts; source inspection confirms no content interpolation into outbound URLs, telemetry, keys or remote integration. Persisted audit strips CDN query values.

## Hard constraints and independent artifacts

- `core-test.mjs` / `core-validation.json`: 27 schema/defensive checks; 100 seeded generated problems cross-checked against an independently structured iterative mixed-radix enumeration. All optimum costs, feasibility and tie-breaking watts/units agree. Eight cases exact cost beats greedy; two cases greedy misses an available feasible target. These generated deterministic cases are not AI accuracy evidence.
- All exact mixes respect supplied watt caps, offer availability and total fixture cap. Zero-watt allowance produces infeasibility, never an unpowered positive-light plan.
- `edge-test.cjs`: out-of-bound offer count rejected. Changing installed panel-offer cost from 6,000 to 2,000 cents recomputes optimal mix `[3,0,1]`, 16,000 cents and 158 W in the actual downloaded JSON. Current edit, not stale defaults, used.
- `artifact-test.py`: independently parsed actual browser-downloaded JSON/CSV with Python; all original/review records, notes with newlines/quotes/commas, formula-prefix escaping, selected units, exact total costs and summed rated watts survived. Infeasible plan preserves all offer rows with blank quantities; held worksheet has all three audit rows and zero plan rows.

## Defensive execution

`defensive-test.cjs` covers model-host failure and real retry, missing WebAssembly, worker-download failure, unsupported workers, malformed vector shape, malformed message envelope, 180-second timeout (accelerated fault), worker error, late messages after cancellation and after input changes. No fake output or enabled export on failures. `stale-test.cjs` verifies a delayed old response cannot overwrite a newer successful real Gallery refresh inference. `cold-cancel-test.cjs` observes model download progress, cancels while weights are intercepted, then retries real inference successfully.

## Runtime / collection / publication

- `runtime-dependency-audit.json`: exact shared worker/factory/WASM hashes, observed model revision and actual 512-token tokenizer ceiling; source worker uses 4-text chunks, normalized mean pooling, q8 WASM. Required prior asset paths preserved.
- `security-validation.json`: no credential-pattern hits in built text assets; source data-flow inspection, not a claim that regex proves absence of every possible secret.
- `gallery-validation.json`: all inline scripts compiled with `new Function`; new entry exactly once as AI Utility, newest first; all 778 prior entries preserved. Category order and earlier maker labels unchanged; 779 combined entries.
- Root assembly and live Pages verification recorded in the assembly, gallery-UI, public asset and public-browser reports when completed. Root build success alone is not evidence of public inference. Publication status is recorded separately.

## Explicitly untested / limitations

Physical phones, Safari/Firefox/Edge, constrained-memory devices, offline startup/reload, cache eviction/private-mode behavior, real installation geometry or measured illuminance, electrical circuit safety, glare/uniformity and real product equivalence are untested. Small fixtures do not establish universal semantic accuracy. Upstream model `main` is unpinned and may change. Synthetic example factors/ratings are not specifications. Cost optimality is only for the finite supplied choices and stated steady-watt assumptions, not general lighting design.

## Completed public release

First combined deployment `e3297c6374d1afc3acd5802081e061c507e96dbf` reached built and successfully deployed (run 44907897122). `public-asset-validation.json` byte-matches seven live gallery/app/worker/factory/WASM assets against the assembled tree. `public-browser-validation.json` reruns both real-model fixtures, reviewed downloads, clipboard, holds, maximum inference/search, offline fresh-worker inference, cancellation/retry, bad inputs, privacy traffic and desktop/narrow layouts on the live URL; all passed, with the documented failed negation challenge still exposed. `public-gallery-validation.json` verifies all 779 cards, retained maker categories, search and narrow layouts. Root assembly is 999,905,007 bytes under the unchanged 1,000,000,000-byte guard. Final downloaded artifacts independently reparsed after the public run. Lint and required individual/root predeploy passed. No further runtime reuse rule was added. Unrelated pre-existing recovery folders and root edits are preserved but excluded from this app’s source commit.
