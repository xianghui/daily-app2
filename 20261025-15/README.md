# Waist & Widen

A local, browser-based React/Vite parametric STL studio for a **two-cell re-entrant tensile TPU fidget**. Hold the palm and distal crossbar, gently pull, and release: the inward knees widen as the inclined ribs straighten. This is distinct from rotating-square auxetics, slit-sheet kirigami and independent cantilever presses.

## Run / build

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. The per-app `deploy` script is installed as requested, but public releases use the parent monorepo's `deploy/` flow. Base path: `/daily-app2/20261025-15/`.

## Studio

Reference-informed maker layout: 372 px left control rail, sticky brand/theme header, raised tactile buttons, collapsible sections, paired numeric/range mm inputs, lavender desk, white panels, pink selection, locally bundled Fredoka/Rubik fonts. Phone layout puts the touch-orbit viewer, dimensions, warnings and export first, then stacked controls. Saved dark theme, fit/zoom, translucent solid, three real model-thumbnail presets, undo/redo, named local designs, portable JSON, text and searchable icons are included. Single-part design: rest, whole-solid and plate views show the same undeformed printable geometry; no fake exploded assembly is needed.

## Geometry / ranges (mm)

- Palm diameter 22–28; round, hexagonal or oval palm.
- Cell half-height 12–18; two cells, each made from inclined solid ribs and shared crossbars.
- Rib thickness 1–1.6; print depth 3–5; inward knee inset 4–7.
- Palm dimple depth 0–0.6.
- Pull trial guidance 0.4–0.8 total: an explicit **analytical guidance control**, not a printed travel stop or geometry feature. It updates the ideal knee sweep, reserve and estimated strain. Other dimensional/surface controls change generated geometry.
- Personalized grip footprint 4–7, rotation ±180°, X ±1.5, Y ±2. STL grip height 0.6–5.

Manifold WASM builds unions and differences in a debounced Web Worker. Rounded ribs overlap before robust solid union, not overlapping-shell export. Two through windows remain open. Local postflight verifies every output has finite vertices, nondegenerate faces, consistent winding, positive volume, one connected closed solid and two incident triangles on each welded edge (1e-5 mm). Preview and binary STL/ZIP share the exact current result; invalid or pending edits disable every geometry export, with last-good preview explicitly labelled. There is no stale-export override.

## Image → physical relief

File picker and drop support **PNG/JPEG**, plus restricted simple **SVG** (no scripts, references, external resources, fonts or effects). All files ≤2 MB; raster sources ≤12 MP and ≤6,000 px per side. Header dimensions are checked before decode, then normalized to ≤500 px. SVG ≤2,000 simple shapes is rasterized locally to 256 px. Synthetic fixtures in `public/samples/` are project-authored and contain no personal uploads.

The converter fits/crops/pans onto a bounded **20×20 luminance grid**. Light/dark background mode composites transparency and inverts luminance where selected. Threshold 1–254 selects dark regions, or grayscale produces continuous height. A triangulated heightfield with side walls and solid back is formed, then unioned into the palm floor (raised), or subtracted (engraved). Raised depth 0.4–3; engraving 0.4–0.6 preserves the floor. The checkerboard displays the actual foreground mask; source and final 3D previews remain visible. Holes such as an SVG ring's center remain low/unraised areas over the supporting body, **not through-holes**. The continuous backing is deliberate. Resolution is coarse and antialiased/interpolated, not an exact vector outline. This is **2D-to-relief conversion**, not reconstructing a full 3D object from a photograph. Empty sources are rejected. Threshold, pixel content, depth, fit, physical scale and placement change export geometry. Replace/remove/reset and built-in defaults are available.

## STL → integrated grip

ASCII and binary STL, ≤1,500 triangles, ≤2 MB, 0.2–250 source-coordinate extent on every axis. STL has no unit metadata: the user must explicitly confirm millimeters. Up axis Z, Y or inverted Z; changing axis requires reattaching the source. Dimensions and source preview are shown. XY scales proportionally to physical footprint, Z independently to grip height; rotation and placement then apply. A 0.15 mm overlap at the flat source bottom joins it by **solid union into the palm well**, not unchanged re-export or a loose visual overlay. The protected 6.5 mm radius zone isolates every customization from the flexing ribs and cell windows.

**Deliberately bounded contract:** one closed, connected, outward-wound, convex, broad flat-bottom, no-overhang solid. Validate content, finite coordinates, facets, orientation, edge incidence, component count, volume, dimensions, self-intersections and bottom footprint before modeling. Concave, hollow, disconnected, nonmanifold, self-intersecting or overhanging models are rejected with guidance; their concavities are never discarded or replaced by a convex hull. No automatic repair is claimed. Use a simplified convex grip model, not an arbitrary figurine.

## Save / privacy / export

Everything runs locally with bundled dependencies (React, Three.js, Manifold, fflate, Fontsource; Vite/Playwright development). No API, key, CDN, upload, analytics or server processing. JSON and local named designs contain bounded normalized image payloads or verified mesh coordinates, not missing file paths. Assets round-trip; malformed/missing payloads require correction/reattachment. Personal source files are not stored in the repository.

Download the whole solid or named part as binary STL, or a ZIP with STL and printing notes. STL has geometry only: preview colours do not imply multicolour output. No 3MF is advertised.

## Printing / mechanical limits

One continuous support-free, hardware-free bed-flat part. TPU 95A is an experimental starting material, 0.4 mm nozzle, 0.2 mm layers, three perimeters. Do not use brittle PLA for this compliant mechanism. Print **Pocket Ribbon** first as a full-size material/calibration coupon. Check windows are open and ribs continuous; remove stringing without cutting ribs. Start with tiny pulls, stop if damaged or whitening, never force ribs straight. No assembly or captive moving interface; no universal running-clearance claim. Actual compliance depends on TPU formulation, extrusion, layer adhesion and slicer settings.

The ideal inextensible-rib calculation divides total trial extension equally over four half-cells, predicts positive waist widening and guards straightening reserve. A rough distributed-knee strain estimate is bounded below 2.5%; it is **not** nonlinear FEA, a force, fatigue or durability prediction. Rest-state geometry is verified, not a physical deformation simulation. **No physical prints were performed.**

## Verification

`npm test`: defaults, all presets, 128 dimensional corners, image threshold/relief/engraving and ASCII/binary imported outputs, analytic bounds, independent STL parser, positive component volumes, normals, welded edges and Euler topology (two intended cell windows). Independent CSG probes test both open windows, all eight rib sections, and import isolation. Ideal knee positions are sampled through the trial pull range.

`node browser-test.cjs`: real browser picker imports, downloads parsed independently, pixel/threshold/depth/scale/placement changes, invalid/truncated/open/nonmanifold/concave/excessive input rejection, recovery, phone imports and exports, 320/390 px overflow, touch orbit/pinch, preview/export fingerprints. `feature-test.cjs`: presets, variations, marks, SVG ring/engraving, JSON payload round trips, undo/redo, local saves, ZIP/per-part export, axis transforms, theme, keyboard focus, view changes and stale-result gating. `resilience-test.cjs`: worker-load failure and malformed-JSON recovery. JSON reports record observed results; geometry checks are not physical-print testing.

The shared studio/import/validation infrastructure was adapted from the preceding Daily Object Lab app; this app's re-entrant geometry, mechanism checks and documentation are new. The Keycap Studio reference was inspected read-only; its repository/dependencies/history were not copied or modified.
