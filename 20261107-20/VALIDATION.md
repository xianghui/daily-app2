# Rewrite Guard validation

Production bundle, actual quantized MiniLM through a locally bundled worker and ONNX WASM CPU, tested in headless installed desktop Chrome with Playwright. Successful checks do not mock inference. Failure-path tests deliberately inject workers only to exercise malformed output, timeout and unavailable-device handling.

## Known-answer fixture observations

Each four-pair synthetic fixture contains two acceptable paraphrases, one numeric promise change and one unrelated rewrite. Default cosine threshold 0.65.

| Pair | Actual cosine | Number warning | Proposed decision | Human fixture assessment |
|---|---:|---|---|---|
| S1 password recovery | 0.771 | no | revision candidate | acceptable paraphrase |
| S2 refund 14 → 7 days | 0.925 | yes | hold | changed numeric promise |
| S3 shipment → library | 0.115 | no | hold | unrelated rewrite |
| S4 invoice download | 0.707 | no | revision candidate | acceptable paraphrase |
| F1 lights off | 0.869 | no | revision candidate | acceptable paraphrase |
| F2 opening time | 0.982 | yes | hold | changed opening hour |
| F3 leaking pipes → ticket | -0.020 | no | hold | unrelated rewrite |
| F4 clear exit → do not block | 0.590 | no | hold | **false positive**: acceptable negated paraphrase |

Seven of eight proposal labels agree with these fixture judgments. This is a tiny curated check, not a representative accuracy estimate. Crucially, numeric changes had very high semantic similarity. Similarity does not establish equivalence, factual accuracy or entailment. F4 remains honestly flagged in the example rather than editing the fixture to conceal the limitation. A reviewer may override low-similarity warnings only with a note; numeric changes require holding or restoring original copy.

Baseline flags all four changed strings in each fixture. Assisted checks flag two support / three facilities pairs. These are computed warning counts, not measured time savings, accuracy gains or grounds to skip review.

## Required workflow checks

The browser suite records actual outcomes in `browser-validation.json`: both real-input runs; default model loading and public-asset-only traffic; offline fresh-worker inference in an open page; cache reuse on online reload; invalid/empty/oversized/duplicate-ID/malformed CSV; unsupported file; invalid threshold; review gating; edited notes/owners; reject and undo; numeric hard gate; documented low-similarity override gate; applied-export invalidation; clipboard; JSON/CSV/Markdown downloads; quoted multiline/formula-leading exports; 24-pair / 48-text / 12-batch conservation; cancel/retry; changed-input stale-run rejection; threshold changes; download abort/recovery; network/runtime abort/retry; unsupported Workers/WASM; malformed vectors; timeout; constructor/worker errors; delayed cancelled response; stale file reads.

Independent Python parses actual downloaded CSV and JSON and compares every source pair, edited field, final output, score and escaped multiline field (`export-roundtrip-validation.json`). Core guard checks independently test finite normalized vector schemas, numeric multisets, duplicate numeric literals, review gating and hard release constraints. No content is uploaded; captured network requests are only asset GET/HEAD, with no request bodies. Built assets are scanned for credential patterns plus manually reviewed for data flow; pattern scanning alone is not proof.

Desktop 1440px and 390/320px phone layouts: screenshots, no horizontal overflow, visible labels, focus and working review/export controls. This is desktop Chrome emulation, not a claim of real-phone speed, screen-reader certification, or tested Safari/Firefox inference. Offline cold navigation/reload is not claimed. Other untested cases include specialist jargon, multilingual copy, names/units/sign changes, spelled-out numbers and subtle negation failures. No live publishing/sending occurs inside the utility.

A separate `stale-newer.cjs` check delivers a deliberately late malformed result from a cancelled worker after a newer real-model facilities run. The newer result survives without an error (`stale-newer-validation.json`). A timeout-duration mismatch found in defensive testing was corrected to the documented 180 seconds, and the complete final production suite passed afterward. Authored source/config lint passes without warnings.

## Publication

See `publication-status.json` and `deployment-validation.json` for actual hosting status. Public completion requires the new Pages commit built, public assets byte-matching local production output, public real inference and gallery verification. A branch push alone is not counted as success.

Final result: Pages built commit `dd48f26912219a6df23f531b6f1665ad52cd9e06` matches remote gh-pages. All seven app assets and the shared WASM hash match production. The full live-URL browser suite passed, including both real fixtures, offline fresh-worker inference, 24-pair batching, failure recovery and downloads; public exports independently round-trip. Public gallery shows 512 entries and preserves prior categories. Initial synchronization timeout, phantom rerun and immediate-cancel fallback were recovered by a final documented Pages rebuild; `hosting-attempts.json` records all actions. No source/app changes or repeated unchanged branch pushes were used to recover hosting.
