# Cantor & Canopy

A local-first parametric **three-part branching sculpture kit card**. Two complementary slotted planar trees cross-lap at 90°, then seat together in a blind cruciform plinth. Twelve real bed-level breakaway runners connect all parts to a carrier. This is a static flat-pack assembly, not a moving fidget or a biological growth simulation.

Change binary recursion, canopy span, contraction, rise, branch width, sheet/slot fit, carrier and tabs. Personalize the protected plinth apron with actual image-derived or imported-STL Boolean engraving. No hardware required; optional adhesive after calibration. **Physical printing, fit, stability and branch durability have NOT been tested.**

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; base `/daily-app2/20261105-8/`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publication uses the parent root predeploy/deploy flow. Dependencies: React/React DOM, Vite, Three.js + OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright for verification. All runtime dependencies, fonts, worker and WASM are bundled. No CDN/API/key/backend. User file contents are processed locally, never uploaded.

## Actual STL reference and decisions

Local candidates were inspected first under `/Volumes/ExternalHD/3d_printing_apps/`: Keycap Studio's three-component switch template and Weave's interlocked fabric link. Their geometry/READMEs describe switch cavities and fabric interlocks, neither a suitable planar kit interface. Keycap Studio README, `styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL reader/writer, engine/imported-base, image tracing and export modules were inspected read-only. No reference project was edited/deployed; its history/dependencies were not copied wholesale.

Selected reference: **White Cat Kit Card**, **Mike Kasberg**, [upstream](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Fresh upstream README/license are retained in `REFERENCE-UPSTREAM.md` / `REFERENCE-LICENSE.txt`. Attribution applies to this design-reference adaptation. The raw mesh and fan-art silhouette are not redistributed.

- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Downloaded binary STL: 30,616 triangles, approximately **179.82 × 178.02 × 3.19 mm**. Millimeters are assumed; STL contains no unit metadata.
- Actual source mesh split: 27 edge-adjacent components, including degenerate/duplicate zero-volume pseudo-components; the complete source is **nonmanifold**. This is an original parametric reconstruction, not a claimed source repair or unchanged re-export.
- Measured source sections at Z=.10, .215 and 1.59 mm: repeated **4.50 × 1.70 mm** receiving slots, **1.60 mm** sheet plane and approximately **.21–.22 mm** low carrier runners. See `reference-analysis.json`, reproducible `reference-analysis.py` and `evidence/reference-sections.png`.
- Preserved dimension decision: default sheet 1.60 mm and receiving width 1.70 mm. Their difference gives **.10 mm TOTAL slot allowance**, a printer-dependent starting fit, not a universal tolerance.
- Original redesign: two recursive fork networks, complementary half-laps, and a cruciform plinth seat. Socket length changes from source 4.50 mm to **12 + allowance mm**, with **3 mm** engagement and a sheet-thickness floor. Runners strengthened to .4–.6 mm. These dimensions are proposed design values, not measured source dimensions. No irrelevant switch sockets/fabric links are imposed on the kit.

The visual reference is Keycap Studio's concrete maker-studio patterns: bundled Fredoka/Rubik, lavender-grey `#e7e9f1` desk, white panels, dark `#1f2233` ink, coral `#e2557a` highlights, raised/pressed tactile buttons, a 374 px scrollable left control rail, labelled collapsible groups, paired numeric/range controls, large right-side Three.js preview and preview-first stacked phones. Saved dark theme, keyboard focus, reduced-motion CSS and generous touch controls are included. Reusable local studio/import infrastructure is retained; branch construction, joints, assembly poses and verification are new.

## Parameters

All lengths are **mm**, rotation is degrees, recursion is integer, contraction is dimensionless.

| Parameter | Range |
|---|---|
| Card width / height | 220–280 / 180–240 |
| Canopy span | 64–88 |
| Branch generations | 2–4 |
| Horizontal contraction ratio | .42–.48 |
| First branch rise | 14–20 |
| Branch width | 1.6–2.8 |
| Sheet thickness | 1.6–2.4 |
| TOTAL slot allowance | .10–.30 |
| Part spacing | 3–5 |
| Tab width / height | .8–1.2 / .4–.6 |
| Engraving footprint / depth | 4–7 / .4–.6 |
| Artwork XY offset / rotation | ±1.5, ±2 / ±180° |

At generation d, fork offset is `span*(1-ratio)*ratio^d/2`, stem rise is `firstRise*.78^d`. Each node creates two child stems; tips per panel are `2^generations`. The finite canopy extent differs from span by the finite geometric sum plus half a branch width. Minimum final leaf gap is 1.2 mm; narrow high-recursion combinations block export rather than fusing tips. Branch width ≥1.6 mm is a proposed printing floor, not a verified strength limit. The decorative branches are rigid, not compliant springs.

The 16 mm trunk shoulders support a 12 × 3 mm tongue. Panel A's slit opens upward from trunk height `8−clearance/2`; B's opens downward from `8+clearance/2`. Both slot widths are `sheet+clearance`. The overlapping slot-end relief prevents a forced interference. The cruciform plinth cavity has two orthogonal `(12+clearance) × (sheet+clearance)` slots, 3 mm deep. A full sheet-thickness floor remains. Clearance seats are removable, not snap-retained or load-rated.

## Imports and exact conversion method

Desktop/phone file picker plus drag/drop. Synthetic PNG, JPEG, SVG, ASCII STL and binary STL fixtures are bundled in `public/samples`; no personal files are committed.

**PNG/JPEG/SVG → actual engraving:** up to 2 MB, 12 MP, 6,000 px per side; normalized to at most 500 px. Simple SVG path/shape input is locally rasterized at 256 px, with scripts/external resources/references/effects rejected and ≤2,000 elements. Text in SVG must be flattened. Image input is sampled into the displayed **20 × 20 luminance grid** after contain/cover crop, background light/dark choice and ±25% crop shift. Threshold (1–254) or grayscale depth generates a closed triangular height solid, Boolean-subtracted from the apron. The checkerboard shows the exact sampled cutout grid. Bright holes preserve original solid backing; interpolation means this is not exact vector boundary tracing. **2D-to-relief/silhouette conversion is not reconstruction of a full 3D object from a photo.** Engraving only: raised marks are intentionally unsupported. Text and six searchable local SVG icons use the same geometry pipeline.

**STL → actual integration:** strict ASCII/binary parsing in the worker, source preview/dimensions, explicit millimeter confirmation, Z-up/Y-up/−Z-up before attachment, proportional XY footprint scale, bounded independent Z depth, rotation and XY placement. Original accepted triangles are Boolean-subtracted, not displayed/re-exported unchanged, and never replaced by a convex hull. Current supported contract: one closed, consistently outward-wound **convex flat-bottom solid** with no unsupported overhang outside its bed footprint. Concavity/cavities/branches/multiple solids are explicitly rejected, not discarded or silently repaired. Limits: 1,500 triangles, 2 MB, each dimension .2–250 mm. Finite coordinates, nondegenerate triangles, edge incidence/winding, positive volume, self-intersection, convexity and ≥25% flat contact are checked. The convex hull used solely for bottom-contact validation does not replace the source mesh.

Both workflows engrave the protected 5.8 mm keep-in radius at plinth **(−18,−6) mm**, separated from joints and edges. .4–.6 mm depth leaves ≥4 mm backing. Transform bounds and slender features are rejected. Source/final previews, replace/remove/reset, reset transformations and built-in defaults are available. Unsupported content leaves a recoverable error and disables export.

## State, views and exports

Heavy CSG/parsing in a Web Worker; bounded resolution, 100 ms debounce, sequence and exact-state guards. Building/ready/error status is real. A last-valid preview can remain visible after an invalid edit, but **export is disabled**, never silently exporting stale geometry. Preview, download and displayed mesh fingerprint use the exact current model.

Three actual model-thumbnail presets; rounded/clipped/scalloped plinths; undo/redo; six local named designs; portable JSON with bounded embedded images/meshes. Missing image payload explicitly requests reattachment. Imported meshes are revalidated on restore. No phantom restoration of file paths.

Views: assembled, exploded (explanation-only offsets), connected flat card, clean print plate and every isolated part; see-through parts; touch orbit/pinch, zoom and fit. The assembled pose is geometric, not a simulated load/durability test. Export always uses bed-flat real solids. Prominent card/clean plate/per-part binary STL and **Everything ZIP** (four STLs, portable design JSON, numbered assembly notes). ZIP is not mislabelled 3MF. STL stores no colour.

## Printing / assembly

1. Print one connected card **or** three clean parts, flat at Z=0, PLA/PETG, .16–.20 mm layers, .4 mm nozzle; supports not intended. Inspect the slicer at 100% mm scale.
2. Snip all twelve low runners outside clean edges and trim scars. Four on each lower trunk avoid functional slots; four on plinth sides. Hold by the trunks, not fine branches.
3. First print the clean panel pair to calibrate half-lap width and elephant-foot compensation. .10–.30 mm TOTAL clearance depends on printer/material. Do not force the fit.
4. Hold panels at 90°. Raise the **upper-slotted panel from below** into the lower-slotted panel until the two trunk shoulders align. No bending or snap action is intended.
5. Lower the combined cross-shaped tongues into the cruciform plinth until shoulders seat. Keep removable, or use optional appropriate adhesive after calibration. No hardware required.
6. Handle as a static ornament. It is not a load-bearing structure. Physical printing, fit, stability and branch durability remain untested.

## Verification

`npm test` independently parses binary exports: exact byte length, finite vertices, nondegenerate faces, normals/winding, positive volume per component, welded edge incidence, bounds and expected components. Kernel checks cut all twelve tabs (carrier + exactly three unchanged released pieces), test flat part separation/card envelope, sampled support footprints, socket openings/floor/backing, final assembled intersections and 41 positions along each assembly path. Defaults, presets, field extremes, recursion corners, shapes and image/STL-derived outputs are covered. Invalid combinations are blocked.

`node serve-production.cjs`, then `node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs`, `node mobile-layout.cjs`, `node portable-errors-test.cjs` and `node hole-test.cjs` exercise production assets at the actual base path, real file pickers/downloads, shape/pixel/threshold/depth/transform changes, exact preview signatures and portable JSON regeneration, every preset, named designs, undo/redo, ZIP contents, worker failure/recovery, malformed/unsupported inputs, holes, phone touch orbit/pinch and unscaled 320/390/480 px layouts. Reports/screenshots are retained. See `VALIDATION.md` for actual results; these are computational checks, **not physical print tests**.
