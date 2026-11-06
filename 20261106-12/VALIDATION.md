# Validation — 2026-11-06

## Production bundle, real browser AI

Headless installed Google Chrome via Playwright, serving the built Vite bundle (not dev or mock inference). `browser-validation.json` and executable `browser-test.cjs` contain detailed results. No successful AI test substitutes a model.

Known-answer fixture A: three English paraphrases for forgotten-password access, parcel shipping progress and payment proof. Expected and observed top sources: **password, delivery, invoice**. Cosines approximately **0.697, 0.589, 0.442**.

Different fixture B: return unused shoes, stop recurring membership, and helicopter rides on Mars. Expected and observed relevant top sources: **returns (0.512), cancel (0.606)**. The unrelated question's best score was **0.177**, below default 0.42, and remained unapproved. Thus all five in-domain fixture labels and the one out-of-domain rejection passed. This is a small known-answer smoke set, **not a calibrated accuracy claim**. In particular, finance paraphrase is close to cutoff and may require adjustment on real data.

Full batch: 24 questions alternating password/delivery, plus five shelf questions, processed four texts at a time. All 24 records survived; 12 matched each expected class. Schema checks require count, 384 finite coordinates, normalized magnitude; malformed/zero/nonfinite vectors are rejected.

## Review, output, state and errors

- Edited draft with comma, double quotes and newline; rejected another; undo restored previous approval; reapplied rejection; all three exported records preserved. JSON downloaded, parsed and matched clipboard contents. CSV reopened with Python csv.DictReader; every question/status/answer matched JSON, including multiline escaping and blank rejected answer.
- Edit after apply removes export controls until reapplied. Approved empty reply blocks apply. Source selection replaces draft and clears approval; undo restores draft and approval. Phone download exports were parsed as actual JSON.
- Cancelled actual inference, changed input and retried actual model. No cancelled results appeared after waiting; run-ID checks guard both message ID and current run. Input edits invalidate existing recommendations and applied artifacts.
- Empty/oversized questions, malformed shelf JSON, duplicate IDs and wrong file extension tested. Valid text import works. Unit checks cover count and total-size bounds, empty vectors and lossless JSON preservation.
- A fresh context with all remote model traffic blocked produced a visible fetch error and no matches; unblocking and retry loaded the actual model successfully.
- Unsupported Worker, malformed embedding result and shortened timeout are **error-only fault-injection tests**, not evidence of AI inference. All surfaced actionable errors and no results. Browser worker/WASM errors never become canned replies.
- The initial runtime asset-path mistake was fixed before publication. Offline worker recreation exposed unreliable HTTP-cache behavior in Chrome; idle runs now preserve the loaded worker, with active cancellation still terminating it. No promise of offline app reopening/recreation is made.

## Privacy, cache and offline

Before explicit Load click: no external requests. Observed remote hosts: huggingface.co and us.aws.cdn.hf.co. All observed remote requests were GET/HEAD with no post body or question content. No remote provider exists; source uses local embeddings only. No keys supplied or used.

`cache-test.cjs` / `cache-validation.json`: first load downloads actual model; subsequent page load in the same context performs **zero model-host requests**, reusing Cache API. Cache stores model/config, WASM and app's explicit factory cache, not input strings. Measured cached WASM 26,861,777 bytes. Cache availability is not guaranteed under all browser policies.

With the **loaded worker retained and page open**, browser network was set offline, inputs changed, and actual inference returned the same three expected classes. Full offline reopening and offline worker recreation after cancellation are **not supported promises**. Initial download and cold-cache failures are handled explicitly.

## Layout/accessibility

Desktop 1440×1000 and narrow 390/320×850 layouts tested. No document horizontal overflow. Separate phone-page tests exercised actual model processing, source selection, edited answers, undo, approval/application and actual JSON downloads. Screenshots: desktop-validation.png, phone-*-top.png and phone-*-review.png. Old full-page resized screenshots exhibited Chrome compositor tiling; separate viewport screenshots supersede those. Forms have associated labels; keyboard focus and visible focus styling checked. Not a full screen-reader audit or physical-phone/Firefox/Safari inference certification.

## Build / gallery / deployment

`npm run predeploy` passed. Runtime factory, WASM and worker are local production assets. Root gallery inline scripts compiled with `new Function`; the new entry appears once in `ai-utility` and all **482 previous entries** are byte-for-byte preserved as parsed data. Root combined predeploy and public checks are recorded alongside this document after publishing. Root workflow, not per-app deploy, publishes the combined collection. No old collection files were modified.

## Final public outcome

Published collection commit **9543880a0704e881a6e68e84b0d82893c2bc9164** reached GitHub Pages **built**, with no Pages error. Final title was corrected after the first live smoke check; local workflow tests were rerun before republishing.

Public URL: https://xianghui.github.io/daily-app2/20261106-12/

`live-test.cjs` passed actual public inference on both fixture batches plus another offline loaded-worker run. Edited three-record JSON was downloaded/parsed, unrelated question stayed `needs-human`, and 320px layout had no horizontal overflow. Public worker (548,054 bytes), runtime factory (53,057 bytes), and WASM (26,861,777 bytes) were fetched and SHA-256 matched to the locally tested production assets; exact observed sizes/hashes are in `live-validation.json`. No page errors or content-bearing remote requests occurred.

`live-gallery-validation.json`: 483 cards, AI Utilities first, search working, all 482 earlier cards retained. `live-cache-test.log` / `cache-validation.json`: actual public model load followed by reload uses zero model-host requests. Root predeploy assembled all 483 app folders with **0 failed, 0 skipped**. Credential-pattern scan found no embedded key/private-key patterns in built JS/HTML; source includes no credential/provider integration.

Limitations remain: small English smoke fixtures only, no physical mobile inference certification, no full offline reopening promise, no universal matching accuracy or confidence claims. README documents these explicitly.
