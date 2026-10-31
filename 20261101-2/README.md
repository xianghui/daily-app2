# Loop & Locus

A local React/Vite maker studio for an original **three-part string-locus drawing kit card**. Snip twelve runners, seat two T-headed posts in a personalized base, and guide a pencil around an external cord loop. Unlike the earlier optical benches, sliders and trammel linkage, this design explores the constant-perimeter path around two finite rectangular guides. It is a craft/geometry teaching kit, **not a precision ellipse instrument**.

## Run / export

```sh
npm ci
npm run dev
npm test
npm run predeploy
node serve.mjs # production assets under /daily-app2/20261101-2/ on port 5638
node browser-test.cjs
node studio-test.cjs
```

Individual scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. The collection is published by the root monorepo deployment, not individual deploy. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik are locally bundled; Playwright is a development dependency. No API, account, CDN or paid service is required. App processing is entirely local. Only bundled synthetic fixtures are fetched from this static app's own origin. UI/persistence/import utilities are adapted from the collection's shared studio implementation; geometry, assembly constraints and validation are specific to this kit.

## Inspected STL reference and redesign

**White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), CC BY 4.0. See `REFERENCE-LICENSE.txt`. Download source URL, SHA-256, format, triangle and component counts, bounds and measured sections are recorded in `reference-measurements.json`. `reference-inspect.py` reparses the actual downloaded STL; cross-section evidence is `evidence/reference-sections.png`.

Local candidates were inspected first: keycap_generator2's switch cuts/stem and fidget_fabric_generator's 8 mm link are unsuitable sheet/card references. The local kit_card_generator has no reference STL and concerns a folding house; a public licensed sheet reference was therefore downloaded and inspected instead. Existing galleries were checked read-only to avoid mechanisms already present.

Measured source: binary STL, 30,616 triangles, 179.820 × 178.020 × 3.190 mm assumed units; 27 edge-adjacent components including defective isolated faces, not watertight. Source sections at Z .1/.5/1.59 mm show sheet/card organization, **1.6 mm sheet** and **4.5 × 1.700012 mm socket** loops, with low runner planes at .21/.22 mm. The source is not automatically repaired, re-exported or bundled. No source art is used.

We reconstruct a new mortised drawing base and two T-headed guides. The **4.5 mm tongue width** maps directly from the measured interface; sheet thickness starts at measured **1.6 mm**, adjustable to 2 mm. Proposed TOTAL socket allowance .15 mm, adjustable .1–.3 mm, is distinguished from the source's approximately .100012 mm sheet clearance. Stronger .4–.6 mm-thick snip runners replace the source's very low runner planes. Twelve accessible runners attach to broad non-interface edges. Two permanent clearance seats use adhesive, not unverified snap/friction retention. See `reference-analysis.json` for concrete design mapping.

Visual interaction reference is `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` (read-only): README, styles, App/Viewer, worker, STL parser/export and image tracing were inspected. Concrete patterns carried forward: 374 px scrollable left rail, compact sticky identity/theme control, collapsible sections, paired sliders/numeric mm fields, raised tactile controls, pink selected state, gradient-backed right viewer, checkerboard cutout, orientation/units-aware import editor, local designs, worker-current-result export gating, phone preview-first stack. Neither reference project was edited or deployed.

## Parameters (all physical dimensions in millimeters)

| Parameter | Supported range |
| --- | --- |
| Card envelope | 120–136 × 132–156 |
| Base main length / width | 70–86 / 24–28; adds 14 mm signature extension |
| Base thickness / post sheet | 2–2.6 / 1.6–2 |
| Focus separation | 34–46 |
| Post height / retaining head width | 12–18 / 8–12 |
| Total receiving slot allowance | .1–.3, default .15 |
| Part spacing | 3–4 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art rotation / placement | ±180° / X ±1.5, Y ±2 within protected 13 mm zone |

Three actual presets with model thumbnails; three physical base profiles. Bounded variation; undo/redo; six named local designs; portable JSON including bounded assets. Missing image payload explicitly requests reattachment, never pretends restoration. Replacing/removing imports and resetting controls restores built-in geometry.

## Image / SVG conversion

File picker and drop support **PNG/JPEG/simple SVG**. Images ≤2 MB, ≤12 MP, ≤6,000 pixels per side are checked before decoding and normalized to ≤500 pixels. SVG is limited to simple filled paths/shapes, ≤2,000 elements with no external/active content, locally rasterized at 256 px; text should be converted to outlines. Text (up to eight characters) and six searchable vector icons use the same local conversion.

Fit/contain or crop/cover, ±25% crop offset, light/dark background inversion, threshold 1–254 or grayscale heights. Images are sampled on a bounded **20 × 20** luminance grid. Each node's darkness creates .4–.6 mm engraving depth; adjacent nodes form triangles and a closed cutter is subtracted from the signature extension using Manifold CSG. Bright holes remain unengraved on continuous backing, rather than becoming filled silhouettes. Transparent input composites against the chosen background. A checkerboard displays the actual threshold/height grid. This is **sampled 2D-to-relief, not exact vector tracing or full 3D reconstruction from a photo**. Text/icons, different pixels, threshold, relief/depth and placement change final exported mesh. Raised marks intentionally unsupported, preserving a flat build and ≥1.4 mm backing.

## STL import contract

ASCII and binary STL ≤2 MB / **1,500 triangles**, each oriented dimension .2–250 mm. Explicitly confirm millimeter coordinates: STL has no unit metadata. Choose Z/Y/−Z up before attaching; changing axis detaches input for reattachment. Source preview and dimensions are shown. Scale XY proportionally to a 4–7 mm footprint and Z independently to .4–.6 mm engraving depth; rotate, center and place in the protected base extension. The **actual source mesh** is Boolean-subtracted; no convex hull substitution. Export differs from an unchanged input mesh or a visual overlay.

Deliberately supported subset: one outward-wound, closed, connected, convex solid with broad flat bottom, no projected overhang. Vertex/face finiteness, dimensions, degeneracy, opposite-directed edge incidence, adjacency, positive volume, triangle intersections, convexity and bed footprint are checked. Open/nonmanifold, touching/self-intersecting, concave/hollow/multibody, excessively thin or unsupported meshes reject with actionable guidance. No automatic repair claimed. Unsupported concavities are not discarded. The bottom convex hull is used **only for input support validation**, never to replace geometry. Artwork cannot reach sockets/posts or cut through the backing. Invalid edits/imports disable all exports; the explicitly labelled last-good preview cannot be exported as if current.

## Views and files

Assembled, exploded, connected card, de-tabbed print layout, isolated parts, see-through base; touch orbit/pinch and fit/zoom. Exploded spacing is explanatory; no cord/contact force simulation. Preview and binary STL use the same exact current valid mesh, fingerprint displayed in DOM and compared against actual downloads. STL always exports bed-flat Z=0, regardless of assembled view. Per-part binary STLs plus Everything ZIP with card, clean parts and numbered assembly/fit notes. STL does not store preview colours or units. No mislabeled 3MF.

## Printing / assembly / use

1. PLA/PETG, .16–.20 mm layers, three walls, bed-flat no supports intended. Print a post/base trial first; calibrate socket allowance using your printer/material and elephant-foot compensation. No universal fit is claimed.
2. Snip 12 runners at least 1.6 mm outside edges; trim nubs away from tongue and cord necks. Three clean parts allow printing on smaller beds.
3. Seat one post. Trap a tied **200 mm soft nonstretch cord loop** under BOTH heads before seating/bonding the second post. Shoulders seat on the base; adhesive secures two FIXED clearance joints. Let cure. Cord, pencil, paper, tape and adhesive are external supplies. No bearings/magnets/metal hardware.
4. Tape base to large paper, put an upright pencil inside the loop outside the base, pull gently taut and trace without crossing string. Keep cord below heads. Do not load or lever the thin posts.
5. Ideal point foci satisfy `distance(P,F1)+distance(P,F2)=loop−focus separation`. For loop200 and separation40, ideal axes160 ×154.92 mm. Real 4.5 ×sheet rectangular posts plus pencil diameter offset that ellipse; cord stretch/friction add further error. This is near-ellipse exploration only. The UI makes the ideal-versus-real distinction explicit.

## Verification / limitations

`npm test`: every preset, profile, global min/max, individual parameter endpoints and imports run independent binary-STL checks and assembly tests. Parse exact float32 output; finite vertices, normalized face normals, nondegenerate faces, positive volume **per component**, closed edges at1e-5 mm weld with opposite incidence, declared bounds and bedZ0. Every card/clean part checked. CSG intersections verify no assembled overlaps, post insertion paths, source-width sockets remain open, upper layers sit inside bed footprints and clean parts lie within card without overlap. Cutting all12 runners must release exactly three clean parts plus carrier. Neck slices measure actual4.5 ×sheet contact; heads must cover necks with real overhang. Solve200 mm perimeter of hull(two rectangular necks+pencil) at72 pencil positions, verifying taut paths and pencil clearance outside base. This is geometry only, not friction, tensile force, strength or physical accuracy verification.

Browser tests exercise production base path/worker/WASM, real PNG/JPEG/ASCII/binary uploads and actual STL downloads against independent Node geometry; threshold/pixels/scale/rotation/placement differences, holes, rejects, reset/replace, every preset, text/icons/SVG, JSON/local saved restoration, undo/redo, ZIP contents, stale guards and worker failure. Desktop rail/viewer, saved dark theme, focus, reduced motion, collapsibles, 320/390 px preview-first phones, no overflow, touch orbit/pinch and reachable exports are checked. See reports and `VALIDATION.md` for run outcomes.

**No physical print, assembly, drawing, strength, friction or fatigue test was performed.** Slice and calibrate before use; use gentle tension only.
