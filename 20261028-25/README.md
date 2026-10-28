# Tap & Suspend

A React + Vite, browser-only **four-part flat-pack kit-card generator**. Snip a connected carrier, seat a portal in its marked base, suspend a disk on two tied thread loops, and use the loose striker for gentle tactile taps. Three disk silhouettes and real presets change the geometry. This is not a tuned musical gong. **Thread is required for the suspended interaction. No physical print was tested.**

## Run / export

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs solid/assembly tests. `npm run predeploy` builds the static bundle; app deploy is `gh-pages -d dist`. Public monorepo delivery uses the root deploy flow, not the per-app deployment. No runtime CDN, API key, backend or paid services. WebGL, Web Workers and WASM required.

Download the connected-card binary STL, each de-tabbed part, or Everything ZIP (five genuine STLs plus numbered `ASSEMBLY.txt`). “Everything” is the real unioned card: frame, cross rails, sixteen low tabs and four parts form **one closed connected component**, not loose parts beside a frame. Four individual exports omit the carrier/tabs. All exports use the current checked worker mesh in bed-flat orientation regardless of preview mode. STL has no units or colors: use **millimeters, 100% scale**. Final X/Y/Z dimensions correspond to the currently selected export. No 3MF is offered.

## Reference-first provenance

Local `/Volumes/ExternalHD/3d_printing_apps/` STL collections were searched first, including keycap/clicker templates, sliders, fabric links and kit-card projects. Their local files supply switch sockets, threaded/sliding parts or interlocking links, not an appropriate sheet-and-tab kit construction. The kit-card projects have no local reference STL. A public, reusable kit reference was downloaded and parsed before selecting final geometry:

- **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card).
- License verified from repository `LICENSE`: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README and `kit_frame.scad` were inspected too.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL: 1,530,884 bytes; 30,616 facets; bounds **179.819997 × 178.019994 × 3.1899996 mm**. Units are assumed mm and corroborated by OpenSCAD dimensions (STL itself has no unit metadata).
- Welded edge adjacency yields **two source components** (26,870 and 3,746 facets); nonmanifold/coplanar artifacts exist. No source repair or source printability claim. Used for measured design reference only.
- Actual mesh cross-sections at Z=0.1, 0.5 and 1.59 mm show the carrier, thin bridges and discrete sheet parts. `reference-analysis.py`, `reference-analysis.json`, `reference-sections.svg` and `.png` retain reproducible evidence. The left-rail Y=100 mm section and Z histogram independently support the dimensions.
- **Measured:** 1.6 mm sheet and perimeter rail; bridge vertex planes at 0.21/0.22 mm. **Preserved:** 1.6 mm default/minimum sheet. **Redesigned, not measured:** 2.4 mm carrier rails, 0.4–0.6 mm low tabs, proposed 0.15–0.45 mm total slot allowance, cord holes, portal shoulders, disk and striker. None are universal printer tolerances.

The source cat artwork and raw STL are **not bundled or redistributed**. All product outlines, suspension and joint geometry are original parametric reconstruction. The source construction principles inform this redesigned kit, not its acoustic performance or knot strength.

The visual reference was read-only `keycap_generator2`: README, styles, App, Viewer, image tracing, worker, STL and export modules. Concrete patterns used: 374 px scrolling left rail, sticky brand/theme, collapsible sections, paired sliders/mm fields, raised tactile buttons, pink selected states, local Fredoka/Rubik, light lavender desk, gradient right viewer, phone preview-first stacking, checkerboard conversion and explicit imported-base transforms. User-owned common studio/import infrastructure is adapted from an earlier daily kit; mechanism geometry and validation here are new. No reference history, dependencies or deployment scripts copied wholesale.

## Parameters (all dimensions mm)

| Parameter | Supported range |
| --- | --- |
| Connected card | 150–190 wide × 245–285 high |
| Base | 86–106 wide × 36–46 deep |
| Disk radius / silhouette | 18–24; circular, regular hexagonal, 0.9-height oval |
| Portal height / leg width | 70–86 / 6–8 |
| Sheet thickness | 1.6–2.4 |
| Total mortise allowance | 0.15–0.45 across each axis, not per side |
| Cord bore / hole-center suspension drop | 2.4–3.6 / 20–24 |
| Carrier spacing bias / fixed rail width | 4–7 / 2.4 |
| Breakaway tab width / height | 0.8–1.4 / 0.4–0.6 |
| Base dimples | 0–0.4 deep |
| Personalized footprint / STL height | 4–7 / 0.6–3 |
| Mark offsets / rotation | X ±1.5; Y ±2; Z rotation ±180° |
| Image relief / engraving | 0.4–3 / 0.4–0.6 |

The disk holes sit at X=±0.35R, Y=0.5R, well inside all silhouettes. Portal beam bores align in X. Base slots grow both tongue dimensions by the total allowance. Shoulders seat at the base top; fixed tongues are not positive latches and may need a tiny drop of glue after calibration. Slot, floor, carrier, cord access and swing constraints are checked, and invalid edits disable export. Unsupported inputs give errors, not substitute geometry.

## Local image, SVG, text and icon workflow

File picker works on desktop and phone; one-file drag/drop on supported devices. Bundle includes synthetic `mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, and `gem-binary.stl` with sample buttons/downloads, not personal files.

PNG/JPEG content and declared dimensions are checked before decode: file ≤2 MB; ≤12 megapixels and 6,000 px per side. Images normalize to ≤500 px, then a **20×20 grayscale grid**. Fit/cover, ±25% crop pan, light/transparent or dark background and threshold (1–254) control conversion. A checkerboard shows the exact retained grid; original source is shown alongside. Thresholded silhouette relief uses dark samples; grayscale uses continuous darkness heights. A closed triangulated height field on a 0.4 mm backing is boolean-unioned into the base’s shallow well; engraving subtracts a mirrored height field while maintaining ≥0.8 mm floor. Bright holes remain unraised/unengraved on a continuous structural backing: these are **not through-holes**. Height samples interpolate linearly; this is bounded 2D-to-relief, **not full 3D reconstruction from a photo or exact vector-outline tracing**. Empty masks fail explicitly. Light transparent backgrounds are composited locally; dark mode inverts the retained brightness.

Simple SVG filled paths/basic shapes rasterize locally at 256 px, preserve holes and enter the same height conversion. Unsupported effects, embedded resources, scripts, links and excessive element counts are rejected. Text (up to eight characters) and six searchable original bundled icons also enter this same geometry path. Local Rubik is used for text. Placement, scale, rotation, depth and raised/engraved settings affect actual exported triangles. Source replace/remove, reset-image and reset-transform controls work; returning to built-ins restores the original geometry.

## Local STL integration

Both ASCII and binary STLs are parsed, welded at 0.00001 mm, checked for finite coordinates, nondegenerate facets, edge incidence/orientation, one connected positive-volume solid, self-intersections and bounded dimensions. Limits: ≤2 MB, ≤1,500 triangles, **0.2–250 mm per axis**. A deliberately narrow support-free grip contract accepts **closed outward-wound convex solids with broad flat bottom contact, no overhang beyond their bottom footprint**. Concave, hollow, branched, disconnected, open, nonmanifold or unsupported inputs are explicitly rejected. No convex-hull geometry replacement and no automatic repair.

Select Z up, Y up (+90° X) or −Z up before attaching. Oriented dimensions and actual source preview are shown. **Confirm millimeters explicitly**, since STL is unitless. XY scales proportionally to the footprint; Z scales separately to grip height; scale factors are displayed. Then rotate, offset and center/reset. The actual imported mesh is solid-unioned into the **base only**, inside the protected 6.5 mm-radius well. A minimum 1.2 mm XY thickness is enforced. Transform placement outside the safe well fails; it cannot block portal slots, alter suspension holes, fuse moving pieces or intrude into the disk. Imported meshes are not merely displayed or re-exported unchanged.

All user files remain in this browser. No network upload or repository storage. Local named designs (up to six), undo/redo and JSON retain bounded normalized image or verified STL payloads. JSON limit 2 MB; images ≤250,000 portable pixels / bounded PNG URL. Missing image/mesh payloads require explicit reattachment and do not masquerade as restored files. Imported raw files are not committed. Named storage can be cleared in browser settings.

## Geometry and preview

Manifold WASM performs genuine boolean solid operations in a dedicated worker. Bounded resolution, 100 ms debounce and request IDs guard responsiveness and stale results. Each generated part passes a final finite/area/welded-edge/winding/positive-volume check. Exports require an exact current parameter/source/settings key; an invalid last-good preview is explicitly labelled and **cannot export**. Worker failure disables export and instructs reload. No remote assets required at runtime.

Views: connected card, four de-tabbed parts, suspended assembly, exploded, each isolated part; optional see-through base/portal. Orbit, zoom buttons, fit and touch pinch/orbit are supported. Thread lines are illustrative hole-center spans only: knots, complete loop paths and cord dynamics are not modeled. The striker is intentionally loose beside the stand. No simulated acoustic tone or force. Preview colors are not STL materials. Dark theme persists. Buttons have focus states and reduced-motion support; phone preview and exports precede stacked controls.

## Print and assemble

1. Use PLA/PETG, 0.4 mm nozzle, 0.2 mm layers and three walls. Print card/parts decoration-up on Z=0; no supports intended. The card may exceed smaller beds: download individual parts. Check slicer layers and elephant foot.
2. Snip sixteen tabs with flush cutters, then trim nubs. Tabs avoid assembly interfaces/holes; clean individual exports are provided.
3. Trial-print base + portal, adjust **total** slot allowance for printer/material. Lower both portal tongues vertically until shoulders meet the base. Fixed joints may need optional glue after calibration. Never glue the disk or thread.
4. Supply two roughly 100–140 mm lengths of smooth 0.5–1.0 mm nonelastic thread. Route each as a closed tied loop through one beam hole and its corresponding disk hole. Tie and adjust both so disk holes lie the selected 20–24 mm below beam hole centers. Level disk; check knots, free movement and cord-edge smoothness. The center-span dimension is not a pre-cut thread length.
5. Tap lightly with the loose striker or nudge with a finger, within ±10° out of the disk’s plane. Keep stand on a level desk and hold its base if necessary. Stop if thread frays, joints loosen or disk touches the frame. PLA makes a soft plastic tap; no ringing/tuning claim. Adult desk miniature; thread, loose parts and cutters require appropriate supervision.
6. Untie loops and lift the portal for disassembly. Without thread, trace the loose disk rim flat on the desk as a hardware-free tactile alternative—not the same suspended action.

## Validation and limitations

`validate.mjs` independently parses actual binary STL bytes: exact length, normals/winding, finite coordinates, nonzero triangles, 1e-5 mm welded two-opposed-face edges, connected components with individually positive volumes and expected mm dimensions. It checks every separately exported part and connected card. Kernel checks test collision-free seated assembly, vertical insertion at sampled heights, ±10° thread-suspended swing, open cord bores and ≥1.2 mm borders (0.001 mm fill margin for float32 round-trip), separated card parts, actual tab cuts avoiding functional pieces, **five components after sixteen snips**, card envelope and sheet minimums. Defaults, three presets and 24 representative extreme combinations are tested, plus image/engraved/ASCII/binary derived outputs under representative defaults/presets/extrema.

Browser scripts exercise real file-picker uploads, downloaded STL signatures versus UI and regenerated JSON, image pixel/threshold/depth/crop and mesh transform changes, reject/recover, portable/named saves, undo/redo, all presets/icons/views, SVG holes probed in final solids, per-part/ZIP downloads, worker failure, saved theme, keyboard focus and 320/390 px touch layouts. Reports and screenshots are saved beside this README. Production base path, worker and WASM loading are tested, not only dev mode.

These are computational geometry, assembly and browser checks. **No physical print, sound, knot strength, friction retention, tipping under an applied force, wear, fatigue or external slicer validation was performed.** Inspect and calibrate your own print. The fixed joints are not guaranteed friction locks, thread lengths depend on knots, and arbitrary imported STL topology is intentionally unsupported.

Dependencies: React, Vite, Three.js (MIT), Manifold (Apache 2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for validation. Icons and sample fixtures are original synthetic assets reused from user-owned studio tooling. Reference attribution/license is stated above.
