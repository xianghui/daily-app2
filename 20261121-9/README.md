# Pinpoint Commons

A local-AI direct-requirement compatibility desk for Python notebook maintainers and release coordinators. Informal team package descriptions are reconciled into reviewed identities and numeric version constraints, then checked against a user-supplied finite release catalog. No packages are installed or fetched.

## Workflow
1. Choose **Notebook teams** or **Web tooling** (synthetic), paste JSON, or import source/audit `.json`.
2. Define package descriptions, verified candidate versions and requirement bounds. Set `policy` to `newest` or `oldest` in the source.
3. Explicitly **Load AI & reconcile**. Real local embeddings suggest package identities from paraphrased notes. Review each source, ranked cosine evidence and the original bounds. Edit the package/bounds, add a multiline owner/evidence note, then approve or hold every requirement.
4. **Apply reviewed requirements**. Inspect common bounds, every candidate's failing requirement IDs, and conflicting bound witnesses. A nonempty interval without a supplied candidate is distinguished from an empty interval.
5. Export complete JSON, Audit CSV, Package CSV or Markdown; copy the worksheet. A `.txt` direct pin draft becomes available only when all records are approved and all catalog packages have a satisfying candidate. Any hold, uncovered package or conflict blocks it. Later review edits invalidate the applied snapshot and exports until reapplied; undo restores reviews, never changes original inputs. Audit import restores originals only and renews review.

## Real AI / runtime / licenses
- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, quantized q8 ONNX, normalized mean-pooled 384-D embeddings. Uses unpinned `main`; observed revision is recorded in `runtime-dependency-audit.json`.
- Transformers.js 4.3.2 (Apache-2.0), ONNX Runtime Web (MIT), single-thread WASM CPU. No WebGPU, server, API key, paid service or remote-provider option. React + Vite static GitHub Pages app.
- AI performs semantic package-identity proposals, not extraction of version bounds or proof of compatibility. Deterministic code validates schemas/vectors, ranks cosine similarity, intersects bounds, checks candidates, enforces review gates and exports. Imported strings cannot change authority or request credentials. No hardcoded model responses or fake fallback.
- Reuses inspected immutable same-origin worker `/daily-app2/20261115-6/assets/ai.worker-lkOoPoq8.js`, factory `/daily-app2/20261115-6/runtime/ort-wasm-simd-threaded.asyncify.mjs` and WASM `/daily-app2/20261107-2/assets/ort-wasm-simd-threaded.asyncify-CxOG5pUO.wasm`. Preserve the originating apps and complete dependency paths. Protocol `{id,texts}` returns progress, batch counts, vectors or explicit errors. SHA-256 and byte sizes in runtime audit.
- Before explicit loading the UI discloses ~23 MB model/tokenizer plus ~27 MB runtime and ~0.6 MB worker/factory. First use needs internet to this site and Hugging Face/CDN. Per-file model download progress and four-text chunk progress are visible. Cancel terminates the worker; a 180-second timeout and explicit retry are provided.

## Privacy, devices and tested offline scope
User content goes only to a local browser worker. Asset downloads are not content uploads. There are no remote inference requests, telemetry, shared keys, credential fields, accounts or external actions. Sources and review state remain in memory; exports include originals and should be handled accordingly. Network audits retain only hosts, paths and query-key names, never temporary signed values.

Modern secure-context browser with module workers, WebAssembly SIMD, Cache API and several hundred MB free RAM. CPU is the real default, not an untested fallback. Desktop Chrome with GPU disabled tested; 320/390/1440 browser widths tested, not physical phones, all assistive technology or other engines. Unsupported runtime/network/model errors give actionable messages without fabricated output.

Cache API stores worker/factory/WASM and Transformers model files. An already-open warmed page was tested fully offline with a fresh worker and real inference. Offline page reload/navigation is **not promised**. Eviction/private mode may require redownload. No service worker app-shell claim.

## Format and bounds
Source JSON 1–60,000 characters; `.json` import ≤2,000,000 bytes permits larger audit envelopes while separately validating original-source size. Fields:
- `context`: nonempty ≤300 characters; `policy`: `newest` or `oldest`.
- `packages`: 2–12 `{id,text,versions}`. ID lowercase letter-first ASCII letters/digits with single interior hyphens, ≤40 characters; description ≤300. 1–30 unique candidate version strings each.
- `records`: 1–48 `{id,text,lower,upper}`. Unique letter-first ASCII letters/digits/underscore/hyphen ID ≤40; text ≤300. `lower` is inclusive, `upper` exclusive, strictly increasing.
- Versions are **numeric three-part major.minor.patch only**, each integer 0–99999, no leading zeros. Comparisons use numeric tuples, not lexicographic strings. No PEP 440 prereleases, epochs, post/dev/local versions, extras, markers, URLs or version expressions. Model text bounded independently; tokenizer ceiling 512 tokens (the feature-extraction pipeline ignores per-call `max_length:256`, so that is not an enforced cap).
- At most 60 model texts / 15 four-text chunks. Finite normalized 384-D vector shape/count validated. Review notes ≤1,000 characters. IDs and all original records preserved in order. Monotonic run identities guard worker fetch, file reads, late responses and input changes; stale/cancelled runs cannot replace newer output.

## Deterministic checks and comparisons
For each package, intersect every approved lower/upper bound. Filter supplied candidate versions; select the newest/oldest numeric tuple allowed by policy. Every rejected candidate lists all failed requirement IDs. If max(lower) ≥ min(upper), report an empty intersection with the two extremal source IDs as witnesses. If the interval exists but lacks supplied candidates, report a catalog gap, not impossibility. No approved requirements means uncovered, not vacuous success.

The baseline blindly takes the newest supplied candidate for each package. Display baseline versus reviewed counts satisfying all approved direct requirements, never a measured speed/accuracy improvement. These counts do not establish cross-package compatibility. The separate first-package semantic baseline is also labeled as differing links, not accuracy. Actual known-answer outcomes are in `VALIDATION.md`.

## Artifacts
- `pinpoint-commons/v1` JSON: exact originals, every review/hold and neural evidence, all package candidates/conflicts and computed comparisons.
- Audit CSV: every original and reviewed requirement, source bounds, multiline notes and neural evidence.
- Package CSV: all catalog packages, chosen/allowed versions, intersection, requirement/conflict witnesses and newest-baseline violations.
- Markdown: complete source-linked owner recheck worksheet; clipboard copies the same current artifact.
- Pin draft TXT: valid `distribution==major.minor.patch` direct requirement lines with comment warnings. Not a full lockfile; no transitive closure or hashes. Disabled unless complete and reviewed.

CSV quotes commas/newlines and doubles embedded quotes. Formula-like string prefixes are apostrophe-escaped; JSON retains exact strings. Exports reflect the applied current review only. Independent parsing verifies reviewed bounds, all records and pins; an audit can be reimported to restore originals.

## Limitations
This is not a dependency resolver, lockfile, vulnerability audit or installation guarantee. Catalog releases and constraints are user-supplied, unverified, and may not exist. No transitive dependencies, Python/platform compatibility or security checks. AI can confuse negated or mixed-topic notes; similarity is not confidence or identity proof. Hold ambiguity and reconcile with owners. Validate the draft with a real resolver in an isolated environment before use. Nothing is installed and no environment is changed.

## Build and publishing
`npm install`; `npm run predeploy`. Vite base `/daily-app2/20261121-9/`. Required per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. **Only publish through the repository root combined workflow**; individual deployment would replace the collection. Validation scripts use the workspace Playwright installation and system Chrome, not a shipped dependency. See machine reports and `VALIDATION.md` for observed checks and untested scope.
