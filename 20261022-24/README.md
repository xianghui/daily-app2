# Fivefold Trace — two-input fidget studio

Browser-based React + Vite parametric STL editor. Two independently guided ground rockers steer a shared tracing tip through a **five-bar parallel linkage with two degrees of freedom**. This differs from a one-input four-bar: move either rocker separately to explore a small curved workspace, or gently guide the capped tip with your finger. Ten printed pieces, no hardware, springs, bearings, magnets or paid services.

## Run and build

```
npm install
npm run dev
npm test
npm run predeploy
```

Vite base is `/daily-app2/20261022-24/`. Per-app `predeploy` is exactly `npm run build`; `deploy` is `gh-pages -d dist`. Public monorepo publishing uses the parent repository's `npm run predeploy` and `npm run deploy`, not the individual deployment.

## Studio

Large model-first Three.js canvas, soft clay colours, orbit, pinch/zoom, fit, 10 mm ground grid, tap-to-select active part, assembled and separate printable layouts. Compact Shape / Mechanism / Surface / Import / Print rail, collapsible phone controls, persistent touch-accessible export. All model dimensions are **millimeters**; the displayed X/Y/Z correspond to the selected export's exact final geometry. The assembled pose is not a printable fused solid. The preview palette does **not** add colour to geometry-only STL.

Three actual generated-model thumbnail presets: Balanced, Wide trace, Pocket trace. They vary rocker length, ground spacing, tracing-arm length and palm radius. Variations samples bounded parameters. Changes rebuild real CSG geometry in a local worker, no reload. Undo/redo keeps 35 bounded design states; quick edits coalesce after 450 ms. Local JSON Save/Open includes bounded mesh/pixel data and a normalized image preview (maximum 500 px side), so imported sources restore without pretending a missing file exists. File JSON is limited to 2 MB; topology of restored STL payloads is rechecked. No personal uploads are bundled.

## Image → actual printable grip

File picker works on desktop and phone; Import panel also accepts one dropped file. Real PNG and JPEG files, **16 bytes–2 MB**, ≤12 MP, ≤6,000 px per side. Header/content checked before browser decode. Images are normalized locally, flattened onto white (including transparency), fitted or cropped to a **20×20** conversion grid, and converted to luminance using `0.2126R + 0.7152G + 0.0722B`. Source and conversion previews are visible.

Threshold mode raises samples darker than the threshold to the chosen depth. Grayscale mode gives each vertex height `depth × (1 − luminance / 255)`. Continuous triangulated top surface, perimeter sidewalls and an outward-oriented bottom close the resulting relief volume. A 0.4 mm backing prevents islands from becoming detached shells. It overlaps the fixed tab's top by 0.15 mm, then **Manifold boolean union** makes a single connected palm-base solid. Threshold transitions are triangulated ramps, not exact vector contour tracing. This is **2D relief/silhouette conversion, not automatic 3D reconstruction from a photograph**.

Threshold 1–254, depth 0.4–3 mm, fit/cover, crop X/Y ±25%, footprint 4–7 mm, rotation around Z ±180°, placement X ±1.5 / Y ±2 mm. Empty relief is rejected. Footprint controls physical scale; depth controls thickness. Changing pixels, threshold, depth, scale or placement changes actual exported triangles. Replace, remove, image reset, transform reset, and Reset all are supported.

## STL → integrated stationary palm grip

ASCII and binary `.stl`, ≤2 MB, ≤1,500 triangles, each source bounding dimension 0.2–250 mm. STL contains **no unit metadata**: the user must explicitly confirm millimeter coordinates before export is enabled. Source 3D preview and source dimensions are shown. Source XY is proportionally normalized to the 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Z rotation, center/reset and X/Y placement affect the final union, not just the preview. Fitted XY minimum span 1.2 mm.

The integration contract deliberately accepts **one convex, watertight, outward-wound, flat-bottomed, support-free solid**. Broad flat bottom must cover at least 25% of bounding XY and contain every vertex's XY projection. It rejects concavity, hollow/disconnected shells, overhangs, thin branches, nonfinite coordinates, malformed/truncated content, degenerate triangles, excessive dimensions/count, open/nonmanifold edges, inconsistent winding, negative volume and detected self-intersections. Triangle-pair tests and convex support-plane checks are bounded. No automatic mesh repair is claimed. Reorient, rescale, simplify or make a solid broad-bottom grip in a modeler if rejected; the error is recoverable by replacement/removal/reset.

The normalized grip overlaps the tab by 0.15 mm and is robustly boolean-unioned. A post-union connectivity check rejects unsupported detached pieces. Imported vertices must stay within a protected 6.5 mm radial safe zone on the tab. They cannot alter moving joints, pin shoulders, retention caps or link clearances. This is genuine mesh-to-fidget integration, not unchanged mesh re-export.

## Parameters and print mechanics

| Parameter | Supported range |
| --- | --- |
| Ground pivot spacing | 30–38 mm |
| Input rocker length | 14–18 mm |
| Tracing arm length | 28–34 mm |
| Radial and axial running clearance | 0.25–0.50 mm |
| Palm tab radius | 7–9 mm |
| Palm edge groove depth | 0–0.50 mm |
| Cap socket radial allowance | −0.08 to −0.01 mm |

Arms are 3 mm thick with 4.8 mm end radii and Ø(5 + 2×gap) mm bores. Minimum bearing ring wall is 1.8 mm. Base is 3 mm thick. Both rockers start at `3 + gap`; left tracer at `8 + 2gap`; right tracer at `13 + 3gap`. Tracer layers therefore have `2 + gap` mm free separation. Elbow pins rise from the rockers and a tip pin rises from the left tracer through the right tracer. Spindles are Ø5 mm, shoulder pegs Ø3.6 mm, cap outer diameter 9 mm. Cap sockets are Ø(3.6 + 2×allowance), giving 0.02–0.16 mm diametral interference. Shoulder-defined clearances prevent caps clamping moving faces. Retaining overlap is at least 1.5 mm beyond the bore.

Both rocker preview angles independently range from **70–110°**. Each elbow is computed from its rocker; the tracing tip is the upper intersection of equal-radius circles centered on the two elbows. This closes both tracing arms exactly, rather than animating disconnected bars. The selected parameter range stays away from coincident elbows and straight-arm singularities throughout this two-input window. There are **no hard travel stops**: guide gently within the illustrated workspace and avoid flattening, changing branch or forcing the mechanism. Keep fingers clear of pinch points. There are no compliant parts whose elasticity is assumed safe.

## Export and assembly

The primary Download STL stays reachable. Binary STL contains all ten separate solids in a nonintersecting bed-flat layout, or the selected individual part. ZIP contains ten named STL files plus assembly notes. The combined strip is about 293 mm wide at default settings, so on smaller beds use individual parts from the ZIP and arrange them in your slicer. The fit coupon is an actual socket cap to test on a Ø3.6 mm peg. Preview and export consume the same final vertex/index arrays; assembled poses never alter the printable layout.

1. Print broad flat faces down, pins/bores up. No supports intended.
2. PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four walls. Begin with 0.35 mm running clearance and −0.03 mm socket allowance. **Fit depends on printer/material**; test coupon first.
3. Place left-rocker and right-rocker on the two base spindles. Seat base caps on the smaller shoulder pegs without clamping the rockers.
4. Place left-tracer on the short left elbow pin and right-tracer on the tall right elbow pin. Bring the arms together on the upper branch; the left-tracer tip pin passes upward through the right-tracer tip bore.
5. Seat elbow-cap-left, elbow-cap-right and tip-cap. Verify five free joints and gently pull-test cap retention before use. Hold the palm tab and steer either rocker or the shared tip, staying in the illustrated window. Remove caps gently for service; adjust allowance instead of forcing a bad fit. Small parts are not suitable for young children.

## Validation evidence and limits

`npm test` writes `geometry-validation.json`: default, min/max, every preset, all 128 seven-parameter range corners and deterministic variations; per-part and combined binary STL parsing checks finite coordinates, nonzero triangles, nondegenerate faces, outward stored normals, positive volume **per connected component**, edge incidence exactly two after welding at 0.00001 mm, neighbor winding and exact expected millimeter bounds. All export parts are separate and bed-flat. Manifold CSG avoids overlapping shells/internal faces.

Mechanism checks verify five-bar closure over a 21×21 two-input grid, running gaps, retained overlap, safe tab location and separated print layouts. Boolean assembled solid intersection tests sample 49 two-input poses, excluding only the five intentional cap-peg interference fits. Imported image relief and both STL fixtures undergo the same mesh/closure/collision checks at six representative parameter sets. Additional checks cover out-of-range parameters, unconfirmed source units, invalid transforms, empty relief and safe-zone violations.

`browser-test.cjs`, `extra-browser.cjs`, `production-test.cjs` and `roundtrip-test.cjs` exercise actual local file inputs and downloaded STL bytes, PNG/JPEG and ASCII/binary integration, changed pixel/control content, transform persistence, preview/export signatures, malformed inputs, per-part/ZIP/coupon export, presets, variations, undo/redo, portable JSON save/open, replacement/removal/reset, sample buttons and drag/drop. Phone checks at 320/390 px include touch orbit/pinch, reachable export, collapsible controls and overflow. JSON reports and desktop/mobile screenshots record results. `gallery-test.cjs` checks all inline scripts, one new gallery entry, previous entries and runtime rendering. `public-smoke.cjs` checks published worker/WASM, actual imports and downloads on a phone viewport.

**Digital validation is not physical print testing. No physical print has been tested.** Friction, wear, feel, cap press retention and real slicer/printer behavior need a trial. Sampled collision checks do not claim a formal continuous proof or arbitrary full-turn operation. No invented print-time estimate or ready-to-print certification.

## Privacy and dependencies

All personal files remain in local browser memory, with optional explicit local JSON download. No upload/API/cloud service, CDN imports, telemetry or API keys. Only original synthetic fixtures are bundled (see `public/samples/README.md`): mark PNG, sine-wave JPEG, closed wedge ASCII STL, hex-frustum binary STL. Assets have no personal or third-party input. Sample loading fetches only same-origin bundled files. Dependencies: React/ReactDOM, Vite React plugin, Three.js/OrbitControls, Manifold-3D/WASM (locally bundled CSG worker), fflate (local ZIP), gh-pages (deployment). Playwright is a development-only browser validation dependency.

Visual/interaction reference: https://vaseverse.org/ for model-first composition, compact parameter tabs and reachable export. Original name, text and mechanism; no reference branding/assets/source copied. The old `/Volumes/ExternalHD/daily_app/` tree was inspected read-only and is not used for building or publishing.
