# Completed computational validation — 2026-11-04

- `npm run predeploy`: production React/Vite build passed at the actual `/daily-app2/20261104-13/` base; worker and Manifold WASM bundled locally. Chunk-size warning is informational.
- `node validate.mjs`: **51** default, preset, single-range, joint-extreme, silhouette, image and imported-STL cases passed. Every case parses connected card, each clean part and combined loose plate as float32 binary STL. Checks include finite/nondegenerate triangles, stored unit normals/winding, welded edges with exactly two opposite incidences, independently positive connected-component volumes and mm dimensions.
- Every tested card is one connected solid; eleven individual parts are closed solids. **44 real runner cuts → carrier plus eleven intact parts**. Flat parts and assembled parts do not overlap; 55 assembled pair checks and 50 vertical insertion samples per case. Actual well probes and rod inclusion confirm fit, not just bounding-box assertions. Backing ≥1.5 mm; no unsupported upper XY footprint beyond first-layer footprint.
- `node arithmetic-mesh-test.mjs`: **5,040 independent actual-contour probes** (1,260 per default/preset) verify every engraved segment of 180 split digits / 90 products, against a separately encoded seven-bit digit truth table. Not merely testing metadata that repeats the generator arithmetic.
- `node browser-test.cjs`: actual file-picker PNG/JPEG/ASCII-STL/binary-STL imports, downloaded STL geometry compared with no import and transformed inputs. Exact preview/download fingerprints match Node regeneration from downloaded JSON. Controls for pixels/threshold/depth/fit/crop/scale/rotation/placement affect geometry. Every downloaded variant gets full component/manifold/assembly checks. Truncated/open/nonmanifold/concave/oversized/dimension-invalid inputs and empty images reject recoverably. Units gate exports. Both range extremes exercised through real UI.
- `node studio-test.cjs`: all presets and three silhouettes, text, searchable icon, SVG, exact ZIP entry bytes parsed, portable raster/mesh JSON, named-save reload, missing payload rejection, undo/redo, all views, ghost, saved dark theme, visible focus, collapsing sections, reduced motion, 374px desktop left editor, 320px preview-first phone and worker script abort/recovery passed.
- `node mobile-layout.cjs`: all five tabs and expanded guide at **320 and 390 px** fit real viewport widths. Preview first, real JSON save and reachable export buttons. Browser suite also exercises actual phone PNG/STL downloads and CDP touch orbit and pinch screenshots; no remote generation requests or page runtime errors.
- `node orientation-test.cjs`: Z/Y/−Z orientation, source dimensions, millimeter confirmation, export matching and all actual components passed.
- `node icons-drop-test.cjs`: all six icons change real geometry, per-part topology/assembly checks passed, real PNG drag/drop passed.
- `node interaction-test.cjs`: all five sample buttons, three bounded variations, exact reset and rod lift affecting preview but not STL passed.
- `node stale-test.cjs`: rapid parameter and threshold changes immediately disable exports; only newest state can export; invalid transforms recover.
- `node isolated-test.cjs`: all eleven isolated views render and actual per-part downloads parse correctly.
- `node image-hole-test.mjs`: independent Boolean probes of synthetic and browser-imported SVG rings verify uncut centers and real recessed dark rings.
- Final production build smoke: direct tray-STL button downloaded a checked, positive-volume closed component with exact output geometry; worker ready, no runtime errors.
- Reference reparsed from actual downloaded mesh; local candidates, source SHA-256/components/dimensions and actual cross-section image recorded. Source geometry defects disclosed, not reused/repaired. No raw third-party STL redistributed.
- Gallery: all inline scripts compiled using Node `new Function`, new area=stl entry exactly once; **435 prior entries preserved, 436 total**. Real gallery browser test checks first STL category, newest entry, correct link and search; no runtime errors.
- ROOT `npm run predeploy`: **436 built/copied, zero failures, zero skipped**. Root and new-app index bytes matched their deploy-folder copies. Publication uses ROOT `gh-pages -d deploy`, never individual app publication.

## Fixes discovered during this run

Seven-segment numeral cutting tools originally had coincident mid-seams at some parameter values. Changed the actual tools to overlap by .05 mm, not a mesh face-dropping workaround. All geometry cases and production browser imports were rerun afterward. Final solid simplification tolerance .01 mm; independent float32 edge/winding checks remain strict. Well interior probes are .01 mm from exact touching boundaries to avoid float32 boundary-contact ambiguity, far smaller than the .20-mm minimum rod gap.

## Not performed

**No physical printing, assembly, fit, readability or strength test.** No universal printer/material tolerances claimed. Rods are deliberately loose, without captive retention. Large connected card needs a large bed; smaller beds use individual parts. Ten distinct rods require extra exports for repeated digits. SVG/raster conversion is sampled relief, not full 3D photo reconstruction. Unsupported STL inputs are explicitly rejected, not silently convex-hulled or repaired.

## Publication verification

ROOT `npm run deploy` returned **Published**. After the GitHub Pages workflow propagated, `public-smoke.cjs` exercised the real public URL: bundled worker/WASM started; real PNG and binary-STL imports produced changed checked STL downloads; exact displayed fingerprints matched the downloaded bytes; no browser runtime errors. The public gallery also rendered 436 cards with the new entry first and working search. See `public-validation.json`, `deployment-validation.json` and `gallery-browser-validation.json`.
