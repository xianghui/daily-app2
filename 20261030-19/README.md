# Score & Square — miniature scoring-guide kit-card studio

An original **three-part physical kit-card generator**: snip twelve runners, stand two paired guide walls in four deck sockets, and bond the fixed joints. Corresponding open-top wall channels align a square plane and two opposing mitre planes for gentle hand-scoring alignment. This is not a browser game, a full-depth saw box, a cutting mat, or a precision instrument.

## Reference first

Local reference projects were inspected read-only before design: `keycap_generator2` README, styles, App, Viewer, worker, image conversion, STL parser and export modules; `fidget_fabric_generator` README and actual diamond-link mesh. The actual local switch template and link STL were parsed and hashed; their switch cavities and thick interlocking structure are inappropriate for sheet-card joints. Full candidate measurements are in [reference-measurements.json](reference-measurements.json).

The selected public geometry reference is **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README and license are retained. Download URL and SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff` are recorded. The downloaded binary STL was independently parsed: 30,616 triangles, bounds 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components, not wholly watertight. Cross-sections at Z=.1/.5/1.59 mm expose 1.6 mm sheet parts and four **4.5 × 1.700012 mm sockets**. Low carrier planes occur at .21/.22 mm. See `evidence/reference-sections.png` and [reference-analysis.json](reference-analysis.json).

**Adaptation, not unchanged re-export:** new deck and paired scoring walls replace the source ship. The two walls and four tongues preserve the measured **1.6 mm sheet**. A 4.4 mm tongue plus .10 mm TOTAL allowance reproduces the measured 4.5 × 1.7 socket; default .15 mm is a proposed calibration starting point. Deck thickness increases to 2–2.8 mm; accessible .4–.6 mm runners deliberately replace thin source carriers. All solids are original Manifold CSG, not convex hulls or arbitrary source-shell unions. Raw third-party/private STL is not bundled. Source defects were not repaired or hidden.

## Studio and views

React/Vite; 374 px left controls and right gradient preview on desktop; preview/export first and stacked controls on phones. Lavender desk, white panels, coral tactile buttons, bundled Fredoka/Rubik fonts, saved light/dark theme, visible focus and reduced-motion CSS. Three real worker-generated preset thumbnails, three deck corner treatments, numeric/slider pairs, collapsible sections, bounded variation, undo/redo, six local named designs, portable JSON save/open, touch orbit/pinch, fit/zoom. View connected card, de-tabbed print layout, assembled, exploded or isolated parts; optional see-through walls. No fake motion control: this assembly is stationary. Print orientation is always bed-flat, irrespective of view.

## Parameters and fit

All lengths in **millimeters**, angles explicitly degrees. Supported ranges are exported as `fields` in `src/geometry.js` and checked before every build:

- Card 190–230 × 120–145; deck thickness 2–2.8; part spacing 3.5–5.
- Clear work channel between inner wall faces 24–32; guide length 70–86; wall height 18–26.
- Minimum blade envelope .8–1.6; mitre angle from square 25–45°. Three planes: square, +angle and −angle.
- Rectangular diagonal mouths are widened to `envelope / cos(angle) + 1.6 * tan(angle)` to include wall-thickness skew. They have constant XY cross-section through sheet thickness: **no unsupported undercuts**, but extra lateral play is intentional. Not an accuracy claim.
- Tongue width 4.4–6, wall/tongue thickness fixed1.6, socket TOTAL allowance .10–.35, accessible runners .8–1.4 wide and .4–.6 thick.
- Channels stop **6 mm above deck**. A sacrificial spacer at least6 mm high and suitable narrow stock are required. This is an alignment aid, not full-depth cutting equipment. A blunt scoring stylus is the preferred trial tool; no powered tools.

Print a clean wall/deck first to calibrate four fixed joints. Fit depends on machine, first-layer expansion, material and slicer. All four tongues need adhesive; no snap/friction-retention claim. Tool, spacer, stock and adhesive are external supplies. Suitable adult handling is required for any sharp craft tool. Keep fingers outside tool planes. Polymer channels can wear. No load, strength or safety certification is implied.

## Local image / SVG → real geometry

PNG/JPEG file picker works on desktop/phone; drop one file where supported. Simple SVG paths/shapes rasterize locally to256px; text/effects/scripts/references/external resources are rejected. Synthetic samples: `mark.png`, `waves.jpg`, `ring.svg`.

Validate content signatures, extension, ≤2 MB, ≤12MP and ≤6000px per side before decoding; normalize to≤500px. Fit/cover, X/Y crop ±25%, light/transparent or dark background, threshold1–254 or grayscale relief, .4–.6mm depth. A **20 × 20 luminance grid** triangulates into a bounded closed height solid, then Boolean-subtracts from the deck. This is 2D-to-relief, **not** reconstructing a whole 3D object from a photo or exact vector outline tracing. The source and checkerboard cutout are shown. Bright holes remain unengraved on continuous solid backing; independent solid probes verify this. Text (up to8 characters) and six searchable bundled original icon paths use this same real mesh workflow.

## Local STL → exact deck engraving

ASCII/binary STL, ≤2MB, ≤1500 triangles, .2–250mm per source axis. The parser validates finite coordinates, dimensions, nondegenerate faces, closed two-incident edges, consistent winding, positive volume, one solid, convexity and broad flat supported contact. **Only closed convex supported sources are accepted**; concave, hollow, disconnected, open/nonmanifold or overhung meshes are rejected with recovery guidance. No silent repair or convex-hull replacement.

Choose Z-up/Y-up/−Z-up before attachment. Source dimensions and format are shown; explicitly confirm millimeters because STL has no unit metadata. XY scales proportionally to a4–7mm footprint, Z independently to .4–.6mm engraving; rotate±180°, X±1.5/Y±2mm placement. Exact imported triangles become a Manifold solid and are **Boolean-subtracted**, not merely displayed or re-exported. The protected badge centered at `(0, -guideLength/2 + 12)` excludes all four joints and keeps≥1.4mm backing. Boundary violations disable export; replace/remove/reset is recoverable. Synthetic original `wedge-ascii.stl` and `gem-binary.stl` are downloadable.

## Portable state, privacy, generation and exports

Files stay in this browser: no APIs, keys, CDN imports, remote generation or uploads. Only bundled public/synthetic fixtures enter the repo. User images and indexed source triangles can be explicitly saved in bounded localStorage/portable JSON; normalized image payload≤250k pixels, JSON≤2MB. Missing image payload requests reattachment rather than pretending restoration. Changing up axis clears the attachment. No personal files are automatically persisted to this repository.

A bundled Web Worker owns locally bundled Manifold WASM. 100ms debounce, request IDs/stale guards and current-state key gate exports. Loading, building, success and error states are real. Invalid edits can retain the labeled last-good preview but **cannot export it**. Preview and export share the same current mesh and signature. Every edit validates closed-manifold edges, winding, finite coordinates, nondegenerate triangles and positive volume. Bounds, supported ranges and protected import limits are enforced.

Prominent binary-STL per-part exports and Everything ZIP: connected card, scoring deck, left guide, right guide, plus numbered assembly/print instructions and actual selected fit data. STL contains no colours; no fake 3MF. Twelve tabs really connect all three parts to the carrier; safe simulated snips release three parts plus carrier. Individual parts contain no runner remnants. Print flat at100%, PLA/PETG, .16–.20mm layers, three perimeters, supports not intended. See `printNotes` in the UI/ZIP for assembly.

## Run and reproduce checks

```sh
npm install
npm run dev
npm test
node import-extremes.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs
# another terminal, against real production base path:
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
node preview-test.cjs
```

`reference-inspect.py` uses trimesh/numpy/matplotlib and a separately downloaded `/tmp/score-square-reference.stl`; it reads reference trees only. Browser tests use Playwright Chromium. Reports and screenshots live beside the app. See `VALIDATION.md` for observed results, not promises. Checks distinguish valid closed meshes and calculated assembly clearance from **physical printing/scoring/adhesion/wear tests, none of which were performed**.

Dependencies: React/React DOM, Vite/plugin-react, Three.js, Manifold3D (Apache2), fflate, gh-pages, Fontsource Fredoka/Rubik (OFL); Playwright dev dependency. Shared studio/import/export test infrastructure is adapted from earlier local apps; all guide geometry, assembly transforms and scoring-plane tests are new. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses the root combined-site deploy flow, not the individual script.
