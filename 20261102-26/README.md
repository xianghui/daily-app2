# Seism & Scribe

A reference-grounded **five-part flat-pack kit-card generator**, not a static STL viewer. Assemble two socketed portals, hang a pencil carriage on four external cords, and move a paper sled below it. The experiment illustrates relative motion; it is **not a calibrated seismometer**. Physical printing, writing, cord suspension, adhesive strength and stability have not been tested.

## Reference-first evidence

Before designing, local `3d_printing_apps/` STLs and the kit-card generator READMEs were inspected. The keycap template has switch cavities, not a sheet carrier; the fabric link is an 8 mm interlocking link, not a sheet socket. The local kit-card projects contain no suitable STL. A public reference was therefore downloaded and its actual binary mesh parsed:

- **White Cat Kit Card**, Mike Kasberg: [repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card).
- Source license: **CC BY 4.0**, verified against the repository LICENSE; full text in `reference-license-source.txt`.
- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.820 × 178.020 × 3.190 mm bounds. Millimeters are assumed, corroborated by source design dimensions; STL has no unit metadata.
- Cross-sections at Z = 0.10, 0.50 and 1.59 mm show 1.60 mm sheet regions, actual 4.50 × 1.700012 mm socket loops, a carrier and low runner structures. See `evidence/reference-sections.png` and reproducible `reference-measure.py`.
- The source has 27 edge-adjacent components including degenerate two-face fragments, and is not globally watertight. It is **reference only**, never repaired, re-exported, or bundled. Reconstruction uses original CSG solids, not a convex hull.

### Measured vs redesigned

Measured sheet thickness 1.60 mm is the default sheet parameter. The measured 4.50 mm socket length maps to each new **4.50 mm-wide portal tongue**. The original socket width is 1.700012 mm (~0.10 mm above source sheet thickness). New receiving sockets deliberately use `(4.50 + G) × (S + G)` mm, where **G = 0.10–0.35 mm total clearance**, default 0.20 mm. This is a proposed FDM starting fit, not a universally tested tolerance. Four bonded tongues replace the cat's multi-panel assembly. New card rails are 2.40 mm wide; new removable runners are 0.80–1.20 × 0.40–0.60 mm, intentionally stronger than the source's low ~0.21/0.22 mm connector planes.

The kit's inverted-U bridges, four-cord suspended pencil carriage, loose paper sled and relative-motion experiment are new. They are not a cat reskin or a prior pivot/packing kit. `reference-analysis.json` records the mapping. Reference trees and the older `daily_app` remain read-only.

## Studio

React + Vite; a 374 px scrollable LEFT maker panel and a large RIGHT Three.js viewer. Phone layout puts viewer, status and exports first, followed by stacked controls. Lavender-grey desk, white panels, coral tactile buttons, local Fredoka/Rubik fonts, saved dark theme, accessible focus, 44 px targets, reduced-motion CSS and collapsible sections follow the inspected `keycap_generator2` README, styles, App, Viewer, STL parser, imageTrace, worker and export patterns. No switch sockets are added to this unrelated kit.

Three genuine presets have generated model thumbnails. Size, bridge span, hanging drop, sheet thickness, card envelope, spacing, runner sections, calibrated sockets and three ergonomic base outlines change real geometry. Undo/redo, named local designs, JSON save/open, searchable bundled marks, text and image/STL personalization are functional.

Views: assembled suspended bench, exploded, connected card, clean print plate and each isolated part. Dashed cords and translucent pencil are **external supplies / preview-only**. Paper movement is a geometric translation, not a dynamics simulation. Export never uses the assembled overlap or preview supply geometry.

## Imports: local and bounded

All file processing is local in this browser. No API, upload, CDN, account or paid service. Only synthetic sample fixtures are bundled under `public/samples/`; personal files are not saved in the repository.

### PNG, JPEG and simple SVG

Pick a file on desktop/phone or drop it onto Import. Size limit **2 MB**, actual PNG/JPEG content verified before decode, maximum **12 megapixels / 6,000 px per side**. Normalize to ≤500 px, then sample a **20 × 20 luminance grid**. Thresholded dark pixels or grayscale depth create a closed heightfield cutter, Boolean-subtracted from the protected front base apron. White/transparent areas and holes leave full backing. This is bounded **2D-to-relief/silhouette conversion, not full 3D reconstruction** from one photo and not exact contour tracing. The checkerboard shows the actual conversion grid.

Controls: light/dark background, threshold 1–254, grayscale mode, fit/crop, ±25% crop shift, depth **0.40–0.60 mm**, physical footprint **4–7 mm**, XY placement and Z rotation. Bright holes survive in final geometry. Text/icons use this same pipeline. **Engraved only:** raised marks are intentionally unsupported to keep the kit at declared sheet thickness and avoid upper-only islands.

Simple SVG paths/shapes are sanitized, rasterized locally to 256 px, and converted by the same method. Up to 2,000 elements; no scripts, references, network resources, filters or unoutlined text.

### ASCII and binary STL

Validate content, exact binary size / complete ASCII facets, coordinates, nondegenerate triangles, welded edges, winding, connectedness, positive volume, intersections, bounds and complexity **before integration**. Limits: **2 MB, 1,500 triangles, each dimension 0.2–250 mm**. Supports one closed outward-wound **convex, broad flat-bottom, no-overhang** solid. Concave, hollow, open, nonmanifold, disconnected or self-intersecting meshes are explicitly rejected; there is no automatic repair and **no hull substitution**. The footprint hull is only a validation predicate; the cutter uses the original uploaded triangles.

Choose Z up, Y up (+90° X), or −Z up before attaching. Source dimensions/triangle count and a real source 3D preview are shown. Confirm millimeter coordinates explicitly. Changing axis requires reattachment. XY scales proportionally to footprint, Z independently to **0.4–0.6 mm engraving depth**; both scale factors are displayed. Rotation ±180°, X ±1.5 mm and Y ±2 mm operate within a **6.5 mm-radius safe apron**. The exact solid becomes a Boolean-shaped engraving in the fixed body. Depth leaves ≥1 mm backing and cannot obstruct moving parts or cut through sockets. Source and final previews are separate. Replace/remove/center/reset and return-to-defaults are provided.

### Portable designs

JSON (≤2 MB) includes bounded mesh arrays or the normalized PNG data URL, plus all parameters/transforms. Named local designs keep at most six entries. Restored meshes are reparsed; malformed or missing image payloads request reattachment instead of pretending to restore a file. Browser storage is origin/device specific. Files are never sent to external services.

## Parameters (mm except angles)

| Parameter | Range |
|---|---|
| Card X × Y | 180–220 × 190–240 |
| Portal leg centres / height | 52–66 / 62–80 |
| Vertical cord drop | 28–40 |
| Paper sled width × depth | 38–48 × 32 |
| Sheet thickness | 1.6–2.4 |
| TOTAL socket clearance | 0.10–0.35 |
| Part spacing | 3–5 |
| Runner width / height | 0.8–1.2 / 0.4–0.6 |

Some individually supported values cannot be combined on a small card. Packing validation blocks these with actionable errors. Cord eyes Ø2.6 mm, pencil bore Ø9 mm; 6–8 mm pencil uses removable tape, not a tight printed clamp. Displayed cord length is `hypot(vertical drop, 15)` mm plus knot allowances. Sled stroke is `base width − sled width − 10` mm. It stays 5 mm within the base ends and clear of the portals.

## Geometry, exports and checks

Manifold WASM performs real unions/differences in a Web Worker. Resolution is bounded; builds are debounced and generation IDs/current-state keys reject stale results. Export is disabled immediately on invalid edits/imports or worker errors; a visible last-good mesh is explicitly labeled, not silently exported. Preview and exports share the current exact mesh, with a signature checked by tests.

Each generated part must be one closed outward-wound component. Final worker preflight checks finite coordinates, nonzero faces, positive volume and two opposite-directed incident faces per welded edge (1e-5 mm tolerance). Independent tests parse **actual float32 binary STL**, including translated clean plates, and check normals, bounds, components and winding. Mechanism tests separately inspect all sockets/eyes, vertical assembly paths, supported sled stroke at nine positions, intersections, first-layer footprints, accessible tab cuts and all five clean parts after release. These are computational geometry checks, **not force, friction, durability or physical print tests**.

Prominent per-part **binary STL**, real connected-card STL, clean five-part plate and Everything ZIP. ZIP includes each part, the connected card, portable JSON and numbered assembly/print instructions. STL stores no colour; no false 3MF export is offered. All exports are bed-flat at Z=0 in millimeters. The connected card is one real solid with 20 breakaway tabs, not loose parts near a rectangle.

## Print and assembly

See `ASSEMBLY.txt` and the app's numbered instructions. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, three walls, support-free intended. Test the base and one portal before a full card; clearance depends on printer/material. Clip runners away from clean edges and file flush. Bond portals in the four sockets. Tie and level four nonstretch cords ≤0.8 mm diameter. Tape paper to the loose sled; tape a soft pencil in the carriage and adjust to barely contact paper. External cords, pencil, paper, tape, snips, file and adhesive required. No printed spring, hidden hardware, automatic clamping or calibrated seismic response is claimed.

## Run / reproduce

```sh
npm ci
npm run dev
npm test
npm run predeploy
node serve.mjs # production bundle at :5726/daily-app2/20261102-26/
node browser-test.cjs
node studio-test.cjs
node stale-test.cjs
```

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (OFL), gh-pages and Playwright for tests. Bundled icon paths from Lucide (ISC). Source first scaffolded with React Vite; modeling/import/export infrastructure adapted from earlier local maker studios, with independently constructed new kit geometry. Root monorepo deploy publishes the combined site; per-app deploy scripts exist as requested but are not the public monorepo publishing path.
