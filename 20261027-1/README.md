# Pinch Brake

A local React/Vite maker studio for a **three-part friction-brake fidget**. Rotate a rigid thumb disc, gently squeeze two TPU caliper jaws against its rim, release and repeat. This is neither a ratchet nor a locking clutch. No hardware is required. The caliper must be printed in flexible TPU (95A starting point), not brittle PLA. Frame and rotor use PLA/PETG.

## Run and export

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Individual app deployment is available through `npm run deploy`; the public gallery uses the parent monorepo deployment instead. Binary STL downloads include each part or a separated print plate. Everything ZIP contains three actual STLs and assembly notes. STL does not encode colours or units. Preview colours are visual only.

## Studio

Reference-inspired 372 px left control rail, lavender desk, white surfaces, coral tactile controls and locally bundled Fredoka/Rubik fonts. Saved dark theme, preview-first phone layout, touch orbit/pinch, fit/zoom, collapsible sections, three real model-thumbnail presets, bounded random variations, text and six searchable SVG icons. Assembled, exploded, isolated and print-plate views use current geometry. See-through frame explains the loose assembly. Squeeze preview estimates lateral jaw deformation only: it is not FEA, friction, fatigue or print testing. Export always uses the undeformed printable caliper. A 0.1 mm preview-only floor separation avoids z-fighting.

Undo/redo retains 35 states. Six named designs persist locally. JSON save/open includes bounded image or mesh payloads; missing image payloads require reattachment rather than pretending restoration. All file processing remains local, with no service, API key or CDN dependency.

## Image workflow

Choose PNG, JPEG or simple self-contained SVG (desktop/phone file picker or desktop drop). Synthetic mark.png, waves.jpg and ring.svg are included. Maximum 2 MB, 12 MP, 6,000 px per image axis. SVG is limited to 2,000 simple elements without references, scripts, fonts or effects, rasterized locally to 256 px. PNG/JPEG content signatures and dimensions are checked before decoding. Images normalize to at most 500 px for portable storage, then fit/crop and shift onto a **20 × 20 grayscale sampling grid**. Light/transparent background is removed; the dark-background setting inverts luminance. Thresholded samples or grayscale heights become a triangulated closed height-map solid with 0.4 mm backing, unioned into the palm well. Raised or engraved modes change actual STL geometry. White holes stay unraised/unengraved, backed by the solid palm floor; this is not an exact vector outline tracer or through-cut stencil. Checkerboard shows the actual sampled foreground. This is **2D-to-relief, not automatic full 3D reconstruction from one photo**.

Threshold 1–254; raised depth 0.4–3 mm; engraving 0.4–0.6 mm; crop X/Y ±25%. Footprint 4–7 mm; rotation ±180°; X ±1.5 mm; Y ±2 mm. A 6.5 mm radial safe zone blocks imported geometry from entering the mechanism. Reset, replace and remove return to reproducible defaults.

## STL workflow

Binary and ASCII STL, maximum 2 MB and 1,500 triangles, 0.2–250 mm source extents per axis. Source dimensions, triangle count and format appear beside an independent source 3D preview. STL has **no unit metadata**: explicit millimeter confirmation gates integration. Choose Z up, Y up or inverted Z before attaching; changing orientation requests reattachment. Uniform XY scale fits a 4–7 mm footprint; independent Z height is 0.6–5 mm. Rotate, center and offset the mesh within the protected well.

The parser verifies finite coordinates, closed opposite-directed edge incidence, positive volume, connected convex solid geometry, broad flat bottom and supported topology. Open, inward-wound, nonmanifold, concave, hollow or unsupported geometry is rejected with guidance. It is never replaced by a hull, silently repaired or exported as interpenetrating shells. The accepted original mesh is scaled, transformed and solid-unioned into the stationary palm grip. Final connectedness, boundaries and protected clearance are rechecked. Synthetic wedge-ascii.stl and gem-binary.stl are original bundled fixtures, not personal uploads.

## Parameters and materials

All physical dimensions are **millimeters**. Palm diameter 22–28; rotor diameter 28–34; TPU free jaw length 30–36; radial running/peg/jaw gap 0.3–0.6; TPU jaw width 1.6–2.2; palm dimples 0–0.6. Round, hex and oval palms. Frame floor 4; rotor 3 plus 1.9 raised hub; caliper height 3. Engraving leaves at least 2.6 mm palm floor. Bounds are displayed for the actual selected printable export.

Print each part Z=0 down, with posts up. No supports intended; 0.4 mm nozzle, 0.16–0.20 mm layers and three walls are starting settings. Drop the flexible caliper over the two rear locating pegs and place the rotor on its post. The holes remain loose; hold level. Parts deliberately **are not captive** and lift vertically for release/disassembly. Pinch only to rim contact; stop if jaws permanently deform. No bearings, fasteners, magnets or glue. Small loose parts are not intended for children.

Use **Gentle Start as a full-size calibration set** before adjusting feel. Clearances depend on printer, material, flow and elephant foot; deburr and increase gap if binding. Thin TPU jaws require material calibration. Friction effectiveness and elastic return are design intentions, not measured force claims. **No physical prints, force, wear or fatigue tests were performed.**

## Geometry and verification

Manifold WASM performs solid operations in a dedicated worker; imports are parsed there too. Debouncing, generation IDs and a complete current-state key block stale exports. The preview and binary serializer share the exact valid model. Every build independently checks nonempty finite triangles, nondegenerate faces, consistent opposite edge winding, positive enclosed volume and a single connected closed solid per part; float32 translated print-plate geometry is checked too. No unsupported source is automatically repaired.

`node validate.mjs` covers 20 parameter cases (defaults, every preset and 16 representative extrema), plus 35 imported-output cases including both STL formats and threshold/grayscale/engraved relief. Independent binary checks validate each part and combined print plate. Kernel intersections sample full rotor rotation, vertical assembly/release, plate separation and import isolation. Independent rim probes verify free gap and intended contact after inward tip motion. This is geometric contact validation, not a model of nonlinear elastic deflection or friction force.

Browser scripts test the production bundle under its actual base prefix: actual uploads/downloads and signatures, image pixel/threshold/depth changes, STL transformations, invalid files, reset, JSON/named designs, icons/text/SVG hole probes, ZIP contents, worker abort/recovery, views, keyboard focus, themes, 320/390 px phones, touch orbit and pinch. Reports/screenshots are retained beside these scripts. See VALIDATION.md for executed results.

Dependencies: React/ReactDOM (MIT), Vite/plugin-react (MIT), Three.js (MIT), manifold-3d (Apache-2.0), fflate (MIT), gh-pages (MIT), Fontsource Fredoka/Rubik (SIL OFL); Playwright for browser validation (Apache-2.0). Everything needed for generation is bundled locally. No reference project files, history or dependencies were modified.
