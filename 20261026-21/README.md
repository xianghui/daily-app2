# Pinwheel Pause

A browser-based **hand-guided two-pallet pinwheel escapement** fidget STL studio. Rock an anchor ±10° while nudging an eight-pin wheel: one pallet releases, the opposite catches. Different from a ratchet, Geneva indexer or cam: two alternating downward gate pegs interact with upright wheel pins. Not a self-powered clock or equal-step indexing mechanism. Small wheel back-off may be needed during transfer; never force a pin through a gate.

## Run and build

Node 22.12+; `npm install`, `npm run dev`; `npm run predeploy` builds the app. Dependencies are bundled locally: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik. No CDN, account, API key, paid service or backend. Per-app `deploy` is retained as required; publication uses the parent repository's combined root deploy flow instead.

## Reference and studio

Keycap Studio (`/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`) was inspected read-only: README, styles, App, Viewer, worker, imageTrace and export modules. Concrete patterns adopted: light lavender-grey desk, white panels, coral selected raised keys, sticky compact header, 374 px left panel, labelled collapsible sections, slider + millimeter number pairs, source/final previews, isolated import transforms, worker status, assembled/exploded/print views and explicit local design storage. Dark theme persists. Phone layout puts preview, status and exports above stacked controls. Common local studio infrastructure is adapted from earlier daily-app2 apps; mechanism construction and its collision tests are new. No reference Git history, dependency tree or switch-specific geometry was copied.

Three real model-thumbnail presets, bounded variations, three palm silhouettes, six searchable synthetic SVG marks, text relief, undo/redo, up to six named local designs and portable JSON are implemented. Palette colours are preview-only; STL cannot encode them. JSON embeds bounded image/mesh payloads; missing artwork payloads request reattachment rather than silently showing a substitute.

## Local personalization

All processing stays in the browser. Files are never uploaded. Only synthetic fixtures are bundled. Personal input files are not committed. Local named saves persist only in this browser.

### PNG / JPEG / simple SVG → real relief

Actual PNG and JPEG content is checked before browser decoding, with a 2 MB file cap, ≤12 million pixels and ≤6,000 pixels per side. Images normalize to ≤500 px; portable PNG payloads cap at 1.8 million characters / 250,000 pixels on restore. Simple SVG fills are sanitized (no scripts, external references, fonts or effects), ≤2,000 elements, then rasterized locally at 256 px.

A 20×20 grid samples luminance after contain/cover fit, ±25% crop shifts and light/transparent removal or dark-background inversion. Threshold 1–254 selects sampled relief; grayscale maps darkness to height. Triangulated height cells form a closed backed solid and are boolean-unioned into the palm well, or subtracted when engraved. Bright holes stay unraised/unengraved above the continuous backing. This is **sampled 2D-to-relief, not exact contour tracing or automatic full-3D reconstruction from a photo**. Checkerboard shows the actual conversion grid. Relief depth 0.4–3 mm; engraving 0.4–0.6 mm to preserve ≥3.6 mm floor. Threshold, pixels, depth, background and transformations change exported vertices and volume.

### ASCII / binary STL → integrated grip

Strict parser: 40 bytes–2 MB, ≤1,500 triangles, finite coordinates, per-axis source dimensions 0.2–250 mm, nondegenerate triangles, welded closed/opposite-directed edge incidence, one connected positive-volume outward solid, self-intersection checks. **Only convex, broad flat-bottom, overhang-free grips are supported.** Concave, hollow, open, disconnected, inconsistent or unsupported meshes are rejected with actionable guidance; no repair or convex-hull substitution. Original mesh is used in the boolean union.

Select Z-up, Y-up (+90° X), or upside-down before import. Changing axis requests reattachment. Source preview reports oriented dimensions and format. Explicitly confirm millimeter units: STL has no unit metadata. XY scales proportionally to a 4–7 mm maximum footprint; Z independently scales to 0.6–5 mm. Rotation ±180°, X ±1.5 mm and Y ±2 mm placement; minimum XY dimension 1.2 mm. Every transformed vertex must remain in the 6.5 mm radius palm safe zone. A 0.15 mm union overlap connects the grip to the well floor. This is meaningful grip integration, not unchanged re-export. Replace/remove, transform reset and complete reset are available.

Samples: `public/samples/mark.png`, `waves.jpg`, `ring.svg`, `wedge-ascii.stl`, `gem-binary.stl`. All are synthetic local fixtures, no third-party attribution needed. Choose files or drag/drop one at a time.

## Parameters and dimensions

All physical dimensions are millimeters; rotation labels are degrees, image threshold is /255 and preview phase is unitless.

| Parameter | Range |
|---|---|
| Palm diameter | 22–28 mm |
| Pallet pivot reach | 12–14 mm |
| Pin-circle radius | 14–18 mm |
| Bore running gap, per side | 0.3–0.6 mm |
| Wheel thickness | 3–4 mm |
| Palm dimples | 0–0.6 mm deep |

Base floor 5 mm; pin diameter 2 mm; gate diameter 2.6 mm; anchor plate 3 mm. Eight equally spaced pins. Anchor arms clear pin tops by 0.49 mm in explanatory seated poses. Separate low wheel spindle and high anchor shoulder; printed end-stop posts discourage excess anchor rocking. Final X/Y/Z readout follows selected part or separated export plate, not assembled bounding overlap. Bounds and unsupported combinations are checked; invalid export is disabled.

## Mesh pipeline and export

Debounced Manifold WASM generation runs in a module Web Worker. Revision ids discard stale results; exports require the exact current parameter/source/transform key. Conversion-pending and unit-confirmation states also block export. Last-good preview is explicitly labelled when invalid. Worker failure blocks export and requests reload. Each final part must be one connected closed positive solid, pass finite/nondegenerate/welded manifold/winding checks, including float32 translated plate meshes. Preview and export share the exact validated mesh; stage fingerprint is compared against actual downloaded STL in tests.

Download binary STL for each part, selected part or nonintersecting separated plate. Everything ZIP contains all three independent STLs and assembly notes, not a pretend 3MF. Three parts are printed separately; not print-in-place. Assembled pose, exploded, isolated palm and moving-parts views are explanatory only; export always uses actual bed-flat part geometry. Preview phase shows two endpoint release/catch approaches and switches gate pose at zero; it does **not** simulate contact dynamics or the continuous transfer path. Ghost transparency explains fit and is not exported.

## Printing and use

PLA or PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, 3 walls, 25–35% infill. All three exports have bed at Z=0. Support-free geometry is intended; deburr 2 mm pins gently and clear elephant foot from bores. Print **Gentle Start** first as a full-size calibration coupon. Fit is printer/material dependent, never universal. No bearings, magnets, screws or hardware needed.

1. Print palm-stand, eight-pin-wheel and two-pallet-anchor flat as exported; the anchor prints gate pegs **up**.
2. Put wheel over the low spindle, pins up.
3. Flip anchor pegs **down** onto its high right shoulder.
4. Hold level, rock anchor within ±10° and gently nudge wheel counterclockwise until a pin catches. Back off slightly while moving the opposite pallet into place as needed. Never force a blocked transfer. This is a deliberate hand-guided ritual.
5. Lift anchor first, then wheel to release. **Not captive: do not invert or shake.** Loose small parts are not for children.

No physical print, friction, force, fatigue, wear or durability tests have been performed. Computation does not prove how a given printer/filament feels.

## Reproducible validation

- `node validate.mjs`: defaults, three presets, 64 min/max combinations; image threshold/relief/engraved and ASCII/binary STL-derived outputs. Each part and float32 plate: actual serialized triangle count, normals, finite coordinates, dimensions, welded edge incidence, opposite winding, nonzero/positive component volumes, component counts. Manifold intersections test representative free/caught approach poses, intentional gate catching, stop overtravel, lift-off assembly/release and import isolation. Includes invalid settings/files.
- `node transfer-check.mjs`: all 15 discrete radius/reach combinations; configuration-space routes through two successive alternating catches. Swept pin/gate circle clearance is checked between route samples, plus actual mesh intersections along each route. Back-off is allowed; not equal-step or force/dynamic validation.
- `node run-browser.cjs`: serve production under real base path; actual file-picker PNG/JPEG/ASCII/binary imports and downloads; transformed export signatures vs defaults and portable JSON regenerated in Node; invalid/truncated/nonmanifold/empty/excessive inputs, remove/reset, all presets/shapes/text/icons/SVG holes, JSON/named design round trips, undo/redo, actual ZIP contents, per-part export, stale conversion, failed worker recovery, phone 320/390 widths, touch orbit/pinch, themes/focus/reduced-motion/layout. Requires Playwright Chromium installed.
- Gallery validation and root-stage tests verify every prior entry, script syntax, new entry uniqueness, rendering and exact staged files. Reports/screenshots record actual computational/browser results; see VALIDATION.md.
