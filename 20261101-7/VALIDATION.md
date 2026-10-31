# Computational validation — 2026-11-01

**No physical print, assembly, strength or acoustic/tuning test performed.** This is a hand-held rack for separately supplied stopped straws, not a printed panpipe mouthpiece or certified instrument.

## Reproducible results

- `npm test`: 48 model cases,45 out-of-range/invalid parameter cases rejected. Defaults,each preset,all three profiles,paired/all extrema,each field endpoint,image threshold/grayscale/hole examples,ASCII/binary-derived examples and imported-image/STL ALL-min/ALL-max combinations. Every exposed parameter changes exported card bytes. Invalid/empty inputs blocked.
- Independent float32 binary-STL reader validates exact byte length,finite vertices,nondegenerate faces,unit normals consistent with winding,1e-5mm welded directed edge incidence(two opposite-directed faces),positive volume PER connected component and expected millimeter bounds. Each of four exports checked separately; card is one component,each clean part one component.
- Independent Manifold intersections: no assembled-part collisions;26 sampled horizontal collar-approach positions;four nominal tongue volumes inside open sockets;full-diameter external straw cylinders pass both collars without touching printed material. Four fixed seats require adhesive,no moving mechanism or friction-retention claim.
- Twelve mid-runner cuts produce exactly FOUR closed components(carrier+three parts). Clean parts lie fully in card,are mutually disjoint and remain inside exact declared X/Y/Z envelope. Upper cross-section samples stay inside bed footprint;no unsupported upper XY growth. Minimum-bore web>=1.4mm,front-bore wall>6mm,art backing>=1.4mm.
- `browser-test.cjs`:26 actual STL downloads with binary parsing and UI/JSON/Node signatures matched. Real PNG,JPEG,ASCII and binary file-picker imports;pixel/threshold/depth/crop/relief,size/rotation/placement changes alter exported geometry. Remove/reset reproduces built-in bytes. Every downloaded snapshot regenerated and checked with mesh+assembly tests.
- Browser rejected wrong/malformed SVG,fake/oversized PNG,excessive STL bytes/triangles/dimensions,truncated/open/nonmanifold/concave inputs,empty silhouettes,invalid settings/transforms and unsafe artwork placement. Export stays disabled,errors are recoverable. No silent hull or repair.
- `studio-test.cjs`:every preset exports/assembly checked;three profiles,text,searchable icon,SVG,portable image and STL JSON round trips,local named-design reload,missing-payload rejection,undo/redo,depth changes,actual ZIP decompressed and each mesh parsed. All views,ghost,fit,dark-theme persistence,focus,collapsible sections,reduced motion and aborted-worker recovery passed. Repeated against combined ROOT deploy output.
- `icons-drop-test.cjs`:all SIX bundled icons independently regenerated,all four part exports parsed and assembly checked;five or more distinct geometry hashes;real drag/drop PNG path passed against combined output.
- `orientation-test.cjs`:anisotropic synthetic7×5×3mm block attached through real picker in Z/Y/−Z up. Source dimensions,explicit mm gating,saved payload,final fingerprint,mesh and assembly checks passed. Y orientation changes actual final shape.
- `rapid-test.cjs`:spacing control now changes actual card layout,rapid valid edits followed by invalid edit cannot enable stale export,reset exactness,background polarity changes geometry,each per-part button downloaded/parsed exact current geometry. A test initially found spacing was cancelled by bay-space distribution;fixed placement to honor requested bottom margin and reran complete geometry/import/studio suites.
- Phone320/390px:preview FIRST,all editor tabs,expanded long instructions,true configured viewport(no hidden viewport scaling),JSON and STL exports reachable,touch orbit/pinch change canvas,image/STL picker workflows. No page runtime errors or external runtime requests.
- Gallery inline scripts compiled with `new Function`;missing scripts/errors fail. Exactly one new STL entry first,337 earlier entries unchanged,338 rendered cards,STL Generators first;search and runtime passed against combined deploy.
- `npm run predeploy` app succeeded;root `npm run predeploy`:338 built/copied,0 failed,0 skipped. Root deploy contains gallery and all338 app folders. Production app files compared byte-for-byte with app dist;locally bundled worker/WASM/fonts verified by browser tests.

## Evidence and limits

`reference-measurements.json`,`reference-analysis.json`,`evidence/reference-sections.png` record actual source mesh/hash/components/sections and measured-versus-proposed interfaces. Source license independently fetched and compared. No raw third-party STL redistributed. Runtime/model decisions live in src/geometry.js;reference trees remain read-only.

Reports:validation-report.json,browser-validation.json,studio-validation.json,mobile-regression.json,rapid-validation.json,orientation-validation.json,icons-drop-validation.json,gallery-validation.json,release-validation.json,live-validation.json. Screenshots in evidence/ plus desktop/mobile-validation.png. All assets are synthetic,not personal uploads.

Closed/manifold meshes and clearance calculations do not establish real print fit,strength,breath response or tuning. Slot/bore allowances need material/printer calibration. Four tongue seats require adhesive;straw stops/closures are external. Fixed180mm cutting schedule uses crude quarter-wave ratios/end correction,not measured sound. Recessed.45mm ordinal ticks may require a fine nozzle. Straws/tape are never represented as STL geometry.

## Published verification

GitHub Pages returned HTTP200. Live production worker became ready;an actual downloaded connected-card STL exactly matched local default bytes and passed independent mesh checks. Live root gallery rendered338 entries with Pan & Pitch first,zero page runtime errors. See live-validation.json.
