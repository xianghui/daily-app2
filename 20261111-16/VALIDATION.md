# Observed validation — Fiber Balance / 20261111-16

## Local production build

- `npm run predeploy` passed (React + Vite, real deployment base); root assembly passed with no failed/skipped apps. Shared WASM/factory paths verified.
- Real current desktop Chrome, Playwright, production bundle (not Vite dev server). No mocked AI for success checks.
- Cotton fixture: intended recovered/virgin/recovered links **3/3**. Exact 10 kg at 60% recycled, 6 kg recovered + 4 kg virgin; cost 2,800 cents. Cheapest-first baseline 1,000 cents at 0% recycled, therefore infeasible.
- Paper fixture: intended virgin/recovered/recovered links **3/3**. Exact 8 kg at 50% recycled, 4 kg virgin + 4 kg recovered; cost 2,200 cents. Baseline 1,600 cents at 0%, infeasible.
- Tiny known-answer fixture outcomes are not universal accuracy. First-grade-only labels would match 2/3 in each fixture. An unrelated instruction-like lot still received a nearest grade, demonstrating why holds and mandatory review are needed. A simple negated example selected virgin correctly; this is not evidence of reliable negation handling.
- Exact optimizer matched **250 independent exhaustive enumeration cases**, including infeasible targets. Full-limit optimizer benchmark is recorded in `core-validation.json`; it is a test observation, not promised user performance.
- 6-grade/12-lot max batch exercised real four-text embedding chunks. No lost lots; stock/cost/mass/recycled constraints checked on exports.

## Review and defensive checks

- Mandatory approval, grade edits and percentage reset, stock/price edits, reviewer notes, undo, holds, all-held infeasibility, zero recycled target and export invalidation tested.
- Empty/malformed/oversized JSON, bad/duplicate schema values, unsupported file types, file size, out-of-range/fractional/blank numeric review/settings fields rejected.
- Cancel/retry, source changes during inference, delayed worker download/cancel and delayed file read guards tested. Old work did not overwrite the newer source. Retry used real inference.
- Fault-injected model network failure, failed worker download, unsupported worker, malformed vector output, timeout and worker error produced actionable errors with no fake results. Network recovery/retry used the real model. An actual-worker WebAssembly-unavailable check passed. Fault injection was only used for defensive checks.
- Offline test: after online loading, all network disabled, fresh worker successfully performed real inference in the already-open page. **Not tested/claimed:** offline navigation/reload or cache persistence after eviction.

## Artifacts, privacy and UI

- Actual browser downloads: JSON/CSV/Markdown. Clipboard equals downloaded current reviewed Markdown. Reimport preserves originals and resets approvals; fresh real inference regenerated matching allocations.
- Independent Python CSV parser verified every row, source, reviewed grade/stock/price/decision, allocated kg and quoted/multiline formula-like reviewer note against JSON. Max-batch CSV has all 12 rows. JSON is lossless; CSV formula escaping is intentionally a presentation transformation.
- Browser traffic from startup to real inference contained only GET requests without bodies; no model-host requests before explicit loading. Observed external hosts only Hugging Face/CDN. No stock text in download URLs. Source has no remote inference/telemetry integrations. Built credential-pattern scan had zero hits; a pattern scan alone is not exhaustive security proof.
- Screenshots inspected. 1440/390/320 CSS-pixel layouts: no horizontal overflow, every form control has a label, source focus works and actual downloads work. Controls minimum 44px. Physical mobile devices, other browser engines and screen-reader usability are unverified.
- Gallery scripts compiled with Node `new Function`; complete APPS array audited for one correct new entry and preservation of all previous entries/order. AI Utilities stays ahead of old categories. Legacy entries are not relabeled.

## Publication

**Published and verified:** https://xianghui.github.io/daily-app2/20261111-16/

- Root `npm run predeploy` and root `npm run deploy` succeeded. Combined deployment contains 593 app folders and root gallery, 928,000,910 file bytes after existing runtime deduplication.
- Pages reports `built` for the exact remote gh-pages commit `efa3e50f11092b3456cfc311459c89d0c18031b7`; workflow 42977353323 succeeded. No fallback rebuild was needed.
- Every public app asset, including worker and WASM factory, hashes byte-identically to local production dist. Shared 26,861,777-byte WASM also verified. `public-validation.json` records hashes.
- Full successful browser workflow suite rerun against **public GitHub Pages**: both real-model known-answer fixtures, reviewed edits/holds/undo, actual exports/clipboard, max batch/reimport, cancellation/retry, stale source guards, invalid inputs, fresh-worker all-network-disabled inference and 1440/390/320 layouts passed. `public-browser-validation.json` records fixture and network outcomes. Independent CSV parsing repeated on actual public downloads.
- Public gallery byte-identical to the working-tree root index, one new AI utility, old category headings intact, new app first, no phone overflow. `public-gallery-validation.json` records UI checks.
- Pre-existing root README/index edits and unrelated untracked folders were preserved, not authored or included in this app's source commit. Source staging includes only the new app, its gallery entry/tagline and its root README addition.

Limitations above still apply; passing tiny fixtures and desktop emulation does not establish production material quality, universal accuracy or physical-mobile support.
