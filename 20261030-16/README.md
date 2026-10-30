# Prism & Repeat — Mirror Kit Studio

A **five-part parametric flat-pack kit-card generator**. Snip twenty runners, line three wall panels with flexible mirror film, stand them in a triangular near frame and lower a matching far frame. Twelve calibrated sheet joints require adhesive. Look through the open triangular aperture toward coloured paper and gently turn the entire tube. It is an open mirror tunnel, **not** a bead-filled rotating-chamber kaleidoscope. Optical performance is not simulated or physically tested.

## Reference-first evidence

Local STL collections were searched first. The keycap template and fabric link were parsed and rejected for this sheet assembly (source hashes, dimensions and reasons in `reference-measurements.json`). Their project READMEs were read, with all reference trees read-only. A public sheet kit was downloaded and parsed before the new geometry was finalized:

**White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. License and fetched README are retained. Raw source STL and ship outlines are **not** redistributed.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, **30,616 triangles; 179.820 × 178.020 × 3.190 mm; 27 edge-adjacent components; not watertight**. Source defects are documented, not silently repaired.
- Three measured mesh sections at Z=.10/.50/1.59 are in `evidence/reference-sections.png`. Sheet planes at 0/1.6 mm; four socket loops **4.5 × 1.700012 mm**; low carrier features .21/.22 mm. Millimeters are an explicit assumption; STL has no units.
- All twelve new tongues preserve **1.6 mm thickness**. Socket law `(tongueWidth + total allowance) × (1.6 + total allowance)` reproduces 4.5 × 1.7 mm at 4.4/.10. Default .15 mm allowance is **proposed**, printer-dependent, not a measured universal clearance.
- Original triangular frames, longitudinal walls, twenty accessible runners, corner clearances and mirror-film envelopes replace the source assembly. Runners are deliberately strengthened to .4–.6 mm and panels to 2–2.8 mm. No convex-hull reconstruction or source outlines are used.

`reference-inspect.py` reparses separately downloaded `/tmp/prism-reference.stl` with `/tmp/kit-analysis-venv/bin/python` (trimesh/numpy/matplotlib). `reference-analysis.json` distinguishes measurements, new formulas and proposed fits. No physical print or optical-performance claim follows from mesh inspection.

### Studio interaction reference

Read-only inspection of `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Applied concrete patterns: **374 px left control panel**, compact sticky theme/brand header, collapsible sections, slider/numeric mm pairs, pressed tactile key controls, coral #e2557a, lavender-grey #e7e9f1, white panels, dark ink #1f2233, bundled Fredoka/Rubik, saved dark theme, image checkerboard, original STL preview with explicit units, named local designs and current-result export gating. Phones put preview, dimensions, feedback and export **before** the controls. No source Git history, source meshes or dependency trees were copied. Original local studio/import helpers were reused; triangular tunnel geometry, frame/socket transforms, film and assembly tests are new.

## Run / dependencies

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs
# another terminal:
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node preview-test.cjs
```

Production base `/daily-app2/20261030-16/`; production test URL `http://127.0.0.1:5496/daily-app2/20261030-16/`. Required scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publication uses ROOT combined `deploy/`, not per-app deployment.

React + Vite, Three.js, Manifold WASM, fflate, bundled Fontsource Fredoka/Rubik, Playwright. Generation and export are entirely local browser operations. No server/API/key/paid service/CDN dependency. Libraries MIT/Apache-2.0, fonts SIL OFL 1.1; six bundled original SVG marks and original synthetic sample fixtures.

## Parameters / assembly geometry

All dimensions **mm**, rotation controls explicitly degrees. UI displays actual selected printable STL bounds.

| Control | Range |
|---|---|
| Card width / height | 240–280 / 160–185 |
| Triangle side / tunnel length | 38–46 / 60–84 |
| Panel thickness | 2–2.8 |
| Tongue width / thickness | 4.4–6 / fixed measured 1.6 |
| Socket total allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Three real presets: Pocket Prism, Studio Mirror, Long Repeat, with model thumbnails. Soft/broad/fine bevels change actual wall silhouettes. Bounded variation, reset, 35-state undo/redo, six local named designs and portable JSON. No imported source file is falsely restored from a path: bounded assets travel in the JSON or missing payloads request reattachment.

Default **250 × 170 × 2.4 mm** connected card has five removable pieces, internal carrier rails and **twenty real runners**. Twenty safe cuts produce six components: five parts plus carrier. Layout stays within its envelope with no unintended overlaps. Impossible values disable exports. Clean part downloads are actual de-tabbed solids, not the connected card with labels.

Triangle wall centerline radius `R = side/(2√3)`. Panel width `side−6` leaves intentional corner gaps. Three radial normals 120° apart create nominal 60° inner reflecting planes. Bed face of each wall lies at radius `R−.8`; the 1.6 mm tongues center exactly on tangential frame sockets. Lower frame Z=0..H; wall shoulders Z=H; far frame Z=L+H..L+2H. Panel engraving is on the outside, not beneath the reflective film.

Cut three flexible mirror-film strips **(side−10) × (length−4) mm**, ≤.2 mm thick. They attach to smooth bed faces, leaving 2 mm margins. All twelve tongues require suitable adhesive after dry fit; do not claim positive mechanical capture or universal press fit. Film and adhesive are explicit external consumables. No glass, metal hardware, magnets or loose beads required. Never view the sun or intense light.

Assembled, exploded, connected-card, loose and isolated views use the same solids with exact right-handed transforms. Film reflections are not ray-traced; no decorative fake motion. See `src/geometry.js` printNotes / exported ASSEMBLY.txt for numbered printing, film placement, bottom joints, top frame, bonding and use instructions.

## Image / SVG / text / icon workflow

Phone/desktop file picker and drag/drop; **PNG/JPEG/simple SVG**. Try `mark.png`, `waves.jpg`, `ring.svg` without private uploads. Content/signature checks before decoding: 16 bytes–2 MB, ≤12 megapixels, ≤6,000 px per side, normalized to ≤500 px. SVG supports ≤2,000 simple vector elements, rasterized to 256 px; active/external resources, text and effects are rejected with flattening guidance.

Light/dark background removal/inversion, fit or cover crop and ±25% pan feed a **20×20 luminance-height grid**. Threshold 1–254 creates a sampled silhouette relief, or grayscale creates variable depth. A closed triangulated tool is Boolean-subtracted from the outward marked wall. This is **2D-to-relief, not full 3D reconstruction from a photo or exact vector tracing**. Checkerboard shows the actual foreground grid. White holes remain unengraved with continuous backing; direct solid probes verify them. A nozzle and the sampling grid limit small text.

Physical footprint 4–7 mm, depth .4–.6 mm, rotation ±180°, X±1.5/Y±2 mm. Protected circular landing radius 6.5 mm centered at local X=0/Y=7; at least 1.4 mm backing. Empty foreground and unsafe transforms block export. Eight-character text and six searchable icons feed the same geometry. Raised marks are intentionally unsupported to retain smooth flat panel geometry. Replace/remove/reset work; preview colours are not stored in STL.

## STL workflow

**ASCII/binary STL**, 16 bytes–2 MB, ≤1,500 triangles, each source axis .2–250 mm. Original synthetic `wedge-ascii.stl` and `gem-binary.stl`. Source preview, format/count/dimensions; **explicit millimeter confirmation**, because STL has no units. Z, Y or −Z up selected before attachment; changing up axis clears source and requests reattachment. Proportional XY fit to 4–7 mm, independent depth .4–.6 mm, rotate/place/reset. Original source vertices become an **exact Boolean cavity in the marked wall**, not an unchanged re-export or texture.

Bounded supported contract: **one outward-wound closed convex solid with broad flat bottom and no unsupported overhang**. Validate binary length/ASCII facets, finite coordinates, triangles/size/dimensions, welded 1e−5 mm edges, opposite winding, positive volume, one component, self-intersections, convexity and bed support. Concave, hollow, disconnected, open, nonmanifold or unsupported geometry is **explicitly rejected**, not repaired by assertion. A 2D hull only validates footprint support and containment; it never replaces the input mesh or fills its concavities. Same final-mesh and assembly checks apply to imported outputs.

## Worker / current-result exports / privacy

Debounced worker owns Manifold WASM and heavy CSG. Bounded complexity, request IDs and exact parameter/source/transform keys prevent stale results. Pending/invalid/failed imports and worker failures disable all STL/ZIP actions. Last-good preview is clearly labelled and cannot silently export. Preview, current signature, binary-STL serializer and JSON-regenerated geometry use the identical current valid model.

Prominent connected-card STL, all five per-part buttons, **Everything ZIP containing six real binary STLs plus numbered ASSEMBLY.txt/current fits**. Every export bed-flat Z=0, no assembled shell overlap; no fake 3MF or colour claim. Personal files process locally, never uploaded, bundled in the repo or sent to external services. JSON ≤2 MB contains normalized image/original indexed source payloads, revalidated on restoration. Named saves are bounded to six.

## Validation / limits

`validate.mjs`, `validation-report.json`: 28 built-in cases (three presets, three bevels, coordinated extrema, independent field extrema), eight image/STL cases; `import-extremes.mjs` adds six imported coordinated extrema. Each actual float32 STL independently checked for exact binary length, finite vertices, nondegenerate faces, unit winding-consistent normals, expected mm bounds, welded edges with exactly two opposite-directed triangles, component-wise positive volume, Euler characteristic and bed alignment. Every printable part validated separately.

Independent Manifold tests check every assembled part pair, full wall insertion and far-frame seating, twelve actual socket gauges, six shoulder stops, mirror-film vs solid/film clearance, frame angles, no flat part overlaps, twenty safe snips releasing five parts plus carrier, and 48 support cross-section samples. Support containment allows a **.00002 mm** outward footprint margin solely for float32 coordinate noise, not printable overhang allowance. A first test exposed sub-micron cross-section noise; this explicit tolerance avoids falsely classifying it as physical unsupported area.

Browser scripts use the **production base path** and actual file pickers/downloaded bytes. PNG/JPEG/ASCII/binary imports, changed threshold/depth/pixels/crop/scale/rotation/placement, remove/reset recovery, all presets, bevels, text/icons/SVG, portable image/mesh JSON, named save reload, missing payload feedback, undo/redo, all views, theme/focus/collapses, worker abort/recovery, per-part STLs and extracted ZIP validation. Downloads compare to exact current preview signature and independently regenerated JSON model. 320/390 px touch contexts check orbit/pinch, preview-first ordering, imports, export reachability and no overflow. Reports/screenshots record performed results.

Geometry and assembly checks are **not physical print, adhesive strength, optical alignment/brightness or safety certification**. Film quality and seams govern visible patterns; printer/material calibration remains necessary. No physical test was performed.
