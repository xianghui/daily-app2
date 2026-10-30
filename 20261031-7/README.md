# Level & Loop — communicating-column kit-card studio

A local React/Vite maker studio for a real **three-part connected kit card**: a personalized base and two graduated tube towers. Snip twelve thin runners, seat/bond the towers, then tie a purchased transparent silicone tube into a U. Compare resting water levels with both ends open. This is an adult teaching apparatus, not a calibrated instrument or pressure device.

## Reference first

Read-only local STL candidates were inspected first: the keycap template's switch cavities and the diamond fabric link are inappropriate sheet-kit interfaces. The selected publicly downloadable reference is **White Cat Kit Card / Printables 865769**, Mike Kasberg, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** (license bundled). Source README and actual binary mesh were downloaded, parsed and sectioned before final geometry selection.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.819997 ×178.019994 ×3.1899996 mm, with millimeters assumed (STL has no unit metadata).
- Actual section measurements: sheet planes Z=0/1.6; four sockets4.5 ×1.700012 mm atZ1.59; low runner verticesZ.21/.22.
- The source is **not watertight**, with27 edge-adjacent components. It is a design reference, not an import claimed repaired.
- Tower sheet1.6, tongue4.4 and **total allowance.10** reconstruct the measured socket section. Default.15 and range.10–.35 are proposed printer-dependent fits. Base thickness, two-column apparatus and stronger removable runners are original redesigns.

See [reference-analysis.json](reference-analysis.json), [measurements](reference-measurements.json), [actual mesh sections](evidence/reference-sections.png) and reproducible `reference-inspect.py` (requires trimesh/numpy/matplotlib; mesh path argument). The source STL is **not redistributed**. Studio UI patterns follow the read-only `keycap_generator2`: 374px left rail, sticky brand, collapsible sections, paired slider/mm fields, tactile raised buttons, saved light/dark theme, checkerboard cutout, worker stale-result gating and preview-first phone stacking. Existing local maker studio/parsing infrastructure is reused, not prior kit geometry. Galleries were checked; this communicating-water-column apparatus is distinct from prior mechanisms.

## Run and dependencies

Node22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Production base `/daily-app2/20261031-7/`. Per-app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; combined public publication uses the monorepo root deploy flow. Dependencies: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate; locally bundled Fredoka/Rubik fonts. Playwright is a dev dependency. No CDN imports, API keys or services.

## Real geometry and supported ranges

All lengths **millimeters**, rotation degrees. Exact fields/ranges are exported by `src/geometry.js`; invalid combinations block export.

| Parameter | Range |
|---|---|
| Card width ×height | 210–240 ×180–210 |
| Column center spacing / tower height | 36–50 /56–72 |
| Footprint depth / base thickness | 34–42 /2.4–3.2 |
| Tower sheet / tongue width | 1.6–2.0 /4.4–5.2 |
| Total socket allowance | .10–.35 |
| Part spacing | 3.5–4 |
| Breakaway runner width / thickness | .8–1.4 /.4–.6 |
| Purchased tube outside diameter | 4–6 |
| Engraving footprint / depth | 4–7 /.4–.6 |
| Art rotation / X / Y | ±180° /±1.5 /±2 |

Three real presets include actual model thumbnails. Rounded/square/clipped base profiles preserve sockets. Card, de-tabbed plate, assembled/exploded and isolated-part views all derive from the same current worker-built mesh. The translucent U is an **external tube envelope**, not an exported part, fluid simulation or tested bend. No print file exports assembled overlaps. Clean part STLs are individually bed-aligned; Everything ZIP includes connected card, each clean part and numbered assembly notes. Binary STL has no units or colors; export at100% mm. Current selected STL fingerprint is attached to the stage and tested against downloaded bytes. No stale last-good export after an invalid edit.

## Image → engraved physical geometry

File picker on desktop/phone and drag/drop accept PNG/JPEG and simple self-contained SVG. Actual signature/type and declared image dimensions are checked before decoding; limit2MB,12MP,6000px per side. Raster images normalize locally to at most500px; simple SVG with at most2000 elements rasterizes to256px, without scripts, effects or external resources.

Fit/cover, crop pan, light/dark background, threshold1–254, grayscale relief, footprint, rotation and placement alter exported geometry. The exact20×20 sampled luminance field is triangulated as a closed solid cutter and **Boolean-subtracted** into the protected base lug, leaving at least1.8mm backing. Bright holes remain unengraved within continuous backing; this is a bounded sampled heightfield, **not exact vector tracing**, and **2D-to-relief, not automatic full3D reconstruction from one photo**. Source and checkerboard cutout previews show the actual conversion. Text and six searchable bundled vector marks use the same real pipeline. Raised art is deliberately unsupported for a uniformly bed-flat card.

## STL → exact mesh-shaped engraving

ASCII and binary STL accepted, up to1500 triangles,2MB; each oriented axis must measure.2–250mm. Show source preview/dimensions and explicit millimeter confirmation, because STL has no units. Choose Z/Y/−Z up before attachment; changing up-axis clears it and asks reattachment. XY scales proportionally to footprint; Z scales independently to.4–.6mm engraving. Rotate/center/place, replace/remove/reset all affect actual output.

Only **one closed, outward-wound convex broad-flat-bottom solid** is supported. Parser checks finite coordinates, complete facets/bytes, nondegeneracy, welded two-face edges and winding, connectedness, positive volume, triangle intersections, convexity and bottom support. Open/nonmanifold/concave/hollow/disconnected/overhanging/too-complex inputs show actionable errors. This restricted integration contract is explicit: **no hull replacement, hidden concavity loss or automatic repair**. Original verified mesh triangles form the Boolean cutter. Imports cannot reach sockets, the U-tube path or tower interfaces; invalid transforms/empty images disable export.

## Privacy, undo and portable designs

Files are processed only in the browser. No uploads, network conversion or input-file storage in this repository. Synthetic sample PNG, JPEG, ring SVG and ASCII/binary solid STLs are bundled with local attribution. Undo/redo; six named local designs; JSON save/open with bounded normalized image or validated mesh payloads. Missing image data explicitly asks reattachment; oversized/invalid JSON is rejected. Remove/reset returns deterministic defaults. Storage quota failures suggest JSON download.

## Print, assemble, compare

Read [PRINTING.txt](PRINTING.txt) for numbered instructions. PLA/PETG, .16–.20mm layers, three perimeters, no supports intended; inspect the slicer. Cut all twelve accessible runners without touching tongues/eyes, trim nubs, then insert towers vertically and bond **two fixed seats**. Tongue tips stop.05mm above bed; shoulders seat on the base. Print one tower and base first to calibrate the material/printer-dependent fit; no universal tolerance claim.

Supply **one transparent silicone tube**, OD4–6mm (bore≥3mm recommended), approximately181–221mm depending on settings (UI/export calculate exact recommendation), **four soft cord loops** about80mm each, filament-compatible adhesive, a dropper and room-temperature water. Tie gently through pairedØ2.5mm eyes; do not pinch the bore. The18–25mm centerline bend radius is at least3×selectedOD; **your tube supplier's actual minimum radius takes priority**. Tube bottom is6mm above base top; lower tie height32 sits above the bend. Both ends stay open to ambient pressure. Tap out bubbles and compare the resting menisci with the stand level. Nominal5mm ticks are not calibrated. Drain/dry, use a spill tray and keep away from electronics. No hot/hazardous liquids, pressure/vacuum sources, food or medical use. No printed waterproof container claim.

## Validation versus physical testing

`npm test` independently reads binary exports, verifies exact byte length, finite/nondegenerate faces, normals/winding, mm bounds, welded edge incidence and positive volume of **each component**. It tests all presets/profiles, all field endpoints, combined extrema and image/STL-derived variants. Manifold intersections verify all assembled printed pairs, straight vertical insertion, tongue/shoulder seats, cord eyes, sampled conservative external tube envelopes, de-tabbed separation and twelve safe snips yielding three parts plus carrier. Sampled print sections are contained in bed footprints; minimum backing and bend/eye constraints are checked.

Browser scripts exercise real production uploads/downloads, compare exact preview fingerprint and regenerated portable JSON, validate downloaded card and part STLs/ZIP, test malformed/empty/unsupported inputs, current-result gating, undo/redo, named and JSON round trips, text/icon/SVG geometry, worker failure/recovery, desktop/dark/focus/collapse behavior and320/390px touch orbit/pinch with no overflow. Reports and screenshots are beside this README.

**No physical printing, assembly, adhesive-strength, tube bending, leakage, liquid settling, capillarity or measurement-accuracy tests have been performed.** Computational fit/envelope checks do not establish those properties.
