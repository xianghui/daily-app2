# Cascade Folio — observed validation

Date: 2026-11-22 (Asia/Singapore). Synthetic data only.

## Real model and workflow

- Production React/Vite bundle in desktop Chrome, GPU disabled, actual shared Transformers.js MiniLM q8 WASM inference. No mock/fallback used for successful runs. Customer retirement: **8/8** intended child/parent endpoint links; Project archive: **6/6**. These are two tiny known-answer fixtures, not general accuracy estimates.
- Customer fixture: 1 seed, 2 direct-only dangling links; closure of 3 candidate retirements, 2 retained, 1 restriction blocker and 1 candidate nulling. No post-retirement snapshot released.
- Project fixture: 1 seed, 1 direct-only dangling link; closure of 3 retirements and 1 retained comment, 0 blockers and 1 nulling. Snapshot preserves the comment with its parent reference null; all originals remain in the audit.
- Maximum 16 records/32 references (80 neural texts, 20 chunks) executed real inference. Reviewed cyclic cascade retires all 16 exactly once; no remaining references; JSON audit reimport restores all originals for new inference/review.
- Negated/unknown prompt-injection-like child note still selected nearest `order`; left pending and held. Similarity does not establish identity, negation understanding or deletion authority. No credential request or external action occurred.
- Endpoint/action edits reset approval; pending rows block apply. Notes invalidate exports. Multiline formula-like note, reject/hold, undo, clipboard, JSON/CSV/Plan CSV/Markdown downloads and source-input invalidation passed. Policy correction from restrict to set-null produced a new valid snapshot, while originals retained restrict.

## Independent correctness and actual artifacts

- `core-test.mjs`: 800 generated graphs checked against exhaustive subset enumeration for the least cascade-closed retirement set. Compared surviving restriction blockers, conservation and reference integrity, including cycles/self-links. Review/vector-schema guards reject invalid data.
- `artifact-test.py`: eight downloaded audit sets parsed with Python JSON/CSV (independent of app exporter). Every reference review, every Plan CSV record, witness, release status and complete Markdown audit compared against current JSON. Multiline quotes/commas and `=SUM(1,2)` survived JSON/Markdown and were safely escaped in CSV. No lost originals; held and blocked outputs labeled accurately. Maximum audit reimport passed.
- Actual baseline/impact counts checked; no claimed accuracy percentages, fabricated confidence or timing improvements.

## Runtime, privacy, caching and defensive checks

- Before explicit loading: no model-host traffic. Captured requests from production shell through all successful runs were GET-only with no bodies or user-content snippets in URLs. Public model/runtime file downloads only. Reports retain host/path/query-key names, never signed query values.
- After online warm-up, disabled all context networking, terminated the previous worker and ran actual inference in a fresh worker successfully. This verifies **already-open warmed-page** offline inference only. Cold app-shell reload/startup remains untested/not promised.
- Ten defensive modes passed: model-host download failure followed by actual retry; unavailable WASM; worker fetch failure; unsupported worker construction; malformed vector schema; malformed message envelope; accelerated timeout; worker runtime error; late cancelled response and late response after source change. Fault injection used only for these defensive tests, not evidence of model quality.
- Separate tests: cancel during a cold model-weight download/progress and real retry; delayed old error cannot overwrite a newer real inference; delayed JSON file read cannot overwrite edited source; delayed worker-source fetch ignored after source change. No fabricated output on failures.
- Runtime dependency byte hashes verified. Model tokenizer metadata independently fetched (`model_max_length=512`); source descriptions ≤200 characters, model vector schema fixed to normalized finite 384 dimensions.
- Built assets passed credential-pattern scanning and integration review (no key/provider/upload path). Scanning alone is not exhaustive proof; observed request traffic and code paths corroborate local processing.

## UI, production and scope

- Desktop 1440 px and narrow 390/320 px layouts: all form labels present, keyboard focus works, controls meet 44 px minimum, no document horizontal overflow. Normal viewport input/review/results screenshots recorded and inspected. No clipped content found; long select descriptions retain full option labels when opened.
- Empty/malformed/null/oversized JSON, unsupported file format and >4 MB import rejected without output.
- Per-app predeploy and lint pass. Removed unused scaffold icons after first root assembly exceeded the unchanged size guard by 8,873 bytes. No old app or deployment sharing rule changed. Final assembled collection **999,994,319 bytes**, below unchanged 1,000,000,000-byte guard. App served bytes: 171,309.
- Root gallery inline script compiles with `new Function`; exactly one new `ai-utility` entry. All 793 pre-existing entries preserved, 794 total, every assembled app present. AI Utilities remains first and earlier STL/game categories preserved. Existing utility-focused tagline already satisfies the new focus.
- Shared immutable worker/factory (`20261115-6`) and WASM (`20261107-2`) remain required. Assembly verifies their hashes and all new build bytes. The full real-inference/workflow/privacy/offline/export suite also passed against the assembled deployment; all 794 gallery cards render with search and preserved older categories.

## Limits

Not a database safety certification or executable migration. Deferred final-state RESTRICT semantics only; no actual SQL engine, triggers, composite keys, hidden references or concurrent writes. Review SET NULL nullability. AI identity matching may fail with similar/unknown/negated descriptions. Physical phones, non-Chrome browsers, low-RAM devices and cold offline startup untested. No live databases or real personal data used. No digest sent.

## Publication

Public release verified: matching Pages `c109b002e6faf7015eb34b8011af3b993ecb5424` and workflow `44983813850` succeeded. Seven public gallery/app/worker/factory/WASM assets byte-match the assembled site. Both public real-AI fixtures (14/14 simple endpoints), full reviewed/export/maximum-batch/offline/privacy suite, independently parsed artifacts and all 794 gallery cards passed. Combined site: 999,994,319 bytes below the unchanged 1 GB guard; no new runtime-sharing rule. Source staging preserves and excludes unrelated pre-existing recovery work. No digest sent. See `publication-status.json` and public validation reports.
