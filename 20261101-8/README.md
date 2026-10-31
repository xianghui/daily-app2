# Arc & Caustic

A browser-based **three-part flat-pack kit-card generator** for a parabolic reflective-film former. Snip twelve real runners, lower two concave ribs into four plinth sockets, bond the fixed seats, then tape external flexible mirror film across the curved edges. Aperture, focal distance, rib separation, vertex height, profiles and calibrated fits change actual printable geometry. This is an original parametric reconstruction, not an unchanged STL re-export.

## Run / reproduce

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
node mobile-regression.cjs
node icons-drop-test.cjs
node orientation-test.cjs
node rapid-test.cjs
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fontsource Fredoka/Rubik (SIL OFL). All dependencies resolve locally; no runtime CDN, API, paid service or upload. Production base `/daily-app2/20261101-8/`. Per-app `predeploy: npm run build`, `deploy: gh-pages -d dist`; public combined site uses ROOT deployment.

## Reference-first evidence

Local candidates inspected first: `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl`, including project README instructions and actual parsed meshes. Switch cavities/stems and 8 mm interlocking links are not suitable sheet/carrier references; hashes/dimensions/rejection reasons in `reference-measurements.json`.

Actual reference: **White Cat Kit Card**, Mike Kasberg, [GitHub source and README](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/), independently downloaded LICENSE in REFERENCE-LICENSE.txt). Binary STL downloaded and parsed afresh before final geometry: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; 179.819997 × 178.019994 × 3.189999 mm; 27 edge-adjacent components, source nonwatertight. Millimeters assumed, corroborated by 1.6 mm sheet; STL has no unit metadata. Actual sections at Z=.1/.5/1.59 mm were measured and visually inspected; `evidence/reference-sections.png`. Source receiving slots 4.5 × 1.700012 mm, sheet 1.6 mm, low runner planes .21/.22 mm.

Original reconstruction adopts default 1.6 mm rib sheet and 4.5 mm nominal tongue width scale. **4.5 mm male tongue width is proposed, not a measurement of a source male tongue.** Proposed TOTAL allowance .15 mm makes default sockets 4.65 × 1.75 mm, intentionally different from the source. Plinth 2–2.6 mm and runners .4–.6 mm are redesigned. Tongues end .2 mm above the plinth underside, shoulders seat on top; adhesive retention, no source snap-fit equivalence. Raw third-party/private source assets are NOT bundled; defective source mesh is neither repaired nor exported. See `reference-analysis.json`.

Primary read-only visual/interaction reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts, geometry/stl.ts. Concrete patterns: 374 px scrollable left controls/right rounded gradient viewer; compact sticky brand/theme header; tactile lower-shadow controls; paired sliders/numbers; collapsible sections; source/cutout checkerboard; current-result worker/export gating; preview-first stacked phone layout. No switch sockets imposed. Generic editor/import/export infrastructure reused from preceding studio; all assembly solids, parabola, socket positions and insertion transforms redesigned. No panpipe bores, collars, musical tuning or tube interaction remains.

## Supported parameters — mm

Card width 100–130, height 156–186; aperture 56–76; focal distance 14–24; rib separation 20–32; vertex height 8–12; plinth thickness 2–2.6; rib sheet 1.6–2; TOTAL socket allowance .1–.3; part spacing 3–4; runner width .8–1.4 and thickness .4–.6. Square/rounded/chamfered plinth profiles, three real model-thumbnail presets, mechanically bounded random variations.

Plinth = (aperture+12) × (separation+22). Ribs occupy XZ planes at Y=±separation/2. Four tongues: width4.5, thickness=sheet, length=plinth thickness−.2; X=±.3×aperture. Shoulders Z=plinth thickness. Slots=(4.5+allowance) × (sheet+allowance). Minimum 8 mm rib material under vertex; minimum engraving floor 1.4 mm; protected circular signature radius6.5 mm centred 8 mm from the plinth front, away from all sockets. Unsupported packing/parameters block export.

Upper rib edges follow `z = vertex + x²/(4f)` with 64 chords, maximum deviation <.007 mm over supported ranges. Ideal focus is a LINE parallel to rib separation at X=0 and f above the vertex, not a point. Film cut-length and focus-height guide are mathematical aids, not printed surfaces or a physically verified optical simulation. External film thickness/sag/ripples change real optics.

## Local image → real geometry

Desktop/phone picker and single-file drop; replace/remove/reset. Actual PNG/JPEG content headers checked before decode: 16 bytes–2 MB, ≤12 MP, ≤6000 px per side; normalize to ≤500 px. Simple SVG ≤2000 elements, no scripts/references/external resources, rasterized locally to256px. Up to8 text characters and six searchable original bundled icons use the same pipeline. Synthetic original CC0 fixtures in `public/samples`; no personal files committed.

Composite onto selectable light/dark background, fit/cover crop and ±25% pan, sample20×20 luminance. Threshold1–254 maps vertex heights to0/depth; grayscale maps depth×(1−luminance/255). A closed padded height solid is mirrored and Boolean-subtracted into the plinth. Checkerboard displays actual cutout. **2D sampled relief/silhouette conversion, not exact contour tracing or reconstruction of a full object from a photo.** Bright holes remain unengraved backing, not through-holes. Engraving depth .4–.6; footprint4–7; rotation±180°; X±1.5/Y±2 placement. Raised mode deliberately unsupported to keep print faces flat. Pixels, threshold, crop, depth and transforms change exported triangles.

## Local STL → actual Boolean integration

ASCII/binary STL,16 bytes–2 MB,≤1500 triangles,each axis .2–250 mm. Explicit mm confirmation required because STL has no units. Z/Y/−Z up before attachment; changing orientation clears source and asks for reattachment. Source 3D preview/dimensions, proportional XY fit to4–7 mm, independent Z.4–.6 engraving depth, rotation/placement/center/reset. Actual original mesh subtracted, **never silently replaced by a convex hull**.

Deliberately bounded contract: one closed consistently outward-wound convex positive-volume solid with broad flat bottom (≥25% footprint) and no projected overhang. Convexity test rejects unsupported sources; it does not rebuild them. Reject concave/hollow/multibody/open/nonmanifold/self-intersecting/degenerate/truncated/excessive geometry with actionable errors. No automatic repair claimed. Source and final previews remain available. Both workflows run entirely locally; files are not uploaded.

## Geometry, views, export, persistence

Heavy parsing and CSG in Web Worker;100ms debounce, request sequence/stale guards; bounded64-chord curves/20×20 artwork. Real building/ready/error feedback. Final solids checked for finite coordinates, nondegenerate faces, closed oppositely directed welded edges and positive volume. Preview and binary STL use identical current valid arrays and fingerprint; last-good preview is labelled and export disabled after invalid changes. Worker-load failure blocks export/requires reload.

Connected card, de-tabbed print plate, assembled, exploded, isolated parts, see-through plinth, orbit/zoom/fit and touch controls. Preview assembly uses rigid transforms of the actual print meshes; external film not drawn as a printable surface. All exports stay bed-flat. Per-part STL buttons and Everything ZIP contain connected-card, three clean-part STLs and numbered ASSEMBLY.txt/current fit data. STL has no colours or units; no3MF claim.

Undo/redo35 states; six named local designs; portable JSON with bounded actual image/mesh payloads, not paths. Missing payload requests reattachment. JSON≤2MB; image payload≤250k pixels. Local saved light/dark theme, accessible focus and reduced-motion handling.

## Print and assembly

1. Trial-print one tongue/socket first; fit varies by printer/material. PLA/PETG,.16–.20 mm layers,three walls,100% mm scale,bed-flat Z=0,no supports intended.
2. Snip12 runners1.6 mm outside part edges;trim nubs without damaging four tongues/sockets.
3. Lower both ribs vertically,concave edges up,shoulders on plinth. Bond all4 fixed seats and cure. Tongue ends stop .2 mm above plinth underside; no snap/friction retention promise.
4. Cut flexible mirror film roughly studio arc length × (separation+8) mm;leave extra first. Smooth shiny side up/inward over both ribs. Tape4 mm margins onto outer faces,not central reflecting span. Film,tape,filament-compatible seat adhesive and optional scrap matte target card are external. No bearings,magnets or fasteners.
5. Use a low-power cool LED with approximately parallel downward illumination; hold scrap matte card near indicated focal height to explore a bright line. Never sunlight,laser,heat source or direct bright-reflection viewing. Not a solar concentrator. Ideal mathematical reflection does not establish real optical performance.
6. Adult craft with cutters/small pieces. Physical printing,assembly,strength,film forming and optics **NOT tested**. Computational mesh/fit/ray checks are not physical tests. See VALIDATION.md and reproducible reports.
