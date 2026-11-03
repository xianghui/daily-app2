# Ackermann & Turn

A reference-grounded **five-part flat-pack steering teaching kit**. Snip a real connected carrier card, mount two mirrored wheel-angle paddles on a fixed deck, and connect their rearward arms with a fixed-length tie rod. Turning the left paddle drives the right by a smaller angle. These are angle paddles, **not rolling wheels or a vehicle**.

## Run and build

Node 22.12+ and npm. `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261103-14/`. Per-app `deploy` is installed as requested; the public combined site uses the parent monorepo's root deploy flow, not a standalone app deployment.

## Actual STL reference and redesign

Mike Kasberg's **White Cat Kit Card**, Printables 865769, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**; license and upstream README are included. A fresh public STL was downloaded and parsed before the final geometry was chosen. No private or third-party raw STL is bundled.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- Binary STL: 30,616 triangles; 179.820 × 178.020 × 3.190 mm assumed units. STL has no unit metadata.
- 27 edge-adjacent components, including defects/nonwatertight surfaces. It is a **design reference, not an automatically repaired printable source**.
- Measured Z sections at 0.10, 0.50 and 1.59 mm establish 1.60 mm sheet, 4.50 × 1.700012 mm sockets and low runner planes at 0.21/0.22 mm. See `reference-measurements.json`, `reference-analysis.json`, `reference-measure.py`, and `evidence/reference-sections.png`.
- Preserve the default 1.60 mm sheet and 4.50 × 1.70 mm fixed-sign socket. The 4.40 mm tongue, total allowance 0.10–0.25 mm, 0.4–0.6 mm runners and all steering dimensions are **proposed redesigns**, not measured source fits.
- Original CSG reconstruction: deck, two handed knuckle/paddles, tie rod, upright sign and a five-bay carrier. No cat artwork/source solids are reused. The new interaction is differential four-bar steering, not a drawing, rolling-disc or decorative reskin.

Local kit-card projects contained no source STL. The local keycap clicker template and diamond fabric link were actually parsed and rejected as unsuitable sheet-kit references; dimensions/hashes are recorded. Reference trees remain read-only.

The read-only visual reference is `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`; README, styles, App, Viewer, image conversion, STL parser, worker and export modules were inspected. Concrete patterns used: 374 px scrollable left rail, sticky compact branding, collapsible sections, paired number/range controls, tactile lower-shadow buttons, lavender desk/coral selections, local fonts, saved dark theme, checkerboard conversion, separate source preview, worker generation and current-state export gating. The lab's existing local import/persistence shell is reused; steering geometry and assembly checks are new.

## Parameters (all lengths mm)

| Parameter | Supported range | Default |
|---|---:|---:|
| Card width / height | 130–160 / 235–280 | 140 / 250 |
| Fixed pivot track D | 48–64 | 60 |
| Rearward arm length L | 18–24 | 22 |
| Inward arm offset s | 6–10 | 8 |
| Sheet | 1.6–2.4 | 1.6 |
| Joint bore | 3.2–3.6 | 3.3 |
| Total sign socket allowance | .10–.25 | .10 |
| Part spacing | 3–5 | 3.5 |
| Runner width / thickness | .8–1.2 / .4–.6 | 1 / .6 |

Three real presets have generated model thumbnails: Classic trapezoid, Compact turn and Strong differential. The latter uses a 260 mm-tall card: use individual pieces on smaller beds. Rounded, square and clipped deck outlines change exported solids. Oversized part layouts are blocked rather than allowed outside the declared card envelope. Some combinations need a taller card; ranges are not a promise every arbitrary card/spacing combination fits.

The tie rod's bore spacing is **T = D − 2s**. Two circle intersections solve the driven angle on the intended non-toggle branch. At zero steer the extended steering-arm axes intersect at nominal wheelbase **D×L/(2s)**. A trapezoid only approximates the ideal Ackermann relation through its stroke; this is not exact road-wheel alignment. The 0–22° left-paddle sweep control is a preview-only physical pose, not geometry customization or a printed hard stop. Track, arm, offset and bore controls alter the real exported mechanism.

## Local image and mesh import

Use the file picker on desktop/phone or drop one file in Import. Synthetic downloadable examples exercise both paths without private uploads.

**PNG/JPEG:** validate file size/content and header dimensions before decoding; ≤2 MB, ≤12 MP, ≤6,000 px side. Normalize to a portable PNG ≤500 px side. Fit/cover, crop shift ±25%, light/transparent removal or dark-background inversion, threshold 1–254 and grayscale relief all affect geometry. The final 20×20 luminance grid becomes a triangulated height solid and is Boolean-subtracted from the deck apron at Y=−34 mm. Neighboring samples interpolate linearly: this is bounded **2D-to-relief conversion**, not full 3D reconstruction or exact outline tracing. Bright holes retain full sheet material over a continuous backing. Checkerboard shows removed areas; source and cutout are both visible. Simple SVG is locally rasterized through the same method, preserving sampled holes. SVG scripts, external resources, filters and non-simple elements are rejected (≤2,000 elements).

Text up to eight characters and six searchable bundled original vector icons use the same local engraving path. Only **engraved** marks are offered, intentionally, to retain a flat printable sheet. Depth .4–.6 mm, footprint 4–7 mm, rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm; the final transformed engraving must remain inside a 6.5 mm safe radius. At least 1 mm backing remains; no import cuts a pivot, sign socket or linkage web.

**ASCII/binary STL:** ≤2 MB, ≤1,500 complete triangles, one connected closed outward-wound positive-volume solid, each dimension .2–250 mm. Checks include finite coordinates, weld resolution 0.00001 mm, nondegenerate faces, opposite-directed double edge incidence, triangle self-intersection, convexity and broad flat bed contact. Concave, hollow, disconnected, open, nonmanifold, self-intersecting or overhanging meshes are **explicitly rejected**, not repaired or converted into convex hulls. The supported contract is a convex flat-bottom engraving cutter, not an arbitrary sculptural base importer. Its actual mesh is preserved in the Boolean operation.

Choose Z up, Y up or upside down before attaching; changing the axis requests reattachment. Source dimensions, orientation, triangle count and ASCII/binary format are shown. **Confirm millimeter units** explicitly. XY scales proportionally to requested footprint; Z independently scales to engraving depth, with factors displayed. Rotation, placement and reset affect the exact exported subtraction. Replace/remove/reset are recoverable. Personal files never upload, enter the repository or contact an external service. Dependencies, WASM, fonts and icons are local.

## Studio and export

Three.js OrbitControls support drag/touch orbit and pinch/scroll zoom, fit, top/front and explicit zoom buttons. Assembled, exploded, connected-card, de-tabbed print plate and each isolated part share the same generated parts. The sign can be see-through. Hardware is explicitly external and not falsely shown as included plastic. View colours do not imply STL colour.

Manifold WASM runs in a Web Worker with 100 ms debounce, generation IDs and exact parameter/source keys. Geometry errors and invalid files disable **every** export rather than exporting stale last-good geometry. The preview may retain a clearly labelled last valid result while fixing an error. Binary STL and current preview share the same final result; UI fingerprint is compared to actual downloads in tests.

Per-part STL includes connected-card, signature-body, left-knuckle, right-knuckle, tie-rod and scale-sign. De-tabbed plate contains five distinct closed solids; the card is one connected solid with 20 real bed-contact runners. Everything ZIP contains all six STLs, portable design JSON and numbered print/assembly guidance. No mislabeled 3MF. Undo/redo, six named local designs, and versioned JSON save/open include bounded image/mesh payloads; missing image payloads require reattachment, never pretend restoration.

## Hardware, printing and assembly

Required: **2 × M3×16 bolts; 2 × M3×10 bolts; 4 × M3 nuts; 6 × .50 mm-thick M3 washers; 2 × 8.00 mm-tall M3 spacers; ≥6 mm deck risers and fixed-sign adhesive.** Nuts ≤2.4 mm tall; heads/washers/spacers ≤7 mm diameter. No hidden rolling tyres, axles or bearings are required. Hardware-free joints are not offered because the thin sheets need reliably removable retainers.

Print bed-flat in PLA/PETG, .16–.20 mm layers, .4 mm nozzle, ≥3 walls. No supports intended. Default card needs 140 × 250 mm bed area; use individual pieces when necessary. Calibrate pivot bores and a sign/socket joint on your printer first; fit is not universal. Do not rescale globally in a slicer to adjust fit.

1. Snip 20 runners outside the pieces, file stubs, preserve the sign tongue and arm webs.
2. Bond the sign into the rear deck socket; let cure. Elevate the deck on external risers.
3. At each fixed pivot insert M3×16 **down** through .50 mm washer → wheel-paddle bore → 8 mm spacer → deck bore → underside nut. Start both paddles parallel, arms pointing inward/backward.
4. At each tie-rod end insert M3×10 **down** through .50 mm washer → tie rod → .50 mm washer → knuckle-arm bore → underside nut. Hold the nut with a small wrench. Keep all joints free to rotate; do not glue or squeeze them.
5. Check bolt-end/deck clearance ≥.5 mm; use the specified hardware dimensions. Gently steer the left paddle through the marked 0–22° sector only. No hard stops or calibrated forces. Remove fasteners to disassemble.

Full numbered instructions are also in-app and inside every ZIP. Adult craft kit with small parts; not load-bearing and not for road use.

## Validation and limitations

Reproducible computational checks and reports are in `VALIDATION.md`. They distinguish mesh validity, actual linkage/hardware clearance, card release and browser behaviour. **No physical print, assembly, friction, wear, loosening or steering accuracy tests have been performed.** Computational checks are not a claim of universal FDM fit.

Dependencies: React/Vite, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), Fontsource Fredoka/Rubik (SIL OFL); Playwright is a development-only browser test dependency. Source-reference CC BY 4.0 license/attribution are bundled separately; synthetic samples and the small vector marks are original.
