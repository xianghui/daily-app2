# Fulcrum Drift

A local, browser-based **variable-fulcrum fidget design studio**. A rounded beam both slides through a retained pivot and rocks around it: moving the pivot changes the balance between its lever arms. Hold the palm tab upright, axle horizontal, and repeatedly rock/slide the beam. This is a pin-in-slot joint, not a fixed pendulum, driven crank linkage, spring or browser game. Three hardware-free separately printed parts.

## Run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, manifold-3d locally bundled WASM for solid unions/subtractions, fflate for ZIP; Playwright for development tests. No account, key, CDN, service or API. Production base: `/daily-app2/20261022-14/`. Individual predeploy/deploy scripts are included; public publishing uses the **root monorepo deploy/** flow.

## Editor and export

Large live model canvas, compact tabbed rail, matte clay palette, orbit/touch-pinch/zoom/fit, 10 mm ground grid and explicit export X/Y/Z dimensions in millimeters. Assembly and separated bed-flat print layout are distinct. Both manual pose controls affect the assembly only; no dynamics simulation is claimed. Three actual-model preset thumbnails (Centered calm, Long wander, Pocket balance) vary geometry; Variations stays in supported parameter ranges.

One persistent primary binary STL download, individual-part STL selection, ZIP of three parts plus assembly notes and a socket coupon. Preview and export share the same final mesh/parameters. STL is geometry only: preview colors are not saved in STL. Each selected part exports bed-flat, while the all-parts export uses separated layout dimensions. Undo/redo stores 35 debounced snapshots. Save/Open JSON includes bounded normalized image data or the verified source mesh; it does not pretend file paths restore missing imports. Reopened STL payloads are revalidated.

## Dimensions and mechanism

| Parameter | Range |
|---|---|
| Straight-section fulcrum travel | 12–24 mm |
| Beam capsule center span | 42–60 mm; overall length is span + 15 mm |
| Palm thickness | 3–5 mm |
| Beam end-groove depth | 0–0.6 mm |
| Running radial/per-side clearance | 0.20–0.50 mm |
| Static cap socket radius allowance | −0.04–0.08 mm |

Beam thickness 3 mm, width 15 mm. Axle Ø4.8 mm; rounded closed slot width is 4.8 + twice clearance. Straight section gives nominal travel; rounded ends permit approximately one additional clearance per end before contact. Preview stays within nominal travel, leaving that end clearance. Faceting (64-sided cylinders) is accounted for in the minimum gap check. The Ø8.4 mm cap overlaps each slot side by at least 1.3 mm, preventing vertical escape at every nominal pose. Slot side rails are ≥4.6 mm wide; minimum end wall is 13.6 mm. Grooves leave ≥2.4 mm floor and do not touch slot interfaces.

The beam bottom is palm thickness + 6 mm + clearance; tallest permitted imported decoration is palm thickness + 4.85 mm. Thus every rotational/translational pose has at least 1.35 mm vertical separation from the fixed grip. Only the axle enters the moving slot. Cap has running axial clearance, a 1.8 mm stem engaging a 2 mm blind socket, ≥1.62 mm socket wall, and 0.2 mm end relief. Base/cap form a static friction-fit pair; all moving interfaces remain separate.

## Image workflow — PNG/JPEG

Picker on desktop/phone, drag/drop, replace/remove/reset and original plus conversion previews. Maximum 2 MB, 12 megapixels, 6,000 px/side, content signatures/dimensions checked before decoding. Decode errors reject truncated content. Normalize to at most 500 px for portable saves. White-composite transparency, contain/cover fit and ±25% X/Y crop shift, then sample a **20×20 luminance grid** (0.2126R + 0.7152G + 0.0722B).

Threshold 1–254: dark samples rise by the chosen depth. Grayscale mode: height is depth × (1 − luminance/255). A continuous triangulated top with closed side walls and a flat base makes a solid height field on 0.4 mm backing. Relief depth 0.4–3 mm. This is **2D-to-relief / raised silhouette conversion, not automatic full 3D reconstruction from one photo**. Empty conversions block export. Image content, threshold, depth, crop and physical placement change actual exported triangles.

## STL workflow — ASCII/binary

Maximum 2 MB, 1,500 triangles; each source dimension 0.2–250 mm. Show source mesh, source dimensions, triangles and format. **STL carries no units: explicit millimeter confirmation is required.** Accept only one outward-wound connected, closed, convex solid, with a flat bottom covering ≥25% of bounding footprint and all XY projections inside that bottom hull. Deliberately reject arbitrary open/nonmanifold/inward/concave/self-intersecting/disconnected meshes, excessive content, overhangs, thin branches and invalid dimensions. No repair is performed or claimed. Reorient, simplify or re-export in a mesh editor when rejected.

Fit XY proportionally to 4–7 mm footprint; independently set Z height 0.6–5 mm. Rotate ±180° around Z, translate X ±1.5 mm/Y ±2 mm, center/reset. X/Y tilt deliberately unsupported to retain verified flat bed-facing contact. Narrow fitted XY dimension must be ≥1.2 mm. Every transformed vertex must remain within a 6.5 mm radial safe zone on the palm tab. Unsafe/empty transforms disable export, with recoverable feedback.

For either import, sink the flat bottom 0.15 mm into the fixed palm tab and **Boolean-union** the solid, replacing the built-in grip. Require one connected final solid for each part; never export overlapping shells as a union. The input is not merely displayed or re-exported unchanged. Transforms affect the fixed grip only and cannot touch the axle or fuse the joint.

All user-file processing is local, in the browser; parsing/intersection preflight and modeling use a worker. Bounds limit resolution and complexity. Progress and actionable errors are visible; invalid export is blocked. No user files are uploaded or saved in the repository. Only explicit design saving downloads source payloads. Bundled `public/samples/` fixtures are original synthetic geometric art and closed wedge/frustum meshes, not personal/third-party files.

## Printing and assembly

1. Trial a cap/socket coupon and slot/axle fit. 0.30 mm radial running clearance and zero socket allowance are **starting values, not universal tolerances**. Material, extrusion and printer calibration affect fit.
2. Print palm and beam bed-flat; cap flange-down, stem upward. No supports intended; vertical holes/open slot, no ceilings. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Brim for the small cap. There are no compliant parts with fatigue-critical flexure limits.
3. Deburr and remove elephant foot. Place beam slot over the tall axle. Press cap stem-down into the blind socket by its flange. Confirm rotation and sliding without pinching, and a securely retained cap.
4. Loose cap? Reduce socket allowance and reprint; optional plastic-compatible adhesive only inside the static socket, never moving surfaces. Lift unbonded cap evenly to dismantle. No bearings, magnets or fasteners.
5. Hold the palm tab vertically with axle horizontal, then rock and slide gently. Keep fingers clear of the pivot. Small parts unsuitable for young children.

## Digital validation, not a physical print claim

`validate.mjs` checks default, minimum/maximum, each parameter endpoint, all presets and eight deterministic variations. It reparses binary exports for nonempty finite nondegenerate triangles, normalized normals, consistent winding, positive volume **per component**, welded edge incidence exactly two, expected millimeter bounds, and three separate solids in all-parts layout (one per individual export).

Image threshold and grayscale sources plus ASCII/binary imported sources receive the same per-part mesh, layout and mechanical checks with min/max/presets. Analytical wall/fit/retention/plane checks bound all poses. Representative **12 rotations × 5 stroke positions** use actual Boolean pairwise intersections of moving vs static parts, excluding only the intended static stem/socket friction fit. Watertightness is not treated as proof of a working mechanism.

`browser-test.cjs` exercises actual PNG/JPEG/ASCII/binary file pickers and STL downloads, compares against default and parameter/content changes, validates downloaded topology/dimensions and preview/export identity, replace/remove/reset, malformed/truncated/excessive/open/nonmanifold/concave files, empty silhouettes and unsafe settings. Phone 320/390 px, actual touch orbit/pinch, reachable export, no horizontal clipping, runtime/network checks. `extra-browser.cjs` covers presets/randomizations, JSON round trips for all formats, undo/redo, individual/ZIP/coupon exports, palette neutrality and drag/drop. `production-test.cjs` verifies built worker/WASM, both assembly controls, collapsible phone rail and larger normalized-image save/open. Gallery validation compiles inline scripts and checks preserved entries/rendering.

**No physical print has been tested.** Digital checks do not establish feel, friction, durability, shrinkage or long-term cap retention. Print a fit trial first. The composition uses vaseverse.org as a model-first warm studio reference; no branding, assets, text or source copied.
