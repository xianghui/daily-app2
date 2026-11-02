# Maxwell & Unwind

A **seven-part flat-pack kit-card generator** for a twin-cord Maxwell-wheel experiment. Snip 24 real runners, bond a socketed gantry, glue two discs onto a rectangular axle, and suspend the rotor from two equal cords. Wind together, release gently and catch before travel ends. Stored rotation may rewind the cords; **actual descent, rewind, cord tracking and physical printing are untested**. This is neither a guaranteed working return mechanism nor a physics simulation.

Unlike earlier fixed-axle yo-yos, redirect pulleys and coupling fidgets in the gallery, the entire two-disc rotor hangs from two separately anchored cords in an independently assembled gantry. Its original flat-sheet shaft has a deliberately noncircular winding section; the interface and card structure are grounded in an inspected STL, not a primitive presented as source evidence.

## Run and publish

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. `node serve.mjs` serves production output at http://127.0.0.1:5720/daily-app2/20261102-20/. Vite base is `/daily-app2/20261102-20/`; per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Publication uses the ROOT monorepo flow, not the app deploy script.

Local dependencies: React/Vite, Three.js/OrbitControls, Manifold WASM (Apache 2.0), fflate, Fontsource Fredoka/Rubik (OFL); gh-pages for deployment and Playwright for verification. No CDN imports, remote APIs, paid service or API keys. User files are never uploaded. Only original synthetic fixtures are bundled. Portable JSON/local named saves contain bounded input payloads: do not share those designs if your artwork is private.

## Reference-first evidence

Searched local `/Volumes/ExternalHD/3d_printing_apps/` before choosing geometry. Read Keycap Studio and Weave instructions and parsed their actual local STLs. The switch template has 944 triangles, 15.20 × 15.20 × 43.10 mm bounds and three components; the Weave link has 5,940 triangles, 7.981 × 9.241 × 8 mm bounds and one component. Neither provides a suitable flat-sheet carrier interface. Their hashes and rejection reasons are in `reference-analysis.json`.

Downloaded and parsed **Mike Kasberg's White Cat Kit Card / Printables 865769**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [listing](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), licensed **CC BY 4.0**. Full source license and README are retained as text. The raw STL and source spacecraft artwork are **not redistributed**. This is an original parametric reconstruction adapting interfaces and carrier principles, not a source triangle re-export.

- Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Actual bounds **179.819997 × 178.019994 × 3.190000 mm**, 30,616 triangles, 27 edge-adjacent groups (two large groups plus 25 tiny artifacts, not 27 intended kit parts). The source is not globally watertight; no repair is claimed.
- Millimeters are an explicit assumption because STL has no unit metadata, corroborated by sheet/interface sizes.
- Parsed and visually inspected actual cross-sections at Z=.10/.50/1.59 mm: `evidence/reference-sections.png`. Measured sheet planes **0 / 1.60 mm**, four socket loops approximately **4.50 × 1.700012 mm**, low carrier planes **.21–.22 mm**.
- `reference-measure.py /path/to/downloaded.stl` reproduces measurements (Python trimesh/numpy/scipy/networkx/matplotlib). Download URL, hash, components, section dimensions and concrete adaptations are recorded in `reference-analysis.json`.

**Measured → redesigned:** default sheet remains 1.60 mm, four gantry tongues and the axle retain 4.50 mm width. Receiving slots are `(4.50 + clearance) × (sheet + clearance)`, using **.10–.35 mm TOTAL proposed calibration clearance**, not a claim that this fit was measured or printed. Twenty-four new bed-aligned .4–.6 mm runners are deliberately stronger than source low webs. The gantry, twin-disc rotor, cord-eye positions, protected engraving apron and carrier layout are original. Six glued joints are explicit; source fit does not establish physical retention.

Read-only visual reference `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles, App, Viewer, worker, export, imageTrace and geometry/STL modules. Concrete patterns retained: 374 px scrollable left panel, compact sticky theme header, labelled collapsible sections, paired slider/numeric fields, tactile raised/selected keys, lavender desk, white panels, coral accents, saved dark theme, source/checkerboard previews, imported-base editor, worker/current-result gating and phone preview-first stack. Generic studio plumbing is adapted from the earlier local daily studio; source project history/dependencies were not copied wholesale. No switch sockets are imposed on this kit.

## Parameters and limits

All linear dimensions are **mm**, rotation degrees. Three real presets generate actual model thumbnails. Three base outlines: soft corners, square and clipped corners. Undo/redo keeps 35 snapshots, named local designs keep six, JSON save/open includes bounded image and indexed mesh payloads. Missing image payloads explicitly request reattachment and block export.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 230–260 / 300–330 |
| Wheel radius / gantry height | 16–20 / 80–100 |
| Disc center separation / axle length | 22–30 / 60–72 |
| Sheet / total socket clearance | 1.6–2.4 / .10–.35 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / engraving depth | 4–7 / .4–.6 |
| Art rotation / X / Y | ±180° / ±1.5 / ±2 |

Impossible envelopes, nonfinite values, exhausted engraving keep-in zones and unsupported sources block export. The connected card can exceed common beds: print the separate clean parts or de-tabbed layout only if the actual reported dimensions fit your bed. Exports always show current X/Y/Z mm.

## Assembly, calibration and materials

See `ASSEMBLY.txt` and the in-app numbered guide for complete steps. Seven parts: signature base, two pillars, cord lintel, two wheel discs and winding axle. Every part is a closed sheet-thick solid and rests on Z=0 for export. **24 genuine runners connect every part to the frame**. Connected-card STL is one solid; de-tabbed plate is seven separate solids, not an assembled overlap.

1. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls, 100% mm. No supports intended. First print an axle and wheel as a fit trial; clearance is printer/material dependent. The .4–.6 mm runners are sacrificial, not compliant mechanism springs.
2. Clip the 24 runners at least 1.5 mm outside clean boundaries, then file nubs. Tabs do not occupy socket walls, disc holes or cord eyes.
3. Lower both pillars into the base, glue and cure; lower the lintel onto their upper tongues, glue and cure. Four fixed gantry seats.
4. Outside the gantry, feed the axle through both discs. Use a ruler/temporary spacers to center them at the requested separation; glue both interfaces and cure. There are **no axial positioning shoulders**, no unverified press fit. The rectangular hole prevents nominal rotation only after bonding.
5. Supply two equal approximately 180 mm soft nonstretch cords, .3–.6 mm diameter. Tie at axle end eyes (1.4 mm), then corresponding lintel eyes (2.4 mm). Adjust knots/lengths to keep rotor off base and lintel. Wind equal turns in the same sense on the clear outer lands; prevent crossing and catch before the endpoint. No bearings or metal fasteners are required. Cord is essential; no cord-free equivalent of this mechanism is claimed.

All six fixed joints require compatible adhesive. The two external knotted cords retain the rotor; the generator does not export cords or simulate their winding. Static preview lines are estimated unwound paths. The shaft is **4.50 × sheet rectangular**, so effective winding radius pulses. This is an experiment with unverified losses, not a precision constant-radius Maxwell wheel. No physical print, fit, glue-strength, knot-retention, balance, descent, automatic rewind, durability or snipping-force test was performed.

## Personalization and local imports

Text (up to eight characters), six searchable bundled original SVG marks, PNG/JPEG and restricted SVG become **actual Boolean engravings**, not preview textures. Only engraved style is offered to preserve flat sheet/backing. Artwork lies in a 6.5 mm radius keep-in zone on the front apron at Y=-19 mm, outside rotor/gantry interfaces. At least 1 mm continuous backing remains. Preview colours do not imply colour in STL.

### PNG/JPEG/SVG → height field

Content/signature and dimensions are checked before image decoding. File limit 2 MB; PNG/JPEG <=12 MP, <=6,000 px per side. Images are locally normalized to <=500 px for bounded portable saves. SVG accepts bounded simple paths/shapes without scripts, external resources or foreign objects and rasterizes locally to 256 px. Samples include `mark.png`, `waves.jpg` and `ring.svg`.

Fit/contain or fill/crop plus X/Y pan samples the source onto a **20×20 luminance grid**. Alpha composites against white; background controls invert for dark removal. Threshold mode uses a cutoff; relief uses depth proportional to `(1-luminance/255)`. A closed triangulated height field, with piecewise-linear interpolation between samples, is reflected/positioned and **subtracted with Manifold**. Bright holes stay unengraved, retaining backing; tiny holes below grid resolution can disappear. This is sampled **2D-to-relief/silhouette conversion, not full 3D reconstruction or exact vector tracing**. Source and actual sampled checkerboard cutout are shown together. Threshold, relief depth, crop, scale, rotate and position alter final triangles. Empty masks fail recoverably. Replace/remove/reset restores built-in geometry.

### ASCII/binary STL → exact mesh-shaped engraving

Strict browser-worker parser accepts <=2 MB, <=1,500 triangles, one connected closed outward-wound **convex broad-flat-bottom solid**, .2–250 mm per source axis. It checks facet completeness/binary length, finite coordinates, degeneracy, directed welded edge incidence, positive volume, connectivity, triangle intersections, convexity and flat-bed contact. Unsupported concave/hollow/disconnected/overhanging/nonmanifold/open/self-intersecting geometry is rejected with guidance: reorient/rescale/clean in a modeler. **No repair, convex-hull replacement or silent loss of concavities is performed.** The bottom-footprint hull in the parser is only a support test, never replacement/export geometry.

Choose Z, Y or −Z up before attaching; changing it clears the source for explicit reattachment. Show source mesh, dimensions and format. **Confirm source millimeters explicitly**. XY scales proportionally to chosen footprint; Z independently scales to engraving depth. Rotation and X/Y offsets integrate the actual transformed mesh by Boolean subtraction into the protected base apron. Off-zone or too-slender results are blocked. Bundled original `wedge-ascii.stl` and `gem-binary.stl` exercise both parsers. Returned design JSON preserves the bounded indexed source mesh and confirmation, not a broken path.

## Responsive generation, views and export

Heavy CSG and STL parsing run in a Web Worker with locally bundled Manifold WASM. Bounded circular resolution (96), bounded images/mesh, debounce, request IDs and exact current-state keys prevent stale results becoming exportable. Invalid edits can leave a clearly labelled last-good preview, but **downloads remain disabled** until that exact current state succeeds. Worker load failure shows a recoverable reload message. Mesh validation runs on every successful build.

Orbit/zoom/touch, fit/top view, static assembled, exploded, connected-card, de-tabbed plate, isolated clean parts and see-through base all use the same underlying printable solids. Preview-only assembly transforms and estimated straight cord ghosts never enter exported geometry. Per-part **binary STL**, selected STL, real Everything ZIP and JSON work locally; ZIP includes connected-card, all seven clean parts and numbered assembly instructions/current fits. No 3MF or colour-in-STL claim.

## Validation and reproducibility

`npm test` independently parses emitted binary STL, welds vertices at 1e-5 mm, requires finite/nondegenerate faces, unit normals agreeing with winding, exactly two opposite-directed faces per edge, positive enclosed volume for each expected component and expected mm dimensions. Tests include every preset/outline, representative all-minimum/all-maximum settings, PNG-like height geometry and actual ASCII/binary sample triangles. Check every clean part, connected card and float32-translated de-tabbed plate.

Separate CSG tests check pairwise assembly/print separation, both pillar insertion paths, lintel lowering, disc passage over the axle, 72 combined rotor poses (24 angles × 3 heights), minimum floor/winding lands, bed support at sampled heights, exact card envelope, card containment, all 24 accessible snip volumes and eight components after cuts (carrier + seven parts). String paths, friction, forces, glue and dynamics are explicitly outside those computational checks.

Browser scripts serve **production output at the actual base prefix** and exercise real PNG/JPEG/ASCII/binary picker imports, changed pixel/threshold/depth/transform results, byte signatures matching preview and Node builds, remove/reset/replacement, malformed/oversized/empty/unsupported sources, exports and ZIP contents, source up axes, text/all icons/SVG, drag-drop, portable JSON and named designs, undo/redo, worker abort/recovery, immediate stale-export blocking, views, saved themes, reduced motion, keyboard focus and collapsible controls. Phone checks at 320/390 px cover every tab, reachable exports, no overflow, preview-first order and real CDP touch orbit/pinch. Reports/screenshots sit beside the app; `VALIDATION.md` summarizes actual results.
