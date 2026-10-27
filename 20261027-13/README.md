# Swash & Settle

A local React + Vite maker studio for a three-part, hardware-free **tilted-plane swash cam fidget**. Turn the inclined circular plate to raise a vertically guided thumb follower; gravity or gentle finger guidance returns it. Changing contact radius changes stroke without changing the cam diameter. This is a physical printable mechanism generator, not a browser game. No API, account, paid service, or network generation.

## Run / build / test

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# Against the production bundle at http://127.0.0.1:5383/daily-app2/20261027-13/ :
node browser-test.cjs
node feature-test.cjs
node interaction-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node motion-validation.mjs
```

`npm run predeploy` is exactly `npm run build`; `npm run deploy` is `gh-pages -d dist`. Public monorepo publication uses the **root** predeploy/deploy flow, not this individual app deploy command. Production base: `/daily-app2/20261027-13/`.

## Distinction from related gallery mechanisms

The gallery already includes Slope Sonata (20261022-22), a six-part swashplate driving a **transverse pivoted rocker**, a rotary-to-angular thumb interaction. This app instead uses a **prismatic C-guide and axial sliding follower**: direct vertical thumb translation, with no transverse pivot, cross axle, retaining caps or rocking output. Its three-part assembly, guide retention, contact foot and side-down follower export are separately designed and tested, rather than reskinned rocker geometry.

## Mechanism and geometry

The cam has a flat bed face, a 128-sided circular perimeter, and one inclined planar top. Its minimum thickness is 3 mm. A fixed central axle locates it radially. A rigid follower has a small finite contact foot, raised beam, vertical shaft and thumb pad. Its wider shaft runs behind an open-top C-guide lip while the narrower beam passes through the inward slot. The guide retains it in XY, not vertically. All parts intentionally lift off: use level over a table, and lift the follower before removing the cam. It will not reliably return upside down.

Ideal center-contact stroke is `2 * rimRise * contactRadius / camRadius`; the finite rectangular foot adds a small angle-dependent contact-height correction. Default ideal stroke is 4 mm. Preview uses the highest inclined plane point beneath that foot, with 0.01 mm separation, and cam seat lift of running clearance + 0.01 mm. Inspection lift adds up to 5 mm for explanation only. These offsets are explicitly preview-only, not printable assembly overlap or elastic simulation. Export is always the current validated geometry in bed-flat print orientation.

All final solids use Manifold WASM booleans. Imported details are unioned/subtracted into the **stationary palm**, at least 35.5 mm from the moving cam envelope throughout supported settings. Moving bodies are never fused. Binary STL serialization rounds to float32 before computing stored face normals. Every edit verifies finite geometry, nonzero faces, positive volume, opposing edge incidence, one connected closed solid per part, and the translated print-layout mesh. Invalid edits disable all exporters; there is no stale last-good download shortcut.

## Controls and ranges

All physical dimensions are **millimeters**; angles are explicitly degrees or revolutions.

| Control | Supported range |
| --- | --- |
| Palm diameter | 22–28 mm; round, hexagonal, oval |
| Follower contact radius | 8–16 mm |
| Cam rim rise above its center plane | 3–5 mm |
| Cam radius | 22–26 mm |
| Running clearance per side | 0.3–0.5 mm |
| Palm dimple depth | 0–0.6 mm |
| Import XY footprint | 4–7 mm, aspect preserved for STL |
| Imported STL grip Z height | 0.6–5 mm |
| Import rotation | −180–180° |
| Import placement | X ±1.5 mm; Y ±2 mm, additionally bounded by a 6.5 mm radial safe zone |
| Raised image depth | 0.4–3 mm |
| Engraved depth | 0.4–0.6 mm; preserves palm floor |

Soft Start, Swash & Settle, and Long Wave are real geometric presets with generated model thumbnails. Mechanically bounded random variation, undo/redo, six local named designs, JSON save/open, searchable original SVG marks, text relief, swatches, saved light/dark theme, collapsible sections and accessible numeric/slider pairs are implemented. Text up to eight characters is rasterized using locally bundled Rubik. Preview colours do not change STL. Assembled, exploded, print-plate, stationary palm, moving assembly and isolated cam/follower views share the exact model meshes.

## Image-to-fidget: PNG, JPEG and simple SVG

Use the file picker on desktop/phone, sample buttons, or single-file drag/drop. Files remain in the browser. Content signatures and header dimensions are checked before decoding: **2 MB**, **12 MP**, maximum **6,000 px per side**. PNG/JPEG pixels are normalized to at most 500 px; conversion samples a bounded **20 × 20 height grid**. Contain/cover crop and ±25% image offsets are available. Light/alpha background removal or dark inversion, threshold 1–254, grayscale relief, raised/engraved, scale, depth, Z rotation and XY placement change actual exported vertices.

Each grid vertex stores `depth` or zero for threshold conversion, or `depth * (1-luminance/255)` for grayscale conversion. Grid cells are triangulated; continuous solid backing and boundary walls close the volume. Transparent/checkered conversion preview shows the sampled cutout. Bright holes remain unraised or unengraved inside the solid palm; they are **not through-holes**. This is sampled 2D-to-height relief with pixel-grid transitions, **not exact vector tracing or full 3D reconstruction from one photo**. Empty art is rejected. Changing pixels, threshold, height or transforms changes final exported geometry.

SVG supports at most 2,000 simple path/shape elements. Scripts, references, external resources, effects and unflattened text are rejected; supported SVG is rasterized locally to 256 px and then uses the same bounded relief workflow. Even-odd ring-hole preservation is tested by boolean probes in the actual final mesh, in raised and engraved modes.

## STL-to-fidget

Supports real **ASCII and binary STL**, at most **2 MB / 1,500 triangles**, dimensions **0.2–250 mm per axis**. Choose Z-up, Y-up or upside-down before attaching. Source dimensions, format, triangle count and source 3D preview are displayed. **Explicitly confirm that the source coordinates are millimeters**, because STL has no unit metadata. XY scales proportionally into the footprint; Z independently fits the chosen grip height. Rotation and placement are applied to real vertices. The original mesh—not a substitute hull—is boolean-unioned into the isolated palm well.

The deliberately bounded integration contract accepts **one convex, consistently outward-wound, closed flat-bottom solid with no unsupported overhang footprint**. Concave, hollow, self-intersecting, disconnected, open, nonmanifold, inconsistent-winding, excessively slender, oversized, truncated and unsupported meshes produce actionable errors; they are not silently repaired, flattened, convex-hulled or discarded. A flat bottom must cover at least 25% of the XY bounding rectangle, and every projected vertex must lie within that bottom footprint. Mesh triangle overlap checks and oriented welded-edge checks occur in the worker before expensive integration. Use a broad low-poly solid grip or reorient in a mesh editor. Transform changes outside the safe zone are blocked.

Replace/remove import, reset transforms, reset image settings and return to built-in defaults are implemented and tested. Up-axis changes clear the old file and request reattachment rather than pretending it has been rotated twice.

## Portable designs and privacy

No user input is uploaded, sent to external APIs, or stored in this repository. Saved designs embed bounded normalized PNG pixels or bounded validated STL arrays; no fake file-path restoration. Invalid or missing embedded assets require reattachment. JSON maximum 2 MB; restored image data URL ≤1.8 MB and ≤250,000 pixels. Named designs are localStorage entries, not cloud backups. Clear local browser storage to remove them. Only original synthetic CC0 fixtures are bundled under `public/samples/`.

## Print and assembly

- Three PLA/PETG parts. No bought hardware, magnets, springs or bearings.
- Base and cam lie flat; **follower is exported on its side**, not in assembled orientation. Its beam, foot, shaft and pad share the same bed-side plane, avoiding suspended side-print features. Keep the exported orientation. No supports intended for these procedural parts or accepted support-free grip fixtures.
- Start with Soft Start as a full-size calibration trial; use 0.16–0.20 mm layers, 0.4 mm nozzle, three walls, 25–35% infill. Per-side 0.3–0.5 mm running fits depend on printer/material/slicer, and are not universal. Deburr and check free sliding before attempting a cycle.
- Drop cam on axle. Lower follower shaft into the open-top guide while the narrow beam enters its inward slot and the foot rests over the cam. Turn by the cam rim. Do not force binding or apply strong pressure to the cantilever.
- Let gravity settle, or hand-guide the return. Keep level over a table. Remove follower vertically before lifting the cam. Small loose parts, not for children.
- Exports: each part separately, combined nonintersecting print-plate binary STL, Everything STL+notes ZIP. ZIP is not 3MF; STL does not encode colour. Final export X/Y/Z is displayed for the selected part or plate.

## Validation and limits

See `VALIDATION.md` and committed JSON reports. Tests check every preset, representative parameter extrema and imported-image/STL cases. Independent STL parsing checks byte length, bounds, nonzero faces, finite coordinates, normals/winding, closed manifold edges and positive volume per connected component. Mechanical tests sample full turns, seated and preview offsets, guide-lip blockage, vertical assembly/removal paths and separated plate collisions. Production-browser tests perform actual file-picker imports/downloads, compare exact geometry signatures and round-trip saved JSON, test failure recovery, preview state, colour neutrality, views, ZIP contents and phone orbit/pinch at 320/390 px widths. This is computational geometry and browser verification, **not physical print, fatigue, force, feel, friction or durability testing**. Physical assembly and operation are unverified until printed.

## Dependencies / reference

React, React DOM, Vite, Three.js/OrbitControls, manifold-3d WASM, fflate, @fontsource/Fredoka and @fontsource/Rubik. Fonts and all runtime dependencies are bundled locally; no CDN. Playwright is development-only. Geometry/import work runs in a debounced worker with stale-response guards. Image sampling is bounded to 400 pixels; imported STL checks are bounded to 1,500 faces.

Visual/interaction reference: read-only Keycap Studio (`3d_printing_apps/keycap_generator2`): lavender desk, white panels, coral keycap-like controls, compact left editor, scrollable sections, source/final previews, import transformations, mechanism ghost and export panel. No switch sockets are imposed on this unrelated cam mechanism. Reuses local Daily Object Lab studio/import/export infrastructure; cam, follower, guide, motion and mechanism tests are specific to this app. No reference project history, scripts or dependency tree copied.

Published app: https://xianghui.github.io/daily-app2/20261027-13/ . The combined root gallery retains all earlier entries. Live publication checks are recorded in `public-validation.json` and `public-import-validation.json`.
