# Spire & String

A local React/Vite maker studio for a **four-part ruled-string tower kit card**. Two pierced decks sit on complementary half-lapped spines; lace separate soft cords between the decks to reveal a waisted ruled surface. This is a rigid decorative miniature, not a tension structure or load-bearing toy. Cord, a blunt needle, cutters and adhesive are required. No physical print, strength, stability or lacing test is claimed.

## Run

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs the independent mesh and assembly suite; `node extreme-check.mjs` checks mixed limits with imports; `node hole-check.mjs` probes real raised/engraved image holes. `npm run predeploy` builds with `/daily-app2/20261030-8/`. The per-app deploy script is present as requested; public publication uses the ROOT monorepo `npm run predeploy` then `npm run deploy`.

For production browser checks: `node serve-production.cjs`, then `node browser-test.cjs` and `node studio-test.cjs`. These use Playwright Chromium and real uploads/downloads, not mocks. Test reports and screenshots are kept here. The old daily_app and all reference trees were read-only.

## Actual STL reference, not a listing image

Local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` is a switch cavity/stem set; `fidget_fabric_generator/public/templates/diamond-link.stl` is an 8 mm tall interlocking link. Neither supplies a bed-flat kit carrier and sheet sockets. Their actual hashes, parsed dimensions, triangle and component counts and rejection reasons are in `reference-measurements.json`.

The selected mesh is **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. See `reference-LICENSE.txt`. Download URL, SHA-256, bounds, triangle/component counts, sections and actual socket-loop measurements are recorded in `reference-measurements.json`; design mapping is in `reference-analysis.json`. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed mm, corroborated by sheet geometry; STL has no unit metadata. Mesh bounds are approximately **179.820 × 178.020 × 3.190 mm**, with **27 edge-adjacent components** and source nonwatertight defects. This is a design reference, not a claim that its mesh was repaired. The raw reference STL is **not redistributed**.

Measured 1.6 mm sheets and 4.5 × 1.700012 mm sockets map to our **4.4 mm tongues** at **0.10 mm TOTAL allowance**. At other settings, sockets are `(4.4 + allowance) × (sheet + allowance)`. The default .15 mm allowance, .4–.6 mm runner thickness, sixteen runners, central carrier, complementary half-laps, decks, eyes and ruled-string construction are proposed original redesigns. Source low planes around .21/.22 mm are not copied as universal runner specifications. Source component arrangement is not reused. `reference-inspect.py` reproduces read-only analysis after downloading the attributed mesh to `/tmp/spire-string-reference.stl`, using trimesh/numpy/matplotlib. Actual cross-sections at Z=.1,.5,1.59 are saved in `evidence/reference-sections.png` and were visually inspected.

The current visual/interaction reference is read-only **keycap_generator2**. Inspected README, styles, App, Viewer, worker, STL, export and image modules. Concrete patterns: 374 px scrollable left rail; paired numeric/slider mm inputs; collapsible sections; raised tactile controls and pink pressed selections; checkerboard source/cutout; locally bundled Fredoka/Rubik; saved dark theme; right-hand gradient orbit viewer; preview-first stacked phones; current-result gated exports. Existing monorepo studio plumbing is reused, **not a prior mechanism**. The new assembly has eight deck sockets, one central cross-lap and indexed ruled lacing, unlike prior optical panels and other catalogued kits.

## Geometry and supported ranges

All fabrication dimensions are mm. Controls are defined in `src/geometry.js`:

| Parameter | Range |
|---|---|
| Card width / height | 240–280 each |
| Vertical shoulder-to-shoulder tower height | 60–90 |
| Deck breadth | 90–104 |
| Spine breadth | 36–44 |
| Cord eyes per deck | 12–20, even integers |
| Eye diameter | 2–3 |
| Lacing offset | 2–3, integer |
| Sheet thickness | 1.6–2.4 |
| Joint TOTAL allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Breakaway width / height | .8–1.4 / .4–.6 |
| Tactile groove depth | .2–.5 |

Three real geometry presets, three deck silhouettes (soft square, chamfered, ellipse), bounded variations, reset and undo/redo. Card has a real outer frame and carrier rail with sixteen solid-unioned runners, four per part. Parts stay within the declared XY envelope and are separate after sixteen accessible snips. Card Z includes raised artwork; the displayed export XYZ is the actual mesh bound, not merely nominal sheet thickness. Personalization remains inside a protected radius-6.5 landing centered at (-.21*deck,-.21*deck) on the lower deck, away from slots and eyes.

Eye radius `R=.42*deck breadth`. Upper eyes rotate by **0.1 × offset × 360/N**, so offset affects real exported eye placement, not only cord lines. Connect lower index i to upper `(i+offset)%N`, both indexed counterclockwise **from above** beginning beside the engraved radial dash. Total span angle is `1.1*offset*360/N`; ideal minimum straight-cord center radius is `R*cos(1.1*pi*offset/N)`. The entire spine lies inside radius `hypot(spineBreadth/2,sheet/2)`; the difference, minus .3 mm cord radius, is a conservative full-height keep-out, tested over mixed extremes. Use cord **at most .6 mm diameter**, with slack. Preview cords pass vertically through each eye then bend .3 mm outside deck surfaces into straight spans. They are zero-thickness external guides and not in STL. Their ideal shape is not a tension simulation. Exploded view separates printed parts, not a claim that lacing stays attached during disassembly.

## Image / SVG / text / icons

PNG and JPEG: actual content headers checked before decoding; max **2 MB**, **12 MP**, **6000 px/side**. Normalize to ≤500 px, composite transparent pixels onto selected light/dark background, optionally invert luminance for dark background. Contain/cover crop plus ±25% pan is sampled into a **20×20 luminance grid**. Threshold 1–254 produces binary heights; grayscale mode uses `depth*(1-luminance/255)`. A triangulated height surface with closed perimeter/bottom is solid-unioned or subtracted from the lower deck. Bright holes stay **unraised/unengraved over solid backing**, not through-holes; interpolation softens edges by about one grid cell. This is **2D-to-relief**, not full 3D reconstruction or exact vector outline tracing. Checkerboard shows the sampled cutout. Empty silhouettes block exports.

Relief .4–3 mm raised, .4–.6 engraved; at minimum sheet thickness, protected backing is at least .8 mm. Import footprint 4–7 mm, Z rotation ±180°, X ±1.5 and Y ±2 mm, additionally bounded by the protected landing. SVG is sanitized to simple local filled shapes (≤2000 elements, ≤6000 px dimensions), rasterized to 256 px then follows the same conversion; scripts/resources/references/effects are rejected. Searchable bundled original marks and canvas-rendered text use this exact printable path. Original and final-model previews are distinct. Replace/remove/reset are real and tested. Preview colour is not encoded in STL.

## Imported STL

ASCII and binary, **40 bytes–2 MB**, at most **1500 triangles**, one outward closed connected solid, every dimension .2–250 mm. Weld tolerance .00001 mm. Reject nonfinite vertices, bad facets, degenerates, wrong winding, nonmanifold/open edges, disconnected or negative-volume components, self-intersections, unsupported concavity and overhangs. No silent repair and **no convex hull replacement**. This deliberately bounded integration supports a convex grip with a broad flat bottom containing all projected vertices and at least 25% of its XY box; other geometry is rejected with actionable guidance.

Choose Z up, Y up or -Z up **before attaching**; changing orientation requests reattachment. Source dimensions, format and triangle count are shown; explicitly confirm mm because STL has no units. Original triangles are proportionally scaled in XY to the requested footprint, independently scaled in Z to .6–3 mm, centered, rotated, translated and **Boolean-unioned** into the lower deck, overlapping .15 mm for a single closed solid. Scales are shown. Concavities are never discarded to fit the importer. Import minimum transverse feature 1.2 mm. Invalid transforms, unsupported inputs or failed builds disable every exporter; last-good geometry is clearly labelled and cannot be exported as current.

## Local-only and persistence

All user files stay in this browser. No keys, paid APIs, uploads, remote fonts/CDNs or server generation. Dependencies (React, Vite, Three.js, Manifold WASM, fflate, Fontsource) are bundled locally. Fontsource fonts are SIL OFL; Manifold Apache 2.0; other dependency licences remain with their packages. Only original synthetic sample PNG/JPEG/SVG and ASCII/binary meshes are bundled. No personal inputs are added to the repository.

Named local designs (six), portable JSON save/open and undo/redo preserve bounded downscaled image payloads or validated original mesh vertices/indices. Missing/oversized payloads explicitly request reattachment; they are never pretended restored. Image normalization max250k pixels; JSON max2MB. Theme is saved locally. Reset reproduces the original geometry bytes.

## Worker, views and exports

Heavy CSG and STL checks execute in a dedicated Manifold Web Worker. Resolution and import complexity are bounded; edits debounce100ms and sequence/current-state keys reject stale responses. Actual busy/success/error state gates STL/ZIP exports. Worker loading errors are visible; tests abort the production worker then verify reload recovery. Preview and binary export use the same current part vertices/indices; the visible fingerprint is checked against downloaded bytes and a JSON-regenerated model.

Views: connected card, de-tabbed parts, assembled, exploded, each isolated part, optional see-through solids. Orbit, zoom, fit and touch pinch are implemented. Each part exports in bed-flat Z=0 orientation regardless of preview pose. Prominent per-part STL and **Everything ZIP** include the real connected card, four clean part meshes and numbered `ASSEMBLY.txt`. ZIP is not called 3MF. STL contains neither colour nor unit metadata.

## Printing / assembly / validation limits

Print PLA/PETG at 100%, .16–.20 mm layers, three walls, no supports intended. Check bed size (minimum240mm), first-layer spread, thin tabs and slicer paths. Print a spine and the lower deck first for a joint calibration; .15mm total allowance is a starting point, not universal. Snip runners1.6mm from each part edge and trim nubs without altering tongues. Lower the **down-slotted spine onto the up-slotted spine**, lower crossed pair into the lower deck, then lower the top deck. Bond eight deck seats plus the central lap and fully cure before loose lacing. Instructions and connection table are in the app and ZIP. Do not tension cord; strength, stiffness, creep and material behavior are untested.

Verification is computational: independent float32 binary-STL parsing, byte length, finite coordinates, nonzero triangles, unit normals, opposite winding, two faces per welded edge, positive volume for EACH component, measured mm bounds; all exported parts separately and connected card. Manifold boolean intersection checks staged assembly paths, shoulder stops, .8mm socket rims, nonoverlapping print layouts, sixteen snip paths and five resulting components. Cord clearance is an analytic full-path bound, not sampled force analysis. Tests cover defaults, all presets and shapes, representative min/max and mixed settings, imported mesh/raised/engraved image variants, and actual download bytes. Browser tests cover PNG/JPEG/ASCII/binary imports, geometry-changing controls, errors/recovery, exports/ZIP, JSON/named saves, undo/redo, views, worker failure, desktop layout, 320/390px phones, real touch orbit/pinch, focus, saved themes and reduced motion. See reports for observed results; no physical tests are implied.
