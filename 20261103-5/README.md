# Delboeuf & Compare

A browser-based, five-part **physical optical-illusion kit-card STL generator**. Snip twenty runners, nest two equal discs and two differently apertured surrounds into a common locating deck, then exchange parts to explore the Delboeuf size-context illusion. Both discs are byte-identical geometry. Both surrounds share their outer diameter and fit either station. This is not a browser game, a static STL re-export or a vision test.

No hardware or glue. Parts are gravity-seated, **not captive**: keep level. Physical printing, fits and perceptual effects have **not** been tested.

## Reference-first provenance

Read-only local candidates were examined first, including `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three components, 15.20 × 15.20 × 43.10 mm combined) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one component, 7.981 × 9.241 × 8 mm). Their project READMEs were inspected; neither switch cavities nor interlocking fabric joints are suitable flat-sheet kit interfaces. Local kit-generator projects did not provide a suitable source STL.

Structural reference: **Mike Kasberg, White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Source README and full license are preserved in `evidence/`. The source download endpoint returned HTTP 403 during this run, so an accessible previously downloaded, hash-matched STL in `/tmp/kit-reference-20261102.stl` was copied to a temporary analysis location and **freshly parsed**. Raw third-party mesh is not bundled or published.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL; 30,616 triangles; 179.820 × 178.020 × 3.190 mm overall. Millimeters assumed from documented source/sheet structure; STL carries no units.
- 27 edge-adjacent components: two substantial meshes and 25 degenerate/surface fragments. Whole source is not watertight; **no repair is claimed**.
- Actual measured sheet planes 0/1.60 mm, low runners at .21/.22 mm; four measured rectangular slot loops 4.50 × 1.700012 mm. Inspected cross-sections Z=.10/.50/1.59 mm in `evidence/reference-sections.png`; detailed measurements in `reference-measurements.json`.
- Default sheet 1.60 mm maps directly to the measured source; accessible low runners and subdivided carrier bays adapt the source construction. Proposed runners are deliberately strengthened to .40–.60 mm.
- **New design, not measured source dimensions:** 0.60 mm locating pockets, .20–.40 mm radial seat clearance, equal discs, interchangeable annuli, safe engraving apron and five-bay layout. Rectangular source slots are documented but intentionally **not imposed on circular seats**. All solid geometry is original parametric Manifold reconstruction; no spacecraft outlines copied.

`reference-analysis.json` maps each source observation to a specific decision and distinguishes measurements from proposed fits. `reference-measure.py` reruns the source analysis with Python trimesh/numpy/matplotlib.

## Maker studio

Visual/interaction reference was `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, export, imageTrace and STL modules inspected read-only. Concrete adopted patterns: 374px left rail with sticky brand/theme header, labelled collapsible controls, paired sliders/numeric inputs, raised tactile selected buttons, real model preset thumbnails, checkerboard cutout, imported-source preview and explicit units, current-result worker/export gating, large right viewer, preview-first stacked phone layout.

Light lavender-grey desk, white panels, coral accents; saved dark mode. Locally bundled Fredoka/Rubik fonts. Three geometric presets, rounded/square/clipped silhouettes, bounded variation, text, six searchable SVG marks, undo/redo (35 states), six named local designs, portable JSON save/open. Shared studio/import/serialization infrastructure adapted from earlier in-repository generators; mechanism/kit geometry and assembly checks are new, not a cosmetic reskin.

## Dimensions, controls and assembly

All physical dimensions in **millimeters**. Angles are degrees; threshold and crop controls have pixel/% labels.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 140–180 / 180–220 |
| Station center separation | 48–58 |
| Both equal disc diameters | 12–16 |
| Both surround outer diameters | 38–46 |
| Close / distant aperture radial gap | 1.6–2.4 / 5–7 |
| Proposed radial seat clearance | .20–.40 |
| Sheet | 1.6–2.4 |
| Part-to-bay spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Pocket depth | fixed .60 |

Deck dimensions are `(separation + surround diameter + 14) × (surround diameter + 28)`. Both stations have identical annular locating pockets: outer radius `R + clearance`, inner radius `disc radius + close gap − clearance`. Independent center recess radius is `disc radius + clearance`. The intervening solid land remains ≥.8 mm; floors remain ≥1.0 mm. Far surround uses the same outer locating circumference, with a deliberately larger inner opening. Minimum ring width 4 mm across supported ranges. Between-station pockets remain ≥1mm apart.

Both discs and rings lower directly from above, seating at `sheet − .60`; their top edges remain `sheet − .60` proud of the deck for removal. Two ring permutations and ten insertion heights per part are computationally checked. Nothing snaps, flexes or needs adhesive. Do not invert. Clearance is radial; diametral gap is twice the displayed value. Print deck and one ring/disc as calibration before the full card.

Flat card is a genuine single connected solid with five part bays and twenty low accessible breakaway tabs. Snip 1.8mm outside each part, then finish stubs flush without altering circular fits. Clean-part STLs avoid tab scars. Removing tabs yields carrier plus five separate undamaged parts.

Use the **same filament for both discs** and another shared filament for both surrounds; preview implements matched pairs. Look directly down under even lighting with see-through off. Exchange discs to verify equality, then exchange surrounds to reverse context. The illusion varies by viewer and lighting; no perceptual outcome is promised. The swap control changes only assembly preview, never printable dimensions. Exploded rings +14mm/discs +28mm are illustrative. Assembled/exploded/card/de-tabbed/isolated views all use the actual exported solids.

## Image → real engraved geometry

PNG/JPEG picker on phones and desktop, plus single-file drag/drop. Restricted simple SVG is rasterized locally. Files ≤2MB; raster ≤12MP and ≤6,000px/side verified before full decode; normalized ≤500px. SVG ≤2,000 simple path/shape elements; no scripts, external resources, embedded images, filters or unsupported content.

Source is sampled to a **20×20 grid** after contain/cover crop, X/Y shift ±25%, light/transparent background removal or dark inversion. Threshold 1–254 or inverse-luminance grayscale sets a closed triangulated height-field cutter, Boolean-subtracted into a protected front apron. Depth .4–.6mm, continuous backing ≥1mm. Bright holes stay uncut. Source and actual cutout grid appear on checkerboards. This is bounded sampled **2D-to-relief**, not exact vector tracing or full 3D reconstruction from a photograph. Empty silhouettes block export. Text (eight characters) and six searchable bundled marks use this same real geometry path. Raised marks deliberately unsupported to preserve the bounded sheet.

Footprint 4–7mm; rotation ±180°; X±1.5/Y±2mm in a checked 6.5mm-radius keep-in zone away from all locating pockets. Scale/place/rotate, replace/remove and reset controls alter final solid geometry. Background holes and source-pixel/threshold/depth changes are tested against downloaded exports.

## STL → exact mesh-shaped recess

Binary and ASCII content parsing, ≤2MB and 1,500 triangles. Requires a single closed, outward-wound convex solid, each oriented dimension .2–250mm, broad bottom contact. Validates finite vertices, triangle area, positive volume, welded 1e−5mm edge incidence/opposite winding, connectedness, intersections and convexity. **Concave, hollow, branched, open/nonmanifold, overhanging, multipart and self-intersecting meshes are unsupported and rejected with actionable feedback. No repair or convex-hull substitution.** Convex hull is used solely to check bottom contact, never to replace the input.

Select Z/Y/−Z up before attaching; changing axis requests reattachment. Source dimensions/3D preview shown. Explicitly confirm millimeter coordinates: STL has no unit metadata. Proportional XY scaling to 4–7mm footprint and independent Z scaling to .4–.6mm depth, rotation and placement are displayed. Original validated mesh is transformed and Boolean-subtracted into the apron as a useful personal recess; it is not merely displayed/re-exported. Keep-in/backing guards protect all seats. Reset/remove/replace work; portable JSON includes bounded mesh arrays and normalized images. Missing payloads explicitly request reattachment.

## Privacy, responsiveness and exports

All user files stay locally in the browser: no backend, upload, external API, analytics, account, key or runtime CDN. Dependencies/fonts/WASM bundled. Heavy CSG/STL validation runs in a Web Worker, with bounded resolution, 100ms debounce, request IDs and current-state key guards. Preview and export share identical final meshes. Invalid edits and failed workers block **all geometry exports**; last-valid preview is explicitly labelled, never silently exported. Exact binary fingerprint is compared to downloaded bytes and Node regeneration from saved JSON.

Prominent binary STL download and all per-part buttons; Everything ZIP includes connected-card STL, five clean STLs, portable JSON and numbered print/assembly instructions. De-tabbed print plate available. Everything exported bed-flat Z=0, never the assembled overlap. No misleading 3MF. STL contains geometry, not colors. Print orientation/material/fit notes and X/Y/Z mm dimensions shown.

PLA/PETG, .4mm nozzle, .16–.20mm layers, 3+ walls; supports not intended. Small parts and cutter work require adult supervision. Physical print strength, elephant-foot expansion, friction and perception are **untested**.

## Run and reproduce validation

```sh
npm install
npm test
npm run predeploy
python3 serve.py   # localhost:5755/daily-app2/20261103-5/
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node stale-test.cjs
node presentation-test.cjs
node swap-test.cjs
```

`validate.mjs` independently parses actual binary STL bytes: exact length, finite coordinates/normals, positive area, unit normals consistent with winding, expected millimeter bounds, positive signed volume **per component**, welded 1e−5mm two-face/opposite-directed edge incidence. Tests presets, shapes, individual and combined extrema, image/grayscale/hole/STL variants; all separately exported parts and float32 print plate; real Boolean intersections through both ring permutations/insertion paths, support-free sections, card envelope/connectivity, ring apertures, floor probes, safe tab cuts, part equality and removal access.

Production browser suites use real file-picker imports/downloads; verify actual exported changes against defaults, source pixels/threshold/depth/scale/place, replace/remove/reset, malformed/truncated/open/nonmanifold/concave/excessive/empty sources, units/orientations, invalid transforms, exact preview/JSON/export signatures, all presets/icons/text/SVG, holes, undo/redo, named/JSON roundtrips, portable-file restoration, ZIP contents, worker failure/recovery/stale guards, views, theme/focus/collapses, 320/390px layout and real touch orbit/pinch. See reports and `VALIDATION.md` for completed checks. Computational validation is not physical-print testing.

Dependencies: React/ReactDOM, Vite/React plugin, Three.js (MIT), Manifold-3D (Apache2), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL), gh-pages; Playwright for development. Structural-reference license CC BY4.0 preserved above. Only synthetic/public sample fixtures bundled; no personal user files or raw third-party reference STL.
