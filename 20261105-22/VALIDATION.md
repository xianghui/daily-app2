# Validation — Lyapunov & Swing (20261105-22)

Computational/browser checks only. No physical print, assembly, fit, friction, rigidity, retention, adhesive, mounting stability or dynamics test was performed. Purchased hardware is required and omitted from preview; joint sliders are kinematic poses, not a physical simulation.

## Reference and build

- Local MX template and fabric-link candidates freshly parsed and rejected as unrelated to this sheet kit.
- Public White Cat Kit Card bytes freshly parsed; hash, dimensions, edge adjacency, source anomalies and three actual cross-sections recorded in `reference-analysis.json` / `evidence/reference-sections.svg`. Upstream README and CC BY 4.0 license fetched live. No raw reference STL redistributed.
- Default sheet 1.60 mm and socket 4.50×1.70 mm retained; proposed tongue allowance and blind floor explicit. New M3 pivots and 10 mm spacers are not mislabeled measured source interfaces.
- App `npm run predeploy`: PASS. Real production base prefix `/daily-app2/20261105-22/`; bundled fonts, worker and WASM.
- Root `npm run predeploy`: 469 built, 0 failed, 0 skipped. All 469 gallery app indexes present. 26 new-app deployed files SHA-256 identical to app dist.

## Geometry / assembly — 45 cases

`npm test` / `geometry-validation.json`: defaults, all three presets, all shape silhouettes, simultaneous minimum/maximum, each field's individual minimum/maximum, transformed ASCII/binary STL and threshold/grayscale source outputs including representative geometry extrema.

For every case:

- Serialized binary STL exact byte count, finite vertices/normals, nondegenerate triangles, normalized normals aligned with winding, explicit mm bounds.
- Weld at 1e-5 mm, exactly two opposite-directed triangles per edge, required connected-component count and positive volume per component. Separate part STLs, connected-card STL and translated clean plate checked.
- One connected card, four separate clean parts, sixteen real bed-aligned low runners. Snipping all defined cut corridors yields exactly five components (carrier + four intact parts), no loose runner fragments or damaged functional parts.
- No flat-plate part overlaps, exact declared card X/Y bounds and sheet Z, higher slices supported by bed footprint.
- Blind socket floor .80 mm; both sockets empty above floor and pivot bores open in both clean parts and card. Six vertical mast insertion samples collision-free.
- 81 joint-angle combinations through a full printed-body circle per case: no printed-part intersections. Full-circle conservative ground clearance >=8 mm. Mast tongue/socket dimensions are checked independently of watertightness.
- Hardware envelope: M3×20 stack accommodates maximum sheet, 10 mm sleeves, <=.5 mm washers, <=2.5 mm heads, <=4 mm nuts. Fixed pivot forward tip remains behind lower-link plane. Bolts face forward; moving-joint heads clear mast gap. These are bounded geometry calculations, not joint force/stability evidence.

A too-short initial card range was corrected to 220–260 mm height. Initial short sleeves were replaced with 10 mm sleeves / M3×20 hardware to keep fixed-pivot bolt tips out of the lower-link layer. Final mesh/mechanism tests rerun successfully.

## Real production-browser workflows

`browser-test.cjs` / `browser-validation.json` and `combined-browser-validation.json`:

- Real file-picker PNG, JPEG, ASCII STL and binary STL imports on desktop and phone, actual downloaded STL bytes parsed with all mesh and mechanism checks.
- Compared with no-import default; pixel contents, threshold, relief depth, crop/fit/shift, footprint, rotation and placement measurably change exports. STL requires explicit mm confirmation. Replace/remove/reset restore default signatures.
- Exact preview/export fingerprint equals downloaded binary STL; exported portable JSON regenerates byte-identical STL through the same pure model builder.
- Invalid/truncated STL, open and duplicate-face nonmanifold meshes, excessive file size/pixel count/triangle count/source dimensions, wrong content, concavity, empty silhouettes, blank numeric inputs and out-of-keep-in transforms reject recoverably with export disabled.
- 320/390 px touch viewport: no overflow, file inputs usable, export reachable. CDP touch orbit and pinch change canvas screenshots. Zero app runtime errors or remote file-processing requests.

`feature-test.cjs` / `feature-validation.json`:

- Every preset and shape via real browser download / Node regeneration and independent assembly checks.
- Text, icon, SVG ring, inverted JPEG; portable PNG/JPEG/ASCII/binary payload roundtrips; Y-up input; undo/redo, local named design persistence, saved light/dark theme.
- Actual ZIP unzipped: connected card and four clean STLs independently checked; guide, assembly map and design payload included. Real per-part buttons checked.
- Assembled/exploded/card/clean/isolated views, preview colors leave exports unchanged; screenshots recorded. Keyboard focus and collapsible sections checked. Rapid latest edit and invalid edit cannot export stale geometry.

Additional reports:

- `hole-validation.json`: actual final SVG-ring Boolean cut preserves center backing while engraving dark ring band.
- `motion-validation.json`: both independent angle controls visibly change final preview, printable geometry stays unchanged.
- `mobile-layout-validation.json`: 374 px desktop left rail/right viewer; 320/390 all-tab preview-first stacks, reduced motion and reachable JSON export.
- `resilience-validation.json`: worker-request abort disables exports; reload recovers. All six bundled icons change exported geometry.
- `portable-errors-validation.json`: missing image, invalid transform, wrong app and dimensions block export and reset recovers.
- `stale-import-validation.json`: delayed older image decode cannot replace a newer selection.

## Gallery

`gallery-test.cjs`: all inline scripts compile with `new Function`, missing script is fatal; new folder exactly once, area `stl`, newest first, label `STL Generators` ordered first. All 468 prior entries byte-for-byte equivalent as objects.

`gallery-browser.cjs`: all 469 cards render; new link opens valid worker-generated production model; no runtime errors. Prior unrelated untracked folder `20261105-7/` was preserved and excluded from this job's commit.
