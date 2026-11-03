# Leaf & Lace

A browser-local React + Vite **five-panel connected kit-card generator** for a soft-cord-bound tactile flip book. Snip twenty runners, stack two covers and three 1/2/3-groove leaves, then thread three cord loops through aligned holes. Change actual cover shapes, leaf dimensions, hole pitch, spine margin, sheet and carrier construction. Both image and STL imports become real cover engraving, not textures or unchanged file downloads.

**No physical print, threading, page-turn, cord wear or knot-security tests performed.** Closed stack and threading paths are computationally checked. A cord hinge is flexible; no page-turn trajectory or force/friction simulation is claimed. This is an original binding kit, not a reskin of the earlier switch, slider, linkage or Jacob's-ladder mechanisms.

## Run / reproduce

Node22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base `/daily-app2/20261103-22/`. Exact per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publication is through ROOT monorepo deploy, not this app's isolated deploy.

`python3 serve.py` serves actual `dist/` on5822 under its real base. `--staged` serves combined root deploy. Browser checks: `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`. `node hole-check.mjs` consumes the browser-saved ring SVG state. Reports and screenshots record actual executed checks, separately from unperformed physical tests.

## Reference-first evidence and attribution

Local STL collections inspected first, read-only: Keycap Studio's clicker_template2.stl and Weave's diamond-link.stl parsed with hashes, dimensions/components and triangle counts in reference-measurements.json. Their switch cavities/stem and8mm interlocking link are unsuitable sheet-binding references. Project README/instructions were read; neither raw private mesh is redistributed.

Selected suitable public reference: **White Cat Kit Card by Mike Kasberg**, [Printables865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY4.0**. Upstream README and license included. Actual binary STL downloaded and parsed this run: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`,30,616 triangles,179.820×178.020×3.190mm,27 edge-adjacent components, NOT watertight. STL has no unit metadata; mm assumption corroborated by documented sheet scale. Source defects are not silently repaired. No raw source STL/artwork bundled.

The actual section image atZ=.1/.5/1.59mm was inspected BEFORE final geometry selection: evidence/reference-sections.png. Measured sheet planes0/1.60mm and runner tops.21/.22mm inform the default1.6mm sheet plus surrounding frame/crossbars/low removable runner construction. Newly proposed .4–.6mm runner height improves handling but is not a measured source fit. Source4.50×1.700012mm rectangular sockets are recorded but deliberately NOT imposed on a cord-bound book. Three aligned round cord bores and finger grooves are original. Reference-analysis.json maps measurements to exact generator choices; clean Manifold CSG reconstructs the structure without source faces or convex-hull substitution.

Read-only visual/interaction reference: keycap_generator2 README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete patterns:374px left control rail, compact sticky brand/theme header, collapsible sections and range/number pairs; lavender#e7e9f1 desk, white panels, dark#1f2233 ink, coral#e2557a tactile raised controls and pressed selections; large right gradient viewer, explicit build status and export panel; source/cutout checkerboard; saved coherent dark theme, focus targets and reduced motion. Phone layout is preview-first and stacked. Generic studio/import infrastructure adapted from earlier daily_app2 work; mechanism/assembly/validation are specific to this kit. No source Git history or dependencies copied wholesale.

## Parameters and physical dimensions

All dimensions **millimeters**, except artwork rotation in degrees. STL exports at100% mm scale.

| Parameter | Supported range | Real effect |
|---|---|---|
| Card width / height |84–110 /220–280|Carrier envelope, impossible packing rejected|
| Leaf width / height |44–56 /26–36|Each leaf; covers add4mm width and4mm height|
| Hole pitch |7–9|Adjacent binding-hole center spacing|
| Spine margin |4.5–6.5|Bore-center inset from aligned spine edge|
| Sheet |1.6–2.4|All panels and full-height frame|
| Spacing |3–5|Panel-to-bay packing and cutter clearance|
| Tab width / thickness |.8–1.2 /.4–.6|Twenty bed-contact removable runners|
| Cord-hole allowance |.2–.8|Bore=2+allowance; nominal1mm soft cord|

Three real presets with rendered thumbnails: Pocket leaves, Everyday folio, Thumb-notch. Rounded, bevel and concave thumb-notch cover shapes; minimum hole walls≥1.2mm. Leaves have1/2/3 upward-open engraved grooves1.6mm wide×.4mm deep. Covers extend4mm beyond leaf free edge and2mm above/below; their spine edges and all holes align. Parameter extremes may need a longer card: impossible combinations block export rather than silently overlapping parts.

## Local image → geometry

PNG/JPEG headers, content, bytes and decoded dimensions are checked before normalizing to≤500px. Simple SVG is parsed/sanitized and rasterized locally to256px; active/external content rejected. A20×20 luminance grid samples fit/cover and crop shifts±25%. Light/transparent-background removal or dark-background inversion, threshold1–254 or grayscale relief, depth.4–.6mm. A closed triangular heightfield is Boolean-subtracted from the front-cover TOP. Bright holes stay unengraved on continuous solid backing≥1mm. Checkerboard displays the actual sampled cutout; this is sampled **2D-to-relief**, not exact vector-outline tracing or full3D reconstruction from a photo. Text (bundled Rubik,8characters) and six searchable original icons use the same geometry path.

Import footprint4–7mm, Zrotation±180°, XYoffset±1.5/±2mm within radial6.5mm keep-in, centered at X=.62×leafWidth/Y=0. All are real exported engraving transformations. Raised artwork intentionally unsupported to preserve sheet/card Z and continuous backing. Replace/remove, reset transforms and reset image controls are functional. Compare original image, checkerboard cutout and final cover previews.

## Local STL → geometry

Complete ASCII/binary STL parsing with byte/facet limits, finite coordinates, nondegenerate triangles, welded closed two-incidence edges, opposing winding, one positive-volume component, self-intersection, convexity and broad supported bed checks. Integration deliberately accepts **one closed convex solid with a broad flat bottom**. Concave, hollow, disconnected, open, inverted or unsupported-overhang meshes are rejected with actionable guidance; no repair/hull replacement claimed.

Choose Zup/Yup/−Zup before attaching. Show oriented source3D, dimensions and triangle/format details, then explicitly confirm **millimeters** because STL carries no units. XY scales proportionally to4–7mm footprint; independent Z fits.4–.6mm engraving depth. Rotate and place the exact indexed source mesh, then genuine Boolean subtraction from front cover—never an unchanged re-export. Source and final previews distinct. Up-axis change clears source and asks for reattachment. Unsupported input blocks current export and remains replaceable/resettable.

Limits: file16bytes–2MB; STL1–1500triangles, each dimension.2–250mm, finite coordinate magnitude≤10000; PNG/JPEG≤12MP/6000pxside; simple SVG≤2000elements; portableJSON≤2MB, image payload≤1.8MB and250000pixels. User files never leave the browser and are never stored in this repository. Synthetic bundled samples mark.png, waves.jpg, ring.svg, wedge-ascii.stl and gem-binary.stl are original synthetic fixtures with attribution. File picker works on desktop/phone; one-file drag/drop supported.

## Geometry, saves, views and exports

Locally bundled ManifoldWASM WebWorker, Three.js OrbitControls, fflateZIP, React/Vite, Fontsource Fredoka/Rubik(OFL). No remoteCDN/API/key/server for generation/export. Debounced100ms builds, request-id guards and exact state/conversion keys prevent stale export. Worker loading/error shown; current invalid state blocks export even if last-good preview remains visible. Preview and downloaded binarySTL share exact current valid arrays; visible geometry fingerprint and tests compare actual bytes, plus Node regeneration from savedJSON.

Undo/redo, reset, bounded variations, six local named designs, portableJSONsave/open. Bounded image and indexed-mesh payloads included. Missing portable image requests reattachment; malformed saves block export. No pretend file restoration.

Connected-card, closed aligned stack, exploded, de-tabbed plate and every isolated part use the same meshes. Closed stack order from bottom: back-cover, one-/two-/three-groove leaves, front-cover. Proposed.7mm visual gaps are NOT printed spacers; exploded offsets illustrative. Cord not rendered or exported. No fake page-turn animation. Downloads always use bed-flat actual printable positions, not assembled overlaps.

Prominent connected-cardSTL, de-tabbedplateSTL, per-partSTLs and EverythingZIP containing connected-card+all5panels, portable designJSON, numbered ASSEMBLY.txt with current fit data. No3MF advertised; STL does not store preview colours. Export finalX/Y/Zmm shown per selection. Individual panels fit smaller beds than the90×240mm default carrier.

## Printing, assembly and calibration

1. Print flat, decorated faceUP, PLA/PETG, .4mmnozzle, .16–.20mmlayers,3+walls,100%scale. Top recesses need no underside bridging. Inspect slicer layers; no physical test performed.
2. Snip20runners1.8mm outside panels and smooth stubs. Release five panels, discard carrier. Preserve all15functional bores. Watch sharp edges/small parts.
3. Stack back-cover →1groove →2groove →3groove →front-cover, identical spine alignment, all top faces in one direction.
4. Use3×80–100mm lengths of nominal1mm SOFT braided cord (240–300mm total). Thread each through one aligned column of5holes; return around OUTSIDE spine edge and tie a loose loop. Knots stay outside. Optional blunt threading needle not included. No glue/screws/bearings required.
5. Leave opening slack; do not cinch. Slide then turn sheets gently. Re-tie longer if anything binds. Knot stability, real opening clearance, wear and physical page turning require calibration; no full trajectory verified. Not load-bearing or a children's toy.
6. Print one-groove-leaf first as a hole/texture coupon.2.2–2.8mmbore is proposed, not universal. Cord must pass freely and knot/loop security must be checked. Never remove enough material to leave<1.2mm hole walls.

The app and ZIP include the complete numbered guide with reference and privacy notes.

## Validation scope

Independent binarySTL checks: exact84+50Nbyte length, finite coordinates, normalized stored normals aligned with winding, nondegenerate faces, welded1e−5mm edges with exactly two opposite incidences, per-component positive volume, Euler characteristic and expected components/bounds. Individual panels/card and translated float32loose plate checked. Worker preflight repeats final-solid checks on every edit.

Mechanical/assembly checks separate from watertightness: one connected card; envelope/thickness; all20runner cuts yield carrier+five intact panels; tabs are bed-contact and removable away from bores; no flat-layout/closed-stack overlaps; all15bores admit1mmcord; exterior spine routing has no material obstruction; sequential axial stacking clears previous panels;≥1.2mmhole walls and≥1mmart backing; upper slices supported by first-layer footprint. These checks do NOT establish page-turn behavior, cord fatigue or knot security. See VALIDATION.md and generated reports for actual run results.
