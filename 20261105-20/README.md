# Oldham & Offset

A reference-grounded, browser-only **nine-part Oldham coupling kit-card generator**. Two parallel shafts, separated by 3–6 mm, rotate at the same angle while a floating centre disc slides along two perpendicular keys. This is not a reskin of the gallery’s gear, four-bar or trammel mechanisms. The upper frame has observation windows and a four-spoke shaft hub. A carrier with 36 real bed-aligned breakaway runners holds all nine required printed parts.

## Run and dependencies

`npm install`, `npm run dev`; `npm run predeploy` builds the local production bundle. `npm test` runs the reproducible mesh/mechanism suite. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fontsource Fredoka/Rubik. Playwright provides browser checks. No CDN, paid service, API key or file-upload server. Dependencies are bundled under the configured `/daily-app2/20261105-20/` prefix. Per-app gh-pages scripts are present; the combined public site is deployed only from the parent monorepo.

## Reference-first evidence and attribution

Local candidates were inspected first: Keycap Studio’s real three-part `clicker_template2.stl` and Weave’s real `diamond-link.stl`. Their README instructions, meshes, dimensions and component counts were inspected, but neither socket geometry nor interlocking fabric link is appropriate to this sheet assembly. They are recorded as rejected candidates, not claimed kit references.

The selected physical construction reference is **White Cat Kit Card by Mike Kasberg**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. The public STL was downloaded and parsed anew. Its SHA-256 is `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent groups including degenerate pseudo-components. The full source is not manifold; this app does not redistribute or silently “repair” it. Source units are assumed millimetres because STL has no unit metadata. Source/license URLs, license hash, component bounds and section measurements are in [reference-analysis.json](reference-analysis.json). Reproduce with `reference-analysis.py` after downloading the documented source to its temporary path and installing numpy/trimesh/scipy/shapely/networkx/matplotlib in an isolated Python environment.

Actual source cross-sections at Z=.10, .215 and 1.59 mm are saved in `evidence/reference-sections.png`. Measured **1.60 mm sheets and 4.50 × 1.70 mm sockets** map directly to default leg/frame joints; 4.40 mm tongue width and .10 mm total sheet clearance are redesigned starting fits. Source runner tops are .21–.22 mm; this design deliberately strengthens them to .40–.60 mm. This is an original parametric reconstruction of the card, sheet joints and carrier structure, NOT an attribution claim that the source contains an Oldham mechanism. Coupling dimensions, blind sockets, keys, shaft frames and observation windows are new engineering proposals.

Visual/interaction reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, including README, styles, App, Viewer, worker, STL parser and export modules. Concrete adopted studio patterns: 374 px left editor, sticky brand/theme header, labelled collapsible sections, paired mm inputs/sliders, tactile segmented controls, pink selection states, preview-first phone layout, imported-source preview/transform editor, fit warnings, worker-owned solid modeling and exact current-result export gates. The new application was Vite-scaffolded; no reference Git history/dependency tree or raw third-party mesh was copied. Existing daily studio import/state/preview plumbing is reused; coupling geometry and verification are mechanism-specific.

## Supported parameters (mm unless noted)

| Parameter | Range |
|---|---|
| Card width / height | 240–300 / 220–290 |
| Flange radius / shaft offset | 14–18 / 3–6 |
| Panel and key thickness | 1.6–2.4 |
| Sliding-key total gap | .20–.50 |
| 3 mm shaft diametral gap | .20–.50 |
| Sheet socket total clearance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Import footprint / depth | 4–7 / .4–.6 |
| Import rotation / placement | ±180° / X ±1.5, Y ±2 |

Three real presets: Compact coupling, Parallel drift and Wide offset. Rounded, clipped and scalloped frame silhouettes change actual solids. Thick flanges are **3×sheet+.30 mm**, so connected-card Z differs from panel thickness. Every exported X/Y/Z size is displayed. Too-small packing, unsafe art, invalid parameters or missing current worker result disable export.

## Physical parts, hardware and assembly

Nine printed parts: lower frame, upper frame, input/output flanges, centre disc, bottom/top keys, left/right legs. Keys, flanges and legs are identical pairs. All export flat on Z=0; assembled/exploded poses are not printable STL orientation. Card export is one connected solid; the clean plate has nine separate closed solids. Each individual STL has one closed component.

**Required external items:** two smooth **3 mm shafts, 14 mm long**, four **3 mm ID collars, at most 7 mm OD and 3 mm width**, and suitable adhesive. There is no hardware-free variant. Adhesive fixes keys to opposite disc faces, rods into flange blind bores and tongues into frame sockets. Collars capture each shaft around a frame; printed bores are plain bearings. No motor/load rating is offered. The frame is hand-held, not freestanding: the lower shaft protrudes below the lower frame.

1. Print the card OR all nine clean parts, not both. PLA/PETG, .16–.20 mm layers, .4 mm nozzle. No supports intended; flange blind bores bridge 3.2–3.5 mm. Snip all 36 runners and trim scars. The printed bodies have no unsupported first-layer tongues.
2. Test one flange and key as a full-size calibration before assembly. Fit allowances are printer/material dependent, not universal. Do not force parts.
3. Centre and glue two keys on opposite centre-disc faces at exactly 90°. Glue each rod one sheet deep into a blind rear flange socket; grooves face away from rods. Cure adhesive.
4. Place input flange above lower frame, its back 5 mm above frame top. Capture rod through lower frame with two collars, leaving .05–.10 mm TOTAL shaft endplay. Seat/glue legs into four sockets.
5. Insert the bottom key into the input groove, invert the output flange over the upper key and seat upper frame onto the legs while passing its shaft through the offset bore. Fit two output collars, glue upper tongues and cure. Set face gaps .15 mm each; collar positions set these, not automatic spacers. Keep adhesive off sliding faces.
6. Turn gently through a full revolution while holding the frame clear of desk/fingers. The two shaft angles remain equal. Centre C=(e cos²θ, e sinθ cosθ). Finite key tips remain inside each flange and key engagement is sheet−.15 mm. Stop if anything rubs. Use at most .10 mm total shaft endplay per axle: the minimum total disc face space stays .20 mm, and minimum floating-key engagement stays sheet−.40 mm. No physical print, friction, strength, glue or fatigue testing has been performed.

The same numbered guide, current mechanism dimensions and portable design are included in Everything ZIP.

## Local image / SVG / text / icon conversion

File picker and drag/drop accept PNG, JPEG and sanitized simple SVG. Limit 2 MB; PNG/JPEG ≤12 MP, ≤6000 px per side. Actual magic/header/dimensions are checked before decode. Images are normalized to ≤500 px then sampled as a **20×20 height grid**; SVG is rasterized locally at 256 px first. SVG external resources/scripts/effects/embedded images/text are rejected. Fill-rule holes survive as bright backed regions. This is bounded sampled 2D-to-silhouette-relief, NOT exact vector tracing or full 3D reconstruction from a photo.

Threshold mode chooses dark heights; grayscale mode maps luminance to height. Fit/crop, X/Y crop shift ±25%, light/transparent removal or dark inversion, threshold 1–254, depth .4–.6, physical scale, rotation and placement affect the final Boolean engraving. A closed heightfield cutter is subtracted from a protected lower-frame zone; holes keep original backing and at least 1 mm material remains. Raised artwork is intentionally unsupported. Source and exact sampled cutout are shown over a checkerboard. Empty sources, unsafe extents and invalid settings are recoverable errors. Use bold artwork: sampling pitch is footprint/19 (about .21–.37 mm), and details below your nozzle resolution may disappear in slicing. Initials or 1–3 bold characters work better than long tiny text. Text (up to eight characters) and six searchable bundled original SVG icons use this same tested pipeline. Preview colors are never claimed to be STL color data.

## Local STL workflow

Actual ASCII and binary files accepted, ≤2 MB, ≤1500 triangles, .2–250 mm per axis. Explicit millimeter confirmation is mandatory. Choose Z-up, Y-up or flipped-Z before attachment; changing axis requests reattachment. Source dimensions, format, triangle count and source preview are shown. XY scales proportionally to the requested footprint; Z scales independently to engraving depth. Rotation/XY placement and reset alter the exact mesh-shaped Boolean cutter, NOT a screenshot/texture or unchanged re-export.

The supported contract is intentionally narrow: **one closed outward-wound convex broad flat-bottom solid**. Open/nonmanifold, inward, degenerate, disconnected, concave/hollow, self-intersecting, slender or overhanging input is rejected with actionable feedback. Convexity testing is a validation restriction, not hull replacement: the original imported vertices/faces enter Manifold. A bottom-footprint hull is used ONLY for a support-domain test, never as replacement exported geometry. No auto-repair claim is made. The solid is placed only within a protected engraving zone, preserving mechanism interfaces.

`public/samples/` contains original synthetic PNG, JPEG, holed SVG, ASCII wedge and binary gem fixtures with attribution. Personal files never leave the browser and are not saved in this repository. Replace/remove/reset and explicit unsupported geometry errors are available on phones too.

## State, geometry and exports

Worker-owned Manifold WASM solid operations, bounded resolution, 100 ms debounce and request/state-key guards. Every generated solid is checked for finite/nondegenerate faces, closed oppositely-directed welded edges and positive volume. Preview/export share the exact current valid result; invalid edits may leave a labelled last-good preview but cannot export it. Worker failure blocks export until reload.

Undo/redo, six local named designs and JSON save/open carry bounded normalized image/mesh payloads. Missing image payloads explicitly request reattachment; imported meshes are revalidated when restoring. Invalid/wrong-app JSON fails recoverably. Light/dark selection is saved. View modes: assembled, exploded, connected card, clean plate and every isolated part; see-through view plus translucent external rod/collar ghosts (not exported). Orbit/zoom/fit and touch pinch work locally.

Per-part binary STL buttons, connected-card STL, clean-plate STL and Everything ZIP (ten STLs, current JSON, numbered assembly guide). No fake 3MF option. A mesh fingerprint in the DOM is matched against downloaded bytes and JSON-regenerated output in the browser tests.

## Validation and limitations

`validate.mjs` independently parses exported float32 STL, checks byte count, normalized outward normals, finite coordinates, nondegenerate triangles, welding at 1e-5 mm, exactly two opposite-directed faces per edge, per-component positive volume, expected components, bed alignment and mm bounds. It exercises presets, silhouettes, every field endpoint, simultaneous min/max, image-derived and imported-STL-derived variants. Mechanism checks use Boolean intersections throughout a full turn, finite key engagement, frame insertion paths, 3 mm shaft and maximum collar envelopes, nonoverlapping print parts, card bounds, tab-cut release (carrier + nine intact parts, no runner fragments), and functional socket probes. Manifold tolerance/simplification is .001 mm before float32 STL serialization, not a triangle-dropping repair.

Browser scripts exercise actual production workers/WASM under the base path: PNG/JPEG/ASCII/binary imports, changed pixels/threshold/depth/scale/rotation/placement, previews versus downloaded bytes and JSON regeneration, all presets/text/icons/SVG holes, per-part and unzipped STL validation, replace/remove/reset, bad files/complexity/transforms, named designs, portable imports, undo/redo, stale asynchronous imports, worker abort/reload, dark theme, focus/sections, phone 320/390 overflow, touch orbit/pinch and export reachability. Reports and screenshots are saved alongside this README.

**Computational checks are not physical printing or assembly tests.** Torque transfer depends on cured adhesive, key alignment, collar settings and real printer fits. No physical print, friction, wear, safety certification or load rating is claimed.

Final recorded run: **45 geometry/mechanism cases**, each including **12 axial-endplay/centre-float cases**. Browser import, feature, hole, worker-recovery, portable-payload, stale-import and 320/390 px layout suites passed. Combined root build: **467 built, 0 failed, 0 skipped**; all **466** prior gallery entries preserved. The combined site’s real file-picker PNG/JPEG/ASCII/binary imports and downloaded STL were also checked. See JSON reports for the exact evidence; physical printing remains untested.
