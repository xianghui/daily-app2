# Wrap & Tuft

A local React/Vite maker studio for a **four-part open-horseshoe yarn-winding kit card**. Two aligned open frames are separated by two outboard, double-ended shouldered spacers. Wind yarn around the paired rims, use the clear gap to access outer loops, tie the cut bundle and withdraw it through the open mouth. This is a craft former, not an automatic pom-pom machine; yarn technique and physical performance are untested.

Distinct from the earlier knitting loom, hank cross and chromatography rack: no pegs, thread sheds, hanging paper or spinning axle. The new topology is two aligned open annuli with four handle sockets, two shouldered spacers and a free cutting/tie lane. React/import/viewer infrastructure is reused from the studio family; the former geometry and assembly checks are new.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261031-5/`. Per-app `deploy` uses gh-pages, but the published monorepo is deployed through its ROOT `deploy/` flow. No API keys, backend, CDN imports or paid service. Manifold WASM, Three.js, fflate, React and Fontsource Fredoka/Rubik are locally bundled. Heavy CSG and STL parsing run in a worker; bounded image conversion uses a 20×20 grid. 100 ms debounce, request IDs and a complete current-state key prevent stale export.

## Reference evidence and attribution

Local candidates were inspected first: Keycap Studio's three-part switch template and Weave's 8 mm link are not suitable sheet-carrier joints. Their measured hashes/dimensions/components and rejection reasons are in [reference-measurements.json](reference-measurements.json). Read-only visual/interaction study: `keycap_generator2/README.md`, `src/styles.css`, `App.tsx`, `Viewer.tsx`, `worker.ts`, `export.ts`, `imageTrace.ts`, `geometry/stl.ts`. Concrete patterns: 374 px left rail, labelled collapsible controls, paired range/number inputs, pink tactile controls, local rounded fonts, checkerboard cutout, dark-theme persistence, right live viewer and preview-first phone layout.

Selected geometry reference: **White Cat Kit Card**, Mike Kasberg, [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The public source README and LICENSE were inspected and the actual binary STL downloaded and freshly parsed/sectioned. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; envelope 179.820 ×178.020 ×3.190 mm. STL contains no unit metadata; millimeters are an explicit assumption corroborated by the source scale. 27 edge-adjacent components, nonwatertight, including small detached faces: this is a design reference, **not a repaired or redistributed template**. No third-party raw mesh is bundled.

[reference-analysis.json](reference-analysis.json), [reference-measurements.json](reference-measurements.json), [actual sections](evidence/reference-sections.png), and `reference-inspect.py` document measurements. Measured sheet planes Z=0/1.6 mm and socket cross-sections 4.5×1.700012 mm map to spacer sheet=1.6, tongue=4.4 and total allowance=.10. Default .15 is a deliberately new calibration allowance. Measured low-runner planes .21/.22 inspire connected carrier tabs, redesigned to .4–.6 mm for more robust FDM starts. All four parts, carrier, tongues, shoulders, sockets and artwork Booleans are original parametric solids; no convex hull substitution. The appearance/function is not a spacecraft copy.

## Dimensions and supported controls

All lengths in **mm**; rotations in degrees. Final exported X/Y/Z is shown for the selected part/card.

| Control | Supported range |
|---|---|
| Card width and height | 200–230 each |
| Winding outside span | 44–62 |
| Open mouth width | 14–20 |
| Free space between frame faces | 6–10 |
| Frame thickness | 2.4–3.2 |
| Spacer sheet thickness | 1.6–2.0 |
| Spacer tongue width | 4.4–5.2 |
| Total socket allowance | .10–.35, not per-side |
| Part spacing | 3.5–4 |
| Carrier runner width / thickness | .8–1.4 / .4–.6 |

Three real presets and round, square and octagonal winding profiles. Nominal outer-minus-inner radius/halfspan=8; octagon minimum facet-normal band=7.391 mm. Inner opening=span−16 (28–46). Frame centers align; spacer centers at X=±6, Y=−span/2−9. Upper frame underside Z=frame thickness+free gap. Spacer tongues stop .05 short of both outer frame faces. Minimum shoulder overlap=1.225. Overly crowded cards are rejected rather than silently resized or overlapped; combined minimum and maximum supported parameter cases are checked. Larger span on the smallest card with maximal spacing can require a larger card.

## Both import workflows change exported solids

Use the file picker on desktop/phone, drag-and-drop one file, or the bundled synthetic samples. Files stay in the browser: no uploading, remote processing, telemetry or personal input files in this repository. Remove/replace, reset transforms, reset conversion and return to built-in defaults are provided. Source image/mesh preview and final 3D geometry are separate. PNG/JPEG and ASCII/binary STL all have real sample files under `public/samples/`; `ring.svg` is synthetic with a hole.

**PNG/JPEG/simple SVG:** maximum2 MB; decoded images≤12 MP,≤6000 px side. Header dimensions checked before decode; normalized to≤500 px side for bounded JSON. SVG simple filled shapes/paths only (≤2000 elements, no scripts/external references/text/effects), rasterized locally to256². Fit/cover crop, ±25% pan, light/dark background removal and threshold1–254 or grayscale relief. Canvas samples a20×20 height grid; each cell becomes two triangles over a closed bottom/side mesh. In threshold mode dark vertices have selected depth and light vertices zero; grayscale uses depth×(1−brightness/255). The triangle field interpolates boundaries, so it is **sampled 2D-to-relief, not exact vector tracing or full3D photo reconstruction**. Transparent/light pixels and enclosed bright holes stay unengraved on continuous backing. Checkerboard shows the actual conversion mask. Empty fields fail with recoverable errors.

**STL:** actual binary count/length or complete ASCII facets parsed. Maximum2 MB/1500 triangles, every axis .2–250 mm, finite coordinates. Weld1e−5 mm; reject degenerate triangles, nonmanifold/open/inconsistently wound meshes, multiple components, inward/zero volume, self-intersections, concavity and unsupported overhang/bed contact. The intentionally narrow contract is **one convex, outward-wound closed solid with a broad flat bottom containing its full XY projection**. It is not an arbitrary mesh repair tool. Unsupported shapes get actionable errors, never silently flattened, discarded or replaced by a hull. Select Z/Y/−Z up before attaching; changing orientation requests reattachment. Explicit mm confirmation is required because STL has no units. The original validated triangles are proportionally scaled in XY to a4–7 mm footprint, independently scaled in Z to.4–.6 mm engraving depth, rotated±180°, centered and offsetX±1.5/Y±2 mm, then Boolean-subtracted from the real signature-frame handle. UI shows source dimensions and resulting scale factors. Thin XY features and transforms leaving the6.5 mm radial engraving zone are rejected.

Text (up to8 characters), six searchable bundled vector marks, SVG and image art use the same real relief pipeline. Only engraving is offered: raised grip art is intentionally omitted to keep both frames flat and preserve the winding gap. Grip center is X=0,Y=−span/2−22, away from all four seats. Recess.4–.6 mm, minimum backing1.8 mm. Text/icons/images/mesh shape and all placement controls measurably change export, not just textures. Preview color is decorative; STL stores no color.

## Views, persistence and export

Assembled, exploded, connected card, de-tabbed print layout and isolated parts all use the exact generated meshes; exploded poses are explanatory, not printed orientation. Touch orbit/pinch, zoom and fit. See-through frame mode explains the four seats. Undo/redo, up to six local named designs, portable versioned JSON save/open. JSON includes bounded image data and validated mesh triangles; missing payloads are rejected with a reattachment instruction, never pretended restored. Image conversion/current mesh key gates every export, including direct part buttons. Worker loading/build/error states are visible; last-good preview is explicitly labelled and cannot be exported after invalid edits.

Binary STL buttons for connected card, signature frame, plain frame and each spacer; Everything ZIP includes all five STLs and numbered ASSEMBLY.txt with current dimensions/fits. All print exports are on Z=0, no assembled overlaps. Actual connected card has a perimeter/cross carrier and sixteen breakaway runners; it is not a rectangle near loose parts. Runners land away from sockets and snip locations stay1.6 mm outside the parts. No3MF or unsupported color promise.

## Printing and assembly

See [PRINTING.txt](PRINTING.txt), also bundled with exports. Print100%, PLA/PETG, .16–.20 mm layers, ≥3 perimeters, no supports intended. Dry-fit one frame/spacer before a card, tune total allowance to filament/printer, deburr elephant foot. Snip16 carrier runners, stand both spacers in the lower plain-frame handle, lower the upper signature frame over their top tongues and **bond all four clearance seats**. Adhesive is required; these are not retained snap fits. Spacers are on the handle, not in the winding lane. Preposition the tying strand, leave the bottom handle sector unwound, use light tension, carefully cut supported yarn loops along the outer rim, tie and release through the open mouth. Yarn, strong tie strand, adhesive and adult-operated scissors are external. No metal hardware/bearings/magnets. Sand yarn-contact edges; round preset is the gentlest starting profile.

## Reproducible validation

`npm test`:32 built-in cases (presets, three profiles, combined extrema, each field endpoint) +8 image/STL cases. Independent binary parser checks count/size, finite coordinates, nondegenerate faces, normal/winding agreement,1e−5 mm welded opposite two-face edge incidence, triangle-connected components, positive volume per component and expected mm bounds. Every individual part and connected-card export checked. Manifold Boolean tests independently check all six assembled part pairs, spacer/lid insertion paths, all four sockets/shoulders, clear inter-frame cutting/tie region, aligned mouths, rigid mouth-release witness, nonoverlapping flat parts and16 safe snips releasing four parts+carrier. Cross-section footprints verify support-free bed columns. A rigid release witness does not establish soft-yarn behavior, scissor clearance for every tool, friction, forces or adhesive strength.

`node import-extremes.mjs`, `node hole-check.mjs`: imported outputs at combined extrema, actual Boolean bright-hole/dark-recess/backing probes. Browser scripts use real file-picker uploads, downloads parsed with the same independent checks, export/preview byte signatures and portable-state regeneration in Node. PNG/JPEG/SVG, ASCII/binary, threshold/depth/pixel/transform changes, invalid files, empty art, excessive inputs, resets, presets, all views, undo/redo, JSON/named-design reload, per-part/ZIP export, worker abort/recovery, touch orbit/pinch,320/390 px overflow and saved dark theme are tested against production assets under the real base path. Evidence/reports live beside the app. Gallery inline scripts and previous entries are checked before root deploy.

**No physical printing, physical assembly, yarn winding/cutting, adhesive durability, tuft quality or release testing has been performed.** Computational checks are not a physical print certification. Start with a small calibration and yarn trial.

## Licenses

Reference CC BY4.0, see `reference-LICENSE.txt`; raw reference not redistributed. Manifold Apache2.0, Three.js MIT, React MIT, fflate MIT, Fontsource fonts SIL OFL. Six bundled marks are simple original SVG paths; all sample uploads are synthetic fixtures. No personal source files.
