# Slit & Settle — local kirigami fidget studio

React + Vite editor for a **staggered-slit tensile kirigami band**. Hold the round palm landing and far crossbar, gently pull apart, then release. Seven rows alternate one long slot and two shorter slots. Uncut bridges distribute tension; the ligaments may rotate and rise out of plane. This is a tensile perforated sheet, not the gallery's compressed concertina, tapered fin lattice, or rotating-square cell.

**No physical print, force, fatigue, return or deployment test has been performed.** The preview is the undeformed geometry, not a mechanical simulation. TPU material experiments may stretch rather than visibly deploy. Never force a full pop-up response.

## Run and deploy

```sh
npm install
npm run dev
npm run predeploy
npm test
node variation-regression.mjs
```

Base `/daily-app2/20261023-14/`. Individual scripts: `predeploy: npm run build`, `deploy: gh-pages -d dist`. Publish the whole site using the **root monorepo's** predeploy/deploy flow. Browser tests require local Vite on port 5270 and installed Playwright Chromium: `node browser-test.cjs`, `node extra-browser.cjs`, `node mobile-sheet.cjs`.

## Editor and geometry

Large live Three.js canvas, orbit/zoom/reset/fit, millimeter grid/dimensions, desktop right rail, mobile collapsible controls, fixed mobile export. Presets Silk Pull (wide/thin), Paper Tide (balanced), Dense Weave (compact/thick) have actual generated mesh thumbnails. Variations use bounded mechanical ranges. Tabs: Shape, Mechanism, Surface, Import, Print. Numeric and slider controls edit actual solid geometry. Preview colour is cosmetic: **STL stores geometry, not colours or unit metadata**.

| Parameter | Range, mm | Default, mm |
| --- | --- | --- |
| Band width | 22–32 | 27 |
| Active band length | 32–48 | 40 |
| Sheet thickness | 0.8–1.2 | 1 |
| Slit opening | 0.8–1.4 | 1.1 |
| Uncut edge margin | 2.4–3.6 | 3 |
| Palm dimple depth | 0–0.6 | 0.3 |

Seven slit rows at length/8 spacing. Odd rows have a long capsule slit; even rows have two shorter capsule slits separated by a 4 mm central bridge. Ten slots total. Rounded tips reduce sharp notches. Minimum between-row material is 2.6 mm, outer bridges at least 2.4 mm. Slit tips remain inside the perimeter. Root/far crossbars are 2.4 mm high; palm landing 20 mm diameter and 4 mm high; import well floor Z=3.2 mm. Import safe radius 6.5 mm remains over 15 mm from the band root. No moving rigid interfaces, joints or retention caps exist: every material connection is intentional. Slit air is an editable real clearance, not a fictitious universal bearing tolerance.

Manifold-3D performs actual solid boolean unions/subtractions in a bounded module worker. No interpenetrating visual shells are represented as a union. Preview and export use the same final validated mesh. Pending, stale, invalid or unconfirmed import state disables export. One connected part needs no assembly or ZIP; whole-solid and named-part selectors export the same complete bed-flat object. All final X/Y/Z dimensions in mm are shown and independently checked against downloaded triangles.

## Image import: PNG / JPEG

Local file picker on all devices and desktop drag/drop; synthetic downloadable `mark.png` and `waves.jpg` fixtures. 16 bytes–2 MB, content header checked before decoding, max 12 megapixels and 6000 px per side. Normalize to at most 500 px side for portable JSON. Transparent areas composite onto white. Source preview plus exact converted grid are visible.

Fit whole image or fill/crop square; crop offsets ±25%. Sample a **20 × 20 luminance height field**, `0.2126R + 0.7152G + 0.0722B`. Threshold 1–254: darker samples rise by chosen depth. Grayscale: `depth × (1 − luminance/255)`. Depth 0.4–3 mm, continuous 0.4 mm backing, triangulated adjacent grid vertices with interpolated slopes. Empty conversion is rejected. This is **2D-to-relief/silhouette conversion, not full 3D reconstruction from a photo**.

Footprint 4–7 mm, Z rotation ±180°, X offset ±1.5 mm, Y offset ±2 mm. Bounded relief is embedded 0.15 mm into the well floor and genuinely boolean-unioned. Changing pixels, threshold, crop, depth, size or placement changes exported geometry without entering the sheet flex zone.

## STL import: binary and ASCII

Synthetic `wedge-ascii.stl` and `gem-binary.stl` are bundled. Max 2 MB / 1500 triangles; source dimensions each 0.2–250 mm. Explicit millimeter confirmation is required because STL has no unit metadata. Source dimensions, format, triangle count and original 3D preview appear before integration.

Supported subset is deliberately strict: **one convex, closed, consistently outward-wound connected solid with a broad flat Z-down bottom (at least 25% XY area), containing the whole XY projection**. Reject open/nonmanifold, disconnected, inward-wound, self-intersecting, concave, hollow, overhanging, degenerate, nonfinite, oversized or truncated inputs. Errors advise re-exporting a closed supported solid; no repair is claimed. Vertices are welded at 0.00001 mm for validation. Source triangle pairs receive explicit intersection checks.

XY fit preserves aspect ratio within the 4–7 mm footprint; independent height fit 0.6–5 mm; minimum fitted XY span 1.2 mm. Z rotation, center/reset, translation, replace/remove supported. Tilting is intentionally not offered: it would invalidate the flat-base integration contract. Entire transformed source must stay in the radius-6.5 mm well. It is fused into the rigid landing, not merely displayed or re-exported unchanged. Final integration must form exactly one connected closed solid.

## History, design files, privacy

Undo/redo captures modeling/import actions. Save/Open JSON embeds a bounded image data URL or validated STL vertex payload. Saved STL meshes are revalidated on open. Missing image payloads produce an explicit reattach prompt, never a fake restored source. Replace/remove/reset transforms/reset image controls/reset all return to usable built-ins.

All files remain in the browser; no uploads, CDN dependencies, external services, API keys, accounts or paid features. Downloaded JSON intentionally carries the local imported payload. Only synthetic sample assets are bundled; no personal files are committed. Dependencies: React, React DOM, Three.js, manifold-3d WASM, Vite/React plugin, gh-pages, with Playwright for development tests. Generation and export work locally after assets load.

## Print and calibration

- Start with TPU 95A; rigid PLA is not recommended. Print bottom at Z=0, no supports or hardware.
- 0.4 mm nozzle, 0.16 mm layers are starting settings. Sheet is 0.8–1.2 mm: inspect actual layer slicing, continuous bridges and open slits. Printer/material tolerances vary.
- Print **Silk Pull** first as a full-size material calibration; no freeing joints or assembly.
- Begin below **0.5 mm total extension**, release, inspect. No force/stiffness, guaranteed buckling or fatigue life is asserted.
- Do not squeeze slots closed, sharply fold, twist, or force full deployment. Stop at damage, whitening, permanent set or delamination.

## Executed validation

`validate.mjs`: independent parsing of actual binary STL; finite coordinates, nonempty/nondegenerate triangles, normalized outward normals, welded edge incidence exactly two with opposite directions, per-component positive volume, exact mm bounds, bed plane Z=0. Covers defaults, all 64 parameter-box corners, all three presets, min/max, eight deterministic variations (78 cases) plus 24 image/STL integration cases. Tests every control changes actual exported bytes. Runtime checks also run on every modeling edit.

Mechanism checks: 10 open slots, continuous perimeter and central bridges, between-row material, slot-side material, well isolation. CSG intersection probes inspect air/material at representative stations on defaults/extrema/presets and import cases. A conservative 0–0.5 mm small-extension exclusion envelope bounds potential gap loss; **not FEA, a fatigue calculation or a prediction of deployed shape**. Intentional material deformation is not simulated. No retained rigid bodies exist; closed-sheet topology retains the object by its bridges.

`variation-regression.mjs`: 128 seeded random settings with independent export/geometry/mechanism checks. `browser-test.cjs`: real PNG/JPEG/ASCII/binary file pickers and downloads, pixel/threshold/depth/crop/scale/placement effects versus no-import output; rejection/recovery; source reset; individual part; preview/export fingerprints; 320/390 px phone layouts and touch orbit/pinch. `extra-browser.cjs`: all presets and variations; portable JSON round-trips for all four fixtures; undo/redo, drag/drop, preview-colour neutrality; mechanism checks on browser-derived settings/imports. `mobile-sheet.cjs`: collapsed/expanded controls, every tab, fixed reachable export. Reports/screenshots record runs. Gallery/public tests check syntax, preservation, newest entry and published generation.
