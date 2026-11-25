# Allset Desk

A no-key supplier-capability evidence worksheet for sourcing coordinators. Rough evidence notes do not use the requirement dictionary, and duplicate notes can make a count-only shortlist look complete. Local AI proposes semantic links; mandatory human review and deterministic relational-division/set-inclusion checks produce missing-capability follow-ups. No supplier is contacted and no purchasing or certification decision is automated.

## Workflow

1. Choose either synthetic example, paste source JSON, or import `.json`.
2. Explicitly load AI. The real model embeds capability definitions and evidence notes, then ranks normalized cosine similarity. No canned responses, keyword classifier, remote inference, API key or server.
3. Verify every link, supplier and affirmative evidence claim; edit the capability/supplier, add a multiline note, approve or hold/reject. Split multi-capability source notes into separate records before running. Select the capabilities required of **every** supplier. Undo restores up to 100 review/goal edits.
4. Apply the current review. Every selected requirement must have at least one approved evidence note for that supplier. Duplicates never replace missing requirements. Holds do not establish coverage. Suppliers with missing coverage and held notes are unresolved; otherwise they are missing. A complete approved set is covered even if unrelated holds remain visible. Empty required sets block all suppliers as empty-scope, rather than vacuous approval. A supplier with no notes remains in the worksheet.
5. Download current JSON, complete CSV, all-supplier follow-up CSV or plain-text Markdown; copy the Markdown worksheet. Review/goal edits invalidate export snapshots. JSON audit reimport restores original source for fresh inference, never prior approvals.

## Real model, runtime and download

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX, normalized mean-pooled 384-dimensional sentence embeddings.
- Transformers.js 4.3.2 / ONNX Runtime Web; single-thread WASM CPU, not a WebGPU-only app. Tested current desktop Chrome with GPU disabled. Requires WebAssembly SIMD, module workers, memory, initially internet. Physical phones/other engines are not verified.
- Approximately **50 MB initial download**: 23 MB weights and 27 MB WASM, plus JS/tokenizer. Download and inference progress, cancel/retry, visible errors and a 180-second timeout. No model requests before explicit loading.
- Immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`; factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`; WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve these originating apps in the collection. Hashes/byte counts are in `runtime-provenance.json`. Reuse avoids duplicating 27 MB of runtime.
- Four-text chunks; at most 32 texts/eight batches. Texts ≤200 characters. Shared feature-extraction worker passes max_length 256, but actual token truncation uses tokenizer model_max_length 512, not an independently enforced 256 cap. Unusual strings can truncate. Model revision is not pinned.

## Privacy and cache scope

User content remains in the page and local worker. Only GET model/tokenizer/runtime downloads go to the same origin and Hugging Face/CDN; no note text in URLs/bodies, uploads, telemetry, provider integration or credentials. Imported strings are data, not executable instructions/HTML or tool authority. Downloading weights is distinct from sending content.

Cache API retains worker/runtime/model assets where allowed. Tested offline scope: **real inference in a fresh worker in an already-open warmed page with browser networking disabled**. No promise of offline navigation/reload/app-shell startup; cache eviction, private mode or denied storage can require downloading again. Cancel aborts worker fetch and terminates inference; run IDs and import IDs prevent late callbacks/read completions from replacing current work. Runtime/download/malformed-vector failures never fall back to fabricated outputs.

## Input contract

Source `{title, capabilities, suppliers, evidence}`.

- Capability `{id, description, required}`; `required` must be Boolean. 2–8 definitions. Distinct IDs are treated as distinct requirements even if descriptions overlap; curator must make a useful taxonomy.
- Supplier `{id, name}`; 1–8 suppliers. Names/IDs are supplied, not AI-inferred.
- Evidence `{id, supplier, context}`; 1–24 notes, referencing a supplied supplier. One short affirmative capability per note. This is pasted manifest evidence, not PDF ingestion or document authenticity validation.
- IDs unique within each list, ≤60 ASCII letters/digits/_/-. Title/description/name/context ≤200 characters. Notes ≤500. Source ≤120,000 characters; audit imports ≤1.5 MB. Unknown fields, bad types, missing references, malformed JSON, unsupported files and out-of-bounds batches fail visibly.

## Output and comparison

JSON is the canonical lossless original/review/required-set/evidence/witness export. Complete CSV has one row per original capability, supplier and evidence record, original and reviewed supplier IDs, current required flags, decisions and multiline notes. JSON additionally preserves original required flags and complete ranked evidence. Follow-up CSV contains **all suppliers**, including covered, missing, unresolved and empty-scope cases. Markdown contains all evidence notes and source-linked missing witnesses. CSV quotes commas, quotes and line breaks; formula-like text is apostrophe-prefixed, including multiline strings. Markdown is plain text, not sanitized HTML for publishing.

Baseline: count approved notes assigned to required capabilities and pass if count ≥ requirement count. It deliberately ignores duplicate identities. Reviewed method: for each required ID, require at least one approved matching note. False-pass count is computed from this difference, not an accuracy or time-saving claim. Changing required flags changes both methods fairly. Zero requirements never pass either.

## Observed quality and limitations

Real AI matched **12/12** intended capability links across two synthetic workflows, versus **5/12** for always choosing the first dictionary capability. Each fixture has one genuinely covered supplier and one duplicate-count false pass; the print fixture also preserves a no-evidence supplier. These tiny synthetic checks are not representative accuracy.

Separate challenge: courier paraphrase matched delivery; a negated recycling statement still matched recycling, an unrelated violin repair statement also matched recycling, and a two-capability note only received printing. MiniLM always returns a nearest candidate; it does not understand affirmative proof reliably, reject out-of-domain input, certify suppliers, detect false claims or represent multiple capabilities per note. Hold negatives/unrelated/uncertain notes and split multi-capability notes. Human review is essential; similarity is not confidence.

The deterministic coverage checks matched an independent SQLite relational-division query on **250 random duplicate-bearing cases**, including explicit empty-scope guards. This validates set logic, not truth of evidence or business suitability.

## Build and verification

`npm install`; `npm run dev`; `npm run predeploy`. React + Vite base `/daily-app2/20261125-22/`. Required per-app `predeploy: npm run build`, `deploy: gh-pages -d dist`, and gh-pages dependency retained. Publish only through the collection **root** combined deployment, never individual deploy.

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. Real production browser runs, independently parsed downloaded artifacts, defensive fault injection, offline fresh-worker inference, network audit, desktop/narrow screenshots and shared asset hashes are checked. Untested: physical phones, other engines, cold offline startup, representative matching accuracy, real supplier authenticity/legal/commercial decisions.
