# Clip Scribe

A local voice-note batch transcription and editorial handoff workbench. User: an editor or project coordinator with a small queue of English recordings. Bottleneck: audio filenames are not searchable transcripts. Input → real Whisper recognition → human listen/edit/approve/hold → applied playlist → usable artifacts. No sending, microphone recording, endpoint calls or account changes.

## Run

`npm install`, `npm run dev`. Production: `npm run predeploy`. Vite base is `/daily-app2/20261125-12/`. Per-app gh-pages scripts are retained as required; **publish only through the repository root combined-site workflow**, not this app's deploy command.

## Real AI and deterministic steps

- `Xenova/whisper-tiny.en`, quantized q8 encoder + merged decoder, from https://huggingface.co/Xenova/whisper-tiny.en . The converted model repository declares Apache-2.0; upstream OpenAI Whisper code/weights are MIT licensed. Model repo observed revision: `79fb389fc764e7c395bd330e9531d9d32ada7049`; downloads use main, not a pinned revision. Model files may change upstream.
- Transformers.js **4.3.2**, Apache-2.0; ONNX Runtime Web **1.30.0**, MIT, single-thread WASM CPU, not a remote inference service. WebGPU is unnecessary. Browser code and a dedicated module worker are bundled locally.
- The neural model transforms waveform samples into English text with greedy decoding, at most 128 generated tokens per clip. This is real ASR, not filename inference, a mock or a transcription lookup. Example reference texts are used only for optional quality checks and never sent into the model.
- Exact WAV validation, source identity SHA-256, source-order timeline/gaps, schema checks, review enforcement, word edit counts and export encoding are deterministic, not AI. No fabricated confidence scores.

## Requirements and data flow

Before the load button, UI discloses about **42 MB model + 27 MB runtime** first-run download. Observed q8 ONNX sizes: encoder 10,124,913 bytes, merged decoder 30,727,382 bytes, plus tokenizer/config files. Model files download from Hugging Face and its CDN. Worker/runtime assets load from this same GitHub Pages origin; no third-party runtime CDN. Nothing loads the model until the user presses **Load AI & transcribe**.

Current desktop Chrome on a reasonably capable computer is recommended. Secure origin, WebAssembly SIMD, module workers, Cache API and enough memory for ASR required. CPU processing can be slow; 240-second batch timeout is actionable and retryable. Physical phones and other engines were not tested; a narrow layout test is not a phone inference guarantee.

All imported WAV bytes, samples, transcripts and references remain on-device. Network consists of static GET downloads, not content uploads. There are no credential fields, API keys, remote providers or analytics. The Cache API stores model/runtime files, not imported audio. In-app input/review state is memory-only. JSON exports deliberately include original audio and review notes: treat them as sensitive.

The app caches its worker source explicitly. It reuses immutable byte-identical CPU assets from:

- `../20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Preserve those existing app directories. The Vite build verifies WASM byte equality, rewrites the bundled fallback and omits the duplicate binary. The new ASR worker is **not** the earlier embedding worker. Model and runtime caching is tested by blocking all network and creating a fresh worker in an already-open warmed page. **Cold offline navigation/reload is not promised**; the app shell has no service worker. Storage eviction/private-mode restrictions can require another download or prevent loading.

## Inputs, limits and use

1. Import **1–6 PCM16, mono, 16,000 Hz RIFF WAV** files, each **0.1–20 seconds**, at most 700,000 bytes. MP3, compressed WAV, stereo and other rates are rejected with a conversion instruction. A 20-second PCM16 clip is about 640 KB. WAV bytes and source order remain intact. Select all intended files together; a new selection replaces the in-app batch, not disk files.
2. Or try the two synthetic fixtures, locally generated using macOS speech synthesis. No personal recordings are included.
3. Set playlist gap 0–5,000 ms. Model downloads require internet initially. Load AI, inspect progress, and cancel or retry as needed. Clips process sequentially, each with a bounded model context. Cancellation terminates its worker; input generations and run IDs reject stale results, including pending file reads and worker fetches.
4. Listen to each original clip. Review title (100 characters), transcript (4,000), note (500) and optional known transcript (1,000). Correct names/numbers. Approve or hold every clip; empty recognition must be held. Undo last edit retains up to 50 review states. The raw AI draft remains available alongside edited text.
5. Apply the reviewed playlist. Every edit invalidates exports until reapplied. No automatic external action occurs.
6. Export JSON, CSV, Markdown or WebVTT, or copy the current Markdown worksheet.

Model/network/worker/runtime failures never substitute canned text or silently fall back to deterministic transcripts. On failure use the error, convert unsupported input, try one shorter clip, check network and retry in desktop Chrome.

## Output contracts

- **JSON `clip-scribe/v1`** contains every source WAV as base64, metadata, SHA-256, original AI draft, reviewed text, approval/hold, optional reference, note, exact clip-level start/end milliseconds, gap and computed metrics. This is the lossless audit. JSON reimport restores original audio only; saved edits are not silently trusted or applied, and the UI explicitly asks users to rerun and review. Import envelope limit 6 MB, original per-clip audio limits still enforced.
- **CSV** includes all clips and holds with quoted commas, multiline cells and spreadsheet-formula escaping. JSON retains exact strings where CSV prefixes apostrophes for spreadsheet safety.
- **Markdown** releases approved text with titles and timing; held clips remain marked rather than lost.
- **WebVTT** uses one cue per approved clip, **not word-aligned captions**. Concatenate the original clips in source order with the configured gaps to use this playlist timing. Held clips retain their original duration but have no released cue. This app does not generate concatenated audio. Markup and cue-arrow text are escaped; blank paragraph separators collapse within one cue to keep VTT parseable. Other exact text survives in JSON/CSV/Markdown.

Comparison: filename word count vs approved transcript word count measures indexing volume only, not quality or time savings. Where a known reference is supplied, lowercase ASCII word-token Levenshtein edit counts compare raw AI and reviewed text to that reference. They ignore punctuation/case, treat `12` versus `twelve` as different, and are not universal accuracy claims.

## Validation and limitations

See [VALIDATION.md](VALIDATION.md) and machine-readable test reports for observed results. Initial real inference on the 33-word synthetic corpus made 3 word edits: `twelve` → `12`, and `author` → `off their`. Human corrections reduced the supplied-reference count to zero. This tiny corpus is not representative; noise, accents, silence, proper names, overlapping speakers and dense speech can produce wrong or invented words. English-only tiny Whisper does not identify speakers, translate languages, recover missing audio, certify verbatim accuracy or create action commitments. Audio instructions are data only: there are no model tools, credentials or authority to change.

Tests run against the production bundle, not only Vite dev. Known-answer audio, maximum six-clip batch, original-byte conservation, independent WAV/CSV/VTT parsers, native browser text tracks, review/edit/undo/hold/copy/download, model/network/worker errors, malformed output, timeout, cancellation/retry, stale operations, warmed-page offline inference and desktop/narrow layouts are included. Claims are limited to the tested desktop Chrome environment.
