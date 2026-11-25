# Clip Scribe — observed validation

2026-11-25, macOS desktop Google Chrome, Playwright headless, production Vite bundle, CPU inference with GPU disabled. This is not physical-phone or multi-engine testing.

## Real AI

Both materially different synthetic PCM16 voice notes were processed by real q8 Whisper tiny.en in-browser, not mocked output:

- Workshop: “Please move the pottery workshop to Friday morning, bring clay, water, and **12** clean towels.” Reference said “twelve”.
- Library: “The Library catalog is ready for review. Check **off their** names and send the reading list to the editor.” Reference said “author names”.

Lowercase, punctuation-insensitive ASCII word-token Levenshtein: **3 raw AI word edits / 33 supplied reference words**, then **0 reviewed edits / 33 words** after explicit human correction. Distinct outputs contain the expected workshop/catalog concepts. This small synthetic corpus does not establish general accuracy. Noise, silence, accents, names and dense/overlapping speech remain important limitations. No fabricated confidence or productivity percentages.

Real maximum-six-clip batches processed sequentially, preserved all six identities and exported/reimported all original WAV bytes. A separate **20-second** valid clip ran actual recognition; over-20-second audio was rejected. 128 generated tokens per clip and a 240-second timeout bound the workflow; long/dense speech may truncate.

## Workflow and artifacts

Production source build and assembled combined-site bundle suites passed:

- Input/load/progress; explicit pending → approve/hold → apply release. Empty recognition requires hold; invalid/empty inputs show errors, no fake transcript.
- Multiline transcript/title/note edits, hold, undo, raw AI evidence, current-snapshot invalidation, copy and real browser downloads.
- JSON with all original base64 audio, SHA-256, metadata, raw and edited text, references, decisions, timeline and metrics. Six-file original-audio round trip survives audit import. Saved edits are not silently trusted on import; originals are restored and user reruns/reviews.
- Independent Python `wave`, `csv`, `hashlib`, `webvtt-py`: **213 artifact assertions per full suite** including every source byte/duration, every CSV reviewed field and exact VTT milliseconds. The Python parser's convenience `start_in_seconds` drops milliseconds; checks deliberately parse its exact timestamp strings.
- Native Chrome TextTrack parsing verifies all 11 cues across reviewed/escaped/held/max artifacts, including markup/arrow escaping and actual start/end times. VTT blank paragraph separators collapse within cues by design; exact strings remain in the audit.
- Core validation: **218 assertions**, RIFF PCM contract, bad rates/channels/depth/codec/truncation, malformed AI text arrays, Levenshtein, source order, gap bounds and VTT escaping.

## Defensive, privacy and offline checks

Thirteen production-browser cases passed: worker fetch abort, real model-host download abort, unavailable Worker/WebAssembly/Cache API, worker construction failure, worker error, malformed result, unknown message, accelerated timeout, late stale response, pending-worker-fetch cancellation and pending-file-read cancellation. Fault injection is used only for defensive cases; successful transcription checks always use the actual model.

Actual cancel/retry succeeds. Cancelled/stale runs cannot populate newer review state. Input changes reset results and keep original disk files untouched. A separate asynchronous suite verifies out-of-order reads, reselecting the identical file after clear, and replacing input before a late worker message. Each review edit invalidates applied output. Source content is never evaluated as markup/code or allowed tool authority.

Network audit from app startup through inference: **only static GET requests, no request bodies**; model hosts are Hugging Face and its documented CDN. No model-host request occurs before the explicit load action; no reference text appears in URLs. Only hosts, paths and query-key names are persisted, not temporary CDN signature values. Source review and built-text credential-pattern scan show no provider credentials or upload integration.

After an online run, worker termination followed by all-network blocking and new-worker creation still performs real Whisper inference with matching outputs. This proves **warmed, already-open-page inference only**. Cold offline navigation/reload, browser cache eviction and other engines are not promised.

## Layout and collection

1440, 390 and 320 CSS-pixel widths: no horizontal overflow, associated form labels, 44px touch controls, working review/export actions. Normal viewport screenshots inspected, not merely full-page captures. Physical phones and their inference speed/memory are untested.

Every root inline script compiles using Node `new Function`; the one new AI Utility entry is first and unique. All **863 earlier entries** remain unchanged, total **864**, with AI Utilities ordered first and older STL/game categories intact. Browser search finds the new card and restores the full gallery.

Root predeploy builds/assembles all 864 apps, 0 failed/skipped. Combined site **999,974,766 bytes**, below the unchanged 1,000,000,000-byte guard. Deploy-only byte-identical geometry reuse for `20261105-24` and `20261105-23` points to the already-published `20261028-24` binary, retaining source builds and compatibility JS URLs. Actual legacy PNG/JPEG/ASCII/binary import + fingerprinted, independently validated STL export checks passed for both apps before publication. Legacy test harness needed a settled render before switching tabs; no legacy source changed.

Public verification status is appended below after Pages finishes; a branch push alone is not sufficient.

Model-license metadata check corrected the converted-model label to Apache-2.0 before the final release; the upstream Whisper implementation remains MIT. This label-only correction preserves the byte-identical tested ASR worker.

## Public release verification

Final combined Pages commit `cb393bc69a679c2df71662e62af039ed70bcb591` reached **built**; workflow `45539204846` completed successfully. The initial successful release was followed by one label-only license correction after checking actual model metadata; no hosting source or schedule settings changed.

- **18 public asset files** byte-match the assembled gallery/app/worker/examples/factory/WASM and affected legacy entries.
- Both real Whisper fixtures and the complete six-clip/review/edit/undo/hold/copy/export/cancel/retry/privacy/narrow-layout suite passed at the public URL.
- Real fresh-worker inference passed with all network blocked in the warmed public page. Cold offline startup remains untested/unpromised.
- **213 independent artifact assertions** and **11 native Chrome TextTrack cues** passed against actual public downloads.
- All **864 public gallery cards** render, with the unique new first AI Utility entry and older categories preserved.
- Both newly shared legacy apps pass real PNG/JPEG/ASCII/binary imports and five fingerprinted/validated STL exports each, with no page errors.
- Final collection **999,974,766 bytes**, below the unchanged guard.

Physical phones, other browser engines, noisy real-world recordings and verbatim/legal accuracy remain untested. No digest sent. Source staging preserves and excludes unrelated pre-existing recovery changes.
