# License Fork

A local-first **license-option worksheet for release maintainers**. Combine package distribution notes with a bounded SPDX expression, use real MiniLM retrieval to propose an organization-supplied distribution policy, review each link, and export complete audit records plus allowed-branch checklists. Unlike a flat blacklist, `MIT OR GPL-3.0-only` offers a complete MIT alternative; `MIT AND GPL-3.0-only` requires both.

This applies **user-supplied allowlists**, not legal compatibility rules. Synthetic policies are illustrative, including a deliberately restrictive firmware allowlist. Checklist prompts are incomplete operational reminders, not authoritative license obligations, legal advice or a release certification. Verify actual license text, provenance, modifications and distribution duties with an appropriate maintainer. The app does not scan source code or repositories.

## Workflow and formats

1. Choose either synthetic fixture, paste JSON or import source/audit `.json` ≤1 MB. Schema: `{plans:[{id,description,allowed:[licenseId]}],records:[{id,context,raw}]}`. Edit the descriptions and allowlists to reflect the intended distribution process. Nothing is inferred before explicit loading.
2. Click **Load AI & reconcile**. MiniLM embeds policy descriptions and release-context notes, then ranks policies by cosine similarity. The raw SPDX expression is not sent to the embedding model. Inspect the original context, expression, editable policy and ranked similarity evidence. Similarity is not confidence or compatibility.
3. Edit policy, multiline expression and notes, approve or hold every package. Policy/expression edits reset approval; every edit invalidates exports. Undo restores up to 100 review snapshots. Originals remain intact in page memory. No external actions occur.
4. **Apply reviewed scenario** parses each approved expression, enumerates complete alternatives, filters by the reviewed allowlist and selects the branch with the fewest distinct illustrative checklist prompts (lexical tie-break). Hold and invalid/disallowed expressions cannot enter the release artifact. To prefer another permitted branch, explicitly edit the reviewed expression to that branch, then approve again; the original expression remains in the audit.
5. Download complete JSON/CSV/Markdown audits or ready-only Release JSON. Copy Markdown also works in secure contexts. Any subsequent review edit disables downloads until reapplication. Audit reimport restores originals only and requires new inference/review. CSV is an audit worksheet, not an import format; formula-leading strings receive an apostrophe, while JSON preserves exact text.

### Supported expression subset and limits

- Exact identifiers: `MIT`, `BSD-3-Clause`, `Apache-2.0`, `GPL-3.0-only`.
- Uppercase `AND`, `OR`, parentheses and whitespace. AND takes precedence. Duplicate identifiers within a branch collapse; OR duplicates collapse. This is **not a full SPDX parser**: no `WITH`, exceptions, `LicenseRef`, plus suffixes, versions/ranges or arbitrary licenses.
- Expression ≤300 characters, ≤48 tokens and ≤256 intermediate enumerated branches. Unsupported tokens, missing operands/operators and unbalanced parentheses fail closed with a specific reason. There is no automatic expression repair.
- 2–5 policies; unique IDs ≤60, descriptions ≤200, 1–4 unique allowed catalog IDs. 1–24 packages; unique IDs ≤80, context ≤200, raw expressions ≤300. Source JSON ≤50,000 characters. Review notes ≤2,000 characters. Imports ≤1 MB, with extracted originals still subject to source bounds.
- Shared checklist catalog is illustrative and fixed in `src/core.js`; it does not claim comprehensive obligations. Every source record, held item and blocker survives audits; release JSON contains only ready records and explicitly carries the policy/checklist limitation.

## Real model, runtime, privacy and device requirements

[Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; Transformers.js **4.3.2** (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. Normalized mean-pooled **384-dimensional** embeddings drive nearest-description retrieval. The app validates count, dimension, finite values and approximately unit norms before proposing anything. Four texts per chunk. The worker supplies `max_length:256`, but actual feature-extraction tokenizer cap is **512 tokens**; application texts are bounded to 200 characters. No hard-coded model responses, fake demo inference or deterministic fallback.

First run requires internet and approximately **23 MB model + 27 MB WASM**, plus code/tokenizer assets. The UI shows this before loading and exposes model-file progress, batch progress, cancellation and a 180-second timeout. Current desktop Chrome with module workers, WebAssembly SIMD and several hundred MB free RAM recommended. WASM CPU is the actual tested default, not an untested WebGPU fallback. No WebGPU required. Physical phones, other engines and low-memory devices are untested. Unsupported runtime, model/network failure or malformed vectors produce errors and no fabricated suggestions; retry explicitly.

Content and reviews stay in page memory and explicit local exports. No remote inference, API key, credentials, analytics or source storage. External requests download public weights/tokenizer from Hugging Face/CDNs; user content is not in URLs or request bodies. Imported text is data, not instructions or tool authority. Both tiny fixtures matched all six intended policy links. A competing-negation probe misrouted to closed instead of source; AI can misroute ambiguous, unfamiliar or negated notes, even when cosine scores look close. Review every policy. Model `main` revision is unpinned, so upstream updates can change results.

### Shared static assets and offline scope

Preserved immutable same-origin dependencies:

- `20261115-6/assets/ai.worker-lkOoPoq8.js`
- `20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs`
- `20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`

Byte sizes/hashes are in `runtime-provenance.json`. Reusing this existing worker avoids another 27 MB duplicate in a near-limit collection. Its protocol accepts `{id,texts}`, emits progress/batch messages and returns `{id,type:'result',vectors}`. Preserve the originating app builds and paths. The worker cache/runtime absolute paths remain valid when loaded via a cached blob URL. Cache API stores worker/factory/WASM; Transformers.js caches downloaded model assets.

Tested offline scope: **fresh-worker real inference in an already-open, successfully warmed page**, not cold offline navigation/reload. Caches may be evicted or unavailable in private/restricted mode; another download may be needed. Cancellation terminates workers and run identities guard pending fetches/file reads plus late messages. The app shell does not have a service worker or claim cold offline startup.

## Honest comparison

The flat blacklist baseline rejects if any identifier anywhere in the expression is disallowed, ignoring OR. The worksheet reports false baseline blocks among valid approved packages that have a complete allowed branch. It separately counts held/blocked records and selected checklist prompts. These are deterministic counts under reviewed supplied policies, **not model confidence, universal accuracy or measured time saved**. AND parsing, allowlist checking, branch enumeration, minimization and exports are deterministic; AI only resolves the release-context policy link.

## Development and deployment

`npm install`, `npm run dev`, `npm run predeploy`. React + Vite; base `/daily-app2/20261124-8/`. Required per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` are retained, but publish **only through the repository root combined-site workflow**. See [VALIDATION.md](VALIDATION.md) for observed results, defenses and limitations. All fixtures are synthetic; no optional provider integration or shared credentials.

Collection size: the unchanged 1,000,000,000-byte guard requires extending existing deploy-only, byte-identical geometry WASM reuse to `20261029-33` → `20261028-24`. Source builds and legacy JS URLs remain intact; affected older app imports/exports and public asset bytes are rechecked before completion.


## License Fork — 20261124-8

Real local MiniLM reconciles mixed distribution notes to supplied policies before mandatory review. Bounded SPDX AND/OR parsing keeps complete alternatives, exposes flat-blacklist false blocks and exports reviewed branch/checklist JSON plus complete JSON/CSV/Markdown. Both tiny fixtures matched 6/6 intended policy links; a competing-negation probe misrouted, so review is essential. This applies organization allowlists and illustrative prompts, not legal compatibility or complete license obligations. Shared worker/factory from `20261115-6`, WASM from `20261107-2`; offline scope is fresh-worker inference in an already-open warmed page. See [workflow/privacy](20261124-8/README.md) and [observed validation](20261124-8/VALIDATION.md). To retain the unchanged size guard, byte-identical deploy-only geometry sharing now includes `20261029-33` → `20261028-24`; source builds/compatibility URLs remain intact and actual legacy imports/exports were rechecked. No digest sent.

Public release verified: Pages `72cdf7e411d51c1c20b1208debc83860fa7b4170` and workflow `45286230849` succeeded. Nine exact public asset matches, both real-AI fixtures, complete review/export/24-row/offline/privacy/phone checks, independently parsed public downloads, all 837 gallery cards and the affected older app's public geometry/import/export regression passed. Combined size 999,556,937 bytes remains under the unchanged guard. The negation challenge still misrouted and is documented. Source staging excludes unrelated pre-existing work. No digest sent.
