# Petal & Bowl

A React + Vite maker studio for an **eight-part miniature open-slat bowl kit card**. Snip 32 runners, seat six outward-flaring petals in a circular floor, then lower an annular top collar onto six upper tongues. Twelve closed sockets locate the parts; **external compatible adhesive is required** for stable assembly. No fasteners, magnets, bearings or electronics. This is a flat-pack craft kit, not a food/liquid container or load-rated basket.

## Reference-first evidence

Read-only local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` is a switch-cavity template, and `fidget_fabric_generator/public/templates/diamond-link.stl` an 8 mm interlocking link, neither a sheet-kit interface. Their parsed dimensions, SHA-256 hashes and component counts are in `reference-measurements.json`. Project READMEs describe these constraints.

Selected mesh: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card). **CC BY 4.0**; source LICENSE retrieved and retained in `REFERENCE-LICENSE.txt`. Mesh downloaded from the URL in `reference-measurements.json`; no raw third-party STL is redistributed.

Actual binary parsing: 30,616 triangles; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`; assumed millimeters; envelope 179.820 × 178.020 × 3.190 mm; 27 edge-connected components; source is **not watertight**. Three measured sections at Z=.1/.5/1.59 mm are in `evidence/reference-sections.png`. Actual section loops establish 1.6 mm sheets and 4.5 × 1.700012 mm sockets. Low planes .21/.22 mm are recorded, not treated as guaranteed runner thicknesses. The source defect is not copied or claimed repaired.

This is an original solid reconstruction, not an unchanged source export. It preserves the **1.6 mm default sheet** and **4.5 mm socket length**. Source surplus ~.100012 mm informs a proposed .15 mm total clearance; both require calibration. All twelve radial sockets, redesigned tongues, six flared slats, circular floor/collar, safe engraving and connected carrier are newly modeled. `reference-analysis.json` maps measured versus proposed dimensions to implemented parameters.

The visual/interaction reference is read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: inspected README, styles, App, Viewer, worker, image tracing and import/export modules. Implemented patterns: 374 px left rail, tactile pressed selection keys, paired sliders/mm fields, labeled collapsibles, checkerboard conversion, source mesh preview, saved theme, preview-first phone layout, current-result worker gates and obvious export panel. Shared local studio utilities were adapted from a prior daily app; **the radial assembly and its collision tests are new**, not a mechanism reskin. No source Git history/dependencies copied wholesale.

## Run / export

Node 22.12+ recommended. `npm install`, `npm run dev`. `npm run predeploy` builds the portable production app at `/daily-app2/20261101-14/`. `npm run deploy` is configured per app; whole-site publishing uses the **root** monorepo deploy workflow. `node serve.mjs` serves production at port 5674 for testing.

Client-only Manifold WASM CSG runs in a dedicated module worker with 100 ms debounce, bounded detail, request IDs and stale-result rejection. All Boolean output is closed-solid checked before display. Three.js orbit/pinch/zoom, fit, assembled/collar-lift/exploded/card/de-tabbed/isolated views use the same printable meshes. Preview-only insertion lift never rotates or changes bed-flat exports. Binary STL is unitless and colourless. Every part has a download; Everything ZIP includes the actual connected card, eight clean parts and numbered assembly/print instructions. Not 3MF.

## Parameters — millimeters

| Control | Supported range |
|---|---|
| Card width / height | 178–220 / 194–234 |
| Lower socket radius | 18–22 |
| Radial flare added to upper radius | 8–12 |
| Upper shoulder height | 32–44 |
| Sheet thickness | 1.6–2.4 |
| Total slot allowance | .10–.30 |
| Radial socket / tongue length | 4.50 / 4.50 minus allowance |
| Part spacing | 3–4 |
| Runner width / height | .8–1.4 / .4–.6 |

Three genuine geometry presets and petal silhouettes. Slat centerline flares linearly; full/faceted profiles widen the waist while preserving 8 mm end shoulders. Unsupported packing combinations reject clearly. Spacing changes bed placement and runner lengths, not just a text label. Floor/collar socket nominal radial end walls are 3.75 mm. Artwork leaves at least 1 mm continuous backing, far from the socket centers.

## Image / text / SVG workflow

File picker on phones/desktops, drag/drop on supporting devices. Actual PNG/JPEG signature/dimension checks: ≤2 MB, ≤12 MP and 6,000 px per side; downsample to ≤500 px for bounded portable storage. Simple SVG filled paths/shapes are validated locally; scripts, references, embedded images and effects reject; rasterized at 256 px. Six small searchable drawn icons and up-to-eight-character text use this same real geometry path.

**Documented conversion:** fit or cover/crop the normalized source into a 20 × 20 sampling canvas; select light/transparent or dark/inverted background; shift crop X/Y ±25%; luminance threshold 1–254 produces binary heights, or grayscale produces continuous heights. Heights form a triangulated, closed height-field cutter; robust subtraction engraves the center floor. Cutout preview shows removed background on checkerboard. Bright holes preserve the underlying floor, not through-holes. This is **sampled 2D-to-relief, not automatic full 3D reconstruction or exact vector tracing**. Tiny details below the grid are not promised.

Footprint 4–7 mm, depth .4–.6 mm, Z rotation ±180°, X±1.5 / Y±2 mm. A 6.5 mm radial keep-in blocks overflowing art. Raised mode is intentionally not offered: this bed-flat sheet kit uses engraving to preserve support-free printing. Replace/remove/reset and returning to the built-in recess regenerate real meshes.

## STL imported-base-style editor

Actual binary and ASCII mesh parsing; ≤2 MB, ≤1,500 triangles, each source dimension .2–250 mm. Source dimensions, triangle count and original-shape preview appear separately from the final kit. **Confirm millimeter coordinates**; STL contains no unit metadata. Select Z up, Y up or −Z up before attaching; proportional XY size, independent engraving depth, center/reset, placement and rotation are available. Changing axis clears the source and requests reattachment.

The exact original triangles become a robust Boolean cutter in the floor—not an unchanged re-export, texture or convex hull. Deliberately supported contract: **one closed, outward-wound convex solid with broad flat bottom and no footprint overhang**. Edge incidence, winding, connectedness, volume, triangle degeneracy, self-intersections, convexity and bed contact are checked. Concave/open/nonmanifold/multibody/hollow/unsupported files produce actionable errors; no automatic repair is claimed. This restriction is explicit rather than silently destroying source concavities.

## State, privacy and dependencies

All files remain in-browser; no upload service, API key, paid service, remote font or CDN code. Only original synthetic fixtures are bundled in `public/samples/`. React, Vite, Three.js, Manifold-3D, fflate and Fredoka/Rubik Fontsource fonts installed locally. Library/font licenses remain with their authors.

Undo/redo, up to six named local designs, JSON save/open carry bounded actual image/mesh payloads. Restored meshes are reparsed; images include normalized PNGs. Missing image payloads explicitly request reattachment and disable export. Invalid edits, worker/import failures and processing states disable export instead of serving stale last-good geometry. Saved theme and preview palette do not imply STL material colours.

## Printing and assembly

PLA/PETG, .16–.20 mm layers, three walls; print all pieces/card flat at Z=0, supports not intended. Print floor + one petal to calibrate the two-axis slot fit before a full card. Snip runners outside parts, trim nubs without shortening tongues. Floor engraved side up → six outward-flared petals with lower tongues seated → adhesive/cure → collar lowered vertically over six upper tongues → adhesive/cure. Small craft items must exceed the open gaps. Full numbered guide is embedded in the UI and exported ZIP. No force, fatigue, adhesive-strength, load or physical print testing is claimed.

## Reproducible validation

`npm test`: independent float32 STL parsing, 1e-5 mm welded edge incidence (two opposite-oriented triangles per edge), componentwise positive volume, finite coordinates, nondegenerate faces/normals, exact bounds, separate part and loose-layout meshes. Kernel intersection checks all 28 assembled pairs, 25 collar insertion heights (150 contacts), six lower-tongue insertion paths, twelve actual socket probes, part separation, 32 runner cuts releasing eight parts + carrier, card envelope and bed support. Slice footprint expands .0001 mm to absorb float32 numerical drift, not mechanical tolerance. Defaults, presets, silhouettes, field extremes, combined extremes, image threshold/height inputs and both STL formats are checked.

Production browser scripts exercise real file-picker PNG/JPEG/ASCII/binary STL inputs, changed pixel/threshold/depth/scale/placement exports, download-byte hashes matching live preview and JSON-regenerated model, malformed/truncated/nonmanifold/concave/excessive inputs, empty art, transforms and reset. Additional scripts cover all presets, holes, text/icons/SVG, undo/redo, named saves, portable payloads, missing payload rejection, ZIP part meshes, worker abort/recovery, up-axis, keyboard focus, saved theme, collapsibles, per-part downloads, touch orbit/pinch and 320/390 px preview-first layouts. Reports record observed checks only. **Computational validation is not physical print or assembly testing.**
