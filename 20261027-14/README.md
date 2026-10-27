# Right Angle Reverie

A local-first React + Vite parametric **Scott–Russell linkage fidget studio**. A thumb slider moves in X; the far end of a rigid long bar follows a perpendicular Y line. The bar midpoint rides a rocker exactly half its pin-center length. This is not an automatic-return toy: hand-guide forward and back. Four separate lift-apart parts, no hardware. All exports are bed-flat, pins upward.

## Run / build / export

```sh
npm install
npm run dev
npm run predeploy
npm test
node motion-validation.mjs
node serve-production.cjs
# In another terminal, after the production server is running:
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node stale-import-test.cjs
node interaction-test.cjs
```

The base is `/daily-app2/20261027-14/`; the production test server uses port 5384. Per-app `deploy` is configured as required, but publication of this collection uses **root monorepo** `npm run predeploy` and `npm run deploy`, which stages `deploy/index.html` and all app directories. No reference or archived project is deployed by this app.

Download a selected part, a separated print-plate binary STL, or Everything ZIP (four STL files plus assembly notes). ZIP is not 3MF; STL contains neither colours nor units. Import into slicers as millimeters at 100%. Export and preview consume the same worker result; the UI fingerprint is checked against actual downloaded bytes. Invalid edits, pending conversions, parse failures and stale worker results disable every mesh export. A last-good preview is labelled when export is paused.

## Mechanism and ranges (millimeters)

| Control | Range |
| --- | --- |
| Palm diameter | 22–28 |
| Half-link pin-center length L | 22–26 |
| Long bar pin-center length | exactly 2 L |
| Link thickness | 3–4 |
| Running clearance (per side, including radius) | 0.3–0.5 |
| End-stop inset (at each end) | 0–2 |
| Palm dimple depth | 0–0.6 |
| Import footprint | 4–7 |
| STL grip height | 0.6–5 |
| Import X / Y translation | ±1.5 / ±2 |
| Import Z rotation | ±180 degrees |
| Image raised / engraved depth | 0.4–3 / 0.4–0.6 |

Round, hexagonal and oval palm shapes; three actual model-thumbnail presets; bounded variations; paired numeric/range inputs. The track endpoints are `2 L cos(62°) + inset` and `2 L cos(42°) - inset`. The stroke never reaches either toggle singularity. With slider A=(x,0), bar end B=(0,y) and midpoint M=(x/2,y/2), `x²+y²=(2L)²` and `|OM|=L`. Nominal joint centers in preview neglect backlash. Lower parts are seated on the deck, and the long bar sits on their upper bearing faces; rail tops are 0.8 mm below the long bar, not protected by an imaginary floating gap. Use horizontal over a table: all parts intentionally lift out. Rail walls and end stops retain the slider only in XY; no captive-retention, snap or spring claim.

## Image import: real geometry, not a texture

PNG and JPEG are required and supported; simple self-contained SVG paths/shapes are also accepted. File picker on phones/desktops, desktop drag/drop, replacement/removal/reset, source preview and checkerboard conversion preview are provided. All included samples are original synthetic CC0 fixtures (see `public/samples/README.md`). Text and six searchable original SVG marks use the same conversion pipeline.

1. Inspect PNG/JPEG signature and dimensions before decoding. Limit 16 bytes–2 MB; ≤12 million source pixels and ≤6,000 pixels per side. Downscale the portable image payload to ≤500 pixels per side (≤250,000 pixels).
2. Locally rasterize simple SVG to 256×256. Reject scripts, external references, filters, embedded images, text, unsupported elements and more than 2,000 nodes. SVG is sampled relief, not exact vector extrusion.
3. Fit or crop to a 20×20 grayscale sample grid, apply ±25% crop translation, composite transparent background, optionally invert dark backgrounds, then threshold (1–254) or calculate grayscale heights.
4. For threshold mode each sample has height `depth` if darker than threshold, otherwise zero. Grayscale height is `depth × (1-luminance/255)`. Adjacent samples form triangulated sloping height-field faces over a 0.4 mm solid backing; sharp pixels are not exact traced outlines. White holes remain unraised/unengraved over the continuous backing, **not through-holes**. Checkerboard shows removed foreground samples. Actual boolean-solid probes test the ring fixture's hole for both styles.
5. Scale, rotate and translate into the isolated stationary palm well. Manifold unions raised geometry or subtracts mirrored engraved relief. Engraving depth is bounded to protect the 3.6 mm minimum floor. No photo-to-full-3D reconstruction is claimed.

Changing pixels, threshold, grayscale mode, depth, fit/crop, size, rotation, placement or engraving changes the final exported triangles. Empty masks block export. Text at this small scale is decorative; fine lettering may disappear in 20×20 sampling, so prefer short marks and inspect the cutout.

## STL import: restricted, explicit integration contract

Both ASCII and binary STL are parsed locally in the worker. STL contains **no unit metadata**: confirm that displayed source dimensions are millimeters before integration. Select Z-up, Y-up (+90° X), or −Z-up before attaching; changing axis clears the source and asks for reattachment. Source mesh preview and dimensions are separate from final geometry. XY scales proportionally to the chosen footprint, while height is an independent Z fit; rotation/translation are numeric physical transforms. Reset transforms / remove / replace are available.

Limits: 2 MB, ≤1,500 triangles, 0.2–250 mm on every source axis, finite coordinates within ±10,000 mm. Weld at 0.00001 mm; require nondegenerate triangles, exactly two opposite-directed incidences per edge, one connected outward-wound positive-volume component and no self-intersections. Integration deliberately supports only **convex, broad flat-bottom, non-overhanging solids**. Verify all vertices against original face planes; reject concavities, cavities, thin branches, disconnected shells, open/nonmanifold meshes and overhangs with actionable errors. This is not a convex-hull replacement or an arbitrary repair tool. The bottom's 2D convex hull is used only for contact validation, not to substitute geometry. Bed contact must cover ≥25% of bounding footprint. Transformed XY thickness must remain ≥1.2 mm.

The original verified mesh is scaled and fused 0.15 mm into the well floor by solid union, rather than appended as interpenetrating shells or merely re-exported. A 6.5 mm radial safe zone isolates customization from every joint, track and moving part (≥36.5 mm from deck edge). Unsupported sources must be remodeled/reoriented externally. No file upload, API key, paid service, CDN dependency or remote file-processing service.

## Studio features / persistence

Reference-inspired lavender-grey desk, white panels, coral tactile raised keys, locally bundled Fredoka/Rubik (SIL OFL), saved light/dark theme, 374 px left controls / right viewer on desktop; preview-first stacked phone layout. Touch orbit/pinch and fit/zoom, assembled/exploded/print-plate and every isolated-part view, see-through base, ideal stroke and inspection-lift controls. Pose/exploded/colour settings affect the preview only; export remains real bed-flat solids.

100 ms debounced generation and parse in a dedicated Manifold WASM worker. Bounded geometry and independent final-mesh manifold checks run for every build, including float32 print-plate placement. Request IDs and state fingerprints guard stale geometry; explicit worker error blocks export and reload restarts it. Named local designs (six entries), undo/redo (35 snapshots), JSON save/open with bounded portable PNG/mesh payloads. Invalid/missing portable payload is rejected, never represented as restored. Personal inputs stay in browser memory/local storage/user-downloaded JSON; none are committed to this repository.

Dependencies are bundled locally: React, Vite, Three.js + OrbitControls, Manifold 3D, fflate, Fontsource fonts. Playwright is used only for tests. Studio infrastructure is adapted from the existing Daily Object Lab code; the mechanism geometry and kinematic/collision checks are new. Keycap Studio was inspected read-only for specific UI/import/worker/export patterns, not copied with its Git history or dependency tree.

## Printing / assembly / calibration

PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 25–35% infill. All four parts are flat on Z=0 as exported, pins upward; intended support-free. Inspect first layers and bore sizes, deburr carefully. Use **Soft Start as a full-size calibration trial**, then adjust per-side gaps for your machine/material; no universal tolerance promise. Do not force a binding joint.

1. Put the half-rocker bore on the fixed post.
2. Place the thumb slider between track walls.
3. Seat the long bar end bore on the slider pin, and midpoint bore on the rocker pin.
4. Guide the slider between physical stops and reverse; the far pad follows the perpendicular path. Keep level over a table.
5. Lift long bar first, then rocker and slider to release.

Closed-manifold solids do not establish real fit, friction, wear, tactile feel or force. **No physical print has been tested.** Small loose components are not for children.

## Reproducible validation

See `VALIDATION.md`, scripts and JSON reports. Independent binary STL checks cover byte length, finite values, nonzero triangle area, normalized normals consistent with winding, mm bounds, welded edge incidence/opposite directions, connected-component positive volumes and separate plate placement. Kinematics and Manifold intersection checks independently cover complete supported stroke, all intended solid pairs, rail walls/end stops, vertical assembly/release and print-plate nonintersection. Browser tests actually select PNG/JPEG/ASCII/binary files and download exports, compare hashes with UI and Node regeneration, reject malformed inputs, round-trip portable assets and ZIP, and use touch orbit/pinch at phone widths. These are computational/browser checks, not physical print testing.
