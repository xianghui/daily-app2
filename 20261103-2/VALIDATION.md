# Validation performed

- `npm run predeploy` production build passed.
- `npm test`:39variants; all mesh, card bounds,12tab release, pencil fit, grip insertion, collision poses120–240deg and support-free footprint checks passed. See geometry-validation.json.
- Real production browser imports/downloads: PNG,JPEG,ASCII/binarySTL; exported mesh differs with content/settings and exact signature matches current preview plus Node regeneration. Negative cases recoverable with exports disabled. See browser-validation.json.
- Presets,silhouettes,text,SVG,all six icons,drag/drop,JSON+local saves,undo/redo,ZIP eachSTL,missing payload,orientation,worker abort/recovery and stale edits passed. See studio/orientation/icons-drop/stale reports.
- Desktop374px left-panel and320/390px preview-first phones,no overflow,reachable exports,theme,focus,collapse,touch orbit and pinch passed. See presentation/browser reports and evidence/.
- Source actual mesh parsed,hash/components/interfaces recorded; computed cross-sections viewed. Source raw STL not redistributed. Reference is a design measurement, not a physically tested model.

Physical print,adhesive strength,pencil handling and involute accuracy **not tested**. External cord,pencil,tape and adhesive required. Computational watertightness alone does not prove real print performance.

Combined root staging: `npm run predeploy` built398apps,0failed,0skipped. Root index exactly matches deploy/index.html; all398app entrypoints exist; all43current app assets byte-for-byte SHA256 match production dist. Gallery inline scripts compile and browser renders398entries;397earlier entries unchanged. See deployment/gallery/staged reports.

Root `npm run deploy` succeeded. Public GitHub Pages verified after build/CDN propagation with cache-busting query: full398-entry gallery plus390px app worker/WASM,built-in,image and ASCII-STL real file-picker/download flows,matching current preview/Node signatures,positive closed meshes and mechanism checks; zero runtime errors. See public-validation.json and public-gallery-validation.json.
