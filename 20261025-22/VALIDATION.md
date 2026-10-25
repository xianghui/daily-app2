# Cupped Fold validation — 2026-10-25

- `npm test`: 132 parameter cases, 35 imported-output cases. Closed oriented manifold binary STL, finite/nondegenerate triangles, per-component positive volume, physical bounds and independent shell/isolation probes passed.
- `npm run predeploy`: individual production build passed, locally bundled worker/WASM/fonts.
- `node browser-test.cjs`: actual image/STL picker imports, geometry-sensitive settings, downloaded STL parsing and exact preview/export/JSON regenerated signatures passed. Rejections and recovery, phone orbit/pinch, 320/390 px no-overflow and mobile exports passed.
- `node feature-test.cjs`: presets, variations, shapes, text/icons/SVG, undo/redo, portable JSON assets, named designs, ZIP/per-part STL, saved light/dark theme, collapsible sections/focus, drag/drop and up-axis passed. Preview swatches additionally checked for a visible canvas change while retaining identical exported geometry.
- `node hole-test.cjs`: raised and engraved SVG ring holes passed actual solid probes.
- `node resilience-test.cjs`: bundled production worker-load failure blocked export; reload recovered. Malformed JSON blocked export; reset recovered.
- Gallery inline scripts compiled with `new Function`; all 149 earlier entries preserved in order; new STL entry exactly once. Browser rendered 150 entries, STL category first, search functional, no runtime errors.
- ROOT `npm run predeploy`: 150 built/copied, zero failures/skips. Every app index and root gallery present; new deployed output matches individual dist. Production import/download suite also targets this combined output.

Reports: geometry-validation.json, browser-validation.json, feature-validation.json, hole-validation.json, resilience-validation.json, production-validation.json, gallery-validation.json, root-build-validation.json. Screenshots include desktop, phone, dark and view modes.

## Scope

Computational geometry and browser behavior were tested. Physical printing, TPU support removal, nonlinear shell deformation, snap-through/bistability, forces and fatigue were **not tested**. Removable supports under the curved strip are required and documented. Material calibration is mandatory; no universal fit or elastic-return guarantee is claimed.
