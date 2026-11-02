# Validation — 2026-11-02

## Reference evidence

Downloaded and parsed the public White Cat Kit Card STL afresh, SHA-256 and source recorded. Actual mesh cross-sections Z=.10,.50,1.59 mm, component dimensions and socket loops measured. Local keycap and fabric STL candidates parsed and documented before selection. Source defects disclosed; no raw reference mesh redistributed. Python's missing trimesh dependency was resolved using an existing isolated temporary analysis environment; measurements then passed. Source sheet/socket measurements map to real generator dimensions with proposed fit deviations explicitly disclosed.

## Geometry and assembly

`npm test`: **35 variants passed**: three presets; square/rounded/chamfered silhouettes at simultaneous min/max; all numeric fields individually low/high; threshold and grayscale artwork, maximum engraving depth and bright holes; actual ASCII/binary source tools at default and transformed placements. Every card, each of eight separate clean parts, and eight-component de-tabbed plate independently parsed from serialized float32 STL.

Checks: complete byte length, finite coordinates, nonzero triangle areas, normalized normals matching winding, 1e-5 mm welded edge incidence exactly two opposite-directed faces, positive enclosed volume of EACH component, correct component counts, millimeter bounding dimensions and bed alignment. Manifold checks: **16 legal resting states**, all **15 top-ring lift/translate/lower moves with 27 sampled poses each**, no unwanted intersections, peg insertion paths, stack headroom and bore/diagonal clearance, flat plate nonoverlap, sampled support-free cross-sections, card envelope and Z=sheet. **32 simulated snips** release carrier plus eight undamaged parts. Tongues fit loose adhesive seats, not interference or captive joints. Eight additional tight-card size/spacing/sheet packing corners generated successfully (separate report, not claimed as additional full test variants).

The first connected-card build exposed three disconnected pegs: runners had reached shoulder bounding edges but not the narrower blades. Runner reach was corrected to overlap the real blade outside functional tongues; full connectivity/tab-cut/part-preservation checks then passed. No disconnected card was published.

## Production browser

`browser-test.cjs`: real file-picker PNG/JPEG/ASCII/binary imports, source/final preview, actual STL downloads, exact preview/export hash, portable JSON-to-Node mesh signature match. Pixel content, threshold/depth, crop, grayscale, XY footprint and STL scale/rotation/placement measurably alter output versus defaults. Every downloaded imported model receives independent STL and full assembly/tab checks. Reset/remove reproduce original bytes. Default/min/max settings and all per-part downloads verified.

Malformed/truncated/open/nonmanifold/concave STL; excessive bytes/triangles/pixels; bad dimensions; fake PNG; empty silhouette; invalid transforms and out-of-zone art block exports with recoverable feedback. No repair or hull substitution. 320/390px phone file pickers, real downloads, touch orbit/pinch screenshot changes, no horizontal overflow and reachable exports verified. No runtime errors or remote processing requests observed.

`studio-test.cjs`: all presets, actual geometry thumbnails, silhouettes, text/icons/SVG, portable image/STL JSON and local named-save/reload, missing-payload rejection, undo/redo, actual Everything ZIP extraction and every contained STL checked, all views, saved dark theme, keyboard focus, collapsible controls, reduced-motion context, 374px desktop left rail and phone preview-first layout. Aborted worker script disables exports; reload recovers. Test-specific old numeric values were updated to the new model's supported ranges; rapid-edit test also changed its first value so it differs from the default.

`presentation-test.cjs`: connected card, assembled, exploded, de-tabbed and isolated views, resting-state changes and see-through base visibly alter preview but not printable signature; every tab at320/390px has no overflow and reachable export. `stale-test.cjs`: immediate export gating during rapid parameter/image edits; only latest valid state exportable. `orientation-test.cjs`: real Z/Y/−Z inputs with expected oriented dimensions. `icons-drop-test.cjs`: all six icons affect geometry and pass mesh/assembly checks; real drag/drop PNG. `hole-check.mjs`: imported SVG ring centre retains backing while surrounding samples are engraved.

## Combined site

Every root inline script compiled using `new Function`; missing scripts fail. New entry once, newest first, STL category first; **388 previous entries unchanged**. Gallery renders389 entries and search/reset without runtime errors. Root `npm run predeploy`: **389 built/copied,0 failed,0 skipped**. Root index plus all41 current app production assets match byte-for-byte in deploy/. Final staged/browser and public results are recorded in the accompanying JSON reports as completed.

## Deployment recovery

Initial root deployment failed on a pre-existing gh-pages cache `.git/index.lock` dated19:15. `lsof` and process inspection confirmed no holder or running publishing Git process. Preserved the stale zero-byte lock in `/tmp/daily31-stale-pages-index.lock`, then retried the exact root `npm run deploy`. No source tree or existing gallery entry was discarded. Retry published successfully. GitHub Pages run41437015117 completed successfully. Initial public checks saw the previous387-entry cached release; after rollout, actual public built-in/PNG/STL downloads passed exact signature and independent mesh checks, and the public gallery rendered all389 entries without runtime errors.

## Unperformed

**No physical print, fit/friction, adhesive-strength or durability test.** Computation is not a physical manufacturing guarantee. Pegs require adhesive; rings remain loose and can be removed. Preview is discrete legal resting states, not continuous dynamics or a strength simulation. STL supports documented convex broad-flat-bottom marks only; image conversion is sampled2D relief, not photo reconstruction. Real printer/material calibration required.
