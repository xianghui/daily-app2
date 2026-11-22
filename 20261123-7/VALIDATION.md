# Observed validation — Parity Folio

## Local production bundle

- Required per-app `npm run predeploy` passed on Vite 8.3.8 / React 19.3.1. Shared worker/module/WASM production paths verified byte-for-byte against recorded hashes. Model tokenizer `model_max_length=512` fetched and pipeline implementation/source inspected.
- Actual Chrome WASM CPU inference with GPU disabled matched all **8/8 simple intended recipe labels** in two materially different synthetic batches. Archive: rank 3/3, all three blocks recovered as `1020`, `ffaa`, `5566`. Workshop: four shares but rank 2/3, only the temperature block recovered; pressure/humidity remained unresolved. This is a tiny fixture result, not general semantic accuracy.
- `core-test.mjs`: **1,000 independent exhaustive GF(2) assignment oracles**, checking all byte bits, individual uniqueness, rank, contradictions and source XOR witnesses. Schema, invalid input, malformed vectors, pending reviews and held-output suppression passed.
- Actual inference changed workflow output following a reviewed recipe correction; approval reset and stale exports blocked. A real-model contradictory-hex batch withheld all bytes and exported a source witness. Any held share withheld every block, without dropping constraints. Unknown/instruction-like text still received a nearest candidate and remained pending; a human hold was required.
- Complete real-model 8-recipe / 32-share / 8-block / 32-byte maximum batch ran 40 embeddings in ten chunks. All records survived audit export/reimport. Actual current JSON/CSV/Block CSV/Markdown downloads were independently parsed in Python; source IDs, original bytes, all blocks/shares, multiline quoted comma/formula-like review text and XOR witnesses survived. Clipboard contained current reviewed content.
- New-worker **actual inference with network disabled in an already-open warmed page** passed. Cold app-shell offline startup/reload is not claimed. Cold model-download cancellation followed by real retry passed. Browser records show GET-only public file downloads, no request bodies and no user content in URLs; no model-host requests before explicit Load AI.
- Empty/invalid/oversized JSON, unsupported CSV import, oversized files, network abort/recovery, missing WebAssembly, unavailable module workers, failed worker download, malformed vectors/envelopes, worker errors and accelerated timeout produced actionable errors and no fake results. Delayed messages after cancellation/input changes, delayed file reads/worker fetches and a superseded old result could not replace current source/newer real inference. Defensive failures alone used fault injection.
- Desktop 1440 px and emulated phone 390/320 px checked for document overflow, labels, keyboard focus and ≥44 px control targets. Hero/review/results screenshots visually inspected. Found and fixed the initially missing shared reset/touch styles, then reran the full production workflow suite successfully.
- First title check caught the scaffold title; corrected before real workflow validation. An artifact comparison attempted while a browser rerun was still writing artifacts read mismatched old/new timestamps; repeated after browser completion passed without weakening assertions.

Reports: `core-validation.json`, `browser-validation.json`, `artifact-validation.json`, `defensive-validation.json`, `async-race-validation.json`, `superseded-run-validation.json`, `cold-cancel-validation.json`, `model-runtime-audit.json`, `runtime-dependency-audit.json`.

## Limitations and publication

No physical phone, Safari/Firefox, screen-reader, live archive, storage repair or undetectable-corruption authentication testing. Bytes are only conditionally consistent with supplied recipes; MiniLM does not understand arbitrary/negated labels reliably. No general accuracy, integrity, financial savings or measured time-savings claims.

Combined-site and public-release observations are appended after their actual checks. See `publication-status.json` for release evidence.

## Combined production site

Root predeploy passed: all 812 app builds copied, no failed/skipped apps. All 811 prior public gallery entries remain byte-for-byte present; AI Utilities is first, older categories/search/links work, and the new entry appears exactly once. Every gallery inline script compiled with `new Function`. New production app assets match assembly and all shared runtime hashes match. No new legacy deduplication rules were introduced. Total **999,878,600 bytes**, below the unchanged **1,000,000,000-byte** guard. Built text assets passed credential-pattern and integration review (pattern scans alone are not exhaustive proof).

The full actual-model workflow/privacy/offline/maximum-batch/export/responsive suite also passed against the **assembled production site** at its deployment base; independently parsed assembled artifacts preserved every row, reviewed field and byte witness. `npm run lint` is clean. See `assembly-validation.json`, `bundle-audit.json`, `assembled-browser-validation.json`, `assembled-artifact-validation.json` and `assembled-gallery-validation.json`.

## Public release

Published through the ROOT combined workflow. Remote gh-pages `03192df32bb6dd7744009bf07526d5a577755eb4` matches the Pages API's **built** commit; workflow **45076069560** completed successfully. All **nine** public gallery/app/worker/factory/WASM assets byte-match the assembled production output. The **full public-URL real-model suite** passed both fixtures (8/8 simple recipe identities), reviewed edit/undo/hold/contradiction behavior, maximum chunks, fresh-worker warmed-page offline inference, cancellation/retry, invalid inputs, privacy/network checks, actual downloads/copy and responsive layouts. Public artifacts were independently parsed with Python, including multiline reviewed edits and byte witnesses. All **812 gallery cards** render with preserved categories and search. No physical phones or cold offline startup tested. No digest sent. See `public-asset-validation.json`, `public-browser-validation.json`, `public-artifact-validation.json`, `public-gallery-validation.json` and `publication-status.json`.
