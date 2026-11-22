# Prefix Harbor — observed validation

## Real production-bundle inference and workflow
- Chrome headless, GPU disabled, production Vite paths served under `/daily-app2/20261122-24/`; no dev-server-only imports. Both materially different synthetic fixtures ran the real MiniLM q8 model on WASM CPU.
- **Office exceptions:** 3/3 intended gateway identities matched (wan, office, lab). First-match baseline mismatches 2/3; longest-prefix/metric mismatches 0/3.
- **Shadowed warehouse:** 3/3 intended gateway identities matched (legacy, stock, camera). Baseline mismatches 3/3; longest-prefix mismatches 1/3, retaining the uncovered external destination. The aggregate `/24` is fully shadowed by its two `/25` routes.
- These six short, simple examples are **not a general accuracy estimate**. An unknown/negated/instruction-like next-hop note still gets a nearest-gateway suggestion; it remains pending and was explicitly held. No instructions executed or content sent externally.
- Every suggestion requires review. Pending prevents applying; holds withhold the whole audit while preserving all records. Gateway changes reset approval and invalidate exports. Undo, multiline note edits, reject/hold, applying changed identities, clipboard, JSON reimport and all download types tested.
- Full maximum batch: 8 gateways + 32 routes = 40 real texts / 10 chunks; 32 probes retained. Reviews were explicitly corrected to expected IDs before deterministic maximum-batch checks; no claim of digit-label semantic accuracy. All probes matched reviewed intent. Maximum JSON audit reimport restored originals exactly.

## Deterministic correctness and artifact checks
- 100 synthetic route tables × 256 independent exhaustive destination-oracle lookups = 25,600 checks. All selected winner sets matched; every global interval partition conserved 2^32 addresses.
- Canonical `/0` and `/32`, final IPv4 address, noncanonical prefixes, leading zeros, invalid octets/prefixes, metric priority within a prefix, equal-rank same-gateway duplicates, different-gateway ambiguity, no route and full shadowing tested. No arbitrary different-gateway tie winner.
- Independent Python JSON/CSV/Markdown parsers reopened nine exported audit sets. All routes, probes, route ID arrays, segment bounds and exact address totals survived. Spreadsheet formula-like multiline strings, quotes/commas and reviewer edits preserved with documented CSV apostrophe guards; JSON is exact. Segments form one gap-free nonoverlapping IPv4-space partition.
- All displayed mismatch counts are calculated from reviewed outputs and explicit probe expectations. No confidence percentages, time-saved claims or invented benchmarks.

- Additional real-inference browser check: noncanonical CIDR rejected; competing equal-prefix/metric routes to different gateways produce 65,536 ambiguous addresses, retain all four routes and flag the probe instead of arbitrarily selecting a hop (`scope-validation.json`).

## Runtime, offline, privacy and fault checks
- No model-host requests before explicit load. Captured startup/inference requests are file GETs without request bodies; source notes, descriptions, titles and injection-probe strings absent from request URLs. Persisted audit strips signed query values. No optional remote inference exists.
- Real fresh-worker inference succeeded with network disabled inside an already-open page after initial caching. Cold offline navigation/reload is **not claimed or tested**. Cached module factory/WASM and worker URL paths verified, not merely dev HTTP caching.
- Cold download cancellation, cancel/retry, failed model download with successful real retry, missing WASM, worker-download failure, unavailable module worker, malformed vectors/envelope, worker error, accelerated 180-second timeout, late cancelled/input-changed responses tested. Failures yield no fabricated suggestions/exports. File-read and worker-fetch races cannot overwrite changed input; delayed old worker error cannot overwrite a newer real run.
- Empty/malformed/oversized sources, unsupported file extension and >4 MB file rejected. Invalid model vector dimensions, count, nonfinite values and normalization rejected.
- Built HTML/CSS/JS credential-pattern scan clean; integration inspection found only worker/model/runtime downloads and no key/provider/upload integration. Pattern scanning alone is not proof against every possible secret. Shared dependency hashes recorded.

## UI and release checks
- Desktop 1440px plus narrow 390px/320px viewports tested for source/review/results, labels, focus, ≥44px controls and no document horizontal overflow. Normal-viewport screenshots inspected; badge wrapping fixed and final CSS rebuilt. Physical phones, low-memory devices and other browsers untested.
- App `npm run predeploy` passes. Every inline root script compiled with Node `new Function`; new AI-utility entry occurs once; all 803 previously published entries/categories retained. An unrelated pre-existing Receipt Current edit is preserved locally but excluded from release and commit.
- Root assembly: 804 app shells present, app bytes match build, shared runtime hashes match, 999,841,075 bytes below unchanged 1,000,000,000-byte guard. No legacy assets/source builds removed or changed for this app.
- `assembled-browser-validation.json`, `assembled-gallery-validation.json` record checks against the assembled deploy tree. Public release results are in `publication-status.json`, `public-browser-validation.json`, `public-asset-validation.json`, `public-gallery-validation.json`; only mark published when those checks succeed.

## Reproduce
`node core-test.mjs`; `python3 serve-test.py --port 7372`; `node browser-test.cjs`; `node defensive-test.cjs`; `node async-race-test.cjs`; `node newer-run-test.cjs`; `node cold-cancel-test.cjs`; `python3 artifact-test.py`. The browser tests use installed local Playwright/Chrome, not a production dependency. For assembled checks start `python3 serve-test.py --assembled --port 7373` after root assembly finishes and set `APP_URL` to its app URL. Never concurrently rebuild/clear deploy while testing it. Public browser suite takes `APP_URL` and `REPORT_FILE` overrides. Publish only via repository root npm lifecycle.

## Completed public verification
Matching gh-pages commit `8b7af9d66a918026cdb7227f15ee76ed7e21ad47` reached Pages **built**; workflow [45036815322](https://github.com/xianghui/daily-app2/actions/runs/45036815322) completed successfully. Public gallery renders 804 cards with prior categories preserved. All nine public gallery/app/worker/module/WASM assets match assembled bytes. Full real-AI browser suite passed at the public URL, including both fixtures (6/6 intended simple identities), maximum batch, fresh-worker offline inference, review/undo/holds, downloads/clipboard, layout and input errors. Independent parsers rechecked nine downloaded artifact sets after public tests. No digest sent.
