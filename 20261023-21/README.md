# Comb Current

A React + Vite, entirely local browser studio for an **interleaving TPU squeeze fork**. Pinch the two outer cantilever rails gently near their free ends. Four fingers on each rail are staggered, allowing the two combs to pass between one another and separate on release. Rail bending supplies elastic resistance. This is not a pluck comb, ratchet, snap switch or latched mechanism. The current and read-only archived galleries were inspected; the archived tree was not changed.

## Studio and implementation

Visual direction: https://vaseverse.org/ informed the model-first canvas, compact right rail, warm ivory/clay palette, grouped controls and reachable export. No reference branding, assets, text or source code were copied. Three.js supplies touch orbit/pinch, zoom, reset/fit, matte shading, soft shadows and a 10 mm reference grid. Three actual generated preset thumbnails, bounded Variations, numeric/sliding controls, undo/redo, local portable JSON save/open and active-part selection are functional. Mobile controls collapse; Download STL stays fixed and reachable. The undeformed object preview and printable layout deliberately show the same single body; no flex animation is presented as simulation. STL does not store the selected preview colour.

React/React DOM, Three.js and Manifold-3D WASM are bundled locally by Vite. Solid modeling and STL input validation run in a dedicated worker; generation is bounded to eight fingers and a 20×20 image grid. No CDNs, API keys or paid services. Playwright is a development-only validation dependency; gh-pages is publishing-only. gh-pages is pinned to 6.1.1; npm audit reports zero known vulnerabilities at build time (legacy dependency deprecation notices remain).

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261023-21/`. Individual `predeploy` is exactly `npm run build`; `deploy` is exactly `gh-pages -d dist`. Public collection publishing uses the ROOT monorepo deploy flow, never the individual app deploy command.

## Parameters and solid construction

All lengths are millimeters; rotation is degrees.

| Parameter | Supported range | Default |
|---|---:|---:|
| Arm half spacing | 10–14 | 12 |
| Arm length | 36–52 | 44 |
| Flex arm thickness | 1.2–2 | 1.6 |
| Extrusion height | 3–5 | 4 |
| Finger width | 1.6–2.4 | 2 |
| Palm dimple depth | 0–0.6 | 0.3 |

Each rail is a straight rounded-end capsule extruded flat from Z=0. The pair is boolean-unioned to a rigid cross bridge and an isolated round palm pad through a short neck. Fingers are rounded-tip horizontal capsules. Their centers alternate at half the pitch `(armLength−10)/3.5`; opposing tips start 0.5 mm apart, and neighboring side gaps range from 1.314 mm upward. Narrower fingers increase actual running air clearance. Fingers must not latch or contact during gentle use. A full 3D boolean union creates exactly one connected closed solid; overlapping visual shells are not exported.

The palm well retains a 3.2 mm floor; dimples are actual subtractions, never cuts into flexible rails. Imports fuse only within the well, below Y=6.5, away from the joining neck and the roots at Y=20. Default final bounds: **26 × 72.8 × 4.85 mm**. Final dimensions are measured from the exported triangles, including imported grips. Three valid distinct proportion/feel presets: **Long Drift** (long/slender), **Balanced Comb** (intermediate) and **Broad Weave** (short, wide, thicker). All supported parameter corners are digitally checked.

## Image workflow — PNG and JPEG

Use Import's file picker on phones or desktop, or drop exactly one file. All file contents remain on the device. Synthetic `mark.png` and `waves.jpg` fixtures are bundled; try buttons and direct download links are available.

Limits: 16 bytes–2 MB, actual PNG/JPEG signature, at most 12 million pixels and 6,000 pixels on either side; dimensions are checked before image decoding. A bounded ≤500 px portable source preview is generated locally. Alpha is composited onto white. Fit-entire-image or fill/crop and X/Y shift (±25%) map the image to a **20×20 grid** using browser canvas resampling. Luminance is `0.2126R + 0.7152G + 0.0722B`.

- Threshold: a grid sample darker than threshold (1–254) raises the surface by the chosen 0.4–3 mm depth; lighter samples are zero.
- Relief: sample height = `depth × (1 − luminance/255)`.
- Adjacent grid points are joined with triangles, so threshold transitions are sloped, not exact vertical pixel outlines.
- A continuous 0.4 mm solid backing, perimeter walls and a closed underside complete a manifold patch. It sinks 0.15 mm into the well floor and is **boolean-unioned** into the palm pad.

This is **2D-to-relief conversion**, not full 3D object reconstruction from one photograph. An all-white/empty conversion blocks export. The source image and exact converted grid remain visible alongside the final model. Footprint 4–7 mm, Z rotation ±180°, X placement ±1.5 mm and Y ±2 mm are editable. Every resulting vertex must remain in the 6.5 mm-radius protected well zone; invalid placements block export. Image content, conversion settings, depth and transforms affect exported geometry.

## STL workflow — ASCII and binary

Synthetic original wedge and faceted-grip STL fixtures are included; no personal uploads are in the repository. Unitless source STL dimensions are displayed and **millimeter interpretation must be explicitly confirmed** before integration. XY is proportionally fitted to a 4–7 mm footprint; Z is independently fitted to 0.6–5 mm grip height. Rotate around Z, center, translate, replace, remove and reset transforms. X/Y tilt is intentionally unsupported to preserve bed contact. Export is a new integrated fidget, not an unchanged source re-export.

Strict contract: a single outward-wound, connected, closed **convex** solid with a broad flat base facing down Z. At most 1,500 triangles, 2 MB, 0.2–250 mm per source axis, finite coordinates within ±10,000 mm. Welded edge topology, winding, positive volume, connectivity, degenerate faces and triangle intersections are checked. Concavity, hollow/disconnected/open/nonmanifold/self-intersecting meshes, mismatched/truncated contents and unsupported overhangs are rejected with actionable feedback, never claimed repaired. Bottom contact must be ≥25% of XY bounding area, with every vertex's XY projection inside its bottom convex footprint. The fitted XY span must be ≥1.2 mm in both axes. Unsafe transforms and complexity are rejected before generation.

The grip's flat base embeds 0.15 mm into the recessed solid palm floor and is robustly unioned. Integration must form exactly one connected solid. A separate worker preflight verifies final topology and positive volume on **every edit**. No arbitrary repair is attempted.

## Local design files / privacy

Save JSON includes bounded imported STL geometry or the normalized ≤500 px image payload plus crop/conversion and transformation settings. Open validates and restores that actual payload; missing image data explicitly requests reattachment rather than pretending it was restored. JSON limit 2 MB. Files are never uploaded or sent to external services. The app makes only local asset/sample requests; no APIs, keys, paid services, analytics or CDN imports. All bundled sample fixtures are synthetic project-authored assets. Do not commit personal files selected during use.

## Export, materials and calibration

The primary Download STL exports binary STL from exactly the final preview mesh. An individual-part option is included; there is one connected part, so no multi-part ZIP or assembly is needed. Filenames identify the source and model dimensions. STL has no unit metadata: use millimeters in the slicer.

- TPU 95A only. PLA/PETG are not recommended for these flex arms.
- Entire bottom at Z=0, 0.4 mm nozzle, 0.15–0.2 mm layers, solid thin arms. No supports or hardware.
- Inspect layer adhesion and both rail roots. Remove stringing from open finger gaps without cutting the rails. Do not force touching fingers past each other.
- **Long Drift is the full-size material calibration trial.** Start at 0.25 mm inward travel per rail and release. Stop if return is poor or there is permanent set, whitening, delamination or damage. Avoid twisting out of plane or pulling individual fingers.
- The digital 0.5 mm per-rail envelope is not a safe-travel rating. No physical travel stops are included. No physical print, force, return, fatigue, safe-stroke or durability test has been performed.
- There are no separate mating/captive parts or retention interfaces. Finger width and arm thickness are exposed for clearance/material calibration; FDM accuracy and TPU behavior vary by printer and filament. There is no universal fit guarantee.

## Validation actually performed

`npm test` generates 78 cases: defaults, minima/maxima, every preset, all 64 parameter corners and eight deterministic variations. It also generates 24 image/STL-derived variants. Every binary output is parsed independently for finite coordinates, nonempty/nondegenerate triangles, consistent stored normals, outward neighboring winding, welded two-incident-face edges, connectivity, positive enclosed volume and measured millimeter bounds. Each intended part is checked individually. Manifold CSG constructs the solids; input STL has a strict convex contract and explicit intersection rejection, rather than claiming arbitrary repair.

Mechanism checks cover arm wall thickness, analytic dimensions, rest tip and finger-side air gaps, rail/root/finger material probes, free-air probes and CSG import-isolation checks: imported geometry has zero symmetric difference from the default above Y=8. Conservative small-deflection cantilever bounds at 0, 0.25 and 0.5 mm inward travel per rail use slope ≤ `1.5 × travel / freeLength`; rigid-finger sweep subtracts twice `reach × sin(slope)` from the neighboring gap. All supported cases retain more than 0.65 mm conservative side separation. These checks are not FEA, contact dynamics, force prediction or physical certification. Elastic twisting and large travel are outside the model.

`browser-test.cjs` exercises real browser PNG/JPEG and ASCII/binary STL file pickers and actual STL downloads; compares geometry against no-import output and changed image pixels/threshold/depth and mesh shape/scale/placement; checks exact preview/export signatures, measured dimensions, replacement/removal/reset, individual exports, malformed/truncated/open/nonmanifold/concave/oversized inputs, bad dimensions/transforms and empty silhouettes. Unsupported inputs pause export with recoverable errors. Phone testing includes real picker imports/downloads, touch orbit/pinch and 320/390 px viewports. `extra-browser.cjs` tests all presets, random variations, undo/redo, all four portable import save/open round trips, drag/drop and colour-neutral geometry. `mobile-sheet.cjs` checks each tab, collapse/expand, no horizontal overflow and fixed export visibility at 320×740. JSON reports and desktop/phone screenshots record results. Production bundle and public smoke checks supplement development testing.
