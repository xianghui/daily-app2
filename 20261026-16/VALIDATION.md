# Incline Exchange validation — 2026-10-26

## Passed

- Individual `npm run predeploy`: React/Vite production build; Manifold WASM and local font assets bundled.
- `npm test`: 68 default/preset/parameter-corner cases plus 30 image/STL-derived cases. Every final part and combined float32 print plate independently checked for valid finite triangles, normals, millimeter dimensions, nondegeneracy, opposite edge incidence after 1e-5 mm welding, positive volume per connected component and correct component count.
- Full-stroke Manifold collision checks, real inclined-surface contact by a lowered probe, open guide overlap and independent X/Y drift stops, physical end stops, vertical assembly/release paths, separated plate components and isolated palm personalization.
- Production Playwright `browser-test.cjs`: actual PNG/JPEG/ASCII/binary picker uploads and downloaded bytes, threshold/depth/pixel-source/scale/crop/rotation/placement changes, source replacement/removal/reset, exact current preview/export signature and JSON-regenerated model, individual parts, invalid/truncated/open/nonmanifold/concave/overlarge/empty files, invalid dimensions/transforms, unit confirmation, 320/390 px layouts, actual touch orbit/pinch and phone downloads. No external requests from the app and no page runtime errors.
- `feature-test.cjs`: three presets, three shapes, bounded variations, text/heart/SVG/engraved personalization, background inversion, portable PNG/JPEG/ASCII/binary JSON round trips, named design persistence, undo/redo, real ZIP contents and per-part STL, assembled/exploded/isolated/print views, theme persistence, colour-neutral exports, drag/drop, Y-up import, sections/focus and stale edit gates.
- `additional-test.cjs`: every geometry field changes exported geometry, stroke preview is geometry-neutral, local imported-image design survives reload, missing payload requests reattachment, inverted-Z source, 374 px desktop rail, reduced motion, preview-first 320 px layout without overflow. A test initially compared the returned starting pose to itself; corrected to compare distinct poses and reran successfully.
- `stale-import-test.cjs`: deliberately delayed old image normalization cannot overwrite a newer import.
- `resilience-test.cjs`: production worker abort blocks export, reload recovers, all six distinct bundled icons alter geometry.
- `hole-test.cjs`: solid-intersection probes confirm ring holes stay unraised/unengraved, while ring artwork changes actual geometry.
- `gallery-validate.cjs`: every inline script compiles with `new Function`, new STL entry occurs once, all 171 previous entries unchanged.

Machine-readable reports and screenshots are saved alongside the reproducible scripts. Root staging/browser/publication results are recorded separately after their commands finish.

## Not performed

Physical printing, friction/force measurements, surface wear, durability and long-term behavior tests. No universal fit or gravity-return guarantee. This is a hand-guided open, non-captive wedge-lift assembly, not a simulation proving physical performance.

Final review added joined Y end cheeks so the follower is genuinely constrained in both horizontal axes. The updated model passed the complete geometry matrix; production browser checks were rerun. A local preview-server port collision during the rerun was cleared, and the test runner now exits nonzero if its server cannot start.

## Combined-site staging

Root `npm run predeploy` completed: **172 built, 0 failed, 0 skipped**. `root-stage-test.cjs` confirmed every app is staged, root gallery bytes match, and all 44 files of the new production app match its `dist/` exactly. Gallery browser rendering/search passed with STL Generators first. `root-smoke.cjs` passed against `/daily-app2/20261026-16/` in the combined root bundle for built-in and real PNG/JPEG/ASCII/binary imports: downloads, exact preview/JSON regeneration hashes, independent STL validation and mechanism checks. Zero page errors.

## Publication

Root `npm run deploy` completed successfully (`gh-pages -d deploy`: Published), after its automatic root predeploy also staged all 172 apps without failures. Publication used the root combined site, not the individual app deploy script.
