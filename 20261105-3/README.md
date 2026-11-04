# Sine & Rise

A local React + Vite maker studio for an **educational circular-contact sine-bar kit card**. Snip sixteen real runners, stand two beams parallel and lower two cross-lapped spacers over them. Equal circular soles have a selectable centre distance: a measured external block height `h = L sin(angle)` raises one pair of soles. This is distinct from the gallery's bridges, hinges, linkages and optical kits: no rotating axle, truss lattice, switch socket or spring is used.

**Four printed assembly parts, one connected carrier. Adhesive required.** External measured height blocks and a flat surface are needed for the experiment, not provided in exports. No bearings, magnets or fasteners. Steady the model by hand. It is not a calibrated measuring tool or machine fixture. Physical printing, friction, fit, stability and accuracy have NOT been tested.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Production base: `/daily-app2/20261105-3/`. Individual scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`; public combined deployment uses the parent repository's root `deploy/` workflow. No API keys, CDN imports or paid service. Dependencies are independently installed: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fontsource Fredoka/Rubik; Playwright is development-only. Bundled fonts use OFL, Manifold Apache-2.0, Three/React MIT, fflate MIT. Browser files are not uploaded.

## Reference-first evidence

Before selecting geometry, inspected read-only local collections and parsed these actual candidates:

- `3d_printing_apps/keycap_generator2/public/templates/clicker_template2.stl`: 944 triangles, 3 edge-adjacent components, 15.20 × 15.20 × 43.10 mm. Rejected as an MX socket/stem reference inappropriate for this kit.
- `3d_printing_apps/fidget_fabric_generator/public/templates/diamond-link.stl`: 5,940 triangles, 1 component, 7.981 × 9.241 × 8 mm. Rejected as a volumetric fabric link rather than planar sheet joints.
- Reviewed `kit_card_generator/README.md`; no suitable existing local reference STL in that project. Downloaded and actually parsed [White Cat Kit Card / Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), by **Mike Kasberg**, under **CC BY 4.0**, documented by its [upstream source](https://github.com/mkasberg/white-cat-kit-card). Upstream README and verified license text are retained separately. No third-party mesh, fan-art silhouette or private input is redistributed.

Selected binary mesh SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, 30,616 triangles, bounding size 179.820 × 178.020 × 3.190 mm. STL has no units: mm is an explicit assumption matching the source construction. The source has two substantial closed edge-adjacent components plus 25 duplicate/degenerate pseudo-components; the entire source mesh is not manifold. It is a design reference only, NOT a mesh imported into our exported kit and not claimed printable by inspection.

`reference-analysis.py` reparses both local candidates and the freshly downloaded source. `reference-analysis.json` records source URL, SHA, dimensions, components, actual Z sections and decisions. `evidence/reference-sections.png` shows **actual mesh cross-sections** at Z=.100, .215 and 1.590 mm. Measured source values: **1.60 mm sheet**, **4.50 × 1.70 mm slots**, **.21–.22 mm low runners**.

### Measured → proposed design mapping

- Preserve source sheet thickness at the 1.60 mm default and its **1.70 mm sheet-receiving width**, obtained here as sheet + .10 mm TOTAL clearance. Do NOT reuse or claim the source's 4.50 mm slot length.
- Adapt source's perimeter/subdivided carrier and low removable runners into three shelves with four runners per clean part. Proposed stronger runner heights are .40–.60 mm; these are not source measurements.
- Replace closed source slots with original opposing **4.10 mm open cross-laps** across an **8 mm overlap**, leaving a .20 mm vertical gap. New 72–108 mm contact centres, equal 5–7 mm circular soles, joint positions and sine relationship are an original parametric reconstruction, not measured source features.
- The contact polygon uses 192 segments: maximum radial discretization error <.001 mm. This is numerical geometry error, NOT a real-world accuracy claim.
- Protected maker art changes only the signature beam face, not the other beam, contact soles, slots, spacers or fits.

Visual/interaction inspection: read keycap_generator2's README, styles.css, App.tsx, Viewer.tsx, worker.ts, export.ts and geometry engine. Applied its 374 px left rail, sticky compact brand, collapsible labelled controls, paired mm inputs, tactile pressed buttons, pink selection, lavender desk, local rounded fonts, gradient viewer, checkerboard source/cutout pair, original-source STL dimensions/axis/unit confirmation, per-part export and saved design patterns. That reference project was never edited, deployed or copied wholesale. Shared studio plumbing is adapted from prior daily-app work; geometry and contact validation are new.

## Parameters (millimeters unless stated)

| Control | Supported range |
| --- | --- |
| Card width / height | 140–200 / 140–220 |
| Contact centre span | 72–108 |
| Beam centre-plane separation | 24–40 |
| Beam height | 24–30 |
| Circular sole radius | 5–7 |
| Part thickness | 1.6–2.4 |
| TOTAL cross-lap clearance | .10–.30 |
| Part spacing | 3–5 |
| Runner width / thickness | .8–1.2 / .4–.6 |
| Tilt preview / calculator | 0–30 degrees; **not an export parameter** |

Three real model-thumbnail presets, soft/clipped/scalloped shoulders, text up to eight characters, six searchable bundled SVG marks, preview palette, undo/redo, six local named designs and portable JSON. Preview colours are not stored in STL. Calculator/angle and exploded offsets are expressly preview-only. Assembled, exploded, connected card, clean plate and all individual-part views share the current solid geometry; print exports always lie bed-flat.

## Image → actual engraving

PNG, JPEG and restricted simple SVG. Up to 2 MB, 12 MP, maximum 6,000 px side (raster); SVG ≤2,000 simple elements, no scripts, links, references, filters or external resources. Pixel dimensions are checked before decode. Normalize to ≤500 px, then sample **20 × 20 luminance heights** after fit/cover crop, ±25% pan and light-background removal or dark inversion. Threshold mode maps dark samples to chosen engraving depth; grayscale mode maps luminance to proportional depth. The exact conversion grid is displayed on a checkerboard beside the source. The grid is triangulated with side walls/backing and **Boolean-subtracted** from a real solid. Bright holes remain unengraved material, not filled dark regions.

This is explicitly **2D-to-relief conversion**, not automatic full-object reconstruction from one photo, and not exact outline tracing. Low resolution is deliberate for bounded responsive local work. Threshold 1–254, depth .4–.6 mm, physical footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm. Every actual transformed vertex must stay inside a 5.8 mm keep-in radius centred 7 mm below the beam top. Empty conversions, out-of-range transforms and unsafe placements disable export. Minimum backing is 1 mm. Only engraved marks are supported to preserve the beam envelope.

## STL → actual integration

Both ASCII and binary STL, max 2 MB / 1,500 triangles, one connected, consistently outward-wound closed solid, .2–250 mm each axis. Checks include finite coordinates, nondegenerate triangles, welded-edge incidence, opposite winding, connectivity, positive volume, self-intersections, convexity, broad flat-bottom contact (≥25% XY bounding area) and XY projection contained in its bottom footprint. **Concave, hollow, disconnected, open, nonmanifold and overhanging meshes are explicitly unsupported.** There is no repair claim or hull substitution: unsupported input is rejected with guidance.

Pick Z-up, Y-up or inverted Z before attachment; changing it clears the file and asks for reattachment. Source dimensions, units and triangle count are shown with a source 3D view. Confirm millimeter coordinates explicitly: STL contains no unit metadata. Proportional XY scaling sets the footprint; independent Z scaling sets .4–.6 mm engraving depth. Rotate/center/place/reset then Boolean-subtract the **actual original triangles** from the signature beam. Resulting solids, not interpenetrating shells or unchanged reexports, are shown and downloaded. Source/final views and fit/depth feedback stay visible. Replace/remove/reset return cleanly to built-ins.

Samples under `public/samples/` are small synthetic PNG/JPEG/SVG, ASCII wedge and binary gem fixtures, not personal files. Browser file-picker and drag/drop are supported. Everything stays local. JSON includes bounded normalized image pixels/data or original validated mesh payload; restore revalidates it. Missing image payload requests reattachment instead of pretending restoration. Local storage is origin/device-specific; portable JSON is the backup.

## Geometry / responsiveness / exports

Manifold WASM in a bundled Web Worker performs real unions/differences. Debounced requests carry generation ids and a full current-state key. Worker errors are recoverable by reload; invalid/import-pending/out-of-date states disable **all geometry exports**. Preview may retain the last good mesh, visibly labelled, but it cannot be silently exported after invalid edits. All current parts receive finite/nondegenerate/positive-volume/closed-edge/winding checks before success. STL writer uses binary float32 coordinates and actual normals. Preview and downloads are fingerprint-compared by browser tests.

Download connected-card STL, clean print-plate STL, each clean part STL, or Everything ZIP containing card + four part STLs, portable design JSON and numbered `ASSEMBLY.txt`. ZIP is not mislabeled 3MF. Card is a genuine single connected solid with low real runners, not loose pieces near a rectangle. Final X/Y/Z dimensions update for the selected export. Local WASM/fonts/workers are bundled under the production base.

## Printing and assembly

Print Z=0, art up, PLA/PETG, .16–.20 mm layers and .4 mm nozzle. Support-free geometry is checked against the bed footprint, but inspect in a slicer. Snip sixteen runners outside clean edges, trim their scars, leave the contact arcs intact. Stand both beams with circular soles down and slots up. Lower spacers with slots down into both beams. Calibrate the cross-lap on one beam/spacer pair, square the frame on a flat surface, then bond the four joints with appropriate adhesive. Joints are clearance fits, not positive captures. After cure, rest both low soles on a reference plane and both high soles on one broad measured block. No blocking supports are exported by the angle calculator. Details and cautions are included in the app and ZIP instructions.

## Validation

`npm test` parses every binary output independently (including loose float32-translated plates), verifies sizes, normalized normals, finite nondegenerate faces, 1e-5 mm welded closed edges with exactly two opposite incident triangles, per-component positive volumes and expected counts. It additionally checks real card envelope, 16 cuts → carrier plus exactly four unharmed parts, no loose-plate or assembled intersections, vertical spacer insertion, eight unblocked lap apertures, supported bed footprints, art backing and actual circular-contact vertex heights at 0/5/10/15/20/25/30 degrees. Defaults, three presets, field extrema, shape/contact/sheet corners and image/STL-derived solids are covered.

Production-browser tests exercise real PNG/JPEG/ASCII/binary uploads and actual downloads, changed pixel/threshold/depth/scale/placement geometry, invalid files, mobile orbit/pinch, dimensions/fingerprints, per-part/ZIP contents, saves/undo/redo, themes and worker failure recovery. Reports and screenshots are committed beside reproducible scripts; see `VALIDATION.md` for completed results. Computational fit/insertion checks do not establish physical print fit, force, stability or metrology accuracy.
