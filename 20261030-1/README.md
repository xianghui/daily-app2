# Shed & Seat

A browser-only parametric **two-part rigid-heddle kit card**. Thread alternating long slots and round eyes, assemble a socketed handle, then lift/lower the reed in an external warp setup to separate yarn groups. Distinct from a full loom, knitting crown or skein winder.

## Run

```sh
npm ci
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik (Fontsource, SIL OFL). Manifold is Apache-2.0; Three.js MIT; fflate MIT. All generation/import/export runs locally, with no API, CDN, server, account or upload. WebGL/Web Workers required. Root monorepo deployment publishes the combined site; the per-app deploy script is supplied but not used for publication.

## Reference-first evidence

Local STL files were searched first. The Keycap Studio template and fabric diamond link were parsed: their switch/stem and 8 mm interlocking geometry are unsuitable as sheet-card references. Relevant READMEs and the actual meshes were inspected, not just filenames. Detailed hashes, dimensions and components are recorded in `reference-analysis.json`.

The publicly downloaded **White Cat Kit Card**, Mike Kasberg, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), is **CC BY 4.0** (`reference-LICENSE.txt`). Raw source is NOT bundled. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed mm: STL stores no units. Binary source: 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components, nonwatertight. This is a measured design reference, not a repaired/re-exported source.

`reference-inspect.py` measures source sections at Z=.10/.50/1.59 mm. `evidence/reference-sections.png` was visually inspected. Measured sheet planes are 0/1.6 mm, four sockets 4.5 × 1.7 mm, low carrier features about .21/.22 mm. Original reconstruction retains a 4.4 mm tongue and `(4.4+allowance) × (sheet+allowance)` socket, matching source at sheet 1.6 and allowance .10. Default .15 mm total allowance is a proposed adhesive fit. The alternating-slot/eye reed, protective badge, perpendicular handle, 2.4 mm carrier and .4–.6 mm runners are new designs. No source hull substitution or source redistribution.

The read-only Keycap Studio README, styles, App, Viewer, worker, STL import, image conversion and export modules supplied concrete maker-studio patterns: 374 px scrollable left rail, paired inputs, tactile selected controls, checkerboard image cutout, saved theme, worker request guards and phone preview-first stacking. Shared studio/import/export/test infrastructure is adapted from an earlier daily-app studio; reed geometry, aperture layout, yarn probes and design decisions are new. Reference trees and old daily_app remain unchanged.

## Parameters — mm unless noted

| Control | Range |
| --- | --- |
| Card width / height | 110–150 / 100–140 |
| Reed width / height | 46–66 / 42–62 |
| Long slots (count) | 4–7 integers |
| Slot travel length | 12–22 |
| Thread eye diameter | 1.6–2.4 |
| Sheet thickness | 1.6–2.4 |
| Joint total allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway tab width / height | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |

Slot centers alternate with circular eyes across the central `(reed width − 10)` region. Pitch is `(width−10)/(2N−2)`, long-slot width `min(2.6,pitch−1.8)`. Minimum residual web 1.1 mm; slots may not enter the protected lower badge (slot bottom ≥20 mm). Invalid combinations block export. There are N slots, N−1 eyes, and 2N−1 yarn paths. Proposed whole-reed travel limit is `±(slot length/2−eye radius−2)`; start at ±2 mm and calibrate yarn friction/usable shed. This is not a compliant fidget and no spring force is implied.

Three real presets have generated thumbnails. Soft/chamfered/elliptical badge outlines, grip grooves, text and searchable vector marks change actual geometry. Undo/redo, bounded variation, six locally named designs and portable JSON are provided. Every build validates meshes; a last-good preview cannot export after invalid edits.

## Image workflow

PNG/JPEG ≤2 MB, ≤12 MP and 6,000 px per side; headers checked before decode, normalized to ≤500 px. Simple SVG ≤2 MB and 2,000 elements is sanitized against active/external content, then rasterized locally at 256 px. Bundled synthetic PNG/JPEG/SVG samples are available without personal uploads.

The source is fitted or cropped (±25% shifts) onto a **20 × 20** luminance grid. Select light/transparent removal or dark-background inversion. Threshold 1–254 creates a binary silhouette relief; grayscale creates proportional heights. A triangulated, closed heightfield on continuous backing is genuinely unioned into or subtracted from the protected lower reed badge. **2D-to-relief, not reconstruction of a full 3D object from one photo**. Interpolation occurs between grid samples. Holes remain **unraised/unengraved regions on solid backing**, not through-holes or exact vector traces. Original and actual checkerboard cutout are shown.

Footprint 4–7 mm; depth .4–3 mm (engraving .4–.6); rotation ±180°; X placement ±1.5 / Y ±2 mm. All vertices must stay within the 6.5 mm safe radius. Minimum engraving backing is .8 mm. Empty art, unsafe transforms and unsupported complexity block export. Text (up to eight characters) and six searchable bundled vector icons use this same actual-geometry conversion. Replace/remove/reset restores defaults.

## STL imported-grip workflow

Binary and ASCII STL ≤2 MB / 1,500 triangles; each source axis .2–250 mm, finite coordinates. Explicitly confirm millimeter units; select Z, Y or −Z up before import (changing this selector clears the source and asks reattachment). Source dimensions/format/triangle count and original mesh preview are shown separately from the final model. Proportional XY footprint scaling, independent Z height .6–3 mm, Z rotation and XY placement change the original mesh vertices. Manifold genuinely unions the mesh .15 mm into the handle; it cannot reach the socket or warp apertures. This is not unchanged re-export.

Supported contract: **one closed, outward-wound, connected convex solid with broad flat bottom and no overhang outside its bottom footprint**. Validate welded edge incidence, winding, positive volume, finite/nondegenerate triangles, self-intersections, face-plane convexity and bed contact. Concave, hollow, open, nonmanifold, inverted, self-intersecting, disconnected or unsupported meshes are rejected with guidance. Convexity is a restriction, **never a hull replacement**. No automatic repair. Source files stay in-browser. Only synthetic fixtures are in this repository.

## Views, state and exports

Assembled, exploded, connected card, de-tabbed plate and isolated parts use the same generated meshes. Thin ideal straight warp lines explain alternating passages; **preview only, not yarn simulation or exported geometry**. Transparency and colours are preview-only. Every actual downloaded binary STL is compared to the current UI mesh signature and independently regenerated JSON state. Heavy CSG and STL parsing run in bundled Manifold WASM Web Workers with 100 ms debounce, generation IDs, stale-result gating and recoverable errors.

JSON/named saves contain bounded image or verified STL payloads. Missing image payload requires reattachment and blocks export. Only explicit named saves persist designs; theme is separately saved. No user files are uploaded or committed. Per-part binary STL and Everything ZIP (connected card + both parts + numbered instructions) are real tested downloads, not mislabeled 3MF. All exports are bed-flat Z=0. A single connected carrier holds both parts with eight accessible low runners, four each. Snipping leaves the two parts and frame distinct; tab landings avoid the functional tongue, socket and apertures. STL contains geometry, not colours.

## Print, assemble and weave

PLA/PETG, .16–.20 mm layers, three walls, no supports intended. First export clean parts to calibrate the single socket. Snip eight runners, trim nubs, sand every yarn-contact edge. Stand reed upright and lower its tongue into the horizontal socket handle; shoulders seat on the top. Bond with plastic-compatible adhesive and cure. Joint is fixed, not friction/captive retention.

**Not a complete loom.** Supply external anchored warp/loom, smooth thin yarn (starting suggestion .4–.8 mm), threading needle, shuttle and adhesive. Alternate one warp end through each long slot and intervening eye. Under light external tension, raise/lower the entire heddle: eye ends follow while slot ends can slide, making an alternating shed. Pass your external shuttle through and reverse. Do not overtension thin webs; actual shed depends on yarn, anchor distance and friction, not only geometric travel. Decoration stays below warp. Threading is through each open aperture before tying external anchors; there are no closed inaccessible internal channels.

Adult craft with sharp cutters and small parts. No calibrated textile gauge, abrasion or strength claim. **No physical print, weaving, yarn friction/abrasion, fatigue or adhesive testing performed.** Mesh and assembly checks do not prove textile performance.

## Reproducible validation

- `npm test`: eight built-in/preset/shape/extreme cases plus eight image/STL cases. Independent binary STL finite triangles, normalized normals, nondegeneracy, per-component positive volume, opposite-directed two-face edge incidence after 1e-5 mm welding, dimensions and Z=0. CSG checks seated parts disjoint, 13 insertion positions, shoulder stop, .25 mm-radius yarn probes through all apertures at representative travel, minimum webs, card envelope and eight safe snips leaving three components.
- `node hole-check.mjs`: actual Boolean probes verify unraised/unengraved holes remain on continuous backing.
- `node extreme-check.mjs`: mixed extrema and imported geometry, plus invalid bounds/combinations.
- `TEST_BASE=http://127.0.0.1:5433 node browser-test.cjs`: real production file pickers/downloads for PNG/JPEG/ASCII/binary STL; threshold, depth, changed pixels, crop, transforms, reset, malformed/open/nonmanifold/concave/excessive inputs, per-part meshes, current signatures, JSON regeneration, phone uploads/downloads and touch orbit/pinch at 320/390 px.
- `studio-test.cjs`: presets, shapes, text/icons/SVG, portable image/STL JSON, local saves/reload, undo/redo, missing payload, engraving, parsed ZIP parts, all views, saved theme, focus/collapse, desktop-left/phone-preview layout, worker abort/recovery.
- `supplemental-test.cjs`, `variation-test.cjs`: axis orientation, rapid edits, stale export gating, bounded variations.

Build with `npm run predeploy`; `node serve-production.cjs` serves dist under `/daily-app2/20261030-1/`. Tests/reports/screenshots record computational observations, not physical tests. Root monorepo deployment publishes the combined gallery.
