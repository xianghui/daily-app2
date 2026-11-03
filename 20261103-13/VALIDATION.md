# Validation — Focus & Difference / 20261103-13

## Passed computational checks

- Fresh reference download parsed before final geometry implementation; SHA-256, 30,616 facets, dimensions, all 27 edge-adjacent component bounds and actual Z=.1/.5/1.59 sections recorded. Local switch/link candidates parsed and rejected for sheet/carrier use. Source mesh defects, attribution, proposed tolerances and no-redistribution policy documented.
- `npm test`: 36 cases: three presets, each parameter endpoint, all-min/all-max, all three deck silhouettes, transformed ASCII/binary STL-derived engravings, threshold and grayscale image-derived engravings. No baseline cases blocked.
- `node extended-test.mjs`: 14 additional cases: all focus/difference/sheet corner combinations and image/ASCII/binary imports at simultaneous parameter minima/maxima. 22 out-of-bounds cases reject generation.
- All exported card/clean-part/translated loose-plate binary STL bytes independently parsed: exact lengths, finite vertices/normals, nondegenerate triangles, winding-consistent unit normals, welded edge incidence exactly two/opposed, positive signed volume per component, bed-flat Z=0, expected mm bounds, Euler characteristic. Card is one solid; de-tabbed plate is three separate closed solids. Weld tolerance 0.00001 mm.
- Per case: Manifold intersections at 41 poses across 15–35° ruler sector; fixed anchor insertion at 21 heights; M3 axle path through actual bores; pencil probe through actual slot; fixed cord-eye probe at specified height; conservative anchor/ruler lateral separation; exact hyperbola distance identity and fixed cord length independently recomputed. Pencil remains within real slot and deck. Printed components do not collide in supported assembled sweep or print layout.
- Card X/Y bounds and sheet Z thickness; 12 actual tab cuts yield carrier plus three unharmed parts; tab cuts avoid tongue and functional interfaces; upper sections remain within bed footprints. At least 1 mm engraving backing. Reference default sheet/socket dimensions preserved, allowance explicit.

## Real production-browser checks

`python3 serve.py --port 5793` serves built `dist/` at `/daily-app2/20261103-13/`, not Vite development mode.

- `node browser-test.cjs`: actual file-picker PNG/JPEG and ASCII/binary STL input; explicit mm gate; actual downloadable STL bytes parsed and regenerated in Node from downloaded JSON; exact signatures equal current preview. Every image/STL-derived result also gets mesh/assembly checks. Threshold, image pixels/depth/crop/scale and mesh footprint/depth/rotation/placement change export signatures. Remove/reset restore byte-identical defaults. Both min/max combinations downloaded. Invalid/truncated/open/nonmanifold/concave/oversize/excessive-dimension files, empty silhouettes and invalid transforms block exports with recoverable errors. 320/390 px phone checks, actual touch orbit/pinch screenshot changes, phone PNG/STL picker and downloads. No runtime errors or remote requests.
- `node studio-test.cjs`: real thumbnails/presets, silhouettes, text/icons/SVG, original bounded image/mesh payload JSON round trips, named local save/reload, undo/redo, missing payload rejection, actual Everything ZIP unzipped and EVERY contained STL parsed, numbered instructions; all views, saved dark theme, keyboard focus, collapsible details, reduced motion; 374 px desktop left rail / right viewer; phone preview first. Worker script abort disables export and reload restores it.
- `node orientation-test.cjs`: Z/Y/−Z source transforms, measured oriented dimensions and actual exported solids/mechanism.
- `node icons-drop-test.cjs`: six actual icon conversions each separately mesh/assembly checked; real DOM drag/drop File input.
- `node stale-test.cjs`: immediate export blocking during rapid parameter/image edits, newest-result signature verified against Node, invalid transform recovery.
- `node hole-check.mjs`: final Boolean solid independently probed using browser-imported ring.svg saved state. Bright central hole stays unengraved, dark ring becomes recess, backing remains solid.
- `node presentation-test.cjs`: initial desktop preview, assembled/exploded/card/clean/isolated views, actual ruler sweep and cord-guide toggles; all editor tabs at 320/390 px, expanded long assembly instructions wrap without overflow, phone JSON download reachable. Screenshots in evidence/.
- Gallery inline scripts compiled with Node `new Function`, missing scripts are fatal. New entry exactly once, `stl`, first position and correct link; all 408 earlier entries deep-compared unchanged. Browser renders 409 cards, STL Generators first, search works, no runtime errors.

## Deliberate limitations / not performed

No physical print, fit, friction, drawing accuracy, force, fatigue, material durability, thread tension, glue-strength or physical assembly test. This is a qualitative hand-guided hyperbola construction. Finite thread radius/knots, pencil cone/centering, paper and hardware tolerances introduce error. No hard sweep stops; user stays within 15–35° witness ticks. M3 hardware, measured 0.50 mm lower washer/shims, scrap deck risers, thread, paper/pencil, tape and fixed-anchor adhesive are external and listed in UI/ZIP. Thread and pencil guides are preview-only. No claim of hardware-free equivalent, automatic drawing, physical calibration, repaired arbitrary meshes, exact vector tracing or STL colour.

Imported STL support is deliberately restricted to a single closed convex flat-bottom no-overhang solid, ≤1,500 triangles. Unsupported concave/hollow meshes are explicitly rejected, not hull-replaced. Images are sampled 20×20 height geometry with protected backing. Bold short marks work best; sub-nozzle decorative detail may not reproduce faithfully. Computational watertightness does not certify printed performance.

## Combined root staging

Root `npm run predeploy` completed with **409 built, 0 failed, 0 skipped**. Every gallery app has `deploy/<folder>/index.html`; staged root index equals source and every new app asset equals tested dist. The gallery was tested against the actual combined staging server with all 409 entries. A full real PNG/JPEG/ASCII/binary import/download suite is rerun against that same combined server; its separate results are in `staging-validation.json`.

Root `npm run deploy` returned **Published**, publishing the combined `deploy/` tree to gh-pages commit `fa614e1bf721d8d4a11924404f845eb13b41904c`. GitHub Pages reported this exact commit building with no error. Live delivery is checked separately by `public-test.cjs` and `deployment-validation.json`.
