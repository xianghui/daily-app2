# Axis & Filter

A local React + Vite maker studio for a three-part **crossed-polarizer kit card**: personalized deck, fixed double-tongued window tower and handheld analyzer paddle. Twelve real breakaway runners connect every required printed part to the carrier. Recessed annular shelves hold **two externally supplied linear-polarizing film discs**. Hold the analyzer in front of the fixed window and rotate it by hand to explore transmission-axis alignment.

This is not protective eyewear, a calibrated optical instrument, a captive mechanism or a brightness simulation. Never view the sun, lasers or intense lights. External polarizing film, tape and adhesive are required. No physical printing, assembly or optics test has been performed.

## Run / export

Node 22.12+: `npm ci`, `npm run dev`; `npm run predeploy` builds production. `npm test` validates solids and assembly. Serve production using `node serve.mjs` (port 5596, `/daily-app2/20261031-15/`). Run `node browser-test.cjs`, `node studio-test.cjs`, `node personalization-test.cjs`, `node stale-test.cjs`, `node hole-check.mjs`. Combined-root and live verification scripts are included.

React/Vite, Three.js, manifold-3d (Apache-2.0), fflate and Fontsource Fredoka/Rubik (SIL OFL); gh-pages for deployment, Playwright for validation. All runtime dependencies/WASM/fonts are bundled, with generation in a Worker. No API, CDN, server, paid service or file uploads. Export binary STL for connected card or each of three clean parts; Everything ZIP adds all four STLs and numbered assembly notes. Preview and export share exact current meshes; STL stores no colors or units. Print at 100% millimeter scale.

Assembled, exploded, connected-card, de-tabbed and isolated views share the same solids. An analyzer-angle slider rotates the actual analyzer mesh around the sight line to illustrate freely handheld positions. It changes assembled preview, not print orientation or simulated transmission; angle is not a captive joint setting. Clear apertures are real holes, not textures.

## Reference-first measurements / attribution

Local read-only candidates were parsed first: keycap_generator2 clicker_template2.stl (three switch-related components) and fidget_fabric_generator diamond-link.stl (one interlocking link). Their measured dimensions, hashes and rejection reasons are in reference-measurements.json. Neither supplies a suitable sheet-kit interface.

Then the actual public **White Cat Kit Card by Mike Kasberg** was downloaded and sectioned before the product geometry was selected:

- https://github.com/mkasberg/white-cat-kit-card and https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card
- CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ ; fetched license in REFERENCE-LICENSE.txt.
- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 mm assumed envelope. STL has no unit metadata.
- Source has 27 edge-adjacent components, including nonwatertight fragments. No raw source mesh is bundled, repaired or claimed printable.
- Actual sheet planes 0 and 1.6 mm; four receiving loops 4.5 × 1.700012 mm; low runner planes .21/.22 mm. Sections: evidence/reference-sections.png; parser: reference-inspect.py (trimesh/numpy/matplotlib; pass raw STL path).

The original CSG reconstruction preserves the **sheet-to-socket fit relationship and thin breakaway carrier construction**. Tongues change to 6 mm width, source-like .10 mm total receiving allowance becomes a proposed .15 mm default, and runners increase to .4–.6 mm. Optical tower, annular film seats, paired mounts, round analyzer and film-axis interaction are new, not source-measured. See reference-analysis.json for exact mappings; no source endorsement or physical tests implied.

The read-only visual reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` was inspected: README, styles, App, Viewer, worker, STL, image conversion and export modules. Concrete patterns: 374 px left rail, compact sticky brand, lavender desk, coral tactile controls and soft selected states, paired slider/mm controls, checkerboard conversion, saved dark theme, preview-first phone, local portable saves, worker sequencing and per-part/ZIP exports. Shared studio/import infrastructure is adapted from earlier daily studios; product geometry and fit checks are new. Reference projects were neither edited/deployed nor copied wholesale.

A final gallery-description audit rejected the initially developed scrape interaction because Ridge Whisper already used it. This folder's final product is the distinct optical film-window assembly, not a reskin of that mechanism. Its final geometry, screenshots and validation reports have been regenerated.

## Parameter ranges and explicit fits

All dimensions in mm: card 200–220 × 142–158; deck 82–88 × 32–38; tower rise 48–56; clear aperture 24–30; total film-pocket allowance .20–.50; total mounting allowance .10–.35; deck thickness 3.6–4.2; frame sheet 1.6–2; part spacing 3.5–5; tab width .8–1.4; tab thickness .4–.6; tower width 44–50. Three real presets and square/round/chamfered deck+tower profiles. Mechanically impossible combinations block exports.

Two 6 × sheet tongues lower into mortises enlarged by the total mounting allowance in both directions. Shoulders rest on the deck; tongue tips end flush with underside. Two separated mounts resist rotation, but retention requires cured adhesive, not a snap/friction fit. Calibrate before assembly.

Cut **two film discs of diameter aperture + 4 mm**, .1–.25 mm thick. Pocket diameter is disc diameter + separate total diametric allowance, depth .4 mm. Nominal film support annulus is 2 mm wide around each real aperture; remaining shelf backing ≥1.2 mm. Tape margins to the frame; no printed film retainer is falsely claimed. Fixed tower film and analyzer film axes should be marked before installation. Both printable frame openings remain circular and aligned under hand rotation. The analyzer is freely held in front of the base, not retained on an axle; hand angle does not change exported part geometry.

## Imports / privacy / conversion

File picker works on desktop/phone; drop one source on the import section. PNG/JPEG/simple SVG and binary/ASCII STL are supported. Synthetic samples in `public/samples` are generated fixtures, not personal uploads. No source leaves the browser or is committed to the repository.

PNG/JPEG content/header, extension, dimensions, 2 MB file size, ≤12 MP, ≤6000 px side are checked before decode; normalize to ≤500 px, then sample a bounded **20 × 20** grid with contain/cover, crop shift ±25%, threshold 1–254 or luminance relief, light/dark background and depth .4–.6 mm. Simple sanitized SVG is rasterized at 256 px (≤2000 elements; no scripts/external resources). A closed triangulated heightfield cutter is subtracted from continuous deck backing. White holes remain unengraved; dark regions are cut. Source and exact sampled checkerboard preview are both visible. It is explicitly **2D-to-relief, not full 3D reconstruction** and not exact vector tracing. Fine details below the grid will be lost. Raised/cut-through art is deliberately unsupported on this protected bed-flat design.

STL: 40 bytes–2 MB, ≤1500 triangles, each source axis .2–250 mm. Parse complete ASCII facets or exact binary count, finite dimensions/coordinates, nondegenerate faces, welded two-face edges with opposite directions, connected positive-volume shell, self-intersections, convexity and broad flat bottom with no unsupported overhang. Only that documented subset is accepted. Concavity/open/nonmanifold/multiple shells are explicitly rejected, not silently hulled or repaired. Source dimensions and units confirmation are shown; Z/Y/−Z up-axis must be selected before attaching. Orient/re-export in a modeler if unsupported. Exact imported mesh becomes a Boolean engraving cutter, retaining the mesh shape, with proportional XY footprint 4–7 mm and independent Z depth .4–.6 mm; show the numerical scale factors. Z rotation ±180°, X ±1.5 and Y ±2 mm placements must stay inside a 6.5 mm-radius protected zone. Source and final-model previews, replace, remove, reset transforms and built-in reset are available. Up-axis changes explicitly request reattachment.

## State and validation

Undo/redo, six local named designs, JSON save/open; portable bounded image and indexed-mesh payloads restore assets, not missing file paths. Missing payloads require reattachment. LocalStorage quota errors offer JSON. Export requires matching exact parameter/source/transform key and current request sequence; invalid edits never export stale last-good geometry. Worker loading failures disable exports. Every generated solid receives manifold/winding/degenerate/finite checks, not just sampled tests.

Independent binary-STL checks verify exact byte count, finite/nondegenerate float32 triangles, unit winding-consistent normals, two opposite-directed face incidents per welded edge (1e−5 mm), per-component positive volume and exact millimeter bounds. Kernel checks verify insertion and hand-rotation access, film pocket/support dimensions, clear apertures, safe snips, connected carrier, separate clean parts and support-free print sections. No optical brightness simulation is claimed. See VALIDATION.md and actual JSON reports.

## Print and assembly

PLA/PETG, .16–.20 mm layers, three walls, all parts bed-flat at Z=0. No supports intended. Snip twelve accessible low runners (deck/tower: 1.6 mm outside part, analyzer: 3.5 mm), then trim nubs without damaging pockets/tongues. Print a small tongue/socket and film-seat test first. Bond tower into both deck mortises and cure. Cut/tape two proper linear-polarizer discs; do not use ordinary clear sheet. Hold analyzer in front of tower, look toward diffuse room light or white screen and rotate by hand. No requirement for magnets, bearings or fasteners. Tape and compatible adhesive are required consumables. Never look at sunlight/lasers/intense lamps. Adult maker kit, small parts; not protective eyewear. Exact numbered instructions are in PRINTING.txt and export ZIP.

No physical printing, physical assembly, film-axis calibration, transmission/contrast or strength/fatigue test has been performed. Actual transmission depends on purchased film, alignment and illumination. Computational fit checks are not optical validation.
