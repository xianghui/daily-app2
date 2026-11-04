# Validation — Dirac & Ribbon

- 89 geometry cases: defaults, three presets, every field boundary, 48 mechanism/shape corners, image-derived and ASCII/binary STL-derived models including transformed/corner cases.
- Every clean part, connected card and loose plate parsed from float32 STL: finite/nondegenerate triangles, normals/winding, two oppositely directed edge incidences after 1e-5 mm welding, positive per-component volume and expected mm bounds/component counts.
- Real CSG intersections: card cuts release exactly carrier + three undamaged parts; no plate/assembled overlap, eight vertical anchor insertion positions, two blind sockets/floors, four ribbon apertures and paired-slot bridges, artwork backing, supported bed footprints.
- Production-base-path browser tests: real PNG/JPEG/ASCII/binary file picks and downloads, geometry differences, scale/rotate/place, reset/replace/remove, invalid content/size/dimensions/manifold cases, empty image, import keep-out violations and blocked stale export.
- Three presets, all silhouettes, text, all six icons and SVG, hole/backing probes, portable image/STL JSON, named saved design reload, undo/redo, ZIP member meshes/instructions, source up-axis variants, all views, dark theme persistence, focus, collapsible controls, reduced motion, worker abort/recovery.
- Phone 320/390 px: all tabs/expanded guide have no horizontal overflow, preview-first, real PNG/STL and JSON downloads, CDP touch orbit and pinch change the rendered view.
- Gallery scripts compile, entry appears exactly once/newest with STL category, all 446 prior entries preserved; browser renders/searches 447 entries.

See JSON reports and evidence screenshots. No physical print/fit, adhesive, ribbon retention or belt-trick handling tests; no ribbon dynamics simulation. The preview-only ribbon is never included in the exported meshes.

Root `npm run predeploy`: **447 built, 0 failed, 0 skipped**. Full import/download/touch/error browser suite passed again from root `deploy/` at `/daily-app2/20261104-24/` (`combined-browser-validation.json`).

Published through root `npm run deploy`. [Pages workflow](https://github.com/xianghui/daily-app2/actions/runs/41845569959) succeeded. Public browser checks verified actual default/PNG/STL downloads, their closed meshes and exact signatures matching the independently checked local production results; 447-entry public gallery/newest entry verified. Initial 90-second availability check expired while the Pages workflow was still building; verification passed after waiting for workflow completion. See `publication-validation.json` and `deployment-validation.json`.
