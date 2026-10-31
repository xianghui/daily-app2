# Lift & Reeving — Fixed-Pulley Kit-Card Studio

A parametric **five-part fixed pulley teaching kit**: sole, pierced tower, grooved sheave, headed axle and keeper ring. A real connected carrier holds the parts with **20 accessible breakaway tabs**. After assembly, the sheave turns freely and redirects soft cord at nominal **1:1 travel**. A fixed pulley provides no ideal mechanical advantage. This is a new cord-routing assembly, not a reskin of a clicker, optical frame, bridge or previous app.

**Supply 1.0–1.4 mm soft cord and filament-compatible adhesive.** Tower, axle and keeper are bonded stationary seats; the wheel must remain unglued. An unglued keeper is not positively retained. Hold the sole on the desk for gentle finger-only use. Not load-bearing, lifting-rated or suitable for weights; the open groove can derail. Small parts/cord: adult teaching craft, not a toy for small children.

**No physical print, assembly, strength, wear, friction or cord-tracking test was performed.** Computational checks do not establish those results.

## Run and dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fontsource Fredoka/Rubik (SIL OFL); Playwright browser verification. No API keys, paid service, CDN or server-side modeling. All uploaded files remain local in browser memory/storage. No personal input is stored in this repository.

Base `/daily-app2/20261031-14/`; app scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public monorepo publication uses the root `predeploy`/`deploy` flow.

## Reference-first provenance and decisions

Local STL candidates were discovered first and their project READMEs and actual meshes inspected read-only. Keycap Studio's switch template and Weave's interlocking diamond link do not provide suitable sheet-kit carrier interfaces. The suitable public reference was downloaded and parsed **before the pulley geometry was constructed**:

**White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Attribution/license in REFERENCE-SOURCE.md and REFERENCE-LICENSE.txt; numeric evidence in reference-measurements.json and reference-analysis.json, actual mesh cross-sections in evidence/reference-sections.png. Reproduce with reference-inspect.py and trimesh/numpy/matplotlib.

- Binary STL: 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Assumed mm: **179.819997 × 178.019994 × 3.1899996**. STL itself has no units.
- Source sheet planes **0/1.6 mm**; four receiving loops **4.5 × 1.700012 mm**, sections at Z .1/.5/1.59 mm; low runner vertices .21/.22 mm.
- 27 edge-adjacent components/fragments; source is nonwatertight. It was not repaired or redistributed. A new solid reconstruction uses the measured construction, not source triangles or a convex hull.
- Default tower sheet **1.6 mm** preserves measured sheet thickness. Sheet + **.10 mm total** reproduces the measured 1.7 mm receiving direction. Default mounting allowance **.15 mm** is proposed, printer-dependent and adjustable; source 4.5 mm receiving length is deliberately replaced by a **6 mm tongue**. Low runners are redesigned to .4–.6 mm thickness for accessible FDM snipping.
- Pulley Ø28–36, fixed Ø5 journal, open V groove, adhesive head/keeper, independent radial/axial running gap, base footprint and six-bay carrier are original redesigned features, not measured source interfaces. No endorsement implied; no raw third-party STL bundled.

The primary visual/interaction reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` stayed read-only. Inspected README, styles, App, Viewer, worker, export, imageTrace and STL parser. Concrete adopted patterns: 374 px left rail, sticky compact header/theme toggle, labelled collapsible sections, paired numeric/slider controls, raised pink keycap buttons and pressed states, checkerboard image cutout, imported-mesh editor, current-worker-result export gating, saved dark theme and phone preview-first stack. Independently authored Daily Object Lab studio/import infrastructure reused; geometry and assembly checks rewritten. No reference Git history or dependency tree copied. Both existing galleries checked for duplicates.

## Parameters and geometry

All physical lengths are **millimeters**, rotations degrees. Three real silhouettes (square, round crown, clipped crown), and three actual geometry-thumbnail presets: Pocket pulley, Broad sheave, Compact redirect. Bounded variation chooses only supported fits/dimensions.

| Parameter | Range |
|---|---|
| Card width / height | 176–190 / 170–188 mm |
| Sole width / depth | 60–68 / 38–44 mm |
| Tower rise / width | 48–56 / 26–32 mm |
| Sheave outside diameter | 28–36 mm |
| Base and sheave thickness | 3.6–4.2 mm |
| Tower sheet thickness | 1.6–2.0 mm |
| Mounting TOTAL allowance | .10–.35 mm |
| Running radial gap / EACH axial gap | .20–.35 mm |
| Part spacing | 3.5–5 mm |
| Breakaway tab width / thickness | .8–1.4 / .4–.6 mm |
| Art footprint / engraving depth | 4–7 / .4–.6 mm |
| Art rotation / X/Y offsets | ±180° / ±1.5 / ±2 mm |

Tower tongue 6 mm wide extends through the sole with its underside flush at the desk. Tower bore and keeper bore use mounting clearance around a fixed Ø5 mm shaft. Wheel bore is Ø5 + **2 × radial gap**; its two axial gaps each equal the radial-gap control. Head thickness 1.6 mm, keeper 2.4 mm. Default axle height is **9.9 mm**, setting the card's maximum Z; default card **180 × 180 × 9.9 mm**. Keeper outer radius 5.8 mm and axle head radius 6 mm overlap the bore, but the keeper needs adhesive on its shaft seat. The shaft does not rely on a fabricated press/snap fit.

V-groove root radius is 1 mm below the outside radius. Bottom/top lips .8 mm thick; each sloped transition rises `(sheave thickness − 1.6)/2` mm, at least 1 mm, keeping the outward lip at ≤45° from vertical. Minimum radial web exceeds 9 mm at the smallest wheel. Cord lanes, wheel/sole clearance and retention overlap are computationally checked. Groove guidance is open, not captive; cord/friction behavior remains physically untested.

The sole's front mark is more than 15 mm away from the tower seat; a 6.5 mm safe radius and .6 mm depth cap preserve ≥3 mm backing. Imports cannot change the journal or obstruct the mechanism.

## Image conversion

Desktop/phone picker and drag/drop: PNG/JPEG/simple SVG. ≤2 MB; actual PNG/JPEG headers checked before decode; ≤12 MP and 6000 px per side, normalized ≤500 px. SVG ≤2000 simple filled vector elements, no scripts/text/external resources/effects, rasterized locally to 256 px.

Method: light/dark background choice → contain/cover fit and ±25% pan → **20 × 20 grayscale samples** → threshold or grayscale-depth heights → a triangulated **closed heightfield** → genuine Manifold Boolean subtraction. Source and exact cutout grid appear on checkerboard. Bright interior holes remain unengraved over continuous backing; actual Boolean probes verify this. This is sampled **2D-to-relief engraving**, not exact contour tracing or automatic reconstruction of a 3D object from a photo. Thin details are resolution-limited.

Text up to eight characters and six searchable bundled icons use the same geometry conversion. Scale, rotate, place and depth all affect exported triangles. Raised mode is intentionally unsupported for this flat kit, not a fake control. Remove/replace/reset returns to the built-in recessed sole mark.

## STL integration

Binary and ASCII STL, ≤2 MB / 1500 triangles, oriented dimensions .2–250 mm per axis. Show original source mesh, source bounds/format/count, explicit mm confirmation (STL has no units), Z/Y/−Z up, proportional XY scale, independent depth fit, rotation, placement, reset/replace/remove. Changing up-axis explicitly clears the source and asks for reattachment.

Supported: **one outward-wound closed convex solid with broad flat bed contact and no overhanging XY footprint**. Parser verifies completeness, finite coordinates, welded opposite manifold edges, nondegeneracy, connectedness, positive volume, triangle intersections, convexity, dimension/complexity and bed-footprint limits. Unsupported concave, hollow, disconnected, overhanging, open/nonmanifold or inverted meshes are rejected with actionable guidance. No automatic repair or convex-hull substitution. Use image/SVG for concave marks, or simplify in a local modeler.

Exact validated triangles become a Boolean sole-engraving cutter, not an unchanged re-export or overlapping shell. Scale/rotation/placement and source shape survive the final STL and portable JSON. Samples are synthetic CC0, not private uploads or raw reference files.

## Studio, views and exports

Worker owns locally bundled WASM/CSG. Bounded resolution, 100 ms debounce, increasing request IDs and full parameter/source/transform keys discard stale results. Pending conversions, invalid edits/files, missing units and worker failures disable export. Last-good preview is explicitly labelled; it cannot be exported as current. Preview/export share the exact current mesh fingerprint.

Assembled, exploded, connected-card, clean-part layout and each isolated-part view; see-through, orbit/zoom/fit and phone pinch. Assembled poses use actual fit geometry; external cord and glue are omitted, no simulated friction/load. Color is preview-only; STL stores neither colors nor units.

Undo/redo, up to six local named designs, portable JSON save/open with bounded normalized-image or validated mesh payloads. Missing image payload requires reattachment, never silently restored. Local stored designs may contain your imported assets; nothing is uploaded.

Binary STL for connected card and all five bed-aligned clean parts. **Everything ZIP** contains six real STLs plus numbered assembly and current-fit notes, not 3MF. Selected export dimensions are shown independently of assembly pose. Default print plate is a real connected card, not loose pieces beside a frame.

## Print / calibration / assembly

See PRINTING.txt. PLA/PETG, .16–.20 mm layers and three walls are starting settings, not guarantees. Inspect sliced lips/tabs; axle prints vertically head-down. For smaller beds export clean parts. First print the separate tower/base and axle/sheave pair at 100% mm: tongue should seat without forcing, shaft should turn freely in wheel with no excessive rocking. Change mounting allowance independently from running gap; check elephant-foot compensation. Test keeper glue placement separately and keep adhesive out of the bearing.

Snip twenty tabs, seat/bond tower, insert/bond axle from behind, slide free sheave from front, then bond keeper with the displayed axial gap. Let glue cure before threading soft cord. Hold sole and gently pull one free end while the other rises. No loads, high speed or lifting claims. Wear, fit, adhesive strength and cord tracking need physical verification.

## Verification

`npm test` independently parses actual binary STL: exact byte count, finite coordinates, nondegenerate triangles, normalized outward normals, welded edge incidence at **1e−5 mm** (two opposite-directed faces), positive volume per intended component and millimeter bounds. Every preset/profile, combined and individual parameter extremes, image threshold/grayscale and ASCII/binary imported outputs. All six export files checked per case.

Independent CSG checks cover ten assembled part pairs, full revolution samples, tower/axle/wheel/keeper insertion and removal paths, cord tangent lanes, independent mounting/running clearances, retention overlap, real-card envelope, separated flat-part intersections, twenty safe snips releasing exactly five parts plus carrier, bed-footprint containment and V-groove slope. These are geometric, not force/fatigue/physical assembly tests.

Production-browser scripts exercise real file pickers/downloads for PNG, JPEG, ASCII/binary STL, changed pixels/threshold/depth/crop and mesh transforms, invalid/truncated/open/nonmanifold/concave/oversized inputs, empty images, reset/remove/replace, exact preview/export/Node-from-JSON identity, all presets and text/icons/SVG, portable/local saves, missing payload, undo/redo, views, ZIP parsing, worker failure/stale protection, themes/focus/collapse/reduced motion and narrow-phone touch orbit/pinch. See VALIDATION.md and generated reports for actually completed checks.
