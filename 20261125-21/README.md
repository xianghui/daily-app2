# Effective Ledger

A no-key historical pricing worksheet for print-shop/venue coordinators backfilling transaction notes against versioned price books. Bottleneck: rough descriptions do not use catalog IDs, while current rates can misprice old work. Real local AI proposes books; mandatory human review and deterministic half-open intervals produce source-linked amounts or explicit gaps/overlaps. This is not a generic chat wrapper, inventory-costing engine, equality join or billing system.

## Workflow

1. Choose a synthetic example, paste source JSON, or import `.json`.
2. Explicitly load AI. MiniLM embeds each supplied book description and transaction context, ranks cosine similarity, and proposes a book. No hardcoded responses, keyword classification or remote inference.
3. Inspect alternatives and source versions. Review/edit book, calendar date and whole quantity; approve or hold every request. Add multiline notes and undo up to 100 review edits. AI never supplies rates or authorizes transactions.
4. Apply. Exactly one version must contain the reviewed day. Missing/overlapping windows block pricing, even when overlapping rates agree. Integer-cent multiplication produces totals. Held records are retained without released amounts.
5. Export current reviewed JSON, complete CSV, plain-text Markdown or ready-only pricing CSV; copy Markdown. Any edit invalidates exports. Reimporting a full JSON audit restores originals for fresh AI review, not previously granted approvals.

## Real model / static runtime

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional embeddings.
- Transformers.js 4.3.2 / ONNX Runtime Web, single-thread WASM CPU. No WebGPU needed. Tested current desktop Chrome with GPU disabled. Requires module workers, WebAssembly SIMD, sufficient memory and initially internet. Other browsers and physical phones are untested.
- Approximately **50 MB initial download**: 23 MB model plus 27 MB WASM, plus JS/tokenizer. Progress, cancellation/retry and 180-second timeout are shown. No model request before explicit loading.
- Reuses immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Keep those older apps published. SHA-256 provenance and audits are provided.
- Four-text batches; at most 32 texts/eight chunks. Descriptions/context bounded to 200 characters. Although shared worker passes max_length 256, feature-extraction actually relies on tokenizer model_max_length 512; 256 is not an independently enforced cap. Unusual inputs may truncate. Model revision is not pinned.

## Privacy, download and cache scope

Source data stays in the tab and local worker. Network traffic is GET-only model/tokenizer/runtime downloads from the same origin and Hugging Face/CDN. No telemetry, key, credentials, provider integration, server-only calls or upload. Imported text is data, never HTML/code, tool authority or a request for credentials.

Cache API retains worker/runtime/model assets when permitted. Tested offline claim: **fresh-worker real inference in an already-open warmed page with browser networking blocked**. Offline navigation/reload/app-shell startup is not promised. Cache eviction/private mode/storage denial may require downloads again. Cancellation aborts worker fetch, terminates the worker and invalidates run identities. Late callbacks/import reads cannot replace current results. Errors, malformed vectors and unsupported runtime fail visibly, never produce deterministic fake AI.

## Input and exact pricing contract

Root `{title, books, requests}`.

Book `{id, description, versions}`; version `{id, from, until, cents}`. `from` is inclusive, `until` exclusive; explicit `null` means no end. Dates must be real YYYY-MM-DD days from 1900 through 2100. Calendar days only; not instants, time zones or intraday tariffs. Overlaps/gaps are allowed as input so they can be exposed, but never resolved arbitrarily.

Request `{id, context, date, quantity}`. Quantity is a whole integer 1–10,000; rate is integer 0–1,000,000 cents. Maximum product 10,000,000,000 cents is exact in JavaScript integers. Use one user-chosen currency and compatible per-unit quantities; verify unit compatibility manually. No discounts, taxes, FX, fractional quantities or legal/accounting validation.

2–8 books, 1–16 versions each, 1–24 requests. IDs unique within their list, ASCII letters/digits/_/-, ≤60 characters. Title/descriptions/context ≤200 characters. Notes ≤500. Source ≤120,000 characters; import audit envelope ≤1.5 MB. Unknown fields, missing values, malformed dates, invalid quantities/rates, duplicate IDs and excess limits fail. Originals remain editable and are preserved in every JSON audit.

## Output, baseline and meaningful checks

JSON is canonical lossless source/review/evidence export. Complete CSV contains every source price version and transaction, reviewed date/quantity plus originals, matches, total and baseline. Ready CSV contains only approved, uniquely priced rows. Blocked/held rows remain in the full audit and never enter released totals. Correct CSV quoting preserves commas, quotes and newlines. Formula-like text is apostrophe-prefixed, including multiline fields; genuine numeric cents stay signed numeric. Markdown is plain text, not sanitized publication HTML.

Baseline chooses the book version with greatest start day regardless of transaction date or validity end. Multiple newest versions make the baseline ambiguous. Reported differences are computed cents/transaction counts, not measured savings or model accuracy. The ready total excludes held/blocked transactions and is not presented as a complete invoice.

Two synthetic workflows matched **6/6** intended books (first-book baseline 2/6). A separate wording/negation probe matched **3/4**, misrouting the negated delivery request to storage. These tiny tests are not representative accuracy estimates. MiniLM semantic retrieval cannot ensure product identity or unit equivalence, and always returns a nearest candidate; review or hold is essential.

Print fixture: 30.00 historically priced versus 44.00 latest-only, one overlap and one gap blocked. Venue fixture: 41.00 ready total versus 43.00 latest-only; exclusive-end boundary picks the new studio rate. No performance/time-saving claim is made.

## Build and validation

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261125-21/`. Required individual predeploy/deploy scripts are retained; publish only via collection ROOT workflow, never per-app deploy.

See [VALIDATION.md](VALIDATION.md) and machine reports. Tests use actual production-bundle browser inference/downloads, independent Python datetime and CSV parsers, defensive fault injection only for failure paths, narrow viewport screenshots and public asset hashes. Untested: physical phones, other browser engines, cold offline startup, representative matching accuracy and real business/accounting outcomes.
