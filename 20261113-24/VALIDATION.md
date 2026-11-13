# Folio Press — observed validation

## Local production bundle

- `npm run predeploy` passed. Real Chrome (headless, CPU/WASM with GPU disabled), two materially different synthetic batches: Workshop and Garden each matched all four intended section ids (8/8 total). Tiny known-answer fixtures do not establish general accuracy.
- Both batches had three original-order topic transitions versus one grouped transition. These are computed descriptive counts, not measured editorial quality. Eight content pages survive in each booklet. Page counts are supplied, never inferred.
- 3,000 independent seeded pagination cases, each in original and grouped order, passed cursor-based placement/recto/padding/transition checks. Every physical sheet map contains every logical page exactly once. No missing document pages. This validates mathematical page maps, not physical binding capacity; maximum-batch maps are stress tests, not printable-production recommendations.
- Nine browser workflow groups passed: two real-AI batches; multiline editing/undo/hold/export/clipboard/reimport; warmed-page fresh-worker offline inference; empty/invalid/oversized/duplicate/unsupported inputs; cancellation/retry/stale input and 40-document × 50-page batches; reviewed page/section changes; instruction-like unrelated challenge; 1440/390/320px layouts, labels/touch sizes and keyboard focus.
- Cold-model download cancellation separately passed: no late results, exports remained disabled, retry executed real inference.
- Six fault-injected defensive checks passed: model-host network denial (then real retry), worker fetch denial, unsupported workers, malformed embeddings, accelerated timeout and worker error. Fault injection is only for failures; successful inference uses real downloaded weights.
- Unrelated instruction-like text still received a nearest section (`practice`); it stayed pending and was held, blocking pagination. Nearest similarity is not relevance or editorial correctness.
- Actual downloaded JSON/CSV/Markdown/Sheets CSV independently parsed. Four batches including 40 documents retained all originals/reviews; quoted multiline owners/notes and formula escaping survived. Sheet CSV matches current JSON. Reimport restores originals only and requires renewed review.
- Network capture from startup through model inference observed GET-only downloads, no request bodies, only same-origin runtime and documented Hugging Face/CDN downloads. No model download before explicit loading. Built text credential-pattern scan found no matching embedded secrets; this is not a general security audit.
- Shared WASM and local module factory byte-matched installed runtime; production worker paths verified. Warmed-page offline inference passed after terminating the prior worker and disabling network. Offline navigation/reload is not claimed.
- Screenshots visually inspected at narrow widths. No horizontal overflow at 320/390/1440px. Physical phones/other browsers, actual PDFs, physical folding/printing, duplex orientation, accessibility assistive technology and long-term cache eviction remain untested.
- The browser test harness was paced between downloads after Chrome throttled an eleven-download burst. Sheet exports now also use a distinct filename and CSV MIME. Final bundle reran all workflow groups successfully.

Machine-readable reports and scripts in this folder record actual outcomes. Combined assembly and public verification are recorded below only after passing.

## Combined collection

Root `npm run predeploy` passed with 649 apps, zero failed/skipped; deploy-only runtime reuse reduced assembly to 976,765,008 bytes. Root gallery inline scripts compiled with Node `new Function`, new entry appears exactly once as `ai-utility`, and all 648 previous working-tree entries/categories were preserved. Combined assembly byte-matched the new bundle and included every app index. All nine browser groups reran successfully against the assembled production tree, including real inference and offline fresh-worker processing; gallery rendering/search passed at desktop and narrow widths.

## Public release

Pages built commit `69a079f5e52d484521162e1286cd1701e81329f9` successfully on the first combined deployment. Public HTML/CSS/JS/worker/runtime files and shared WASM byte-matched local production assets; public gallery byte-matched the preserved 649-entry working tree. Both real-AI fixtures and all nine workflow groups passed again at the public URL, including current artifacts, maximum batches and warmed-page fresh-worker offline inference. Public gallery categories/search and phone widths passed. Actual downloaded public artifacts were independently parsed again. See public-asset-validation.json, public-browser-validation.json, public-gallery-ui-validation.json and publication-status.json.
