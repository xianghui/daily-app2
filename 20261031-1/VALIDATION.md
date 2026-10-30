# Executed validation — Corner & Return

- Actual source STL downloaded/read-only parsed: SHA-256, bounds, 30,616 triangles, 27 edge-adjacent components, source defects and sheet/socket/carrier sections recorded. See reference-analysis.json and reference-measurements.json. Cross-section image visually inspected.
- `npm test`: 34 built-in cases (three presets, all silhouettes, combined extrema, every individual parameter bound) and eight image/STL cases. Every exported card and part passes independent float32 binary-STL finite/area/normal/winding/manifold/positive-component-volume/bounds checks (1e-5mm welding).
- All these cases additionally pass six pairwise assembly intersection checks, sampled vertical insertion of rear then left wall then brace, eight socket probes, three clear film rectangles, disjoint packed parts, sixteen accessible snip cutters leaving five connected solids (four parts plus carrier), and forty sampled print-layer footprint checks.
- `import-extremes.mjs`: image and STL full checks at combined minimum and maximum dimensions. `hole-check.mjs`: actual Boolean volume probes prove bright hole, dark ring removal and retained backing.
- `browser-test.cjs`: actual production worker/WASM; PNG/JPEG/ASCII/binary uploads and real downloads; source/content/threshold/depth/scale/rotation/placement changes, exact UI signature/export/portable-JSON regeneration match, replace/remove/reset and unit gating. Ten invalid-file cases, empty silhouette and invalid transforms block export and recover. All separate part downloads parsed. 320/390px overflow/reachable exports and real touch orbit/pinch verified; phone PNG/STL downloads checked; no remote requests or runtime errors.
- `studio-test.cjs`: real presets, silhouettes, text/icon/SVG engraving; JSON image/mesh round-trip, named local designs/reload, missing-payload rejection, undo/redo, real ZIP decompression and all meshes checked, all views, saved light/dark, keyboard focus, collapsible sections, reduced-motion, desktop374px rail and phone preview-first320px, worker abort/reload recovery.
- `axis-test.cjs`: actual Y-up/negative-Z uploads normalize and export identically; up-axis change removes source and requests reattachment.
- `variation-test.cjs`: four UI-generated bounded variations pass full mesh/assembly checks.
- App `npm run predeploy` passed. Root gallery inline script compiled and 304 previous entries preserved exactly; new entry exactly once, newest, STL category.

Detailed machine-readable reports and synthetic-only screenshots accompany scripts. ROOT combined build, gallery browser tests and combined imports run before publication; their JSON reports are authoritative.

**Not performed:** physical printing, adhesive/fit strength, film attachment, real optical alignment/brightness/return. Ideal perpendicular planes and collision-free assembly are computational geometry checks only. Film and adhesive are external consumables; no measured retroreflection or safety use is claimed.

## Combined publication preflight

ROOT predeploy: **305 built, 0 failed, 0 skipped**. All 305 gallery folders have combined output, and 43 new-app production files hash-match the individual build. Combined gallery renders 305 cards with no runtime errors and resolves the new app, worker and WASM. Full browser import/download/phone suite passed again against the combined site. Final-production script validates every direct per-part button against exact expected bytes and touches the final 320px viewer. See combined-build-validation.json, combined-browser-validation.json, gallery-browser-validation.json and final-production-validation.json.
