# Validation — 2026-11-03

## Completed before publication

- Read-only local STL search and candidate parsing; selected public CC BY 4.0 kit mesh reparsed (30,616 triangles), SHA-256 recorded, measured sections at Z=0.1/0.5/1.59 mm generated and visually inspected. Source defects documented; raw source not bundled.
- `npm run predeploy`: production Vite build passed; browser tests run against **actual dist** at `/daily-app2/20261103-3/`, not only dev mode.
- `node validate.mjs`: **39 cases**: 38 generated/validated, one invalid width/spacing combination explicitly blocked. All three presets, three silhouettes, combined minimum/maximum settings, individual control extremes, threshold/grayscale/image-hole outputs and ASCII/binary imports/transforms covered.
- Every separately exported part, connected card and float32 loose plate checked for nonempty STL, exact byte count, finite data, nonzero area, unit normals consistent with winding, millimeter bounds, positive volume per connected component and exactly two opposite-directed triangle incidences per welded edge (1e-5 mm weld tolerance).
- All 32 peg insertions checked at eight vertical offsets. Board/pegs and adjacent pegs do not intersect; shoulders seat, tongues end flush underneath. Minimum shoulder 1.2 mm, finger interval >=4 mm, engraved backing >=1 mm. Slots are through cuts. Pegs are removable, not captive. Source-default total fit gap 0.10 mm.
- Real connected carrier and 132 tabs: computational cutting releases **one carrier + 33 undamaged parts**. Card matches declared XY/Z envelope. No accidental loose/flat layout overlap; sampled upper cross-sections remain within bed footprints.
- Numerical issue found at maximum parameters: runner edges coincided with tongue shoulders. Fixed by moving peg tab attachment fractions to 0.34/0.66, inside tongue width. Rechecked all cases; no output cleanup or imported-mesh repair used to hide defects.
- `browser-test.cjs`: **56 actual downloaded STL files** (built-in, image variations, ASCII/binary STL variations, all 34 per-part selections, extrema and phone). Downloads checked against exact preview signature and regenerated portable JSON; every derived model received mesh + insertion/tab-release checks. PNG/JPEG changes, thresholds, depth, crop, scale, rotation and placement measurably change output. Remove/reset restore default bytes.
- Ten malformed/unsupported fixture rejections plus empty image and invalid transformations. Includes truncated/open/nonmanifold/concave meshes, excessive bytes/triangles/pixels/dimensions and invalid types. Errors recover and block stale export.
- `studio-test.cjs`: real preset thumbnails/models, silhouettes, text/icon/SVG geometry, image/mesh portable JSON, named save/reload, missing image payload reattachment error, undo/redo, actual Everything ZIP with every STL parsed, all views, saved dark theme, keyboard focus, collapsible sections, reduced motion, left 374 px panel, phone-preview-first layout, aborted worker failure/export blocking and recovery.
- `orientation-test.cjs`: Z/Y/negative-Z orientations, source dimensions, explicit mm confirmation and final printable models verified.
- `icons-drop-test.cjs`: six searchable icons alter geometry; synthetic file drag/drop works.
- `stale-test.cjs`: rapid parameter/image edits immediately block previous geometry exports; newest result matches Node; invalid edits recover.
- `presentation-test.cjs`: assembled/card/exploded/loose/isolated views, ghost opacity and unchanging print signature; every editor tab at 320/390 px has no horizontal overflow; export remains reachable. Desktop and phone screenshots saved.
- Mobile uses actual touch dispatch: orbit and two-finger pinch visibly change canvas. Real image/STL file-picker uploads and downloads at phone width verified. Local production build makes no off-device runtime requests.
- Physical board topology independently verified by replaying 31 legal orthogonal jumps from 32 pegs to one remaining center peg; `puzzle-solution.json` and `puzzle-validation.json`. This is a validation-only solver; no browser gameplay is shipped.
- Gallery: all inline scripts compile with `new Function`; one new STL-category entry first, **398 existing entries unchanged**. All 399 entries render and search/restore without runtime errors. Existing STL category/order and focus-appropriate tagline preserved.

## Evidence

Machine reports: `geometry-validation.json`, `browser-validation.json`, `studio-validation.json`, `orientation-validation.json`, `icons-drop-validation.json`, `stale-validation.json`, `presentation-validation.json`, `puzzle-validation.json`, `gallery-validation.json`, `gallery-browser-validation.json`. Screenshots and license/source records are in `evidence/`; `desktop-validation.png` and `mobile-validation.png` capture real tested browsers.

Root staging and public-deployment reports are generated during the authorized deploy sequence: `deployment-validation.json`, `staged-validation.json`, `staged-gallery-validation.json`, `public-validation.json` and `public-gallery-validation.json`.

**Not performed:** physical printing, fit calibration, ergonomics/play testing, fatigue/strength testing or safety certification. Geometric checks do not prove printer-dependent fit. Print one peg and the board first; keep level and away from young children.

## Root staging / publication

- Root `npm run predeploy` passed: **399 built, 0 failed, 0 skipped**. Root `npm run deploy` reran that full staging flow and returned **Published**.
- All 399 staged app entrypoints exist; 42 current-app production assets compare byte-identical SHA-256 hashes to dist. Root staged index equals source.
- Full staged production browser test repeated successfully, including all 56 downloaded STL validations and real mobile/import paths. Staged gallery renders all 399 entries without errors.
