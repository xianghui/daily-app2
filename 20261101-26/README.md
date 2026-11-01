# Keel & Trace

A local React + Vite maker studio for a **three-part, Prytz-inspired heel-following tracer kit card**. Snip twelve runners, insert the bevel heel from below and the pierced grip from above, and bond four fixed joints. Hand-hold a pencil through the end bore and trace a small contour while observing heel drift. This is a qualitative nonholonomic tracing demonstration, **not a calibrated area-measuring instrument**. It does not simulate friction or promise that plastic will resist sideways skid on your paper.

Different from the earlier straight-guide pursuit kit: this entire beam travels, has no pivot or track, and relies on a directional paper-contact heel. Both separate feet are stationary relative to the beam after assembly. No bearings, magnets or fasteners. **Pencil, paper and compatible adhesive are required. Physical printing, tracking, wear, friction and accuracy have not been tested.**

## Run and export

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
```

Production base `/daily-app2/20261101-26/`; test server is http://127.0.0.1:5678/daily-app2/20261101-26/ . Node22.12+ recommended. App-level scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publication uses the ROOT predeploy/deploy flow, not the app deploy script.

Download the **connected-card STL**, clean de-tabbed plate, or each of three parts individually. Everything ZIP contains all four named STLs plus numbered assembly/print instructions and the current calculated fits. Binary STL uses millimeter coordinates and contains no colour or unit metadata. Preview and export share the same current valid Manifold result; assembled/exploded views apply explanatory rigid transforms, never alter printable layout. A last-good preview is labelled and cannot be exported after an invalid or pending edit. Printed parts start at Z0.

## Reference evidence and attribution

Local candidates were inspected first, including keycap_generator2’s actual three-component switch template and fidget_fabric_generator’s diamond link. Their README/mesh structures are not suitable sheet/carrier references. Their bounds/hashes/rejection reasons are in `reference-measurements.json`. Keycap Studio’s README, CSS, App, Viewer, worker, image conversion, export and STL modules were inspected read-only as the UI/workflow reference:374px left control rail, compact sticky brand, collapsible controls, tactile pink selection, lavender desk, checkerboard image cutout, current-result export gating, saved theme and phone preview-first layout. No source project history or dependencies were copied wholesale. Shared local studio utilities were reused from the daily collection; this mechanism and assembly checks are new.

Actual geometry/design reference: **White Cat Kit Card**, Mike Kasberg, Printables865769, https://github.com/mkasberg/white-cat-kit-card , **CC BY4.0** (upstream LICENSE retrieved, copied into REFERENCE-LICENSE.txt). Public STL download URL is recorded in `reference-analysis.json`. Raw third-party STL is NOT bundled. Its binary mesh was parsed, not inferred from a screenshot:

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
-30,616 triangles; assumed mm,179.820×178.020×3.190 bounding dimensions;27 edge-adjacent components including tiny duplicate/degenerate face groups; source as a whole is nonwatertight, NOT declared repaired or used as printable output.
- Actual Z sections at.10,.50,1.59 mm reveal1.60mm sheets, repeated4.50×1.700012mm sockets, lower carrier webs at.21–.22mm. See `evidence/reference-sections.png`, full `reference-measurements.json`, reproducible `reference-measure.py <downloaded-reference.stl>` (trimesh/numpy/matplotlib).
- Generator retains4.50mm socket length and default1.60mm sheet; four receiving sockets become4.50×(sheet+allowance), tongues(4.50−allowance)×sheet. Proposed allowance.10–.30mm is total, not per side. Proposed.40–.60mm runners replace thinner measured source webs. These are redesigned/calibration dimensions, not measurements of the source.
- The heel, pencil guide, beam, bevel, opposed insertion joints and three-part carrier layout are original parametric solid reconstructions. No source fan-art shape or raw reference mesh is redistributed. Computational inspection is not a physical print test.

## Parameters (all lengths in mm)

| Control | Range | Physical change |
|---|---|---|
|Card width / height|170–230 /110–160|Declared enclosing carrier envelope|
|Pencil-to-heel span|70–100|Distance from bore centre to heel centre|
|Heel depth|8–12|Beam underside elevation over paper|
|Pencil bore|6.5–9|Actual vertical through-hole, loose handheld guide|
|Sheet|1.6–2.4|Beam, grip and heel thickness|
|Total socket allowance|.10–.30|Length and thickness clearance, not friction lock|
|Part spacing|3–5|Runner span and margins in nonoverlapping bays|
|Runner width / thickness|.8–1.4 /.4–.6|Twelve real bed-aligned breakaway solids|
|Silhouette|soft, square, clipped|Beam and grip profiles|

Three real presets have current-model 3D thumbnails. Bounded variations, undo/redo, up to six locally named designs and portable JSON save/open. JSON includes normalized image or verified mesh payloads, capped at2MB; missing image payload explicitly requests reattachment. localStorage is device/origin-specific. Light/dark theme persists separately. Touch orbit/pinch, fit and zoom, assembled/exploded/card/clean plate and isolated views, transparent beam. Preview colour is never presented as STL colour.

## Local image → geometry

File picker on desktop/phone and desktop drop support actual PNG/JPEG and simple SVG. Files16bytes–2MB; PNG/JPEG headers checked before decoding:≤12MP,≤6000px per side, then normalize to≤500px. SVG≤2000 simple path/shape elements, dimensions≤6000px, no text/scripts/effects/external resources; rasterized to256px locally. SVG holes stay bright/transparent and are preserved at the sampled resolution. Six original searchable icons and up-to-eight-character text rasterize with the bundled fonts through this same conversion.

The exact documented method is **2D sampled height-field engraving**, not outline reconstruction or full3D recovery from one photograph: composite on light or dark background, fit/crop with±25% shift, sample a20×20 luminance grid. Threshold1–254 or continuous inverted grayscale sets per-vertex depth. Triangulate adjacent sample cells, close a backing surface, then Boolean-subtract the inverted height solid. Threshold transitions are piecewise-linear, not crisp per-pixel columns. Bright holes remain uncut at the top; independent solid probes verify the ring fixture’s centre and engraved annulus. The checkerboard shows removed/uncut background. Coarse sampling may erase tiny holes—inspect the actual model, use bold art. Aim for≥.8mm decorative strokes; fine grid features may not resolve with a.4mm nozzle and need a smaller nozzle or simpler artwork.

Engraving.40–.60mm deep only (raised art deliberately unavailable); protected patch centre(0,−8), keep-in radius6.5. Footprint4–7mm; rotation±180°; X±1.5/Y±2mm. Final transformed vertices must remain in that patch, away from four sockets, the bore, edges and undersurface; backing≥1mm throughout. Controls and changed pixels measurably change exported geometry. Source and checkerboard cutout previews, replace/remove/centre/reset and empty-silhouette rejection.

## Local STL → geometry

Accept true binary and ASCII STL16bytes–2MB,≤1500triangles, each axis.2–250mm. Validate exact binary length or complete ASCII facets, finite coordinates, nondegenerate triangles, welded edge incidence and opposite winding at1e−5mm, one connected outward positive-volume shell, triangle intersections and restricted shape suitability before CSG. **Supported subset: one convex, broad flat-bottom, no-overhang solid.** Concave/hollow/branched/disconnected/open/nonmanifold/intersecting sources are rejected with guidance; they are never silently hulled, repaired or flattened into a substitute. Exact accepted triangle mesh is used in the Boolean engraving. Synthetic fixtures carry CC0 attribution.

Choose Z/Y/−Z up **before** reattaching; changing axis clears the asset and requests reattachment. Source dimensions/triangle count/format and actual source3D preview are displayed. Explicit millimeter confirmation required (STL has no units). XY scales proportionally to4–7mm footprint; Z independently to.4–.6mm depth, with both factors shown. Z rotation and XY placement are physical Boolean transforms. Minimum oriented XY feature envelope1.2mm; transformed geometry leaving keep-in zone rejected. Pencil bore/four sockets and≥1mm floor remain protected. Output is the changed original beam solid, not an unchanged source re-export or overlapping shells.

All generation and file processing happen inside this browser. No remote APIs/CDNs/accounts/keys. Manifold WASM and all fonts/dependencies bundle locally. No personal source files go into the repository; portable assets remain in your downloaded JSON/localStorage.

## Printing and assembly

1. Trial-print the clean heel, grip and beam, at100% mm scale, PLA/PETG,.16–.20mm layers,3 perimeters. Parts sit flat and no supports are intended. Calibrate total socket allowance on your printer/material. Do not globally scale a card to fit a bed; change its dimensions or export loose parts.
2. Clip all12 runners outside functional parts; burr removal after clipping is required. Each clip plane sits1.6mm outside part boundary; do not cut the four4.5mm-class assembly tongues. Test suite severs all runners and requires exactly three released parts plus carrier, without cutter/part intersection.
3. Insert heel UP into beam’s two heel-end sockets until its broad shoulders touch the underside. Lower grip DOWN into the pencil-side pair until shoulders touch top. Dry-fit and bond all four fixed seats. Leave the round pencil bore free of adhesive. This is not a press-fit/snap-retained assembly.
4. Cure, then hold pencil upright through bore and adjust tip projection until heel and pencil contact paper together. The long18×.8mm contact edge runs parallel to the beam axis. Its one-sided, bed-supported bevel gives a lateral centre offset of(sheet/2−.4)mm; the quoted span is longitudinal, not an exact collinear contact distance. This is another reason not to treat it as a calibrated instrument. Keep the beam level; hand-guide a small contour without forcing the heel. Record initial/final heel position to compare drift and span.
5. Treat as qualitative Prytz-inspired motion only. Ideal no-lateral-slip assumptions and carefully prescribed tracing procedures are not verified here; no numerical area readout or calibration claim. Smooth plastic can skid. Not a cutting blade, precision instrument or load-bearing jig. No physical print, friction, fatigue or tracking tests performed.

The downloadable ZIP gives full numbered notes and actual current dimensions. Assembled preview contains only printable parts: pencil and paper are external, not fictitious included geometry.

## Validation

`npm test` runs independent float32 binarySTL parsing, normals/winding, finite/nondegenerate coordinates, welded two-face edge incidence, positive volume for every component, mm bounds and expected counts on42 cases: all presets, shapes, individual and combined min/max ranges, image threshold/relief/holes, both STL formats/transforms and imported parameter extremes. It checks every separate part and clean translated plate (three closed components); card must be one connected solid. Manifold intersections independently verify assembly,28mm collision-free insertion in opposite directions, four socket probes, two shoulder stops, pencil passage and18×.8mm paper contact; actual runner-cut simulation, print footprints, bay nonoverlap and declared card bounds. Source defects are not inherited into generated meshes.

Production-bundle browser tests (Playwright/Chromium):

```sh
node browser-test.cjs
node studio-test.cjs
node icons-drop-test.cjs
node orientation-test.cjs
node ui-test.cjs
node rapid-test.cjs
node personalization-check.mjs
```

Real file-picker PNG/JPEG/ASCII/binarySTL imports, actual downloaded STL parsed independently against saved-state regeneration and UI signature; changed image threshold/depth/pixels/crop/background and STL scale/rotation/placement; invalid/truncated/open/nonmanifold/oversized/excessive/concave inputs; empty images; reset/replacement; unit gates; all presets/views; six icons, SVG, text; image and STL portable JSON plus local named reload; missing payload; actual ZIP entries; undo/redo; stale-worker and aborted-worker recovery; desktop374px-left/right layout,320/390px touch mobile preview-first/no overflow, orbit/pinch, all input tabs, expanded instructions, reached exports, saved dark theme, focus and reduced motion. Reports and screenshots are stored alongside reproducible scripts. These tests verify computational geometry and UI behavior, NOT physical usability or material behavior.

## Dependencies

React/ReactDOM, Vite React plugin, Three.js OrbitControls, Manifold3D (Apache2.0), fflate (MIT), gh-pages, Fontsource Fredoka/Rubik (SIL OFL), Playwright for tests. See package-lock.json for exact versions. WASM runs in a debounced worker with sequence IDs, bounded tessellation and current-state export gates. Fonts are bundled; no internet needed for ordinary generation after assets load.
