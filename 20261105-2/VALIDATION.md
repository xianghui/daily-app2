# Completed computational validation

- `npm run predeploy`: production build passes; base `/daily-app2/20261105-2/`, local worker/WASM/fonts.
- `npm test`: **69 cases** across defaults, all three presets, every field endpoint, combined extrema, three deck silhouettes, four/six bay topology, image threshold/relief and transformed ASCII/binary STL sources. Independent serialized STL checks pass for connected card, every clean part and five-component plate.
- Every geometry case: finite nondegenerate triangles, positive volume per component, outward normals, 1e-5 mm welded edge incidence exactly two/opposite; exact dimensions and declared card envelope. One connected card, twenty runners, exactly carrier + five intact parts after cuts; no runner fragments or accidental print-plate/assembly intersections.
- Every geometry case: bed footprint support, four blind mortises/floors and eight half-lap openings probed in card/clean meshes; twenty side-truss and twenty-two tie insertion samples; backing >=1 mm, socket floor .40 mm and tip gap .20 mm.
- `node browser-test.cjs`: real production-browser PNG/JPEG, ASCII/binary imports and downloaded STLs; threshold/depth/pixels/crop/size/rotation/placement change real geometry. Reset reproduces the original bytes. Download signature equals current preview and Node regeneration from the exact browser JSON; every regenerated part and assembly checked. Unit confirmation gates exports. All per-part downloads checked.
- Browser rejects wrong content, truncation, open/nonmanifold mesh, excessive bytes/pixels/triangles/dimensions, concave mesh, empty silhouette, invalid transforms and unsafe keep-in placement; export is disabled and remove/reset recovers.
- `node studio-test.cjs`: all thumbnail presets, three silhouettes, text/searchable icons/SVG, image and STL portable JSON round trips, named save/reload, missing-image reattachment error, undo/redo, all views, actual ZIP contents individually parsed, saved dark theme, keyboard focus, collapsible sections, reduced motion, 374 px left rail and worker abort/reload recovery.
- `node personalization-test.cjs`: all six bundled icons produce distinct actual downloaded mesh engravings; final mesh and assembly checks pass.
- `node orientation-test.cjs`: inverse-transformed synthetic Y-up and inverted-Z STL uploads reproduce the original oriented integrated result exactly.
- `node extra-validation.mjs`: probe the actual browser-imported SVG ring: bright centre remains solid, dark ring is engraved, lower backing remains solid. Full mesh and assembly checks pass.
- `node mobile-layout.cjs` plus browser suite: 320/390 px, every editor tab, expanded guide and real JSON-save download; no horizontal overflow, preview first, exports reachable. CDP touch orbit and pinch change rendered canvas; real phone PNG and STL file imports/downloads pass.
- `node gallery-test.cjs`: compiles every root inline script; exactly one new `stl` entry, newest first, correct folder, all 449 earlier entries unchanged, STL Generators category first.

Reports and actual screenshots accompany the source. Only synthetic fixtures / reference-analysis evidence are stored, never personal uploads or the raw third-party STL. A duplicate HTML input id found during the first browser pass was fixed by naming the bridge parameter `breadth`; the production build and affected suites were rerun successfully.

**Not performed:** physical printing, strength/load, adhesive performance, fit friction or long-term stability. Computationally valid assembly is not a load-rating or print-test claim. This bridge is an unrated desktop model.

## Combined-site validation

Root `npm run predeploy`: 450 apps built/copied, 0 failed, 0 skipped. Every app index exists under root deploy/, and deploy/index.html exactly matches root index.html. The complete browser import/download suite also passes against the combined deploy output on port 5943. Gallery renders and searches all 450 entries without runtime errors. See combined-*-validation.json.

## Publication

Root `npm run deploy` published combined output to gh-pages commit `11aecb246144ad449af851bb1053ef91f8a4d7e5`. GitHub Pages workflow [41875684960](https://github.com/xianghui/daily-app2/actions/runs/41875684960) completed successfully. `node public-test.cjs` then verified the live route, worker, real default/PNG/imported-STL downloads, matching preview signatures, and the 450-entry public gallery with the new app first and no runtime errors. First visibility window ended during the Pages rollout; retry passed after it completed. See publication-validation.json and deployment-validation.json.
