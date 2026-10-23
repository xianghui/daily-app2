# Capstan Drift — local cord-friction fidget studio

React + Vite parametric studio for a **two-fixed-post figure-eight cord fidget**. Hold the isolated palm landing, lay a soft cord around the posts and alternately pull its two free ends 10–20 mm. Sliding contact provides friction; changing wraps changes contact angle. This is not the gallery's rotating cord spool, ratchet, spring or linkage. With no cord, use the smooth posts as a hardware-free figure-eight finger-tracing worry toy.

**No physical print, pull-force, strength, friction, fatigue or wear test has been performed.** Digital geometry checks do not validate those properties. The preview shows only the printable body, not a cord or motion simulation. The cord is deliberately open and not retained: keep both ends hand-held. There are no flanges, knots or captive joints.

## Run and publish

```sh
npm install
npm run dev
npm run predeploy
npm test
node variation-regression.mjs
```

Vite base `/daily-app2/20261023-15/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish the combined gallery through the **root** monorepo predeploy/deploy flow. Browser tests use local Vite port 5270 and Playwright Chromium: `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs`.

## Studio and geometry

Model-first Three.js canvas, orbit/zoom/reset/fit, 10 mm grid, final X/Y/Z dimensions, compact desktop right rail, collapsible phone controls and always-reachable export. Three presets have actual generated model thumbnails: Wide Eight (spacious low posts), Palm Passage (balanced), Deep Wrap (compact tall posts). Variations remain in the validated parameter box. Tabs: Shape, Mechanism, Surface, Import, Print. Sliders and numeric fields change actual mesh geometry. Selected part is highlighted. Preview colour is cosmetic: **STL stores geometry, not colour or unit metadata**.

| Parameter | Range, mm | Default, mm |
| --- | --- | --- |
| Palm bed width | 22–32 | 27 |
| Post center spacing | 32–48 | 40 |
| Post radius | 4–6 | 5 |
| Post rise above bed | 10–16 | 13 |
| Bed thickness | 2.4–3.6 | 3 |
| Palm dimple depth | 0–0.6 | 0.3 |

The capsule bed has two fixed, solid tapered posts (top radius 0.65 mm less than root radius). Minimum post-to-post clear air 20 mm, bed margin 5 mm, bed thickness 2.4 mm. The 20 mm diameter palm landing has a Z=3.2 mm well floor. Imported features are restricted to a 6.5 mm radius, at least 15.5 mm from the nearest post surface. The neck, bed and posts intentionally form one connected solid, not overlapping export shells. Minimum X/Y/Z dimensions are measured from generated triangles, not estimated.

Manifold-3D performs real CSG in a bounded module worker; final mesh receives runtime finite-coordinate, nondegenerate-face, welded-edge, winding and volume checks. Preview and binary STL export use that exact final mesh and parameter state. Busy, stale, invalid or unconfirmed imports block export. There is one printed part: whole-body and named-part exports refer to the same connected body, so no parts ZIP or artificial assembly separation is needed.

The figure-eight route diagram is instructional, not dimensioned cord geometry. Two crossover strands may be hand-guided at different heights above the bed. Digital tests check representative raised route corridors; flexible cord deformation, contact friction and manual guidance are not simulated.

## Image import: PNG / JPEG

Local file picker on all devices and desktop drag/drop; synthetic downloadable `mark.png` and `waves.jpg` fixtures. 16 bytes–2 MB, content header checked before decoding, max 12 megapixels and 6000 px per side. Normalize to at most 500 px side for portable JSON. Transparent areas composite onto white. Source preview plus exact converted grid are visible.

Fit whole image or fill/crop square; crop offsets ±25%. Sample a **20 × 20 luminance height field**, `0.2126R + 0.7152G + 0.0722B`. Threshold 1–254: darker samples rise by chosen depth. Grayscale: `depth × (1 − luminance/255)`. Depth 0.4–3 mm, continuous 0.4 mm backing, triangulated adjacent grid vertices with interpolated slopes. Empty conversion is rejected. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**.

Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Bounded relief is embedded 0.15 mm into the well floor and genuinely boolean-unioned. Changing pixels, threshold, crop, depth, size or placement changes exported geometry without entering the cord corridor.

## STL import: binary and ASCII

Synthetic `wedge-ascii.stl` and `gem-binary.stl` are bundled. Max 2 MB / 1500 triangles; source dimensions each 0.2–250 mm. Explicit millimeter confirmation is required because STL has no unit metadata. Source dimensions, format, triangle count and original 3D preview appear before integration.

Supported subset is deliberately strict: **one convex, closed, consistently outward-wound connected solid with a broad flat Z-down bottom (at least 25% XY area), containing the whole XY projection**. Reject open/nonmanifold, disconnected, inward-wound, self-intersecting, concave, hollow, overhanging, degenerate, nonfinite, oversized or truncated inputs. Errors advise re-exporting a closed supported solid; no repair is claimed. Vertices are welded at 0.00001 mm for validation. Source triangle pairs receive explicit intersection checks.

XY fit preserves aspect ratio within the 4–7 mm footprint; independent height fit 0.6–5 mm; minimum fitted XY span 1.2 mm. Z rotation, center/reset, translation, replace/remove supported. Tilting is intentionally not offered: it would invalidate the flat-base integration contract. Entire transformed source must stay in the radius-6.5 mm well. It is fused into the rigid landing, not merely displayed or re-exported unchanged. Final integration must form exactly one connected closed solid.

## History, design files, privacy

Undo/redo captures modeling/import actions. Save/Open JSON embeds a bounded image data URL or validated STL vertex payload. Saved STL meshes are revalidated on open. Missing image payloads produce an explicit reattach prompt, never a fake restored source. Replace/remove/reset transforms/reset image controls/reset all return to usable built-ins.

All files remain in the browser; no uploads, CDN dependencies, external services, API keys, accounts or paid features. Downloaded JSON intentionally carries the local imported payload. Only synthetic sample assets are bundled; no personal files are committed. Dependencies: React, React DOM, Three.js, manifold-3d WASM, Vite/React plugin, gh-pages, with Playwright for development tests. Generation and export work locally after assets load.

## Print, cord and calibration

- One printed body. Start with PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, four perimeters and 25% infill. All are starting settings, not verified print recipes.
- Print the planar bottom at Z=0, no supports, no freeing joints or printed-part assembly. Posts taper inward with height; imported grips must obey the documented flat-bottom support-free contract.
- Cord-assisted mode requires **one 300 mm length of 2 mm soft braided cord**, not supplied by the STL. No magnets, fasteners or bearings. Open routing is not a retention mechanism; keep both ends free in your fingers, no knots or cinching.
- First print **Wide Eight** as a full-size route and surface calibration. Remove stringing/sharp seams, inspect post roots and layer adhesion. Start with light alternating 10–20 mm pulls. Test the actual cord and adjust wraps by hand; surface friction, wear and printer/material tolerances vary. No universal fit or resistance is claimed.
- Hardware-free alternative: omit the cord and finger-trace the smooth figure-eight path. This has no sliding cord friction and is explicitly a different tactile mode.

## Validation

`validate.mjs` independently parses exported binary STL: finite vertices, nonempty/nondegenerate triangles, unit outward normals, welded equal vertices within 0.00001 mm, exactly two opposite-direction edge incidences, each connected component's positive volume, exact dimensions and bed Z=0. Runs default, min/max, all 64 parameter-box corners, all three presets and eight deterministic variations (78 cases), plus 24 image/STL integration cases. Every modeling parameter is checked to change actual exported bytes.

Mechanism checks: minimum post gap, bed margins/thickness, post rise, import isolation and external-cord specification. CSG probes verify post/root/bed material and representative circular/internal-tangent cord corridors at two crossing heights. These are spatial exclusion samples, **not flexible-cord dynamics, FEA, friction measurements or a proof of post life**. All posts intentionally stay fixed; there are no moving printed bodies to retain, intersect or fuse. Free cord moves independently and can lift off by design.

`variation-regression.mjs`: 128 seeded geometry/mechanism checks. `browser-test.cjs`: real PNG/JPEG and ASCII/binary STL file picker imports, actual downloads, changed pixels/threshold/depth/crop/scale/placement versus defaults, malformed/oversized/open/nonmanifold files, recoverable invalid state, remove/reset, per-part export, exact preview/export fingerprint and displayed mm bounds. Phone 320/390 px: touch orbit/pinch, imports and downloads. `extra-browser.cjs`: every preset, variations, geometry-neutral colour, undo/redo, all four portable import save/open round-trips, source drop, mechanism checks on browser-imported designs. `mobile-sheet.cjs`: collapsed/expanded controls, all tabs, fixed reachable download.

Reports and screenshots record actual executions. `gallery-test.cjs` compiles every inline root script using `new Function`, requires at least one nonempty script, checks newest entry uniqueness/area/path and preservation of all prior entries, then browser-renders/filter-tests the gallery. Production/public scripts test built WASM/assets, imports, downloaded STL and gallery visibility. No physical print claim is made.
