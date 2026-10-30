# Executed validation — 2026-10-30

- `npm run predeploy`: production Vite build passed; local worker/WASM/fonts included.
- `npm test`: 36 built-in preset/shape/extreme cases and 8 imported image/STL cases passed independent binary-STL and assembly checks.
- `node import-extremes.mjs`: 99 further image/STL preset/parameter-extreme cases passed; measured4.5x1.7 mm socket reproduced.
- Each case: connected card and five individual solids, finite/nondegenerate faces, outward winding, positive per-component volume, welded1e-5mm edges with exactly two opposite-directed faces, expected mm bounds.
- Actual Boolean assembly intersections:25 tablet positions over360 degrees,250 pair checks/case;50 vertical anchor insertion samples,4 socket gauges,2 shoulder stops,12 eye gauges, tablet loading and100 rigid shuttle-transit samples. Maximum default pair-intersection volume2.3e-6 mm³ (numerical residue, below1e-4 threshold). These are rigid geometry checks, not cord or textile simulations.
-20 safe runner cuts release five parts plus carrier; no part damage, no unintended flat overlaps, correct card envelope;48 upper-slice/bed-footprint support checks/case.
- Actual browser file-picker PNG/JPEG/ASCII/binary STL imports and downloads; 28 downloaded outputs recorded, hashed vs preview and regenerated JSON, changed pixels/threshold/depth/scale/placement tested. Unsupported/malformed/open/nonmanifold/concave/truncated/excessive/empty inputs blocked and recovered. Runtime errors=[]; remote app requests=[].
- Phone320/390 px: no overflow, preview-first, reachable imports/exports, touch orbit and pinch changed the rendered view.
- Studio tests:3 real presets,3 silhouettes, text/icons/SVG, portable JSON with bounded image/mesh, named reload, missing payload rejection, undo/redo, every ZIP STL parsed, views, theme persistence, focus, collapse, reduced motion, worker abort/recovery.
- Oriented real STL imports: Y-up/negative-Z reorient and regenerate exact expected output; axis replacement clears source.
- Boolean probes confirm image holes remain unengraved; stale-result/invalid-edit export gating and mixed worst-case eye-wall/sweep browser checks passed.
- Gallery inline scripts compiled;294 earlier entries preserved exactly; new STL entry occurs once and is newest. Combined gallery and app render without runtime errors; production worker/WASM load at real base path.
- Root `npm run predeploy`:295 apps,0 failed,0 skipped. 47 app production files and root gallery hash-match combined deploy.

Screenshots and detailed JSON reports accompany reproducible scripts. Raw reference STL and personal user files are not bundled.

**NOT tested:** physical printing, fit force, filament strength, adhesive, cord tension/friction, textile quality or durability. Estimated cord preview is not exported geometry or cloth simulation. All these limits are disclosed in the UI, README and assembly ZIP.
