# Toggle Dwell validation — 2026-10-26

Computational and real-browser verification; **no physical print tests**.

## Model and mechanism

`node validate.mjs` passed **20 default/preset/extreme cases** and **35 image/STL-derived cases**. Each of eight individual parts and each float32-translated print plate was independently checked for exact binary STL length, nonempty finite/nondegenerate triangles, normalized outward normals, two opposite-directed incident faces per welded edge (0.00001 mm tolerance), positive enclosed volume for each connected component, expected component counts and millimeter bounds. All intended parts are distinct, closed solids.

All-pairs CSG intersection sweeps cover 25 phases for built-ins and 19 for imported outputs. Checks include three pivot/socket interfaces, intentional cap interference confined to pin regions, reverse-order cap/link withdrawal, spring lift-out **after removing the upper link**, slider release, print-plate separation and isolated palm personalization. Both overtravel directions meet the printed slider stop. Volumes below **0.0001 mm³** are accepted only as float32 numerical boundary noise at nominal contacts, not as significant physical interference.

Independent geometric calculations test equal link closure over 61 positions, supported slider travel, positive spring preload, <21% geometric free-length shortening and the maximum at dead center of a qualitative positive-stiffness spring-energy proxy. This is not real material deformation, force, fatigue or snap testing. The assembled spring is an explicitly labelled scaled envelope; its undeformed solid is exported. Spring/guide interference discovered during development was fixed by shortening guide cheeks while preserving >2.6 mm slider engagement. The release sequence was corrected so the upper link clears the spring before vertical spring withdrawal.

## Actual production browser workflows

- `node browser-test.cjs`: actual file-picker PNG, JPEG, ASCII and binary STL uploads; downloaded STL bytes parsed independently and compared with the current preview signature and JSON-regenerated geometry. Pixel-content/threshold/depth/crop/fit/scale/rotation/placement changes survive export. Replace/remove/reset restores the correct baseline. Individual part downloads verified.
- Invalid/truncated/open/nonmanifold/concave/excessive-size/excessive-pixel/excessive-triangle/bad-dimension/empty-image/bad-transform inputs reject with recoverable guidance and disabled exports. STL millimeter confirmation gates integration.
- 390 px touch-enabled phone: real CDP touch orbit and pinch move the canvas; real PNG and STL uploads/downloads pass. 320 px view has no horizontal overflow, reachable export controls and preview-first stacked layout.
- `node feature-test.cjs`: all three presets, three shapes, bounded variations, text, icons, SVG, raised/engraved marks, image/STL portable JSON round trips, local named saves and reload, undo/redo, actual eight-STL ZIP extraction/validation and every part button. Assembled/exploded/isolated/print views preserve exported geometry. Saved theme, swatches, drag/drop, Y-up source, focus, collapsible controls and current-state export guard pass.
- `node additional-test.cjs`: every physical parameter changes real geometry; knee motion changes preview only; named imported designs survive reload; missing image payload explicitly requests reattachment; −Z import, reduced-motion CSS, 374 px left rail and 320 px preview-first layout pass.
- `node hole-test.cjs`: direct solid probes show the SVG ring's bright interior remains unraised/unengraved on the backing in both relief styles.
- `node resilience-test.cjs`: intentionally aborted production worker disables exports; reload recovers. All six original bundled icon paths produce distinct geometry.
- `node stale-import-test.cjs`: a deliberately delayed first image normalization cannot overwrite a newer selected image.
- Browser runtime errors: **zero**. External data requests: **zero**.

## Build and gallery

- `npm run predeploy` passes with the locally bundled production worker/WASM under `/daily-app2/20261026-26/`.
- Gallery inline script compiled with Node `new Function`; no missing scripts. New entry exists exactly once, newest first, correct folder and `area:"stl"`. All **181 prior entries** preserved unchanged.
- Browser gallery renders **182 cards**, STL Generators first, correct app link and working search/reset, with no runtime errors.
- Root `npm run predeploy`: **182 apps built/copied, zero failures, zero skips**. All 182 app indexes present. Root gallery and all **43 new-app artifacts** byte-identical to source/dist.
- Full browser imports/downloads/mesh checks are repeated against the root-staged output, reported separately in `root-browser-validation.json`.

Reports and screenshots are synthetic fixtures/results only. No personal uploaded files are stored in this repository. The archived app tree and Keycap Studio reference remain read-only. No physical print, TPU strain, measured spring force, long-term wear, fatigue, friction, cap-retention or material strength tests were performed; no universal tolerance or tested durability is claimed.
