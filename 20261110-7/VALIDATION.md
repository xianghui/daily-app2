# Observed validation — Index Folio

## Local production bundle

- `npm run predeploy` passed. Actual browser: Playwright driving installed desktop Chrome, WASM CPU, no WebGPU.
- Real model inference on **Garden handbook** and **Audio field guide** matched **12/12** intended single headings across the two synthetic six-excerpt batches. Literal heading-title baseline matched **0/12** excerpts. This is a tiny known-answer check, not general accuracy.
- Garden output: Water conservation 12–14; Soil health 20–22; Pest control 30, 32. Audio output: Sound capture 5–7; Audio editing 15, 17; Mixing 23–25. Overlapping pages deduplicated.
- Negated and unrelated challenge passages still received nearest headings, requiring holds. “Do not save water…” selected Water conservation (cosine 0.761); an unrelated jazz-concert passage selected Pest control (0.039). Both were held in the challenge audit. AI is retrieval, not semantic entailment, relevance certification or subject-importance assessment.
- Maximum 24 excerpts / 12 terms, four-text batching, manual three-subject review, all-held batch and original-input audit reimport passed.
- Mandatory review; edit/undo; invalid page ranges; selected-term cap; holding sources; edited-page export freshness; downloaded JSON/CSV/Markdown and clipboard equality passed. Independent Python JSON/CSV parsing verified original-record conservation, reviewed pages, held sources, multiline/quoted/Unicode annotation and spreadsheet formula neutralization.
- 1,000 generated range-compression round trips and 500 generated reviewed heading/page-union cases passed independent set-expansion checks. Vector/schema/duplicate-title guards passed.
- Online inference followed by **network disabled + fresh worker + real inference** passed. Offline reload/navigation is not claimed.
- Empty/malformed/oversized inputs, unsupported CSV import, wrong page types, too many records, cancellation, input change, retry and stale callbacks passed. Fault injection tested malformed vectors, unavailable Worker, WebAssembly failure and shortened timeout; successful AI checks use the real model, not these fault stubs.
- Fresh-context real model-host download failure + retry and cancellation during an actual weight request + successful real retry are recorded separately.
- Desktop 1280px and narrow 390px/320px layouts passed no-horizontal-overflow checks, input labels/focus, >=44px primary touch targets and export interactions. Screenshot inspection performed. Physical mobile devices and other browser engines remain unverified.
- Browser network capture contained GET asset downloads only; no content request bodies and no excerpt text in URLs. Model hosts were not contacted before explicit loading. No API credentials or remote integration exist. Built asset scanning is documented in asset-validation.json, not presented as an exhaustive security guarantee.

## Publication

Published successfully at https://xianghui.github.io/daily-app2/20261110-7/. GitHub Pages workflow [42710458211](https://github.com/xianghui/daily-app2/actions/runs/42710458211) completed build/deploy successfully; Pages latest build reports `built` for publishing branch commit `bbcbef5e0a6117f3a92c26471e3e64bc778f5c46`. Public app, worker, WASM factory, shared WASM and root gallery matched local production bytes. Both public synthetic workflows completed real inference and downloaded reviewed JSON with all records and intended indexes. All 14 runtime-deduplicated legacy workers also completed real public inference; gallery renders 568 apps with AI Utilities first and preserved legacy categories/search. See public-assets-validation.json, public-inference-validation.json, public-legacy-runtime-validation.json and gallery-ui-validation.json.

## Collection deployment repair

The initial combined build measured 1,270,905,714 bytes, exceeding the [GitHub Pages published-site size limit](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). That oversized deployment remained in `syncing_files` and was deliberately cancelled rather than retried unchanged. Root deployment now deduplicates byte-identical ONNX WASM only in generated deploy output, retaining source builds and compatibility JS URLs and cache-busting changed workers/shells. See `legacy-runtime-validation.json`, `pages-limit-reference.json` and generated runtime-deduplication.json. This is a verified size violation, not proof that every historical synchronization failure had this cause.

The optimized published site is **905,958,654 bytes**, below the conservative 1,000,000,000-byte guard. The first optimized deployment succeeded. Source/dist builds for all older apps were preserved; only root-generated deployment paths changed.
