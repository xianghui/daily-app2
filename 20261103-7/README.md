# Tusi & Roll

A browser-local **three-part flat-pack kit-card generator**. Snip twelve real runners, assemble an upright circular guide on a socketed deck, and roll a half-radius disc inside it by hand. Its engraved radial witness identifies a rim point which, in the mathematical no-slip model, follows a straight diameter (the Tusi couple). This is distinct from a retained race, straight-rail roller, or gear/axle mechanism: **no gearing, axle, captive retention or precision path enforcement is supplied**. Hold the loose roller coplanar; it can fall sideways. Adhesive may be required for the fixed stand feet. No physical print, operation, friction or path-straightness test has been performed.

## Run and checks

Node22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app `deploy` is `gh-pages -d dist`; public publication uses the ROOT combined deploy flow. Vite base `/daily-app2/20261103-7/`. `python3 serve.py --port 5758` serves the production build at that prefix. `node browser-test.cjs`, `node studio-test.cjs`, `node presentation-test.cjs`, `node stale-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs` test actual file pickers, downloads and studio functions. Reports/screenshots are committed; see VALIDATION.md for executed outcomes. `TEST_BASE` overrides the browser-test/studio/orientation server. Static browser generation needs no server API, account, key, paid service, CDN or external font.

## Reference-first provenance

Local candidate meshes were parsed first, with hashes/dimensions/components recorded in `reference-measurements.json`: the Keycap Studio switch template (three switch-related solids) and Weave diamond link (8mm interlocking link) are not suitable sheet-card geometry. Their project READMEs were inspected. Both source trees remain read-only.

The chosen accessible reference is Mike Kasberg's **White Cat Kit Card**, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), [CC BY4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README/LICENSE were fetched this run; license is retained as REFERENCE-LICENSE.txt. The actual binary STL was downloaded anew, parsed and sectioned before choosing the final mechanism. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`;30,616triangles;179.820×178.020×3.190mm, assuming millimeters because STL has no units.27 edge-adjacent components include source defects; the source is not globally watertight and is a design/measurement reference, not an automatically repaired template. No raw source asset is redistributed and no source artistic shapes are copied.

`reference-measure.py /path/to/downloaded.stl` reproduces the measurements (Python trimesh/numpy/matplotlib/scipy/shapely/networkx). `reference-measurements.json` records source/component bounds, SHA, Z planes and sockets. `evidence/reference-sections.png` shows inspected actual sections at Z=.10,.50,1.59mm. `reference-analysis.json` maps measurements to reconstruction.

**Measured vs proposed:** measured source sheet1.60mm, four4.50×1.700012mm sockets, low runner planes.21/.22mm. Defaults preserve1.60mm sheet and4.50×1.70mm sockets. Reconstructed4.40×1.60mm tongues provide a **proposed**, printer-dependent.10mm TOTAL allowance. Original3-bay frame, thicker.4–.6mm tabs, circular guide, foot shoulders, radial witness and half-radius roller are new design, not measured source mechanics. No universal fit claim.

Visual/interaction reference, inspected read-only: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, imageTrace.ts, geometry/stl.ts and export.ts. Applied concrete patterns:374px left scrolling studio rail and sticky compact brand, collapsible sections and paired mm sliders/numbers, coral tactile selection, lavender desk, locally bundled Fredoka/Rubik, saved dark theme, source/cutout previews, imported-source transforms, worker/current-result export gating, mobile preview-first stack. Existing gallery studio plumbing was selectively adapted; no reference Git history or dependency tree copied wholesale. The mechanism/geometry, assembly constraints, measurements and independent collision tests are new.

## Parameters and physical construction

All linear dimensions are **millimeters**, angles degrees.

| Control | Supported range |
|---|---|
| Card width/height |140–180 each|
| Nominal inner guide radius R |20–28|
| Guide band |4–6|
| Sheet |1.6–2.4|
| Part spacing |3–5|
| Tab width/thickness |.8–1.2 /.4–.6|
| Socket TOTAL allowance |.10–.25|

The roller radius r=R/2 is mechanically locked, not an independent parameter. Small cards/large parts/spacing combinations are rejected instead of shrinking or overlapping parts. Deck silhouettes: soft, square, clipped corners. Three real geometry presets, bounded variations, undo/redo, up to six named local designs, portable JSON save/open. Invalid edits block every export immediately; last-good geometry is labelled as such. Missing image payload requires reattachment; verified bounded image/mesh payloads are included in portable JSON.

Circular guide inner bore is a128-gon **circumscribed** about R; roller is a128-gon inscribed in r. This guarantees nonpenetration in the mathematical circular preview, with small radial bore error R×(sec(π/128)−1),≤.009mm in range, before printer error. The actual physical path is not exactly constrained: faceting, alignment, friction and slip add errors. The .3mm front-face radial engraving ends at the roller rim; its rear thickness remains intact for contact. The guide's phase ticks never intrude into the nominal circular bore. Two shoulder feet seat on the deck, and source-derived tongues enter two through-sockets. All parts are supported bed-flat; sheets retain≥1mm backing under user engraving. No compliant spring or hardware required.

**Assembly:**1.Print a tongue/socket sample first and calibrate allowance for your printer/material/elephant foot.2.Snip12 accessible tabs1.8mm outside part edges, then file remaining stubs flush, preserving circular edges/tongues.3.Dry-fit guide tongues into deck, shoulders flush; glue only fixed feet if needed, then cure.4.Insert disc laterally into ring and hold rear faces aligned. Start at rightmost contact, witness pointing right; roll without slip.5.Guide loosely with fingers, never claim captive retention or automatic motion. Small parts: adult teaching/craft kit, not for small children. PLA/PETG,.4mm nozzle,.16–.20mm layers,3+walls,100%mm scale; supports not intended. Clean individual STLs avoid tab cleanup. Assembly order and insertion path are computationally checked; actual fit needs printing.

## Image → real geometry

PNG/JPEG plus simple safe SVG;≤2MB,≤12MP,≤6000px/side. Headers validated before decoding; longest side normalized≤500px. Fit/crop and X/Y pan then sample a20×20 luminance grid. Remove light background or invert dark background, threshold1–254 or grayscale relief. Transparent pixels composite against the chosen background. Actual cutout shown on checkerboard; source shown separately. Simple SVG is sanitized (≤2000elements, no scripts/text/effects/external resources) and locally rasterized256px before the same conversion.

The sampled height field is triangulated and closed, transformed, then **Boolean-subtracted** from the protected front deck apron. .4–.6mm depth preserves≥1mm sheet backing. Bright image holes remain unengraved/backed. This is **2D-to-relief/silhouette conversion**, not automatic full3D reconstruction or exact contour tracing. Small text may need fewer letters/larger scale. Up-to8-character text and six searchable bundled vector marks (heart/sun/wave/star/circle/plus) use this same geometry path. Style is deliberately engraved only to preserve flat-sheet envelope. Preview colours are not stored in STL.

Artwork footprint4–7mm, rotation±180°, X±1.5mm/Y±2mm; all vertices must stay within6.5mm radius around the apron center. Source pixels, threshold, relief depth, fit/crop and placement measurably change exports. Empty art and unsafe transforms block export. Replace/remove/reset and return-to-defaults supported. No personal files saved in repository.

## STL → real geometry

Binary and ASCII STL≤2MB/1500triangles; each source dimension.2–250mm. Explicit confirmation of millimeter coordinates is mandatory because STL has no unit metadata. Z/Y/−Z up before attaching; changing axis clears source and requests reattachment. Source mesh and oriented dimensions/triangle count shown. Proportional XY scale maps it to4–7mm footprint; independent Z scale maps to.4–.6mm engraving depth. Actual scale factors, rotation, center/placement/reset provided.

The **actual transformed solid** becomes a protected deck recess through Manifold Boolean subtraction. This is not unchanged re-export, a texture, interpenetrating shells, or a convex-hull replacement. Supported: one closed/outward-wound/positive-volume convex broad-flat-bottom non-overhanging mesh. Open/nonmanifold/inward/degenerate/concave/hollow/multipart/overhanging meshes and unsafe scale are rejected with actionable errors; no generic repair claim. Convex-hull footprint is used only as an input validation predicate, never substituted into output. Minimum scaled XY span1.2mm. Source geometry integration cannot touch rolling interfaces or sockets.

## Meshing, views, exports and privacy

Manifold WASM/Web Worker does real unions/subtractions with bounded detail,100ms debouncing, sequence/stale-result guards, loading/build/success/error and worker-failure blocking. STL parser uses vertex welding only, not arbitrary repair. Every final part undergoes closed-manifold, outward-winding, finite-coordinate, nondegenerate-face/positive-volume checks at1e-5mm weld tolerance. Independent tests parse actual float32 binary STL bytes, connected-component volumes, stored normals and expected mm dimensions. De-tabbed print layout checks parts separately and prevents unwanted intersections.

Connected card is one real solid: frame/dividers+12 accessible breakaway runners+3parts. Clean parts stay distinct. Views: connected card, de-tabbed plate, assembled, exploded, all isolated parts, see-through ring, rotate/zoom/fit, touch orbit/pinch. Ideal rolling pose and exploded spacing affect preview only; all exports retain true bed-flat printable orientation. Preview and exports share the exact current valid solid and a byte fingerprint. Binary per-part/card STL plus Everything ZIP containing four STLs, portable design JSON and numbered assembly/current-fit notes; ZIP is not3MF. STL has no colour metadata.

Files are processed **only in this browser**, never uploaded or sent to services. Synthetic PNG/JPEG/SVG/ASCII/binary STL sample fixtures are original testing assets, not private uploads/source meshes. Dependencies/fonts/WASM bundled locally: React,Vite,Three.js,Manifold3D,fflate,Fontsource Fredoka/Rubik. Fonts SIL OFL,Manifold Apache2.0. User designs live locally or in downloaded JSON; no cloud. Computational verification is not physical print testing.
