# Octant & Facet — reference-grounded kit-card studio

Eight tapered triangular panels become a hollow, tape-assembled bipyramid. This is an original parametric kit, **not a new skin for a slotted mechanism**: every face has a computed compound bevel and a collision-free outward assembly path. Make two four-face halves and tape the equator; optionally leave the last face as a taped access flap. **Tape is required** and is not a printed/captive hinge. Decorative, not watertight, load-bearing or secure storage.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

React + Vite, Three.js/OrbitControls, locally bundled Fredoka/Rubik fonts (OFL), Manifold WASM (Apache-2.0), fflate (MIT). Full dependency/font and reference licenses are bundled under `public/licenses/`. No CDN, paid service, API key, server-side geometry or user-file upload. Production base `/daily-app2/20261104-21/`. Publish the combined repository with its **root** predeploy/deploy scripts; per-app gh-pages scripts remain available as required.

## Reference-first evidence

Read-only local candidates were inspected first: `keycap_generator2/public/templates/clicker_template2.stl` (three switch-specific bodies) and `fidget_fabric_generator/public/templates/diamond-link.stl` (8-mm-high fabric link). Neither is a relevant flat-sheet kit reference, so no MX sockets or fabric joints were imposed on this design.

Actual public reference downloaded and parsed: **White Cat Kit Card**, Mike Kasberg, Printables **865769**, [upstream repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** (license independently fetched; full text in REFERENCE-LICENSE.txt). Download URL, exact SHA-256, triangle count, dimensions, connected components and cross-section measurements are in `reference-analysis.json`; reproducible parser in `reference-analysis.py`. `evidence/reference-sections.png` shows actual sections at Z=.10, .215 and 1.59 mm. No raw third-party STL is bundled or redistributed.

Measured reference sheet **1.60 mm**, low runners **.21–.22 mm**, sockets **4.50 × 1.70 mm**. We reconstruct its sheet/carrier/tab construction, **not its silhouette or mesh**. The sockets are intentionally omitted because these facets use taped beveled seams rather than sheet tenons. Proposed ranges below strengthen runners and vary panel thickness. Source mesh artifacts are not repaired/reused. This is a documented original reconstruction with attribution, not an unchanged STL export.

The visual/interaction reference was read directly: keycap studio README, styles, App, Viewer, worker, STL parser/export and image-trace modules. Applied patterns: 374-px scrollable left controls, sticky brand/theme header, paired range/mm fields, collapsible labeled sections, tactile pressed selections, local checkerboard import preview, separate source/final previews, large right orbit viewer, saved theme, current-result export gate and portable local designs. Original project remains read-only; dependencies installed afresh.

## Geometry / parameters (millimeters)

- Nominal shell width 46–70, depth 38–60, height 45–90. Square, lozenge and asymmetric kite equators; three real model-thumbnail presets.
- Panel thickness 1.6–2.4. Each face is projected into its own right-handed print plane; an inward parallel face is derived by radial plane scaling to maintain true perpendicular thickness. Original triangular frusta are meshed directly, **not hull-reconstructed input meshes**.
- Facet edge-gap parameter .20–.60: **each facet is inset by half this value in its own plane**, at both outer/inner face boundaries. Actual seam width depends on dihedral angle. Tape bridges seams; no claimed press-fit retention. Calibration advice is in the numbered guide/ZIP.
- Card 200–300 × 240–380; 2.4-wide carrier, spacing 3–5, runners .8–1.2 wide × .4–.6 thick. Four runners per panel, 32 total. Incompatible packings block export. Tabs are attached across their full width band; their snip lines avoid bevels/functional geometry.
- U1 exterior engraving: footprint 4–7, depth .4–.6, rotation ±180°, X±1.5, Y±2. Protected **5.8-mm-radius** keep-in zone; out-of-zone transforms rejected. At least 1.0 mm backing. Raised mode deliberately not offered, to preserve exterior-face-down printing.

All fabrication parts are bed aligned at Z=0. Card, clean plate and individual panels share exact same final geometry. Assembled/exploded transforms are preview only; no fake assembled overlapping-shell STL. Model-colour swatches never imply STL colour metadata.

## Local image → printable geometry

PNG/JPEG (content-checked), plus simple safe SVG: max 2 MB, image 12 MP / 6,000 px side. SVG allows simple filled paths/shapes only (2,000 elements), no scripts/resources/fonts/filters; locally rasterized at 256 px. Image headers are checked before decode; normalized asset ≤500 px is embedded in portable saves.

Fit/cover crop, crop shifts, light/dark background removal, threshold 1–254 and grayscale depth are applied locally to a **20 × 20 sampled grid**. The triangulated height surface has a closed backing and is Boolean-subtracted from U1's exterior face. Bright/transparent holes remain unengraved; this is **sampled 2D-to-relief/silhouette conversion, not exact vector outline tracing or 3D reconstruction from a photo**. Empty silhouettes are errors. The checkerboard shows the actual sampled mask/relief; original image is adjacent. Changed pixels, thresholds and depth produce measurably different STLs.

Text (8 characters) and six searchable bundled icons use the same real Boolean engraving path. SVG `fill-rule` holes survive local rasterization. Short recessed ceilings may bridge up to 7 mm; inspect the first layers in your slicer.

## Local STL → integrated part

ASCII/binary, 40 bytes–2 MB, 1–1,500 triangles; each source dimension .2–250 mm. Require one closed outward-wound positive-volume **convex broad-flat-bottom solid** with no self-intersections, cavities, branches or overhanging footprint. Unsupported concavity is an explicit actionable error, never a convex-hull substitution. No automatic repair is claimed.

Source dimensions, triangle count, format and original source preview are shown. STL has no unit metadata: **explicit millimeter confirmation** gates integration. Z/Y/−Z up selector (before attaching), XY proportional physical footprint scale, independent Z engraving depth, Z rotation, center/reset and placement controls all affect the **exact original source mesh** used as a Boolean cutter in U1. This is an integrated physical panel, not merely unchanged source viewing/re-export. Replace, remove and reset restore normal editing.

Validate file extension/content, image pixel count, mesh edges/winding/volume, self-intersections, dimensions, units and transforms before heavy CSG. Input parsing and model CSG run in a worker; bounded detail, debouncing, request IDs and state-key guards keep stale output unexportable. Errors stay recoverable; worker failure disables exports until reload.

## Save/export / privacy

Undo/redo (35 bounded snapshots), six named local designs, portable JSON containing normalized image or verified mesh payloads. Missing payloads explicitly request reattachment. All processing/storage local to browser; no personal file fixtures in repository. Bundled fixtures are synthetic: mark PNG, wave JPEG, ring SVG, wedge ASCII and gem binary STL.

Download card, clean plate, per-panel binary STLs or Everything ZIP: **nine STLs**, portable design JSON and numbered ASSEMBLY.txt. Final X/Y/Z displayed in mm. Preview and export use the exact current worker mesh; invalid current state cannot silently export last-good geometry. Dark/light preference persists; desktop left/right studio and phone preview-first controls support touch orbit/pinch, generous targets, keyboard focus and reduced motion.

## Print / assemble / calibration

Exterior face down; tapered inward face up. PLA/PETG, .4 nozzle, .16–.20 layers, 3 walls; no supports intended except inspect <=7-mm engraving bridges. Print one card OR eight panels, at 100% mm scale. Large cards need a suitable bed; use separate panel STLs otherwise.

1. Print U1/U2 first. Remove elephant foot and burrs; adjust edge gap by .05 mm for tape and printer/material. No universal tolerance claim.
2. Snip 32 runners ~1.8 mm outside panels, trim flush, retain panel order using card map / filenames. Avoid shaving bevels.
3. Tape U1–U4 edges externally into a pyramid, repeat L1–L4, match face numbers at equator and tape all four seams. Thin removable tape, scissors and flush cutters required. No glue, magnet, bearing or fastener required; tape is a consumable.
4. Optionally tape last panel along one edge only for an access flap. Do not treat it as a locked/captive lid.

## Verification

`validate.mjs` independently parses exported float32 STLs: length, finite coordinates, nondegenerate faces, normals/winding, positive volume per connected component, two oppositely oriented faces per welded edge (1e-5 mm), bounds and part count. Manifold Boolean probes check connected-card/snipped part counts, intact release, card envelope, print/assembled nonintersections, supported bevel footprints, protective backing and 56 outward approach samples per design. Presets, shapes, individual and joint extrema, image/STL variants are exercised.

Playwright scripts exercise real file-picker PNG/JPEG/ASCII/binary imports and actual downloaded bytes, source transforms, invalid files, empty silhouettes, stale export gating, JSON/named-save round trips, undo/redo, icons/SVG, per-part/ZIP export, production worker/WASM paths, theme/focus, phone 320/390 layouts and touch orbit/pinch. Reports and screenshots are stored beside the app.

**Computational validation only. Physical printing, real assembly, tape adhesion, handling/fatigue and strength have NOT been tested.** A watertight digital panel is not proof of a durable physical shell.
