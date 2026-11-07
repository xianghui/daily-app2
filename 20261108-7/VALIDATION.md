# Observed validation — Packet Proof

## Local production bundle (2026-11-08)

- React + Vite predeploy passed, with the actual `/daily-app2/20261108-7/` base. Runtime factory/worker bundled locally; byte-identical WASM shared with preserved `20261107-2`.
- Real q8 MiniLM CPU inference, no mocked success: admissions **5/5** types and vendor onboarding **4/4** types matched simple known answers. The all-first-type baseline matched 3/5 and 1/4. Deterministic audits found **two missing slots in each fixture**, plus **one duplicate identity slot** in admissions. UI differences from baseline were correctly recomputed. These nine easy examples are not an accuracy estimate.
- Challenge limitation: the description explicitly saying insurance was **not valid and expired** ranked `valid` over `expired` (cosines 0.777 vs 0.744). This failed challenge demonstrates why the app never certifies authenticity, validity or expiry and requires explicit human acceptance or hold.
- Fourteen browser-test groups passed: two real fixtures; hold/type edit/undo/export invalidation and copied artifact; fully offline fresh-worker real inference; full 32-document + eight-type chunks and input round-trip; empty/malformed/oversized/duplicate/invalid schema; cancel/stale-input/retry; unsupported file; 320/390px edit/download/no overflow and keyboard focus; worker network failure/retry; late rejected fetch after newer successful run; malformed vectors; unsupported Worker/runtime error/accelerated timeout; multiline formula escaping and request privacy.
- Separate real-model-host failure test blocked Hugging Face in an empty context, observed an actionable error with no fabricated results, then unblocked and completed real inference. Fault injection is only used for defensive malformed-output/runtime/timeout checks, not successful AI claims.
- Offline scope tested: after successful online inference, disabled all browser networking and instantiated a fresh worker for new inference/export. No claim or test of offline reload/navigation, cache permanence or cache behavior on every browser.
- Independent Python parsers reopened nine downloaded JSON archives, complete CSVs and the actual reviewed Markdown checklist. Every source ID/text/packet/name survived; each missing/present/duplicate slot and metric was independently recomputed. CSV quotes, commas, newlines and formula prefixes survived. Copied checklist equaled downloaded checklist.
- Network capture from startup through actual inference showed public GET downloads without bodies, no model-host access before explicit loading, no content upload and no uncaught page errors. Built text assets scanned for common credential patterns; none found (not an exhaustive secret detector). No external inference/provider integration exists.
- Desktop and narrow-phone screenshots visually inspected. Touch-sized buttons, labeled controls, visible keyboard focus and no horizontal overflow. Physical phones and Safari/Firefox inference remain untested.
- Gallery inline scripts compiled using `new Function`, entry appears exactly once as AI Utility, all prior entry lines unchanged. Browser gallery rendered **523 cards**, AI Utilities first, historical categories/search intact. Root predeploy assembled **523 app entrypoints**, zero failures/skips.

## Publication

Root `npm run predeploy` and root `npm run deploy` completed, preserving all 523 app entrypoints with zero failures/skips. The latest Pages build reached `built` for `4629cd17ba379e68855c6b919fb597b6a3f3fec4`, matching the published gh-pages head; its workflow completed successfully.

All eight public app/runtime files (including worker, WASM factory and shared WASM binary) matched local SHA-256 hashes. Public root gallery was byte-identical to source and rendered 523 cards with the new entry exactly once and older categories/search intact.

**The entire 14-group browser suite passed again on the public URL**, including both actual inference fixtures, fully offline fresh-worker inference, 32+8 batching, review/undo, actual edited downloads/copy, cancellation/stale-run regressions, failure paths and narrow-phone actions. Independent Python parsers validated all nine public JSON artifacts plus CSV escaping and the reviewed Markdown checklist. See `public-evidence/browser-validation.json`, `public-evidence/artifact-validation.json`, `deployment-validation.json`, `public-gallery-validation.json`, `pages-build.json` and `pages-workflow.json`. No individual-app deploy was used.

## Known limits

Manifest descriptions only, no PDF/OCR/image reading, authenticity/legal/expiry checks, remote file actions or empty-packet inventory. All types required once per represented packet; optional or conditional requirements are unsupported. AI can suggest a wrong type or favor a best-of-bad candidate. Duplicate slot counts are not byte-level duplicate-file detection. Holds do not count as present. English short descriptions only; token truncation may lose meaning. Human review and checking original files remain essential.
