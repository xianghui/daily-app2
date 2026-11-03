# Spherometer & Sag

A local-first **five-part flat-pack kit-card generator** for a three-foot, screw-driven surface comparator. Three glued, shouldered legs establish a reference plane. A purchased M3 coarse screw in a captured hex nut probes the center height; a scalloped thumbwheel has twenty real recessed index marks. This is an educational spherometer-style assembly, **not a precision instrument**. It is not a linkage, optical wheel, keycap or clicker reskin.

## Run / build

Node 22.12+; `npm install`, `npm run dev`. `npm test` performs geometry and assembly checks. `npm run predeploy` builds production assets. Vite base is `/daily-app2/20261104-9/`; per-app `deploy` is `gh-pages -d dist`, but this monorepo is published through the ROOT combined `deploy/` flow.

React + Vite, Three.js/OrbitControls, Manifold WASM in a module worker, fflate, locally bundled Fredoka/Rubik fonts. No CDN, account, API key, paid service, server computation or upload service. The app must be hosted as static files (not opened with file://). WebGL, Web Workers and WASM are needed. Not an installable offline PWA.

## Reference-first reconstruction

Read-only local candidates were actually parsed first:

- `keycap_generator2/public/templates/clicker_template2.stl`: 944 triangles, 3 components, 15.20 × 15.20 × 43.10 mm. MX cavities/stem are inappropriate for a sheet comparator kit.
- `fidget_fabric_generator/public/templates/diamond-link.stl`: 5,940 triangles, one component, 7.981 × 9.241 × 8 mm. An interlocking fabric link is not an appropriate planar socket/card template.

Selected public mesh: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** (upstream LICENSE retrieved; copy in `REFERENCE-LICENSE.txt`). Exact download/source, SHA-256, component bounds, measured section loops and local-candidate hashes are in `reference-analysis.json`. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

The downloaded binary STL has 30,616 triangles, bounds approximately 179.82 × 178.02 × 3.19 mm, 27 edge-adjacent components and source edge defects. Units are assumed millimeters, corroborated by source instructions/SCAD (`thickness = 1.6`); STL has no units. It is used as an inspected **design reference**, not repaired or directly re-exported. `evidence/reference-sections.png` shows actual cross-sections at Z=.1/.215/1.59 mm. Four measured rectangular socket loops are 4.50 × 1.70 mm; sheet planes are 0/1.60 mm; low carrier runners end around .21/.22 mm.

The new solid reconstruction adapts its real **bay shelves, low breakaway runners and perpendicular sheet/socket assembly**. It does not copy the spacecraft silhouette or redistribute the raw mesh. Our **4.50 mm straight tongue uses the source SOCKET span**, not its 4 mm male clip, as a deliberate new baseline. Sheet 2.2–3 mm, .4–.6 mm runners and .10–.30 mm total fit clearances are proposed FDM redesigns, not source measurements. The tripod, finite contact toes, central nut boss, bolt/head pockets, indexed wheel and all screw-fit values are original comparator geometry. A five-bay, three-row connected card has twenty real runners; it is not loose parts placed near a rectangle.

Visual/interaction reference, read-only: `keycap_generator2` README, styles, App, Viewer, worker, image tracing, STL and export modules. Concrete patterns: 374 px scrollable left rail, sticky compact brand/theme header, tactile raised selected controls, paired range/number inputs, collapsible sections, checkerboard cutout, module-worker current-state gating, assembled/exploded/isolated/print views, preview-first phone. Shared local studio infrastructure was adapted from earlier daily apps; this app's physical geometry, assembly transforms, hardware stack and validation are newly implemented. Reference dependencies/history were not copied wholesale; this folder was independently scaffolded with Vite/npm.

## Parameters — millimeters unless marked

| Parameter | Supported range |
| --- | --- |
| Card width / height | 110–160 / 150–210 |
| Three-foot pitch radius | 20–26 (equilateral; center spacing √3 × radius) |
| Deck underside height | 18–26 |
| Thumbwheel diameter | 22–30 |
| Blunt toe width × radial sheet contact | 1.2–2.0 × sheet thickness |
| Sheet thickness | 2.2–3.0 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Socket TOTAL clearance | .10–.30, added to both full slot dimensions |
| M3 bore DIAMETRAL allowance | .20–.60 (nominal bore 3 mm) |
| Hex pocket across-flats allowance | .15–.40 (nominal AF 5.5 mm) |
| Artwork footprint / recess depth | 4–7 / .4–.6 |
| Artwork rotation / X / Y offsets | ±180° / ±1.5 / ±2 |

The deck radius is foot radius + 9 mm; round, hexagonal and octagonal silhouettes are genuine geometry. Leg shoulder width 12 mm, tongue width 4.5 mm, tongue length equals sheet thickness. Deck boss adds 2.6 mm; the wheel is sheet + 2.4 mm high, with its bolt-head bearing floor 2 mm thick. Defaults make a 132 × 160 × 5 mm card. Card/bay fit is checked and undersized combinations are blocked rather than overlapping or enlarging the declared envelope. Three presets have actual generated-model thumbnails; bounded variation respects mechanics. No color metadata is stored by STL.

## Local image / SVG / text / icon workflow

File picker works on desktop and phone; drop one file on the Import panel. Bundled synthetic samples are available as buttons and downloadable fixtures. Inputs up to **2 MB**; PNG/JPEG at most **12 MP**, **6,000 px** per side, checked in headers before decode and normalized to ≤500 px longest side. Simple SVG limited to 2,000 elements and 6,000 px, locally rasterized; scripts, resources, references, filters and embedded images are rejected. Convert SVG text to paths first.

The user can fit or crop, pan ±25%, invert dark/light background, threshold (1–254) or use grayscale, set recess depth, physical footprint, rotation and placement. Original and checkerboard-converted images are displayed. Text (8 characters) and six searchable bundled SVG marks use the same real geometry pipeline. Bold, short marks work best at the small footprint.

**Exact method:** sample luminance into a bounded 20 × 20 grid after compositing alpha against the selected background. Threshold makes each sample 0 or selected depth; grayscale gives depth × (1 − luminance/255). Triangulate the continuous grid top, close sides/bottom and use that solid as a Manifold subtraction cutter. The .4 mm cutter backing is positioned above the deck, not cut into it. Bright holes stay at the original deck surface, with no recess; dark regions remove real material. This is piecewise-linear sampled relief (edges interpolate between samples), **not exact vector tracing, floating disconnected islands or automatic 3D reconstruction of an object from one photo**. Raised marks are intentionally not offered, keeping the protected backing and card envelope predictable. The patch at Y=-14 mm is separated from all sockets and the screw/nut. Every transformed cutter vertex must remain within its 6.5 mm keep-in circle; backing is at least 1.5 mm. Empty marks and invalid transforms disable exports, with recovery controls.

## STL workflow / exact solid integration

ASCII and binary STL, up to **1,500 triangles**, **2 MB**; every dimension .2–250 mm, coordinates bounded. Choose Z/Y/−Z up before upload; source dimensions are displayed after orientation. Explicitly confirm millimeters because STL contains no units. The source has its own 3D viewer. Replace/remove/reset are supported.

The bounded contract accepts **one outward-wound, connected, convex, closed solid with a broad flat bottom, no unsupported overhangs**. Checks include full binary length/complete ASCII facets, finite vertices, nondegenerate triangles, welded-edge incidence/opposite directions, component connectivity, positive volume, triangle intersection checks, convex half-space checks and bed footprint. Concave, hollow, branched, open, nonmanifold, inward, intersecting and unsupported meshes are rejected with actionable guidance. No claimed repair and **no convex-hull substitute**. A hull is used only to validate flat bed support, never to replace the mesh.

The actual accepted vertices become a Manifold solid. Center, proportionally scale XY to the selected footprint, independently scale Z to the selected engraving depth, rotate around Z, move within the patch, mirror into the deck top and **Boolean-subtract the original mesh shape**. Source dimensions, XY/Z scale factors and changed final-model geometry are explicit. This intentionally integrates a mesh-shaped recess into a functional kit deck, not an unchanged re-export or visual overlay. Size/placement/depth change STL volume and signature. Imports cannot cut through the sheet, reach slots or obstruct the central nut/screw.

## Views, persistence, export and stale-result safety

Assembled, exploded, connected card, de-tabbed plate and each clean part share the same result. Touch orbit/pinch, fit/top/front/zoom, see-through deck and saved light/dark theme. Pale shaft, nut and head are **schematic purchased hardware, not exported**. Screw preview is an ideal rigid .5 mm/turn pose, not contact/force simulation; exploded offsets are preview-only. The default implied bolt tip is on Z=0, under-head face Z=40 and wheel bottom Z=38. Positive preview turn raises the bolt/wheel. Actual zero requires a flat calibration plate.

Debounced worker owns heavy generation/CSG; bounded resolution. Request IDs discard old builds. Export requires the current parameter/source/transform key, completed image conversion, validated mesh and no import/build error. Last-good preview can remain visible but invalid/stale export is disabled; there is no silent stale mesh download. Worker failure has a clear reload recovery message. Runtime final-mesh preflight checks each part's manifoldness, volume and winding.

Undo/redo, six local named designs, and versioned JSON save/open carry bounded normalized images or original indexed STL payloads. Restored STL is revalidated. Missing image payload explicitly asks for reattachment; it never pretends to restore a path. No personal uploads or input files are checked into this repository. Only synthetic samples and synthetic test outputs are stored. LocalStorage belongs to this browser/origin; portable JSON is the backup.

Binary STL per part, connected-card and loose-plate STL, plus **Everything ZIP** containing card/five clean STLs, portable design JSON and numbered print/assembly/current-fit instructions. No fake 3MF. Exports always use printable flat Z=0 geometry, irrespective of assembly view. A displayed geometry signature is checked against downloaded bytes and Node regeneration of the same saved state.

## Print / assemble / calibrate

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls, flat at 100%; supports not intended. Deck and wheel pocket openings face up. Default card needs 132 × 160 mm bed; smaller printers can use clean parts. Snip twenty runners 1.8 mm outside parts, smooth stubs, preserve toe bottoms and shoulders.

External hardware: **one fully threaded M3 × 40 mm hex-head bolt**, .5 mm pitch, 5.5 mm AF head ≤2.4 mm tall; **one M3 nut**, 5.5 mm AF × 2.4 mm; compatible adhesive and rigid flat calibration plate. These are not exported. There is no claimed hardware-free equivalent of the purchased threaded comparator.

Insert three tongues from below; shoulders meet deck underside. Align all toes on one flat plate, glue square and cure. Bond nut into top pocket with clean threads. Thread bolt from above; bond its head into wheel TOP pocket, under-head face on 2 mm floor. Keep fixed nut threads and shaft clean. Pocket walls transfer torque; adhesive provides axial retention. No snap or universal friction-fit claim. Check nut/bolt specifications, fit and adhesive before use. Full numbered guide is in the UI and generated ZIP.

Gently zero the screw's blunt end against the calibration plate without lifting a foot. Mark corresponding zero on fixed deck and wheel with a pen. Compare center contact height on a rigid surface by counting turns and twenty dots. M3 coarse nominal advance .5 mm/turn means .025 mm per dot **as a thread subdivision only, not accuracy**. Backlash, toe footprints, bolt-tip geometry, hand force, FDM variation and plastic deflection can dominate. No ideal point-contact radius calculation or certified measurement claim. Do not sharpen the bolt or use on delicate optics/skin. Recalibrate for material/printer; print a deck/leg pair as a full-size fit sample first.

## Validation and limitations

`validate.mjs` independently parses final float32 binary STLs: exact length/count, finite coordinates, normalized outward normals, nonzero faces, 1e-5 mm vertex welding, exactly two opposite edge incidences, positive volume per edge-connected component, expected dimensions/components. The actual connected card and translated loose print plate are both checked, not only kernel meshes. Manifold .001 mm simplification/tolerance removes sub-feature numerical detail before serialization; no triangle dropping is used to conceal seams.

`collisionCheck` independently checks card envelope/bed footprint, all flat/assembled pairs, twenty actual cut operations yielding frame plus five unharmed parts, three socket/tongue centers, equal-height toe planes, M3 shaft and nominal hex nut/head gauges, bearing floor, leg/nut/head insertion paths, full-turn pose samples and -2…+4 mm screw-tip adjustment clearance. Purchased threads are not simulated; cylindrical shaft gauges check the printed passage only. Geometry validities do not establish thread friction, adhesive reliability or precision.

See `VALIDATION.md` and JSON reports for actual completed checks, browser-selected PNG/JPEG/ASCII/binary imports and downloads, malformed inputs, image/mesh variation signatures, actual SVG hole probes, extrema, persistence, ZIP contents, production worker, desktop/mobile and touch results. **No physical print, fit, strength, thread friction, wear or measurement-accuracy testing has been performed.**

Dependency licenses: React/Three.js/fflate/Vite MIT; Manifold Apache-2.0; Fredoka/Rubik font files SIL OFL 1.1. The six simple mark paths and synthetic samples are original reusable fixtures; no reference STL is bundled.
