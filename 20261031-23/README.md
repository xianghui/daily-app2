# Pin & Pattern

A browser-based **parametric ten-part elastic-pattern kit-card generator**. Snip a real connected carrier to release a signature deck and nine notched pegs; seat and bond the pegs in a 3 × 3 grid, then loop loose elastic or soft yarn around them to trace polygons and stars. All printed parts included; **external loose elastic/yarn and filament-compatible adhesive are required**. Not a launcher, weaving loom, tension-rated device or unchanged STL re-export.

## Reference first / attribution

Local collections were searched first. The actual `keycap_generator2/public/templates/clicker_template2.stl` and `fidget_fabric_generator/public/templates/diamond-link.stl` were parsed; their switch interfaces/interlocking links do not supply a sheet-card assembly interface. Their hashes/dimensions/components and rejection reasons are in `reference-measurements.json`. Both local kit-card project READMEs were inspected; they contain procedural examples but no suitable source STL. Reference trees and the old daily_app tree remain read-only.

We downloaded and parsed **White Cat Kit Card**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), Printables 865769, **CC BY 4.0** ([license](https://creativecommons.org/licenses/by/4.0/), full text in REFERENCE-LICENSE.txt). Download URL is in reference-analysis.json. Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; binary STL, 30,616 triangles, **179.820 × 178.020 × 3.190 mm**, 27 edge-adjacent components, NOT watertight. Units assumed mm from sheet-scale dimensions; STL has no unit metadata.

`reference-inspect.py` independently parses the source with trimesh/numpy and plots real mesh sections at Z=.1/.5/1.59 mm. These sections were visually inspected (`evidence/reference-sections.png`). Measured interfaces: **1.6 mm sheet; 4.5 × 1.700012 mm sockets; low runners at .21/.22 mm**. The generator reconstructs nine 4.5 mm tongues with socket dimensions `(4.5+fit) × (sheet+fit)`. Default fit **.15 mm TOTAL** is a proposed printer-dependent allowance, not a measured/universal tolerance. Pegs retain source sheet gauge by default; the deck is thickened. Runners are deliberately thickened to .4–.6 mm for 2–3 layers at .20 mm.

The peg grid, notched heads, signature deck, ten-part layout and 40-runner carrier are new parametric CSG geometry. No cat artwork or raw third-party source mesh is redistributed. The nonwatertight reference is a **design reference**, not an accepted/repaired user import. `reference-analysis.json` maps measurements to parameters and records deviations. Reproduce with `/tmp/kit-analysis-venv/bin/python reference-inspect.py /path/to/reference.stl` or any Python environment with trimesh, numpy and matplotlib.

## Studio / running

Fresh React + Vite scaffold; dependencies individually installed, no copied Git history or dependency tree. Read-only `keycap_generator2` README, styles, App, Viewer, worker, STL parser, imageTrace and export modules were inspected. Concrete studio patterns: 374 px scrollable LEFT controls, compact sticky brand/theme header, collapsible sections, paired mm sliders/numeric inputs, tactile raised/pressed buttons, lavender-grey desk/coral light theme, coherent saved dark theme, locally bundled Fredoka/Rubik, original/cutout checkerboard previews, RIGHT orbit/zoom/fit viewer, status/dimensions/warnings/export below. On phones preview comes first, followed by export and stacked controls; targets >=44 px, focus styling, reduced-motion support.

Three actual model-thumbnail presets: Pocket polygons, Broad constellation, Low lattice. Three deck silhouettes; bounded variation, text and six searchable bundled vector marks, preview swatches. Shared generic studio/import/export infrastructure is adapted from sibling `20261031-22`; this application's deck, pegs, carrier layout, placements and fit probes are original.

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve.mjs
node browser-test.cjs
node studio-test.cjs
```

Production URL under local test server: `http://127.0.0.1:5624/daily-app2/20261031-23/`. `SERVE_ROOT` may select the combined deploy app folder. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; public monorepo publishing uses the ROOT predeploy/deploy flow.

Runtime dependencies: React, Three.js/OrbitControls, Manifold3D WASM (Apache 2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL). Vite/Playwright development tooling and gh-pages. Bundled locally: no API, key, CDN or remote generation. Synthetic/public sample fixtures only, attribution in public/samples. Files remain local in the browser.

## Parameters and print orientation

All lengths in **millimeters**; rotations explicitly degrees.

| Control | Supported range |
|---|---|
| Carrier width × height |130–150 ×94–110|
| Peg grid pitch |15–18|
| Peg shoulder height |12–16|
| Deck / peg sheet thickness |2.0–2.6 /1.6–2.0|
| Socket total allowance |.10–.30|
| Opposed band-notch depth |1.0–1.5|
| Part spacing |3–4|
| Runner width / thickness |.8–1.4 /.4–.6|
| Art footprint / engraving depth |4–7 /.4–.6|
| Art Z rotation / X / Y |±180° /±1.5 /±2|

Deck width=`2*pitch+28`, length=`2*pitch+42` (default60 ×74); peg grid centres X=−pitch/0/+pitch, Y=28/28+pitch/28+2*pitch. Default connected card **138 ×102 ×2.4 mm**, exactly one Boolean-unioned solid. Forty accessible low runners hold all ten parts in a divided frame. Every part rests at Z=0; de-tabbed individual STLs omit all tabs. Impossible bay spacing/dimensions block export. Head notches and shoulders are actual cut geometry, not preview textures.

### Numbered assembly and calibration

1. Print a clean peg and deck first, bed-flat at100% scale, PLA/PETG, .16–.20 mm layers, three walls. Supports not intended. Inspect slicer first layers and calibrate receiving allowance for your own material/printer.
2. Snip40 runners **1.6 mm outside** the part outlines, then trim nubs. Preserve all nine tongues, shoulder edges, head lips and receiving sockets. Mesh checks verify snips release10 parts plus carrier without intersecting functional parts.
3. Insert all nine pegs from ABOVE in the same orientation. Each4.5 mm tongue passes through the deck; shoulder stops against its top face and tongue tip finishes flush underneath. Slots use total allowance, not per-side allowance; these are clearance alignment seats, NOT snaps or positive retention.
4. Bond **all nine fixed seats** with compatible adhesive and cure fully. Supply soft yarn or loose elastic loops. Loop gently around selected pegs below the head lips to make geometric patterns; lift off a head to change patterns. Do not tightly stretch ordinary office bands. Small head lips guide slack loops but do not positively lock arbitrary bands.
5. Hold deck flat. Stop if a peg bends/lifts/cracks. Adult craft assembly; small parts and elastic recoil, not a young-child toy. No strength, tension, fatigue or retention rating. All assembly clearances are checked computationally, but band forces, printing and actual hand use remain untested.

## Image import → real printable engraving

Phone/desktop file picker and desktop drag/drop. PNG/JPEG header/content validation:16 bytes–2 MB, <=12 MP and6000 px side; normalize to <=500 px. Simple SVG supports <=2000 local shapes/paths with no external resources/scripts/effects/text, locally rasterized to256 px. Replace/remove/reset and synthetic samples provided. Original source plus actual cutout shown.

Exact method: raster fit-whole or fill/crop with ±25% pan; composite transparent pixels on selected light/dark background; sample **20 ×20 luminance grid** (`.2126R+.7152G+.0722B`). Threshold1–254 to binary depths, or inverse luminance to continuous .4–.6 mm depths. Triangulate a closed interpolated heightfield cutter and Boolean-subtract from the front-deck patch. Physical footprint, rotation, placement and depth change exported geometry. Bright holes remain **unengraved on a continuous backing**; ring-hole/backing probes verify actual solid. Fine detail is quantized, not exact vector tracing. This is **2D-to-relief, not full3D reconstruction from one photo**. Text/icons use the same real geometry pipeline. Raised styles are intentionally unsupported to keep this bed-flat protected surface.

## STL import → exact mesh integration

ASCII and binary STL <=2 MB /1500 triangles; explicit source mm confirmation (STL has no units). Show actual oriented source dimensions, format/count and source3D preview. Z-up, Y-up or upside down; changing up axis detaches the source and requests reattachment. XY scale proportional to physical footprint, separate Z fit to engraving depth, rotation, XY placement, centre/reset, replace/remove. Original accepted mesh is transformed and Boolean-subtracted into the deck, not merely shown or re-exported. Source0.2–250 mm per axis; bounded patch radius6.5 mm, >=1.4 mm backing and generous separation from all sockets. Invalid transforms block export.

Supported contract is intentionally **one convex broad-flat-footprint closed solid without overhangs**. Verify finite vertices, nondegenerate triangles, closed welded edge incidence, opposite winding, positive component volume, self-intersection and support/convexity constraints. Concave/hollow/open/nonmanifold/disconnected/overly complex/unsupported meshes reject with actionable errors. No hull substitution, discarded concavities or hidden repair. Reorient or simplify a source externally rather than expecting arbitrary STL repair. All selected files process locally; no personal files are committed.

## Live results, views, persistence and export

Heavy CSG and source checks run in a Web Worker with locally bundled WASM, bounded geometry,100 ms debounce, request IDs and current-state keys. Loading/build/success/error state; conversion/import/pending/invalid/worker errors disable ALL exports. Last-good preview may remain labelled, but cannot silently export when current edits are invalid. Binary STL uses the exact current preview solid; a mesh fingerprint is compared to actual downloads and Node regeneration.

Views: connected card, de-tabbed print layout, assembled kit, exploded and ten isolated parts, orbit/touch zoom/fit and see-through solids. All views use the same underlying geometry. Exploded spacing is explanatory only; no printed moving joint or elastic simulation is implied. Export always uses actual bed-flat printable solids. STL has geometry, neither units nor preview colour. Per-part buttons and Everything ZIP include11STLs (card +10 clean parts) plus numbered assembly/print instructions; not mislabeled3MF.

Undo/redo35 states, reset, six locally named designs and portable JSON save/open. Bounded normalized PNG or exact accepted mesh payloads round-trip; missing assets explicitly request reattachment and block export. JSON <=2 MB, PNG portable <=500 px. Files stay in local browser memory unless user saves a design to localStorage or downloadsJSON; storage-full gives a JSON alternative.

## Validation / limits

`npm test`: independent binary-STL length/finite/bounds/normal/nondegeneracy checks, welded1e−5 mm opposite-directed two-face incidence, adjacency and positive signed volume PER connected component. Tests all presets, shapes, combined min/max and every individual field endpoint; all accepted import types and transforms also receive full mesh+assembly checks. Real CSG intersections check45 assembled pairs, nine insertion/removal paths, tongue presence and empty sockets,18 physical band notches/lips, minimum walls/backing,40 safe snips→11 components, card envelope, loose-part nonoverlap and bed-supported cross-sections.

`browser-test.cjs`: production real file-picker PNG/JPEG/ASCII/binarySTL; actual downloaded mesh bytes compared against UI/currentJSON/Node regeneration; changed pixels/threshold/depth/crop/scale/rotation/placement survive export; replace/remove/reset; malformed/truncated/open/nonmanifold/concave/excessive/bad-dimension/empty/invalid-transform recovery; individual exports, phone imports/downloads and320/390px touch orbit/pinch, no overflow.

`studio-test.cjs`: presets/silhouettes/text/icons/SVG, local named reload, portable image/meshJSON, missing-payload rejection, undo/redo, actual ZIP mesh contents, all views, saved dark theme, focus, collapsible sections, reduced motion,374px LEFT panel and320px preview-first layout, aborted worker/reload recovery. Additional personalization, hole, orientation and stale-edit scripts exercise those paths separately. Reports/screenshots accompany reproducible scripts. See VALIDATION.md for publication-time results.

**Computational/browser verification only. No physical print, assembly, elastic-band force, durability or fatigue test was performed.** Printer-dependent fit, thin-sheet bending and safe loop slack require real trial prints and careful hand testing.
