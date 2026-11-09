# Recall Ledger

A React + Vite local-AI utility for self-directed learners reconciling rough recall-session notes with a flashcard deck. Unlike a course recommender or automated grader, it links notes to existing cards, requires the learner's recall rating, then applies an explicit spaced-repetition update.

## Use

1. Choose Science session / Web session, paste JSON, or import a `.json` input or earlier audit. Set session `date`, card `interval` (days), `repetitions` (consecutive successes) and `ease`, plus source notes. Examples are entirely synthetic.
2. Explicitly load AI. Check the proposed card and its original prompt, inspect every candidate's cosine similarity, change the link if needed, enter your recall quality 0–5 and approve, or hold the note.
3. Apply reviewed schedule. Every note must be approved or held. Missing ratings or duplicate approved card links block apply; there is only one update per card per session. Hold duplicate notes rather than applying twice.
4. Download full JSON, note-audit CSV, or Markdown study plan, or copy the reviewed plan. Any edit invalidates the applied result; undo restores earlier review state but requires applying again. Originals are never modified.

JSON exports contain `originalInput`, every reviewed `record`, complete updated `deck` including untouched cards and batch `metrics`. To continue a later session, use the exported `deck` as the next input's `cards` and choose a new date and notes. Reimporting the **whole audit deliberately restores original input, not the advanced deck or approvals**, preventing accidental repeated scheduling. CSV preserves all notes/holds and current reviewed ratings/dates; JSON additionally includes every card and evidence score. CSV spreadsheet-formula prefixes are escaped, including multiline annotations; JSON is lossless.

## Real AI / privacy / static hosting

- Model: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0; quantized q8 ONNX. Transformers.js **4.3.2**, ONNX Runtime Web. CPU/WASM (no WebGPU dependency). Runtime code and module worker are bundled locally.
- Actual normalized mean-pooled 384-dimensional embeddings of note text and each card's title + prompt; cosine chooses a candidate. Inference executes in a worker, in batches of four. Vectors are checked for count, dimension, finite values and normalization before use. It is not regex classification, a remote LLM or hardcoded example responses.
- Before first loading, budget approximately **50 MB**: ~23 MB model/tokenizer/configuration plus 26,861,777-byte WASM and a small runtime factory. Internet required initially; slow networks can hit the 180-second timeout. Progress, cancellation and explicit retry are available.
- Model files download from `huggingface.co` and its `*.hf.co` delivery hosts. No user text is put in model download URLs or request bodies. No analytics, remote inference, keys or external actions. Inputs/reviews live only in page memory and in exports you initiate. No real learner data is included.
- Reuses immutable same-origin WASM at `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Root deployment must preserve that earlier app. Model assets use runtime cache; worker source, WASM factory and binary are explicitly stored with Cache API. Offline **fresh-worker inference in an already-open cached page** is tested. Offline navigation/reload is not promised. Browser eviction/private mode can require downloading again. Clear site data to remove caches.
- Current desktop Chrome tested, including 320/390px browser viewports. Physical phones, Safari/Firefox, assistive technology and low-memory devices unverified. Requires module workers and WebAssembly SIMD; no silent fake or remote fallback. Unsupported runtime errors are actionable.

## Deterministic scheduling and bounds

This is a documented SM-2-style variant, not an outcome guarantee or canonical implementation certification:

- Quality 0–2: repetitions → 0; next interval → 1 day.
- Quality 3–5: repetitions + 1; first success → 1 day, second → 6 days, subsequent → rounded prior interval × prior ease.
- New ease = prior ease + 0.1 − (5−q) × (0.08 + (5−q) × 0.02), bounded to 1.3–3. Intervals are bounded to 1–3650 days. Next due date = session UTC date + interval; untouched cards receive no invented new date.
- Input: 1–16 cards, 1–24 notes, unique IDs up to 30 characters, title/name 100, prompt/note 400, review annotation 500. Card interval integer 1–3650, repetitions integer 0–10000, ease 1.3–3. Input JSON under 40 KB; exported audits/import files under 1 MB. No PDF/CSV import. 256-token truncation can omit long unusual-token text.
- Abort terminates the worker. Run IDs guard worker messages, async worker-cache reads and imports. Input changes clear pending/applied state. Timeout, network/worker errors, malformed vectors and invalid records never create simulated results.
- Text is data, never authority. There are no tools, credentials or remote operations available to imported instructions.

## Comparisons and limitations

Exact-title baseline counts notes containing a complete card title (case insensitive). AI proposals are not confirmed links until reviewed. UI reports baseline links and human-confirmed unchanged AI links as counts, not accuracy, savings or learning gains. Tiny known-answer fixtures are deliberately simple: six paraphrase links matched, versus zero exact-title hits. A negated photosynthesis note still linked to photosynthesis; unrelated text gets a best candidate even when all are weak. Similarity does not establish correctness, recall quality or learning. A learner must hold wrong/unrelated matches and manually rate recall. Duplicate notes and missing ratings block application.

## Build / validate / publish

```
npm install
npm run predeploy
node core-test.mjs
python3 serve.py
# separate shell, production bundle:
node browser-test.cjs
node network-test.cjs
node cancel-download-test.cjs
python3 artifact-test.py
```

Browser test requires the workstation Playwright/Chrome installation. Tests and synthetic exports are included; see [VALIDATION.md](VALIDATION.md). Required per-app scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`, but publish the collection **only from the repository ROOT** using root `npm run predeploy` and `npm run deploy`. Base: `/daily-app2/20261110-5/`.
