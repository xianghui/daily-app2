# Wedge Whisper

A React + Vite, browser-only parametric fidget studio. **Roll a loose disc into a converging channel, feel the geometric stop, then withdraw or lift it free.** This is an intentionally removable roller, not a captive track slider, clutch, snap or force-rated lock. No hardware required. Both image and STL imports alter the exported palm body through real solid union, protected from the rolling path.

## Studio

Large matte Three.js model canvas; warm ivory/clay colours; compact right-hand tabs; collapsible phone controls and fixed export. Orbit/zoom/reset/fit, 10 mm grid, selected-part indication, actual mesh thumbnails, three presets, valid bounded variations, undo/redo and portable save/open JSON. Preview colour is not stored in STL. Assembled rigid-body motion and separated printable layout are distinct. Motion controls change the preview pose only; model parameters change real geometry.

Visual reference: Vaseverse's model-first composition, quiet palette and compact controls, interpreted for an original physical fidget. No reference branding, assets, copy or source included. Both current and archived galleries were inspected for earlier mechanisms; archived tree remained read-only.

## Parameters

All linear dimensions in **millimeters**, final X/Y/Z bounds calculated from the selected final mesh.

| Parameter | Supported range |
|---|---|
| Palm diameter | 22–28 mm |
| Roller diameter | 8–10 mm |
| Channel wall thickness | 1.2–1.8 mm |
| Narrow-end radial interference | 0.25–0.50 mm |
| Floor thickness | 3–5 mm |
| Palm dimples | 0–0.6 mm depth |
| Convergence factor | 1–1.4 (dimensionless) |

Channel walls rise 5 mm from the floor; roller is 5 mm high, with a 0.7 mm deep off-center finger dimple that makes spin visible. Channel starts at X=20 and ends at X=54. Slope `s = factor × 0.12`; half-angle `atan(s)`, approximately 6.8–9.5 degrees. If roller radius is R, the inner half-width is `R − interference + (54 − x) × s`. The tangent stopping point is `54 − (R × sqrt(1+s²) − (R−interference))/s`. The preview travels from X=25 to 0.4 mm before contact, with a 0.05 mm floor gap to show distinct bodies. Continuous analytic wall distance is positive over this interval. The roller cannot advance past nominal tangency without intersecting a wall; lifting above the rail releases it. It can also leave through the wide mouth. No permanent retention is claimed or intended.

The interference specifies how much narrower the **unreachable** end is than the roller radius, not a press-fit tolerance. Friction may add a lodging sensation but no self-locking, force, wear or torque-transfer guarantee is made. There is no friction or elastic simulation. Minimum structural wall is 1.2 mm. The import safe radius is 6.5 mm at the palm, separated 13.5 mm from the channel entrance. Decorative image features may be finer than nozzle width; choose bold source art.

## Imports: local only

Desktop/phone file picker and one-file drag/drop. Source preview plus exact converted image grid or original 3D mesh; final model remains visible. Replace/remove, reset transforms and return to built-in default all work. All file decoding, validation, conversion and integration happen locally. No API, uploads, personal repository files, CDN runtime imports or paid services. Worker and WASM are bundled locally.

### PNG / JPEG → relief

16 bytes–2 MB, ≤12 megapixels and ≤6,000 pixels per side; header inspected before decoding. Source is normalized to a maximum 500 px side for bounded portable storage. Transparent pixels become white. Fit/contain or crop/cover with ±25% X/Y shift samples a **20 × 20 luminance vertex grid** using Rec.709 weighted RGB. Threshold mode sets dark vertices to the chosen relief depth and others to zero; grayscale mode uses `depth × (1 − luminance / 255)`. Triangles linearly interpolate the heights, so this is not exact vector tracing. A continuous 0.4 mm backing closes the mesh. It sinks 0.15 mm into the palm well floor and is robustly unioned with the palm solid. **This is 2D-to-relief / thresholded raised silhouette, not reconstruction of a complete 3D object from a photograph.**

Threshold 1–254, depth 0.4–3 mm, footprint 4–7 mm, Z rotation ±180°, X ±1.5 / Y ±2 mm. Empty relief and transformed corners outside the safe zone disable export. Pixel content, threshold, depth, crop and placement measurably change STL.

### Binary / ASCII STL → palm grip

≤2 MB and ≤1,500 triangles, each dimension 0.2–250 mm. STL has **no unit metadata**: displayed source dimensions must be explicitly confirmed as millimeters before integration. Support is deliberately limited to one convex, connected, outward-wound closed solid, with positive volume, no self-intersections, a broad flat bed-facing base and no XY overhang beyond that base. Open/nonmanifold, concave, hollow, disconnected, overhanging and degenerate meshes are rejected with actionable messages; no arbitrary repair is claimed.

Original source mesh and dimensions are shown. Centered XY is proportionally fitted to 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. The minimum fitted XY dimension is 1.2 mm. Z rotation, X/Y placement and reset supported; arbitrary tilt is intentionally excluded to preserve the flat-base integration contract. Real Manifold CSG union integrates the original mesh into the palm floor. The result must remain one connected solid. Imports never change channel walls or the independent roller. Merely displaying/re-exporting unchanged input is not the workflow.

Synthetic CC0 PNG, JPEG, ASCII and binary STL fixtures are bundled under `public/samples`, with source/attribution notes. No personal files are committed.

### Save / open

Local JSON download contains parameters, transforms and bounded portable payload: normalized image PNG plus conversion settings, or validated mesh vertex/index arrays. Reopen validates payloads and regenerates the exact geometry. Missing/corrupt payloads produce errors asking for reattachment; no missing import is falsely restored. History keeps bounded snapshots locally. Nothing is uploaded.

## Geometry and exports

Manifold-3D WASM provides robust union/subtraction. Final geometry is shared by preview and exporter. Every part is checked for finite coordinates, nondegenerate triangles, positive volume, one closed connected component, welded-edge incidence exactly two and opposite adjacent winding; these checks also run after float32 export placement. Parameter and safe-zone failures block export, including stale generated models. STL input validation includes topology, convexity, broad base, projection support and triangle self-intersections before integration.

Binary STL exports either the separated full layout or either part individually; ZIP contains both part STLs and assembly notes. No fused moving interfaces or overlapping visual-only shells. Both parts rest at Z=0 in their export layout, separated in X. Preview motion is never baked into printable placement.

## Printing and use

Start with **Light Roll** as a full-size fit coupon. Print both pieces flat, PLA or PETG, 0.4 mm nozzle / 0.2 mm layers and three perimeters as starting settings. No supports, hardware or glue intended. Remove elephant foot and roughness from rim/floor. Drop roller into wide mouth, gently roll/nudge toward convergence, and withdraw or lift to release. Do not force a jam. Tolerances and friction depend on printer, material, layer settings and surface finish, not universal defaults. This is rigid-body motion; no compliant part is required. Small loose parts, not for children.

**No physical print, friction, force, retention, fatigue or wear testing performed.** Computational stopping geometry is not proof of a particular tactile feel.

## Verification / development

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Dependencies: React, Vite, Three.js, Manifold-3D, fflate, gh-pages; Playwright is development-only. All runtime code and WASM bundled. Individual `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Production uses the root monorepo predeploy/deploy flow, not individual publication. Base `/daily-app2/20261025-3/`.

`validate.mjs` independently parses exported binary STL: triangle validity, float32 normals, outward orientation, welded manifold topology, component volumes, analytic bounds and mechanism checks. Defaults, all presets, extrema, 128 parameter corners and variations; image/STL variants receive the same checks. CSG collisions test 11 free-path positions, a beyond-stop collision, vertical release, print separation and protected import isolation. Continuous wall distance is analytically checked, not inferred solely from sampled poses.

`browser-test.cjs`, `extra-browser.cjs` and `mobile-sheet.cjs` use real browser file pickers/downloads; compare final preview signatures and STL; test PNG/JPEG, ASCII/binary STL, pixel/threshold/scale/placement changes, malformed/open/nonmanifold/excessive files, empty silhouettes, invalid transforms, replace/remove/reset, undo/redo, all presets, variations, portable round trips, parts/ZIP, drag/drop, phone orbit/pinch, 320/390 px layouts and reachable export. Reports/screenshots document executed checks; geometry checks do not imply physical testing.
