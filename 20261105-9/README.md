# Pinhole & Project

A browser-based **flat-pack pinhole-camera kit-card generator**. Snip twelve low runners, stand a small aperture panel in a blind seat, and place a tracing-paper screen in two parallel blind tracks. Slide the screen over a real **30–76 mm** projection distance. The printable kit contains a camera bed, aperture panel and sliding screen; the connected card is a genuine single solid, not loose parts near a rectangle.

**Required external materials:** translucent tracing paper, opaque black paper for a loose light-excluding sleeve, and removable tape. No fasteners, bearings, magnets or glue. The printed frame alone is not light-tight. Optional thin foil with a finer pinhole can improve the coarse printed aperture. Keep the gravity-seated assembly horizontal: panels are removable, **not captive**. Do not aim at the sun.

This is distinct from the gallery's fixed `Ray & Box` projection chamber: it has no six-wall box assembly. Two explicit parallel guide tracks and two screen tongues provide variable screen distance, with a real engraved scale/index. No image projection or successful optical performance is simulated or claimed.

## Run / build / test

```sh
npm install
npm run dev
npm run predeploy
npm test
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node mobile-layout.cjs
node hole-test.cjs
```

Production base: `/daily-app2/20261105-9/`. The local production test server listens on port 5959. Per-app deployment scripts exist as required, but combined public publication uses the **repository-root** `npm run predeploy` and `npm run deploy`, not the per-app deploy command.

## Reference-first evidence and attribution

Local candidates were inspected first, including Keycap Studio's README, App.tsx, Viewer.tsx, styles.css, worker.ts, geometry/stl.ts and export.ts, plus the fabric studio README. Both actual local STL candidates were parsed: the three-component MX template is unrelated to a sheet camera, and the single interlocking fabric link is unrelated to planar slots. No switch socket or keycap is imposed on this kit.

The selected source is **White Cat Kit Card**, Mike Kasberg, [upstream repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Upstream README and licence are saved in `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`.

- Actual downloaded source mesh SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; approximately **179.82 × 178.02 × 3.19 mm**. STL has no units; millimeters are assumed from the sheet/slot dimensions and upstream design.
- Edge-adjacent split: **27 components**, including duplicate/degenerate zero-volume pseudo-components. The complete source is **nonmanifold**; this is not a claim that the source is printable or was repaired.
- Actual measured cross-sections at Z=.10, .215 and 1.59 mm show repeated **4.50 × 1.70 mm** receiving slots, a **1.60 mm** sheet plane, and **.21–.22 mm** low carrier runners.
- Measured dimensions preserved: default 1.60 mm sheet, 1.70 mm front receiving width. **.10 mm TOTAL allowance** is the measured difference, only a printer/material-dependent starting point.
- Proposed redesign: front socket length **12 + allowance mm**, twin track width **6 + allowance mm**, **54 mm** track length, **28 mm** tongue/track pitch, **3 mm** engagement and a full sheet-thickness floor. Runners strengthened to **.4–.6 mm**. These are new design decisions, not source measurements.
- This is an original parametric camera reconstruction using the source's actual sheet/slot/carrier construction, not a raw source re-export. No source mesh, private input, fan-art silhouette, Git history or source dependencies are bundled.

Reproducible analysis: `reference-analysis.py`, detailed `reference-analysis.json`, and actual source sections in `evidence/reference-sections.png`. The script expects the public mesh downloaded to `/tmp/pinhole-reference.stl`; its documented download URL is in the JSON. The source tree is read-only.

Visual/interaction reference: Keycap Studio's concrete 374 px scrollable left rail, sticky compact header, grouped tactile raised/pressed controls, paired range/mm fields, collapsible sections, local Fredoka/Rubik fonts, lavender-grey #e7e9f1 desk, white panels, #1f2233 ink, coral #e2557a selections, and large right Three.js viewer. Phones stack the preview, warnings and exports before controls. Dark theme is saved. Focus states and reduced-motion CSS are included. Local studio/import infrastructure is reused; camera geometry, guide tracks, assembly poses, scale and validation are new.

## Real parameters and supported bounds

All lengths are **millimeters**, rotations degrees. Bounds are enforced in worker and UI; invalid edits block export.

| Parameter | Range |
|---|---|
| Card width / height | 220–280 / 180–240 |
| Screen distance | 30–76 |
| Printed pinhole diameter | .8–2.0 |
| Screen window square | 20–28 |
| Optical height above bed | 26–34 |
| Panel thickness | 1.6–2.4 |
| TOTAL slot allowance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Art footprint / depth | 4–7 / .4–.6 |
| Art X / Y offset | ±1.5 / ±2 |
| Art rotation | ±180° |

Bed is 108 × 50 × (sheet+3) mm. Panels are 46 mm wide. Panel height is opticalHeight + window/2 + 7 mm, plus a 3 mm tongue. Screen lower beam remains ≥12 mm. A continuous bed floor remains under every blind track. Bed outlines: rounded, clipped and scalloped. Three actual model-thumbnail presets change pinhole/window/distance, not just colour.

Distance changes the actual engraved index triangle and assembled screen position. 5 mm ticks are genuine .4 mm-deep geometry; ticks are unnumbered, with default distances specified in saved design / assembly notes. Aperture, window and optical-height edits rebuild the actual panels. Screen distance changes geometric field angle `2*atan(window/(2*distance))` and magnification, **not conventional lens focus**. The coarse cylindrical printed bore can vignette; this is not a calibrated optical instrument.

## Image / SVG / text / icon workflow

Picker works on phones/desktops; desktop drag/drop also works. Bundle contains synthetic samples only (`public/samples`, attribution included). Limits: **2 MB**, **12 MP**, **6,000 px** side. PNG/JPEG content signatures and header dimensions are checked before decoding; normalized asset is ≤500 px per side. Simple SVG filled paths/shapes are locally rasterized at 256 px; scripts, external references/resources, effects and >2,000 elements are rejected. Flatten SVG text first.

Exact conversion: contain/cover fit, ±25% crop offset and light/dark background are sampled to a **20 × 20 luminance grid**. Threshold 1–254 gives silhouette heights; grayscale gives proportional heights. A closed triangular height solid is Boolean-subtracted from the camera bed. The checkerboard shows the exact sampled cutout. Bright holes retain full backing; this is sampled height geometry with interpolation, **not exact vector tracing**. It is **2D-to-relief/silhouette conversion, not full 3D reconstruction from one photo**. Text up to eight characters and six searchable bundled SVG marks use the same local pipeline.

Artwork is engraved only, .4–.6 mm deep, in a protected 5.8 mm radius at **(-27,-16) mm**; ≥4 mm backing remains. It cannot reach seats, tracks or edges. Placement, footprint, rotation, depth, replacement/removal and transform/image reset all affect the actual Boolean geometry. Raised artwork is intentionally unsupported to preserve the bed envelope.

## Imported STL workflow

Strict **ASCII and binary STL** parsers run in the worker. Source preview, source dimensions, explicit **millimeter confirmation**, Z-up/Y-up/−Z-up orientation, proportional XY footprint scale, independent bounded Z engraving-depth scale, rotation and placement are provided. Changing up axis requests reattachment. The accepted **actual triangles** are subtracted into the camera bed—not just displayed or re-exported, and **never replaced by a convex hull**.

Current supported input contract: **one convex, closed, outward-wound, flat-bottom solid**, without overhang beyond its bed footprint. Concavities, cavities, thin branches, multiple solids, open/nonmanifold/self-intersecting/inconsistently wound input are explicitly rejected with guidance. No automatic repair claim. Limits: **1,500 triangles, 2 MB, .2–250 mm per source axis**; finite coordinates, nondegeneracy, welded edges, positive volume, self-intersections, convexity, ≥25% flat bottom contact and support-free footprint are checked. The bottom-contact validation uses a 2D hull only as a test; it does not replace any input triangles. XY dimensions remain proportional; Z is deliberately compressed to engraving depth and displayed as a separate scale factor.

## State, preview, privacy and export

All file processing, geometry, fonts, dependencies and export stay **locally in the browser**; no API key, CDN, paid service or upload. Heavy Manifold WASM/CSG lives in a Web Worker; 100 ms debounce, request ids, async import guards and exact-state keys block stale exports. A last-good preview may remain after a bad edit, clearly labelled, but **every STL/ZIP export is disabled** until the current state is valid. Preview and download share the exact current mesh; an exposed geometry fingerprint is tested against downloaded bytes.

Undo/redo, up to six local named designs and portable JSON save/open include bounded normalized image or mesh payloads. Missing/invalid portable input is rejected and requests reattachment; file paths are never treated as restored assets. Local storage failure suggests JSON download.

Views: assembled, exploded, connected flat card, de-tabbed print plate and each isolated part; see-through parts, orbit/zoom, fit, top/front view and touch gestures. Assembly view does not simulate paper, projected images or successful optics. Exploded offsets are explanatory only. STLs always use genuine bed-flat print geometry. Preview colours are not encoded in STL.

Binary STL: connected card, clean plate, and each individual part. Everything ZIP includes connected card, three clean part STLs, portable design JSON, and numbered assembly/material notes with the current fit dimensions. ZIP is not labelled 3MF. Clean plate contains exactly three separate closed solids; the connected card contains one solid.

## Printing, assembly and calibration

1. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, bed-flat Z=0; supports not intended. Print card OR clean parts, not both. Default card is 240 × 200 × 4.6 mm: use a large enough bed or choose a smaller supported card.
2. Print the clean bed and aperture panel first as the fit trial. Calibrate .10–.30 mm total allowance for your material/printer, first-layer expansion and elephant foot; no universal fit promise.
3. Snip all twelve accessible runners outside clean boundaries, trim carefully, and leave pinhole/window/tongues intact.
4. Insert front tongue vertically into its blind seat; shoulders rest on bed.
5. Tape tracing paper over the screen opening, lower its two tongues into both tracks, and slide to the indexed distance. It is gravity-seated, **not positively retained**; keep horizontal.
6. Cut a loose opaque-paper sleeve to the actual assembly, leaving sliding slack; tape sides/top to exclude light and shade the viewing end. A paper pattern is not generated. Optional fine foil pinhole fits over the printed bore.
7. Aim at a bright ordinary scene, never the sun; look for a dim inverted image. Printing, fit, light sealing and image formation are untested physically. Lift panels straight up to disassemble; no snap flexing is needed.

## Dependencies and computational validation

React/Vite; Three.js orbit preview; Manifold WASM Boolean solids; fflate ZIP; locally bundled Fredoka/Rubik (SIL OFL). No dependency history copied from the reference project.

`validate.mjs` independently parses **float32 exported STL bytes**, verifies exact byte counts, finite vertices/normals, nondegenerate triangles, outward normals, edge incidence two with opposite direction after **1e-5 mm welding**, connected-component positive volumes and expected mm bounds. Each part and clean plate are checked, not just the combined card. It probes support-free footprints, real card bounds, tab-cut release into carrier plus exactly three unharmed parts, unobstructed pinhole/window/tracks, floor/backing, full 47-position screen travel, 329 screen insertion samples and 31 front insertion samples. These calculations are independent of mesh validity.

The same checks run on defaults, all presets/shapes, parameter endpoints/corners and image/STL-derived outputs. Browser tests upload actual PNG/JPEG/ASCII/binary fixtures, vary geometry controls, compare actual downloaded STL against the preview and regenerated portable JSON, exercise invalid inputs/recovery, all icons/text/SVG holes, undo/redo, persistence, worker failure/stale handling, per-part and ZIP export, phone touch orbit/pinch, desktop/phone layout and dark theme. See the saved validation reports and screenshots for observed results.

**No physical print, sliding durability, light-tightness or optical image test was performed.** Computational watertightness, collision and assembly checks do not prove those properties.
