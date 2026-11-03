# Flux Dial — magnetic indexing fidget studio

A distinct reference-grounded **magnetic alignment fidget**, not a keycap, ratchet, slide rail or kit-card reskin. Two facing rotors contain rings of 4, 6 or 8 magnets. Turn them independently around a retained M3 axle; aligned opposite poles are expected to favor corresponding angular stations. **Magnetic force, physical printing, adhesive containment and fit have NOT been tested.** The manual pose slider is not a magnetic simulation.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React/Vite, Three.js/OrbitControls, Manifold WASM in a module worker, fflate, locally bundled Fontsource Fredoka/Rubik. No CDN, backend, paid service or API key. Root monorepo deploy publishes the combined site; per-app deploy scripts are installed as required. `base: /daily-app2/20261103-20/`.

## Existing STL reference inspected first

Local read-only `screw_container_generator/obj_1_Top.stl`: **ecf8cb386c40f92f574eefb619671927b5bfbdd2b40ee06161db5e30fa46f1a7**, binary STL, **38,978 triangles**, **109.45417 × 108.66166 × 39.16832 mm**, one closed edge-connected shell, zero non-two-incident edges. Units assumed mm, corroborated by that project's README; STL itself has no units. Actual section loops inspected at 0.5, 10 and 30 mm above source minimum. At +30 mm outer/inner X boundaries imply **2.499 / 2.500 mm** walls.

The source is a hollow enclosure with a recessed receiving mouth, not a solid stock cylinder. We reconstruct the receiver/closure relationship and preserve a 2.5 mm minimum annular rim. Instead of a single storage cavity and source threads, the new solid contains multiple blind magnet wells under two adhesively bonded flat closures. Magnet, M3 and closure tolerances are NEW proposed fits, not measured source interfaces. The organic source silhouette, raw mesh and source screw threads are not reused. Measured body size is not scaled into an alleged exact replica.

`obj_2_Bottom.stl` was also parsed: actual bytes contain 28,568 triangles, 415 edge-connected components and 423 defective welded edges at 0.0001 mm weld tolerance, despite its kernel status. It was rejected rather than called repaired. This differs from the source README's stale count; see `reference-measurements.json`.

Raw source redistribution permission is not established. **No third-party/reference mesh is bundled**. `reference-inspect.mjs` reads those original local files and produces scalar measurements. `reference-view.cjs` renders actual sampled contours from a temporary analysis file into a raster evidence image. See `reference-analysis.json` for mappings and `evidence/reference-sections.png` for measured sections. Local fabric and switch collections were considered by project README; their link/switch mechanisms are inappropriate to this enclosure adaptation.

Visual/interaction reference: read-only `keycap_generator2` README, styles, App, Viewer and geometry/import/export/worker modules inspected. Concrete patterns used: 374 px left rail, compact brand/theme, collapsible sections, paired mm sliders/numeric fields, raised/pressed tactile buttons, lavender-grey/white/coral light theme, saved dark theme, preview-first phone, checked worker builds and current-state export gates. No source history or dependencies copied wholesale. Shared local studio import/serialization/UI helpers were reused from earlier Daily App Lab apps; **the magnet carrier geometry, closures, parameter model and mechanism checks are new**.

## Hardware, fabrication and assembly

Five printable parts: signature carrier, matching carrier, two separate closures, sacrificial fit coupon. Every STL is bed-aligned; carriers print outer face DOWN, open magnet wells UP; lids print flat. Export is a nonoverlapping five-part plate or an isolated part. ZIP includes every part, portable JSON and numbered `ASSEMBLY.txt`. No fake 3MF or STL-colour claim.

Required: 2 × chosen seat count of **Ø6 × 3 mm axially magnetized disc magnets**; **M3 × 25 mm screw**, two metal outer washers, **nonmagnetic nylon washer/spacer stack equal to the selected face gap**, M3 nylon-insert locknut, and compatible two-part epoxy. Washer/spacer OD ≤9 mm. Magnets and hardware are not meshes or exports. The fit coupon tests the actual new magnet pocket and M3 bore, not a complete reduced-size product.

Print coupon first; calibrate allowances for printer/material. Put the same pole outward on all magnets in carrier A and the opposite pole outward on B. Bond magnets inside blind wells and permanently bond covers into their annular seats; fully cure. Stack metal washer, carrier A, selected nylon spacer, carrier B facing A, washer and locknut. Leave rotation free. Do not rely on a friction-fitted cover; inspect bonded containment before every use. Adult maker prototype: loose small magnets are ingestion hazards, and proximity to medical devices/electronics must be avoided. No claim of certified containment or adhesive durability. Without magnets the parts can be manually turned on the axle, but have no magnetic detents; no equivalent hardware-free retained magnetic mechanism is claimed.

PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls. No supports intended other than short bridges above shallow bed-facing art. Inspect slicer contact and pocket clearances. Physical print, fatigue, force and bond tests remain unperformed.

## Parameters (all lengths millimeters)

- Grip diameter 44–60; circle, hexagon or octagon (real solids); smooth edge or eight real tactile ribs. Ribs can extend the final envelope beyond the nominal core diameter; live final dimensions include them. Both rotors have a recessed orientation witness.
- Magnets per rotor 4/6/8; nominal indexing 90°/60°/45°.
- Pocket diameter allowance .15–.4; pocket depth allowance .1–.3.
- Closure diametrical allowance .15–.4; closure thickness 1–1.4.
- M3 bore diametrical allowance .2–.5; nominal axle 3.
- Face-to-face gap .4–1; outer floor 2.5–3; minimum rim wall 2.5.
- Neighboring magnet wall ≥1.2; artwork leaves ≥1.9 of closed floor.
- Three real presets, constrained variation, undo/redo, six local named designs, bounded portable JSON save/open.

## Image → actual geometry

PNG/JPEG file picker and drop, or simple SVG/text/bundled searchable icons. 2 MB maximum; PNG/JPEG ≤12 MP, ≤6,000 px side. Content headers and dimensions checked before decoding; normalize to ≤500 px. Simple SVG ≤2,000 allowed elements; scripts/references/external resources rejected; rasterize locally to 256 px. Fit/crop, ±25% pan, background light/dark/invert, threshold 1–254 or grayscale relief. Checkerboard shows the actual **20×20 sampled height field**; this is 2D-to-relief, **not a reconstruction of a full 3D object from a photo**. Bright holes remain uncut backing. Piecewise triangular interpolation means threshold edges are sloped over approximately one grid cell, not exact vector tracing.

The bounded closed height mesh is Boolean-subtracted from a protected outer carrier patch at Y=-10. Footprint 4–7 mm; depth .4–.6; rotation ±180°; X ±1.5/Y ±2 mm. Keep-in radius 6.5 mm prevents axle obstruction and outer breaches. Empty silhouettes and unsafe placements disable export. Raised marks are intentionally unsupported to preserve floor integrity and bed contact. Source and actual cutout previews, reset/replace/remove and return-to-built-in defaults work.

## STL → actual geometry

ASCII and binary `.stl`, 40 bytes–2 MB, ≤1,500 triangles, dimensions .2–250 mm/axis, bounded finite coordinates. Show source preview, dimensions, triangle count and format. Choose Z/Y/−Z up before attaching, explicitly confirm coordinates are mm (STL lacks units), then XY-scale proportionally to a 4–7 mm footprint, fit Z independently to .4–.6 mm engraving depth, rotate/center/place. The **exact accepted source triangles**, not a replacement convex hull, Boolean-cut the carrier's safe grip patch. Imported geometry visibly affects final STL. This is a meaningful machined recess, not unchanged mesh export.

Contract intentionally supports one outward closed **convex, broad flat-bottom solid without overhangs**; unsupported concavities/cavities/branches are explicitly rejected, not discarded. Parser checks welded directed edges, adjacency, signed volume, triangle intersections, half-space convexity, dimensions and bed footprint before CSG. No automatic repair is claimed. Raw buffers are sent to the worker for heavy checking. Portable restoration revalidates STL topology. Missing image payload requests reattachment rather than pretending an asset exists.

All files stay local; sample fixtures are synthetic CC0 (`public/samples/ATTRIBUTION.txt`). No personal uploads written to repository or sent to services. Named designs live on this device; JSON contains bounded image/mesh payloads up to 2 MB.

## Validation and limits

`validate.mjs` independently parses actual float32 binary STL, checks count/length, finite nondegenerate faces, consistent unit normals/winding, welded edges with exactly two opposite incident triangles (1e-5 mm weld), positive volume for EACH connected component, bounds and bed Z. Every preset, single parameter extremes, simultaneous extremes, grip shapes and image/STL variants pass the same tests. Five separate plate components must not intersect.

Independent CSG tests sweep 0–360° in 10° steps, check axle and 6×3 magnet gauges, blind floors, annular cover landing, axial insertion and washer keep-out. Coplanar intended bonded body/cover interfaces allow 0.0001 mm³ numerical intersection from float32 serialization; other moving/plate intersections limited to 0.00001 mm³. These are numerical geometry tests, NOT force, continuous contact, fatigue or adhesive proof. Preview and STL use the exact valid worker result; current-state keys, debouncing and request ids disable stale exports. Worker loading failure is actionable and recoverable by reload.

Browser scripts exercise real picker uploads, PNG/JPEG/ASCII/binary exports and byte signatures, dimensions and assembly checks on each downloaded variant; text/icons/SVG hole probes, replacement/removal/reset, malformed/open/nonmanifold/concave meshes, empty images, excessive inputs, invalid transforms and missing portable payloads. Test named saves, JSON, undo/redo, all views, per-part and ZIP exports, saved theme, focus, section collapse, phone preview-first layout at 320/390 px, touch orbit/pinch and no external generation requests. Production build is served under its exact base path and staged root deployment is checked before publication. Reports and screenshots are stored beside the app. See VALIDATION.md for final results.
