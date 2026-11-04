# Wheatstone & Null

A local React/Vite maker studio for a genuine **three-part flat-pack slide-wire bridge jig**. Snip twelve runners from a connected card, seat and bond two eyelet gates into a ruler deck, then thread an external fine resistance wire. The printed assembly locates a wire for a handheld null-probe experiment; it is not a printed circuit or a resistance meter. This differs from earlier tray puzzles, optical screens and linkage mechanisms: its functional interfaces are paired upright gate sockets, coaxial wire eyes and a fractional contact-position ruler.

## Actual reference evidence

Local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles; 15.20 × 15.20 × 43.10 mm; three edge-connected components) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles; 7.98 × 9.24 × 8 mm; one component). MX sockets and woven links are unsuitable for this sheet assembly. Neither local reference tree was modified.

The selected public reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source project](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. License text is in `REFERENCE-LICENSE.txt`. The actual STL was downloaded and parsed, not inferred from a listing image.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`
- Binary STL, 30,616 triangles, bounds −0.01…179.81 / −0.01…178.01 / 0…3.19 mm, dimensions **179.82 × 178.02 × 3.19 mm**; millimeters assumed, since STL has no unit metadata.
- 27 edge-adjacent groups: two substantial groups and 25 two-triangle artifacts. The overall source is **not manifold**. Inspection is not a repair claim; source triangles never become output triangles.
- Actual horizontal cross-sections at Z=.10, .215 and 1.59 mm establish the sheet/carrier structure, **1.60 mm sheet**, **4.50 × 1.70 mm rectangular sockets** and **.21–.22 mm low runners**. See `reference-analysis.json`, reproducible `reference-analysis.py` and `evidence/reference-sections.png`.
- Original reconstruction: detachable low-runner card, paired rectangular sockets and shoulder-seated sheet gates. The new **proposed** tongue width is 4.50 mm, using the measured socket's long dimension as a design datum—not claiming the original tongue was 4.50 mm. New sockets are `(4.50 + C) × (S + C)`, sheet S=2–3 mm, total surplus C=.10–.35 mm. The .10 mm lower preset reflects the measured source's sheet-to-slot surplus, not a universal fit. Runners are deliberately stronger at .4–.6 mm. Wire eyes, ruler, deck silhouettes and all solids are new.

No raw third-party STL, cat outlines, source clips or private input files are redistributed. Synthetic samples only.

## Studio and local workflows

Reference-inspired 374 px left control panel/right viewer on desktop; preview-first stacked phone layout; locally bundled Fredoka/Rubik fonts; saved light/dark theme; tactile controls, labelled collapsible sections, numeric/slider pairs, three real mesh-thumbnail presets and three deck silhouettes. Touch orbit/pinch, fit/zoom, assembled/exploded/card/clean-parts/isolated views and a see-through deck. Only gate lift/explosion is preview positioning; exports are bed-flat printable parts.

Undo/redo, six named local saves, portable JSON save/open, text marks (8 characters), searchable bundled icons, local SVG/PNG/JPEG and ASCII/binary STL. JSON includes bounded image/mesh payloads. A missing payload requests reattachment and disables export; no fake restoration.

### Image → actual geometry

PNG/JPEG decode only after checking header dimensions, ≤2 MB, ≤12 megapixels and ≤6,000 px per side. Normalize to ≤500 px, then fit/crop to a **20×20** luminance grid. Contain/cover, crop offsets ±25%, light/dark background, threshold 1–254 or grayscale height-map mode are explicit. SVG is validated/sanitized, rasterized locally, and follows the same bounded pipeline; this is not exact vector tracing.

A closed sampled height-field becomes a Manifold Boolean subtraction on a protected apron at Y=−13 mm. White/transparent regions—including holes—have zero cut depth. Checkerboard shows actual removed background, alongside the source image. Engraving .4–.6 mm, footprint 4–7 mm, rotation ±180°, X ±1.5 / Y ±2 mm, all vertices within a 6.5 mm radius. At least 1.4 mm continuous backing is required. Raised marks are explicitly unsupported for this flat-sheet kit. This is **2D-to-relief**, not reconstruction of a full 3D object from one photograph.

### STL → actual geometry

Binary and ASCII STL content/length validation, ≤2 MB / 1,500 triangles, 0.2–250 mm per axis. Finite coordinates, nondegenerate faces, welded opposite directed edge incidence, positive volume, one closed component, convexity and supported flat-bottom geometry are checked. Unsupported open, disconnected, concave, inward, nonmanifold and overhanging inputs are rejected with recoverable errors; no convex-hull replacement or pretend repair.

Choose Z-up/Y-up/X-up and explicitly confirm **millimeters**. Source dimensions and a source 3D preview remain visible. Physical XY footprint is a uniform XY scale (4–7 mm maximum extent), Z depth scales separately (.4–.6 mm); then rotate, center and place. The exact imported solid is Boolean-subtracted into the deck apron. Imports are not merely displayed/re-exported; size, position, rotation and shape measurably change the exported deck. Remove/replace/reset returns to built-in geometry. All processing stays inside the browser; no API, upload, external service or CDN is used.

## Supported parameters / mm

| Parameter | Range |
| --- | --- |
| Card width × height | 150–220 × 115–180 |
| Gate-center wire gauge span | 65–100 |
| Gate height above shoulder | 12–20 |
| Sheet thickness | 2–3 |
| Socket total surplus | .10–.35 |
| Part spacing | 3–5 |
| Tab width / thickness | .8–1.2 / .4–.6 |
| Tongue width / depth | 4.50 / sheet thickness |
| Wire eye diameter | 1.80 |

Impossible card packing is rejected rather than silently scaled. UI shows final export X/Y/Z in mm. Some independent in-range combinations can require a larger card. The default connected card is 180 × 140 × 2.4 mm; all parts and runners begin at Z=0. No overlapping loose pieces masquerade as a connected card.

## Printing / assembly / external parts

Print one card **or** three clean parts, 100% mm scale, flat Z=0, .4 mm nozzle, .16–.20 mm layers, PLA/PETG, three walls. No supports intended. Snip twelve low runners about 1.8 mm outside parts and trim flush. Seat the gates vertically, bond at shoulders and let cure. Tongues end flush under the deck; the gates are loose slip fits, **not captive or press-fit**. Print one gate/deck for calibration; increase clearance .05 mm if binding. Do not tension unbonded gates.

External components: uniform fine resistance wire ≤.5 mm diameter, wire span plus ≥20 mm on each end, clips/tape, handheld metal probe, known/unknown resistors, momentary switch, current-limited ≤1.5 V source, and high-impedance voltmeter/null detector. The printed eyes are insulating locators, not electrical contacts. Electrical endpoints are the actual clips placed just inside gate faces, not outside plastic edges. Keep slack outside and tape gently. Read numbered `ASSEMBLY.txt` included in ZIP for wiring, orientation and equation. Power disconnected while wiring; no mains or high-current supply.

At null, for known resistance from A to midpoint and unknown from midpoint to B: `Rx/Rknown = (L−x)/x`, with x measured from electrical endpoint A along a uniform wire. Twenty engraved intervals span the inner gate faces, nominal length `span − sheet`. Actual clip contact placement still determines the electrical endpoints. Engraved fractions are nominal geometry, not a calibrated instrument. Contact resistance, nonuniform wire, heating and short spans limit accuracy. **Physical printing, adhesive strength, wire tension, electrical operation and accuracy have not been tested.**

## Engine / exports / verification

React, Vite, Three.js/OrbitControls, locally bundled Manifold WASM in a module Worker, fflate ZIP, Fontsource fonts. Shared pure geometry and binary-STL serialization serve preview/export/Node tests. Debounced edits, generation IDs and exact state keys reject stale worker results; invalid edits disable every export, even when a last-good preview remains visible. Every build checks finite, nondegenerate, closed, outward-wound solids. Heavy operations stay in the Worker.

Per-part binary STL buttons; connected-card STL; clean-parts print plate; Everything ZIP with all four STLs, portable JSON and numbered instructions. STL carries neither colour nor units; ZIP is not mislabeled 3MF.

```sh
npm install
npm test                         # independent STL and mechanical checks
npm run predeploy                # production Vite build
python3 serve-production.py      # actual production prefix on port 5887
node browser-test.cjs            # real file picks + downloaded STL validation
node studio-test.cjs             # presets, marks, state, ZIP, worker failure
node extra-validation.mjs        # every preset with each import + ring hole probes
node mobile-layout.cjs           # 320/390 px, all tabs/expanded guide/export
```

`geometry-validation.json` records default, presets, independent extrema, joint min/max, image and both STL paths, and mixed geometry corners. Tests independently verify float32 binary STL length/normals/winding, welded edge incidence (1e−5 mm), positive volume **per connected component**, expected bounds and part counts. Solid-kernel tests simulate twelve tab cuts (one carrier + three intact parts), support-free cross-sections, disjoint flat/assembled parts, eighteen vertical gate-insertion positions, four unobstructed sockets, flush tongues and a clear coaxial wire path. Browser tests compare actual downloads with preview signatures and portable JSON regeneration, reject malformed/empty/unsupported input, test crop/threshold/depth/placement, per-part/ZIP output, keyboard focus/theme, undo/redo, local save/load, mobile uploads, real touch orbit/pinch and worker failure recovery. Reports/screenshots are saved beside the app. These computational checks do not prove printed fit or electrical operation.

The initial repeated tick/line Boolean junction produced degenerate serialized triangles. The redundant connecting line was removed; independent recessed tick bars preserve the ruler and all manifold/export checks were rerun. No degenerate triangles were silently dropped.
