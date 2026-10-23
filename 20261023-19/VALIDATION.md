# Tape Tide validation — 2026-10-23

## Passed locally before publication

- `npm run predeploy`: production build succeeded; locally bundled Manifold WASM, Three.js and React.
- `npm test`: 78 parameter cases and 24 imported-geometry cases. All presets, min/max, all 64 corners and eight deterministic variations. Both STL fixtures and two image methods across default/min/max/presets.
- Independent binary STL parsing: nonempty finite vertices, nondegenerate triangles, unit normals consistent with outward winding, positive connected volume, welded edge incidence exactly two with opposite directed edges, Z=0 bed plane, analytic X/Y dimensions and same-preview bounds.
- Mechanism checks: concentric-arc normal thickness ≥0.799 mm after faceting, full-width clamped root material, import/root separation ≥1 mm, open underside and clear space above free tape, monotone small upward bending envelopes. CSG probes inspect solid material and open air. These checks are not a material or shell-deformation simulation.
- `node browser-test.cjs`: actual PNG and JPEG file-picker imports, ASCII and binary STL imports with millimeter confirmation, downloaded STL checks, pixel/threshold/depth/crop/scale/rotation/height/placement geometry changes, removal/reset recovery, invalid values, missing transforms, empty silhouette, bad content, oversized pixels/files/triangles/dimensions, truncated/open/nonmanifold/concave mesh rejection. Exact preview/export signatures matched.
- `node extra-browser.cjs`: all presets and four randomized results exported and checked, real undo/redo, all four bundled fixtures through portable save/open round trips, sample buttons, drag/drop and geometry-neutral preview colors.
- `node mobile-sheet.cjs`: 320×740 collapse/expand and all tabs, Download STL stays in viewport. Browser suite also checks 390 px viewport, real touch orbit and pinch zoom, PNG/STL imports and downloads on phone emulation. No horizontal clipping or runtime errors.
- Desktop and narrow-mobile screenshots visually reviewed. Large model canvas, readable editor controls, actual preset geometry thumbnails, no marketing hero above editor, reachable export action.
- `node gallery-test.cjs`: every inline script compiled with `new Function`; one new entry with correct folder and `area: stl`; all 98 earlier entries unchanged; 99 total; STL category first; search and rendering error-free.
- Root `npm run predeploy`: 99 app folders copied to combined deploy directory; zero failures or skips; root index present. Archived `/Volumes/ExternalHD/daily_app` was read only and not built or modified.
- Full `browser-test.cjs` repeated against **combined production deploy output** on port 5275: passed. No unexpected remote requests or browser errors.
- Installed dependency audit: zero vulnerabilities after pinning per-app deployment tooling to gh-pages 6.1.1.

## Explicit limits

No physical print, support-removal, force, snap, fatigue or elastic-return test has been performed. TPU 95A and removable supports are required; Soft Reed is the full-size material/support trial. Start at 2 mm tip movement without a crease. Digital watertightness and conservative bending envelopes do not prove tape-spring force response or bistability. The UI and README make this explicit. Arbitrary concave, open or unsupported STL input is rejected; there is no claimed automatic repair. The model is one connected part, so multi-part ZIP/assembly is not applicable.

See JSON reports and test scripts for measured geometry and observed browser behavior. Public deployment verification is recorded separately in `public-validation.json` after publication.
