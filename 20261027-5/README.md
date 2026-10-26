# Tempo Fork

A local browser **Whitworth quick-return fidget generator**, built with React + Vite. Rotate an eccentric thumb crank: its pin slides along a pivoted lever slot, producing outward and return sweeps over unequal crank angles. This is a new crank/slotted-lever mechanism, not a visual reskin of the gallery's gears, Scotch yokes, rolling bearings or four-bar couplers.

## Studio reference

Read-only reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`. Inspected its README, editor, styles, viewer, worker, STL, image conversion and export modules. Transferable patterns implemented: 374 px scrollable left rail; sticky compact branding; collapsible labelled sections; paired mm sliders/numeric inputs; model-thumbnail presets; raised tactile selection buttons; lavender-grey desk, white panels, coral accents; large gradient viewer on the right; saved dark theme; phone preview-first stack with reachable exports. Local Fredoka/Rubik fonts. No switch socket, reference deployment, copied history, wholesale dependencies or keycap templates. Existing collection studio primitives were reused; the mechanism and its checks are new.

## Run and reproduce

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
# In another terminal, with production served at port 5375:
node browser-test.cjs
node feature-test.cjs
node hole-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
```

All generation, input handling, WASM, fonts and exports are bundled locally. No API keys, paid service, CDN or file upload. A static server is sufficient.

## Mechanism and supported parameters

Three individually closed rigid parts: palm frame with two posts, eccentric crank with its pin, and slotted thumb lever. Separate bed-flat export orientations; assembly is not print-in-place.

| Parameter | Range (mm) |
|---|---|
| Palm diameter | 22–28 |
| Pivot spacing d | 20–24 |
| Crank throw r | 6–8 |
| Radial bore/slot clearance | 0.3–0.6 |
| Slot wall | 2.4–3.6 |
| Crank pin radius | 1.4–1.8 |
| Palm dimples | 0–0.6 deep |

Round, hexagonal and oval palm silhouettes; Easy Cadence, Tempo Fork and Quick Return presets; mechanically bounded random variation. Frame floor is 4 mm; 0.8 mm recessed personalization well. Real printed thrust seats support the crank 0.2 mm above the floor and the lever 3.6 mm above it: a 0.4 mm axial gap separates the 3 mm crank body from the lever. The crank seat is radius 3.5 mm and the lever shoulder radius 3.7 mm, both wider than the supported bores. The preview therefore does not rely on floating axial positioning. Post radius 2 mm. Slot cap centers run from `d−r−1` to `d+r+1` mm measured from the lever pivot. Pin center distance remains `sqrt(d²+r²+2dr cos θ)`. Lever angle is `atan2(r sin θ,d+r cos θ)`; extrema ±asin(r/d). Ideal forward/return angle ratio `(π+2asin(r/d))/(π−2asin(r/d))`, about 1.38–1.71 across supported dimensions. The ratio concerns constant-speed input geometry, not an automatic motor or velocity simulation.

Real-time assembled, exploded, print-plate, frame, moving-parts, crank and lever views; see-through frame; touch/mouse orbit, pinch/zoom and fit. Motion omits actual running play and friction. Exploded separation is preview-only. No deformable parts or simulated material forces.

## Image / SVG / text / icon workflow

PNG and JPEG file pickers, drag/drop, and bundled synthetic sample files. Simple SVG paths and shapes accepted after rejecting scripts, references, effects, external resources, and unsupported elements. Text (up to eight characters) and six searchable bundled vector marks rasterize through the same workflow.

Images are checked by magic bytes and header dimensions **before decoding**. Max 2 MB, 12 megapixels, 6,000 px per side. Normalize to at most 500 px per side, then sample a **20 × 20** luminance grid. Choose light/transparent background removal or dark inversion, fit/cover crop and ±25% pan. Threshold 1–254 or grayscale heights; raised depth 0.4–3 mm or engraved depth 0.4–0.6 mm. SVG ≤2,000 elements, rasterized locally to 256 px. Source image and checkerboard cutout previews are shown.

The grid forms a closed triangulated height-field solid; Manifold unions it into (or subtracts it from) the palm well. White holes remain at the original floor rather than being filled with raised material; they are not through-holes. This is sampled **2D-to-relief**, not exact vector tracing or automatic full 3D reconstruction from a photo. Crop, threshold, pixels, depth and physical scale change exported geometry. Shallow engraving retains at least 2.6 mm floor. Empty silhouettes block export.

## Imported STL workflow

Actual ASCII and binary STL accepted. Select Z/Y/−Z up before choosing a file; changing orientation explicitly clears the source and requests reattachment. Preview original oriented mesh and measured source dimensions. **Explicitly confirm millimeter coordinates**, because STL has no unit metadata. Set proportional XY footprint 4–7 mm, independent Z height 0.6–5 mm, rotation ±180°, X placement ±1.5 mm and Y ±2 mm. Center/reset, replace/remove and built-in defaults remain available. Transformed original mesh is robustly unioned into the isolated palm well with 0.15 mm overlap, not merely displayed or re-exported unchanged. Mechanical parts stay untouched.

Supported meshes are one connected outward-wound **convex, broad flat-bottom, support-free solid**: 1–1,500 triangles; each source dimension 0.2–250 mm; at most 2 MB. Check finite bounded coordinates, nondegenerate faces, welded edge incidence and winding, connectivity, positive volume, triangle intersections, convexity, broad bottom contact (≥25% of footprint) and absence of projected overhangs. **Concavities are explicitly rejected, never replaced with a convex hull.** Open/nonmanifold, hollow, branched, disconnected and unsupported inputs receive actionable errors. No automatic repair is claimed. Final XY feature dimension must be at least 1.2 mm; transformed vertices must stay inside the 6.5 mm safe radius and the union must be one connected solid. Fixtures `wedge-ascii.stl` and `gem-binary.stl` demonstrate the accepted contract.

## Responsive generation, state and export

Heavy Manifold CSG and STL parsing run in a Web Worker. Round geometry ≤128 segments; image grid 400 samples. 100 ms debounce; request-id and exact state-key guards; cancellation IDs protect asynchronous file normalization. Clear building, success and recoverable errors. Invalid edits leave an explicitly labelled last-good preview but **disable every STL/ZIP export**; no stale last-good download. Worker failure requires a reload and blocks export.

Preview and export share the exact generated indexed meshes. Binary STL per part or separated plate; Everything ZIP contains three genuine STLs plus assembly notes (not 3MF). Exact mesh fingerprint supports independent download checking. Selected export X/Y/Z dimensions are in millimeters; STL does not store units or preview colors. Combined plate is roughly 171 mm wide at defaults: small printers should rearrange individual parts in their slicer.

Undo/redo; six local named designs; JSON save/open ≤2 MB. Bounded normalized PNG payloads and validated indexed mesh payloads travel with designs. Mesh restores are revalidated. Missing image payload explicitly requests reattachment rather than pretending to restore an absent file. Storage-full errors recommend JSON export. No personal uploads are written to the repository. All bundled samples and six original icon paths are synthetic collection fixtures, not personal files. Fonts are Fontsource Fredoka/Rubik (SIL OFL; bundled notices in `public/FONT-LICENSES.txt`); Manifold is Apache-2.0; Three.js/fflate are MIT.

## Print, assemble and calibrate

PLA or PETG for all three parts; no hardware or TPU needed. Print all exported flat Z=0 faces down; 0.4 mm nozzle, 0.20 mm layers, at least three walls, 20–35% infill. No supports intended. Deburr elephant foot around the posts, holes and slot.

1. Lower the eccentric crank bore over the short right-hand post.
2. Lower the lever bore over the tall left-hand post while aligning its long slot around the crank pin.
3. Hold the frame flat. Turn the exposed crank rim; gently follow the lever tip's unequal-duration strokes. No forced fit.
4. Lift lever first, then crank to release.

Parts are **not vertically captive**. Pins and slots guide in plane only. Keep flat; do not claim retention upside-down. Easy Cadence is a full-size calibration set: print it first, inspect/free the bores, then use 0.3–0.6 mm radial gaps as printer/material-specific starting values. All interfaces use positive running gaps; no deliberate interference or snap fit. Adjust slicer compensation if needed, rather than forcing assembly. Small loose parts are not for children.

**No physical print, force, wear, fatigue or tactile-quality tests have been performed.** Computational validation does not establish a successful print on a particular printer.

## Validation and deployment

Independent final float32 binary-STL parser checks byte counts, finite coordinates, nondegenerate triangles, unit outward normals, two opposite-directed faces per welded edge (1e-5 mm tolerance), positive volume for every connected component and expected mm dimensions. All three individual components and separated plate checked. Geometry suite covers 36 parameter cases and 35 imported-output cases including all presets, representative extrema, PNG-derived threshold/grayscale/engraving data and both STL samples.

Independent mechanism tests sample the complete crank revolution, check rigid solid intersections, pin centerline/slot travel limits and cap allowance, analytic sweep extrema/quick-return ratio, walls, floor, personalization isolation, sequential vertical release and separated export plate. Browser scripts select actual PNG/JPEG/ASCII/binary files, download actual STLs and saved JSON, independently regenerate and compare exact fingerprints and baseline/import/transformation differences. Also exercise all presets/shapes, text/icons/SVG holes, replace/remove/reset, undo/redo, named saves, portable JSON, ZIP contents, invalid inputs, worker abort/reload, stale edits/imports, 320/390 px overflow, touch orbit/pinch, light/dark persistence, focus and collapsible controls. Reports and screenshots accompany reproducible scripts.

Dependencies: React, Vite, Three.js, Manifold-3D WASM, fflate, local Fontsource fonts, Playwright for tests, gh-pages for deployment. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public access uses the root monorepo `deploy/` flow, never the individual app publish. Root inline scripts are compiled with `new Function`, all previous gallery entries preserved, and staged files checked byte-for-byte. The archived gallery and primary reference remain read-only.
