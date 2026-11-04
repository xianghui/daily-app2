# NACA & Spar

A local React/Vite parametric **four-part airfoil-skeleton kit card**. Snip sixteen real runners, thread two straight spars through four closed rib mortises, align registration ticks and bond. Not a game, flight-ready wing or aerodynamic simulator. No physical printing, fit, strength or aerodynamic performance has been tested.

## Run

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261105-4/`. Individual `deploy` uses gh-pages, but publication of the combined gallery uses the repository ROOT predeploy/deploy flow.

Dependencies are locally bundled React, Vite, Three.js/OrbitControls, Manifold WASM, fflate and Fontsource Fredoka/Rubik. No CDN, API, paid service or key. User input is processed entirely in the browser and never uploaded. Only synthetic sample files are bundled.

## Reference-first evidence and adaptation

First inspected actual local candidates under `/Volumes/ExternalHD/3d_printing_apps/`: keycap_generator2's `clicker_template2.stl` (944 triangles, 15.20 × 15.20 × 43.10 mm, three components) and fidget_fabric_generator's `diamond-link.stl` (5,940 triangles, 7.981 × 9.241 × 8 mm, one component), plus their README/instructions. MX sockets and interlocking fabric do not supply suitable sheet joints; neither was imposed on this kit.

Selected **White Cat Kit Card / Printables 865769**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), CC BY 4.0. Download URL, source identifier, source/license hashes, component bounds and actual measured cross-sections are in [reference-analysis.json](reference-analysis.json). Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 mm; millimeters assumed because STL has no units. License was downloaded and hash-verified again. `REFERENCE-LICENSE.txt` and `REFERENCE-UPSTREAM.md` preserve attribution/terms.

The mesh was downloaded and parsed, not inferred from a listing image. Z=.100/.215/1.590 mm sections in `evidence/reference-sections.png` reveal the sheet receivers and low-runner construction. Sheet 1.60 mm, socket opening 4.50 × 1.70 mm, runner tops .21/.22 mm. Raw topology splits into 27 edge-adjacent components, including duplicate/degenerate zero-volume pseudo-components: the complete source is **not manifold**, and inspection is not a printability claim. It is used as measured design evidence only, not repaired/re-exported. No raw source STL or fan-art silhouette is redistributed.

Concrete mapping:

- Default sheet 1.60 mm and mortise width 1.70 mm preserve the source's measured sheet-receiving interface width; default TOTAL width clearance is .10 mm.
- Source 4.50 mm socket length is not reused. New closed through-mortises are **6 + clearance mm tall** for 6 mm axial spars. Both ports follow the actual section mean line.
- Real frame, partition rails and four bed-aligned removable tabs per part adapt the source carrier construction; .4–.6 mm runners deliberately strengthen the measured .21–.22 mm source runners.
- Original geometry: normal-offset NACA four-digit ribs, two stations at 42% and 70% chord, two one-ended handle spars, reference ticks and axial insertion. This is not the source model or a reskin of a previous cross-lap kit.

Visual/interaction reference: inspected read-only keycap_generator2 README, styles.css, App.tsx, Viewer.tsx, worker, import/STL, image-trace, export and engine modules. Applied its 374 px sticky-header left controls / large right viewer, paired mm inputs, collapsible sections, tactile lower-shadow buttons, pink selected states, lavender desk, local rounded fonts, checkerboard conversion/source pair, explicit imported STL units and geometry exports. Shared local studio plumbing adapts previous daily-app work; section geometry and assembly checks are new. No reference project was edited, deployed or copied wholesale.

## Section and assembly design

Mean-line maximum camber at 40% nominal chord. For normalized chord x, camber m and thickness t, use the classic piecewise quadratic NACA mean line and half-thickness:

`yt = 5*t*c*(.2969*sqrt(x) - .1260*x - .3516*x² + .2843*x³ - .1015*x⁴)`.

Upper/lower contours are offset **normal** to the mean line using its derivative, not just vertically shifted. 129 bounded cosine-spaced stations per surface. Ends deliberately stop at 1.5% and 93% nominal chord, creating blunt printable ends; final rib chord differs from nominal chord, particularly with camber. This is an intentionally truncated, thick educational section, not a certified full-chord airfoil. Preview shows actual mesh coordinates, not aerodynamic deformation.

Closed ports at 42/70% chord follow their local mean-line elevations. Both spars are 6 mm tall and extend 8 mm beyond the far rib station. Their broad one-ended handles remain outside the near rib; **free narrow ends** thread through near then far rib. Centre-plane ticks set the chosen rib spacing; there is no positive retention. Calibrate, align and bond four joints with suitable adhesive. Optional paper skin/tape and external support/jig are not exported. Hardware-free assembly, but adhesive required.

## Supported parameters

All dimensions in **mm**, except explicitly marked percentages/degrees.

| Control | Range |
| --- | --- |
| Card width / height | 160–220 / 160–230 |
| Rib centre-plane spacing | 72–108 |
| Nominal chord | 72–92 |
| Thickness ratio | 26–34% |
| Maximum camber / location | 0–4% / fixed 40% chord |
| Sheet | 1.6–2.4 |
| TOTAL mortise clearance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |

Three actual model-thumbnail presets: symmetric, cambered and thick sections. Rounded/clipped/scalloped spar handles, text (eight characters), six searchable bundled SVG marks, preview palette, undo/redo, six local named designs and portable JSON. Preview colours are not in STL. Assembled, exploded, connected card, loose plate and individual-part views use the same solid results; exploded offsets are explicitly preview-only. Printable downloads always use Z=0, bed-flat orientation.

## Image → actual engraving

PNG, JPEG and restricted simple SVG. Up to 2 MB, 12 MP, maximum 6,000 px side (raster); SVG ≤2,000 simple elements, no scripts, links, references, filters or external resources. Pixel dimensions are checked before decode. Normalize to ≤500 px, then sample **20 × 20 luminance heights** after fit/cover crop, ±25% pan and light-background removal or dark inversion. Threshold mode maps dark samples to chosen engraving depth; grayscale mode maps luminance to proportional depth. The exact conversion grid is displayed on a checkerboard beside the source. The grid is triangulated with side walls/backing and **Boolean-subtracted** from a real solid. Bright holes remain unengraved material, not filled dark regions.

This is explicitly **2D-to-relief conversion**, not automatic full-object reconstruction from one photo, and not exact outline tracing. Low resolution is deliberate for bounded responsive local work. Threshold 1–254, depth .4–.6 mm, physical footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm. Every actual transformed vertex must stay inside a 5.8 mm keep-in radius centred at 18% nominal chord on the mean line. Empty conversions, out-of-range transforms and unsafe placements disable export. Minimum backing is 1 mm. Only engraved marks are supported to preserve the rib envelope.

## STL → actual integration

Both ASCII and binary STL, max 2 MB / 1,500 triangles, one connected, consistently outward-wound closed solid, .2–250 mm each axis. Checks include finite coordinates, nondegenerate triangles, welded-edge incidence, opposite winding, connectivity, positive volume, self-intersections, convexity, broad flat-bottom contact (≥25% XY bounding area) and XY projection contained in its bottom footprint. **Concave, hollow, disconnected, open, nonmanifold and overhanging meshes are explicitly unsupported.** There is no repair claim or hull substitution: unsupported input is rejected with guidance.

Pick Z-up, Y-up or inverted Z before attachment; changing it clears the file and asks for reattachment. Source dimensions, units and triangle count are shown with a source 3D view. Confirm millimeter coordinates explicitly: STL contains no unit metadata. Proportional XY scaling sets the footprint; independent Z scaling sets .4–.6 mm engraving depth. Rotate/center/place/reset then Boolean-subtract the **actual original triangles** from the signature rib. Resulting solids, not interpenetrating shells or unchanged reexports, are shown and downloaded. Source/final views and fit/depth feedback stay visible. Replace/remove/reset return cleanly to built-ins.

Samples under `public/samples/` are small synthetic PNG/JPEG/SVG, ASCII wedge and binary gem fixtures, not personal files. Browser file-picker and drag/drop are supported. Everything stays local. JSON includes bounded normalized image pixels/data or original validated mesh payload; restore revalidates it. Missing image payload requests reattachment instead of pretending restoration. Local storage is origin/device-specific; portable JSON is the backup.

## Geometry, responsiveness and exports

Manifold WASM in a Web Worker performs real unions/differences. Inputs are bounded and edits debounced; generation ids and exact current-state keys reject stale responses. Errors and pending imports disable every geometry export. Last-good preview may remain, visibly labelled, but cannot silently be exported after an invalid edit. A final independent finite/nondegenerate/positive-volume/closed-edge/winding check runs on every generated part before worker success. Binary float32 STL serializes actual normals. Browser tests compare UI geometry fingerprint, downloaded STL and regenerated portable JSON.

Download connected-card STL, clean loose-plate STL, every clean part STL, or Everything ZIP containing connected card + four part STLs, bounded portable design JSON and numbered `ASSEMBLY.txt`. ZIP is not 3MF. Real tabs join the parts to a single connected carrier; this is not merely loose pieces beside a rectangle.

## Printing

Print art up, Z=0, PLA/PETG, .16–.20 mm layer height, .4 mm nozzle. Supports not intended; inspect in your slicer. Print a rib and spar first for calibration: clearance depends on printer/material. Snip runners outside clean edges, trim scars without widening functional mortises. Insert the two free spar ends through the signature rib, then the plain rib. Match differing port elevations, align centre ticks, square on an external jig and bond four joints. Handle stops do not capture the ribs. Optional external paper skin/tape and display support are not included. A skeletal model only: no structural, flight or aerodynamic performance claim.

## Reproducible validation

`npm test`: 67 default/preset/extreme/shape/corner/image/STL cases, independently parse every binary STL, including translated loose plate. Verify byte counts, finite nondegenerate triangles, normalized outward normals, bounds, 1e-5 mm welded edges (exactly two opposite incident faces), per-component positive volume, one-component card, four separate clean parts. Kernel checks include exact card bounds, sixteen cuts → carrier + four unharmed parts, no flat/assembled intersections, 50 full-stroke axial insertion samples, four unblocked mortises including connected-card probes, 1.2 mm mortise walls, ≥1 mm engraving backing, bed-supported cross-sections and eight actual NACA contour probes (≤.025 mm interpolation/simplification discrepancy).

Production browser suites: `browser-test.cjs`, `studio-test.cjs`, `extra-test.cjs`, `personalization-test.cjs`, `orientation-test.cjs`, `mobile-layout.cjs`, `interaction-test.cjs`. `serve-production.py` serves the real `/daily-app2/20261105-4/` base at port 5944. Reports and screenshots are saved beside the app. Browser tests use real PNG/JPEG/ASCII/binary STL picker uploads and downloads, compare changed pixels/threshold/depth/mesh transforms against no-import, reject invalid/open/nonmanifold/excessive/empty inputs, recover/reset, verify ZIP contents, JSON and named saves, undo/redo, dark mode, worker-failure gating, phone touch orbit/pinch, preview-first 320/390 px layout and reachable exports. See `VALIDATION.md` for actual completed results.

**Computational checks are not physical printing, force, fatigue or aerodynamic testing. None of those physical tests was performed.**
