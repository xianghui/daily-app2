# Pulse & Vortex

A React + Vite **seven-part flat-pack air-pulse chamber generator**. Snip 28 real breakaway runners, seat four walls in eight floor sockets, seal the lid and seams with tape, and attach an external flexible diaphragm under the printed ring. Tap the film gently to push an air pulse through the nozzle. Customize chamber dimensions, nozzle, sheet/fit, card, silhouette and real engraved personalization.

This is not another clicker, pendulum, kazoo or static STL re-export. The new functional assembly is a closed chamber with two coaxial openings, an independent ring and a taped lid. **Film and sealing tape are required.** Visible vortex rings are experimental and not promised. Physical printing, fit, airtightness, film tension, air pulses and vortex formation have **not** been tested. The translucent undeformed film is preview-only; it is not a printable membrane or a fluid simulation.

## Run and reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve-production.py
# From another terminal:
node browser-test.cjs
node studio-test.cjs
node mobile-layout.cjs
node advanced-test.cjs
node personalization-test.cjs
node extra-validation.mjs
```

Node 22.12+ recommended. App base `/daily-app2/20261104-20/`. Dependencies bundled locally: React, Vite, Three.js, Manifold WASM, fflate, Fontsource Fredoka/Rubik. Playwright is development-only. No CDN, API key, paid service, generation backend or user-file upload. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public monorepo publishing uses the ROOT predeploy/deploy flow.

## Reference-first evidence and attribution

Local STL candidates were inspected first, including their project instructions: Keycap Studio's MX template and Weave's extracted diamond link. Both were parsed and measured again for this run, but neither supplies suitable planar sheet/card interfaces. No irrelevant MX socket or fabric link was imposed on the kit.

Selected **White Cat Kit Card**, Mike Kasberg, Printables **865769**, [upstream](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. The upstream license was downloaded and retained in `REFERENCE-LICENSE.txt`, with the upstream README in `REFERENCE-UPSTREAM.md`. Actual source STL downloaded to `/tmp/pulse-vortex-reference.stl`, not bundled or redistributed. `reference-analysis.py` parses it and local candidates using Trimesh, splits edge-connected components and sections the actual mesh. `reference-analysis.json` records download URL, source identifier, SHA-256, all component bounds and relevant measured sections. `evidence/reference-sections.png` was visually inspected.

- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Actual source: **30,616 triangles**, **179.820 × 178.020 × 3.190 mm**, **27 edge-adjacent components**. Millimeters assumed from model context; STL has no unit metadata. Source contains degenerate/nonmanifold artifacts; inspection-only, not silently repaired or reused.
- **Measured source dimensions:** sheet **1.60 mm**; rectangular sockets **4.50 × 1.70 mm**; low runner tops **.21–.22 mm**. Sectioned at Z=.10, .215 and 1.59 mm to distinguish runner and sheet geometry.
- **Deliberate reconstruction:** measured 4.50 mm socket long dimension becomes a proposed nominal tongue width (not a claim that the original tongue was measured). Socket `(4.50+C) × (S+C)`, where proposed sheet S=2–3 and total clearance C=.10–.35 mm. The source .10 mm sheet-to-slot surplus informs the lower clearance bound. New .4–.6 mm carrier runners are thicker for FDM handling. No universal fit is claimed.
- **Original redesigned features:** closed chamber and all eight tongue locations, nozzle/rear apertures, independent film ring, lid butt seams, protected external apron and assembled transforms. Chamber dimensions and fluid behavior are not measured source features. No cat silhouette or source mesh copied. Genuine Manifold unions/differences build every solid; no convex hull substitution.

Reproduce source analysis with `/tmp/golden-venv/bin/python reference-analysis.py` after downloading the documented source URL to its named `/tmp` path (Python: trimesh, numpy, matplotlib). No reference tree edited or deployed.

### Studio reference

Read-only `keycap_generator2`: inspected README, styles, App, Viewer, STL, image trace, engine, export and worker modules. Concrete patterns used: compact sticky brand/theme header; 374 px left scroll panel; collapsible sections; paired sliders and numeric mm inputs; raised keycap buttons with pink pressed state; source editor, checkerboard cutout, oriented source preview, live worker status and exact-result export gating; assembled/exploded/card/isolated views; portable local designs. Lavender-grey desk #e7e9f1, white panels, #1f2233 ink, #e2557a coral, bundled Fredoka/Rubik and saved dark theme. Generic studio infrastructure adapted from prior Daily App Lab work; chamber geometry and assembly validation are new. Source dependencies and Git histories were not copied wholesale. Old `/daily_app` remains read-only.

## Parameters and physical construction

All dimensions millimeters, clearance is **total**, not per side.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 240–300 each |
| Inner chamber width / length / height | 46–60 / 55–75 / 38–48 |
| Front nozzle diameter | 10–18 |
| Sheet thickness S | 2–3 |
| Socket total clearance C | .10–.35 |
| Part spacing | 3–5 |
| Tab width / height | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art rotation / X,Y offset | ±180° / ±1.5, ±2 |

Three presets with actual generated thumbnails: Soft pulse, Pocket puff, Wide aperture. Soft, small-chamfer and broad-chamfer floor outlines change the exported solid. Chamber volume = width×length×height / 1000 mL. Rear aperture `min(width,height)−12`; printed ring has a 5 mm radial band, leaving a 1 mm minimum outer vertical flange margin. Nozzle remains open. Sizes that cannot pack inside the declared card fail with a recoverable error; parts are never silently shrunk or overlapped.

The floor top is Z=S; wall tops Z=S+height. Side walls run between the full-width front/rear panels. Eight 4.50 mm tongues fit floor sockets with chosen C, shoulders rest on the floor and tips finish flush underneath. The lid covers all four tops. The film ring seats outside the rear panel with a zero-thickness reference film plane between; real tape/film thickness may require adjusting how the ring is taped. There is no mechanical clamping, positive latch or airtightness claim.

Every part has four accessible low horizontal runners connecting to a genuine carrier. Snipping at marked computational cut locations yields one carrier and exactly seven intact separate parts, with no runner fragments. De-tabbed parts, connected card and preview assembly come from the same meshes.

### Print, calibration and assembly

1. Print one floor and wall first as a fit calibration. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, bed-flat Z=0; no supports intended. Start at C=.20 mm; increase in .05 mm steps if tight. Printer, filament and first-layer expansion matter.
2. Print one connected card OR seven clean parts, never both as required assembly stock. Snip 28 runners ~1.8 mm beyond each part; trim flush without damaging tongues or apertures.
3. Seat side walls, nozzle panel and diaphragm panel. Tape outside upright corners, floor seams **and the eight socket undersides** to prevent leaks. Slip fits locate only; tape or adhesive retains fixed parts. Add lid and tape all four seams. Printed sheets alone may leak.
4. Supply removable sealing tape and a thin latex-free film patch (e.g. clean .02–.05 mm polyethylene packaging film), at least 10 mm larger than the rear aperture diameter. Tape lightly taut across the rear opening, then tape the ring over it. Film stays external and replaceable, not in STL.
5. Tap gently to displace air through the open front nozzle. Let film relax between taps. Ring formation depends on stroke, tension and leakage; clear-air vortices may be weak/invisible. Do not block the nozzle, use compressed air, add smoke/fog, heat it or aim at eyes. No hardware, bearings or magnets required.

Full numbered instructions are embedded in the UI and Everything ZIP. Force, fatigue, assembly strength, airtightness and fluid performance are untested.

## Local image-to-model workflow

PNG/JPEG and simple SVG via file picker on phones/desktops or single-file drag/drop. Max 2 MB; PNG/JPEG ≤12 MP and ≤6000 px per side, validated from content header before decoding. Normalize to ≤500 px. SVG ≤2000 simple path/shape elements, rejects scripts, references, external resources and effects; rasterizes locally to 256 px. Text up to eight characters and six searchable bundled icons use this same conversion. Synthetic CC0 fixtures only in `public/samples/`, including PNG, JPEG and a ring SVG.

**Exact method:** canvas contain/cover fit, crop translation ±25%, light/transparent removal or inverted dark background; luminance sampled on a **20×20 vertex grid**. Threshold 1–254 yields depth-or-zero, grayscale yields `depth*(1−luminance/255)`. A closed interpolated relief tool is Boolean-subtracted from the protected floor apron. Bright/transparent interior holes retain full backing. Source preview and the actual converted grid/cutout are shown separately on a checkerboard. It is sampled **2D-to-relief**, not vector-exact tracing or reconstruction of a full 3D object from one photo. Small details may disappear at the bounded resolution.

Scale, rotation, X/Y placement, depth, crop and threshold change exported geometry. The whole tool must remain within a 6.5 mm radius safety zone outside the sealed chamber; .4–.6 mm engraving leaves ≥1.4 mm backing. Unsupported raised mode is omitted intentionally to preserve sheet-flat card construction. Replace/remove, reset transforms and reset image conversion recover without stale export.

## Local STL-to-model workflow

ASCII and binary STL content validated, ≤2 MB, ≤1500 triangles, each source axis .2–250 mm. Select Z/Y/−Z up before attaching, inspect oriented source preview and dimensions, then explicitly confirm millimeter coordinates because STL stores no units. Choose proportional XY footprint scale, independent Z engraving depth, Z rotation, centering and placement. The source's **actual original mesh** is Boolean-subtracted from the protected apron, visibly changing the model. It is neither unchanged re-export nor an overlapping shell.

Supported: **one connected, outward-wound, closed convex solid with a broad flat bottom**, whose entire XY projection lies inside its bed footprint. Broad base at least 25% of bounding-box footprint. Strict welding, edge incidence, positive volume, face degeneracy, triangle intersections, bounds, convexity and bed support checks run before heavy integration. Concave, hollow, branched, disconnected, open, inward, nonmanifold or unsupported overhanging input is rejected with actionable errors. No convex-hull replacement or unverified automatic repair. Use a low-poly support-free stamp shape from your modeler. The two bundled ASCII/binary synthetic fixtures try both paths without uploads. Changing up axis asks for reattachment rather than pretending the old asset was reoriented.

## State, worker and exports

Manifold in a dedicated Web Worker; bounded complexity, debounced edits and request/state-key guards. UI reports checking/building/error/ready. Preview and export share exact current valid meshes; invalid edits/imports disable all STL/ZIP exports even if a last-good preview remains visible. No stale fallback export. Undo/redo, six local named designs, JSON save/open, saved dark theme and presets. JSON includes bounded normalized images and original indexed STL payloads, revalidates on open and requests reattachment for missing files. JSON max 2 MB. Files remain local, never stored in the repository or sent to services.

Rotate, pan, zoom, fit, top/front and touch orbit/pinch; assembled, exploded, connected flat card, clean print plate and every isolated part. Assembled/exploded and film placement are explanatory previews. Every export bed-aligns actual printable solids. Binary STL per part, connected card, clean plate and Everything ZIP (eight STLs + portable JSON + numbered instructions/current dimensions). Preview colours are not STL colours; no fake 3MF.

## Validation

Reproducible scripts and JSON reports accompany the app. Independent STL checks validate exact byte length, finite coordinates, nonzero triangles, normalized normals consistent with winding, welded 1e-5 mm undirected edge incidence of exactly two opposite faces, positive signed volume **per component**, expected component count and mm dimensions. Each part and float32-translated combined print plate are checked, including image/STL-derived outputs.

Geometry/assembly checks include default, every preset, silhouettes, ranges and corners; closed connected card; 28-tab cuts yielding carrier+7 intact parts; flat bounds and nonoverlap; support-free footprint; eight socket continuity in card and clean floor; 51 collision-free assembly-path samples; chamber void and nozzle/rear/ring apertures; lid seat/tongue flush geometry; protected backing. Browser tests select PNG/JPEG/SVG/ASCII/binary files, download actual STL and ZIP, compare exact preview hashes and Node-regenerated JSON state, vary source pixels/threshold/depth/scale/placement, reject malformed/empty/excessive/nonmanifold/unsupported input, and check replace/remove/reset, worker failure/stale handling, saved designs, history, views, themes/focus and 320/390 px layouts/touch gestures. Production output is served at the real base-path prefix before publication.

These are **computational checks only**, not physical printing, seam sealing, force, pressure or fluid simulation. Physical fit, airtightness, film response, stability, air pulses and vortex formation remain untested.
