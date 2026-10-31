# Ray & Split

A React + Vite browser studio for an original **five-part flat-pack beam-splitter experiment kit card**. Snip twenty breakaway runners, assemble a deck, input aperture, 45-degree film frame and two perpendicular targets, then add external thin transparent partially reflective film. The film transmits light toward +X and weakly reflects toward +Y. Actual visible results, split ratio and film quality are untested; this is not a promised 50:50 optical instrument or light simulation.

## Reference-first design evidence

Read-only local candidates were examined first: Keycap Studio's 944-triangle switch template (three components, 15.2 × 15.2 × 43.1 mm) and Weave's 5,940-triangle diamond link (one component, 7.981 × 9.241 × 8 mm). Their README/instructions and actual meshes were inspected; neither has appropriate sheet-kit interfaces. Their hashes and reasons are in `reference-measurements.json`.

Selected reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. This run downloaded the actual STL and repository license independently, parsed it with trimesh, and inspected mesh sections at Z .1/.5/1.59 mm (`evidence/reference-sections.png`). No reference tree was modified and no raw source STL is redistributed.

Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles; bounds **179.820 × 178.020 × 3.190 mm**; 27 edge-adjacent components; source is **not watertight**. It is a design reference, not a silently repaired printable import. STL units are assumed millimeters, corroborated by sheet-scale features.

**Measured:** sheet planes at 0/1.6 mm, socket approximately 4.5 × 1.700012 mm, runner planes .21/.22 mm. **Preserved/adapted:** default 1.6 mm sheets, 4.5 mm tongue width, sheet-plus-total-fit receiving thickness. **Proposed:** .15 mm total allowance (.10 resembles measured sheet direction), 2–2.6 mm insertion depth and .4–.6 mm FDM runners. The diagonal frame/socket, two target directions, film window and optical stations are original parametric CSG reconstruction, not copied geometry or a reskinned prior mechanism. See `reference-analysis.json` for concrete mappings.

Reproduce with `python reference-inspect.py /path/to/downloaded-reference.stl` using trimesh, numpy, matplotlib. The raw reference remains outside the app.

## Studio reference and dependencies

The read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, image-trace, STL parser and export modules were inspected. Concrete patterns carried forward: 374 px left control rail/right gradient viewer; paired sliders and number inputs; coral/lavender light studio and saved dark theme; tactile raised selected buttons; checkerboard source/cutout previews; preview-first phones; worker/current-state export gating. Common editor/import/view infrastructure is adapted from `20261031-19`; beam-splitter solids, stations, transforms, tests and explanatory content are new. No reference Git history/dependency tree was copied.

Fresh Vite scaffold; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production preview: `node serve.mjs` → `http://127.0.0.1:5621/daily-app2/20261031-20/`. Node 22.12+. Per-app deploy scripts exist as requested; combined public deployment uses the root monorepo flow.

Locally bundled dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM (Apache 2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for development validation. No CDN, paid service, API key or upload endpoint. All personal file processing stays in the browser; only synthetic fixtures are bundled.

## Parameters and assembly geometry

All lengths in **millimeters**, angles explicitly degrees. Three real mesh-thumbnail presets: Balanced paths, Wide film, Pinhole paths; square/soft/clipped deck silhouettes.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 200–216 / 224–240 |
| Deck width / length | 78–84 / 78–84 |
| Beam axis above deck surface | 24–28 |
| Film clear square opening | 22–30 |
| Film frame border | 3 fixed |
| Target diameter | 30–34 |
| Input aperture diameter | 2–4 |
| Deck / standing sheet thickness | 2–2.6 / 1.6–2 |
| Total socket allowance | .10–.30 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Artwork footprint / depth | 4–7 / .4–.6 |
| Art rotation / X / Y offset | ±180° / ±1.5 / ±2 |

Four 4.5 mm wide shoulder-supported tongues seat to the deck thickness. In deck coordinates, the optical centre is at Y=length/2, Z=deckThickness+height. Input/straight target positions are X=±(width/2−8), local panel rotation 90°; diagonal frame X=0, rotation 45°; reflected target X=0, Y=length−8, rotation 0°. The splitter normal is (1,−1,0)/√2: ideal reflection of +X is +Y. No external film or simulated beam is disguised as printed geometry.

All pieces and runners start on Z=0. The real connected card is a Boolean union of a divided frame, five parts and twenty low runners. Snips 1.6 mm outside each envelope avoid tongues and leave accessible nubs. Independent tests cut every runner and require exactly five released parts plus carrier. Default card 208 × 232 mm exceeds some 220 mm beds; use clean-part STLs instead, not unverified shrinking that changes fits.

## Both import workflows

Picker works on phones/desktop; drag/drop also supported. Replace/remove, centre/reset transforms and return-to-defaults are real state changes. Both imports modify the **exported solid** by Manifold Boolean engraving, not textures or unchanged re-export. Artwork is limited to a protected front-left deck patch (centre X−deckWidth/2+12, Y10), separate from sockets and optical parts. Minimum remaining backing is 1.4 mm. Raised art is deliberately unsupported here: only safe recessed marking is offered.

### PNG / JPEG / simple SVG → geometry

Content/header validation before decode: 16 bytes–2 MB, max 12 MP, max 6,000 px side. Normalize to ≤500 px; SVG must contain only simple local shapes, ≤2,000 elements, no external links/resources, scripts, effects or text. Rasterize SVG locally to 256 px. Fit/cover crop, pan ±25%, light/dark background, threshold 1–254 or grayscale relief. Alpha composites onto chosen background. Convert to an exact **20 × 20 sampled grid**, luminance `.2126 R + .7152 G + .0722 B`, thresholded depth or proportional inverse luminance. Adjacent samples triangulate a closed heightfield cutter; subtract from the deck. No exact vector contour tracing is claimed; fine outlines quantize and sharp threshold boundaries interpolate over a cell. Bright interior holes remain unengraved on continuous backing, verified by actual solid probes. Source and actual cutout/heights are shown on a checkerboard. **2D-to-relief, not automatic 3D reconstruction from a photo.** Text and six searchable bundled marks use this same geometry path.

### ASCII / binary STL → exact mesh-shaped engraving

Max 2 MB and 1,500 triangles, axis extents .2–250 mm. Parse actual content, weld at 1e−5 mm, require finite/nondegenerate outward winding, exactly two opposite faces per edge, one positive-volume connected component and a broad flat-footprint convex solid. Unsupported open/nonmanifold, concave, hollow, disconnected, overhanging or excessive meshes are rejected with actionable errors; there is no hull replacement, repair claim or discarded concavity. The supported convex class is intentionally narrow and disclosed before import.

Source preview displays oriented dimensions, count/format and explicit millimeter confirmation (STL stores no units). Z/Y/−Z up selection precedes attachment; changing it requests reattachment. XY proportionally scales to footprint; Z independently fits engraving depth. UI shows both scale factors. Rotate/place/centre the original mesh, then Boolean-subtract that exact shape. This adapts imported geometry into the personalized deck without touching assembly interfaces; it does not re-export the mesh unchanged. Empty silhouettes, nonfinite/excessive transforms, broken payloads or geometry that leaves the safe zone block exports.

## Studio / exports / portable state

Heavy CSG and parsing run in a Web Worker with bundled WASM, 100 ms edit debounce and request-id stale-result guards; bounded mesh/image resolution. Building/success/error states are real. Each generated part passes finite, closed-edge, winding, nonzero-volume checks. Failed/unfinished edits may leave a labelled last-good preview but **all export buttons are disabled** until the exact current-state key validates. Preview and binary STL/ZIP use the same geometry. The UI includes a printable-mesh signature tested against downloaded bytes and Node regeneration.

Assembled, exploded, connected-card, de-tabbed and isolated-part views; see-through, orbit/touch pinch, fit and zoom. Exploded offsets are explanatory, not print orientation. STL always uses bed-flat fabrication geometry; no view overlap is exported. Per-part binary STL and Everything ZIP (real card plus five clean parts, numbered assembly instructions and current fits); STL stores neither units nor colors, no fake 3MF.

Undo/redo (35 snapshots), six named local designs, JSON save/open include bounded portable normalized PNG or checked mesh payloads. Missing source payloads require reattachment instead of pretending restoration. JSON max 2 MB, image payload max 1.8M characters/250k pixels; saved STL is reparsed/validated. Existing browser storage is local, not cloud.

## Printing, external materials and calibration

See numbered instructions in the app and ZIP `ASSEMBLY.txt`. PLA/PETG, .16–.20 mm layers, three walls, 100% scale, bed-flat, supports not intended. Trial-seat one tongue; adjust total clearance for material, printer, slicer and first-layer expansion. No universal fit is claimed. Snip/trim runners, seat all four panels, bond tongues with filament-compatible adhesive and cure. Fixed seats are clearance fits requiring adhesive, not retained snaps.

Cut **thin transparent partially reflective film** to opening +5 mm square (31 mm default) and tape taut on the diagonal frame. Clear PET packaging may yield a weak reflected beam; appropriate teaching beam-splitter film can improve contrast. Opaque foil blocks transmission. External film, tape, adhesive, cool low-power LED torch and optional white target paper are not printed/bundled. Illuminate from the left along +X in a dim room; hand-align the source. Never use sunlight, lasers or hot lamps. No measured brightness, image quality, film performance or 50:50 split is claimed.

**Physical printing, assembly, fit and optics have NOT been tested.** Computational watertightness, insertion clearance and directional calculations are not stress, adhesion, film-flatness or optical-performance tests.

## Reproducible validation

- `npm test`: three presets, three silhouettes, combined min/max and per-field bounds; 18 image/STL-derived outputs under the same tests. Every exported component is parsed independently as float32 binary STL: finite nonzero faces, normalized normals, consistent winding, closed welded edge incidence at 1e−5 mm, positive per-component volume and expected millimeter bounds.
- Assembly: all part-pair intersections, vertical insertion/removal trajectories, aligned centers, real clear straight/reflected channels and full film-window probes; independently calculate ideal reflected direction. Check card envelope, nonoverlapping clean parts, all twenty safe snips → six released components, and upper sections within bed footprints.
- `node hole-check.mjs`: actual Boolean probes verify an image ring's white hole remains unengraved, its dark ring removes geometry and backing remains continuous.
- `node browser-test.cjs`: production WASM/worker paths, actual PNG/JPEG/ASCII/binary file-picker imports, downloaded bytes versus preview signature and Node regeneration; pixels/threshold/depth/scale/rotation/placement changes; replace/remove/reset; malformed, open/nonmanifold/concave/excessive input rejection; per-part exports; 320/390 px phones with touch orbit/pinch and reachable exports.
- `node studio-test.cjs`, `node personalization-test.cjs`, `node stale-test.cjs`: presets and all marks; actual ZIP meshes parsed; JSON/image/mesh round trips; local named designs/reload; missing payload errors; undo/redo; views, dark theme, keyboard focus and collapse; aborted worker recovery and stale-result export blocking.

Reports and screenshots accompany the app. Root gallery inline-script/runtime checks, combined production imports/exports and public deployment verification are recorded separately. Only performed checks are reported as passed in `VALIDATION.md`.

`node orientation-test.cjs` additionally verifies Y-up and upside-down STL inputs and explicit source detachment when changing the up axis.
