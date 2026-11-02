# Taut & Parabola

A React/Vite maker studio for a **three-part, bed-flat kit card**: a directrix guide, an elevated sliding square and a thin focus pad. Snip twelve real runners, tape the fixed parts onto paper and use an external taut string and pencil to trace a parabola. This is a physical assembly generator, not a browser game or a full 3D photo reconstructor.

## Reference evidence and adaptation

Actual geometry reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README/license are recorded locally. Download URL, SHA-256, dimensions, component measurements, source defects and sampled cross-sections are in `reference-analysis.json`, `reference-measurements.json` and `evidence/reference-sections.png`.

The downloaded binary STL was parsed rather than inferred from a listing image:

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; bounding size **179.820 × 178.020 × 3.190 mm**. Millimeters assumed and corroborated by source sheet construction; STL contains no unit metadata.
- 27 edge-adjacent components; the source contains degenerate/nonwatertight fragments. This is a design reference, **not** a repaired/re-exported mesh.
- Measured sheet planes at **0 and 1.60 mm**; thin runner planes **0.21–0.22 mm**; sheet sockets **4.50 × 1.70 mm**.
- Preserved: 1.60 mm default sheet and genuinely connected, divided carrier/low-runner construction. Proposed changes: runners strengthened to 0.4–0.6 mm, 2.4 mm carrier rails, new three-part tracer geometry. The source sockets are **not** imposed on this unrelated sliding assembly.
- New design decisions, not measurements: 1 mm focus pad, ≥0.6 mm ruler underpass, 0.15–0.35 mm fence gap, 12 removable runners, engraved protected apron. No raw reference STL is distributed.

Local clicker and fabric-link STL candidates were also parsed and rejected for a sheet kit; their hashes, sizes and reasons are recorded. All reference trees remained read-only.

Visual/interaction reference: the read-only `keycap_generator2` README, styles, App, Viewer, worker, STL, image and export modules were inspected. The studio uses its concrete 374 px left control rail, collapsible sections, paired numeric/sliders, tactile selected buttons, checkerboard conversion preview, saved dark theme, right-side viewer and preview-first phone layout. It does not copy switch sockets, Git history or dependencies wholesale. Shared bounded import/studio utilities from earlier daily apps are reused; the physical model and its assembly tests are new, not a reskin of the conchoid, compass, catenary or packing kits.

## Mechanism and assembly

An open fence guides the square's shoe along a guide floor. Its ruler is elevated by the sheet thickness; the 1 mm focus pad sits underneath, so it cannot block a sweep through x=0. Thread ≤0.3 mm exits a recessed channel; tape tails below the pad, never make a knot in the underpass. The square is **hand-guided and lift-off, not captive**. No snap retention, universal fit or structural loading claim is made.

Ideal planar construction, using a virtual directrix y=0 and focus (0,f):

`H − y + sqrt(x² + (y − f)²) = H`, hence `y = (x² + f²)/(2f)`.

Free cord length equals anchor height H, not the overall ruler length. The vertex is f/2. Actual assembly y coordinates include the chosen fence gap. Thread and pencil lines are **preview-only ideal aids**, never plastic in the STL. Finite pencil radius, cord/eye width, nonplanar thread, friction and hand alignment introduce error. This is an approximate educational drawing kit, not a precision instrument.

1. Print at 100% mm, flat in the supplied orientation; PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls. No supports intended. Inspect in your slicer.
2. Snip 12 runners about 1.8 mm outside the pieces and file stubs flush without cutting functional edges. Clean per-part exports omit runners.
3. Tape the guide to paper, apron towards you; drop the square onto its floor. Maintain gentle pressure towards the fence and respect engraved stroke marks. Calibrate with the clean guide/square first.
4. Tape the focus pad at (0, f+gap), feed thread through its 1.8 mm hole and tape the tail below it. Keep the recessed exit and ≥0.6 mm underpass unobstructed.
5. Set free string length to H and anchor its other end at the ruler's open left-edge notch. Run the crossing thread under the ruler. Catch the string with a fine pencil against the left ruler edge, tension gently and sweep. Do not force thread through solid plastic.

External requirements: **thin nonstretch cord, fine pencil, paper and removable tape**. No glue, bearings, magnets or metal hardware. `ASSEMBLY.txt` and the exported ZIP contain the detailed numbered guide. No physical print, drawing accuracy, force, durability or friction test has been performed.

## Parameters

All physical dimensions are **millimeters**; rotation is degrees. Impossible combinations block exports.

| Parameter | Supported range |
| --- | --- |
| Card X / Y | 170–220 / 160–200 |
| Guide span | 100–130 |
| Anchor height / free string length | 55–75 |
| Focus to directrix | 12–18 |
| Half stroke | 22–30 |
| Ruler width | 6–9 |
| Sheet / floor | 1.6–2.4 |
| Proposed fence gap | 0.15–0.35 |
| Part spacing | 3–5 |
| Breakaway runner width / thickness | 0.8–1.2 / 0.4–0.6 |
| Focus pad (fixed) | 1.0 |
| Engraving depth | 0.4–0.6, ≥1 mm apron backing |

Three real presets have model thumbnails; guide/focus-pad silhouettes can be rounded, square or clipped. Changes alter printable geometry, not just preview color. No arbitrary press-fit control is added to an open sliding fence.

## Local image and SVG import

PNG/JPEG ≤2 MB, ≤12 MP and ≤6000 px per side. Headers are checked before decoding, a bounded ≤500 px PNG payload is retained for portability, and **20×20** luminance samples drive a closed triangulated height field. Threshold mode uses a dark/light mask; grayscale mode uses depth × (1−luminance/255). The field is Boolean-subtracted into the guide apron. Interpolation forms slopes between sample values: this is sampled **2D-to-relief**, not exact vector tracing and not reconstruction of a complete 3D object from one photo. Bright holes retain backing material; the cutout is shown on a checkerboard.

Controls: threshold, invert light/dark background, grayscale relief, contain/cover fit, crop shift ±25%, 4–7 mm footprint, depth, rotation and XY placement. Engraved-only is deliberate: raised features would interfere with the flat apron workflow. Text (8 characters) and six searchable bundled icons use this same real geometry path.

Simple SVG fills/paths are rasterized locally to 256 px, then sampled through the same converter. ≤2000 elements; external resources, scripts, references, effects and embedded content are rejected. Flatten text before import. Ring-hole preservation is tested. No remote SVG/image/font URLs are fetched.

## Local STL import

Actual ASCII and binary STL, ≤2 MB, ≤1500 triangles, each dimension 0.2–250 mm. Explicit millimeter confirmation is required. Choose Z-up, Y-up or inverted Z **before attaching**; changing orientation clears the file and requests reattachment. Source dimensions, triangle count, format, source preview and exact scale factors are displayed. XY scales proportionally to a 4–7 mm footprint; Z independently fits the 0.4–0.6 mm engraving depth. Rotation, center/reset and bounded XY placement affect the exported Boolean cutter.

Supported contract: **one outward, closed, convex, broad-flat-bottom solid without projected overhangs**. Checks include finite coordinates, dimensions, degeneracy, welded edge incidence/directions, positive volume, connectivity, pairwise triangle intersections, convexity and bed contact. Concave, hollow, open, nonmanifold, branched, unsupported or overly complex inputs are rejected with guidance; no hull replaces the mesh and no arbitrary repair is claimed. A hull is used only to validate the bottom footprint, never for generated geometry. Original verified triangles become the real apron engraving cutter. The protected 6.5 mm-radius zone and ≥1 mm backing keep imports away from moving interfaces.

All files stay in this browser. There are **no uploads, API keys, paid services or CDN runtime imports**. Bundled samples are synthetic PNG, JPEG, SVG, ASCII STL and binary STL, not personal/source meshes. See `public/samples/ATTRIBUTION.txt`.

## Studio, views and exports

- Interactive local Three.js orbit/zoom/fit/top view and touch orbit/pinch; assembled, exploded, connected card, de-tabbed plate and isolated parts.
- Heavy CSG/validation runs in a Manifold WASM worker with bounded complexity, debouncing and request IDs. Current parameter/asset keys gate export immediately. An invalid edit may leave a last-good preview **explicitly labelled**, but cannot export it.
- Undo/redo, up to six named local designs, portable JSON save/open. Bounded normalized image and verified mesh payloads are embedded; missing image payloads explicitly request reattachment. Local storage is origin/device-specific, not cloud backup.
- Binary STL for connected card, each clean part and de-tabbed plate. Everything ZIP contains four STLs (card plus three clean parts), portable JSON and numbered assembly instructions. STL stores neither colors nor unit metadata. There is no fake 3MF.
- Preview and exports use the same current valid mesh, with displayed binary-mesh fingerprints independently compared against real downloads. Views/ideal cord placement never alter print orientation.

## Run and verify

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve.py # actual dist served at http://127.0.0.1:5738/daily-app2/20261102-38/
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
node stale-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
```

`npm test` verifies defaults, all three presets, silhouettes, representative extrema and image/STL-derived geometry. Independent binary-STL parsing checks finite, nondegenerate outward triangles, positive volume **per connected component**, millimeter bounds and two opposite-directed incident faces per welded edge (1e−5 mm). Assembly checks sample 41 positions through the supported stroke, shoe support, focus underpass, constant-length ideal string law, lift-out path, nonoverlapping plate layouts, carrier envelope, 12 safe runner cuts and bed-supported slices. Float32 floor height is reused for assembly transforms to avoid false microscopic intersections at a shared contact plane.

Browser scripts exercise actual file pickers and downloads from the production build: PNG/JPEG, ASCII/binary STL, threshold/depth/crop/transform geometry changes, malformed/empty/unsupported files, reset, mm gating, source orientation, per-part and ZIP parsing, asset JSON round trips, named designs, undo/redo, rapid stale edits, worker abort/recovery, six icons, SVG holes, drag-drop, every preset, desktop layout, 320/390 px overflow, touch orbit/pinch, theme persistence and focus. Reports/screenshots are saved beside the app. Computational checks do **not** establish physical printer fit or real tracing accuracy.

Dependencies: React, Vite, Three.js, Manifold 3D, fflate, Fontsource Fredoka/Rubik, gh-pages; Playwright for browser verification. Fonts are locally bundled (SIL OFL); Manifold Apache-2.0, Three.js MIT, fflate MIT; see installed packages for licenses.

Individual scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication of the combined gallery uses the **root** monorepo predeploy/deploy flow.
