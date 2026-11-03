# Validation — Parallel & Pan

## Computational checks (not physical printing)

- `npm run predeploy`: production Vite build with bundled local fonts, worker and Manifold WASM under `/daily-app2/20261103-28/`.
- `npm test`: **38 cases**: three presets; 24 individual min/max scalar endpoints; all-minimum and all-maximum combinations; three silhouettes; four ASCII/binary imported-STL transform variants; thresholded and grayscale image models. All nine separately downloadable STLs, connected card and float32-translated eight-component clean plate are parsed independently. Exact length, normals, finite/nondegenerate triangles, millimeter bounds, opposite-directed two-face edge incidence (1e−5-mm welding), consistent winding and positive volume per intended component pass.
- `collisionCheck`: all eight clean parts nonoverlapping on the plate; card is one connected solid and within declared X/Y/Z envelope; 32 runner cuts produce one carrier + eight undamaged clean parts. All slice footprints are bed-supported (no exempted unsupported patch). Every part pair is Boolean-intersected at nine poses from −10° to +10°. Six XZ pivot axes align, axial face gaps are .6 mm, equal post/mast spacings hold, pans remain level. Seven vertical insertion samples per socket pairing, seated shoulders, source-derived sheet clearances and continuous backing pass. These are geometric checks, not strength/friction tests.
- `node import-extremes.mjs`: image- and imported-STL-derived all-min/all-max models receive identical per-part STL and assembly checks. Probe solids confirm bright image holes retain upper material, a dark annulus actually removes material, and bottom backing remains continuous.
- Reference evidence: fresh public binary STL SHA verified, 30,616 triangles parsed, 27 edge-adjacent source components and nonwatertight defects recorded, measured sheets/sockets/runners and three actual mesh cross-sections inspected. Local switch/fabric candidates independently parsed and rejected for this sheet-kit design. Raw reference asset not redistributed. See reference-analysis.json, reference-measurements.json and evidence/reference-sections.png.

## Actual production-browser interaction

Reproduce with `python3 serve.py` (production prefix on port 5828), then:

```
node browser-test.cjs
node studio-test.cjs
node presentation-test.cjs
node orientation-test.cjs
node stale-test.cjs
node icons-drop-test.cjs
node motion-view-test.cjs
```

These use real Playwright file pickers and downloads, not synthetic download-function calls. Browser PNG/JPEG/ASCII/binary imports change actual STL bytes versus defaults. Threshold, crop, grayscale, depth, footprint, rotation and placement changes survive export; reset reproduces defaults. Source dimensions and explicit mm confirmation, Z/Y/−Z orientations, original/final previews, replace/remove/reset and actual drag/drop are checked. Downloads match the UI's exact current byte signature; downloaded JSON regenerates the same STL in Node, then all parts and the assembly are independently checked.

Malformed/truncated/oversize files, fake PNG content, >12-MP images, too many triangles, excessive mesh dimensions, open/nonmanifold and concave meshes, empty silhouettes and invalid/unsafe transforms all produce recoverable errors and disable exports. No convex-hull replacement or automatic-repair claim. Rapid parameter/image edits immediately block stale export; only the newest valid result becomes downloadable. Aborting the production worker script blocks export with an explicit error; reload recovers.

Three real presets, all silhouettes, text, six searchable icons, SVG hole conversion, JSON roundtrips with embedded image/mesh payloads, named designs across reload, missing-payload reattachment errors, undo/redo, actual ZIP contents (nine valid STLs + JSON + numbered assembly guide), every view, isolated selection, see-through mast, saved dark theme, keyboard focus, collapsible sections and reduced-motion context pass. No external generation/font/CDN requests were observed.

At 390/320-px phone widths: preview-first stack, reachable exports, actual PNG/STL picker imports/downloads, touch orbit and two-finger pinch are checked with screenshot changes. All five editor sections and expanded assembly/attribution instructions stay within the **configured 320-px viewport**. Desktop left rail is 374 px with viewer on right. Exact delivered screenshots and machine-readable reports are stored beside this file / in evidence/.

## Combined site

`node gallery-check.cjs` compiles every nonempty inline script via `new Function`, validates the new first/unique STL entry and correct folder/category, preserves all **420 previous entries**, and verifies the STL Generators category is first. `node gallery-browser.cjs` checks actual card count, label, link, search/reset and absence of runtime errors. Root `npm run predeploy` staged index + all 421 gallery folders with zero failures/skips. Root index and new bundled assets matched exact SHA-256 hashes. Full staged production import/download tests passed again (31 actual downloaded STLs, including all nine part/card choices), as did staged gallery rendering. `motion-view-test.cjs` verified both working-arc extremes change the preview, all eight isolated-part views, and an actual eight-solid clean-plate download; pose changes intentionally do not alter printable-export geometry. Deployment/commit receipts are recorded in the automation result/Git history, not invented here.

## Explicitly unperformed

**No physical print, material strength, friction, fatigue, adhesive strength, nut-retention, stability, payload capacity or weighing-accuracy tests.** No force/rigid-body dynamics simulation. No universal tolerance, calibrated instrument, hardware-free or hard-stop claim. External six M3 joints, washers/shims, locknuts and adhesive are required. Work gently within the computationally inspected ±10° arc.
