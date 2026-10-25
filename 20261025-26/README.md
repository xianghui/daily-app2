# Corner Cadence

A browser-local React + Vite **orthogonal slotted bell-crank fidget generator**. Slide either thumb pin along its straight tray slot: the L-shaped lever drives the other pin perpendicularly in the opposite direction. Unlike the collection's Scott Russell linkage, this uses intersecting radial slots in one rigid elbow; it is not a straight-line multi-link approximation or a reskinned spinner. Four independent, lift-removable parts; no hardware, spring or automatic return.

## Studio and reference

The read-only Keycap Studio reference supplied concrete patterns: a 374 px scrollable LEFT editor with sticky compact brand/theme header, collapsible numbered sections, paired millimeter sliders/numbers, raised tactile buttons and soft-pink selected states, lavender-grey desk, white panels, dark ink, coral accents, locally bundled Fredoka/Rubik fonts and a large RIGHT gradient viewer. Phone layout puts preview, dimensions, warnings and export before controls. Persistent dark mode, visible focus and reduced-motion support. Three real generated thumbnails/presets, bounded variation, undo/redo, six named local designs, portable JSON, searchable text/icons, PNG/JPEG/SVG relief, binary/ASCII STL integration, drag/drop and file pickers.

Shared studio/import infrastructure adapted from the collection's earlier generator. The mechanism, geometry, kinematics, print layout and checks are new. Neither reference nor archived gallery is modified. All fonts, Three.js, fflate, React, Vite, Manifold WASM and generation dependencies are local bundles, with no API, CDN or upload service.

## Run and build

```sh
npm install
npm run dev
npm run predeploy
npm test
```

Vite base `/daily-app2/20261025-26/`. Per-app deploy is present as required, but publication uses the root monorepo build and deploy, never an individual app deployment over the collection.

## Mechanism and dimensions

All dimensions are millimeters. Live edits debounce 100 ms into a Manifold worker; generation IDs and current state keys prevent stale exports. Export and preview share exact final solids. Invalid edits show the explicitly last-good preview while disabling every STL/ZIP export.

| Control | Range |
|---|---|
| Palm diameter | 22–28 mm; round, hexagonal, oval |
| Input arm radius | 24–32 mm |
| Output arm radius | 24–32 mm |
| Elbow thickness | 3–4.5 mm |
| Pin/slot and post/bore radial clearance | 0.30–0.60 mm |
| Vertical lever running gap | 0.25–0.50 mm |
| Palm dimple depth | 0–0.6 mm |

Base tray floor is 2 mm, lever arms 12 mm wide, slot pins 4 mm diameter, pivot post 6 mm diameter, pin heads 10 mm diameter × 2 mm. Slots preserve end walls throughout the supported range. The protected palm well is radius 7.5 mm; personalization must remain within radius 6.5 mm and cannot change any moving interface. Mechanism isolation is more than 20 mm.

For elbow angle θ, input pin is at `(L, L tan θ)`, output at `(-R tan θ, R)` relative to the pivot. Their radial lever-slot distances are `L/cos θ` and `R/cos θ`. Stroke ratio is R/L. Rounded tray slots extend to ±20° centreline positions; small clearance permits slight additional end play. Preview is limited to ±18° before stop contact. Pins are shown hand-lifted by the chosen clearance above the lever; their vertical display gap is estimated preview-only positioning, not a separate spacer. All parts lift free, not captive. No forces or friction are simulated.

Views: print plate, analytical motion sweep, exploded, isolated tray, elbow and each pin; optional transparent base. Exports always use bed-flat separate print orientations, not assembled overlap. UI shows printable X/Y/Z and the final mesh fingerprint.

## Image / SVG workflow

Use Choose / replace source or synthetic fixtures `mark.png`, `waves.jpg`, `ring.svg`. PNG/JPEG actual content headers are checked before decoding: 16 bytes–2 MB, ≤12 million pixels, ≤6,000 px on either side. Normalize locally to ≤500 px; portable designs embed this bounded normalized image. Simple safe SVG shapes are rasterized locally at 256 px; scripts, external URLs, references, fonts and effects are rejected. SVG limit 2,000 elements and 6,000 px dimension.

Conversion is **2D-to-relief**, not reconstruction of an entire 3D object from one photograph. Fit/contain or fill/crop, ±25% crop shift, light/transparent background removal or dark inversion are applied on a 20 × 20 grid. Luminance becomes either thresholded height (threshold 1–254) or grayscale height. A triangulated continuous height field on a 0.4 mm backing is built as a closed solid and boolean-unioned into the palm's recessed landing. Bright holes remain unraised; engraved holes leave the original floor. This is sampled height geometry, not exact vector outline tracing, so use bold artwork and inspect the checkerboard grid. The final geometry preserves the sampled hole pattern, not invisible texture.

Relief 0.4–3 mm; engraving 0.4–0.6 mm to preserve the thick floor. Actual source and cutout previews are shown. Scale 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; all transformed points must stay within the 6.5 mm safe radius. Text up to 8 characters and six searchable marks use this same pipeline. Replace/remove, image-settings reset, transform reset and Reset all are supported.

## STL workflow and deliberate limits

Binary and complete ASCII STL are supported, ≤2 MB / 1,500 triangles; source dimensions must each be 0.2–250 mm. The parser welds equal coordinates within 0.00001 mm, checks finite vertices, nondegenerate faces, exactly two oppositely directed incidents per edge, connectivity, positive signed volume and pairwise triangle intersections. It additionally requires **one closed outward-wound convex solid, broad flat bottom (≥25% of its bounding footprint), no unsupported overhang outside that footprint**. Concave, open, hollow, disconnected, nonmanifold, self-touching or overcomplex sources receive actionable errors. No hull substitution or claimed automatic mesh repair occurs. These are explicit input restrictions, not a general-purpose STL repair tool.

Select source up axis Z, Y or −Z before attachment. View the actual oriented source and its dimensions, then explicitly confirm millimeters: STL contains no units. Changing axis requests reattachment. Fit the original mesh proportionally in XY to a 4–7 mm footprint, fit Z independently to 0.6–5 mm grip height, rotate and place. A minimum 1.2 mm XY span is enforced. The exact original solid, after these transforms, is boolean-unioned into the fixed palm well with 0.15 mm base overlap. It measurably changes final STL geometry; it is not merely displayed or re-exported. The elbow, pin and tray-slot interfaces are untouched by personalization.

## Saved designs and privacy

Processing is entirely browser-local. No user file is uploaded, sent to a service or saved in this repository. Only newly authored synthetic fixtures are bundled (CC0). Source images are embedded as bounded PNG data URLs and STL meshes as validated vertices/indices in JSON and up to six named local designs. Restores revalidate assets and dimensions; missing image payloads explicitly require reattachment. Local storage quota failures recommend portable JSON. Themes are separate local preferences. JSON limit 2 MB. Remove imported data using Remove import or browser storage controls.

## Export / printing

One-click binary STL of the separated print plate or each of `palm-track`, `slotted-elbow`, `input-pin`, `output-pin`; Everything ZIP holds four actual STL files and assembly notes. STL contains no preview colour; ZIP is not 3MF.

PLA or PETG, 0.4 mm nozzle, 0.2 mm layers, supports off, 100% scale. Print base and elbow flat; print pins with their broad heads on the bed and shafts upward, then invert during assembly. Deburr pin shafts, bore and slots. Place elbow over post, align radial/straight slots and insert both pins. Hold the tray horizontal by its palm with space beneath the open slots. Gently slide a pin within its stroke, reverse at the ends, and never force a jam. Pins are shown slightly lifted in preview; lower them gently for actual use. Keep fingertips away from moving slot edges. Lift both pins before removing the elbow. Do not carry inverted: there is no retention cap. Small loose parts are not for children.

Print **Short & Long** first as a full-size calibration. Gap values are FDM starting points, not universal tolerances; increase clearance if binding. No bearings, fasteners, magnets, springs, adhesive or flexure material required.

## Reproducible validation

`npm test`: 132 parameter cases (all 128 min/max corners, defaults and presets), each plate and separately exported solid; 35 imported-output cases; robust-kernel moving-part intersection sampling, lift-release and personalization-isolation checks. Independent STL parser checks finite coordinates, unit outward normals, nondegenerate faces, millimeter bounds, welded 0.00001 mm edges with two opposite face incidents, connected-component positive volumes, expected topology and separated layout bounds. `stop-check.mjs` checks the full ±20° stroke independently of the preview's ±18° limit.

Serve production using `node serve-test.cjs`, then run `node browser-test.cjs`, `node feature-test.cjs`, `node hole-test.cjs`, `node interaction-test.cjs` and `node resilience-test.cjs`. Browser checks use real file-picker uploads and downloaded STL/JSON/ZIP, compare exact preview fingerprints and regeneration, test changed pixels/threshold/depth/transforms, failures/recovery, named designs, JSON assets, every preset, themes, views, focus, mobile 320/390 px, touch orbit/pinch and reachable downloads. Reports and screenshots are stored alongside scripts. Only synthetic CC0 fixtures are committed; no personal imports.

Computational geometry and kinematic checks are distinct from physical validation. **No physical print, friction, actuation-force, wear or fatigue test performed.**
