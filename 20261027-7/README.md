# Collet Calm

A browser-based **tapered friction-collet fidget STL studio**. Lower a conical sleeve over six slotted TPU fingers to increase friction against a fixed post; turn gently, lift to release, repeat. This axial-to-radial squeeze differs from the gallery's ratchets, pinch brakes, sprag rollers and screw mechanisms.

## Make and run

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite; Three.js/OrbitControls preview, Manifold WASM solid operations in a module Web Worker, fflate ZIP, locally bundled Fredoka/Rubik fonts. No remote API/CDN/key. Vite base is `/daily-app2/20261027-7/`. Per-app deploy scripts exist, but public publishing uses the parent monorepo's root `deploy/` flow.

## Printable parts and mechanism

Three separate connected solids, flat Z=0 down:

1. **palm-post**, PLA/PETG: ergonomic grip, 4 mm floor, fixed spindle and 0.2 mm thrust shoulder.
2. **split-collet**, TPU 95A: broad root with six axial open-ended slots; minimum root floor 1.8 mm, tip radial wall at least 1.55 mm. Do not substitute brittle PLA and force it.
3. **taper-sleeve**, PLA/PETG: a tapered bore and exterior grip flutes. Fit large opening down.

No hardware, supports or adhesives intended. 0.4 mm nozzle, 0.20 mm layers, three walls, 20–35% infill; narrow TPU finger sections should be solid. Deburr all sliding faces. Place the collet on the spindle, then lower sleeve over its tip. Keep level: moving parts are **not captive**. Lift sleeve first, then collar to disassemble. No positive latch, automatic return or self-locking claim.

Sleeve and fingers share radial taper slope `drop / fingerLength`. The free radial gap is consumed after axial travel `gap / slope`. The illustrated full stroke is `(gap + 0.35) / slope`, targeting a nominal 0.35 mm outer compression budget. Spindle radial clearance is 0.25 mm, leaving a theoretical 0.10 mm contact interference **only if contraction were uniform**. Actual finger bending/contact forces are not solved. Pressed preview intentionally shows undeformed sleeve/finger contact overlap, clearly labelled as an estimated diagram. This overlap is NEVER fused into or included in exported part layout. Stop at gentle resistance; do not force full illustrated stroke.

**Calibration:** print Easy Release as a full-size trial. Test sleeve/collet separately before assembling, check slots are open, and gently fit to spindle. Choose higher gap if binding; deburr or reprint instead of forcing. TPU hardness, cooling and surface friction matter. These are FDM starting settings, not universal tolerances. All computational checks are distinct from physical printing; **no physical print, fatigue, elastic force or wear testing was performed**.

## Dimensions and controls

All physical dimensions are millimeters. Palm diameter 22–28; finger length 14–18; sleeve height 5–7; sleeve radial gap 0.3–0.5; radial taper drop 2–2.4; finger slot width 1–1.6; dimple depth 0–0.6. Round, hex and oval palms; three genuine presets and bounded variation. Final export X/Y/Z reports actual bed-layout bounds (or the selected individual part). Impossible/out-of-range/nonfinite parameters block export.

Undo/redo; up to six local named designs; portable JSON save/open. Theme is remembered. Desktop: scrollable 374 px left studio rail and right 3D stage; phones: preview, dimensions and exports first, controls stacked below. Orbit, zoom, fit, touch/pinch; print/assembled/exploded/isolated views, ghost base, accessible tactile controls and reduced-motion CSS. Preview colors do not become STL colors.

## Local image → real geometry

PNG/JPEG and restricted simple SVG; picker on desktop/phone and single-file drop. 16 bytes–2 MB; PNG/JPEG at most 12 megapixels and 6,000 px per side, content headers checked before decode. SVG permits only simple geometry, no scripts/external resources/effects, up to 2,000 elements; rasterized locally to 256². Images normalize to at most 500 px for portable storage.

Exact conversion: fit/cover and ±25% crop shift into a 20×20 luminance grid. Threshold mode sets heights to zero or selected depth; grayscale mode uses `depth*(1-luminance/255)`. Adjacent samples are triangulated into a closed height-field solid with backing, then solid-unioned into (or subtracted from) the palm's isolated center well. The image's bright/transparent holes remain unraised/unengraved above the continuous floor, **not through-holes**. This is sampled **2D-to-relief**, not exact outline tracing or full 3D reconstruction from a photo. Source and checkerboard cutout are shown. Background light/dark inversion, threshold 1–254, depth 0.4–3 mm raised or 0.4–0.6 engraved, physical footprint 4–7 mm, rotation ±180°, X offset ±1.5 and Y ±2 mm. Transformed geometry must remain within the 6.5 mm-radius safe well; protected mechanisms cannot be modified. Empty relief is rejected. Bundled searchable vector icons and text use the same real conversion pipeline.

## Local STL → integrated grip

Binary and ASCII `.stl`, at most 1,500 triangles / 2 MB, each source axis 0.2–250 mm. Content/coordinate/index/triangle checks precede heavy modeling. Welded directed edge incidence and positive outward volume checked; only connected, closed, outward-wound, convex, flat-bottom, supportable inputs are supported. **Concavities, holes/cavities, branches, disconnected shells, open/nonmanifold meshes and unsupported overhangs are explicitly rejected**, never replaced by a convex hull or falsely repaired. Reorient or remodel a supported flat-bottom grip before trying again. Original uploaded vertices/faces are retained and solid-unioned into the base.

Select Z/Y/−Z up axis before attaching. Inspect source preview/dimensions, then explicitly confirm source coordinates in millimeters: STL has no unit metadata. XY scales proportionally into 4–7 mm footprint; independent Z height 0.6–5 mm; rotate and place inside the isolated safe well. Minimum XY feature envelope 1.2 mm. Measurable import scale/rotation/placement changes survive export. Replace/remove, center/reset, image reset and full built-in reset are provided.

## Export, state and privacy

One binary STL for all parts on a separated, nonintersecting print plate; individual part buttons; Everything STL+notes ZIP (not 3MF). Preview and export share the exact current generated meshes and state key; a fingerprint is available on the stage. Worker generation is debounced with stale-result guards and visible build/error/ready status. Errors disable exports; a last-good preview is explicitly labelled and cannot silently export.

Portable JSON contains bounded normalized image data or mesh vertices, not nonexistent local paths; missing image payload requests reattachment. Named designs are local storage only. Files never leave the browser; no personal files are stored in this repository. Samples in `public/samples/` are original CC0 synthetic fixtures, with bundled font licenses in `public/FONT-LICENSES.txt`.

## Reproducible validation

`validate.mjs` independently parses actual binary STL: byte count, finite vertices/normals, nondegenerate triangles, consistent winding, 1e-5 mm welded edge incidence (two opposite-directed faces), positive volume for each connected component, expected dimensions and bed-flat print orientation. Checks every individual part and float32 print-plate translation. Tests defaults, all presets, 64 mixed parameter corners, and image/STL-derived outputs. Manifold intersection checks independently test released fits, fixed-spindle clearance, six slots, thrust support, sleeve/root clearance, intentional undeformed finger contact, vertical disassembly and separation/import isolation. These do not solve elastic mechanics.

`browser-test.cjs`, `feature-test.cjs`, `hole-test.cjs`, `resilience-test.cjs`, `stale-import-test.cjs`: production bundle served by `node serve-production.cjs`; real file-picker imports, downloaded STL parsing/signatures, PNG/JPEG differences/threshold/depth, ASCII/binary units and transforms, invalid files and recovery, every preset and real mark geometry, ring-hole probes, ZIP contents, undo/redo, named and portable saves, views/theme/focus/collapsibles, worker failure and asynchronous stale import, and 320/390 px touch orbit/pinch/downloads. Reports and screenshots record performed tests, not physical print claims.

Reference: read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`, inspected README, styling, App/Viewer, worker, STL/export and image-tracing modules. Studio shares concrete tactile keys, labelled collapsible controls, source/cutout views, import dimensions, worker ownership and printable-part export patterns; no keycap socket or switch template is imposed. Existing local studio infrastructure is reused with a newly implemented collet model and independent mechanism tests.
