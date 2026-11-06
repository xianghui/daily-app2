# Spiro & Orbit

A real two-part **internal-gear drawing kit card**. Snip six runners, tape the ring on paper, lower the loose pinion and hand-roll a fine pencil through either bore. Center bore traces a circle; eccentric bore traces a hypotrochoid. No glue, axle, bearings or fasteners. **Pencil, paper, tape and fine flush cutters are external supplies.** Gear is hand-guided and lift-out, not captive or automatically constrained. Physical printing, fit, friction and drawing quality are **untested**.

## Reference-first evidence / attribution

Local references were inspected first, including the read-only `keycap_generator2` README, App.tsx, Viewer.tsx, styles.css, worker, imageTrace, export and STL modules. Actual local binary STL candidates independently parsed: `keycap_generator2/public/templates/clicker_template2.stl` (SHA256 `292a392ae7fc81583be72352081413c3e98d3c7387f675d7311f79e8a5b31bf9`, 944 triangles, three components, 15.20 × 15.20 × 43.10 mm aggregate); `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one component, 7.981 × 9.241 × 8 mm). Their MX and thick fabric interfaces are unsuitable for a bed-flat kit. Local kit-card projects contain no suitable STL source fixture. Source trees and old daily_app remain read-only.

Selected actual mesh: **[White Cat Kit Card](https://github.com/mkasberg/white-cat-kit-card)**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. SHA256 **`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**, binary 30,616 triangles; assumed millimeters; dimensions **179.820 × 178.020 × 3.190 mm**; two edge-adjacent components and 57 anomalous edges. Do not mistake this reference for a validated printable source mesh. Upstream README and frame OpenSCAD inspected. Direct STL redownload returned HTTP403, so existing accessible cached identical source bytes were independently re-parsed. No raw third-party mesh bundled or redistributed, no repair or physical test claimed.

Measured cross-sections Z=.100/.215/1.590 mm show **1.60 mm sheet, 4.50 × 1.70 mm sockets and .21–.22 mm low runners**. See `reference-analysis.json`, raw measurements, `evidence/reference-sections.svg` / PNG, upstream README, license and frame source. Reproduce with `python3 reference-analysis.py /path/to/source.stl`.

Adapts the reference's **thin-sheet physical parts, calibrated interfaces and removable low carrier**. Original reconstruction differs completely in interaction: involute internally rolling ring/pinion, pencil bores and remote signature apron replace cat panels/clips. Proposed sheet and runners are thicker for practical FDM starting settings. The source .10 mm socket excess is measured; new gear-profile clearance is a proposed calibration parameter, not asserted source geometry or universal fit. No convex hull replaces any source.

## Actual mechanism

20° involute flanks sampled at eight radial points per side, four tip subdivisions. External pinion: pitch r=n·module/2, addendum +module, dedendum −1.25·module; internal ring void: pitch R=N·module/2, root R−module and outer valley R+1.25·module. Ring void offsets outward half clearance and pinion inward half clearance using real Manifold cross-sections. Pitch center distance **R−r**. At orbit θ, pinion rotates **−(N−n)/n·θ**; native print orientation offset is removed in assembly transforms. Pinion has real center and eccentric (.45r) pencil bores.

Preview rolling slider uses ideal conjugate geometry, not rigid-body/friction simulation. User must keep gentle outward finger pressure; gear may disengage or lift if released. Drawing repeat depends on tooth-count gcd (52:20 repeats after five orbits). No press fit, locking or precision-instrument claim.

## Studio / controls

374 px scrollable left editor, compact sticky brand/theme header, collapsible labelled sections; large right Three.js viewer. Phone: preview, dimensions/warnings/export first, controls stacked underneath. Local Fredoka/Rubik fonts, lavender-grey #e7e9f1 desk, white panels, #1f2233 ink and coral #e2557a tactile buttons; persisted dark theme, focus outlines, 44 px targets, reduced-motion support. Three real model-thumbnail presets, circular/octagonal/lobed outer rims, undo/redo, six local named designs, portable JSON.

Assembled, instructional exploded lift, actual connected card, clean plate and isolated-part views use the same meshes. Orbit/pinch/zoom, fit/top/front controls. Colour is preview-only: **STL has no colour**. Every STL export remains bed-flat, not an assembled layout.

### Parameters / units

All physical dimensions in **millimeters**.

| Parameter | Supported range |
|---|---|
| Card envelope | 100–180 × 120–180; packing checked |
| Ring teeth | 48 / 52 / 56 / 60 |
| Pinion teeth | 20 / 24 |
| Tooth module | .9–1.2 |
| Ring rim | 4–6 |
| Pencil bores | 1.6–2.4; minimum bore-to-bore web 1.6 |
| Profile clearance | .15–.35 total, half on each profile |
| Sheet | 1.8–3.2 |
| Spacing | 3–5 |
| Breakaway runners | .6–.8 wide × .4–.6 thick |
| Apron engraving | .4–.6 deep; 4–7 footprint; ≥1.2 backing |
| Art placement | X ±1.5, Y ±2, rotation ±180° |

Frame/crossbar 2.4 mm. Card too small, unsupported counts, unsafe art transforms, empty silhouettes and unprintable files block exports rather than clamp or fake a replacement.

## Local image / SVG / text workflow

PNG/JPEG file-picker on phone/desktop and drag-drop; synthetic PNG/JPEG/ring SVG examples bundled. Actual matching file content required, **16 bytes–2 MB**, ≤12MP / ≤6,000 px side, normalized to ≤500 px. Simple SVG filled shapes/paths rasterize locally at 256 px; scripts, external references, effects and unflattened text rejected. Six original searchable icons and eight-character text use this same real geometry path.

**Exact conversion:** composite onto light/dark background; contain/cover and crop shift ±25% map to a **20×20 luminance grid**. Threshold 1–254 selects dark pixels, or grayscale sets continuous depth. Construct one closed triangulated height surface with sides/bottom and Boolean-subtract it from the remote ring apron using Manifold. Checkerboard displays actual sampled cutout; bright holes preserve backing in the final exported solid. This is sampled **2D-to-silhouette/height relief**, NOT automatic 3D reconstruction from one photo or exact vector tracing. Small details can disappear. Only engraved mode is offered so all parts remain inside the declared sheet/card thickness.

Physical footprint, depth, pixels, threshold, background, fit, crop, rotation and placement measurably change STL. Source and cutout previews, replace/remove/reset are working controls.

## Local STL integration / units / contract

**ASCII and binary STL** ≤2 MB / **1,500 triangles**, each source dimension .2–250 assumed mm. STL has no units: explicit millimeter confirmation required. Source format, triangle count, oriented dimensions and scale factors displayed. Z up, Y up (+90° X) and −Z up; changing orientation requests reattachment. XY proportionally scales to footprint; Z independently maps to .4–.6 mm engraving depth. Rotate, center, place, replace/remove and reset supported.

The **exact accepted source triangles** become a Manifold solid and are Boolean-subtracted into the apron, not just displayed or re-exported. Narrow supported contract: one consistently outward-wound, connected, closed **convex broad-flat-bottom** solid without overhang, bottom contact ≥25% of XY rectangle. Checks include finite coordinates, actual type/content, size, count, dimensions, transforms, triangle area, opposite welded edge incidence, component/volume, intersection, convexity and footprint. Concave/hollow/open/nonmanifold/inward/disconnected/self-intersecting/overhanging meshes are explicitly rejected with guidance; no repair or hidden convex-hull substitution. A hull only validates bottom contact area, never replaces the source. Minimum scaled XY span1.2 mm; cutter must remain inside apron keep-in radius5.8 mm, away from teeth and with ≥1.2 backing.

## Worker, privacy and restoration

Heavy parse/CSG runs in a Web Worker with locally bundled Manifold WASM. Bounded detail, 100 ms debounce, generation IDs and source-aware current-state keys. Invalid/building state disables STL/ZIP; an explicitly labelled last-good preview is never silently exported. Preview and export share the exact current mesh; UI fingerprint is compared to downloaded bytes in tests. No remote API, paid service, CDN generation or uploads. Dependencies bundle locally. Only synthetic fixtures committed, no personal files.

Named/local designs and portable JSON include bounded normalized PNG or verified source mesh; restored sources are revalidated. Missing image payload explicitly asks for file reattachment. JSON ≤2 MB; normalized PNG ≤250k pixels / 1.8m data URL chars. Local storage stays on this device. No inaccessible file path is pretended restored.

## Printing / assembly / calibration

1. Print card **OR** clean ring/pinion, Z=0 bed face, 100% mm, PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended. Use per-part STL or Everything ZIP (real card, both clean STLs, exact design JSON, numbered instructions and assembly SVG).
2. Snip **six** low runners: four outside ring rim and two in top/bottom pinion root valleys. Use fine flush cutters. Flush-trim root-valley scars to **≤.1 mm above root arc**; never damage involute flanks/tips. Root runner bands fit between flanks, and .1 mm remnant pads are included in full-orbit collision checks. Clean STL has no scars. Discard connected carrier.
3. Tape ring's apron to paper, lower loose pinion vertically, and mesh a tooth into a gap. No snap or retention. Fine pencil in center bore gives a circle; offset bore gives hypotrochoid. Keep both bed faces flat on paper and apply gentle outward pressure while rolling. External paper/pencil/tape required; no glue/hardware.
4. Start profile clearance .25 PLA / .30 PETG; these are printer/material-dependent starting points. Print the two clean parts as the calibration sample. Adjust clearance or bore to suit first-layer expansion, filament and pencil; don't force rough teeth.
5. No physical prints, strength, wear, friction, drawing accuracy or feel tests performed. Computational checks do not establish these.

## Reproduce checks

```sh
npm install
npm test
npm run dev -- --port 5998
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node mobile-test.cjs
node portable-errors-test.cjs
npm run predeploy
```

Tests parse real float32 binary STL with independent finite/nondegenerate/winding/positive-volume/1e−5 mm welded edge and component checks. Validate every part and translated clean plate, declared card bounds, single card connectivity, simulated six cuts yielding carrier + intact ring + pinion, first-layer upper-footprint containment, pencil holes, bore webs, 121 ideal rolling positions including root remnants, blocked overdrive and vertical drop/release. Defaults, all presets, every parameter extreme, every tooth-count pair at module/clearance extremes, and image/STL-derived extremes run these checks. Browser tests perform real PNG/JPEG/ASCII/binary uploads/downloads, geometry comparisons, bad-input rejection, exact JSON regeneration, portable imports, saves/undo/redo, ZIP entries, stale/error worker handling, touch orbit/pinch and 320/390 px layouts. See VALIDATION.md / JSON reports for executed results.

Dependencies: React/Vite/Three.js/fflate (MIT), Manifold (Apache2.0), Fontsource Fredoka/Rubik (SIL OFL), gh-pages, Playwright (Apache2.0). Shared studio/import-validator infrastructure adapted from earlier daily apps; original gear profiles, poses, root-runner layout and independent mechanical checks implemented here. Keycap Studio provided concrete maker-studio patterns, not wholesale source/dependency/history copying. Root monorepo predeploy/deploy publishes the combined site; app gh-pages scripts are retained.
