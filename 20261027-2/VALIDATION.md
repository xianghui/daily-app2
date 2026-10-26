# Quadrature Glide — validation record

## Passed computational checks

- Individual app `npm run predeploy`: production React/Vite build passed, with locally emitted worker, Manifold WASM and fonts. Nonfatal bundler notes: externalized Node compatibility shim and main chunk size.
- `npm test`: 20 default/preset/mixed-extreme cases and 35 imported-output cases. All four parts independently and float32 separated plate: finite triangles, unit aligned normals, no degenerate faces, welded edge incidence exactly two with opposing directions, connected positive-volume components and expected millimeter bounding boxes.
- Full-cycle Manifold collision checks: 25 phases on parameter cases and 19 phases on import cases; every moving pair, crank/post, yoke guides and print layout. Sequential vertical removal checked throughout the cycle. Analytical quarter-phase stroke equations, slot/pin clearance, end-wall bounds and palm import isolation checked separately from topology.
- Production `browser-test.cjs`: real file-picker PNG/JPEG/ASCII STL/binary STL, actual STL downloads, source replacements, threshold/depth/crop/fit/grayscale, STL size/height/rotation/placement, reset/removed signature equality, selected-part bounds. Every downloaded result is regenerated from downloaded JSON and exact-fingerprint compared with UI/current model, checked for topology/dimensions and cycle collisions.
- Recoverable rejections: malformed SVG, truncated/open/nonmanifold/concave STL, excessive bytes/pixels/triangle counts/source dimensions, empty images, invalid numeric dimensions, blank/out-of-range transforms and unsafe well placement. Invalid exports disabled.
- `feature-test.cjs`: all presets, bounded variations, three palm shapes, text/heart/SVG relief and engraving/inversion, PNG/JPEG/STL JSON round trips, persistent named designs, undo/redo, ZIP contents and all four per-part downloads, views, persistent dark/light theme, geometry-neutral preview colours, drop import, Y-up mesh, collapsible sections, keyboard focus and stale/invalid edit gating.
- `resilience-test.cjs`: real production worker request abort blocks export, reload recovers; all six icons change geometry distinctly.
- `hole-test.cjs`: CSG volume probes prove raised and engraved SVG ring holes survive in final geometry, with continuous backing as documented.
- `stale-import-test.cjs`: delayed first image normalization cannot overwrite a later file selection.
- Phone browser: 390px and 320px widths, no document overflow, preview/export before controls, PNG and STL imports/downloads, CDP touch orbit/pinch changes canvas, reachable download controls.
- Gallery validator compiles every nonempty inline script with `new Function`, requires a script, new entry exactly once with area `stl`, correct folder and all 186 previous entries unchanged. Browser gallery category ordering, all 187 cards, search/recovery and no runtime errors verified.
- Root `npm run predeploy`: 187 apps staged, zero failed/skipped. Root HTML matches source; every new app production file byte-identical to independently tested dist. The complete browser import/export suite is rerun against this root-staged production prefix before publication.

## Design-specific correction

An early full-stroke check found that raised end pads could meet the crossing yoke at the wide-stroke/short-yoke preset. Raised pads were removed rather than narrowing the intended valid presets; all final geometry and browser checks use flat yokes.

## Important limits

These are computational geometry, browser and mechanism-position checks, **not physical print testing**. Force, friction, wear, fatigue and printed fit are unmeasured. Parts are explicitly **noncaptive** and kept level; disassembly is intentionally vertical. Start with the Easy Exchange full-size fit set and calibrate radial/per-side gaps for the actual printer/material. Unsupported imported geometry is rejected, never silently repaired or replaced with a hull. Preview has a small unloaded ledge height gap; real yokes settle onto ledges. No universal fit or guaranteed motion force is claimed.

Reproducible scripts, machine-readable JSON and desktop/mobile/assembled/isolated/cycle screenshots are stored beside this file. Public deployment verification is recorded separately in public-validation.json after successful root deployment.

## Publication observed

Root `npm run deploy` reported Published; GitHub Pages build/deployment run 40365778588 completed successfully. The canonical public app returned HTTP 200; its live worker/WASM generated the default model, and the actual downloaded STL matched the independently validated Node model fingerprint. The live combined gallery shows Quadrature Glide newest first. See public-validation.json. Initial pre-propagation HTTP 404 responses resolved after the Pages workflow completed.
