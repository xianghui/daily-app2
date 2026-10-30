# Validation — Meridian & Orbit

Computational/browser checks run 2026-10-30. **No physical print, assembly-force, adhesive-strength, long-term stability or astronomical performance testing performed.**

## Passed before publication

- Downloaded actual CC BY 4.0 White Cat Kit Card STL; read-only local candidate inspection; binary parse, SHA-256, mm assumptions, bounding box, connected components and three measured Z cross-sections recorded. Source defects disclosed; original reconstruction only, no raw source redistribution.
- `npm test`: 8 built-in cases (three presets, simultaneous minima/maxima and all three footprints), 8 image/STL cases. Each card and all 4 parts serialized and independently checked for complete binary STL, finite/nondegenerate triangles, normal/winding agreement, welded 1e-5 mm two-face edge incidence, individual positive volumes, component count and mm bounds.
- `node parameter-check.mjs`: 24 one-field extrema plus 8 mixed extreme diameter/thickness/import cases; invalid/nonfinite values rejected. Together with the first suite: **48 model cases**.
- Every model case also checks actual solid intersections and assembly: opposed polar insertion, vertical pedestal lowering, 5 shoulders, .8 mm socket rims, clear opposed-tip corridor, disconnected print pieces, declared card envelope and all 16 snips. Card is exactly one component; snips yield four released parts plus one carrier. Polar joints are shallow and adhesive-required, not captive.
- `node hole-check.mjs`: independent solid probes confirm raised and engraved source holes over continuous backing.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary picker uploads; actual downloaded STLs, UI fingerprint match, regeneration from portable JSON, independent per-part mesh and assembly checks. Changes in source pixels, threshold, depth, crop, scale, rotation and placement change the exported result. Reset reproduces baseline. Unit confirmation required. Invalid/truncated/open/nonmanifold/concave/oversized files, excessive triangles/dimensions, white empty silhouettes, nonfinite transforms and safe-zone violations block all exports recoverably. No remote runtime requests.
- `node studio-test.cjs`: real preset thumbnails/models, three silhouettes, text/icons/SVG, engraved marks, exact ZIP contents and per-part STL parse, image and mesh JSON round trips, missing payload rejection, named local designs after reload, undo/redo, all views, focus, collapsible sections, persisted dark theme and reduced motion. Production worker aborted deliberately: clear error, disabled export, reload recovery.
- `node axis-test.cjs`: original mesh inverse-rotated to Y-up and −Z-up fixtures, imported through browser, produces byte-identical final STL after selected orientation; axis changes clear source and require reattachment.
- Phone: 320/390 px, preview-first stacked layout, no horizontal overflow, reachable downloads, real image/STL uploads, CDP touch orbit and pinch alter preview. Desktop left rail 374 px/right viewer. Screenshots inspected.
- `npm run predeploy` succeeds. Tests run against built production output at the real `/daily-app2/20261030-10/` prefix, not just a development server.

## Combined-site validation

Gallery update preserves all 282 prior entries, adds one newest entry in area `stl`, retains STL Generators category ordering and compiles every inline script using `new Function` (nonzero on failure/missing script).

Root `npm run predeploy`: **283 built, 0 failed, 0 skipped**. `check-combined.mjs` verifies every route, exact gallery bytes and all 47 new-app production assets including WASM/worker. `gallery-browser-test.cjs` verifies all cards render with no runtime errors and the new route loads a valid geometry result. The complete browser import/download suite is repeated against the combined `deploy/` tree, report `combined-browser-validation.json`.

## Evidence

- `reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`
- `validation-report.json`, `parameter-validation.json`, `hole-validation.json`
- `browser-validation.json`, `studio-validation.json`, `axis-validation.json`
- `gallery-validation.json`, `combined-build-validation.json`, `gallery-browser-validation.json`, `combined-browser-validation.json`
- `evidence/studio-light-assembled.png`, `evidence/imported-ring-cutout.png`, `evidence/studio-dark.png`, `desktop-validation.png`, `mobile-validation.png`

Geometric assembly and manifold output do not establish printer-specific fit, fatigue, bridging, bond strength or physical stability. Slice and calibrate actual parts before the full card. Use compatible adhesive for all five fixed joints.
