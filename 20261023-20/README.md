# Bow & Settle

A private-by-design React + Vite studio for a **single pre-bowed, end-loaded TPU column fidget**. Hold the lower pad and gently shorten the distance to the upper pad along its axis. The initial bow biases sideways bending. This is an axial column-bending/buckling experiment, not a closed oval spring, transverse arch press, guaranteed snap switch or force-rated device. Comparing the current and read-only archived galleries informed this mechanism choice; the archived tree is unchanged.

Visual reference: https://vaseverse.org/ — translated into a dominant model canvas, compact tabbed parameter rail, warm ivory/clay palette, real preset thumbnails and persistent export area. No reference branding, assets, text or source code are reused. Three.js provides orbit, pinch, zoom, reset/fit, soft shadows and a 10 mm ground grid. The undeformed object and bed-flat print layout deliberately use the same geometry; there is no simulated flex or fake animation.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Vite base: `/daily-app2/20261023-20/`. Per-app scripts are `predeploy: npm run build`, `deploy: gh-pages -d dist`; public collection deployment uses the **root** `npm run deploy`, including its root predeploy lifecycle. Never publish this app over the gallery root.

Dependencies: React/React DOM, Vite/plugin-react, Three.js, Manifold WASM solid modeling, gh-pages (publishing only), Playwright (verification only). All generation/preview dependencies and WASM are bundled locally, not fetched from CDNs. Generation and STL preflight run in a dedicated worker. The 192-station column and 20×20 image grid bound complexity. npm audit was checked; gh-pages pinned to 6.1.1 to avoid the currently reported transitive advisory (its legacy glob/inflight deprecation notices remain).

## Parameters — all lengths in millimeters

| Parameter | Range | Default |
|---|---:|---:|
| Initial column bow | 2–8 | 5 |
| Column centerline length along Y | 34–58 | 46 |
| Normal column wall | 1.2–2 | 1.6 |
| Extrusion height | 3–5 | 4 |
| Upper pad radius | 5–8 | 6.5 |
| Lower pad dimple depth | 0–0.6 | 0.3 |

The centerline is `x = bow·sin(πu)`, `y = 16 + length·u`. A normal-offset strip of constant nominal thickness is extruded from Z=0 and robustly unioned with the two pads and a lower root clamp. The column joins both end pads, forming one closed connected manifold solid, not intersecting visual shells. A recessed palm well retains a 3.2 mm floor. Surface dimples are actual subtractions, isolated from flexing sections. Default assembled/export bounds: **24 × 78.5 × 4.85 mm** (the built-in thumb bump rises above the column). Imported grips may change Z bounds; live dimensions are measured from the final triangles.

Three real geometry presets: **Fine Bow** (long/slender), **Quiet Column** (balanced) and **Deep Arc** (short/more curved). Variations stay inside supported ranges. Undo/redo records modeling state. Preview colours change appearance only: **STL has geometry, not colour**.

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

## Export and printing

Persistent **Download STL** produces actual binary STL from exactly the final preview mesh, with meaningful parameter/source filename. The one part is selectable individually; a multi-part ZIP is not relevant because no assembly parts are required. Units are explicitly mm in the UI and filenames, though STL itself contains no unit metadata.

- TPU 95A only for flexing; PLA/PETG may fracture or yield and are not recommended for this column experiment.
- Print flat bottom at Z=0, 0.4 mm nozzle, 0.15–0.2 mm layers, thin column solid. No supports or hardware; no assembly/release or captive-body retention needed.
- Fine Bow is a full-size material trial. Inspect layer bonding and both clamped roots. Begin at **0.5 mm end-shortening**, guiding the upper pad along the axis; stop at damage, whitening, permanent set or poor return.
- Do not twist out of plane, side-load the column or force a sharp fold. There is no physical travel stop or guide rail. The user's fingers supply guidance.
- No sliding/mating fit tolerances apply to this single elastic body. Wall thickness is exposed for material/printer calibration, not universal force prediction.
- No physical print, buckling-load, fatigue, force, return or safe-stroke test has been performed. Support-free digital geometry is not a successful print claim.

## Verification

`npm test`: all presets, defaults, all-min/max, all 64 parameter corners and eight deterministic variations (78 cases), plus 24 imported image/mesh cases. Each serialized STL is parsed independently for finite coordinates, nonempty/nondegenerate triangles, stored normal direction, welded two-incident-edge topology, consistent winding, connected components, positive enclosed volume and measured millimeter bounds. Individual part export is checked as well.

Mechanism checks cover normal strip thickness/faceting and curvature radius, rigid endpoint joins, unobstructed beam sides via CSG material/air probes, separation between pads, import-safe-zone separation and zero imported-solid differences in the mechanism region. Constant-arc-length sinusoidal paths at 0/0.5/1 mm end-shortening check positive growing bow, monotone Y/no foldback and separated end pads. They are **not** a constrained elastic simulation, FEA or validated buckling threshold; 1 mm is not a guaranteed physical stroke.

`node browser-test.cjs` exercises actual PNG/JPEG, ASCII/binary STL file selection and binary downloads; verifies image pixels/conversion and STL shape/scale/placement change geometry versus no-import; exact preview/export signatures and dimensions; invalid/truncated/open/nonmanifold/concave/oversized files, bad dimensions/transforms, empty silhouettes, replace/remove/reset, individual export, phone file selection/download, touch orbit/pinch, and 320/390 px layouts. `extra-browser.cjs` checks every preset, four random variations, undo/redo, portable JSON round trips for all import formats, drag/drop and colour-neutral geometry. `mobile-sheet.cjs` checks all tabs, collapse/expand and fixed export at 320×740. Reports are JSON files alongside screenshot evidence. Production-bundle and public smoke checks supplement development tests.
