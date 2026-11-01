# Grid & Gaze — perspective-window kit-card studio

A React + Vite, local-only parametric **flat-pack kit-card** generator. Snip twelve real runners, release a printed observation grid and two feet, then seat the grid upright in two calibrated sockets. Keep one eye fixed and transfer an object's contours cell by cell onto a matching paper grid. This is a physical observation aid, not a lens, automatic drawing app or precision measuring instrument.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

`vite.config.js` uses `/daily-app2/20261101-27/`. Per-app `predeploy` builds and `deploy` runs `gh-pages -d dist`; public monorepo publication is performed from the ROOT repository's combined `deploy/` flow instead. All generation, Three.js preview, Manifold WASM, fonts, sample assets, binary STL and ZIP export are bundled locally. No API, paid service, CDN or upload endpoint.

## Reference-first evidence

Local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles; 15.20 ×15.20 ×43.10 mm; three components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles; 7.98 ×9.24 ×8 mm; one component). Their switch and interlocking-link interfaces are unsuitable for sheet-card assembly; they were not substituted as generic templates.

The geometry reference is **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. The actual downloaded binary STL has SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**, 30,616 triangles, bounds 179.819997 ×178.019994 ×3.190000 mm, and 27 edge-adjacent components. Millimeters are assumed, corroborated by source sheet dimensions; STL has no units. The reference itself has nonwatertight components; it is a design reference, not repaired or re-exported geometry.

`reference-measure.py` parses the source mesh, measures components/planes and cuts actual sections at Z=.1/.5/1.59 mm. `reference-measurements.json`, `reference-analysis.json`, and `evidence/reference-sections.png` record evidence. Run with Python plus trimesh, numpy, scipy, networkx and matplotlib, passing the downloaded reference path. No private or raw third-party source mesh is bundled.

**Measured → actual parameters:** source sheet 1.60 mm, sockets 4.50 ×1.700012 mm; reconstructed foot sockets are 4.50 ×(sheet+fit), frame tongues are (4.50−fit) ×sheet. These preserve sheet-to-socket assembly, not keycap-specific switch geometry. Source low runners are .21–.22 mm; the new .4–.6 mm bed-aligned runners, .10–.30 mm total fit allowance and grid are explicitly proposed redesign choices. This is original Boolean geometry: no spacecraft/fan-art contours copied. Attribution/license text is retained in `REFERENCE-LICENSE.txt`.

**Difference from previous apps:** this is one real observation grid and two orthogonal support feet, not Tunnel & Sight's layered aperture sculpture, Quarter & Cipher's rotating grille, a pencil guide or a keycap reskin. It has no moving joint or simulated optical image. Changing rows/columns changes the physical view openings and grid ribs.

The read-only **Keycap Studio** visual/interaction reference was inspected in README, styles, App, Viewer, worker, imageTrace, STL and export modules. Concrete patterns applied: 374 px scrollable LEFT control panel, sticky compact branding/theme, collapsible sections, paired sliders/numeric fields, raised tactile buttons with pink selection/focus, lavender-grey desk, white panels, rounded bundled Fredoka/Rubik fonts, checkerboard cutout preview, large RIGHT Three.js viewer, current-result export gating, and preview-first stacked phone layout. Its source trees/deploy scripts/history/dependency tree were not changed or copied wholesale. Shared local studio infrastructure was adapted from earlier daily-app2 work; mechanism/modeling and assembly validation are new.

## Parameters / presets

All physical dimensions are **millimeters**. Card width150–210, height130–180, outer window width70–96, clear aperture height36–52, sheet1.6–2.4, spacing3–5, runner width.8–1.4, runner height.4–.6. Grid has3–6 integer rows/columns with1.2–2 mm ribs. Aperture width = outer width−12. Bottom rail18 mm, top rail6 mm; assembled height = clear aperture height+24+sheet. Two feet24×32. Socket length4.50, total clearance.10–.30 (not per side). Square,5 mm round and clipped corners are real geometry, including feet. Three real model-thumbnail presets; bounded variation; reset, undo/redo; named local designs and portable JSON.

Impossible/out-of-range values block export. Kernel operations check one solid per part and one connected card; independent final triangle checks run for every build. Tabs attach to outside side rails/feet, away from optical ribs and bottom tongues. Exact assembled/exploded, connected-card, clean plate and isolated-part views use the same solids. Exploded position is explanatory; export is always bed-flat geometry, not assembled interpenetrating shells.

## Local image workflow

Picker and drag/drop accept actual PNG/JPEG and a restricted simple SVG subset. File16 bytes–2 MB, images≤12 MP and≤6,000 px per side, normalized to≤500 px. Header validation precedes bitmap decode. SVG≤2,000 simple elements; scripts, text, external resources, references, filters and embedded files are rejected; rasterization is local. Samples: `mark.png`, `waves.jpg`, `ring.svg`.

Conversion samples a **20×20 grayscale grid**, then constructs a closed triangulated height-field cutter. Threshold or grayscale relief, light/dark background, fit/cover crop, X/Y crop, physical scale4–7, rotation±180°, X offset±1.5, Y offset±2 and depth.4–.6 all affect actual Boolean subtraction in the lower rail at (0,9). The source and exact sampled cutout appear side by side on checkerboard. White/transparent holes preserve backing; interpolation slopes the sampled boundaries, so this is not exact vector tracing. Text (up to8 chars) and six searchable bundled icons take the same raster-to-solid route. Radius6.5 keep-in protects all tongues/grid cells. Floor≥1 mm. Raised marks are explicitly unsupported to retain a bed-flat constant sheet envelope. This is **2D-to-relief, not full3D reconstruction from a photo**. Replace/remove/reset are supported.

## Local STL workflow

ASCII and binary `.stl`:≤2 MB,≤1,500 triangles, each extent.2–250 mm, finite coordinates. Edge welding1e−5 mm, closed two-face/opposite-direction incidence, consistent winding, positive volume, single component, nondegenerate faces and triangle intersection checks run before integration. **Supported contract: convex, broad-flat-bottom, no-overhang solids only.** Concave, hollow, open, self-intersecting, disconnected/nonmanifold or unsupported overhang meshes are rejected actionably, never replaced by a hull or claimed repaired. A bottom-footprint hull is used ONLY as a support-validation test; it never replaces input geometry.

Choose Z/Y/−Z up before attaching; source3D preview, dimensions, format and triangle count are shown. Explicitly confirm millimeter units. XY scales proportionally to4–7 mm footprint; Z independently fits.4–.6 mm engraving depth; scale factors are visible. Rotation/offsets and transform reset alter the exact original mesh cutter. Source geometry is Boolean-subtracted into the rail, not displayed/re-exported unchanged. Sample ASCII wedge and binary gem are synthetic. Up-axis change requests reattachment rather than pretending the old file was reoriented.

## State, responsiveness, export and privacy

Heavy CSG and mesh parsing run in a Web Worker with bundled WASM.100 ms debounce, bounded input/resolution, request IDs/current-state keys, clear building/success/error status, and export disabling for conversion/build/validation/import errors prevent stale last-good export. The visible preview can retain its last-good result with explicit warning. Preview and STL use the exact shared checked mesh; a UI geometry signature is compared with downloaded bytes in tests.

Per-part binary STL, true connected-card STL, clean de-tabbed print plate and Everything ZIP with all four STLs plus numbered assembly instructions. STL contains **no preview colours**; no pretend3MF. JSON/named designs include bounded image/mesh payloads, up to6 named designs. Missing image payload produces an explicit reattachment error. Inputs are processed in browser memory/localStorage only; personal files never uploaded or committed. Saved theme is local. Accessible44 px targets, focus outlines, reduced-motion support, touch orbit/pinch/zoom and no horizontal phone rail.

## Print / assembly / calibration

See `ASSEMBLY.txt` or app instructions.100% scale; PLA/PETG,.16–.20 layers,3 perimeters; all parts and tabs rest atZ0; no supports intended. Snip all12 runners1.6 mm away from part, trim nubs without touching tongues or grid ribs. Dry-fit clean parts first; adjust total allowance for printer/material and elephant foot. Both joints require compatible adhesive; they are not friction-retention or snap fits. Align both feet, lower frame vertically until shoulders stop on foot tops, check square, bond and cure. External paper, pencil and adhesive required; no fasteners, bearings or magnets.

Nominal symmetric balance is geometrically within foot envelope, but this is not a tipping/load calculation or test. Keep on a stable level surface and keep one eye/head position fixed. Match paper grid count and aperture aspect. Do not sight the sun. No physical print, fit, strength, tipping, optical or drawing-use test has been performed.

## Validation

`npm test`: independent exported float32 STL parsing, length/count, finite coordinates, nondegenerate triangles, unit normals/winding, welded edge incidence1e−5 mm, positive volume per connected component, dimensions; defaults/all presets/three silhouettes/all parameter endpoints/combined extremes; image and STL outputs. Manifold independently checks assembled collisions, downward insertion path, two socket/shoulder stops, every grid opening, rib presence, bed support, carrier envelope, print-part separation and four components after12 snips. Bright-hole probes validate actual image-derived cuts/backing. Browser scripts exercise production-prefixed WASM/worker assets, actual picker imports/downloads, invalid files, transforms, controls, JSON/named saves, undo/redo, ZIP/per-part outputs and mobile gestures/layout. Reports beside the app record performed checks, separately from physical testing. `node serve.mjs` serves production at the configured base (PORT override supported); Playwright scripts accept TEST_BASE.

Dependencies: React, Vite/plugin-react, Three.js, manifold-3d(Apache2), fflate(MIT), gh-pages, locally bundled Fontsource Fredoka/Rubik(OFL), Playwright for tests. Synthetic samples only. Browser infrastructure is reused and revalidated; original perspective-window geometry/assembly tests are mechanism-specific.
