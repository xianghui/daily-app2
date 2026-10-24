# Ridge Whisper

A browser-based parametric STL studio for a **two-piece transverse scraping fidget**. Hold a rigid ribbed palm board and lightly draw a flexible rounded scraper across its ridges; lift and return. Sequential free contact, rather than a captive slide, ratchet, hinge or inertial motion, is the interaction. No assembly, retained joint or hardware. Shared local studio/import infrastructure is reused; this mechanism and its checks are new.

React + Vite, Three.js, Manifold WASM CSG and fflate. All generation dependencies bundle locally. Original ivory/clay model-first editor: large interactive preview, compact desktop rail, collapsible phone controls and persistent export. Composition reference: https://vaseverse.org/ — no copied branding, assets or code.

## Parameters · millimeters

| Control | Supported range |
|---|---|
| Track width | 14–22 |
| Track length | 28–44 |
| Ridge radius | 0.6–1.2 |
| Ridge pitch | 2.8–4.8 |
| Scraper tongue thickness | 0.8–1.6 |
| Palm dimple depth | 0–0.6 |

Rounded board is 2.4 thick, with 1.6 palm-well floor. Palm radius 10.5. Each transverse cylindrical rib has center 0.05 below the board top: exposed height = radius − 0.05. Valley gap = pitch − 2 × radius, at least 0.4. This is a geometric valley, **not a mating-fit clearance**. Rib count = floor((length − 8)/pitch)+1. A 1 mm margin at each Y edge keeps ridges within the rigid board.

Separate scraper: radius-7 thick handle, 6-wide tongue ending at X=27, rounded radius-3 end, approximately 17 free tongue length. Tongue grows directly from the flat bed. Minimum wall thickness is the 0.8 tongue; it requires continuous toolpaths. No precision sliding fit or retention is designed. Both parts have Z=0 bed-facing surfaces, no modeled overhangs needing support. Import geometry does not alter the scraper or rib field.

Default combined export bounds: **54.50 × 46.50 × 3.25 mm**. Final selected-part bounds update from real meshes, including imports. Three presets produce sparse, medium and dense rib fields and different widths, lengths and flex thicknesses. Variations stay within valid ranges. Numeric inputs and sliders edit live geometry; bad/nonfinite values block export. The 0–100% scraper-stroke control changes only an illustrative hovering pose, not printable geometry.

## Image workflow

PNG/JPEG file picker on desktop/phone; single-file drag/drop. Bundled synthetic `mark.png` and `waves.jpg` require no personal upload or third-party attribution.

Validate signature/header before decode: ≤2 MiB, ≤12 MP, ≤6000 px per side. Normalize locally to ≤500 px side. Composite transparency over white. Fit/contain or cover/crop, with ±25% X/Y pan. Sample a **20×20 luminance grid**. Threshold 1–254 yields two-height raised silhouette; grayscale maps darkness to height. Depth 0.4–3 above continuous 0.4 backing. Triangulated top, sidewalls and bottom make a closed solid, robustly unioned 0.15 into the palm floor. Empty conversions are rejected. This is **2D-to-relief**, not full 3D reconstruction from a photograph. Source and exact conversion previews are visible.

Footprint 4–7, Z rotation ±180°, XY offset ±1.5 / ±2. Every transformed vertex must stay inside the 6.5-radius palm safe zone, at least 4.3 from the nearest rib. Replace/remove/reset returns real geometry to built-in defaults.

## STL workflow / deliberately limited supported subset

ASCII and binary `.stl`: ≤2 MiB, ≤1500 triangles; source dimensions each 0.2–250. STL has no unit metadata: **explicit millimeter confirmation** gates integration. Interactive source preview shows dimensions, format and count. XY scales proportionally to footprint 4–7, independently fit Z height 0.6–5, rotate about Z, center and offset. Minimum fitted XY span 1.2. Reset restores transformations.

Only **one connected convex outward-wound closed solid with a broad flat Z-down base** is accepted. Base must cover ≥25% of footprint and contain all XY projections. Reject concavity, hollow shells, overhangs, open/nonmanifold edges, disconnected or inverted components, invalid/degenerate triangles, intersections, excessive dimensions/counts and unsafe placement. No automatic repair is claimed. Errors explain how to re-export a supported solid. This bounded contract is intentionally not a general STL repair service.

Bundled synthetic `wedge-ascii.stl` and `gem-binary.stl` demonstrate both encodings. Source shape is robustly CSG-unioned into the palm landing; it is not merely displayed or re-exported unchanged. Integration must remain one connected manifold board. Source and final-model previews are separate.

## Export / local processing / design history

One primary Download STL, individual board/scraper STL and ZIP of both plus assembly notes. Binary geometry-only STL uses the **same final worker-generated meshes and parameters** as preview, but in a deliberately separated printable layout. Working preview rotates the scraper across the track with a 0.4 hover gap: no contact/deformation/force simulation. Preview colours are not stored in STL.

Files remain entirely local. Parsing and CSG run in a worker with bounded complexity; no API keys, external services, CDN imports or uploads. Personal inputs are not stored in the repository. Save JSON explicitly embeds bounded normalized image/pixels or verified STL arrays. Open revalidates payloads; missing image data requires reattachment, never fictitious restoration. JSON limit 2 MiB, history limit 35 modeling actions. Undo/redo restores real geometry and imports. Replacing/removing an import or Reset all recovers invalid states.

## Printing and use

- Board: PLA/PETG. Scraper: TPU 95A recommended. No screws, bearings, magnets, cord or adhesive; inherently hardware-free.
- Print both flat Z=0 down in separated layout, without supports. Start with 0.4 mm nozzle / 0.2 mm layers, inspect thin tongue paths and clean ridge surfaces.
- Print **Soft Grain** first as full-size surface/flex calibration. Lightly drag the rounded tongue across ridges; lift and reverse. Check elastic return; stop for whitening, permanent bending or tearing. Reduce pressure or ridge height if it catches.
- No mating clearance or universal friction/tolerance is promised. Material, layer adhesion and surface finish affect results. Do not treat tongue thickness as a force-rated spring. No guaranteed acoustic result.
- Loose small objects, not retained; keep away from children. Do not sharply bend or force the scraper.

**No physical print, friction, force, acoustic, flex or fatigue testing performed.** Geometric validity and intentional contact checks do not establish tactile performance or durability.

## Reproduce validation

```
npm install
npm test
npm run predeploy
npm run dev -- --host 127.0.0.1 --port 5270
# In another terminal:
node browser-test.cjs
node extra-browser.cjs
node mobile-sheet.cjs
```

`validate.mjs` independently parses binary exports for finite/nonempty/nondegenerate triangles, normalized outward normals, welded-edge incidence exactly two with opposite directions, positive enclosed volume per connected component, bed-facing Z=0 and millimeter bounds. Checks both individual parts and combined layout. Defaults, min/max, all 64 parameter corners, presets and eight deterministic variations: 78 parameter cases. Threshold and grayscale plus ASCII/binary sources across representative parameter sets: 24 imported cases. Independent mechanism checks cover rib pitch/radius separation, tongue thickness/free length, import margin, five noncolliding hover poses, actual crest contact after a deliberate rigid press, separated printable parts and CSG proof that imports cannot modify the contact track. Physical friction and elastic response are not simulated.

Browser tests select real PNG/JPEG and ASCII/binary files, download and independently inspect STL, compare pixel/threshold/depth/crop/scale/placement changes and final-preview fingerprints, exercise malformed/truncated/oversized/open/nonmanifold/concave sources, invalid dimensions, empty silhouettes, safe-zone rejections and recoveries. Tests cover presets, variations, undo/redo, portable image/STL JSON round trips, ZIP/individual parts, preview colour neutrality, drag/drop, 320/390 px widths, touch orbit/pinch, tabs, collapsible sheet and persistent export. Reports contain observed results. Publishing is exclusively the root monorepo `npm run predeploy` / `npm run deploy` flow; individual required gh-pages scripts are included but not used to publish.
