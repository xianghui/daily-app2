# Plural Loom

A local-first plural-message QA worksheet for localization coordinators. Mixed market handoffs can carry a two-branch English assumption into catalogs with more (or fewer) cardinal categories. **Real browser MiniLM inference** matches informal audience notes to supplied locale profiles; a reviewer confirms each locale and message before deterministic branch/placeholder checks and catalog export.

This is not translation generation or translation-memory reuse (unlike Locale Relay/Notice Atelier). It checks branch completeness and runtime selection, not linguistic quality. All shipped examples are synthetic. No credentials, backend or paid provider.

## Workflow and formats

1. Choose **Storefront handoff** or **Catalog QA batch**, paste source JSON, or import `.json` ≤1 MB. Profiles: `plans:[{id,description,locale}]`; messages: `records:[{id,context,raw}]`. `raw` is a JSON string containing `{key,forms,counts}`. Allowed locales: en, pl, ar, ja; edit profiles and constraints directly in source.
2. Explicitly click **Load AI & reconcile**. First run downloads approximately **23 MB model + 27 MB CPU runtime**, plus code; internet required. Progress, cancel and a 180-second timeout are exposed. No model download before explicit initiation.
3. Review original source, ranked cosine similarities and proposed market. Edit profile, message JSON or multiline reviewer notes; approve or hold every message. Profile/message edits reset approval. Any edit invalidates exports. Undo restores the last 100 review states without altering originals.
4. **Apply reviewed scenario** validates cardinal category completeness, exact `{count}` placeholders and duplicate locale/key collisions; displays branch witnesses and count previews. Every conflicting ready record is blocked rather than overwritten. Held/malformed/blocked rows remain in complete audits.
5. Download complete JSON/CSV/Markdown, copy Markdown, or download **Catalog JSON** (approved valid messages only). Audit reimport restores originals only and requires fresh inference/review. Artifacts reflect the currently applied reviews, never stale defaults.

Message example:

```json
{"key":"cart.items","forms":{"one":"{count} item","other":"{count} items"},"counts":[0,1,2,5,0.5]}
```

Limits: 2–5 profiles (unique IDs ≤60, descriptions ≤200); 1–24 messages (unique IDs ≤80, market context ≤200, raw message JSON ≤1,200 characters); source JSON ≤50,000 characters; notes ≤2,000. Forms are nonblank ≤200 characters per category. Keys are 1–80 ASCII word/dot/dash characters, beginning with a word character; reserved prototype names rejected. Preview counts: 1–16 finite numeric values, 0–1,000,000 with ≤3 decimals. Audit import separately permits 1 MB envelopes; extracted originals must satisfy source bounds.

## What the AI does

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2** (Apache-2.0); ONNX Runtime Web (MIT). Single-thread WASM CPU feature extraction, mean pooling, normalized 384-dimensional vectors. The worker embeds **profile descriptions and audience context**, not message forms. Cosine similarity proposes the nearest market profile; input is not interpreted as tool authority. No generative response or hard-coded answers. Model output count, dimension, finiteness and near-unit norms are validated before use. Four-text chunks. The worker supplies max_length 256, but this pipeline's actual tokenizer limit is **512 tokens**, inspected in the shared runtime; embedding inputs are each bounded to 200 characters.

Weights/tokenizer use upstream `main`, not a pinned revision; later changes may alter results. Semantic similarity is **not confidence, locale verification, translation quality or general accuracy**. All notes get a nearest neighbor, including irrelevant, conflicting, negated or instruction-like text. Mandatory review/hold is essential. The tiny known-answer fixtures matched 8/8 market profiles; a single negation probe matched the intended Tokyo market, not proof of reliable negation handling.

AI materially affects the workflow: four runs with identical English-form message JSON but different market context select four different profiles. Only the English profile passes; Polish and Arabic lack branches and Japanese has an unexpected `one` branch. Required categories and previews change with real inferred locale. Deterministic logic never impersonates AI on errors.

## Deterministic contract and useful comparison

Uses browser `Intl.PluralRules(locale,{type:'cardinal',maximumFractionDigits:3})` and `Intl.NumberFormat(locale,{maximumFractionDigits:3})`. All categories from `resolvedOptions().pluralCategories` are required, including `other` fallback. Unexpected categories block release. Every template must contain exact `{count}` and no remaining braces/other placeholders. Repeated `{count}` is allowed and all occurrences are replaced. Source content is rendered as text (React escaping), not executed or interpreted as markup.

Witnesses search integers 0–200, selected fractions and 1,000,000; no witness is shown as fallback, not an assertion that a category is unreachable. Every supplied count preview uses actual browser rules. The simple baseline uses `one` only for numeric 1 and `other` elsewhere. The computed mismatch count measures **branch selections on this batch's supplied previews**, not translation mistakes, time saved or AI accuracy. Structurally parsed approved messages contribute, even if missing branches; held/unparseable messages do not. Missing-form and blocked counts provide an actionable retranslation checklist. No invented improvement percentages.

No ICU nested messages, exact-number overrides, offsets, ordinal plurals, gender rules, locale guessing from text language, translation validation or zero-value custom policies. JavaScript numbers do not preserve visible operands such as 1.00; count values use the documented numeric semantics, not lexical-decimal CLDR operands. Duplicate JSON members follow ordinary JSON.parse last-member semantics; originals remain in the audit. Use unique form members. Downstream localization engines may differ and are not certified by this preview.

## Catalog handoff artifact

```json
{"format":"plural-loom-catalog-v1","selection":{"type":"cardinal","maximumFractionDigits":3},"catalogs":{"en":{"cart.items":{"one":"{count} item","other":"{count} items"}}}}
```

This is a documented interchange worksheet, **not a drop-in ICU or i18next resource**. Keys are literal, not nested dotted paths. To consume: choose `catalogs[locale][literalKey]`, call Intl.PluralRules with the exported selection options, select that category, and replace `{count}` with Intl.NumberFormat (same maximumFractionDigits) formatted count. Release includes exactly ready messages; complete JSON includes all originals, reviews, checks and metrics. CSV includes all messages and multiline notes with proper quote escaping; formula-leading text (`= + - @ TAB CR`) receives an apostrophe. JSON is lossless. Markdown preserves structured source/review/check objects with JSON escapes. Independent Python JSON/CSV readers reopen real browser downloads; catalog forms and every source/review row are compared, along with independently coded known cardinal rules. Exports can contain user content: store them appropriately.

## Privacy, runtime and offline scope

Content and reviews stay in browser memory. No server inference, optional remote provider, analytics, localStorage, API keys or agent credentials. Only asset GET downloads to this Pages site and Hugging Face/CDN were observed, with no request bodies or user context in URLs. Network reports retain host/path/query **names only**, never signed CDN values. Downloaded files are explicit local artifacts; app itself performs no publishing or system actions.

Current desktop Chrome with module workers, WebAssembly SIMD, full Intl plural data and several hundred MB free RAM is tested. **No WebGPU required**; this uses genuine CPU inference, not a fake fallback. Device/runtime, worker construction/error, malformed vectors, network failure and timeout produce actionable errors and no results. Run IDs plus worker termination protect input edits, cancellation, delayed worker fetches/file reads and late successful replies. Retry is explicit.

Immutable same-origin production assets (preserve their originating app builds):

- `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`
- `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Hashes recorded in `runtime-provenance.json`. Worker source uses Cache API `plural-loom-worker-v1`; CPU factory/binary use shared `circuit-cove-runtime-v1`; Transformers.js manages model caching. Cache eviction/private storage can require redownloading. **Tested offline scope: a fresh worker in an already-open, online-warmed page with all network disabled.** Cold offline app navigation/reload is not promised. Physical phones, other browsers, low-memory performance and downstream catalog integrations remain untested.

## Build and verification

React + Vite; base `/daily-app2/20261124-5/`. `npm install`, `npm run predeploy`. Required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. **Publish only through root combined-site workflow**, not this app's deploy script.

Local production bundle: `python3 serve.py --source --port 7530`, then `node browser-test.cjs`, `node core-test.mjs`, `python3 artifact-test.py`, `node defensive-test.cjs`, `node async-race-test.cjs`, `node stale-success-test.cjs`. Tests use an existing environment Playwright install, not a shipped dependency. After root assembly: `python3 serve.py --port 7531`; set APP_URL to its app URL and PREFIX=assembled- for browser checks. For public validation set APP_URL=https://xianghui.github.io/daily-app2/20261124-5/ and PREFIX=public-. See `VALIDATION.md` and machine reports for observed outcomes and limits.
