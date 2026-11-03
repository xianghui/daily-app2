# Fagnano & Bounce

A React + Vite browser studio for an original four-part **flat-pack orthic-triangle reflection diagram**. Snip 16 real runners, turn three fences upright and insert them into the three computed deck sockets. Change the acute triangle's base, altitude and apex offset: the generator recomputes actual altitude feet, engraved paths, socket locations and fence orientations. This is a real assembled display kit, **not a physics game, rolling-ball track or tested optical instrument**.

No server, paid service, CDN, API key or uploads. Three.js handles orbit/touch viewing; Manifold WASM performs genuine solid Booleans in a worker. Preview and binary-STL export use the exact same current validated mesh. All dependencies and Fredoka/Rubik fonts are bundled locally.

## Run / build

```sh
npm install
npm run dev
npm test
npm run predeploy
python3 serve.py --port 5795
# http://127.0.0.1:5795/daily-app2/20261103-15/
node browser-test.cjs
node studio-test.cjs
node orientation-test.cjs
node icons-drop-test.cjs
node hole-check.mjs
node stale-test.cjs
```

`hole-check.mjs` uses the synthetic ring state produced by the studio test. Tests write reproducible JSON reports; synthetic download scratch files live in `/tmp`, not personal-upload files in the repository. Publishing the whole gallery uses the **root** `predeploy` / `deploy` flow, not this individual app's gh-pages target. Individual scripts are still `predeploy: npm run build`, `deploy: gh-pages -d dist`.

## Actual STL reference, before design

Geometry/design reference: **White Cat Kit Card**, Mike Kasberg, [Printables 865769](https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card), [upstream source](https://github.com/mkasberg/white-cat-kit-card), **CC BY 4.0**. The upstream README/license and a fresh publicly downloadable binary STL were examined. Attribution and licence are retained; the raw mesh and source cat artwork are **not bundled**.

The selected STL has SHA-256 `5cf08e5700cc18ded860a26c8584bb97dff324bd88f54a19f89fef8d87cf73ff`, **30,616 triangles**, dimensions **179.820 × 178.020 × 3.190 mm**, and **27 edge-adjacent components**. It is not watertight; it is a design reference, not an imported supposedly repaired solid. STL does not record units: millimeters are assumed and corroborated by the source sheet/interface dimensions. Full component bounds and measurements are in `reference-measurements.json`.

Cross-sections of the actual triangles at Z=0.10, 0.50 and 1.59 mm were inspected (see `evidence/reference-sections.png`). Four upper-plane socket loops measure **4.500 × 1.700012 mm**; the principal sheet planes are Z=0 and Z=1.600 mm. Low runner planes occur at 0.210–0.220 mm.

### Measured vs reconstructed

- **Preserved by default:** 1.60 mm sheet; 4.50 × 1.70 mm tongue socket aperture.
- **Proposed fit:** tongue length 4.40 mm, giving 0.10 mm TOTAL length allowance; socket cross-width is sheet + 0.10 mm. The allowed total clearance is 0.10–0.25 mm. These are printer/material-dependent starting values, not guaranteed press fits.
- **Redesigned runners:** 0.80–1.20 mm width and 0.40–0.60 mm thickness, bed-aligned rather than suspended; source 0.21–0.22 mm height is not copied.
- **New functional geometry:** 108 × 104 mm diagram deck, three altitude-foot sockets displaced outward by sheet/2, three separately printed tongue fences, actual triangle and orthic-path engravings, three witness-tick patterns, top cord-sighting notches and a connected four-bay carrier.
- **Difference from previous apps:** no incenter gauge, wheel linkage, loose roller, slotted ruler or repeated moving mechanism. The new physical interaction is assembling three independently oriented reflecting planes and following a closed three-bounce orthic path.

Local candidates were searched **first**. Keycap Studio's clicker template was parsed (three components / switch interfaces) and the fabric diamond-link STL was parsed (8 mm interlocking link); neither represents a thin-sheet card/socket assembly. Their dimensions, hashes and rejection reasons are in `reference-measurements.json`. References and the older daily_app gallery remained read-only.

The read-only visual/interaction reference was `/Volumes/ExternalHD/3d_printing_apps/keycap_generator2`: README, styles, App, Viewer, worker, export, imageTrace and STL modules were inspected. Concrete adaptations are the 374 px scrollable left rail, sticky compact brand, labelled collapsibles, paired numeric/sliders, raised tactile buttons, lavender/coral light studio, saved dark theme, checkerboard cutout, separate source preview and current-result-gated worker generation. Its repository history and dependencies were not copied wholesale. Generic local studio/import infrastructure was adapted from the existing daily-app2 implementation; all orthic geometry and assembly checks are new.

## Parameters and units

Everything printable is **millimeters**. Rotation is in degrees; image threshold is /255; crop shifts are percentages.

| Parameter | Supported range |
|---|---|
| Card width / height | 130–160 / 210–250 mm |
| Triangle base / altitude | 52–72 / 42–58 mm |
| Apex horizontal offset | −6 to +6 mm |
| Fence span / height | 18–24 / 10–16 mm |
| Sheet | 1.6–2.4 mm |
| Part spacing | 3–5 mm |
| Runner width / thickness | .8–1.2 / .4–.6 mm |
| TOTAL socket allowance | .10–.25 mm |
| Engraving footprint | 4–7 mm |
| Engraving depth | .4–.6 mm |
| Import X / Y shift | ±1.5 / ±2 mm |
| Import Z rotation | ±180° |

Combinations that do not fit the card or leave insufficient vertex clearance are blocked, not clipped. Three real presets and three deck silhouettes generate real model thumbnails. Bounded variations stay within supported dimensions. Undo/redo, six named local designs and JSON save/open preserve full bounded import payloads. Missing image payloads explicitly require reattachment; no fake restored paths.

## Mathematical and assembly design

The CCW triangle vertices are A=(−base/2,−17), B=(base/2,−17), C=(offset,altitude−17). Each opposite vertex is projected orthogonally onto its side. Acute geometry is required. Joining those feet gives the orthic triangle, the Fagnano minimum-perimeter inscribed triangle; the model checks vector reflection at all three sides.

Each fence's actual **bed face becomes its inward vertical plane** on the triangle side. Its thickness lies outward. Its socket is therefore displaced outward by half the sheet thickness, not incorrectly centered on the ideal reflecting plane. The tongue runs from deck Z=0 to Z=sheet; both shoulders seat on the deck. Slot length remains 4.50 mm and tongue length is 4.50 minus total allowance. Three fences can enter independently from directly above without collisions. There is **no captive retention**: dry-fit gaps are intentional. Adhesive is required for a permanent rigid display. No moving joint, hardware or elastic mechanism is claimed.

The engraved inner path is the ideal geometric path; finite optional cord notches and mirror-film thickness shift it. Optional cord / reflective film / diffuse cool LED lighting are external and neither included nor performance-tested. The kit is useful as a geometric diagram without those materials. No lasers, hot light or sunlight concentration.

## Local image workflow

Picker and drag/drop accept PNG, JPEG and simple SVG. Actual PNG/JPEG headers are checked before decoding: ≤2 MB, ≤12 megapixels, ≤6,000 px per side. Sources normalize to at most 500 px. SVG accepts bounded simple filled paths/shapes (≤2,000 elements); no scripts, foreign objects, external references, linked images, filters or fonts. SVG holes rasterize with their fill rule locally at 256 px.

Fit entire image or fill/crop; shift crop ±25%; select light/transparent removal or inverted dark background. The source and actual checkerboard cutout are shown. A **20 × 20 grayscale field** becomes a bounded solid height surface with side/bottom closure, Boolean-subtracted from the protected deck apron at Y=−39 mm. Threshold mode creates 0/depth sampled heights; grayscale mode uses depth × (1−luminance/255). Adjacent samples are connected by triangles (piecewise-linear transitions, not exact traced contours). Bright holes retain full-height material over a continuous backing. This is explicitly **2D-to-relief**, not full 3D reconstruction from a photograph. Depth .4–.6 mm leaves at least 1 mm backing. Raised/through styles are intentionally not offered on this thin flat sheet. Text and six searchable bundled synthetic icons use the same real engraving path. Replace/remove/reset controls restore defaults. Empty silhouettes and invalid keep-in transforms disable export.

## Local STL workflow and limits

ASCII and binary STL: actual content/length, finite coordinates, nondegenerate faces, welded edge incidence/opposed winding, adjacency, outward volume and self-intersections are checked before modeling in the worker. Limit ≤2 MB, ≤1,500 triangles, one closed solid, each original dimension .2–250 mm. Supported integration is deliberately bounded to **convex, broad flat-bottom meshes with no footprint overhang**. Concave, hollow, nonmanifold, open, disconnected, inverted or unsupported shapes return actionable errors; no automatic repair or hull substitution. A planar hull is used only to validate the bottom-contact footprint, never to replace model geometry.

Choose Z, Y or −Z up before attaching; changing orientation explicitly requests reattachment. See oriented source dimensions and a separate interactive 3D source preview. Confirm that coordinates represent millimeters because STL carries no units. Scale proportionally in XY to a 4–7 mm footprint, independently scale Z to .4–.6 mm depth, then rotate/center/place. The **exact source mesh** Boolean-cuts the deck apron. It cannot reach any interface or reflection path. Shape, scale and placement survive to exported triangles. Source/final previews, reset/remove/replacement and portable JSON are supported. No personal input files are checked in or sent anywhere.

## Views and exports

Connected card, de-tabbed plate, assembled, exploded and isolated views use the same parts. See-through fences explain fit. Exploded spacing is illustrative; export is always real bed-flat geometry at Z=0. Orbit, fit, top/front and zoom work with touch and mouse. Phone preview/toolbar come before warnings, dimensions, reachable exports and stacked controls. All actions have generous targets, focus styles and reduced-motion support.

Binary STL: one connected card, every individual clean part, or a four-component de-tabbed print plate. Everything ZIP includes all five STLs, portable design JSON and numbered assembly instructions with current dimensions. The UI prints a current mesh signature, independently compared to real browser downloads. Stale valid previews never enable export after invalid edits, loading failure or import errors. STL stores geometry, **not preview colors**. No fake 3MF.

## Printing and physical-test limits

Print bed-flat at 100%, PLA/PETG, .4 mm nozzle, .16–.20 mm layers, 3+ walls. Default card needs 140 × 220 mm; separate-part STLs work on smaller beds. No supports intended. Snip each of 16 runners 1.8 mm outside the part outline, then file stubs flush. Fences with one/two/three ticks map to AB/BC/CA; ticked faces outward, notches up. Test sockets, insert all three from above and bond only the fixed tongue/socket joints if desired. Calibrate the clean deck/fence or a small slicer-cut socket coupon first.

Computational mesh/fit/tab/clearance/reflection checks **are not physical printing, assembly, adhesive-strength, dimensional-accuracy, tactile or optical tests**. No physical print was performed. See `VALIDATION.md` and reproducible JSON reports for exactly what was checked.

## Dependencies and attribution

React, Vite, Three.js (MIT); Manifold (Apache-2.0); fflate (MIT); locally bundled Fontsource Fredoka/Rubik (SIL OFL); Playwright (Apache-2.0) for tests. Synthetic PNG/JPEG/SVG and ASCII/binary STL fixtures are original test assets, not reference-model redistribution. Six icon paths are original small bundled marks. Upstream White Cat Kit Card attribution and CC BY 4.0 terms are preserved in `REFERENCE-UPSTREAM.md` / `REFERENCE-LICENSE.txt`.
