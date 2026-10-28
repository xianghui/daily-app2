# Wing & Poise

A local React + Vite parametric **three-part balancing-bird kit-card studio**. Snip twelve breakaway runners, seat a tapered upright in a personalized plinth, and lower a symmetric drooped-wing bird onto the open ridge. This is a physical print project, not a browser game. No hardware or external services.

## Reference-first evidence

Searched the 45 STL paths under `/Volumes/ExternalHD/3d_printing_apps/` before selecting geometry. Read the keycap, slider, clicker and fabric project instructions. Those switch/socket, T-rail and interlocking-link meshes do not supply a suitable flat-sheet kit carrier; no local kit-card STL was found. Used **Mike Kasberg's White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Independently downloaded and parsed the actual binary STL, and read source README, LICENSE, kit_frame.scad and white-cat-kit-card.scad. Attribution is not an endorsement; source is provided without warranty.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; 179.820 × 178.020 × 3.190 mm; two edge-connected mesh components after 0.00001 mm coordinate welding. STL has no unit metadata; millimeters are corroborated by OpenSCAD thickness.
- Measured Z=0/1.6 mm sheets, 1.6 mm frame rail at Y=100 mm, and .21/.22 mm bridge levels. Inspected actual mesh sections at Z=.1/.5/1.59 mm, not merely a listing image. `reference-analysis.py`, `reference-analysis.json` and `reference-sections.svg` preserve reproducible evidence. Run `python3 reference-analysis.py /path/to/source.stl` in this directory to repeat.
- The source has coplanar/nonmanifold facet artifacts; it is **not** repaired, imported into the printable result, or bundled. Only the measured sheet/carrier/low-runner construction is adapted. The output is a new CSG reconstruction with a reinforced 2.4 mm rail and .4–.6 mm breakaways, not a spacecraft copy or convex-hull replacement.
- The bird's symmetric arm layout, solid drooped mass lobes, open V seat, tapered perch, foot and plinth are original parametric designs. Total .15–.45 mm mortise allowance is a proposed printer-dependent fit, **not** a measured source interface.

The read-only visual reference was `keycap_generator2`: README, styles.css, App.tsx, Viewer.tsx, worker.ts, STL/export modules and imageTrace.ts. Concrete patterns retained: 374 px left control rail/right live viewer, lavender desk/white panels/coral depressed keys, locally bundled Fredoka/Rubik, sectioned millimeter sliders with numeric inputs, source/final previews, explicit STL-unit confirmation, saved dark theme, ghost/exploded/part/plate views and export gating. No source project dependencies/history copied wholesale; installed this app's dependencies after a fresh Vite scaffold. Reused local Daily Object Lab's bounded import, worker and studio infrastructure, with a new model and independent assembly validation.

## Geometry, ranges and assembly

All linear dimensions are **mm**, rotations degrees. The source/default sheet is 1.6 mm; selectable 1.6–2.4. Card width160–210, height200–230; wing half-span30–42; droop18–26; tip radius6–8; ligament3–4; perch height46–56; plinth half-width28–34. Tabs .8–1.4 wide × .4–.6 thick. Carrier-spacing bias4–7 changes where parts sit between fixed row runners. Dimple depth0–.4. Three real presets, three plinth/bird silhouettes, bounded variations and reset are included.

1. Print card or three de-tabbed parts at Z=0, without supports, PLA/PETG, .4 nozzle, .2 layers, three walls. **Bird at symmetric 100% infill**: the tetrahedral centroid calculation assumes uniform density. Check declared card size against the bed.
2. Adult: snip12 low tabs 2 mm outboard of nonfunctional edges, then trim nubs/elephant foot. Tests cut these same 12 locations and require exactly four connected pieces: carrier + three parts. Small/cutting hazards; not for small children.
3. Calibrate a foot before a full kit: tongue is6 wide, sheet-thickness deep. Mortise is `(thickness+gap) × (6+gap)` with .15–.45 **total** allowance, .30 default. Friction fit is not universal; optional glue only at the stationary foot.
4. Turn the perch upright, insert tongue downward into plinth and land its14 mm shoulders. Its final4 mm tapers symmetrically to a .4 mm ridge. Avoid asymmetric filing.
5. Lower the bird from above onto its open V seat. It lifts freely: **not captive**. Solid tip masses put the uniform-density centroid below the support. Nudge gently and catch it. The nominal preview uses .03 mm contact clearance, not a simulated or guaranteed rocking trajectory. Ridge roughness, anisotropy, infill, friction and tipping can affect reality.

Each part is CSG-unioned/subtracted with Manifold WASM, not interpenetrating shells. The card includes actual fused runners and tabs within its envelope, not loose parts beside a rectangle. The same printable meshes drive connected-card, de-tabbed, assembled, exploded and isolated views. Exploded offsets/ghost opacity are preview only. A positive final-mesh restoring mass offset is required; it does not prove contact dynamics or physical strength.

## Image import → real relief

File picker (desktop/phone), drag/drop, replace, remove and transform reset. PNG/JPEG≤2 MB,≤12 MP and≤6,000 px/side, content headers validated before decoding, normalized to≤500 px. Simple resource-free SVG≤2 MB/2,000 elements is locally rasterized at256 px; scripts, effects, references/external content rejected. CC0 synthetic PNG, JPEG, even-odd SVG ring and ASCII/binary STL fixtures are bundled under `public/samples/`.

Artwork is locally sampled to a bounded **20×20 grayscale grid**. Transparent/light background becomes white, or choose dark/invert. Fit/cover, crop pan, threshold1–254, physical footprint4–7, Z rotation±180°, X±1.5/Y±2 placement alter real geometry. Threshold mode assigns selected samples a height, grayscale mode proportional height, triangulates the height surface, closes the backing/side walls, then solid-unions it into the plinth. Raised depth .4–3; engraved .4–.6 keeps at least .8 mm floor. Light holes remain unraised/unengraved on the continuous backing, **not through-holes**. The exact sampled cutout is shown on a checkerboard; conversion is intentionally pixel bounded, not exact vector tracing or full 3D reconstruction from one photo. Ring-hole Boolean probes verify this behavior. Text≤8 characters and six searchable original SVG marks use the same pipeline. Empty silhouettes fail recoverably.

## STL import → integrated plinth mark

Both binary and complete ASCII STL≤2 MB/1,500 triangles, 0.2–250 mm per axis. Explicitly confirm millimeters, because STL has no units. Choose Z-up, Y-up or inverted Z **before attachment**; changing axis clears and requests reattachment. Source dimensions/triangle count/encoding and source mesh are visible. XY scales proportionally to a4–7 mm footprint; Z independently maps to .6–3 mm height, then rotate/center/place. The actual source triangles are passed to Manifold and **unioned into the plinth**, not merely displayed or re-exported.

Deliberately supported subset: one closed, outward-wound, connected **convex flat-bottom** solid with broad bed contact and no overhang projection. Concave, hollow, branched, open, nonmanifold, self-intersecting, degenerate, inward and over-limit meshes are explicitly rejected with corrective guidance. No silent hull substitution or claimed repair. A bottom-footprint convex hull is used only for validation, never as replacement geometry. Minimum integrated XY feature≥1.2 mm. All imported vertices stay in the6.5 mm-radius isolated mark zone; even extreme placements that exceed it block export. Imports cannot alter bird balance, seat or joint fits.

## State, exports and privacy

Heavy parsing, CSG and final checks run in a Web Worker using bundled WASM; 100 ms debounce, generation IDs and current-state keys prevent stale downloads. Invalid settings/imports/worker failure disable every geometry export, even if a last-good preview remains visibly labeled. Preview/export share the exact final valid geometry; displayed fingerprint is compared against real downloaded bytes in tests.

Undo/redo, six local named designs, and versioned JSON save/open include bounded normalized image data or verified mesh payloads. Missing image payload requests reattachment; malformed transforms/payloads block export rather than pretend restoration. All files stay in this browser; no upload, server, API key, CDN, paid service or personal repository assets. Preview colours are **not stored in STL**.

Prominent binary STL download, every part's individual button and Everything ZIP (card +3 parts +numbered ASSEMBLY.txt). This is **not** a3MF exporter. STL/ZIP meshes are print-oriented at Z=0, not assembled overlapping exports.

## Run and reproduce checks

Node22.12+; `npm install`; `npm run dev`; `npm run predeploy`. Base `/daily-app2/20261028-16/`. Individual deploy script exists as requested, but combined publication uses the **root monorepo deploy/** flow.

- `npm test`:14 defaults/presets/extreme cases +30 image/STL derived cases. Independent binary parsing checks finite coordinates, exact byte lengths, normals, nonzero faces, mm bounds, welded edge incidence exactly two with opposite winding, genus and each component's positive volume. Every part checked separately.
- `node serve-production.cjs` serves production at5476. With Playwright Chromium available, run `node browser-test.cjs`, `node feature-test.cjs`, `node studio-layout-test.cjs`, `node resilience-test.cjs`, `node portable-errors-test.cjs`, `node hole-test.cjs`, `node stale-import-test.cjs`.
- Actual PNG/JPEG/ASCII/binary uploads and STL downloads, threshold/pixel/depth/scale/rotation/placement comparisons, same-state fingerprints and JSON regeneration, invalid/recovery paths,6 icons/text/SVG, preset variations, ZIP contents, worker-abort reload, portable roundtrips, mobile320/390 px, real touch orbit/pinch, keyboard focus, reduced motion, saved theme.
- Independent Manifold intersections check all assembled pairs,13-sample foot insertion and bird lift-off paths, separated flat parts, part/card containment,12 cutter removals, bounds and direct float32 export centroid. Nominal support geometry is checked, not contact forces.
- Root gallery inline compilation, preserved entries, exact new entry, real render, staged app-file hashes and staged import downloads are checked before root deployment.

**No physical print, fatigue, friction, contact-dynamics, strength or real stability test performed.** Printer/material calibration and a trial print remain necessary. Detailed JSON reports and screenshots are included; computational validity is not a physical-test claim.

Dependencies: React/ReactDOM, Vite/plugin-react, Three.js (MIT); Manifold3D (Apache2.0); fflate (MIT); Fontsource Fredoka/Rubik (SIL OFL); gh-pages; Playwright for tests. Dependencies/fonts/WASM are bundled locally in production.
