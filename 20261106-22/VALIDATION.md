# Shelf Life validation · 2026-11-06

## Production bundle (local Chrome, actual inference)

`npm run predeploy` passed. Headless installed Chrome via Playwright served the production build at its nested Pages base, not Vite dev. No mocked model was used for successful workflows.

At threshold 0.45:

| Synthetic fixture | Expected linked articles | Observed | Unrelated records | Whole-phrase baseline |
|---|---|---|---|---|
| Store changes | A1 payment, A2 password recovery, A3 inventory | All three linked to their corresponding changes | A0/A4 unlinked | 0 / 5 |
| Clinic changes | K1 appointments, K2 allergy alerts, K3 invoices | All three linked to their corresponding changes | K0/K4 unlinked | 0 / 5 |

Store corresponding cosine scores: 0.677, 0.607, 0.494. Clinic: 0.743, 0.802, 0.715. These are similarity scores, not confidence. This tiny synthetic fixture is not general accuracy evidence. The inventory score is close to threshold and illustrates sensitivity to threshold/wording. A hotel-room change versus password-reset article remained unlinked. Maximum 20 changes + 30 articles (50 texts in chunks of four) completed with all 30 expected payment links and every record retained.

## Workflow, invariants and artifacts

- Empty, invalid headers, nonnumeric/fractional/out-of-range priorities, duplicate IDs, 401-character descriptions, 21 changes and oversized inputs rejected before loading.
- Unsupported PDF and >30 KB file rejected. Quoted multiline comma/double-quote CSV imported and processed by the real model.
- Review rejection, explicit Update required and No change needed actions, owner/note edits and undo passed. Empty owner disables application. Review edits invalidate exported snapshots.
- Actual browser JSON, CSV and Markdown downloads captured. Clipboard equals downloaded Markdown.
- Independent Python standard-library csv/json parser checked every ID, source description, owner, reviewed action, original suggestion, review note and linked change ID. Formula-like multiline text with quotes/commas was safely escaped in CSV and preserved in JSON. All articles and original catalogs retained. Reviewed export fixture has two explicit decisions and two queued articles.
- Cancel and retry passed; cold model-download cancellation and retry passed. Input edits invalidate running results. Injected late cancelled worker response and delayed stale file read could not overwrite newer state.
- Unsupported Worker and WASM, worker-construction/error, malformed finite vector/schema output and 180-second timeout handling exercised through explicit failure injection only. Errors produce no invented AI output. Network model-download abort followed by real retry passed.

## Privacy, caching and layout

- No cross-origin requests before explicit model loading.
- Recorded external traffic consisted only of GET/HEAD weight/tokenizer/config file downloads from huggingface.co and us.aws.cdn.hf.co; no request bodies or user-content uploads.
- After online inference, network disabled and a **fresh worker** performed another real inference on the already-open page. Cached online reload produced no additional model-host requests. No claim of offline site reopening.
- Built text assets scanned for private-key/token patterns: no matches. Source inspected: no API keys, provider integration, uploads or analytics. Bundled WASM factory matches installed onnxruntime-web byte-for-byte.
- Desktop 1440 and narrow 390/320 widths tested with results and exports visible, no horizontal overflow, focusable controls and browser screenshots. 320px screenshot inspected. Zero unexpected page errors.
- Not tested: physical mobile hardware, Firefox/Safari/Edge, screen-reader behavior, offline page reopening, storage eviction, every possible English paraphrase or adversarial input. Browser/network failure tests do not establish identical behavior on all devices.

## Gallery and deployment

Inline scripts compiled with Node `new Function`; no missing scripts. New entry exactly once, correct folder and ai-utility area. Existing 492 entries preserved. Browser gallery check verifies 493 total cards, AI Utilities first, legacy STL and games intact, new link and search functional.

Root combined build and deployment results, public commit/runtime hashes and public browser rerun are recorded in adjacent machine-readable reports. Root workflow only; per-app deployment was not used.

### Public verification completed

GitHub Pages built commit `ebbf7580a582aa000b592a8cd8d7a3962d465b4c`, equal to remote gh-pages head. Every deployed file (including worker, WASM and runtime module) matched the local production bytes by SHA-256. Public gallery has 493 cards, the new entry once, functioning search and preserved legacy categories. Full browser suite reran successfully at https://xianghui.github.io/daily-app2/20261106-22/ including both real-model fixtures, max batch, offline fresh worker, exports, cancellation, network recovery and injected defensive failures. Public downloaded artifacts were independently parsed again. See deployment-validation.json, live-browser-validation.json and live-gallery-validation.json.
