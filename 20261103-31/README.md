# Gray & Sense

A parametric, bed-flat **five-part rotary Gray-code optical encoder kit card**. Snip a real connected carrier, stand a narrow read gate in two feet, and turn a perforated wheel on an external M3 joint. Three/four real aperture tracks encode eight/sixteen binary-reflected Gray words. Inner track is LSB; read the holes top-to-bottom for MSB-first words. This is a manually aligned demonstrator, not an electronic sensor or precision instrument.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; dependencies: Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts. `npm run deploy` is the required per-app gh-pages script; **the published combined site uses the root monorepo deployment**, not the individual deploy. Base: `/daily-app2/20261103-31/`.

## Actual reference evidence

Local candidates were read and parsed first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three switch-related components, 15.2×15.2×43.1 mm envelope) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles, one 7.981×9.241×8 mm link). Their switch/link interfaces do not supply a suitable sheet carrier, so neither was misapplied to this design.

The selected reference is **White Cat Kit Card**, Mike Kasberg, Printables 865769, [upstream](https://github.com/mkasberg/white-cat-kit-card), CC BY 4.0. Freshly downloaded actual binary STL: **30,616 triangles**, SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, envelope **179.820×178.020×3.190 mm** assuming millimeters, **27 edge-adjacent components**, not watertight. Its source code corroborates 1.60-mm sheet. Measured sections at Z=.10,.50,1.59 mm reveal 4.50×1.70-mm socket loops and low runner tops at .21/.22 mm. See `reference-measurements.json`, `reference-analysis.json` and `evidence/reference-sections.png`; reproduce with `reference-measure.py` using a downloaded source (trimesh/numpy/matplotlib).

This is an **original parametric reconstruction**, not a re-export of the vehicle. Default sheet and 4.50-mm tongue width map to the measured source; proposed foot sockets add total clearance to both axes. Straight glued tongues intentionally replace its ledged clips. Original 2.4-mm carrier rails and 20 accessible, bed-contact .4–.6-mm runners replace its much thinner links. The new T gate, coded disk, spacer, optical apertures and M3 interface are redesigned and explicitly not source measurements. Raw source mesh is not bundled. CC attribution/license is retained; no endorsement.

Read-only visual reference `keycap_generator2`: inspected README, styles, App, Viewer, worker, STL parser, image tracing and export modules. Adapted concrete studio patterns: 374-px left rail, collapsible controls, paired range/number fields, tactile pink selected buttons, local rounded fonts, large right viewer and preview-first phone stack, saved dark theme, source/cutout previews and current-result export gating. Shared studio utilities are adapted from earlier Daily Object Lab apps; **the encoder geometry, aperture coding, read poses and validation are new**.

## Parameters · all lengths millimeters

| Parameter | Supported range |
|---|---|
| Card width / height | 210–260 / 210–280 |
| Encoder radius | 30–42 |
| Tracks / sectors | integer 3 or 4 / 8 or 16 |
| Open sector fraction | .65–.80 |
| Radial webs | 1.2–1.8 |
| Sheet | 1.6–2.4 |
| Axial spacer gap | .8–1.2 |
| M3 bore diameter allowance | .20–.50 (bore 3.20–3.50) |
| Part spacing | 3–5 |
| Breakaway width / thickness | .8–1.2 / .4–.6 |
| Tongue/socket total clearance | .10–.30 |

Track centres: `10+(bit+.5)*(R-13)/tracks`. Annular apertures use that pitch minus radial web; 12 line segments per arc preserve concavity and exact intended track structure through solid Boolean subtraction. Disk has a 3-mm outer rim, continuous hub and sector guard spokes. Narrow read bores are ≤1.6 mm diameter. Angle and see-through are inspection-only; they do not change printable geometry. The UI displays ALIGN TICK near structural guards: **these spokes mean this is not transition-safe electronic Gray sensing**, even though consecutive sector-centre words differ in one bit including wrap.

Three genuine worker-generated 3D preset thumbnails; three apron silhouettes; bounded variation; undo/redo; six local named designs; JSON save/open. Designs include bounded normalized PNG or verified mesh payloads and image conversion settings. Missing payloads demand reattachment. No persistence of a path is presented as asset restoration.

## Local image → printable engraving

Picker and drag/drop support PNG, JPEG and simple safe SVG. Actual headers are checked **before image decoding**: file ≤2 MB, ≤12 MP and ≤6,000 px per side. PNG/JPEG normalized ≤500 px per side for portable storage; bounded SVG has ≤2,000 simple shape elements, no scripts/external resources/effects, is rasterized locally to 256 px. Text and six searchable bundled geometric icons use the same local raster workflow.

Fit/cover, crop offsets ±25%, light-background or dark-inverted conversion are applied on a **20×20 luminance grid**. Threshold 1–254 selects dark pixels; grayscale mode maps inverse luminance to depth. A triangulated heightfield is closed with walls/bottom, then Boolean-subtracted from the solid apron. This is documented **sampled 2D-to-silhouette/relief**, not exact contour tracing and not single-photo full 3D reconstruction. Bright/transparent holes stay unengraved over solid backing; checkerboard shows the actual converted grid. Fine details below the grid may disappear. Depth .4–.6; art footprint4–7, rotation±180°, X±1.5,Y±2. Exact rotated artwork must fit keep-in radius6.5, away from all joints and apertures; ≥1-mm backing. Raised marks are intentionally unsupported to preserve sheet thickness. Empty silhouettes and unsafe placement block export, not silently disappear.

## Local STL → printable engraving

Both **ASCII and binary** STL are parsed, content/file-size checked, vertex-welded at 1e-5 mm, and validated for finite coordinates, nondegenerate triangles, opposite edge winding, exactly two incident faces, positive volume, one connected shell and triangle self-intersection. Limits: 1,500 triangles, .2–250 mm in every axis, ≤2 MB. Explicitly confirm millimeter units (STL has no units). Select Z, Y or −Z up before attachment; inspect oriented dimensions and source preview. Proportional XY footprint scaling, separate depth scale, Z rotation and X/Y placement change the real Boolean-cut geometry. Reset, replace, remove and return to defaults work.

**Bounded supported geometry** is one convex, broad-flat-bottom solid without overhangs. Concave, hollow, branched, open/nonmanifold, disconnected and unsupported overhanging input is rejected with guidance; no automatic repair or convex-hull replacement. The original supported mesh—not a primitive or hull—is scaled and subtracted. The parser computes a 2D bottom hull only to check contact/overhang containment, never as exported replacement geometry. Concavities and holes of the generated encoder are built using genuine CSG, not this import restriction.

All user files stay in browser memory/local storage and are never uploaded. Bundled PNG/JPEG/SVG, wedge ASCII STL and gem binary STL are original synthetic CC0 examples. No personal input files or raw reference mesh are in this repository.

## Modeling, views and export

Manifold WASM runs in an ES Web Worker; bounded resolution, 100-ms debounce and request IDs discard stale builds. Current state key includes parameters, mesh/image settings and transformations. Heavy STL parsing also runs in worker. Worker/loading, invalid import or current-build error disables every STL/ZIP button; last-good preview is labelled and **cannot be silently exported**. Preview and export use the identical current mesh; exact binary-STL fingerprint is exposed for reproducible checks.

Views: connected card, exact assembled, illustrative exploded, de-tabbed plate and every isolated clean part. Rotate, zoom, fit, front/top views, touch orbit/pinch, see-through gate. External hardware is omitted, not silently printable. Every export lies flat at Z=0, including the thinner spacer; assembled overlaps are never exported as one solid. Binary STL downloads include connected card, individual parts and de-tabbed plate. Everything ZIP includes six STLs (card plus five clean parts), current design JSON, numbered instructions and exact current fits. STL stores no preview colour; no fake 3MF option.

Every generated solid is Boolean-unioned/subtracted, independently edge/manifold/winding checked before export; no interpenetrating-shell pretend unions. Mechanism invariants separately bound backing, apertures, webs, bores and hardware stack. See reproducible `validate.mjs` and browser scripts/reports for checks actually performed.

## Print, calibrate and assemble

1. Print the 210×230×1.6-mm default card **or** clean parts on smaller beds, flat at 100% mm scale. PLA/PETG, .4-mm nozzle, .16–.20-mm layers, 3+ walls. No supports intended. Print a foot/tongue region and spacer/wheel bearing coupon first; material/printer-dependent fits are not universal.
2. Snip all 20 runners 1.8 mm outside part boundaries, smooth outside stubs, discard carrier. Leave gate tongues, bores and windows untouched.
3. Dry-fit gate into feet, lower vertically until shoulders rest on foot tops, then glue fixed joints. Straight tongues are not snap locks.
4. Supply **one M3×16 bolt, one M3 locknut and two M3 washers** (≤.6 mm each), plus plastic-compatible foot adhesive. Insert bolt/washer from front, add spacer and wheel at rear, rear washer and nut. Snug with slight running allowance, not a clamp. Largest nominal printed/hardware stack is 11.2 mm; measure your parts and thread engagement. Hardware-free loose inspection is possible, **not a retained working assembly**; no unverified printed axle substitute claimed.
5. Turn exposed rim; align centre ticks at the top read column. Inner track = bit0, top hole=MSB. View normal to gate against diffuse light/contrasting background. Structural guard zones deliberately blank readings near boundaries. No electronics included. Small hardware/parts are not for children; not load-bearing.

Computational geometry and optical-code checks are **not physical print, fit, friction, stability, adhesive, fatigue or optical testing**. None of those physical tests were performed. Full numbered current instructions ship inside ZIP.

## Validation

`npm test`: every preset, single-control minima/maxima, simultaneous bounds, all silhouettes, image and STL variations: float32 binary byte count, finite coordinates, nondegenerate faces, unit normals, opposite edge incidence, per-component positive volume and expected mm bounds. Every intended part checked separately; real card connectivity, accessible tab-cut release without part damage, no flat overlaps, bed-support footprints, socket alignment, unobstructed insertion, coaxial retained hardware path, full wheel rotation clearances and every encoded bit probed in actual CSG. Browser tests use real file pickers and download bytes, verify preview fingerprint and regenerate from downloaded JSON, bad-input recovery, mobile touch and production worker/WASM paths. Separate studio tests cover presets, SVG/text/icons, holes, undo/redo, saved/JSON assets, themes, every view and real ZIP contents. Reports state tested configurations and physical limitations explicitly.
