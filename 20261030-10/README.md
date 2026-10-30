# Meridian & Orbit

A reference-first React + Vite studio for a **four-part flat-pack great-circle sculpture kit card**. Snip 16 real low runners, side-insert two half-hoops into shared polar sockets in a full meridian, bond four polar contacts, then lower and bond its foot into a personalized pedestal. It makes two perpendicular great circles. This is a static armillary-inspired object, **not a rotating gimbal or astronomical instrument**. No equatorial ring is implied.

## Run and publish

```sh
npm install
npm run dev
npm test
node parameter-check.mjs
node hole-check.mjs
npm run predeploy
node serve-production.cjs
# In a second terminal:
node browser-test.cjs
node studio-test.cjs
```

Vite base: `/daily-app2/20261030-10/`. Independent app scripts are exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; publication of this monorepo uses the **root** predeploy and deploy, not the individual app's deploy command. Root deploy includes the gallery and every prior app.

## Actual STL reference and attribution

**White Cat Kit Card**, Mike Kasberg, [source / instructions](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card). Licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); license text is `reference-LICENSE.txt`. Download URL and complete mesh measurements are in `reference-measurements.json`; design mapping is in `reference-analysis.json`.

The actual downloaded binary STL has **30,616 triangles**, SHA-256 **5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff**, dimensions **179.820 × 178.020 × 3.190 mm**, and **27 edge-adjacent components**. Millimeters are assumed from documented sheet construction; STL stores no units. The reference is **not watertight**. It is inspected as a design reference, not repaired, imported into the final product, or redistributed. `reference-inspect.py` parses it with trimesh, records components and Z planes, and plots real sections at Z=.1, .5 and 1.59 mm in `evidence/reference-sections.png`.

Measured source geometry: **1.6 mm sheet**, repeated **4.5 × 1.700012 mm sockets**, low planes .21/.22 mm. The new 4.4 mm tongue and socket rule `(4.4 + allowance) × (sheet + allowance)` reproduce that measured socket at sheet=1.6 and allowance=.10. **4.4 mm is a proposed tongue reconstruction, not a separately measured source tongue.** The default .15 mm allowance is proposed, not measured. The source's carrier and sheet-to-socket structure inform our own frame/runners and all five socket contacts. Shared half-depth polar tongues, ring radii, pedestal, .4–.6 mm thick runners and assembly sequence are original redesigns.

Local references were searched first under `/Volumes/ExternalHD/3d_printing_apps/`. The actual keycap switch template and fabric diamond link were parsed: hashes, sizes and component counts are recorded. The former comprises switch cuts/stem, the latter an 8 mm interlocking link; neither provides an appropriate sheet/socket kit reference. The local kit-card project's README was also inspected; it contains no suitable original STL asset. Thus a documented public kit-card STL was downloaded and inspected.

## Studio and physical parameters

All physical dimensions are **mm**; rotation is degrees. Three genuine model-rendered presets: Little Cosmos, Desk Meridian and Grand Orbit. Pedestal footprints: soft chamfers, cut corners and genuinely rounded corners. Undo/redo, six named local designs, portable JSON save/open, saved light/dark theme, see-through mode, touch orbit/pinch, fit and zoom. Desktop uses a 374 px left control rail and right viewer; phone shows preview, dimensions and export first, followed by stacked controls. Fonts, WASM, modeling and ZIP dependencies are local assets, no CDNs.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 190–230 / 180–210 |
| Hoop centerline diameter | 48–64 |
| Hoop radial band width | 7–9 |
| Pedestal width / depth | 62–82 / 34–42 |
| Sheet thickness | 1.6–2.4 |
| Total socket allowance | .10–.35 |
| Part spacing | 3.5–5 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Groove depth | .2–.5 |
| Image/mesh XY footprint | 4–7 |
| Mesh relief height | .6–3 |
| Image raised depth / engraved depth | .4–3 / .4–.6 |
| Local mark X / Y offset | ±1.5 / ±2 |
| Mark Z rotation | ±180° |

Default connected card: **210 × 190 × 3.05 mm**. Model dimensions are computed from exact export triangles. The underlying ring/pedestal parts have Z=0 bed contact. The card has a real outer frame and central rail. Each of four clean parts has four low accessible runners; their full Boolean union forms one connected solid. Parts stay inside the declared card envelope; clearance and socket walls are checked. Personalization is confined to a 6.5 mm radius pedestal landing, kept clear of the ring and foot. The card may not fit an 180 mm bed: export the individual pieces instead, never globally scale the joint fits.

## Local image import: PNG, JPEG, simple SVG

Picker works on phones/desktops; drag/drop one source is supported. Validate content signatures, file size ≤2 MB, PNG/JPEG dimensions ≤12 MP and ≤6,000 px/side **before** decoding. Normalize to ≤500 px; portable PNG payload is bounded. SVG: ≤2 MB, ≤2,000 simple paths/shapes, no external references, scripts, filters, text or resources. Rasterize SVG locally to 256 px; this is not exact vector tracing. Synthetic fixtures are bundled under `public/samples/` with attribution.

Exact method: fit or cover/crop into a **20 × 20 luminance grid**, composite transparent areas onto the selected background, optionally invert dark background, shift crop up to ±25%, then either threshold 1–254 or use grayscale heights. The grid is triangulated into a closed height solid with a continuous .4 mm skirt. The skirt embeds inside the pedestal's .2 mm recessed well. Raised marks use real solid union; engraved marks reflect and subtract the relief to preserve at least **.8 mm backing**. Threshold and depth change exported triangles/volume. Bright holes remain unraised/unengraved over backing (not through-holes). The checkerboard shows the actual converted cutout. Raised/engraved solid probes independently verify center holes. Source and final 3D previews are both available.

Text (up to 8 characters) and six searchable bundled icons use this same local conversion path and alter the STL. A 4–7 mm mark is intentionally small; choose simple bold letters/symbols and inspect slicer resolution. Image import is **2D-to-relief, not automatic full 3D reconstruction from a photo**.

## Local STL import and integration

Supports actual ASCII and binary `.stl` files, ≤2 MB and ≤1,500 triangles, each oriented source dimension .2–250 mm. Strictly validates complete data, finite coordinates, nondegenerate faces, one connected component, welded closed opposite-directed edge incidence, positive outward volume and nonadjacent face intersections. Supported integration is deliberately limited to **one convex, closed, flat-bottom, nonoverhanging grip/mark**. Concave, hollow, thin-branch, open, touching or unsupported meshes are rejected with guidance. No arbitrary mesh is repaired or replaced with a convex hull. The small 2D bottom-footprint hull used only for validation does not alter source triangles.

Select Z/Y/−Z up before attaching; source dimensions and format are shown after orientation. Explicitly confirm millimeters (STL has no unit metadata). XY scales proportionally to selected footprint and Z independently to the selected height; factors are displayed. Rotate about Z and place in the protected landing. Original indexed triangles are used in Manifold **Boolean union** with the pedestal, embedded .15 mm for connection; the app does not merely display or re-export the unchanged source. Final mesh is validated again. Replace/remove, center/reset transforms and return to built-in default all work. Up-axis changes clear the import and request reattachment.

## Geometry, export and privacy

Manifold WASM runs in a Web Worker, with 100 ms debounce, build IDs, stale-result guards and visible build/error state. Every new numeric state must pass the kernel and an independent final edge/winding/volume check. Preview and export share the same exact result; the UI includes the exact current STL fingerprint. Invalid/pending source, image conversion, unit confirmation or worker failure disables **every** STL/ZIP action. A last-good preview is explicitly labelled and never silently exported after invalid edits.

Views: connected card, assembled, exploded, de-tabbed print layout and each isolated part. Assembly poses are the same rigid transforms used by collision checks; explosion is explanatory only. Downloads always use bed-flat printable parts, never assembled overlapping visuals. Per-part binary STL, connected-card STL, and **Everything ZIP** containing all five STLs and numbered `ASSEMBLY.txt` with current calculated fits. No 3MF is claimed; STL stores neither units nor preview colors.

All user files stay in this browser; no uploads, external APIs, account or keys. JSON embeds bounded normalized image data and/or mesh triangles; restoration revalidates STL. Missing image payloads explicitly request reattachment. Local saves are origin/device-specific and browser storage can fill; portable JSON is the backup. User input assets are never committed to the repository. Samples are synthetic, not private source files.

Dependencies: React, Vite, Three.js/OrbitControls, manifold-3d and fflate; Fontsource Fredoka/Rubik fonts. UI follows concrete read-only Keycap Studio patterns: lavender desk, white panels, dark ink, pink selection, raised tactile buttons, paired range/numeric mm controls, collapsible sections, checkerboard import, 374 px rail, phone preview-first layout and current worker-result export gating. Its README, App, styles, Viewer, image tracing, worker, STL and export modules were inspected, not modified. Reused only local daily-app maker infrastructure; the geometry, presets, assembly and validation are new.

## Printing, assembly and limitations

PLA/PETG, .16–.20 mm layers, three walls, flat Z=0, 100% mm; no supports intended. Clip the 16 runners **1.6 mm outside** part boundaries and trim nubs; keep functional tongues intact. Use eye protection/cutters appropriately. Print a meridian + pedestal pair to calibrate allowance with your printer/material. Total allowance .15 is only a starting point.

1. Lay the full meridian sideways. Slide east half-hoop horizontally toward it, engaging both polar sockets at once.
2. Insert the west half-hoop from the opposite side. Opposed tips maintain the selected allowance gap. Each engagement is `(sheet−allowance)/2`, **.625–1.15 mm** over the range. These are deliberately shallow **adhesive-required** joints, not self-locking retention.
3. Bond four polar tongue contacts with compatible adhesive; keep the gap and decorative surface clean. Let cure without forcing or bending the ring.
4. Stand the crossed hoops. Lower the meridian foot into the central pedestal socket until its shoulder seats. Bond the fifth fixed joint and let cure.
5. Display the resulting static great-circle sculpture. No metal hardware is needed; compatible adhesive and cutters are required external supplies.

The pedestal is not a load-bearing stand. Adhesive choice/strength, long-term creep, assembly force, impact resistance and physical stability are untested. No physical print or astronomical accuracy test has been performed. This is an adult maker miniature with small parts, not a child's toy.

## Validation evidence

`validate.mjs` checks defaults, 3 presets, simultaneous min/max dimensions, 3 silhouettes, ASCII/binary STL integration, raised/engraved threshold/grayscale sources; each card and every clean part is checked independently after actual binary STL serialization. Welding tolerance **1e−5 mm**; require exactly two opposite incident triangles per edge, finite/nondegenerate faces, stored-normal agreement, positive volume **for each component**, component count, Euler characteristic, Z=0 and expected mm bounds.

Mechanical tests intersect the actual solids: pairwise assembled and print layout collisions, sampled opposed polar insertion, complete ring-group lowering onto pedestal, five shoulder stops, ≥.8 mm socket material, actual opposed-tip corridor, real card envelope, and cutting all 16 runners to produce exactly four clean released parts plus one carrier without damaging functional parts. This verifies geometric assembly, **not bond strength, fit forces or printability on every printer**.

`parameter-check.mjs` exercises 24 independent parameter extrema plus 8 mixed image/STL/extreme-thickness/diameter cases and rejects out-of-range/nonfinite inputs. `hole-check.mjs` uses solid probes to confirm image hole preservation. Production browser tests exercise real PNG/JPEG/ASCII/binary picker uploads, downloaded STL byte signatures and regeneration from JSON, pixel/threshold/depth/scale/placement changes, reset/replacement/removal, malformed/truncated/open/nonmanifold/concave/excessive inputs, all presets, text/icons/SVG, worker failure/recovery, saved designs, undo/redo, ZIP entries, touch orbit/pinch, 320/390 px layouts, dark theme and keyboard focus. Reports/screenshots are stored beside the app. See `VALIDATION.md` for final observed results.
