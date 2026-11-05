# Lyapunov & Swing — double-pendulum kit studio

A local React + Vite maker studio for a genuine connected kit card: signature base, twin-tongue mast, upper link and lower link held by **16 real removable runners**. Two independent M3 joints make a serial double pendulum. This is a new assembly, not a reskin of a four-bar, sliding kit or polyhedral panel app.

**Required external items:** two M3×20 screws, two M3 nylon locknuts, four thin M3 washers (≤0.5 mm thick / OD ≤7 mm), two 10 mm long M3 sleeves (ID ≥3.2 / OD ≤6 mm), compatible mast adhesive and a secure base clamp or mounting adhesive. Head ≤2.5 mm high / OD ≤6 mm; locknut ≤4 mm high. Hardware is omitted from the preview and not exported. No hardware-free equivalent is claimed. Do not release links on an unsecured free-standing sheet base.

Computational verification is **not** physical testing. Printing, fits, mast stiffness, adhesive strength, mounting stability, friction, retention, fatigue and motion remain physically untested. The name references sensitivity in dynamical systems, not a claim of measured Lyapunov exponents or proven chaotic behavior. Sliders select independent kinematic positions; no time/force simulation is performed.

## Run and dependencies

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Node 22.12+ recommended. React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, locally bundled Fredoka/Rubik fonts. Playwright is used for reproducible browser validation. Scripts include exactly `predeploy: npm run build` and `deploy: gh-pages -d dist`; the published combined site uses the **root** monorepo deploy flow. Base path `/daily-app2/20261105-22/`. All runtime dependencies, fonts and WASM are bundled; no CDN, backend, API key or paid service.

## Reference-first evidence and adaptation

Inspected the read-only Keycap Studio README, App.tsx, Viewer.tsx, styles.css, worker, geometry/STL and export modules. Concrete UI patterns retained: 374 px scrollable left panel, compact brand/theme header, collapsible sections, paired slider/mm numeric controls, raised tactile buttons, pink pressed states, lavender-grey desk, gradient viewer, lower export panel, saved dark theme, preview-first phone stacking and accessible focus/touch targets. Reused general studio/import/test infrastructure from prior Daily Object Lab apps, but implemented new mast, blind sockets, twin links, layer transforms and mechanical checks. No reference project edits, history or dependency-tree copying.

Local `clicker_template2.stl` was parsed: 944 triangles, 3 components, 15.20×15.20×43.10 mm aggregate bounds; MX cavities/stem are unrelated to a sheet kit. `diamond-link.stl`: 5,940 triangles, 1 component, 7.981×9.241×8 mm; interlocking fabric is likewise unsuitable. Full hashes and measurements are in [reference-analysis.json](reference-analysis.json).

Selected public reference: **White Cat Kit Card / Printables 865769**, Mike Kasberg, [upstream source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Upstream README and license were retrieved live into `evidence/`. Previously accessible public STL bytes in the local temporary cache were freshly parsed rather than relying on old descriptions; raw source is not bundled. Original spacecraft shape/artwork is not reproduced.

- Source SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles. Assumed mm (STL contains no units). Bounds 179.820×178.020×3.190 mm.
- Endpoint-welded edge adjacency at 1e-5 mm yields two mesh components (26,870 and 3,746 faces), **not** a count of printable pieces. 57 bad-edge incidences/zero-area/duplicate source anomalies are disclosed; no arbitrary repair claimed.
- Actual cross-sections at Z=.10, .215 and 1.59 mm identify four **4.50×1.70 mm** socket loops. Principal sheet faces are at Z=0 and 1.60 mm. Thin source runners top at .21–.22 mm. See [measured sections](evidence/reference-sections.svg) and reproducible `reference-analysis.py` (pass the accessible source STL path; it does not modify reference trees).
- Retained: 1.60 mm default sheet, 4.50 mm socket length, 1.70 mm default socket thickness, paired sheet tongues and a connected low-runner carrier.
- New deliberate fits: socket width = sheet + .10–.30 mm total allowance, tongue width = 4.50 − allowance, tongue depth = sheet − .80 mm with a **.80 mm blind floor**. Default tongue width 4.40 mm. These proposed calibration allowances are not measured source tongue dimensions.
- Redesigned: one socketed mast and two independent pivot links instead of spacecraft panels; new M3 bores and 10 mm axial sleeves, accessible .4–.6 mm reinforced runners. The original mesh is a design reference, never an exported triangle asset or convex-hull substitute.

## Parameter ranges

All linear values are **mm**. Unsupported and nonfinite values block generation/export.

| Parameter | Range | Default |
|---|---:|---:|
| Card width × height | 150–240 × 220–260 | 190 × 220 |
| Mast shoulder-to-top height | 90–110 | 100 |
| Upper / lower pivot spans | 24–34 each | 30 / 30 |
| Link width | 9–12 | 10 |
| Sheet thickness | 1.6–2.4 | 1.6 |
| Socket total clearance | .10–.30 | .10 |
| M3 diametral allowance | .20–.50 | .30 |
| Part spacing | 3–5 | 3.5 |
| Breakaway width / thickness | .8–1.2 / .4–.6 | 1 / .6 |
| Preview absolute angles | −80° to +80° each | 0° / −35° |

Three real presets vary lengths, thickness, mast, band width and outlines; thumbnails are live generated models. Soft, chamfered and scalloped base silhouettes change exported geometry. The 70×44 base and 24 mm mast base preserve socket positioning. Minimum downward printed-link clearance is `mast − 8 − upper − lower − beam/2`, ≥8 mm across supported independent extremes. Print card or clean parts, not both unless duplicates are wanted.

## Local image workflow

PNG/JPEG and simple SVG file picker plus drag/drop; downloadable synthetic samples. Files 16 bytes–2 MB; PNG/JPEG content headers checked before decode, ≤12 MP, ≤6000 px/side, normalized to ≤500 px. SVG ≤2,000 simple allowed shapes; no scripts, external resources, references, filters or fonts; text should be outlined. SVG rasterized locally to 256 px.

The browser fits/crops/pans the source into a **20×20 sampled height grid**. Light/transparent or dark-background polarity, threshold 1–254, grayscale relief and .4–.6 mm engraving depth determine top heights; closed bottom/sides create a real cutter solid, reflected and Boolean-subtracted into the base apron. Source and actual cutout grid appear on checkerboards. This is **2D-to-relief**, not reconstruction of a full 3D object. Holes are preserved at sample resolution: bright regions retain original solid backing. Very fine details below grid resolution are intentionally not promised. Text (up to eight characters) and six searchable original bundled icons use this same conversion.

Physical footprint 4–7 mm, rotate ±180°, offsets X±1.5/Y±2 mm. All cutter vertices must stay inside radius 5.8 mm about base (0,12), away from sockets and edges. Depth leaves ≥1 mm backing. Raised mode intentionally unavailable to preserve flat-sheet/keep-out behavior. Empty silhouettes and unsafe placement block export. Replace, remove, reset crop/threshold/depth and transform reset are implemented.

## Local STL workflow

ASCII **and** binary STL, 40 bytes–2 MB, 1–1500 triangles. Parser validates finite coordinates, .2–250 mm dimensions per axis, nondegenerate faces, edge incidence and opposing winding (1e-5 mm vertex weld), one connected positive-volume body, self-intersections, convexity, a broad flat-bottom footprint and no unsupported overhang projections. Concave, hollow, disconnected, inward, open/nonmanifold or unsupported geometry is **rejected with actionable feedback**, not silently replaced or repaired.

Select Z-up, Y-up or inverted-Z before attaching; changing it clears source and requests reattachment. Oriented source preview reports dimensions, triangle count and format. Explicit millimeter confirmation gates integration because STL stores no units. Proportional XY scaling to 4–7 mm footprint and independent Z depth .4–.6 mm are shown as factors; rotate, center and position in the protected apron. **Actual imported triangles** are solid-Boolean-subtracted, not re-exported unchanged, overlaid shells or converted to a hull. Final output is closed and checked. Unsupported concavity is an explicit restriction, not a claimed general-purpose repair path.

## Studio, persistence and worker/export contract

Undo/redo (up to 35 bounded snapshots), six local named designs, portable JSON save/open with normalized image and strict bounded mesh payloads. JSON max 2 MB; image payload ≤1.8 MB and ≤250k pixels; mesh ≤1500 triangles. Missing image payload asks for reattachment. No personal uploads enter this repository or any remote service. Clear recoverable errors disable export for invalid imports, malformed JSON, worker failure or current-state mismatch.

Geometry owns a Manifold WASM instance in a module Web Worker; heavy checks/booleans run off the UI thread, 100 ms edit debounce, bounded resolution, request-ID and serialized-state key guard. Asynchronous file loads have separate generation IDs. Last-good preview is explicitly labeled and **cannot** be exported after invalid edits. Preview and export use the same checked part meshes and the UI exposes their exact current binary-STL fingerprint.

Views: connected flat card, de-tabbed plate, assembled, exploded, each isolated printable part, optional transparency, touch orbit/pinch, top/front/fit and zoom. Print and assembly poses use exact same local meshes; a separate world transform accounts for each part's print origin. Purchased hardware is omitted, so empty space between link layers is expected, not an estimated printable connector. Angle/color changes are preview-only and cannot misleadingly alter exports or imply STL colour.

Exports: binary STL (card, clean plate or part), prominent per-part buttons, Everything ZIP containing five STLs (card + four clean parts), assembly SVG, full numbered print/hardware/assembly instructions and portable design JSON. No fake 3MF. Source fixtures are original synthetic procedural assets with attribution in `public/samples/README.txt`.

## Printing / assembly / calibration

Use PLA/PETG, .4 mm nozzle, .16–.20 mm layers, all sheet parts flat at Z=0, no supports intended. Bed must fit declared card or use clean parts. Print mast and one link first; adjust source-derived socket and new M3 allowances to the actual printer/material. Snip each runner in its free corridor, trim scars without damaging tongues or bores. Glue mast into blind sockets, let cure. At each joint, sleeve goes between plates, washers on outer stack faces, screw head behind and nut/tip forward. Do not clamp rotating plates rigidly. Clamp base to a rigid table before releasing links. Instructions in `src/geometry.js` are included in the UI and ZIP. Computational insertion/release checks do not establish physical ease of assembly or force.

## Validation

See [VALIDATION.md](VALIDATION.md) and machine-readable reports. `npm test` independently parses serialized binary STLs: byte length, finite coordinates, normalized outward normals, nondegenerate triangles, mm bounds, welded closed edges with opposite directions, component counts and positive volume per component. Every generated part gets worker-side preflight too.

45 geometry cases cover defaults, all presets, one-field and simultaneous extrema, outlines and image/STL-derived outputs. Every case checks separate parts/card/clean plate, one carrier component, 16 runners, simulated cuts yielding exactly carrier + four unharmed parts, supported bed footprints, protected functional apertures, blind socket insertion and 81 independent joint configurations. New hardware-envelope calculations include 20 mm bolt stack and fixed-pivot forward tip clearance behind lower-link plane. Real browser tests upload PNG/JPEG/ASCII/binary STL, download actual bytes, compare signatures against exact JSON-regenerated geometry, vary pixel/threshold/depth/scale/orientation/placement and exercise invalid/recovery paths. Touch gestures are dispatched via CDP and screenshots compared. No physical print was performed.
