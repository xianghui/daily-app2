# Slit & Flicker

A browser-based **five-part phenakistoscope kit-card generator**. Snip twenty real breakaway runners, stand the tower, insert a fixed flat axle, load a radial-slit wheel and bond a keeper. Turn slowly while looking through the upper slits at its reflection in a flat mirror. Engraved dots sample a sinusoidal inward/outward sequence. Mirror and three fixed-joint adhesive applications are required; optional washable marker supplies contrast. No motor, magnets, fasteners, service or API key.

## Reference-first evidence and attribution

Searched local STL files under `/Volumes/ExternalHD/3d_printing_apps/` first; read keycap and fabric project instructions and parsed actual candidates. The keycap switch template and 8 mm interlocking fabric link do not provide an appropriate flat sheet/socket/carrier grammar; hashes, measured dimensions, component counts and rejection reasons are in `reference-measurements.json`. They were not imposed on this unrelated mechanism.

Selected **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**, full license in `reference-LICENSE.txt`. Downloaded the actual binary STL and read source README before final geometry selection. SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**. Parsed 30,616 triangles, 179.820 × 178.020 × 3.190 mm (millimeters assumed; STL is unitless), 27 edge-adjacent components including defective fragments. Source is **not watertight**. No source repair, unchanged re-export or raw mesh redistribution is claimed.

`reference-inspect.py` measures the mesh and produces `reference-measurements.json` and `evidence/reference-sections.png` with actual sections at Z=.10/.50/1.59 mm. Measured source sheet planes Z=0/1.6 mm and four 4.5 × 1.700012 mm rectangular socket loops. Source low feature planes .21/.22 mm were observed but are not asserted to be universally printable runners. Our **4.4 mm tongue** and **(4.4+total allowance) × (sheet+total allowance) socket** reproduce those source slot dimensions at 1.6/.10 mm. Proposed default allowance is .15 mm, and runners are redesigned .4–.6 mm thick, .8–1.4 mm wide. Source pierced sheets, sockets, low carriers and part separation inform the kit's real assembly, not merely its appearance. The optical wheel, sinusoidal engraved sequence, plain bearing, axle shoulder, bonded keeper and five-part layout are original reconstructions. No aircraft geometry is reused. `reference-analysis.json` distinguishes measurements from proposed fits.

Read-only visual/interaction reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles.css, App.tsx, Viewer.tsx, worker.ts, geometry/stl.ts, imageTrace.ts, export.ts. Concrete adopted studio patterns: 374 px left control rail, white/lavender desk, coral short-shadow tactile controls, paired numeric/range fields, labelled collapsible sections, persistent dark theme, checkerboard source cutout, source mesh transformations, current-result worker gating and phone preview-first stack. Shared local studio infrastructure was reused, not the old mechanism, source Git history or dependency tree. All optical-wheel geometry and mechanism checks are new. Reference projects and the older daily_app tree were not modified.

## Run and checks

```sh
npm install
npm run dev
npm test
node extreme-check.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs # production /daily-app2/20261030-6/, port 5465
node browser-test.cjs
node studio-test.cjs
node motion-check.cjs
# After root npm run predeploy:
node serve-combined.cjs # root combined output, port 5466
node gallery-browser-test.cjs
TEST_BASE=http://127.0.0.1:5466 TEST_REPORT=combined-browser-validation.json node browser-test.cjs
```

Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; gh-pages installed. Public monorepo publication uses **root** `npm run predeploy` then `npm run deploy`, with each app under root `deploy/`. Vite base `/daily-app2/20261030-6/`.

## Parameters and deliberate fit design

All linear dimensions **mm**, angles degrees. Card X/Y 220–280 / 140–180; tower height 80–105; wheel diameter 64–88; frame count integer 8–16; viewing slit width .8–1.6, length 6, outer rim 3; engraved dot radial excursion 2–5 and depth .35; sheet thickness 1.6–2.4; total socket allowance .10–.35; total wheel-bore clearance .20–.50; axial gap **per face** .25–.60; spacing 3.5–5; runner width .8–1.4 and thickness .4–.6; shallow tower grip grooves .2–.5. Foot silhouettes: superellipse, chamfer, ellipse. Three true presets change geometry, not just colour.

Tower tongue width 4.4 and length equals sheet thickness. Shoulders bear on the 40 × 44 foot. Tower axis is 16 mm below tower top. Flat axle blade cross-section 4.4 × sheet; wheel bore diameter `hypot(4.4,sheet)+bearing clearance`, using a 64-sided bore and 128-sided outer circle. The .20 mm minimum total clearance exceeds the bore polygon's small chord deficit; sampled real CSG checks validate full rotation. Axle rear shoulder is 12 × 5, bonded to rear tower. Keeper radius 6, rectangular shaft slot (4.4+allowance) × (sheet+allowance), **bonded to shaft only**. Keeper radial overlap exceeds 3 mm at allowed extremes. Wheel is not bonded. Tower/foot and axle shoulder also need adhesive; this is not a claimed snap-fit or friction-retained mechanism.

Wheel sits forward of tower and behind keeper, with explicit per-face axial gaps. Upper slits extend above tower for viewing. Wheel-to-foot gap stays ≥20 mm throughout supported combinations (validation requires ≥18). Art zone centre (0,12), radius 6.5, lies below the swept wheel envelope. Tower backing is ≥.8 even under maximum engraving. Slit/dot geometry stays clear of bore and outer rim. Dots lie halfway between slits at radii `.47*R + excursion*sin(2*pi*i/N)`. Contrasting marker is useful because single-colour STL cannot encode ink or preview colours.

Print all parts bed-flat Z=0 in PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Card may exceed some beds; export clean individual parts. Snip four runners per part 1.6 mm outside its edges; axle runners land on outer shoulder wings, away from blade. Trim nubs before assembly. Print tower, axle and keeper first to calibrate the actual fit; material, slicer and printer change tolerances. No universal fit claim.

### Assembly sequence

1. Seat tower tongue downward into foot. Its two shoulders stop on the foot top; bond and cure this fixed joint.
2. Slide axle from rear through tower bore; bond rear shoulder only, centered at bearing height.
3. Slide wheel from front over shaft, engraved dots toward mirror. Use removable paper spacer equal to chosen axial gap between wheel and tower.
4. Slide keeper from front. Leave same axial gap ahead of wheel and bond keeper only to shaft; keep glue out of wheel bore. Cure, remove spacers and test slow free rotation. Do not invert before the adhesive cures. Horizontal unbonded lift-out testing is the no-adhesive alternative, not retained upright use.
5. Face dot side toward a flat mirror; look from behind through upper slits at reflected dots, rotate slowly by edge and adjust lighting/distance. Optional marker fills real .35 mm engravings. No sun viewing, powered spinning or load-bearing use. Adult craft with small parts and sharp cutters.

## Local image-to-geometry

File picker and drag/drop accept actual PNG/JPEG, plus constrained simple SVG. Input limit **2 MB**; raster ≤12 megapixels, ≤6,000 px side; decoded source normalizes to ≤500 px. SVG ≤2,000 simple path/shape elements, dimensions ≤6,000 px; rejects scripts, external links, embedded images, references and effects. SVG rasterizes locally to 256 px.

Conversion composites over selected light/dark background, fits or crops with ±25% shifts, samples a **20 × 20 luminance grid**, thresholds 1–254 or converts grayscale into relief heights, and triangulates a closed backed heightfield. The CSG kernel unions or subtracts it into the tower landing. This is **2D-to-relief**, not automatic full 3D reconstruction and not exact vector tracing. Bright holes remain unraised/unengraved above continuous backing; final Boolean probes verify that. Checkerboard shows the actual conversion cutout; source image remains visible separately. Physical footprint 4–7, raised depth .4–3, engraved .4–.6; local rotation ±180°, X ±1.5, Y ±2. Unsafe placements and empty images block export. Text (up to 8 characters) and six searchable bundled SVG icons use the same actual geometry workflow.

## Local STL integration

Accept both binary and ASCII `.stl`, **≤1,500 triangles**, ≤2 MB, .2–250 mm extent per axis, finite bounded coordinates. Parse and weld at 1e-5 mm; require one connected closed, positive-volume, consistently outward-wound component, two opposite incident faces per edge, no degenerate faces or detected self-intersections. Deliberately supported contract: **convex, broad flat-bottom solid without overhang footprint**. Concave, hollow, branched, multi-part, open and nonmanifold meshes are rejected with guidance, not silently repaired or replaced with a hull. A 2D hull is used solely to validate the contact footprint, never as replacement export geometry.

Select Z/Y/−Z up before attachment. Source preview reports oriented dimensions/triangle count. Explicitly confirm source millimeters because STL has no unit metadata. XY scales proportionally to 4–7 mm footprint; Z independently fits .6–3 mm grip height; rotation ±180°, placement X ±1.5/Y ±2. The **original parsed triangles** become a Manifold solid, overlap the protected well by .15 mm, and are unioned into the tower. Source transforms visibly change the exported geometry. Replace/remove/reset and return-to-default work. Changing up axis clears source and requests reattachment.

Every uploaded file stays local. No external APIs, uploads, personal source assets in repository or CDN dependencies. JSON includes bounded normalized image/mesh payloads. Missing image payload explicitly requests reattachment; it is never represented as restored. Named local designs retain six entries; history is bounded to 35 snapshots. Synthetic PNG/JPEG/SVG, ASCII wedge and binary gem samples are freely reusable; attribution in public/samples.

## Preview, generation and export

React + Vite; local Three.js orbit/touch preview; heavy CSG and STL checks run in a **Manifold WASM Web Worker**. 100 ms debounce, generation IDs and exact parameter/source/transform key prevent stale export. Failed edits may leave a clearly labelled last-good preview but **disable downloads**. Worker startup failure reports an actionable error. Fonts Fredoka/Rubik bundled locally (Fontsource, SIL OFL); fflate exports ZIP; gh-pages deploys static output. Manifold Apache-2.0; Three MIT; fflate MIT; React MIT.

Connected card, de-tabbed print plate, assembled, exploded and individual-part views all derive from the same validated solid meshes. Assembly rotation is explanatory only, not optical rendering, dynamic force simulation or physical testing. Binary STL per part and **Everything ZIP** contain actual flat printable geometry plus numbered assembly instructions and current fits. The ZIP includes both card and clean alternatives: choose which to print, not both. STL has geometry, not colour. No 3MF claim.

## Validation and limitations

`validate.mjs` independently parses serialized float32 binary STL: correct byte count, finite vertices, nondegenerate triangles, consistent unit normals/winding, welded edge incidence exactly two, positive volume per component, dimensional bounds. Runs every part and connected carrier for presets, shapes, min/max and imported geometry. `extreme-check.mjs` additionally combines image/STL with thin/tall, low/wide and largest-clearance cases. `hole-check.mjs` uses actual CSG probes for raised/engraved holes.

Mechanism checks are separate: full 360° rotation samples, all part intersections, tower top-down insertion, rear axle insertion, front wheel/keeper loading, shoulder bearing, front/rear wheel stops, real slit/dot cuts, disjoint bed-flat parts, every tab snip avoiding functional parts, exactly six components after twenty snips (five parts plus carrier), and declared card envelope. Analytical corner-envelope and axial separation support the sampled checks; adhesion strength, bearing friction, stability and optics require empirical tests.

Browser scripts use actual file-picker imports and downloads, compare geometry fingerprints against exact preview and JSON regeneration, run the same mechanical checks on downloaded cases, reject malformed/excessive files, verify PNG/JPEG/ASCII/binary changes, transforms, reset, presets, icons/text/SVG, JSON/local saves, undo/redo, ZIP contents, all views, current-state gating, worker failure recovery, 320/390 px layout, touch orbit/pinch, theme, focus and local-only requests. Production base-path and combined root tests catch worker/WASM paths. Reports and screenshots are beside the app.

**No physical print, optical effect, adhesive strength, wear, fatigue or stability test was performed.** Computational geometry validation does not prove real-world printability or a convincing stroboscopic effect. This is an experimental slow-turn desk craft, not a calibrated instrument or child-safe toy.
