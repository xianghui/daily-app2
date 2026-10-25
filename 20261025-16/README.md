# Lambda Loom

A local React + Vite STL maker studio for a **Chebyshev lambda linkage fidget**. Guide the raised thumb tip around a looping path, with a near-straight sweep on one half of the crank revolution. A rigid four-bar, not a spring clicker or exact straight-line linkage. All 12 pieces are generated in the browser; no hardware or paid services.

## Run and publish

Node 22.12+; `npm install`, `npm run dev`, `npm test`, `npm run predeploy`. Vite base is `/daily-app2/20261025-16/`. Per-app `predeploy` and `deploy` are present; public publishing uses the parent monorepo's root `deploy/` flow, not the individual app deploy command.

## Studio and reference

Read-only Keycap Studio reference informed the 374 px left panel, compact sticky header, collapsible sections, paired range/numeric millimeter inputs, locally bundled Fredoka/Rubik fonts, lavender-grey desk, white panels, pink selections and raised key-like buttons. Saved light/dark theme, keyboard focus and reduced-motion styling. Phones stack the touch-orbit preview, dimensions, warnings and exports first, followed by full-width controls. No right parameter rail.

Three real thumbnail presets, bounded variations, round/hex/oval palm silhouettes, dimples, text and six searchable icons, undo/redo, six local named designs, portable JSON save/open, fit/zoom and transparent base. Assembled, exploded, palm-only, arm-only and print-plate views. Crank angle moves the ideal assembled preview; **it does not change export geometry**. Colour is preview-only. The exploded pose is explanatory, not a print layout.

## Mechanism and dimensions

Let crank radius be a. Fixed pivots A=(0,0), B=(2a,0); crank AP=a, coupler PQ=2.5a, rocker BQ=2.5a. The coupler continues beyond Q by another 2.5a, giving thumb point T=2Q−P. Circle intersection selects one continuous assembly branch. From crank angles 90° to 270°, the tip lies close to y=4a; the sampled deviation is under 0.012a. The remaining revolution loops back. This is distinct from the earlier Watt, pantograph, trammel and Scott Russell fidgets.

All dimensions in **millimeters**:

| Control | Supported range |
| --- | --- |
| Palm diameter | 22–28 |
| Crank radius a | 12–16 |
| Link width | 7–9 |
| Link thickness | 3–4 |
| Axial clearance | 0.30–0.60 |
| Radial bore/shaft running clearance | 0.25–0.45 per side |
| Cap radial fit relative to 1.8 mm shaft radius | −0.06 to +0.06 |
| Palm dimples | 0–0.6 deep |
| Imported footprint / height | 4–7 / 0.6–5 |
| Import placement | X ±1.5; Y ±2; rotation ±180 degrees |

A negative cap fit creates deliberate interference, not a validated elastic snap. Positive cap fit may be loose. Friction retention must be physically calibrated. Caps have 2.4 mm engagement, with independent axial gaps; they must not clamp the rotating bars. Ground caps sit below the elevated coupler. Moving joint-pin heads clear the base. Minimum eye wall is 1.25 mm at the extreme settings; cap wall at least 1.34 mm. Palm customizations remain within a 6.5 mm radius well, remote from the mechanism.

## Local image → physical geometry

PNG/JPEG required workflows, plus restricted simple SVG. Files 16 bytes–2 MB; raster sources ≤12 megapixels and ≤6,000 px per side. Content/header checks precede decoding. Images normalize to ≤500 px; SVG ≤2,000 simple elements rasterizes locally to 256 px. Scripts, external references, text/effects and remote resources in SVG are rejected. Source and converted checkerboard previews are shown.

Fit/cover crop, ±25% pan, light/dark background compositing, threshold 1–254, raised/engraved style, physical scale, placement and depth all affect the printable geometry. The converter samples a **20×20 luminance heightfield**, triangulates its top, adds closed side/bottom faces, then uses Manifold solid union/subtraction in the palm well. Threshold selects dark regions; grayscale scales height continuously. Raised depth 0.4–3 mm. Engraving is limited to 0.4–0.6 mm to preserve the floor. Bright holes (including the ring SVG sample) remain low/unraised regions over a continuous backing, not through-holes. This is coarse sampled 2D-to-relief conversion, **not automatic full 3D reconstruction or exact vector contour tracing**. Empty silhouettes fail recoverably. Text/icons use the same local conversion method.

## Local STL → integrated physical grip

ASCII and binary `.stl`; ≤1,500 triangles, ≤2 MB, 0.2–250 coordinate extent per axis. Source dimensions, format, triangles and 3D preview are shown. **STL carries no unit metadata: explicitly confirm millimeters**. Select Z up, Y up or inverted Z before attaching; changing up-axis clears the asset and requests reattachment. XY scales proportionally into the footprint; Z fits the chosen height independently. Rotation, centering and placement are real transformations. A 0.15 mm overlap at the broad flat bottom makes a solid CSG union with the palm, not an unchanged mesh re-export or overlapping shells.

The supported mesh contract is intentionally bounded: **one convex, connected, outward-wound, closed, broad flat-bottom solid without overhangs outside its bottom footprint**. Content, finite coordinates, triangle count, face degeneracy, edge incidence, winding, component count, positive volume, dimensions, self-intersections and bed footprint are checked before solid modeling. Open/nonmanifold, concave, hollow, disconnected, touching/self-intersecting or unsupported overhanging meshes are rejected with actionable guidance. No automatic repair, silent convex hull replacement or discarded concavity. Use a simplified flat-bottom grip, not an arbitrary complex figurine.

Replace, remove, reset transformations and return to defaults are available for both workflows. Synthetic project-authored fixtures in `public/samples/` demonstrate PNG, JPEG, SVG, ASCII STL and binary STL. No personal upload is bundled.

## Generation, export and privacy

Manifold WASM runs heavy parsing/modeling in a debounced Web Worker; request IDs and parameter fingerprints guard stale results. Every part is solid-unioned/subtracted, simplified, checked for one closed component, finite coordinates, positive volume, nondegenerate triangles and balanced two-face welded edges. Pending/invalid edits block **all** geometry exports, even if a last-good preview remains labelled. Preview and STL use the same current result.

Export the complete separated bed-flat plate as binary STL, select or directly download each of 12 individual parts, or download Everything as a ZIP of individual STLs plus assembly notes. No misleading 3MF/colour claim. All exported parts have minimum Z=0. Dimensions shown correspond to the selected export, not estimated assembled bounds.

React, Three.js, Manifold, fflate and Fontsource fonts bundle locally; Vite and Playwright support development. No CDN, API key, upload, analytics or remote processing. JSON/localStorage store bounded normalized image payloads or verified mesh coordinates. Missing/invalid assets require reattachment rather than pretending restoration. JSON ≤2 MB; images ≤250,000 portable pixels. No personal files are written to the repository. The static site still requires normal initial asset loading; no service-worker/offline-install claim is made.

## Print, assembly and calibration

Print **all 12 pieces** broad-side/head-down as exported, in PLA/PETG, 0.4 mm nozzle, 0.2 mm layers, three walls. Support-free, no hardware, no glue assumed. Deburr bores and shafts. Start with the complete **Pocket Lambda** preset as the full-size fit trial.

1. Insert shorter ground pins from below A and B in the base. Add crank at A, rocker at B. Leave the stated axial gap before fitting caps.
2. Set the lambda arm above the bars. Its end bore is P (crank end); its middle bore is Q (rocker end). The raised free tip continues beyond Q.
3. Insert longer P/Q pins from below the bars and cap above the lambda arm. Maintain all axial gaps.
4. Check caps resist light withdrawal while every bar rotates freely. A slipping/split cap is not acceptable: adjust cap fit, reprint and retest. Do not force tight pins or claim a universal fit. Pull caps to disassemble/release a seized joint. Keep fingers clear of moving gaps; loose small parts are not for children.

No physical print, strength, friction, retention, fatigue or durability test has been performed. Ideal kinematic and solid-intersection checks are **not physical testing**. Calibration and material choice remain essential.

## Verification

`npm test` checks defaults/presets and 256 parameter corners, independent binary-STL parsing, normals, positive component volumes, welded closed-manifold edges, Euler topology, analytic dimensions and individual parts. Image threshold/relief/engraving and ASCII/binary-derived outputs receive the same mesh and mechanism checks. Independent CSG probes verify remote import isolation, separated print-plate components and representative motion positions; default motion samples every 5°. Only corresponding pin/cap fit interference is deliberately exempted from collision rejection and explicitly measured. All other assembled solids must not intersect. Link-length and near-straight-path equations are independently checked.

`node browser-test.cjs`, `node feature-test.cjs`, `node resilience-test.cjs` exercise actual browser-selected files, exported downloads, parameter fingerprints, changed pixels/settings/transforms, malformed/unsupported content, image holes/background, portable assets, saved designs, history, presets, views, ZIP/per-part export, worker errors and mobile touch orbit/pinch. `production-test.cjs` checks the built WASM worker/export path; `gallery-test.cjs` checks inline scripts, entry uniqueness and preserved entries. See generated validation reports for observed results, not a physical-print claim.
