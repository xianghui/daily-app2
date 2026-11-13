# Folio Press

For recurring workshop-reader editors: import/paste a JSON document manifest, define 2–6 ordered sections and recto flags, run local semantic classification, review/edit every proposed section and actual page count, approve or hold, apply and export a booklet worksheet. Synthetic Workshop and Garden examples are included. No PDF parsing, modification or printing occurs.

## Real AI and data flow

Xenova/all-MiniLM-L6-v2 (Apache-2.0), https://huggingface.co/Xenova/all-MiniLM-L6-v2 ; Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), quantized q8 WASM CPU. Normalized mean-pooled 384-dimensional embeddings rank user-supplied section descriptions by cosine similarity. This is real local inference, not keyword classification or generated prose. Similarity is not confidence; unrelated/negated text still receives a nearest section. Every placement requires human review. AI cannot count pages or infer editorial intent reliably.

Explicit Load downloads ~23 MB model/tokenizer from Hugging Face/CDN plus ~27 MB same-origin WASM and bundled runtime code. No key or remote inference integration. Content never uploads or automatically saves. Imported instructions have no authority. Runtime/model/worker caches persist when storage permits. Already-open warmed-page inference with a fresh worker works offline; offline navigation/reload is NOT promised. Evicted or unavailable storage needs internet again. Desktop Chrome with WASM SIMD/module workers and several hundred MB RAM tested; physical phones, other browsers and WebGPU untested/not required. Shared byte-identical WASM is preserved at `../20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`.

## Bounds and deterministic planning

1–40 document records, 1–50 pages per document, 2–6 sections, notes/descriptions ≤300 characters, JSON source ≤40,000 characters. Import source or audit JSON ≤2 MB; audit reimport restores originals only and requires new inference/approvals. Batches four texts, 256-token model context, 180-second timeout. Cancellation terminates workers; run identities guard input/file-read/late-message races. Errors never produce canned outputs.

Sections follow parts-array order. Documents retain original order within each section. A recto section starts odd, inserting a blank if necessary. Empty sections contribute nothing. End padding completes four-page sheets. Outside-sheet-first front/back pairs are [N−2i,1+2i] / [2+2i,N−1−2i]. The original-order baseline uses identical reviewed page counts and recto rules on every section entry. Topic transitions and blank counts are descriptive comparisons, not measured reading/productivity gains or guaranteed reductions.

Single left-to-right saddle-stitched booklet only. No separate covers, multiple signatures, creep, bleed, trim or printer duplex calibration. No paper-thickness or binding-capacity validation: large mathematical maps are not evidence that a stack is physically saddle-stitchable. Fold a paper dummy and check printer orientation before production. No actual PDF or physical printer validation.

## Review and output

Correct sections/pages, edit multiline owner/notes, reject with Hold, undo edits. Any hold blocks complete pagination while preserving the audit. Pending reviews block apply. Editing invalidates exports until re-applied. JSON includes originals, all reviews, complete logical pages, placements, physical sheets and baseline. CSV lists every document and current page ranges; Sheets CSV lists numeric sheet pairs. Markdown is a source-linked production checklist, also available through clipboard. CSV formula-like text is escaped; JSON preserves exact text. Originals never change.

## Run and publish

`npm install`, `npm run dev`, `npm run predeploy`. Per-app deploy script remains contractual but must NOT publish this app alone. Use repository-root combined deployment. See VALIDATION.md and machine-readable reports for actual observed checks and device limits.
