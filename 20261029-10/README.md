# Nudge & Echo

A browser-based **six-part paired-cord collision-pendulum kit-card generator**. Snip a portal, two feet and three pierced bobs from a genuinely connected breakaway card. Glue the portal into its calibrated foot seats and tie six equal-length soft cords. Gently draw the left bob outward and release for a short collision sequence. Printed rims dissipate energy; this is not an ideal Newton's cradle, tuned instrument or sustained-motion claim.

## Run / build

Node 22.12+; `npm install`, `npm run dev`. `npm run predeploy` builds a static Vite app. Its base is `/daily-app2/20261029-10/`. The app's required `deploy` script targets its own `dist`, but public monorepo publication uses the **parent repository's** root deployment flow instead.

No API, accounts, CDN dependencies or file uploads. React/Vite, Three.js/OrbitControls, Manifold WASM and fflate are installed locally; Fredoka/Rubik fonts are bundled through Fontsource. The geometry kernel runs in a Web Worker. Generation is debounced, numbered and guarded against stale responses. Exports are disabled during imports, invalid edits, conversion, errors or worker failure. The visible last-good preview is never silently exported after a bad edit.

## Reference-first provenance

First inventoried local `.stl` files under `/Volumes/ExternalHD/3d_printing_apps/`: keycap/clicker socket templates, slider assemblies, interlocking fabric, spring ghost and passthrough geometry. Read keycap_generator2's README, studio styles, App/Viewer, worker and STL/export modules, and the fabric/spring/passthrough READMEs. These are mechanism-specific models, not a suitable sheet/carrier kit reference; no switch sockets or source meshes were copied into this kit.

**Selected construction reference:** [White Cat Kit Card, Mike Kasberg](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

- Actual binary STL inspected: `white-cat-kit-card_kit.stl`; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Source download URL is recorded in `reference-analysis.json`. Fresh download returned HTTP 403; this run inspected the hash-verified previously downloaded cache, not a listing image. Cached README/license corroborate provenance.
- 30,616 triangles; bounding dimensions **179.820 × 178.020 × 3.190 mm**. STL is unitless; source SCAD's sheet/frame dimensions corroborate millimeter interpretation.
- 27 edge-connected components: two substantial components (3,746 / 26,820 faces) and 25 two-face artifacts. **The source is not watertight** and was not repaired or passed off as this app's printable output.
- Actual sections at Z=0.10, 0.50 and 1.59 mm are in `evidence/reference-sections.png`. Measured sheet planes are 0 / 1.6 mm; carrier rail width measured along Y=100, Z=.5 is 1.600 mm; low bridge elevations include .21/.22 mm.
- Retained **1.6 mm sheet default**; deliberately enlarged carrier rails to **2.4 mm** and runners to **0.4–0.6 mm high × 0.8–1.4 mm wide**. Those are proposed printability choices, not source measurements. Total slot allowance .10–.35 mm is a new printer-dependent fit, not a copied source interface.
- Portal, paired cord bores, tongue seats, feet and collision bobs are **original parametric reconstruction**, not a cat silhouette reskin. The reference informs bed-flat sheet construction, a surrounding segmented carrier, accessible low tabs and removable slot-assembled parts. Raw STL/artwork is not redistributed. Attribution does not imply endorsement.

`reference-inspect.py` and `reference-measure.py` reproduce inspection using trimesh/numpy/matplotlib, with the raw reference kept outside this repository. `reference-analysis.json` separates measurements and redesign decisions.

The maker-studio UI follows the current read-only Keycap Studio reference: 374 px left scroll panel, compact sticky brand/theme header, paired numeric/range controls, soft selected pink, raised keycap controls, collapsible groups, checkerboard image cutout, transformed imported-source editor and right-side gradient viewer. On phones, preview / status / export precede stacked controls. Shared local studio/import/test infrastructure was adapted from the preceding app; the six-part model, assembly transforms and mechanical checks are new.

## Parameters — millimeters unless stated

| Parameter | Supported range |
|---|---|
| Card width / height | 210–240 / 180–220 |
| Portal width / height | 78–88 / 52–64 |
| Bob diameter | 12–16 |
| Tongue width | 5–6 |
| Cord bore diameter | 1.4–1.8 |
| Sheet thickness | 1.6–2.4 |
| Total slot clearance | .10–.35, start .20 and calibrate |
| Part spacing | 4–7 |
| Runner width / thickness | .8–1.4 / .4–.6 |
| Medallion dimples | 0–.4 |
| Outer-bob release pose | 0–16 degrees; preview only |

Three actual model-thumbnail presets: Rose Echo, Long Pendulums and Pocket Nudge. Rounded-clipped, chamfer and deep-clipped **foot outlines** change exported silhouettes; bobs remain circular for rim contact. Changing bob size/portal height changes the nominal free cord length. The UI reports the length **between hole centers**, not a cut-cord length; add tie allowance.

Mechanically incompatible combinations (too little release space) and cards too short/narrow for the selected parts/spacing are blocked, not clipped. At defaults the card is 220 × 200 mm. Larger cards may exceed your bed: use separate part downloads. Part thickness plus raised grip is the true Z envelope, displayed in the UI.

## Local image-to-model workflow

File picker and desktop drop accept **PNG/JPEG and simple SVG**. All files ≤2 MB, raster images ≤12 megapixels and ≤6,000 px per side, normalized to ≤500 px for portable storage. SVG allows simple local vector shapes only, up to 2,000 elements; scripts, external references, filters and unsupported markup are rejected. No external SVG content is fetched.

The image is fit or cropped to a **20 × 20** grid. Alpha composites over the chosen light/dark background; weighted luminance is thresholded or converted to grayscale height. The exact cutout/height grid is shown over a checkerboard. This is **2D-to-relief, not automatic full 3D reconstruction**. Holes remain unraised/unengraved regions above a continuous foot backing, not through-holes in the foot. Grid transitions are triangulated slopes, not exact vector tracing. Ring-hole probes verify the final boolean solid.

Controls: fit/cover, crop offsets ±25%, background light/dark, threshold 1–254, raised depth .4–3 mm, engraving .4–.6 mm. Geometry is a closed heightfield unioned/subtracted from the marked-foot medallion. Minimum backing remains .8 mm. Imported relief is bounded to its 6.5 mm radius safe zone away from the seat. Footprint 4–7 mm, Z rotation ±180°, X ±1.5 / Y ±2 mm; invalid placement blocks export. Text (8 characters) and six searchable bundled icons use this same real mesh route. Preview colour is not STL colour.

## Local STL-to-model workflow

Both **binary and ASCII STL** are parsed and checked in the worker. Select Z up, Y up (+90° X), or inverted Z **before attaching**. Source dimensions/format/triangle count and a source 3D preview are shown. Explicitly confirm millimeter interpretation; STL has no unit metadata. Changing up-axis requests reattachment rather than pretending a transform was applied to a missing original asset.

Contract: one outward-wound connected closed **convex, broad-flat-bottom, non-overhanging solid**, ≤1,500 triangles; each source axis .2–250 mm. Open/nonmanifold meshes, bad winding, degeneracies, self intersections, concavity/cavities/branches, inadequate bed contact, excessive dimensions and truncated data are rejected with guidance. No repair or convex-hull substitution is performed. A hull is used only to *validate* the flat bottom projection, never to replace imported geometry.

XY is proportionally scaled to a 4–7 mm footprint; Z independently to .6–3 mm height. The UI displays both scale factors. Rotation/placement and safe-zone validation then apply. The **actual source triangles** become a Manifold solid and boolean-union into the foot with .15 mm embed. This changes the foot/card exports while leaving all functional bores, bobs and seats intact. Replace/remove/reset and return-to-default routes work. Synthetic sample PNG/JPEG/SVG, ASCII wedge and binary gem are bundled, documented and CC0; no private source is committed.

## Assembly and limits

1. Print PLA/PETG bed-flat, marks up, .4 mm nozzle, .2 mm layers, three walls. No supports intended. Print a foot and portal first as a fit calibration pair. Inspect slicer paths.
2. Snip 24 low runners; trim residual nubs and elephant foot away from functional faces. Six separate parts remain plus one carrier. The snip test verifies cutter access without damaging parts.
3. Insert the portal vertically into both feet simultaneously. Tongues stop .15 mm inside the sheet; shoulders bear on foot tops. **Adhesive required**: the clearanced slots are not captive retention. Cure before tying cords.
4. Tie six equal-length .3–.5 mm soft nonstretch cords, two per bob. Knots must exceed bores. Paired attachment points are 4.4 mm apart. Set bob centers level, adjacent rims just touching, bottoms 5 mm above **foot tops** (sheet thickness + 5 mm above the desk). Actual knot lengths need manual adjustment.
5. Hand-align the swing plane and gently draw only the left outer bob outward, ≤16°. Release for a short collision sequence. Cords are not positive lateral guides; poor tying, yaw and out-of-plane swings reduce transfer. The preview is a rigid release pose with illustrative cord lines, **not a thread, impact, force or energy simulation**. No automatic collision animation is offered.

Small parts, cords, cutters and adhesive: adult desk craft, not a child toy. Computational assembly checks are **not** physical print, friction, impact, stability, strength, fatigue or durability testing. None of those physical tests has been performed.

## Views, saves and exports

Assembled, exploded, connected card, de-tabbed layout and each isolated part share the actual generated meshes. See-through portal explains fit; release angle / separation are preview-only. Exports always use undeformed bed-flat geometry. Orbit, zoom and fit work with mouse or touch.

Undo/redo, six local named designs and portable JSON retain bounded normalized image/mesh payloads. Missing image payload explicitly requests reattachment. Saved STL payloads are revalidated, not blindly trusted. A design JSON is limited to 2 MB.

Binary STL for the connected card and every part; **Everything ZIP** contains all seven STL selections plus numbered `ASSEMBLY.txt`. A connected card is not a print plate of loose pieces: Manifold unions actual runners to carrier and parts. No fake 3MF export. Dimensions/status refer to the selected bed-flat export, not assembled pose.

## Validation

- `npm test`: independent float32 STL parser; finite/nondegenerate triangles, normalized normals, consistent outward winding, positive volume per component, millimeter bounds and welded edge incidence (1e-5 mm tolerance), exactly two opposite directed incident faces per edge. Every edit is also preflighted in the worker.
- Manifold intersection tests: every assembled solid pair, complete 0–16° outward bob release sampled at representative positions, portal's 0–70 mm insertion path, shoulder/lateral stops, paired cord bores/drop paths, no flat part overlaps, card bounds, 24 snips and seven resulting components (six parts + carrier).
- Defaults, all presets, parameter extrema and mixed extrema, plus actual image/STL-derived models run through the same mesh/assembly checks. Invalid combinations are reported as explicit rejections.
- `node extra-validation.mjs`: unsupported concavity rejection; boolean-volume probes for a real ring hole/raised band; imported wedge shape integration.
- `node browser-validation.mjs`: real PNG/JPEG/SVG and ASCII/binary STL picker imports; changed thresholds/depth/crop/transforms; exact preview/export byte fingerprints and saved-state regeneration; actual downloads and ZIP contents; rejection/recovery; undo/redo, named/JSON asset round-trips; production worker failure; desktop and 320/390 px touch orbit/pinch, no overflow, saved dark theme and collapsible controls.
- `node production-preflight.mjs`: combined-gallery script compilation, previous-entry preservation, unique new entry, production asset paths and runtime checks. `variation-preflight.mjs` exercises bounded random variations.

Reports and screenshots are saved alongside source. These are computational/browser checks, **not physical printing**.

## Licenses

New generator code is original. Reference construction attribution and modifications are above (CC BY 4.0). Manifold Apache-2.0; Three.js/React/Vite/fflate and dependencies retain their own licenses. Fontsource Fredoka/Rubik fonts: SIL OFL. Synthetic fixtures: CC0. No third-party source STL is bundled.
