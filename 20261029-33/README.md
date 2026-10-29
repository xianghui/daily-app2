# Skein & Cross

A browser-only parametric **two-panel miniature niddy-noddy kit card**. Wind loose yarn around perpendicular upper/lower crossarms to gather a small hank, tie it, and ease it off the open tapered tips. This is an original physical craft assembly, not a game, bobbin, knitting loom or unchanged STL re-export.

## Run

```sh
npm ci
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, Manifold WASM, fflate and locally bundled Fredoka/Rubik (Fontsource, SIL OFL). Manifold is Apache-2.0; Three.js MIT; fflate MIT. All generation/import/export runs locally, with no API, CDN, server, account or upload. WebGL/Web Workers required. Root monorepo deployment publishes the combined site; the per-app deploy script is supplied but not used for publication.

## Reference-first evidence

Local candidate STL files were searched before selection. The local keycap template (switch cutters/stem) and diamond fabric link (8 mm interlocking body) were parsed and found unsuitable for a bed-flat sheet/carrier construction; local kit-card projects contained no STL. See `reference-analysis.json` for candidate hashes, bounds and component counts.

The actual downloaded **White Cat Kit Card**, by **Mike Kasberg**, [GitHub](https://github.com/mkasberg/white-cat-kit-card), [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), is **CC BY 4.0**. License in `reference-LICENSE.txt`. Raw source is NOT redistributed. SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. Assumed millimeters; STL stores no units. Parsed binary: 30,616 triangles, 179.820 × 178.020 × 3.190 mm, 27 edge-adjacent components, not watertight. This source is a design reference only; no repair claim.

`reference-inspect.py` measures actual geometry with trimesh; `evidence/reference-sections.png` contains cross-sections at Z=.10/.50/1.59 mm. Measured sheet planes 0/1.6 mm, four rectangular socket loops 4.5 × 1.700 mm, low carrier features around .21/.22 mm. Our original CSG reconstruction uses a **4.4 mm tongue and (4.4+allowance) × (sheet+allowance) socket**, exactly matching the measured socket at sheet 1.6 and allowance .10. The perpendicular T-spine assembly, tapered tips, central handle, carrier envelope and .4–.6 mm runners are redesigned, not source measurements. Proposed default .15 mm total allowance requires printer/material calibration. One joint must be bonded with separately supplied adhesive; no snap-retention or strength claim.

The read-only Keycap Studio supplied concrete interface patterns after inspection of README, styles, App, Viewer, worker, imports and export modules: 374 px scrollable left controls, paired mm inputs, tactile selection buttons, checkerboard cutout, local theme, worker/stale gating and preview-first phone layout. Shared studio/import infrastructure was adapted from the existing daily-app kit studio; mechanism geometry, assembly transforms, card layout and collision checks are new. Reference projects and old daily_app were not edited.

## Parameters — all dimensions in mm

| Control | Supported range |
| --- | --- |
| Card width / height | 110–150 / 100–140 |
| Winding station rise | 42–62 |
| Crossarm span | 46–66 |
| Top arm depth / tip taper | 8–12 / 2–4 |
| Sheet thickness | 1.6–2.4 |
| Joint total allowance | .10–.35 |
| Part spacing | 4–6 |
| Breakaway tab width / thickness | .8–1.4 / .4–.6 |
| Grip groove depth | .2–.5 |

Three presets have actual generated thumbnails. Soft, chamfered and elliptical handle silhouettes change the real grip. Undo/redo, bounded variation, six locally named designs and portable JSON are provided. Bounds validation and final independent mesh checks run in the worker for every edit. Invalid edits disable export even while the last good preview is visible.

## Image workflow

PNG/JPEG ≤2 MB, ≤12 MP and 6,000 px per side; headers checked before decode, normalized to ≤500 px. Simple SVG ≤2 MB and 2,000 elements is sanitized against active/external content, then rasterized locally at 256 px. Bundled synthetic PNG/JPEG/SVG samples are available without personal uploads.

The source is fitted or cropped (±25% shifts) onto a **20 × 20** luminance grid. Select light/transparent removal or dark-background inversion. Threshold 1–254 creates a binary silhouette relief; grayscale creates proportional heights. A triangulated, closed heightfield on continuous backing is genuinely unioned into or subtracted from the protected central handle. **2D-to-relief, not reconstruction of a full 3D object from one photo**. Interpolation occurs between grid samples. Holes remain **unraised/unengraved regions on solid backing**, not through-holes or exact vector traces. Original and actual checkerboard cutout are shown.

Footprint 4–7 mm; depth .4–3 mm (engraving .4–.6); rotation ±180°; X placement ±1.5 / Y ±2 mm. All vertices must stay within the 6.5 mm safe radius. Minimum engraving backing is .8 mm. Empty art, unsafe transforms and unsupported complexity block export. Text (up to eight characters) and six searchable bundled vector icons use this same actual-geometry conversion. Replace/remove/reset restores defaults.

## STL imported-grip workflow

Binary and ASCII STL ≤2 MB / 1,500 triangles; each source axis .2–250 mm, finite coordinates. Explicitly confirm millimeter units; select Z, Y or −Z up before import (changing this selector clears the source and asks reattachment). Source dimensions/format/triangle count and original mesh preview are shown separately from the final model. Proportional XY footprint scaling, independent Z height .6–3 mm, Z rotation and XY placement change the original mesh vertices. Manifold genuinely unions the mesh .15 mm into the handle; it cannot reach the socket or winding tips. This is not unchanged re-export.

Supported contract: **one closed, outward-wound, connected convex solid with broad flat bottom and no overhang outside its bottom footprint**. Validate welded edge incidence, winding, positive volume, finite/nondegenerate triangles, self-intersections, face-plane convexity and bed contact. Concave, hollow, open, nonmanifold, inverted, self-intersecting, disconnected or unsupported meshes are rejected with guidance. Convexity is a restriction, **never a hull replacement**. No automatic repair. Source files stay in-browser. Only synthetic fixtures are in this repository.

## Views, state and exports

Assembled, exploded, connected card, de-tabbed print plate and isolated parts share the generated meshes. The thin yarn line is an **ideal loose-route guide, preview only** (not simulation, not exported). Transparency/colours are preview-only. Live meshes and binary STL are the exact same current result; the displayed geometry signature is checked against downloaded bytes and independently regenerated JSON state. Heavy CSG and STL parsing run in a bundled WASM Web Worker with 100 ms debounce, stale request IDs and recoverable errors.

JSON/named saves include bounded normalized image or verified STL payloads. Missing image data explicitly requires reattachment and blocks export; no pretending absent files were restored. Only explicit named save writes design data to localStorage; theme preference is persisted. Data never leaves the device except user-initiated local downloads.

Prominent binary STL download, separate connected-card/T-spine/lower-crossarm buttons, Everything ZIP with all three STLs and numbered instructions. **All STL exports are bed-flat at Z=0**, regardless of preview view. Card is one real connected solid; four accessible low runners attach each of the two clean parts to a 2.4 mm frame. Eight cuts yield two parts plus carrier. No disconnected loose-parts layout mislabeled as card. STL stores geometry, not preview colour; no mislabeled 3MF.

## Print and use

PLA/PETG, .16–.20 mm layers, three walls, no supports intended. Print clean parts to calibrate the single socket before a full card. Snip eight runners, trim nubs, smooth all contact edges. Lower the upright T-spine into the horizontal crossarm socket; shoulders stop it. **Bond the joint and fully cure**. Top arm is left/right; lower arm front/back. Supply smooth 1–2 mm yarn, tie cord and compatible adhesive separately. Wind loose upper-right → lower-front → upper-left → lower-rear, tie opposite spans and ease the bundle off the open tapered tips one at a time. No hooks lock yarn in place. Proposed .3 N gentle tension is NOT strength-tested. Approximate straight-span wrap length excludes tip turns and is not a calibrated measurement.

No hardware beyond yarn/ties/adhesive. Adult craft with small parts and sharp cutters. Computational geometry checks cannot establish yarn friction, hand-feel, bond strength, fatigue or release performance. **No physical print or winding/release tests performed**.

## Reproducible validation

- `npm test`: every preset, silhouette, min/max and image/STL-derived meshes: finite coordinates, nondegenerate triangles, normals, per-component positive volume, exact opposite-directed two-face welded edge incidence (1e-5 mm), dimensions and bed-flat exports. CSG checks part disjointness, sampled vertical insertion, shoulder stop, ideal loose-yarn .5 mm-radius span clearance, outboard tip escape zones, and eight snips leaving three components.
- `node hole-check.mjs`: actual Boolean probes confirm unraised/unengraved image holes on backing.
- `TEST_BASE=http://127.0.0.1:5433 node browser-test.cjs`: production bundle at actual base prefix, real file pickers/downloads, PNG/JPEG/ASCII/binary, threshold/depth/pixel/crop/transform effects, empty/malformed/open/nonmanifold/concave/excessive input, recovery, per-part STLs, current signatures, JSON regeneration, touch orbit/pinch and 320/390 px phone imports/downloads.
- `studio-test.cjs`: real presets/shape/text/icon/SVG, portable image/STL JSON, named saves/reload, undo/redo, missing-payload blocking, engraving, actual ZIP parse, views, saved theme, focus, collapsed sections, desktop/phone layout, worker failure/recovery.
- `supplemental-test.cjs` and `variation-test.cjs`: axis transforms, rapid stale edits, invalid export gating, representative bounded variations.

Use `node serve-production.cjs` after build; it serves `dist` under the correct `/daily-app2/20261029-33/` prefix. Reports and screenshots are reproducible computational evidence, not physical test claims.
