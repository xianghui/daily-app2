# Validation — 2026-11-03

## Completed

- Actual reference STL parsed, SHA-256, dimensions,27components, measured sheet/socket planes and section image recorded. Source defects disclosed; raw mesh not bundled.
- App `npm run predeploy` passed. ROOT predeploy:417apps,0failed,0skipped. Every gallery app/index present; root index and all20new-app production files byte-match staging.
- `npm test`:50preset/parameter-end/corner/silhouette/import cases. Independent binary STL checks verify finite/nondegenerate triangles,normal length/winding,1e-5mm welded edge incidence,positive volume per component,mm bounds and printable Z=0. Card and each part plus translated loose plate checked.
- CSG checks:one connected card;24runner cuts release carrier+6intact parts;declared envelope;no print-layout or assembled intersection;all8slot clearances and8shoulder seating contacts;clear bore;seven parallel insertion heights;≥1mm backing;bed-contact footprint. Retention requires adhesive,not an unsupported snap claim.
- `browser-test.cjs` against production output and combined final staging:real PNG/JPEG/ASCII-STL/binary-STL picker uploads,threshold/depth/crop/grayscale,pixel changes,scale/rotation/placement/unit confirmation alter actual downloaded geometry. Exact current preview/export fingerprint matches independently regenerated downloaded JSON. Mesh/assembly checks repeated for import-derived downloads,including phones. Replace/remove/reset recovers.
- Truncated/open/nonmanifold/concave STL,excessive size/triangles/coordinates/pixels,fake images,empty silhouettes,unsafe transforms and invalid dimensions rejected with disabled export. No hull substitution or automatic repair.
- `studio-test.cjs`:all3presets/3silhouettes,text/searchable icons/SVG,portable image+mesh JSON,named designs/reload,missing-payload refusal,undo/redo,allviews,ZIP/per-part parsed meshes,keyboard focus,collapsible sections,saved dark theme,worker-script abort/recovery and374px desktop left/right layout.
- `orientation-test.cjs`:Z/Y/−Z from actual uploaded STL;explicit mm confirmation;final solids and assembly verified.
- `stale-test.cjs`:rapid parameter/image edits immediately block stale export,latest-only result,invalid-transform recovery.
- `icons-drop-test.cjs`:all6icons change final solid,independent mesh/assembly checks;actual desktop PNG drop.
- `hole-check.mjs`:Boolean probes in actual browser-imported SVG output verify bright center uncut,dark ring recessed,continuous backing.
- `presentation-test.cjs`:distinct assembled/exploded/card/loose/isolated views,visible rail ghost,all5control tabs at320px with expanded instructions,no overflow,reachable actual JSON download.390px real import/STL downloads and actual touch orbit/pinch alter canvas. Screenshots stored in evidence/ and app folder.
- Gallery:Node new Function compiles every inline script and fails on missing scripts;new entry exactly once,first,area stl;allprior entries retained;STL Generators first;full browser render/search without runtime errors.

Reports:geometry-validation.json,browser-validation.json,staged-validation.json,studio-validation.json,orientation-validation.json,stale-validation.json,icons-drop-validation.json,hole-validation.json,presentation-validation.json,gallery-validation.json,root-build-validation.json.

## Not performed

No physical print,bond strength,winding tension,thermal,electrical,magnetic,fatigue or safety certification testing. This passive former is not a validated powered circuit. External wire/thread,adhesive and optional compass are not generated. Calibrate fit for your printer/material.
