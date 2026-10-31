# Clap & Fold

A React + Vite studio for a **four-part, bed-flat, soft-cord-hinged hand-clapper kit card**. Snip sixteen real breakaway runners, seat two opposed fin grips, and tie two external soft cord loops through paired rear eyes. Hands guide the plates together for tactile face-to-face taps. No spring return, switch, latch or guaranteed acoustic pitch. Physical printing, assembly, cord action, durability and sound are **untested**.

## Reference-first evidence

Local STL files under `/Volumes/ExternalHD/3d_printing_apps/` were found first. The Keycap Studio switch template and Weave interlocking-link template were parsed after reading their project instructions: these are switch cutters/stem and an 8 mm articulated link, not suitable sheet-kit joints. Their actual paths, hashes, dimensions, triangles/components and rejection reasons are recorded in `reference-measurements.json`.

Downloaded and inspected **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card). Repository README and **CC BY 4.0** license read; license reproduced in `REFERENCE-LICENSE.txt`. Source mesh is NOT bundled. No private source mesh, reference dependency tree or Git history was copied. Reference project trees and the old `daily_app` are read-only.

Actual binary STL: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; bounds **179.820 × 178.020 × 3.190 mm**; 27 edge-adjacent components; source is NOT watertight. Units are assumed millimeters, corroborated by sheet-scale features; STL has no unit metadata. This source is a measured design reference, NOT an accepted/repaired user import. It is not passed through to exports.

`reference-inspect.py` independently parses the actual source and produces `reference-measurements.json` and `evidence/reference-sections.png`. Actual mesh sections at Z=.1/.5/1.59 mm were visually inspected. Measured source planes: 0/1.6 mm sheet; sockets approximately **4.5 × 1.700012 mm**; low runners at .21/.22 mm. We reconstruct 4.5 mm fin tongues with default1.6 mm sheet and receiving dimensions `sheet+fit` and `4.5+fit`. Proposed default **.15 mm TOTAL allowance**, range .10–.30, is a printer-dependent starting point, NOT the measured source value (~.10 mm in the sheet direction). Runners deliberately thickened to .4–.6 mm. Clapper plates, opposed fins, four cord eyes and contact arrangement are original CSG geometry. `reference-analysis.json` maps every measured interface to real controls and documents deviations. No cat artwork or raw source is redistributed.

Reproduce analysis using trimesh/numpy/matplotlib: `python reference-inspect.py /path/to/downloaded-reference.stl`.

## Studio

The read-only `keycap_generator2` README, styles, App, Viewer, worker, STL, imageTrace and export modules were inspected. Concrete patterns implemented:374 px scrollable LEFT controls, sticky compact brand/theme header, collapsible sections, paired numeric/slider inputs, tactile raised/pressed buttons, lavender-grey/coral light theme, saved coherent dark theme, locally bundled Fredoka/Rubik, checkerboard source/cutout previews, and responsive preview-first phone stack. The RIGHT viewer has orbit/zoom/fit, see-through solids, dimensions/status/warnings and reachable exports. Touch targets ≥44 px, keyboard focus and reduced-motion support.

Three real model-thumbnail presets (Soft clap, Broad rhythm, Pocket pair), square/rounded/chamfered silhouettes, bounded variations, six searchable locally bundled vector icons and text engraving. Generic studio/import/serialization infrastructure is adapted from `20261031-21`; all clapper geometry, placements, assembly calculations/probes and interaction-specific content are new.

## Running and dependencies

Fresh Vite React scaffold, dependencies individually installed. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. The PUBLIC combined site is published with the ROOT monorepo predeploy/deploy flow, not the per-app deploy script.

Runtime dependencies bundled locally: React, Three.js/OrbitControls, Manifold3D WASM (Apache2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). Vite and Playwright development tools; gh-pages required by the scheduled task. No CDN imports, network services, paid APIs, keys or file uploads. Synthetic sample images and ASCII/binary STL fixtures only; attribution in `public/samples/`.

Production test server: `node serve.mjs`, `http://127.0.0.1:5623/daily-app2/20261031-22/`. `SERVE_ROOT` can point to the combined deploy app directory.

## Parameters, print and assembly

All lengths **millimeters**, angles explicitly degrees.

| Control | Supported range |
|---|---|
| Card width × height |128–148 ×120–140|
| Clapper width × length |44–50 ×50–58|
| Clapper / fin sheet thickness |2–2.6 /1.6–2|
| Fin height / tongue centre spacing |14–20 /15–21|
| Socket total allowance |.10–.30|
| Cord eye diameter / edge setback |3–4 /7–9|
| Part spacing |3.5–5|
| Breakaway runner width / thickness |.8–1.4 /.4–.6|
| Art footprint / engraving depth |4–7 /.4–.6|
| Art rotation / X / Y |±180° /±1.5 /±2|

Default card136 ×128 ×2.4 mm. All required printed parts are Boolean-unioned to a divided frame by16 accessible low runners, not merely arranged beside a rectangle. Snip1.6 mm OUTSIDE each part envelope; no cuts cross functional tongues or eyes. Removing all runners yields exactly four parts plus carrier. Every part prints at Z=0; sampled upper sections lie within the bed footprint. Separate clean parts fit smaller beds. PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Mesh validation is not a slicer/physical print result.

1. Print a clean fin and plate first to calibrate receiving allowance. Clearance seats are not snap fits; tune for the actual printer/material.
2. Remove16 runners and trim nubs. Seat each fin's two4.5 mm tongues from its clapper's OUTSIDE face. Shoulders stop against that face; tongue tips finish flush with the inside contact face. Bond all four FIXED seats with compatible adhesive; cure before use.
3. Put contact faces together, fins facing away from each other. Tie two independent external soft **.8–1.2 mm cord loops**, each through an aligned pair of rear eyes, knots outside the contact faces. Start with approximately25–35 mm loop lengths including knot allowance, trial-adjust slack for gentle opening and trim only after testing. No exact/universal loop length, rigid-pin retention or strength rating is claimed.
4. Hold opposed fins and gently open/close for taps. Hands guide alignment. No return spring or latch. Stop when the ties bind; replace worn cords. External cord and adhesive are REQUIRED, all printed parts included. Adult craft model: small parts and pinch points, not a young-child toy or load-bearing device.

The closed pose has intentional face contact and no volume overlap. Tests sample0–35° representative rear-edge rotation, check all part intersections and both straight fin insertion paths. The cord is flexible and not simulated: open/exploded poses are **explanatory estimates**, not proof of real cord kinematics/acoustics. Four through-eyes and minimum rim≥5 mm are checked independently. All STL exports remain actual bed-flat printable geometry, not assembled overlaps.

## Both local import workflows

Phone/desktop file picker plus drag/drop; replace/remove, reset transformations and return to defaults. Both imports change the final Boolean solid, not textures or unchanged re-exports. The signature patch is centred at `X=-plateWidth/2+11`, `Y=.60*plateLength`, separate from all sockets/eyes. Depth .4–.6 mm leaves ≥1.4 mm backing. Raised decoration intentionally unsupported to keep the contact surface and assembly interfaces safe.

### PNG/JPEG/simple SVG to printable relief

Content/header validation before decoding:16 bytes–2 MB, ≤12 MP and ≤6,000 px side. Normalize raster to ≤500 px. SVG supports ≤2,000 simple local filled/stroked shapes, no scripts/external resources/effects/text; rasterized locally to256 px. Fit whole source or fill/crop, pan±25%, remove light/transparent or dark background, threshold1–254 or inverse-luminance height relief, physical footprint/depth/rotation/placement.

Method: sample a **20 ×20 luminance grid**, `.2126R+.7152G+.0722B`; composite alpha onto selected background, threshold into depths or scale depth continuously with inverse luminance. Triangulate a closed heightfield cutter and subtract it using Manifold. Adjacent grid values interpolate; fine outlines are quantized, not exact vector tracing. Bright interior holes remain unengraved on continuous backing; actual solid probes verify a ring's hole, engraved annulus and backing. Checkerboard shows actual cutout/height samples alongside original image. This is **2D-to-relief, NOT automatic full3D reconstruction from one photo**. Text and icons take the same real geometry route.

### ASCII/binary STL to exact mesh-shaped engraving

≤2 MB, ≤1,500 triangles, each oriented axis .2–250 mm. Parse actual bytes; require finite coordinates, nondegenerate faces, consistent outward winding, welded exactly-two-opposite-face edge incidence, one positive-volume connected solid and no detected triangle self-intersections. Integration contract deliberately supports **convex broad-flat-footprint solids without overhangs** only. Concave, hollow, open, nonmanifold, disconnected, excessive and unsupported sources receive actionable rejection. No convex-hull substitution, hidden discarded concavity, repair claim or arbitrary mesh repair.

Show original oriented source dimensions, count/format and3D preview; require explicit mm confirmation because STL has no unit metadata. Select Z-up/Y-up/−Z-up before attaching; changing up axis detaches and requests reattachment. Proportional XY footprint scaling and independent Z-depth fit expose actual factors. Rotate, centre, scale, reset and place the **original accepted triangle mesh**, then Boolean-subtract it into the clapper. Imported shapes must remain within a bounded6.5 mm-radius protected patch and obey minimum feature rules; invalid transforms block export. No source uploaded or saved to the repository.

## State, geometry and exports

Manifold WASM heavy CSG and STL validation in a Web Worker;100 ms debounce, request IDs and current-state keys. Worker checks every result for finite/nondegenerate vertices, closed welded edge incidence, opposing winding and positive volume. Import conversion/pending/error and stale-state results disable every export. A last-good preview may remain labelled but cannot silently export after invalid edits. Preview/exports use the same exact current model; an STL fingerprint is exposed in the stage and compared against real downloaded bytes/Node regeneration.

Connected card, de-tabbed layout, assembled, exploded and four isolated parts share the same generated solids. Isolated views use native print orientation. See-through mode explains fit. Representative opening changes preview only and is labelled as such. Preview colours are not in STL. Binary STL per-part buttons, card export and Everything ZIP include all fiveSTLs plus numbered print/assembly instructions, not a mislabeled3MF.

Undo/redo (35 states), reset, up to6 locally named designs, JSON save/open include bounded normalized PNG or exact accepted mesh payloads. Missing/invalid assets request reattachment and block export. PNG payload≤500 px, JSON≤2 MB; images/meshes stay in this browser's localStorage only when a design is saved. Local storage full produces an explicit portable-JSON alternative.

## Validation and limitations

`npm test`: independent final binary-STL length/finite/triangle-area/normal/bounds checks; weld1e−5 mm, every edge exactly two opposite incident faces, positive signed volume PER component. 36 built-in cases (all presets/shapes, combined min/max and each individual field endpoint),18 image/ASCII/binary-STL-derived cases including extremes and transforms;29 bounded invalid inputs rejected. Real Manifold intersections check assembled pairs across representative openings, four tongue/slot volumes, outside fin insertion paths, four through-eyes, protected patch separation, flat-card nonoverlap, safe snips→five components, declared card envelope and bed-supported cross-sections. No force, fatigue, cord or sound simulation.

`node browser-test.cjs`: real production file-picker PNG/JPEG/ASCII/binarySTL, actual downloads and exact current-preview/JSON/Node signature checks; changed pixels/threshold/depth/crop/scale/rotation/placement change output; replace/remove/reset; all part downloads; invalid/truncated/nonmanifold/concave/excessive/dimension/image/empty-transform cases reject recoverably;320/390px touch orbit/pinch and mobile imports/downloads.

`node studio-test.cjs`: presets/shapes/text/icons/SVG, portable image+mesh JSON, missing payload, saved-design reload, undo/redo, actual ZIP contents independently parsed, views, theme persistence, keyboard focus, collapse, reduced motion,374px left-panel geometry,320px preview-first layout, worker-load abort/reload recovery.

`node personalization-test.cjs`, `node hole-check.mjs`, `node orientation-test.cjs`, `node stale-test.cjs`: every icon/text/SVG receives full geometry+assembly checks; actual solid hole/backing probes; up-axis payloads; immediate stale-export gating under rapid edits. Reports and screenshots are stored beside these scripts. Production-prefix/combined-site tests and gallery checks are recorded in `VALIDATION.md`.

These are **computational and browser tests only**. No actual print, physical assembly, hand action, cord fatigue or acoustic test has occurred. Printer-dependent fits and soft-cord adjustment require real trial prints before relying on the kit.
