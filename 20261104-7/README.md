# Prytz & Sweep

A local React + Vite maker studio for a **four-part flat-pack directional-tracing experiment**. Snip sixteen runners, assemble a trailing plastic skid and a two-level pencil guide, then explore how a skid's heading changes after tracing a small closed loop. This is a genuine connected kit card, not loose objects next to a frame, a general-purpose file converter, or an unchanged reference STL.

**Physical printing, assembly force, bonding, friction, paper tracking, durability and area accuracy have NOT been tested.** Computational checks do not prove a working measuring instrument. A plastic skid may slip sideways or stick. The historical Prytz principle assumes directional no-side-slip motion; no calibrated measurement or guaranteed area calculation is offered. Use scrap paper gently; no metal blade or sharpening.

## Run / build

Node 22.12+; `npm install`, `npm run dev`. Production: `npm run predeploy`. Individual deployment script: `npm run deploy` (`gh-pages -d dist`). The scheduled publication uses the **parent monorepo** `npm run predeploy` / `npm run deploy` so the whole gallery remains accessible. App base: `/daily-app2/20261104-7/`.

`npm test` runs independent binary STL, carrier-release, support-footprint, component, assembly and pencil-clearance checks. Browser checks must run against production output at its real base prefix. See VALIDATION.md and the reproducible scripts for commands and observed results.

## Reference-first evidence and attribution

Local candidate STLs were parsed before final geometry selection: `keycap_generator2/public/templates/clicker_template2.stl` (944 triangles, three separated switch/stem/cavity components; 15.20 × 15.20 × 43.10 mm overall) and `fidget_fabric_generator/public/templates/diamond-link.stl` (5,940 triangles; 7.98 × 9.24 × 8.00 mm articulated link). Their project instructions and geometry are unsuitable as a bed-flat sheet-kit interface. They remain read-only.

The selected accessible public reference is **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. See REFERENCE-LICENSE.txt and REFERENCE-UPSTREAM.md. A fresh binary STL download was parsed with trimesh; no third-party raw mesh is redistributed.

- SHA-256: `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- 30,616 triangles; assumed millimeters, corroborated by source sheet/frame dimensions. STL has no unit metadata.
- Mesh envelope: **179.8199968 × 178.0199938 × 3.1899996 mm**.
- 27 edge-adjacent components; original mesh is **not watertight**. We did not repair, publish, or label it printable. It is an inspected design reference for an original solid reconstruction.
- Actual cross-sections at Z=0.10, 0.50 and 1.59 mm expose the perimeter carrier, thinner runners, sheet interfaces and holes. Inspected section views are in `evidence/reference-sections.png`.
- Measured sheet planes: **0 / 1.60 mm**. Socket loops: **4.50 × 1.7000122 mm**. Low runner tops: **0.21–0.22 mm**. Upstream `flat_clip.scad` corroborates the nominal 4.00 mm male clip plus 0.25 mm expansion per side in its hole; `kit_frame.scad` describes 0.2 mm low tapering runner ends.

### Measured dimensions versus new design choices

This kit adapts the **real carrier / low-runner / sheet-socket construction**, not the cat's appearance or switch/keycap interfaces. The measured **4.50 mm socket span** is deliberately used as the baseline for a **new straight 4.50 mm tongue**. It is NOT a claim that the source's male clip measured 4.50 mm, or that its snap geometry is reproduced. All three new joints require adhesive. New slots are `(4.50 + clearance) × (sheet + clearance)`; clearance is TOTAL dimension, not each side. Sheets are redesigned thicker at 2.2–3.0 mm. Runners are redesigned stronger at 0.4–0.6 mm high and 0.8–1.2 mm wide. The tracing arm, unilateral skid bevel, two coaxial pencil guides and their assembly are new original geometry. No convex-hull substitute is used for imported or source assets.

`reference-measure.py /tmp/reference.stl` regenerates component dimensions, sections and measured sockets (requires Python trimesh, numpy, matplotlib). Full evidence: `reference-measurements.json`; concise mapping: `reference-analysis.json`. The factual historical interaction is described at [Hatchet planimeter](https://en.wikipedia.org/wiki/Hatchet_planimeter); no third-party diagram or mechanism code is bundled.

## Physical kit and deliberate customization

Four clean printable parts: `tracer-arm`, `directional-skid`, `guide-riser`, `upper-pencil-eye`. The connected card is a fifth export, not a fifth assembly part. The carrier and every part are Boolean-unioned through sixteen accessible removable runners. De-tabbed print layout uses the same underlying clean geometry; assembled and exploded transforms do not change export orientation.

| Parameter | Supported range (mm) |
|---|---|
| Card width / height | 180–220 / 170–220 |
| Pencil-to-skid reach | 80–110 |
| Arm width | 20–28 |
| Skid standoff / contact length | 10–14 / 18–24 |
| Skid contact thickness | 0.8–1.2 |
| Guide separation control | 10–16; actual axial spacing = control + sheet |
| Pencil nominal diameter / diametral clearance | 6.5–9.0 / 0.2–0.6 |
| Sheet thickness | 2.2–3.0 |
| Part-to-carrier spacing | 3–5 |
| Breakaway runner width / height | 0.8–1.2 / 0.4–0.6 |
| Socket total clearance | 0.10–0.30 |

Minimum features are bounded: 0.8 mm contact edge and runners, at least 1.5 mm engraving backing, ≥1.6 mm tongue shoulders. Unsupported/out-of-range combinations fail with export disabled. Three real worker-rendered presets vary actual reach, contact, guide and silhouettes. Soft clipped, deep-chamfer and octagonal arm outlines alter exported geometry. Changes are not merely preview textures.

The skid prints flat and receives a real one-sided 2 mm bevel. Its assembled paper-contact section tapers to the selected 0.8–1.2 mm thickness. The longitudinal contact is parallel to the reach axis. No synthetic hinges or mechanical animation are added: the assembled kit is rigid and the experiment happens on external paper. View-only exploded gaps are illustrative.

## Image, SVG, text and icon personalization

File picker on desktop/phone, supported drag/drop, replace/remove/reset, before/after previews, checkerboard transparency, and sample downloads are included. PNG/JPEG imports are **2D-to-engraved-relief/silhouette conversion, not 3D reconstruction from one photograph**.

1. Validate extension and actual PNG/JPEG header BEFORE decoding: 16 bytes–2 MB, ≤12 megapixels, ≤6,000 px each side.
2. Decode locally, normalize to ≤500 px longest side, composite transparent pixels against the selected light/dark background.
3. Fit or crop to **20 × 20** samples with ±25% pan; compute luminance. Dark-background mode inverts luminance.
4. Threshold mode maps dark samples to selected depth and light samples to zero; grayscale maps `(1 − luminance/255) × depth`. Adjacent samples are triangulated, so transition boundaries interpolate rather than claiming exact vector tracing.
5. Build a closed height-field cutter and Boolean-subtract it from a protected central arm patch. Bright holes remain **uncut backing** inside the artwork, rather than disappearing in a hull. Cut depth 0.4–0.6 mm leaves ≥1.5 mm backing. The cutout preview shows the actual conversion grid. Empty images fail, never silently fall back to a default mark.

SVG accepts bounded simple filled paths/shapes/groups, max 2,000 elements; rejects scripts, external references, effects, embedded raster, active markup and text not flattened to paths. SVG rasterizes locally to 256 px, then follows the same height-field method. Holes stay bright/unengraved. This is sampled raster conversion, not exact SVG curves.

Text (up to eight characters) and six searchable bundled vector marks—heart, sun, wave, star, circle, plus—use this same real Boolean workflow. Bold art is best; tiny pixel details may not resolve with a 0.4 mm nozzle. Aim for strokes ≥0.8 mm. Engraved only: raised art is deliberately unavailable to keep the flat sheet envelope and backed surface. Placement supports 4–7 mm footprint, ±180° rotation, X ±1.5 mm and Y ±2 mm offset, bounded to a 6.5 mm-radius central patch. Keep-in violations block export. Default mark is a real recessed oval.

## STL-to-body integration

ASCII and binary `.stl`, 40 bytes–2 MB, ≤1,500 triangles, dimensions **0.2–250 mm on EACH axis**. It must be ONE closed, consistently outward-wound, non-self-intersecting, **convex, broad flat-bottom solid**, without cavities, branches or XY overhangs beyond the bed footprint. These are explicit support constraints, not a claimed universal mesh repair path. Unsupported concave, hollow, open, duplicated-face, nonmanifold, intersecting, disconnected or inward solids are rejected with guidance. Broad-bed planar convex-hull computation is used ONLY to validate support footprint; **the solid itself is never replaced with a hull**.

Select Z up, Y up (+90° X) or −Z up before attaching. Changing orientation requests reattachment rather than pretending to transform an unavailable source. Source dimensions and units are shown; **explicit millimeter confirmation is required** because STL stores no units. The original source geometry gets its own interactive source preview. XY scales proportionally to the requested footprint; Z scales independently to engraving depth. Both exact scale factors are shown. Rotation, center/reset and placement alter the exact cutter, which is Boolean-subtracted from the arm. This is a meaningful modified printable body, not unchanged mesh display or re-export. Minimum final XY footprint span is 1.2 mm. All cuts remain separated from the functional joints and bores.

## State, performance, privacy and export

- Heavy parser and Manifold WASM CSG work run in a dedicated Web Worker; bounded resolution, 100 ms debounce and request IDs reject stale results. Every live result checks closed edges/winding/volume and assembled collisions. Worker failures visibly block export; reload restarts it.
- Preview and export use the **exact same current valid mesh**. The UI exposes a geometry fingerprint checked against downloaded bytes. Invalid edits may leave a last-valid preview, explicitly labelled, but cannot export it as a current result.
- Undo/redo, up to six local named designs, and JSON save/open. JSON includes bounded image PNG payload or exact source mesh arrays; missing image payload demands reattachment. No pretend restoration of unavailable files. Saved payloads are revalidated. JSON maximum 2 MB; images normalize to ≤250,000 portable pixels.
- Export a real connected-card binary STL, clean per-part binary STLs, de-tabbed plate STL or **Everything ZIP** (all five STLs, portable design and numbered assembly/current-fit instructions). STL stores no preview colours. No fake 3MF or texture-based geometry export.
- Light/dark setting persists. The desktop has a 374 px left control rail / right viewer; phones show viewer, dimensions/warnings/export first, then stacked controls. Touch orbit/pinch, fit/top/front/zoom, isolated parts, tactile selected states, visible focus and reduced-motion support.
- **Everything runs locally** after static assets load: no API key, server generation, paid service, CDN import, upload, analytics or file network call. Bundled assets are fonts, WASM, libraries and synthetic sample fixtures only; no personal uploads enter the repository. A named design or JSON stores bounded local input only when explicitly saved.

Dependencies: React/React DOM, Vite/plugin-react, Three.js (MIT), Manifold (Apache-2.0), fflate (MIT), bundled Fredoka/Rubik via Fontsource (SIL OFL), Playwright for tests. Generic studio/import/export infrastructure is adapted from our earlier Daily Object Lab apps; this kit's four-part physical construction and fit checks are original. Read-only visual/interactions reference: `keycap_generator2` README, styles, App, Viewer, worker, STL parser, export and image-trace modules. Concrete patterns adopted: lavender desk/white panels, raised tactile controls, left scroll rail, preview-first phone, checkerboard cutout, explicit units, imported-source editor, saved theme and current-worker-result export gating. No source project's Git history or deployment/dependencies copied wholesale.

## Print, calibrate, assemble, explore

1. Print **one card OR four clean parts** flat at Z=0, 100% millimeters. Default card is 180 × 180 × 2.4 mm. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3+ walls, no supports intended. Use per-part STLs on smaller beds.
2. Snip all sixteen runners **1.8 mm outside part edges**, smooth stubs without touching tongues, guide bores or the lower skid edge. Carrier is discarded; clean parts remain independent.
3. Dry-fit the guide riser into the front arm socket as a fit calibration. Socket clearance is TOTAL, not per side. Adjust by 0.05 mm or sand gently; never force. Measure a pencil across its maximum diameter (including corners); calibrate 0.2–0.6 mm diametral gap.
4. Insert skid tongue from **below** into rear arm slot until its shoulders meet arm underside. Insert riser from **above** into front slot, shoulders on arm top. Lower upper pencil eye from above over riser top tongue; its underside sits on the riser shoulders. Confirm coaxial holes before gluing all THREE permanent joints. Use plastic-compatible adhesive and fully cure.
5. Slide the external pencil through both guides. Adjust its tip to the skid's contact plane and gently tape to prevent axial slip. No metal blade or printed pencil is provided. Required consumables: matching pencil, paper, tape and adhesive; no bearing, magnet or fastener.
6. On scrap paper, hold pencil upright and trace a small closed loop; let the skid trail without pushing sideways. Mark initial/final skid headings, reverse direction and repeat. Do not sharpen the plastic contact. Stop if it scratches. Friction, stick/slip, printer anisotropy and pencil tip offset affect behavior.
7. Ideal no-side-slip theory gives a small-loop area proxy `A ≈ L² Δθ` (radians), with start-point and finite-reach errors. This does **not** claim a calibrated planimeter; no automatic area number or unperformed force simulation is shown. Explore the constraint and path memory. Physical tracking and accuracy remain unverified.

The same numbered instructions plus current dimensions/clearances are included in the ZIP. See reference-analysis.json and validation reports for the boundary between measured source facts, design proposals, computational checks and unperformed physical tests.
