# Wave & Phase — executed validation

Computational/browser checks only. **No physical print, real pendulum timing, string behavior, strength, stability, fatigue or adhesive test was performed.** Real timing needs empirical cord adjustment. The preview is explicitly an ideal small-angle rigid-line illustration, not a flexible-cord simulation.

## Reference evidence

- Fresh public binary reference download inspected before final geometry: White Cat Kit Card / Mike Kasberg / CC BY 4.0.
- `reference-analysis.json` and `reference-measurements.json`: SHA-256, source URL, assumed millimeters, bounds, 30,616 triangles, 27 edge-adjacent components and source defects. Local switch/link candidates independently parsed and rejected as unsuitable sheet/socket references.
- Actual Z=.10/.50/1.59 mm mesh sections saved in `evidence/reference-sections.png`; four measured 4.5 × 1.700012 mm sockets and 1.6 mm sheet map to the generator's 4.4 mm tongues and thickness-matched sockets at .10 mm total allowance. Default .15 mm is proposed, not physically proven. No raw third-party reference mesh committed.

## Geometry / assembly

Executed `npm test`, `node extreme-check.mjs`, `node hole-check.mjs`.

- `validation-report.json`: 8 built-in cases (three presets, min/max and three silhouettes), plus 8 source-derived cases (ASCII/binary STL default/transformed; raised/engraved threshold and grayscale image solids).
- `extreme-validation.json`: 15 additional mixed/min/max image-raised, image-engraved and STL-derived cases; invalid dimensions/envelopes rejected.
- Every case independently serializes and parses the connected card and all eight clean parts. Exact binary byte count, finite coordinates, nonzero faces, unit normals agreeing with winding, .00001 mm welded edges with exactly two opposite-directed incidents, positive volume per component, Euler topology, expected component count and millimeter bounds.
- CSG checks: full vertical insertion/removal of both frame tongues, two shoulder-bearing stops, eight nonintersecting assembled parts, 25 ideal phase samples, invariant-X lane gap ≥3 mm at all phases, lower/upper header clearance, ten header eyes and ten bob eyes open, disjoint flat parts, all 32 cut lines avoid functional parts, cutting produces nine components (eight parts + carrier). Card X/Y remain inside declared envelope. Thin runners are actually fused to frame and parts.
- Actual exported bob volume centroids correct the printed Assembly/ZIP starting eye-span table; ideal N+i period relation checked. This is not a claim of tuned physical oscillation.
- `hole-validation.json`: tiny Boolean probes verify central bright holes stay unraised or unengraved while adjacent dark image relief changes actual material, over continuous backing.

## Browser / actual exported files

Executed `node browser-test.cjs`, `node studio-test.cjs`, `node motion-check.cjs` against the built production bundle at its real `/daily-app2/20261030-5/` path.

- `browser-validation.json`: 31 real downloaded STL cases, including connected card and every part. Saved JSON regenerated in Node matches actual STL signature and visible current-result signature. Every tested import-derived export gets the same mesh/assembly checks as built-ins.
- Actual desktop/phone file-picker PNG, JPEG, ASCII STL and binary STL. Changed pixels, threshold/depth/crop/scale change geometry; STL XY/Z scale, rotate and placement survive export. Replace/remove/reset return to expected signature. Explicit mm checkbox gates STL integration.
- Ten malformed/unsupported fixture cases: invalid SVG, truncated/open/nonmanifold/concave STL, oversized files, fake PNG, excessive pixel count, excessive triangles and dimensions. Empty images, invalid transforms, keep-out violations and bad dimensions additionally tested. Errors disable exports and recover using reset/replace/remove.
- `studio-validation.json`: every preset; all silhouettes; text, searchable original icons and SVG; raised/engraved output; bounded image and actual mesh JSON round trips; named design save/reload; missing payload reattachment errors; undo/redo; all views; every ZIP STL parsed; numbered instructions; keyboard focus; collapsed sections; saved dark mode; reduced-motion; worker abort and reload recovery.
- `motion-validation.json`: scrub changes actual phase poses without changing fabrication signature; five length rows; impossible span/lane combination blocks export; latest rapid worker edit wins; ZIP contains current per-bob lengths and reunion table.
- Desktop 374 px left panel/right viewer; phone 390/320 px with preview first and no horizontal overflow. Real CDP touch orbit and pinch change canvas; phone imports and downloads reachable. Screenshots inspected (`desktop-validation.png`, `mobile-validation.png`, `evidence/studio-light.png`, `evidence/studio-dark.png`, `evidence/phase-view.png`). No browser runtime errors or remote API/CDN requests in the suite.

## Build / combined gallery

- `npm run predeploy`: individual production build passed; worker/WASM/fonts bundled locally. Nonfatal bundler large-chunk notice only.
- Gallery: every inline script compiled with `new Function`, script presence asserted; new entry exactly once with `area: stl`, newest first; all 277 previous entries retained unchanged. STL Generators category stays first. See `gallery-validation.json`.
- Root `npm run predeploy`: **278 built, zero failed, zero skipped**. `combined-build-validation.json` checks every registered app exists, root index matches, and all 47 new-app production files are byte-identical to individual build.
- `gallery-browser-validation.json`: combined gallery renders 278 cards without runtime errors; new link correct; app/production worker/WASM load through combined path.
- Combined import/export regression passed all 31 real download cases and ten malformed-file cases, including phone touch/import/export; recorded in `combined-browser-validation.json`. An initial test-host trailing-directory 404 was fixed by serving directory index.html; this was a local harness routing issue, not an app geometry failure.

## Reproduce

README lists commands. `serve-production.cjs` serves the app at port 5455; `gallery-browser-test.cjs` expects combined deploy at port 5456 under `/daily-app2/`. Reports and fixtures contain only synthetic/public data, not personal uploads.
