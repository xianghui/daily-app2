# Focusfield Desk

An on-device shot-list worksheet for photographers reconciling informal lens notes with a small supplied lens kit. Real semantic retrieval proposes a lens profile; mandatory human review precedes a deterministic finite-subject-band focus and aperture plan. It does not operate a camera.

## Use

1. Choose either synthetic example, paste source JSON, or import a source/full JSON audit. Set the lens kit, finite nearest/farthest subject distances and maximum permitted f-number. Examples contain invented lens references, not manufacturer specifications.
2. Explicitly select **Load AI & match lenses**. Before loading, the UI explains internet and download requirements: approximately 23 MB quantized model/tokenizer from Hugging Face/CDN plus approximately 27 MB collection-hosted CPU runtime. Download-file progress and embedding batch counts are shown. Cancellation terminates the worker/aborts pending worker-source fetch; retry is explicit.
3. Inspect source snippets, candidate descriptions and cosine similarity (not confidence). Correct each lens, focal length, circle of confusion (CoC), widest aperture, near/far subjects and multiline reviewer notes. Approve or hold every shot. A lens relink resets approval and replaces its lens parameters. Undo restores up to 40 previous review states. Original inputs remain intact.
4. **Apply reviewed scenario** creates the output snapshot. Every edit invalidates exports. A held shot is retained with no operational plan. An infeasible shot reports no listed stop under the lens and ceiling bounds; neither is silently dropped from complete audits.
5. Download complete JSON, Audit CSV, Markdown, or **Field CSV containing only feasible approved shots**. The UI explicitly shows how many shots are included. CSV escapes formula-like strings including multiline cells; genuine numbers stay numeric. JSON retains all source/review/candidate data. Clipboard copies the applied Markdown. Reimporting an audit restores originals, not approvals, for a fresh model/review pass. There are no external actions.

## Real AI

- [Xenova/all-MiniLM-L6-v2](https://huggingface.co/Xenova/all-MiniLM-L6-v2), Apache-2.0, q8 ONNX; source sentence-transformers/all-MiniLM-L6-v2.
- Transformers.js 4.3.2 / ONNX Runtime Web, one-thread WASM CPU, normalized mean-pooled 384-dimensional sentence embeddings. Supplied lens descriptions and shot notes are embedded, four texts per chunk. Count, shape, finite values and unit norms are validated before cosine ranking.
- AI provides the meaning-based initial lens link and its associated parameters. It is not a generative parser, EXIF reader, optical measurement or ordinary keyword classifier. Unknown text still has a nearest neighbor. Negation, similar lenses and numbers can mislead; review the actual lens and focal length, not merely the top score. Imported text is data and cannot grant tool authority or request credentials.
- The complete immutable shared worker protocol and runtime dependency paths were inspected. `max_length:256` in its feature-extraction call is not a guaranteed limit; the actual tokenizer truncates at its configured **512-token** limit. This app additionally restricts every neural text to 200 characters. Short English descriptions recommended.
- Reuses worker/factory from `20261115-6` and WASM from `20261107-2`; preserve those older build paths. `runtime-provenance.json` and `bundle-audit.json` give sizes/hashes. App code is locally bundled; runtime assets are same-origin, not a third-party script CDN. No server-only inference or provider integration.

## Deterministic optical contract

Source: at most 30,000 characters; title ≤100 characters; 2–8 references and 1–12 shots; unique IDs ≤40 characters; notes/descriptions ≤200 characters; import ≤8 MB. Focal length 8–300 mm, CoC 0.005–0.05 mm, finite subject bounds 0.5–500 m, far strictly greater than near. Widest aperture and ceiling must be listed stops: 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, 32. Reviewer notes ≤500 characters. These bounds and record identity/count/order are revalidated on apply. Unknown, invalid and malformed data fail visibly rather than becoming a demo result.

Distances below are mm from the **lens principal plane**, not the sensor-plane camera distance mark. For finite subject bounds a < b, harmonic focus `s = 2ab/(a+b)` equalizes the near/far blur constraints and minimizes required f-number in this thin-lens geometrical model. Continuous required f-number is `f²(b−a) / [c(2ab−f(a+b))]`. Iterate the available discrete stops at or above the lens widest f-number and at or below the supplied ceiling. Choose the smallest f-number (widest listed aperture) whose computed depth bounds contain both subjects.

`near = s f² / [f² + Nc(s−f)]`; `far = s f² / [f² − Nc(s−f)]`. Nonpositive far denominator means infinity. JSON uses `infinity:true` with `far:null` to distinguish it from unavailable results. Field CSV uses `Infinity`; other absent values are blank. UI distances are rounded to three decimal metres; exports contain full numerical results. A plan can be infeasible despite optimal focus.

Baseline independently searches the same stops at arithmetic midpoint focus `(a+b)/2`. The displayed difference is a **count of shots whose chosen f-number differs**, not a number of stops saved, model accuracy, measured quality or time savings. In the first fixture, harmonic focus covers the ridge at f/5.6 rather than arithmetic-focus f/8. This is an illustrative mathematical comparison, not camera testing.

## Limitations

CoC depends on output viewing assumptions; it is not universal sharpness. No diffraction, pupil magnification, field curvature, aberrations, sensor-resolution, focus breathing, marked-distance or autofocus calibration model. Especially poor for close-focus macro work. Distances and lens descriptions must be verified, along with real aperture availability. No infinity subject endpoints, zoom inference, focus stacking, exposure, camera control, lens purchasing or promises of sharp photographs. Check a test frame and manufacturer guidance. Tiny known-answer fixtures are not representative semantic accuracy.

## Privacy, runtime and offline scope

No user keys, telemetry, content uploads, account access or providers. Inputs/reviews live in page memory until explicitly exported; only model/runtime files are cached. External GETs download model assets; no source notes are sent in URLs or bodies. The browser suite audits requests from bundle startup and confirms no model-host traffic before explicit load. Persisted reports omit CDN signed query values. Built text assets are pattern-scanned for credentials; source/integrations are also reviewed, not treated as proved safe by a regex alone.

Current desktop Chrome/Edge with WASM SIMD, module/Blob workers and Cache API recommended; no WebGPU required. Tested desktop Chrome with GPU disabled. Other engines and physical phones are unverified. First run needs internet and sufficient RAM. Worker/runtime/model/cache errors show actionable messages; no fake fallback. Timeout is 180 seconds. Run identities protect source-fetch, worker callbacks and asynchronous imports; cancellation/input changes terminate the worker and late replies cannot replace newer results.

Cache API explicitly stores shared worker, factory and binary; Transformers.js caches model files. **Tested offline scope is real inference in a fresh worker in an already-open warmed page**. Offline navigation/reload is not supported/promised. Storage denial/eviction can require internet again. Clear site storage to clear caches (shared runtime caches also serve older collection apps).

## Develop, test and publish

React + Vite, base `/daily-app2/20261127-12/`. `npm install`, `npm run dev`, `npm run predeploy`. Required per-app gh-pages and deploy scripts remain, but publish ONLY through root `daily_app2` combined-site workflow. Root predeploy assembles gallery plus all published apps; root deploy publishes that tree. Verify matching Pages commit, exact public runtime bytes and real public inference before declaring complete. Do not modify original `/Volumes/ExternalHD/daily_app`.

See [VALIDATION.md](VALIDATION.md) for actual observed tests and limitations. Scripts: `python3 oracle-test.py`, `node core-test.mjs`, `node browser-test.cjs`, `python3 artifact-test.py local-`, `node defensive-test.cjs`, `node recovery-test.cjs`, `python3 bundle-audit.py`. `python3 serve-built.py --port 7785` serves dist at its production base with shared runtime dependencies; `--assembled --port 7786` serves the completed combined tree. Browser tests use the existing workspace Playwright package and Chrome. `APP_URL`, `GALLERY_URL` and `PREFIX` select local/assembled/public runs. No digest is sent by this builder.

