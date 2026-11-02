# Pento & Pack

A local-first **physical pentomino kit-card generator**, not a browser game. Generate a genuinely connected bed-flat carrier, twelve different five-cell tiles and one fitted tray. Clip the runners and lower the tiles into a 6×10, 5×12 or 4×15 rectangle. Every tray has a real, independently checked exact-cover solution. No hardware, glue, switches, server or API key.

## Run / build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Individual `deploy` is `gh-pages -d dist`, with `predeploy` exactly `npm run build`. Public monorepo publication uses the **root** deploy flow, not the individual deployment. Base path: `/daily-app2/20261102-14/`.

## Reference-first evidence

Local candidates were located and parsed before design selection: Keycap Studio's clicker template (944 triangles, three switch-specific parts) and Weave's diamond-link (5,940 triangles, one 8mm-tall interlocking link). Their read-only instructions show they are unsuitable references for a sheet kit. The actual downloaded reference selected instead is **Mike Kasberg's White Cat Kit Card / Printables 865769**, [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Its source LICENSE was retrieved and is included as `REFERENCE-LICENSE.txt`.

The STL was downloaded to temporary storage, parsed, hashed and sectioned before final geometry selection. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles, assumed millimeters (STL has no units), 179.820×178.020×3.190mm. It has 27 edge-adjacent components including degenerate paired artifacts; the source is **not watertight** and was not silently repaired. See `reference-measurements.json`, `reference-analysis.json`, `reference-measure.py` and actual cross-sections in `evidence/reference-sections.png`.

Measured source structure: main sheet Z=0–1.600mm; four 4.500×1.700012mm slots; subdivided carrier rails; low breakaway web planes around Z=.21/.22mm. This generator adapts the **sheet/carrier/low-web architecture**, not the cat artwork, wheel shapes or unrelated switch sockets. It reconstructs original solid geometry; no third-party raw mesh is redistributed. Measured 1.600mm sheet becomes the default. Proposed .4–.6mm bed-aligned runners deliberately differ from the source, improving modeling support but not claiming verified breakaway force. Source slot dimensions are recorded, not imposed as irrelevant puzzle fits.

The result is distinct from prior kit mechanisms: twelve non-equivalent free pentominoes, a 60-cell exact-cover packing and a new 4×3 tile-bay carrier with separate tray bay. Studio infrastructure (worker, local imports, editor, saving and STL checks) is adapted from earlier daily studios; physical geometry, packing, carrier layout, placement and assembly checks are original to this app. `solve-packing.py` enumerates free rotations/reflections and uses exact cover to generate `src/packing.js`. It does not require an online solver.

Read-only **Keycap Studio** visual files inspected: README, styles, App, Viewer, worker, export, imageTrace and STL modules. Concrete adopted patterns: 374px left scroll rail with sticky brand, paired range/numeric controls, collapsible sections, model thumbnails, tactile lower-shadow buttons, saved light/dark themes, checkerboard conversion, imported-source dimensions/orientation, current-result worker gating and preview-first phone layout. Reference code/assets/history/dependencies were not copied wholesale.

## Parameters (millimeters unless stated)

| Parameter | Range / behavior |
|---|---|
| Card envelope | Width280–340, height150–200; impossible combinations blocked |
| Cell pitch | 6–8; both tiles and pocket change |
| Packing | 6×10, 5×12, 4×15 cells; 60 nominal cells,12 distinct5-cell tiles |
| Tile/floor thickness | 1.6–2.4; continuous floor and all loose parts bed-aligned |
| Tile clearance | .20–.40 total neighbor gap; tile profile inset by half gap; pocket expands by half gap/side, leaving the same gap at outside edges |
| Rim | 3mm nominal wall, .8mm above seated tiles;14mm front access notch |
| Part spacing | 3–5 between parts and carrier rails |
| Runner width / thickness | .8–1.4 / .4–.6;52 accessible runners, four per part |
| Tray silhouette | Soft4mm corners, square or clipped4mm corners; no tile topology reskin |
| Art footprint / position | 4–7, X±1.5, Y±2 relative to apron center; all vertices must remain inside a6.5mm protected radius |
| Art rotation / depth | −180–180 degrees; .4–.6 depth with≥1mm backing |

The generator uses actual Manifold WASM CrossSection offsets, unions and subtractions, never overlapping-shell pseudo-unions or convex-hull replacement. Tiles retain their genuine concavities. The exact-cover diagram identifies one solution; all print previews and downloads use the same final mesh objects. Assembled/exploded/lift are rigid display transforms only; all exports stay in bed-flat print orientation. Tiles are intentionally loose, not captured.

## Personalization and local imports

Text (up to8 characters), six searchable bundled SVG marks, and **PNG/JPEG/simple SVG** become actual recessed geometry in the protected front apron. Both source image and exact20×20 cutout/height grid are displayed on a checkerboard. Select light/dark background, threshold1–254 or continuous grayscale relief, contain/cover crop, X/Y crop shift±25%, physical footprint, .4–.6mm depth, rotation and placement. Reset, replace and remove work without reloading.

**Conversion method:** validate image header and pixel limits before decoding, normalize to at most500px per side, composite transparent background against white or black, sample luminance at20×20 points and use either threshold heights or depth×(1−luminance/255). A triangulated closed heightfield is Boolean-subtracted from the apron. Bright holes keep backing and dark pixels engrave; this is bounded sampled **2D-to-relief**, not exact outline tracing or automatic full3D reconstruction of a photo. SVG is locally rasterized to256px after a simple-shape-only validation; holes follow its fill rules. No script, embedded image, external reference, filter, font or network fetch is allowed from SVG.

**STL workflow:** ASCII and binary STL are parsed locally in the worker. Source dimensions, triangle count, format and explicit unit confirmation are shown. Select Z up, Y up or −Z up before attaching (axis changes request reattachment). Confirm millimeters because STL has no unit metadata. Original source preview, proportional XY scaling to the requested4–7mm footprint, independent Z fitting to .4–.6mm engraving depth, rotation and placement are provided. The exact original mesh is a Boolean subtraction cutter, so source shape and transforms change exported geometry. It is not unchanged re-export or texture decoration.

STL contract is deliberately bounded: **one outward-oriented, closed, convex, broad-flat-bottom solid**, .2–250mm per axis, at most1,500 triangles. Concave/hollow/disconnected/open/nonmanifold/self-intersecting/overhanging or slender geometry is explicitly rejected with actionable guidance; no repair or hull approximation. This input limitation does not affect the generated concave pentominoes. Tile pocket and printable1mm apron backing remain protected.

All inputs≤2MB; PNG/JPEG≤12MP, ≤6,000px/side; simple SVG≤2,000 elements. Design JSON≤2MB with bounded mesh or normalized PNG payloads. Synthetic PNG, JPEG, SVG, ASCII and binary STL examples are bundled under `public/samples`; no personal uploads are in this repository. Browser processing only: no upload or remote generation dependency.

## Designs, state and export

Three actual model-thumbnail presets, bounded variation, undo/redo, six local named saves, portable JSON save/open, saved light/dark theme, source replace/remove/reset and per-part views. Saved files include bounded imported assets; missing payloads are blocked and explicitly request reattachment. No fake restoration of paths. A current-state key plus request IDs gate exports during changes, pending image conversion, invalid inputs or worker errors; last-good preview is labelled and cannot silently export stale geometry.

Prominent binary STL, per-part STL and Everything ZIP downloads. ZIP includes connected card,13 clean part STLs and numbered `ASSEMBLY.txt` with current fits. STL contains geometry only, no color or unit metadata. De-tabbed plate is separately labelled and never misrepresented as a connected card. X/Y/Z dimensions refer to the selected export. Touch orbit/pinch, fit, top view and zoom buttons are available.

## Printing and assembly

See `ASSEMBLY.txt` or in-app guide. PLA/PETG, .16–.20mm layers, .4mm nozzle, three perimeters,100%mm. No supports intended. The card requires a wide bed; individual parts may be rearranged in a slicer. Clip52 accessible webs and file nubs without nicking tile silhouettes. The minimum tile neck is5.6mm. Tray and tile-P form the initial fit trial; printer/material-dependent gaps are not universal. Lower tiles into the continuous-floor tray in any order using the optional solved map. Lift through the front notch; do not invert a loaded tray expecting retention. No adhesive or metal hardware required. Small cutoffs and cutting tools require appropriate supervision.

## Verification and limitations

`npm test` → `geometry-validation.json`:38 cases covering all presets/silhouettes, each scalar endpoint, joint minimum/maximum and image/STL-derived outputs. Independent binary export parser checks finite vertices, valid triangles, normalized normals, welded1e-5mm edge incidence=2 with opposite winding, positive volume per connected component, millimeter bounds and bed Z=0. Checks run for **every component**, connected card and float32-translated loose plate.

Actual solid operations verify nonintersecting parts in card and assembled states, top insertion at six heights, supporting floor, nearly half-gap expanded tile profiles,52 safe snip cutters yielding14 components (carrier plus13 parts), declared card envelope and upper-section support footprints. Independent lattice checks prove60 cells covered once and12 non-equivalent free pentominoes. Image ring-hole solid probes check that bright centers keep backing while dark ring pixels cut real voids.

Browser scripts exercise the production build and real file pickers/downloads for PNG/JPEG/ASCII/binary STL; compare default, content/settings/scale/rotation/placement and regenerated saved JSON fingerprints; parse actual downloaded exports; test ZIP contents, rejected files, invalid dimensions/transforms, replace/remove/reset, worker loading failure, stale requests, theme/focus/collapsible controls, all presets/views, undo/redo, saved designs and portable restoration. Touch320/390px contexts verify orbit/pinch, preview-first stacking, reachable exports and no overflow. Reports/screenshots live beside the scripts. No external generation/font/CDN requests are needed.

**Computational validation is not physical testing. No actual print, fit, friction, breakaway force, strength, durability or handling has been tested.** This is not a precision dimensional calibration tool or a toy certified for young children.

Dependencies: React, Vite, Three.js/OrbitControls, Manifold3D (Apache2.0), fflate (MIT), bundled Fredoka/Rubik fonts (SIL OFL), gh-pages; Playwright for tests. Bundled icon primitives are original geometric SVG marks.
