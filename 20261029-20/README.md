# Corner & Return

A React + Vite, browser-local parametric **three-panel trihedral mirror kit card**. Snip twelve runners, seat two orthogonal uprights in a floor using six shouldered tongues, glue square, and apply three mirror-film patches. Three perpendicular ideal reflections reverse a ray direction. This is a physical flat-pack kit, not a game or an optical-rendering mockup.

**No physical print, assembly-force, adhesive-strength, mirror alignment, or optical-performance test has been performed.** Printed plastic is not a mirror. Thin self-adhesive mirror film and joint adhesive are required. Without film this is a display sculpture, not a reflector. Use a small flashlight, never lasers or direct sun.

## Run and deploy

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Base: `/daily-app2/20261029-20/`. Per-app scripts are exactly `predeploy: npm run build`, `deploy: gh-pages -d dist`; public publication uses the root monorepo `deploy/` flow.

Local dependencies: React, Vite, Three.js, Manifold WASM (Apache-2.0), fflate, Fontsource Fredoka/Rubik (SIL OFL); gh-pages deploy tooling, Playwright test tooling. No runtime CDN, remote service, API key or paid feature. User inputs stay in the browser; no private files are committed.

## Reference-first evidence

Local STL candidates under `/Volumes/ExternalHD/3d_printing_apps/` were enumerated first. READMEs for keycap, slider, fabric, and animal kit studios were inspected. Existing local switch templates, telescoping sectors and fabric links are not interchangeable flat-sheet kit references; the animal kit uses generated profiles, not a suitable preexisting carrier STL.

Downloaded and inspected the actual **White Cat Kit Card**, Mike Kasberg: [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source](https://github.com/mkasberg/white-cat-kit-card), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source README, LICENSE and `kit_frame.scad` were fetched read-only. Raw STL is in `/tmp/corner-return-reference.stl`, **not bundled**. No endorsement implied.

- SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`.
- Binary STL, 30,616 triangles; dimensions **179.819997 × 178.019994 × 3.190000 mm**.
- STL has no units. Millimeters are corroborated by the SCAD 1.6 mm sheet and 179.8 × 178 mm carrier.
- Measured sheet planes 0 / 1.6 mm, carrier rail about 1.6 mm, bridge elevations .21/.22 mm; SCAD tapers nominal .6 mm bridges to one .2 mm layer.
- 27 edge-adjacent components, including 25 two-triangle fragments; source is **not globally watertight**. This is disclosed, not silently repaired or re-exported.
- Actual mesh sections at Z=.10, .50 and 1.59 mm were inspected, showing perimeter/carrier subdivision, thin connecting bridges and sheet features. See `evidence/reference-sections.png` and `reference-analysis.json`. Reproduce using `reference-inspect.py` with numpy, trimesh, scipy, networkx and matplotlib; raw mesh remains outside the repo.

**Adaptation:** retain 1.6 mm default planar sheets and accessible low bridge/card construction. Widen frame to 2.4 mm and redesign runners .4–.6 mm high. Corner panels, six seats, film guides, all fit allowances and optical patch dimensions are **new proposed geometry**, not measured reference interfaces. Everything is reconstructed with Manifold booleans; no convex hull or copied defective shells.

Gallery audit found a periscope (two 45° seats), pinhole chamber, layered perspective and moiré kits, but no three mutually perpendicular reflective faces with triple-axis return. This kit has a different three-panel assembly, film interfaces and ray model; it is not a keycap clone or a re-export. Shared studio infrastructure is adapted from prior monorepo apps; geometry, transforms, packing and assembly/optical checks are specific to this kit.

## Studio design reference

Inspected `keycap_generator2` read-only: README, styles.css, App.tsx, Viewer.tsx, worker, geometry engine/STL, imageTrace and export modules. Concrete patterns used: 374 px scrollable left controls, sticky compact brand/theme header, collapsible sections, paired sliders and numeric mm inputs, raised/pressed key buttons, pink selection, lavender-grey desk #e7e9f1, white panels, ink #1f2233 and coral #e2557a. Large right-side gradient 3D viewer, toolbar/status/dimensions/export; phone preview/exports precede stacked controls. Persistent dark theme, focus outlines, 44 px targets, reduced motion and bundled Fredoka/Rubik fonts. No edits, deployments, dependency-tree or Git-history copies from that reference.

## Parameters (all dimensions mm)

| Control | Supported range | Actual geometry effect |
|---|---|---|
| Card width / height | 205–245 / 110–150 | Three connected carrier bays and outer envelope |
| Mirror panel length / height | 32–46 / 28–40 | Reflector size and upright profiles |
| Mirror edge margin | 3–5 | Floor/upright rectangular film guide sizes |
| Tongue width | 4–6 | Six tongues and matching mortises |
| Joint clearance | .10–.35 total | Slot width = sheet + allowance, corner gap |
| Sheet thickness | 1.6–2.4 | Floor, panels and matching seats |
| Part spacing | 4–6 | Carrier-to-part breakaway spans |
| Runner width / height | .8–1.4 / .4–.6 | Twelve real breakaway connections |
| Label dimple depth | 0–.4 | Tactile ring around the exterior label |

Three real presets, with thumbnails generated by the same worker: **Coral Corner, Wide Return, Tall Triad**. Rounded, chamfered and waisted floor silhouettes change actual outer geometry. Bounded variation uses the largest carrier. Insufficient mixed-size layouts fail clearly, never silently shrink or overlap parts.

## Assembly and printing

1. Export connected-card STL (one connected component) or the three individual part STLs, **all bed-flat**, Z=0. PLA/PETG, .4 mm nozzle, .16–.20 mm layers, three walls; no supports intended. Inspect slicer. Some cards exceed common beds; use individual parts instead. STL has no unit/color metadata: use mm, 100%.
2. Print a panel and floor first to calibrate six tongue seats. Clearance is total .10–.35 mm, split across sides; not a universally correct press fit. Material, first layer and printer vary. Do not force or flex panels.
3. Snip twelve low runners; trim accessible side nubs, preserving tongues. Carrier is waste. Adult craft with cutters and small parts.
4. Lower back panel into three X-row seats, then side panel into three Y-row seats. Keep recessed film guides facing **inward**, into the open corner. Side panel starts `sheet/2 + clearance` beyond back wall, preventing a corner collision. Shoulders rest on the floor; tongues engage `sheet − .15`, leaving .15 underside recess. Both panels insert vertically without threading trapped joints.
5. Dry-fit at 90°, then **glue six seats**; cure square. No snap/positive retention is claimed. No load rating.
6. Cut one floor and two identical upright mirror-film rectangles to the editor's displayed dimensions. Use flat self-adhesive film, **film + adhesive ≤.3 mm**. Inset guides are .1 mm deep, leaving ≥1.5 mm at minimum sheet. Keep film inside margins and off joints; label customization is outside all three patches.
7. Look into the open (+X,+Y,+Z) corner; use a nearby small flashlight. Three ideal normal reversals produce an antiparallel outgoing direction. Gold preview line is **one idealized zero-thickness ray at inset guide planes**, not reflective rendering, an emitted STL part, or measured optical behavior. Actual finite film moves reflection planes; imperfect perpendicularity/flatness changes performance. The model is not a precision optical device.

Computational checks intersect assembled final solids, sample 9 positions along both complete insertion paths, verify all six open seats and all three inward guide/backing locations, and fit .2 mm film solids without intersections. Twelve virtual snips avoid functional geometry and leave three panels plus connected waste carrier. Ideal-ray tests verify three distinct plane hits within patch bounds and reverse all direction components. These checks do not simulate assembly force, adhesion or light intensity.

## Image, SVG, text and icon conversion

File picker on desktop/phones and desktop drag/drop support PNG, JPEG, simple SVG, binary and ASCII STL. Synthetic original samples in `public/samples/`: mark.png, waves.jpg, ring.svg, wedge-ascii.stl and gem-binary.stl. These are not private/reference meshes.

File limit **2 MB**. PNG/JPEG header dimensions checked before decoding: ≤12 million pixels, ≤6000 px per side, then normalize to ≤500 px. SVG allows ≤2000 simple local paths/shapes/groups, rejects scripts/references/external resources/embedded rasters/effects, and rasterizes to 256 px.

Exact image method: crop/fit with ±25% shifts, composite transparency against selected light/dark background, sample luminance to **20 × 20** values. Threshold 1–254 selects silhouette heights, or grayscale sets varying heights. A closed triangulated height field is boolean unioned into or subtracted from the exterior label well. **2D-to-relief, not automatic full 3D photo reconstruction**, not exact outline tracing. Checkerboard shows actual selected pixels. Bright holes stay unraised/unengraved above continuous backing; sampling may lose sub-pixel details. Empty silhouettes block export.

Eight-character local text and six searchable bundled original vector marks use that same geometry path. Transform controls: footprint 4–7 mm, Z rotation ±180°, X ±1.5, Y ±2 mm; raised depth .4–3 mm, engraved .4–.6 mm. Every feature vertex stays inside a 6.5 mm safe radius. Engraving leaves at least .8 mm backing. Out-of-bounds features block export, not clip or obstruct joints. Replace/remove/reset image settings, transforms and all defaults work.

## STL integration

Worker parses ASCII/binary content, welds at **1e−5 mm**, validates finite coordinates, nondegenerate faces, consistently opposing edge pairs, one connected outward-wound positive-volume solid, and self-intersection checks. Limits: 1500 triangles, .2–250 mm per axis.

Supported inputs are explicitly bounded: **convex broad flat-bottom grips, bottom contact ≥25% of bounding footprint, no overhang beyond bed footprint**. Concave, hollow, branching, multipart, nonmanifold, open, malformed and unsupported meshes are rejected with actionable errors. No arbitrary repair or convex-hull substitution.

Choose Z-up, Y-up or −Z-up before attaching. Source preview shows oriented dimensions, triangles and format. Confirm that coordinates mean millimeters; STL has no units. Changing up-axis clears source and requests reattachment. Proportional XY scaling fits the chosen footprint; independent Z scale fits .6–3 mm height, with factors shown. Rotate, place, center, reset, replace and remove work. Features below 1.2 mm XY or outside label safe zone fail. Original transformed triangles are **boolean unioned .15 mm into the label well**. They visibly/measurably change connected-card and floor STL, not merely unchanged re-export or interpenetrating shells. Other panels stay unchanged.

## State, validation and export

Local Web Worker owns Manifold CSG/topology checks, with 100 ms debounce, generation IDs and exact current-state keys. Invalid/import/conversion/loading states disable export even when last-good preview stays visible. Worker load errors report reload recovery. Final preview and binary STL use identical mesh arrays; UI fingerprints are compared with actual downloads.

Views: connected card, assembled corner (optional see-through solids), exploded, de-tabbed print layout and isolated parts. Exploded separation is explanatory only. Print STLs remain bed-flat. Orbit, zoom, fit, touch orbit/pinch are supported.

Undo/redo, six named local designs and versioned JSON include bounded normalized image or checked original mesh payloads. Missing image payload asks for reattachment; it is never pretended restored. Invalid oversized JSON fails. Theme persists separately. No imported personal file is sent elsewhere.

Per-part binary STL and Everything ZIP contain connected-card plus all three individual parts and numbered `ASSEMBLY.txt`. The card and individual parts are alternative print routes, not additional required parts. STL has no preview colours. No 3MF or physical-print claims.

## Reproducible validation

- `npm test`: independent binary-STL size/normals/finiteness/bounds, degenerate faces, 1e−5 welded edge incidence and opposite directions, per-component positive volume; all parts, default/presets/extremes and image/STL variants. Boolean assembly, seats, mirror guides, film clearance, snip connectivity and ideal rays. `validation-report.json`.
- `node browser-test.cjs`: production base-path worker/WASM, real PNG/JPEG/ASCII/binary file-picker uploads and actual downloaded geometry; compare no-import/threshold/depth/crop/scale/rotate/place/reset; invalid/truncated/open/nonmanifold/concave/oversized/empty inputs block export; independently parse every download and regenerate saved state; phone imports, 320/390 px overflow and touch orbit/pinch. `browser-validation.json`.
- `node studio-test.cjs`: presets, silhouettes, SVG/text/icon/engraving, JSON image/STL and local named round trips, missing payload, undo/redo, exact ZIP contents/meshes, all views, dark persistence, keyboard focus, collapsibles, desktop/phone layout, worker abort/reload. `studio-validation.json`.
- Serve built `dist` with `npm run preview -- --host 127.0.0.1 --port 5399 --strictPort` before browser scripts. Screenshots are in `evidence/` and the app root. Runtime requests are checked for no external processing/CDN calls.

Geometry and ideal-ray checks are computational only. **Physical print, film installation and optical tests remain unperformed.**
