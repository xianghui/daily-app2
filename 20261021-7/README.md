# Stillwater — tactile worry stone studio

A local React + Vite generator for a rigid, one-piece, concentric-ripple thumb-rubbing fidget. Cradle the underside, sweep across the dish or trace its rings. This is not a simulated game, moving-joint toy or static STL. Every change regenerates the final mesh in the browser. No API, CDN, remote font, hardware or paid service is used.

## Run / export

`npm install`, then `npm run dev`. `npm run predeploy` builds production `dist/`. Per-app `npm run deploy` is supplied as required; public monorepo publishing uses **the root** `npm run predeploy` and `npm run deploy`, not this app's deploy command. Base: `/daily-app2/20261021-7/`.

Choose a preset or edit sliders/numbers. Drag the preview to orbit, pinch/scroll to zoom, use Fit view to reset. Download binary STL creates a real millimeter-unit mesh with dimensions and ripple count in the filename. The exact same vertices and faces drive preview and export. STL does not encode units; import as millimeters. The optional 36 × 24 × 6 mm tactile coupon uses the selected relief and outline fullness, with a 1 mm dish and 3 ripples; preview and dimension readout switch to that actual coupon.

## Parameters

| Control | Supported range | Default | Unit |
| --- | --- | --- | --- |
| Palm length | 36–90 | 64 | mm |
| Palm width | 24–64 | 44 | mm |
| Rim height | 6–16 | 10 | mm |
| Dish depth | 1–6 | 3 | mm |
| Ripple relief | 0.20–1.20 | 0.65 | mm |
| Ripple count | 3–10, integer | 6 | count |
| Outline fullness | 2–3 | 2 (ellipse) | dimensionless superellipse exponent |

Width cannot exceed length. Conservative floor `height − dish − relief` must be ≥2.4 mm. Short-axis radial pitch `width / (2 × rings)` must be ≥1.8 mm. Invalid/nonfinite/empty inputs disable STL download, show errors, and replace the preview instead of exporting stale geometry. Dimensional floor/texture constraints are conservative geometry guardrails, not universal FDM settings. This rigid single solid has no clearance or fit parameter: there are no moving interfaces, assembly joins or compliant parts.

## Geometry

One genus-zero solid. A convex superelliptic footprint is sampled with 192 angular and 128 radial divisions. The upper surface is the graph

`z(r) = height − dish × (1 − r²) − relief × sin²(π × r × rings) × sin²(π × r)`.

The center is a single fan vertex, annular strips are triangulated consistently CCW, the bottom is a reversed planar fan, and side faces share the same perimeter vertices. Each export has 49,536 triangles (~2.48 MB). No overlapping visual primitives, CSG ambiguity, internal caps or duplicate center seams. A positive single-valued heightfield over homothetic convex rings, above a flat bottom, rules out unintended self-intersections/undercuts. Exact X/Y/Z dimensions are length, width, height. No worker is needed for this bounded mesh (~25k vertices).

## Printing

Flat underside on bed, dish up. No supports, hardware, release or assembly. Start at 0.16–0.20 mm layers, 0.4 mm nozzle, 3 walls, 15–25% infill. The full footprint is supported from the bed; upper surface contours subtract material, not unsupported islands. PLA gives crisp ripples; PETG is another rigid option. TPU can soften feel but requires printer-specific tuning and is not a tested equivalent. Print a coupon to compare tactile relief and layer texture before printing a full stone. Deburr/smooth the bottom perimeter and any rough surface after bed removal. This is not a flexible membrane: do not deliberately bend it. No physical print testing has been performed.

## Validation

- `node validate.mjs`: parses actual binary STL bytes; finite coordinates and normals, exact byte length, nonempty/nondegenerate triangles, winding/normal agreement, dimensions within 0.001 mm, positive volume, every welded (1e-5 mm) undirected edge has two opposite triangle incidences, single connected component, Euler characteristic 2. Default, min/max, presets and coupons, plus all 128 endpoint parameter combinations (invalid combinations must be blocked).
- Mechanical/printability checks are separate: minimum thickness bound, radial texture pitch, positive top-triangle projected areas and convex radial projection. This proves a non-folded solid with no internal intersections, not subjective tactile comfort or measured printer performance. There are no moving parts, retention limits, assembly positions or hardware to check.
- `node browser-test.cjs`: real headless Chromium controls, presets, representative extremes, invalid/empty input, reset, slider, actual downloaded STL byte equality to the shared generator and parsed topology; preview changes; 390px/320px phone layout, dispatched touch orbit/pinch, phone input/export, zero page errors. Screenshots and JSON results are recorded. `TEST_URL` optionally targets a deployed production URL.
- `node gallery-test.cjs`: every inline gallery script compiles with `new Function`; old entries remain unchanged; new entry appears once and first with area `stl`; runtime gallery cards and search work.

Dependencies: React, React DOM, Three.js with local OrbitControls; Vite + React plugin for build, gh-pages for deployment, Playwright for validation. No browser network dependency after loading bundled assets.
