# Gate & Glide — a dock-release fidget studio

A React + Vite, local-browser parametric STL generator. Lower a double-flanged key through a broad entry dock, glide into a narrow retaining lane, and deliberately return to the dock to release it. This differs from a closed captive track: the accessible dock is the release gate, with no cap, flexing latch or hardware. Two rigid printable solids; not a game or a static model.

## Run / build

```sh
npm install
npm run dev
npm run predeploy
npm test
```

`npm run deploy` is the requested per-app gh-pages script (`gh-pages -d dist`); publication for this collection uses the **root** monorepo `npm run predeploy` / `npm run deploy` instead. Vite base: `/daily-app2/20261024-17/`.

Dependencies: React/React DOM, Three.js + OrbitControls, Manifold WASM for robust solid operations, fflate for ZIP, Vite and its React plugin, gh-pages; Playwright for reproducible browser checks. All production dependencies, worker code and WASM are bundled locally. No API, remote font, CDN, service account or paid service.

## Geometry and controls (millimeters)

| Control | Supported range | Meaning |
|---|---|---|
| Board width | 26–34 | Palm and lane envelope |
| Lane travel | 20–36 | Dock-center to farthest key-center travel |
| Retaining flange span | 12–16 | Cross-lane width of both flanges |
| Running clearance | 0.25–0.55 | Per-side neck gap AND per-face axial board gap |
| Lane throat width | 4.2–5.2 | Narrow passage width; key neck = throat − 2 × clearance |
| Palm dimples | 0–0.6 | Actual shallow subtractions from stationary palm |

Board thickness 2.4 mm, flange thickness 2 mm, key longitudinal depth 6 mm. Board well floor 1.6 mm. Neck width ≥3.1 mm, flange overlap ≥3.4 mm on each side. Full flange engagement begins after 6 mm + clearance travel from the dock. The key remains **removable**, not permanently captive; partial engagement near the dock is not a safe holding position.

The key is one simple I-section polygon extruded through 6 mm, avoiding coplanar Boolean seams. It is rotated conceptually relative to assembly so every part starts at Z=0 in the print layout. The lane and dock are true solid subtractions, not overlapping visual shells. Imported grips and built-ins are true Manifold unions into the fixed palm.

Three genuinely different size/fit presets have live model thumbnails: Pocket Dock (short, loose, small flange), Gate & Glide (balanced), Long Dwell (long, snug, broad flange). Variations stay within supported ranges. Controls update geometry in a worker; the final mesh is shared by the Three preview, dimensions, fingerprint and binary STL exporter. Preview palette changes do not change geometry or convey colour in STL.

## Image import: real 2D-to-relief conversion

PNG and JPEG only, verified content signatures and dimensions before decoding: 16 bytes–2 MB, ≤12 MP, ≤6,000 px per side. Images are locally normalized to ≤500 px for portable saves, then sampled to a bounded 20 × 20 grayscale grid. White is used under alpha. `contain` fits the whole image, `cover` crops to a square; X/Y crop shifts ±25% are editable. Source and sampled conversion previews are shown.

Luminance = 0.2126 R + 0.7152 G + 0.0722 B. Threshold mode raises samples darker than the threshold (1–254) by the relief depth; other samples stay on the backing. Grayscale mode uses `depth × (1 − luminance/255)`. Neighboring heights form a triangulated continuous top surface; a boundary skirt and bottom close it on a 0.4 mm backing, embedded 0.15 mm into the well floor and robustly unioned. Relief depth 0.4–3 mm. This is **2D relief**, not reconstruction of a full 3D object from a photograph. Threshold boundaries interpolate between grid samples; no arbitrary fine detail is promised. Empty white silhouettes/reliefs disable export.

Footprint 4–7 mm, Z rotation ±180°, placement X ±1.5 / Y ±2 mm. Every resulting vertex must remain within a 6.5 mm radius protected palm zone, isolated by at least 11.95 mm from the entry dock. Invalid combinations are blocked, not clipped or silently repaired. Threshold, depth, crop, pixel content, footprint and placement all affect the exported solid.

## STL import: deliberately bounded, verified integration

Binary AND ASCII STL, 40 bytes–2 MB, 1–1,500 triangles, each source dimension 0.2–250 mm. Source dimensions and a source 3D preview appear before integration. **Explicit millimeter confirmation is required**: STL has no unit metadata.

The parser rejects truncated content, nonfinite or excessive coordinates, degenerate faces, inconsistent winding, open or nonmanifold edges, disconnected solids, nonpositive volume and self-intersecting/touching geometry. Equal positions are welded at 0.00001 mm for topology checks. The integration contract is intentionally stricter than arbitrary STL: one convex solid with a broad flat Z-down base (≥25% of the XY box), no hollow sections, branches, concavity or overhanging XY projection outside the base. No automatic repair is claimed; errors explain how to re-export or choose a suitable low-poly grip.

Accepted meshes are centered, proportionally scaled in XY to a 4–7 mm maximum footprint, independently fitted in Z to 0.6–5 mm, rotated around Z and placed using the same safe-zone controls. Minimum fitted XY span 1.2 mm. The broad base is sunk 0.15 mm into the palm well floor; Manifold unions it to the board. Integration must produce exactly one connected closed board solid. This is a **new grip on the fidget**, not unchanged-mesh re-export. Imported geometry never changes the key, dock, retaining flanges or lane.

Choose/replace on desktop or phone, drag one file onto Import, remove source, reset transforms, reset image controls, or Reset all. Failed imports disable export until corrected or removed. Four original synthetic fixtures in `public/samples/` exercise PNG, JPEG, ASCII STL and binary STL without personal files; attribution included.

## Editor / export

Large warm matte 3D canvas; compact Shape / Mechanism / Surface / Import / Print rail; phone collapsible controls and fixed export. Orbit/zoom/pinch, reset/fit, 10 mm grid, selection highlighting and explicit final export X/Y/Z dimensions. Print layout versus assembled translation are clearly distinguished; the travel slider moves the actual rigid key through its lane. Assembled preview is kinematic, not contact physics. **Downloads always use the separated bed-flat layout**, even while viewing assembly.

One primary binary Download STL supports both parts together or either named part. ZIP includes both individual STLs and assembly guidance. Combined STL contains two separated closed components, not a fused assembly. Settings have bounded undo/redo (35 history states, 450 ms edit coalescing). Save/Open JSON embeds the normalized image and its conversion state, or the verified bounded STL vertices, indices and transforms. Portable imports are genuinely restored; missing/invalid image payloads prompt reattachment rather than claiming success. JSON limit 2 MB. All user processing stays on-device; no personal inputs are uploaded or committed.

## Mechanical and print guidance

Print PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, three perimeters. Both parts start bed-flat: board on its broad face, key on its long side as exported. No supports, hardware, flexure or print-in-place breakaway. Inspect seam/elephant-foot expansion, smooth slot lips and flange edges without thinning them. Print Pocket Dock first as a full-size calibration coupon. Clearance presets are starting guidance, not universal fits: 0.25 mm snug, 0.4 mm balanced, 0.55 mm loose. Tune to printer/material; never force a jam.

Lower either flange through the dock; center the board between the flanges. Slide beyond the stated full-engagement distance, then glide and return deliberately to the dock to lift free. No permanently captive claim. Small loose key: not for children. Stop at cracked edges, layer separation or rough binding.

## Validation and its limits

`validate.mjs` independently parses exported binary STL, checks exact count/length, finite vertices/normals, nondegenerate triangles, normalized and consistent outward normals, welded edge incidence of exactly two with opposite directions, connected components, positive enclosed volume and expected millimeter dimensions. Each generated part passes topology/winding/volume checks in the worker before export is enabled.

78 parameter cases cover defaults, all three presets, simultaneous minima/maxima, every one of the 64 range corners and eight variations; 24 imported-output cases cover threshold/grayscale images and both STL encodings at default/extreme/preset parameters. Robust solid intersections probe 21 assembled travel positions, 15 dock insertion/extraction heights, six bidirectional flange-retention stops, print-layout separation, unchanged key and import isolation. Independent bounds are X = travel + 41.5; Y = board width + flange span + 8; Z ≥6 mm (higher imported grips can extend it to 6.45 mm).

`browser-test.cjs` selects real files, downloads actual exports, revalidates meshes and mechanics, compares file fingerprints to exact preview geometry and saved state, tests transform/pixel changes, invalid files, recovery, phone imports and touch orbit/pinch. `extra-browser.cjs` checks presets/variations, save/open with all portable sources, undo/redo, ZIP, drag/drop, assembly travel and colour neutrality. `mobile-sheet.cjs` verifies every tab and reachable export at 320 px. JSON reports and screenshots record observed checks; see VALIDATION.md.

**These are computational geometry/mechanism and browser checks, not physical print tests.** No physical sliding, retention force, fatigue, wear or material performance is asserted. Inspect your slicer preview and calibrate before use.
