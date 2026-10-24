# Belt Reverie — pinch-to-couple fidget studio

An original browser-based React/Vite parametric fidget generator. Pinch the straight runs of a slack endless TPU belt while turning a flanged drum to encourage the second drum to turn by friction; release to slip. This differs from a toothed gear drive, fixed-post capstan or a preloaded belt transmission. Friction, deformation and fatigue have **not** been physically tested. No claim of measured traction or certified retention is made.

## Studio

Large orbit/zoom/fit Three.js preview; Shape / Mechanism / Surface / Import / Print tabs; compact right rail; mobile collapsible controls and fixed export area. Three actual geometry thumbnails, valid-range variations, numeric + slider controls, selectable parts, undo/redo, portable local JSON save/open, and geometry-neutral preview colours. STL contains geometry, not colours. Export all six separated parts as a binary STL, each part individually, or a ZIP containing six STL files and assembly notes. Print layout and assembled reference poses are explicitly distinguished. Assembled poses use the exact generated/exported meshes. Drum rotation is illustrative only: the relaxed belt does not animate circulation or deform, and friction is not simulated.

All processing is local. Bundled React, Three.js, Manifold WASM and fflate; no API, CDN, key, paid service, uploads, analytics or personal repository fixtures. Generation, final mesh preflight and STL parsing run in a Web Worker. The development server is not required after building; serve dist from any compatible static host.

## Parameters (millimeters)

| Parameter | Range | Purpose |
|---|---|---|
| Drum diameter | 22–28 | Palm size and track radius |
| Drum center distance | 34–44 | Exposed pinch span |
| TPU belt wall | 1.2–1.8 | Pinch stiffness; use TPU 95A |
| Running clearance | 0.25–0.50 | Bore radial fit, drum axial gap and unloaded belt radial slack |
| Drum track height | 3–4 | Belt height is track minus 0.6; leaves 0.3 on each edge |
| Palm dimple depth | 0–0.6 | Actual subtracted tactile relief |
| Cap radial allowance | -0.06 to -0.01 | Negative allowance is deliberate cap/post interference |

Base floor is 3 mm, recessed palm floor 2.2 mm, posts radius 2.5 mm, flanges extend 1.2 mm beyond track radius, cap roof 1.2 mm, socket depth 2.5 mm. Top flange has a 45-degree underside. The belt is intentionally slack, without pretension: its relaxed inner perimeter exceeds the tangent track perimeter by `2π × clearance`. Flanges overlap the relaxed belt by 0.7–0.95 mm; this guides gentle use but does not guarantee capture under stretch. All supported parameter corners are checked. Empty or invalid numeric inputs disable export; stale geometry cannot be downloaded while a new edit is pending.

## Image import

File picker on desktop/phone and one-file drag/drop. Actual PNG or JPEG, 16 bytes–2 MB, at most 12 MP and 6,000 px per side. Signature/header dimensions checked before decoding. Reduced to a local portable preview of at most 500 px per side, then composited on white into a **20 × 20** grid. Contain / cover and ±25% crop shifts control placement; transparent pixels become white. Luminance is `0.2126R + 0.7152G + 0.0722B`.

Threshold mode uses `height = depth` when luminance < threshold (1–254), otherwise zero. Grayscale mode uses `depth × (1 − luminance/255)`. Depth 0.4–3 mm; a continuous 0.4 mm backing and triangulated interpolated top surface close the height-map into one solid. This is a low-resolution 2D-to-relief/raised silhouette conversion, **not reconstruction of a full 3D object from a photograph**. Pure white/empty relief is rejected. Original preview and exact conversion-grid preview are shown. The 4–7 mm physical footprint can rotate ±180° and shift X ±1.5 / Y ±2 mm. Every vertex must stay in a 6.5 mm safe radius. The backing overlaps the stationary palm floor by 0.15 mm and is boolean-unioned, not exported as an overlapping shell. Source pixels, threshold, depth and transforms therefore alter exported triangles and bounds.

## STL import and restricted integration contract

ASCII and binary STL, 40 bytes–2 MB, at most 1,500 triangles, each axis 0.2–250 mm. **STL has no units; explicitly confirm source coordinates are millimeters** before export. Source 3D preview and dimensions are separate from the final model. The source is centered and proportionally fitted in XY to the chosen 4–7 mm footprint; Z is independently fitted to 0.6–5 mm height. Z rotation, XY placement and transform reset are provided. Units and fit behavior are disclosed; no hidden inch conversion occurs.

Accepted meshes must be one convex, closed, consistently outward-wound connected solid with a broad flat Z-down base covering at least 25% of the footprint; its entire XY projection must remain inside that bottom footprint. This deliberate restriction permits support-free integration. No hollow, concave, overhanging, tilted, disconnected, self-intersecting, open, nonmanifold, inward or degenerate meshes are accepted. No automatic repair is claimed. Parser checks finite coordinates, dimension/triangle limits, equal-vertex welded edge incidence and direction, connectedness, positive volume, triangle intersections, convexity and base projection before Manifold construction. Minimum fitted XY span is 1.2 mm.

The centered mesh overlaps the palm floor and is unioned through Manifold. The result must be exactly one closed solid. It cannot reach posts, tracks or belt. Replacing, removing or resetting returns to a built-in raised oval; unsafe transform errors are recoverable. File input remains usable after rejection and invalid export stays disabled.

## Local save/open and privacy

JSON includes bounded sampled pixels plus normalized image data, or bounded verified STL vertices/indices; imports are actually restored, never pretended. Original personal files are not uploaded or persisted by the app. Undo/redo snapshots include imports and transforms. Imported JSON is size-checked (2 MB), image payload bounds checked and STL payload re-parsed through topology validation. Only user-triggered design downloads save these payloads. Bundled synthetic samples (`mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`) are locally generated geometric/test fixtures inherited from this collection; no third-party imagery or attribution requirement. Do not commit personal test inputs.

## Printing and assembly

1. Print base, two drums and two caps in PLA or PETG; belt only in TPU 95A. Six parts, two materials, no bearings, magnets, fasteners or other hardware. Not print-in-place.
2. All exports sit on Z=0. Use 0.4 mm nozzle / 0.2 mm layers, at least three rigid perimeters, solid belt wall. No supports intended; 45-degree upper flange underside. Do **not** print the assembled reference layout.
3. Print one cap first as a full-size fit coupon, starting at -0.01 mm radial allowance. Try -0.03 or -0.06 only if loose. Print Light Ribbon belt as a full-size compliance calibration coupon. Printer/material tolerances are not universal.
4. Place drums over integral posts; flex TPU belt over upper flanges into the tracks before seating inverted cup caps socket-down. Caps retain drums with axial running gaps; their friction fit is not a certified snap lock. Do not force brittle caps. Loosen the allowance if necessary; never ream the axle/bore running interface to hide a bad design.
5. Hold the isolated palm, lightly pinch the two long belt runs inward while turning one flange; release to slip. No pretension or forceful pulling. Binding, whitening, cracks, layer separation or harsh effort mean stop and recalibrate. Belt can escape if overstretched. Small removable parts: not for children.

## Build and validation

```
npm install
npm run dev
npm test
npm run predeploy
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

Browser tests expect Vite on port 5280 (or `TEST_BASE`). Independent exported-binary parser checks finite nondegenerate triangles, unit normals consistent with winding, 1e-5 mm welded edge incidence exactly two per edge, opposite adjacent direction, positive volume for each component, expected component counts and millimeter bounds. Geometry tests cover defaults, min/max, three presets, all 128 supported parameter corners, representative variations and image/STL-derived outputs. Solid booleans check every print-layout part pair, full-turn drum/reference clearances, intentional cap/post interference, socket/roof seating, belt slack/flange guidance and unchanged moving components under imports. Exact mechanical equations are recorded separately from empirical physics. Worker runs a final manifold preflight on every edit, including Float32 export-layout rounding.

Real browser tests use file pickers with PNG/JPEG/ASCII/binary fixtures; compare exported hashes against builtin geometry and changed content, thresholds, depth, scale, rotation and placement; parse downloaded STLs; verify preview/export identity and displayed dimensions; reject malformed, open, concave, excessive and bad-dimension sources; empty silhouettes and unsafe transforms; exercise replace/remove/reset, preset/variation exports, ZIP parts, undo/redo and all portable import round trips. Touch orbit and pinch zoom, phone imports/downloads, 320/390 px overflow, tab/sheet controls and visible export are tested. Gallery scripts and preserved entries are checked before root deployment.

**Computational mesh and geometry checks are not physical print, friction, belt-strain, retention, force, wear, fatigue or cycle testing.** See VALIDATION.md and machine-readable reports for actual run results. The two same-direction rotating drum poses are not a traction proof.

Per-app deploy scripts exist as required, but public publishing uses the parent monorepo `npm run predeploy` / `npm run deploy` flow and its combined deploy folder. Vite base: `/daily-app2/20261024-21/`.
