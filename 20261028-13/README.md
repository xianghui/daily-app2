# Rib & Halo

A local browser **eight-part flat-pack kit-card STL generator**: six curved ribs slide radially into two six-slotted hubs to make a hollow desk sculpture. Three genuinely different profiles (orb, faceted lantern, pear), three model-thumbnail presets, adjustable height/belly/hub elevations, sheet and cross-lap allowances. This is a decorative assembly, not a moving fidget, lamp, load-bearing structure or children's toy.

## Reference-first evidence

Local `/Volumes/ExternalHD/3d_printing_apps/` STL candidates were searched first. Clicker switch cuts, slider tracks and fabric links are not appropriate sheet/card interfaces; the three local kit-card projects have no STL reference assets. The publicly licensed fallback was downloaded and **parsed afresh for this run**, not inferred from an image:

- Mike Kasberg, **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Repository README, LICENSE and `kit_frame.scad` were inspected.
- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 triangles, 1,530,884 bytes.
- Actual mesh dimensions **179.820 × 178.020 × 3.190 mm**, two welded edge-connected components. STL has no unit metadata; millimeters corroborated by source OpenSCAD.
- Measured sheet planes Z=0/1.6 mm, perimeter rail width1.6 mm (section Y100), bridge Z levels0.21/0.22 mm. Sectioned actual triangles at Z0.1/0.5/1.59 mm; see `reference-sections.svg/png`, `reference-analysis.json` and reproducible `reference-analysis.py`.
- **Source defects:** the downloaded model contains coplanar/nonmanifold artifacts; it is a design reference only, not repaired, redistributed or re-exported. Our parts are independent analytic reconstructions using valid Manifold boolean solids.

Measured source sheet/carrier construction informs the default1.6 mm sheet, reinforced2.4 mm carrier and proposed0.4–0.6 mm tabs. Source bridges are deliberately thickened, not claimed identical. **All curved ribs, dual-level radial cross-laps and fit allowances are original redesigned features**, not measured source interfaces. Unlike the spacecraft model, this uses six inward-sliding curved ribs around two open radial hub patterns. It is not a reskin of the preceding tied-arch bridge: part topology, assembly axes, joints, layout and collision checks are different.

Visual/interaction reference, read-only: `keycap_generator2` README, styles, App, Viewer, worker, geometry STL and export modules were inspected. The compact sticky left rail, tactile segmented buttons, paired slider/mm inputs, checkerboard cutout, imported-source preview, view toolbar and protected-solid workflows inform this studio. Fonts and dependencies installed independently; no reference Git history or dependencies copied wholesale. Shared import/editor utilities from the preceding daily studio are reused; this app has a new model builder and assembly validator.

## Run

```sh
npm install
npm run dev
npm run predeploy
npm test
```

React/Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik. No CDN, server, API, paid service or network generation dependency. `predeploy` is exactly `npm run build`; `deploy` exactly `gh-pages -d dist`. Production base `/daily-app2/20261028-13/`. Publish the combined site from the **root monorepo**, not the individual script.

## Parameters and assembly

All lengths are **millimeters**; hub fraction is explicitly percent, rotation degrees. Supported: card200–230 ×160–200; sculpture height48–62; belly radius24–30; lower hub24–32% of height, upper complementary; rib radial width5–7; sheet1.6–2.4; total slot allowance0.15–0.45; part spacing4–7; tab width0.8–1.4, thickness0.4–0.6; dimples0–0.4 deep. Combinations that cannot fit the carrier are blocked.

Each hub has six open radial slots. Each curved rib has two open inward-facing cross-lap notches. Slot width equals sheet plus total clearance. Half-lap radial shoulders are separated by the same allowance. Support-free parts use actual boolean subtraction/union, not overlapping shells. One connected frame/crossrunner/tab card; the 20 tab cuts separate eight individually manifold parts plus the carrier. Tabs attach to nonfunctional foot/disc edges, not slot interfaces. Cutter access2 mm outside edge.

1. Print connected card OR eight loose parts, all bed-flat Z=0, 100% scale. PLA/PETG,0.4 mm nozzle,0.2 mm layers, three walls. No supports intended; inspect slicer. Check card bed envelope.
2. Adult: snip20 thin tabs and trim nubs/elephant foot. Small parts and cutting tools are hazards.
3. Print one hub and rib as the fit calibration coupon. Default0.30 mm **total** allowance is only an FDM starting point, not universal. Reprint with adjusted allowance for material/printer.
4. Hold hubs parallel, marked hub above, radial slots aligned. Slide rib1 radially inward to engage both slots simultaneously, then opposite rib4, then2/5/3/6. No bending, snapping or threading through closed slots. Six flat feet rest on the desk.
5. Joints constrain twist/height but **friction alone resists radial withdrawal**. There is no positive lock. Optional glue dots if loose, or recalibrate. Hold lower hub to move. Reverse insertion to disassemble. Hardware-free.

## Personalization and image workflow

Text (up to8 characters), six searchable bundled SVG marks or local PNG/JPEG/simple SVG become real geometry on the protected upper hub. Imported mesh is a solid-unioned hub mark, not unchanged re-export or preview texture. The6.5 mm-radius center keep-out separates all personalization from functional slots.

PNG/JPEG: validate actual headers,2 MB,≤12 MP,≤6000 px/side before decoding. Normalize portable image to≤500 px; document JSON2 MB. Simple SVG≤2000 elements, sanitized local rasterization256 px; external resources/scripts disallowed. Synthetic sample PNG/JPEG/SVG and ASCII/binary STL are available as picker examples and downloadable files.

**Exact image method:** composited luminance (transparent background composited to selected light/dark), contain/cover crop with±25% pan, sampled20×20. Threshold1–254 gives two-level heights or grayscale gives continuous sampled height. An outward-wound triangulated height-map plus closed sides/bottom is boolean-unioned to the hub. Background pixels/holes stay unraised on a continuous backing, or uncut when engraved. Checkerboard shows actual converted grid. This is **2D-to-relief/silhouette conversion, not full3D reconstruction**. Raster interpolation rounds pixel boundaries; not exact vector outline tracing. Relief0.4–3 mm; engraving0.4–0.6 to preserve at least0.8 mm floor. Text/SVG use this same documented raster route.

Footprint4–7 mm; rotation±180°, offsets X±1.5/Y±2 mm. Unsafe placements reject explicitly. Replace/remove/reset is available; all import changes affect exported geometry.

## STL integration contract

ASCII and binary STL,2 MB,≤1500 triangles,0.2–250 mm on each oriented source axis. Source dimensions and original mesh preview are shown. **Explicit mm confirmation required** because STL stores no units. Select Z-up, Y-up or upside-down before attachment; changing axis clears source and requests reattachment. XY scales proportionally to footprint4–7 mm, Z independently to0.6–3 mm; center, rotate, place, reset. The transformed original surface is unioned into the upper-hub recess with0.15 mm overlap. No hull substitution, no joint fusion, no unsupported floating shells.

Intentionally bounded to one outward-wound, closed **convex, broad flat-bottom, non-overhanging** solid. Concave/hollow/branched/unsupported meshes are rejected, never replaced by their hull. A computed bottom hull is used only for contact/overhang validation. Parser checks length/content, coordinates, dimensions, degeneracy, directed edge incidence, connectivity, signed volume, triangle intersections and convexity. No automatic repair. Thin transformed footprint<1.2 mm, unsafe transforms and incomplete unit confirmation block export. Prepare a closed support-free grip in a modeler if rejected.

## State, privacy and export

All files processed locally, not uploaded or stored in repository. Saved named designs (six) and JSON contain bounded portable normalized image/indexed-mesh payloads. Missing payloads error with reattachment guidance, never silently restore a missing file. Undo/redo stores recent snapshots. Replace/remove/reset invalidates current worker state. Heavy CSG runs in a worker with100 ms debounce, request IDs and exact current-state keys; error/loading/invalid edits disable export instead of silently exporting last-good geometry.

Preview/export share the exact current checked mesh. Assembled, radially exploded, connected card, de-tabbed print layout and all isolated parts use identical solids. Assembled positions are geometric rigid placements, not force or friction simulation. Ghost toggle affects preview transparency only. Per-part binary STL, connected-card STL and Everything ZIP (nine STLs including card + assembly notes). ZIP is not3MF; STL contains no colours or unit metadata. Export dimensions and mesh signature are shown/verified.

## Validation

`node validate.mjs`: independent binary STL parser, finite coordinates, normalized outward normals, nondegenerate faces,1e-5 mm vertex welding, exactly two oppositely directed faces per edge, each component positive volume, actual mm bounds; separately checks every part and float32 card. Defaults, all presets, min/max and cross-extremes plus image/ASCII/binary-derived models. Manifold intersections check all assembled part pairs and six complete radial insertion paths, flat layout isolation, original parts contained in card, and20 cutter operations yielding nine components. Mechanical metrics separate material-dependent friction from geometric fit.

Production-browser tests use real file pickers/downloads for PNG/JPEG/ASCII/binary, compare actual STL bytes with worker mesh signature and independently regenerated portable JSON, run the same mesh/assembly checks, test malformed/unsupported files, stale edits, worker failure, images/threshold/depth/transforms, hole probes, per-part/ZIP exports, undo/redo, named and JSON restoration, all views, drag/drop, saved dark theme, keyboard focus, collapsed sections, reduced motion,320/390 px overflow, touch orbit/pinch and phone downloads. See generated validation reports for executed results.

**No physical print, fit, assembly, durability or strength test has been performed.** Watertightness and collision-free assembly do not prove friction, strength or printer accuracy. Calibrate before committing a full card.
