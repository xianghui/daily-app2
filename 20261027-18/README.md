# Span & Slot — Trestle Kit Studio

A browser-based, parametric **three-part trestle-bridge kit card**. Snip twelve sacrificial tabs, stand two arch-window trestles, and lower a personalized deck onto their upward pegs. This is a miniature display assembly, not a load-bearing structure or moving fidget. Hardware/glue are not required. The gravity-seated joints are removable, not captive.

## Reference-first design

Local STL collections under `/Volumes/ExternalHD/3d_printing_apps/` were searched first, including the keycap/clicker, slider, fabric and existing kit-generator collections. Their meshes were not suitable references for this flat-sheet assembly. The public reference is **Theft of Fire — White Cat Kit Card**, Mike Kasberg (mkasberg), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** (repository LICENSE checked). Attribution and modification notice also accompany ZIP exports.

The actual 30,616-triangle binary STL was parsed before final geometry selection. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed mm, corroborated by source OpenSCAD: **179.820 × 178.020 × 3.190 mm**. Source sheet/frame width is **1.6 mm**; thin bridges have **0.21/0.22 mm** top levels. Independent welded edge-adjacency analysis found two connected groups and nonmanifold/coplanar facet artifacts. It is not treated as a verified printable mesh, repaired, or redistributed.

See `reference-analysis.json`, reproducible standard-library parser `reference-analysis.py` and actual mesh cross-sections `reference-sections.svg`. Re-run the script with the public source at `/tmp/white-cat-kit-reference.stl`. The reference STL download is [here](https://files.printables.com/media/prints/865769/stls/6646811_320bc296-72b9-4782-b22e-16138e11e7dd_11d4099f-a327-467e-8a5c-f5c4ed73b100/white-cat-kit-card_kit.stl). Reference trees remain read-only.

**Measured versus redesigned:** the 1.6 mm default sheets and real perimeter/sacrificial-runner construction are retained as design constraints. The deck, arch supports and through-slot pegs are new geometry, not source clips, a copied spaceship hull, or a reskinned crossed-meridian ornament. Frame width is deliberately reinforced to 2.4 mm. New total slot allowance (0.1–0.4 mm), connector dimensions and thicker cutter-removable tabs are proposed FDM values, not measurements or assertions of identical source behavior. All fits require calibration.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
node serve-production.cjs
node browser-test.cjs
node feature-test.cjs
node resilience-test.cjs
node hole-test.cjs
node stale-import-test.cjs
node portable-errors-test.cjs
```

Production base: `/daily-app2/20261027-18/`. Local production test server: `http://127.0.0.1:5398/daily-app2/20261027-18/`. Publish the combined monorepo through its ROOT deployment, not the individual deploy script.

## Geometry and parameters

All physical dimensions are **millimeters**, except explicitly labelled degrees, pixel thresholds, percentages and assembly-separation fraction.

| Parameter | Supported range / purpose |
|---|---|
| Card envelope | 110–150 × 88–120 mm |
| Deck length / width | 58–86 / 22–30 mm |
| Trestle height | 18–28 mm; legs each 5 mm wide |
| Sheet thickness | 1.6–2.4 mm; default 1.6 |
| Connector width | 5–8 mm; upward peg height equals sheet thickness |
| Slot allowance | 0.1–0.4 mm TOTAL excess width and length; half per side |
| Part spacing | 5–9 mm |
| Breakaway tabs | twelve, each 0.8–1.4 mm wide × 0.4–0.8 mm high |
| Medallion well | 0.2 mm recess; minimum engraved backing floor 0.8 mm |
| Medallion dimples | 0–0.4 mm deep |
| Personalization | 4–7 mm footprint, ±1.5 / ±2 mm XY, ±180° Z; strict 6.5 mm radius keep-in zone |
| Imported STL height | 0.6–3 mm, independent Z scaling |
| Image relief | 0.4–3 mm raised; 0.4–0.6 mm engraved |

Soft-corner, pointed-end and scalloped deck outlines; three actual model-thumbnail presets; mechanically bounded variation; undo/redo; six local named designs; portable JSON save/open. JSON carries bounded normalized PNG or checked mesh arrays, not paths to absent files. Missing asset payloads explicitly require reattachment. No automatic missing-file restoration is claimed.

Heavy Manifold WASM CSG and STL preflight run in a Web Worker, with 100 ms debounce, bounded meshes and generation-ID/current-state guards. Failed, pending, invalid or stale builds disable every mesh export; the last valid preview is labelled as such. Worker startup failures block export and offer reload recovery. Preview and export use the same current result and expose an exact STL fingerprint for verification.

## Image / SVG → printable relief

File picker works on desktop/phone; drag-and-drop is available. PNG/JPEG must match content signatures: ≤2 MB, ≤12 MP and ≤6,000 px per side. Decode locally, normalize to ≤500 px, composite on selected light/dark background, fit/cover and pan, sample a **20 × 20 luminance grid**. Threshold mode produces silhouette-like raised/engraved heights; grayscale mode maps inverse luminance to height. Grid cells are triangulated into a closed height surface, then **boolean-unioned or subtracted** in the solid medallion. This is 2D-to-relief, **not reconstruction of a complete 3D object from one photograph**.

Source and actual conversion mask appear side-by-side; checkerboard marks removed/unraised areas. Bright interior holes remain unraised/unengraved over a continuous backing. Edges are sampled/interpolated, not exact vector tracing. Sub-nozzle decorative details can soften or disappear in slicing; use bold marks. The structural backing is never removed by raised marks and remains ≥0.8 mm with maximum engraving. SVG supports bounded simple filled paths/shapes, no scripts, external resources, references, text or effects; rasterized locally at 256 px then follows the same method. Font text and six bundled original SVG icons also generate real relief, not texture-only decoration. Scale, placement, rotation, background, threshold, depth and raised/engraved style affect exported triangles.

## STL → integrated deck geometry

ASCII and binary `.stl`, ≤2 MB and 1,500 triangles. Coordinates must be finite, each source dimension 0.2–250 mm, one outward-wound closed connected solid. Welding tolerance 0.00001 mm; every edge needs two opposite incidences; positive volume, degenerate-face, self-intersection and bottom-contact checks apply. Explicitly confirm **millimeter units**: STL has no unit metadata. Choose Z, Y or −Z up before attaching; changing orientation clears the source and requests reattachment. Source dimensions and original mesh preview are shown separately from generated output.

**Intentionally supported subset:** convex, broad flat-bottom grips with no footprint overhang; bottom contact ≥25% of bounding footprint, transformed minimum XY width 1.2 mm. Concave, hollow, disconnected, open/nonmanifold, self-intersecting, over-complex and unsupported meshes are rejected with actionable errors. **No hull replacement, silent mesh repair, or arbitrary concavity loss.** Original accepted triangles are transformed and genuinely boolean-unioned into the protected central deck well. XY proportional scaling, separate Z height, Z rotation, centering and placement are available; replace/remove/reset recover defaults. All final parts must pass the same mesh checks.

## Export and assembly

Prominent connected-card STL plus per-part deck/trestle STLs and **Everything STL + notes ZIP**. Binary STL, mm at 100% scale. Card and loose parts are alternative exports. ZIP has four checked STLs and numbered assembly/print notes; it is not labelled 3MF. STL stores no preview colors.

1. Print flat, PLA or PETG, 0.4 mm nozzle, 0.20 mm layers, ≥3 walls. No supports intended. Check imported grip bed contact.
2. Hold each part; cut its four thin side tabs with flush cutters. Trim remnants without damaging pegs, deck slots or arch feet. Discard frame/runners.
3. Stand both trestles upright, arch openings down, pegs up.
4. Align the two deck slots; lower deck vertically onto pegs until its bottom meets both shoulder tops. No bending/snap operation needed. Peg tops are flush with the deck.
5. Lift deck vertically to disassemble. Do not lift the assembly by its deck and expect retention.

Start with Pocket Crossing, 0.20 mm total allowance; print one loose support and the deck as a fit trial. Fits depend on material, printer and slicer. Deburr; increase allowance by 0.05–0.10 mm if tight; reduce or add a removable paper shim if loose. Do not force brittle plastic. This is not a children's load-bearing toy; small parts and cutters need adult handling.

## Privacy, dependencies and validation

All user file processing occurs locally. No APIs, uploads, CDN dependencies or keys. Bundled dependencies: React/Vite; Three.js/OrbitControls; Manifold WASM (Apache 2.0); fflate (MIT); Fontsource Fredoka/Rubik (OFL), with local font files. Original synthetic samples in `public/samples` are safe to try; user inputs are not committed. Shared studio/import/export validation utilities are adapted from earlier local studios; the physical kit geometry and assembly tests are specific to this design. Visual/interaction reference was read-only `keycap_generator2` README, CSS, App, Viewer, worker, STL reader, image conversion and exporter: left controls/right viewer, tactile controls, checkerboard conversion, source dimensions, protected imported-base placement, saved themes and export gating.

Validation reports and reproducible scripts are stored here. Independent checks parse actual binary STL bytes, verify finite coordinates, unit normals, nondegenerate faces, exact bounds, closed edge incidence with opposite winding and positive per-component volume. Each card and each individual part is checked. Manifold intersection tests cover the complete vertical assembly path, slot gauges, zero overlap between loose parts, exact personalized-part containment inside the card, and twelve tab cuts releasing precisely four components (frame + three kit parts). Production-browser tests use real PNG/JPEG/ASCII/binary file inputs, compare downloaded geometry to preview and regenerated JSON, exercise invalid inputs, transforms, reset, portable assets, views, themes, local saves, ZIP, worker failure and touch interactions. Reports distinguish executed tests from unverified claims.

**No physical print, fit, strength, durability or stability test has been performed.** Computational geometry checks do not establish these physical properties.
