# Validation — Band & Pause — 2026-10-24

## Passed locally

- `npm run predeploy`: production Vite build with locally bundled WASM and dependencies. Only informational chunk-size / Node module browser-externalization warnings; WASM worker runs successfully in real Chromium.
- `npm test`: 142 parameter cases (all 128 endpoint combinations, minimum/maximum, default, three presets, eight deterministic variations), 24 imported-source cases, eight explicit rejection cases. All exported binary STL meshes were independently parsed and checked for finite coordinates, nondegenerate triangles, outward stored normals, closed welded two-face edges, consistent winding, positive volume per component, expected number of components and independently predicted millimeter bounds.
- Every tested assembly sampled 13 rigid drum angles; all non-interference solid pairs were collision-free. Cap/post friction interference was measured as intentional. Six print-layout part pairs were separated. Open 8 mm brake release, tab reach, flange overlap, bore walls, cap roof/socket and axial/radial gaps were checked. Imported geometry affected only the palm landing, not the axle or moving parts.
- Real Chromium file-picker imports: PNG, JPEG, ASCII STL and binary STL; actual downloaded STL geometry compared against no-import default and exact UI geometry signatures. Threshold, relief, crop, scale, height, rotation and placement changed exported geometry. Reset/remove/replace and bad input recovery passed.
- Invalid/truncated/oversized files, excessive triangle count, bad dimensions, open and nonmanifold meshes, concave meshes, fake/oversized images, empty silhouettes, missing/NaN transforms and unsafe import placement disabled export with recoverable feedback.
- All three presets and four browser-randomized designs exported successfully through mesh/mechanism checks. Undo/redo and portable JSON save/open passed for both images and both mesh encodings. Drag/drop, all four individual STL exports and four-part ZIP contents passed. Preview palette does not change geometry; assembly pose does not change exported layout.
- Real 390 px touch orbit/pinch and phone image/STL imports/downloads passed. 320 px bottom-sheet collapse/expand, five tabs, no horizontal overflow and always-visible export action passed. Desktop and phone screenshots inspected.
- Gallery: every inline script compiled with `new Function`; exactly one newest `20261024-22` entry, area `stl`; 125 previous entries preserved, total 126; STL Generators first; browser rendering/search without runtime errors.
- Root `npm run predeploy`: 126 built/copied, zero failed/skipped. Verified every gallery target exists in `deploy`, and root gallery exactly matches source.

Machine-readable reports: geometry-validation.json, browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json, root-deploy-validation.json. Production and public reports are created by the deployment checks.

## Production and public deployment

- Production Vite preview repeated the full browser import/export and mobile suite successfully (`production-browser-validation.json`). No runtime errors or external generation requests.
- Root `npm run deploy` completed with `Published`. Public GitHub Pages app loaded its worker/WASM, converted a sample image and integrated a sample binary STL, downloaded and independently validated both final models. The public gallery displayed the new app first and retained 126 entries. No failed resource requests or runtime errors (`public-validation.json`).

## Limits

No physical printing or measurements of force, friction, restoring stiffness, wear, retention or cycle life. The preview shows relaxed export solids and illustrative rigid rotation, not elastic brake deformation. The open brake is held by the user, removable, and not a locking or directional mechanism. Start below 0.5 mm total tab closure and calibrate material/cap fits. Computational manifold/collision checks do not prove physical function.
