# Turn & Tier — quarter-turn staircase kit-card studio

Ten flat pieces make a miniature hollow tower with four ascending, orthogonal cantilever treads: one plinth, one crown, four height-indexed walls, four treads. Forty genuine low breakaway runners connect every piece to a three-bay carrier. This is a **stationary architectural kit**, not a moving fidget, a load-rated staircase or a physical toy for children. Adhesive is required at all twelve joints. No physical print or adhesive/strength testing has been performed.

## Run

```sh
npm install
npm run dev
npm test
node extra-validation.mjs
npm run predeploy
```

React + Vite, Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate ZIP, locally bundled Fredoka/Rubik fonts. No CDN, API, backend, key or paid service. Public deployment uses the **root** monorepo deploy flow; per-app `predeploy` and `deploy` are also present as requested. Base: `/daily-app2/20261029-7/`.

## Reference-first evidence

Local STL trees were searched first: clicker sockets, diamond links and telescoping/spring shapes were unsuitable for a sheet-assembly kit; local kit-card projects contained no STL references. Then downloaded and parsed the publicly available **White Cat Kit Card** by **Mike Kasberg**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([license](https://creativecommons.org/licenses/by/4.0/)). Repository README, LICENSE and kit_frame.scad inspected. No ship artwork or source STL is redistributed. No endorsement implied.

SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
Binary source: 30,616 triangles, 179.819997 × 178.019994 × 3.190000 mm. STL is unitless; millimeters corroborated by source sheet/frame dimensions. Edge-adjacency splitting yields **27 components**: two substantive shells and 25 two-face coplanar artifacts. Source is **not watertight**; it is inspected as a design reference only, not repaired or exported. Three actual sections at Z=0.1/0.5/1.59 mm were inspected; see `evidence/reference-sections.png` and `reference-analysis.json`. `reference-inspect.py` reproduces the parse and sections with trimesh/numpy/matplotlib.

Measured source sheet planes 0/1.6 mm ground the **1.6 mm default sheet**. Measured 1.6 mm carrier rails are redesigned to 2.4 mm; low source bridge elevations 0.21–0.22 mm inform proposed 0.4–0.6 mm snip runners, width 0.8–1.4 mm. This preserves the source's real sheet/carrier/runner construction, not its shapes. Hollow square tower, four radial tongue seats, indexed wall holes, plinth/crown sockets and all clearances are original reconstructions. No switch socket or convex-hull substitute is used.

Visual/interaction study: read the primary reference project's README, styles, App, Viewer, worker, export, imageTrace, legend and STL modules read-only. Studio carries forward the concrete 374 px left panel, sticky compact brand, collapsible sections, paired sliders/mm fields, keycap-button pressed states, pink selections, lavender desk, white panels, local rounded fonts, source/final previews, saved themes and mobile preview-first stack. Existing Daily App infrastructure is reused for imports/history/exports, not the previous picnic-table geometry. Compared both galleries; unlike the earlier straight stair with stringers, this kit uses independent cantilever treads around a four-sided hollow tower.

## Parameters (all physical dimensions in mm)

| Control | Supported range |
|---|---|
| Card width × height | 240–280 × 200–240 |
| Plinth size | 56–64 |
| Tower outside width / height | 16–20 / 44–56 |
| Tread projection / width | 12–18 / 12–16 |
| Tongue width | 6–8 |
| Sheet | 1.6–2.4 |
| Total mating slot allowance | 0.10–0.35 |
| Part spacing | 4–7 |
| Runner width / thickness | 0.8–1.4 / 0.4–0.6 |
| Dimple depth | 0–0.4 |

Rounded, chamfered and clipped silhouettes; three real model-thumbnail presets. Tread heights are 18%, 38%, 58%, 78% of tower height above the plinth upper face. Tongues engage sheet thickness minus 0.15 mm; wall corners deliberately have 0.6 mm total end separation. Thin-side-wall and card packing violations are blocked, not silently clamped. Tread rear shoulders remain full-width regardless of silhouette. Individual files fit smaller beds than the full card. No unsupported claim that every independent range combination fits a card.

## Images, text, icons and SVG

Use file picker on desktop/phone, drag-and-drop, or synthetic bundled samples. PNG/JPEG content validated before decoding: max **2 MB**, **12 MP**, **6,000 px per side**, normalized source at most 500 px. Simple SVG supports local safe shapes/paths, max 2,000 elements; active/external content rejected, rasterized at 256 px. Text (up to 8 characters) and six searchable bundled icons use the same pipeline.

This is **2D-to-relief/sampled silhouette**, NOT full 3D reconstruction from a photo. Browser canvas composites over chosen light/dark background, fits/crops and shifts ±25%, samples a bounded **20 × 20** luminance grid, then either thresholds at 1–254 or maps grayscale to height. A triangulated height surface and bottom/side shell make a closed solid. Manifold unions it into, or subtracts it from, the plinth. Bright holes stay unraised/unengraved over solid backing; this is not exact vector contour tracing. Source plus exact converted cutout appear on a checkerboard.

Raised depth 0.4–3 mm; engraving 0.4–0.6 mm to preserve ≥0.8 mm panel. Footprint 4–7 mm, Z rotation ±180°, placement X±1.5/Y±2 mm within a checked 6.5 mm-radius keep-out. Imported geometry changes the final STL, not a texture. Replace/remove/reset restores built-ins. Fonts, samples and geometry runtime are local.

## STL integration

Actual ASCII or binary STL, ≤2 MB and ≤1,500 triangles, each source axis 0.2–250 mm. Explicitly confirm **millimeter coordinates**; STL has no unit metadata. Choose Z/Y/−Z up before attaching (changing up-axis requests reattachment). See source dimensions, triangle count, preview and scale factors. Footprint 4–7 mm proportionally scales XY, independent height 0.6–3 mm scales Z; rotate and place in the medallion. The actual validated triangles are transformed, embedded 0.15 mm into the medallion floor, and **boolean-unioned** to the plinth. No hull approximation and no unchanged re-export.

Deliberately supported input: **one outward-wound watertight convex flat-bottom solid grip**. Reject open/nonmanifold meshes, degenerate faces, nonfinite/excessive coordinates, disconnected shells, self intersections, concavity/cavities/thin branches and overhangs. A broad flat base must cover ≥25% of its XY box, and all projected vertices lie within it. Unsupported concave inputs get actionable errors; arbitrary repair is never claimed. File parse checks run in the worker before integration. Triangle limits bound quadratic preflight work.

## State and geometry integrity

Heavy CSG/mesh work uses a bundled Web Worker and WASM, 100 ms debounce, increasing request IDs, bounded resolution and real loading/build/error states. Exact source/parameter/transform key gates exports. Invalid changes cannot download a visible last-good result. Preview and binary STL use the same current validated mesh; the UI records its fingerprint for reproducible checks. Export X/Y/Z reflects the selected printable part, **not** assembled dimensions.

Undo/redo, six locally named designs and JSON save/open include bounded normalized image/mesh payloads. Missing image payload asks for reattachment. JSON mesh payload re-runs strict parsing. User files stay in memory/browser storage only, never uploaded or added to the repository. Only synthetic fixtures are bundled. Local save can fail visibly when browser quota is full.

## Views and exports

Assembled, exploded, connected card, de-tabbed layout and every isolated part. See-through walls explain interfaces. Assembly separation slides treads outward and raises crown; these are preview-only positions, not a dynamics simulation. Orbit/zoom/fit and phone touch gestures. Prominent binary STL, per-part downloads and Everything ZIP containing all eleven STL files (card plus ten loose parts) and numbered instructions. STL has **no colour**. No 3MF claim.

## Printing and assembly

PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls, all parts **bed-flat**, relief up; no supports intended. Adult: snip 40 runners with flush cutters and trim nubs/elephant foot. Dry-fit one wall/tread pair first; adjust **total** clearance in 0.05 mm increments for material/printer.

1. Identify wall height sequence by one to four small holes. Arrange north → west → south → east (counterclockwise viewed from above) from lowest to highest tread slot.
2. Seat the four wall bottom tongues in the plinth. Keep outer faces outward and square; hold temporarily.
3. Slide each tread horizontally inward to its wall until its full-width rear shoulder butts against the wall face. Tongue ends 0.15 mm short of the inner wall face.
4. Lower crown onto all four upper tongues.
5. After dry fit, adhesive-fix **all twelve joints** and support the treads level until cured. No snap/captive retention, friction, strength or stability claim. No hardware beyond adhesive. Small parts/cutters: keep away from children/pets.

## Reproducible validation

`validate.mjs`: independent float32 STL parser checks exact byte count, finite coordinates, nondegenerate faces, normal/winding consistency, welded edge incidence exactly two/opposite, positive per-component volume, declared mm bounds and component counts. Manifold intersections check all pairs, wall/tread/crown insertion paths, shoulder stops, slot guides, card connectivity, no loose-part overlap and virtual snips yielding ten parts plus one connected carrier. Runs default, all presets, min/max, mixed extremes and imported-image/STL outputs. Packing/side-wall violations must reject.

`extra-validation.mjs`: genuine raised ring-hole probe, unsupported concavity rejection, image and original sloping STL integration plus full assembly checks.

`browser-validation.mjs`: real file pickers and downloads, fingerprint/state regeneration match, PNG/JPEG/SVG/ASCII/binary STL, changed pixels/threshold/depth/transforms, reset/replace/remove, JSON/named round trips, undo/redo, malformed files, empty silhouettes, stale-export blocking, worker failure recovery, all per-part/ZIP STLs, light/dark/focus, 320/390 px no overflow, touch orbit/pinch. `TEST_URL` points to production for the production rerun. `production-preflight.mjs` validates combined gallery and production unsupported inputs. Reports and screenshots are in this folder. Computational checks **do not constitute physical print, fatigue, force, adhesive or stability testing**.
