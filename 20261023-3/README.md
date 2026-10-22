# Keel Return

A browser-local parametric rattleback fidget studio. Rock an elliptical curved keel or try gentle spins in both directions: two diagonally placed mass-removal pockets skew the inertia axes relative to the curvature axes. This is a different physical interaction from a circular wobble disc or a conventional top. Spin reversal is an experimental goal, not a verified physical result. No print or dynamic simulation was performed.

## Run

`npm install && npm run dev`; `npm run predeploy` builds the app. React + Vite, Three.js, Manifold WASM; dependencies and WASM are bundled locally. Generation and bounded STL preflight run in a worker. No API keys, server processing, CDN imports or upload services.

## Parameters and units

All dimensions are millimeters: keel length 64–84, width 24–36, rise 8–12, central recess 0.8–1.5, skew-pocket depth 1–3, top dimple depth 0–0.6. Three geometrically different length/width/curvature presets and constrained random variations. The lower surface is a 128 × 32 discretized half ellipsoid capped with a planar top. Two 5 mm diameter top pockets centered at ±(0.5 × half-length, 0.3 × half-width) provide diagonal mass skew. A 15 mm diameter center recess protects the custom pad; imported geometry stays inside radius 6.5 mm. Boolean union/subtraction uses Manifold, never overlapping visual shells as a substitute for solid union. One connected solid; no moving joints, fit clearances, assembly, hardware or part ZIP are needed.

## Image workflow

PNG/JPEG file picker, mobile picker or drop. Images are verified from file signatures and header dimensions before decode; max 2 MB, 12 MP, 6000 px per side. Fit/contain or crop/cover and ±25% crop shifts. A white-composited grayscale 20 × 20 grid uses luminance 0.2126R + 0.7152G + 0.0722B. Threshold 1–254 gives a raised silhouette height; grayscale mode uses depth × (1 − luminance/255). Adjacent heights are connected by triangulated continuous surfaces over a 0.4 mm closed backing. Relief 0.4–3 mm; backing sinks 0.15 mm into the center floor and is Boolean-unioned with the body. This is 2D relief/silhouette conversion, NOT full 3D reconstruction from one photo. Empty white relief is rejected. Source and conversion preview show the exact sampled grid.

## STL workflow

Binary or ASCII STL, maximum 2 MB / 1500 triangles, each axis 0.2–250 mm. Explicit millimeter confirmation is mandatory: STL stores no units. The source preview shows its dimensions. XY is fitted proportionally into a 4–7 mm footprint, Z independently into 0.6–5 mm grip height; Z rotation ±180°, X placement ±1.5 mm, Y ±2 mm, center/reset and remove/replace. Resulting XY span must be ≥1.2 mm. The entire transformed footprint must stay within the protected radius. Source mesh is integrated into the actual body with robust union. The final STL must form exactly one closed connected solid.

Deliberately limited input contract: one convex outward-wound watertight solid with a broad flat bottom in Z covering ≥25% of its XY bounding rectangle; every projected vertex must lie inside this bottom hull. Concave objects, unsupported overhangs, multiple shells, hollow meshes, open/nonmanifold meshes, inconsistent winding, degenerate faces, self-intersections and excessive/invalid coordinates are rejected with guidance, never silently “repaired.” No arbitrary STL repair is implemented.

## Local save and privacy

Files never leave the browser. Save JSON explicitly includes a portable normalized source image (max 500 px side) or bounded verified STL payload; reopening revalidates payload and regenerates actual geometry. Missing image payload is rejected with reattachment guidance. Undo/redo restores modeling state. Synthetic bundled mark/waves/wedge/gem fixtures are original project test data with no personal uploads or third-party attribution requirements. Preview colors do not enter STL.

## Export and print

Always-visible Download STL uses binary STL from the exact same final geometry/parameters as the preview. Part selector exports the same single connected object. Dimensions reflect the selected export. Object view and positive-XY layout are clearly distinguished; the exported Z is design orientation, not automatically the recommended slicer orientation.

Rotate 180° about X in the slicer, broad top toward the bed and curved keel up. Use a brim and removable supports beneath the open center recess, diagonal pockets and grip. If a tall grip projects past the shoulder, support the shoulder too. Check access for support removal. PLA/PETG, 0.4 mm nozzle, 0.16 mm layers, four walls, 100% infill to preserve expected mass distribution. Sand the curved keel uniformly and test on a smooth hard tray. There are no flexible members or universal joint tolerances. Calibration means comparing a built-in 100%-infill specimen before custom imports, then adjusting pocket depth and finish. Off-center imports can weaken or suppress reversal. No precise duration, print-time estimate, physical testing or guaranteed reversal is claimed.

## Validation

`npm test`: parse actual binary output; finite coordinates, nonzero/nondegenerate triangles, stored normal agreement, consistent edge winding, every welded edge has exactly two incident faces, connected components, positive volume, exact bounding dimensions. Test defaults, three presets, all 64 parameter corners, deterministic variations and both image/STL-derived outputs. Mechanism calculations check unequal keel curvature radii, diagonal mass covariance derived from tetrahedral volume integrals, ≥2 mm conservative pocket floor, center floor and contact on the curved belly at representative rocking poses. These establish geometric plausibility, not the nonlinear reversal dynamics.

`node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs` (Vite on port 5270): actual PNG/JPEG, ASCII/binary STL imports, content/threshold/depth/scale/rotation/placement export changes, source replacement/removal/reset, invalid/truncated/excessive/unsupported/nonmanifold input, empty silhouettes, dimension constraints, per-object downloads, 320/390 px phone controls, touch orbit/pinch, preview/export fingerprints, presets/variations, JSON round trips, undo/redo and local-only requests. Machine-readable reports and screenshots are generated by the tests. No physical print was tested.
