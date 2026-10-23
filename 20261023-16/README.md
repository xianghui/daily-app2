# Lattice Breath — local fidget design studio

A React + Vite parametric **open cylindrical diamond-lattice squeeze fidget**. Hold the lower collar and gently press the upper collar axially, then release. Eight circumferential nodes on five staggered rows form 64 diagonal struts. In flexible TPU, bending junctions permit cell opening and radial expansion under small axial compression. This is a fused compliant structure, **not** a freely woven finger trap, a continuous bellows membrane, a bearing, or a guaranteed snap mechanism. It differs from the galleries' planar flexure cells and corrugated shells in its cylindrical open-cell deformation mode.

**No physical print, force, elastic-travel, fatigue or durability testing has been performed.** This is a digitally checked prototype. Geometric clearance and manifoldness do not prove spring force or life. The preview is the exact undeformed printable body; it does not simulate squeezing or claim FEA.

## Run / build / publish

```
npm install
npm run dev
npm run predeploy
npm test
node variation-regression.mjs
```

Vite base: `/daily-app2/20261023-16/`. App scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Public publishing uses the ROOT monorepo predeploy/deploy folder, not individual deployment. Browser tests use Playwright Chromium and local Vite port 5270: `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs`.

Dependencies are locally bundled React, React DOM, Three.js, manifold-3d WASM, Vite and React plugin, gh-pages; Playwright is development-only. No CDN, remote generation service, account, API key or payment. Heavy CSG and STL parsing run in a bounded module worker.

## Shape and ranges

All lengths are **millimeters**; rotation is degrees.

| Parameter | Range | Default |
| --- | --- | --- |
| Lattice pitch diameter | 24–32 | 27 |
| Lattice rise | 24–36 | 30 |
| Strut diameter | 1.2–2 | 1.4 |
| Collar height | 2.4–3.4 | 2.8 |
| Collar radial wall | 2.4–3.6 | 3 |
| Palm dimple depth | 0–0.6 | 0.3 |

Round convex-hull capsule struts with shared low-resolution spherical end profiles join two annular collars. A rigid neck connects the lower collar to a 20 mm palm landing. Node rows are separated by rise/4 and alternate a 22.5° circumferential offset. Collar inner bore diameter is pitch diameter minus radial wall. The whole parameter box preserves a conservative diamond-cell air estimate above 3 mm and strut angle below 47° from vertical. This is static geometry, not a validated deformed clearance envelope. Initial calibration movement is only **0.5 mm**; stop on rubbing, folding, whitening or failure to return. No universal elastic travel is specified.

Three actual mesh thumbnails: **Airy Sleeve** (broad, short, thin struts), **Palm Lattice** (balanced), **Tall Weave** (narrow, tall, thick struts). Variations stay within ranges. Sliders and numeric inputs edit real geometry; invalid/stale/busy states block export. Surface dimples are real boolean subtractions on the landing only. Colours are preview-only: **STL contains geometry, not colour or unit metadata**.

## Editor and exports

Model-first matte 3D preview, soft shadows, 10 mm reference grid, orbit/pinch/zoom/reset/fit, selected-body highlighting and exact final X/Y/Z dimensions. Desktop has a compact right rail; phone has collapsible tabbed controls and fixed reachable export. Shape / Mechanism / Surface / Import / Print tabs expose progressive guidance. Original warm studio styling is informed by Vaseverse's model-first workflow; no reference assets, branding, text or source code are copied.

Manifold-3D performs true CSG unions, not overlapping export shells. Preview and binary STL use the same final mesh. Every result is checked for finite coordinates, nondegenerate triangles, positive volume, outward winding and closed welded-edge incidence. Integration must leave exactly one connected solid. One printed body means no separate moving components or parts ZIP is needed; named-body and whole-body STL exports are available. Useful filenames contain import type and dimensions.

Undo/redo retains modeling/import states. Save/Open JSON embeds a bounded normalized PNG data URL or validated STL vertices. Source STL is revalidated on reopening. Missing image payloads explicitly request original-file reattachment; they are not silently restored. JSON max 2 MB, normalized embedded image max 250,000 pixels. Replace/remove/reset controls restore genuine built-in geometry.

## Image import — PNG and JPEG

File picker works on phones/desktops; drag/drop on supported browsers. Synthetic downloadable `mark.png` and `waves.jpg` fixtures are generated art, with no external attribution needed. Only these synthetic assets are bundled.

Limits before decoding: 16 bytes–2 MB; actual PNG/JPEG header and extension must match; at most 12 megapixels and 6000 px per side. Normalize to at most 500 px side for portable saves. Transparent pixels composite onto white. Source preview and exact 20 × 20 conversion preview are shown.

Method: sample a **20 × 20 luminance height field**, `0.2126R + 0.7152G + 0.0722B`. Threshold mode raises samples darker than threshold (1–254); relief mode uses `depth × (1 − luminance/255)`. Depth 0.4–3 mm. Adjacent samples are triangulated with interpolated slopes over a continuous 0.4 mm backing and closed sides/bottom. Empty silhouettes/reliefs are rejected. Fit entire image or fill/crop square, with ±25% crop offsets.

This is **2D-to-relief/silhouette conversion, not reconstruction of a full 3D object from a photo**. Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y ±2 mm. Backing embeds 0.15 mm into the landing's Z=3.2 mm well floor and is boolean-unioned. Entire import must stay inside a radius-6.5 mm protected well, at least 11.7 mm from the sleeve's outer collar. Changing source pixels, threshold, depth, crop, scale or placement changes actual export without entering the compliant lattice.

## STL import — binary and ASCII

Synthetic downloadable `wedge-ascii.stl` and `gem-binary.stl` samples. Limit 2 MB / 1500 triangles; source dimensions each 0.2–250 mm. STL has no units: explicit confirmation that source coordinates represent **millimeters** is mandatory before integration. Show source dimensions, format, triangle count and source 3D preview.

Supported subset is deliberately bounded: **one convex, closed, outward-wound connected solid with broad flat Z-down bottom covering at least 25% of XY area and enclosing its entire XY projection**. Open/nonmanifold, disconnected, inward-wound, self-intersecting, concave, hollow, overhanging, degenerate, nonfinite, oversized and truncated inputs are rejected with actionable errors. Equal vertices weld at 0.00001 mm for topology; source triangle pairs receive explicit intersection checks. No arbitrary repair is claimed.

XY is aspect-preservingly scaled to 4–7 mm footprint; Z independently fits height 0.6–5 mm. Minimum fitted XY span 1.2 mm. Z rotation, center/reset, translation, replace/remove are real integration controls. Tilting is not supported because it would break the flat-base contract. The complete transformed source must remain inside the well and join one solid, otherwise export is disabled. The source becomes the palm grip, not an unchanged displayed/re-exported mesh.

## Privacy

All user files are processed locally in the browser. No uploads, remote APIs, personal fixtures in the repository or background input-file storage. Saved JSON intentionally contains the bounded import so the user can reopen it locally. Downloading files does not upload them.

## Printing, supports and calibration

- Use TPU 95A as a starting material; rigid PLA/PETG is unsuitable for repeated squeeze use. No hardware, magnets, bearings or fasteners.
- Lower collar and landing lie flat at Z=0. 0.4 mm nozzle, 0.16–0.2 mm layers; ensure at least three extrusion lines across a 1.2 mm strut. Verify actual toolpaths in your slicer.
- **Removable supports are required beneath the upper collar**. Diagonal struts may also need local support depending on printer/material. Open bore and side cells permit access. Remove all support without cutting struts; reject a print with inaccessible support or damaged junctions.
- One solid: no assembly, captive-joint release or sliding-fit clearance. Collar/strut joins are intentionally fused and flex through material deformation. No loose or retained moving bodies are falsely unioned.
- First print Airy Sleeve as a full-size material/support trial. Gently compress 0.5 mm and release; inspect springback, strut junctions and layer adhesion. Do not insert fingers into the sleeve. Adjust only after testing your printer/material; no universal tolerance, force, fatigue life or print success is promised.

## Validation

`validate.mjs` independently parses actual binary STL bytes: nonempty finite vertices, normalized outward stored normals, nondegenerate faces, exact mm bounds, Z=0 bed, positive volume for each connected component, and exactly two oppositely directed incident triangles per welded undirected edge (1e-5 mm). Runs defaults, min/max, 64 range corners, all three presets and eight variations (78 cases); 24 image/STL integration cases receive the same mesh/mechanism tests.

Mechanism checks count 40 junction nodes / 64 struts, compute bore/cell air, slopes, collar dimensions and import isolation. CSG probes verify every node, every strut midpoint, collar material, open central bore and side-cell windows. Small-travel collar separation checks are geometric only, **not a deformed-mesh simulation or FEA**. Real force, motion and fatigue remain unverified.

`variation-regression.mjs` adds 128 seeded exports. `browser-test.cjs` uses real PNG/JPEG and binary/ASCII file inputs, downloads STL, compares geometry signatures against defaults and changed controls, validates exact preview/export matches, malformed/unsupported input rejection, replace/remove/reset, actual per-body export and 320/390 px touch orbit/pinch/import/export. `extra-browser.cjs` exercises presets/variations, source drop, colour neutrality, undo/redo and portable save/open round-trips for all four imports. `mobile-sheet.cjs` checks collapse/expand, all tabs and fixed reachable download. Gallery checks compile all inline scripts, preserve prior entries, enforce newest entry uniqueness and render/filter without errors. Reports describe executed digital tests, never physical tests.
