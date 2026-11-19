# Gap Orchard — observed checks (2026-11-20)

## Real-model production-bundle checks

Desktop headless Chrome with GPU disabled, production Vite bundle and deployment-prefixed URLs, real local quantized MiniLM WASM inference (not mock results).

- Library fixture: 6/6 intended question identities. Observed 6 cells / 6 missing, zero complete people. Budget 2 answers + 2 contacts: exact plan proposes B and C (potential 2 complete people), roster-order baseline A (potential 1).
- Workshop fixture: 6/6 intended identities in a different domain/rating scale, including an explicitly missing answer. Observed 5 cells / 7 missing. Exact plan F and G (potential 2), baseline E (potential 1). No-permission H never selected.
- One library paraphrase cosine 0.3157 is only slightly above the sample 0.3 threshold. These are tiny synthetic fixtures, not general accuracy claims. Unrelated/instruction-like text remains data and was held manually; embeddings cannot establish identity/consent or correctly interpret every negation.
- Changing a real input label from equipment to booking changes its neural assignment and the resulting missing-question checklist. No hard-coded responses or deterministic fallback.
- Maximum 6 questions + 72 records across 12 people: 78 actual embeddings / 20 batches, all records and complete roster survive. Audit reimport restores all originals with renewed pending reviews.
- Fully network-disabled **fresh-worker real inference inside an already-open warmed production page** passes. Offline reload/navigation, physical phones and other browsers are not claimed tested.

See `browser-validation.json`, `browser-test.log`, runtime hashes/config in `runtime-dependency-audit.json`, actual downloaded `export-*` artifacts.

## Hard constraints, review and artifact checks

- 100 generated exact-subset cases independently cross-checked against dynamic programming; matching max completions and minimum requested-answer costs.
- Every source record retained with original ID, participant, label/value; every roster participant and question cell retained, including missing/held/deferred/no-permission states.
- Requested cells/contact counts never exceed caps; no nonpermitted participant selected. Observed + missing equals full matrix size; potential rows are explicitly conditional ceilings, not predictions.
- Mandatory approve/hold; pending review blocks application. Identity/value edits reset approval. Hold/reject, undo, zero versus blank missing, range failures, duplicate approved cells and invalidated export controls exercised.
- JSON, complete record CSV, matrix CSV and Markdown actually downloaded. Independent Python `csv`/`json` parsers checked all rows, reviewed fields, zero/missing states, quoted comma/newline notes, formula-like text protection and complete roster. Clipboard copied actual reviewed Markdown. Maximum audit round trip passed.
- Invalid/empty/oversized source, unsupported format, malformed JSON, IDs/duplicates, unknown participants, permissions, nonnumeric values, budgets/thresholds/label length rejected.

## Runtime defenses, privacy and layout

Successful model paths use real AI. Fault injection is limited to defensive tests: network abort and recovery, worker download/construction/error, unavailable WebAssembly, malformed envelope/vectors, and accelerated timeout all leave no fake recommendations or enabled exports.

Cold download cancellation then real retry passes. Input change/cancel prevents stale result application. Independently delayed imports, worker-source fetches and old-result delivery cannot overwrite or launch work for a newer input. Tests: `defensive-*`, `cold-cancel-*`, `import-stale-*`, `newer-run-*`, `worker-fetch-stale-*`.

Network audit from page startup through inference: only public-file GET/HEAD requests; no request bodies or source text in URLs, no model-host requests before explicit loading. Reports sanitize CDN URLs to origin/path (no signed query values). Model/runtime cache contains public assets, not survey content. Built HTML/CSS/JS scanned for credential patterns and integration source manually reviewed: no key handling, remote inference, telemetry or account actions. A pattern scan is not a general security proof.

Desktop 1440px and narrow 390/320px layouts: no horizontal overflow, labeled fields, visible keyboard focus, ≥44px buttons, working input/review/export. Screenshots visually inspected; phone-only ornamental dots adjusted to avoid awkward wrapping. This tests emulated viewport layout, not physical phone RAM/browser support.

## Publication

Root gallery/script checks, assembled production rerun, combined build size and public Pages inference/assets are recorded after deployment in `assembly-validation.json`, `assembled-browser-validation.json`, `gallery-validation.json`, `gallery-ui-validation.json`, `public-asset-validation.json`, `public-browser-validation.json`, `public-gallery-ui-validation.json` and `publication-status.json`. Completion requires public checks, not just a branch push.

## Public release results

Matching gh-pages head `8f1bde6fbcfac83b1a0265a0851e2ae1684e876b` reached **built**; Actions run `44616072208` completed **success**. Combined site: **999,909,997 bytes**, below the unchanged 1 GB guard. All **738** prior gallery objects preserved; public gallery renders **739** cards with AI Utilities first and older categories/search intact. Every gallery inline script compiled with Node `new Function`.

**13 public files** (gallery, new app assets and preserved shared/legacy runtime assets) byte-match the assembled build. Public app repeated the full real-model two-domain, max-batch, semantic-change, review/edit/hold/undo, artifact/clipboard, privacy, fresh-worker-offline and responsive suite with zero page errors. Downloads were independently reparsed afterward. Only public static-file GET/HEAD traffic, no bodies or content-bearing URLs. Reports use sanitized paths only. Public source update excludes unrelated pre-existing working-tree changes. No digest sent.
