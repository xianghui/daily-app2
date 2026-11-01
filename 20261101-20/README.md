# Contour & Summit

A local React + Vite **six-part contour-terrain kit-card generator**. Snip 24 real runners, seat a stepped spine in a plinth, then lower four increasingly small contour plates over the narrowing spine. Wider steps below each slot create shoulder stops. Glue after calibration; no moving joint, snap lock, geographic accuracy or load rating is claimed.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Node 22.12+; production base `/daily-app2/20261101-20/`. Individual `predeploy` is `npm run build`, `deploy` is `gh-pages -d dist`. Whole-gallery publishing uses **the parent monorepo** `npm run predeploy` then `npm run deploy`; do not deploy this folder over the gallery.

## Reference-first evidence and design decisions

Local references were examined **before selecting the kit geometry**. The keycap template has 944 triangles, three switch-specific parts and a 15.20 × 15.20 × 43.10 mm combined bounding envelope; the fabric link has 5,940 triangles, one component and a 7.981 × 9.241 × 8 mm envelope. Neither supplies flat-sheet assembly or card runners, so neither was forced into this unrelated mechanism. Project READMEs were inspected read-only.

The selected public reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. License and source README were retrieved in this run. Binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles, 179.819997 × 178.019994 × 3.190000 mm. Units assumed mm, corroborated by its sheet interfaces; STL contains no unit metadata. 27 edge-adjacent components and source nonwatertight defects were recorded, not copied or claimed repaired.

The actual downloaded mesh was parsed, split into components and cross-sectioned at Z=.1/.5/1.59 mm. See `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png`. Reproduce with a local Python environment containing trimesh/numpy/matplotlib: `python reference-measure.py /path/to/downloaded-reference.stl`. Raw third-party mesh is **not bundled**. No arbitrary private model, reference Git history or reference dependencies were copied.

Measured: 1.6 mm sheet, 4.50 × 1.700012 mm sockets, low source runner planes .21/.22 mm. Retained: default sheet and plinth socket length. Proposed: total slot allowance .10–.30 mm (default .15 vs source ~.100012), tongue length = 4.50 minus allowance, thicker accessible .4–.6 mm breakaway runners. Redesigned: plinth, narrowing stepped spine, four horizontal contours and six-bay card are original parametric CSG, not source triangles or a convex hull. Every contour's slot clears all higher steps but stops on a wider lower shoulder. No source artwork is reproduced. Changes are attributed; reference license is in `REFERENCE-LICENSE.txt`.

## Studio and customization

The read-only **keycap_generator2** visual/interaction reference was inspected: README, App.tsx, styles.css, Viewer.tsx, worker.ts, export.ts, geometry/stl.ts and imageTrace.ts. Applied concrete patterns: 374px scrolling left rail, sticky compact brand/theme header, labelled collapsible sections, paired numeric/sliders, tactile raised/pressed key buttons, lavender desk/white panels/coral selection, exact final mesh preview, touch orbit/zoom/fit, checkerboard cutout, current-result worker/export gating, part views and portable designs. On phones the viewer, dimensions and export come first, then controls. Local Fredoka/Rubik fonts, saved light/dark theme, visible keyboard focus and reduced-motion CSS.

Three real presets with generated 3D thumbnails: Soft summit, Mesa steps, Highland facets. Circle, square and octagonal contours; lowest span changes actual plates and shoulder widths, elevation interval changes real spine steps. Undo/redo, bounded variations, six local named designs, JSON save/open. Palette colours are preview-only; STL cannot store colour.

### Supported parameters (all dimensions mm)

| Parameter | Range / meaning |
|---|---|
| Card width / height | 180–220 each; packing errors block export |
| Lowest contour span | 40–56; subsequent contour spans .8/.6/.4 × lowest |
| Elevation interval | 6–12; air gap = interval minus sheet |
| Sheet | 1.6–2.4 |
| Total slot allowance | .10–.30; not per side |
| Part spacing | 3–4 |
| Runner width / height | .8–1.4 / .4–.6 |
| Engraving footprint | 4–7, proportional source XY |
| Engraving depth | .4–.6; at least 1 mm backing |
| Art transforms | Z rotation ±180°, X±1.5/Y±2; keep-in radius 6.5 |

Spine widths are .70/.55/.40/.25 times lowest span, then 4.50 mm. Terrace slot length = upper spine step width + allowance. Plinth tongue = 4.50 minus allowance and sheet-deep. Shoulder overlap is independently checked; no adhesive strength is simulated. Assembled, exploded, connected-card, de-tabbed and isolated-part views share exact underlying solids. The contour-lift slider explains insertion only and is preview-only, labelled accordingly. All downloads remain bed-flat; glued assemblies do not move.

## Local image workflow

File picker on desktop/phone and drag/drop; synthetic PNG, JPEG and SVG samples included. PNG/JPEG: actual content/header checks, **≤2 MB, ≤12 MP and ≤6000 px per side**, normalized to max 500px and portable ≤250,000 pixels. Simple SVG: ≤2000 permitted vector elements, ≤6000px declared side, external resources/scripts/references/effects rejected; rasterized locally to 256px. Holes use browser SVG fill rules.

A **20×20 sampled height field** uses local canvas luminance, transparent pixels composited over chosen light/dark background, threshold 1–254 or grayscale depth. Fit/crop and ±25% crop shifts alter samples; checkerboard displays actual cutout grid. Continuous triangulated top, boundary walls and a bottom form a closed cutter. Boolean subtraction engraves the protected front plinth patch, away from the spine socket. Bright holes preserve the unengraved surface and solid backing; this is not exact vector contour tracing and does not cut through the plinth. Empty images block export. Text (up to eight characters) and six searchable bundled vector marks use the same real geometry conversion. Raised art is intentionally unavailable to preserve bed-flat sheet geometry.

This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo**. Source and cutout are shown separately; replacement/removal, image-control and transform reset return to built-in defaults.

## Local STL workflow

Actual binary and ASCII STL, **40 bytes–2 MB, ≤1500 triangles, .2–250 mm per axis**, finite and bounded coordinates. Parser welds equal vertices at 1e-5 mm; rejects degenerate triangles, open/nonmanifold/wrong-winding, nonpositive or disconnected volume and self-intersections. Supported integration contract: one **convex outward-wound solid with a broad flat bottom**, no overhangs or hollow/concave/branched shape. Unsupported geometry is rejected with guidance, never converted to a hull or silently repaired.

Choose Z/Y/−Z up before attaching, see source 3D preview/dimensions/triangle count, **explicitly confirm millimeter scale**. Changing up axis clears the source and requests reattachment. XY scale follows the footprint proportionally; Z independently fits depth. Rotation, placement, size and depth change the exact mesh-shaped Boolean cutter in the plinth; this is not unchanged mesh re-export or interpenetrating shell export. Source concavities are unsupported, not discarded. Keep-in and backing checks protect the functional socket. Replace/remove/reset are available.

User files never leave the browser, are never committed or uploaded. Portable JSON carries bounded normalized image or parsed mesh payloads; missing image payload requires reattachment and blocks export. Restored STL payloads are reparsed through the same validation. Named designs use browser localStorage; clearing browser data removes them. No remote API, API key, CDN imports or paid service.

## Geometry / exports

Manifold WASM genuine unions/differences in a Web Worker, bounded 96-segment circles and small import grids, 100ms debounce, generation ids/stale-result guards. Parser runs in worker. Loading/building/success/error status; malformed inputs invalidate export even when a last-good preview is visible. Preview and downloads share exact current result; displayed mesh fingerprint is checked against downloaded STL. Workers/WASM/fonts are bundled locally.

One-click binary **connected-card STL**, per-part buttons, and **Everything ZIP** containing the connected card, six clean individual part STLs and numbered `ASSEMBLY.txt` with current fits. Do not print duplicate card and parts unless desired. Final X/Y/Z dimensions in mm update for selection. STL is geometry only, not 3MF or preview colour, with no embedded unit metadata. De-tabbed print plate is a view; the real card is a Boolean-unioned connected frame/parts/24 runners, not loose parts near a rectangle.

## Validation and limitations

Reproducible scripts: `validate.mjs` checks defaults, every preset and silhouette, individual and combined parameter bounds, both STL sample formats and transform changes, threshold/grayscale image cases and import cases at bounds. Independent float32 STL checks: exact byte length, finite coordinates, nonzero faces, normalized consistent normals, millimeter bounds, opposite-directed two-face edge incidence welded at 1e-5 mm, positive volume per connected component. Separately validate every part, connected card and six-part loose layout.

Independent Manifold intersections check all 15 assembled pairs, ordered downward insertion paths, five socket/shoulder stops, clear air gaps, flush spine tongue, print-layout nonintersection, full containment in the connected card and accessible cuts avoiding functional interfaces. After 24 snips there must be seven components (six parts plus carrier). Cross-sections compare upper material to initial bed footprint to detect unsupported floating overhangs.

`browser-test.cjs`: actual production-browser PNG/JPEG/ASCII/binary file picks and STL downloads; thresholds, crop, depth, scale, rotation, placement, source changes/reset; downloaded bytes compared with UI fingerprint, saved JSON regeneration and independent mesh/assembly validation. Reject malformed/truncated/empty/excessive/concave/open/nonmanifold cases. Phone 320/390px, touch orbit and pinch, real phone imports/exports, no external requests/runtime errors.

`studio-test.cjs`: every preset, shapes, text/icons/SVG, exact ZIP members/meshes, JSON and named-save reload, missing portable payload, undo/redo, all views, theme persistence, focus/collapsible/reduced motion, desktop-left/phone-preview-first, failed worker abort/reload recovery. `personalization-check.mjs` probes actual preserved bright hole and dark engraved ring in final solid; icons/drop, orientation, rapid-gate and phone-expanded-controls scripts add focused checks. Saved reports and screenshots are evidence from this run, not claims of physical testing.

**No physical print, assembly, stability, glue strength, durability, material or calibration test performed.** Print the calibration parts first, inspect layer adhesion and fit, use suitable adhesive, and treat as a light indoor craft display. Not a shelf, climbing aid, geospatial model or children's toy.

## Dependencies / credits

React/ReactDOM, Vite React plugin, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL 1.1), gh-pages; Playwright for local verification. Six built-in mark paths are original simple geometric shapes. Synthetic sample images/meshes are test fixtures, not user uploads. Studio infrastructure adapted from earlier apps in this monorepo; the stepped terrain geometry, assembly map and checks are new. No dependency tree, history or deploy scripts copied from the read-only visual reference.
