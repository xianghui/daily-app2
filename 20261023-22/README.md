# Balance Branch

A local React + Vite parametric **two-stage compliant whippletree fidget**. Hold the stationary round landing and alternately nudge the four daughter-beam tips in the XY plane. Three thin leaf necks let one primary and two secondary beams rock and return. Unlike a pluck comb, free spinner, single oval spring or pinned linkage, its branching equalizer offers coupled and independent flexural balancing gestures.

## Run / export

`npm install`, `npm run dev`, `npm run predeploy`. Base URL: `/daily-app2/20261023-22/`. Individual `deploy` uses gh-pages; the public site is published using the parent monorepo deploy flow. `npm test` runs independent geometry/mechanism checks. Three.js, Manifold WASM, React and all generator/export dependencies are bundled locally. No CDN, API, account or key is required.

The worker generates real CSG solids. Preview and binary STL export consume the same final vertex/index arrays. The visible export dimensions are X × Y × Z in **millimeters**. One connected part: object and print layout are the same undeformed solid. Individual-body and complete-body exports are available; a ZIP would duplicate this single part and is not offered. STL has no colour or unit metadata; preview palette changes do not alter the exported geometry.

## Dimensions / presets

- Daughter branch half span: 10–14 mm.
- Primary beam span: 36–52 mm.
- Leaf neck in-plane thickness: 1.2–2 mm.
- Extrusion height: 3–5 mm; palm landing 4 mm.
- Daughter neck nominal rise: 8–12 mm (6–10 mm exposed); primary neck free length approximately 14 mm.
- Palm dimple depth: 0–0.6 mm. Rigid beams have 4 mm in-plane width and rounded ends.
- Feather Branch: long/slender calibration design; Even Balance: middle ranges; Wide Canopy: short primary and wider secondary beams. Thumbnails render actual generated meshes. Variations only select supported ranges.

## Image workflow

Choose/drop **PNG or JPEG** (2 MB; ≤12 megapixels; ≤6,000 px per side). Header dimensions are checked before decoding. Source and exact conversion previews are shown. Images are normalized to at most 500 px on their longest side and then sampled on a bounded **20 × 20 luminance grid**; transparent pixels composite onto white. Fit/contain or fill/crop plus ±25% crop shifts determine sampling. Threshold 1–254 selects dark pixels; relief mode maps darkness continuously to height. Depth is 0.4–3 mm. This is **2D-to-height relief, not reconstruction of a full 3D object from one photograph**.

A closed height-field slab has a continuous 0.4 mm backing, welded sidewalls and bottom, and is solid-unioned 0.15 mm into the 3.2 mm palm floor. The top interpolates neighboring grid samples; threshold boundaries therefore have sloped transitions, not exact vector outlines. All-white/empty conversion is rejected. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm are bounded by a 6.5 mm safe radius. Images affect actual exported material, not a preview decal.

## STL workflow / deliberate supported subset

Binary and ASCII **.stl**: 2 MB maximum, **1,500 triangles**, each source dimension 0.2–250 mm. Confirm that source coordinates are millimeters before integration; STL cannot tell us their units. Source mesh preview, dimensions and format appear alongside the final model. XY scale fits the 4–7 mm footprint; Z independently fits 0.6–5 mm grip height. Rotate around Z, translate or center/reset. Arbitrary tilt is intentionally not supported: broad flat bases must already face down in source Z.

Only one **convex, closed, connected, outward-wound, non-self-intersecting solid with a broad flat bottom** is supported. The bottom contact polygon must cover ≥25% of its XY bounding rectangle and contain every projected source vertex. Minimum fitted XY span 1.2 mm. Invalid topology, degenerate triangles, concavity, excessive complexity, overhangs, missing bottom contact or unsafe transforms are rejected with feedback; **no automatic repair is claimed or performed**. Normalize/decimate, orient and repair in an external modeler before retrying.

The accepted mesh is transformed, embedded into the palm floor and unioned using Manifold CSG. Final integration must form exactly one connected closed positive-volume solid. Interpenetrating decorative shells are never exported as a fake union. The source affects both preview and export and cannot enter the necks or moving beam envelope. Built-in raised oval returns when imports are removed. Source and final previews remain available; replacement, removal, reset and invalid-file recovery are supported.

## Local privacy / persistence

Files are processed locally in the browser worker/canvas; no user uploads or remote conversion services. The repository includes only original synthetic PNG, JPEG, ASCII wedge and binary gem fixtures, available via Try buttons and download links (no third-party attribution required). Explicit Save JSON embeds bounded mesh data or a normalized image payload plus settings. Open JSON revalidates payloads; absent image data requests original-file reattachment rather than pretending it was restored. Undo/redo includes modeling parameters and import settings. Uploaded personal files are not persisted to the repository.

## Printing / calibration / limitations

**TPU 95A only**, 0.4 mm nozzle, 0.15–0.2 mm layers; print the complete flat Z=0 face on the bed, solid thin necks. No support, hardware, captive interfaces or assembly. Do not substitute stiff brittle PLA for these flexures. Print Feather Branch as a full-size material/extrusion trial first. Remove strings from air gaps without nicking leaf roots. Start at tiny **1° in-plane gestures** and release. Stop at whitening, layer separation, permanent set or poor return. Never force beam contact, pull branches apart or twist out of plane. There is no hard travel stop and no universal tolerance or safe-travel guarantee.

Runtime checks validate supported ranges, import topology/content, final manifold edge incidence and winding, finite nondegenerate faces, positive volume and one connected component. Offline tests additionally cover all 64 range corners, presets and deterministic variations; independent exported-STL parsing/bounds/volume/component checks; CSG material/air probes and exact import-isolation checks; conservative simultaneous ±2° beam endpoint sweep separation; and kinematic neck outer-fiber strain estimates. These are **geometry and mechanism-envelope checks, not FEA, measured return force, fatigue certification or physical print testing**. See VALIDATION.md and machine-readable reports for observed results. No physical print has been performed.
