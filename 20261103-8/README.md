# Thales & Corner

An original browser-local **five-part flat-pack kit-card generator**. Snip 20 real breakaway runners, fasten two slotted arms to the endpoints of a semicircle and join their slots at one of seven arc holes. The ideal included angle stays 90° (Thales’ theorem). This differs from the previous parallax sights, rolling-circle apparatus and retained-link fidgets: the common apex is **discretely re-bolted**, not continuously driven or captive. All printed geometry is reconstructed parametrically. Image and STL imports become actual Boolean-cut signature recesses in the fixed stand apron.

**Required external hardware:** 3 × M3×12 mm machine bolts and 3 × M3 nuts; external metal washers recommended for clamping slots. A sheet-thick printed spacer is included. Adhesive may be needed only at the fixed stand feet. Hardware is omitted from the preview, not supplied as imaginary printed bolts. No physical printing, fit, accuracy, strength or operation test has been performed. An adult teaching/craft kit, not a certified angle tool or small-child toy.

## Run, build and checks

Node 22.12+, `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; publication uses the ROOT combined deploy flow. Vite base `/daily-app2/20261103-8/`. `python3 serve.py --port 5759` serves production at that prefix; `--staged` serves the combined deploy. `node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`, `node hole-check.mjs` save reproducible validation reports. See VALIDATION.md for actual executed outcomes, not inferred claims. `TEST_BASE` overrides supported test servers. No API/account/remote font/CDN/model service.

## Reference-first evidence and attribution

Local meshes under `/Volumes/ExternalHD/3d_printing_apps/` were inspected first. Keycap Studio’s actual three-solid clicker template and Weave’s actual diamond-link template were parsed with dimensions/components/hash, and their project READMEs inspected. Neither is a suitable sheet-card/socket reference; rejection details are in `reference-measurements.json`. Both trees remain read-only.

Selected reference: Mike Kasberg’s **White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README/LICENSE and actual binary STL downloaded anew for this run before final geometry implementation. License retained in REFERENCE-LICENSE.txt. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, 179.820 × 178.020 × 3.190 mm, assuming mm (STL has no unit metadata). 27 edge-adjacent components with source defects: the source is not globally watertight. We use measured structure, **not an automatically repaired template**. Source artwork and raw mesh are not redistributed.

`reference-measure.py /path/to/reference.stl` reproduces parsing/sections with Python trimesh/numpy/matplotlib/scipy/shapely/networkx. Measured sections at Z=.10,.50,1.59 mm are in `evidence/reference-sections.png`. Hash, bounds, per-component sizes, unit assumption, wall/sheet planes, sockets and low-runner planes are recorded. `reference-analysis.json` distinguishes measurements from redesign.

**Measured:** 1.60 mm sheet; four 4.50 × 1.700012 mm source sockets; low runner planes .21/.22 mm. **Preserved defaults:** 1.60 mm sheet and 4.50 × 1.70 mm through-sockets. **Proposed:** 4.40 × 1.60 mm tongues provide .10 mm TOTAL printer-dependent allowance; .4–.6 mm thicker runners. Original semicircle/slot arms/spacer, 5-row carrier, foot shoulders, bolt bores and personalized apron are new, not source measurements. No universal fit claim.

Visual reference inspected read-only: Keycap Studio README.md, src/styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts, imageTrace.ts and geometry/stl.ts. Concrete applied patterns: 374 px left scrolling rail/sticky compact header, collapsible labelled controls, paired mm sliders/numbers, lavender desk/white panels/coral pressed keys, locally bundled Fredoka/Rubik, saved dark theme, source/checkerboard cutout previews, import transforms, worker/current-result gating and phone preview-first stack. Existing gallery import/studio/serializer infrastructure selectively adapted; not the reference project’s dependency tree or Git history. Mechanism construction, constraints and independent collision checks are new.

## Geometry, parameter ranges and fit

All linear dimensions **millimeters**; angles degrees.

| Control | Supported range |
|---|---|
| Card width / height | 140–180 / 180–220 |
| Semicircle radius | 24–32 |
| M3 bore diameter | 3.4–3.8 |
| Sheet | 1.6–2.4 |
| Part spacing | 3–5 |
| Tab width / thickness | .8–1.2 / .4–.6 |
| Socket TOTAL allowance | .10–.25 |

Five parts: fixed stand, semicircle board, left slot arm, right slot arm and right-pivot spacer. Each is a distinct closed solid after de-tabbing. The carrier/dividers and 20 accessible runners actually join them into one connected card. Too-small cards are blocked, not silently overlapped or resized. Three real geometry presets/model thumbnails; soft/square/clipped stand silhouettes, bounded variations, undo/redo, six local named designs and portable JSON.

Board endpoints A=(-R,0), B=(R,0); apex P=(R cosθ,R sinθ), θ=45,60,75,90,105,120,135°. (A−P)·(B−P)=0. Slots centerline range .7R–1.9R covers all endpoint-to-apex spans (minimum .765R, maximum 1.848R). Arms are 8 mm wide with side walls ≥2.1 mm. Actual polygonal bores include positive M3 clearance. Three external bolts/nuts clamp the chosen arrangement. It is **not continuously constrained between holes**; remove the apex bolt before relocating. Slot play, bolt size and printing errors affect the included angle.

The lower arm lies directly against the front of the board. The upper arm lies one sheet higher, supported at its endpoint by the included spacer and at the apex by the lower arm. Face contact is intentional; solids have zero volume overlap. Two board tongues enter the stand’s source-derived through-sockets, shoulders down. Stand apron preserves ≥1 mm backing under art; holes/slots/fit surfaces cannot be customized away. Preview uses exact printed part transforms; external fasteners omitted and exploded offsets labelled illustrative. All exports use real bed-flat geometry, never assembled overlap.

## Printing and assembly

1. First print a clean base/board to calibrate tongue/socket fit and M3 bores; proposed allowances depend on printer, material and elephant foot.
2. Print all parts face-down/bed-flat at Z=0, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls, 100% millimeter scale. No supports intended. Solid top/bottom layers recommended for thin sheets. No compliant spring or fatigue-performance claim.
3. Snip 20 runners 1.8 mm beyond the part edge, then file stubs flush without harming tongues, slots or bores. Prefer individual clean STLs when testing fit.
4. On a flat board, bolt the lower arm at the left endpoint. Put the spacer at the right endpoint, then bolt the upper arm over it. Use metal washers/nuts as needed; tighten gently.
5. Bring the two slots over one common arc bore, insert the third M3 bolt through both arms and board, and clamp gently. All three bolt axes are clear through their corresponding plates. Change position only after removing the apex bolt.
6. Seat the board tongues in the stand; shoulders contact the top face. Glue only fixed feet if loose and cure. Computational insertion checks cover the stated assembly sequence. Physical fit, stability and strength remain untested.

## Image → real geometry

PNG/JPEG plus simple safe SVG;≤2MB,≤12MP,≤6000px/side. Headers validated before decoding; longest side normalized≤500px. Fit/crop and X/Y pan then sample a20×20 luminance grid. Remove light background or invert dark background, threshold1–254 or grayscale relief. Transparent pixels composite against the chosen background. Actual cutout shown on checkerboard; source shown separately. Simple SVG is sanitized (≤2000elements, no scripts/text/effects/external resources) and locally rasterized256px before the same conversion.

The sampled height field is triangulated and closed, transformed, then **Boolean-subtracted** from the protected front deck apron. .4–.6mm depth preserves≥1mm sheet backing. Bright image holes remain unengraved/backed. This is **2D-to-relief/silhouette conversion**, not automatic full3D reconstruction or exact contour tracing. Small text may need fewer letters/larger scale. Up-to8-character text and six searchable bundled vector marks (heart/sun/wave/star/circle/plus) use this same geometry path. Style is deliberately engraved only to preserve flat-sheet envelope. Preview colours are not stored in STL.

Artwork footprint4–7mm, rotation±180°, X±1.5mm/Y±2mm; all vertices must stay within6.5mm radius around the apron center. Source pixels, threshold, relief depth, fit/crop and placement measurably change exports. Empty art and unsafe transforms block export. Replace/remove/reset and return-to-defaults supported. No personal files saved in repository.

## STL → real geometry

Binary and ASCII STL≤2MB/1500triangles; each source dimension.2–250mm. Explicit confirmation of millimeter coordinates is mandatory because STL has no unit metadata. Z/Y/−Z up before attaching; changing axis clears source and requests reattachment. Source mesh and oriented dimensions/triangle count shown. Proportional XY scale maps it to4–7mm footprint; independent Z scale maps to.4–.6mm engraving depth. Actual scale factors, rotation, center/placement/reset provided.

The **actual transformed solid** becomes a protected deck recess through Manifold Boolean subtraction. This is not unchanged re-export, a texture, interpenetrating shells, or a convex-hull replacement. Supported: one closed/outward-wound/positive-volume convex broad-flat-bottom non-overhanging mesh. Open/nonmanifold/inward/degenerate/concave/hollow/multipart/overhanging meshes and unsafe scale are rejected with actionable errors; no generic repair claim. Convex-hull footprint is used only as an input validation predicate, never substituted into output. Minimum scaled XY span1.2mm. Source geometry integration cannot touch arm/bolt interfaces or sockets.

## Meshing, views, exports and privacy

Locally bundled Manifold WASM/Web Worker performs genuine solid unions/subtractions. No convex-hull substitution. Bounded detail, 100 ms debouncing, request sequence/stale-result guards, building/success/error and worker failure gating. Preview and STL share the exact current valid result with a byte fingerprint. Invalid input immediately disables every export; a visible last-good preview is labelled, not silently exported. No arbitrary STL repair is promised.

Views: connected card, de-tabbed plate, assembled, exploded, every isolated part and see-through board. Touch orbit/pinch, fit/top/zoom controls. Discrete apex pose affects preview only because the board includes all seven bores. Binary per-part/card STL and Everything ZIP with six STLs (connected card + five clean parts), portable design JSON and numbered/current-fit instructions. ZIP is not 3MF; STL has no color metadata.

Every edit checks finite coordinates, nondegenerate triangles, consistent outward winding, positive volume and closed-manifold edge incidence at 1e-5 mm vertex-weld tolerance. Independent tests parse float32 STL bytes, every component’s signed volume, stored normals and expected millimeter bounds; card and translated clean layout are tested separately. Mechanical tests are independent: all seven mounts, slot reach, right-angle dot product, M3 shank clearance, thread engagement, noninterference, layered arm insertion in assembly order, board tongue insertion, 20 accessible tab cuts releasing carrier+five undamaged parts, and bed-supported upper cross-sections. These are geometry calculations, **not physical print validation**.

All user files processed locally in browser, never uploaded or saved in the repository. Bounded portable JSON includes pixels and verified meshes; missing payloads require explicit reattachment. Public bundled fixtures are original synthetic PNG/JPEG/SVG/ASCII/binary STL samples, not personal uploads or source meshes. Dependencies: React,Vite,Three.js,Manifold3D,fflate,Fontsource Fredoka/Rubik; fonts SIL OFL, Manifold Apache2.0. No remote runtime dependency.
