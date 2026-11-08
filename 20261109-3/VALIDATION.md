# Observed validation — Invoice Moor

2026-11-09, production Vite bundle served at its real `/daily-app2/20261109-3/` base. Desktop installed Chrome via Playwright; inference is genuine local MiniLM q8 WASM, not mocked. Defensive failure injection below is explicitly separate from successful AI checks.

## Real AI and quality
- Office delivery: all four proposals matched expected receipt ids (`O-paper`, `O-paper`, `O-chair`, `O-cable`). Exact-description baseline linked 0; reviewed AI proposals linked 4. USD 643.50 preserved. Two split paper lines jointly billed 11 reams against 10 received, flagging both; chair unit-price difference of 500 cents yielded 2000-cent line variance. Three exception rows.
- Cafe supplies: all four proposals matched expected receipt ids (`O-coffee`, `O-oat`, `O-cup`, `O-coffee`). Baseline 0, reviewed links 4. EUR 290.00 preserved. Two coffee lines billed 13 kg against 12 received, flagging both. Two exception rows.
- These eight trivial known-answer links are not production accuracy evidence. Negated “Do not bill printer paper; it was not delivered” still proposed paper. An unrelated weather forecast still received a compatible nearest item. A pallet-unit paper line had no compatible target and remained unmatched. Documented limitations; approval is mandatory.
- Full 12-order + 40-invoice batch (52 texts; four-text inference chunks) retained every line and order, USD 6435.00, no lost cents. Original inputs survived audit JSON reimport and a second real inference.

## Review and actual exported artifacts
Verified pending review blocks apply, changed targets reset approval, undo restores target, holds remove receipt consumption and expose unresolved cents, incompatible approved units block apply, every review edit disables old exports. Cafe held-first-line output correctly showed EUR 180 unresolved, 3 links and one held exception; holding the first coffee line removed aggregate overbilling.

Browser downloaded actual JSON/CSV/Markdown. Independent Python csv/json parsers checked every id, source description, current reviewed target/status/note and integer-cent arithmetic. A quote/comma/multiline formula-like edited note survived with safe apostrophe only in CSV text. Clipboard content exactly matched downloaded Markdown. An additional real numeric negative price-variance CSV roundtrip retained -300 as a number rather than formula-escaping it. All eight audit exports conserved linked + unresolved = original invoice total. Markdown contained every line; JSON retained all receipts and originals. See artifact-validation.json.

## Runtime, privacy and defensive handling
Actual production worker/runtime loaded from deployment paths. No model request before explicit loading; captured requests were GET with no bodies. Default content is only passed to the local worker. Asset audit confirmed shared WASM byte equality and scanned built scripts for common secret patterns; inspected source has no provider integration or credentials. This is not an exhaustive security audit.

Fresh-worker inference succeeded with the entire browser context offline after cached online runs. Only an already-open page is claimed; offline reload/navigation not supported. Fresh-browser model-host abort produced “Failed to fetch”, no suggestions; unblocking network and retrying executed real inference successfully.

Empty/invalid JSON, missing arrays, invalid currency, negative/fractional/out-of-range money, over-limit arrays/description and unsupported CSV import were rejected. Core schema tests additionally cover malformed/nonfinite/wrong-count vectors and altered or missing original rows. Network failure, cancellation/retry, input change during running, stale cancelled callbacks, malformed vector message, unavailable-WASM error and accelerated 180-second timeout were exercised. Worker fault injection is used only for these failures; successful tests always use real inference. No fake fallback. No uncaught page errors.

Desktop and 390/320px layouts had no horizontal overflow; screenshot inspection confirmed readable stacked cards and working input/review/export controls. Labels, input focus and phone-width actions checked. Phone rendering uses desktop emulation, not a physical phone; Safari/Firefox, physical low-memory devices, screen readers and exhaustive keyboard audit are untested.

## Publishing
Local checks passed before adding the gallery. Root gallery/deploy and public inference/asset checks are recorded separately in gallery-source-validation.json, local-gallery-validation.json, combined-build-validation.json, deployment-validation.json, public-assets-validation.json and public-evidence/. Publication is only complete when those public checks pass.

### Public result
Matching gh-pages commit `b1a99d2a23404f9ab1f4542900673860116c175e` reached Pages `built`; workflow 42508308916 completed successfully. The initial pre-completion asset request returned 404; after the matching deployment completed, all production files and shared WASM returned successfully and matched local SHA-256. No rebuild trigger or duplicate deployment was needed.

The full browser suite passed again at https://xianghui.github.io/daily-app2/20261109-3/ using real downloaded MiniLM inference for both fixtures, max batch, cached fresh-worker offline inference, current review exports, clipboard, cancel/retry and defensive failures. Public downloaded artifacts were independently parsed again from `public-evidence/`; invoice totals and originals survived. Live gallery rendered exactly one new card, all 541 older cards and all previous categories; public gallery bytes matched source. Screen-width checks passed at 320/390px. Only desktop Chrome inference was validated; no physical-device or universal semantic correctness claim.
