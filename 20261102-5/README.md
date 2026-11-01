# Chiral & Mirror

A local browser maker studio for a **three-part bed-flat kit card**: a signature dock and two cross-lapped tetrahedral ray frames. Snip twelve runners, cross the opposite half-slots, then lower four bottom tongues into the dock. Four engraved dimple counts distinguish tetrahedral sites. Dimples have1.3mm diameter,1.8mm pitch and0.5mm separating webs. Swap sites3/4 and print the opposite-handed version to compare non-superimposability by rotation. The rectangular perimeter is assembly scaffolding, not additional chemical bonds. This is a mathematical display, not a chemical atomic-radius or R/S-priority model.

## Run / publish

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; production base `/daily-app2/20261102-5/`. Per-app `predeploy` builds and `deploy` uses gh-pages; the public combined site is published only by the monorepo root flow. Dependencies: React, Three.js/OrbitControls, Manifold3D WASM, fflate, locally bundled Fredoka/Rubik fonts; Playwright for tests. No runtime API, CDN, remote fonts or account is required. Files are decoded/generated locally and never uploaded. Only synthetic image/STL/SVG fixtures are bundled, not personal files. Built dist is self-contained.

## Actual reference evidence

The read-only local switch and diamond-link STLs were parsed first. They have unsuitable switch cavities/interlocking8mm structures rather than sheet/card interfaces, so a documented public kit-card reference was downloaded and inspected:

- **White Cat Kit Card**, Mike Kasberg, Printables865769: https://github.com/mkasberg/white-cat-kit-card
- License **CC BY4.0**, full source license in `REFERENCE-LICENSE.txt`.
- Binary source SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 source triangles;179.819997×178.019994×3.190000mm bounds. STL has no units; millimeters assumed and corroborated by source sheet dimensions. 27 edge-adjacent components including24 two-face source artifacts; not a valid source solid to re-export or claim repaired.
- Actual cross-sections atZ0.1,0.5,1.59mm: default sheet1.60mm, four measured4.50×1.700012mm socket loops, low-web planes0.21–0.22mm. See `evidence/reference-sections.png`, `reference-measurements.json` and `reference-analysis.json`.
- New original CSG reconstruction uses default1.60mm sheet, **4.50mm socket length**, tongues and connected low-runner carrier strategy. It does not redistribute the raw model. No spacecraft silhouette is copied. New tetrahedral frames, cross-lap, carrier, label geometry and dock are distinct from the source and preceding kits. Proposed total allowance0.10–0.30mm and runner thickness0.4–0.6mm are redesign decisions, not measured source values or physical calibration.

Visual/interaction reference inspected read-only: keycap_generator2 README, styles, App, Viewer, imageTrace, worker, STL parser and export modules. Applied concrete patterns:374px scrollable left editor, sticky brand/theme, paired numeric/slider fields, collapsible sections, tactile selected buttons, white/lavender/coral light studio and saved dark theme, right live viewer, checkerboard source/cutout, print/exploded/isolated views and current-worker-result export gating. Phone uses preview first and stacked controls. Shared earlier studio infrastructure is reused; no reference Git history, dependencies, raw source mesh or deploy scripts copied.

## Dimensions and physical assembly

All model coordinates are millimeters. Card190–240×170–220; terminal radial span20–28; frame band3–5; sheet1.6–2.4; spacing3–5; runner width0.8–1.4; runner height0.4–0.6; total fit allowance0.10–0.30. Three real presets, three frame silhouettes and bounded variations are supplied. Values outside ranges and impossible layouts block export.

Sockets4.50×(sheet+allowance), tongues(4.50−allowance)×sheet. Cross-lap width sheet+allowance with a central gap equal to allowance. Upper/lower frame positions use proper rotations from the actual print geometry. Terminal midplane coordinates are(±r,0,+r/√2) and(0,±r,−r/√2), relative to centre; their pairwise cosine is−1/3. Opposite handedness swaps the real lower dimple engravings, not preview colours.

Print flat in PLA/PETG,0.16–0.20mm layers,0.4mm nozzle starting point, three walls. No supports intended. Calibrate one dock/frame pair before printing full card; clean elephant foot, adjust fit rather than forcing. Snip12 runners1.6mm beyond parts and file nubs. Keep slots/tongues untouched. Slide lower-ray frame vertically down into upper-ray frame at90°, then lower the pair into four dock sockets. Support dock on two scraps while inserting: tongue tips extend1.2mm beneath it. The assembled display rests on the four tips; optionally file flush if you want the dock underside flat. Dry-fit orientations then use compatible adhesive at four dock seats and central lap. No other hardware required. Exploded offsets are illustrative, not an insertion animation. Small-parts display, not load-bearing or a child toy.

**No physical printing, assembly, fit, adhesive-strength or durability testing has been performed.** Computational solid checks do not establish those properties.

## Image / SVG / text workflow

PNG and JPEG content signatures and dimensions checked before decode:16bytes–2MB,≤12MP,≤6000px per side. Portable copy downsampled≤500px per side. Simple SVG≤2000elements rasterizes locally; active/external resources, text/effects and invalid markup rejected. Six locally bundled SVG icons (heart/sun/wave/star/circle/plus) and up to8 text characters use the same conversion.

Conversion samples20×20 luminance values after contain/cover and crop shift±25%. Light or dark background/foreground interpretation, threshold1–254 or grayscale relief. A triangulated closed height mesh becomes a **Boolean engraving** in a protected radius6.5mm front dock patch. Adjacent samples interpolate; this is not exact vector tracing and tiny holes/details can disappear at this bounded resolution. Transparent/bright holes keep original material; checked with actual solid probes. Checkerboard shows the removed image background. Engraving depth0.4–0.6mm,≥1mm backing. Physical footprint4–7mm, Z rotation±180°, XY nudges±1.5/2mm. Out-of-zone transforms and empty silhouettes block export. This is2D-to-relief, **not full3D reconstruction from one photograph**. Raised mode is deliberately not offered: all artwork must preserve the declared flat-sheet envelope.

## STL workflow

ASCII and binary STL,40bytes–2MB,≤1500triangles, each source dimension0.2–250mm. Confirm millimeter units explicitly because STL stores none. Choose Z-up/Y-up/reversed-Z **before import**; reimport to change orientation. Source preview shows exact mesh and dimensions. Validation checks finite coordinates, nondegenerate faces, welded opposite-directed two-face edges, connected positive-volume solid, triangle intersections, convexity and broad flat bottom. Concave/cavity/branch/overhang or open/nonmanifold meshes are explicitly unsupported; no repair and **no convex-hull substitution**. The convex hull computed by parser is only a bottom-footprint containment check, never output geometry.

Use footprint scale, engraving depth, rotation, XY placement, centre/reset, replace/remove. Exact mesh is normalized within bounds and Boolean-subtracted into the meaningful signature-dock component; it is not an unchanged re-export, texture or interpenetrating shell. Safe zone avoids all four sockets;≥1mm backing remains. Browser tests compare imports/transform changes against no-import exports and re-generate saved state in Node.

## State / output

Debounced Manifold WASM worker; bounded image/STL complexity, sequence/stale guards and real ready/error states. Exports are disabled while parsing/building, after invalid edits, or if result key differs from current state. A last-good preview is explicitly labeled and never exported as current. Undo/redo, six local named designs, portable JSON save/open carry bounded image and exact mesh payloads. Missing image payloads demand reattachment; storage failures are shown.

Views: connected card, exact de-tabbed print plate, tetrahedral assembly, exploded, isolated dock/upper/lower. Interactive orbit, fit, zoom and phone touch/pinch. Export X/Y/Z reflects selected printable output. Binary STL connected-card, three clean parts and loose plate; Everything ZIP contains connected-card+three part STLs and numbered assembly notes. STL stores **no preview colours**. Preview and downloads share the exact current mesh; signature and JSON regeneration tests check it.

## Reproducible validation

`npm test`:43default/preset/silhouette/handedness/extreme/image/STL cases. Independent binary-STL parser checks float32 bytes, finite vertices, nondegenerate triangles, unit normals/winding, edge incidence welded1e-5mm, positive volume per component, expected dimensions and part counts. Manifold tests check three assembled-pair nonintersections, entire cross-lap insertion path, paired dock lowering, four socket/tongue probes and shoulder stops. Twelve safe snips release exactly three pieces plus carrier. Card envelope, bed-supported cross-sections, all six tetrahedral angles and mirrored label signatures checked. Tests include image/STL-derived outputs at parameter extremes.

`node browser-test.cjs`, `node studio-test.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs`, `node stale-test.cjs`, `node phone-views-test.cjs`, `node personalization-check.mjs`, `node chirality-check.mjs`: real production browser file pickers, downloaded STLs, exact state/preview/export signatures, PNG/JPEG/ASCII/binary transform changes, threshold/depth/crop changes, replace/remove/reset, malformed/truncated/nonmanifold/concave/oversized/empty inputs, worker abort recovery, undo/redo, JSON/named design restoration, missing-payload errors, every icon, SVG holes, zipped mesh parsing, all views, dark theme, focus, phone320/390px overflow checks, touch orbit/pinch and reachable exports. JSON reports/screenshots record actual results; see them rather than interpreting this checklist as proof of physical testing.

Independent chirality check probes the real engraved3/4 label geometry and verifies opposite nonzero oriented tetrahedral determinants. Internal full-insertion sampling is supplemented by analytic slot clearance: shared central slab material lies below midpoint−fit/2 in upper-ray frame and above midpoint+fit/2 in lower-ray frame throughout lowering; the positive gap cannot collide.
