# Validation — Cross & Sight (20261102-1)

## Passed computational / browser checks

- React/Vite `npm run predeploy` production build with locally bundled fonts, worker and Manifold WASM. No remote generation/CDN calls.
- `npm test`:44 parameter/preset/import cases. Independent float32 binary STL parser checks byte length,finite positions,nondegenerate triangles,unit normals aligned to winding,1e-5 mm welded edge incidence exactly two with opposite directions,positive volume for every component,mm bounds and bed alignment. Every separately exported part,connected card and translated loose plate checked.
- Kernel assembly checks for all cases:three clean parts/four fixed tongue seats;pairwise assembled and print-layout nonintersection;two vertical insertion paths in1 mm steps;four socket probes and shoulder stops;six actual aperture probes;card envelope;all12 runner cuts avoid parts and release exactly three parts plus carrier;sampled upper footprints supported by bed footprint. Not physical fit/adhesive/optical testing.
- `browser-test.cjs`:actual browser pickers for PNG,JPEG,ASCII and binary STL;actual binary downloads parsed against independently regenerated JSON state and final preview fingerprint;pixel/threshold/depth/crop/scale changes and mesh shape/scale/rotation/placement change export. Removed/reset reproduces baseline. Imported outputs undergo the same closed/assembly checks as built-ins.
- Browser rejections:truncated,open,nonmanifold,concave,excessive file size,triangle count,bad source dimensions,wrong image content,oversized image header,empty silhouette,invalid parameters and transforms. Export stays blocked;reset/replace/remove recover. No silent convex hull or repair.
- `studio-test.cjs`:all3 real mesh-thumbnail presets,3 silhouettes,text,searchable icon and SVG;portable image/mesh JSON and named-save reload;missing payload blocks;undo/redo;all4 ZIP STL members parsed;all7 views,transparent base;theme persists,keyboard focus,collapsible sections,reduced motion;374px left desktop rail and right viewer;320px preview-first;worker abort blocks export and reload recovers.
- `orientation-test.cjs`:Z/Y/−Z source orientation,source dimensions,unit confirmation,exact transformed current exports and assembly checks.
- `icons-drop-test.cjs`:six bundled icons independently validated as geometry;actual drag/drop PNG.
- `phone-views-test.cjs`:all5 control tabs and expanded instructions at320px,reachable JSON actions,JPEG/ASCII picker,dark-background conversion,all7 views;no horizontal overflow. Browser suite separately tests390px uploads,STL downloads,CDP touch orbit and pinch by changed canvas screenshots.
- `stale-test.cjs`:3 rapid parameter and3 image edits immediately gate stale export;newest valid result matches independent Node generation;invalid transform blocks and resets.
- `personalization-check.mjs`:actual solid probes confirm bright ring hole remains uncut,dark ring is engraved and backing remains continuous. This is sampled relief,not exact vector tracing.
- Reference evidence:fresh public download SHA matched parsed source;actual cross-sections inspected;source mesh not watertight and is never used as a repaired solid or redistributed. README/reference-analysis distinguish measured dimensions from proposals.
- Root gallery:every inline script compiled using `new Function`,missing script fails;361 entries,360 older entries preserved unchanged,new folder appears exactly once under STL Generators first. Gallery rendered without runtime errors.
- Root `npm run predeploy`:361 apps,0 failed,0 skipped. Every app index exists;root gallery identical;43 new-app deploy files byte-identical to dist. Production tests run under actual /daily-app2/20261102-1/ prefix,including worker/WASM.

Reports are the machine-readable `*-validation.json`,geometry-validation.json and validation screenshots. Synthetic fixtures only;no private files. Test runners and reference measurement script are reproducible in this folder.

## Explicitly not tested

No physical print,physical assembly,optical performance,strength,wear,adhesive retention or printer/material fit testing. Calibrate using clean base/gate pair first. Fixed adhesive seats are not snap fits. This open crossed-slit viewer is not an image-forming camera or precision measuring instrument.
