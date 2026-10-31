# Hum & Flutter

A local-first React + Vite parametric **five-part membrane kazoo kit card**. Snip twenty real low runners, assemble the tongue-seated floor/cheeks/roof, and sandwich external thin craft film under the printed annular clamp. Hum near one open duct end while leaving the other open. This is a pressure-driven membrane craft experiment, not a blowing whistle. It requires film, tape and filament-compatible adhesive/sealant. **No physical print, assembly, leak or acoustic test was performed.**

## Reference-first evidence

The source is Mike Kasberg's White Cat Kit Card (CC BY 4.0), downloaded and parsed before final geometry choice. See [REFERENCE-SOURCE.md](REFERENCE-SOURCE.md), [reference-analysis.json](reference-analysis.json), [reference-measurements.json](reference-measurements.json) and actual sections in evidence/reference-sections.png. Measured 1.6 mm sheet, 4.5 × 1.700012 mm slots and .21–.22 mm low runners inform the joints/card. The duct, double-ended cheek tongues, pierced roof and clamp are original. Default .15 mm total clearance and .4–.6 mm runner thickness are proposed redesigns, not measured source values. No third-party raw STL is bundled. Keycap Studio is the read-only visual/interaction reference, not a switch-socket template for this unrelated kit.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Base path: `/daily-app2/20261031-18/`. Per-app deploy uses gh-pages -d dist; publication of the combined site uses the ROOT monorepo predeploy/deploy flow. Browser generation/export needs no server API, paid service or key. React 19, Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fontsource Fredoka/Rubik. Playwright is a development-only preflight dependency.

## Controls and printable geometry

Three real presets (Pocket hum, Broad chamber, Small flutter), square/rounded/chamfered floor profiles and bounded variations. All dimensions are mm; rotations are degrees. Export shows actual X/Y/Z bounds. Floor/roof are 2–2.6 mm and cheeks/clamp 1.6–2 mm. The clamp has 3 mm radial land around a 6–8 mm membrane aperture. Both duct ends are deliberately open. Joints have eight 4.5 mm wide tongues, with depth matching floor/roof thickness. Use the two cheek parts to calibrate tongue/slot fit before a full card. The floor/socket fit is not a guaranteed friction lock: bond the seats and seal long seams externally, never the air path.

| Parameter | Range (mm) |
| --- | --- |
| Card width | 146–164 |
| Card height | 166–188 |
| Floor width | 34–42 |
| Floor length | 58–70 |
| Duct length | 28–36 |
| Duct inner width | 12–16 |
| Socket total allowance | 0.1–0.3 |
| Floor and roof thickness | 2–2.6 |
| Cheek thickness | 1.6–2 |
| Part spacing | 3.5–5 |
| Breakaway tab width | 0.8–1.4 |
| Breakaway tab thickness | 0.4–0.6 |
| Duct inner height | 6–10 |
| Membrane aperture | 6–8 |

## Image / text / icon / SVG workflow

Choose or drop PNG/JPEG/simple SVG; synthetic sample downloads are included. Text and six searchable icons go through the same image-to-geometry conversion. Files stay on this device. Images are content/header checked before decode: ≤2 MB, ≤12 MP, ≤6,000 px per axis. Normalization uses at most 500 px on the long side; a portable PNG payload is retained. SVG accepts ≤2,000 simple shapes/paths, no scripts, external URLs, embedded files, filters or text; it is rasterized locally to 256 px.

The conversion uses fit-entire/crop-fill, ±25% crop pan and light-background removal or dark-background inversion, then a **20 × 20 luminance grid**. Threshold mode sets the heights to 0 or the chosen depth; grayscale maps darkness continuously. Adjacent sample heights form a closed triangulated heightfield with a solid underside; Manifold Boolean subtraction engraves it into the rear floor. This is **2D-to-relief, not full 3D reconstruction from one photo, and not exact outline tracing**. The checkerboard shows the removed background. Bright interior holes stay unengraved over continuous backing; tests probe the actual Boolean solid. Resolution limits tiny details. Engraved only: .4–.6 mm depth; raised art is intentionally unsupported to keep the landing flat. Art cannot enter the duct/socket keep-out zone. Reset conversion, replace/remove source or return to defaults at any time.

## STL workflow

ASCII and binary .stl, 40 bytes–2 MB, ≤1,500 triangles, each source dimension .2–250 mm, finite coordinates. Select Z, Y or −Z up before attaching; axis changes clear the source and request reattachment. Original dimensions, triangle count and format appear beside the source preview. Explicit millimeter confirmation is required because STL has no unit metadata.

Strict validation requires one closed outward-wound positive-volume manifold solid, no duplicate/degenerate faces, no self-intersections, a convex shape, broad flat bottom (≥25% XY footprint) and no XY overhang. Concavities, cavities, branching, open/disconnected shells or unsupported complexity are rejected with actionable errors; **no hull replacement or automatic repair**. Convexity is an explicit import limitation, not an invisible simplification. A footprint hull is used only to validate support, not to replace source triangles.

Exact validated source triangles become a Manifold solid, XY scaled proportionally to 4–7 mm footprint, Z independently scaled to .4–.6 mm engraving depth, centered and rotated ±180° then placed ±1.5 mm X / ±2 mm Y in a protected 6.5 mm radius rear-floor landing. UI reports scale factors. Final XY feature width must remain ≥1.2 mm; oversized placement is blocked. Boolean subtraction changes the actual part and card STL. Original source and final model have separate previews. Minimum backing is 1.4 mm at the thinnest floor/deepest engraving. Preview and every export use the exact same valid worker result.

## Studio / persistence / export

Desktop: 374 px left scrollable rail, paired slider/numeric controls and collapsible sections; large right touch-orbit viewer. Phone: preview/toolbar, dimensions/warnings/export first, stacked controls second. Raised tactile buttons, focus outlines, saved light/dark theme, reduced-motion support. Assembled, exploded, connected card, de-tabbed print plate and isolated-part views use the same meshes. See-through surfaces explain fit. The external film's **estimated .10 mm allowance is preview positioning only**, not a simulated membrane or exported part.

Debounced generation and parsing run in a worker with local Manifold WASM. Result sequence/current-state keys reject stale replies and block download during invalid, loading or pending-conversion states; errors preserve a labelled last-good preview but never permit stale export. Runtime worker failure disables export and requests reload.

Undo/redo, six named local designs and JSON save/open retain bounded source pixels/portable PNG or exact validated STL vertices. Missing image payloads explicitly request file reattachment. JSON ≤2 MB; image payload ≤250k pixels and 1.8M data-URL characters; restored mesh is revalidated. No personal input files enter the repository; only synthetic fixtures and test reports are included.

Binary STL export: one truly connected carrier with twenty removable runners, five clean printable part files, or Everything ZIP containing the card, all five part STLs and numbered ASSEMBLY.txt with current fits. Each part is bed-aligned. STL has no colour or unit metadata; preview swatches do not affect STL. No fake 3MF export.

## Printing / assembly

See [PRINTING.txt](PRINTING.txt) for all eight numbered steps. Print flat in PLA/PETG with .16–.20 mm layers, three walls and no intended supports; .4–.6 mm runners require at least two layers. Snip at the specified accessible outer runner spans, not at the tongue interfaces. Fit and bond cheeks, lower and seal roof, then attach external clean waxed-paper film under the clamp. Allow adhesive to cure before handling. The duct ends remain open. Experiment gently with hum/film tension; pitch, loudness and buzz are not guaranteed. Adult craft model, small parts, not certified food-safe; do not put parts in the mouth.

## Reproducible validation

`npm test` validates defaults, all presets/profiles, paired min/max and every individual parameter extremum, plus threshold/grayscale image and both STL-derived outputs. `validate.mjs` independently parses actual float32 binary export, checks finite nonzero triangles, normals/winding, positive volume per component, welded 1e-5 mm edge incidence of exactly two opposite directions, Euler characteristic, dimensions and bed contact. Manifold intersections check all ten assembled pairs, reverse assembly/removal paths, unobstructed full duct/vent, real shoulder contacts, artwork keep-out, nonoverlapping layout, safe snips and six components after removal (carrier + five parts). Sampled sections stay inside the bed footprint.

After `npm run predeploy`, `node serve.mjs` serves the real production prefix on port 5619. `browser-test.cjs`, `studio-test.cjs`, `axis-test.cjs`, `stale-test.cjs`, `personalization-test.cjs` and `hole-check.mjs` exercise actual file pickers/downloads, exact preview/export signatures regenerated in Node, mesh/assembly checks on imports, invalid files, three presets, shapes/text/icons/SVG, JSON/named saves/undo, per-part/ZIP downloads, worker abort/recovery, stale result gating, 320/390 px phone overflow, touch orbit/pinch, saved themes and focus. Reports and screenshots are retained alongside source. These are computational/browser checks only, not physical tests or an acoustic simulation.
