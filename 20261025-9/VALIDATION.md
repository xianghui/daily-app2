# Unfurl Lift — observed validation

## Passed before publication

- `npm run predeploy`: production build with bundled Manifold WASM and local fonts.
- `npm test`: 132 parameter/default/preset cases and 35 image/STL integration cases. Binary STL independently reparsed; finite coordinates, normalized outward normals, nondegenerate triangles, positive connected volume, manifold edges with exactly two opposing faces, millimeter bounds and exactly eight intended slot holes checked.
- Each generated variant: 16 Boolean empty-slot probes, 8 solid bridge probes, connected center knob and protected palm isolation checks.
- `node browser-test.cjs`: 23 actual STL download checks. PNG/JPEG and ASCII/binary STL file picker, pixels/threshold/depth/scale/placement changes, exact preview-export fingerprint and regeneration from JSON; replace/remove/reset; invalid/truncated/open/nonmanifold/concave/large files and empty silhouettes; unit confirmation and recoverable blocked exports.
- Phone: 320/390 px widths, touch orbit/pinch zoom, real image/STL imports and downloads, preview-first stacked controls and reachable exports. Screenshots inspected.
- `node feature-test.cjs`: all presets and bounded variations, palm shapes, text/icons/SVG hole/background/engraving, undo/redo, portable imported-asset JSON, persisted named designs/theme, STL/ZIP, up-axis rotation, keyboard focus/collapsible sections, rapid edits and stale/invalid export gating.
- `node resilience-test.cjs`: worker load failure and malformed JSON block export; reload/reset recover.
- `node production-test.cjs`: packaged worker/WASM, actual relief import and manifold STL export, zero failed requests/runtime errors.
- `node gallery-test.cjs`: all inline scripts compile; new entry unique, STL first, 136 previous entries preserved, search and render work with zero runtime errors.

## Scope limits

These are computational geometry, topology, source validation, export and browser UX checks. **No physical print, force, elastic simulation, fatigue, creep, safe-travel or durability testing was performed.** The viewer displays undeformed geometry only. TPU recommendation and cautious lift guidance require real material calibration. No hardware or loose-part retention is needed; the intended eight bridges are connected portions of the one-piece solid.

Archive and Keycap Studio reference remained read-only. Public deployment uses the root combined `deploy/` flow.

## Public release verification

Root `npm run predeploy` and `npm run deploy` completed: 137 apps built/copied, 0 failed, 0 skipped. The generated root index and every gallery folder were checked before publication. GitHub Pages propagation was followed by a successful live browser test at https://xianghui.github.io/daily-app2/20261025-9/: bundled worker/WASM, image sample conversion, actual downloaded manifold STL and preview/export equality all passed with zero runtime or failed-request errors. The live gallery also rendered all 137 entries, preserved the previous 136 and showed STL Generators first. Reports: `live-validation.json` and `live-gallery-validation.json`.
