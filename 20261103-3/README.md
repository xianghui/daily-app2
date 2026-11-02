# Jump & Vacancy — peg-solitaire kit-card studio

A React + Vite, entirely local browser studio generating a **physical 33-position English-cross peg-solitaire kit**: one board and 32 removable shouldered pegs. It is **not a browser game**. A true connected card holds all 33 parts with 132 removable runners. De-tabbed parts, assembled, exploded and isolated views share the same Manifold geometry. No hardware or glue is required. Keep the assembled board level; pegs are not captive. Small parts are unsuitable for young children.

## Reference-first evidence and originality

Inspected the read-only local `keycap_generator2` README, styles, editor, viewer, worker, export, image tracing and STL parser. Its concrete patterns are retained: 374 px left rail, labeled collapsible controls, paired numeric/sliders, tactile selected buttons, bundled rounded fonts, saved light/dark theme, large right viewer, checkerboard import comparison, current-result worker/export gating and preview-first phone stacking. No reference project, history, dependencies or deploy scripts were copied wholesale.

Local clicker-template and fabric-link STLs were parsed and rejected as unsuitable sheet-kit references; measurements/hashes are in `reference-analysis.json`. The selected structural reference is **Mike Kasberg's White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source README and full license are preserved in `evidence/`. Actual binary STL was parsed again during this run with `reference-measure.py`; three measured cross-sections were generated and visually inspected.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- 30,616 source triangles; bounds approximately 179.82 × 178.02 × 3.19 mm. STL has no units; mm is an assumption corroborated by the sheet design.
- Measured sheet planes 0 and 1.60 mm; repeated 4.50 × 1.700012 mm slot loops; low runner planes 0.21–0.22 mm.
- 27 edge-adjacent components, including two substantial components and 25 surface/degenerate fragments. The source as a whole is not watertight. No repair of the source is claimed or used.
- Actual source dimensions map to default sheet 1.60 mm, socket 4.50 × 1.70 mm, proposed tongue 4.40 × 1.60 mm. Proposed total clearance is 0.10–0.30 mm, printer/material dependent.
- This is an **original parametric CSG reconstruction**, not an unchanged re-export: 33 real sockets arranged in an English cross, 32 shouldered grip pegs, signature apron and 33-bay carrier. The reference's spacecraft appearance and parts are not reproduced. Runners are intentionally strengthened to 0.4–0.6 mm. Raw reference meshes are **not redistributed**.

## Parameters and fits

All physical dimensions are **millimeters**, except artwork rotation in degrees and image controls explicitly labeled percent/brightness.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 140–190 / 230–260 |
| Peg center pitch | 12–16 |
| Grip height | 8–12 |
| Board apron span | 30–38 |
| Sheet | 1.6–2.4 |
| Socket length | 4.5–5.5 |
| Total running gap | 0.10–0.30 |
| Part-to-bay spacing | 3–5 |
| Runner width / height | 0.8–1.2 / 0.4–0.6 |

Board size is `(6 × pitch + 20) × (6 × pitch + apron span)`. The socket grid is vertically offset to leave a separate signature apron. Each peg is 8 mm wide; its tongue width is socket length minus total gap, tongue thickness and insertion depth equal sheet thickness. A broad shoulder seats at the board top and the tongue ends flush underneath. Nominal transverse finger separation is 4–8 mm. Combinations that do not fit card bays are blocked with a resize/reduce message. Peg-runner positions are inset from tongue shoulders to avoid coincidence at parameter extremes. No convex hull or mesh cleanup is used to conceal invalid generated output.

Print a board and one peg first as a fit coupon. Default clearance is a starting point, not a universal guarantee. This is a tabletop puzzle, not load-bearing equipment. The studio has three real mesh thumbnails/presets, three board silhouettes, bounded variation, undo/redo, six local named designs and portable JSON save/open.

## Image → actual printable engraving

File picker works on desktop/phone; desktop supports single-file drop. PNG/JPEG and restricted simple SVG are supported. Content and dimensions are checked **before** full raster decode. File maximum 2 MB, raster maximum 12 MP and 6,000 px on either side. SVG supports simple paths/shapes only, <=2,000 elements; scripts, references, embedded images, filters and external resources are rejected. SVG is rasterized locally, not sent away.

Images normalize to <=500 px and are sampled at **20 × 20** after contain/cover fitting, crop shifts ±25%, and light/transparent background removal or dark-background inversion. Threshold mode samples foreground below brightness 1–254; grayscale mode derives height from inverse luminance. A closed triangulated height-field cutter is **Boolean-subtracted** from the solid apron, not shown as a texture. Depth 0.4–0.6 mm leaves >=1 mm backing. Bright holes remain uncut solid inside the engraving. The source and exact cutout/conversion grid are both shown; checkerboard means removed background. This is bounded sampled **2D-to-relief**, not exact vector tracing or full 3D reconstruction from a photograph. Empty silhouettes block export.

Text up to eight characters and six searchable bundled synthetic SVG marks use the same real engraving path. Artwork may scale 4–7 mm, rotate ±180°, move X ±1.5/Y ±2 mm within a checked 6.5 mm-radius keep-in zone. Raised marks are deliberately unsupported so sheets stay flat and backing remains predictable.

## STL → exact solid integration

Both **ASCII and binary STL** are content-parsed. Maximum 2 MB / 1,500 triangles, one closed connected outward-wound solid, each oriented dimension 0.2–250 mm. Checks include finite coordinates, nondegenerate triangles, 1e-5 mm welded edge incidence/opposite winding, connectedness, positive volume, triangle intersections, convexity and broad bottom footprint. Concave, hollow, disconnected, open, nonmanifold, self-intersecting and overhanging inputs are rejected with actionable errors; **no automatic repair** or convex-hull substitution is offered.

Select Z/Y/negative-Z up before attaching; changing up-axis explicitly clears the source and asks for reattachment. Review source dimensions/preview and explicitly confirm millimeter coordinates because STL carries no unit metadata. XY scales proportionally to requested footprint; Z scales independently to engraving depth. Rotation, placement and reset apply to the **actual imported mesh**, which is Boolean-subtracted from the apron as a custom recessed grip/mark. Final geometry and signature change measurably with source content and transformations. The protected zone cannot reach sockets or remove the continuous backing. Files may be replaced/removed and defaults restored.

## Privacy, worker and persistence

No API keys, server, cloud service, analytics, upload or runtime CDN. Generation, parsing, rendering, fonts and ZIP/STL export are bundled locally. Heavy Manifold/mesh work runs in a Web Worker with a 100 ms debounce, bounded input complexity, generation IDs and current-state export gating. Invalid edits may leave a visibly labeled last-valid preview, but all exports are disabled until a valid exact-current result is ready; worker failure blocks export. Preview and download share a geometry fingerprint checked against independently regenerated portable JSON.

Named designs use localStorage; JSON includes bounded downsampled image or validated mesh payloads, not file paths. Missing image payloads explicitly require reattachment. STL payloads are revalidated on restore. Up to six named designs and 35 undo states are retained. No personal input files are committed; sample fixtures are synthetic local examples. Preview colors are never claimed to be stored in STL.

## Exports and physical use

Download a connected-card binary STL, a loose print plate, the board or any of 32 individually named peg STLs. Prominent one-click board/first-peg/card buttons supplement the complete part selector. Everything ZIP includes 34 STLs (card + 33 parts), portable design JSON and numbered `ASSEMBLY.txt` with current fits. No fake 3MF export is offered. Final X/Y/Z export dimensions are displayed in mm.

1. Print bed-flat, 100% mm, PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls. No supports intended.
2. Snip all 132 runners 1.8 mm outside each part; file stubs fully flush, especially around tongues. Clean-part files avoid runner scars.
3. Place board on a level table; seat 32 pegs, leaving the center vacant. Shoulders rest on the top; tongues end flush underneath. No adhesive/hardware.
4. Jump horizontally or vertically over one adjacent peg into an empty socket and remove the jumped peg. Aim for one survivor. A verified 31-jump solution is in validation evidence; no browser gameplay exists.
5. Lift pegs out to reset. Keep horizontal; pegs are intentionally loose. Do not force thin tongues. Adult supervision and appropriate small-part precautions.

Assembled/exploded positions explain seating only; exploded pegs rise 18 mm. Exports are always real bed-flat geometry, never an assembled visual overlap. Read the full numbered guide in the app or ZIP.

## Development and reproducible verification

```sh
npm install
npm test
npm run predeploy
python3 serve.py # production dist under /daily-app2/20261103-3/, localhost:5743
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node stale-test.cjs
node presentation-test.cjs
```

Dependencies: React/ReactDOM, Vite + React plugin, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright for browser verification. Library/font licenses remain with their authors. Source-kit attribution CC BY 4.0 above; no third-party raw mesh is shipped.

`validate.mjs` independently reads actual binary STL bytes: exact triangle byte length, finite vertices/normals, nonzero area, bounds, outward stored normals, positive volume **per component**, 1e-5 mm welded two-face/opposite-direction edge incidence and component count. It checks 39 variants including three presets, all silhouettes, combined extrema, per-control extrema and image/STL-derived outputs. Separate tests intersect solids at 8 vertical insertion offsets for all 32 pegs, check neighboring/flat parts, shoulder seating, underside flushness, support-free slices and backing, simulate 132 tab cuts, verify the card envelope and expect one carrier + 33 undamaged parts after cuts. The 31-jump logical solution is independently replayed; it proves board topology, not ergonomics.

Production browser tests choose actual PNG/JPEG/ASCII/binary STL files, download and parse STLs, compare mesh fingerprints to preview and Node-regenerated JSON, vary images/threshold/depth/scale/crop and STL transforms, reset/replace/remove, reject malformed/excessive/open/nonmanifold/concave files and empty images, round-trip local/portable designs, parse every ZIP part, test worker failure/stale guards, all views/themes/focus and 320/390 px phone layouts with real touch orbit/pinch. Reports and screenshots are checked into this folder. `VALIDATION.md` summarizes actual completed runs. **No physical printing, physical fit, fatigue, safety certification or play test has been performed.**
