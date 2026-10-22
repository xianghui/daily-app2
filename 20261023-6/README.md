# Coil Quiet

A local React + Vite parametric STL studio for a hardware-free **axial helical squeeze fidget**. Two thumb plates are joined by a 2.5-turn round-strand helix. Gently compress parallel plates and release; this twists the strand elastically, unlike the collection’s planar twist springs. The undeformed mesh is shown, not a material simulation.

## Run / build / publish

```sh
npm install
npm run dev
npm test
npm run predeploy
```

The app base is `/daily-app2/20261023-6/`. Per-app scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publication uses the **root** predeploy/deploy flow, not the individual deployment. React, Three.js/OrbitControls, Manifold WASM and all modeling code are bundled locally. Playwright is a development dependency. No CDN, remote API, server-side model generation, account or key is required.

## Modeling and interaction

Model-first ivory/clay studio with orbit, zoom, fit/reset, real model preset thumbnails, active-part selection, millimeter dimensions and preview-only palette. Desktop uses a narrow right rail; phones use a collapsible bottom control sheet with reachable export. Shape / Mechanism / Surface / Import / Print tabs expose numeric sliders and typed values. A worker performs STL validation, solid modeling and final mesh preflight. Undo/redo retains up to 35 debounced modeling states. Save/Open JSON includes bounded imported image or mesh payloads; unavailable data is rejected with reattachment guidance, never silently restored.

Three presets: **Whisper** has a wider, taller thin-strand coil; **Palm** balances proportions; **Firm** has a smaller, shorter thick-strand coil. They are intended relative stiffness directions, not measured forces. Variations stay inside the bounded parameter envelope.

| Parameter | Range, millimeters |
|---|---|
| Coil center diameter | 28–36 |
| Active height between plates | 24–36 |
| Round strand diameter | 1.6–2.4 |
| End plate thickness | 2.4–4 |
| Thumb plate radius | 20–24 |
| Upper plate dimple depth | 0–0.6 |

The helix uses 400 longitudinal segments × 20 circumferential samples, capped ends and an orthonormal radial/binormal frame. End centerlines penetrate plates by 0.3 mm; the strand radius increases actual root overlap. Manifold performs real unions/subtractions. No overlapping visual shells are exported as an alleged union. End plates contain the coil footprint, and the 0.8 mm top recess leaves at least 1.6 mm of floor. Surface dimples lie outside the center recess and are real subtractions.

## Image workflow: PNG and JPEG

Choose/drop a real PNG/JPEG (16 bytes–2 MB, ≤12 million pixels, ≤6,000 pixels per side). Header limits are checked before decoding. The source is normalized to ≤500 px per side for portable saves. White-composite transparency, fit/contain or cover/crop, and ±25% X/Y shifts are available. A **20 × 20** grid samples luminance `0.2126R + 0.7152G + 0.0722B`.

- Threshold: grid height is depth when luminance is below threshold, otherwise zero; threshold 1–254.
- Grayscale: height = depth × (1 − luminance/255).
- Relief depth: 0.4–3 mm; continuous 0.4 mm backing and linearly triangulated grid (threshold edges are ramps, not exact vector outlines).
- The patch backing is sunk 0.15 mm into the upper plate floor and **solid-unioned**. All-white/zero-height imports fail instead of being silently accepted.

This is **2D-to-relief / raised silhouette conversion, not full 3D reconstruction from a photograph**. Source and sampled-conversion previews remain visible beside the final model. Source content, threshold, depth, crop, scale and placement change the exported geometry.

## STL workflow: ASCII and binary

Select/drop an ASCII or binary `.stl`, ≤2 MB / 1,500 triangles. The parser requires one connected, closed outward-wound positive-volume solid. Each axis must span 0.2–250 mm; coordinates must be finite and bounded. After welding equal vertices at 0.00001 mm, every edge must have two oppositely directed incident triangles. Degenerate, open, nonmanifold, self-intersecting, disconnected and inward inputs are rejected; no arbitrary repair is claimed.

The integration contract deliberately supports only **convex flat-bottom grips** with at least 25% footprint bed contact and the entire XY projection inside that bottom footprint. Concavity, tilted/hollow/overhanging input is unsupported; orient, simplify or remodel in a mesh editor and re-export. This restricted contract permits a real predictable union into the plate rather than accepting arbitrary broken decorations.

STL carries **no unit metadata**. Source dimensions appear and the user must confirm millimeter coordinates before export. XY scales proportionally to a 4–7 mm footprint; Z independently fits 0.6–5 mm height. Fitted XY span must be ≥1.2 mm. Rotate about Z ±180°, shift X ±1.5 mm / Y ±2 mm, center/reset transforms, replace or remove the source. The custom geometry is unioned into the upper plate: it is not merely displayed or re-exported unchanged. A 6.5 mm radial safe zone isolates all imported vertices from the helical strand. Unsafe transforms disable export.

## Privacy and fixtures

User files are decoded/processed entirely in the browser and never uploaded, sent to a service or added to the repository. Saving a design is an explicit local download containing normalized PNG or bounded STL mesh data. Bundled `mark.png`, `waves.jpg`, `wedge-ascii.stl` and `gem-binary.stl` are synthetic project fixtures (no personal files). Their provenance is documented in `public/samples/README.txt`. Fixture picker buttons and direct downloads exercise both import paths without uploads.

## Export and validation

Primary Download STL produces a binary geometry-only STL with useful source/dimension/part filename. Preview and export share the same final worker geometry; preview colors are not STL colors. Object preview and print layout differ only by XY translation. The app shows exact selected export X/Y/Z bounds. One connected part requires no assembly, per-part ZIP or hardware; the part selector can export the single named solid independently.

Every generation is gated on parameters, latest state key, unit confirmation, import errors and final-mesh checks: finite coordinates, nonzero triangles, no degenerate faces, positive volume, two incident faces per welded edge and consistent winding. Failed edits disable exports until corrected.

`npm test` generates defaults, all three presets, min/max, all 64 envelope corners and eight deterministic variations. Synthetic image threshold/relief and both STL formats run on defaults/extremes/presets. Actual exported binary STL is reparsed for triangle/normal validity, closed manifold incidence, connected components, positive volume, outward winding and expected millimeter bounds. Mechanical tests sample unloaded / 0.5 mm / 1 mm compression for nonlocal strand separation, verify root engagement, plate separation, minimum floor and import isolation. This checks geometry, **not FEA, print force or fatigue**.

`node browser-test.cjs`, `node extra-browser.cjs`, and `node mobile-sheet.cjs` use Playwright against the local Vite server at port 5270. They select real PNG/JPEG/ASCII/binary fixtures, download actual STL, compare geometry fingerprints/content and preview signatures, test transforms/removal/reset, malformed/oversized/open/nonmanifold/unsupported meshes, empty silhouettes, invalid parameters, every preset/variations, undo/redo, JSON portable round trips, drag/drop, touch orbit/pinch, preview color neutrality, and 320/390 px layouts. Reports and screenshots record observed runs, not physical tests.

## Printing and release

**Supports are required.** Print upright (displayed Z axis), with organic/tree supports beneath the strand and upper plate and a brim. Inspect sliced layers and make support access possible. Start with tough PETG, 0.4 mm nozzle, 0.16 mm layers; 1.6–2.4 mm strands correspond to four to six nozzle widths. Avoid brittle resin. These are starting points, not universal settings.

Print Whisper first as the full-size support-release/material calibration specimen. Cool fully, remove every internal support, smooth scars and inspect roots before flexing. No joint release or assembly is required. Keep plates parallel; begin around **0.5 mm compression**, never exceed **1 mm**, and do not twist or pull apart. There is no physical hard stop. Stop on whitening, cracks, permanent deformation or rough contact. Layer adhesion and support removal may make thin coils unsuitable on a particular printer; adjust material/slicer before continued use.

There are no sliding/bearing fits or universal clearance claims. The UI reports strand/turn dimensions and conservative separation. No physical print, fatigue, force, comfort or child-safety test has been performed. Not a chew toy. Digital watertightness does not prove printer-specific support release or durability.

Visual direction was informed by Vaseverse’s model-first studio composition; no reference branding, source, assets or copy was used. Geometry and mechanism are an original fidget implementation; common local import/editor infrastructure is adapted from earlier apps in this collection.
