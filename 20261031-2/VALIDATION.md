# Executed validation — 2026-10-31

## Reference evidence
Actual public reference STL downloaded anew, binary parsed, SHA-256 recorded and sectioned at Z=.10/.50/1.59 mm. Local switch and link candidate meshes were also parsed before final selection; unsuitable interfaces rejected. Source README/LICENSE read. See `reference-analysis.json`, `reference-measurements.json`, `evidence/reference-sections.png` and `reference-inspect.py`. Source defects (27 components, nonwatertight) disclosed. Raw mesh not redistributed.

## Geometry and assembly
- `npm test`:34 built-in cases plus8 image/STL cases passed:defaults/presets, three sled shapes, combined minimum/maximum and every individual parameter extreme.
- `import-extremes.mjs`:four additional combined-extreme image/STL models passed the same full checks.
- Every connected card and individual part independently checked from exported float32 STL: byte length, finite positions, positive per-component volume, nondegenerate triangles, normals, consistent winding, 1e−5 mm welded edge incidence and bounds. Each intended solid is one connected manifold component.
- Per model:six assembly-pair intersections, ramp's complete normal-direction insertion path, four slot probes,≥17 sled travel poses and lift-out path, lane/edge margins, flat-part separation,16 safe snips releasing four parts plus carrier,declared card envelope and40 sampled bed-support sections. No unintended assembled collisions.
- `hole-check.mjs`:actual Boolean probes confirm unengraved bright hole, dark-ring cut and continuous backing.
- `variation-test.cjs`:four real UI-generated variations passed the full geometry/assembly suite.

## Production browser, imports and UX
- `browser-test.cjs`:real PNG/JPEG/ASCII-STL/binary-STL file-picker uploads and actual downloaded STL; exact current-state preview/JSON/export signatures match. Pixel content, threshold, depth, crop, scaling, rotation and placement alter final solids. Reset recovers original signature.
- Invalid/truncated/open/nonmanifold/concave/oversize/over-complex/large-coordinate/incorrect-content inputs,empty silhouette,missing values and safe-zone violations reject recoverably; stale exports disabled.
- Real per-part downloads parsed. 320/390px phone layouts: no horizontal overflow,reachable exports,file uploads and actual CDP touch orbit/pinch changed rendered view. No remote processing requests or app runtime errors.
- `studio-test.cjs`:three preset exports checked; all sled profiles,text/icons/SVG geometry,actual ZIP contents and instructions,portable image and mesh JSON,named-save reload,missing payload block,undo/redo,every view,saved dark theme,focus,collapse controls,reduced-motion context,374px desktop left rail and preview-first320px phone; aborted worker gives blocked error and reload recovers.
- `axis-test.cjs`:synthetic Y-up and −Z meshes reorient into identical exact Boolean exports; changing axis clears attached file.
- Tests initially had obsolete expectations from reused test plumbing (old default lane38 and old location for slope control). Updated test expectations to the new design, then reran successfully; no app failure was hidden.

## Build, gallery and publication
`npm run predeploy` passes with local production worker/WASM assets. Gallery script compilation and preservation checks are recorded in `gallery-validation.json`. Combined output contains306 app folders; all43 new app production files hash-match dist. Gallery retains305 previous entries exactly and compiles its inline script. Full import suite rerun against combined output passes27 actual downloaded STL cases and10 malformed-input rejections,with no remote requests or runtime errors. Direct card/part buttons and320px touch checks pass on the combined output. See combined-build-validation.json,combined-browser-validation.json,gallery-browser-validation.json and final-production-validation.json.

**No physical printing, assembly,friction,adhesion,strength or sliding tests were performed.** Computational fit and watertightness do not establish physical function. All fixed joints explicitly require adhesive; sled intentionally lift-out and may slide off, so catch it in a tray. Calculated tan(angle) is not measured friction.
