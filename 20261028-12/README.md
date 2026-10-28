# Arc & Span

A local React + Vite maker studio for a **five-part tied-arch display bridge kit card**. Snip 20 real breakaway bridges; assemble a personalized deck, two pierced side trusses and two under-deck ties. This is a decorative miniature, not a load-bearing bridge, strength simulation or toy.

## Run and export

Requires Node 22.12+ and npm. `npm install`, `npm run dev`; `npm test` runs geometry/assembly validation. `npm run predeploy` builds the locally bundled app. Base path `/daily-app2/20261028-12/`. Per-app `deploy` is `gh-pages -d dist`, but publication of this collection uses the **root** monorepo deployment flow.

Download a connected-card binary STL, an individual de-tabbed part, or Everything ZIP (six STLs including the card, plus numbered print/assembly instructions). The connected card is one boolean-unioned solid with perimeter, three crossrunners, five parts and 20 low tabs—not loose pieces beside a frame. Do not print both the card and its duplicate loose parts. STL has no units or colours: import as millimeters at 100% scale. Every part lies flat at Z=0. Preview/export share the exact current worker result; invalid, pending or stale states disable every geometry export.

## Reference-first evidence

Local STL collections were searched first, including keycap, clicker, slider, spring, fabric and kit-card projects. The local kit-card projects contain no STL; switch cavities and moving ghost meshes are not suitable carrier references. Inspected `kit_card_generator/README.md` for the local assembly conventions. Used a suitable publicly licensed mesh instead:

- **Mike Kasberg, White Cat Kit Card**, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [source repository](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0** ([terms](https://creativecommons.org/licenses/by/4.0/)). Download URL in `reference-analysis.json`.
- Actual binary STL parsed: **30,616 triangles**, **179.819997 × 178.019994 × 3.1899996 mm**; SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`. STL units assumed mm, corroborated by source OpenSCAD.
- Welded edge-adjacency yields two components; source has coplanar/nonmanifold artifacts. It was **not repaired, bundled, re-exported or used as a boolean operand**. This is original parametric reconstruction based on measured design structure.
- Actual sections at Z=0.1, 0.5 and 1.59 mm, the Y=100 rail section, vertex histogram and source README/LICENSE/SCAD were inspected. `reference-sections.png` / `.svg` show the measured mesh. The sheet and rail measure 1.6 mm; thin bridge levels include .21/.22 mm. Source `wire` uses a .6 mm tapered join and .2 mm join layer.
- Mapping: source sheet -> default 1.6 mm sheet; 1.6 mm rail -> reinforced 2.4 mm rail; original thin joins -> accessible .4–.6 mm thick tabs. All bridge parts, arch curves, joints and calibration allowances are **new proposals**, not source-measured bridge interfaces. No raw third-party mesh is redistributed.

`reference-analysis.py /path/to/downloaded-reference.stl` reproduces parsing, sections and the report. Coordinates are welded at 1e-5 mm for source connectivity analysis; source defects are reported honestly.

Visual/interaction reference: read-only `keycap_generator2` README, styles, App, Viewer, worker, import/STL and export modules. Applied its concrete 374 px left control rail, sticky compact brand, labelled collapsible groups, paired range/mm inputs, raised tactile segmented controls, soft pink selection states, checkerboard conversion preview, imported-mesh source editor, saved theme, large right-hand orbit viewer, status/warnings and export tray. New model/assembly geometry is not a keycap/socket or a reskinned prior mechanism. Existing local studio import/export utilities were reused with independent dependencies; no source Git history or dependency tree was copied.

## Physical controls (all mm)

| Setting | Supported range |
|---|---|
| Card width / height | 130–170 / 190–230 |
| Bridge span / deck clear width | 72–90 / 26–34 |
| Arch rise / band and hanger width | 22–32 / 3.2–4.2 |
| Sheet | 1.6–2.4 |
| Total joint allowance | .15–.45 |
| Tab width / thickness | .8–1.4 / .4–.6 |
| Additional row offset | 0–1 |
| Deck dimple depth | 0–.4 |

Three real presets and three analytic profiles (parabolic, pointed, cosine) alter the printable structure. Four pierced bays per truss retain a chord, arch band and three hangers. Deck underside is 6 mm above bed in assembly; tie underside is 2 mm. Each side receives two 8 mm deck tenons and two 5 mm tie tenons. Slot height = sheet + total allowance; slot width = tenon width + same allowance. Tongues engage the full sheet thickness and project .8 mm beyond it. Shoulders set the width; slots resist shear/vertical displacement, but **friction alone resists side spreading**. No positive latch is claimed.

## Local image conversion

PNG/JPEG, plus simple self-contained SVG, import via phone/desktop file picker or drag-and-drop. Files stay in the browser: no upload, remote service, API key, CDN or personal input committed to the repository. Synthetic bundled samples let both workflows be tried without uploads.

Limits: 16 bytes–2 MB; PNG/JPEG at most 12 MP and 6,000 px per side, normalized to at most 500 px. Magic bytes, header bounds and actual decoded dimensions checked. SVG permits simple shapes/paths only, at most 2,000 elements and 6,000 px dimensions; external resources, scripts, text and effects are rejected. SVG rasterizes locally to 256 px.

Fit/contain or crop/cover, ±25% crop shift and light/dark background controls feed a **20 × 20 luminance grid**. Threshold (1–254) or inverse-luminance grayscale gives sampled heights. The triangulated top is closed with a bottom and side wall and boolean-unioned into the deck. Bright holes remain unraised above a solid backing (or unengraved), not through-holes in the deck. Checkerboard shows the actual sampled cutout. This is **2D-to-relief conversion, not full 3D reconstruction or exact outline tracing**. The interpolation slopes between pixels intentionally avoid sub-resolution vertical walls. Text (up to eight characters) and six searchable bundled original vector icons use the same conversion. Raised relief .4–3 mm; engraving .4–.6 mm, preserving at least .8 mm floor in supported sheet ranges.

## STL integration contract

Both binary and ASCII STL are read as actual triangles, never hull-replaced. Explicitly confirm millimeter units because STL has no unit metadata. Show oriented source dimensions and independent source preview; select Z/Y/−Z up before attaching. Changing up axis asks for reattachment. XY scales proportionally to 4–7 mm footprint; Z independently scales to .6–3 mm mark height. Rotation ±180°, placement X±1.5/Y±2 mm; all vertices must remain in the deck's 6.5 mm-radius protected well. Minimum scaled XY breadth 1.2 mm. Features cannot reach joints.

STL limit: 2 MB, 1,500 triangles, .2–250 mm per axis. Finite coordinates, valid transforms, nonzero triangles, welded closed edges, consistent outward orientation, one component, positive volume and triangle self-intersections checked before integration. Deliberately bounded support-free contract: **one convex solid with a broad flat base and no unsupported overhang**. Concave, hollow, open, multi-part, inward-wound and unsupported inputs get actionable errors, not silent repairs. Hull computations only validate flat-bed footprint; exported geometry retains the original triangles and is genuinely boolean-unioned with the deck. Replace/remove/center/reset restores defaults.

## Responsiveness and persistence

Manifold WASM in a Web Worker performs all CSG and final preflight; a 100 ms debounce, request ids, import-generation guards and current-state signatures block stale export. Bounded resolution/triangle counts keep work finite. Actual loading/failure states are recoverable by reset, replacement or reload. No fake repair or background upload.

Undo/redo (35 snapshots), six local named designs, portable JSON save/open with normalized PNG and bounded mesh payloads. Missing image payload explicitly requires reattachment; invalid restored meshes/transforms fail closed. Local storage quota failures recommend JSON. Saved light/dark theme; responsive preview-first phone layout, visible focus, generous touch targets and reduced-motion support. Orbit/zoom/fit, connected-card, assembled, exploded, individual and loose-part layouts share the same solids. Exploded positions are illustrative separation; there is no moving joint in this static kit.

## Print and assembly

1. Use PLA/PETG, .4 mm nozzle, .2 mm layers, at least three walls. Bed-flat with decoration upward; no supports intended. Inspect slicer preview. Check card fits bed or print only the loose parts.
2. First print one truss and the deck/tie to calibrate. Start with .30 mm TOTAL allowance, then adjust for printer/material and elephant foot. This is not a universal press-fit.
3. Snip 20 accessible low bridges 2 mm outside nonfunctional edges. Trim nubs; use adult supervision for cutters and small parts.
4. Lay one truss on its outer face; seat the deck at 6 mm and ties at 2 mm through its slots.
5. Align and lower the other truss over all four opposite tenons. Shoulders meet inner faces without bending. Stand upright on the lower chords. Hold both sides when carrying.
6. If loose, recalibrate for less clearance or optionally use tiny glue dots on tenons. Reverse axial side insertion to disassemble before gluing. No hardware required.

## Validation and limits of evidence

`validate.mjs` independently parses actual float32 binary STL, checks file length, finite coordinates, nondegenerate faces, normalized normals aligned with winding, 1e-5 mm-welded edge incidence (two opposite faces), per-component positive volume, Euler consistency and expected mm dimensions. Every card and every separate part checked. Manifold intersections check assembled pairs and both side-insertion paths at 13 positions. Card bounds, part containment, no loose-part overlap and 20 simulated cutter passes yielding exactly six components (five parts + frame) are verified. Extremes, presets and imported outputs receive the same checks. Holes are probed in final raised/engraved solids.

Browser scripts exercise production base-path worker/WASM, actual PNG/JPEG/ASCII/binary file uploads, malformed inputs, geometry-changing thresholds/scales/placements, real downloaded STL/ZIP, preview-export/JSON reconstruction signatures, persistence/history, source races, worker failure, theme, views and 320/390 px touch orbit/pinch. Reports and screenshots live alongside source. See `VALIDATION.md` for completed results.

**No physical printing, strength, fit, force, fatigue or assembly test has been performed.** Computational watertightness and collision tests do not establish real printer fit, friction, retention or load capacity.

Dependencies: React/ReactDOM, Vite/react plugin, Three.js/OrbitControls, Manifold (Apache 2.0), fflate, gh-pages, locally bundled Fredoka/Rubik (Fontsource; SIL OFL); Playwright for development tests. Sample PNG/JPEG/SVG and STL grips are synthetic local fixtures, not private or third-party source meshes. All runtime dependencies/fonts/WASM bundled locally.
