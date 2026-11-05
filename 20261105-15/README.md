# Catenoid & Neck

A local browser maker studio for a **three-part, bed-flat kit card**: two equal coaxial soap-film rings and a four-socket dock. Snip twelve real runners, stand both rings in the dock, and experiment with spanning a film across them. Radius and physical socket separation are independently parametric. This is not two independent bubble wands, an adjustable sliding mechanism, or a film simulator.

**No physical print, fit, stability, wet-handling or soap-film test was performed.** Computational checks do not establish film formation. External bubble solution, a wide shallow tray and adhesive for rigid wet handling are required. No metal hardware is needed. Gravity seats are not positively retained; dry-fit first, then bond if desired. A dip may produce two separate discs rather than a connected film.

## Reference-first construction

Actual source: **White Cat Kit Card**, Mike Kasberg, Printables 865769, [upstream](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Attribution/licence are in `REFERENCE-UPSTREAM.md` and `REFERENCE-LICENSE.txt`. The raw reference STL is **not redistributed**.

Downloaded mesh SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Binary STL, 30,616 triangles; assumed millimetres (STL has no unit metadata); bounds approximately 179.820 × 178.020 × 3.190 mm. Actual mesh parsing reports 27 edge-adjacent components, including duplicated/degenerate pseudo-components; the source is not certified manifold. This reconstruction does not copy those triangles.

`reference-analysis.py`, `reference-analysis.json` and `evidence/reference-sections.png` record the actual parse, component bounds, hash and cross-sections at Z=.100, .215 and 1.590 mm. Four measured 4.50 × 1.70 mm sockets, a 1.60 mm sheet plane and .21–.22 mm carrier runners inform these concrete decisions:

- Default ring sheet is the measured **1.60 mm**.
- Default total receiver allowance **.10 mm** comes from 1.70−1.60, not a universal printer tolerance.
- Original 4.50 mm socket length is deliberately replaced by **6.00 mm tongues**; receiver length is 6.00 + clearance.
- New **blind 3.00 mm deep** sockets preserve a full sheet-thickness floor. Dock height = sheet + 3 mm. These are not copied source through-slots.
- Runners are strengthened to **.40–.60 mm**, with .80–1.20 mm width. Four per part are confined to nonfunctional rail bands.
- The two equal rings, coaxial placement and adjustable separation are original parametric geometry, not source features.

Local clicker-template and diamond-link STLs were parsed first and rejected as unrelated to planar kit interfaces. Their identifiers, hashes and dimensions are also recorded. Local kit-card project instructions were inspected; no suitable bundled local kit STL was present.

Keycap Studio was inspected read-only (`README.md`, `styles.css`, `App.tsx`, `Viewer.tsx`, worker, STL, image and export modules). Its concrete studio patterns inform the compact 370 px left rail, collapsible sections, paired mm controls, raised selected buttons, local fonts, checkerboard cutout, import-source editor, ghost/isolated/print views, and worker-owned exact export result. No switch socket was imposed on this unrelated design. Shared studio/import/test infrastructure is adapted from earlier Daily Object Lab apps; all ring/dock construction and assembly checks are specific to this kit.

## Run / build

Node 22.12+ and npm:

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, locally bundled Three.js/OrbitControls, Manifold WASM in a Web Worker, fflate ZIP, Fontsource Fredoka/Rubik (SIL OFL). No CDN, server generation, API key or paid service. Individual `deploy` is configured for the required convention; publish the monorepo only with its ROOT `predeploy` and `deploy` flow. Vite base: `/daily-app2/20261105-15/`.

## Parameters — millimetres unless stated

| Parameter | Range | Purpose |
|---|---|---|
| Card X / Y | 220–280 each | Real carrier envelope; invalid packing is blocked |
| Film boundary radius | 22–32 | Nominal mid-band radius, actual aperture = R−band/2 |
| Ring midplane separation | 12–46 | Changes the two socket stations in the printed dock |
| Ring radial band | 2.4–4.0 | Actual ring wall in its print plane |
| Ring sheet | 1.6–2.4 | Ring Z thickness and socket floor thickness |
| Total socket allowance | .10–.30 | Added to both tongue width and sheet receiver width |
| Part gap | 3–5 | Printable layout spacing |
| Runner width / thickness | .8–1.2 / .4–.6 | Actual bed-aligned breakaway connections |

Three real presets, three dock silhouettes, local text and six searchable original icons. Preset thumbnails use actual worker-generated models. Undo/redo, six local named designs, JSON save/open and bounded portable imports are implemented. Missing image payloads request reattachment; there is no pretend asset restoration.

### Ideal geometry, not film simulation

For equal rings, the ideal catenoid equation is `R = a cosh(d / (2a))`. The reported wide-neck root exists only for `d/R ≤ 1.32548684`; above that limit a warning is shown but valid physical kit export remains available. A two-disc film may compete earlier. Radius is the **mid-band** radius; the actual wetting line varies across the band and with material/solution. The readout is neither a measured collapse threshold nor a guarantee that a film forms. No fake membrane is previewed/exported.

## Local image → actual engraving

File picker on desktop/phone and drag/drop accept PNG, JPEG and simple SVG. Limits: 16 bytes–2 MB; image axes ≤6,000 px and total ≤12 million pixels (see strict header parser). Input is normalized to at most 500 px on its longest side and sampled at **20 × 20**.

Contain/cover, crop shifts ±25%, dark/light-background polarity, threshold 1–254, threshold/grayscale mode and .4–.6 mm depth are real geometry controls. Opaque light background is ignored in light mode; transparency is composited onto the selected background. Checkerboard preview shows the sampled cutout. A triangulated closed height solid, with thresholded or grayscale vertex heights, is Boolean-subtracted from the protected front apron. Bright image holes leave full material; grid interpolation rounds the transition at pixel boundaries. SVG is securely rasterized, retaining visible holes; complex vector effects/external resources are rejected. This is **2D-to-relief**, not automatic reconstruction of a complete 3D object from a photo.

Physical footprint 4–7 mm, rotation ±180°, X ±1.5 mm, Y ±2 mm; all art must remain within a protected 5.8 mm radius zone. Raised art is intentionally unsupported to preserve the envelope. Image pixel content, threshold, depth, placement and scale change final STL triangles. The sample SVG ring's center and engraved band are independently volume-probed.

## Local STL → actual engraving

Both ASCII and binary STL, ≤2 MB, ≤1,500 complete nondegenerate triangles, each source axis .2–250 mm. Source dimensions are shown. **Confirm millimetres explicitly**, because STL stores no units. Choose Z/Y/−Z up before attachment; change orientation by replacing the source. Adjust footprint, depth, Z-axis rotation and XY placement; reset transformations or remove the import to return to built-ins.

The actual imported closed triangles form a Manifold cutter, scaled independently in XY and Z, then Boolean-subtracted from the dock apron. It is never re-exported unchanged or replaced by a convex hull. The hull calculation in the parser is only a bottom-contact validation test, not output geometry.

Supported contract: **one outward-wound closed convex broad-flat-bottom solid**, with XY projections inside its bed footprint and no skinny final axis under 1.2 mm. Open, concave, hollow, nonmanifold, self-intersecting, excessive, truncated or unsupported input is rejected with actionable errors. There is no claimed automatic repair. Use a mesh editor to produce a supported solid. These explicit restrictions are not silent concavity loss.

## Privacy and state

All input is processed locally; files are never uploaded. Only synthetic samples are bundled. Personal source files are not stored in this repository. JSON/named designs contain bounded normalized payloads, not filesystem paths. Parsed STL payloads are checked again on restore. Named designs are device/origin-specific.

Worker generation is debounced and request-id guarded. Exports require an exact current state key; invalid or pending edits cannot download a stale last-good model. Worker failure blocks exports and asks for reload. The current printable binary STL fingerprint appears in the stage DOM and is checked against real downloads in browser tests.

## Print, assembly and exports

1. Print the connected card **or** three clean parts flat Z=0; no supports intended. PLA/PETG, .16–.20 mm layers and .4 mm nozzle are starting suggestions. All four sockets are blind with full sheet-thickness floors.
2. Snip twelve accessible runners in their gaps. Trim rail scars, keeping the two tongues on each ring intact.
3. Stand each ring upright and lower both tongues into its socket pair. Shoulders rest on the dock top. No flex or snap is required. Calibrate with a dock and one full-size ring; never force a tight fit.
4. For wet handling, bond after dry fitting. Without adhesive the rings lift out freely. Support the dock, not a loose ring. Follow the adhesive manufacturer's instructions.
5. Use a wide shallow soap tray. Wet the rings and try forming a connecting film. Failure to form one is a valid experimental outcome. Change separation by printing a different dock, not by moving a preview slider on a fixed physical model.

Assembled, exploded, transparent, isolated-part, connected-card and clean-plate views share exact checked solids. Preview lift is explanatory only; export always uses actual print orientation. Final export XYZ dimensions are explicit. Binary STL per part, connected card, clean plate and Everything ZIP (four STL files plus current portable design and numbered instructions). STL carries no colour; no mislabeled 3MF.

## Validation

`npm test` independently parses float32 STL output: exact byte count, finite coordinates, nondegenerate triangles, stored unit normals, opposite edge incidence after 1e−5 mm welding, positive volume for **each** component and expected mm bounds. Checks run on each clean part, the connected carrier and the translated three-part plate. Model-kernel validation is separate.

Assembly tests simulate all twelve cuts (carrier + exactly three released pieces, no debris), preserve each clean part volume, verify card bounds, exclude print/assembled collisions, sample 82 vertical insertion positions, probe four blind socket floors and apertures in clean/connected geometry, and verify exact coaxial separation, 3 mm engagement, support-free footprints and the ideal neck root. Default, all presets, shapes, field extrema, combined extrema and image/STL-derived variants are included.

Production browser scripts exercise actual file-picker PNG/JPEG/ASCII/binary imports and STL downloads, compare content/threshold/depth/transform changes and reset hashes, regenerate saved JSON in Node, validate downloaded meshes and ZIP contents, malformed/rejected input recovery, stale worker results, undo/redo, local saved designs, portable payloads, SVG holes/text/icons, theme/focus/sections, every view, phone layouts and touch orbit/pinch. Worker/WASM are tested under the production base path. Reports and screenshots live beside the app. Computational checks are **not physical tests**.
