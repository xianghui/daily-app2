# Shareline Desk — observed validation

## Local production bundle

- `npm run predeploy` passed. React/Vite static base `/daily-app2/20261126-20/`; both required per-app lifecycle scripts and gh-pages dependency present.
- Real Chrome, headless, GPU disabled. No mocked successful inference. MiniLM ran on WASM CPU against both materially different synthetic capital histories: cash/cancellation/split in 2026 and leap-year chained bonuses/loss in 2024. **8/8 simple known-answer action labels matched**. This tiny fixture score is not a representative accuracy estimate.
- Negation probe “This was not a stock split; investors paid cash for new ordinary shares” selected `issue`, as intended. An unrelated coffee-machine request was also forced to `issue`, demonstrating no out-of-domain reliability. Every item defaults to pending review. An instruction-like note did not cause a credential request or gain authority.
- Fixture 1: weighted shares **22175.342466**, closing **24000**, EPS **5.636892** vs closing shortcut **5.208333**. Fixture 2: weighted shares **39683.060109**, closing **40000**, EPS **-1.612779** vs closing shortcut **-1.600000**. Exact fractions and original inputs retained in downloaded JSON.
- Independent Python `datetime` daily replay plus `Fraction` agreed with JavaScript interval arithmetic on **365 valid cases / 135,782 assertions and daily steps**. Covers 1900–2199, explicit 1900/2000/2199 boundaries, shuffled Jan 1/Dec 31 actions, leap years, signed profits, cash/repurchases and chained bonuses. Exact day coverage, denominator, closing count, EPS, contribution sum and comparison checked. Invalid date/numeric/type/review/vector data rejected; holds, duplicate dates, impossible buybacks and unsupported split ratios blocked.
- Full 24-action browser batch: 27 texts, seven actual inference chunks, all rows retained; audit reimport restores every original. No deterministic fallback.
- Browser review tests: mandatory approval; quantity/date/type/numerator/denominator edits invalidate exports; undo; held action blocks full timeline; multiline formula-like review text survives JSON and CSV; clipboard; current reviewed downloads. Python independently parsed **16 downloaded JSON artifacts and companion CSV/Markdown/interval CSV / 1,927 assertions**.
- Real fresh-worker inference succeeded offline after warming this already-open page with online inference. Network blocked; GPU disabled. This does NOT establish cold offline reload/navigation support.
- Defensive tests: real worker fetch abort, real model-host abort; no fabricated result; missing Worker/WASM, construction failure, worker error, malformed model vectors, accelerated timeout, stale callback after source edit, cancel during worker fetch. Additional actual model-download cancellation/retry and model-host abort/recovery passed. Delayed import cannot overwrite a newer example. Source profit edits trigger new AI and a changed applied EPS. Invalid reviewed timelines block interval exports, undo recovers.
- Production request capture: no model-host request before explicit loading; only GET downloads, no request bodies, no source content in URLs. External requests limited to Hugging Face/CDNs. Persisted audit strips signed query values. Built-asset credential-pattern scan found no hits; code has no provider integration. Shared worker/factory/WASM SHA-256 verified. Actual tokenizer ceiling inspected: 512, not an assumed forwarded 256 override.
- Desktop 1440 and narrow 390/320 widths: no horizontal overflow; all form labels present, keyboard export order works, buttons/inputs/selects ≥44 px. Normal viewport input/review/result screenshots saved; desktop hero and 320px review visually inspected. No page errors.

## Scope and untested areas

No representative semantic accuracy, financial-reporting compliance, legal effective-date verification, physical phone, other browser engine, low-memory performance or cold-offline navigation claim. No real customer information, documents or credentials used. No external postings/filings/actions. Default content remains on-device.

## Publication

Assembled/public deployment checks are recorded below after completion; a source or gh-pages branch push alone is not proof of a working app. Unrelated pre-existing drafts are excluded and preserved. No digest is sent by this builder.

## Combined-tree preflight

Root predeploy assembled **896 apps, zero failures/skips**, preserving all 895 earlier gallery entries and categories. Gallery scripts compile with Node `new Function`; exactly one new AI-utility entry, AI Utilities first, existing STL labels preserved and updated focus tagline. Assembled browser suite repeats both real model fixtures, full workflow/batch/offline/privacy/artifact checks; **16 actual downloaded JSON artifacts and companion formats / 1,927 independent assertions**. Gallery search, all earlier links and 1440/320 no-overflow checks passed. Runtime/worker/WASM and app file hashes are checked against the combined tree. A final 320px metric-card adjustment is included in the release build and rechecked before publication.

## Verified public release

Pages built commit `f7592b0f9c9dca541a2d683966b2a98189600638`, successful [workflow](https://github.com/xianghui/daily-app2/actions/runs/45808311460). Public root/app/runtime/factory/WASM hashes: **9 exact file matches**. The full public browser suite passed both real-AI fixtures (8/8 simple labels), maximum batch, reviewed edits/undo/holds, input/import guards, cancellation/retry, privacy and fresh-worker warmed-page offline inference. Independent parsing of **16 public-downloaded JSON artifacts and companion CSV/Markdown/interval files passed 1,927 assertions**. All **896** gallery cards and earlier links remain intact; search, categories and phone/desktop checks passed. Published assets total **819,112,334 bytes**, below the unchanged deployment guard. Final 320px metric values stay on one line. No digest sent.
