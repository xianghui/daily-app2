# Cell & Slot

A React + Vite, browser-local parametric **seven-part, three-bay compartment rack kit card**. Snip 28 runners, seat two top-slotted rails in a floor and lower four bottom-slotted transverse combs over them. Fourteen shouldered floor tongues locate the uprights; eight opposite-open cross-laps align the compartments. Adhesive is required after dry-fitting. This is a physical kit generator, not a browser game or a static STL download.

**No physical print, assembly-force, adhesive-strength or load test has been performed.** The rack is an adult desktop sorting miniature, not a load-rated, watertight or food-contact tray.

## Run and bundle

Node 22.12+; `npm install`, `npm run dev`. `npm test` reproduces independent STL and assembly checks. `npm run predeploy` builds `dist/`, using base `/daily-app2/20261029-19/`. Per-app `predeploy: npm run build` and `deploy: gh-pages -d dist` exist, but publication uses the **root monorepo deploy/** flow.

Locally bundled dependencies: React, Vite, Three.js, Manifold WASM (Apache-2.0), fflate and Fontsource Fredoka/Rubik (SIL OFL); gh-pages is deployment tooling and Playwright test tooling. No runtime CDN, server API, paid service or API key. Files stay in the browser. No private inputs are committed.

## Reference-first evidence

Local candidates were enumerated under `/Volumes/ExternalHD/3d_printing_apps/` before final geometry selection: clicker templates, slider meshes, fabric links and the animal-kit project. Relevant READMEs were inspected. The animal kit has generated animal profiles rather than a suitable existing flat-sheet carrier STL; switch sockets, telescoping guides and interlocking fabric links are not interchangeable kit references.

The actual **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Its source README, LICENSE and `kit_frame.scad` were downloaded and inspected read-only. The public binary STL was freshly downloaded to `/tmp/cell-slot-reference.stl`, parsed, measured and sectioned. The raw source asset is **not bundled**. No endorsement is implied.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles, bounding dimensions **179.819997 × 178.019994 × 3.190000 mm**.
- STL is unitless; millimeters corroborated by SCAD's 1.6 mm sheet and 179.8 × 178 mm carrier.
- Source sheet planes 0 / 1.6 mm; rail measured about 1.6 mm. Low bridge planes .21/.22 mm. SCAD explicitly tapers a .6 mm bridge to one nominal .2 mm layer.
- Source has **27 edge-adjacent components** under trimesh, including 25 two-triangle fragments, and is **not globally watertight**. This is reported, not repaired or re-exported. The original rack is reconstructed parametrically with Manifold, not a convex hull or extraction of the source's imperfect shells.
- Actual sections at Z=.1, .5, 1.59 mm were inspected in `evidence/reference-sections.png`. `reference-analysis.json` records detailed bounds, components, planes and decisions. `reference-inspect.py` reproduces measurements with numpy/trimesh/matplotlib; raw file stays outside the repository.

**Adaptation:** retain planar sheet construction and accessible low bridges on a connected carrier; retain 1.6 mm as the default sheet. Widen the frame to 2.4 mm and redesign runners to .4–.6 mm high. Rack parts, fourteen floor mortises/tongues, eight comb cross-laps and all .10–.35 mm allowances are **new proposed geometry**, not measured source fit dimensions. All tabbed parts and the card are rebuilt through genuine boolean solids.

Gallery audit found box, loom, furniture and optical kits but no three-bay comb rack with opposite-open cross-laps plus independently located floor tongues. This is a new seven-part assembly, not a keycap, a camera housing reskin or a re-export of the source spacecraft. `idea-audit.json` records the distinction.

## Studio reference

`keycap_generator2` was inspected read-only: README, App.tsx, styles.css, Viewer.tsx, worker, geometry engine/STL, export and image-trace modules. Applied concrete patterns: 374 px scrollable left panel; compact sticky brand/theme header; lavender-grey desk (#e7e9f1), white panels, dark ink (#1f2233), coral (#e2557a), soft pink selection; raised key-like buttons, paired slider/mm inputs, collapsible sections, large right 3D viewer, source preview and checkerboard, explicit mm confirmation, worker-owned CSG and current-result export gating. Dark theme persists. Phone layout puts preview/toolbar/export before stacked controls. Fonts are bundled. No changes to the reference project, deployment, dependency tree or Git history.

Reusable maker-studio imports, mesh validation, local saves and UI infrastructure are adapted from this monorepo's earlier studios; **all rack geometry, cross-laps, packing, placement transforms and mechanical tests are specific to this app**.

## Parameters and millimeter ranges

| Control | Range | Real effect |
|---|---|---|
| Card width / height | 235–280 / 220–260 | Connected outer envelope and three carrier bays |
| Clear bay width | 34–44 | Space between inner faces of long rails |
| Divider height | 18–28 | All six upright profiles and half-lap depth |
| Rack length | 66–84 | Front-to-rear comb centre distance and three equal cells |
| Tongue width | 4–6 | Fourteen floor seats and matching tongues |
| Joint clearance | .10–.35 total | Floor mortise and cross-lap widths, plus root separation |
| Sheet thickness | 1.6–2.4 | Every panel and matching slot dimension |
| Part spacing | 4–6 | Runner spans and carrier packing |
| Runner width / height | .8–1.4 / .4–.6 | 28 actual breakaway connections |
| Label dimple depth | 0–.4 | Tactile perimeter cuts outside the rack |

Three real presets with actual generated-mesh thumbnails: **Rose Cells, Wide Pockets, Tall Sorter**. Rounded, chamfered and tapered/waisted floor-lip silhouettes change printable geometry. Bounded variation stays within the declared parameter ranges, enlarging the carrier to 280 × 260 mm. Impossible layouts are blocked, never silently scaled or overlapped.

Clear cell floor space between walls is `width × (rack length / 3 − sheet)`. Mortise clearance extends slightly beyond wall footprints: `.gap/2` of each bordering floor edge is intentionally relieved. Tests probe uninterrupted floors outside these intentional seats. The exterior label lip is behind the rear comb, clear of all joints and cells.

## Fit, assembly and print orientation

Each long rail has four **up-open** slots, plus three lower tongues. Each comb has two **down-open** slots, plus two lower tongues. Cross-lap width is `sheet + total clearance`; each slot extends just past half the wall height by half the total clearance. Thus the opposed slot roots are separated by the full allowance. Tongues enter the floor by `sheet − .15`, leaving .15 mm underside recess; shoulders bear on the floor.

1. Print PLA/PETG bed-flat as exported; .4 mm nozzle, .16–.20 mm layers, three walls, no supports intended. Inspect your slicer; larger carriers exceed many beds.
2. Print a rail, comb and floor first for fit calibration. Allowance is material/printer/first-layer dependent, not a universal press fit.
3. Snip 28 runners; trim nubs without touching tongues/slots. Carrier is waste.
4. Seat the two rails in the six longitudinal floor mortises, slots pointing up.
5. Lower the four combs one at a time, slots pointing down, over both rails and into the eight transverse floor mortises. End combs sit at 0 / length; dividers at one-third/two-thirds.
6. Dry-fit square, then glue fourteen floor seats. **Adhesive REQUIRED** for dependable retention; there are no claimed snap locks or retained moving joints. Let cure.

No hardware is required. Adhesive and cutters are additional supplies. Computational checks sample vertical insertion from above the full wall height down to seating; check collision-free components, fourteen open floor seats, eight root clearances, shoulder support and tab-snipping without damage. They do not predict friction, force, fatigue or strength.

## Image / SVG / text / icon conversion

Desktop/phone file picker and desktop drag/drop accept PNG, JPEG, simple SVG and STL. Synthetic fixtures are bundled in `public/samples/`: mark.png, waves.jpg, ring.svg, wedge-ascii.stl, gem-binary.stl. They are original testing fixtures, not private source meshes. Sample buttons and fixture downloads need no personal upload.

Limits: **2 MB** per file, PNG/JPEG ≤12 million pixels and ≤6000 pixels per side, verified from headers before decoding; normalized to ≤500 px. SVG allows ≤2000 simple local path/shape/group elements, rejects scripts, references, embedded rasters and effects; rasterized to 256 × 256. Unsupported content produces explicit feedback.

**Exact image method:** fit/crop a local source with ±25% shifts; composite transparency against chosen light/dark background; sample luminance to **20 × 20** values. Threshold 1–254 produces selected silhouette heights or grayscale produces varying heights. The closed triangulated heightfield is boolean unioned into, or subtracted from, the .2 mm exterior label well. This is **2D-to-relief, not automatic full 3D reconstruction from a photo**, and not exact outline tracing. White interior holes stay unraised/unengraved above continuous backing; sampling can lose details smaller than the pixel pitch. Checkerboard shows selected pixels. Empty silhouettes are rejected.

Eight-character local text and six searchable bundled original SVG marks use the same real geometry route. Controls: footprint 4–7 mm, Z rotation ±180°, X ±1.5 mm, Y ±2 mm, raised depth .4–3 mm, engraving .4–.6 mm. All final feature vertices must stay within a 6.5 mm protected radius; invalid placement blocks export rather than clipping. Minimum label floor after maximum engraving is .8 mm. Reset transforms, reset image settings, remove/replace source and return to defaults are provided.

## STL-to-grip workflow

Both **ASCII and binary STL** are parsed in the worker. Limits: 2 MB, **1500 triangles**, each dimension .2–250 mm, finite coordinates, nondegenerate faces, one connected closed outward-wound positive-volume solid with oppositely paired edges welded at 1e−5 mm, no self intersections.

This bounded workflow supports **convex, broad flat-bottom grips with no overhang outside the bed footprint**, whose bottom contact covers ≥25% of bounding footprint. Concave, hollow, multipart, branching, nonmanifold, open and unsupported meshes are rejected with guidance. There is no claimed arbitrary repair, convex-hull substitution or unchanged mesh re-export.

Select Z-up, Y-up or −Z-up before attaching (changing axis requires reattachment). Inspect source preview, format, triangle count and oriented dimensions. Explicitly confirm millimeter coordinates because STL has no units. Footprint scales XY proportionally; Z height .6–3 mm scales independently; both factors are shown. Rotate/place/center/reset/remove/replace are real operations. Features thinner than 1.2 mm in XY or outside the protected label zone are blocked. Manifold **unions the original transformed triangles .15 mm into the exterior label well**, yielding one watertight floor, not overlapping export shells. It affects both connected-card and floor STL while leaving the other six parts unchanged.

## State, worker and exact exports

Manifold CSG and topology checks run in a local Web Worker with 100 ms debounce, bounded mesh detail, generation IDs and state-key gating. Import parsing/decoding and image-conversion busy states block export. The last valid preview may remain during errors, but stale geometry cannot be exported as if it matched invalid edits. Worker load failures disable exports and report reload recovery.

The viewer and STL download share the same final mesh arrays; a mesh-byte fingerprint is verified against actual downloaded files. Views: connected card, de-tabbed plate, assembled rack, exploded and every isolated part. See-through walls explain interfaces; separation is preview-only. Orbit, fit, zoom, touch orbit/pinch are supported. All exports are **bed-flat**, regardless of display view.

Undo/redo: 35 snapshots. Six named local designs and versioned JSON save/open carry bounded normalized image and indexed-mesh payloads, not unverifiable paths. STL payloads are revalidated; missing image payloads explicitly require reattachment. No personal files are stored in the repository or sent to external services. Preview colour is not STL colour.

Export a connected card, any of seven individual parts, or **Everything ZIP** with eight binary STLs (card + seven alternatives) and numbered ASSEMBLY.txt. Do not print both a card and an additional full set of the same loose parts. No 3MF or multi-colour claim.

## Reproducible checks

- `npm test`: independent binary length, normals, finite coordinates, nondegenerate triangles, outward winding, positive volume **per connected component**, welded edge incidence exactly two, mm bounds; all exported parts. Defaults, all presets, 16 mixed extrema, min/max and imported-image/STL variants. Boolean assembly intersections, insertion paths, floor seats, cross-laps and snipping connectivity.
- `node serve-production.cjs`: serve the real production base at http://127.0.0.1:5399/daily-app2/20261029-19/.
- `node browser-test.cjs`: real PNG/JPEG/ASCII/binary file uploads; download and independently parse exports; vary image pixels, threshold, depth, scale and STL transforms; invalid inputs and recovery; phone exports and touch orbit/pinch.
- `node feature-test.cjs`: presets, all silhouettes, text/icon/SVG geometry, JSON/named-save round trips with assets, undo/redo, actual per-part/ZIP downloads, views, theme, focus and stale-state guards.
- `node resilience-test.cjs`, `supplementary-test.cjs`, `hole-test.cjs`, `portable-errors-test.cjs`, `stale-import-test.cjs`: worker failure/recovery, every bundled mark, responsive layout/reduced motion, solid probes of image holes, malformed portable files and asynchronous import ordering.

See `VALIDATION.md`, JSON reports, logs and screenshots for observations. Tests establish computational geometry and browser behavior only; **no physical print or load testing**.
