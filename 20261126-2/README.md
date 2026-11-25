# Rollforward Desk — 20261126-2

**Published and publicly verified:** https://xianghui.github.io/daily-app2/20261126-2/ . See `publication-status.json` and `VALIDATION.md`.

A local-AI business-date review utility for operations coordinators reconciling payment-date handoffs. Informal instructions hide whether a holiday/weekend date should move forward, backward, or stay within its original month. MiniLM retrieves a supplied convention profile; mandatory review precedes deterministic calendar adjustment and source-preserving JSON/CSV/Markdown exports. It never submits payments, contacts services or changes accounts.

## Workflow

1. Try either synthetic example, paste source JSON or import a source/exported audit `.json`.
2. Set the explicit calendar: closed weekdays (0 Sunday through 6 Saturday), holidays, and 2–6 profiles whose `rule` is `following`, `modified-following` or `preceding`. Holidays are **not inferred or downloaded**. Every date is a calendar date, not a zoned timestamp.
3. Explicitly click **Load AI & match conventions**. No model requests occur beforehand. AI embeds each profile description and each note, retrieves nearest profiles with normalized cosine similarity, and shows alternatives/source snippets. Similarity is not confidence.
4. Verify the rule, calendar and source date, change the profile/date or hold, and add multiline reviewer notes. Approve-all means you checked the links, not automatic approval. Undo restores the previous review. Originals remain unchanged.
5. Apply only after every row is approved or held. Working dates remain unchanged. Following walks forward to the first working date; preceding walks backward. Modified following first walks forward, but if it changes month it walks backward from the original date. Inspect exact visited-day witnesses. Supplied holidays apply even when they are not weekends.
6. Compare against always-following on the **same reviewed dates and calendar**. Date-difference counts measure convention effects, not error rates or measured time savings. A baseline beyond 2000–2099 is marked unavailable independently of a valid reviewed result.
7. Download all-request JSON/CSV/Markdown or copy Markdown. Every original/hold survives. JSON also includes exact calendar/profiles and full review. Any edit invalidates exports until reapplied. Audit reimport restores original source, not approvals.

## Model, runtime and download

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), **Apache-2.0**, q8 ONNX; Transformers.js **4.3.2**, ONNX Runtime Web, single-thread WASM CPU. Model revision is not pinned.
- Real normalized mean-pooled **384-dimensional embeddings** drive semantic profile retrieval. Input dates, IDs and deterministic calendar calculations do not masquerade as AI. No canned responses, generative model, remote provider or fallback classifications.
- Approximately **50 MB first download**: ~23 MB weights + ~27 MB WASM, plus JS/tokenizer. Internet initially required for Hugging Face/CDN model files and same-origin runtime assets. User notes are not uploaded with those downloads.
- Module workers, WebAssembly SIMD and sufficient memory required. **No WebGPU needed**. Desktop Chrome with GPU disabled is tested. Physical phones and other browser engines are not tested; narrow desktop emulation is not a phone-performance claim.
- At most 6 profile descriptions + 24 notes = **30 embeddings in eight chunks of at most four**. Texts ≤200 characters. Shared feature-extraction supplies max_length 256 but the inspected pipeline actually uses tokenizer model_max_length **512**; an independently enforced 256-token cap is not claimed. Unusual text may truncate.
- Immutable same-origin worker/runtime reused to avoid redundant collection binaries; preserve these published paths:
  - `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
  - `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
  - `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`
- Protocol, model/pooling/chunk settings and dependency bytes are recorded in `runtime-provenance.json` and checked by `audit-assets.mjs`.

## Privacy, cache and failures

Content stays in page memory and a local worker. No API keys, agent credentials, telemetry, remote AI or financial integrations. Fixtures are synthetic. Imports are data rendered as text, never tool instructions or credential requests. No persistence of user source is implemented. Cache API stores worker/model/runtime files where permitted, not source documents.

Download/chunk progress, cancellation, 180-second timeout and retry are visible. Workers terminate and run/import identities guard late responses and asynchronous reads. Unsupported workers/WASM, worker construction/runtime failures, network failure and malformed vector count/dimension/nonfinite/non-normalized values fail visibly without fake AI.

**Tested offline scope:** after successful online loading, a fresh worker can perform real inference in the already-open warmed page with network disabled. Offline navigation/reload/cold app-shell startup is **not promised**. Cache eviction, denied storage/private browsing may require downloads. Network audit observes only GET file downloads without bodies to same-origin and documented model hosts; persisted reports strip signed URL query values. Built asset credential-pattern scanning complements source/network inspection, not an exhaustive security proof.

## Formats and limits

Use either in-app example as the complete source schema:

```json
{"title":"Payment-date review","weekend":[0,6],"holidays":[],"profiles":[{"id":"next","description":"Move forward to the next working day","rule":"following"},{"id":"prior","description":"Move back to the previous working day","rule":"preceding"}],"requests":[{"id":"P1","note":"Use the previous business day before the weekend","date":"2026-01-31"}]}
```

Source ≤60,000 characters; JSON file/source-audit envelope ≤1 MB; title ≤200 chars. 2–6 profiles; 1–24 requests; each description/note ≤200 chars. Unique 1–40 character ASCII letter/digit/underscore/hyphen IDs within each list. Review notes ≤500 chars, multiline supported. Weekends: 1–6 distinct weekday numbers. Holidays: 0–60 unique real ISO dates. Date inputs/outputs restricted to **2000–2099** and each walk bounded at 370 days. Invalid/duplicate IDs, impossible dates, empty/oversized arrays, bad rules and malformed inputs are rejected.

JSON contains originals, reviews, candidates, all rows, witnesses and computed metrics. CSV has all originals, reviewed convention/date, decision, adjusted date, baseline, reviewer note and JSON witness trail, with proper CRLF/quote/newline escaping. Formula-like strings beginning `= + - @ TAB CR` receive an apostrophe; numeric shifts remain numbers (including negative shifts). Markdown is plain-text audit output, not safe executable HTML. No bank-import instruction or legal-compliance artifact is generated.

## Quality, limitations and validation

Both three-request straightforward fixtures matched **6/6** intended profiles using real browser inference; always-first-profile baseline matched **2/6**. These are small hand-authored examples, not representative accuracy. During development an initial verbose profile set picked modified-following for all three first-fixture requests; even revised descriptions misclassified the explicit “even if the month changes” request until the example wording was simplified. `challenge-validation.json` retains tests of that wording, negation and unrelated input: all three needed correction/hold (retrieved month/month/next versus desired next/next/hold). AI always proposes a profile and cannot abstain by itself. Mandatory human correction/holds are essential. Matching a rule is not legal interpretation or evidence of the correct settlement calendar.

The deterministic date engine is independently checked against Python datetime over **1,200 randomized calendar/rule cases (4,800 assertions)**. Browser suites test real CPU inference on both batches and maximum size, offline fresh workers, review/date edits, holds/undo, current exports, reimport, clipboard, cancellation/retry, stale callbacks/imports, failure injection, labels/focus and 1440/390/320px layouts. Downloaded JSON/CSV/Markdown are independently parsed using Python. See `VALIDATION.md` and retained machine-readable reports for observed results and publication status.

Unsupported: real bank calendars, timezone/cutoff processing, legal interpretation, payment execution, holiday generation, modified-preceding, end-of-month schedules, following-period day counts and intraday SLAs. Physical phones, other engines, representative contractual-language accuracy and cold offline startup remain untested.

## Development and publishing

React + Vite; base `/daily-app2/20261126-2/`. `npm install`, `npm run dev`, `npm run predeploy`; required scripts `predeploy: npm run build` and `deploy: gh-pages -d dist` and per-app gh-pages dependency retained. Standalone Vite does not serve the older shared asset paths: serve the assembled collection at `/daily-app2/` for inference tests. Publish **only through root** predeploy/deploy and `deploy/`, never individual app deploy. A pushed branch is not proof of public runtime success. No builder digest is sent.
