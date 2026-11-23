# Observed validation — Radix Quay

## Production source bundle

- `npm run predeploy` passes, React + Vite base `/daily-app2/20261124-4/`.
- Real headless desktop Chrome, WASM CPU, GPU disabled. Two materially different synthetic contexts: all **12/12 intended profile matches**, six records per fixture. Both fixtures produce 3 ready and 3 blocked rows; all six are permissively decodable. Matching and strict-contract validity are separate checks, not a general accuracy claim.
- Context-only intervention: identical folded payload under API, URL and MIME descriptions produces real model-selected API/URL/MIME profiles and blocked/blocked/ready decisions. No mocked model in successful checks.
- Competing-negation probe (“Not a JSON API blob…mail attachment…”) incorrectly selects API. Mandatory review is essential. No universal semantic correctness or confidence claim.
- 24-record real inference uses the actual four-text worker batches. No source records lost. Audit reimport restores originals. Model vectors checked for count, dimension, finite values and unit norm.
- Fresh-worker **real inference with all network disabled** passes after warmup. This proves an already-open warmed-page scope only, not offline reload/navigation.
- Browser network trace from production startup: no model-host fetch before explicit loading; GET-only downloads, no request bodies or source context in URLs. Stored reports redact CDN query values. Built-asset credential-pattern scan empty; integration source inspected. This is not a generic security certification.

## Workflow, artifacts and deterministic correctness

- Review gating, manual profile/payload edits, approve/hold, undo, export invalidation, source preservation, clipboard and actual downloaded JSON/CSV/Markdown/manifest pass.
- Explicit MIME CRLF edit converts reviewed LF to CRLF without touching original LF, then emits verified bytes. This action resets approval. Actual cached tokenizer config reports maximum 512 tokens.
- Independent Python json/csv/base64 parses downloaded artifacts, checks all original and reviewed fields, multiline formula-leading notes, quoted IDs, row identities, manifest byte totals and hex/Base64 agreement. CSV adds an apostrophe to formula-leading text; JSON stays lossless.
- `core-test.mjs`: 2,318 assertions/check units, 1,143 deterministic byte cases. Independent Python Base64 matches all 1,143 cases, covering lengths up to the 512-character input bound, all three modes, CRLF folds, high bytes and incomplete quanta. Also rejects nonzero pad bits, invalid alphabets, impossible lengths, missing/excess padding, bare newlines and empty payloads. These are codec checks, not AI tests.
- Baseline acceptance/permissive-only counts are recomputed from approved rows; held rows excluded. No invented performance or accuracy percentages.

## Defensive and UI checks

- Actual worker-download abort and actual model-host abort fail visibly with no fabricated output; real inference retry succeeds.
- Fault injection only for unsupported Worker/WebAssembly, constructor failure, worker error, malformed vectors, 180-second timeout, stale errors and delayed valid responses. A delayed valid injected result cannot replace a newer **real-model** result. No simulated AI used to establish successful functionality.
- Cancel during fetch and active run, retry, input changes, delayed file read, empty/invalid/oversized JSON, >24 records, invalid modes/types and unsupported/oversized file imports pass.
- Desktop 1440 and narrow 390/320 widths: no horizontal overflow; form labels present, controls ≥44px, logical keyboard tab order. Normal viewport screenshots manually inspected (desktop hero, phone review/results); no clipping observed. Physical phones, low-memory hardware, non-Chrome engines, screen-reader speech and offline navigation/reload untested.

## Collection deployment checks

Gallery: one new entry, area AI Utilities first, every previous entry/category preserved; every inline script compiles with Node `new Function`, missing scripts fail closed. Real gallery rendering checks every card, browser errors and phone overflow.

Initial root assembly hit the existing conservative 1,000,000,000-byte guard at 1,000,135,078 bytes. Kept that guard and all app/source builds. Extended the existing deployment-only rule to `20261029-31`: its 541,470-byte geometry runtime exactly matches the existing immutable `20261028-24` runtime SHA-256 `73e3b419ad31294f6b1cc478173944e50efc4a34bfdeeff0107bdfc12975f11c`. Worker/entry references are query-versioned, legacy JS URLs retained, source dist untouched. New assembly reports 999,593,813 bytes and explicitly includes that app's removed duplicate. Affected legacy app's real browser worker/import/export checks are recorded separately; no geometry design changed.

Shared AI runtime hashes and deployed bytes are checked, not just HTTP status. Assembled and public browser/artifact/asset reports record their actual outcomes. Public completion requires latest Pages build commit equal to remote gh-pages head, public asset byte equality, public gallery rendering and real public AI inference.

Assembled site: real AI suite, offline fresh-worker inference, artifacts reopened independently, 9 app/shared asset byte comparisons and all 833 gallery cards passed. Legacy `20261029-31`: built-in, PNG, JPEG, ASCII STL and binary STL import cases passed real worker generation and downloaded geometry/signature checks against existing validators. No runtime browser errors.

## Public verification

GitHub Pages built `b2e7e8083e5d4e1ef888af8d59d00be12a3d7bf0`, matching the remote `gh-pages` head. All 9 new app/shared AI assets match assembled SHA-256/bytes. Public Chrome executes the real model on both fixtures, the full 24-record batch and context-only interventions, then passes fully offline fresh-worker inference, reviews/edits/holds/undo, clipboard/downloads and 320/390/1440 layouts. Reports contain sanitized asset traffic only. Physical-phone inference remains untested.

Affected legacy app: all 4 public entry/worker/shared-runtime asset byte comparisons passed. Initial public import smoke hit its original 30-second wait timeout; no code was changed. Retrying with a 120-second browser wait passed built-in, PNG, JPEG, ASCII STL and binary STL import/export cases, topology/mechanism/signature checks and no browser errors. Timeout headroom is a test change, not an app-performance guarantee.

Public gallery checks all 833 cards and earlier categories, no browser errors or 390px overflow. Independent public artifact reopening passed 89 byte/CSV checks across 10 full audits and 5 manifests. The first public workflow completed its assertions/report but hung during browser teardown; closing the context explicitly before the browser fixed the harness, and a full public rerun exited successfully. App code was unchanged. Public 320px hero screenshot also manually inspected without clipping.
