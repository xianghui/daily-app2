# Validation — Nipkow & Scan / 20261105-6

Computational checks only. **No physical print, hardware fit, free-rotation, stability or optical-performance test was performed.**

## Reference evidence

Freshly downloaded White Cat Kit Card binary parsed, hashed and sectioned, alongside actual local switch/fabric candidates. Selected source: SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, 27 edge-adjacent components including degenerate pseudo-components; source is nonmanifold. Its measured sheet/socket/carrier construction informs an original reconstruction, not a repaired/re-exported mesh. CC BY 4.0 verified against retrieved upstream license; no raw reference STL bundled. `reference-analysis.json`, `reference-analysis.py`, `evidence/reference-sections.png` record exact evidence.

## Mesh and mechanical checks

`npm test` passed **90 valid configurations**, including default, all three presets, individual and combined parameter extrema, all silhouettes, 45 valid geometry corners, threshold/relief source grids and actual parsed ASCII/binary-STL integrations with transformed variants. Three unsafe small-radius/dense/large-aperture corner configurations are intentionally rejected for <1.2 mm aperture webs; unsupported numerical values and empty/unconfirmed sources also throw.

For every accepted case:

- Independently parse real float32 binary STL for the card, each clean part and the translated clean-part plate.
- Exact triangle byte length; finite coordinates; nonempty/nondegenerate triangles; unit stored normals consistent with winding; 1e−5 mm welded edges each used twice with opposite directions; positive volume **per connected component**; expected component counts; actual millimeter bounds and bed Z=0.
- One connected card, four accessible runners per part, twelve total. Simulated corridor cuts yield exactly carrier + three parts, without detached fragments or cutting into clean part volume.
- Every part inside declared card envelope, no accidental packed overlaps; all sampled upper sections supported by bed footprint.
- Actual upright/disc bores and every optical hole probed in clean parts **and connected card**; runners do not plug interfaces. Blind socket open above an intact sheet-thickness floor.
- At least 4 mm art backing; at least 1.2 mm inter-aperture web; ≥4 mm outer rim; printed disc/base 8 mm clearance and nominal disc/upright 3 mm gap.
- Twenty-four full-revolution positions have no printed-part collisions. Twenty-one vertical upright insertion positions and twenty-one axial wheel insertion positions are collision-free. Hardware, washer stack, endplay, adhesive and printer-dependent fit are explicitly disclosed, not inferred from a watertight mesh.

`geometry-validation.json` contains all exact per-case output metrics. The one unsafe-corner test initially assumed every bounded corner was valid; it was corrected to assert the intended mechanical rejection instead of weakening the 1.2 mm web bound.

## Actual production-browser tests

`npm run predeploy` passed. Tests ran first under the real Vite base path using `serve-production.py` (port 5946), then import/export tests reran against the **combined deploy directory** using `serve-combined.py` (port 5947). Exact reports: `browser-validation.json`, `combined-browser-validation.json`, `studio-validation.json`, `orientation-validation.json`, `personalization-validation.json`, `interaction-validation.json`, `final-validation.json`, `mobile-layout-validation.json`.

Verified:

- Real file-picker PNG, JPEG, ASCII STL and binary STL imports, source previews/dimensions and millimeter confirmation.
- Actual downloaded STL matches current UI fingerprint and independent Node regeneration from saved portable JSON; every imported result runs the same final mesh/assembly checks.
- Pixel content, threshold, depth, grayscale, crop, background inversion, physical footprint, STL rotation, scale and placement measurably change exported bytes. Replace/remove/reset reproduces original signatures. Y-up/inverted-Z fixtures reproduce the correctly oriented integrated result.
- Wrong/truncated files, open/nonmanifold/self-intersecting/concave unsupported meshes, oversize files/images/triangles/dimensions, empty images, excessive/fractional aperture counts, invalid transforms and unsafe webs block export with recovery. No convex hull substitution or fake repair.
- Real text and all six searchable bundled icons export changed closed geometry. SVG ring hole survives conversion; actual final Boolean ring engraving is probed to preserve the bright centre and remove the dark annulus.
- Three real thumbnail presets, all silhouettes, undo/redo, local named designs/reload, bounded image and mesh JSON restoration, explicit missing-payload reattachment errors.
- Every per-part shortcut and selection-menu download; actual Everything ZIP unzipped and every STL parsed; numbered current assembly notes/design JSON included.
- All views, isolated parts, see-through view, fit controls; wheel-angle changes canvas but not printable mesh signature. Worker failure by deliberate script abort blocks export; reload recovers. Current-state gating prevents stale invalid exports.
- Desktop 374 px left controls/right viewer; saved dark theme, pressed states, keyboard focus, collapsible sections and reduced motion. Phone 320/390 px, every editor tab and expanded guide: no horizontal overflow, preview first, reachable STL and actual JSON download. Real touch orbit and pinch change canvas screenshots.
- Zero page runtime errors and zero external file-processing/generation requests in local production tests.

Screenshots: `evidence/desktop-assembled.png`, `evidence/desktop-card.png`, `evidence/phone-320.png`, `evidence/phone-390.png`, `evidence/studio-dark.png`. Samples are synthetic CC0; no personal files or source reference mesh committed.

## Gallery and combined publication

Root inline script compiled via Node `new Function`; missing scripts cause nonzero failure. New entry appears exactly once, area `stl`, correct folder/name, newest first. All **453 prior entries are unchanged**; gallery now has **454** entries. `STL Generators` remains first and existing games/other entries are preserved. Root predeploy: **454 built, 0 failed, 0 skipped**. Every deploy app index exists, new dist files are byte-identical in combined output, root index matches, and combined gallery renders with no runtime errors.

Reproducible scripts: `gallery-test.cjs`, `gallery-browser.cjs`; reports: `gallery-validation.json`, `combined-gallery-validation.json`, `root-build-validation.json`. Gallery links intentionally target public Pages in a new tab; the local harness verifies the exact target pathname and opens that path on the local combined server before publication.

Public deployment and live default/PNG/JPEG/ASCII/binary checks are recorded separately in `publication-validation.json` and `deployment-validation.json` once completed. Source publication uses root `npm run deploy`, followed by main commit/push. This is not an individual-app-only deployment.

## Live result

Root deploy returned `Published`; GitHub Pages workflow [41913931843](https://github.com/xianghui/daily-app2/actions/runs/41913931843) completed successfully for gh-pages commit `5b98133ae6f375ae9e1528b7346296cf75b0d9a2`. The new public app returned HTTP 200. Live Chromium tests downloaded and validated default, PNG-, JPEG-, ASCII-STL- and binary-STL-derived outputs, matched each against the current UI geometry signature, and rendered all 454 gallery entries without runtime errors. See `publication-validation.json`. The initial 404 was deployment propagation while that workflow was queued; no application repair was needed.
