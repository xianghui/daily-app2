# Sweep & Soar

A browser-based **six-piece swept-wing display-aircraft kit-card generator**. Snip a fuselage, main wing, tailplane, two notched cradles and personalized plinth from a real connected card. Side-thread the two horizontal surfaces through fuselage mortises, then lower the belly into the cradles. **Adhesive is required at all fixed joints. This is a static display model, not a flying glider.**

## Run / stack

Node 22.12+: `npm install`, `npm run dev`; `npm test`; `npm run predeploy`. React + Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts. Dependencies are npm-installed locally, not copied from the reference tree. Geometry and strict STL parsing run in a debounced, numbered Web Worker. There are no CDNs, external generation APIs, uploads, accounts or paid services.

Base: `/daily-app2/20261029-12/`. Per-app scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`; public deployment uses the parent monorepo root's combined `deploy/` flow.

## Reference-first evidence / attribution

Local `/Volumes/ExternalHD/3d_printing_apps/` collections were searched first. Keycap Studio's switch templates and Weave's interlocked fabric STL were actually parsed (`evidence/local-reference-inventory.json`) and their READMEs inspected. Those tall switch/link interfaces do not suit this flat-sheet aircraft; the local kit-card projects generate geometry but contain no suitable source STL. Reference trees and the old gallery remain read-only.

Selected actual mesh: **White Cat Kit Card, Mike Kasberg**, [source repository](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Source README, license and SCAD were inspected. This run parsed the existing hash-verified public download cache `/tmp/cradle-reference.stl`; no fresh download is claimed. No source mesh, source artwork or private user file is redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles, **179.820 × 178.020 × 3.190 mm**. STL is unitless; source SCAD's `thickness = 1.6` corroborates millimeters.
- 27 edge-adjacent components: 3,746 / 26,820 face groups plus 25 two-face artifacts. The source is **not watertight**. It is a measured construction reference, not a repaired mesh or output asset.
- Actual mesh sections at Z=.10/.50/1.59 mm are saved and inspected in `evidence/reference-sections.png`. They show pierced sheet panels/strips in compartmented carriers. Sheet planes at 0 and 1.6 mm; carrier rail measured by intersection at Y=100/Z=.5 is 1.600 mm; low connection elevations include .21/.22 mm.
- **Measured → retained:** default 1.6 mm sheet. **Measured → redesigned:** 1.6 mm carrier rails become 2.4 mm; thin source connections become proposed .4–.6 mm × .8–1.4 mm accessible runners.
- **Original reconstruction:** tapered/swept wing and tail silhouettes, fuselage root mortises, open cradle notches, shouldered plinth tongues, center marks and every interface. The source's sheet/carrier assembly strategy informs this model, not its spaceship outline or bend/clip joints. Proposed .10–.35 mm total fit allowance is NOT a measured source tolerance.
- Wing tip chord is .45 × root chord. Sweep ≤6 mm leaves the entire wing inside its root-chord envelope: `(rootChord-tipChord)/2-sweep ≥.6 mm`. This is explicitly checked before claiming the wing can thread sideways through its root slot. Tail uses .42 × span, .5 × chord and .2 × sweep. There are no forced elastic snaps.

`reference-analysis.json`, `reference-measurements.json`, `reference-inspect.py` and `reference-measure.py` contain provenance, dimensions, component counts, measured/reconstructed distinctions and reproducible mesh-section analysis. Python inspection uses trimesh/numpy/matplotlib. Attribution does not imply endorsement.

Visual/interaction reference: read-only **Keycap Studio** (`keycap_generator2`), with README, styles, App, Viewer, worker, STL/export/import and image tracing modules inspected. Concrete patterns: 374 px LEFT control rail with sticky brand/theme header, paired sliders/numeric mm inputs, collapsible sections, soft pink pressed tactile controls, checkerboard import cutout and a large RIGHT gradient-backed 3D viewer. Phone preview, dimensions, warnings and exports precede stacked controls. Three model-thumbnail presets, searchable marks, saved designs and ghost/exploded views are real. Reused studio/import/test infrastructure from the preceding app; this aircraft's solids, placement transforms, assembly paths and fit checks are new. No switch sockets, source Git history or wholesale reference dependency tree copied.

## Parameters

All lengths **millimeters**. Card width 240–280; height 210–250; wing span 76–98; fuselage 80–100; root chord 24–32; sweep 0–6; cradle height 18–28; cradle tongue width 5–6; sheet 1.6–2.4; total slot allowance .10–.35; spacing 4–7; runner width .8–1.4; runner thickness .4–.6; dimple depth 0–.4. Three real presets: **Rose Glider, Wide Surveyor, Pocket Dart**. Round/chamfer/clipped selections alter both plinth and nose profiles. Random variations remain in supported ranges with roomy card packing.

The default card is **250 × 220 mm**; typical small beds may need individual-part exports. Insufficient packing space is rejected rather than allowing overlaps or exceeding the declared card. Tongues extend sheet thickness minus .15 mm. Cradle seats are 4 mm deep and retain the original sheet width plus selected allowance. Open joints need adhesive, not claimed captive friction retention. No motion or aerodynamic behavior is claimed.

## Image → printable geometry

File picker and desktop drop support **PNG/JPEG and simple SVG**; 16 bytes–2 MB, raster ≤12 megapixels, ≤6,000 px side; normalized to ≤500 px for portable payloads. SVG supports simple filled paths/shapes, ≤2,000 elements, no scripts, external references, filters or text; local rasterization to 256 px. Synthetic sample PNG/JPEG/SVG files are available through buttons and download links.

Fit/cover and ±25% crop shift map artwork onto a **20 × 20 grayscale grid**. Alpha composites on selected light/dark background; weighted luminance yields a threshold mask or grayscale height map. Checkerboard shows the actual conversion. The closed triangulated heightfield is solid-unioned into, or subtracted from, the **front plinth medallion**. This is **2D-to-relief, NOT one-photo full-3D reconstruction**. Sloped grid transitions are not exact vector tracing. Bright/transparent holes remain unraised/unengraved above continuous backing; they are not holes through the plinth. Real boolean probes test this distinction.

Threshold 1–254; raised depth .4–3; engraved .4–.6 retaining ≥.8 mm backing; footprint 4–7; rotation ±180°; X ±1.5 / Y ±2. The protected medallion radius is 6.5 mm. Out-of-zone placement fails rather than cutting slots. Up to eight text characters and six searchable icons take the same actual relief route. Replace/remove/reset and return-to-built-in controls work. Preview colours do not imply colour in STL.

## STL → integrated grip

Both **ASCII and binary STL** are content-parsed in the worker, vertex-welded at 1e-5 mm and checked before booleans. The source dimensions, format, triangle count and separate source 3D preview are shown. Explicitly confirm millimeters because STL has no units. Z-up, Y-up (+90° X) and upside-down orientations are supported; changing orientation requests reattachment, not a fictitious restored transform.

Supported contract: **one connected, outward-wound closed convex solid, broad flat bottom, no projected overhangs**, ≤1,500 triangles, .2–250 mm per source axis. Degenerate/nonfinite, open/nonmanifold, self-intersecting, concave, hollow, disconnected and unsupported meshes are rejected with recoverable guidance. No automatic repair or convex-hull substitution. A bottom-footprint hull is used only for validation, not replacement geometry.

The actual source triangles enter Manifold, scale proportionally in XY to a 4–7 mm footprint and independently in Z to .6–3 mm, rotate/translate and **union into the plinth with .15 mm embed**. Both scale factors are shown. XY features below 1.2 mm and unsafe-zone transforms fail. Original slopes survive; imports are not just displayed/re-exported. Their final output is different from the default and changes with size, rotation and placement.

All files stay in-browser. Only original synthetic CC0 PNG/JPEG/SVG, ASCII wedge and binary frustum fixtures are bundled. No personal uploads are sent to services or committed.

## Print / assembly / exports

1. PLA/PETG, .4 mm nozzle, .2 mm layers, three walls; bed-flat, marks up, no supports intended. Inspect slicer paths and bed size. Print cradle/fuselage and wing section first to calibrate; adjust fit in .05–.1 mm steps for printer/material.
2. Adult: snip **24 accessible low runners**, trim nubs/elephant foot. Six parts plus a carrier remain. Functional slots and tongues are protected from tab cutters.
3. Thread main wing sideways through the forward slot. Align its transverse center mark with the fuselage; dry-fit/glue. Repeat with tailplane through rear slot. Both entire chord envelopes pass through; no wing bending required.
4. Stand both cradles in the plinth slots, shoulders on plinth, tongue tips .15 mm recessed; glue/cure square.
5. Lower the assembled aircraft belly into both open notches together. It seats 4 mm below crowns. Glue/cure all fixed joints. Adhesive is necessary; open notches are not captive retention. Do not lift by wings.
6. Place on a level desk. Adult craft, cutters, adhesive, small parts; keep away from children/pets. Static display only, no flight/load-bearing claim.

Assembled, exploded, connected-card, de-tabbed and isolated-part views use the same valid printable meshes. Exploded positions and ghost opacity are preview-only. Actual exports remain bed-flat. Clear X/Y/Z mm dimensions, per-part binary STL and **Everything ZIP** (seven STL files plus numbered `ASSEMBLY.txt`). ZIP is not labelled 3MF. STL contains no colour.

**No physical print, flight, stability, strength, friction or durability testing performed.** Computational checks do not guarantee a real print or adhesive bond.

## Saves / responsiveness / current state

Undo/redo, six local named designs, JSON save/open. Normalized image and validated mesh payloads are bounded/portable; missing payloads explicitly request reattachment. Restored meshes are revalidated. Design JSON limit 2 MB. Saved designs remain in localStorage; no cloud. Worker request IDs, current-state keys and conversion status disable exports for invalid, missing, stale, pending or failed builds. A last-good preview can stay visible but cannot silently export.

## Reproducible verification

- `npm test`: 30 built-in cases (presets, min/max, mixed extrema), 35 image/STL-derived cases. Every actual float32 STL, card and separate part checked independently for finite vertices, nondegenerate faces, normalized outward normals, positive volume **per component**, expected mm bounds, and exactly two opposite-directed incident faces per welded edge (1e-5 mm). Worker performs final manifold/winding checks for every build.
- `node extra-validation.mjs`: real ring-hole probes, actual source wedge integration, concavity rejection, final mesh and assembly checks.
- `node release-preflight.mjs`: 39 dense cases, 49 sampled offsets for both-direction wing/tail threading, cradle insertion, aircraft lowering and exploded separation; all assembled pairwise intersections, notch/shoulder stops, flat part separation, declared card bounds and accessible snip checks. Snipping yields exactly six parts plus connected carrier; impossible packing is blocked.
- `node browser-validation.mjs`: actual production-base file-picker PNG/JPEG/SVG and ASCII/binary STL imports, changed pixels/settings/transforms, byte signatures preview/export/JSON regeneration, reset/replace/remove, portable/local saves, undo/redo, text/icons, every part and ZIP STL. Invalid/truncated/open/excessive/empty inputs and worker loading failures block exports and recover. Desktop 374 px rail, light/dark focus/collapse; 320/390 px phone preview-first/no overflow, imports/exports and real CDP touch orbit/pinch confirmed by changed canvas screenshots.
- `node production-preflight.mjs`: combined gallery script compilation with `new Function`, unique correct new STL entry, exact earlier entry preservation, all deploy folders present, no gallery runtime errors, production rejection/recovery/reduced motion checks.

JSON reports and screenshots are retained. Browser script uses `TEST_URL` if needed. Tests are computational/browser checks, never a physical print claim.
