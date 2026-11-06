# Column Bridge — observed validation

Date: 2026-11-06, Asia/Singapore. Synthetic fixtures only. Real Chrome headless browser, React/Vite **production** bundle served under `/daily-app2/20261106-24/`, not the development server. `browser-validation.json` is the actual browser report; `browser-test.log` contains the passing run output. Public verification is recorded separately after deployment.

## AI quality and invariants

- Actual quantized MiniLM-L6-v2 WASM inference, no mocks on success paths.
- Contact fixture: 5/5 expected destinations matched correctly (`Given name → first_name`, `Family name → last_name`, `Electronic mail address → email`, `Cellular telephone → phone`, `Employer organization → company`). Unrelated Internal memo excluded from target, retained in audit. Three source rows retained. Observed cosine similarities approximately 0.492, 0.734, 0.900, 0.508, 0.892.
- Materially different shipping fixture: 4/4 expected mappings correct (parcel tracking, destination, mass, recipient). Warehouse remarks audit-only; two rows retained. Similarities approximately 0.676, 0.753, 0.651, 0.866.
- Exact normalized-header baseline was 0 in each fixture; semantic reviewed coverage was 5/5 and 4/4. This is a structural coverage comparison, **not** universal accuracy or a measured time saving. Only these small known-answer fixtures establish the stated 9/9 observation.
- Maximum fixture: 100 rows × 12 source headers × 8 destination fields; eight unique source assignments, all 100 records retained. Twenty embedding texts processed in batches of four. Cell values never enter inference. No source duplication allowed; conflicting review edits block apply. Raising threshold removed low-scoring mappings; optional fields can remain blank.
- Worker vectors validated for exact count, 384 dimensions, finite numbers and normalization. Output mapping schema, indices, field IDs, notes and unique source constraints validated. Required-unmapped and required-blank cases block application.

## Workflow, errors and races

Passed source and schema paste changes; valid CSV file import; quoted multiline import; eight invalid/empty/oversized/ragged/duplicate input cases; four invalid schema cases; unsupported file type and oversized file. Tested rejection, manual mapping edits, notes, undo and export snapshot invalidation. All source records and extra columns remain in the audit.

Passed real cancel/retry, cold model-download cancellation/retry, input-change stale guard, delayed-file stale guard and cancelled late-response guard. Network failures were genuinely induced by blocking model-host downloads and WASM binary fetches; no results appeared, and normal retry succeeded. Unsupported Worker/WASM, worker construction/error, malformed output and 180-second timeout handling were fault-injected for defensive tests only. No fake successful inference or canned fallback was used.

The initial test script had two test-only defects: Chromium's range input requires `0.9`, not `.9`; and a 0.9 threshold still correctly retained the email mapping (cosine slightly above 0.9), so a test wrongly expected apply to be blocked. Tests were corrected to check removal of lower-scoring optional mappings. The passing suite reran end-to-end. No application error was hidden.

## Privacy, runtime and offline

- Zero remote requests before explicit AI start. Browser context captured startup, workers and inference requests; the remote requests were GET/HEAD public asset downloads from `huggingface.co` and `us.aws.cdn.hf.co`, with no content request bodies or header/schema text in URLs.
- Successful online inference, terminated worker, Playwright network set offline, then **fresh worker** real inference passed with expected contact mappings. This verifies cached worker source, WASM factory/binary and model assets, not just an in-memory pipeline reuse.
- Online app reload reused weights without further remote model requests. Offline page reload/reopening is not promised or tested. No app-shell service worker.
- `audit-assets.py` scanned built text for token/private-key patterns; zero matches. Source review confirmed no external inference, analytics, user credentials or content-upload path. The model/runtime download cache contains only public assets; CSV content stays in memory.

## Artifacts and UI

- Actual browser downloads of reviewed target CSV, audit CSV and audit JSON independently parsed with Python stdlib `csv` and `json`. Every row and original/target cell compared against current reviewed JSON; notes retained. Commas, quotes, embedded newlines, blanks and formula-like multiline values tested. CSV receives documented leading-apostrophe safety protection, JSON retains exact cells. Clipboard text equals actual target CSV.
- Desktop 1440px and phone widths 390px/320px: no horizontal overflow; source/results/previews/export visible. Screenshots inspected. Narrow phone also edited a review note, applied mapping and downloaded JSON retaining that edit. Labels and keyboard focus checked; buttons/selects touch-sized.
- Gallery inline scripts all compiled with Node `new Function`. New entry exactly once with `area:"ai-utility"`; all 494 earlier entries unchanged, total 495 cards, AI Utilities first, earlier categories present, new-card link and search tested in a browser.

## Not established

Not a broad multilingual benchmark, general accuracy guarantee, datatype validator or transformer. No real low-memory phone, screen-reader audit, Safari/Firefox hardware, cold offline page reopening or external CSV importer was tested. Headless desktop Chrome mobile viewports are layout tests, not phone hardware inference tests. Ambiguous/incorrect headers still need human review. No public completion claim should be made without the separate live deployment/browser checks.

## Public deployment verified

Root combined deployment published successfully. GitHub Pages reports **built** for `2aa58a9578265a93864b7a912e338293e5885979`, matching remote `gh-pages`. All 13 deployed app files—including worker, WASM binary/factory and license assets—were fetched and matched SHA-256/bytes against the tested production build (`deployment-validation.json`). The root combined build had 495 successful apps, zero failed/skipped; all 495 app indexes and the root index were verified.

The entire browser suite was rerun successfully at **https://xianghui.github.io/daily-app2/20261106-24/**, including both actual AI fixtures, fresh-worker offline inference, cache reload, 100-row limit, invalid inputs, network failure/retry (model and local runtime), cancellation/races, review/undo, actual exports/clipboard, phone edit/apply/download and injected defensive errors. `live-browser-validation.json` and `live-browser-test.log` record that public run. Python artifact round-trip parsing passed again on the actual public app downloads. No browser page errors. Public gallery has 495 cards, all older categories, working search and exactly one new entry (`live-gallery-validation.json`).

An initial public probe before the Pages deployment completed encountered the unavailable route; it was rerun only after the matching build reached built. No application fix or repeated publication was needed.
