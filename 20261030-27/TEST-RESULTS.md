# Flight & Landing — computational preflight

- Production `npm run predeploy`: passed (local worker/WASM and fonts).
- `npm test`: 36 built-in/preset/shape/control-end cases +8 image/STL cases. Every card and clean part passes binary STL, finite coordinates, unit normals, closed-manifold edge incidence, outward winding, positive component volume and expected mm dimensions.
- `node import-extremes.mjs`: 99 additional image-threshold/image-relief/STL cases across presets, parameter minima/maxima and single-control endpoints. Same full mesh/assembly checks; measured4.5×1.70 socket mapping reproduced.
- Every case checks21 assembled pairs, both stringers' lateral approach at21 samples, six stair bodies' vertical approach at21 samples, four foot gauges, eight tread shoulders, two stringer bottom seats; no unintended intersections. Seven clean parts disjoint on card,28 cuts avoid parts and separate seven parts plus carrier, sampled upper sections fit bed footprints.
- `node hole-check.mjs`: real solid probes confirm unengraved center in image ring.
- `node sensitivity-check.mjs`: all14 physical parameter controls alter exported geometry.
- `node browser-test.cjs`: actual picker PNG/JPEG/ASCII/binary files, changed image threshold/depth/pixels/crop, STL shape/scale/rotation/placement, actual downloads re-parsed and compared to exact-state Node regeneration and UI fingerprint, per-part files, extremes, invalid meshes/files/dimensions, reset and replace/remove. No page errors or remote requests.
- Phone390/320px: no horizontal overflow, usable exports, real PNG/STL picker downloads and CDP touch orbit/pinch with changed canvas pixels.
- `node studio-test.cjs`: every preset, silhouettes, text/icons/SVG, portable image/STL JSON, named local saves/reload, missing-payload rejection, undo/redo, actual ZIP unzipped and each STL checked, all views, saved dark theme, visible keyboard focus, collapsed controls, reduced motion,374px desktop left rail, phone preview-first. Worker abort blocks export and reload recovers. No runtime errors.
- `node axis-test.cjs`: equivalent Y-up and negative-Z source meshes produce same final geometry; changing axis requests reattachment.
- `node stale-test.cjs`: rapid edits use current result, invalid edit cannot export last-good preview, reset matches original.
- Reference binary STL parsed afresh; SHA256/source/license, component/section/socket measurements committed. No raw reference mesh or user input bundled.
- Gallery scripts compile with `new Function`, new entry exactly once and all earlier entries preserved; gallery/app browser render checked before publication.

Not performed: physical printing, assembly, actual printer fit, adhesive holding, load/strength tests. This is a static miniature, not a moving fidget or code-compliant/load-bearing stair. Clearances are proposed calibration starts.
