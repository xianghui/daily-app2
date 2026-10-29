# Scoop & Sweep

A parametric **four-panel miniature scoop kit-card generator**. Snip sixteen runners, stand two tapered cheeks and a rear wall in six shouldered floor joints, then bond the joints. Sweep small dry desk scraps through the open front using the extended personalized handle. This is a dry-desk miniature, **not food-safe, watertight, load-rated or a measuring scoop**. Adhesive is required; no snap/friction retention is claimed.

## Run and publish

Node 22.12+: `npm install`, `npm run dev`. `npm test` checks exported geometry and assembly. `npm run predeploy` builds with Vite base `/daily-app2/20261029-30/`. Individual `deploy` runs `gh-pages -d dist`; actual combined-site publication uses the parent monorepo's `predeploy` and `deploy` commands.

Locally bundled dependencies: React/Vite, Three.js with OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (SIL OFL). Playwright is a development verifier. No CDN, paid service, key or remote geometry API. Geometry runs in a debounced Web Worker, with request-id and exact-current-state gates; invalid edits block every export even if a last-good preview remains visible. Worker failures are recoverable by reload.

## Actual STL reference, measurements and original adaptation

Local candidates were located and parsed first, after inspecting their project READMEs: `keycap_generator2/public/templates/clicker_template2.stl` has three switch parts, 944 triangles, 15.2 × 15.2 × 43.1 mm; `fidget_fabric_generator/public/templates/diamond-link.stl` is one 5,940-triangle 7.981 × 9.241 × 8 mm link. Neither is a planar sheet kit reference. The projects and all reference trees remained read-only.

Selected public geometry reference: **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README and license were retrieved. Actual binary STL was freshly downloaded, parsed and sectioned; raw mesh is **not redistributed**. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. It has 30,616 triangles, dimensions 179.820 × 178.020 × 3.190 mm, and 27 edge-adjacent components including tiny surfaces. It is **not watertight**: no claim of repair or unchanged printable reuse. STL has no unit metadata; millimeters are assumed and corroborated by source design scale.

[reference-analysis.json](reference-analysis.json) records identifiers, hashes, component counts, bounds, measured socket coordinates and decisions. [reference-inspect.py](reference-inspect.py) reproduces read-only analysis using trimesh/numpy/matplotlib. [Actual sections](evidence/reference-sections.png) at Z=.10/.50/1.59 mm show 1.6 mm sheets and four **4.5 × 1.7 mm** socket loops. Low runner elevations are .21/.22 mm. We retain bed-flat sheets, rectangular tongue/socket interfaces and low removable connections to a carrier.

Our tongue width is 4.4 mm; sockets are `(4.4 + allowance) × (sheet + allowance)`. Sheet=1.6 and allowance=.10 exactly reproduce the measured source socket envelope. Default .15 total allowance is a proposed glue clearance, **not a measured universal fit**. The scoop floor/handle, rising cheek profiles, rear wall, six insertion joints, corner seams and isolated customization medallion are original reconstructions. Strengthened 2.4 mm carrier rails and .4–.6 mm runners are proposed deviations. No endorsement, source motion or physical-print claim.

Visual/interaction reference: `keycap_generator2` README, `src/styles.css`, `src/App.tsx`, `src/Viewer.tsx`, worker, STL reader, image conversion and export modules inspected read-only. Concrete patterns: 374 px left scroll rail/right live viewer, compact header, lavender desk/white panels, coral tactile keys/soft-pink selections, local rounded fonts, source/checkerboard cutout, explicit imported units/transforms, current-result export gate and preview-first stacked phone layout. Reusable original studio plumbing from this repository was adapted, but all product geometry/assembly and documentation are new; no reference Git history/dependency tree copied. No irrelevant switch sockets.

## Dimensions and supported controls

All physical dimensions are **mm**; rotation in degrees, crop in percent.

| Parameter | Supported range |
|---|---|
| Connected card envelope | 180–210 × 145–175 |
| Floor width / depth | 46–58 / 38–48 |
| Rear / front cheek height above floor | 18–26 / 6–10 |
| Sheet thickness | 1.6–2.4 |
| Total tongue/socket allowance | .10–.35 |
| Part spacing | 4–6 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Handle groove depth | .2–.5 |
| Mark footprint / STL grip height | 4–7 / .6–3 |
| Mark rotation / X / Y shift | ±180° / ±1.5 / ±2 |
| Raised image / engraved image depth | .4–3 / .4–.6 |

Three presets have actual rendered thumbnails. Soft, chamfered and elliptical handle ends, bounded variations, text, searchable bundled original icons and imported art all modify exported geometry. Handle grooves are actual shallow cuts, not textures. Six socket floors are through cuts; tenon shoulders rest at the floor top and tips stop flush with its underside. Wall corners deliberately have seams of `sheet/2 + allowance`, with no conflicting insertion path. Minimum socket rim is checked; shallow image engraving leaves ≥.8 mm of backing. The medallion safe zone is 6.5 mm radius; escaping transforms are rejected before export.

The connected card is one boolean-unioned solid including frame, divider, sixteen low runners and every required part. De-tabbed parts are four distinct solids; accessible runner cuts do not touch any functional interface. Assembled, exploded, connected card, de-tabbed and isolated views share the exact result; assembled positioning is explanatory. Exports always use bed-flat printable part orientations. Orbit, zoom/fit, touch/pinch, saved theme, collapsible controls, undo/redo, six local named designs and portable JSON are implemented. Preview colors are not carried in STL.

## Image and SVG conversion

Desktop/phone file picker and one-file drag/drop accept actual **PNG/JPEG** and simple self-contained SVG. Limits: 16 bytes–2 MB, raster ≤12 megapixels and ≤6,000 px/side. Header checked before decode; normalized to ≤500 px. SVG ≤2,000 simple vector elements, ≤6,000 px/side, locally rasterized to 256 px; external resources, scripts, filters and unflattened text are rejected.

After contain/cover crop, ±25% pan and light/dark background selection, a **20 × 20 grayscale grid** is sampled. Threshold selects dark samples; grayscale relief maps darkness to height. A continuous triangulated height field over .4 mm backing is closed at its sides/bottom and boolean-unioned into the handle, or mirrored/subtracted for shallow engraving. Source and actual cutout are shown on checkerboard. Bright/transparent holes remain unraised/unengraved backing, not cut-through holes. Interpolation means sampled relief rather than exact contour tracing. Empty conversion is blocked. This is **2D-to-relief, not reconstruction of a full 3D object from one photo**. Text/icons use the same local geometry pipeline. Physical size, depth, rotation, crop and placement affect final STL. Replace/remove/reset are real workflows.

## Imported STL integration

Complete ASCII and binary STL: ≤2 MB, ≤1,500 triangles, one connected closed outward-wound **convex** solid, dimensions .2–250 mm per axis. Select Z/Y/−Z up before attaching; changing it clears the asset and requests reattachment. Original-mesh preview, oriented source dimensions, format and triangle count are shown. Explicit millimeter confirmation is mandatory: STL has no units. XY scales proportionally to selected footprint; Z independently to grip height. Scale factors are displayed. Rotate around Z, center/reset, place, replace or remove.

Preflight checks finite coordinates, dimensions, nondegenerate faces, welded edge incidence and opposite direction, connectedness, positive volume, triangle intersections, convexity, broad flat bottom contact and no unsupported overhang footprint. Open/nonmanifold, inward-wound, concave, hollow, touching, branched, self-intersecting and unsupported overhang inputs are **rejected with actionable feedback**, never automatically claimed repaired. A footprint hull is used solely as an input acceptance test; the original accepted mesh enters the modeling kernel unchanged, is transformed and **solid-unioned into the handle**. No convex-hull replacement, unchanged re-export or interpenetrating-shell fake union. Safe-zone checks protect all six joints and the scoop chamber.

## Privacy, saved designs and exports

Files stay in browser memory; no uploads. JSON/local named designs include bounded normalized image or mesh payloads, never pretend filesystem paths were restored. Missing/malformed/oversized payloads are rejected and request reattachment. Only original synthetic sample fixtures are bundled, with [attribution](public/samples/ATTRIBUTION.txt). No personal inputs or raw third-party meshes.

Download current connected-card **binary STL**, each named part STL, or Everything ZIP with the connected card, four parts and numbered `ASSEMBLY.txt`. Final selected export X/Y/Z bounds in mm are displayed. Preview and downloads use the same exact valid worker result. STL contains geometry, not preview colors. No fake 3MF or remote export.

## Printing and assembly

1. Print PLA/PETG bed-flat, 100% mm scale, .4 mm nozzle, .16–.20 mm layers, three walls. No supports intended. Check the card fits your bed or export separate parts.
2. Calibrate a 4.4 mm tongue and chosen socket allowance on your own printer/material before bonding. Use elephant-foot compensation as appropriate; fits are not universal.
3. Snip sixteen runners and trim nubs only on outer edges, never tenons or socket walls. Adult cutter craft with small parts.
4. Stand both cheeks with low ends at the open front. Lower four tongues into side sockets; shoulders seat on the floor.
5. Lower rear wall into two rear sockets. It clears both cheek ends. Dry-fit, then bond all six joints with plastic-compatible adhesive and let cure. No flexing, locked assembly path or claimed snap retention.
6. Hold the handle and gather small dry desk scraps. Not a scraper, sealed container, calibrated scoop, food implement or structural tool. Corners/through sockets are unsealed. Adhesive required; no other hardware. No broom included.

## Verification

`npm test`: eight built-in cases (three presets, extrema, all handle silhouettes), plus eight imported cases. Independent binary-STL checker tests exact byte count, finite coordinates, nonzero triangles, normalized normals consistent with winding, opposite-direction welded edges at 1e−5 mm, per-component positive volume and millimeter bounds. All five exported meshes per case are checked.

Independent Manifold tests check all assembled pair intersections, six socket clearances, shoulder over-insertion stops, every panel's vertical insertion path with other parts present, de-tabbed separation and sixteen safe cuts yielding four parts plus carrier. `node hole-check.mjs` probes actual raised/engraved ring voids in final solid geometry.

`node browser-test.cjs`, `node studio-test.cjs`, `node supplemental-test.cjs`: real file-picker uploads/downloads, PNG/JPEG/ASCII/binary fixtures, changed pixels/threshold/depth/scale/rotation/placement affecting STL, reset/removal, malformed/empty/excessive inputs, all presets/shape/text/icon/SVG, JSON image/mesh payload round trips, missing-payload rejection, named reload, undo/redo, exact mesh fingerprints, ZIP member parsing, worker failure/recovery, rapid edits/stale-export blocking, views, light/dark, focus/collapses/reduced motion and 320/390 px phone orbit/pinch/downloads. Production base path at port 5431, override `TEST_BASE`. The exact downloaded snapshots are independently regenerated in Node and undergo the same assembly and mesh checks.

Reports/screenshots record performed computational checks. **No physical print, slicer simulation, adhesive-strength, fatigue or use testing was performed.** Computational prototype validation does not prove physical fit or print success.
