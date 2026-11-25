# Span Press — observed validation, 2026-11-25

## Local production bundle

- React/Vite `npm run predeploy` passed. Tested built `dist/` at the real `/daily-app2/20261125-11/` base with its real shared worker/factory/WASM URLs. Installed desktop Chrome, headless, GPU disabled; no API keys or server AI.
- **Real inference:** Workshop report proposed pottery/pottery/stars/stars/pottery; Service report proposed bakery/library/library/bakery/bakery. All **10/10** intended links matched these deliberately simple synthetic contexts. This is fixture behavior, not a population accuracy estimate.
- Each reviewed fixture placed all five cells exactly once across six grid slots, with zero holes. Incoming rowspan skipped correctly for two second-row cells. Row-local baseline collided once per fixture; two placement coordinates differed. Same reviewed assignments/spans are used in both algorithms; this does not measure AI accuracy.
- **Challenge limitations:** a negated pottery context intended for astronomy proposed pottery; unrelated insurance context proposed astronomy instead of a hold. The retriever always proposes the nearest row. Mandatory human correction/hold is essential; see `quality-challenge.json`.
- Maximum 8 rows + 24 cells processed in eight real four-text chunks. Repeated row descriptions intentionally required manual corrections. All 24 cells survived the reviewed JSON/CSV/Markdown/HTML output and audit import; no perfect discrimination claim for repeated descriptions.
- Fully offline **fresh-worker** real inference passed after online model/runtime caching in an already-open warmed page. Worker was terminated and recreated; all network disabled via browser context. Cold offline startup is not implemented or claimed.

## Review, artifacts and layout

- Apply blocks pending decisions; approved/held records remain in complete audits. Hold blocks HTML release; undo restores prior review. Reviewed text/note edits invalidate exports; copy reflects current applied worksheet.
- Actual browser downloads parsed with Python `csv` and stdlib `HTMLParser`, independent of the JS encoders. Every original ID/context and reviewed text/note survived (CSV formula prefixes intentionally added); HTML cell count, span values and independently reconstructed grid matched all four artifacts (both fixtures, multiline edited case and maximum batch).
- Added CR-containing cell-ID browser round-trip probe: initial raw-attribute encoding normalized CR to LF. Fixed by numeric-character-reference escaping, then verified exact ID preservation in Chrome. Maximum-batch IDs now include CRLF; independently parsed exports and real production suite rerun.
- Edited string includes quotes, commas, newlines, emoji, ampersand and literal `<script>` markup. Downloaded HTML reopened in Chrome: no script element or execution, rowspan height/column alignment checked against browser geometry. HTML LF normalization is documented; JSON/CSV retain reviewed strings.
- Core checks cover span overflow, interior overlap with an incoming rowspan, duplicate order, gaps, holds, invalid review count/IDs/row, pending review, unknown kinds, malformed/nonfinite/non-unit/wrong-dimension vectors, malformed/oversized input and prohibited control/lone-surrogate strings. No invalid layout receives an HTML release.
- Production browser UI: desktop 1440 and narrow 390/320 widths; input, review and results screenshots. No document overflow; every input has a label; displayed buttons/inputs/selects/summaries ≥44 px tall. Inspected desktop hero and 320px review/results screenshots; selector clipping corrected and final suite rerun. Physical phones/other engines untested.

## Defensive and privacy checks

- Real network failure tests: abort shared worker download; separately abort model-host downloads. Both show errors with no fabricated output. Fault injection: missing Worker/WebAssembly, worker-construction/worker errors, malformed vectors, accelerated 180-second timeout and stale late message. Cancellation during delayed worker fetch prevents late construction. Ten defensive scenarios pass.
- Real cancel/retry succeeds, source changes invalidate results, and a delayed imported file cannot overwrite a newer fixture. Empty/invalid/oversized JSON, wrong file extension, >1 MB file, invalid constraints and excess cells fail visibly.
- Requests captured from production navigation through real inference. No model request before explicit load; downloads are GET with no body; no fixture text in URLs; hosts restricted to site/localhost, blob and documented Hugging Face/CDNs. Sanitized paths/query-key names only persisted; no signed CDN values.
- Source/built-asset credential scan and exact shared runtime hash audit are recorded separately. Such a pattern scan is supplementary, not proof by itself; architecture has no key input, external AI endpoint, analytics or remote content submission.

## Collection and public release

Gallery inline scripts compile; new entry appears exactly once as `ai-utility`; all 862 preceding entries/categories remain intact. Root publishing, final assembled-size guard, Pages built commit, public byte checks, public inference and parsed public artifacts are recorded below when actually completed. Until then local validation alone is not a public success.

Final assembled local run after the HTML-attribute fix: both real-AI fixtures, 24-cell CRLF-ID batch, review/hold/undo, offline fresh-worker inference, clipboard/downloads, privacy and all three layout widths passed again. Independently parsed assembled CSV/HTML artifacts preserve all IDs/context/edits and grid occupancy. Gallery rendered all 863 cards, AI Utilities first; STL and game sections intact. The SaaS category definition is preserved but has zero current entries, so no empty section is expected. Combined assembly: **999,886,515 bytes**, below the unchanged 1,000,000,000-byte guard. No legacy runtime sharing rules or sources changed.

Public release verified: Pages commit `6c9d609b1c5ace877820a48a6b76257ffdd0534a` reached built, and workflow `45531511667` completed successfully. 9 public gallery/app/runtime asset files byte-match assembled output. Both real-model fixtures, full reviewed export/24-cell CRLF-ID/offline/privacy suite, independently parsed public artifacts and all 863 gallery cards passed. Combined site is **999,886,515 bytes**, below the unchanged guard; no new sharing rules. Source staging preserves/excludes unrelated pre-existing work. No digest sent.
