# Axis Quiet validation — 2026-10-24

Passed on final production geometry:

- App `npm run predeploy` and root `npm run predeploy` (108 apps, zero failed/skipped).
- `npm test`: 78 parameter cases including all 64 range corners, three presets and eight deterministic variations; 24 image/STL-derived cases.
- Exported binary STL independently checked: nonempty, finite coordinates, normalized normals, nondegenerate triangles, welded closed manifold edge incidence two with opposite direction, one connected component, positive signed volume, four annular openings, expected millimeter dimensions and flat bed plane.
- Four torsion-bridge material probes and empty-sector probes, import-vs-built-in CSG isolation outside the central well, four integral root overlaps, frame/flexure minimum sections and simultaneous ±2° sampled/conservative clearance bounds.
- The initial conservative 1.5 mm *test threshold* was stricter than the available 1.435 mm minimum bound at the smallest gap/largest plate thickness. Set a documented 1.3 mm acceptance threshold; actual default and all corners pass. No geometry collision was hidden or repaired.
- Removed unnecessary final-mesh simplification after isolation tests detected a 0.000158 mm³ simplification difference outside the import region. Exact CSG output now passes the tighter isolation comparison without smoothing unrelated surfaces.
- Full real-browser tests repeated against the combined site's production build at local port 5275: PNG/JPEG and ASCII/binary STL file imports; actual downloaded geometry changes for image pixels, threshold, relief depth, crop and STL scale, height, rotation and placement; exact preview/export fingerprints and displayed/exported dimensions.
- Tested unit-confirmation gating, replace/remove/reset, malformed/truncated/open/nonmanifold/concave files, bad type/content, excessive size/pixels/triangles/dimensions, empty silhouette, invalid/empty transforms and unsafe placement; invalid exports disabled and recovery succeeds.
- All presets and four random variations independently parsed and mechanism-checked through actual browser downloads. Undo/redo and portable JSON save/open restored all four import formats. Drag/drop and colour neutrality passed. Single-solid part selection downloaded and verified.
- 390/320 px phone checks: real touch orbit/pinch, phone image/STL file pickers and downloads, no horizontal clipping, collapsing/expanding sheet, all tabs and fixed export action inside viewport. Desktop and phone screenshots saved and visually reviewed.
- Gallery: every inline script compiled using `new Function`; exactly one new first entry with area `stl`; previous 107 entries unchanged; all 108 rendered; STL Generators first; search and runtime checks passed.
- Root deploy output includes matching gallery HTML, exact new app build and all 108 listed app entry points.

Machine-readable results: geometry-validation.json, production-browser-validation.json, extra-validation.json, mobile-sheet-validation.json, gallery-validation.json and root-deploy-validation.json. Public-site smoke test result is recorded separately in public-validation.json after publication.

No physical print, flexural force, feel or fatigue testing was performed. Clearances and an elementary strain indicator are geometric/calculation checks, not proof of physical durability or a guarantee for all printers. TPU 95A calibration and ±2° initial per-axis tilt limits are explicit in the app and README.
