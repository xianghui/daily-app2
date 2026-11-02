# Validation — Tusi & Roll — 2026-11-03

Computational/browser verification only. **No physical print, assembly, rolling/friction, dimensional accuracy, or path-straightness test performed.** A watertight mesh and collision-free ideal poses do not prove reliable no-slip physical motion.

## Reference evidence

The two local candidate STLs were freshly parsed first. The selected licensed public binary STL was newly downloaded, SHA-256 verified, split into components, measured and cross-sectioned at three real Z heights. Source/component bounds and socket measurements are in reference-measurements.json; actual cross-section image in evidence/reference-sections.png was visually inspected before final geometry selection. Source sheet/socket dimensions map to real parameters; proposed fit and redesigned geometry are separately identified in reference-analysis.json and README. Source raw STL is not bundled. Upstream license fetched and retained. Source/reference trees unmodified.

## Solid and mechanism checks

`npm test` passed **14 geometry cases**: all3presets, simultaneous numeric minimum/maximum, three deck silhouettes, ASCII and binary imports with default and changed scale/depth/rotation/placement, threshold and grayscale image-derived models. Every current generated solid also runs worker-side mesh checks.

Independent binary-STL checks verify exact84+50N length, finite coordinates, nondegenerate triangles, unit normals agreeing with winding, welded equal vertices at1e-5mm, exactly two oppositely directed incident faces per edge, positive volume **per connected component**, expected millimeter bounds and bed-aligned Z=0. Connected card is one component; clean plate three components; every separate part one component. Default card150×150×1.6mm. Default socket4.5×1.7mm; tongue4.4×1.6mm, proposed.1mm total fit allowance.

Each geometry case independently checks73full-orbit poses, nominal2:1tangency and horizontal rim-point identity, zero unintended solid intersection,31straight guide insertion heights,13lateral disc insertion positions, no flat-layout overlap, safe cut-through of all12tabs, carrier+3components after tab cuts, no damage to clean part volumes, declared card bounds and sampled upper-layer footprints contained within first-layer footprint. Artwork backing≥1mm and through-sockets probed in real final solids. The ring128-gon bore is circumscribed, roller inscribed, so ideal circular poses do not penetrate the polygonal guide. No claim of force, friction, physical no-slip constraint or captive retention. Glue only fixed feet if needed; disc stays loose and manually coplanar.

`node hole-check.mjs` (after studio test creates actual imported SVG state) independently probes the real browser-imported ring SVG's final Boolean solid: bright center remains unengraved, dark ring is recessed, and backing stays continuous. It also reruns solid/mechanism checks. Six built-in icons each produce distinct actual geometry and pass independent mesh/assembly checks. `final-controls-test.cjs` also exercises three real bounded-variation button runs, independently checks text-derived output, and verifies the rolling pose changes the canvas but not printable geometry.

## Real production-browser checks

Tests serve **dist at its real /daily-app2/20261103-7/ prefix**, not a development server. Browser reports are saved JSON, screenshots in evidence and desktop/mobile-validation.png.

- Actual file-picker PNG/JPEG and ASCII/binary STL imports; explicit mm gate; source dimensions; transformed mesh orientation Z/Y/−Z checked.
- Actual STL downloads parsed, then compared against browser-preview fingerprint and portable JSON regenerated independently in Node. Source pixels, threshold, depth, crop, footprint, rotation and placement change exported geometry; replace/remove/reset returns expected signatures.
- Every downloaded image/STL-derived result repeats the mesh/mechanism checks, including independent all-part STLs.
- Invalid/truncated/open/nonmanifold/concave STL, oversized files/pixels/triangles/dimensions, invalid SVG/PNG, empty art, bad dimensions, empty/unsafe transforms all block export recoverably. No unsupported convex-hull substitution or fake repair.
- Three actual presets, deck silhouettes, text, six searchable icons, SVG hole behavior, PNG drag/drop; portable image+mesh JSON round trips, missing payload reattachment error, local named design reload, undo/redo, bounded variation.
- Everything ZIP downloaded and unpacked; all four contained STLs independently parsed, plus actual portable state and numbered assembly/current-fit notes. It is not labelled3MF.
- Rapid edits/current-state keys disable stale export immediately, latest result matches Node; invalid transform recovery. Worker script intentionally aborted, export blocked with actionable error; reload recovers.
- Connected-card, assembled, exploded, clean-plate and isolated-part views; see-through ring visually changes opacity, not export signature. Mathematical pose is explicitly preview-only; print exports stay bed-flat.
- Desktop374px left rail/right viewer, saved light/dark theme, visible keyboard focus, collapsible sections and reduced-motion.320/390px phone layouts have preview first, no document/inner viewport overflow in every tab, reachable downloads and real phone imports. Touch orbit and pinch produce changed canvas screenshots.
- No page runtime errors or external/CDN requests in production import/download tests. Files remain in-browser.

One initial rapid-edit test still used the previous app's out-of-range values; corrected its fixture to22/23/25mm and reran successfully. This was test adaptation, not a published geometry failure.

## Combined gallery/build

Inline root scripts compiled with Node new Function; missing scripts fail. New entry exactly once, area stl, correct link, newest first; all402prior entries preserved byte-for-field and rendered; STL Generators first. Root `npm run predeploy` staged403apps with0failed/0skipped, root index plus app prefix output. Combined-output production import/download and studio suites were rerun before publication. Deployment outcome is recorded separately in deployment-validation.json.

## Published verification

Root `npm run deploy` returned Published. Final [Pages build/deployment](https://github.com/xianghui/daily-app2/actions/runs/41519226608) completed successfully. An early smoke attempt saw the expected404while Pages was still building; rerun after completion passed HTTP200, actual public worker/WASM load, PNG file-picker import, binary STL download, fingerprint equality and public gallery entry. See deployment-validation.json and evidence/public-studio.png. Font/reference licenses are bundled under public/licenses and deployed locally.
