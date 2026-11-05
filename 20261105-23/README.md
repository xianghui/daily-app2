# Hartmann & Focus — interchangeable aperture-mask kit studio

A React + Vite browser maker studio generating a **genuine connected kit card**: a personalized socketed base and two interchangeable Hartmann-style masks, held by **12 removable runners**. One mask has two collinear apertures; the other has three equilateral apertures. Aperture diameter, pupil separation, mask size, sheet/socket fits, carrier and engraving are actual parameterized printable solids, not a static download or cosmetic reskin. This is a new optical pupil-sampling assembly, not a pendulum, clicker, pinhole projector or lens holder.

**External items required:** independently supported converging lens, distant diffuse lamp/LED with a small pinhole target, separate matte paper screen and removable mounting tape. The stand holds only the mask. Lens clear aperture must exceed `2 × separation / sqrt(3) + aperture diameter`, plus centering margin. Optical axis height is `sheet + diameter/2 + 10` mm. Place mask immediately in front of the lens. Move the paper screen behind the lens and compare the separate hole images near focus. Use diffuse artificial light, not sunlight or lasers. No optical rays/performance are simulated.

**Physical printing, fit, stability, tape adhesion and optical performance are untested.** Computational mesh and fit checks do not establish instrument accuracy. The shallow tongues are interchangeable gravity slip seats, not positive retention or universal press fits; secure mask foot and base with removable tape before use. Seat only ONE mask at a time. The unused mask is laid beside the stand in assembled preview.

## Run, stack and deployment

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
```

Node 22.12+ recommended. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik fonts. Playwright provides reproducible browser tests. Generation/imports/export require no API keys, backend, remote APIs, CDN or paid service. All runtime dependencies, fonts and WASM are bundled. Base `/daily-app2/20261105-23/`; `predeploy` is exactly `npm run build`, `deploy` exactly `gh-pages -d dist`. Publication uses the ROOT monorepo deploy flow, not the per-app deploy command.

Read-only Keycap Studio files inspected before implementation: README, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts and geometry/stl.ts. Concrete patterns: 374 px left controls, compact sticky brand/theme header, collapsible labeled sections, paired slider/mm numeric fields, raised keycap-like buttons with pink depressed selections, lavender-grey desk, white panels, gradient right-side orbit viewer, lower warnings/export, saved dark theme, generous touch/focus targets and preview-first phone stacking. General studio/import/test infrastructure is reused from earlier Daily Object Lab apps; geometry, aperture logic, assembly poses and fit checks are new. Reference projects, old daily_app tree, dependencies and Git history were not modified/copied wholesale.

## Reference-first evidence

Local candidate meshes were parsed, not just listed: Keycap Studio `clicker_template2.stl`, 944 triangles, 3 components, 15.20 × 15.20 × 43.10 mm aggregate; fabric `diamond-link.stl`, 5,940 triangles, 1 component, 7.981 × 9.241 × 8 mm. Their MX sockets/interlocked fabric are inappropriate sheet-kit interfaces. Relevant Keycap and Fabric READMEs were inspected.

Selected reference: **White Cat Kit Card / Printables 865769**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README and license fetched into `evidence/`. The Printables STL download returned HTTP 403 this run; recovered previously downloaded public-source bytes from `/tmp/20261103-white-cat.stl` and **freshly parsed those actual bytes**, verifying their SHA-256. No private mesh or raw source STL is redistributed. Original spacecraft artwork is not reproduced.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; STL has no units, mm assumed.
- Bounds: approximately 179.820 × 178.020 × 3.190 mm.
- Endpoint-welded edge adjacency at 1e-5 mm: 2 mesh components, 26,870/3,746 faces. These are mesh components, not an asserted assembled-part count. Source has 57 bad-edge incidences and duplicate/zero-area anomalies; no arbitrary repair claimed.
- Measured sections at Z=.10/.215/1.59 mm show four **4.50 × 1.70 mm** rectangular sockets. Principal sheet planes Z=0/1.60 mm; thin runners top at .21–.22 mm. See `evidence/reference-sections.svg`, `reference-analysis.json` and reproducible `reference-analysis.py SOURCE.stl`.
- Preserved interfaces: default 1.60 mm sheet, 4.50 mm socket length, 1.70 mm default socket width, paired tongues and connected low-runner carrier.
- Deliberate redesigns, **not measured source tongue dimensions**: socket width = sheet + .10–.30 mm allowance; tongue width = 4.50 − allowance; tongue depth = sheet − .80, leaving .80 mm blind floor. Runners strengthened to .4–.6 mm. Circular masks, pupil patterns, socketed tabletop stand and all layout/assembly logic are original parametric reconstruction, not source triangle re-export or convex-hull replacement.

## Parameters (all linear dimensions in mm)

| Parameter | Range | Default |
|---|---:|---:|
| Card width / height | 170–240 / 170–220 | 180 / 180 |
| Mask diameter | 46–66 | 56 |
| Aperture separation | 20–26 | 24 |
| Aperture diameter | 5–8 | 7 |
| Sheet thickness | 1.6–2.4 | 1.6 |
| Total sheet/socket clearance | .10–.30 | .10 |
| Part spacing | 3–5 | 3.5 |
| Runner width / thickness | .8–1.2 / .4–.6 | 1 / .6 |

Three actual presets have generated-model thumbnails. Soft/chamfered/scalloped base silhouettes change the export. Two-hole centers are ±separation/2; triple centers lie on radius separation/sqrt(3), 120° apart. Minimum radial rim >3.98 mm and hole-to-hole web ≥12 mm across all independent supported extremes. The 24 mm mask neck overlaps the disk by 3 mm. The two masks use identical tongues. Changing seated-mask preview never changes the card, which exports both alternatives.

All three sheet parts rest at Z=0. Card stays within its declared envelope and includes actual welded-to-part breakaway runners, not a loose plate arrangement. Four snip corridors per part avoid functional sockets/tongues/apertures. Tests simulate all cuts and require carrier + exactly three intact parts, with no leftover runner fragments. Clean-part exports omit runners. Print card OR clean parts.

## Image workflow — local PNG/JPEG/SVG → real engraving

File picker on desktop/phone and drag/drop; synthetic downloadable samples. Files 16 bytes–2 MB. PNG/JPEG headers/content checked before decode, ≤12 MP, ≤6000 px/side, normalized to ≤500 px. Simple SVG ≤2,000 allowed elements, no scripts/external resources/references/filters/fonts; flatten text first. SVG rasterized locally to 256 px.

Fit/crop/pan samples source into a **20 × 20 height grid**; light/transparent or dark background polarity, threshold 1–254, grayscale relief and .4–.6 mm depth create a closed bottom/side cutter that is reflected and Boolean-subtracted from base apron. Source and the actual cutout grid are shown on checkerboards. This is **2D-to-relief/silhouette conversion**, NOT automatic full-3D reconstruction from a photo. Bright holes retain backing at sample resolution; sub-grid details are not promised. Empty images and unsafe transforms block export. Text (up to eight characters) and six searchable original bundled SVG icons use this same conversion.

Footprint 4–7 mm; rotation ±180°; offset X±1.5/Y±2 mm; every cutter vertex within radius 5.8 mm around base (0,12), away from sockets/edges. Depth leaves ≥1 mm backing. Engraved only; no cosmetic raised toggle. Replace/remove, transform centering and image-control reset are real. A final-solid ring probe independently checks preserved hole backing and removed ring material.

## STL workflow — explicit supported subset, real integration

ASCII and binary STL, 40 bytes–2 MB, 1–1500 triangles, .2–250 mm per source axis. Parser checks content/truncation, finite coordinates, dimensions, nondegenerate faces, closed edges/opposing winding at 1e-5 mm weld, one positive-volume component, self-intersections, convexity, broad flat-bed footprint and supported projections. Concave, hollow, inward, disconnected, open/nonmanifold, overhung or otherwise unsupported input is **rejected with actionable errors**, never silently repaired or replaced by a hull.

Choose Z-up, Y-up or inverted-Z before attachment (changing it clears the source and requests reattachment). Source preview reports oriented dimensions, triangles and format. Confirm millimeter assumption explicitly: STL has no unit metadata. Proportional XY scaling to 4–7 mm footprint, independent .4–.6 mm Z depth, rotation and XY placement visibly/measurably alter the final base engraving. Original imported triangles become the solid Boolean cutter, not unchanged re-export or overlapping shells. Scale factors are displayed. Aperture masks and socket keep-outs cannot be obstructed by engraving.

All files processed locally, never uploaded or added to the repository. Only synthetic/public fixtures are bundled; see `public/samples/README.txt`.

## Worker, persistence, views and export contract

Manifold instance lives in module Web Worker; bounded resolution, 100 ms debounce, request IDs and exact serialized-state keys suppress stale results. Independent async file-load IDs prevent older images replacing newer choices. Invalid edits/imports/worker errors disable export even when a last-good preview remains visible; no silent stale mesh export. Preview and export share the exact validated part meshes; binary-STL fingerprint is exposed on `.stage` and tested against actual downloads and independently JSON-regenerated results.

Undo/redo: up to 35 bounded snapshots. Six named local designs; portable JSON save/open carries normalized image or verified bounded mesh payload, not local file paths. JSON ≤2 MB, image payload ≤1.8 MB/250k pixels, mesh ≤1500 triangles. Missing image payload explicitly requests reattachment, malformed files recover via reset/replacement.

Assembled/exploded/connected-card/clean-plate/isolated-part views use the same geometry. Swapping seated masks moves the selected one into sockets and lays the unused mask beside the stand. Exploded mask lifts 15 mm to explain insertion. The external lens, target, screen and tape are omitted and are not printable phantom parts. Orbit, zoom, fit/top/front, touch/pinch, see-through parts, saved light/dark theme and preview-only palette are included. STL contains no colors.

Binary STL per card/clean plate/part; prominent Everything ZIP contains **four STLs** (connected card + three clean parts), numbered instructions, assembly SVG and portable design JSON. This is not a fake 3MF. All parts print in real bed-flat orientation, not assembled interpenetrating shells.

## Printing and assembly

Opaque PLA/PETG, .4 mm nozzle, .16–.20 mm layers. Print base + one mask first as full-size socket calibration coupon. Snip twelve runners, trim scars, choose one mask and lower both tongues vertically. Shoulder rests on base top; socket has .80 mm floor. Tape foot/base securely, leave the spare mask aside. Lens requires its own support and optical-axis alignment; this kit is not a universal telescope clip or safety filter. Full ten-step guide appears in UI/ZIP (`printNotes` in `src/geometry.js`).

## Validation

`npm test`: defaults, all presets, each field minimum/maximum, simultaneous extrema, all outlines and image/STL-derived variants. Every independently serialized card/part/clean plate checked for finite values, exact binary length, normalized outward normals, nondegenerate triangles, expected mm bounds, every welded edge having exactly two opposite-directed faces, intended component count and positive signed volume per component. Robust Manifold operations enforce closed solids. Separate mechanism checks test card bounds/thickness, snip connectivity, intact released pieces, unsupported XY projections, both alternative assembled poses, insertion paths, clear optical apertures and minimum rims/webs/floors.

Browser scripts exercise real file pickers and actual STL/ZIP downloads on the production base path, changing pixels/threshold/depth/scale/orientation/placement, malformed/open/nonmanifold/excessive input, import replace/remove/reset, persisted themes/designs, portable assets, undo/redo, stale import/worker failure recovery, all presets/marks/views and 320/390 px layouts with real CDP touch orbit/pinch. See `VALIDATION.md` and JSON reports. No physical print or optical experiment performed.
