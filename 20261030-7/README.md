# Fuse & Focus

A React + Vite browser parametric generator for a **four-part, lens-free stereo viewing kit card**. Snip sixteen real breakaway runners, stand two aperture/target panels and an opaque central septum in a slotted deck, and try fusing paired engraved patterns. Eye spacing, viewing distance, aperture size, target count and opposing disparity change real printable geometry. This is not a keycap, fidget reskin or browser game. No lenses, hardware, API or server required. **Adhesive is required at six fixed sockets**; optional washable marker improves engraving contrast. No physical print, stereo effect or vision benefit is claimed.

## Reference-first evidence

Read local reference project instructions and parsed actual local STL candidates first. The keycap switch cavity/stem and interlocking fabric link were unsuitable for a sheet/socket kit; `reference-measurements.json` records their hashes, bounds, triangle counts and rejection reasons. Then downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (`reference-LICENSE.txt`). Raw source mesh is not bundled. Source README was read before final geometry selection.

SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Binary STL, 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, millimeters assumed because STL has no units. 27 edge-adjacent components, including defective fragments; source is **not watertight**, and no source repair is claimed. `reference-inspect.py` independently re-parses the downloaded asset from `/tmp/fuse-focus-reference.stl`, records actual Z-plane populations and rectangular socket loops, and renders sections at Z=.10/.50/1.59 mm in `evidence/reference-sections.png`.

Measured source sheet planes Z=0/1.6 mm and four **4.5 × 1.700012 mm** socket loops directly inform **4.4 mm tongues** and **(4.4+total allowance) × (sheet+total allowance)** mortises: exact 4.5 × 1.7 correspondence at sheet=1.6, allowance=.10. Proposed default allowance=.15 is a redesign, not a source measurement. Observed .21/.22 mm low planes are not assumed universally printable tabs: runners are redesigned .4–.6 mm thick, .8–1.4 wide. Sheet/socket fits, pierced panels and low connected carrier construction are adapted; stereo apertures, target disparity, central septum, six socket positions and two-row carrier are original parametric reconstruction. See `reference-analysis.json` for measured/proposed distinctions.

Read-only studio reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, geometry/stl.ts, imageTrace.ts, export.ts. Concrete patterns adopted: 374 px scrolling left rail, white/lavender desk, coral tactile short-shadow selected buttons, paired mm range/numeric controls, labelled collapsible sections, saved dark theme, checkerboard cutout, source mesh transform editor, exact-current-result worker gating and phone preview-first layout. Existing local studio infrastructure is reused; mechanism geometry and validation are new. Reference project dependencies/history were not copied and its deploy scripts were not run. Reference trees and old daily_app remain read-only.

## Run and reproduce

```sh
npm install
npm test
node extreme-check.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs # production bundle at port 5475 /daily-app2/20261030-7/
node browser-test.cjs
node studio-test.cjs
node motion-check.cjs
# root npm run predeploy, then:
node serve-combined.cjs # combined site at port 5476
node gallery-browser-test.cjs
TEST_BASE=http://127.0.0.1:5476 TEST_REPORT=combined-browser-validation.json node browser-test.cjs
```

Per-app scripts exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. Public site publishing uses the ROOT monorepo flow and its combined deploy/ directory, not per-app gh-pages. Base `/daily-app2/20261030-7/`.

## Parameter and mechanical contract

All linear dimensions **mm**, rotations degrees. Card width 240–280, height 180–220; panel breadth 96–112, panel height 40–50; eye spacing 50–70; aperture diameter .8–2.4; eye/target separation 70–95; integer target-dot count 3–7 per ring; total opposing dot disparity 0–4; sheet 1.6–2.4; total joint allowance .10–.35; part spacing 3.5–5; runners .8–1.4 wide and .4–.6 thick; shallow deck grooves .2–.5 deep. Soft superellipse / chamfer / ellipse deck silhouettes. Three real presets and bounded variations. Unsupported combinations block export.

Deck footprint is breadth × (viewing distance+20). Two 4.4 mm tongues on each panel are at X=±20; panel sockets at Y=±distance/2. Two septum tongues at Y=±distance/4 engage rotated deck slots. All tongue lengths equal sheet thickness; shoulders bear on deck at Z=sheet. Septum length = distance−sheet−2×allowance, giving allowance at both ends. Six joints need adhesive; this is not a snap-fit or friction-retention claim. Sequential top-down insertion of all three vertical parts is checked against every other assembled solid. Feet/stand stability is not physically tested; use on a level surface and do not apply loads.

Eye centres sit 28 mm above the shoulders at X=±eyeSpacing/2. Target rings have outer radius 9 and inner radius 8.2; their cuts and .85-radius dot engravings are .35 deep. Dot centres are ringCentre − sign×disparity/2 + a radius-4 circular sequence. The target's engraved side faces the eye panel. Target backing ≥1.25 mm. A central opaque septum rises 36 mm above the shoulder, separating same-side viewing corridors. Computational ray corridors remain clear of deck/septum. Small apertures improve depth of field but are not lenses or adjustable focus: near focus and fusion vary by viewer and lighting. Calibrate small holes before assembly. Stop on discomfort; never sun-view; no therapeutic or optical-performance claim.

Artwork sits on the horizontal deck at X=−30,Y=0 in a radius-6.5 safe zone; it cannot enter sockets, eye paths or septum. Under maximum engraving, backing remains ≥.8 mm. Image holes retain underlying backing. Imported STL surfaces are real CSG-unioned source triangles, not a hull substitute. Preview and exports share one current valid worker result.

## Numbered printing and assembly

1. Print card or clean individual parts bed-flat Z=0, PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Check your bed: card may be too large. Print deck/septum first to calibrate fits; allowances depend on printer, material and slicer.
2. Snip 16 runners 1.6 mm outside part boundaries, then trim nubs away from functional tongues. All four parts separate from the carrier. Computational snip cuts leave five components including carrier.
3. Lower eye and target panels into front/rear pairs of deck mortises, with target engravings inward. Shoulders rest on deck. Bond four sockets and cure.
4. Lower septum into its central pair; ends clear panels by selected allowance. Bond two sockets. No forced flexing or captive insertion is needed. Unbonded calibration trials are not retained assemblies.
5. Optional dark washable marker fills real target engravings. Try a relaxed viewing distance behind the apertures and briefly try relaxed parallel fusion, one target per eye. Septum separates sight lines. Stop if uncomfortable. No sun viewing, powered mechanism or load-bearing use. Adult craft: small parts/cutters.
6. No physical print, optical effect, strength, wear, stability or medical benefit has been tested. Computational mesh/fit checks do not establish these.

## Local image-to-geometry

File picker and drag/drop accept actual PNG/JPEG, plus constrained simple SVG. Input limit **2 MB**; raster ≤12 megapixels, ≤6,000 px side; decoded source normalizes to ≤500 px. SVG ≤2,000 simple path/shape elements, dimensions ≤6,000 px; rejects scripts, external links, embedded images, references and effects. SVG rasterizes locally to 256 px.

Conversion composites over selected light/dark background, fits or crops with ±25% shifts, samples a **20 × 20 luminance grid**, thresholds 1–254 or converts grayscale into relief heights, and triangulates a closed backed heightfield. The CSG kernel unions or subtracts it into the deck landing. This is **2D-to-relief**, not automatic full 3D reconstruction and not exact vector tracing. Bright holes remain unraised/unengraved above continuous backing; final Boolean probes verify that. Checkerboard shows the actual conversion cutout; source image remains visible separately. Physical footprint 4–7, raised depth .4–3, engraved .4–.6; local rotation ±180°, X ±1.5, Y ±2. Unsafe placements and empty images block export. Text (up to 8 characters) and six searchable bundled SVG icons use the same actual geometry workflow.

## Local STL integration

Accept both binary and ASCII `.stl`, **≤1,500 triangles**, ≤2 MB, .2–250 mm extent per axis, finite bounded coordinates. Parse and weld at 1e-5 mm; require one connected closed, positive-volume, consistently outward-wound component, two opposite incident faces per edge, no degenerate faces or detected self-intersections. Deliberately supported contract: **convex, broad flat-bottom solid without overhang footprint**. Concave, hollow, branched, multi-part, open and nonmanifold meshes are rejected with guidance, not silently repaired or replaced with a hull. A 2D hull is used solely to validate the contact footprint, never as replacement export geometry.

Select Z/Y/−Z up before attachment. Source preview reports oriented dimensions/triangle count. Explicitly confirm source millimeters because STL has no unit metadata. XY scales proportionally to 4–7 mm footprint; Z independently fits .6–3 mm grip height; rotation ±180°, placement X ±1.5/Y ±2. The **original parsed triangles** become a Manifold solid, overlap the protected well by .15 mm, and are unioned into the deck. Source transforms visibly change the exported geometry. Replace/remove/reset and return-to-default work. Changing up axis clears source and requests reattachment.

Every uploaded file stays local. No external APIs, uploads, personal source assets in repository or CDN dependencies. JSON includes bounded normalized image/mesh payloads. Missing image payload explicitly requests reattachment; it is never represented as restored. Named local designs retain six entries; history is bounded to 35 snapshots. Synthetic PNG/JPEG/SVG, ASCII wedge and binary gem samples are freely reusable; attribution in public/samples.

## Preview, generation and export

React + Vite; local Three.js orbit/touch preview; heavy CSG and STL checks run in a **Manifold WASM Web Worker**. 100 ms debounce, generation IDs and exact parameter/source/transform key prevent stale export. Failed edits may leave a clearly labelled last-good preview but **disable downloads**. Worker startup failure reports an actionable error. Fonts Fredoka/Rubik bundled locally (Fontsource, SIL OFL); fflate exports ZIP; gh-pages deploys static output. Manifold Apache-2.0; Three MIT; fflate MIT; React MIT.

Connected card, de-tabbed print plate, assembled, exploded and individual-part views all derive from the same validated solid meshes. Assembly poses are explanatory only, not optical rendering, dynamic force simulation or physical testing. No fake motion control is provided. Binary STL per part and **Everything ZIP** contain actual flat printable geometry plus numbered assembly instructions and current fits. The ZIP includes both card and clean alternatives: choose which to print, not both. STL has geometry, not colour. No 3MF claim.


## Validation evidence

`validation-report.json` independently parses exported binary STL (1e-5 mm welding), checks two opposite faces per edge, finite coordinates, normalized normals, nondegenerate faces, positive component volumes, dimensions and bed Z. Eight built-in cases (presets, extremes, silhouettes) and eight imported image/STL cases also undergo CSG assembly intersection, top-down insertion, shoulder-stop, flat-layout disjointness, sixteen accessible snip cuts and actual eye/target geometry probes. Browser reports record real PNG/JPEG/ASCII/binary file-picker import, current-result mesh hashes compared to downloaded bytes and portable JSON regeneration, transformed geometry, malformed input recovery, touch orbit/pinch, phone 320/390 px, all views, presets, named designs, history, theme, worker failure/recovery and real ZIP contents. Tests are reproducible above; only generated reports establish which ran. No physical testing.
