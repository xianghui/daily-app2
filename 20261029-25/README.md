# Braid & Gather

A **five-part flat-pack cord-braiding stand kit-card generator**, not a browser game or a simulation of textiles. Snip twenty real runners, stand three radial shouldered legs in an open foot, and lower the eight-station top onto all three upper tenons. Glue the six sockets. A central passage stays clear through both rings and between the legs. Arrange soft cords in loose open-edge guides and move them by hand. Cord and adhesive are required; neither is included.

## Reference-first evidence and attribution

Before choosing final geometry, local STL collections were searched under `/Volumes/ExternalHD/3d_printing_apps/`. The keycap switch templates, fabric links and segmented slider mechanisms do not provide a suitable planar kit reference; `kit_card_generator` has a procedural house but no suitable local source STL. Its README and the relevant local collections' instructions were inspected read-only.

Downloaded and **actually parsed** public reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source and instructions](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README, LICENSE, `kit_frame.scad` and main SCAD were read. No raw third-party mesh is bundled or republished; this is a new parametric reconstruction, not the spacecraft model or an endorsed derivative product.

- Binary STL SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; bounds −0.010/−0.010/0 to 179.810/178.010/3.190; dimensions 179.820 × 178.020 × 3.190 **mm assumed**, corroborated by source SCAD. STL itself has no unit metadata.
- 27 edge-adjacent components including tiny fragments. The source is **not watertight** under this analysis. It is a measurement reference, not exported, repaired or substituted with a convex hull.
- Actual sections at Z=.10/.50/1.59 mm were generated and inspected: [reference views](evidence/reference-sections.png). The upper-right pierced circular sheet measures 48.000 × 47.971 mm, with 17.000 × 16.990 mm central opening and two narrow slots measuring **4.5 × 1.7 mm**. Sheet planes at 0/1.6 mm; carrier about 1.6 mm; low bridge elevations .21/.22 mm.
- **Preserved measured interface envelope:** default sockets are 4.5 × 1.7 mm in 1.6 mm sheet, and a pierced sheet/carrier architecture.
- **Proposed, not measured source fits:** new 4.4 mm tenons with .10–.35 mm total allowance; three radial stations at 24 mm, new cord-guide top, lower ring, legs and assembly. No claim is made that source tenons or fit forces were measured.
- **Deliberate deviations:** top diameter 72–84 rather than 48 mm, passage 16–20 rather than 17 mm, new radial three-leg structure, carrier 2.4 rather than 1.6 mm, runners .4–.6 rather than .21/.22 mm for controllable FDM layers.

[reference-analysis.json](reference-analysis.json) records source, hash, components and decisions. Reproduce actual section analysis with `python reference-inspect.py /path/to/downloaded-source.stl` in a Python environment with numpy/trimesh/matplotlib. Raw source remains outside the repository.

### Maker-studio reference

Read-only `keycap_generator2`: README, `src/styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL reader, image tracing and export modules were inspected. Concrete adopted patterns: 374 px left scrollable panel; sticky compact brand/theme; collapsible numbered sections; paired range/numeric mm inputs; raised key-like buttons with pressed states and keyboard focus; #e7e9f1 desk, white panels, #1f2233 ink, #e2557a accent; bundled Fredoka/Rubik fonts; saved dark theme; broad right gradient viewer, toolbar, dimensions, warnings and exports. Phones put preview/export before stacked controls. Imported-source units/orientation/placement, source/final previews and worker builds follow the reference's explicit workflow. Shared studio plumbing is reused from earlier local Daily Object Lab apps; all five physical parts, cord paths, joints and assembly checks are new. No reference Git history or dependency tree was copied wholesale.

## Run / dependencies

Node 22.12+; `npm install`, `npm run dev`, `npm run predeploy`.

React/Vite; Three.js + OrbitControls; Manifold WASM CSG in a worker; fflate ZIP; locally bundled Fontsource Fredoka/Rubik (SIL OFL); Playwright for reproducible browser checks. All runtime dependencies, fonts and WASM are local assets. No CDN, account, API key, server-side geometry or paid service.

## Parameters, millimeters and fits

All lengths **mm**, rotations degrees, threshold /255. Real presets with generated model thumbnails: Coral Braid, Pocket Gather, Open Passage. Round, octagonal and scalloped top outlines modify the solid, not just appearance. Bounded variation, undo/redo, six local named designs and portable JSON save/open are available.

| Parameter | Supported range |
| --- | --- |
| Card width / height | 175–220 / 170–220 |
| Top outside diameter | 72–84 |
| Central passage | 16–20 |
| Clear stand height | 32–48 |
| Cord notch width / depth | 2–3 / 6–8 |
| Total socket allowance | .10–.35 |
| Sheet / part spacing | 1.6–2.4 / 4–6 |
| Breakaway width / thickness | .8–1.4 / .4–.6 |
| Label dimples | 0–.4 depth |

Three radial 8 mm-wide legs sit at 0/120/240°, radius 24 mm. Both tenons are 4.4 mm wide and one sheet long, with 1.8 mm shoulders on each side. Sockets are `(4.4 + allowance) × (sheet + allowance)`, allowance **total**, not per side. Lower tenon tips finish flush with the lower face; upper tenons finish flush with the top. Each leg can insert vertically into the foot; the top then lowers onto all three legs without bending or closed-link assembly tricks. Six glue joints are required; no snap retention or universal press-fit claim.

The 64 mm open foot has the same clear passage as the top. Notches have semicircular bottoms and open rectangular mouths, spaced 45° apart. Their 2–3 mm widths are loose indexing guides for starting .5–1 mm soft cord, **not clamping slits**. Optional bobbins are not supplied. Hand-stabilize the stand; no heavy hanging weights or structural load claim. This is not an automatic braider or a promise of any particular braid pattern/strength.

Artwork stays inside a 6.5 mm safe-radius medallion at `(0, −passage/2−8.5)` on the indexed TOP. The 7 mm dimple ring is shallow. Geometry is kept away from central passage, notches and six interfaces. Engraving retains at least .8 mm backing at minimum sheet thickness. Impossible card envelopes, transforms or geometry are blocked with recoverable feedback.

## Local image and STL imports

File picker on phones/desktops; one-file drag/drop where supported. Choose/replace/remove, reset conversion/placement and return to defaults. Synthetic samples: `public/samples/mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`; original synthetic fixtures, no personal/reference STL files.

### PNG/JPEG/SVG, text and icons → actual relief

Validate file content/size before decoding: 16 bytes–2 MB, PNG/JPEG ≤12 MP and ≤6,000 px each side, normalized to ≤500 px for portable storage. Simple SVG ≤2,000 elements: safe filled paths/shapes, no scripts, external resources, text or effects; rasterized locally to 256 px. Six searchable bundled vector marks and up to eight text characters use the same local pipeline.

Contain/cover crop, ±25% pan, light/transparent versus dark/inverted background and threshold/grayscale conversion make a **20 × 20 luminance height grid**. Source and actual cutout are shown side by side on a checkerboard. Triangulate a closed heightfield with .4 mm backing, then Boolean-union into the top for raised marks or Boolean-subtract for engraving. Bright holes remain unraised/unengraved inside continuous backing; they do not punch through the structural sheet. This is **2D-to-relief, not reconstruction of a full 3D object from a photo**, and not exact vector tracing. Sampled tiny text may not be legible; bold art works best.

Physical footprint 4–7 mm, depth .4–3 mm raised/.4–.6 engraved, Z rotation ±180°, X offset ±1.5, Y ±2 mm. Final transformed vertices must remain in the safe zone; empty silhouettes are rejected. Pixels, threshold, depth, scale and placement all alter exported geometry.

### ASCII/binary STL → solid-integrated top grip

40 bytes–2 MB; 1–1,500 complete facets; one connected closed outward-facing positive-volume mesh; finite coordinates; .2–250 mm per axis. Validate directed edge incidence at 1e−5 mm welding tolerance, adjacency, degeneracy and triangle self-intersections before CSG. This intentionally bounded importer supports **convex, broad flat-bottom, no-overhang solids only**. Concavity, cavities, thin branches, disconnected meshes and unsupported geometry produce actionable errors; no repair or convex-hull replacement. The convex hull of bottom vertices is used only to check bed contact, never to replace source geometry.

Show source preview/dimensions and explicit **millimeter confirmation** because STL stores no units. Select Z/Y/−Z up before attaching; changing up axis requests reattachment. XY scales proportionally to 4–7 mm footprint; Z fits .6–3 mm grip height, with actual factors displayed. Rotation and placement are applied to actual source vertices. The unchanged source shape is robustly solid-unioned with a .15 mm penetration into the recessed medallion, not exported as intersecting shells. Final meshes pass the same checks as built-ins. Source may not block a cord path or assembly interface.

Files never leave the browser. JSON/local designs contain bounded image/mesh payloads, not broken filesystem paths. Missing image payloads explicitly request reattachment; no false restoration. Invalid assets disable exports until recovered. Personal uploads are not committed to the repository.

## Views / export / responsiveness

Connected card, de-tabbed print layout, assembled stand, exploded and every isolated part use the same generated meshes. Top insertion scrub and see-through controls explain sockets; exploded offsets are explanatory, not print orientation or force simulation. Orbit, zoom, fit and touch gestures supported. STL never stores preview colours.

One-click binary STL, six direct per-part buttons (card plus five parts), Everything ZIP with all six verified STLs and numbered assembly/print notes. All export geometry is bed-flat. The card includes actual frame/divider and **twenty fused low removable runners**, not loose pieces beside a rectangle. Snip tests produce six disconnected components: five assembly parts and carrier.

Worker-owned CSG, bounded segments/grid/triangles, 100 ms debounce, generation-id guards and current-state keys keep editing responsive. Last-good preview may remain visible during an invalid edit, but exports are disabled; preview and downloads share the exact current valid mesh. Worker loading failure is explicit. Export fingerprints and JSON regeneration are checked in browser tests.

## Validation and physical limitations

Reproduce:

```sh
npm test
npm run predeploy
npm run preview -- --host 127.0.0.1 --port 5425
node browser-test.cjs
node studio-test.cjs
node supplemental-test.cjs
```

Reports are saved next to these scripts. This run passed **22 built-in cases and 15 import-derived cases**, plus the production-browser suites. Tests parse **actual downloaded binary STL bytes**: nonempty triangles, finite coordinates, normals, nondegenerate faces, expected mm bounds/Z=0, every welded edge exactly two opposite-directed incident faces, each component positive enclosed volume. Check each part and connected card, presets/shapes, representative extrema and image/STL-derived outputs. Independent Manifold intersections check assembled nonintersection, all six sockets/insertion paths, clear central passage, eight open cord guides, no loose-layout overlaps and every snip clear of functional parts.

Production-browser checks cover PNG/JPEG and ASCII/binary file pickers, pixel/threshold/depth/transform changes against defaults, empty/malformed/excessive/nonmanifold/unsupported inputs, source replacement/removal/reset, exact preview/export fingerprint plus saved-JSON regeneration, all part/ZIP exports, SVG hole probe, text/icons, presets, undo/redo, portable/named designs, missing assets, all views, worker abort/recovery, saved dark theme, focus, collapsible sections, reduced motion, desktop left controls and phone preview-first/no-overflow at 320/390 px, touch orbit/pinch, reachable downloads.

**Computational checks are not physical print tests.** No physical print, fit force, stiffness, glue strength, durability, cord friction or braid usability test has been performed. Calibrate one leg and both rings in your material/printer first. PLA/PETG, .4 mm nozzle, .16–.20 mm layers (at least two layers in every runner), three walls, supports not intended. Inspect in your slicer, trim first-layer expansion, use adhesive after dry fitting and let cure. Adult craft with cord, cutters and small parts; not a children's toy or structural equipment.
