# Rise & Reflect

A **four-part, open-frame periscope kit-card generator**. Snip sixteen real runners to release two windowed cheeks and two mirror shelves. The four diagonal tongue/socket joints set parallel mirror planes at 45°. Thin mirror film on the two opposing top faces redirects a horizontal line of sight through an adjustable 40–60 mm rise.

This is a distinct optical assembly, not a reskin of the gallery's pinhole camera, trihedral reflector, stereoscope, lucet or slit wheel. The complete geometry, assembly transforms, angled joints, ray checks, carrier, presets and construction instructions are new. Bounded studio/import infrastructure is adapted from `20261030-13`.

**External consumables:** two pieces of smooth adhesive-backed mirror film (≤0.15 mm) and suitable craft adhesive. The shoulders locate parts but do not positively retain them; adhesive at all four joints is required. The frame is handheld and open, not a light-tight tube or precision optical instrument. **No physical print, actual optical-image, film-flatness, adhesive-strength or fatigue test was performed. Never look toward the sun.**

## Reference-first evidence

Local files under `/Volumes/ExternalHD/3d_printing_apps/` were searched before selecting geometry. Read-only Keycap Studio's switch template and Fabric Studio's interlocking link were actually parsed, hashed and rejected as inappropriate sheet-kit interfaces; both project READMEs were inspected. Their dimensions, components and reasons are in `reference-measurements.json`.

Selected public reference: **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. The README/LICENSE were retrieved and actual binary STL freshly downloaded and parsed before final design. Attribution/license retained; no raw source mesh is redistributed.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; **179.820 × 178.020 × 3.190 mm**, 27 edge-adjacent components, not watertight. Reference only, not silently repaired.
- Actual mesh cross-sections at Z=.10/.50/1.59 mm appear in `evidence/reference-sections.png`. Sheet planes at 0/1.6 mm, and four socket loops measure **4.5 × 1.700012 mm**. STL has no unit metadata: mm is an explicit assumption corroborated by those sheet/interface dimensions.
- Generator preserves **1.6 mm bed-aligned tongue thickness**. Diagonal sockets use `(tongueWidth + totalAllowance) × (1.6 + totalAllowance)`, rotated 45°. At 4.4/.10 the section reproduces 4.5 × 1.7 mm. **Default .15 mm is a proposed FDM allowance, not a measured clearance or universal fit.** Tongue centroid .8 mm above bed and its offset from the H-thick film plane are included in the actual socket positions and assembly transforms.
- Low .21/.22 mm source features/carrier informed the frame. Original runners are deliberately stronger .4–.6 mm; bodies thickened to 2–2.8 mm. The optical planes, lateral double-tongued shelves, windowed cheeks, protected engraving, four isolated bays and sixteen safe runners are original reconstructions. No source ship outlines or defects copied.

See `reference-analysis.json` for exact mappings/deviations. `reference-inspect.py` reproduces analysis with trimesh/numpy/matplotlib and the separately downloaded source at `/tmp/periscope-reference.stl`.

### Visual/interaction reference

Inspected read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, imageTrace, STL parser, export and geometry modules. Concrete patterns retained: **374 px scrollable left rail**, compact sticky brand/theme header, lavender-grey desk (#e7e9f1), white panels/dark ink, coral tactile key buttons with pressed selected state, paired slider/numeric mm fields, collapsible sections, checkerboard sampled cutout, source STL preview/units, local designs, current-result export gating and preview-first phone layout. Dark theme persists. No source Git history, dependency tree or private mesh was copied.

## Run / dependencies

```sh
npm install
npm run dev
npm test
node hole-check.mjs
node import-extremes.mjs
npm run predeploy
node serve-production.cjs  # http://127.0.0.1:5494/daily-app2/20261030-14/
node browser-test.cjs
node studio-test.cjs
node axis-test.cjs
```

React + Vite, base `/daily-app2/20261030-14/`. Exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`. Production publication uses the ROOT monorepo combined `deploy/` flow. Locally bundled dependencies: Three.js, Manifold WASM, fflate, Fredoka/Rubik fonts; no CDN, backend, API key or paid generation. React/Three/fflate MIT, Manifold Apache-2.0, fonts SIL OFL 1.1. Original six SVG icons and synthetic sample fixtures.

## Geometry and supported parameters

All dimensions in **millimeters**; displayed export X/Y/Z are bounds of the chosen actual printable part, not assembled dimensions.

| Parameter | Supported range |
|---|---|
| Card width / height | 210–250 / 120–150 |
| Cheek width | 40–48 |
| Mirror-center rise | 40–60 |
| Clear viewing span between cheeks | 20–28 |
| Mirror shelf length | 22–30 |
| Tongue width / thickness | 4.4–6 / measured fixed 1.6 |
| Total socket allowance | .10–.35, not per-side |
| Body panel thickness | 2–2.8 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Lower mirror center is 24 mm above the cheek base; upper is 24 + rise. Bodies are shouldered and their tongues end flush at outer cheek faces when seated. Cheek windows retain 6 mm side rails and 14 mm solid regions between centers and the window; minimum engraving backing is 1.4 mm. Some mixed extremes (tallest cheeks in the shortest card with maximum spacing) do not fit and are explicitly blocked. Coordinated minima/maxima and all independent field extrema are checked.

The default **220 × 130 × 2.4 mm** connected card is one closed solid containing four clean parts, three carrier rails, frame and sixteen real breakaway tabs. Removing the sixteen safe cuts releases **five components: four parts + carrier**. Frame bounds are enforced; no loose arrangement is called a card.

Three actual presets (Pocket Rise / Studio Scope / Wide View) have generated model thumbnails; three bevel silhouettes change both cheeks and shelves. Bounded variation changes real fit/tongues, not colours. Undo/redo keeps up to 35 states; six named designs and JSON round-trip bounded imported assets.

A debounced Web Worker performs genuine Manifold unions/differences and final finite/degenerate/manifold/winding/volume checks. Resolution is bounded. IDs and an exact settings/source/transform key reject stale results. Invalid/pending imports, unconfirmed STL units, errors or stale builds disable all exports; a last-good preview is explicitly labelled. Downloaded STL and the exact current preview share the same model/signature.

## Local image / legend workflow

File picker and drop: PNG/JPEG/simple SVG; provided samples `mark.png`, `waves.jpg`, `ring.svg`. PNG/JPEG signatures, dimensions and limits are checked before decoding: **16 bytes–2 MB, ≤12 MP, ≤6,000 px/side**, normalized to ≤500 px. Simple self-contained SVGs permit paths/shapes, ≤2,000 elements, locally rasterized to 256 px; active/external resources/effects/text are rejected with guidance.

Images are composited against selected light/dark background, optionally inverted, fit/cover-cropped with ±25% XY shift, and sampled to a **20 × 20 luminance grid**. Threshold 1–254 creates a sampled silhouette relief or grayscale sets variable depth. A closed triangulated height-field tool is Boolean-subtracted from the front cheek. This is **2D-to-engraved relief, not full 3D reconstruction or exact vector tracing**. Checkerboard shows the actual sampled foreground; bright holes remain unengraved on continuous backing. Independent solid probes test a ring's center and surrounding cavity.

Real geometry controls: 4–7 mm footprint, .4–.6 mm depth, ±180° rotation, X±1.5/Y±2 mm placement. Artwork must remain in the protected 6.5 mm-radius lower-cheek landing at X=0 / height=7 mm, remote from sockets/light path. Empty images, unsafe placement and invalid transforms block export. Six searchable bundled icons and up to eight text characters use the same pipeline. Raised relief is deliberately unsupported to preserve a smooth lower frame surface. Pixel/nozzle resolution limits fine text.

## Local STL-to-model workflow

ASCII and binary `.stl`, **≤2 MB / ≤1,500 triangles / .2–250 mm per source axis**; synthetic `wedge-ascii.stl` and `gem-binary.stl` samples. Shows source dimensions, format, triangle count and original oriented mesh. STL has no units; explicit confirmation of mm is required. Z/Y/−Z up rotates actual vertices; changing up-axis clears the source and explicitly requires reattachment. Proportional XY scale to 4–7 mm, independent Z depth to .4–.6 mm, rotation, placement, reset transforms, replace/remove/defaults are functional.

Actual source triangles become an **exact Boolean-subtracted cavity in the front cheek**, measurably changing final STL, not unchanged re-export or preview texture. Deliberately narrow supported contract: one outward-wound, closed **convex** solid, broad flat bottom, no footprint overhang. Checks enforce complete finite content, size/count/dimensions, 1e-5 mm welded edge incidence and winding, positive volume, one component, self-intersections, convexity and bed support. Concave/hollow/disconnected/open/nonmanifold/unsupported meshes are rejected explicitly, never repaired by assertion. A bottom hull is used only as a support/containment validator; it never replaces source geometry. Same final backing and assembly checks apply to image/STL outputs and their parameter extrema.

## Privacy / persistence

All personal inputs are processed locally in the browser, with no uploads, APIs or external generation. User files are not stored in the repository. JSON and named designs carry bounded normalized image/original mesh payloads; restored meshes are revalidated. Missing image payloads require reattachment rather than pretending success. JSON ≤2 MB, six local saves, 35 history states. Samples in the repository are synthetic only.

## Views / fabrication / numbered assembly

Connected card, de-tabbed plate, assembled, exploded, four isolated-part views and see-through all use the same underlying geometry. The lateral release preview separates cheeks along the real assembly axis. The thin line in assembled view is an illustrative reversible center ray (not exported or an optical image). Orbit, zoom, fit and phone pinch/touch are supported. Preview colours do not imply STL colour; no fake 3MF.

Export prominent binary STL for card or each clean part, plus Everything ZIP with all **five STLs + numbered ASSEMBLY.txt/current fits**. All exports are bed-aligned Z=0; assembled overlap is never the printable export. Full numbered instructions are embedded in the UI/ZIP; summary:

1. Print flat at 100% mm, PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Check bed size. Print one cheek/shelf as fit calibration before a full card.
2. Snip sixteen accessible low tabs; trim nubs. Avoid functional tongue edges.
3. Apply ≤0.15 mm adhesive mirror film to each shelf's **top**, leaving tongues bare. Cut film to `(clear span − 2) × (shelf length − 2)` mm (default 22 × 24).
4. Seat both shelves in one upright cheek. Lower top points negative X/up; upper top points positive X/down, facing each other. Slide the second cheek laterally onto the opposite tongues. Shoulders butt against inner cheek faces; tips finish flush outside.
5. Check fits/reflective directions, then bond the **four joints** with suitable craft adhesive and cure fully. No positive retention without adhesive. Never force thin tongues or load the frame.
6. Hold by the lower frame and look horizontally from negative X toward the lower mirror to see the higher view from positive X. Film smoothness and material/printer settings determine results. Never point toward the sun.

## Validation and limits

`validation-report.json`: **32 built-in configurations + 8 image/STL cases**, every preset/shape, coordinated min/max and every independent field extreme. Independent parsing of final float32 STL checks nonempty triangles, exact file size, finite vertices/normals, normalized winding-consistent normals, nondegenerate faces, welded opposite-directed edge incidence exactly two, positive volume for every component, orientable Euler characteristic and expected mm bounds. Each separately downloadable part is validated.

Independent kernel checks sample staged front/rear/both lateral insertion (63 poses per ordinary configuration), all part pairs, four socket gauges, four shoulder contacts, source-derived clearances, 40 bed-column sections, card envelope, sixteen non-damaging cuts and five released components. Separate checks verify top-plane centers, the reflection vector law, inward-facing reflective surfaces, and no geometry in the three center-ray segments. Watertightness alone is not treated as proof of assembly or optics.

`import-extremes-validation.json` extends full checks to image/ASCII/binary meshes at coordinated parameter extrema. `hole-validation.json` probes actual source-derived cavity holes. Browser reports record actual production file-picker imports and **downloaded bytes**, pixel/threshold/depth/crop/scale/rotation/placement changes against no-import, remove/reset, JSON rebuild/signatures and full mesh/assembly checks. Malformed/truncated/open/nonmanifold/concave/oversize/empty/invalid-transform cases recoverably block export. Tests cover text/icons/SVG, presets, all views, actual ZIP contents, portable image/mesh JSON, named-save reload, undo/redo, missing assets, units/up-axis, worker abort/recovery, local-only requests, saved dark theme, keyboard focus, collapsible sections, reduced motion, desktop left rail and 320/390 px preview-first phones without horizontal overflow; touch orbit/pinch and phone exports are exercised.

Production prefix serving tests worker/WASM paths. Root gallery entries/scripts/runtime and combined output are separately validated before authorized root publication. Reports/screenshots are reproducible evidence, **not physical print, optical image, glue-strength, fatigue, material or safety certification**. Calibrate with your own printer/material/film before use.
