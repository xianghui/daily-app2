# Executed validation

- `npm run predeploy`: passed, production worker/WASM and fonts bundled under `/daily-app2/20261027-18/`.
- `npm test`: 20 parameter/preset/extreme cases; 30 image/STL-derived cases; all four exported solids per case parsed independently from binary STL.
- Checks: finite vertices, normals/winding, nondegenerate triangles, exact millimeter bounds, welded closed-manifold edges, positive volume per connected component; real 1-component card and individually closed deck/trestles.
- Assembly: all parts preserved exactly in card, no loose-layout intersections, through-slot matching/oversize gauges, complete sampled straight-down deck assembly/lift path collision-free, twelve cutter strokes yield precisely frame + three parts. No captive-retention claim. These are computational checks, not force/fit tests.
- `browser-test.cjs`: 26 downloaded outputs across real PNG/JPEG/ASCII/binary inputs, thresholds/depth/grayscale/crop/scaling/placement/rotation, min/max dimensions and phone exports; exact browser-preview/download/portable-JSON regeneration agreement. Malformed/truncated/open/nonmanifold/concave/excessive/empty inputs reject recoverably; invalid/stale exports disabled.
- `feature-test.cjs`: all presets, three bounded variations, three deck shapes, text, SVG icons, ring engraving, inverted JPEG, all four asset JSON round trips, named designs after reload, undo/redo, real four-STL Everything ZIP and per-part downloads, isolated/connected/assembled/exploded views, persisted dark theme, preview-only color, drag/drop, Y-up STL orientation, collapsible section, keyboard focus, latest-worker-result behavior.
- `resilience-test.cjs`: aborted production worker blocks exports; reload recovers; all six bundled icons produce distinct output.
- `hole-test.cjs`: actual solid-volume probes prove the SVG ring hole is preserved in raised and engraved geometry.
- `stale-import-test.cjs`: delayed old image cannot overwrite a newer selection.
- `portable-errors-test.cjs`: missing image payload, invalid transforms, wrong app and invalid dimensions block export and recover with reset.
- Phone: 320/390 px widths, no horizontal overflow; preview-first stack; actual CDP touch orbit and pinch alter canvas; real PNG and binary STL inputs/downloads. Desktop screenshot confirms 374 px left rail and right viewer. No external app requests or runtime errors observed.
- Reference evidence: actual binary source parsed and hashed; dimensions, connected groups, edge-incidence defects, measured sheet/rail/bridge levels and real cross-sections recorded. Public CC BY attribution checked. Raw reference mesh not bundled.
- Gallery and monorepo staging results are in separate JSON reports; all prior entries compared unchanged.

No physical print, stability, strength, durability or real-printer fit testing performed. FDM calibration remains required. Decorative relief below nozzle width may soften or vanish during slicing; structural floor remains at least 0.8 mm.
