# Groove Relay

A local React + Vite maker studio for a **positive-return closed face-groove cam fidget**. Turn a two-lobe cam and its groove sends a thumb follower outward and inward through radial rails. Unlike an open polar cam, both groove walls drive the follower: no return spring or gravity is needed for in-plane motion. Hold level; parts are intentionally **not captive** and can be lifted apart.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
node run-browser.cjs
node transfer-check.mjs
```

`run-browser.cjs` serves the actual production output at `/daily-app2/20261026-22/` on port 5340 and exercises it with Playwright Chromium. Install Chromium with `npx playwright install chromium` if needed. Root monorepo predeploy/deploy publishes the combined collection; this app also has the required `predeploy` / `deploy` scripts.

## Studio and reference

The read-only Keycap Studio reference informed concrete maker patterns: 374 px left rail, sticky compact brand/theme header, tactile raised selected buttons, collapsible labelled sections, slider/number pairs, local Fredoka/Rubik fonts, lavender-grey desk, coral accents, live right-side 3D viewport, source-editor controls and clear export panel. Phones put preview, dimensions and export before stacked controls. Saved light/dark mode, keyboard focus and reduced-motion support are included. The reference was inspected, not edited or deployed. Established local import/export studio infrastructure is reused; the cam/follower geometry and its mechanism checks are new, not a cosmetic reskin.

## Parameters (millimeters unless noted)

| Control | Range | Purpose |
|---|---|---|
| Palm diameter | 22–28 | Round, hexagonal or oval palm outline |
| Cam mean radius | 15–17 | Groove centerline radius |
| Stroke amplitude | 2–4 | Half of the total radial stroke (4–8 mm) |
| Running clearance | 0.3–0.6 per side | Spindle, pin channel and radial guide fits |
| Cam thickness | 4.5–5.5 | Leaves at least 2.3 mm below the groove |
| Palm dimple depth | 0–0.6 | Real subtractive grip dimples |

Gentle Start, Groove Relay and Long Sweep are real presets with live model thumbnails. Bounded random variations, undo/redo, six local named designs and portable JSON save/open are implemented. JSON includes bounded normalized image or validated mesh payloads; missing image payloads request reattachment rather than pretending a source was restored. Import footprint 4–7 mm, STL grip height 0.6–5 mm, rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm are guarded against leaving the 6.5 mm radius palm safe zone. Text up to eight characters and six searchable bundled SVG marks use the same image-to-solid pipeline.

## Local image conversion

PNG and JPEG file-picker imports, drop and bundled synthetic samples work on desktop and phones. Simple, self-contained SVG filled shapes are rasterized locally; external resources, scripts, text and effects are rejected. Maximum 2 MB, 12 MP, 6,000 px side. Images are normalized to at most 500 px, then fit/crop/pan sampled to **20 × 20 luminance values**. Transparent areas are composited onto the selected light/dark background. Threshold mode assigns selected samples a height; grayscale mode assigns `depth × (1 − luminance/255)`. A checkerboard displays the actual conversion cutout/grid beside the source.

The grid is triangulated into a closed height field with continuous backing and robustly unioned to the palm well. Raised depth is 0.4–3 mm; engraving is limited to 0.4–0.6 mm, leaving at least 3.6 mm floor. White holes stay unraised/unengraved inside the backing, verified by final-solid probe tests. This is **sampled 2D-to-relief, not full 3D reconstruction or exact vector tracing**. Features smaller than the grid may disappear. Change content, background, threshold, depth, fit, scale, rotation and placement to change exported geometry. Source replacement, removal and reset are implemented.

## STL integration contract

Both binary and complete ASCII STL are parsed locally in the worker. Limits: 2 MB, 1,500 triangles, each axis 0.2–250 mm. Source dimensions, format and triangle count are shown with a source 3D preview. STL has **no units**: users explicitly confirm millimeter scale before integration. Z-up, Y-up (+90° about X), and upside-down orientations are supported; changing up-axis clears the source and requires reattachment.

Supported inputs are one outward-wound, closed, connected, convex, non-self-intersecting solid with a broad flat bottom (at least 25% of its XY bounding footprint) and no projected overhang beyond that bottom. Open/nonmanifold/concave/hollow/disconnected/unsupported meshes are rejected with actionable feedback. No automatic repair or convex-hull substitution occurs. The bottom hull is used only to validate contact, never to replace the imported solid. XY scales proportionally to the footprint control; Z independently fits the grip-height control. The actual transformed mesh is solid-unioned into the palm with a small seating overlap; disconnected integration is rejected. The protected palm is isolated from all cam/follower geometry, so imported features cannot fuse a moving joint.

All files stay in the browser. No server processing, external API, key, CDN or upload. Only synthetic fixtures are bundled; personal uploads are never written to the repository. Fonts, Three.js, Manifold WASM, React and fflate are bundled locally. Fontsource fonts are SIL OFL; Manifold Apache-2.0; Three.js/React MIT; fflate MIT. Six simple geometric icon paths are bundled in `src/icons.js`.

## Geometry, views and exports

Manifold WASM performs real solid operations in a Web Worker. Groove centerline is `r = R + A cos(2θ)`, sampled at 192 segments. A normal-offset region with half-width `1.2 + clearance` forms the closed groove, cut 2.2 mm deep. Follower pin is Ø2.4 mm and engages about 1.49 mm; it clears the groove floor by about 0.71 mm. Minimum supported outer rim wall is 1.2 mm. Raised open guide rails are beyond the cam perimeter. The follower is a 3 mm flat plate with an upright printed pin, flipped pin-down for assembly.

Assembled, exploded, print-plate, palm-only, moving-parts, cam-only and follower-only views; orbit, zoom and fit; see-through palm. The nominal motion slider illustrates two strokes per turn; 0.01 mm seating offsets are preview explanatory offsets, not exported assembled overlaps. Export always uses bed-flat geometry and the exact current checked parameters/mesh. Invalid edits, conversion, loading errors and stale worker results disable export; the last valid preview is explicitly labelled when invalid. Every generation checks closed edge incidence, outward winding, finite coordinates and positive volume. Per-part binary STL buttons, separated print-plate STL and a real ZIP containing the three STLs plus assembly notes. STL contains no preview colour. No misleading 3MF option.

## Printing and assembly

- PLA/PETG; 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 25–35% infill as starting points.
- Three separate bed-flat parts; no supports/hardware intended. Follower prints pin UP, then flips pin DOWN for use.
- Place cam on spindle. Lower follower pin into the groove while seating the long arm between guide rails. Rotate gently, reverse and repeat. Hold level; do not force a tight channel.
- Lift follower first, then cam, to release. Parts are non-captive; keep loose pieces away from children.
- Print Gentle Start as a full-size fit calibration set; deburr channel/bores and elephant foot. Clearances depend on printer and material, not universal promises.
- Default separated plate is approximately 215.5 × 52 mm; use per-part exports for smaller beds. All slicer dimensions are millimeters; keep 100% scale.

## Verification and limitations

`validate.mjs` independently parses binary STL, checks byte length, finite vertices, nondegenerate faces, stored unit normals/winding, expected dimensions, welded edge incidence at 0.00001 mm tolerance and positive volume for **each** connected component. It validates all 64 parameter corners, presets, supported palm shapes and image/STL-derived variations, each individual part and separated plate. Mechanical checks separately sample a full revolution with exact kernel intersections, verify both groove walls constrain radial motion, guide overlap, floor/rim/bore walls, print-layout separation, safe personalization and vertical release. `transfer-check.mjs` densely samples all nine radius/amplitude combinations at 193 poses.

Browser scripts exercise real PNG/JPEG/SVG and binary/ASCII file imports, changed pixels/threshold/depth and transformed geometry against baseline exports, file rejection/recovery, fingerprints matching preview and JSON-regenerated STL, hole preservation, actual per-part/ZIP contents, portable round trips, undo/redo, named designs, themes, views, stale/error guards, 320/390 px preview-first layouts, touch orbit/pinch and reachable downloads. Production worker/WASM loading is tested under the real base prefix. Reports and screenshots are generated beside these scripts. Computational checks do **not** establish forces, friction, durability or practical tactile quality. **No physical print testing was performed.**
