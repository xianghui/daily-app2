# Tusk & Tenon — reference-grounded kit-card studio

A browser-only React/Vite generator for a five-part miniature tusk-tenon display frame. Two broad-foot uprights slide inward over the beam's 10 mm-high end tenons; two opposed **horizontal tapered cross-keys** pass through closed tenon windows and prevent the feet sliding outward. Beam shoulders stop inward movement. Remove the keys before disassembly. This is a knockdown construction demonstrator, not a structural frame or a force clamp.

## Reference first, and attribution

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched before selection. The local three kit-card projects contain no STL. Clicker socket cutters, slider meshes and fabric links do not provide suitable planar carrier/assembly references. Their original files and all reference projects remain read-only.

Selected public mesh: **White Cat Kit Card**, Mike Kasberg (`mkasberg`), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**, verified against repository LICENSE. The source README and `kit_frame.scad` were read. The actual STL was downloaded afresh, binary-parsed, hashed and sectioned in this run; see `reference-analysis.py`, `reference-analysis.json`, `reference-sections.svg` and its inspected PNG.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles, 1,530,884 bytes; assumed mm, corroborated with source sheet parameters (STL itself has no units).
- Bounds approximately 179.82 × 178.02 × 3.19 mm; dominant sheet planes Z=0/1.6 mm, perimeter rail width 1.6 mm measured at Y=100; low bridge levels .21/.22 mm; edge-adjacency welding gives two components.
- Source contains coplanar/nonmanifold artifacts: it is **not repaired, bundled, exported or claimed printable**. It is a measured design reference only.
- Retained: 1.6 mm default sheet and low removable connections to a real carrier. Redesigned: rail increased to 2.4 mm, bridges to .4–.6 mm, 20 accessible links in five size-aware bays. Twenty cuts computationally separate five parts plus the carrier.
- **New rather than source-measured:** beam shoulders, pierced tenons, 3→6 mm / 18 mm cross-key taper, upright mortises and .15–.45 mm fit allowances. No source cat parts or arbitrary switch interfaces are used. Compared with recent pegged kit models, key withdrawal is required before the uprights can leave; this is a new mechanically tested retention scheme, not a silhouette reskin.

The visual/interaction reference is read-only **Keycap Studio** (`keycap_generator2`): inspected README, styles, App, Viewer, image tracing, mesh engine, worker, STL and export modules. Adapted maker patterns include the 374 px left control rail; sticky compact header; lavender-grey desk, white panels and coral selection; locally bundled Fredoka/Rubik; tactile keycap controls; collapsible sections, slider/numeric pairs; right-side Three.js canvas; saved dark theme; explicit imported units, source preview and transforms; worker builds; per-part STL and ZIP. No switch cavity/socket is appropriate to this kit. This app has independent Vite scaffolding/dependencies and new geometry. Shared studio/parser/test infrastructure was adapted from the existing daily-app studio, with fresh mechanism-specific tests and reports.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Production base is `/daily-app2/20261028-4/`. Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for browser tests. Generation/export, fonts and WASM are locally bundled, with no CDN, server API, key or paid service. `npm run deploy` is installed as required; public monorepo publication uses the **root** predeploy/deploy flow instead.

## Parameters (mm unless noted)

| Parameter | Supported range | Meaning |
| --- | --- | --- |
| Card width / height | 120–160 / 220–250 | Actual connected frame envelope |
| Beam shoulder span | 48–68 | Distance between inner shoulder faces |
| Upright height | 36–46 | Overall standing height |
| Foot depth | 28–38 | Front-to-back stance |
| Sheet | 1.6–2.4 | Upright, beam and key thickness |
| Total fit allowance | .15–.45 | Receiving mortises and key-window height; not a universal tolerance |
| Row spacing | 0–1 | Move parts within guarded carrier bays |
| Breakaway width / thickness | .8–1.4 / .4–.6 | Four discrete low tabs per part |
| Dimple depth | 0–.4 | Real subtracted ring of beam dimples |

Three real presets and three foot outlines; bounded variations, reset, undo/redo, six named local designs, portable JSON, searchable six original vector icons, text marks and preview-only swatches. Every generated part is required to be one closed connected outward-wound solid. Inadmissible transforms/dimensions block exports. The last-good preview is labelled and cannot export after invalid edits. Worker request IDs and a full state key protect against stale results.

## Local imports that change the printable solid

**PNG/JPEG**: actual file signatures, ≤2 MB, ≤12 megapixels, ≤6,000 px side; source normalized to ≤500 px and downsampled to a 20×20 luminance grid. Thresholded silhouette relief or grayscale heights become a closed triangulated height field. A .4 mm backing joins the field; Manifold Boolean union/subtraction integrates it with the beam well. Bright holes stay unraised (or unengraved) above a continuous substrate. This is sampled **2D-to-relief, not exact outline tracing or full 3D reconstruction from a photo**. Source and actual checkerboard conversion preview appear together. Light/transparent or dark/inverted background, threshold 1–254, contain/cover, ±25% crop shifts, scale, rotation, XY and raised/engraved controls affect geometry. Engraving is limited to .4–.6 mm to keep at least .8 mm floor at the thinnest sheet.

**Simple SVG**: locally validate and rasterize to PNG before the same conversion. Even-odd holes survive the sampled relief, tested with actual final-solid volume probes. Scripts, external resources/references, effects, text and excessive complexity are rejected. No external SVG content is loaded.

**Binary and ASCII STL**: ≤2 MB and 1,500 triangles, each axis .2–250 mm; finite coordinates, nondegenerate triangles, closed manifold edges, opposite winding, positive volume, one connected component and triangle intersection checks. The deliberately supported contract is a **convex, broad flat-bottom, support-free solid**. Concavities/cavities, disconnected pieces, thin branches, unsupported overhangs and other unsupported meshes get explicit actionable errors. No convex-hull replacement or silent repair. The convex hull of the base is used only to validate bed contact, never as replacement export geometry.

Select Z/Y/−Z up before attaching (axis changes explicitly require reattachment). The source dimensions/format and orbitable source mesh appear separately. **Confirm mm** because STL has no unit metadata. XY is scaled proportionally to a 4–7 mm footprint; Z is independently fitted to .6–3 mm. Rotate ±180°, place X ±1.5 / Y ±2 mm, center/reset, replace/remove and return to defaults. The actual mesh is Boolean-unioned into a protected central 13 mm medallion; minimum XY thickness 1.2 mm and complete safe-zone containment are enforced. Safe zone is at least 17.5 mm from the beam shoulders and farther from key windows. Inputs never alter the tenon interfaces.

Only synthetic PNG/JPEG/SVG and synthetic ASCII/binary STL fixtures are bundled in `public/samples/`. All user-file processing stays in the browser. No personal source files are saved in the repository or uploaded. JSON and named designs contain bounded image/mesh payloads, not filesystem paths; restoration revalidates assets. Missing payloads explicitly request reattachment. JSON limit 2 MB.

## Preview, export and printing

Assembled, exploded, connected card, de-tabbed layout, all isolated parts; see-through solid, fit, orbit, zoom, touch orbit/pinch. The key insertion slider is a **preview-only pose**, matching the checked horizontal withdrawal path; STL always uses bed-flat printable solids. Live preview and export share exact current valid mesh, with tested byte fingerprints and JSON reconstruction.

Prominent binary STL export plus per-part buttons. Everything ZIP has the connected-card STL, five separate part STLs and numbered `ASSEMBLY.txt`. The card includes real Boolean-connected breakaway runners; it is not a loose print plate. No 3MF is advertised. STL has neither units nor preview colours; import at 100% mm. Selected export X/Y/Z dimensions are shown, including decoration height.

Print flat Z=0, artwork up, PLA/PETG, .4 mm nozzle, .2 mm layers, ≥3 walls, no supports intended; inspect in a slicer. At .4 mm tab thickness use at least two layers. Snip the twenty accessible tabs 2 mm below nonfunctional lower edges, trim nubs, discard carrier. Stand beam, slide feet inward, insert right and left keys horizontally from opposite directions, narrow tips first. Never hammer. Keys are manually removable, not captive along their own insertion axes. Pull them out before separating the frame. No hardware. Fit is printer/material dependent: print beam + one upright + one key first, adjust total allowance in .05 mm steps and account for elephant foot. No load, strength or stability rating.

## Verification and limitations

`npm test` validates defaults, every preset, all-low/all-high and mixed shape/size/fit cases plus corresponding STL and image-derived outputs. Independent binary parsing checks exact byte length, finite coordinates, nonzero triangles, unit normals/winding, welded edge incidence (1e-5 mm), connected components, positive per-component volumes and mm bounds for every separately exported part and connected card. Manifold intersections verify every assembled pair; sampled foot seating and key withdrawal; shoulders, keys, mortises and taper stops; all parts contained in the connected card; flat parts mutually nonintersecting; and six components after 20 simulated cuts. These tests establish geometry and assembly paths, not forces or durability.

Browser test scripts exercise real PNG/JPEG/ASCII/binary file picker uploads and downloads from the production base path, pixel/threshold/depth/scale/rotation/placement changes, current-preview/export signature equality, reconstructible JSON, invalid files and recovery, phone orbit/pinch, 320/390 px overflow and export access, all presets and marks, saved designs, undo/redo, per-part and ZIP contents, theme and keyboard/collapsible sections, worker loading failure and stale result/error gating. Results and screenshots are saved beside the scripts. Root gallery validation is separate.

**No physical print, assembly force, friction, fatigue, strength, stability or external slicer test was performed.** The reference mesh's defects do not propagate into this procedural reconstruction. Computational checks are not a claim of a physically tested product.

### Reproduce browser validation

```sh
npm run predeploy
node serve-production.cjs # terminal 1, 127.0.0.1:5432
node browser-test.cjs     # terminal 2, real production import/download checks
node feature-test.cjs
node hole-test.cjs
node portable-errors-test.cjs
node resilience-test.cjs
node stale-import-test.cjs
node studio-layout-test.cjs
```

After root `npm run predeploy`, `node serve-combined.cjs` serves root deploy on port 5434. Run `TEST_BASE=http://127.0.0.1:5434 TEST_REPORT=combined-browser-validation.json node browser-test.cjs` and `TEST_BASE=http://127.0.0.1:5434 node gallery-test.cjs`. `public-smoke.cjs` verifies the authorized published site after Pages finishes updating. Test fixtures/reports contain synthetic data only.
