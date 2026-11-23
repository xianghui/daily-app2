# Timecode Quay

Local-first cue reconciliation for editors receiving mixed cinema, PAL, animation and NTSC handoff notes. AI retrieves the intended frame-rate profile from the note; deterministic arithmetic then turns reviewed labels into usable zero-origin frame offsets. It does not load video or alter a timeline.

## Workflow

1. Use **Cinema & broadcast** or **Animation & NTSC**, paste JSON, or import source/audit JSON. Edit profile descriptions to describe known handoff workflows, and enter 1–24 unique cues with context and timecode strings.
2. **Load AI & reconcile** explicitly downloads the real local MiniLM model/runtime and embeds descriptions and notes. All cosine evidence is inspectable; similarity is not confidence. Numeric/timecode labels do not enter inference.
3. Review/correct the profile and label, add multiline notes, and approve or hold each cue. No automatic approval. Undo restores review edits; originals remain unchanged. Editing any review invalidates applied exports.
4. **Apply reviewed scenario** validates label components, profile separators and nonexistent drop-frame labels, then calculates offsets. Invalid/held cues remain in complete audits but not release CSV. Comparison is nominal label counting at the same reviewed rate, not a claimed correct-rate detector or time-saving metric.
5. Download JSON, complete CSV, Markdown worksheet or ready-only Release CSV; copy the current worksheet. Reimporting audit JSON restores originals only and requires fresh AI/review. No external actions, uploads, installs or media changes.

## Real AI, model and runtime

- `Xenova/all-MiniLM-L6-v2`, quantized q8 ONNX, Apache-2.0: https://huggingface.co/Xenova/all-MiniLM-L6-v2 . Real 384-dimensional normalized mean-pooled embeddings rank user-provided profile descriptions.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), WASM CPU, one thread. No WebGPU required. No API key, paid integration, remote inference, analytics or credentials.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`, and binary `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these earlier apps and exact asset paths. Local/public byte audits verify dependencies.
- First use: approximately 23 MB model/tokenizer from Hugging Face/CDN plus 27 MB same-origin WASM. Needs internet, HTTPS or localhost, module workers, WebAssembly SIMD and several hundred MB RAM. Current desktop Chromium tested, with GPU disabled; physical phones and other browser engines untested.
- Batches of four texts; maximum 28 texts/run, contexts/descriptions ≤200 characters. The reused feature-extraction pipeline uses tokenizer truncation with model_max_length 512; its supplied `max_length:256` call option does not override the tokenizer. Validate count, dimension, finite values and normalization before accepting vectors. No generated JSON or hard-coded responses.
- Worker source, WASM factory and binary use Cache API; Transformers caches model assets. **Fresh-worker inference in an already-open warmed page** is tested offline. Cold offline navigation/reload is not promised; cache eviction requires internet. Model main revision is not a reproducibility pin; host updates may change outputs.
- Cancellation terminates workers; monotonically changing run identities protect source edits, delayed file reads and pending worker downloads from stale overwrites. Worker/model/network/runtime/schema errors and a 180-second timeout fail closed, with retry and no fake fallback.

## Formats and limits

Source: `{ "profiles": [{"id":"film24","description":"Cinema at 24 fps"},...], "records": [{"id":"cue-1","context":"Cinema film editing note","value":"00:01:00:00"},...] }`.

2–4 profiles, unique supported IDs `film24`, `pal25`, `video30`, `ntscDF`; 1–24 records. Unique record IDs 1–80 characters, descriptions/contexts 1–200, source JSON ≤24,000 characters. Source/audit `.json` files ≤1,000,000 bytes; audit originals independently satisfy source limits. Reviewer notes ≤2,000 characters. Only synthetic data included. Unknown extra JSON fields are preserved as inert data, never executed.

Supported exact rates: 24, 25, 30 non-drop; 30000/1001 drop-frame. Labels must be `HH:MM:SS:FF` non-drop or `HH:MM:SS;FF` drop-frame, hours 00–23, minutes/seconds 00–59, frame component below nominal rate. At 29.97 DF, labels 00 and 01 at second zero do not exist except every tenth minute. Dropping label numbers does **not** drop video frames. Offset origin is label zero, not a media start offset. No 23.976, 59.94, negative preroll, day rollover, mixed-rate conforming, EDL generation or media metadata detection.

Frame offset is an exact integer. Elapsed seconds retain exact numerator/denominator; decimal export rounds to 9 places and UI to 6. Complete CSV retains every cue, originals, reviewed label, chosen profile, review status/note, frame count, exact rational seconds, nominal count, omitted-label count and blocker. Release CSV includes only ready approved cues. JSON preserves exact strings and full evidence. CSV prefixes formula-leading text with an apostrophe, including multiline text; Markdown is a worksheet rather than machine interchange. JSON is the lossless reimport format.

## Privacy and limits of inference

Network traffic is static GET downloads. Notes remain in the local browser/worker, not URLs or request bodies. No provider keys, accounts, uploads or remote integrations exist. Text resembling instructions cannot call tools or ask for credentials. Imported HTML is rendered only as text. An adversarial negation probe selected the wrong 24 fps profile despite an intended PAL 25 description: mandatory human review matters. Even unrelated text receives a nearest profile. This is a handoff aid, not authoritative detection or broadcast conformance certification.

## Build / validate / publish

React + Vite, base `/daily-app2/20261123-17/`; `npm run predeploy` builds. The per-app `deploy` script is retained but must not be invoked: publish through repository-root combined `predeploy`/`deploy` only. See `VALIDATION.md` and machine-readable reports for actual checks and untested scope. Local tests use installed Playwright and Chrome. No digest is sent by the builder.
