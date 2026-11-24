# Dialect Desk — observed validation

## Local and assembled production bundles

- React + Vite production build passes. Success checks use actual Chrome, headless CPU with GPU disabled and the real quantized MiniLM model, not mocked output.
- Both materially different synthetic batches matched all six intended contracts: CRM/scanner/finance and interview/sensor/archive. Each sample produces two exact data rows; header/no-header distinctions survive. All six samples expose naive-split differences. These are tiny fixture results, not population accuracy.
- Context-only intervention leaves the raw CSV unchanged but switches real model retrieval between a header contract and no-header contract, changing the exported table. Negation probe matched scanner correctly in this run; no general negation reliability claim.
- Independent Python `csv.writer/reader(strict=True)` generated/verified **360 cases**, comparing every cell and canonical export round trip across comma/semicolon/tab, 1–6 columns, headers, Unicode, quotes, delimiters, newlines, CR, empty strings and numeric/formula-like text. Nine invalid/over-limit samples reject; duplicate headers are retained as arrays. Separate hard-limit checks cover 12 columns, 200-record acceptance/201 rejection, singleton empty-cell canonical encoding, interior blank preservation, malformed Unicode, oversized cells, malformed vector schemas and review-count mismatch.
- Full 24-sample real-AI batch preserves all samples with correct contract selection and audit reimport. Actual browser downloads independently pass **519 assertions**, reopening **33 canonical tables** and verifying **304 cells**, plus exact original/reviewed samples, multiline formula-like reviewer notes, holds, blocks, undo and computed baseline differences. Python reads CSV bytes without newline translation, preserving exact quoted CRLF content.
- A 24-sample dense Unicode audit with 2000-character reviewer notes is **206,774 bytes** and reimports all originals within the separate 4 MB envelope; >4 MB is rejected and source limits remain enforced.
- Every sample requires approve/hold before apply. Contract/text edits renew approval; any review edit invalidates exports. Original preservation, review edit, hold, undo, clipboard, malformed/empty/oversized inputs and unsupported import format checked.
- Real fresh-worker inference succeeds with all networking disabled in an already-open warmed page. Cold offline navigation/reload is unsupported and untested.
- Ten defensive browser checks cover actual worker-download and model-host aborts, missing Worker/WASM, worker construction/error, malformed model vectors, timeout, stale-result prevention and cancel during delayed fetch. Separate delayed file-read test confirms newer input survives. Real cancel/retry works; no fake success fallback.
- Network capture from startup through inference confirms no model requests before explicit loading, only GET asset/model downloads without request bodies, no synthetic source context in URLs and only documented origin/model-CDN hosts. Reports store host/path/query-key names rather than signed CDN query values. Source has no provider integration/credential fields; built text credential-pattern scan passes (not an exhaustive proof).
- 1440px desktop and 390/320px phone-width layouts: no page overflow, every form control labeled, visible buttons/input/select/summary targets at least 44px. Normal viewport hero/review/results screenshots captured; phone views visually inspected. Tables scroll within their own region. Physical phones/other browser engines untested.

## Combined collection

- All **856** apps assembled with zero failures/skips. Every inline gallery script compiles via Node `new Function`; exactly one new utility entry, first under AI Utilities; all previous entries/categories retained. Actual gallery renders all 856 cards without page errors or 320px overflow.
- Combined published payload **999,643,649 bytes**, below unchanged **1,000,000,000-byte** budget. One byte-identical 541,470-byte geometry duplicate is shared deploy-only from `20261106-4` to immutable `20261028-24`. Original dist builds unchanged, compatibility JS URLs retained and entries query-versioned.
- **11 exact asset-byte comparisons** cover root gallery, new HTML/JS/CSS, shared AI worker/factory/WASM and affected legacy HTML/JS/geometry WASM. Real affected legacy default geometry and PNG/JPEG/ASCII/binary STL imports produce fingerprint-matched, independently checked STL downloads with no browser errors and use the shared runtime path.
- Assembled production reruns the full real-AI workflow, reviewed export, 24-sample, warmed-page offline, responsive and invalid-input suite; independent downloaded-artifact and dense-envelope checks pass again.

## Public release

- https://xianghui.github.io/daily-app2/20261125-4/
- Matching remote gh-pages / Pages **built** commit `9f067e8ddd6a32ab280278600ed8f393dae1c097`; workflow **45466991216** completed successfully. Published through the root combined-site workflow.
- All **11 public assets** byte-match the assembled production files, including AI worker/factory/WASM and affected legacy runtime assets. The affected older app again passes real PNG/JPEG/ASCII/binary imports and independently checked STL downloads.
- Full public real-model workflow passes both batches (6/6 intended contract links), reviewed edits/holds/undo, 24-sample chunks, source reimport, cancellation/retry, invalid inputs, privacy request checks, context-only table change and 1440/390/320 layouts. No browser page errors. Fresh-worker real inference succeeds offline in an already-open warmed page.
- Actual public downloads independently pass **519 assertions**, **33 reopened canonical tables** and **304 checked cells**; reviewed multiline/formula-like notes and sample edits survive. Dense **206,774-byte** Unicode audit round-trips all 24 originals; >4 MB rejected.
- All **856** public gallery cards render, all older entries/categories retained, no narrow-phone overflow.
- Untested: cold offline navigation/reload, physical phones, other browser engines and actual downstream spreadsheet imports. No accuracy/time-savings claim beyond these small synthetic fixtures; the app is not a format-detection or data-quality certification. No digest sent.
