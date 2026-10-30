# Wrap & Tuft — validation

All checks use synthetic assets and original generated geometry. No physical test was performed.

## Geometry / assembly

- `npm test`: 32 built-in cases + 8 image/STL cases, each with the connected card and four clean parts independently parsed as binary STL.
- Exact byte size/count; finite coordinates; nondegenerate triangles; unit normals agreeing with winding; weld tolerance1e−5 mm; every edge has two opposite-directed incident faces; one closed positive-volume component per exported solid; expected millimeter bounds and Z=0 print orientation.
- All six assembled part pairs have zero unintended intersection. Sampled vertical spacer insertion into the lower plain frame and upper signature-frame insertion over both spacers; all four socket interiors/tongues and shoulder seats probed.
- Entire inter-frame disc through radiusR+2 is free of parts. Both open mouths align and a rigid witness of diameter mouth−.5 mm can travel outward. This proves geometric access only, NOT yarn release, scissor suitability, forces, friction or adhesive strength.
- Card has16 true runners, fits its declared envelope, and produces four separate parts+carrier after16 safe outside snips. Clean packed parts do not overlap. Sampled print cross-sections are supported by the bed footprint.
- `import-extremes.mjs`: image and exact imported STL at combined minimum/maximum dimensions pass full mesh/assembly/snipping checks.
- `hole-check.mjs`: actual Boolean probes establish bright center-hole preservation, dark ring recess and continuous backing.

## Real production-browser workflows

- PNG, JPEG, simple SVG, ASCII STL and binary STL file-picker uploads; replacement/removal/reset; threshold/depth/pixel/crop/size/rotation/placement affect actual downloaded STL.
- Downloaded bytes match the current preview signature and portable JSON regenerated in Node; every downloaded derived model is independently mesh/assembly checked.
- Both mm confirmation and orientation transforms tested; Y-up/−Z-up inputs reconstruct the same integrated geometry. Axis changes clear the source and request reattachment.
- Wrong/invalid SVG, truncated STL, open/nonmanifold/concave geometry, oversized files/pixels/triangle counts/dimensions, fake PNG, empty silhouettes, invalid transforms and impossible numeric parameters block exports with usable recovery.
- Three presets, all three winding profiles, bounded UI variations, text, searchable icons and ring SVG tested. All views, ghost mode, fit/zoom, undo/redo, named-design reload and image/STL JSON round trips tested. Missing image payload produces an explicit reattachment error.
- Everything ZIP unpacked; each contained STL parsed and instructions checked. Every direct per-part button checked independently.
- Rapid parameter/image edits immediately disable stale export; only the newest current result is exportable. Production worker abort disables export; reload recovers.
- 374 px desktop LEFT panel and RIGHT viewer, saved light/dark theme, tactile selected states, visible keyboard focus, collapsible sections and reduced-motion handling checked.
- Touch-enabled390/320 px preview-first layout: no horizontal overflow, reachable export, real phone image/STL uploads and downloads. CDP touch orbit/pinch changes actual canvas output.
- Browser scripts target the production build under its real `/daily-app2/20261031-5/` prefix, not the dev server. No remote runtime/file-processing requests in local tests.

## Reports and evidence

`validation-report.json`, `import-extremes-validation.json`, `hole-validation.json`, `browser-validation.json`, `studio-validation.json`, `axis-validation.json`, `stale-validation.json`, `variation-validation.json`, combined/gallery/final/public reports. Screenshots in `evidence/`, desktop/mobile screenshots beside the app. Reproduction scripts are checked in.

Gallery inline script compilation and exact preservation of308 earlier entries are checked. Root predeploy must include all309 gallery folders and exact new-app build bytes before authorized root deployment. GitHub Pages deployment41113181745 succeeded. Live HTTP200, worker/WASM load, exact current binary STL download, sample attribution and newest gallery entry verified by public-test.cjs.

**Unperformed:** physical printing, assembly, calibrated printer fit, adhesive strength, winding, cutting, yarn compression/tying/release, finish quality, durability and fatigue. This is not a physical-print certification.
