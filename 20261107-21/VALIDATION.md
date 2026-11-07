# Observed validation — 2026-11-07

## Real production-bundle Chrome CPU inference

`node browser-test.cjs` passed. Success paths used real Hugging Face MiniLM q8 inference, never mocks.

Service fixture: C1→S1 cosine 0.634; C2→S2 0.962 but numeric change 7 vs 14 blocked; C3 unrelated 0.096 held; C4→S3 0.627. Venue fixture: V1→R1 0.756; V2→R2 0.892 but 50 vs 30 blocked; V3 unrelated 0.161 held; V4→R3 0.591. Four intended paraphrase links were retrieved, two numeric gaps held and two unrelated claims held: eight curated outcomes as expected. This is not general accuracy. The very high score of a contradictory numerical claim demonstrates why similarity is not evidence of truth.

Both fixtures: exact-text baseline 0 links; assisted candidate count 2, all four claims held until human review. Raising threshold to 0.95 reduced service candidates to 0. No invented time or accuracy estimates.

- Maximum 24 claims + 24 sources / 48 embeddings / 12 batches passed with no lost claims or sources.
- Online run → terminate worker → block all network → fresh-worker inference produced identical vectors/rank scores. Cache reuse after online reload also passed. Offline navigation/reload not promised.
- No model downloads before explicit Load AI. Recorded external traffic was only GET/HEAD public model asset requests with no body or user content; hosts and redacted paths are in browser-validation.json. No remote inference integration exists.
- Review/edit/source switching, supported-note gate, numeric release guard, hold-all, undo, current snapshot invalidation, copy JSON and actual JSON/CSV/Markdown downloads passed.
- Python independently reopened reviewed and multiline/quoted CSV artifacts, compared all claim/source/note/decision/output fields, and verified row conservation. Formula-like text is escaped with an apostrophe. JSON retains raw original text.
- Empty/invalid/oversized CSV, duplicate/blank IDs, malformed quoting, source absence, invalid threshold, unsupported file extension and file size rejected.
- Real network/model-download abort and runtime-WASM abort surfaced errors; retries with real inference succeeded. Download cancellation/retry passed. Input changes plus a newer run preserved only the newer result.
- Fault injection (defensive checks only): unavailable Workers/WASM, malformed embeddings, shortened 180-second timeout, worker error/construction failure, late cancelled response and delayed file import all handled without fabricated output.
- Desktop 1440 and phone-width 390/320 layouts had no horizontal overflow; phone-width note editing/apply/export and keyboard focus passed. Desktop headless Chrome only, not physical mobile inference certification.
- `node core-test.mjs`, `npm run predeploy`, independent artifact parse and production credential-pattern scan passed. Scan alone is not a guarantee; manual review confirmed the only AI integration is local worker inference.

## Limits

Short English curated fixtures only. MiniLM cannot establish entailment or source authenticity and can miss negation and subtle contradictions. Numeric literal checking does not interpret units or number words. All claims start held and only human verification can change their release status. No Safari/Firefox, physical phones, offline startup or broad factual-accuracy claims are made.

Public and combined-gallery validation is recorded separately after deployment; local success alone is not publication proof.

## Public publication verification

Combined root predeploy: 513 built, 0 failed, 0 skipped. All existing entries/categories preserved; inline scripts compile; new entry exactly once. Combined app bytes and shared WASM hash checked. Root deploy published commit `b0bd35a2123d18bc2ce6d7e92174d4ea6414dd22`; Pages latest build is `built` at the same remote branch head. Every public app asset and shared CPU WASM matched local SHA-256 (deployment-validation.json).

The complete browser suite passed again at https://xianghui.github.io/daily-app2/20261107-21/ using real model inference, both fixtures, 48-text batching, offline fresh-worker reuse, cancellation/retry, current review/export gates, errors and desktop/narrow-phone checks. Public gallery rendered all 513 cards, AI Utilities first, old categories intact, and search found Claim Ledger exactly once. Actual public downloaded JSON/CSV/Markdown artifacts parsed independently with all reviewed fields preserved. Evidence is in public-evidence/ and public-gallery-validation.json.
