# Observed validation — 2026-11-08

## Real AI and task quality

Production Vite bundle served with its real deployment base; actual desktop Chrome loaded quantized MiniLM on WASM CPU. No mocked success responses or deterministic inference fallback.

- Software/medicine: `software, software, medicine, medicine` — 4/4 expected senses.
- Computers/law: `computer, computer, legal, legal` — 4/4 expected senses.
- First-listed-sense baseline: 4/8 expected senses versus AI's 8/8 on these small, deliberately clear fixtures. UI reports calculated difference count, not accuracy or estimated time saved. No universal improvement claim.
- **Negation challenge failed:** “The API is not an ingredient in a drug; it is software for developers” suggested medicine, not software. Nearby domain words can overwhelm negation. Bare “API is ready” also produces a ranking without enough evidence to establish meaning. UI and README explicitly document the limitation. Every occurrence remains pending until human acceptance or hold.
- All 48 occurrences survived chunked inference, review/export/reimport; expected 24 legal and 24 computer senses observed. Separate 24-sense batch with 22 unused glossary distractors retained all four expected meanings. Worker batches at most four texts, context cap 256 tokens. Count/384 dimensions/finite values/normalization validation passed.

## Workflow and defensive checks

- Pending review blocks apply; sense/expansion edits restore pending status. Holds keep exact original term. Undo restores previous review. Notes and all edits invalidate exported snapshots. TXT/CSV/JSON and clipboard reflect current applied reviews.
- Empty/malformed/oversized input, invalid schemas, duplicate IDs, no matching terms, 49 occurrences, and unsupported file type produce actionable errors.
- Cancellation and input changes during loading/run left no stale records; explicit retry completed actual inference. A deliberately delayed file read was ignored after a newer example selection.
- Worker-source network abort/retry passed. A separate fresh context blocked Hugging Face downloads, produced “Failed to fetch” with no results, and completed real inference after unblocking.
- Defensive-only fault injection tested malformed embeddings, unsupported WASM/worker construction, worker error and timeout. Every failure yielded an error, not invented suggestions. Timeout shortened by test interception; UI production deadline remains 180 seconds.
- All captured requests were GET file downloads with no bodies. No model-host request before explicit AI invocation. Source has no remote content/provider integration. Model query strings omitted from saved reports; checked in memory. Common credential-pattern scan of built text assets had no matches. Only synthetic fixtures used.

## Offline, assets and exports

- After online inference, all browser network disabled, previous worker terminated, then a fresh blob worker completed another actual run using cached worker/factory/WASM/model/tokenizer. **Only open-tab offline reruns are claimed**; offline app reopening not tested/promised.
- WASM is byte-identical to the installed runtime and reuses the immutable shared `20261107-2` asset. Full asset SHA-256 and byte counts in `asset-audit.json`.
- Node Papa Parse and independent Python json/csv parsers reopened browser downloads. Reviewed expansion/notes/decisions/replacements match JSON, TXT equals the applied document, every original source offset identifies the term. All 48 records and original document/senses survive JSON roundtrip.
- Core tests cover quoted commas/newlines, formula-prefix safety, case/word boundaries, held-source conservation, malformed vector guards and unresolved-review blocking. An initially mistyped expected test offset (30 instead of 32) was corrected after checking the actual string; production span detection was correct.

## UI, scope and gallery

- Desktop, 320px and 390px screenshots; narrow viewport has no horizontal document overflow. Review/edit/apply/download actions pass at phone widths. Explicit form labels, keyboard focus and 44px controls checked. Physical phones, other browser engines and full screen-reader audits untested.
- Gallery inline scripts compile with `new Function`; missing scripts/APPS fail validation. 520 entries with the new app exactly once, `ai-utility`, newest first; all previous 519 entries identical and earlier categories preserved.
- Full browser evidence: `browser-validation.json`, `extra-validation.json`, `bounds-validation.json`, synthetic `export-*` downloads and screenshots. Public verification will be recorded after combined-site deployment; a branch push alone is not proof.

## Public verification and publication

Root `npm run predeploy` and `npm run deploy` both assembled all 520 apps with zero failed/skipped builds. Pages workflow [42404702093](https://github.com/xianghui/daily-app2/actions/runs/42404702093) completed successfully for gh-pages head `85e3b3d0967db6e1003844dd8b66ba349c01d22e`; Pages API reported `built` for that same head. Public downloads of every app asset, worker, factory and shared WASM matched local SHA-256 hashes. See `deployment-validation.json`.

The full 13-check browser suite passed again at https://xianghui.github.io/daily-app2/20261108-4/ : both actual model fixtures, 48-record batching, reviewed downloads/copy, JSON roundtrip, fully offline fresh-worker inference, review/hold/undo, mobile widths and defensive checks. Independent Python parsers reopened public downloaded TXT/CSV/JSON and verified reviewed edits, four records and 48-record conservation. Evidence is in `public-evidence/`. Public gallery browser checks found all 520 cards, the new entry once, AI Utilities first, earlier categories and working search. Known negation limitations remain unchanged.
