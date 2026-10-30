# Lace & Resonance

A browser-based parametric **four-part paper-membrane drum kit card**: snip sixteen runners, assemble two tongue-seated feet below a signature hoop, and lace a replaceable paper membrane beneath a second clamping hoop. It is an experimental acoustic craft assembly, not a game or a physically calibrated instrument.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; production base `/daily-app2/20261030-31/`. The root repository deploy flow publishes the combined site. Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`.

## Reference first, not a source-mesh re-export

Inspected local candidates **before choosing geometry**: Keycap Studio's clicker template is a switch-cavity/stem interface, and Fabric Fidget's diamond link is an 8 mm-tall interlock. Their README/instructions and actual STL dimensions/components were inspected; neither supplies appropriate sheet/carrier construction for a flat kit. See `reference-measurements.json` for hashes and local candidate measurements.

Selected **White Cat Kit Card**, Mike Kasberg, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Source README, OpenSCAD instructions and LICENSE were fetched; the actual public binary STL was downloaded into `/tmp`, parsed with trimesh, hashed, split by edge adjacency and sectioned at Z=.1/.5/1.59 mm. No raw mesh is redistributed. `reference-LICENSE.txt` retains the attribution license. Source SHA-256:

`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`

Actual mesh: 30,616 triangles, 179.819997 × 178.019994 × 3.190000 mm, 27 edge-adjacent components, **not watertight**. It is a measured design reference, not a mesh we claim to repair. Millimeters are assumed and corroborated by source `thickness=1.6`; STL has no unit metadata. Section evidence: `evidence/reference-sections.png`; detailed measurements in `reference-measurements.json` and adaptation decisions in `reference-analysis.json`.

Measured sheet planes: 0/1.6 mm. Four rectangular socket loops: 4.5 × 1.700012 mm. Our 4.4 × 1.6 mm tongues plus .10 mm **total** allowance reconstruct that measured interface. Default .15 mm, allowed .10–.35 mm, is a proposed printer-dependent starting fit, not a universal tolerance or a measured source value. Source runners include .21/.22 mm Z levels; ours are deliberately redesigned .4–.6 mm-high, .8–1.4 mm-wide, bed-level Boolean unions.

**Original reconstruction:** two annular hoops, six matched lacing bores, four fixed foot sockets, two arch-relieved feet, an isolated signature lug and a four-bay carrier. No spaceship silhouette, private mesh, raw source assets or key-switch sockets. Distinct from earlier weaving, optical-wheel and ball-labyrinth apps: this assembly clamps a consumable paper membrane for gentle tapping, without gears, bearings, simulated sound or fake motion.

## Studio / customization

Read-only visual reference: `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, specifically README, App, styles, Viewer, imageTrace, worker, STL and export modules. Concrete adopted patterns: 374 px left editing rail, compact sticky maker header, collapsible sections, paired sliders/numeric inputs, tactile raised/pressed buttons, saved theme, checkerboard cutout, source-mesh preview, local designs, current-worker-result export gating, and preview-first phone layout. No history or dependencies were copied wholesale from Keycap Studio.

Shared generic studio/import/export infrastructure was adapted from `20261030-30`; all hoop/foot/lacing/card construction and assembly checks are new. Three **real generated-model thumbnail presets** and three lug/foot silhouettes. Text and six searchable bundled original geometric icons engrave real geometry. Preview swatches never imply STL color. Undo/redo, six local named designs, portable JSON, assembled/exploded/connected-card/de-tabbed/isolated views, orbit/zoom/fit and see-through solids are implemented. Paper and cord are explicitly preview-only context, not exported geometry. Assembled paper gap is an estimated 0.2 mm, not a guaranteed fit.

### Parameters (all linear units mm)

| Parameter | Supported range |
| --- | --- |
| Card width / height | 200–230 / 175–200 |
| Aperture / outer diameter | 32–40 / 60–68; band >=10 |
| Foot height | 18–26 |
| Six lacing bores | Ø2.4–3.2 |
| Lower hoop / clamp-foot sheet | 2.4–3.2 / 1.6–2.0 |
| Tongue width / total socket allowance | 4.4–5.2 / .10–.35 |
| Part spacing | 3.5–4.0 |
| Runner width / height | .8–1.4 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Engraving rotation / X / Y | ±180 degrees / ±1.5 / ±2 |

Impossible combinations, undersized envelopes and artwork beyond the 6.5 mm safe radius are blocked. Every valid edit runs final closed-edge, winding, nondegenerate-face and positive-volume checks in the worker. Signature backing is at least 1.8 mm; imports cannot reach bores, aperture or seats. Clearances are appropriate to fixed adhesive seats, not moving joints. No compliant-part or moving-part claim.

## Local image-to-geometry

PNG/JPEG content headers and dimensions checked before decoding: <=2 MB, <=12 MP, <=6000 px/side. Simple SVG also accepted (<=2000 elements, no scripts/external resources/text/effects); rasterized locally to 256 px. The normalized source is <=500 px/side. File picker works on phones; single-file drag/drop is also provided. Synthetic examples are under `public/samples/` with attribution.

Conversion samples a **20 × 20 grayscale height grid**, fit-entire or fill/crop with ±25% shift. Threshold 1–254 selects dark/light silhouette pixels; optional grayscale relief uses continuous sampled intensity. Light/transparent or dark background removal, physical size, depth, placement and rotation change exported geometry. Grid heights are triangulated as a closed solid and robustly Boolean-subtracted from the signature lug. White holes remain unengraved on continuous backing (verified with actual solid probes). Checkerboard displays the actual converted grid; this is **2D-to-relief conversion, not reconstruction of a full 3D object from one photo**, and not exact vector tracing. Sampled edges have finite resolution. Engraving only is intentional: raised detail would compromise the flat card's thickness/bed-oriented workflow.

## Local STL integration

ASCII and binary STL <=2 MB, <=1,500 triangles, every source axis .2–250 mm; strict complete-facet/binary-length parsing. Show source dimensions/format/triangle count and **require confirmation of millimeters**. Select Z, Y or −Z up before attaching; changing axis clears the source and explicitly requires reattachment. Source preview, physical XY footprint scaling, independent Z engraving-depth scaling, rotation, center/reset, X/Y placement, replacement and removal are real workflows.

The accepted source's **actual triangles** become a Manifold solid and are subtracted from the lug, not merely displayed or re-exported. No hull substitution: only one closed, consistently outward-wound **convex broad-flat-bottom solid** is supported. Concave/hollow/multipart/open/nonmanifold/self-intersecting/overhanging inputs are rejected with guidance. No arbitrary repair is claimed. Extremely slender engraving footprints are rejected below 1.2 mm minimum XY. All transforms bounded; mechanisms/interfaces have a protected keep-out region.

## Responsive geometry / privacy / persistence

Manifold WASM solid operations and STL parsing run in a Web Worker with local WASM URL; 100 ms debounce, sequence guards and exact state-key gating prevent stale results from exporting. Invalid edits may retain the explicitly labeled last-good preview, **with exports disabled**. Worker failures disable export and request reload. Preview and download share exact final meshes; the UI signature is tested against actual binary downloads and JSON-regenerated meshes.

All user files stay locally in browser memory; no upload/API/key/CDN. JSON and local named designs include bounded image data or exact verified mesh payloads. Missing image payloads explicitly request reattachment; they are never silently restored. Do not commit personal uploaded assets. Dependencies are bundled by Vite: React, Three.js, Manifold-3D (Apache 2.0), fflate (MIT), Fontsource Fredoka/Rubik (OFL); Playwright is development-only.

## Export / fabrication

Prominent binary STL for the connected card, each of four clean parts, and Everything ZIP containing all five STLs plus numbered `ASSEMBLY.txt` and current dimensions/fits. No 3MF claim; STL cannot store preview colors. Export coordinates are millimeters, all printable solids Z=0, and dimensions below viewer report the selected export, not assembled visual extents.

Print PLA/PETG at .16–.20 mm layers, three perimeters, 100% scale. No supports intended. Sixteen accessible snips release four distinct parts; snips avoid functional interfaces. Print lower hoop + one foot first as a fit calibration. Assemble parallel feet into four seats and bond; then place a paper disk under the upper hoop, puncture paper only at six bore pairs, and lace thin soft cord <=1 mm through both hoops. Tighten opposing stations gently. Paper and cord are external consumables; start with 100–160 gsm paper but tune experimentally. Adhesive required at four fixed foot seats. Adult craft object: small parts/cord, not for children. Gently finger-tap only. No bearing/magnets/fasteners needed. Print/assembly instructions are also in the UI and ZIP.

**Computational validation is not physical testing:** mesh validity, assembly paths, seats, cord passages, paper aperture and snip separation are checked, not actual membrane tension, acoustics, adhesive strength, fatigue or durability. Physical printing, assembly and acoustic response remain **untested**.

## Reproducible verification

- `npm test`: independent binary STL parsing/welded 1e-5 mm edge incidence/opposed directions, unit normals, finite/nondegenerate triangles and positive per-component volume; presets, extrema, silhouettes and image/STL cases. Exact card envelope, separate parts, collision-free insertion, four fits, six open cord routes, accessible snips and bed-supported sections.
- `node hole-check.mjs`: actual Boolean solid probes for bright hole, dark ring engraving and backing.
- `npm run predeploy`, `node serve-production.cjs`, then `node browser-test.cjs`, `node studio-test.cjs`, `node axis-test.cjs`: actual production base-path worker/WASM, file pickers and downloaded geometry; negative files, state persistence, ZIP, responsive layout and touch orbit/pinch. Reports and screenshots are stored alongside source.
- Root gallery scripts compile with `new Function`; all old entries preserved. Combined root output is verified before publication.

See `VALIDATION.md` and JSON reports for actual results; no physical-print claim.
