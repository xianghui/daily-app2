# Climb & Grip — cord-climber kit-card studio

A React/Vite maker studio for a **four-part connected kit card**: a twin-eye crossarm, hanging mascot body and two pull toggles. Snip sixteen runners, bond the mascot below the arm, thread two externally anchored cords and knot on the toggles. Alternate gentle pulls to explore tilt-induced bore-rim contact. **Actual climbing/friction is not physically tested or guaranteed.** This is an adult craft prototype, not a load-bearing device.

## Reference first, not a source-mesh re-export

Local candidate STL meshes under `3d_printing_apps` were inspected before selecting geometry. The keycap switch template has three switch-specific components; the fabric link is an 8mm-high interlocking solid. Neither supplies a sheet-card assembly interface. Their read-only README files and meshes were inspected and measurements recorded.

The selected accessible public reference is **White Cat Kit Card / Printables 865769**, Mike Kasberg: [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**, bundled license/source README. The actual binary STL was downloaded and parsed before reconstruction:

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles, assumed millimeters, 179.819997 ×178.019994 ×3.1899996mm.
- Actual sections at Z .1, .5 and1.59 show sheet planes0/1.6mm and four sockets4.5 ×1.700012mm. Low runner vertices are Z.21/.22mm.
- The original mesh is **nonwatertight**, with27 edge-adjacent components; it is a design reference, not a supposedly repaired import.
- Tongue4.4 ×sheet1.6 plus total allowance.10 recreates the measured socket. Default.15 (range.10–.35) is a **proposed printer-dependent allowance**. Crossarm2.4–3.2mm and stronger bed-level runners are deliberate redesigns.

See [reference-analysis.json](reference-analysis.json), [reference-measurements.json](reference-measurements.json), [actual source sections](evidence/reference-sections.png), and `reference-inspect.py /path/to/source.stl` (trimesh/numpy/matplotlib). The raw source STL is **not redistributed**. The cord mechanism, body/arm seat, four-part card and constraints are an original parametric reconstruction. Both existing galleries were checked for mechanism overlap; the dual-cord tilted-bore interaction differs from prior whirligig, pendulum, tether-catch, tablet-weaving and string-sculpture kits. Shared local studio, parsers, sampled-heightfield and validation infrastructure are reused, not the previous U-tube apparatus geometry.

The read-only primary visual reference `keycap_generator2` was inspected: README, styles, App, Viewer, worker, STL parser, image conversion and export modules. Concrete patterns:374px scrollable left rail; sticky brand/theme control; collapsible numbered sections; paired slider/mm inputs; tactile raised buttons and pink pressed states; preview-first phone stack; checkerboard cutout; saved theme and current-worker-result export gating. No source project files, dependencies or history were modified.

## Run / local dependencies

Node22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base `/daily-app2/20261031-8/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined publication uses the root monorepo deploy flow. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik fonts; Playwright for browser validation. No CDN imports, paid service or API key. All user-file processing stays local in the browser; no uploads or personal files in the repository.

## Parametric geometry — all lengths in millimeters

| Control | Supported range |
|---|---|
| Card width ×height |210–240 ×180–210 |
| Cord eye spacing / crossarm depth |36–50 /20–26 |
| External cord OD / extra bore diameter |1.5–2.5 /.6–1.4 |
| Mascot height |38–54 |
| Crossarm / mascot sheet thickness |2.4–3.2 /1.6–2.0 |
| Mascot tongue / total slot allowance |4.4–5.2 /.10–.35 |
| Part spacing |3.5–4 |
| Runner width / thickness |.8–1.4 /.4–.6 |
| Art footprint / depth |4–7 /.4–.6 |
| Art Z rotation / X / Y |±180° /±1.5 /±2 |

Three presets have actual generated model thumbnails; square/rounded/clipped crossarm profiles, bounded variation, reset, undo/redo. All parameter values are validated before building. A worker owns the locally bundled WASM, with debounce, generation IDs and exact current-state keys. Invalid imports/settings or worker failure disable export; a visible last-good preview is explicitly labelled and cannot be downloaded as current. Every generated part also passes runtime finite/nondegenerate/manifold/winding checks.

The frame has real Boolean-unioned breakaway runners, four per part. Card/clean parts/assembled/exploded/isolated views share one result. Preview cord lines are estimated external paths, not plastic or a motion simulation. Printable exports always use the real bed-flat card or separately bed-aligned parts, never an assembled overlap. Clear per-part binary STLs and Everything ZIP (connected card, four parts, numbered instructions). STL has no units or colors. UI displays selected export X/Y/Z and exact byte fingerprint; preview and export share the same result.

## Image to real engraving

Desktop/phone file picker and drag/drop accept PNG/JPEG/simple self-contained SVG. Type/signature and declared image dimensions are checked before decode:2MB,12MP,6000px side. Images normalize to≤500px; restricted SVG≤2000 elements rasterizes locally to256px, no scripts, external links or effects. Synthetic/public-domain local sample PNG, JPEG, ring SVG and two STL fixtures are bundled with attribution.

A **20×20 sampled luminance heightfield** becomes a closed triangulated solid cutter, Boolean-subtracted into the outboard crossarm lug. Fit/cover, crop pan, dark/light background, threshold1–254, grayscale relief, footprint, placement, rotation and depth alter the exported solid. Source preview and checkerboard show the actual conversion. Bright holes remain unengraved inside continuous backing, computationally probed. This is **bounded sampled relief, not exact vector tracing, and 2D-to-relief rather than automatic full3D photo reconstruction**. Text and six searchable bundled vector icons use this same actual geometry pipeline. Raised art is intentionally unsupported to keep the kit uniformly bed-flat. Engraving never enters the central body socket or cord bores; backing remains≥1.8mm.

## STL to real engraving

Binary and ASCII STL≤1500 triangles,2MB, oriented axes.2–250mm. Source dimensions, format and live source preview; explicit **millimeter confirmation** because STL has no unit metadata. Select Z/Y/−Z up before attachment; changing axis clears the asset and explicitly requests reattachment. XY scales proportionally to chosen footprint, Z independently to engraving depth. Rotate/center/place/replace/remove/reset change final exported geometry.

The importer supports **one closed outward-wound convex broad-flat-bottom solid** only: complete bytes/facets, finite coordinates, nondegenerate triangles, welded edge incidence, winding, positive volume, connectedness, triangle intersections, convexity and support are checked. Concave/hollow/open/nonmanifold/disconnected/overhanging/too-complex inputs fail with guidance; **no convex-hull replacement, hidden concavity loss or claimed repair**. Exact verified mesh triangles become the Boolean engraving cutter. Unsupported geometry errors are recoverable and disable export.

## Portable designs

Six local named designs, undo/redo and JSON save/open. Bounded normalized PNG or verified mesh payloads restore assets; missing image data explicitly requests reattachment. JSON2MB maximum and validated fields, transforms and assets. Browser-storage errors recommend JSON download. No input files are written to the repository. Preview colors are visual only and never presented as STL color data.

## Print / assemble / calibrate

Read [PRINTING.txt](PRINTING.txt). PLA/PETG, .16–.20mm layers, three perimeters, no supports intended; inspect slicer. Use individual parts for smaller beds. Snip all sixteen accessible runners, trim nubs away from interfaces. Print arm/body calibration pair first. Insert body upward from below arm: shoulder meets underside; tip stops.05mm below top. Bond **one fixed joint** and cure.

Supply **two braided soft cords**, selected OD1.5–2.5mm, approximately700mm each, an external horizontal anchor and filament-compatible adhesive. Tie each upper cord to the anchor at chosen eye spacing, thread through its arm bore and matching toggle, and tie a stopper knot **larger than the bore** below it. Check knot retention manually. No printed anchor, magnets, bearings or fasteners; no hardware-free motion claim.

Alternating gentle toggle pulls may tilt the body and generate contact at opposite bore rims. The displayed first-contact angle solves `cordOD/cos(theta) + armThickness*tan(theta) = boreDiameter`. This is a geometric contact envelope, **not a friction coefficient, self-lock, force or guaranteed-climbing calculation**. Actual cord texture/stretch, print material and layer finish determine behavior. Print a crossarm with the actual cord and calibrate; do not lubricate or apply heavy loads. Small parts and cords require adult supervision and careful storage.

## Validation and limitations

`npm test` independently parses binary STL bytes: correct count/length, finite coordinates, positive-area faces, stored normals consistent with winding,1e−5mm welded edges (two opposite-directed faces), per-component positive volume and expected mm bounds. Every part/card tested across all presets/profiles, all field endpoints, combined minima/maxima and image/STL-derived models. Boolean intersections test all printed assembled pairs, upward insertion path, shoulder/tongue seat, straight cords, actual cord solids±3° around calculated contact, separate layout parts and sixteen safe snips releasing four parts plus carrier. Upper print sections stay within bed footprint.

Browser tests run against production output at the real prefix, use real PNG/JPEG/ASCII/binary file pickers, save actual STL/ZIP downloads and independently validate them. They compare default/import/threshold/depth/scale/rotation/placement outputs, exact preview fingerprint and portable JSON regeneration. Tests cover replace/remove/reset, malformed/truncated/nonmanifold/concave/excessive/empty files, unsafe transforms, presets, text/icons/SVG holes, undo/redo, named/JSON round trips, worker failure/recovery, desktop rail, saved dark theme/focus/collapse and320/390px phone upload/download/orbit/pinch/no overflow. Reports/screenshots stored beside this README.

**No physical printing, assembly, knot retention, friction, durability or climbing tests have been performed.** Computational fit and rim-contact checks do not establish those properties. Adhesive and knots, not an invented snap mechanism, provide fixed-seat/cord retention. Calibrate printer/material/cord before relying on the interaction.
