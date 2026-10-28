# Executed validation — 2026-10-28

All listed checks passed against this app's production Vite bundle, then combined root staging. No physical print, assembly, friction, durability or strength test performed.

- `npm run predeploy`: production bundle/worker/Manifold WASM and local fonts built successfully.
- `node validate.mjs`: **14 parameter cases** (defaults, three presets, min/max and eight cross-extremes), **30 image/STL-derived cases**, six invalid-input rejections. Every card and each of its eight loose parts checked independently; 1e-5 mm welded-edge incidence, outward normals, finite coordinates, positive per-component volume, degeneracy, mm dimensions.
- All44 generated cases: Manifold checks of every assembled pair, six radial insertion paths at13 positions each, plate separation/containment, card envelope and20 accessible cutter operations. Zero assembled/insertion intersection volume in default case; each cut card yields exactly nine components (eight parts plus carrier).
- `node browser-test.cjs`: **31 real downloaded STLs** including changed PNG content/threshold/depth/crop, JPEG, grayscale, ASCII/binary STL scaling/rotation/placement, remove/reset, parameter extremes, all nine exports and phone imports. Actual downloaded bytes match preview fingerprint and Node regeneration from portable JSON. All downloaded parts manifold. Ten malformed/unsupported/oversized file cases plus empty silhouettes, impossible dimensions/transforms blocked export and recovered.
- `node feature-test.cjs`: all presets, three bounded variations, all three silhouettes, text and icon/SVG geometry, engraved/inverted images, portable PNG/JPEG/ASCII/binary round trips, named local persistence, undo/redo, per-part downloads, actual nine-STL ZIP unpack/check, views, dark theme, preview-only colour, drag/drop, Y-up import, sections/focus and latest-worker edits.
- `node hole-test.cjs`: solid intersection probes verify the ring hole stays unraised/unengraved in final solid geometry.
- `node studio-layout-test.cjs`:374 px left control rail/right viewer, all isolated views, no export change from views, reduced motion, preview-first320 px phone stack/no overflow. Browser test additionally proves390 px touch orbit and pinch change the canvas and phone downloads are reachable.
- `node portable-errors-test.cjs`: missing payload/wrong app/invalid dimensions and transforms reject and recover.
- `node resilience-test.cjs`: blocked production worker disables exports, reload restores; all six bundled SVG icons alter printable geometry.
- `node stale-import-test.cjs`: delayed image normalization cannot overwrite a newer source selection.
- Reference STL downloaded anew, parsed/hashed/sectioned; two components and source defects documented. No third-party mesh bundled.
- Gallery: every inline script compiled with `new Function`;224 prior entries retained, one newest `stl` entry with correct path. Browser gallery renders225 cards without runtime errors, STL category first and search recovery passed.
- ROOT `npm run predeploy`:225 apps staged,0 failed/0 skipped. Root index identical and43 new-app files hash-identical to production dist. Actual PNG and binary STL imports/downloads succeeded from root staging, not only individual app server.

Reproduction: `npm test`; serve `node serve-production.cjs` on5453 for browser scripts; run browser-test/feature-test/hole-test/studio-layout-test/portable-errors-test/resilience-test/stale-import-test. Root staging server `node serve-root.cjs` on5443 for gallery-test/root-stage-check after root predeploy. Machine-readable reports and screenshots accompany scripts. Public deployment smoke results are recorded separately in `public-validation.json` after publication.

Public verification: GitHub Pages run40624996580 completed successfully. `node public-smoke.cjs` passed on the live URL: HTTP200, production worker/WASM, real PNG picker import and checked STL download,225-card gallery with Rib & Halo newest, no browser runtime errors. Initial404s were observed while Pages was still deploying; retried after the workflow succeeded, with no app changes or redeployment necessary.
