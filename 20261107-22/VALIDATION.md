# Chapter Cut validation

Production bundle, real headless Chrome on the builder host. See `browser-validation.json` for observed scores and defensive results. Synthetic inputs only.

## Real inference and fixture quality

- Kitchen notebook: 9 paragraphs covering bread, tomatoes and account security. Expected and observed chapter starts after paragraphs **3, 6**.
- Field notes: 9 paragraphs about rail travel, guitar and bicycle repairs. Expected and observed **3, 6**, with materially different embedding similarities.
- Uneven topic blocks (2 rail, 3 guitar, 4 bicycle): expected and observed **2, 5** versus equal-size baseline **3, 6**. AI boundary mean cosine ≈0.188; baseline ≈0.490. This is a calculated cohesion proxy, **not accuracy or a time saving**. All 6 seeded transitions across these three sets located; tiny clear-topic synthetic fixtures do not establish general accuracy.
- Real maximum input: 32 paragraphs embedded in 8 batches, 4 chapters each capped at 8. Every source paragraph retained, in order.
- Exhaustively enumerated feasible cut sets for n=2..9, every feasible count/maximum; dynamic-program score equaled the global minimum. This is a deterministic optimizer test, not an AI quality claim.

## Workflow / defensive checks

- Applying disabled before review; editing invalidates applied exports. Chapter-title edits, boundary constraints, undo, equal-size rejection and AI restoration work.
- JSON browser download independently parsed and every source paragraph reconciled. Markdown browser download reopened; every paragraph and reviewed title present. Clipboard equals reviewed Markdown. Exported JSON reimport recovers originals for reanalysis. Quoted/comma/formula-like titles remain literal; no CSV or spreadsheet output.
- Empty, one-paragraph, oversized total, oversized paragraph, too many paragraphs, impossible chapter constraints, invalid file extension/JSON and oversized file rejected.
- Cancel/retry during processing and real model downloading. Input changes invalidate in-flight runs. Delayed cancelled messages and delayed file reads cannot overwrite current input.
- Actual model-download blocking and actual WASM-download blocking produce errors, no fabricated results; retries after unblocking run real inference.
- Injected malformed vectors, absent Worker/WASM, worker construction/execution errors and accelerated 180-second timeout show errors and leave no result. These defensive fault injections are separate from real successful AI tests.
- Successful online load, network disabled, worker terminated and recreated: **real offline inference reproduced the online scores** in this already open page. Online reload uses cached resources. Whole-app offline reopening/navigation is not promised/tested.
- Network captured from initial page load: no remote model requests before explicit run; model traffic is GET/HEAD download-only, no notes in request bodies/URLs. No optional provider or keys in source. Pattern scan found no credentials in built text assets (not an exhaustive security guarantee).
- Desktop 1440 and phone-width 390/320 layouts checked for horizontal overflow, focused controls and screenshots. Mobile-width title review + exports passed. No physical phones or non-Chromium engines tested.

## Publishing

Root gallery inline scripts compile with Node `new Function`; new AI entry exactly once; every previous entry/category retained. Root combined workflow, not individual gh-pages deploy. Public byte-identity, Pages commit status and full public real-model suite are recorded separately in `deployment-validation.json` and `public-evidence/` once verified. Do not infer public success from branch push alone.

## Limitations

English-focused embeddings can miss subtle transitions. Forced count/length may cut mid-topic. No within-paragraph segmentation or summaries; no automated factual understanding. 450-character bounds can still truncate >256-token unusual content. Model revision is upstream-managed. Only the documented open-page offline scope is validated. Prior publication blockers elsewhere in this collection do not establish this app is published.

### Test harness note

An initial download-cancel test waited for a page-owned request, but model downloads are worker-owned. The harness was corrected to observe browser-context requests; complete local production runs then passed. A local gallery check was initially attempted during root deployment directory reconstruction; rerunning after assembly verified all 514 entries. Neither was substituted for real inference.
