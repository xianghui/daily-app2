# Hum & Flutter validation

All results are computational/browser evidence; no physical print, assembly, sealing or acoustic test was performed.

- `npm test`: **36 built-in cases**, **18 import-derived cases**, **29 bounds rejections**. Defaults, three presets/profiles, paired min/max and individual field endpoints. Each card and each of five parts independently parsed from binary STL; finite nondegenerate triangles, stored normals, consistent outward winding, positive per-component volume, welded 1e-5 mm manifold edge incidence and mm bounds passed.
- Every full case: ten assembled part-pair intersection checks, 68 vertical insertion/removal poses, full duct and membrane opening clear, four shoulder-contact probes, protected engraving keep-out, no loose-layout collisions, twenty safe snips, six components after snipping, and 48 bed-supported cross-sections.
- `browser-test.cjs`: actual PNG/JPEG/ASCII/binary STL file-picker imports and downloads. Pixel content, threshold, depth, crop, size, rotation and placement affect exported geometry; restore/reset reproduces baseline. Browser signatures match Node regeneration from actual saved JSON. Same mesh/assembly checks applied to browser-derived exports. Malformed, truncated, open, nonmanifold, concave, oversized, empty and invalid-transform inputs block export and recover. Individual part downloads parsed.
- `studio-test.cjs`: all three presets, profiles, text/icon/SVG geometry; image/STL JSON, missing payload rejection, named save/reload, undo/redo, all views, Everything ZIP unpacked with all six STL files parsed, saved dark theme, focus outlines, collapsible sections, 374px left rail, 320px preview-first phone, worker abort/recovery.
- `personalization-test.cjs`: text, all six icons and SVG each pass full mesh and assembly checks. `hole-check.mjs`: actual Boolean probes confirm bright center remains, dark ring is cut, backing stays continuous.
- `axis-test.cjs`: Y-up and negative-Z source geometry reorient and export exactly like original Z-up; changing axis clears source and requests reattachment.
- `stale-test.cjs`: rapid geometry/image edits disable immediate stale export; only newest result is eligible; invalid transforms block and reset recovers.
- Phone: 320 and 390 px, no horizontal overflow, touch orbit and pinch change rendered view, PNG/STL file-picker imports and exports succeed.
- No remote requests for app generation, fonts, WASM, imports or export. Library code is locally bundled.

Reports: validation-report.json, browser-validation.json, studio-validation.json, personalization-validation.json, hole-validation.json, axis-validation.json, stale-validation.json. Actual reference source/hash/components/sections are in reference-measurements.json and evidence/reference-sections.png; measured-to-parametric mappings in reference-analysis.json. Publication checks are recorded separately in gallery/combined/public reports.

## Combined publication

Root predeploy built/copied **322 apps**, failed 0, skipped 0. Root index is byte-identical to deploy/index.html; every gallery app exists; all 44 new-app production files match deploy/20261031-18 byte-for-byte. Gallery has one compiled inline script, preserves all 321 earlier entries, lists the new STL entry exactly once and keeps STL Generators first. Gallery render/search and combined-route worker/WASM imports and real downloads passed. `npm run deploy` at ROOT returned Published. See pages-deployment.json and public-validation.json for public-site evidence.

GitHub Pages action 41179391321 completed successfully. Public browser validation confirmed all 322 gallery cards, correct newest entry, local worker/WASM loading and an actual downloaded default STL byte-signature matching Node generation. Public STL passed independent manifold/dimension checks.
