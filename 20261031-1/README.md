# Corner & Return

A local React + Vite maker studio for a **four-part trihedral reflector kit card**: signature floor, rear mirror wall, left mirror wall and L-shaped top brace. Sixteen breakaway runners genuinely connect all four parts to a carrier. Snip, dry-fit eight tongues and apply thin mirror film to the mutually perpendicular inner planes. This is a static optical craft assembly, not a moving fidget, calibrated instrument or safety reflector. **Mirror film and adhesive are required external consumables. Physical printing, assembly and optical return have not been tested.**

## Run and export

Node 22.12+: `npm install`, `npm run dev`. `npm test` runs independent mesh/assembly checks; `npm run predeploy` builds. Individual app deploy scripts are provided, but publication uses the monorepo ROOT flow. Dependencies: React, Vite, Three.js/OrbitControls, Manifold3D WASM for robust CSG, fflate for ZIP, Fontsource Fredoka/Rubik fonts locally bundled (OFL). No API, CDN, paid service or server is needed for generation/export.

Preview and binary STL export share the exact current worker result. Every edit is debounced with generation IDs/current-state keys; invalid edits or import failures disable exports even while a last-valid preview remains visible. Worker-load failures show a reload instruction. All exported solids start on Z=0. Connected-card, individual parts and Everything ZIP are real geometry; ZIP includes numbered ASSEMBLY.txt and current measured fits. STL has no color metadata. Assembled/exploded/isolated/de-tabbed/card views are actual rigid transforms; no ray or force simulation is claimed. Film is not exported.

## Reference-first provenance

Local candidates were inspected first: keycap_generator2 switch mesh and fidget_fabric_generator diamond-link mesh (dimensions, hashes/components in reference-measurements.json). They are switch cavities/3D interlinks, not suitable sheet/card interfaces. Relevant READMEs were inspected. Primary visual reference keycap_generator2 was read-only: README, styles.css, App.tsx, Viewer.tsx, worker, STL parser, imageTrace and export modules. Adopted concrete patterns: 374px left rail/right gradient viewer, preview-first phone layout, tactile key buttons, paired numeric/range inputs, cutout checkerboard, local fonts, saved light/dark theme and worker/export gating. No switch sockets were imposed on this unrelated assembly.

Public geometry reference: **White Cat Kit Card, Mike Kasberg**, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0** (reference-LICENSE.txt). Actual 30,616-triangle binary STL downloaded and parsed. SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Bounds 179.820 × 178.020 × 3.190 mm; STL has no unit metadata (mm assumed, corroborated by source sheet measurements). 27 edge-adjacent components; source is not watertight and has surface defects. It is a design reference, not a silently repaired/re-exported mesh. Raw mesh is NOT redistributed. See reference-inspect.py, reference-measurements.json and evidence/reference-sections.png (actual sections .1/.5/1.59 mm), plus the small reference-analysis.json for design mapping.

Measured sheet is 1.6 mm; four socket loops measure 4.5 × 1.700012 mm. A 4.4 × 1.6 tongue plus .10 total clearance reconstructs that fit. This new design expands it to EIGHT fixed seats. Default .15 allowance and .10–.35 range are deliberate printer/material starting fits, not measurements or universal tolerances. Source low carrier levels include .21/.22 mm; redesigned runners are thicker .4–.6 mm for accessible snips. Original reflector floor/walls/L brace and four-bay carrier are parametric CSG reconstructions; no spaceship appearance is copied. Distinct from prior tunnel/periscope kits: three orthogonal mirror-film planes form an open trihedral corner, not a repeated viewing channel.

## Parameters (all physical lengths in millimeters)

| Parameter | Range |
|---|---|
| Card width × height | 200–230 × 175–200 |
| Inner span / wall height | 38–46 / 36–46 |
| L-brace arm width / corner reveal | 7–9 / .2–.6 |
| Floor and brace thickness / wall sheet | 2.4–3.2 / 1.6–2 |
| Tongue width / total socket allowance | 4.4–5.2 / .10–.35 |
| Part spacing | 3.5–4 |
| Runner width / thickness | .8–1.4 / .4–.6 |

Three true model presets and three signature silhouettes. Bounded variations remain in supported mechanical ranges. Envelope/runner landing validation blocks impossible combinations. Final X/Y/Z displayed for the selected export. Undo/redo, six local named designs and JSON save/open include bounded portable assets; a missing image payload explicitly requires reattachment. No personal imports are saved in the repository.

## Image/text/icon workflow

Choose files (desktop/phone) or drag/drop: PNG/JPEG or simple standalone SVG. Local content validation precedes decode: max 2 MB, 12 MP and 6,000 px/side. PNG/JPEG header dimensions are checked; normalized portable PNG is max 500px. SVG is restricted to <=2,000 simple paths/shapes; scripts, resources, filters and referenced content rejected; rasterized locally to 256px. Text (8 chars) and six searchable bundled original icons use the same image conversion.

Exact documented method: fit/cover/crop into a **20×20 luminance grid**, alpha composited against selected light/dark background; optional dark inversion. Threshold1–254 chooses dark cells or grayscale gives proportional depth. A triangulated, closed height-field cutter Boolean-subtracts .4–.6mm into the lug. Bright holes remain unengraved in solid backing, verified with Boolean probes; this is sampled 2D-to-relief, **not exact vector tracing or full 3D reconstruction from a photo**. Checkerboard shows the actual converted cutout. Scale4–7mm, rotation ±180°, X ±1.5 and Y ±2mm; actual cutter vertices must remain within the 6.5mm safe radius. This preserves >=1.8mm floor backing. Empty art/invalid transforms block exports. Raised/cut-through marks are deliberately unsupported on this thin bed-flat kit.

## Imported STL workflow

Both binary and ASCII STL: 2MB, max1,500 triangles; each source dimension .2–250mm. Choose Z/Y/negative-Z up before attaching, inspect source dimensions/preview and explicitly confirm **millimeters**. Units are not encoded in STL. Source must be one outward-wound, closed, connected convex solid with broad flat bottom (>=25% of bounding footprint) and no overhang footprint. Parser checks finite coordinates, triangle area, welded edge incidence/winding, connectivity, signed volume, intersections, dimensions and convexity. Open/nonmanifold, concave, hollow, intersecting or unsupported files give actionable errors. No repair is performed. Convexity is an acceptance condition; a convex hull never replaces the source.

Accepted ORIGINAL triangles become the exact Boolean engraving cutter, XY aspect retained and independently scaled in Z to .4–.6mm depth. UI shows actual XY/Z scale factors, rotation, placement and safe-zone feedback. This measurably changes the exported lug, not just preview/re-export. Reset transforms, replace/remove source or return to defaults. Changing up-axis clears source and requests reattachment. Files and fonts never leave the browser. Synthetic sample PNG/JPEG/SVG, ASCII wedge and binary gem are supplied, with no third-party private source mesh.

## Print, fit, assembly and use

PLA/PETG, .16–.20mm layers, three perimeters; 100% scale. Bed-flat, no supports intended. First print floor + one wall to calibrate allowance/elephant foot. Snip sixteen runners 1.6mm outside edges; trim nubs. Mirror film <=.15mm is external; apply before assembly, excluding joints/reveal. Rear inner face is printable Z=0, left inner face is printable Z=sheet. Floor film occupies X/Y=1..span−1; wall film excludes 1mm borders. Lower rear wall then left wall into floor; thickness faces OUT of the corner. Lower top brace last. Dry-fit/square all three planes and bond eight seats; allow adhesive to cure. Tongues stop .05mm short of floor/brace outer face. No joint relies on undocumented friction retention.

Ideal three orthogonal reflections reverse direction components. Real film waviness, printed flatness, corner gaps and fit play degrade the effect; no brightness, alignment or angular-coverage guarantee. Look into the open positive-X/positive-Y corner with a gentle flashlight. **Never use lasers, glass mirrors or direct sunlight.** Not for safety applications or children. Detailed numbered instructions accompany every ZIP and are visible in-app.

## Validation evidence

`validate.mjs`: exported float32 binary STL length/normals, finite coordinates, nonzero triangle areas, welded edges (1e−5 mm) with exactly two opposite incidents, per-component positive volume, bounds, single connected carrier, every separate part, packed-part disjointness, eight socket probes, collision-free vertical insertion sequence, three unobstructed film rectangles, sixteen safe snip cutters releasing four parts + carrier, sampled layer support. Defaults/presets/all silhouettes, combined min/max, individual parameter extrema and image/STL-derived models run these same checks. Ideal planes' orthogonality is geometric, not an optical performance measurement.

`browser-test.cjs`, `studio-test.cjs`, `axis-test.cjs`: real production browser file pickers and downloaded STL/ZIP, image pixel/threshold/depth and STL scale/rotation/placement differences, exact worker-preview/download/JSON signatures, units confirmation, imports malformed/open/nonmanifold/concave/oversize, empty silhouettes, errors/recovery/stale export blocking, portable assets, undo/redo, saved designs/theme, text/icons/SVG, views, worker abort/reload, desktop rail and touch-enabled 320/390px layouts, actual touch orbit/pinch. See JSON reports and screenshots for executed results. `hole-check.mjs` probes actual Boolean cutout holes and backing. No physical print, force, assembly or optical testing is claimed.
