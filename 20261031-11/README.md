# Pulp & Deckle — Kit Card Studio

Build a miniature **paper-making mould**, removable deckle and slotted upright handle. A real connected card holds all three bed-flat parts using twelve removable tabs. Add external fine synthetic screen and recycled-paper pulp to attempt tiny handmade sheets. Three actual thumbnail presets: Little postcard, Wide cotton, Square confetti. Not a static download, sieve reskin or general-purpose geometry generator.

**Physical printing, assembly, wet strength, screen adhesion, drainage and sheet release have NOT been tested.** Computational solid/fit checks establish geometric feasibility only. External screen, water-resistant filament-compatible adhesive, pulp, basin, felt and sponge required; no hidden bearings, screws or magnets.

## Reference-first evidence

Local candidates were found first. Keycap Studio README/template instructions and Weave README were read; their actual switch template (three components) and 8 mm interlocking link were parsed and rejected as sheet-kit interfaces. Then **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, was freshly downloaded and sectioned. See REFERENCE-SOURCE.md and REFERENCE-LICENSE.txt.

- Actual binary STL SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles; assumed mm, 179.819997 × 178.019994 × 3.1899996 mm.
- Actual sections at Z=.1/.5/1.59 show sheet planes at 0/1.6 mm and four receiving loops **4.5 × 1.700012 mm**. Low runner vertices .21/.22 mm.
- Original is nonwatertight, 27 edge-adjacent components including fragments. This is a design reference, not a silently repaired import. No raw private or third-party mesh is bundled.
- Handle/deckle default sheet 1.6 mm; tongue 4.4 + .10 TOTAL allowance recreates the measured receiving section. Default .15 allowance is **proposed**, material/printer-dependent. Stepped mould, .15–.40 mm screen allowance, gravity-seated deckle, handle, three-bay layout and thicker low tabs are original redesigns.

Fresh [raw measurements](reference-measurements.json), [design mapping](reference-analysis.json), [actual section plot](evidence/reference-sections.png); reproduce with `reference-inspect.py /path/to/reference.stl` using Python trimesh/numpy/matplotlib. Reference trees remained read-only.

Keycap Studio `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, export, imageTrace and STL parser were inspected read-only. Adopted concrete patterns: **374 px left rail**, sticky compact theme/brand header, collapsible sections, paired numeric/slider inputs, raised tactile keys, pink selections, checkerboard conversion, source-model editor, current-result worker gating, named designs, phone preview-first stack. No history/dependency tree copied wholesale. Previously authored local studio/import/export infrastructure is reused; product geometry is new. Both galleries checked; an existing sundial caused that initial idea to be dropped.

## Run / dependencies

Node 22.12+: `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts (Fontsource, SIL OFL); Playwright dev dependency. No API, key, paid service, CDN import or server is required after static hosting. All files stay in the browser.

Per-app base `/daily-app2/20261031-11/`; exact scripts `predeploy: npm run build`, `deploy: gh-pages -d dist`; combined public deployment uses the root monorepo deploy flow.

## Dimensions / real controls

All linear values **millimeters**, rotations degrees.

| Parameter | Supported range |
|---|---|
| Card width / height |130–160 / 210–250 |
| Paper aperture width / height |38–50 / 26–38 |
| Mould border |9–12 |
| Handle height / finger hole |18–26 / 8–12 |
| Mould thickness / thin sheet |3.6–4.2 / 1.6–2.0 |
| Tongue width / total socket allowance |4.4–5.2 / .10–.35 |
| Deckle clearance PER SIDE |.15–.40 |
| Actual screen thickness allowance |.15–.40 |
| Part spacing |3.5–5 |
| Tab width / thickness |.8–1.4 / .4–.6 |
| Art footprint / depth |4–7 / .4–.6 |
| Art rotation / X/Y offset |±180° / ±1.5 / ±2 |

Outside mould W/L = aperture + twice border. Pocket is outside minus 4.8 mm, leaving a 2.4 mm registration lip. Deckle outside = pocket minus twice PER SIDE clearance. Ledge Z/thickness = mould thickness − sheet − screen allowance, bounded ≥1.2 mm. Deckle sits at mould thickness − sheet, reserving the measured screen layer below. Screen is an external consumable, not printed or included in meshes/preview. Its cut size is shown in Assembly and the exported notes. Handle outside pocket uses two source-fit slots. Too-small card/spacing combinations and nonfinite/out-of-range fields disable exports with errors, not silent clamps.

Three mould profiles (square, round, clipped corners), actual bounded variations and defaults reset. Presets modify aperture proportions and grip. Text up to eight characters, six searchable bundled icons, image or mesh alter the real front signature-lug engraving. Preview swatches do not imply STL colour.

## Image → geometry (PNG/JPEG/SVG)

Desktop/phone file picker and drag/drop. 2 MB per file; actual PNG/JPEG content headers, ≤12 MP and ≤6000 px side checked before decode; normalize to ≤500 px. Restricted self-contained simple SVG ≤2000 elements rasterizes locally at 256 px; reject scripts, external resources, unsupported text/effects (convert text to paths first).

Source image and actual checkerboard cutout show the **20×20 sampled conversion**. Contain/cover crop, pan, dark/light background removal, threshold 1–254 or grayscale height mode, scale, rotation, position and depth change exported geometry. A closed triangulated heightfield is **Boolean-subtracted** into the protected solid lug. Bright interior holes stay unengraved on continuous backing (actual Boolean probe tested). This is bounded sampled 2D-to-relief/silhouette engraving, **not exact SVG tracing or full 3D reconstruction from one photo**. Fine details are limited by sampling. Raised features intentionally unsupported to keep everything bed-flat. Art never reaches paper opening, screen ledge or sockets; backing ≥3 mm.

## STL → geometry / explicit units

ASCII and binary .stl ≤1500 triangles / 2 MB, each oriented axis .2–250 mm. Original mesh preview, source dimensions/format/count; explicit **millimeter confirmation** because STL has no units. Choose Z/Y/−Z up before attachment; changing axis clears source and asks for reattachment. XY scales proportionally to physical footprint; Z independently fits .4–.6 mm engraving depth. Rotation, centering, placement, replace/remove/reset change actual final triangles.

Supported input: **one closed outward-wound convex solid with broad flat bottom, no overhanging footprint**. Content/byte completeness, finite vertices, degenerate faces, welded edge incidence/opposite winding, connectedness, positive volume, triangle intersections, bounds, convexity and bed-contact checks. Open/nonmanifold/concave/hollow/disconnected/overhanging/complex input is rejected with guidance. **No hull substitution or invented repair.** Exact original validated mesh triangles become a Boolean engraving cutter, not an unchanged re-export.

Only synthetic/public-domain samples are bundled (public/samples/ATTRIBUTION.txt): PNG, JPEG, ring SVG, ASCII wedge and binary gem. User input is never uploaded, sent to external services or stored in the repo. Portable saves contain bounded normalized local payloads only.

## Worker / saves / views / exports

Debounced worker owns bundled WASM and bounded heavy CSG. Full state key and increasing generation IDs gate exports; invalid files/settings, pending image conversion or worker failure disable download. Last-good preview is explicitly labelled, never silently exportable as current. Same exact geometry drives preview and binary STL, with a mesh fingerprint checked against actual downloads.

Views: connected card, loose print layout, assembled printed kit, exploded, each isolated part; see-through, orbit/touch/pinch and fit controls. Assembly transforms are computational, not a tested physical assembly. Export stays bed-flat. Prominent per-part STL plus Everything ZIP: connected card, three clean-part STLs, numbered instructions and current actual fits. ZIP is not labelled 3MF. STL contains no colour or units.

Undo/redo; up to six named local designs; JSON save/open round-trips normalized image or validated mesh payloads within 2 MB. Missing payload requests reattachment, never pretends an absent asset restored. Light/dark theme persists locally; reduced-motion, visible focus, 44 px controls, phone preview-first stack and reachable exports.

## Make the kit

[PRINTING.txt](PRINTING.txt) has numbered assembly/printing/craft steps. Default card **140 × 220 × 3.8 mm**. Use PLA/PETG, .16–.20 mm layers, three perimeters, 100% mm scale; no supports intended, inspect slicer. Print mould/handle pair first for socket calibration. Snip twelve runners, insert handle downwards into two slots and glue seats. Screen perimeter glues to the recessed ledge; deckle stays loose under gravity. The screen layer is reserved from its measured thickness, not force-locked. Handle is not for heavy wet loads: support frame with both hands.

Add pulp from a basin with mould level, drain, lift deckle straight up, invert onto damp felt, sponge and peel gently. Avoid hot water; clean/dry promptly. Wet materials, adhesives and fine screen performance need real trials. No paper formation, water flow, force, durability or safety certification claims.

## Verification (computational, not physical)

`npm test`: independent exported binary-STL byte lengths, finite/nondegenerate triangles, stored normals, welded 1e−5 mm edge incidence exactly two/opposite winding, positive volume per component, explicit mm dimensions. Every part and connected card; presets/profiles, combined min/max and each field extreme; threshold/grayscale images and transformed ASCII/binary STL at min/default/max. Separate Boolean checks: assembled nonintersection, vertical insertion/removal, nine deckle side-play poses, screen layer, open aperture, actual ledge and socket/tongue probes, twelve damage-free snips yielding three parts+carrier, card envelope and sampled support-free bed footprints. Oversized parts on the smallest carrier are deliberately rejected.

Browser scripts serve actual production dist under its real base path: real PNG/JPEG/ASCII/binary uploads, downloads parsed and matched to UI fingerprint and independently regenerated JSON model, threshold/pixel/depth/scale/placement differences against defaults, same part/assembly checks for imported geometry, invalid/empty/excessive/nonmanifold/concave files, worker abort/recovery, rapid-edit stale guards, all presets, six icons/text/SVG, JSON/named-design reload, undo/redo, parsed ZIP, axes, hole probes, 320/390 px overflow and actual touch orbit/pinch. See VALIDATION.md for completed results and reproducible scripts. Compile-only success is not claimed as physical testing.
