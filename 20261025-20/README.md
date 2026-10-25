# Checkpoint Drift

A local React + Vite maker studio for a **tabletop yielding-gate fidget**. Slide a loose double-tapered rigid shuttle through three pairs of TPU cantilever gates, pause, and reverse. This is a new sequential lateral-deflection interaction, not a captive slider, ratchet or a keycap mechanism. The table forms the supporting floor. The shuttle deliberately lifts out anywhere.

## Run and export

`npm install`, `npm run dev`, `npm test`, `npm run predeploy`.

Build base: `/daily-app2/20261025-20/`. Per-app `deploy` exists as requested; public monorepo publishing uses the repository root deploy flow. All fonts, Three.js, Manifold WASM and fflate are bundled locally; no CDN, account, API or paid service.

The large viewer orbits, zooms and fits on desktop/touch. Assembled, exploded, individual runway/shuttle and separated print-plate views use the same checked parts. Assembled is a static pre-contact estimate, **not a deformation simulation**. Preview colours do not exist in STL. Download individual binary STL, the separated plate STL, or Everything ZIP with both parts and assembly notes. Each part rests on Z=0; print the runway in TPU and the shuttle in rigid material on separate material jobs.

## Parameters — millimeters unless stated

- Palm diameter: 22–28; round, hex or oval outline.
- Gate free length: 16–20 (strain estimate conservatively uses length minus 2 for root overlap).
- Gate bending width: 1–1.4; gate/rail Z height: 3–4.5.
- Rest throat: 6.5–7.5; shuttle width: 8.5–9.5.
- Deliberate elastic opening: `(shuttle width - throat)/2`, 0.5–1.5 per gate.
- Palm dimples: 0–0.6 deep. Palm top is 5 with a 0.8-deep personalization well.
- Imported footprint: 4–7; STL Z height: 0.6–5. Rotation ±180 degrees; placement X ±1.5, Y ±2. A 6.5-radius safety region bounds every actual imported vertex, protecting all gates and rails.

Three real presets include generated model thumbnails; bounded variations, reset, undo/redo, six named local designs, portable JSON save/open and saved light/dark theme are implemented. Each JSON includes the bounded normalized image or mesh payload; malformed/missing payloads fail explicitly rather than pretending to restore files.

## Image workflow

Choose PNG/JPEG or simple filled SVG using the phone/desktop file picker, drag one file into Import, or use bundled synthetic samples. Show source and checkerboard cutout; select light/transparent or dark/inverted background, contain/cover crop, X/Y pan, threshold versus grayscale relief, raised/engraved, footprint, rotation and placement.

Images are normalized to at most 500 pixels, then sampled on a **20 × 20 luminance grid**. Threshold heights are `depth` for values below threshold, zero otherwise; grayscale heights are `depth * (1 - luminance/255)`. A triangulated height surface, perimeter walls and closed backing are constructed, then robustly unioned into (or subtracted from) the isolated palm well using Manifold. White/transparent holes stay unraised or unengraved above a continuous structural floor; this is sampled silhouette relief, **not exact vector tracing or automatic full 3D reconstruction from a photograph**. SVG paths are rasterized locally to 256 pixels first; no scripts, external resources, effects, fonts or references are accepted. Text (8 characters) and six searchable bundled marks follow the same real relief path.

Limits: 16 bytes–2 MB; PNG/JPEG up to 12 MP and 6,000 pixels per side; valid type/content required; simple SVG up to 2,000 elements. Threshold 1–254; raised depth 0.4–3; engraved depth 0.4–0.6 preserves the well floor. Empty results, invalid depths or unsafe placement block export. Low grid resolution intentionally bounds work and gives a sampled aesthetic.

## STL workflow and explicit limitations

Both ASCII and binary STL are parsed locally in the geometry worker. Show the oriented source in its own 3D viewer, source dimensions and triangle count; the user must **explicitly confirm millimeter coordinates** because STL has no unit metadata. Choose Z up, Y up or upside down before attachment; changing the axis clears the source and requests reattachment. Center, proportional XY footprint scaling, independent Z height, Z rotation and X/Y placement actually transform the source mesh and solid-union it into the stationary palm grip. Replace/remove/reset returns to defaults.

Limits: 40 bytes–2 MB; 1–1,500 complete triangles; each dimension 0.2–250. Vertex welding at 0.00001 mm checks finite coordinates, nondegenerate triangles, closed edge incidence, consistent winding, connectedness, positive volume and triangle intersections. **Only convex, broad flat-bottom support-free grips are supported.** Concave, hollow, open, nonmanifold, self-intersecting, overhanging or disconnected input is rejected with guidance; no hull substitution, discarded concavities or claimed automatic repair. The convexity test is an acceptance check, never a replacement mesh. Bed contact must cover at least 25% of XY footprint and contain all projected vertices. After transformation, minimum narrow XY extent is 1.2. Final CSG must produce one connected checked solid per intended part.

## Responsiveness, validity and privacy

Manifold WASM geometry, CSG and STL preflight run in a Web Worker. Edits debounce at 100 ms; request IDs and exact parameter/source fingerprints reject stale results. Export is disabled during builds, import errors, invalid parameters, unconfirmed units and worker errors; a visible last-good preview is labeled and cannot silently export. Heavy source complexity and image grids are bounded. File parsing, conversion and design storage stay in this browser; there are no uploads. Only synthetic fixtures are bundled (`mark.png`, `waves.jpg`, `ring.svg`, ASCII wedge and binary gem); no personal files are stored in this repository. Fonts: Fredoka/Rubik via Fontsource (SIL OFL), Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), React/Vite.

## Printing and mechanism

Print runway bed-flat in TPU 95A, shuttle bed-flat in PLA/PETG. Start with 0.4 nozzle, 0.2 layers and three perimeters. No supports, bought hardware, glue, bearings or fasteners. The runway has an **open bottom** so no floor fuses the gate leaves. Use on a smooth tabletop; clear strings and elephant foot, place shuttle in the first bay, hold the palm and nudge through each checkpoint. Lift to release at any position. The final bay is long enough to pass the final gate completely and reverse. Keep fingers away from forcing jammed gates; stop for whitening/tearing.

Pocket Checkpoints is the full-size calibration print: widest throat, narrowest sled, gentlest gates. Tolerances and flex depend on your printer/material. Deliberate elastic interference is not a universal clearance. Estimated strain is `1.5 * bending_width * opening / effective_length²`; outward free slots retain at least 1 mm after estimated deflection. No force limiter or guaranteed tactile force. Static intersection tests verify the neutral and exit bays, intended throat contact, plate separation, and protected personalization region. Analytic ramp samples bound opening, slot clearance and beam strain. These are geometry/kinematic estimates, **not nonlinear FEA, measured friction, fatigue validation or an actual physical print test**. Physical prototypes remain necessary.

## Validation

`node validate.mjs`: 132 preset/default/parameter-extreme cases, 35 imported-output cases, independent dimensions and exported triangle topology/volume/winding checks. Final worker generation also checks every part and float32 print-layout geometry. `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node resilience-test.cjs` target the local Vite server at port 5300. Reports in `*-validation.json` record executed results, not promised tests. Browser tests use real file pickers/downloads, compare bytes to the exact generated source design, inspect actual ring-hole CSG, and exercise errors, mobile orbit/pinch, exports, round trips, themes and stale-result gating.
