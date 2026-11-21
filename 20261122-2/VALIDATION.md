# Voice Orchard — observed validation

Date: 2026-11-22 (Asia/Singapore). Synthetic data only. Checks below concern the actual production bundle in desktop Chrome with CPU WASM, not a mocked successful model. See machine JSON reports and scripts in this folder. Public publication evidence is recorded separately after deployment.

## Real AI and workflow

- **Repair café:** actual MiniLM matched all 8 intended nomination topics (`bike,sew,bike,sew,bike,sew,web,web`). With two slots, PAV selected `bike + web`, represented **5/5** participants and scored 12600/2520 = 5 harmonic points. Top-approval baseline `bike + sew` represented **3/5**, score 11340/2520 = 4.5. Two PAV optima tie; catalog-order bitmask chooses the first. These are computed fixture facts, not a universal representation improvement claim.
- **Archive skills:** actual MiniLM matched all 9 intended topics (`photo,paper,photo,paper,photo,paper,audio,audio,audio`). PAV selected `photo + audio`, represented **6/6**, score 6. Baseline `photo + paper` represented **3/6**, score 4.5. Tiny easy fixtures do not establish general accuracy.
- **Negation challenge failed:** “Do not offer bicycle puncture repair; I dislike bikes and want sewing repairs” selected `bike`, expected `sew`. This demonstrates why every approval is reviewed and can be rejected or corrected. No semantic equivalence/confidence claim.
- Real max batch: **10 topics, 32 people, 64 nominations, 74 texts / 19 chunks**; pinned `web` preserved, exactly five selected topics, 126 feasible subsets, two repeated person/topic approvals deduplicated, a participant without nominations preserved. Source/audit reimport restored all 64 originals and requested fresh reviews.
- Seventeen additional malformed input/constraint cases passed (`input-validation.json`). Pending rows blocked apply; topic edits reset approval; notes and topic changes support undo; changing review invalidates downloads. Rejection retained every original and removed only its approval contribution. Actual multiline formula-like note persisted through current JSON, CSV and Markdown. Clipboard copied the reviewed worksheet.

## Independent deterministic and artifact checks

`core-test.mjs` passed **3,086 check groups/scenarios**, including an independent floating harmonic oracle over **512 three-person/three-topic approval profiles × 3 slot counts × 2 pin configurations = 3,072 scenarios**; exact count, score optimum, common constraints, full roster and baseline dominance in harmonic score. Duplicates, rejects, invalid schemas/vectors and pending approval guards tested. Baseline headcount need not be dominated and is not claimed to be.

`artifact-test.py` independently parsed actual browser-downloaded JSON/CSV/Markdown (9 check groups), recomputed PAV optima with Python rational `Fraction`, checked every nomination, full participant roster, chosen pins/slots, exact scores, edited multiline note, quoted fields, formula escaping and max-batch survival. JSON is lossless; CSV prefixes formula-like string fields with apostrophe deliberately. Coverage arrays parse as JSON within CSV. Reimport restores originals only; reviewed decisions must be renewed.

## Defensive lifecycle and network

`defensive-test.cjs` injects faults only for failure paths: blocked model network plus real recovery, unavailable WASM, worker fetch abort, constructor unsupported, malformed vector count/dimensions, malformed message envelope, accelerated 180-second timeout, worker error, late cancelled response and late response after source change. No successful fixture uses injection. Every fault leaves exports disabled and no fabricated result. Separate tests cover delayed file-read and worker-source fetch races, an old delayed response after newer **real** inference, and cold model-download progress/cancellation followed by real retry.

From production startup through inference all captured requests were GET with no request body; hosts were the app origin and documented model download hosts. No model request before explicit load. Imported content was not in request URLs/bodies. Built assets passed credential-pattern scan; source has no remote provider or API integration. Persisted request audits contain host/path/query-key names only, not temporary CDN signatures.

## Cache, device, layout and scope

A successful online run was followed by worker termination, browser network disabled and **fresh-worker real inference** on the open warmed page. Worker, factory, binary and model cached successfully. No offline app-shell navigation/reload claim. Cache eviction and unavailable storage may require downloads. Runtime dependency protocol, q8 CPU settings and asset hashes are audited; immutable source builds must remain in the collection.

1440, 390 and 320 CSS-pixel viewports passed document-width overflow, associated labels, ≥44px controls and keyboard focus checks. Normal-viewport hero/review/results screenshots were inspected; no clipped panels or horizontal overflow. Phone-width tests use desktop Chrome emulation, not a physical low-memory phone. No formal screen-reader/contrast audit, multilingual accuracy, real workshop study or offline startup test.

## Gallery and deployment

All 782 prior gallery records were parsed for originality; related agenda, ballot and proportional-allocation tools are distinguished in `originality-audit.json`. Original `/daily_app` gallery read only. Root inline scripts compile with `new Function`, exactly one new `ai-utility` entry is first, and old entries/categories are preserved. Individual `npm run predeploy` passed. Root assembly and public runtime/Pages verification results are appended below only when observed.

Root `npm run predeploy` completed with **783 built, 0 failed, 0 skipped**. Assembled size **999,888,706 bytes** is below the unchanged 1,000,000,000-byte guard. No new runtime-sharing rules or old-app removals. Complete real-AI workflow suite passed again from the assembled production tree; gallery browser checks confirmed 783 cards, AI Utilities first, older categories, search and phone widths.

Additional assembled-browser check applied a corrected topic mapping, verified the current downloaded JSON retained both the original and neural proposal, and exercised all-rejected input: zero counted approvals/representation while every participant and nomination remained. See `reviewed-correction-validation.json`.

Public release: matching Pages `35ffc485afa3bac292ecee767c78d8788b5ff1df` and workflow `44928620364` succeeded. Seven public gallery/app/worker/factory/WASM byte matches, both real MiniLM fixtures (17/17 simple links), the complete public review/export/max-batch/offline/privacy suite, independently parsed downloaded artifacts and all 783 gallery cards passed. Combined site remains 999,888,706 bytes under the unchanged guard. No new runtime-sharing rule or old-app removal; unrelated pre-existing recovery work is preserved and excluded from this source commit. No digest sent.
