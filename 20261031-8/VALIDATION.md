# Computational validation

2026-10-31 — Climb & Grip, `/daily-app2/20261031-8/`.

- Actual public reference binary STL downloaded, SHA-256/units/bounds/components measured and three cross-sections rendered; local candidate meshes inspected. `reference-measurements.json`, `reference-analysis.json`, `evidence/reference-sections.png`.
- `npm run predeploy`: production build passes with bundled worker/WASM/fonts. Initial missing icon module and preview variable errors were fixed; browser suites rerun against corrected production build.
- `npm test`: **36 built-in cases,18 import-derived cases,28 out-of-range rejections**. Every exported part independently checks binary length/count, finite/nondegenerate faces, normalized matching normals, two opposite-directed welded edge incidents, positive component volumes and expected mm bounds.
- Connected card is one closed component; sixteen safe snips release four separate parts plus carrier. All intended print sections bed-supported. Assembled printed parts do not intersect. Body tongue inserts upward, shoulders meet arm underside, tip remains.05 below top. Straight cord probes clear arm/toggle eyes. Actual tilted cord meshes clear3° before computed first-contact angle and intentionally intersect rims3° after it. No friction coefficient or climbing proof inferred.
- `node hole-check.mjs`: actual Boolean solid probes confirm bright image-hole preservation, dark ring engraving and continuous backing.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary STL picker imports, actual downloaded STL meshes versus default/threshold/depth/crop/scale/rotation/placement, exact UI fingerprints and JSON regeneration, replace/remove/reset, malformed/truncated/empty/large/nonmanifold/concave inputs, invalid transforms, all per-part selections,390/320px no-overflow and real touch orbit/pinch. `browser-validation.json`, desktop/mobile screenshots.
- `node studio-test.cjs`: all real presets, profiles, text/icons/SVG, portable image/mesh JSON, local named design reload, missing payload rejection, undo/redo, ZIP unpack/every contained STL checked, all views, saved dark theme, visible keyboard focus, collapse, reduced motion,374px left rail, phone preview-first and deliberate worker abort/recovery. `studio-validation.json`.
- `node axis-test.cjs`: Y/−Z-up source fixtures engrave/export identically; changing axis clears source and requests reattachment. `axis-validation.json`.
- `node stale-test.cjs`: rapid parameter/image edits immediately block old-result exports; newest build matches Node generation; unsafe transform blocks and recovers. `stale-validation.json`.
- Gallery inline script compiled with `new Function`; exactly one newest STL entry, all311 previous entries unchanged. `gallery-validation.json`.
- Root `npm run predeploy`:312 apps,0 failed/skipped. Every gallery folder exists;44 new-app deployed files hash-identical to tested `dist`. `combined-build-validation.json`.
- Combined-site browser gallery/default/direct-part exports and320px touch checks pass. `gallery-browser-validation.json`, `final-production-validation.json`. Full imports/download suite rerun against combined output: `combined-browser-validation.json`.

All automated browser checks are real production builds under their actual base-path prefix. No remote API/CDN conversion or personal test assets. Test fixture inputs are synthetic.

**Not performed:** physical printing, assembly, adhesive strength, cord knot retention, friction, durability or climbing behavior. The app is a geometric kit prototype; printer/material/cord calibration is necessary and movement is not guaranteed. External cords/anchor and one adhesive seat are explicitly required.

Publication: root `npm run deploy` succeeded. GitHub Pages build41128715427 completed successfully after normal queue propagation; `node public-test.cjs` then verified HTTP200, live worker/WASM, exact default STL bytes and gallery entry (`public-validation.json`).
