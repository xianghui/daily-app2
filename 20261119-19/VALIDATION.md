# Observed validation — Sort Canopy / 20261119-19

## Local and combined production bundle

- `npm run predeploy`: passed. Real React + Vite build; required per-app deployment scripts and `/daily-app2/20261119-19/` base present.
- `node core-test.mjs`: **240 independent exhaustive labeled-assignment oracle cases**, 2–6 cards and every feasible requested group count, matched restricted-growth exact partition scores. Both fixture outputs, exactly-k nonempty groups, card conservation, holds, completeness and malformed-vector rejection passed.
- **Actual default MiniLM inference in headless installed Chrome on macOS CPU**, no mock success path: Shop fixture 8/8 intended identities; Library fixture 8/8. Every fixture used two complete participants and four interleaved canonical cards. Both exact drafts matched **12/12 participant–pair judgments**, versus source-order **4/12**, a computed gain of 8. These tiny fixtures establish execution and simple known-answer behavior, not general accuracy or usability. Changing a reviewed pile produced 9/12 best agreement, showing actual session decisions drive the output.
- Maximum case: **eight cards, 24 observations / 32 real model texts**, four-text chunks, all intended repeated descriptions matched. 966 three-group partitions checked; all 24 originals and all eight canonical cards survived. Maximum audit reimport renewed AI/pending reviews.
- Human review: pending blocks, approved applies, hold blocks, duplicate/missing session cards block, invalid IDs reject. Card/participant/pile edits, multiline follow-up, undo, reviewed snapshot invalidation and source/audit import passed. Invalid formats, empty/null/bad/oversized JSON, duplicate IDs, absent cards, wrong group count, too-long descriptions and >2 MB files failed closed.
- Real online run followed by a **terminated/fresh worker with context offline** succeeded. Separate test removed WebGPU and real CPU inference still succeeded. No offline navigation/reload promise. Physical phone inference, non-Chrome engines and cache-eviction recovery were not hardware-tested.
- Network capture from production startup through inference: only GET/HEAD downloads, no bodies, no synthetic source text in request URLs. No model-host download before explicit Load AI. The committed network report contains origins/paths only, no signed CDN queries. Built text credential-pattern scan passed; this supplements code/dataflow review, not a claim that a pattern scan proves all possible secrecy.
- Defensive fault injection only: model-host abort then **real retry**, missing WebAssembly, worker download failure, unavailable module-worker constructor, worker error, malformed envelope/vector and accelerated 180-second timeout all produced errors with no fake output. Cold real-model download cancellation followed by real retry passed.
- Race checks: changed input invalidates a run; terminated old worker cannot overwrite a completed newer run; delayed File.text cannot overwrite new input; delayed worker-source download cannot restore old suggestions. Successful AI checks always use the real model; synthetic workers exist only in failure/race tests.
- Downloaded audit JSON, CSV, Markdown and navigation JSON were parsed independently with Python json/csv. IDs/original notes/edited assignments/piles preserved; all canonical navigation cards exactly once. Quoted commas, line breaks and formula-like multiline review notes retained with safe CSV quoting/prefixing. Clipboard contained current reviewed text. Blocked navigation export disabled.
- Desktop 1440px and narrow 390/320px layouts: no horizontal overflow, form labels, visible focus and ≥44px button targets checked. Actual viewport screenshots of hero, review and results inspected. Native selects can truncate long selected descriptions visually; canonical deck/evidence expose the complete text. Physical touch devices not tested.

## Combined publishing checks

- Root inline gallery scripts compiled with Node `new Function`, nonempty script count enforced. New entry exactly once under AI Utilities; **727 prior entries preserved byte-for-byte**, total 728. Earlier category names retained, AI Utilities first; search and narrow layouts passed in real browser.
- Initial root assembly exceeded conservative 1 GB. A candidate dedupe path was not gallery-published and therefore had no effect; replaced with published `20261028-19`. Final assembly **999,700,836 bytes**, all 728 apps present, root HTML byte-identical. Root guard/assembly rerun passed. No older source `dist/` changed.
- Deploy-only byte-identical older geometry WASM reuse now includes `20261028-19` → `20261028-24`, preserving legacy JS paths and query-versioning modified references. Actual older app default generation, PNG import, binary STL import and binary STL export passed, with changed geometry fingerprints, finite floats and valid triangle-count/length. Shared geometry URL was requested; old duplicate URL was not. Four affected legacy assets served byte-identically.
- Nine assembled root/new-app/shared-AI runtime assets served byte-identically. Full real-AI workflow/privacy/offline/artifact suite rerun against the **assembled** deployment server passed. Model/tokenizer/runtime protocol inspected; worker/factory/WASM hashes recorded in asset audits.

## Limitations exposed

Irrelevant instruction-like prose still receives a nearest card suggestion; human hold blocks synthesis. Cosine is not confidence or identity proof. The optimizer fits observed judgments, not an independently tested navigation outcome; ties and noisy small samples can create alternative drafts. No group naming model or website publication, participant outreach or remote actions. Model default upstream revision is unpinned. No invented accuracy, time savings or population-confidence claims.

See `browser-validation.json`, `assembled-browser-validation.json`, `defensive-validation.json`, `cold-cancel-validation.json`, race/extra checks, `core-validation.json`, `artifact-validation.json`, `assembly-validation.json`, asset manifests and synthetic `export-*` files. The first browser test failed because the test incorrectly assumed two undo presses would skip several approval edits; the harness was corrected to test immediate undo and explicitly restore the card. No AI fallback or fixture outputs were substituted.

Public Pages status and post-publication checks are recorded below when complete.

## Public release — verified

Root `npm run deploy` published combined gh-pages commit **28917e48b14848e006a0600f88136fca0f8914ce**. Matching Pages build reached **built**, workflow **44503141293** completed successfully. No duplicate build trigger was needed.

Public URL: https://xianghui.github.io/daily-app2/20261119-19/

- **Nine** public gallery/app/shared-AI assets and **four** affected legacy/shared geometry assets matched assembled bytes/SHA-256.
- Complete public real-AI workflow suite passed: both fixtures again 16/16 intended card identities, maximum batch, reviewed edits/holds/undo, valid artifacts, malformed/empty input handling, cancellation/source invalidation, no-content-upload network capture, fresh-worker offline inference and responsive screenshots.
- Public gallery rendered all **728** cards with AI Utilities first, preserved old categories and working search.
- Affected older app's actual model generation, PNG import, binary-STL import and valid/changed binary-STL downloads passed against the public shared geometry asset.
- Independent artifact parser rerun passed after the public browser downloads.

Source staging deliberately excludes unrelated pre-existing README/gallery edits and older untracked work; all remain present in the working tree. No digest or external message was sent by this builder.
