# Framecadence Desk — observed validation, 2026-11-27

## Local and assembled production bundle

- Required `npm run predeploy` passed. Root predeploy assembled **915 apps, 0 failures, 0 skipped**, with the root gallery and new app under its correct folder. Size: **824,140,562 bytes**, below the existing unchanged 1,000,000,000-byte guard. Existing deduplication rules/runtime originals unchanged.
- Actual desktop Chrome (GPU disabled), real q8 MiniLM WASM: fixture A matched CLOUD/PLANT; fixture B matched BUILD/CLOUD, **4/4** intended simple synthetic matches (a first-profile-only baseline would match 2/4). This tiny set is not a representative accuracy benchmark. Both model results drove different intervals/storage outputs.
- Fixture A: 360 cloud frames at 5 s plus 720 plant frames at 120 s, 1,080 frames / 3,600,000 estimated KB. Fixture B: 480 site frames at 30 s plus 240 cloud frames at 5 s, 720 frames / 2,880,000 estimated KB. All four approved shoots met reviewed constraints; fixed 60 s shortcut passed 0/4. These are computed constraints, not visual-quality or time-saving claims.
- Independent core tests enumerate all allowed whole-second intervals and explicitly count exposure starts: **600 generated cases / 1,962 assertions**. Checks include the minimum-file solution/tie break, budget feasibility, interval spacing, final exposure within window and maximal frame count. Includes feasible/infeasible inputs; no inverse implementation used as the oracle.
- Complete local and assembled workflow suites passed required review; all eight reviewed numeric fields and multiline notes; export invalidation; undo; relink resetting approval/cadence; holds; applied JSON/CSV/Markdown and capture cards; clipboard. Formula-like multiline notes, commas and double quotes survived independent CSV parsing with documented apostrophe neutralization. **1,457 independent artifact assertions per suite** check record conservation, current values, interval/count/last start/final finish, storage, baseline and summary accounting.
- Maximum 8 profiles + 12 shoots processed by real model in five four-text chunks. Every reviewed/source record survived exports. Full audit import restored original inputs and required fresh inference. Empty/invalid/oversized sources (18 cases), duplicate IDs, out-of-bounds fields, invalid import format/JSON and oversized file failures passed. Storage shortage, exposure longer than the window and unattainable playback blocked operational cards.
- Real download cancellation/retry passed. Ten defensive checks: real worker download abort, real model-host abort, absent Worker/WASM, constructor/error faults, malformed vector result, accelerated timeout, stale callback and cancellation while worker fetch was delayed. Fault injection is only for failure tests; successful inference uses the real model.
- Fresh-worker offline inference passed in an **already-open warmed page** with all network blocked. Cold offline startup/reload, eviction resilience and private mode are not tested/promised. Runtime cache includes worker source, CPU factory and binary, not just HTTP cache.
- Network capture from startup through all inference: no model-host requests before explicit load; requests were GET-only with no bodies; no fixture text in URLs; external traffic limited to documented Hugging Face download/CDN hosts. No credential integrations; built text credential-pattern scan had no matches. This scan is not an exhaustive security audit. Reports store no signed query values. An instruction-like input was merely embedded and matched PLANT; it caused no content upload, credential request or authority change.
- Negation probe “Not clouds. A plant seedling slowly growing on a window ledge.” matched PLANT in this check; this does not establish reliable negation handling. Unrelated text still forces a nearest match, so human review remains mandatory.
- 1440/390/320 px layouts passed no horizontal overflow, explicit labels, 44 px controls and keyboard traversal. Normal-viewport desktop hero and 320 px review screenshots were visually inspected: readable, no clipped controls. Input/results/hero screenshots saved. No JavaScript page errors.
- Gallery inline scripts compiled using Node `new Function`; missing/empty scripts fail the test. New folder appears once with `ai-utility`; all 914 old entries unchanged. Actual browser gallery renders all 915 cards, AI Utilities first, old STL/game categories, search and narrow layouts.
- Production app assets match assembled copies. Shared runtime/factory/WASM bytes match documented provenance hashes. No shared credentials or real personal datasets.

## Publication

Root `npm run deploy` published the combined site. Remote gh-pages head and latest Pages built commit both equal **a02cfad984393fe185f9caa7706912ecd3b84636**. GitHub workflow **45950170405** completed successfully. Pages source/configuration unchanged.

At https://xianghui.github.io/daily-app2/20261127-15/ :

- All **9** fetched root/app/runtime/factory/WASM assets were byte-identical to assembled files.
- Full real-AI suite passed both fixtures (4/4 simple links), all review/edit/undo/hold/export cases, maximum batch/reimport, invalid inputs, cancel/retry, three infeasible conditions, privacy, GPU-disabled fresh-worker offline inference and 1440/390/320 px accessibility/layout checks. No page errors.
- Browser-downloaded public artifacts passed **1,457 independent Python assertions**.
- All 10 public defensive cases passed. Actual worker-network failure recovered to real inference; late old vectors/error did not overwrite a newer real run. A delayed file import could not overwrite newer input.
- Public gallery rendered all **915 cards**, new entry exactly once, AI Utilities first, preserved old categories, working search and narrow layouts.

Reports: `pages-build.json`, `pages-workflow.json`, `public-asset-audit.json`, `public-browser-validation.json`, `public-artifact-validation.json`, `public-defensive-validation.json`, `public-recovery-validation.json`, `public-import-race-validation.json`, `public-gallery-browser.json`. No digest sent.

## Known limitations / not tested

Physical cameras/intervalometers, actual visual motion quality, battery or write-speed behavior, physical phones, other engines, low-memory devices, representative semantic accuracy, and cold offline navigation are unverified. Scene cadence and frame size are operator-supplied estimates; constant exposure/overhead and per-shoot storage budgets are simplifying assumptions. No subsecond intervals, shared-card scheduling or camera control. Verify device timing conventions and test a short sequence before shooting.

Actual recovery tests on the assembled bundle also passed: worker network abort → successful real retry in the same page; late schema-valid old vectors/error after a newer real run left the newer result/status unchanged.

Additional exact-boundary fixtures passed: required=1 with an exposure ending exactly at the window; final exposure exactly on the endpoint; 1 ms extra overhead rejecting a one-second cadence; maximum 86,400-second window retaining 86,400 frames; and one KB below required storage blocking output. Delayed asynchronous file-read injection confirmed an old import cannot overwrite newer input. The fetched actual tokenizer_config.json reports BertTokenizer / model_max_length 512.
