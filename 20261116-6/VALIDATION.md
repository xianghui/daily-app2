# Observed validation

- Real Chrome CPU production-bundle inference: Storefront events 4/4 canonical IDs; Workshop signals 3/3. Observed weighted payloads 140 and 120 bits vs 200-bit fixed-width baselines, with identical record counts and exact sample decoding. Tiny synthetic checks are not a general accuracy estimate.
- Independent exhaustive pair-merge oracle: 140 varied frequency distributions, 2–8 symbols; Huffman weighted length matched the optimum. Each case decoded a 200-ID stream. Invalid/truncated bitstreams rejected. App maximum supports 8 symbols.
- 8-event/24-tally/32-text batch: all mappings matched known definitions; every source survived JSON/CSV and maximum audit reimport. Duplicate-event tallies blocked the result as designed. All-held and unrelated instruction-like data remained reviewable/blocked.
- Browser-downloaded JSON/CSV/Markdown, clipboard, multiline quote/comma/formula-like notes, edited counts, hold, undo, duplicate/missing detection and original preservation checked. Independent Python CSV/JSON parser verified all rows and exact code decoding.
- Already-open warmed production page: all network disabled, old worker terminated, fresh worker performed real inference. Offline app startup/reload is not claimed.
- Empty, invalid, oversized, duplicate, bad count, unknown sample ID and unsupported import inputs rejected. Cancellation/retry and source-change invalidation passed. Worker/network abort, unavailable WASM, constructor failure, malformed vector/message, worker error and timeout fault injections produced explicit errors and no fake results; network recovery retried real inference.
- Delayed import, worker download and late older result tested separately to prevent overwriting newer input/results.
- Network capture from startup: no model request before explicit processing; requests were GETs without bodies; no fixture text in full URLs. Persisted reports remove signed query values. Built text credential-pattern scan and runtime dependency SHA-256 audit passed; not an exhaustive security proof.
- Desktop 1440px and narrow 390/320px layouts, labels, touch button heights, keyboard focus, input/review/results screenshots checked. No horizontal overflow or page errors. Screenshots visually inspected. Physical devices and non-Chrome browsers not tested.

Runtime faults use test-only injected workers. Successful quality/offline/max-batch checks always execute the actual default model. No hardcoded fixture response is shipped. Similarity always proposes a nearest event, so unrelated or negated phrases may be wrong; mandatory human review is essential.

Combined/public checks and deployment state are recorded separately after publishing; see publication-status.json and public validation reports when present.

Combined-site assembly: all 703 entries render, all 702 prior entries/categories preserved. Inline gallery script compiles; new AI Utility entry appears exactly once. Root predeploy built/copied 703 apps with zero failures/skips; immutable dependency hashes matched; deployed collection size 999,840,263 bytes. Full assembled production workflow suite passed.

Public verification: matching Pages commit `f40fd5c80e93080c6804cb674b19a6e7e7ce638d` reached built. Every app asset and shared worker/factory/WASM byte-matched the local production bundle; public gallery byte-matched source. The full real-AI browser suite, warmed-page offline fresh-worker inference, reviewed artifacts and all 703 gallery cards passed at the public URL. No digest sent.
