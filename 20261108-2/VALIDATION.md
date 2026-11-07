# Label Lens validation

## Real production-bundle inference

Browser: installed desktop Google Chrome, headless through Playwright. Vite production build served at the exact `/daily-app2/20261108-2/` base with its bundled worker/module and shared WASM path. All successful inference uses the actual downloaded quantized MiniLM model on WASM CPU, not a mocked pipeline.

Two six-record synthetic known-answer batches:

| Batch | Seeded label error | Expected neighbor vote | Observed | Other cues |
|---|---|---|---|---|
| Help desk | h3, password recovery tagged Billing | Access | Access; h3 flagged | h1 and h2 also flagged |
| Library desk | l3, book-loan extension tagged Events | Loans | Loans; l3 flagged | l1 and l2 also flagged |

Both seeded mistakes were caught. Four correct labels were also flagged across the two datasets. Exact-text conflict baseline found zero in each dataset; semantic audit produced three cues each. **This is not evidence of high accuracy.** In tiny neighborhoods a mislabeled close neighbor can dominate a correctly labeled record's vote; use the cues for adjudication, not automatic relabeling. The UI does not equate similarity with confidence or cues with mistakes. Browser fixtures explicitly correct the seeded error and reject the other cues, yielding one changed label per dataset and preserving all six originals. See browser-validation.json and exported synthetic artifacts for actual scores/evidence.

## Observed checks

- Production build and deterministic schema/vote unit checks pass. Unit synthetic vectors are distinct from actual-model browser tests.
- 40-record maximum batch processed in chunks of four with all 40 IDs retained exactly once.
- Every actual embedding is validated: one finite normalized 384-vector per record. Self-neighbors excluded.
- Empty, invalid JSON/schema, oversized paste, malformed records, duplicate IDs, invalid descriptions/labels and unsupported import formats rejected.
- Pending reviews block applying. Keep restores original label; Correct edits it; Hold preserves the row with an explicit decision. Undo, notes, invalidated snapshots and apply/export work.
- Actual JSON/CSV downloads and clipboard tested. Independent Python csv.DictReader checks all fields/rows against JSON, including quoted commas, multiline formula-like text, apostrophe protection, held records and corrected labels. JSON reimport preserves original input exactly; review state intentionally not restored.
- Input edits, cancellation and retry tested with actual worker. A deliberately delayed non-terminating worker response after input change is ignored.
- Fresh uncached model-host download blocked: actionable error, no fake results; removing block allows actual inference. Worker-source download failure/retry also tested.
- Malformed vectors, unsupported worker/runtime construction, worker crash and 180-second timeout branch tested via fault injection. Actual disabled-WASM hardware is not claimed tested.
- Offline: after online success, network disabled and fresh worker performs another complete real inference. This tests open-tab cached model/runtime use, not offline navigation/reload.
- No model-host traffic before explicit loading. Captured requests during default workflow are GET downloads with no bodies; source has no upload integrations. Built text assets scanned for common key/token/private-key patterns with no matches. No user/provider secrets used.
- Desktop and 320/390px emulated-phone layouts: no horizontal overflow, controls editable, exports usable, screenshots inspected; actual phone performance and other browser engines untested. Labels and visible keyboard focus included. No full screen-reader certification claimed.
- High cosine floor explicitly abstains for unsupported neighbors. Prototype-named labels and special IDs tested with actual model.
- Gallery inline scripts compiled via Node new Function; new AI utility entry appears once, existing 517 entries retained; browser gallery renders 518 cards, AI Utilities first, older categories/search intact.

## Files and scope

`browser-test.cjs`, `extra-test.cjs`, `core-test.mjs`; `browser-validation.json`, `extra-validation.json`, `artifact-validation.json`, `asset-audit.json`, gallery reports. Models downloaded from Hugging Face; no model weights or real user data committed. Runtime notices in licenses/ and THIRD_PARTY_NOTICES.md. Tests use temporary faults only for failure handling; all fixture, batch and offline success checks execute real inference.

Public hosting/inference validation is recorded separately after root combined-site publication; local checks alone do not establish public availability. No universal accuracy, actual phone support, offline startup or measured time savings claimed.

## Public verification

The combined gallery is publicly rendered with 518 entries, earlier categories retained and new-entry search passing (`public-gallery-validation.json`). The actual public default model passed both known-answer fixtures, 40-row batch conservation, offline fresh-worker inference, review/hold/undo/copy/download/roundtrip, cancellation/stale-input handling, malformed vectors and runtime/download/timeout defensive checks (`public-evidence/browser-validation.json`). Every captured request was a GET download with no body and no page errors. Public asset equality and exact built Pages commit are checked in deployment-validation.json. After the 320px maximum-ID wrapping fix was rebuilt and published, the full public browser suite was rerun against the final app/worker bundle paths. Final public defensive/export and long-ID checks are recorded in public-evidence/extra-validation.json. No phone hardware or other browser engine support is inferred from these checks.
