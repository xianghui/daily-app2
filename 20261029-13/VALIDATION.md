# Validation — Tangram & Tuck

Computational/browser checks only. **No physical print testing.**

- Geometry: 27 built-in cases and 35 imported-output cases. Every connected card and individual component parsed independently for finite coordinates, normalized consistent winding, positive per-component volume, expected mm dimensions and closed manifold edges welded at 1e-5 mm.
- Assembly: nine distinct parts, zero unintended pairwise solid intersection, vertical insertion/removal and exploded paths, backing seating, rim bond contact, well containment. 36 accessible snips produce nine parts plus one carrier.
- Dense release checks: 39 cases at 49 insertion positions, including image/STL outputs and parameter extremes. Invalid card packing is explicitly rejected.
- Extra: seven ideal polygons exactly tessellate a square with expected areas; supported source mesh is genuinely integrated; concave source is rejected, not hulled. Tiny-volume probes confirm artwork ring hole remains unraised and ring band is raised.
- Browser: 39 actual downloaded STL cases and 16 workflow checks against **http://127.0.0.1:8197/daily-app2/20261029-13/**, the actual combined production output/base path. PNG/JPEG/SVG, ASCII/binary STL, scale/rotation/placement, threshold/depth/crop/engraving, byte fingerprints and JSON-state regeneration, all part STL/ZIP members, replace/remove/reset, undo/redo, portable/named saves, malformed files, missing assets, worker abort/recovery, themes, collapsible sections, 320/390 px picker imports/exports and touch orbit/pinch. Zero page errors.
- Combined root: 1 inline script compiled; all 253 previous entries retained; 254 total, one unique new STL entry, STL category first; every deployed folder exists and gallery renders with no runtime errors. Nonmanifold/excessive/concave/invalid-transform inputs block export and recover. Rapid edits show current dimensions, bounded variation builds, reduced motion honored.
- App predeploy and root predeploy passed. Build notices: locally bundled Three/CSG chunk exceeds the advisory 500 kB threshold; Manifold's Node-only module branch is externalized by Vite. Production worker/WASM/import/export tests pass. npm audit reported zero vulnerabilities.

Reports: geometry-validation.json, extra-validation.json, release-preflight.json, browser-validation.json, production-preflight.json. Evidence: evidence/reference-sections.png, desktop.png, insertion.png, image-import.png, stl-import.png, phone-320.png, phone-390.png, gallery.png.

Print-specific fit, adhesion, tip durability, graspability, surface finish and material behavior remain untested. A calibration print and slicer inspection are required.

Public verification: GitHub Pages run [40804727441](https://github.com/xianghui/daily-app2/actions/runs/40804727441) succeeded. Public gallery returned HTTP 200 with exactly one new entry. A real browser at the public URL downloaded and parsed the exact current default STL, checked latest assembly notes inside the actual ZIP and imported a local PNG with zero page/upload errors. See publication.json and final-smoke.json.
