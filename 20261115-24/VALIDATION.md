# Observed validation — Signal Accumulator

## Local production bundle

- `npm run predeploy` passed (React + Vite static build).
- Real WASM/CPU MiniLM inference (Chrome, GPU disabled): Packing bench 14/14 intended stream links; Ceramics studio 14/14. These are tiny synthetic known-answer fixtures (four distinct note descriptions repeated over 28 readings), not estimated field accuracy. Both begin with 0/14 literal label coverage.
- Packing: fixed +1 SD shift accumulates to C+=5 at sequence 10; no single-reading cue. Ceramic wall: fixed −1 SD shift accumulates to C−=5 at sequence 10; no single-reading cue. Isolated glaze +3.5 SD spike triggers single-reading sequence 3 but not h=5 CUSUM. Counts and first-cue sequences are computed, not hardcoded responses.
- 500 independent Python Decimal sequence oracles verify both cumulative directions, zero floors, sorted order, boundary behavior, flags and first-cue sequences (`arithmetic-validation.json`).
- Maximum 40 texts (8 streams + 32 readings) executed real inference in four-text chunks; 32/32 exact-description identities matched. Every approved ID occurs exactly once across traces; originals and holds are preserved.
- Mandatory human review, identity/value/order editing, duplicate blocking, hold/exclusion/gap handling, undo, stale-export invalidation, JSON-audit originals reimport, all-held and unrelated challenge held. A reviewed wall value of 3.6 instead of original 3.8 advances the first cumulative cue from sequence 10 to 8; actual JSON/CSV retains original, edit and a held row.
- Downloaded actual JSON/CSV/Markdown reopened using independent Python parsers. All IDs/source strings/measurements/order/trace fields retained; edited quotes/newlines/formula-like text survives with protective CSV prefix. Negative numeric values stay numeric. Clipboard Markdown checked.
- Fresh worker inside the already-open warmed production page executes real CPU inference with the browser fully offline. Offline startup/reload is not claimed.
- Empty/invalid/oversized JSON, bad IDs, invalid SD/k/h/sequence, unsupported and oversized/malformed imports rejected. Model-host abort followed by successful real retry, worker-source failure, WASM unavailable, constructor failure, malformed vectors/envelope, worker error and timeout produce no fake output.
- Cancellation/retry, source changes during processing, late worker download, delayed file read and a deliberately late old result after a newer completed run cannot overwrite current state. Fault injection is used only for defensive tests, never to establish successful AI operation.
- Request audit from production startup through inference: no model requests before explicit invocation; only GET/download traffic, no request bodies, no fixture text in complete URLs. Signed CDN query values are not persisted in reports. Built-text credential-pattern scan passed; source has no provider/key integration.
- Desktop 1440px and 390/320px phone layouts: no horizontal overflow, visible labels, ≥44px buttons, keyboard focus and screenshot inspection of input/review/results. Physical mobile hardware and other browsers not tested.

## Limitations

Nearest-neighbor model always proposes a stream—even for irrelevant or instruction-like text. Human holding/relinking is mandatory. No claim of semantic equivalence or statistical validity; supplied reference parameters, units and sample order are not verified by AI. No threshold calibration, causality, safety, field detection-accuracy or measured efficiency claim. Cached model revision follows host defaults. App-shell offline startup untested.

## Combined deployment / public verification

- Root `npm run predeploy` and root `npm run deploy` passed; all 697 app builds copied, zero failures/skips. Combined deployment 999,881,259 bytes, below the unchanged 1 GB guard. No legacy asset/deduplication rules needed changing.
- Matching Pages commit `58c217b6f015a56a97ebb0b9a17603f615e44c9b` reached `built`; its matching Actions workflow completed successfully. No rebuild fallback was required.
- Every new public app file, immutable worker, factory and WASM byte-matched local production files; public gallery byte-matched the assembled root.
- Full browser suite rerun against the public URL: both real-inference fixtures, 40-text maximum batch, reviewed downloads, clipboard, holds/undo, invalid inputs, cancellation/retry/stale source, fresh-worker offline inference and privacy traffic audit passed.
- Independently reopened the public-run JSON/CSV/Markdown downloads; no lost rows and current reviewed notes/trace fields survived.
- Public gallery renders all 697 cards, preserves the earlier 696 entries and categories, puts AI Utilities first, and passes search plus 1440/390/320px overflow checks.
- Public and combined audit results are in `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-ui-validation.json`, `combined-browser-validation.json` and `combined-asset-validation.json`.
- Source commit stages only this app plus its own root gallery/tagline/README changes; unrelated pre-existing workspace changes are preserved outside the commit. No digest was sent.
