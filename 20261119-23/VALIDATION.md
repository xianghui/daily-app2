# Observed validation — Bearing Meadow

## Local production bundle

- React/Vite `npm run predeploy` passed. Browser automation uses actual headless desktop Chrome with GPU disabled, loading built assets at the deployment base path.
- Real q8 MiniLM inference: **8/8** expected station links across two materially different synthetic surveys. Both canonical sets and all notes change between fixtures. This is a tiny known-answer set, not estimated production accuracy. AI changes downstream station membership; station override also changes the summaries (tested).
- Garden bearings 350°/10° at 4 m/s: vector FROM 0°, speed 3.939231… m/s; arithmetic baseline 180°. Opposing rooftop 90°/270° at 3 m/s: undefined vector direction and effectively zero speed, scalar baseline 3 m/s. Shore 30 min at 6 m/s plus 10 min at 2 m/s: vector 5 m/s FROM 180°. Woodland north/east: √2 m/s FROM 45°.
- Independent core checks: all cardinal components, calm/undefined coherence, opposing cancellation, schema/count/bounds, hold preservation. Python independently reparsed downloaded CSV and recalculated vector summaries. Multiline quoted comma/formula notes and maximum 24-record export passed.
- Full maximum input (8 stations and 24 observations) ran 32 texts in eight real inference chunks. All original IDs, counts and durations reconcile. Maximum audit JSON reimport succeeded and required fresh AI/review.
- Review required before apply; editable station/numeric fields renew pending status. Holds block summaries, undo restores decisions; multiline review notes survive current JSON/CSV and clipboard Markdown. Exports disable after edits; original numeric values remain unchanged after review correction.
- Real online inference, terminate worker, disable ALL network, then fresh-worker inference passed in the already-open page. No offline reload/navigation promise. Cold model-download cancellation then real retry passed.
- Fault-injection-only defensive cases passed: model-host failure/recovery, unavailable WebAssembly, worker download failure, unsupported worker constructor, malformed vectors/envelope, timeout, worker error. No fabricated records/results on failures. Ordinary success tests never mock inference.
- Cancel/retry, edit during inference, delayed old result after completed newer run, and delayed file import after newer source selection passed. Old results cannot overwrite current input/results.
- Empty/malformed/oversized JSON, unsupported file, duplicate IDs, invalid stations/count/description/duration/bearing/speed rejected. Instruction-like irrelevant text stayed inert, but receives a nearest station like any unrelated input; human hold was necessary. No factual/identity accuracy guarantee.
- Browser network audit from production startup through real inference: GET/HEAD downloads only, no request bodies, no source strings in URLs, and no model-host request before explicit Load. Signed CDN query values are not persisted in reports. Built text assets credential-pattern scan supplements source inspection; no provider integration exists.
- Desktop 1440px and narrow 390/320px layout: no horizontal overflow; explicit form labels, visible focus and ≥44px buttons. Normal-viewport overview/review/results screenshots inspected. Native select text can abbreviate on narrow screens; full station descriptions remain in source evidence. Physical phones, screen readers, other browsers and offline navigation untested.

## Release verification

Root gallery script compilation, exact-entry and old-entry preservation checks, combined assembly, public runtime byte matching and public real inference are recorded in their JSON/log files after deployment. Publication is not established by a gh-pages push alone.

## Combined collection and legacy runtime

Root predeploy initially exceeded its conservative 1,000,000,000-byte guard by 214,063 bytes. Extended existing deploy-only byte-identical geometry WASM reuse to `20261028-15`, preserving its source build and compatibility JS URLs. Final assembled size: **999,672,798 bytes**. All **732** apps assembled with zero failures/skips. Legacy app default, PNG and binary STL imports produced three distinct preview signatures and independently checked STL downloads with zero browser errors; shared WASM requested, old duplicate absent. Gallery inline scripts compiled, new entry appeared once and all 731 preceding working-tree entries/categories survived. See combined-size, legacy-runtime and gallery reports. No physical printing performed.

## Public release — passed

Matching Pages commit `e5147cfec77faf8885af4fe112769200988b89cf` reached **built**, with successful workflow `44540678529`. The entire public browser workflow passed against https://xianghui.github.io/daily-app2/20261119-23/ : both real-inference fixtures, full 32-text maximum, review/edit/undo/holds, downloaded and independently reparsed artifacts, no content-upload traffic, warmed-page fresh-worker offline inference and desktop/narrow layouts. All **12** audited public app/gallery/shared-runtime/legacy assets were byte-identical to the assembled build. Public gallery preserved all **732** cards and earlier categories. Public legacy default/PNG/STL imports and valid STL downloads passed with zero browser errors. Public reports contain sanitized file paths, not signed CDN tokens. No digest sent.
