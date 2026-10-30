# Observed validation — 2026-10-30

## Reference evidence

- Actual selected public binary STL downloaded; SHA-256,30,616 triangles,179.820×178.020×3.190mm,27 edge-adjacent components and source defects recorded.
- Actual local clicker-template and diamond-link meshes parsed before final selection; rejected as unsuitable sheet-kit references.
- Three measured cross-sections inspected; four4.5×1.700012mm socket loops and1.6mm sheet mapped to end-key parameters. Raw third-party model is not bundled.
- CC BY4.0 author/source attribution and licence retained. Computational geometry checks are explicitly separate from physical tests.

## Pure geometry / real binary STL

`npm test` passed **34 built-in cases +8 import cases**, including every preset, simultaneous minimum/maximum settings, all three silhouettes, every single-field minimum/maximum, threshold/grayscale art and both STL formats with changed transforms.

For each: ten STL outputs (connected card plus nine parts) independently parsed; exact binary length, nonempty finite/nondegenerate triangles, unit stored normals matching winding, welded1e-5mm edges with exactly two oppositely-directed incidents, positive volume per connected component, and expected mm bounds verified. Connected-card has one solid. Thirty-two safe cutter paths release nine parts plus a connected waste carrier. Plate parts do not intersect.

Mechanism tests:36 assembled part pairs; five blades through13 stroke samples at both lateral and vertical clearance extremes (260moving poses per case), ten positive overtravel stops, five lift stops,104assembly insertion poses, pin engagement at maximum lift, minimum backing, per-part print-bed cross-section support. Tests use real Boolean intersections, not bounding-box assertions alone. Fixed end-key seats are disclosed as adhesive-required; moving parts stay separate.

## Browser / production assets

`browser-test.cjs` passed with **32 actual downloaded STLs**, including PNG/JPEG, ASCII/binary STL, image pixel/threshold/depth/crop/scale edits, STL scaling/rotation/placement, remove/reset, min/max and every individual part. Each current-preview fingerprint matched the actual downloaded bytes and independent Node regeneration from portable JSON. Resulting image/STL models also passed manifold and mechanism validation.

Ten invalid file cases rejected with disabled export and usable recovery: invalid SVG, truncated STL, open STL, nonmanifold STL,2MB excess, false PNG content, excessive pixel header, triangle limit, huge dimensions and concave solid. Empty images, invalid dimensions, empty transforms and protected-zone violations also rejected. Original concavity is never replaced with a hull.

`studio-test.cjs` passed: three real presets/thumbnails; silhouette changes; text/icons/SVG change output; imported image/mesh JSON round trips; local named designs survive reload; missing payload blocked; undo/redo; all views; Everything ZIP with every STL independently parsed and numbered notes; saved dark theme; keyboard focus; collapsible sections; reduced-motion; desktop374px left panel;320px preview-first stack; intentionally blocked worker and reload recovery.

`axis-test.cjs` passed real Y-up and negative-Z source imports; oriented outputs match Z-up output exactly. Changing axis clears source and requires attachment. `hole-check.mjs` probes actual Boolean solids: white image center unengraved, dark annulus recessed, continuous backing preserved.

Phone contexts320/390px: no horizontal overflow, reachable exports, PNG/STL file-picker imports/downloads, actual CDP touch orbit and pinch verified by changed canvas screenshots. No browser runtime errors or nonlocal requests. Synthetic fixtures only.

## Build / gallery / combined output

- Individual `npm run predeploy` passed with locally bundled worker/WASM/fonts.
- Gallery inline script compiled with `new Function`; exactly one newest STL entry; all301older entries exactly preserved; STL category first and maker-focused tagline retained.
- Root `npm run predeploy`:302built,0failed,0skipped. Every gallery folder exists in `deploy/`; root index matches;43new-app production files hash-match individual `dist/`.
- Combined gallery browser loads all302cards and correct newest route with working production worker/WASM. Full import/download suite rerun against the combined deployment before publication.

Reports: `validation-report.json`, `browser-validation.json`, `studio-validation.json`, `axis-validation.json`, `hole-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`, `combined-build-validation.json`, `combined-browser-validation.json`. Screenshots in `evidence/`, `desktop-validation.png`, `mobile-validation.png`.

**Not performed:** physical printing, physical assembly/fit, glue strength, force, wear/fatigue, contour transfer or measurement accuracy. This kit has no clamp and requires the user to hold blade positions. Geometric clearance/capture tests are not physical certification.
