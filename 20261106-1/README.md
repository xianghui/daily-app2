# Ceva & Concur

A browser-based parametric **four-part kit card**: three slotted rulers pivot about a triangle and share a movable M3 pin. Move the pin gently around the central engraved orbit to see concurrent centerlines. This is a two-degree-of-freedom hand-guided coordinator, **not a crank-driven trajectory** or precision drafting instrument. It is distinct from the gallery's closed-loop linkages: each ruler independently rotates and the common pin independently slides in all three slots.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
```

Production base: `/daily-app2/20261106-1/`. All generation, image conversion, STL parsing, preview and export run locally. React + Vite, Three.js/OrbitControls, Manifold WASM in a worker, fflate ZIP, local Fredoka/Rubik fonts. No CDN, API, upload or key. Shared studio/import/export infrastructure is adapted from prior local daily apps, **not their mechanism geometry**. Keycap Studio's README, App, Viewer, styles, worker, STL/image import and export code were inspected read-only: compact left rail, tactile selection keys, checkerboard cutouts, imported-source preview, exact-result exports and right-side view modes informed this UI. No reference project dependencies/history were copied wholesale.

## Actual mesh reference

**White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. Upstream README/license are recorded in `evidence/`; the source artwork and STL are **not redistributed**. Fresh upstream STL download returned HTTP 403; accessible cached public bytes at `/tmp/20261103-white-cat.stl` were freshly parsed, not inferred from an old description.

SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 assumed mm (STL has no units), two edge-adjacent components and 57 anomalous edges. No source triangles reused, repaired or claimed printable. `reference-analysis.py` reproduces parsing, SHA, bounds, components and cross-sections. Actual sections at Z=.100/.215/1.590 mm are in `evidence/reference-sections.svg` and PNG.

Measured: **1.60 mm principal sheet**, **.21–.22 mm runner tops**, **4.50 × 1.70 mm sockets**. Retained: pierced bed-flat sheets, outer connected carrier, interior bay dividers and accessible low breakaway connections. Redesigned: source slot/tongue assembly becomes external M3 pivots/slots; runners strengthened to .4–.6 mm. Source socket sizes are recorded but **not imposed on unrelated pivot joints**. New bolt clearances, gaps and ruler dimensions are proposed designs, not reference measurements. Local MX templates and diamond fabric were parsed and rejected as inappropriate switch/interlocked-fabric construction. Concrete decisions are in `reference-analysis.json`.

## Controls / construction (all lengths mm)

- Triangle base 56–76, height 40–56; ruler reach 62–82; actual ruler width 9.
- M3 bore/slot width = 3 + .20–.40 total clearance, printer/material dependent.
- Slot centerline 12 to reach−5, tick marks every 5 mm are real engravings.
- Sheet 1.6–2.4; card 150–210 × 190–240; part spacing 3–5.
- Four accessible runners per part; width .8–1.2, height .4–.6; actual connected card, not loose pieces next to a frame.
- Three ground silhouettes (round/chamfer/scallop), three live model-thumbnail presets; undo/redo, six local named designs, bounded portable JSON save/open.
- Ground center personalization is limited to radius 5.8 and .4–.6 engraving depth, leaving >=1 mm backing. Invalid combinations disable export while an explicitly labelled last-good preview can remain visible.

### Movement, Ceva and required hardware

A=(-base/2,0), B=(base/2,0), C=(0,height). Sample P=(4 sin θ,.4 height+4 cos θ) remains within the triangle and away from slot ends. Ideal extended centerlines through P obey Ceva's theorem (product of opposite-side ratios =1); finite slot play is not simulated. Phase control is **preview pose only**. Real physical travel has two degrees of freedom and no crank enforcement. Only the documented orbit is collision-checked, not every arbitrary hand position.

Four M3 bolts, four locknuts, eight washers; sleeve OD <=4.5, ID fitting M3. Fixed left/right/apex sleeve lengths: **4**, **sheet+8**, **2×sheet+12**. Shared pin: two **4 mm** sleeves. Washer thickness inside a gap must be subtracted from sleeve length. Required head/nut+washer envelope <=7 diameter, <=3 axial height; no protruding screw tip beyond it. Select actual bolt lengths from measured hardware. Two external **5 mm riser blocks** and tape/clamps support ground so underside heads clear the table. Hardware/blocks are not included.

Print flat PLA/PETG at .16–.20 layer height with .4 nozzle; no supports intended. Print a ruler first as full-size calibration coupon. Snip 16 runners, trim nubs, clear slots. Install ground bolts from below, then left ruler LOW / right MIDDLE / apex HIGH, with **4 mm clear face gaps**. Install shared bolt/sleeves progressively bottom-up; snug locknuts without clamping movement. No glue or snap-through installation. Consult the numbered in-app / ZIP instructions for exact stack. Print card **or** clean parts, not both. Physical fit, strength, wear, tactile operation and printing have **not** been tested.

## Image → real geometry

PNG/JPEG mandatory; simple safe SVG also accepted. File <=2 MB, image <=12 MP, <=6000 px per side, normalized <=500 px for portable storage, then sampled **20×20**. Contain/crop and ±25% pan; light/dark background polarity; threshold 1–254 or grayscale heights. Transparent pixels composite to chosen background. Threshold gives binary sampled heights, grayscale gives luminance-derived depth. A closed triangulated height cutter is Boolean-subtracted from ground. Bright holes retain original material, independently tested with a ring fixture. Checkerboard shows the actual sampled conversion. This is **2D-to-relief, not single-photo 3D reconstruction or exact outline tracing**. Scale 4–7, rotation ±180°, X ±1.5 / Y ±2 and depth .4–.6 alter the final solid. Engraved-only is deliberate to preserve flat card thickness. Text and six searchable original SVG marks go through the same real conversion pipeline. Source/final previews, replace/remove/reset and sample fixtures are provided.

## STL → real geometry

ASCII/binary STL <=2 MB / <=1500 triangles; each source axis .2–250 assumed mm. User must explicitly confirm mm because STL carries no unit metadata. Select Z/Y/−Z up before loading; source dimensions and source preview are shown. XY scales proportionally to 4–7 mm footprint; Z independently normalizes to chosen engraving depth, with displayed scale factors. Rotate and place before actual triangle-based Boolean subtraction into the protected ground zone. It is **not unchanged re-export** and no convex hull substitutes for an input body.

Strict supported contract: one outward closed manifold **convex, broad flat-bottom, no-overhang** solid. Concave, hollow, touching/self-intersecting, disconnected, open, nonmanifold, degenerate, excessive and incorrectly wound inputs are rejected with recovery guidance. A small bottom hull is used only as a *validation footprint*, never to replace geometry. Unsupported geometry is not silently repaired. Imported assets are restored through bounded JSON/local payloads; missing portable image data explicitly requires reattachment. No personal files are stored in this repository.

## Views / export / validation

Assembled, exploded, connected flat card, de-tabbed print plate and isolated parts all use the same generated meshes and assembly transforms. Pin/centerline ghosts explain the assembly and are explicitly non-exported hardware. Binary per-part STLs, connected-card STL, clean print plate and Everything ZIP (five STLs, portable JSON, SVG assembly map and numbered instructions). STL has **no colour**. No fake 3MF offered. Final X/Y/Z and exact current STL fingerprint appear in the UI. Generation is debounced in a worker, bounded, stale-result guarded and export is disabled for invalid/new/unbuilt state or failed worker.

`validate.mjs` independently parses float32 STL: exact size/count, finite coordinates, nondegenerate faces, normalized outward normals, welded edges exactly two/opposite, positive volume **per component**, dimensions and expected component counts. Tests include each part, loose plate, defaults, all presets, shapes, parameter bounds/combined extremes and image/STL-derived variants. Boolean probes check supported bed footprints, nonoverlap, card envelope, runner connectivity/release, undamaged parts, unobstructed entire slots and bores, insertion order and hardware collisions through sampled motion. Numerical weld tolerance 1e-5 mm; kernel simplification .001 mm below printable features. Browser tests exercise actual file pickers/downloads, content/threshold/depth/transform differences, exact preview and regenerated JSON signatures, errors, mobile touch orbit/pinch, theme, persistence, ZIP, stale imports and worker failure/recovery. See generated JSON reports and `VALIDATION.md` for actual outcomes. Computational checks **do not establish physical print fit, friction, wear or forces**.
