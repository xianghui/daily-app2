# Flowmark Ledger — observed validation

2026-11-26. Synthetic data only. Real production bundle, Chrome headless, WASM CPU with GPU disabled. No mocked results in successful AI checks. Defensive fault injection is separate and explicitly identified.

## Real AI and task quality

- Top-up month: actual `mark, add, mark`, **3/3** expected classes. Uncorrected proposals, after explicit review approval, give TWR **−1/100** versus net-gain/opening **−1/10**.
- Withdrawal/refill: actual `take, take, mark, add, mark`, **4/5**. B1 is a valuation mentioning impending cash removal: the model confuses it with a withdrawal. Applying that raw approved trail is blocked by the pre-flow boundary guard. Explicit review correction to `mark` unlocks TWR **47/250** versus shortcut **1/10**.
- The initial profile descriptions matched only 6/8. Positive, clearer event anchors improved this to 7/8; this is not a representative accuracy estimate. Final vectors/cosine alternatives survive the exported fixture audits.
- Harder direction/negation probes matched only **2/5** expected classes. The unrelated instruction-like note still received a nearest class and needs a human hold. It neither executes instructions nor causes a content upload. This is a review aid, not automatic statement reconciliation.
- Two materially different real input batches execute inference and produce materially different event proposals. The maximum batch executes **30 real embeddings in eight chunks**, then reimports the complete audit and processes the original batch again.

## Exact arithmetic and downloaded artifacts

- `oracle-test.py`: **400 independent generated valid accounting paths / 18,780 assertions**, using Python `fractions.Fraction` rather than the JavaScript implementation. Every capital-before/after, factor, flow total, exact return, baseline and conservation equation matches.
- `core-test.mjs`: **35 assertions**, including pending-review blocking, source/audit round trips, malformed vectors, invalid numeric strings, out-of-order events, missing pre-flow mark, final-flow-without-close, day-zero-only observations and full-liquidation blocking.
- Browser-downloaded JSON, event CSV, Steps CSV and Markdown are independently reopened by Python JSON/CSV parsers and all exact performance paths recomputed. The local full suite initially passed **1,232 independent artifact assertions**; assembled/public reports include the additional raw-AI audit snapshots. See `*-artifact-validation.json` for exact observed counts.
- Opening/day/amount changes invalidate exports, update applied results and reverse with undo. A same-day-boundary edit blocks return; holding any row blocks whole-account return while preserving every original and held row in the audit. Multiline formula-like review text, commas, quotes, Unicode and markup-shaped strings survive JSON/Markdown and correctly escaped CSV. Clipboard text matches the current applied result.
- Maximum 24-event/6-profile source survives complete-audit reimport exactly. Reimport restores originals only; it does not silently reuse prior approvals.

## Defensive, caching, privacy and UX

- Real worker and model download aborts show actionable errors and no fabricated classifications. Removing each network fault and retrying succeeds with the actual model (`recovery-validation.json`).
- Unsupported Worker/WebAssembly, worker constructor/error, malformed vector output and accelerated timeout are injected only for defensive checks. Cancellation during pending worker fetch and active inference prevents stale results; cancellation then real retry succeeds.
- A delayed old callback cannot overwrite a newer real-model batch. A delayed file read cannot overwrite newer source input. Empty/malformed/oversized input, zero/non-string money, invalid days, unsupported file type and >1 MB import are rejected.
- No model-host requests before explicit loading. From production-page startup through inference, captured requests are only GET with no request bodies. External traffic is limited to documented Hugging Face/CDN file paths; user content is absent from request payloads and URLs. Persisted audit strips signed CDN query values. Built JS/CSS credential-pattern scans and source/network review found no embedded credentials; a pattern scan is not exhaustive proof of all secret formats.
- After successful online processing, networking is disabled and a **fresh worker** performs real inference in the same warmed open page. Cold offline startup/reload is not claimed. WebGPU is not used or required.
- Desktop 1440 and narrow widths 390/320: no horizontal overflow, every input/textarea/select has a label, controls ≥44 px, keyboard export focus order works, screenshots of hero/review/result inspected. Physical phones and non-Chrome engines untested.

## Collection and publication

Gallery scripts compile with Node `new Function`; no missing/empty script allowance. The new folder appears exactly once as `ai-utility`. All **880** older entries and their categories remain unchanged, totaling **881** cards. Root gallery searches, categories, links and desktop/320px layouts are browser-checked.

Root assembly retains every app, uses unchanged runtime-sharing rules and remains below the existing 1 GB guard. See `assembly-size.json`. Combined deployment is published only by the root package. Public release must pass `public-assets.mjs`, the real browser/artifact suite and gallery checks, with matching remote gh-pages / built Pages commits. The latest state is in `publication-status.json`, `pages-build.json`, `pages-workflow.json` and `public-*-validation.json`.

Limitations: physical devices, other engines, cold offline navigation, representative semantic accuracy, statement completeness and trustworthy valuations are unverified. No investment actions, inference server, digest announcement or credentials are involved.

### Public release observed

Pages commit `a7768c3121e69edfd6c8f9e64f7ac8b4704a46cb` reached **built** with successful workflow `45692489601`. All **7** public app/root/runtime files match assembled SHA-256 bytes. Both real-AI workflows, explicit B1 review correction, raw-proposal boundary blocking, maximum-batch/undo/export/clipboard/offline/privacy/desktop-phone suite passed publicly. Independent public artifact parsing/accounting passed **1283 assertions**; all **881** gallery cards and old links are retained. Combined site: **815,071,102 bytes**, unchanged guard and runtime-sharing rules. No digest sent. Source is committed/pushed separately after these checks.
