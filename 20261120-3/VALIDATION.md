# Observed validation — Search Lantern

## Real neural workflow

React/Vite production build passes. Successful workflow tests use actual MiniLM q8 WASM CPU inference in installed desktop Chrome with GPU disabled, not mocks.

- Community archive: 3/3 intended cross-list identities and 1/1 new B resource. Reviewed fused order: compost, bicycle, sewing. All three shortlist items occur in both lists; concatenation has two cross-list items and an A-only bread resource. Top paired cosines: 0.731 / 0.684 / 0.564; unrelated top 0.215.
- Digital resource audit: 3/3 intended identities and 1/1 new B resource. Fused order: transcription, bibliography, photographs. Again consensus count 3 versus concatenation 2. Top paired cosines: 0.685 / 0.793 / 0.732; unrelated top 0.185.
- k=60, shortlist=3, threshold=0.45 in both synthetic examples. Counts and RRF objective sums are computed from current reviews, **not evidence of general accuracy or better reading outcomes**. Correlated sources and wrong-edition matches remain unresolved by embeddings.
- Real semantic-change test: change a citation resource to encrypted-backup instructions; candidate source changes `a-refs` → `a-backup`. Threshold 1 yields all-unmatched candidates and a valid reviewed rank-fusion queue, without forced links.
- 400 independent exhaustive partial-assignment oracles match DP objective and one-to-one constraints. 300 exhaustive subset oracles independently check maximum-score bounded shortlists, score formulas and hold exclusions. Numeric source bounds and malformed vector shapes fail.

## Review / artifacts / defenses

Full real-browser suite covers mandatory approve/hold, corrected link resetting approval, duplicate links blocked, B holds excluded without deleting originals, undo, multiline formula/quoted notes, stale-export invalidation, clipboard, all empty/invalid/oversized/bad-format/list/threshold/fusion-control bounds, maximum 8+8 real inference in four chunks and maximum JSON audit reimport. Imports restore originals only and require fresh inference/review.

Actual downloaded JSON/all-original CSV/manifest CSV/Markdown are independently parsed with Python. Every A/B original, source rank, reviewed link/decision/note, shortlist flag and hold survives. Commas, quotes/newlines and intentional spreadsheet formula protection are checked. Markdown contains all source descriptions and the reading shortlist. Numeric RRF sums use float tolerances; order/IDs/counts are exact.

Successful online load followed by **fully offline fresh-worker real inference in an already-open production page** passes. Offline navigation/reload is not claimed. Network capture starts before explicit loading: no model requests before loading, only GET/HEAD, no bodies, no source descriptions in URLs. Reports retain public paths only, not signed CDN query values. Common credential-pattern scans find none. Shared dependency hashes are rechecked; only synthetic data exist.

Defensive fault injection (only for failure checks): model-host network abort and real retry; absent WASM; worker-download failure; unsupported worker constructor; malformed vectors/envelope; 180-second timeout; worker errors. No failure releases fake output. Cold model-download cancellation and real retry pass. Delayed old file import/worker fetch cannot overwrite/start newer work. Deliberately late old messages cannot replace a completed newer run. Successful AI tests remain real.

1440/390/320px layouts: no horizontal overflow, all forms labeled, visible focus, ≥44px buttons. Input/review/result screenshots visually inspected. Physical phones and non-Chrome inference are untested.

## Collection / publishing gate

Every inline gallery script compiles with Node `new Function`; missing scripts fail. New `20261120-3` appears exactly once with `ai-utility`. All 735 previous entries/categories remain intact; UI shows 736 cards, AI Utilities first, with working search and mobile layout.

Root predeploy: 736 built, no failed/skipped apps; combined size 999,657,631 bytes. Eleven assembled/public app/gallery/shared-AI/legacy runtime assets are byte-audited. Added deploy-only byte-identical geometry sharing for `20261028-13` preserves original source builds. Its actual default/PNG/binary-STL worker paths produce three distinct signatures and valid finite STL artifacts (7,550 / 7,270 / 7,190 triangles).

Public checks are separately recorded only after the final matching Pages revision reaches built: real-AI fixtures, full reviewed-artifact/privacy/offline/max-batch suite, gallery preservation and affected older runtime imports/exports. A gh-pages branch push alone is not a passing release.

## Objective correction

A final broad duplicate search found that an initial, uncompleted estimator direction overlapped Audit Estuary. That direction was discarded and is **not counted as this completed app**. Search Lantern instead uses reviewed semantic identities to fuse ordinal resource rankings and produce a reading shortlist; it performs no population estimation. New build, workflow, oracle, artifact, offline and production/public checks cover the final decision method. Earlier superseded evidence is outside this app folder.


Public release: final matching Pages `ba1fa0d4d144af70ebdf1f5f6bd3bb4e88a59aa4` built successfully with a successful workflow. Eleven public asset byte matches, both real-AI fixtures, full reviewed-artifact/privacy/offline/max-batch suite, all 736 gallery cards and affected older runtime/import/export paths passed. Final combined site 999,657,631 bytes. No digest sent.
