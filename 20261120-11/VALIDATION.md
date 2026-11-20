# Label Scribe — observed validation

Synthetic data only. Validation uses the built production bundle under its real `/daily-app2/20261120-11/` base, actual desktop Chrome with GPU disabled, actual pinned Tesseract LSTM inference, and an independent Python CSV parser. Successful inference is never mocked. Fault injection is used only to exercise error branches.

## Actual neural OCR

- Workshop printed PNG cards: `BOLT-204 / NORTH RACK / 24`, `WASHER-108 / PARTS SHELF / 50`. **6/6 fields** matched the known synthetic answers; reviewed register total **74**.
- Archive printed PNG cards: `BOX-317 / BLUE ROOM / 12`, `FOLDER-602 / UPPER CABINET / 8`. **6/6 fields** matched; total **20**. These are materially different raster inputs and outputs, not precomputed answers.
- Maximum batch: eight independently rasterized cards `PART-201` through `PART-208`, counts 10–17. Sequential real inference, complete eight-row JSON/CSV/reimport and **108-unit** conservation passed.
- JPEG card: actual inference recovered `PART-777`, count **93**. Blank white image produces a visible empty-OCR error. Instruction-like printed text has no authority; missing/invalid labeled fields cannot be approved into the register.
- **12/12 on two clean tiny fixtures is not universal accuracy.** Handwriting, blur, glare, skew, tiny labels, real warehouse photographs and broad field distributions are untested and unreliable. Every approved ID/location/count requires visual review. No confidence percentage or timing/savings claim.

## Workflow / artifacts / quality measures

- Unreviewed application blocked. Count edits reset approval and invalidate exports. Approved counts preserve exact whole-number values; blank/malformed values never become zero.
- Multiline note `=SUM(1,2)\n"reviewed", with newline` survives JSON and clipboard exactly; CSV quotes newlines/commas/quotes and prefixes formula-like text with an apostrophe.
- Edited first archive count 12→17 yields **25**, not the original 20. Hold removes only its register row; complete audits retain all originals. Undo restores the reviewed count/decision; duplicate approved item/location pairs block application. All-held is a valid empty register with a complete audit.
- Actual browser-downloaded JSON, audit CSV, register CSV and Markdown were reopened. Python standard `csv` parser checks record-by-record fields, source preservation and totals; JSON reimport restores reviewed fields and renews approvals, without pretending to restore omitted photos.
- The raw-OCR baseline counts format-valid cards before edits. Reviewed metrics derive from current review state: approved/held counts, edited-field count and approved-unit sum. Format validity is not OCR accuracy or physical stock truth.
- 1,000 generated core cases check independent integer totals, duplicate/hold behavior and audit round trips, plus label uniqueness, malformed/empty/oversized text and numeric boundary checks.

## Browser defenses / privacy / offline

- Empty input, nine-card batch, corrupt/oversized/unsupported files, oversized dimensions checked before pixel decode, invalid/import envelopes and bounds, required-field/duplicate checks passed.
- Runtime download failure and actual successful retry; worker download failure; unavailable WebAssembly; unsupported Worker constructor; malformed message envelope/text; worker failure; 180-second timeout branch: all show actionable errors without fake results or enabled stale exports. Time is accelerated only for the defensive timeout test.
- Cancel/retry, new source during a run, and cold runtime-fetch cancellation followed by a new real archive run preserve generation isolation. Old results cannot overwrite newer input/results.
- Request capture from production navigation through real inference observed **GET only, no request bodies, no source fields in URLs**, no runtime/model CDN request before explicit Load OCR. All documented remote requests are pinned `cdn.jsdelivr.net` static downloads. Images/text remain local; no provider credentials or remote actions exist.
- Worker bytes match the installed pinned 7.0.0 package; CPU engine CDN bytes match installed core. Model/engine sizes and SHA-256 in `asset-validation.json`. Built text credential-pattern scan passed; this scan alone is not proof of all possible secrets.
- After a successful online run, all networking was disabled and **a new worker ran real OCR successfully** using cached engine/worker source and IndexedDB model. Scope: already-open warmed page only. Offline navigation, reload and app-shell startup are not claimed.
- 1440/390/320 widths: no horizontal overflow, labeled inputs, ≥44px buttons, visible keyboard focus, actual source/review/result actions. Normal viewport screenshots inspected. Physical phones, other browsers, assistive technology and low-memory devices remain untested.

## Combined collection / publication

- Every inline gallery script compiles via Node `new Function`; script absence is an error. New entry exactly once, area `ai-utility`; all **743** earlier entries/order preserved, **744** total. AI Utilities remains first and prior categories are not relabeled. Gallery tagline includes the new image-input workflow.
- Root predeploy builds combined `deploy/`; existing 1,000,000,000-byte conservative limit is unchanged. New app code/worker is small; engine/model downloads are deferred CDN files.
- Deploy-only byte-identical geometry WASM sharing additionally covers `20261028-9` → immutable `20261028-24`. Original source dist and old JS URLs are intact; rewritten worker/entry references are versioned. Actual old-app default generation, PNG import and binary STL import each produce distinct validated closed STL artifacts, using the shared binary.
- Final assembled/public status is recorded separately in `assembly-validation.json`, `publication-status.json`, `public-asset-validation.json`, and `public-browser-validation.json` after successful deployment; a branch push alone is not accepted as public verification. Root predeploy/deploy is the only publishing route.

Evidence: `browser-validation.json`, `defensive-validation.json`, `challenge-validation.json`, `race-validation.json`, `artifact-validation.json`, `core-validation.json`, gallery/asset reports and local/assembled/public run logs. No digest sent.


Public release verified: matching Pages `34f363e07c561f2b4fcbf218bbba11bc1e7e2647` reached `built`, with a successful workflow. Twelve public app/worker/legacy-runtime byte matches, both real OCR fixtures, the full public reviewed-artifact/privacy/offline/eight-card suite, the 744-entry gallery and affected older-app imports/exports passed. Combined site: 999,702,485 bytes. Physical phones and broad real-photo accuracy remain untested.
