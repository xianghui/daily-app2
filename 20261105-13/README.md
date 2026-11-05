# Roberts & Line

A local React + Vite **flat-pack Roberts straight-line linkage kit-card generator**. Snip sixteen real carrier runners, then bolt two equal rockers and a triangular ternary coupler over the ground plate. Its lower witness bore follows an approximate horizontal path. This differs from the earlier Watt midpoint linkage and other kit mechanisms: the actual Roberts triangle has two equal long sides and a short upper link, and its lower vertex is the output. It is not a static STL re-export.

## Run / dependencies / exports

`npm install`; `npm run dev`; `npm test`; `npm run predeploy`. Base: `/daily-app2/20261105-13/`. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; everything bundled locally, no CDN, API, key or server. Heavy modeling and STL preflight run in a debounced worker with generation IDs and current-state export gating. Primary visual reference: read-only Keycap Studio, including its README, CSS, App, Viewer, worker, image tracing, STL and export modules. Concrete adaptations: 374 px scrollable left control rail, tactile pressed controls, paired sliders/mm fields, source/converted previews, saved dark theme, and phone preview-first stacking. Generic studio/import/export infrastructure is adapted from prior local maker studios; linkage geometry, placement, kinematics and mechanical checks are newly implemented.

Download connected-card binary STL, clean print-plate STL, or individual ground/left-link/right-link/ternary-coupler STLs. Everything ZIP includes all five STL files, portable JSON and numbered `ASSEMBLY.txt`. No fake 3MF. STL has no units or colours; exports assume mm. Preview and downloads share the exact current valid worker mesh; bad edits visibly pause exports. Pose, ghost and preview colour do not change print geometry. Printed parts are all bed-aligned at Z=0, not exported as overlapping assembled plates.

## Reference evidence and deliberate redesign

Local candidates inspected first: Keycap Studio `clicker_template2.stl` (944 triangles, three edge-adjacent parts, 15.20 × 15.20 × 43.10 mm) and fabric `diamond-link.stl` (5,940 triangles, one component, 7.981 × 9.241 × 8 mm). Their switch/socket and fabric interlock structures are unsuitable for planar kit interfaces, so they were rejected rather than repurposed arbitrarily. Relevant local README files were read.

Selected public design reference: **White Cat Kit Card / Printables 865769**, Mike Kasberg, [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. License fetched and SHA-256 verified: `4d2b8d07bae2cd142601f3e9abbef0d16b39f5020a539217d061aa082161a224`. See `REFERENCE-LICENSE.txt`, upstream README, `reference-analysis.json`, reproducible Python analysis, and actual cross-sections in `evidence/reference-sections.png`. Raw reference STL is not redistributed.

Actual downloaded binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. 30,616 triangles, 179.820 × 178.020 × 3.190 mm; STL has no unit metadata and mm is assumed. 27 edge-adjacent components include degenerate/duplicate pseudo-components; the full source is not wholly manifold. This is disclosed, not a repair or source-printability claim. Its actual sections at Z=.10, .215 and 1.59 mm reveal 1.60 mm sheet, four 4.50 × 1.70 mm receiver loops, and runner tops around .21/.22 mm.

**Mapped decisions:** default sheet remains the measured 1.60 mm; original bed-flat carrier construction is reconstructed with genuine CSG unions. Fragile measured .21/.22 mm runners are redesigned to .4–.6 mm, four accessible side runners per component. The measured rectangular 4.50 × 1.70 mm sockets are deliberately **not** used for rotating joints. New pivot bores = 3 mm nominal shaft + independent .20–.40 mm diametral allowance. Triangular coupler, bore spacing, comparison line, kinematic limits, protected signature and all new interfaces are original designs; no cat silhouette, private mesh, convex hull substitute, switch socket or source triangles are exported.

## Parameters (mm unless noted)

| Parameter | Supported range |
|---|---|
| Card width / height | 150–220 / 160–220 |
| Ground half-span a | 20–28 |
| Link length b/a ratio | 1.4–1.8 (dimensionless) |
| Link band | 7–9 |
| Sheet thickness | 1.6–2.4 |
| M3 diametral clearance | .20–.40 |
| Part spacing | 3–5 |
| Breakaway runner width / thickness | .8–1.2 / .4–.6 |
| Demonstrated left-link sweep | ±15 degrees, preview only |

Ground span = 2a; equal rockers b = a×ratio; coupler upper edge a; both lower sides b; triangle height sqrt(b²−a²/4). The branch is solved by actual circle intersection, not animation of disconnected parts. The ground comparison line is Y=30 mm. Computed deviation varies with ratio and is shown live; default peak over the supported sweep is about .112 mm. It is not exactly straight or a precision instrument. The UI offers three genuine presets and three ground silhouettes, undo/redo, named local designs, and bounded portable JSON round trips.

## Physical assembly and purchased hardware

**Not physically printed or tested.** Computational verification is not a claim of joint friction, force, fit, durability or tracing accuracy. This is an adult educational kit, not load-bearing.

Print card OR four clean parts flat, PLA/PETG, .16–.20 mm layers, .4 mm nozzle; no supports intended. Print one full-size link first as the bore calibration coupon. Allowance is printer/material dependent, never universal. Snip all sixteen runners in free gaps, then trim scars outside functional bores.

Required purchased items: **4 M3×16 mm screws**, low-profile heads ≤2.5 mm high/6 mm diameter; **4 M3 nylon locknuts ≤4 mm high**, **8 thin washers ≤.5 mm/OD ≤7 mm**, **4 spacer sleeves 4.0 mm long**, ID ≥3.2 mm and OD ≤6 mm; **four ≥10 mm raised feet or an equivalent raised mount**. No glue. No hardware-free version claimed. Purchased hardware is explicitly omitted from the preview/STLs.

1. Ground bolts point **DOWN**: head + washer above each lower link, sleeve between link and ground, washer/locknut below ground. This prevents protruding shafts from fouling the upper coupler; raised feet clear the downward bolt ends.
2. Lower links sit at Z=sheet+4. Rotate them inward/upward. Moving joint bolts point **UP**: head/washer below link, sleeve above link, triangular coupler above sleeve, washer/locknut above coupler. Coupler pointed witness end faces down toward ground centre. Its lower face is Z=2×sheet+8. Both 4 mm gaps are preserved; washers sit outside them.
3. Locknuts retain each joint without clamping motion rigidly. Open through-bores permit vertical assembly/disassembly. Observe the lower 2 mm witness hole while guiding ±15° from symmetric rest. There are **no physical hard stops**; do not force over-centre. Printed plate collision checks and purchased hardware envelopes were sampled across the supported range, not friction or fatigue simulation.

## Image / SVG / text / icon workflow

PNG/JPEG ≤2 MB, ≤12 MP, ≤6,000 px side, normalized locally to ≤500 px. Simple self-contained SVG ≤2 MB/2,000 elements is rasterized locally to 256 px; scripts, active/external resources and unsupported elements are rejected. Six bundled original SVG icons and up-to-eight-character text rasterize via the same path.

Exact method: fit/cover + ±25% crop offsets, light/transparent or inverted dark background, luminance sampling to a **20×20 grid**, threshold 1–254 or grayscale relief. A closed triangulated height solid is Boolean-subtracted from the protected ground signature disc at (0,8). Engraving .4–.6 mm leaves ≥1 mm backing. Physical footprint 4–7 mm; rotation ±180°; X ±1.5/Y ±2 mm, checked against the 5.8 mm keep-in radius. The source and actual checkerboard cutout are shown. Bright holes remain unengraved; a ring sample's centre and recessed band are probed in the final solid. This is sampled **2D-to-relief**, not exact vector contour tracing or full 3D reconstruction from one photograph. Raised decoration is deliberately unavailable to preserve the layered mechanism envelope. Imports visibly and measurably change exported CSG geometry, not textures.

## STL import / privacy / recovery

Actual ASCII and binary STL parsing; ≤2 MB, ≤1,500 triangles, .2–250 mm per source axis. Supported contract is explicitly bounded: one connected, closed, outward-wound **convex broad flat-bottom solid**, no overhang beyond bed footprint. Open/nonmanifold, concave, hollow, self-intersecting, disconnected, degenerate or unsupported meshes are rejected with guidance, not repaired or replaced by a hull. Convexity is a rejection test; output integration uses the actual source triangles.

Choose Z/Y/−Z up before attachment, explicitly confirm **millimeter assumption**, inspect source dimensions and 3D mesh. XY scale preserves aspect ratio to footprint; independent Z scaling sets engraving depth; rotate, centre/place inside the protected ground zone. Replacing/removing/resetting is recoverable. Up-axis change requests reattachment. Empty images, invalid dimensions/transforms, excessive content, malformed JSON and missing portable images block stale exports. User files stay entirely on-device, never uploaded or saved to repository. JSON/named saves contain bounded normalized image or mesh payloads; missing payloads explicitly request local reattachment. Only synthetic sample assets are bundled.

## Verification

`node validate.mjs`: independent binary-STL checks of nonempty/finite/nondegenerate triangles, stored normal direction, 1e−5 mm welded opposite edge incidence, positive volume of **every** component, mm bounds and layout. Actual CSG checks: connected carrier, sixteen accessible cuts leave exactly carrier+four intact parts, every aperture remains open, no part overlaps, support-free section footprints, continuous 1 mm engraving backing, real kinematic closure, separate plate collisions, sleeve/head/shaft/nut keep-outs and vertical assembly paths. All presets, supported parameter extrema, silhouettes, image-derived and STL-derived variants run through the same checks.

Browser scripts exercise production worker/WASM paths, PNG/JPEG/ASCII/binary file pickers and real downloads, parameter changes, pixel/threshold/depth/scale/rotation/placement effects, per-part STL and ZIP contents, source reset/removal/replacement, SVG holes, text/icons, JSON/local storage, undo/redo, themes, stale async imports, worker abort/reload, invalid inputs, touch orbit/pinch and 320/390/480 px layouts. UI/download fingerprints compare exact printable bytes. Browser/Node coplanar tessellations may choose different diagonals; regenerated portable designs are compared with actual Boolean symmetric difference <.003 mm³, separately from exact preview/download equality. See JSON reports and `VALIDATION.md`. No physical print testing is implied.
