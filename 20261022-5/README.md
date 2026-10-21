# Quarter Pause

A local, browser-based **four-step Geneva fidget design studio**. Turn the driver rim: its pin advances a slotted index wheel a quarter-turn, then a circular locking crescent holds the dwell. This is an intermittent rotary mechanism, not an Oldham coupling, gear pair, crank-slider or reskinned spring fidget. Five separately printed solids; no purchased hardware.

Original studio UI informed by the model-first editing composition at [Vaseverse](https://vaseverse.org/): large orbitable canvas, compact parameter rail, restrained sand/clay palette, real geometry thumbnails, touch controls and reachable export. No reference branding, assets, source or copy is used. Shared local editor/import infrastructure is adapted from earlier Daily Object Lab studios; the Geneva geometry and kinematics are new.

## Run, build, deploy

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base is `/daily-app2/20261022-5/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publication uses **root** `npm run predeploy` then `npm run deploy`, not the per-app publisher.

Dependencies are bundled locally: React/React DOM, Vite, Three.js + OrbitControls, Manifold-3D (local WASM), and fflate. Generation and topology preflight run in a module worker. No API keys, remote modeling service, CDN imports or personal-upload storage. Playwright is a development-only browser validation dependency.

## Modeling and controls

All lengths below are **millimeters**. The locking-radius multiplier is dimensionless.

| Control | Range | Effect |
|---|---|---|
| Axis spacing | 34–44 mm | Physical spacing of the driver and output axes |
| Drive plate thickness | 3–5 mm | Lower driver plate and output shoulder height |
| Index wheel thickness | 4–6 mm | Output thickness, pin engagement and locking arc height |
| Drive pin diameter | 3–4 mm | Pin and matching radial-slot width |
| Lock radius ratio | 0.34–0.42 | Lock radius = spacing × ratio, matching recess geometry |
| Cap socket allowance | −0.08–0.08 mm | Static friction socket allowance relative to 2 mm radius tips |
| Rim groove depth | 0–0.6 mm | Subtractive grip scallops on both rotary rims |
| Running clearance | 0.20–0.50 mm | Radial/slot/lock gaps and axial gaps |

The three presets differ in plate size, thickness, lock radius and tactile profile. Variations stays within those bounded ranges. Numeric entries outside ranges block export with feedback. Advanced fit calibration is disclosed in Mechanism. Colour only changes the matte preview: **STL contains geometry, not preview colours**.

- Live geometry edits, orbit, zoom, reset/fit, touch orbit/pinch.
- Assembled motion versus separated, bed-flat printable layout. Exports always use the latter.
- Tap a part for active selection. The export selector independently chooses all parts or one part.
- Undo/redo, including bounded imported source state. History is debounced by 450 ms so a drag is a modeling action rather than hundreds of entries.
- Local Save/Open JSON includes the normalized image and conversion parameters or validated mesh payload. Files are never silently pretended restored. Open revalidates saved mesh topology; malformed files block export. Design JSON limit: 2 MB.
- All-parts binary STL, per-part binary STL and ZIP with all five individual STLs plus assembly notes. Useful filenames encode input kind, size, index thickness and clearance.
- X/Y/Z dimensions refer to the selected printable export. Millimeter grid spacing in the preview is 10 mm. The assembled arrangement occupies less XY area than the exported parts laid side-by-side.

## Local image workflow

File picker and drag/drop accept actual **PNG and JPEG**. A file must be 16 bytes–2 MB, no larger than 12 million pixels or 6,000 pixels on either side. Header checks happen before browser decoding; content must match the extension. Decode errors remain recoverable.

1. Choose/replace a source or use synthetic `mark.png` / `waves.jpg`.
2. Source is normalized to at most 500 pixels on its longest side, then converted on a **20 × 20** grid. Source and exact conversion previews remain visible.
3. Fit uses contain or cover. Crop shifts are ±25% in X/Y. Transparent and uncovered areas are composited onto white.
4. Luminance is `0.2126 R + 0.7152 G + 0.0722 B`.
5. Threshold mode gives samples below the chosen threshold (1–254) the full relief height, other samples zero. Grayscale mode gives height `depth × (1 − luminance/255)`.
6. Grid samples become a triangulated continuous height field over a **0.4 mm backing**. Neighboring samples interpolate linearly across triangles; this is not a voxel-column stack and not an exact traced contour. Back and side faces close the solid. Empty all-white silhouettes/reliefs are rejected.
7. Relief depth is 0.4–3 mm. Footprint is 4–7 mm; Z rotation ±180°, X offset ±1.5 mm, Y ±2 mm. The backing is sunk 0.15 mm into the fixed palm tab and **boolean-unioned** with the frame using Manifold. Preview and exported frame use that same final solid.

This is **2D-to-relief / raised-silhouette conversion**, not automatic reconstruction of a full 3D object from one photo. High-contrast artwork is easier to read than photographs at this deliberately bounded resolution. Safe-zone errors explain how to reduce, center or reset placement. Reset image controls, remove import, replace import and reset-all are distinct working actions.

## Local STL workflow and deliberately bounded support

Both **complete ASCII and binary STL** are parsed locally. STL has no units. The original mesh dimensions are shown and **explicit millimeter confirmation is required** before integration or export. Source mesh is separately orbitable.

Limits: 2 MB, 1–1,500 triangles, 0.2–250 mm on **each** axis, finite coordinates. Only **one connected, closed, consistently outward-wound, convex solid** with a broad Z-min flat base is supported. Its XY projection must remain inside that bottom footprint; the flat base must cover at least 25% of its XY bounding rectangle. Concave, open, nonmanifold, disconnected, inward-wound, self-intersecting, tilted-base and overhanging meshes are rejected with actionable guidance. There is **no automatic repair** claim. Reorient, simplify or make a convex support-free grip in your local modeler before trying again.

Preflight welds coordinates at 0.00001 mm tolerance, checks edge incidence and directed balance, positive volume, connectedness, degeneracy, pairwise triangle intersections, convexity and bed footprint. Complexity is bounded before heavy intersection work. Parsing runs in the worker; progress text and disabled exports prevent stale results being downloaded.

The mesh is centered in XY and moved to Z=0, proportionally fitted in XY to the 4–7 mm footprint, and independently fitted to 0.6–5 mm height. The UI explicitly describes this normalization; it is not a claim of preserving original Z proportions. Rotate around Z, offset X/Y, reset transforms, replace/remove, or return to built-in defaults. No tilt is offered, because it would violate the supported bottom-face contract. A fitted minimum XY span of 1.2 mm is enforced.

The bottom 0.15 mm is sunk into the fixed grip tab and **solid-unioned** with the frame. A radial safe zone of 6.5 mm on that tab rejects placements that could leave it or obstruct motion. The imported shape, dimensions, scale and placement survive in the exported frame. Merely displaying or re-exporting the source is not this workflow. User files never become repository fixtures.

Synthetic fixtures are authored within this project family and have no third-party source assets: monochrome mark PNG, grayscale wave JPEG, ASCII wedge, binary gem. Download links and Try buttons are included.

## Mechanism and assembly

Let spacing be `D`, crank radius `r = D/√2`, and input angle `θ` near pin engagement. With the output centered at `(D,0)`, the pin vector is `(r cosθ − D, r sinθ)`. The slot angle is `β = −atan2(r sinθ, D − r cosθ)`, using a slot initially pointing left. Engagement runs from input −45° to +45°; output moves from +45° to −45°, a 90° step. The remaining 270° is dwell. Fourfold wheel symmetry makes the preview wrap to an equivalent slot at the slider boundary. Reverse input reverses motion.

Four concave circular recesses match the driver's circular locking crescent. A relieved 94° sector opens for pin engagement. Dwell is geometric locking, **not a spring detent**; clearances and sector relief create limited transition play. Do not try to force the output wheel during dwell. Digital checks sample pin alignment, actual solid intersections and a forced ±8° output perturbation during dwell to verify a real locking obstruction.

Five printable parts:

1. **palm-frame**: flat base, raised output shoulder, two integral stepped spindles, source grip tab.
2. **pin-driver**: flat lower plate, integral pin and relieved locking crescent.
3. **index-wheel**: four open radial slots, four dwell recesses, through bearing bore.
4. **driver-cap** and **index-cap**: identical friction-seated cups; these are stationary and removable.

Print all as exported, flat bases down, **no supports expected for the built-in geometry**. Caps print socket-down with an approximately 4 mm bridge at the bore roof; inspect the slicer's bridges. Approved STL grips stay within the flat-bottom support-free contract. Image relief may have steep side slopes but has no separate suspended islands. Start with PLA or PETG, a 0.4 mm nozzle, 0.16–0.20 mm layers, four walls, and a conservative speed. No bearings, magnets, screws or other hardware are required.

1. Clean elephant foot from slot mouths and bores. Check the driver pin in a slot before assembling.
2. Seat the driver on the left spindle, plate-down / pin-up.
3. Seat index wheel on the **raised right shoulder**, above the driver plate, not level with it. At the initial preview pose, one slot points toward the pin.
4. Turn gently through engagement to verify alignment.
5. Friction-seat both caps on narrow spindle tips. Their bottoms stop on stationary shoulders above the moving parts, leaving running clearance. Pull caps evenly for disassembly. Never glue the moving interfaces.
6. If a cap is loose, use a smaller socket allowance and reprint. If motion binds, clean/ream cautiously or choose a roomier running clearance and reprint. Never force a caught drive pin.

Calibrate the full-size driver and index as pin/slot coupons, then one cap/frame tip before printing a full decorative design. Start around 0.30 mm running clearance; 0.20 and 0.45 mm presets are starting points only. Fits depend on printer, material, layer height and orientation. The minimum slot-to-bearing wall is calculated from the actual parameters; all allowed combinations leave over 3 mm. The tab is beyond the full rotary envelope. Cap socket interference is intentional only at static friction seats, never at running joints.

## Validation, limitations and honesty

`npm test` writes `geometry-validation.json`. It parses actual generated binary STLs, checking nonempty finite triangles, nondegenerate faces, normalized consistent normals, welded edge incidence exactly two with opposing direction, positive enclosed volume per connected component, one component per part/five in the layout, bed-flat Z=0 and expected millimeter dimensions. It checks defaults, all presets, minimum/maximum and all 256 parameter corners, representative variations and image/STL-derived models. It checks nonintersecting print layouts, bearing walls, cap capture and analytical pin/slot alignment. Full solid collision and dwell tests cover default/extreme/preset and representative imported outputs.

`node browser-test.cjs` runs real desktop/mobile file pickers and downloaded STLs: PNG, JPEG, ASCII STL and binary STL; threshold/depth/crop changes; scale/rotate/placement; replacement/removal/reset; malformed/truncated/unsupported/oversized files; empty silhouettes; unsafe transforms; all individual parts; 320/390 px viewports, touch orbit/pinch, reachable export, exact preview/export signatures and displayed mm bounds. `node extra-browser.cjs` checks presets/variations, history, all portable import save/open round trips, ZIP, local drag/drop and colour neutrality. Screenshots and JSON reports record the performed checks. Tests use only synthetic fixtures.

Digital validation is **not physical print testing**. No physical prototype, friction, strength, wear, snap force or cap retention-force test has been performed. Broad 2 mm sampled motion steps are supplemented by analytic pin/slot relations; they are not a proof of continuum mechanics or universal printer fit. Small parts are removable: this is not a child's toy. Never advertise an untested physical print as verified.
