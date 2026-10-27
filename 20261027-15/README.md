# Bifilar Hush

A local browser-based parametric STL maker for a **two-cord gravity-return torsional fidget**. Hold its palm yoke horizontal, twist the suspended rotor up to ±120°, and let gravity lower it back toward the neutral orientation. This is distinct from a torsion spring, shaft spinner, or linked pendulum: two separated corresponding suspension points constrain a nearly level rotor and turn angular displacement into gravitational lift.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
```

Production test URL: `http://127.0.0.1:5385/daily-app2/20261027-15/`. The app has its own gh-pages dependency and predeploy/deploy scripts; public deployment uses the repository-root combined `deploy/` flow, not the app script.

## Parts, hardware, assembly

Two individually downloadable closed solids: **palm-yoke** and **suspended-rotor**. Both print flat at Z=0, holes upright; no supports intended. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, 25–35% infill are starting recommendations, not universally proven settings.

Required nonprinted hardware: **two equal pieces of 1.0 mm nonelastic braided cord**, each cut to free length + 60 mm for threading and knots. Default: two pieces of 125 mm cord. Thread corresponding upper and lower holes, knot above the upper yoke and below the rotor. Measure **free length between the facing surfaces**, not the entire cut length; match within 0.5 mm. Deburr holes and verify stopper knots cannot pull through. Check knots over a table before use. Untie to disassemble. No magnets, bearings or fasteners. Cord is essential to this mechanism; there is no misleading hardware-free claim.

Keep upright and clear of a table. Stay within ±120°: **no physical rotational stops**. The rise is small and deliberately gentle. Unequal lengths cause tilt; real cord bending, stretch, friction and sway change the ideal path. Cords/knots are not exported. Small parts and cords are not a children's toy.

## Parameters — millimeters unless stated

| Setting | Range |
|---|---|
| Palm diameter | 22–28 |
| Free cord length | 55–75 |
| Rotor thickness | 3–5 |
| Cord-hole radial allowance beyond 1 mm cord | 0.3–0.7 |
| Suspension half-span | 12–16 |
| Palm dimples | 0–0.6 deep |
| Import XY footprint | 4–7 |
| Imported STL height | 0.6–5 |
| Import rotation | −180° to 180° |
| Import X / Y offset | ±1.5 / ±2 |
| Image threshold | 1–254 / 255 |
| Raised image depth / engraved depth | 0.4–3 / 0.4–0.6 |

Three real presets with live thumbnails and bounded variations; round, hexagonal and oval upper palm. Soft Start is a full-size calibration trial. Bore diameter is `1 + 2*allowance` mm (1.6–2.4 mm); test knot size and hole fit with your material and printer. Cord-hole walls remain ≥3.8 mm. No universal tolerance or physical feel claim.

## Image and SVG core workflow

File picker on desktop/phone; one-file drag/drop supported. PNG/JPEG content and headers are checked before decoding: ≤2 MB, ≤12 MP, ≤6000 px/side; normalized portable payload ≤500 px/side. Simple local SVG shapes/paths supported, ≤2000 elements, rasterized at 256 px. Scripts, external resources, effects and unflattened text are rejected. Synthetic PNG, JPEG and ring SVG are bundled and downloadable.

Exact method: composite against white (light removal) or black (dark removal/invert), fit/crop with ±25% X/Y pan, and sample luminance onto a **20×20 grid**. Threshold mode sets each grid height to depth or zero; grayscale mode uses `depth*(1-luminance/255)`. Adjacent samples form a triangulated height field with a closed backing and side walls. Manifold solid-unions raised geometry into the palm well, or subtracts shallow engraved geometry. The 0.4 mm backing is buried in the existing palm. Bright holes remain unraised/unengraved; this is sampled relief, **not exact outline tracing or automatic full 3D reconstruction from one photo**. Source image and checkerboard cutout are shown. Text (up to 8 characters) and six searchable bundled SVG icons use the same real geometry workflow.

Depth, threshold, source pixels, fit, crop, scale, rotation and placement alter exported triangles. Empty results and out-of-zone transforms block export. Replace, remove, center/reset, reset-image and return-to-default actions are real. Preview colours are not saved in STL.

## Imported STL core workflow

ASCII and binary STL ≤2 MB / 1500 triangles; source dimensions 0.2–250 mm on every axis. Explicit millimeter confirmation is mandatory: **STL contains no units**. Choose Z-up, Y-up or inverted-Z before loading; changing up-axis requests reattachment. Source 3D preview, dimensions and format are shown.

The intentionally bounded supported contract is one outward-wound, watertight, connected, **convex, broad-flat-bottom solid** whose XY projection lies within its bed footprint. Open, nonmanifold, inconsistently wound, degenerate, self-intersecting, concave, hollow, disconnected and unsupported overhanging meshes are rejected with guidance. No convex-hull replacement or automatic repair is performed. This restriction is stated in the picker UI. Source vertices are preserved and transformed, not replaced by a placeholder.

XY scaling preserves proportions, fitting the selected footprint; height fits independently. Center, Z-rotation and X/Y placement transform the actual solid. The grip penetrates the palm well by 0.15 mm and is **boolean-unioned**, not exported as intersecting shells. A 6.5 mm radius keep-out prevents imports from approaching cords/rotor. Minimum scaled footprint thickness 1.2 mm. Disconnected boolean results are blocked. Source units, orientation, dimensions and transform limits are validated before heavy work. Bundled synthetic ASCII wedge and binary gem let you exercise both paths without personal files.

## Studio, storage, privacy

Reference-inspired light lavender maker studio, left 374 px collapsible control panel and right live viewer; phone preview/toolbars/export precede stacked controls. Bundled Fredoka/Rubik fonts. Tactile buttons, keyboard focus, reduced motion and saved dark mode. Assembled, exploded, print plate and isolated-part views; see-through yoke. Orbit/zoom/fit and touch gestures. Pink lines and inspection-separation offsets are **estimated preview-only**; exports always use printable bed-flat parts. No separate right-side controls.

Heavy parsing/CSG runs in a local Worker with bundled Manifold WASM. Bounded mesh resolution, 100 ms debounce, request IDs and current-state gating prevent stale export. The exact valid final vertices power both preview and STL. Failed edits retain a clearly labeled last-good preview but disable exports. Worker failures disable export with reload guidance.

Undo/redo, six named local designs, portable JSON save/open. JSON includes bounded image and mesh payloads, not filesystem paths. Missing or invalid payloads request reattachment or recovery; no pretend asset restoration. LocalStorage failures suggest JSON export. All user data stays in the browser; no file upload, cloud, API key or remote generation service. Bundle contains only synthetic sample fixtures, not personal uploads.

## Export

Binary STL per part, separated print plate STL, and Everything ZIP with both individual STLs and assembly notes. Final export X×Y×Z shown in millimeters for the selected part/layout. STL is unitless and colourless; use 100% scale and millimeters. ZIP is not 3MF.

## Validation and limitations

`validate.mjs` independently parses exported float32 STL: exact byte count, finite coordinates, nondegenerate triangles, stored unit normals consistent with winding, welded edges with exactly two opposing incidents (1e-5 mm welding), adjacency-connected positive-volume components, genus, bed-flat orientation and millimeter bounds. Both per-part and float32-translated plate exports are checked.

Mechanism tests separately intersect upper/lower solids at representative ±120° poses, check print plate separation, full-depth open cord holes, bore-wall floors, cord-to-cord separation, constant free length and gravity-restoring sign via independent equations. Ideal vertical separation is `sqrt(L²-4*a²*sin(theta/2)²)`, where `a` is suspension half-span; rise is `L-separation`. These checks do not prove knot retention, fatigue, friction, tactile feel, print success or dynamic stability.

Production-browser scripts use actual file inputs and downloaded bytes for PNG/JPEG/ASCII/binary STL; compare baseline, threshold, depth, crop, source replacement, transforms and reset. Regenerate portable JSON in Node and compare fingerprint with UI and downloaded STL; check every part and ZIP member. Exercise malformed/truncated/nonmanifold/excessive files, empty silhouettes, invalid dimensions, stale imports, worker loading failure, undo/redo, themes, icons/text/SVG holes and phone touch orbit/pinch at 320/390 px. Reports/screenshots are stored beside source. See VALIDATION.md for actual run results.

**No physical print, cord-strength, fatigue or tactile-feel test has been performed.**

## Dependencies and provenance

React + Vite; Three.js/OrbitControls for preview; manifold-3d for real solid booleans; fflate for ZIP; gh-pages for deployment; Playwright for browser checks. Bundled Fontsource Fredoka/Rubik (SIL OFL); Manifold Apache-2.0; Three MIT; fflate MIT. Sample imagery/STLs and six SVG marks are synthetic project fixtures. Shared local studio plumbing is adapted from the immediately preceding daily app; the bifilar mechanism and its checks are new. The keycap_generator2 visual/interaction reference and archived daily_app tree were inspected read-only, not modified or deployed.
