# Peg & Probability

A local React + Vite maker studio for a **three-part Galton-style bead-board kit card**. Snip twelve real runners, cross-lap two feet onto the board, add a transparent cover, and feed individual beads into a triangular peg field over collection bins. Changing rows changes the actual peg count and bin count; pitch, bead size, board dimensions and joints alter real solids, not textures. This is a physical assembly generator, not a browser game or statistical simulator.

## Run and build

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. The individual `deploy` script is `gh-pages -d dist`; the combined public site MUST deploy from the parent monorepo's `deploy/` folder. Vite base: `/daily-app2/20261101-11/`.

Dependencies are bundled locally: React, Vite, Three.js/OrbitControls, Manifold WASM, fflate, Fredoka and Rubik (Fontsource/OFL). No CDN imports, remote generation, API keys or paid services. A static host is needed to load local workers/WASM; user files never leave the browser.

## Product and source

**Geometry reference:** [White Cat Kit Card](https://github.com/mkasberg/white-cat-kit-card), Mike Kasberg, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), Printables model 865769. Source README and licence independently fetched this run; actual STL downloaded and parsed, not merely a listing image. Raw STL is not redistributed. See `reference-measurements.json`, `reference-analysis.json`, `reference-inspect.py` and `evidence/reference-sections.png` for exact URL, source SHA-256, per-component bounds, mesh sections and design mapping.

The source is assumed millimetres (STL has no unit metadata): 179.819997 × 178.019994 × 3.1899996 mm, 30,616 triangles, 27 edge-adjacent components, not wholly watertight. Actual sections measure a 1.6 mm sheet and four 4.5 × 1.700012 mm receiving slots; low planes at .21/.22 mm. No source defects are imported into our reconstruction. Local clicker-template and diamond-link candidates were parsed first and rejected as unsuitable sheet-kit references; their hashes, bounds and components are in the measurement record.

**Measured versus proposed:** foot default thickness 1.6 mm follows the measured sheet. The 4.5 mm *half-lap depth* adopts the receiving-slot feature scale, but its meaning and opposite-open topology are NEW; it is not a measured source half-lap. A .15 mm total slot allowance and .4–.6 mm bed-level runners are proposed printer-dependent redesigns. Board backing is 2–2.6 mm because it supports pegs and engraving, not a copy of the source sheet. We do not claim source-identical fits, automatic mesh repair, physical print testing or confirmed random behavior.

**Visual/interaction reference:** read-only `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2` README, styles, App, Viewer, worker, image tracing, STL parser and export modules. Concrete patterns: compact sticky brand, 374 px left scroll rail; paired numeric/range controls and collapsible sections; lavender desk/white panels/coral raised buttons; saved dark theme; touch orbit; checkerboard converted-source preview; worker-owned solids and current-state export gates; isolated/assembled/exploded/print layouts. General studio infrastructure and synthetic fixtures were adapted from this monorepo's previous maker studio; the peg-board product, row/bin construction and assembly/route tests are new. No source project's Git history or dependency tree was copied.

## Supported ranges (mm unless noted)

| Control | Range | Meaning |
|---|---|---|
| Card | 100–124 × 184–218 | True outer envelope; incompatible packing blocked |
| Board width / height | 76–88 / 104–120 | Outer board; square, rounded or chamfered |
| Peg pitch | 8–9 | Horizontal pitch; vertical pitch = .94 × pitch |
| Peg rows | 5–7, integer | n(n+1)/2 real Ø2.6 mm pegs, n+1 bins |
| External bead diameter | 2.5–3.5 | Chamber = diameter + .8 mm |
| Board backing | 2–2.6 | Raised peg/rail height adds chamber depth |
| Foot sheet | 1.6–2 | Calibrated opposing half-laps |
| Joint allowance | .1–.3 total | Slot = mating thickness + allowance, not per side |
| Spacing | 3–4 | Clearance from parts to frame bays |
| Runners | .8–1.4 wide × .4–.6 thick | Twelve accessible bed-level tabs |

Board Z = backing + chamber, 5.3–6.9 mm across supported parameters; feet Z only equals sheet. Frame and bay rails are backing-thick. The displayed export bounds follow the actual selected mesh in millimetres. STL itself stores neither units nor preview colour. Packing requires actual part bounds plus spacing to fit all three bays; invalid combinations disable export, not silently shrink parts. Some individually allowed dimensions are incompatible in combination.

## Assembly and use

1. Print connected card OR the three clean parts, flat on Z=0, 100% mm, PLA/PETG, .16–.20 mm layers, three walls. No supports intended. Check the backing, peg tops and first-layer dimensions. Dry-fit a trial pair of half-laps before the full product; increase total allowance if tight, reduce if loose. No universal tolerance claim.
2. Snip the twelve accessible runner spans about 1.6 mm outside each part, trim remaining nubs without cutting the lower board slots or top foot slots. Three removable parts remain plus carrier waste. There are no loose parts merely placed beside a rectangle: frame, bay rails, tabs and parts are Boolean-unioned into ONE closed connected card.
3. Stand both feet front-to-back, lower board vertically into both top-open foot slots. Bottom-open board slots receive the feet. Each slot is 4.5 mm deep; board heel rests at Z=9 mm, slot ends meet Z=13.5 mm, feet reach Z=18 mm. Bond both dry-fit half-laps and cure. Feet are not snap-captive; adhesive is required. Computational insertion checks test 33 raised positions, not adhesive strength.
4. Add external transparent 0.5–1 mm PET/acrylic sheet, board width minus 4 by board height minus 8 mm (default 78 × 104 mm). Tape to outer rails; peg/rail tops support it at chamber depth. Keep the top open. Cover must not bow into the chamber; adhesive must not enter routes. Cover is external material, NOT an exported part or included in the printed card.
5. Add smooth round beads at configured diameter, **one at a time**, at the central hopper. Observe paths around pegs and into bins. Tip over a tray and empty through the top. External sheet, beads, tape and adhesive are required; no bearings, magnets or fasteners. Adult craft only: small-parts/choking hazard, cutters, not for children or load bearing.

Nearest peg gaps and bin widths exceed the bead size. Four bead-sized path families are geometrically sampled through the actual Boolean solid. This proves spatial passages, NOT collision dynamics, reliable gravity flow, statistical independence or a binomial distribution. Print roughness, bead roundness, friction, static, cover bowing and desk tilt can cause jams/bias. Physical printing, assembly, stability, motion and statistical behavior remain **untested**.

## Image and legend import: actual printable relief

Picker and desktop drag/drop accept PNG, JPEG and simple SVG. 2 MB file limit; PNG/JPEG headers checked before decoding, ≤12 MP, ≤6,000 px per axis. Normalize to ≤500 px, preserve aspect ratio, fit/cover and ±25% X/Y crop shift. Light/transparent background or inverted dark background. A 20×20 luminance grid produces thresholded silhouette relief or grayscale height relief. Threshold 1–254, engraving .4–.6 mm. The checkerboard displays the converted cutout grid alongside the source image. Text up to eight characters and six searchable locally defined icons use the same conversion path.

A closed sampled height-field solid is Boolean-subtracted from the protected LOWER board signature, centered 8 mm above its heel. Physical footprint 4–7 mm; rotation ±180°, X offset ±1.5, Y ±2 mm, bounded within a 6.5 mm safety circle. Bright holes stay unengraved with continuous backing: ring samples are tested with real solid probes. This is **2D-to-relief, not full 3D reconstruction from a photo or exact contour tracing**. Tiny details can disappear at the documented 20×20 sampling limit. Raised style is intentionally unsupported to preserve the flat envelope and keep artwork below bead routes and away from joints. Empty silhouettes or unsupported transformations block export recoverably.

Simple SVG is parsed, external resources/scripts/URL references rejected, ≤2,000 elements, no text/effects; rasterized locally to 256 px before height conversion. Flatten unsupported features first. SVG holes represented in the raster remain unengraved, not physically cut-through.

## STL import: explicit bounded contract

ASCII and binary STL, ≤2 MB, ≤1,500 triangles, each oriented dimension .2–250 mm. Choose Z up, Y up (+90° X) or −Z up before attaching; changing axis clears the file and requires reattachment. Source preview shows actual mesh and dimensions. Explicitly confirm mm: STL has no units.

One connected, finite, outward-wound, positive-volume, closed manifold **convex** solid with a broad flat bottom and no XY overhang is supported. Every undirected welded edge must have exactly two opposite incidents; degenerate faces, intersections, open/nonmanifold/inward meshes, multiple bodies, cavities, concavities, slender transformed features and unsupported bed contacts reject with actionable guidance. No repair or convex-hull replacement. A bottom-footprint hull is used ONLY to validate bed support, NEVER to substitute geometry. For unsupported input, reorient/rebuild a low-poly closed convex mark in your modeler.

The actual oriented source mesh is proportionally scaled in XY to 4–7 mm footprint; Z independently to .4–.6 mm engraving depth. UI states both scale factors. Rotate, center/place, replace, remove, reset, then Boolean-subtract it into the board signature. It is not an unchanged re-export or visual overlay. Scale/placement changes are checked in downloaded exports against default/no-import and against exact regenerated JSON snapshots.

## Views, state and exports

Assembled, exploded, connected card, de-tabbed plate, and isolated printable part views use the exact generated meshes. Board insertion lift is preview-only and does not move exported parts. See-through board helps explain the lap. Three generated preset thumbnails; mechanical randomization, undo/redo, six local named designs; bounded portable JSON save/open includes normalized image or exact bounded mesh payloads. Missing image payload explicitly requests reattachment instead of pretending files were restored. No personal files enter this repository.

Heavy solids and STL validation run in a Web Worker using local Manifold WASM. 100 ms debounce, sequence IDs and exact serialized-state gates disable export while loading, building, invalid, unconfirmed or stale. Preview can show the last-good model with a visible warning, but export cannot use it. Worker errors disable export and explain reload recovery. Every result also checks finite nondegenerate faces, welded closure, winding, connectedness and volume before enabling downloads.

Binary STL per part and prominent Everything ZIP. ZIP contains connected card STL, each clean part STL and numbered ASSEMBLY.txt with CURRENT fit metrics. No 3MF claim. Downloads and preview signatures match the exact current geometry. All assets are browser-local; file payloads remain on-device in memory/localStorage or user-downloaded JSON.

## Reproducible validation

- `npm test`: exported float32 STL size, finite vertices, normals, nondegeneracy, 1e-5 mm welded edge incidence, opposite winding, each component positive volume, expected mm bounds. Defaults, presets, profiles, field endpoints, all-min/all-max, image and STL imports/extremes; image holes and malformed inputs. Kernel checks: 33 board insertion positions, nonoverlapping parts, all parts contained by card, twelve cuts release 3 parts + frame, bed-supported footprints, actual peg/bin probes, nearest bead gaps and four bead-sized sample routes.
- `node serve.mjs`: serves production `dist` at its real base path (default port 5661).
- `node browser-test.cjs`: real file pickers and actual downloads, PNG/JPEG/ASCII/binary imports, threshold/pixel/depth/crop/scale/rotation/placement changes, exact preview/JSON/STL fingerprints, bad/empty/oversized/open/nonmanifold/concave/truncated files, per-part STL, mobile file imports, touch orbit/pinch and 320/390px overflow.
- `node studio-test.cjs`: every preset, profiles, text/icon/SVG, image/mesh JSON and named designs across reload, missing asset payload, undo/redo, actual ZIP unpack/mesh parsing, all views, desktop layout/focus/collapse/dark theme/reduced motion, worker-abort/reload recovery.
- `node mobile-regression.cjs`, `node orientation-test.cjs`, `node icons-drop-test.cjs`, `node rapid-test.cjs`: true phone viewport in every editor section with long notes, unit/up-axis transformations, six icons and drag/drop, rapid invalid edits/stale result gating, actual individual export buttons.

See reports and screenshots for observed results. These are computational/browser checks only, never evidence of a physical print, working statistical apparatus or measured fatigue/adhesive strength.
