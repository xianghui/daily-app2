# Truchet & Route

A local-first **flat-pack tactile routing kit-card generator**. Snip twenty genuine low breakaway runners to release a push-out tray and four engraved channel tiles. Turn any tile by 90° to compose loops and routes. This is a physical finger-tracing / arrangement kit, not a browser game, ball race or fluid channel. Five assembly parts, no purchased hardware or glue. Tiles are gravity seated, **not captive**.

## Reference-first evidence and attribution

Actual design reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source and instructions](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. Download URL is recorded in `reference-analysis.json`; upstream license reproduced in `REFERENCE-LICENSE.txt`. This is an original reconstruction adapting measured sheet/receiving-clearance/carrier-tab construction, not the cat's geometry. No raw source STL is bundled or redistributed.

Downloaded and parsed binary STL SHA-256:
`5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
30,616 triangles; bounds approximately 179.820 × 178.020 × 3.190 mm. STL has **no unit metadata**; millimeters are assumed from the source's sheet/slot construction. The source splits into 27 edge-adjacent components including degenerate zero-volume pseudo-components. The full input is **not manifold**; inspecting it is not a printability or repair claim. The independent reconstruction does not import these defects.

`reference-analysis.py` re-parses the actual downloaded source (temporary path `/tmp/truchet-reference.stl`) and two local candidates. `reference-analysis.json` records every source component, SHA, dimensions, section loops and Z planes. `evidence/reference-sections.png` shows actual sections at Z=.1, .215 and 1.59 mm. Four rectangular receiving loops measure 4.500 × 1.700 mm. Source sheets terminate at 1.60 mm; thin runners at .21–.22 mm. The local MX three-piece switch template and 8-mm fabric link were inspected and rejected as inappropriate sheet-kit references.

### Measurements versus proposed reconstruction

| Source measurement | Generator decision |
| --- | --- |
| 1.60 mm sheet | Default tile thickness 1.60; selectable 1.6–2.4 mm |
| 1.70 mm receiving width for sheet | Default .10 mm gap, selectable .10–.30; new pocket = 2×tile + 3×gap |
| 4.50 mm slot length | Not copied; full square pocket replaces narrow panel sockets |
| .21–.22 mm runner tops | Redesigned .4–.6 mm for more robust FDM first layers |
| Carrier holds small removable parts | Boolean-unioned frame, internal shelves and four removable runners per part |

Original features, **not source measurements**: 2×2 Truchet routing topology, quarter-circle channels, 3-mm tray floor, four 7-mm push-out holes, source-independent tray silhouettes and protected engraving apron. Channels are annular Boolean cuts, not textures. Each of 16 four-bit routing codes rotates the actual tile geometry before plate assembly/export. Code 6 makes the four central arcs form a loop, interrupted by explicit fit gaps.

The reference source is read-only. The older daily_app gallery remains untouched. Shared studio/import/preflight infrastructure is adapted from the collection's prior studio; the physical kit and verification probes are new. The required visual/interaction reference was inspected at `keycap_generator2` (README, styles, App, Viewer, STL parser, worker and exporter): 374px left controls, sticky compact header, paired numeric/sliders, labelled sections, raised tactile controls, checkerboard cutout, explicit STL unit confirmation, ghost/isolated/print views, current-result worker/export guard, local assets and phone preview-first layout. No switch socket is imposed on this unrelated kit.

## Run and build

Node 22.12+; `npm install`, `npm run dev`. `npm test` runs pure geometry and assembly preflight. `npm run predeploy` creates `dist`; base is `/daily-app2/20261105-11/`. Per-app `deploy` is `gh-pages -d dist`, but publication for this collection uses the **root monorepo** `npm run predeploy` and `npm run deploy`, never the individual deploy script.

Dependencies: React/Vite, Three.js/OrbitControls, Manifold WASM (real solid Boolean operations in a dedicated Web Worker), fflate ZIP, bundled Fredoka/Rubik Fontsource fonts (OFL). No generation/export API, paid service, key, remote runtime import or CDN. Source files are processed **only in this browser**. Synthetic PNG/JPEG/SVG/ASCII/binary STL sample fixtures live in `public/samples`; no personal files are committed.

## Parameters, units and solid constraints

All physical values are **mm**. Bounds are displayed for the actual selected export.

- Card width 180–240, height 220–280; frame 2.4 mm; supported layouts must fit declared bounds.
- Tile side 20–28; thickness 1.6–2.4; channel width 2–3; channel depth .5–.8. Minimum continuous tile floor .8.
- Routing code integer 0–15: bits 0/1/2/3 rotate bottom-left / bottom-right / top-left / top-right by 0/90°. 180° repeats topology. The individual Turn tile controls update those bits and the exported geometry.
- Gap .10–.30 is a starting fit allowance **at each interface**; pocket width is 2×tile+3×gap. Side/top rim at least 6, tray floor 3, apron wider for art.
- Part spacing 3–5; runner width .8–1.2; runner thickness .4–.6. Runners attach at two side bands away from midpoint channel mouths. Boolean card has one closed component; simulated snips produce exactly six components: carrier + five parts, no debris.
- Round, clipped and scalloped outer silhouettes; three genuinely different size/channel/routing presets with live model thumbnails.
- Export gated by exact current-state key, worker request id and import/conversion state; last-good previews are labelled and cannot export after invalid edits. 100-ms debounce, bounded image grid and source triangles keep work bounded. Final meshes are simplified at .001 mm before float32 STL validation; no degenerate faces are silently deleted.

## Local image, SVG, text and icon personalization

Picker on desktop/phone and drag/drop accept PNG, JPEG and simple SVG. Actual content/headers and decoded dimensions checked before heavy work: 2 MB, 12 megapixels, maximum 6,000 px each side. Normalize to ≤500 px, then sample **20×20** pixels. Contain/cover, ±25% crop shift, light/transparent background or dark inversion, threshold 1–254, or grayscale depth mapping. SVG permits bounded simple filled shapes (≤2,000 elements); scripts, external resources, text and unsupported effects are rejected. Rasterization preserves bright interior holes as uncut backing at the stated sampling resolution.

Threshold maps each dark sample to .4–.6 mm cut depth; grayscale maps depth to `(1-luminance/255)*depth`. A closed triangulated height-field cutter with a backing volume is mirrored and Boolean-subtracted from the protected apron. The checkerboard shows the actual sampled cutout; source image remains visible beside it. This is **2D-to-relief**, not automatic reconstruction of a full object from one photo, and not exact vector tracing. Bright holes retain full solid backing. Thin/small image details may not survive 20×20 sampling. Text (up to eight characters) and six searchable original bundled SVG marks use the same real geometry pipeline. Engraved only; raised style is intentionally not offered.

Art footprint 4–7, rotation ±180°, X ±1.5, Y ±2; safe radial envelope 5.8 about apron `(0,-tileSide-4)`. Engraving .4–.6 leaves at least 4 mm backing. Invalid/empty art blocks export and is recoverable via replace/remove/reset.

## STL integration, not unchanged re-export

Actual ASCII and binary STL parsed in the worker. Explicit millimeter confirmation required because STL is unitless. Show source X/Y/Z and format, select Z/Y/−Z up before import, normalize XY to 4–7 mm footprint and Z to .4–.6 mm depth, rotate and offset. UI displays the resulting scale. The **exact accepted source mesh** is Boolean-subtracted into the tray apron, changing the final printable solid, never convex-hulled or merely displayed. Source preview and final preview both available.

Contract: 40 bytes–2 MB; ≤1,500 triangles; each source dimension .2–250 mm; finite bounded coordinates; one closed, outward-wound, positive-volume component; no degenerate/self-intersecting triangles; supported convex solid with broad flat bottom and no overhang footprint. Concave, open, nonmanifold, cavities/branches, slender sub-1.2 mm scaled engraving and unsupported cases are explicitly rejected with repair/re-export guidance. **No automatic repair is claimed.** Convexity is an acceptance restriction, not a replacement algorithm. Errors disable export until removal or a valid replacement.

## Saving, views and export

Undo/redo, up to six local named designs, JSON save/open include bounded pixel/source-mesh payloads and normalized image PNG so restored geometry is real. Missing image payload requests reattachment; wrong app/version, invalid transforms/geometry and excessive payloads are blocked. Nothing is uploaded. Replace/remove imports, reset transforms, reset image settings and Reset all return to defaults.

Assembled, exploded, flat connected card, loose print plate and each isolated part use the same final meshes. Exploded offset is explanatory, never exported. Touch orbit/pinch, fit, top/front, zoom and see-through mode. Light/dark theme saved. Preview colors are not stored in STL.

Prominent selected-part binary STL, direct per-part STL and **Everything ZIP** (connected card, five parts, design JSON and numbered `ASSEMBLY.txt`). All solids export bed-flat Z=0 with actual dimensions; no screenshot exports and no false 3MF labels.

## Print and assembly

1. Print the connected card or five clean parts flat; PLA/PETG, .16–.20-mm layers, .4-mm nozzle. No supports intended. Large card sizes require an appropriate bed; reduce to supported bounds or export clean parts.
2. Snip all 20 accessible low runners outside each clean outline. Trim scars flush on tile sides; do not cut the channels.
3. Print a clean tile and tray first as a full-size calibration trial; increase gap if tight, remove elephant foot. Fits depend on printer/material.
4. Lower four tiles vertically into the recess. The 7-mm holes underneath allow pushing them out. Tiles are gravity seated, not captive. Keep upright; no glue/hardware required.
5. Turn tiles by quarter turns and gently finger-trace routes. Clearance gaps interrupt the surface; this is not a marble track. Computationally checked floor/clearance does not establish tactile comfort, durability or physical print success.

**No physical print, fit, touch-comfort or durability testing has been performed.** Computational validation is recorded separately in `VALIDATION.md` and JSON reports.
