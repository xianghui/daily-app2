# Tetra & Aperture

A local React/Vite maker studio for a **four-face mitred tetrahedron kit card**. Snip 16 real runners, arrange the four panels with broad faces outside, tape temporarily and glue the six seams. Three parametric apertures let an external cool flashlight explore light paths; the solid fourth face carries personalized Boolean-cut art. This is a desk sculpture/geometry kit, not a candle holder, sealed container or load-bearing product.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Node 22.12+ recommended. Production base: `/daily-app2/20261103-18/`. The per-app deploy script exists as requested, but the public site is published through the repository root `deploy/` flow.

## Actual reference, not a template claim

Before construction, local collections were searched for real STL files. Keycap Studio's actual 944-triangle switch STL (3 components, 15.20 × 15.20 × 43.10 mm) and Fidget Fabric's 5,940-triangle link (one component, 7.98 × 9.24 × 8.00 mm) were parsed. Neither is suitable sheet-kit construction. Local kit-card project instructions were inspected; no suitable existing kit reference STL was found there.

The selected **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source](https://github.com/mkasberg/white-cat-kit-card), is CC BY 4.0. Its actual public binary STL was downloaded outside this repository and independently parsed and sectioned for this run. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.

Measured bounds: **179.820 × 178.020 × 3.190 mm**, assumed millimeters, 30,616 triangles, 27 edge-adjacent components (including degenerate remnants). It is not watertight. Source Z planes show **1.60 mm sheet**, four **4.50 × 1.700 mm sockets**, and **0.21–0.22 mm low runners**. See `reference-measurements.json`, `reference-measure.py` and `evidence/reference-sections.png` for actual mesh evidence; source defects are not repaired or hidden.

This is an original parametric reconstruction of the sheet/card/low-runner construction, not the source spacecraft or a re-export. Compared with earlier tetrahedral ray/frame or cord-laced kits in the gallery, this build introduces solid tapered face sectors, calculated dihedral mitres, seam setbacks and three actual through-windows; it does not reuse their struts, sockets, lacing eyes or assembly geometry. We retain default 1.6 mm sheet thickness, separate clean parts and a connected carrier. **Source sockets and artistic outlines are not reused.** Proposed .4–.6 mm runners replace the source's fragile low runners; new mitred tetrahedral interfaces replace its sockets. No raw third-party mesh is redistributed. Reference license and upstream README are included with attribution.

The visual/interaction reference was read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, imageTrace, STL and export modules. Concrete adaptations include a 374 px left rail, tactile raised/selected buttons, grouped millimeter sliders/numbers, source-versus-cutout checkerboard, imported-model units/orientation, isolated/assembled/exploded/plate views, fit/orbit/zoom, saved theme, worker-owned WASM and current-result export gates. It supplied no Git history, dependencies or switch sockets. Reusable local daily-studio infrastructure was adapted; all four-panel geometry and assembly checks are new.

## Parametric construction and fits (all mm)

| Control | Range | Meaning |
| --- | --- | --- |
| Card width / height | 100–150 / 200–300 | Exact external carrier envelope; too-small combinations are blocked |
| Nominal tetrahedron edge | 40–56 | Common-vertex assembly datum; printed faces have small seam setbacks |
| Window circumradius | 4–6 | Real circular, hexagonal or triangular cutouts in three faces |
| Sheet | 1.6–2.4 | Normal panel thickness, taper recalculated |
| Part spacing | 3–5 | Clear space inside separate carrier bays |
| Runner width / height | .8–1.2 / .4–.6 | Bed-aligned breakaway union geometry |
| Total seam setback | .10–.25 | Each mating face shrinks in its plane by half this amount |

For nominal edge E, triangle inradius is E√3/6; assembled nominal altitude E√(2/3). Internal dihedral is acos(1/3) = 70.528779°. The inner face is inset **√2 × sheet** beyond the outer-face setback. Linear triangle extrusion with a smaller top makes the actual mitres. Each face is one closed solid. Three central apertures are Boolean-subtracted; the signature face stays closed except for shallow surface art. Inner walls must be at least 1.6 mm and art backing at least 1 mm.

The seam control is NOT measured source clearance and NOT the direct 3D seam distance. No press-fit, locating pin, snap capture or universal printer fit is claimed. Tape locates panels during dry-fit/curing; suitable adhesive retains them. Assembly positions use real inward-facing orthonormal face bases, not arbitrary visual overlap. Exploded separation is illustrative. Final parts and insertion trajectories are independently checked for collisions.

## Local imports and personalization

- **PNG/JPEG:** actual headers checked before decoding, ≤2 MB, ≤12 MP, ≤6,000 px side. Normalize locally to ≤500 px, then sample a **20 × 20** fit/crop grid. Controls: crop mode/shift, dark/light background removal, threshold or grayscale relief, .4–.6 mm depth, physical footprint, rotation and XY placement. Transparent pixels are composited onto the selected background. The checkerboard shows the actual removed-background height grid, beside the original image.
- **Conversion:** pixel luminance becomes thresholded 0/depth or grayscale depth. Each grid cell is triangulated as a continuous height field with a closed pedestal; this is Boolean-subtracted from the exterior face. Bright internal holes remain unengraved solid material, not filled-in artwork. This is sampled **2D-to-relief**, not exact vector tracing and not full 3D reconstruction from a photo. Engraved art is outer-face/bed-facing and can require short bridges up to the chosen 7 mm artwork footprint. Inspect slicer layers.
- **SVG:** bounded simple filled paths/shapes (≤2,000 elements, no references/scripts/effects/external resources), rasterized locally, then processed by the same grid. Bundled searchable icons use simple local SVGs; text uses bundled Rubik rasterization. All change printable geometry.
- **ASCII/binary STL:** ≤2 MB, ≤1,500 triangles, each axis .2–250 mm. Actual triangles are read, welded at 1e-5 mm for topology checks, checked for finite coordinates, nondegenerate triangles, one connected component, opposite edge incidence, positive volume and self-intersections. This bounded editor supports **one convex, broad-flat-bottom solid without overhanging XY projections**. Concave, hollow, open, self-intersecting, multiple-component, inward or unsupported models are rejected explicitly. No convex hull substitutes the mesh; the hull used for support classification is not exported or substituted. No repair is claimed.
- Choose Z/Y/−Z up before attaching; changing orientation requests reattachment. Inspect actual source mesh/dimensions and explicitly confirm mm (STL has no unit metadata). Proportional XY scaling fits a 4–7 mm footprint; independent Z scales to .4–.6 mm engraving depth. Scale factors are shown. The .02 mm cutting lead-in is included in Z scaling so the actual exposed recess equals the selected depth. Rotation ±180°, X ±1.5 mm, Y ±2 mm, with a circular 6.5 mm keep-in guard away from mitres. The exact transformed source mesh cuts the signature panel. This is integration as a real component surface recess, not unchanged re-export.
- Replace/remove/reset workflows restore built-in geometry. Synthetic samples cover PNG, JPEG, SVG and both STL encodings. No personal files are bundled.

All files stay in-browser. No APIs, keys, uploads, telemetry or CDNs. Fonts (Fredoka/Rubik, OFL), Manifold WASM (Apache 2.0), Three.js (MIT), fflate (MIT) and React/Vite dependencies are bundled locally.

## Persistence, performance and exports

Heavy CSG and STL parsing run in a Web Worker, 100 ms debounced, bounded grid/resolution/triangles. Request IDs reject stale messages; exports require the exact current parameter/source/transform key. Bad inputs and worker failures block export even if a last-good preview remains. Current mesh fingerprint is exposed in the stage for validation.

Three real presets have generated 3D thumbnails. Bounded variations, 35-step undo/redo, six named local saves and versioned JSON round trips include bounded mesh triangles or normalized image payloads. Missing image payloads explicitly require reattachment; JSON restores revalidate meshes. Keep downloaded JSON backups; local storage can be cleared by the browser.

Prominent buttons export current binary **connected-card STL**, each clean part, de-tabbed plate, and Everything ZIP (five STLs, design JSON, numbered instructions and current fit calculations). Export is bed-flat irrespective of assembled/exploded preview. STL does not store preview colours. No 3MF claim.

## Printing and assembly

Default card is 110 × 240 × 1.6 mm; use separate panels for a smaller bed. Outer broad face DOWN, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls are untested FDM starting points. No supports intended except inspect small bed-facing engraving bridges. Print a small pair first to calibrate seam setback, tape fixture and adhesive with your material/printer. Snip 16 runners outside the edges and file them flush without damaging mitres.

Place window-c bottom broad-face-down. Tape signature-face and window-a along two bottom edges with exterior removable tape. Fold up; tape their common edge at the tetrahedral angle. Bring window-b from outside into the remaining opening, tape all edges and check datums. Apply appropriate adhesive sparingly along accessible seams through windows or from outside. Let cure before removing tape. No press-fit retention or strength guarantee. See app/ZIP for numbered guide.

Use only an external cool flashlight. **Never put flame/hot light sources inside.** Not food-safe, not a sealed vessel, not load-rated or a child-safe toy.

## Verification and limits

`npm test`: 40 cases, including all presets, silhouettes, individual field endpoints, mixed fit corners, all-min/max, threshold/grayscale and both imported STL encodings/transforms. Every individual STL, connected card and float32-translated loose plate is independently parsed for exact length, finite coordinates, normals/winding, nondegenerate triangles, two opposite faces per welded edge and positive volume per connected component. Also: exact dimensions, card envelope, no loose/assembled component overlap, 164 outside-normal insertion positions per case, true tab cutting releases carrier + four intact panels, tapered support footprint (engraving bridge zone excepted), backing and wall bounds.

Production browser tests upload PNG/JPEG/ASCII/binary STL via file picker, save actual STL/ZIP/JSON downloads, compare preview fingerprints and regenerate the exact JSON in Node, then apply the same mesh/assembly checks. Additional tests cover rejection/recovery, thresholds/pixels/scales/placement, holes, orientation, text/icons/SVG, drag/drop, all presets/views, saved designs, undo/redo, worker abort/recovery, stale result gating, desktop layout/theme/focus and 320/390 px touch/mobile overflow and export reachability. Reports/scripts/screenshots are beside the app. `VALIDATION.md` records outcomes.

**No physical print, adhesive, optical or handling test was performed.** Geometry checks do not prove print quality, fit, strength or optical appearance.
