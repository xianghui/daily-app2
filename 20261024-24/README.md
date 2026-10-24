# Orbit Unfurl

A browser-based parametric **folding-flyweight spinner fidget studio**. Hold a stationary palm tab, gently turn a yoke and guide two independent arms from tangential to radial positions. Moving mass changes rotational inertia. Unlike a fixed ring spinner, pendulum or gear, this has independently rotating end weights and a variable mass distribution. It is not a game or a static STL.

## Run / dependencies / interface

`npm install`, `npm run dev`, `npm run predeploy`, `npm test`.

React + Vite; locally bundled Three.js and OrbitControls; Manifold WASM robust solid modeling; fflate ZIP; gh-pages. No keys, CDN imports or remote modeling APIs. Geometry generation and import topology checks run in a worker. Base `/daily-app2/20261024-24/`. Per-app deployment scripts are present; public publication uses the **root monorepo** deploy flow.

A model-first ivory/sand/clay studio takes broad layout inspiration from Vaseverse without copying branding, assets, source or text. Large matte preview, right parameter rail, fixed phone export, collapsible controls, five tabs, sliders/numeric fields, real preset thumbnails, bounded random variations, colour palette, orbit/zoom/reset/fit, active part selection, undo/redo, portable JSON and all/individual/ZIP binary STL exports. The assembled pose illustrates kinematics; export always uses a separated Z=0 print layout made from exactly the same meshes. Dimensions show the selected export X/Y/Z in millimeters. Colours are **preview only**, not stored in STL. No invented print-time estimates.

## Real local imports

Picker on desktop/phone plus drag/drop; PNG, JPEG, ASCII STL and binary STL. Original synthetic fixtures in `public/samples` are project-authored, contain no personal files and require no third-party attribution. Import content, type and bounds are checked before heavy work. Maximum input 2 MB; images ≤12 MP and ≤6,000 px per side; STL ≤1,500 triangles, each axis 0.2–250 mm. Rejects invalid/truncated content, empty relief, bad dimensions/transforms, unsafe placement and unsupported meshes with recoverable errors. Export is disabled while loading, invalid or stale.

### Image → real height relief

Validate PNG/JPEG magic bytes and dimensions before decoding. Normalize to a maximum 500-pixel side for portable JSON. Fit/cover and ±25% crop offsets resample the source over white to **20 × 20 luminance samples**, using 0.2126R + 0.7152G + 0.0722B. Threshold mode raises vertices darker than threshold 1–254; grayscale maps darkness continuously to 0.4–3 mm height. Grid vertices form a triangulated continuous height surface, closed walls and bottom over 0.4 mm backing. Boolean union penetrates the palm floor by 0.15 mm. This is **2D-to-relief / raised silhouette conversion, not automatic full-3D reconstruction from one photo**. Source preview, exact sampled conversion preview, threshold, depth, fit, crop, physical footprint and placement are editable. Pixel changes alter actual exported triangles.

### STL → integrated grip, with explicit supported subset

STL has no unit metadata. Source XYZ bounds are shown and explicit **millimeter confirmation** is required. Only one connected, outward-wound, positive-volume, watertight **convex flat-bottom solid** is accepted: bottom footprint ≥25% of XY box, and every XY projection inside it. Concave, hollow, branching, open, nonmanifold, degenerate, inconsistently wound, intersecting, disconnected or unsupported-overhang inputs are rejected. No arbitrary mesh repair is attempted or claimed. Checks include welded edge incidence/winding, connectedness, triangle intersections, convexity and broad bottom contact.

Proportional XY fitting to 4–7 mm, independently fitted Z height 0.6–5 mm, ±180° Z rotation and X ±1.5 / Y ±2 mm placement. Minimum fitted XY dimension 1.2 mm. Original Z remains bed-facing; tilt is deliberately unsupported. A real CSG union connects the source to the stationary palm landing at 0.15 mm overlap. The entire source must stay within its 6.5 mm safe radius, **at least 9 mm from every moving-arm sweep**. It never modifies the yoke, arms or retaining caps. Source 3D and final-model previews, replacement, removal and reset are included.

Portable design JSON embeds the bounded image or mesh payload. On open, it validates/reparses the payload; missing image data explicitly requests reattachment instead of pretending to restore it. Files stay inside the browser unless the user explicitly saves or exports them.

## Mechanism / parameter ranges

All model dimensions are **millimeters**. Rotation is degrees; crop offsets %, image threshold /255.

| Control | Supported range | Effect |
|---|---|---|
| Palm diameter | 22–28 | Stationary ergonomic grip outline |
| Pivot radius | 24–28 | Distance of each arm pivot from main axle |
| Flyweight reach | 8–12 | Eccentric length and mass distribution |
| Running clearance | 0.25–0.50 | Radial bearing clearance and each face gap |
| Flyweight pad radius | 3.5–4.5 | Rounded root/tip and tip mass |
| Palm dimple depth | 0–0.6 | Real Boolean-subtracted grip texture |
| Cap radial interference | 0.01–0.05 | Socket smaller than shaft at intentional stationary seats |

Palm deck 3 mm, yoke 3 mm, arms 2.6 mm, raised weight 1.2 mm, main axle radius 2.5 mm, pivot shafts 1.8 mm. Caps are 3.6 mm tall with 2.4 mm socket depth and 1.2 mm roof. Main cap radius 5 mm; pivot caps radius 3.2 mm. Two-sided axial play is twice running clearance. Minimum arm annular wall 1.2 mm. Retention flange overlap: main ≥2 mm, pivots ≥0.9 mm. Seats have intentional nominal interference; bearings do not.

Arms may turn **a full circle independently**, not only the 90-degree illustrative fold. The full circular sweep stays at least 2.5 mm from the center cap, and the two independent arm envelopes have ≥15 mm separation. The protected 6.5 mm import zone is ≥9 mm from the full moving envelope at every rotor angle. Overall yoke rotation is unrestricted. No angular stops or elastic return. Slow centrifugal deployment is not guaranteed: this is a guided interaction, not a force/inertia simulation. The arms are retained only while caps remain friction-seated, not permanently captive.

## Print / assembly / calibration

Seven independent parts: `palm-axle`, `rotor-yoke`, `right-flyweight`, `left-flyweight`, `axle-cap`, `right-pivot-cap`, `left-pivot-cap`. All print flat Z=0, sockets/bores up. PLA/PETG, 0.4 mm nozzle, 0.2 mm layer, at least three perimeters; support-free/hardware-free intended. No TPU, magnets, bearings, fasteners or adhesives required. Raised flyweight pads build on the flat arm. Verify your slicing and bed adhesion. Solid infill in arms may increase tactile inertia difference but is untested.

Print Pocket Orbit's right flyweight and pivot cap as full-size coupons; test on a rotor pin first. Start with 0.01 mm radial cap interference. If too tight or loose, adjust the parameter or slicer compensation. A cap must seat gently yet resist a light pull. Do not force brittle caps. FDM tolerances depend on printer/material, not universal defaults. Socket/shaft fits are intentionally separate from 0.25–0.50 mm running clearances.

1. Deburr bores and shafts without enlarging retaining interfaces.
2. Slide the yoke onto the stationary palm axle.
3. Place an arm onto each yoke pin.
4. Invert socket-up printed caps and gently seat each on its matching shaft.
5. Hold the palm, slowly turn the yoke, and guide the arms inward/outward. Stop if anything binds, cracks or loosens.

Friction caps are not safety locks. Never spin fast, use near the face or hand to children. Small parts can detach. Geometric retention overlap does not prove pullout resistance. No physical print, balance, spin-speed, force, wear, retention or cycle tests performed.

## Validation / scope

Every live generated solid is checked in the worker: finite coordinates, nondegenerate faces, welded two-triangle edge incidence, opposite neighboring winding, positive volume and exactly one connected closed solid per intended part. Rechecks float32 print-layout coordinates. Manifold Boolean union really integrates imported geometry; no fake overlapping-shell union. Unsupported sources or stale/invalid settings block export with recoverable guidance.

`validate.mjs` independently reparses exported binary STL, checks stored normals, topology, per-component positive volumes, independent expected millimeter dimensions, default/extrema, all 128 parameter corners, presets, variations and image/STL integrations. Solid-intersection checks exercise independently folded arms across full circles with overall rotor rotation, all 21 print-layout part pairs, intentional stationary cap-seat interference, radial/axial play and swept-envelope separation. Import isolation checks compare exact moving-part outputs against built-ins.

Browser tests import PNG/JPEG/ASCII/binary fixtures through real file pickers, download and reparse STL, compare geometry signatures with the preview and saved current parameters, change image pixels/threshold/depth/crop, transform STL scale/rotation/placement, reset/remove/replace, reject invalid/truncated/excessive/open/nonmanifold/concave content, test empty relief and invalid numeric values, per-part/ZIP, preset/variation outputs, undo/redo and portable save/open, colour neutrality, drag/drop and touch orbit/pinch/phone downloads at 320/390 px. See validation JSON and `VALIDATION.md` for observed results.

**Computational mesh/kinematic validity is not physical print testing.** Balance, cap pullout, friction, opening response and durability remain unverified. User files never leave the browser unless explicitly exported/saved by the user. Only synthetic project-authored fixtures are bundled.
