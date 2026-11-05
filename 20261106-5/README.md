# Lap & Frame

A React + Vite local maker studio for a **four-rail, half-lap photo-frame kit card**. Sixteen real low runners join four independently printable rails to a divided carrier. Flip both side rails, turn them 90°, and lower their upper laps over the horizontal rails' lower laps. **Gap-filling plastic-compatible adhesive is required at all four corners; photo tape is required at the back.** This is not a press fit, snap lock or moving mechanism. Optional hanging cord is external. No glazing/backing/stand is supplied.

## Run and verify

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
# In another terminal:
node browser-test.cjs
node feature-test.cjs
node mobile-test.cjs
node resilience-test.cjs
node portable-errors-test.cjs
node stale-import-test.cjs
node hole-test.cjs
node resize-cleanup-test.cjs
```

Production browser tests use `http://127.0.0.1:5995/daily-app2/20261106-5/`. Public delivery uses the ROOT monorepo `deploy/` flow, not the individual deploy command. Required individual scripts remain `predeploy: npm run build`, `deploy: gh-pages -d dist`.

## Actual reference and provenance

Local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three components, MX-specific) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one interlocked 8mm-thick link). Both actual binary files were parsed and rejected as unrelated interfaces. Local kit-card projects have no suitable existing reference STL.

Selected public source: **White Cat Kit Card, Mike Kasberg, Printables 865769**, [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Public README and LICENSE were checked. The actual cached downloaded binary mesh was re-read in this run: **SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`**, 30,616 triangles, **179.820 × 178.020 × 3.190 assumed mm**, two edge-adjacent components. STL has no units. The source contains 57 anomalous edge incidences; it is not claimed manifold, repaired or reused as raw triangles.

`reference-analysis.py` reproduces binary parsing, SHA, bounds, welded-edge connectivity and sections at Z=.100/.215/1.590 mm. Run with the cached downloaded source path as its argument, or let it download the documented public URL into `/tmp/lap-frame-reference.stl`. Evidence: `reference-analysis-raw.json`, `reference-analysis.json`, `evidence/reference-sections.svg`. Sections measure **1.60 mm sheets, four 4.50 × 1.70 mm slots and .21–.22 mm runner tops**. No raw source mesh or original artwork is redistributed.

This is an **original parametric reconstruction** adapting the source's flat pierced-sheet carrier, low breakaway runners and separately assembled sheets. Rail thickness grows to 2.4–3.2mm for stiffness; runners strengthen to .4–.6mm. Source socket/sheet difference .10mm informs the proposed fit starting point, not proof of this different joint. Through slots are replaced by complementary adhesive half-laps. Source 4.50mm slot length is not imposed on an unrelated frame. No source clicker/switch interfaces.

Read-only UI reference: `keycap_generator2` README, styles.css, App.tsx, Viewer.tsx, worker.ts, STL and export modules. Concrete patterns: 374px left studio with compact sticky branding, saved theme, raised short-shadow buttons, collapsible labelled sections, paired slider/mm inputs, thumbnails, checkerboard image cutout, actual source-mesh viewport, large right viewer and nearby export. Phone stacks preview/export before controls. Shared studio/import/test infrastructure is adapted from prior daily apps; the four rails, lap construction, assembly transforms and corner checks are new—not the previous tray/dissection mechanism.

## Dimensions and genuine joints (all mm)

- Card W 260–320, H 100–160; default **280 × 120**. Separate rails suit smaller beds.
- Window width W 50–80; height H 40–65. This is the visible opening, **not a standard photo size**.
- Border B 16–20; sheet S 2.4–3.2. Overall assembled frame `(W+2B) × (H+2B) × S`; default **96 × 81 × 2.8**.
- Proposed allowance c .10–.30. Reduced end height **(S−c)/2**, yielding a real c gap at each upper/lower lap. Shoulder relief c/2. Minimum supported end 1.05mm; default 1.30mm.
- Runners .8–1.2 wide, .4–.6 high; spacing 3–5. Four accessible runners per rail meet the long edges in central full-thickness sections, away from functional corner laps. No accidental bridges across the opening/hanging holes.
- Rounded ends, chamfered ends and notched long-edge silhouettes alter the actual outlines. Three real presets (portrait, landscape, wide) include generated 3D thumbnails.
- Bottom-rail artwork footprint 4–7, engraving .4–.6, Z rotation ±180°, X offset ±1.5, Y offset ±2. A 5.8mm keep-in radius protects rail edges and corner joints. **At least 1.8mm backing** across supported settings. Transform combinations outside keep-in are rejected, not silently clipped.

### Assembly / printing

Print card **or** clean rails bed-face down at Z=0. Every reduced end is bed supported, including side rails: no floating upper tongue is exported. PLA/PETG, .16–.20mm layers, .4mm nozzle; supports not intended. Snip sixteen runners and trim central-edge scars. Lay bottom/top rails bed faces down, inside edges separated by H. Turn both side rails bed faces **up**, rotate 90° in-plane, lower their upper ends onto the horizontal lower ends. Dry-fit one horizontal and one side rail first as a calibration pair. Square with a paper rectangle, bond all four laps with suitable gap-filling adhesive and let cure.

Cut a photo/paper at least 6mm larger than the opening in both dimensions; center and tape to the rear. Top rail has two 3mm holes; optional 1mm cord/knots and mounting hook are external. Never hang an unbonded frame. Not structural or for glazing/valuable artwork/loads. See numbered in-app/ZIP guide. **No physical print, assembly, strength, adhesive, fit or durability test has been performed.** Computational checks do not establish these.

## Local image, SVG, text and icon workflow

Native file picker on desktop/phones plus single-file drop. PNG/JPEG headers/content checked before decode: ≤2MB, ≤12MP, ≤6000px side; normalized ≤500px. Simple SVG ≤2000 elements with bounded dimensions; no scripts/external resources/effects, rasterized locally to 256px. Text ≤8 characters and six original searchable bundled SVG marks follow the same pipeline. Fixtures are synthetic, not personal uploads.

Conversion is **sampled 2D-to-relief**, not full 3D reconstruction or exact vector tracing. Contain/cover and ±25% crop shift are resampled to **20×20** background-normalized luminance values. Threshold 1–254 or grayscale chooses heights in a closed triangulated cutter; actual Manifold Boolean subtraction engraves the first rail .4–.6mm. Bright/transparent regions and enclosed white holes retain full backing. The checkerboard shows removed-background pixels; source image and final geometry are separately visible. Footprint, rotation, placement, threshold/depth and changed pixels alter exported triangles. Raised marks are deliberately unsupported to keep the card within its declared Z envelope.

## Local STL workflow and supported subset

Strict ASCII and binary parsers, ≤2MB/1500 triangles, .2–250 assumed mm per axis. **Confirm millimeters** because STL stores no unit metadata. Select Z/Y/−Z up before upload; changing axis explicitly requires reattachment. View actual source mesh, dimensions and scale factors. Uniform XY scaling sets footprint; independent Z scaling sets engraving depth. Rotate and position, replace/remove/reset or return to built-ins. The actual accepted mesh becomes a Boolean cutter in the bottom rail, not an unchanged re-export.

Supported: **one closed outward-wound convex broad-flat-bottom solid with no overhang**. Validates finite coordinates, nondegenerate faces, welded edges, connectedness, opposite winding, positive volume, triangle intersections, convexity and bottom support. Open, nonmanifold, concave, hollow, disconnected, degenerate or unsupported inputs fail with actionable guidance. No automatic repair or convex-hull replacement. The bottom-footprint hull is used only to validate bed contact; it is never substituted for the source triangles. This intentionally bounded engraving workflow is not an arbitrary mesh editor.

## Responsive state and exports

Bundled Manifold WASM in a Web Worker, bounded mesh resolution, debounce/id guards and current-state keys. Building/invalid edits disable export; any last-good preview is labelled. Preview and binary STL share exact checked geometry with a fingerprint. Assembled/exploded, real connected card, clean plate and isolated-part views use those same parts; display transforms never change print geometry. Orbit/zoom/fit, phone touch and reduced-motion controls; saved light/dark toggle. Undo/redo, six named local designs, JSON save/open with bounded portable image/STL payloads (2MB JSON); missing payload explicitly requests reattachment.

Prominent card/part binary STL, clean print plate, individual rail downloads and Everything ZIP: connected card, four rails, design JSON, numbered guide and SVG assembly map. STL stores no colour or unit metadata—slice at 100%, mm. No pretend 3MF. All input processing stays on-device; no CDN/API/upload/account/service. Dependencies bundled: React, Three.js, Manifold (Apache-2.0), fflate, OFL Fredoka/Rubik. Playwright is a dev dependency.

## Validation scope

`validate.mjs`: independently parses actual float32 binary exports; nonempty/finite triangles, normalized winding-consistent normals, nondegenerate faces, **every welded 1e−5mm edge exactly two opposite incidences**, positive per-component volume, dimensions and connected-component counts. Manifold output is simplified at 0.001 mm, far below supported features; rounded-outline samples are explicitly snapped at 0.000001 mm to avoid near-collinear CSG artifacts. Invalid triangles are never silently dropped. All presets, silhouette variants, every field endpoint, combined minima/maxima and image/STL-derived extrema. Checks each clean rail, card and separated plate. Boolean probes measure all four upper/lower corner materials and intervening gaps, clear window, exact assembled dimensions, no rail collisions, 14 representative side-rail insertion positions, supported upper-section footprints, actual card bounds, two hanging bores in card and clean rail, and sixteen snips yielding intact carrier plus four undamaged rails with no fragments.

Real production-browser tests perform PNG/JPEG/ASCII/binary file-picker uploads and actual STL downloads compared against UI fingerprints and Node regeneration from saved JSON. They verify pixel/threshold/depth/crop and STL scale/rotation/placement effects; replace/remove/reset; unsupported/truncated/oversized/open/nonmanifold inputs; empty silhouettes; invalid dimensions/transforms; undo/redo; saved designs/portable payloads; text/SVG/all icons and holes; ZIP/part exports; all views; worker abort/reload; stale imports/results; cleanup after source preview removal; persisted theme; focus; reduced motion; 320/390px every-tab overflow and reachable exports; actual touch orbit/pinch; zero external generation requests. Generated reports/screenshots record what ran. Computational geometry only—not physical testing.
