# Savart & Sing

A browser-only, parametric **five-part Savart sound-wheel kit card**. Snip twenty runners, glue two socketed uprights onto a personalized deck, fit two independently rotating wheels on external M3 hardware, and let replaceable paper strikers touch their teeth. N and 2N teeth give a nominal 2:1 impact-rate ratio **only at equal angular speed**. Hand turning is neither speed-controlled nor a promise of musical pitch. This is a new toothed-paper pulse experiment, not the prior ratchet, gear, or vessel kits.

**Physical printing, free rotation, paper contact, durability and sound have not been tested.** Computational geometry checks are separate from physical validation.

## Run / build

Node 22.12+; `npm ci`, `npm run dev`; `npm run predeploy` builds `dist`. Vite base `/daily-app2/20261102-33/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public combined-site publication uses the parent monorepo's root `deploy/`, not this individual deploy script.

Locally bundled React/Vite, Three.js + OrbitControls, Manifold WASM, fflate, Rubik/Fredoka fonts. No CDN, accounts, paid service or API key. Model generation, topology preflight and STL parsing run in a module Web Worker. Debounced request IDs and a current-state key disable stale exports, including while image conversion/imports are pending. A failed worker disables export and asks for reload. Preview, binary STL and ZIP share the current checked geometry.

## Reference-first evidence and reconstruction

Read-only local candidates inspected first: Keycap Studio's three switch-tool parts (inappropriate to a sheet kit) and Weave's 8 mm interlocking link (also inappropriate). Both were parsed and hashed; measurements/rejections are in `reference-analysis.json`. Relevant local project READMEs were inspected, along with Keycap Studio's App, CSS, Viewer, worker, imageTrace, STL and export modules. Its 374px left rail, collapsible sections, paired millimeter controls, tactile pink buttons, saved themes, checkerboard cutout and preview-first phone layout inform the studio. No reference tree or Git history was changed/copied wholesale. General studio/import/mesh-test infrastructure is adapted from sibling Daily Object Lab apps; the wheel kit's mechanism and tests are new.

Selected publicly accessible mesh: **White Cat Kit Card**, **Mike Kasberg**, [source](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **CC BY 4.0**. Retrieved actual binary STL before selecting the final construction. License and project README are retained as attribution evidence; raw source mesh is **not redistributed**.

SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; 30,616 triangles; bounds approximately179.82 ×178.02 ×3.19 mm; 27 edge-adjacent components including source defects. Source is nonwatertight and is used only as an inspected design reference, not silently repaired or imported into the output. STL contains no units; millimeters assumed from plausible sheet dimensions.

This run's `reference-measure.py` parses the actual mesh and measures connected components, bounds, Z planes and actual cross-sections at0.10,0.50,1.59 mm. `evidence/reference-sections.png` was visually inspected. See `reference-measurements.json` for full results and `reference-analysis.json` for design decisions. Reproduce using a Python environment with trimesh/numpy/matplotlib: `python reference-measure.py /path/to/downloaded.stl`.

**Measured:** sheet planes0/1.60 mm; four section loops4.50 ×1.700 mm; low carrier features around0.21–0.22 mm. **Preserved:** default sheet1.60 mm, 4.50 mm socket length, shouldered thin-sheet tongues in planar deck sockets, connected carrier with accessible breakaways. **Proposed:** socket width=sheet+0.30–0.60 mm; tongue width=4.50-clearance; tongue length/thickness=sheet; stronger bed-aligned0.4–0.6 mm runners. These are loose adhesive seats, not universal press fits. **New:** two M3-supported trapezoid-tooth wheels and replaceable external paper strikers, with independently adjustable real tooth size/count, axle spacing, height, bore and axial running clearance. No cat silhouette, source faces, convex hull or unchanged re-export.

## Real parameters (mm unless noted)

| Parameter | Range | Default |
|---|---|---|
| Card width / height |170–230 /200–260|190 /220|
| Axle spacing |52–72|60|
| Upright shoulder height |42–54|46|
| Wheel tip diameter |32–44|38|
| Low-wheel tooth count (integer) |10–18|12|
| High-wheel tooth count |2× low count|24|
| Tooth radial depth |1.2–2.4|1.6|
| M3 bore |3.3–3.8|3.5|
| Washer-controlled axial gap |1–2|1|
| Total socket clearance |0.30–0.60|0.40|
| Sheet |1.6–2.4|1.6|
| Part spacing |3–5|3.5|
| Runner width / height |0.8–1.2 /0.4–0.6|1 /0.6|

Three real presets have generated model thumbnails. Square, short-clipped and wide-clipped ergonomic deck ends alter geometry. Size controls alter actual geometry, not just camera scale. Tooth tip chord≥1 mm, wheels stay≥8 mm from deck and each other within supported ranges. Every final part must be a single positive-volume closed solid. Invalid ranges or card packing disable exports. Check bed size: larger presets/cards exceed220 mm beds.

## Local personalization and imports

**Image:** picker and drag/drop accept actual PNG/JPEG, plus simple sanitized SVG locally rasterized to256px. File16 bytes–2 MB, ≤12 megapixels, ≤6000px per side; normalized portable image ≤500px longest side. Header limits checked before decoding. Simple SVG ≤2000 elements; scripts, external/data references, effects and unflattened text rejected. Bundled samples are synthetic, not personal or reference meshes.

A20×20 grayscale grid becomes an outward-wound solid height field. Threshold maps dark samples to selected0.4–0.6 mm engraving depth; grayscale mode maps luminance continuously to depth. This cutter is Boolean-subtracted from the deck apron. Light/dark background handling, fit/fill crop, crop offsets±25%, threshold1–254, footprint4–7 mm, XY placement±1.5/±2 mm and rotation±180° affect exported triangles. The checkerboard displays the **actual sampled cutout**, not only the source photo. Bright holes remain uncut on the continuous backing; a ring-hole solid probe verifies this. Text (up to8 characters) and six searchable bundled SVG icons use the same real conversion. This is **2D-to-relief, not automatic full3D reconstruction from one photograph**. Fine decorative details are resolution-limited and may be lost on a0.4 mm nozzle; use bold art, inspect slices, or choose a smaller nozzle. No precise vector tracing or font-outline fidelity is claimed. Engraved-only is deliberate: it preserves sheet height and ≥1 mm backing.

**STL:** ASCII and binary, ≤2 MB, ≤1500 triangles, each dimension0.2–250 mm. Shows oriented source dimensions/format and a separate interactive source preview. Must explicitly confirm millimeter units (STL has no unit metadata). Choose Z/Y/−Z up before attaching; changing axis clears the source and requires reattachment. Independent XY scale fits a4–7 mm footprint, Z fits0.4–0.6 mm depth; center/reset, rotation and XY placement remain editable. Exact original triangles form the Boolean cutter; source geometry is **not** convex-hulled, discarded or merely re-exported.

Bounded support contract: one connected, consistently outward-wound, closed **convex** solid with a broad flat base (≥25% of footprint), no projecting overhang. Open, nonmanifold, self-intersecting, concave, hollow, multi-component, degenerate, excessive or unsupported inputs get actionable errors; no automatic repair is claimed. A bottom-footprint hull is used only to **validate bed contact**, never to replace source geometry. Final transformation must remain inside a radius6.5 mm protected apron zone centered10 mm forward of the sockets; cut-through and interference are blocked. Replacing/removing imports and reset are recoverable.

All files remain local. Nothing uploads or leaves the browser. Personal source files are not included in this repository. Named designs (six) and JSON include bounded normalized image or mesh payloads. Missing/invalid image payload requests explicit reattachment instead of pretending it was restored. Undo/redo holds35 local snapshots. Saved theme persists. STL stores geometry, **not preview colours**.

## Views / exports / assembly

Assembled, exploded, true connected card, clean print plate and each isolated part use identical meshes. Wheel rotation controls real rigid-body preview transforms, not exported motion or an audio simulation. Exploded offsets are illustrative. Ghost deck explains seating; hardware/paper/tape are explicitly external and omitted. Orbit/zoom/fit/top work with mouse and phone touch. Phone order: preview, dimensions/warnings/exports, stacked controls. Light/dark and reduced-motion styles included.

Prominent binary STL per part and Everything ZIP. ZIP includes connected card, five clean parts, portable current JSON, numbered instructions and current fit data. `ASSEMBLY.txt` documents print orientation, release, material and assembly order. Downloaded final dimensions in millimeters are shown for the selected output.

Print bed-flat PLA/PETG,0.16–0.20 mm layers,0.4 mm nozzle, three walls; no supports intended. Cut20 runners outside part bounds; file stubs flush. Wheel runners contact tooth regions: clean part exports are preferable for evenly finished teeth. Calibrate a deck/upright joint and wheel bore before a whole card. Glue four seats. External hardware: **2×M3×16 bolts,2×M3 nyloc nuts, M3 spacing/outer washers to selected1–2 mm gap**. Retain without clamping wheel rotation. Ordinary loose nuts can unwind; no printed captive retention or hardware-free version is claimed. Paper/card strips about6×20×0.15–0.3 mm plus tape are replaceable strikers; bend to barely brush tips, starting about0.2 mm overlap. The **paper**, not PLA teeth, flexes. Gently hand-turn and hold the deck. No motor drive, load rating, audio accuracy or tested material life. Read all eight numbered steps before assembly.

## Validation / reproducible checks

- `npm test`:45 variants (three presets; all shapes at all-low/all-high; each field low/high; threshold/depth/grayscale/hole cases; both synthetic STL formats and transforms). Independent exported-float32 mesh checks: exact length, finite coordinates, nondegenerate faces, consistent normal/winding, edge weld1e-5 mm and exactly two opposite incident faces, each component positive volume, expected dimensions. Checks every clean part, card and five-component print plate.
- Manifold intersections:49 full-rotation poses;26 upright insertion poses;26 wheel axial installation poses; assembled and flat parts nonintersecting; four source-fit socket equations; tip/web/backing constraints. Support-free cross-sections compare with first-layer footprint.20 simulated cuts yield carrier+five intact released parts. No force/friction, sound or material simulation.
- `node serve.mjs` serves actual production build at port5733 and its real Pages prefix. `node browser-test.cjs`: real file-picker PNG/JPEG/ASCII/binary imports; downloadable STL/JSON; parameter/image/scale/rotation/placement changes; comparison with no-import output; exact preview/download/Node regeneration fingerprints; independent mesh and mechanism checks on imported outputs; malformed/open/nonmanifold/concave/excessive/empty fixtures; recoverable errors;320/390px UI, touch orbit/pinch and phone downloads.
- `node studio-test.cjs`, `node orientation-test.cjs`, `node stale-test.cjs`, `node presentation-test.cjs`, `node icons-drop-test.cjs`: every preset/silhouette/icon, text/SVG, portable image+mesh JSON, named storage/reload, missing assets, undo/redo, actual ZIP entries, source axes, rapid-edit stale gating, isolated/assembled/exploded/print views, ghost/rotation, worker failure/recovery, theme/focus/collapse/reduced motion, no overflow on every tab and real drag-drop.

Reports/logs and screenshots are saved with this app. See `VALIDATION.md` for actual completion results. These computational and browser checks **do not establish a successful physical print or working sound**.

Licenses: source design CC BY4.0; Manifold Apache2.0, Three MIT, React MIT, fflate MIT, fonts SIL OFL. Bundled synthetic samples created for local testing. No third-party raw STL bundled.
