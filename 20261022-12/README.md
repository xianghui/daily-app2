# Slot Cadence

A local React + Vite parametric STL studio for a **crank-and-slotted-lever rocking fidget**. Turn the wheel continuously; its pin slides along a pivoted lever, producing an asymmetric forward/return rhythm. This is not the Scotch yoke's straight shuttle, nor a fixed-length four-bar linkage. Six separately printable parts assemble without purchased hardware.

## Studio

Model-first Three.js canvas; warm matte preview; actual generated preset thumbnails; Shape, Mechanism, Surface, Import and Print tabs; assembled motion and separated print layout; orbit, pinch/zoom, fit/reset; millimeter bounds; active-part selection. Preview colour is not stored in STL. Individual binary STL exports, all-parts layout STL, ZIP with assembly notes, socket coupon, bounded random variations, undo/redo and portable local design JSON are included. Preview and export consume exactly the same final mesh buffers. The crank-phase slider changes assembly pose only, not printable geometry.

## Run and build

```sh
npm install
npm run dev
npm test
npm run predeploy
```

Per-app deployment scripts are `predeploy: npm run build` and `deploy: gh-pages -d dist`. Public monorepo publishing must instead run root `npm run predeploy` followed by root `npm run deploy`, preserving every app. Vite base is `/daily-app2/20261022-12/`.

Dependencies: React/ReactDOM, Vite/React plugin, Three.js, Manifold WASM solid modeling, fflate ZIP and gh-pages. Playwright is a development validation dependency. All generation dependencies and WASM are bundled locally; no CDN, API keys, backend or paid service. Expensive generation and STL preflight run in a module worker, with bounded meshes.

## Both import workflows

All files stay in browser memory; no upload or external processing. Picker works on phones and desktop; desktop drag/drop also supported. Replacement, removal, reset, source/final previews and source dimensions are exposed. Only synthetic bundled fixtures are committed: `public/samples/mark.png`, `waves.jpg`, `wedge-ascii.stl`, `gem-binary.stl`; these are generated geometric patterns/solids and contain no personal assets.

### PNG/JPEG → real fused relief

Actual signatures and header dimensions are checked before decoding. Limits: 16 bytes–2 MB, 12 megapixels, 6,000 px per side. The decoded image is normalized to a ≤500 px side portable preview and then sampled to a **20 × 20** luminance grid with contain/cover crop and ±25% X/Y panning. Transparent regions are composited over white. Luminance is `0.2126R + 0.7152G + 0.0722B`.

Threshold mode raises samples below threshold (1–254) to the selected relief depth. Grayscale mode maps darkness linearly to height. Depth is 0.4–3 mm. Heights sit on a continuous 0.4 mm backing; adjacent samples form a triangulated height field with closed side walls and bottom. Backing is sunk 0.15 mm into the solid palm tab and **boolean-unioned** with Manifold. This is **2D-to-relief conversion, not full 3D reconstruction from a photograph**. Empty relief is blocked. Crop, content, threshold, depth, scale and placement affect actual exported triangles.

### ASCII/binary STL → real fused palm grip

Limits: 40 bytes–2 MB, ≤1,500 triangles, each axis 0.2–250 mm. Checks include finite coordinates, nondegenerate triangles, welded two-face edge incidence and consistent winding, connectedness, positive volume, self-intersection tests, convexity and broad flat-bottom footprint. This intentionally supports one **closed convex flat-bottom solid** only: concavity, cavities, branches, shells, floating parts, overhang footprints, open/nonmanifold/inward or truncated input are rejected with guidance. No automatic repair is claimed or attempted.

STL carries **no unit metadata**. Source dimensions are shown and explicit mm confirmation gates integration. XY is uniformly scaled to a 4–7 mm longest footprint; Z is independently scaled to 0.6–5 mm. Z rotation ±180°, X offset ±1.5 mm and Y offset ±2 mm are available, along with centering/reset. Fitted XY span must be ≥1.2 mm. A circular 6.5 mm safe zone around the fixed palm tab protects all moving mechanisms. Source is translated to bed-facing Z, transformed, sunk 0.15 mm into the palm and robustly boolean-unioned. The result must remain one connected closed solid; interpenetrating shells are not exported as a union.

### Local save/open

JSON includes bounded parsed mesh payload or normalized PNG source plus conversion settings; no external file reference is falsely restored. Reopening STL payload revalidates it through the parser. JSON is limited to 2 MB and image payload is bounded. Invalid design settings or source data block export; originals can always be replaced or removed. Undo/redo keeps up to 35 debounced modeling states. Preview colour and assembly pose are visualization, not model geometry.

## Parameters (all lengths in millimeters)

| Parameter | Range | Meaning |
|---|---|---|
| Crank throw | 7–10 | Pin orbit radius |
| Pivot spacing | 23–29 | Distance between stationary wheel/lever axes |
| Palm thickness | 3–5 | Rigid palm base |
| Grip ridge height | 0–0.6 | Raised oval height and shallow lever grooves |
| Running clearance | 0.20–0.50 | Radial/per-side bearing and slot clearance |
| Cap socket allowance | −0.04–0.08 | Independent static cap friction fit |

The lever has 3 mm thickness and 2.4 mm side rails. Its angle is `−atan2(r cos θ, d + r sin θ)`, with angular bounds ±asin(r/d). The slot runs between center distances `d−r−1` and `d+r+1`, providing ≥1 mm end-center margin throughout rotation plus radial clearance. Vertical separation protects the wheel cap underneath the lever. The smallest socket wall is 1.22 mm at maximum socket allowance; solid cap stems are 1.4 mm diameter. Wheel/lever axles are 4.8 mm diameter and the drive pin is 4 mm. Three retaining flanges keep the wheel, lever pivot and drive slot captive; stems engage static blind sockets. Print layout spaces parts by 6 mm with bed Z=0.

## Printing and assembly

1. Export all six parts or ZIP; use print layout, not assembled pose. Palm and wheel bed-flat; lever flat; caps flange-down and stems up. Use a brim for small parts. No supports intended for this geometry.
2. PLA/PETG, 0.4 mm nozzle, 0.16–0.20 mm layers, four perimeters. Print socket coupon and a cap first. Start at 0.30 mm running clearance / 0.00 mm socket allowance, but calibrate for your printer/material. For a bearing trial, print a wheel and palm or use slicer cuts around their bearing region. No universal fit is promised.
3. Put wheel on the small central axle and fit the smallest cap stem-down. Place lever on the tall palm axle, its slot around the integral wheel drive pin. Fit widest cap at lever pivot; medium cap at drive pin. Stem insertion is 1.8 mm with 0.2 mm end relief. Never force a stem.
4. Deburr elephant foot and turn the wheel 360° slowly; rails must remain retained while moving freely. If a static cap socket is loose, adjust allowance/reprint or apply optional plastic-compatible adhesive only inside its socket. Do not glue bearings. Unbonded caps can be lifted evenly to disassemble.

Small parts are not suitable for young children. There are no compliant bending parts or metal hardware. Wear, retention and tactile quality depend on real printing and material.

## Validation and limitations

`npm test` writes `geometry-validation.json`: default, min/max, presets, one-parameter extremes and eight deterministic variations; image threshold/grayscale and imported ASCII/binary samples at representative settings; per-part and whole binary STL parse checks for finite coordinates, exact mm bounds, normalized normals, nondegenerate faces, welded closed-manifold edge incidence, opposite adjacent winding, positive volume per component and six separate solids. Mechanical checks cover analytic pin trajectory, slot travel, radial fits, flange retention, axial separation and separated bed layout. Full solid-intersection checks sample 72 crank phases for defaults/extremes/presets and every imported case; intentional static cap stem fits are excluded from moving-interference checks.

`node browser-test.cjs` against Vite on 5230 exercises real file pickers and actual downloads for PNG/JPEG/ASCII/binary files, content/threshold/depth/fit/transform changes, replace/remove/reset, invalid and nonmanifold inputs, empty silhouettes, excessive sizes, dimensions and complexity, parameter bounds, individual parts, exact preview/export fingerprints, phone widths 320/390 and real touch orbit/pinch. `node extra-browser.cjs` covers preset/random downloads, ZIP, colour neutrality, drag/drop, undo/redo and portable JSON round trips for all four sample sources. `node production-test.cjs` tests built WASM/worker exports, assembly motion, collapsible phone controls and large-image save/open; `gallery-test.cjs` checks script compilation and preserved entries. Reports and screenshots record the current run.

**No physical print, force, fatigue or real-world fit testing has been performed.** Digital manifold and sampled kinematic validation are not a physical-print certification. Sampled intersections are backed by analytic slot/end and axial clearance checks but do not model flexible deformation, surface roughness or print errors.
